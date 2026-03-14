const STORAGE_KEY = "yemeni_diplomat_system_v3";

const seedState = () => ({
  sessionUserId: null,
  activeView: "dashboard",
  selectedReportId: "report-1",
  loginError: "",
  departments: [
    { id: "dept-arabia", name: "الدائرة الجغرافية لشبه الجزيرة العربية", username: "arabia_dept", password: "Arabia@2026" },
    { id: "dept-africa", name: "الدائرة الجغرافية لأفريقيا", username: "africa_dept", password: "Africa@2026" }
  ],
  missions: [
    { id: "mission-riyadh", name: "بعثة الرياض", departmentId: "dept-arabia", username: "riyadh", password: "Riyadh@2026" },
    { id: "mission-jeddah", name: "بعثة جدة", departmentId: "dept-arabia", username: "jeddah", password: "Jeddah@2026" },
    { id: "mission-cairo", name: "بعثة القاهرة", departmentId: "dept-africa", username: "cairo", password: "Cairo@2026" }
  ],
  coreUsers: [
    { id: "admin-user", role: "admin", name: "مدير النظام", username: "admin", password: "Admin@2026" },
    { id: "planning-user", role: "planning", name: "إدارة التخطيط", username: "planning", password: "Planning@2026" },
    { id: "leadership-user", role: "leadership", name: "القيادة العليا", username: "leadership", password: "Leadership@2026" }
  ],
  reportRequests: [
    {
      id: "request-h1-2026",
      title: "طلب التقارير النصف سنوية 2026",
      type: "نصف سنوي",
      createdBy: "إدارة التخطيط",
      dueDate: "2026-06-30",
      targetMissionIds: ["mission-riyadh", "mission-jeddah", "mission-cairo"],
      completedMissionIds: ["mission-cairo"],
      status: "نشط"
    }
  ],
  reports: [
    {
      id: "report-1",
      missionId: "mission-cairo",
      departmentId: "dept-africa",
      title: "تقرير نصف سنوي عن النشاط السياسي والإعلامي",
      type: "نصف سنوي",
      thematicTrack: "سياسي / إعلامي",
      requestId: "request-h1-2026",
      activityDate: "2026-03-05",
      summary: "ملخص تنفيذي عن الاتصالات الرسمية والفعاليات والتغطية الإعلامية خلال النصف الأول.",
      beforeGoals: "تعزيز الحضور السياسي اليمني وتوسيع التنسيق الإعلامي.",
      beforeExpected: "لقاءات تنسيقية وتغطية إعلامية إيجابية ومذكرات متابعة.",
      afterResults: "تم تنفيذ 6 لقاءات رسمية و3 فعاليات رئيسية وإعداد مذكرة متابعة.",
      afterRecommendations: "جدولة متابعة فنية واستمرار التنسيق الإعلامي خلال الربع القادم.",
      attachmentName: "cairo-half-year-2026.pdf",
      workflowStage: "معتمد من التخطيط",
      createdAt: "2026-03-10 09:20",
      workflowHistory: [
        { actor: "بعثة القاهرة", action: "رفع التقرير", stage: "مرفوع من البعثة", at: "2026-03-10 09:20" },
        { actor: "الدائرة الجغرافية لأفريقيا", action: "بدء مراجعة الدائرة", stage: "قيد مراجعة الدائرة", at: "2026-03-10 11:00" },
        { actor: "إدارة التخطيط", action: "اعتماد التقرير", stage: "معتمد من التخطيط", at: "2026-03-11 08:30" }
      ]
    }
  ],
  circulars: [
    {
      id: "circ-1",
      title: "تحديث قاعدة بيانات التواصل الرسمي",
      issuedBy: "إدارة التخطيط",
      targetMissionIds: ["mission-riyadh", "mission-jeddah", "mission-cairo"],
      dueDate: "2026-03-28",
      status: "نشط",
      readMissionIds: ["mission-cairo"],
      completedMissionIds: [],
      workflowHistory: [
        { actor: "إدارة التخطيط", action: "إصدار التعميم", stage: "نشط", at: "2026-03-15 09:10" }
      ],
      processingLog: []
    }
  ],
  meetings: [
    {
      id: "meet-1",
      title: "اجتماع متابعة التحول الرقمي",
      ownerRole: "planning",
      departmentId: "dept-arabia",
      summary: "مراجعة تقدم الوحدات الأساسية والجاهزية التشغيلية.",
      tasks: [
        { title: "استكمال نماذج التقارير", assignee: "بعثة الرياض", status: "قيد التنفيذ" },
        { title: "مراجعة صلاحيات البعثات", assignee: "الدائرة الجغرافية لشبه الجزيرة العربية", status: "منجز" }
      ]
    }
  ],
  plans: [
    {
      id: "plan-1",
      ownerType: "mission",
      ownerId: "mission-riyadh",
      title: "الخطة التشغيلية لبعثة الرياض 2026",
      period: "سنوية",
      status: "قيد التنفيذ",
      kpi: "نسبة الإنجاز مقابل المستهدف",
      progress: 72
    }
  ],
  trainings: [
    {
      id: "train-1",
      title: "برنامج استخدام النظام",
      audience: "جميع المستخدمين",
      completionTarget: 70,
      completedUsers: 18,
      totalUsers: 26
    },
    {
      id: "train-2",
      title: "إعداد التقارير التحليلية",
      audience: "البعثات والدوائر المعنية",
      completionTarget: 75,
      completedUsers: 11,
      totalUsers: 18
    }
  ],
  auditLog: [
    { id: "audit-1", at: "2026-03-15 09:00", actor: "النظام", action: "تهيئة النسخة التجريبية", target: "منظومة النظام", scope: "وزارة" }
  ],
  alerts: [
    { id: "alert-1", level: "info", title: "بيئة دخول وصلاحيات", text: "سجّل الدخول بأحد الحسابات الافتراضية لتجربة الصلاحيات المختلفة." }
  ]
});

