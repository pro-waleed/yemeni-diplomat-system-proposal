const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

function createNode(id = "") {
  return {
    id,
    innerHTML: "",
    value: "",
    textContent: "",
    hidden: false,
    checked: false,
    dataset: {},
    style: {},
    type: "text",
    classList: {
      add() {},
      remove() {},
      toggle() {},
      contains() {
        return false;
      }
    },
    addEventListener() {},
    removeEventListener() {},
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    focus() {},
    closest() {
      return null;
    }
  };
}

function buildContext() {
  const storage = new Map();
  const nodes = new Map();
  nodes.set("app-root", createNode("app-root"));

  const document = {
    getElementById(id) {
      return nodes.get(id) || null;
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    createElement(tagName = "div") {
      return createNode(tagName);
    },
    body: createNode("body")
  };

  const localStorage = {
    getItem(key) {
      return storage.has(key) ? storage.get(key) : null;
    },
    setItem(key, value) {
      storage.set(key, String(value));
    },
    removeItem(key) {
      storage.delete(key);
    }
  };

  const context = {
    console,
    document,
    localStorage,
    navigator: { userAgent: "node" },
    location: { protocol: "file:" },
    window: { location: { protocol: "file:" } },
    fetch: async () => {
      throw new Error("offline test environment");
    },
    setTimeout(fn) {
      return 0;
    },
    clearTimeout() {},
    setInterval() {
      return 0;
    },
    clearInterval() {},
    Date,
    Math,
    JSON,
    String,
    Number,
    Boolean,
    Array,
    Object,
    RegExp,
    parseInt,
    parseFloat,
    FormData,
    AbortController,
    URL,
    URLSearchParams
  };
  context.globalThis = context;
  vm.createContext(context);
  return context;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadAppHarness() {
  const context = buildContext();
  const code = fs.readFileSync(path.resolve(__dirname, "..", "app.js"), "utf8");
  vm.runInContext(code, context, { filename: "app.js" });
  vm.runInContext(`
    globalThis.__smoke = {
      seedState,
      getAllUsers,
      getVisibleReports,
      getAllowedReportActions,
      canEditReport,
      getPlanActions,
      handlePlanAction,
      getMeetingActions,
      handleMeetingTaskAction,
      getSessionUser,
      getMissionName,
      getDepartmentName,
      getState: () => state,
      setState: (nextState) => {
        state = nextState;
        globalThis.state = state;
      }
    };
  `, context);
  return { context, api: context.__smoke };
}

function createReport({
  id,
  missionId,
  departmentId,
  workflowStage,
  requestId = ""
}) {
  return {
    id,
    missionId,
    departmentId,
    title: `تقرير ${id}`,
    type: "موضوعي",
    reportFamily: "thematic",
    requestId,
    activityDate: "2026-04-01",
    summary: "ملخص",
    beforeGoals: "",
    beforeExpected: "",
    afterResults: "",
    afterRecommendations: "",
    attachmentName: `${id}.pdf`,
    workflowStage,
    submittedOn: "2026-04-02",
    workflowHistory: [],
    qualityScores: { timeliness: 4, completeness: 4, analysis: 4 }
  };
}

function run() {
  const { api } = loadAppHarness();
  const baseState = clone(api.seedState());

  const riyadhMission = baseState.missions.find((item) => item.username === "riyadh");
  const cairoMission = baseState.missions.find((item) => item.username === "cairo");
  const gulfDepartment = baseState.departments.find((item) => item.id === riyadhMission.departmentId);

  assert.ok(riyadhMission, "Riyadh mission should exist in seed data");
  assert.ok(cairoMission, "Cairo mission should exist in seed data");
  assert.ok(gulfDepartment, "Riyadh department should exist in seed data");

  const missionScopedState = clone(baseState);
  missionScopedState.reports = [
    createReport({
      id: "report-riyadh",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: "مرفوع من البعثة"
    }),
    createReport({
      id: "report-cairo",
      missionId: cairoMission.id,
      departmentId: cairoMission.departmentId,
      workflowStage: "معتمد من التخطيط"
    })
  ];
  api.setState(missionScopedState);
  const users = api.getAllUsers();
  const riyadhUser = users.find((item) => item.username === "riyadh");
  const gulfUser = users.find((item) => item.username === gulfDepartment.username);
  const planningUser = users.find((item) => item.username === "planning");

  assert.equal(api.getVisibleReports(riyadhUser).length, 1, "Mission user should only see its own reports");
  assert.equal(api.getVisibleReports(gulfUser).every((report) => report.departmentId === gulfDepartment.id), true, "Department user should only see reports from its department");
  assert.equal(api.getVisibleReports(planningUser).length, 2, "Planning should see all visible reports");

  const workflowState = clone(baseState);
  workflowState.reports = [
    createReport({
      id: "report-submitted",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: "مرفوع من البعثة"
    }),
    createReport({
      id: "report-review",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: "قيد مراجعة الدائرة"
    }),
    createReport({
      id: "report-approved",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: "معتمد من التخطيط"
    }),
    createReport({
      id: "report-returned",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: "أعيد للبعثة للاستكمال"
    })
  ];
  api.setState(workflowState);

  const submittedActionsForPlanning = api.getAllowedReportActions(workflowState.reports[0], planningUser);
  assert.equal(submittedActionsForPlanning.some((item) => item.key === "approve"), false, "Planning must not approve a report before department review");

  const reviewActionsForPlanning = api.getAllowedReportActions(workflowState.reports[1], planningUser);
  assert.equal(reviewActionsForPlanning.some((item) => item.key === "approve"), true, "Planning should approve reports only after department review starts");

  assert.equal(api.canEditReport(workflowState.reports[2], riyadhUser), false, "Mission must not edit an approved report");
  assert.equal(api.canEditReport(workflowState.reports[1], riyadhUser), false, "Mission must not edit a report already under department review");
  assert.equal(api.canEditReport(workflowState.reports[3], riyadhUser), true, "Mission should be able to edit a returned report");

  const planState = clone(baseState);
  planState.sessionUserId = riyadhUser.id;
  planState.plans = [
    {
      id: "plan-other",
      title: "خطة بعثة أخرى",
      ownerType: "mission",
      ownerId: cairoMission.id,
      period: "2026",
      kpi: "مؤشر",
      progress: 20,
      status: "قيد التنفيذ",
      workflowHistory: []
    },
    {
      id: "plan-own",
      title: "خطة الرياض",
      ownerType: "mission",
      ownerId: riyadhMission.id,
      period: "2026",
      kpi: "مؤشر",
      progress: 40,
      status: "قيد التنفيذ",
      workflowHistory: []
    }
  ];
  api.setState(planState);
  api.handlePlanAction("plan-other", "progress-10", 10, "", 0);
  assert.equal(api.getState().plans.find((item) => item.id === "plan-other").progress, 20, "Unauthorized plan updates must not change progress");
  api.handlePlanAction("plan-own", "unknown-action", 0, "", 0);
  assert.equal(api.getState().plans.find((item) => item.id === "plan-own").progress, 40, "Unknown plan actions must not mutate the plan");

  const meetingState = clone(baseState);
  meetingState.sessionUserId = riyadhUser.id;
  meetingState.meetings = [
    {
      id: "meeting-1",
      title: "اجتماع متابعة",
      departmentId: riyadhMission.departmentId,
      summary: "ملخص",
      tasks: [
        {
          id: "task-complete",
          title: "مهمة مكتملة",
          assignee: api.getMissionName(riyadhMission.id),
          status: "منجز",
          priority: "عالية"
        }
      ],
      workflowHistory: []
    }
  ];
  api.setState(meetingState);
  const completedTask = api.getState().meetings[0].tasks[0];
  assert.equal(api.getMeetingActions(api.getState().meetings[0], completedTask, riyadhUser).some((item) => item.nextStatus === "متأخر"), false, "Completed meeting task must not offer a delayed transition");
  api.handleMeetingTaskAction("meeting-1", "task-complete", "متأخر");
  assert.equal(api.getState().meetings[0].tasks[0].status, "منجز", "Invalid meeting task transitions must not mutate a completed task");

  console.log("Smoke checks passed.");
}

run();
