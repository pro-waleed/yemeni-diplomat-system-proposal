const STORAGE_KEY = "yemeni_diplomat_reports_demo_v2";

const users = [
  {
    id: "mission_riyadh",
    name: "بعثة الرياض",
    role: "مسؤول البعثة",
    type: "mission",
    mission: "بعثة الرياض",
    department: "الدائرة الجغرافية لشبه الجزيرة العربية"
  },
  {
    id: "planning_admin",
    name: "إدارة التخطيط",
    role: "إدارة التخطيط والمتابعة",
    type: "planning",
    mission: null,
    department: "الإدارة العامة للتخطيط"
  },
  {
    id: "system_admin",
    name: "مدير النظام",
    role: "إدارة النظام والرقابة",
    type: "admin",
    mission: null,
    department: "إدارة النظم"
  },
  {
    id: "geo_dept",
    name: "الدائرة المعنية",
    role: "الدائرة الجغرافية المختصة",
    type: "department",
    mission: null,
    department: "الدائرة الجغرافية لشبه الجزيرة العربية",
    missions: ["بعثة الرياض", "بعثة جدة", "بعثة أبوظبي"]
  }
];

const missions = ["بعثة الرياض", "بعثة القاهرة", "بعثة كوالالمبور", "بعثة أبوظبي", "بعثة جدة"];

const initialData = () => ({
  currentUserId: "mission_riyadh",
  showPendingOnly: false,
  activeView: "dashboard",
  selectedReportId: "seed-report-1",
  alerts: [
    {
      id: "alert-1",
      level: "warning",
      title: "طلب تقرير نصف سنوي نشط",
      text: "ما زالت بعض البعثات لم ترفع تقاريرها النصف سنوية ضمن المهلة المحددة."
    },
    {
      id: "alert-2",
      level: "info",
      title: "بيئة العرض متعددة الحسابات",
      text: "يمكنك تبديل الحساب من أعلى الصفحة لمشاهدة نفس البيانات من زوايا مختلفة."
    }
  ],
  reportRequests: [
    {
      id: "req-2026-h1",
      title: "طلب التقارير النصف سنوية 2026",
      kind: "نصف سنوي",
      year: "2026",
      createdBy: "إدارة التخطيط",
      dueDate: "2026-06-30",
      targetMissions: ["بعثة الرياض", "بعثة القاهرة", "بعثة كوالالمبور", "بعثة أبوظبي"],
      completedMissions: ["بعثة القاهرة"],
      status: "نشط"
    },
    {
      id: "req-2025-annual",
      title: "طلب التقارير السنوية 2025",
      kind: "سنوي",
      year: "2025",
      createdBy: "إدارة التخطيط",
      dueDate: "2026-01-31",
      targetMissions: ["بعثة الرياض", "بعثة القاهرة", "بعثة كوالالمبور", "بعثة أبوظبي", "بعثة جدة"],
      completedMissions: ["بعثة الرياض", "بعثة القاهرة", "بعثة أبوظبي"],
      status: "مغلق"
    }
  ],
  reports: [
    {
      id: "seed-report-1",
      mission: "بعثة القاهرة",
      title: "تقرير نصف سنوي عن الحراك السياسي والإعلامي",
      reportType: "نصف سنوي",
      thematicTrack: "سياسي / إعلامي",
      activityDate: "2026-03-05",
      requestId: "req-2026-h1",
      author: "بعثة القاهرة",
      department: "الدائرة الجغرافية لشبه الجزيرة العربية",
      status: "مرفوع من البعثة",
      workflowStage: "مرفوع من البعثة",
      visibility: ["planning", "admin", "department"],
      workflowHistory: [
        {
          actor: "بعثة القاهرة",
          action: "رفع التقرير",
          stage: "مرفوع من البعثة",
          at: "2026-03-10 09:20"
        }
      ],
      summary: "ملخص تنفيذي عن أبرز الاتصالات والفعاليات والتغطيات الإعلامية خلال النصف الأول.",
      beforeGoals: "تعزيز الحضور السياسي اليمني وتوسيع التنسيق الإعلامي مع الجهات المصرية.",
      beforeExpected: "لقاءات تنسيقية وتغطية إعلامية إيجابية ومتابعة ملفات التعاون.",
      afterResults: "تم تنفيذ 6 لقاءات رسمية وتغطية 3 فعاليات رئيسية وإعداد مذكرة متابعة مشتركة.",
      afterRecommendations: "استمرار التنسيق الإعلامي وجدولة زيارة فنية في الربع القادم.",
      attachmentName: "cairo-half-year-2026.pdf",
      createdAt: "2026-03-10 09:20"
    }
  ]
});