let state = loadState();
const root = document.getElementById("app-root");

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return seedState();
  const parsed = JSON.parse(saved);
  if (!parsed || !Array.isArray(parsed.departments) || !Array.isArray(parsed.missions) || !Array.isArray(parsed.reports)) {
    return seedState();
  }
  parsed.circulars = Array.isArray(parsed.circulars) ? parsed.circulars : seedState().circulars;
  parsed.circulars = parsed.circulars.map((circular) => ({
    ...circular,
    workflowHistory: Array.isArray(circular.workflowHistory) ? circular.workflowHistory : [],
    processingLog: Array.isArray(circular.processingLog) ? circular.processingLog : []
  }));
  parsed.meetings = Array.isArray(parsed.meetings) ? parsed.meetings : seedState().meetings;
  parsed.plans = Array.isArray(parsed.plans) ? parsed.plans : seedState().plans;
  parsed.trainings = Array.isArray(parsed.trainings) ? parsed.trainings : seedState().trainings;
  parsed.auditLog = Array.isArray(parsed.auditLog) ? parsed.auditLog : seedState().auditLog;
  parsed.reports = parsed.reports.map((report) => ({
    ...report,
    workflowStage: report.workflowStage || "مرفوع من البعثة",
    workflowHistory: Array.isArray(report.workflowHistory) ? report.workflowHistory : []
  }));
  return parsed;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState() {
  state = seedState();
  saveState();
  renderApp();
}

function getAllUsers() {
  const core = state.coreUsers.map((user) => ({ ...user }));
  const departments = state.departments.map((dept) => ({
    id: `user-${dept.id}`,
    role: "department",
    name: dept.name,
    username: dept.username,
    password: dept.password,
    departmentId: dept.id
  }));
  const missions = state.missions.map((mission) => ({
    id: `user-${mission.id}`,
    role: "mission",
    name: mission.name,
    username: mission.username,
    password: mission.password,
    missionId: mission.id,
    departmentId: mission.departmentId
  }));
  return [...core, ...departments, ...missions];
}

function getSessionUser() {
  return getAllUsers().find((user) => user.id === state.sessionUserId) || null;
}

function getDepartmentById(id) {
  return state.departments.find((item) => item.id === id) || null;
}

function getMissionById(id) {
  return state.missions.find((item) => item.id === id) || null;
}

function getMissionName(id) {
  return getMissionById(id)?.name || "-";
}

function getDepartmentName(id) {
  return getDepartmentById(id)?.name || "-";
}

function visibleViews(user) {
  if (!user) return [];
  if (user.role === "admin") return ["dashboard", "reports", "circulars", "meetings", "plans", "training", "entities", "requests", "governance", "management"];
  if (user.role === "planning") return ["dashboard", "reports", "circulars", "meetings", "plans", "training", "entities", "requests", "governance"];
  if (user.role === "leadership") return ["dashboard", "reports", "circulars", "meetings", "plans", "entities", "requests", "governance"];
  if (user.role === "department") return ["dashboard", "reports", "circulars", "meetings", "plans", "entities", "requests"];
  return ["dashboard", "reports", "circulars", "plans", "training", "requests"];
}

function getVisibleReports(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") return state.reports;
  if (user.role === "department") return state.reports.filter((report) => report.departmentId === user.departmentId);
  if (user.role === "mission") return state.reports.filter((report) => report.missionId === user.missionId);
  return [];
}

function getVisibleRequests(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") return state.reportRequests;
  if (user.role === "department") {
    const missionIds = state.missions.filter((mission) => mission.departmentId === user.departmentId).map((mission) => mission.id);
    return state.reportRequests.filter((request) => request.targetMissionIds.some((id) => missionIds.includes(id)));
  }
  if (user.role === "mission") return state.reportRequests.filter((request) => request.targetMissionIds.includes(user.missionId));
  return [];
}

function getVisibleCirculars(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") return state.circulars;
  if (user.role === "department") {
    const missionIds = state.missions.filter((mission) => mission.departmentId === user.departmentId).map((mission) => mission.id);
    return state.circulars.filter((circular) => circular.targetMissionIds.some((id) => missionIds.includes(id)));
  }
  return state.circulars.filter((circular) => circular.targetMissionIds.includes(user.missionId));
}

function getVisibleMeetings(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") return state.meetings;
  if (user.role === "department") return state.meetings.filter((meeting) => meeting.departmentId === user.departmentId);
  return state.meetings.filter((meeting) => meeting.tasks.some((task) => task.assignee === getMissionName(user.missionId)));
}

function getVisiblePlans(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") return state.plans;
  if (user.role === "department") {
    const missionIds = state.missions.filter((mission) => mission.departmentId === user.departmentId).map((mission) => mission.id);
    return state.plans.filter((plan) => plan.ownerType === "department" ? plan.ownerId === user.departmentId : missionIds.includes(plan.ownerId));
  }
  return state.plans.filter((plan) => plan.ownerType === "mission" && plan.ownerId === user.missionId);
}

function getVisibleTrainings(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") return state.trainings;
  if (user.role === "department") return state.trainings;
  return state.trainings.filter((training) => training.audience === "جميع المستخدمين" || training.audience.includes("البعثات"));
}

function getCircularCompletion(circular) {
  const total = circular.targetMissionIds.length;
  const read = circular.readMissionIds.length;
  const completed = circular.completedMissionIds.length;
  return {
    total,
    read,
    completed,
    unread: total - read,
    pending: total - completed,
    readPercent: total ? Math.round((read / total) * 100) : 0,
    completePercent: total ? Math.round((completed / total) * 100) : 0
  };
}

function getCircularActions(circular, user = getSessionUser()) {
  if (!user) return [];
  const actions = [];
  if (user.role === "mission" && circular.targetMissionIds.includes(user.missionId)) {
    if (!circular.readMissionIds.includes(user.missionId)) {
      actions.push({ key: "mark-read", label: "تأكيد القراءة" });
    }
    if (!circular.completedMissionIds.includes(user.missionId)) {
      actions.push({ key: "mark-complete", label: "تأكيد الإنجاز" });
    }
  }
  if ((user.role === "planning" || user.role === "admin") && circular.status === "نشط") {
    actions.push({ key: "close", label: "إغلاق التعميم" });
  }
  return actions;
}

