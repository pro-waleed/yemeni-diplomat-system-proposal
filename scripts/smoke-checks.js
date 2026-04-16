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
    setTimeout() {
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
      getCircularActions,
      getPlanActions,
      handlePlanAction,
      getMeetingActions,
      handleMeetingTaskAction,
      handleReportAction,
      handleCircularAction,
      getSessionUser,
      getMissionName,
      getDepartmentName,
      stages: {
        pendingChief: REPORT_STAGE_PENDING_CHIEF_APPROVAL,
        submitted: REPORT_STAGE_SUBMITTED,
        departmentReview: REPORT_STAGE_UNDER_DEPARTMENT_REVIEW,
        returned: REPORT_STAGE_RETURNED,
        approved: REPORT_STAGE_APPROVED,
        archived: REPORT_STAGE_ARCHIVED
      },
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
    title: `Report ${id}`,
    type: "موضوعي",
    reportFamily: "thematic",
    requestId,
    activityDate: "2026-04-01",
    summary: "Summary",
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

function createCircular({
  id,
  missionId
}) {
  return {
    id,
    title: `Circular ${id}`,
    category: "تنفيذي",
    priority: "متوسطة",
    summary: "Summary",
    body: "Body",
    actionRequired: "Execution note",
    issuedBy: "إدارة التخطيط",
    issuedAt: "2026-04-10",
    dueDate: "2026-04-20",
    status: "نشط",
    targetMissionIds: [missionId],
    readMissionIds: [],
    completedMissionIds: [],
    workflowHistory: [],
    processingLog: [],
    missionResponses: [],
    missionResponseDrafts: [],
    missionReadLog: []
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

  const users = api.getAllUsers();
  const riyadhChief = users.find((item) => item.username === "riyadh");
  const riyadhMember = users.find((item) => item.username === "riyadh_rep");
  const gulfUser = users.find((item) => item.username === gulfDepartment.username);
  const planningUser = users.find((item) => item.username === "planning");

  assert.ok(riyadhChief, "Chief mission user should exist");
  assert.ok(riyadhMember, "Mission member user should exist");
  assert.equal(riyadhChief.missionRole, "chief", "Riyadh account should be the mission chief");
  assert.equal(riyadhMember.missionRole, "member", "Riyadh member account should be a regular mission member");

  const visibilityState = clone(baseState);
  visibilityState.reports = [
    createReport({
      id: "report-riyadh",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: api.stages.submitted
    }),
    createReport({
      id: "report-cairo",
      missionId: cairoMission.id,
      departmentId: cairoMission.departmentId,
      workflowStage: api.stages.approved
    })
  ];
  api.setState(visibilityState);
  assert.equal(api.getVisibleReports(riyadhChief).length, 1, "Mission chief should only see own mission reports");
  assert.equal(api.getVisibleReports(gulfUser).every((report) => report.departmentId === gulfDepartment.id), true, "Department should only see reports from its missions");
  assert.equal(api.getVisibleReports(planningUser).length, 2, "Planning should see all externally visible reports");

  const workflowState = clone(baseState);
  workflowState.reports = [
    createReport({
      id: "report-submitted",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: api.stages.submitted
    }),
    createReport({
      id: "report-review",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: api.stages.departmentReview
    }),
    createReport({
      id: "report-approved",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: api.stages.approved
    }),
    createReport({
      id: "report-returned",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: api.stages.returned
    })
  ];
  api.setState(workflowState);
  const submittedActionsForPlanning = api.getAllowedReportActions(workflowState.reports[0], planningUser);
  assert.equal(submittedActionsForPlanning.some((item) => item.key === "approve"), false, "Planning must not approve before department review");
  const reviewActionsForPlanning = api.getAllowedReportActions(workflowState.reports[1], planningUser);
  assert.equal(reviewActionsForPlanning.some((item) => item.key === "approve"), true, "Planning should approve after department review");
  assert.equal(api.canEditReport(workflowState.reports[2], riyadhChief), false, "Mission chief must not edit approved reports");
  assert.equal(api.canEditReport(workflowState.reports[1], riyadhChief), false, "Mission chief must not edit reports under department review");
  assert.equal(api.canEditReport(workflowState.reports[3], riyadhChief), true, "Mission should edit returned reports");

  const internalMissionState = clone(baseState);
  internalMissionState.reports = [
    createReport({
      id: "report-internal",
      missionId: riyadhMission.id,
      departmentId: riyadhMission.departmentId,
      workflowStage: api.stages.pendingChief
    })
  ];
  api.setState(internalMissionState);
  assert.equal(api.getVisibleReports(riyadhMember).length, 1, "Mission member should see internal report awaiting chief approval");
  assert.equal(api.getVisibleReports(gulfUser).length, 0, "Department should not see reports before chief approval");
  assert.equal(api.getVisibleReports(planningUser).length, 0, "Planning should not see reports before chief approval");

  const chiefApprovalState = clone(baseState);
  chiefApprovalState.sessionUserId = riyadhChief.id;
  chiefApprovalState.reports = [
    {
      ...createReport({
        id: "report-chief-approval",
        missionId: riyadhMission.id,
        departmentId: riyadhMission.departmentId,
        workflowStage: api.stages.pendingChief
      }),
      submittedOn: "",
      preparedByName: "Mission Officer",
      preparedByMemberId: "member-officer-mission-riyadh",
      lastUpdatedByName: "Mission Officer",
      lastUpdatedByMemberId: "member-officer-mission-riyadh"
    }
  ];
  api.setState(chiefApprovalState);
  api.handleReportAction("report-chief-approval", "approve-internal", api.stages.submitted);
  const chiefApprovedReport = api.getState().reports[0];
  assert.equal(chiefApprovedReport.workflowStage, api.stages.submitted, "Chief approval should move report to submitted stage");
  assert.equal(Boolean(chiefApprovedReport.submittedOn), true, "Chief approval should stamp submitted date");
  assert.equal(chiefApprovedReport.chiefApprovedByName, riyadhChief.name, "Chief approval should record approver");
  assert.equal(api.getVisibleReports(gulfUser).length, 1, "Department should see report after chief approval");

  const circularDraftState = clone(baseState);
  circularDraftState.sessionUserId = riyadhMember.id;
  circularDraftState.circulars = [
    createCircular({
      id: "circular-riyadh",
      missionId: riyadhMission.id
    })
  ];
  api.setState(circularDraftState);
  assert.equal(api.getCircularActions(api.getState().circulars[0], riyadhMember).some((item) => item.key === "mark-complete"), true, "Mission member should be able to prepare an internal circular response");
  api.handleCircularAction("circular-riyadh", "mark-complete", {
    executionNote: "Prepared internal execution note",
    evidenceRef: "REF-1"
  });
  const circularAfterMember = api.getState().circulars[0];
  assert.equal(circularAfterMember.completedMissionIds.includes(riyadhMission.id), false, "Internal circular draft should not complete the mission externally");
  assert.equal(circularAfterMember.missionResponseDrafts.length, 1, "Internal circular action should create a pending chief draft");

  const circularApprovalState = clone(api.getState());
  circularApprovalState.sessionUserId = riyadhChief.id;
  api.setState(circularApprovalState);
  api.handleCircularAction("circular-riyadh", "approve-draft", {
    executionNote: "Approved mission execution note",
    evidenceRef: "REF-1"
  });
  const circularAfterChief = api.getState().circulars[0];
  assert.equal(circularAfterChief.completedMissionIds.includes(riyadhMission.id), true, "Chief approval should complete circular officially");
  assert.equal(circularAfterChief.missionResponseDrafts.length, 0, "Chief approval should clear internal draft");
  assert.equal(circularAfterChief.missionResponses[0].approvedBy, riyadhChief.name, "Chief approval should record approver on circular response");

  const planState = clone(baseState);
  planState.sessionUserId = riyadhChief.id;
  planState.plans = [
    {
      id: "plan-other",
      title: "Other Mission Plan",
      ownerType: "mission",
      ownerId: cairoMission.id,
      period: "2026",
      kpi: "Metric",
      progress: 20,
      status: "قيد التنفيذ",
      workflowHistory: []
    },
    {
      id: "plan-own",
      title: "Riyadh Plan",
      ownerType: "mission",
      ownerId: riyadhMission.id,
      period: "2026",
      kpi: "Metric",
      progress: 40,
      status: "قيد التنفيذ",
      workflowHistory: []
    }
  ];
  api.setState(planState);
  api.handlePlanAction("plan-other", "progress-10", 10, "", 0);
  assert.equal(api.getState().plans.find((item) => item.id === "plan-other").progress, 20, "Unauthorized plan updates must not change progress");
  api.handlePlanAction("plan-own", "unknown-action", 0, "", 0);
  assert.equal(api.getState().plans.find((item) => item.id === "plan-own").progress, 40, "Unknown plan actions must not mutate plan");

  const meetingState = clone(baseState);
  meetingState.sessionUserId = riyadhChief.id;
  meetingState.meetings = [
    {
      id: "meeting-1",
      title: "Follow-up Meeting",
      departmentId: riyadhMission.departmentId,
      summary: "Summary",
      tasks: [
        {
          id: "task-complete",
          title: "Completed task",
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
  assert.equal(api.getMeetingActions(api.getState().meetings[0], completedTask, riyadhChief).some((item) => item.nextStatus === "متأخر"), false, "Completed task must not offer delayed transition");
  api.handleMeetingTaskAction("meeting-1", "task-complete", "متأخر");
  assert.equal(api.getState().meetings[0].tasks[0].status, "منجز", "Invalid task transitions must not mutate completed tasks");

  console.log("Smoke checks passed.");
}

run();