let appState = loadState();

const metricCards = document.getElementById("metric-cards");
const mainContent = document.getElementById("main-content");
const detailPanel = document.getElementById("detail-panel");
const alertsPanel = document.getElementById("alerts-panel");
const filtersBar = document.getElementById("view-filters");
const accountSwitcher = document.getElementById("account-switcher");

function loadState() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return initialData();
  const parsed = JSON.parse(saved);
  if (!parsed.currentUserId || !Array.isArray(parsed.reportRequests) || !Array.isArray(parsed.reports)) {
    return initialData();
  }
  parsed.reports = parsed.reports.map((report) => {
    if (!report.workflowStage) {
      report.workflowStage = report.status || "مرفوع من البعثة";
    }
    if (!Array.isArray(report.workflowHistory)) {
      report.workflowHistory = [
        {
          actor: report.author || report.mission || "النظام",
          action: "ترحيل سجل التقرير",
          stage: report.workflowStage,
          at: report.createdAt || new Date().toLocaleString("ar-YE")
        }
      ];
    }
    return report;
  });
  return parsed;
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function getCurrentUser() {
  return users.find((user) => user.id === appState.currentUserId) || users[0];
}

function getVisibleReports(user = getCurrentUser()) {
  return appState.reports.filter((report) => {
    if (user.type === "admin" || user.type === "planning") return true;
    if (user.type === "mission") return report.mission === user.mission;
    if (user.type === "department") return user.missions.includes(report.mission);
    return false;
  });
}

function getStageTone(stage) {
  if (stage === "معتمد من التخطيط" || stage === "مغلق ومؤرشف") return "success";
  if (stage === "قيد مراجعة الدائرة") return "warning";
  if (stage === "مرفوع من البعثة") return "info";
  if (stage === "أعيد للبعثة للاستكمال") return "danger";
  return "info";
}

function getAllowedActions(report, user = getCurrentUser()) {
  const actions = [];

  if (user.type === "mission" && report.mission === user.mission && report.workflowStage === "أعيد للبعثة للاستكمال") {
    actions.push({ key: "resubmit", label: "إعادة رفع التقرير", nextStage: "مرفوع من البعثة" });
  }

  if (user.type === "department" && user.missions.includes(report.mission)) {
    if (report.workflowStage === "مرفوع من البعثة") {
      actions.push({ key: "review", label: "بدء مراجعة الدائرة", nextStage: "قيد مراجعة الدائرة" });
      actions.push({ key: "return", label: "إعادة للبعثة", nextStage: "أعيد للبعثة للاستكمال" });
    }
  }

  if (user.type === "planning" || user.type === "admin") {
    if (report.workflowStage === "قيد مراجعة الدائرة" || report.workflowStage === "مرفوع من البعثة") {
      actions.push({ key: "approve", label: "اعتماد من التخطيط", nextStage: "معتمد من التخطيط" });
      actions.push({ key: "return", label: "إعادة للبعثة", nextStage: "أعيد للبعثة للاستكمال" });
    }
    if (report.workflowStage === "معتمد من التخطيط") {
      actions.push({ key: "archive", label: "إغلاق وأرشفة", nextStage: "مغلق ومؤرشف" });
    }
  }

  return actions;
}

function addWorkflowEntry(report, actor, action, stage) {
  if (!Array.isArray(report.workflowHistory)) {
    report.workflowHistory = [];
  }
  report.workflowHistory.unshift({
    actor,
    action,
    stage,
    at: new Date().toLocaleString("ar-YE")
  });
}

function getVisibleRequests(user = getCurrentUser()) {
  return appState.reportRequests.filter((request) => {
    if (user.type === "admin" || user.type === "planning") return true;
    if (user.type === "mission") return request.targetMissions.includes(user.mission);
    if (user.type === "department") {
      return request.targetMissions.some((mission) => user.missions.includes(mission));
    }
    return false;
  });
}

