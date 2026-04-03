const http = require("node:http");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");

const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(__dirname, "data");
const STATE_FILE = path.join(DATA_DIR, "shared-state.json");
const PUBLIC_FILES = new Set(["/", "/index.html", "/app.js", "/styles.css"]);

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,PUT,OPTIONS"
  });
  response.end(JSON.stringify(payload));
}

function sendText(response, statusCode, text) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(text);
}

async function ensureDataDir() {
  await fsp.mkdir(DATA_DIR, { recursive: true });
}

async function readSharedState() {
  try {
    const content = await fsp.readFile(STATE_FILE, "utf8");
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function writeSharedState(state) {
  await ensureDataDir();
  await fsp.writeFile(STATE_FILE, JSON.stringify(state, null, 2), "utf8");
}

function isValidSharedState(state) {
  if (!state || typeof state !== "object") return false;
  const requiredArrayKeys = [
    "departments",
    "missions",
    "coreUsers",
    "reportRequests",
    "reports",
    "circulars",
    "meetings",
    "plans",
    "trainings",
    "auditLog"
  ];
  return requiredArrayKeys.every((key) => Array.isArray(state[key]));
}

async function readRequestBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 2 * 1024 * 1024) {
      throw new Error("Payload too large");
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

function resolveStaticPath(urlPath) {
  const pathname = urlPath === "/" ? "/index.html" : urlPath;
  if (!PUBLIC_FILES.has(urlPath) && !PUBLIC_FILES.has(pathname)) return null;
  const normalized = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT_DIR, normalized);
  if (!filePath.startsWith(ROOT_DIR)) return null;
  return filePath;
}

async function serveStatic(request, response) {
  const filePath = resolveStaticPath(request.url.split("?")[0]);
  if (!filePath) {
    sendText(response, 404, "Not found");
    return;
  }

  try {
    const stats = await fsp.stat(filePath);
    if (!stats.isFile()) {
      sendText(response, 404, "Not found");
      return;
    }
    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": CONTENT_TYPES[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-store" : "public, max-age=300"
    });
    fs.createReadStream(filePath).pipe(response);
  } catch (error) {
    if (error.code === "ENOENT") {
      sendText(response, 404, "Not found");
      return;
    }
    console.error("Static serve error:", error);
    sendText(response, 500, "Internal server error");
  }
}

async function handleApi(request, response) {
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,PUT,OPTIONS"
    });
    response.end();
    return;
  }

  if (request.url === "/api/health" && request.method === "GET") {
    sendJson(response, 200, {
      ok: true,
      mode: "shared-api",
      storage: fs.existsSync(STATE_FILE) ? "disk" : "bootstrap-pending"
    });
    return;
  }

  if (request.url === "/api/state" && request.method === "GET") {
    const state = await readSharedState();
    sendJson(response, 200, { state });
    return;
  }

  if (request.url === "/api/state" && request.method === "PUT") {
    try {
      const body = await readRequestBody(request);
      const payload = JSON.parse(body || "{}");
      const sharedState = payload?.state;
      if (!isValidSharedState(sharedState)) {
        sendJson(response, 400, { ok: false, error: "Invalid shared state payload." });
        return;
      }
      await writeSharedState(sharedState);
      sendJson(response, 200, { ok: true, persistedAt: new Date().toISOString() });
    } catch (error) {
      console.error("State write error:", error);
      sendJson(response, 500, { ok: false, error: "Failed to persist state." });
    }
    return;
  }

  sendJson(response, 404, { ok: false, error: "API route not found." });
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.url.startsWith("/api/")) {
      await handleApi(request, response);
      return;
    }
    await serveStatic(request, response);
  } catch (error) {
    console.error("Unhandled server error:", error);
    sendText(response, 500, "Internal server error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Yemeni Diplomat local server running at http://${HOST}:${PORT}`);
});
