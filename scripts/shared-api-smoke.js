const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const os = require("node:os");
const path = require("node:path");
const fsp = require("node:fs/promises");

function createSharedState(revision = 0) {
  return {
    sharedMeta: {
      revision,
      persistedAt: ""
    },
    departments: [],
    missions: [],
    missionMembers: [],
    coreUsers: [],
    reportRequests: [],
    reports: [],
    circulars: [],
    meetings: [],
    plans: [],
    trainings: [],
    auditLog: []
  };
}

async function waitForHealth(baseUrl, timeoutMs = 5000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) {
        const payload = await response.json();
        if (payload?.ok) return;
      }
    } catch (error) {
      // Server may still be starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error("Timed out waiting for shared API health endpoint.");
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  let payload = null;
  if (text) {
    payload = JSON.parse(text);
  }
  return { response, payload };
}

async function run() {
  const tempRoot = await fsp.mkdtemp(path.join(os.tmpdir(), "yd-shared-api-"));
  const stateFile = path.join(tempRoot, "shared-state.json");
  const port = 8890 + Math.floor(Math.random() * 200);
  const baseUrl = `http://127.0.0.1:${port}`;
  const serverProcess = spawn(process.execPath, [path.join(__dirname, "..", "server", "server.js")], {
    cwd: path.join(__dirname, ".."),
    env: {
      ...process.env,
      HOST: "127.0.0.1",
      PORT: String(port),
      STATE_FILE: stateFile
    },
    stdio: ["ignore", "ignore", "inherit"]
  });

  try {
    await waitForHealth(baseUrl);

    const invalidState = createSharedState(0);
    delete invalidState.missionMembers;
    let result = await requestJson(`${baseUrl}/api/state`, {
      method: "PUT",
      body: JSON.stringify({ state: invalidState })
    });
    assert.equal(result.response.status, 400, "Shared API should reject payloads that do not include missionMembers.");

    const initialState = createSharedState(0);
    initialState.departments.push({ id: "dept-1", name: "Dept" });
    result = await requestJson(`${baseUrl}/api/state`, {
      method: "PUT",
      body: JSON.stringify({ state: initialState })
    });
    assert.equal(result.response.status, 200, "Shared API should accept the initial state at revision 0.");
    assert.equal(result.payload?.state?.sharedMeta?.revision, 1, "Successful writes should increment the shared revision.");

    result = await requestJson(`${baseUrl}/api/state`);
    assert.equal(result.response.status, 200, "Shared API state endpoint should remain readable after the first write.");
    assert.equal(result.payload?.state?.sharedMeta?.revision, 1, "GET /api/state should expose the latest shared revision.");

    const staleState = createSharedState(0);
    staleState.departments.push({ id: "dept-stale", name: "Stale" });
    result = await requestJson(`${baseUrl}/api/state`, {
      method: "PUT",
      body: JSON.stringify({ state: staleState })
    });
    assert.equal(result.response.status, 409, "Shared API should reject stale revisions with a conflict response.");
    assert.equal(result.payload?.state?.sharedMeta?.revision, 1, "Conflict responses should include the latest shared revision.");

    const currentState = result.payload.state;
    currentState.reports.push({ id: "report-1" });
    result = await requestJson(`${baseUrl}/api/state`, {
      method: "PUT",
      body: JSON.stringify({ state: currentState })
    });
    assert.equal(result.response.status, 200, "Shared API should accept writes that are based on the latest revision.");
    assert.equal(result.payload?.state?.sharedMeta?.revision, 2, "Shared revision should continue to advance after the conflict is resolved.");

    console.log("Shared API smoke checks passed.");
  } finally {
    serverProcess.kill();
    await new Promise((resolve) => serverProcess.once("exit", resolve));
    await fsp.rm(tempRoot, { recursive: true, force: true });
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
