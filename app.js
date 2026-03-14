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
    { id: "planning-user", role: "planning", name: "إدارة التخطيط", username: "planning", password: "Planning@2026" }
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
  if (user.role === "admin") return ["dashboard", "reports", "requests", "management"];
  if (user.role === "planning") return ["dashboard", "reports", "requests"];
  if (user.role === "department") return ["dashboard", "reports", "requests"];
  return ["dashboard", "reports", "requests"];
}

function getVisibleReports(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning") return state.reports;
  if (user.role === "department") return state.reports.filter((report) => report.departmentId === user.departmentId);
  if (user.role === "mission") return state.reports.filter((report) => report.missionId === user.missionId);
  return [];
}

function getVisibleRequests(user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "admin" || user.role === "planning") return state.reportRequests;
  if (user.role === "department") {
    const missionIds = state.missions.filter((mission) => mission.departmentId === user.departmentId).map((mission) => mission.id);
    return state.reportRequests.filter((request) => request.targetMissionIds.some((id) => missionIds.includes(id)));
  }
  if (user.role === "mission") return state.reportRequests.filter((request) => request.targetMissionIds.includes(user.missionId));
  return [];
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
    requests: "طلبات التقارير",
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
  if (state.activeView === "requests") return renderRequestsPage(user);
  if (state.activeView === "management") return renderManagementPage(user);
  return renderDashboard(user);
}

function renderDashboard(user) {
  const reports = getVisibleReports(user);
  const requests = getVisibleRequests(user);
  const activeRequests = requests.filter((item) => item.status === "نشط");
  const pending = activeRequests.reduce((sum, request) => sum + getCompletion(request).pending, 0);
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
        <div class="metric-card"><span>الطلبات النشطة</span><strong>${activeRequests.length}</strong></div>
        <div class="metric-card"><span>البعثات غير المنجزة</span><strong>${pending}</strong></div>
      </div>
    </section>
    <section class="metrics-grid">
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
  saveState();
  renderApp();
}

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString("ar-YE") : "-";
}

renderApp();