function getCompletion(request) {
  const done = request.completedMissionIds.length;
  const total = request.targetMissionIds.length;
  return { done, total, pending: total - done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function stageTone(stage) {
  if (stage === "مغلق ومؤرشف" || stage === "معتمد من التخطيط") return "success";
  if (stage === "قيد مراجعة الدائرة") return "warning";
  if (stage === "أعيد للبعثة للاستكمال") return "danger";
  return "info";
}

function addAlert(level, title, text) {
  state.alerts.unshift({ id: `alert-${Date.now()}`, level, title, text });
  state.alerts = state.alerts.slice(0, 8);
}

function logAudit(actor, action, target, scope) {
  state.auditLog.unshift({
    id: `audit-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    at: new Date().toLocaleString("ar-YE"),
    actor,
    action,
    target,
    scope
  });
  state.auditLog = state.auditLog.slice(0, 50);
}

function addWorkflowEntry(report, actor, action, stage) {
  report.workflowHistory.unshift({
    actor,
    action,
    stage,
    at: new Date().toLocaleString("ar-YE")
  });
}

function getAllowedReportActions(report, user = getSessionUser()) {
  if (!user) return [];
  const actions = [];
  if (user.role === "mission" && user.missionId === report.missionId && report.workflowStage === "أعيد للبعثة للاستكمال") {
    actions.push({ key: "resubmit", label: "إعادة رفع التقرير", nextStage: "مرفوع من البعثة" });
  }
  if (user.role === "department" && user.departmentId === report.departmentId && report.workflowStage === "مرفوع من البعثة") {
    actions.push({ key: "review", label: "بدء مراجعة الدائرة", nextStage: "قيد مراجعة الدائرة" });
    actions.push({ key: "return", label: "إعادة للبعثة", nextStage: "أعيد للبعثة للاستكمال" });
  }
  if ((user.role === "planning" || user.role === "admin") && (report.workflowStage === "قيد مراجعة الدائرة" || report.workflowStage === "مرفوع من البعثة")) {
    actions.push({ key: "approve", label: "اعتماد من التخطيط", nextStage: "معتمد من التخطيط" });
    actions.push({ key: "return", label: "إعادة للبعثة", nextStage: "أعيد للبعثة للاستكمال" });
  }
  if ((user.role === "planning" || user.role === "admin") && report.workflowStage === "معتمد من التخطيط") {
    actions.push({ key: "archive", label: "إغلاق وأرشفة", nextStage: "مغلق ومؤرشف" });
  }
  return actions;
}

function renderApp() {
  const user = getSessionUser();
  root.innerHTML = user ? renderSystem(user) : renderLogin();
  bindEvents();
}

function renderLogin() {
  return `
    <div class="login-shell">
      <section class="login-brand">
        <div class="badge">YD</div>
        <h1 class="title">النظام الدبلوماسي المتكامل</h1>
        <p class="muted">ابدأ من شاشة الدخول كما في الأنظمة المؤسسية الحقيقية، ثم ستظهر لكل مستخدم الشاشات والصلاحيات المناسبة لدوره فقط.</p>
        <div class="credentials-list">
          <div class="cred-card">
            <strong>مدير النظام</strong>
            <span class="muted">اسم المستخدم: admin | كلمة المرور: Admin@2026</span>
          </div>
          <div class="cred-card">
            <strong>إدارة التخطيط</strong>
            <span class="muted">اسم المستخدم: planning | كلمة المرور: Planning@2026</span>
          </div>
          <div class="cred-card">
            <strong>القيادة العليا</strong>
            <span class="muted">اسم المستخدم: leadership | كلمة المرور: Leadership@2026</span>
          </div>
          <div class="cred-card">
            <strong>دائرة جغرافية</strong>
            <span class="muted">اسم المستخدم: arabia_dept | كلمة المرور: Arabia@2026</span>
          </div>
          <div class="cred-card">
            <strong>بعثة الرياض</strong>
            <span class="muted">اسم المستخدم: riyadh | كلمة المرور: Riyadh@2026</span>
          </div>
        </div>
      </section>
      <section class="login-form-wrap">
        <div class="form-card">
          <h2 class="section-title">تسجيل الدخول</h2>
          <p class="muted">سجّل الدخول بأحد الحسابات الافتراضية أو بالحسابات التي ينشئها مدير النظام.</p>
          <form id="login-form" class="form-grid">
            <label class="field full">
              <span>اسم المستخدم</span>
              <input name="username" required>
            </label>
            <label class="field full">
              <span>كلمة المرور</span>
              <input type="password" name="password" required>
            </label>
            <div class="field full">
              <button class="btn primary" type="submit">دخول إلى النظام</button>
            </div>
          </form>
          ${state.loginError ? `<div class="error-box">${state.loginError}</div>` : ""}
        </div>
      </section>
    </div>
  `;
}

function renderSystem(user) {
  const labels = {
    dashboard: "لوحة القيادة",
    reports: "التقارير",
    circulars: "التعاميم",
    meetings: "الاجتماعات",
    plans: "الخطط",
    training: "التدريب",
    entities: "ملفات الجهات",
    requests: "طلبات التقارير",
    governance: "الحوكمة",
    management: "إدارة الكيانات"
  };
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="sidebar-top">
          <div class="badge">YD</div>
          <div class="user-box">
            <strong>${user.name}</strong>
            <p>${roleLabel(user)}</p>
          </div>
          <div class="menu-list">
            ${visibleViews(user).map((view) => `<button class="nav-item ${state.activeView === view ? "active" : ""}" data-view="${view}">${labels[view]}</button>`).join("")}
          </div>
        </div>
        <div class="sidebar-footer">
          <button class="btn secondary" id="logout-btn">تسجيل الخروج</button>
          <button class="btn secondary" id="reset-btn">إعادة ضبط التجربة</button>
        </div>
      </aside>
      <main class="main">
        ${renderPage(user)}
      </main>
    </div>
  `;
}

function renderPage(user) {
  if (state.activeView === "dashboard") return renderDashboard(user);
  if (state.activeView === "reports") return renderReportsPage(user);
  if (state.activeView === "circulars") return renderCircularsPage(user);
  if (state.activeView === "meetings") return renderMeetingsPage(user);
  if (state.activeView === "plans") return renderPlansPage(user);
  if (state.activeView === "training") return renderTrainingPage(user);
  if (state.activeView === "entities") return renderEntitiesPage(user);
  if (state.activeView === "requests") return renderRequestsPage(user);
  if (state.activeView === "governance") return renderGovernancePage(user);
  if (state.activeView === "management") return renderManagementPage(user);
  return renderDashboard(user);
}

function renderDashboard(user) {
  const reports = getVisibleReports(user);
  const requests = getVisibleRequests(user);
  const activeRequests = requests.filter((item) => item.status === "نشط");
  const pending = activeRequests.reduce((sum, request) => sum + getCompletion(request).pending, 0);
  const visibleCirculars = getVisibleCirculars(user);
  const visiblePlans = getVisiblePlans(user);
  const visibleMeetings = getVisibleMeetings(user);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">لوحة حسب الدور</span>
          <h1 class="page-title">لوحة القيادة</h1>
          <p class="muted">تظهر هنا المؤشرات الأساسية المناسبة لحساب ${user.name}.</p>
        </div>
      </div>
    </section>
    <section class="hero-strip">
      <div class="panel">
        <span class="tag info">موجز</span>
        <h2 class="section-title">بيئة دخول وصلاحيات متدرجة</h2>
        <p class="muted">مدير النظام يمكنه إنشاء دوائر وبعثات مع بيانات دخول خاصة بها، ثم تظهر لكل جهة الشاشات المسموح بها فقط.</p>
      </div>
      <div class="stats-grid">
        <div class="metric-card"><span>التقارير الظاهرة</span><strong>${reports.length}</strong></div>
        <div class="metric-card"><span>التعاميم النشطة</span><strong>${visibleCirculars.length}</strong></div>
        <div class="metric-card"><span>الخطط في النطاق</span><strong>${visiblePlans.length}</strong></div>
      </div>
    </section>
    <section class="metrics-grid">
      ${[
        { title: "طلبات التقارير النشطة", value: activeRequests.length, note: `${pending} بعثة غير منجزة` },
        { title: "الاجتماعات المرئية", value: visibleMeetings.length, note: "محاضر ومهام متابعة" },
        { title: "نسبة إنجاز الخطط", value: visiblePlans.length ? `${Math.round(visiblePlans.reduce((s, p) => s + p.progress, 0) / visiblePlans.length)}%` : "0%", note: "معدل تقريبي" }
      ].map((item) => `
        <article class="metric-card">
          <span>${item.title}</span>
          <strong>${item.value}</strong>
          <div class="tag info">${item.note}</div>
        </article>
      `).join("")}
      ${activeRequests.map((request) => {
        const c = getCompletion(request);
        return `
          <article class="metric-card">
            <span>${request.title}</span>
            <strong>${c.percent}%</strong>
            <div class="tag ${c.pending ? "warning" : "success"}">${c.done}/${c.total}</div>
          </article>
        `;
      }).join("") || `<div class="panel empty">لا توجد طلبات نشطة في نطاق هذا الحساب.</div>`}
    </section>
  `;
}

function renderReportsPage(user) {
  const reports = getVisibleReports(user);
  const selected = reports.find((item) => item.id === state.selectedReportId) || reports[0] || null;
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">وحدة التقارير</span>
          <h1 class="page-title">التقارير</h1>
          <p class="muted">${user.role === "mission" ? "يمكنك رفع تقرير نشاط من حساب البعثة." : "يمكنك مراجعة التقارير التي تقع ضمن صلاحياتك."}</p>
        </div>
      </div>
    </section>
    <section class="content-grid">
      <div class="panel">
        ${user.role === "mission" ? renderMissionReportForm(user) : ""}
        <div class="detail-card">
          <div class="section-title">سجل التقارير</div>
          <div class="record-list">
            ${reports.map((report) => `
              <article class="record-card ${selected && selected.id === report.id ? "selected" : ""}" data-report-id="${report.id}">
                <div class="record-top">
                  <div>
                    <strong class="record-title">${report.title}</strong>
                    <div class="record-meta">${getMissionName(report.missionId)} | ${report.type}</div>
                  </div>
                  <span class="tag ${stageTone(report.workflowStage)}">${report.workflowStage}</span>
                </div>
                <p class="record-desc">${report.summary}</p>
              </article>
            `).join("") || `<div class="empty">لا توجد تقارير بعد.</div>`}
          </div>
        </div>
      </div>
      <div class="panel">
        ${selected ? renderReportDetails(selected, user) : `<div class="empty">اختر تقريرًا لعرض التفاصيل.</div>`}
      </div>
    </section>
  `;
}

function renderMissionReportForm(user) {
  const requests = getVisibleRequests(user).filter((item) => item.status === "نشط");
  return `
    <div class="detail-card">
      <div class="section-title">رفع تقرير نشاط</div>
      <form id="report-form" class="form-grid">
        <label class="field">
          <span>عنوان التقرير</span>
          <input name="title" required>
        </label>
        <label class="field">
          <span>نوع التقرير</span>
          <select name="type">
            <option>نشاط</option>
            <option>نصف سنوي</option>
            <option>سنوي</option>
            <option>موضوعي</option>
          </select>
        </label>
        <label class="field">
          <span>المسار الموضوعي</span>
          <select name="thematicTrack">
            <option>سياسي</option>
            <option>اقتصادي</option>
            <option>إعلامي</option>
            <option>ثقافي</option>
            <option>قنصلي</option>
          </select>
        </label>
        <label class="field">
          <span>الطلب المرتبط</span>
          <select name="requestId">
            <option value="">بدون ربط</option>
            ${requests.map((request) => `<option value="${request.id}">${request.title}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>تاريخ النشاط</span>
          <input type="date" name="activityDate" required>
        </label>
        <label class="field">
          <span>اسم المرفق</span>
          <input name="attachmentName" required>
        </label>
        <label class="field full">
          <span>الأهداف قبل الفعالية</span>
          <textarea name="beforeGoals" required></textarea>
        </label>
        <label class="field full">
          <span>المتوقع قبل الفعالية</span>
          <textarea name="beforeExpected" required></textarea>
        </label>
        <label class="field full">
          <span>النتائج بعد الفعالية</span>
          <textarea name="afterResults" required></textarea>
        </label>
        <label class="field full">
          <span>التوصيات بعد الفعالية</span>
          <textarea name="afterRecommendations" required></textarea>
        </label>
        <label class="field full">
          <span>الملخص التنفيذي</span>
          <textarea name="summary" required></textarea>
        </label>
        <div class="field full">
          <button class="btn primary" type="submit">رفع التقرير</button>
        </div>
      </form>
    </div>
  `;
}

function renderReportDetails(report, user) {
  const request = state.reportRequests.find((item) => item.id === report.requestId);
  const actions = getAllowedReportActions(report, user);
  return `
    <div class="detail-list">
      <div class="detail-card">
        <div class="section-title">${report.title}</div>
        <div class="detail-row"><span>البعثة</span><span>${getMissionName(report.missionId)}</span></div>
        <div class="detail-row"><span>الدائرة</span><span>${getDepartmentName(report.departmentId)}</span></div>
        <div class="detail-row"><span>مرحلة الاعتماد</span><span class="tag ${stageTone(report.workflowStage)}">${report.workflowStage}</span></div>
        <div class="detail-row"><span>الطلب المرتبط</span><span>${request ? request.title : "لا يوجد"}</span></div>
      </div>
      <div class="detail-card">
        <div class="section-title">قبل الفعالية</div>
        <p class="detail-note"><strong>الأهداف:</strong> ${report.beforeGoals}</p>
        <p class="detail-note"><strong>المتوقع:</strong> ${report.beforeExpected}</p>
      </div>
      <div class="detail-card">
        <div class="section-title">بعد الفعالية</div>
        <p class="detail-note"><strong>النتائج:</strong> ${report.afterResults}</p>
        <p class="detail-note"><strong>التوصيات:</strong> ${report.afterRecommendations}</p>
      </div>
      <div class="detail-card">
        <div class="section-title">سجل الاعتماد</div>
        <div class="detail-list">
          ${report.workflowHistory.map((item) => `
            <div class="timeline-entry">
              <strong>${item.action}</strong>
              <span>${item.actor}</span>
              <span>${item.stage}</span>
              <span>${item.at}</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${actions.length ? `
        <div class="detail-card">
          <div class="section-title">إجراءات متاحة</div>
          <div class="inline-actions">
            ${actions.map((action) => `<button class="btn primary report-action" data-report-id="${report.id}" data-stage="${action.nextStage}" data-action="${action.key}">${action.label}</button>`).join("")}
          </div>
        </div>
      ` : ""}
    </div>
  `;
}

function renderCircularsPage(user) {
  const circulars = getVisibleCirculars(user);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">التعاميم</span>
          <h1 class="page-title">إدارة التعاميم</h1>
          <p class="muted">إصدار وتتبع التعاميم وقراءة الجهات المستهدفة ونسب الإنجاز والتأخر.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        ${(user.role === "planning" || user.role === "admin") ? `
          <div class="detail-card">
            <div class="section-title">إصدار تعميم جديد</div>
            <form id="circular-form" class="form-grid">
              <label class="field">
                <span>عنوان التعميم</span>
                <input name="title" required>
              </label>
              <label class="field">
                <span>الموعد النهائي</span>
                <input type="date" name="dueDate" required>
              </label>
              <label class="field full">
                <span>البعثات المستهدفة</span>
                <div class="checkbox-grid">
                  ${state.missions.map((mission) => `
                    <label class="check-item">
                      <input type="checkbox" name="missionId" value="${mission.id}" checked>
                      <span>${mission.name}</span>
                    </label>
                  `).join("")}
                </div>
              </label>
              <div class="field full">
                <button class="btn primary" type="submit">إصدار التعميم</button>
              </div>
            </form>
          </div>
        ` : ""}
        <div class="section-title">سجل التعاميم</div>
        <div class="detail-list">
          ${circulars.map((circular) => {
            const stats = getCircularCompletion(circular);
            const actions = getCircularActions(circular, user);
            return `
            <div class="detail-card">
              <div class="record-top">
                <div>
                  <strong>${circular.title}</strong>
                  <div class="record-meta">الموعد النهائي ${formatDate(circular.dueDate)}</div>
                </div>
                <span class="tag ${circular.status === "نشط" ? "warning" : "success"}">${circular.status}</span>
              </div>
              <div class="detail-row"><span>قرأ التعميم</span><span>${stats.read}/${stats.total}</span></div>
              <div class="detail-row"><span>أنجز التعميم</span><span>${stats.completed}/${stats.total}</span></div>
              <div class="progress"><span style="width:${stats.completePercent}%"></span></div>
              <p class="record-desc">المتبقي ${stats.pending} بعثات | غير المقروء ${stats.unread}</p>
              ${actions.length ? `<div class="inline-actions">${actions.map((action) => `<button class="btn primary circular-action" data-circular-id="${circular.id}" data-action="${action.key}">${action.label}</button>`).join("")}</div>` : ""}
            </div>
          `;
          }).join("") || `<div class="empty">لا توجد تعاميم في نطاق هذا الحساب.</div>`}
        </div>
      </div>
      <div class="panel">
        <div class="section-title">المسار التشغيلي</div>
        <div class="detail-list">
          ${circulars.map((circular) => `
            <div class="detail-card">
              <strong>${circular.title}</strong>
              <div class="detail-list">
                ${(circular.workflowHistory || []).slice(0, 4).map((item) => `
                  <div class="timeline-entry">
                    <strong>${item.action}</strong>
                    <span>${item.actor}</span>
                    <span>${item.stage}</span>
                    <span>${item.at}</span>
                  </div>
                `).join("") || '<div class="empty">لا يوجد سجل حركة.</div>'}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderMeetingsPage(user) {
  const meetings = getVisibleMeetings(user);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">الاجتماعات</span>
          <h1 class="page-title">محاضر الاجتماعات والمهام</h1>
          <p class="muted">تحويل المحاضر إلى مهام ومتابعة حالات الإنجاز والتأخر وفق ما ورد في الوثيقة.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${meetings.map((meeting) => `
        <div class="panel">
          <div class="section-title">${meeting.title}</div>
          <p class="muted">${meeting.summary}</p>
          <div class="detail-list">
            ${meeting.tasks.map((task) => `<div class="detail-row"><span>${task.title}</span><span class="tag ${task.status === "منجز" ? "success" : "warning"}">${task.assignee} - ${task.status}</span></div>`).join("")}
          </div>
        </div>
      `).join("") || `<div class="panel empty">لا توجد اجتماعات في نطاق هذا الحساب.</div>`}
    </section>
  `;
}

function renderPlansPage(user) {
  const plans = getVisiblePlans(user);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">الخطط</span>
          <h1 class="page-title">الخطط التشغيلية ومؤشرات الأداء</h1>
          <p class="muted">ربط الخطط بالمستهدفات والمؤشرات ونسب الإنجاز الفصلية والسنوية.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${plans.map((plan) => `
        <div class="panel">
          <div class="record-top">
            <div>
              <strong>${plan.title}</strong>
              <div class="record-meta">${plan.period} | ${plan.kpi}</div>
            </div>
            <span class="tag ${plan.status === "قيد التنفيذ" ? "warning" : "success"}">${plan.status}</span>
          </div>
          <div class="progress"><span style="width:${plan.progress}%"></span></div>
          <p class="muted">نسبة الإنجاز الحالية: ${plan.progress}%</p>
        </div>
      `).join("") || `<div class="panel empty">لا توجد خطط في نطاق هذا الحساب.</div>`}
    </section>
  `;
}

function renderTrainingPage(user) {
  const trainings = getVisibleTrainings(user);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">التدريب</span>
          <h1 class="page-title">منصة التدريب</h1>
          <p class="muted">سجل تدريبي للمستخدمين وبرامج إلزامية وتخصصية كما نصت الوثيقة.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${trainings.map((training) => {
        const percent = training.totalUsers ? Math.round((training.completedUsers / training.totalUsers) * 100) : 0;
        return `
          <div class="panel">
            <div class="section-title">${training.title}</div>
            <div class="record-meta">${training.audience}</div>
            <div class="progress"><span style="width:${percent}%"></span></div>
            <p class="muted">المكتملون ${training.completedUsers} من أصل ${training.totalUsers} | الهدف ${training.completionTarget}%</p>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function renderEntitiesPage(user) {
  const missions = user.role === "department"
    ? state.missions.filter((mission) => mission.departmentId === user.departmentId)
    : state.missions;
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">ملفات الجهات</span>
          <h1 class="page-title">ملفات البعثات والدوائر</h1>
          <p class="muted">ملف موحد لكل بعثة أو دائرة يشمل الخطط والتقارير والتعاميم والاجتماعات والتدريب.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${missions.map((mission) => `
        <div class="panel">
          <div class="section-title">${mission.name}</div>
          <div class="detail-row"><span>الدائرة التابعة</span><span>${getDepartmentName(mission.departmentId)}</span></div>
          <div class="detail-row"><span>عدد التقارير</span><span>${state.reports.filter((report) => report.missionId === mission.id).length}</span></div>
          <div class="detail-row"><span>عدد التعاميم</span><span>${state.circulars.filter((circular) => circular.targetMissionIds.includes(mission.id)).length}</span></div>
          <div class="detail-row"><span>حالة الخطة</span><span>${state.plans.find((plan) => plan.ownerId === mission.id)?.status || "لا توجد خطة"}</span></div>
        </div>
      `).join("")}
    </section>
  `;
}

function renderGovernancePage(user) {
  const roleRows = [
    ["مدير النظام", "وزارة", "إدارة المستخدمين والكيانات والسياسات وسجل التدقيق"],
    ["إدارة التخطيط", "وزارة", "إصدار طلبات التقارير واعتمادها ومتابعة الخطط والتعاميم"],
    ["القيادة العليا", "وزارة", "لوحات قيادة وقراءة موسعة للملخصات والمؤشرات"],
    ["مدير دائرة", "دائرة", "متابعة البعثات التابعة ومراجعة التقارير والاجتماعات والخطط"],
    ["بعثة", "بعثة", "رفع التقارير واستلام التعاميم وتنفيذ الخطط والمتطلبات التشغيلية"]
  ];

  const auditRows = state.auditLog.slice(0, 12).map((entry) => `
    <div class="detail-row">
      <span>${entry.at}</span>
      <span>${entry.actor}</span>
      <span>${entry.action}</span>
      <span>${entry.target}</span>
    </div>
  `).join("");

  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">الحوكمة والصلاحيات</span>
          <h1 class="page-title">الحوكمة وسجل التدقيق</h1>
          <p class="muted">تمت إضافة مصفوفة أدوار عملية وسجل تدقيق يعكس متطلبات الوثيقة بشأن الحوكمة والتتبع.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        <div class="section-title">مصفوفة الأدوار والصلاحيات</div>
        <div class="detail-list">
          ${roleRows.map((row) => `
            <div class="detail-card">
              <strong>${row[0]}</strong>
              <div class="detail-row"><span>النطاق</span><span>${row[1]}</span></div>
              <div class="detail-row"><span>أبرز الصلاحيات</span><span>${row[2]}</span></div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="section-title">سجل التدقيق الأخير</div>
        <div class="detail-list">
          ${auditRows || '<div class="empty">لا توجد أحداث تدقيق بعد.</div>'}
        </div>
      </div>
    </section>
  `;
}

function renderRequestsPage(user) {
  const requests = getVisibleRequests(user);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">متابعة الإنجاز</span>
          <h1 class="page-title">طلبات التقارير</h1>
          <p class="muted">${user.role === "planning" || user.role === "admin" ? "يمكنك إصدار طلبات جديدة ومتابعة الإنجاز." : "يمكنك متابعة الطلبات الواقعة ضمن نطاقك."}</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${(user.role === "planning" || user.role === "admin") ? renderRequestForm() : ""}
      <div class="panel">
        <div class="section-title">سجل الطلبات</div>
        <div class="detail-list">
          ${requests.map((request) => {
            const c = getCompletion(request);
            return `
              <div class="detail-card">
                <div class="record-top">
                  <div>
                    <strong>${request.title}</strong>
                    <div class="record-meta">${request.type} | الموعد ${formatDate(request.dueDate)}</div>
                  </div>
                  <span class="tag ${request.status === "نشط" ? "warning" : "success"}">${request.status}</span>
                </div>
                <div class="progress"><span style="width:${c.percent}%"></span></div>
                <p class="record-desc">أنجزت ${c.done} بعثة ولم تنجز ${c.pending} بعثة من أصل ${c.total}.</p>
                <div class="detail-list">
                  ${request.targetMissionIds.map((missionId) => `
                    <div class="detail-row">
                      <span>${getMissionName(missionId)}</span>
                      <span class="tag ${request.completedMissionIds.includes(missionId) ? "success" : "warning"}">${request.completedMissionIds.includes(missionId) ? "منجز" : "لم ينجز"}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("") || `<div class="empty">لا توجد طلبات ظاهرة لهذا الحساب.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderRequestForm() {
  return `
    <div class="panel">
      <div class="section-title">إصدار طلب تقرير جديد</div>
      <form id="request-form" class="form-grid">
        <label class="field">
          <span>عنوان الطلب</span>
          <input name="title" required>
        </label>
        <label class="field">
          <span>نوع الطلب</span>
          <select name="type">
            <option>سنوي</option>
            <option>نصف سنوي</option>
          </select>
        </label>
        <label class="field full">
          <span>الموعد النهائي</span>
          <input type="date" name="dueDate" required>
        </label>
        <label class="field full">
          <span>البعثات المستهدفة</span>
          <div class="checkbox-grid">
            ${state.missions.map((mission) => `
              <label class="check-item">
                <input type="checkbox" name="missionId" value="${mission.id}" checked>
                <span>${mission.name} - ${getDepartmentName(mission.departmentId)}</span>
              </label>
            `).join("")}
          </div>
        </label>
        <div class="field full">
          <button class="btn primary" type="submit">إصدار الطلب</button>
        </div>
      </form>
    </div>
  `;
}

function renderManagementPage(user) {
  if (user.role !== "admin") {
    return `<section class="panel empty">هذه الشاشة متاحة فقط لمدير النظام.</section>`;
  }
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">إدارة الكيانات</span>
          <h1 class="page-title">الدوائر والبعثات</h1>
          <p class="muted">يمكن لمدير النظام إضافة دائرة جديدة أو بعثة جديدة، مع التأكد من تبعية كل بعثة لدائرة محددة وإنشاء بيانات دخولها.</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        <div class="section-title">إضافة دائرة</div>
        <form id="department-form" class="form-grid">
          <label class="field">
            <span>اسم الدائرة</span>
            <input name="name" required>
          </label>
          <label class="field">
            <span>اسم المستخدم</span>
            <input name="username" required>
          </label>
          <label class="field full">
            <span>كلمة المرور</span>
            <input name="password" required>
          </label>
          <div class="field full">
            <button class="btn primary" type="submit">إضافة الدائرة</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <div class="section-title">إضافة بعثة</div>
        <form id="mission-form" class="form-grid">
          <label class="field">
            <span>اسم البعثة</span>
            <input name="name" required>
          </label>
          <label class="field">
            <span>الدائرة التابعة</span>
            <select name="departmentId" required>
              ${state.departments.map((department) => `<option value="${department.id}">${department.name}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>اسم المستخدم</span>
            <input name="username" required>
          </label>
          <label class="field">
            <span>كلمة المرور</span>
            <input name="password" required>
          </label>
          <div class="field full">
            <button class="btn primary" type="submit">إضافة البعثة</button>
          </div>
        </form>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        <div class="section-title">الدوائر الحالية</div>
        <div class="detail-list">
          ${state.departments.map((department) => `
            <div class="detail-card">
              <strong>${department.name}</strong>
              <div class="detail-row"><span>اسم المستخدم</span><span>${department.username}</span></div>
              <div class="detail-row"><span>عدد البعثات التابعة</span><span>${state.missions.filter((mission) => mission.departmentId === department.id).length}</span></div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="section-title">البعثات الحالية</div>
        <div class="detail-list">
          ${state.missions.map((mission) => `
            <div class="detail-card">
              <strong>${mission.name}</strong>
              <div class="detail-row"><span>الدائرة التابعة</span><span>${getDepartmentName(mission.departmentId)}</span></div>
              <div class="detail-row"><span>اسم المستخدم</span><span>${mission.username}</span></div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function roleLabel(user) {
  if (user.role === "admin") return "مدير النظام";
  if (user.role === "planning") return "إدارة التخطيط";
  if (user.role === "leadership") return "القيادة العليا";
  if (user.role === "department") return `مدير دائرة - ${getDepartmentName(user.departmentId)}`;
  return `بعثة - ${getMissionName(user.missionId)}`;
}

function bindEvents() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.view;
      saveState();
      renderApp();
    });
  });

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", () => {
    const currentUser = getSessionUser();
    if (currentUser) {
      logAudit(currentUser.name, "تسجيل الخروج", "جلسة النظام", currentUser.role === "mission" ? getMissionName(currentUser.missionId) : currentUser.role === "department" ? getDepartmentName(currentUser.departmentId) : "وزارة");
    }
    state.sessionUserId = null;
    state.activeView = "dashboard";
    saveState();
    renderApp();
  });

  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", resetState);

  const reportForm = document.getElementById("report-form");
  if (reportForm) reportForm.addEventListener("submit", handleReportSubmit);

  const requestForm = document.getElementById("request-form");
  if (requestForm) requestForm.addEventListener("submit", handleRequestSubmit);

  const circularForm = document.getElementById("circular-form");
  if (circularForm) circularForm.addEventListener("submit", handleCircularSubmit);

  const departmentForm = document.getElementById("department-form");
  if (departmentForm) departmentForm.addEventListener("submit", handleDepartmentSubmit);

  const missionForm = document.getElementById("mission-form");
  if (missionForm) missionForm.addEventListener("submit", handleMissionSubmit);

  document.querySelectorAll("[data-report-id]").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedReportId = card.dataset.reportId;
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll(".report-action").forEach((button) => {
    button.addEventListener("click", () => {
      handleReportAction(button.dataset.reportId, button.dataset.action, button.dataset.stage);
    });
  });

  document.querySelectorAll(".circular-action").forEach((button) => {
    button.addEventListener("click", () => {
      handleCircularAction(button.dataset.circularId, button.dataset.action);
    });
  });
}

function handleLogin(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim();
  const password = String(form.get("password")).trim();
  const user = getAllUsers().find((item) => item.username === username && item.password === password);
  if (!user) {
    state.loginError = "بيانات الدخول غير صحيحة.";
    saveState();
    renderApp();
    return;
  }
  state.loginError = "";
  state.sessionUserId = user.id;
  state.activeView = "dashboard";
  logAudit(user.name, "تسجيل الدخول", "جلسة النظام", user.role === "mission" ? getMissionName(user.missionId) : user.role === "department" ? getDepartmentName(user.departmentId) : "وزارة");
  saveState();
  renderApp();
}

function handleReportSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  const form = new FormData(event.currentTarget);
  const report = {
    id: `report-${Date.now()}`,
    missionId: user.missionId,
    departmentId: user.departmentId,
    title: String(form.get("title")),
    type: String(form.get("type")),
    thematicTrack: String(form.get("thematicTrack")),
    requestId: String(form.get("requestId")) || "",
    activityDate: String(form.get("activityDate")),
    summary: String(form.get("summary")),
    beforeGoals: String(form.get("beforeGoals")),
    beforeExpected: String(form.get("beforeExpected")),
    afterResults: String(form.get("afterResults")),
    afterRecommendations: String(form.get("afterRecommendations")),
    attachmentName: String(form.get("attachmentName")),
    workflowStage: "مرفوع من البعثة",
    createdAt: new Date().toLocaleString("ar-YE"),
    workflowHistory: []
  };
  addWorkflowEntry(report, user.name, "رفع التقرير", "مرفوع من البعثة");
  state.reports.unshift(report);
  state.selectedReportId = report.id;
  if (report.requestId) {
    const request = state.reportRequests.find((item) => item.id === report.requestId);
    if (request && !request.completedMissionIds.includes(report.missionId)) {
      request.completedMissionIds.push(report.missionId);
    }
  }
  addAlert("success", "تم رفع تقرير جديد", `رفعت ${user.name} التقرير "${report.title}" وأصبح مرئيًا للجهات المخولة.`);
  logAudit(user.name, "رفع تقرير", report.title, getMissionName(report.missionId));
  saveState();
  renderApp();
}

function handleRequestSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  const form = new FormData(event.currentTarget);
  const targetMissionIds = form.getAll("missionId");
  if (!targetMissionIds.length) return;
  state.reportRequests.unshift({
    id: `request-${Date.now()}`,
    title: String(form.get("title")),
    type: String(form.get("type")),
    createdBy: user.name,
    dueDate: String(form.get("dueDate")),
    targetMissionIds,
    completedMissionIds: [],
    status: "نشط"
  });
  addAlert("info", "تم إصدار طلب تقرير", `أصدرت ${user.name} طلب تقرير جديد إلى ${targetMissionIds.length} بعثات.`);
  logAudit(user.name, "إصدار طلب تقرير", String(form.get("title")), "وزارة");
  saveState();
  renderApp();
}

function handleCircularSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  const form = new FormData(event.currentTarget);
  const targetMissionIds = form.getAll("missionId");
  if (!targetMissionIds.length) return;

  const circular = {
    id: `circ-${Date.now()}`,
    title: String(form.get("title")),
    issuedBy: user.name,
    targetMissionIds,
    dueDate: String(form.get("dueDate")),
    status: "نشط",
    readMissionIds: [],
    completedMissionIds: [],
    workflowHistory: [],
    processingLog: []
  };
  circular.workflowHistory.unshift({
    actor: user.name,
    action: "إصدار التعميم",
    stage: "نشط",
    at: new Date().toLocaleString("ar-YE")
  });

  state.circulars.unshift(circular);
  addAlert("info", "تم إصدار تعميم", `أصدر ${user.name} التعميم "${circular.title}" إلى ${targetMissionIds.length} بعثات.`);
  logAudit(user.name, "إصدار تعميم", circular.title, "وزارة");
  saveState();
  renderApp();
}

function handleDepartmentSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim();
  if (getAllUsers().some((user) => user.username === username)) {
    addAlert("danger", "تعذر إضافة الدائرة", "اسم المستخدم مستخدم بالفعل.");
    saveState();
    renderApp();
    return;
  }
  state.departments.push({
    id: `dept-${Date.now()}`,
    name: String(form.get("name")),
    username,
    password: String(form.get("password"))
  });
  addAlert("success", "تمت إضافة دائرة", `أضيفت دائرة جديدة مع حساب دخول خاص بها: ${username}`);
  logAudit("مدير النظام", "إضافة دائرة", String(form.get("name")), "وزارة");
  saveState();
  renderApp();
}

function handleMissionSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim();
  if (getAllUsers().some((user) => user.username === username)) {
    addAlert("danger", "تعذر إضافة البعثة", "اسم المستخدم مستخدم بالفعل.");
    saveState();
    renderApp();
    return;
  }
  state.missions.push({
    id: `mission-${Date.now()}`,
    name: String(form.get("name")),
    departmentId: String(form.get("departmentId")),
    username,
    password: String(form.get("password"))
  });
  addAlert("success", "تمت إضافة بعثة", "أضيفت بعثة جديدة وربطت بالدائرة المختارة مع حساب دخول خاص.");
  logAudit("مدير النظام", "إضافة بعثة", String(form.get("name")), getDepartmentName(String(form.get("departmentId"))));
  saveState();
  renderApp();
}

function handleReportAction(reportId, actionKey, nextStage) {
  const report = state.reports.find((item) => item.id === reportId);
  const user = getSessionUser();
  if (!report || !user) return;
  const labels = {
    review: "بدء مراجعة الدائرة",
    return: "إعادة التقرير للبعثة",
    approve: "اعتماد التقرير",
    archive: "أرشفة التقرير",
    resubmit: "إعادة رفع التقرير"
  };
  report.workflowStage = nextStage;
  addWorkflowEntry(report, user.name, labels[actionKey] || "تحديث المسار", nextStage);
  addAlert(nextStage === "أعيد للبعثة للاستكمال" ? "warning" : "info", "تحديث مسار التقرير", `انتقل التقرير "${report.title}" إلى مرحلة "${nextStage}".`);
  logAudit(user.name, labels[actionKey] || "تحديث المسار", report.title, getMissionName(report.missionId));
  saveState();
  renderApp();
}

function handleCircularAction(circularId, actionKey) {
  const circular = state.circulars.find((item) => item.id === circularId);
  const user = getSessionUser();
  if (!circular || !user) return;

  if (actionKey === "mark-read" && user.role === "mission" && !circular.readMissionIds.includes(user.missionId)) {
    circular.readMissionIds.push(user.missionId);
    circular.workflowHistory.unshift({
      actor: user.name,
      action: "تأكيد قراءة التعميم",
      stage: circular.status,
      at: new Date().toLocaleString("ar-YE")
    });
    addAlert("info", "تم تأكيد قراءة التعميم", `${user.name} أكد قراءة التعميم "${circular.title}".`);
    logAudit(user.name, "قراءة تعميم", circular.title, getMissionName(user.missionId));
  }

  if (actionKey === "mark-complete" && user.role === "mission" && !circular.completedMissionIds.includes(user.missionId)) {
    if (!circular.readMissionIds.includes(user.missionId)) {
      circular.readMissionIds.push(user.missionId);
    }
    circular.completedMissionIds.push(user.missionId);
    circular.processingLog.unshift({
      actor: user.name,
      result: "تم تنفيذ المطلوب",
      at: new Date().toLocaleString("ar-YE")
    });
    circular.workflowHistory.unshift({
      actor: user.name,
      action: "تأكيد إنجاز التعميم",
      stage: circular.status,
      at: new Date().toLocaleString("ar-YE")
    });
    addAlert("success", "تم إنجاز التعميم", `${user.name} أكد تنفيذ المطلوب في التعميم "${circular.title}".`);
    logAudit(user.name, "إنجاز تعميم", circular.title, getMissionName(user.missionId));
  }

  if (actionKey === "close" && (user.role === "planning" || user.role === "admin")) {
    circular.status = "مغلق";
    circular.workflowHistory.unshift({
      actor: user.name,
      action: "إغلاق التعميم",
      stage: "مغلق",
      at: new Date().toLocaleString("ar-YE")
    });
    addAlert("success", "تم إغلاق التعميم", `${user.name} أغلق التعميم "${circular.title}".`);
    logAudit(user.name, "إغلاق تعميم", circular.title, "وزارة");
  }

  saveState();
  renderApp();
}

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString("ar-YE") : "-";
}

renderApp();