function getCompletionSummary(request) {
  const done = request.completedMissions.length;
  const total = request.targetMissions.length;
  return {
    done,
    total,
    pending: total - done,
    percent: total ? Math.round((done / total) * 100) : 0
  };
}

function populateAccountSwitcher() {
  accountSwitcher.innerHTML = users.map((user) => `
    <option value="${user.id}" ${user.id === appState.currentUserId ? "selected" : ""}>${user.name} - ${user.role}</option>
  `).join("");
}

function updateUserCard() {
  const user = getCurrentUser();
  document.getElementById("current-user-name").textContent = user.name;
  document.getElementById("current-user-role").textContent = `${user.role} | ${user.department}`;
}

function updateHero() {
  const visibleReports = getVisibleReports();
  const visibleRequests = getVisibleRequests().filter((request) => request.status === "نشط");
  const completionValues = visibleRequests.map((request) => getCompletionSummary(request).percent);
  const avgCompletion = completionValues.length
    ? Math.round(completionValues.reduce((sum, value) => sum + value, 0) / completionValues.length)
    : 0;

  document.getElementById("hero-reports").textContent = String(visibleReports.length);
  document.getElementById("hero-requests").textContent = String(visibleRequests.length);
  document.getElementById("hero-completion").textContent = `${avgCompletion}%`;
}

function renderMetrics() {
  const user = getCurrentUser();
  const visibleReports = getVisibleReports(user);
  const visibleRequests = getVisibleRequests(user);
  const activeRequests = visibleRequests.filter((request) => request.status === "نشط");
  const pendingMissions = activeRequests.reduce((count, request) => count + getCompletionSummary(request).pending, 0);

  const cards = [
    {
      label: user.type === "mission" ? "تقاريري المرفوعة" : "التقارير الواردة",
      value: visibleReports.length,
      hint: user.type === "mission" ? "من حساب البعثة الحالي" : "المتاحة للحساب الحالي"
    },
    {
      label: "طلبات التقارير النشطة",
      value: activeRequests.length,
      hint: "سنوية ونصف سنوية"
    },
    {
      label: "جهات لم تنجز بعد",
      value: pendingMissions,
      hint: "ضمن الطلبات النشطة"
    },
    {
      label: user.type === "mission" ? "الطلبات المطلوبة من البعثة" : "البعثات المنجزة",
      value: user.type === "mission"
        ? activeRequests.filter((request) => request.targetMissions.includes(user.mission)).length
        : activeRequests.reduce((count, request) => count + getCompletionSummary(request).done, 0),
      hint: user.type === "mission" ? "تظهر في شاشة الطلبات" : "إجمالي الإنجاز المرحلي"
    }
  ];

  metricCards.innerHTML = cards.map((card) => `
    <article class="metric-card static-card">
      <span>${card.label}</span>
      <strong>${card.value}</strong>
      <div class="tag info">${card.hint}</div>
    </article>
  `).join("");
}

function renderHeader() {
  const titles = {
    dashboard: {
      title: "لوحة المتابعة",
      subtitle: "عرض مركزي لحركة التقارير وطلبات التقارير حسب الحساب الحالي.",
      panelTitle: "مؤشرات التشغيل",
      panelLabel: "عرض تنفيذي"
    },
    reports: {
      title: "شاشة التقارير",
      subtitle: "رفع تقرير نشاط نموذجي أو استعراض التقارير المرفوعة والمراجعة.",
      panelTitle: "وحدة التقارير",
      panelLabel: "رفع ومراجعة"
    },
    requests: {
      title: "طلبات التقارير السنوية والنصف سنوية",
      subtitle: "إصدار الطلبات من التخطيط ومراقبة البعثات المنجزة وغير المنجزة.",
      panelTitle: "إدارة الطلبات",
      panelLabel: "متابعة الإنجاز"
    }
  };

  const active = titles[appState.activeView];
  document.getElementById("view-title").textContent = active.title;
  document.getElementById("view-subtitle").textContent = active.subtitle;
  document.getElementById("panel-title").textContent = active.panelTitle;
  document.getElementById("panel-label").textContent = active.panelLabel;
}

function renderFilters() {
  filtersBar.innerHTML = `
    <button class="filter-chip ${appState.showPendingOnly ? "is-active" : ""}" id="pending-chip">غير المنجز فقط</button>
  `;
  document.getElementById("pending-chip").addEventListener("click", () => {
    appState.showPendingOnly = !appState.showPendingOnly;
    saveState();
    render();
  });
}

function renderDashboard() {
  const user = getCurrentUser();
  const reports = getVisibleReports(user);
  const requests = getVisibleRequests(user);
  const activeRequests = requests.filter((request) => request.status === "نشط");
  const filteredRequests = appState.showPendingOnly
    ? activeRequests.filter((request) => getCompletionSummary(request).pending > 0)
    : activeRequests;

  const requestCards = filteredRequests.length
    ? filteredRequests.map((request) => {
        const summary = getCompletionSummary(request);
        return `
          <div class="detail-card">
            <div class="record-top">
              <div>
                <div class="detail-title">${request.title}</div>
                <div class="table-subtext">الموعد النهائي: ${formatDate(request.dueDate)}</div>
              </div>
              <span class="tag ${summary.pending ? "warning" : "success"}">${summary.done}/${summary.total}</span>
            </div>
            <div class="progress"><span style="width:${summary.percent}%"></span></div>
            <div class="record-desc">أنجزت ${summary.done} بعثة ولم تنجز ${summary.pending} بعثة.</div>
          </div>
        `;
      }).join("")
    : `<div class="empty-state">لا توجد طلبات مطابقة للفلتر الحالي.</div>`;

  const latestReports = reports
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3)
    .map((report) => `
      <article class="record-card is-static">
        <div class="record-top">
          <div>
            <div class="record-title">${report.title}</div>
            <div class="record-meta">${report.mission}</div>
          </div>
          <span class="tag success">${report.reportType}</span>
        </div>
        <p class="record-desc">${report.summary}</p>
      </article>
    `).join("");

  mainContent.innerHTML = `
    <div class="two-col">
      <div class="detail-card">
        <div class="section-title">ما الذي يمكن فعله من هذا الحساب؟</div>
        <ul class="spec-list">
          ${roleCapabilities(user).map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="detail-card">
        <div class="section-title">آخر التقارير الظاهرة للحساب</div>
        <div class="record-list">${latestReports || '<div class="empty-state">لا توجد تقارير بعد.</div>'}</div>
      </div>
    </div>
    <div class="detail-card">
      <div class="section-title">حالة طلبات التقارير النشطة</div>
      <div class="detail-list">${requestCards}</div>
    </div>
  `;

  detailPanel.innerHTML = `
    <div class="detail-list">
      <div class="detail-card">
        <div class="detail-title">الحساب الحالي</div>
        <p class="record-desc">${user.name} يعمل بصفة ${user.role}.</p>
      </div>
      <div class="detail-card">
        <div class="detail-title">أقرب تجربة مقترحة</div>
        <p class="record-desc">بدّل إلى حساب بعثة الرياض ثم ارفع تقرير نشاط، وبعدها بدّل إلى مدير النظام لمشاهدة التقرير في سجل المراجعة.</p>
      </div>
    </div>
  `;
}

function renderReports() {
  const user = getCurrentUser();
  const visibleReports = getVisibleReports(user);
  const reportOptions = getVisibleRequests(user).filter((request) => request.status === "نشط");
  const selected = visibleReports.find((report) => report.id === appState.selectedReportId) || visibleReports[0];

  if (user.type === "mission") {
    mainContent.innerHTML = `
      <div class="two-col">
        <div class="detail-card">
          <div class="section-title">رفع تقرير نشاط نموذجي</div>
          <form id="report-form" class="form-grid">
            <label class="field-block">
              <span>عنوان التقرير</span>
              <input name="title" required placeholder="مثال: تقرير نشاط عن مشاركة البعثة في ملتقى استثماري">
            </label>
            <label class="field-block">
              <span>نوع التقرير</span>
              <select name="reportType" required>
                <option value="نشاط">نشاط</option>
                <option value="نصف سنوي">نصف سنوي</option>
                <option value="سنوي">سنوي</option>
                <option value="موضوعي">موضوعي</option>
              </select>
            </label>
            <label class="field-block">
              <span>المسار الموضوعي</span>
              <select name="thematicTrack" required>
                <option value="سياسي">سياسي</option>
                <option value="اقتصادي">اقتصادي</option>
                <option value="إعلامي">إعلامي</option>
                <option value="ثقافي">ثقافي</option>
                <option value="قنصلي">قنصلي</option>
              </select>
            </label>
            <label class="field-block">
              <span>يرتبط بطلب تقرير</span>
              <select name="requestId">
                <option value="">بدون ربط مباشر</option>
                ${reportOptions.map((request) => `<option value="${request.id}">${request.title}</option>`).join("")}
              </select>
            </label>
            <label class="field-block">
              <span>تاريخ النشاط</span>
              <input type="date" name="activityDate" required>
            </label>
            <label class="field-block">
              <span>اسم المرفق</span>
              <input name="attachmentName" placeholder="example-report.pdf" required>
            </label>
            <label class="field-block full">
              <span>الأهداف قبل الفعالية</span>
              <textarea name="beforeGoals" required></textarea>
            </label>
            <label class="field-block full">
              <span>المتوقع قبل الفعالية</span>
              <textarea name="beforeExpected" required></textarea>
            </label>
            <label class="field-block full">
              <span>النتائج بعد الفعالية</span>
              <textarea name="afterResults" required></textarea>
            </label>
            <label class="field-block full">
              <span>التوصيات بعد الفعالية</span>
              <textarea name="afterRecommendations" required></textarea>
            </label>
            <label class="field-block full">
              <span>ملخص يظهر في لوحة التحكم</span>
              <textarea name="summary" required></textarea>
            </label>
            <div class="form-actions full">
              <button class="primary-btn" type="submit">رفع التقرير</button>
            </div>
          </form>
        </div>
        <div class="detail-card">
          <div class="section-title">تقارير البعثة الحالية</div>
          ${renderReportList(visibleReports, user)}
        </div>
      </div>
    `;

    detailPanel.innerHTML = selected ? renderReportDetails(selected) : `
      <div class="detail-card">
        <div class="detail-title">كيف تعمل التجربة؟</div>
        <p class="record-desc">بعد رفع التقرير من هذا الحساب سيتم حفظه في بيئة العرض، ثم سيظهر مباشرة في حساب مدير النظام وإدارة التخطيط والدائرة المعنية.</p>
      </div>
    `;

    document.getElementById("report-form").addEventListener("submit", handleReportSubmit);
    bindReportCards();
    return;
  }

  mainContent.innerHTML = `
    <div class="detail-card">
      <div class="section-title">سجل التقارير الظاهر للحساب الحالي</div>
      ${renderReportList(visibleReports, user)}
    </div>
  `;

  detailPanel.innerHTML = selected ? renderReportDetails(selected) : `<div class="empty-state">لا توجد تقارير ظاهرة لهذا الحساب.</div>`;
  bindReportCards();
}

function renderRequests() {
  const user = getCurrentUser();
  const requests = getVisibleRequests(user);
  const filteredRequests = appState.showPendingOnly
    ? requests.filter((request) => getCompletionSummary(request).pending > 0)
    : requests;

  const requestCards = filteredRequests.map((request) => {
    const summary = getCompletionSummary(request);
    return `
      <div class="detail-card">
        <div class="record-top">
          <div>
            <div class="detail-title">${request.title}</div>
            <div class="table-subtext">${request.kind} | ${request.year} | الموعد ${formatDate(request.dueDate)}</div>
          </div>
          <span class="tag ${request.status === "نشط" ? "warning" : "success"}">${request.status}</span>
        </div>
        <div class="progress"><span style="width:${summary.percent}%"></span></div>
        <div class="record-desc">أنجزت ${summary.done} بعثة ولم تنجز ${summary.pending} بعثة من إجمالي ${summary.total}.</div>
        <div class="table-wrap request-table">
          <table>
            <thead>
              <tr>
                <th>البعثة</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              ${request.targetMissions.map((mission) => `
                <tr>
                  <td>${mission}</td>
                  <td><span class="tag ${request.completedMissions.includes(mission) ? "success" : "warning"}">${request.completedMissions.includes(mission) ? "منجز" : "لم ينجز"}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");

  const creationForm = (user.type === "planning" || user.type === "admin") ? `
    <div class="detail-card">
      <div class="section-title">إصدار طلب تقرير جديد</div>
      <form id="request-form" class="form-grid">
        <label class="field-block">
          <span>عنوان الطلب</span>
          <input name="title" required placeholder="مثال: طلب التقارير السنوية 2026">
        </label>
        <label class="field-block">
          <span>نوع الطلب</span>
          <select name="kind" required>
            <option value="سنوي">سنوي</option>
            <option value="نصف سنوي">نصف سنوي</option>
          </select>
        </label>
        <label class="field-block">
          <span>السنة</span>
          <input name="year" required placeholder="2026">
        </label>
        <label class="field-block">
          <span>الموعد النهائي</span>
          <input type="date" name="dueDate" required>
        </label>
        <label class="field-block full">
          <span>البعثات المستهدفة</span>
          <div class="checkbox-grid">
            ${missions.map((mission) => `
              <label class="check-item">
                <input type="checkbox" name="targetMission" value="${mission}" checked>
                <span>${mission}</span>
              </label>
            `).join("")}
          </div>
        </label>
        <div class="form-actions full">
          <button class="primary-btn" type="submit">إصدار الطلب</button>
        </div>
      </form>
    </div>
  ` : "";

  mainContent.innerHTML = `
    ${creationForm}
    <div class="detail-card">
      <div class="section-title">سجل الطلبات</div>
      <div class="detail-list">${requestCards || '<div class="empty-state">لا توجد طلبات ظاهرة للحساب الحالي.</div>'}</div>
    </div>
  `;

  detailPanel.innerHTML = `
    <div class="detail-card">
      <div class="detail-title">آلية المتابعة</div>
      <p class="record-desc">بمجرد ربط التقرير بطلب سنوي أو نصف سنوي، تُحتسب البعثة ضمن الجهات المنجزة لذلك الطلب تلقائيًا.</p>
    </div>
  `;

  const requestForm = document.getElementById("request-form");
  if (requestForm) {
    requestForm.addEventListener("submit", handleRequestSubmit);
  }
}

function renderReportList(reports, user) {
  const filteredReports = appState.showPendingOnly
    ? reports.filter((report) => report.workflowStage !== "مغلق ومؤرشف")
    : reports;

  if (!filteredReports.length) {
    return `<div class="empty-state">لا توجد تقارير مطابقة للحساب أو الفلتر الحالي.</div>`;
  }

  return `
    <div class="record-list">
      ${filteredReports.map((report) => `
        <article class="record-card ${appState.selectedReportId === report.id ? "is-selected" : ""}" data-report-id="${report.id}">
          <div class="record-top">
            <div>
              <div class="record-title">${report.title}</div>
              <div class="record-meta">${report.mission} | ${report.thematicTrack}</div>
            </div>
            <span class="tag ${getStageTone(report.workflowStage)}">${report.workflowStage}</span>
          </div>
          <p class="record-desc">${report.summary}</p>
          <div class="record-bottom">
            <span class="tag info">${report.createdAt}</span>
            <span class="table-subtext">${user.type === "mission" ? "حالة الظهور: ظاهر للإدارات المختصة" : report.author}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderReportDetails(report) {
  const relatedRequest = appState.reportRequests.find((request) => request.id === report.requestId);
  const actions = getAllowedActions(report);
  const history = (report.workflowHistory || []).map((entry) => `
    <div class="timeline-entry">
      <strong>${entry.action}</strong>
      <span>${entry.actor}</span>
      <span>${entry.stage}</span>
      <span>${entry.at}</span>
    </div>
  `).join("");
  return `
    <div class="detail-list">
      <div class="detail-card">
        <div class="detail-title">${report.title}</div>
        <div class="detail-row"><span>البعثة</span><span>${report.mission}</span></div>
        <div class="detail-row"><span>نوع التقرير</span><span>${report.reportType}</span></div>
        <div class="detail-row"><span>المسار</span><span>${report.thematicTrack}</span></div>
        <div class="detail-row"><span>المرفق</span><span>${report.attachmentName}</span></div>
        <div class="detail-row"><span>مرحلة الاعتماد</span><span class="tag ${getStageTone(report.workflowStage)}">${report.workflowStage}</span></div>
      </div>
      <div class="detail-card">
        <div class="detail-title">قبل الفعالية</div>
        <p class="record-desc"><strong>الأهداف:</strong> ${report.beforeGoals}</p>
        <p class="record-desc"><strong>المتوقع:</strong> ${report.beforeExpected}</p>
      </div>
      <div class="detail-card">
        <div class="detail-title">بعد الفعالية</div>
        <p class="record-desc"><strong>النتائج:</strong> ${report.afterResults}</p>
        <p class="record-desc"><strong>التوصيات:</strong> ${report.afterRecommendations}</p>
      </div>
      <div class="detail-card">
        <div class="detail-title">الربط التشغيلي</div>
        <p class="record-desc">الجهة الراسلة: ${report.author}</p>
        <p class="record-desc">يرتبط بطلب: ${relatedRequest ? relatedRequest.title : "لا يوجد"}</p>
      </div>
      <div class="detail-card">
        <div class="detail-title">مسار الاعتماد</div>
        <div class="timeline-list">${history || '<div class="empty-state">لا يوجد سجل إجراءات بعد.</div>'}</div>
      </div>
      ${actions.length ? `
        <div class="detail-card">
          <div class="detail-title">إجراءات متاحة للحساب الحالي</div>
          <div class="action-row">
            ${actions.map((action) => `<button class="primary-btn workflow-action" data-report-id="${report.id}" data-action="${action.key}" data-stage="${action.nextStage}">${action.label}</button>`).join("")}
          </div>
        </div>
      ` : ""}
    </div>
  `;
}

function handleReportSubmit(event) {
  event.preventDefault();
  const user = getCurrentUser();
  const formData = new FormData(event.currentTarget);
  const requestId = formData.get("requestId");

  const report = {
    id: `report-${Date.now()}`,
    mission: user.mission,
    title: formData.get("title"),
    reportType: formData.get("reportType"),
    thematicTrack: formData.get("thematicTrack"),
    activityDate: formData.get("activityDate"),
    requestId,
    author: user.name,
    department: user.department,
    status: "مرفوع من البعثة",
    workflowStage: "مرفوع من البعثة",
    visibility: ["planning", "admin", "department"],
    workflowHistory: [],
    summary: formData.get("summary"),
    beforeGoals: formData.get("beforeGoals"),
    beforeExpected: formData.get("beforeExpected"),
    afterResults: formData.get("afterResults"),
    afterRecommendations: formData.get("afterRecommendations"),
    attachmentName: formData.get("attachmentName"),
    createdAt: new Date().toLocaleString("ar-YE")
  };

  addWorkflowEntry(report, user.name, "رفع التقرير", "مرفوع من البعثة");

  appState.reports.unshift(report);
  appState.selectedReportId = report.id;

  if (requestId) {
    const request = appState.reportRequests.find((item) => item.id === requestId);
    if (request && !request.completedMissions.includes(user.mission)) {
      request.completedMissions.push(user.mission);
    }
  }

  appState.alerts.unshift({
    id: `alert-${Date.now()}`,
    level: "success",
    title: "تم رفع تقرير جديد",
    text: `رفعت ${user.mission} التقرير "${report.title}" وأصبح ظاهرًا لإدارة التخطيط ومدير النظام والدائرة المعنية.`
  });

  saveState();
  render();
}

function handleRequestSubmit(event) {
  event.preventDefault();
  const user = getCurrentUser();
  const formData = new FormData(event.currentTarget);
  const selectedMissions = formData.getAll("targetMission");

  if (!selectedMissions.length) return;

  const request = {
    id: `req-${Date.now()}`,
    title: formData.get("title"),
    kind: formData.get("kind"),
    year: formData.get("year"),
    createdBy: user.name,
    dueDate: formData.get("dueDate"),
    targetMissions: selectedMissions,
    completedMissions: [],
    status: "نشط"
  };

  appState.reportRequests.unshift(request);
  appState.alerts.unshift({
    id: `alert-${Date.now()}`,
    level: "info",
    title: "تم إصدار طلب تقرير",
    text: `أصدرت ${user.name} طلب "${request.title}" إلى ${selectedMissions.length} بعثات.`
  });

  saveState();
  render();
}

function roleCapabilities(user) {
  if (user.type === "mission") {
    return [
      "رفع تقرير نشاط نموذجي وربطه بطلب سنوي أو نصف سنوي إن وجد.",
      "رؤية الطلبات الموجهة للبعثة وحالة الإنجاز الخاصة بها.",
      "متابعة التقارير التي رفعتها البعثة نفسها فقط."
    ];
  }
  if (user.type === "planning") {
    return [
      "إصدار طلبات تقارير سنوية أو نصف سنوية لجميع البعثات أو لبعثات محددة.",
      "متابعة عدد البعثات المنجزة وغير المنجزة لكل طلب.",
      "استعراض جميع التقارير الواردة وربطها بالطلبات."
    ];
  }
  if (user.type === "admin") {
    return [
      "رؤية شاملة لكل التقارير والطلبات عبر النظام.",
      "التأكد من تدفق البيانات بين حساب البعثة والجهات المركزية.",
      "مراقبة سلامة المسار التشغيلي للوحدة."
    ];
  }
  return [
    "استعراض التقارير الواردة من البعثات التابعة للدائرة.",
    "مراجعة الطلبات المرتبطة بالنطاق الجغرافي للدائرة.",
    "متابعة البعثات التي لم تنجز التقارير المطلوبة."
  ];
}

function isMissionPendingOnRequest(mission, requestId) {
  const request = appState.reportRequests.find((item) => item.id === requestId);
  if (!request) return false;
  return !request.completedMissions.includes(mission);
}

function renderAlerts() {
  const alerts = appState.alerts.slice(0, 4);
  alertsPanel.innerHTML = `
    <div class="alert-list">
      ${alerts.map((alert) => `
        <div class="alert-item">
          <div class="record-top">
            <div class="detail-title">${alert.title}</div>
            <span class="tag ${alert.level === "success" ? "success" : alert.level}">${translateLevel(alert.level)}</span>
          </div>
          <div class="record-desc">${alert.text}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function translateLevel(level) {
  if (level === "warning") return "تنبيه";
  if (level === "danger") return "حرج";
  if (level === "success") return "نجاح";
  return "معلومة";
}

function bindReportCards() {
  document.querySelectorAll("[data-report-id]").forEach((card) => {
    card.addEventListener("click", () => {
      appState.selectedReportId = card.getAttribute("data-report-id");
      saveState();
      render();
    });
  });

  document.querySelectorAll(".workflow-action").forEach((button) => {
    button.addEventListener("click", () => {
      updateReportWorkflow(
        button.getAttribute("data-report-id"),
        button.getAttribute("data-action"),
        button.getAttribute("data-stage")
      );
    });
  });
}

function updateReportWorkflow(reportId, actionKey, nextStage) {
  const report = appState.reports.find((item) => item.id === reportId);
  const user = getCurrentUser();
  if (!report) return;

  report.workflowStage = nextStage;
  report.status = nextStage;

  const actionLabels = {
    review: "بدء مراجعة الدائرة",
    return: "إعادة التقرير للبعثة",
    approve: "اعتماد التقرير",
    archive: "أرشفة التقرير",
    resubmit: "إعادة رفع التقرير"
  };

  addWorkflowEntry(report, user.name, actionLabels[actionKey] || "تحديث المسار", nextStage);

  appState.alerts.unshift({
    id: `alert-${Date.now()}`,
    level: nextStage === "مغلق ومؤرشف" ? "success" : nextStage === "أعيد للبعثة للاستكمال" ? "warning" : "info",
    title: `تحديث مسار التقرير`,
    text: `قام ${user.name} بتحديث التقرير "${report.title}" إلى المرحلة: ${nextStage}.`
  });

  saveState();
  render();
}

function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("ar-YE");
}

function bindGlobalEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      appState.activeView = button.dataset.view;
      saveState();
      render();
    });
  });

  accountSwitcher.addEventListener("change", (event) => {
    appState.currentUserId = event.target.value;
    appState.selectedReportId = null;
    saveState();
    render();
  });

  document.getElementById("focus-toggle").addEventListener("click", () => {
    appState.showPendingOnly = !appState.showPendingOnly;
    saveState();
    render();
  });

  document.getElementById("reset-demo").addEventListener("click", () => {
    appState = initialData();
    saveState();
    render();
  });
}

function render() {
  populateAccountSwitcher();
  updateUserCard();
  renderHeader();
  updateHero();
  renderMetrics();
  renderFilters();
  renderAlerts();

  if (appState.activeView === "dashboard") renderDashboard();
  if (appState.activeView === "reports") renderReports();
  if (appState.activeView === "requests") renderRequests();

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === appState.activeView);
  });
}

bindGlobalEvents();
render();
