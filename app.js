const state = {
  activeView: "dashboard",
  selectedId: null,
  overdueOnly: false
};

const datasets = {
  metrics: [
    { id: "reports", label: "التقارير المرفوعة", value: 128, trend: "+14 هذا الشهر", tone: "success" },
    { id: "circulars", label: "التعاميم المفتوحة", value: 19, trend: "5 تحتاج تصعيدًا", tone: "warning" },
    { id: "plans", label: "معدل إنجاز الخطط", value: "81%", trend: "أعلى من الهدف السنوي", tone: "success" },
    { id: "training", label: "اكتمال التدريب", value: "74%", trend: "12 موظفًا لم يكملوا البرنامج", tone: "info" }
  ],
  alerts: [
    { level: "danger", title: "تعميم عاجل متأخر", text: "البعثة في كوالالمبور لم تغلق التعميم رقم 2026/17 بعد انقضاء المهلة." },
    { level: "warning", title: "مهمة اجتماع قيد التأخير", text: "إعداد مذكرة الموقف الخاصة بملف المنظمات الدولية لم يكتمل في الموعد." },
    { level: "info", title: "دورة تدريبية جديدة", text: "فتح التسجيل لبرنامج استخدام النظام للبعثات الجديدة حتى 20 مارس 2026." }
  ],
  dashboard: {
    summary: [
      { title: "نسبة الاستجابة للتعاميم", value: "86%", note: "مقابل هدف 90%" },
      { title: "متوسط جودة التقارير", value: "4.2/5", note: "تحسن 0.3 خلال ربع سنة" },
      { title: "المهام المتأخرة", value: "12", note: "7 عالية الأولوية" }
    ],
    kpis: [
      { label: "التقارير في موعدها", progress: 91 },
      { label: "إنجاز مهام الاجتماعات", progress: 84 },
      { label: "إكمال التدريب الإلزامي", progress: 74 }
    ],
    table: [
      ["الإدارة العامة للتخطيط", "93%", "88%", "4.5/5"],
      ["بعثة الرياض", "89%", "92%", "4.3/5"],
      ["بعثة القاهرة", "76%", "80%", "4.0/5"],
      ["الدائرة القنصلية", "81%", "73%", "3.9/5"]
    ]
  },
  reports: [
    {
      id: "r1",
      entity: "بعثة الرياض",
      title: "تقرير نشاط اقتصادي ربع سنوي",
      status: "مكتمل",
      statusTone: "success",
      due: "12 مارس 2026",
      score: "4.6/5",
      owner: "المستشار الاقتصادي",
      summary: "يغطي فرص التعاون التجاري والاستثمار المشترك ومخرجات اجتماعات الربع الأول.",
      overdue: false
    },
    {
      id: "r2",
      entity: "بعثة القاهرة",
      title: "تقرير إعلامي حول حضور اليمن في المنصات الإقليمية",
      status: "مطلوب استكمال",
      statusTone: "warning",
      due: "10 مارس 2026",
      score: "3.7/5",
      owner: "الملحق الإعلامي",
      summary: "ينقصه قسم تحليل الأثر وتوصيات المتابعة للربع القادم.",
      overdue: true
    },
    {
      id: "r3",
      entity: "الدائرة السياسية",
      title: "تقرير موضوعي عن مسار المشاورات الدولية",
      status: "متأخر",
      statusTone: "danger",
      due: "8 مارس 2026",
      score: "قيد التقييم",
      owner: "رئيس قسم المنظمات",
      summary: "لم يتم رفع النسخة المعتمدة حتى الآن رغم اقتراب اجتماع المراجعة القيادي.",
      overdue: true
    }
  ],
  circulars: [
    {
      id: "c1",
      code: "2026/17",
      title: "تحديث قاعدة بيانات التواصل الرسمي للبعثات",
      entity: "جميع البعثات",
      status: "قيد التنفيذ",
      statusTone: "warning",
      due: "15 مارس 2026",
      owner: "إدارة التخطيط",
      summary: "استجابت 18 بعثة من أصل 23، والمتبقي بحاجة إلى متابعة مباشرة.",
      overdue: true
    },
    {
      id: "c2",
      code: "2026/12",
      title: "رفع الخطط التشغيلية المعدلة للربع الثاني",
      entity: "البعثات والدوائر",
      status: "منجز",
      statusTone: "success",
      due: "5 مارس 2026",
      owner: "مكتب الوزير",
      summary: "أغلق التعميم بعد اعتماد النسخ المحدثة وترحيلها إلى لوحة الخطط.",
      overdue: false
    },
    {
      id: "c3",
      code: "2026/19",
      title: "تدقيق سجلات الموظفين المخولين بالنظام",
      entity: "الإدارات المركزية",
      status: "غير مقروء بالكامل",
      statusTone: "danger",
      due: "14 مارس 2026",
      owner: "إدارة النظم",
      summary: "3 دوائر لم تؤكد القراءة بعد، ما يعطل تحديث الصلاحيات الموسمية.",
      overdue: true
    }
  ],
  meetings: [
    {
      id: "m1",
      title: "اجتماع متابعة التحول الرقمي",
      entity: "الديوان العام",
      status: "قيد التنفيذ",
      statusTone: "warning",
      due: "18 مارس 2026",
      owner: "أمين سر اللجنة",
      summary: "يتضمن 6 تكاليف، أنجز منها 4 وبقيت مهمتان ترتبطان بالبنية المؤسسية.",
      overdue: false
    },
    {
      id: "m2",
      title: "اجتماع البعثات التجريبية",
      entity: "بعثات الرياض والقاهرة وكوالالمبور",
      status: "متأخر",
      statusTone: "danger",
      due: "11 مارس 2026",
      owner: "مدير إدارة المتابعة",
      summary: "هناك تأخر في رفع محاضر الإغلاق النهائية للمهام المتفق عليها.",
      overdue: true
    }
  ],
  plans: [
    {
      id: "p1",
      title: "الخطة التشغيلية للربع الثاني",
      entity: "الإدارة العامة للتخطيط",
      status: "معتمدة",
      statusTone: "success",
      due: "30 يونيو 2026",
      owner: "مدير التخطيط",
      summary: "ترتبط بـ 12 مؤشر أداء و4 مبادرات تحول رقمي رئيسية.",
      overdue: false
    },
    {
      id: "p2",
      title: "خطة رفع الجاهزية الرقمية للبعثات",
      entity: "قطاع البعثات",
      status: "قيد التنفيذ",
      statusTone: "warning",
      due: "15 يوليو 2026",
      owner: "وكيل قطاع البعثات",
      summary: "إنجاز 68%، مع تأخر في تجهيز حقائب التدريب لبعثتين.",
      overdue: false
    }
  ],
  missions: [
    {
      title: "بعثة الرياض",
      type: "بعثة دبلوماسية",
      status: "جاهزية عالية",
      kpis: ["الاستجابة 92%", "التقارير في موعدها 89%", "التدريب 83%"],
      note: "مرشحة لتكون ضمن بيئة الإطلاق الأولى للنظام."
    },
    {
      title: "بعثة القاهرة",
      type: "بعثة دبلوماسية",
      status: "تحتاج دعم متابعة",
      kpis: ["الاستجابة 80%", "الجودة 4.0/5", "المهام المتأخرة 3"],
      note: "يوصى بتكثيف الإسناد في وحدة التقارير والتحليل."
    },
    {
      title: "الدائرة القنصلية",
      type: "دائرة مركزية",
      status: "قابلة للتوسع",
      kpis: ["معدل الإنجاز 81%", "التعاميم المغلقة 73%", "التدريب 77%"],
      note: "جاهزة لربط المسارات القنصلية في المرحلة الثانية."
    }
  ],
  training: [
    {
      title: "برنامج استخدام النظام للقيادات والبعثات",
      audience: "رؤساء البعثات ومديرو الدوائر",
      completion: 74,
      seats: "58 من 78",
      note: "أولوية قصوى قبل الإطلاق التجريبي."
    },
    {
      title: "إعداد التقارير التحليلية وربطها بالمؤشرات",
      audience: "مسارات التخطيط والإعلام والسياسة",
      completion: 68,
      seats: "41 من 60",
      note: "تحتاج إلى متابعة البعثات ذات التقييمات المتوسطة."
    }
  ],
  governance: [
    {
      title: "مستويات الصلاحيات",
      text: "وزارة، بعثة، دائرة، مسار، مع تفويضات محلية وصلاحيات مؤقتة منضبطة بزمن ونطاق."
    },
    {
      title: "سجل التدقيق",
      text: "تسجيل كامل لعمليات الدخول والقراءة والاعتماد والتعديل والإغلاق مع تتبع زمني."
    },
    {
      title: "الوصول الاستثنائي",
      text: "صلاحية Break-Glass بموافقة مزدوجة وتوثيق إلزامي للسبب ومدة التفعيل."
    }
  ]
};

const viewConfig = {
  dashboard: {
    title: "لوحة القيادة التنفيذية",
    subtitle: "رؤية لحظية لأداء الوزارة والبعثات والتعاميم والمهام والخطط.",
    panelTitle: "المشهد التنفيذي العام",
    panelLabel: "لوحة مركزية"
  },
  reports: {
    title: "وحدة التقارير",
    subtitle: "متابعة التقارير الدورية والموضوعية وتقييم الجودة والالتزام بالمواعيد.",
    panelTitle: "سجل التقارير",
    panelLabel: "تقارير الوزارة"
  },
  circulars: {
    title: "وحدة التعاميم",
    subtitle: "إصدار وتتبع التعاميم مع التنبيهات والتصعيد ومسار المعالجة.",
    panelTitle: "سجل التعاميم",
    panelLabel: "التعاميم النشطة"
  },
  meetings: {
    title: "وحدة الاجتماعات",
    subtitle: "تحويل المحاضر إلى مهام قابلة للمتابعة والقياس والتصعيد.",
    panelTitle: "سجل الاجتماعات",
    panelLabel: "متابعة اللجان"
  },
  plans: {
    title: "وحدة الخطط",
    subtitle: "إدارة الخطط التشغيلية وربط المستهدفات بالمؤشرات والإنجاز الفعلي.",
    panelTitle: "سجل الخطط",
    panelLabel: "الخطط المعتمدة"
  },
  missions: {
    title: "ملفات البعثات والدوائر",
    subtitle: "ملف موحد لكل جهة يشمل الأداء والاستجابة والتقارير والتدريب.",
    panelTitle: "الجهات المرتبطة",
    panelLabel: "سجل الجهات"
  },
  training: {
    title: "منصة التدريب",
    subtitle: "برامج إلزامية وتخصصية مع نسب إكمال وسجلات حضور وأثر تدريبي.",
    panelTitle: "البرامج الحالية",
    panelLabel: "إدارة التدريب"
  },
  governance: {
    title: "الحوكمة والأمن",
    subtitle: "ضبط الصلاحيات والتدقيق والوصول الاستثنائي وتوزيع الأدوار المؤسسية.",
    panelTitle: "ملف الحوكمة",
    panelLabel: "إطار التحكم"
  }
};

const metricCards = document.getElementById("metric-cards");
const mainContent = document.getElementById("main-content");
const detailPanel = document.getElementById("detail-panel");
const alertsPanel = document.getElementById("alerts-panel");
const filtersBar = document.getElementById("view-filters");

function renderMetrics() {
  metricCards.innerHTML = datasets.metrics.map((metric) => `
    <button class="metric-card" data-view="${metric.id}">
      <span>${metric.label}</span>
      <strong>${metric.value}</strong>
      <div class="tag ${metric.tone}">${metric.trend}</div>
    </button>
  `).join("");
}

function getFilteredRecords(records) {
  return state.overdueOnly ? records.filter((record) => record.overdue) : records;
}

function createRecordList(records, labelKey) {
  const filtered = getFilteredRecords(records);
  if (!filtered.length) {
    return `<div class="empty-state">لا توجد عناصر مطابقة للفلاتر الحالية.</div>`;
  }

  return `<div class="record-list">
    ${filtered.map((record) => `
      <article class="record-card ${state.selectedId === record.id ? "is-selected" : ""}" data-record-id="${record.id}">
        <div class="record-top">
          <div>
            <div class="record-title">${record.title}</div>
            <div class="record-meta">${record.entity || record.code || ""}</div>
          </div>
          <span class="tag ${record.statusTone}">${record.status}</span>
        </div>
        <p class="record-desc">${record.summary}</p>
        <div class="record-bottom">
          <span class="tag info">${labelKey}: ${record.owner}</span>
          <span class="table-subtext">الموعد: ${record.due}</span>
        </div>
      </article>
    `).join("")}
  </div>`;
}

function renderDashboard() {
  const summaryCards = datasets.dashboard.summary.map((item) => `
    <div class="detail-card">
      <div class="detail-title">${item.title}</div>
      <strong>${item.value}</strong>
      <div class="subtle">${item.note}</div>
    </div>
  `).join("");

  const progressCards = datasets.dashboard.kpis.map((item) => `
    <div class="detail-card">
      <div class="detail-title">${item.label}</div>
      <div class="progress"><span style="width:${item.progress}%"></span></div>
      <div class="subtle">${item.progress}%</div>
    </div>
  `).join("");

  const tableRows = datasets.dashboard.table.map((row) => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
      <td>${row[3]}</td>
    </tr>
  `).join("");

  mainContent.innerHTML = `
    <div class="stats-row">${summaryCards}</div>
    <div class="two-col">
      <div class="detail-card">
        <div class="section-title">تقدم المؤشرات</div>
        <div class="detail-list">${progressCards}</div>
      </div>
      <div class="detail-card">
        <div class="section-title">ملخص تنفيذي</div>
        <p class="record-desc">
          يوضح هذا المشهد كيف ستطالع القيادة حالة الوزارة في شاشة واحدة: نسب الإنجاز، الجهات المتقدمة،
          الجهات التي تحتاج تدخلًا، والتوزيع العملي لمواطن التأخير والجودة.
        </p>
      </div>
    </div>
    <div class="detail-card">
      <div class="section-title">الأداء حسب الجهة</div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>الجهة</th>
              <th>التقارير في الموعد</th>
              <th>التعاميم المغلقة</th>
              <th>جودة التقارير</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>
  `;

  detailPanel.innerHTML = `
    <div class="detail-list">
      <div class="detail-card">
        <div class="detail-title">قرار موصى به</div>
        <p class="record-desc">توجيه متابعة مركزة لبعثة القاهرة والدائرة السياسية خلال الأسبوع القادم.</p>
      </div>
      <div class="detail-card">
        <div class="detail-title">أولوية هذا الأسبوع</div>
        <p class="record-desc">إغلاق التعميم 2026/17 ورفع التقرير الموضوعي المتأخر قبل اجتماع المراجعة.</p>
      </div>
    </div>
  `;
}

function renderRecordView(viewName, records, ownerLabel) {
  if (!state.selectedId && records.length) {
    state.selectedId = getFilteredRecords(records)[0]?.id || null;
  }

  mainContent.innerHTML = createRecordList(records, ownerLabel);
  const selected = records.find((item) => item.id === state.selectedId) || getFilteredRecords(records)[0];

  detailPanel.innerHTML = selected ? `
    <div class="detail-list">
      <div class="detail-card">
        <div class="detail-title">${selected.title}</div>
        <div class="detail-row">
          <span>الجهة</span>
          <span>${selected.entity || "-"}</span>
        </div>
        <div class="detail-row">
          <span>الحالة</span>
          <span class="tag ${selected.statusTone}">${selected.status}</span>
        </div>
        <div class="detail-row">
          <span>${ownerLabel}</span>
          <span>${selected.owner}</span>
        </div>
        <div class="detail-row">
          <span>الموعد</span>
          <span>${selected.due}</span>
        </div>
      </div>
      <div class="detail-card">
        <div class="detail-title">موجز تنفيذي</div>
        <p class="record-desc">${selected.summary}</p>
      </div>
      <div class="detail-card">
        <div class="detail-title">إجراء مقترح</div>
        <p class="record-desc">${selected.overdue ? "يوصى بالتصعيد أو طلب الاستكمال الفوري." : "الوضع ضمن المسار ويمكن الاكتفاء بالمتابعة الدورية."}</p>
      </div>
    </div>
  ` : `<div class="empty-state">لا توجد تفاصيل متاحة.</div>`;

  attachRecordEvents(viewName);
}

function renderMissions() {
  mainContent.innerHTML = `
    <div class="mission-list">
      ${datasets.missions.map((mission) => `
        <div class="mission-card">
          <div class="record-top">
            <div>
              <div class="entity-title">${mission.title}</div>
              <div class="table-subtext">${mission.type}</div>
            </div>
            <span class="tag info">${mission.status}</span>
          </div>
          <div class="record-desc">${mission.note}</div>
          <div class="three-col">
            ${mission.kpis.map((kpi) => `<div class="tag">${kpi}</div>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  detailPanel.innerHTML = `
    <div class="detail-card">
      <div class="detail-title">استخدام الوحدة</div>
      <p class="record-desc">
        في النسخة الكاملة ستحتوي كل جهة على ملف تفصيلي يشمل البيانات الأساسية والكادر والتقارير والخطط
        والتعاميم وسجل الاجتماعات والصلاحيات.
      </p>
    </div>
  `;
}

function renderTraining() {
  mainContent.innerHTML = `
    <div class="training-list">
      ${datasets.training.map((course) => `
        <div class="detail-card">
          <div class="record-top">
            <div>
              <div class="detail-title">${course.title}</div>
              <div class="table-subtext">${course.audience}</div>
            </div>
            <span class="tag info">${course.seats}</span>
          </div>
          <p class="record-desc">${course.note}</p>
          <div class="progress"><span style="width:${course.completion}%"></span></div>
          <div class="subtle">نسبة الإكمال: ${course.completion}%</div>
        </div>
      `).join("")}
    </div>
  `;

  detailPanel.innerHTML = `
    <div class="detail-card">
      <div class="detail-title">أثر التدريب</div>
      <p class="record-desc">البرامج التدريبية مرتبطة مباشرة بجاهزية الإطلاق وتخفيض أخطاء الاستخدام واعتماد النماذج الموحدة.</p>
    </div>
  `;
}

function renderGovernance() {
  mainContent.innerHTML = `
    <div class="governance-list">
      ${datasets.governance.map((item) => `
        <div class="governance-card">
          <div class="detail-title">${item.title}</div>
          <p>${item.text}</p>
        </div>
      `).join("")}
      <div class="timeline-card">
        <div class="detail-title">مصفوفة الأدوار الأساسية</div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>الدور</th>
                <th>النطاق</th>
                <th>الصلاحية الأساسية</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>مدير النظام</td><td>وزارة</td><td>إدارة السياسات والمستخدمين والتدقيق</td></tr>
              <tr><td>إدارة التخطيط</td><td>وزارة</td><td>اعتماد ومتابعة وإغلاق وتقييم</td></tr>
              <tr><td>رئيس بعثة</td><td>بعثة</td><td>اعتماد وتقويض محلي داخل البعثة</td></tr>
              <tr><td>مدير دائرة</td><td>دائرة</td><td>إدارة الخطط والتقارير والاجتماعات</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  detailPanel.innerHTML = `
    <div class="detail-card">
      <div class="detail-title">رسالة الحوكمة</div>
      <p class="record-desc">النظام المقترح لا يكتفي بالأتمتة، بل يفرض انضباطًا مؤسسيًا واضحًا في الصلاحيات والمسؤوليات والتدقيق.</p>
    </div>
  `;
}

function renderAlerts() {
  alertsPanel.innerHTML = `
    <div class="alert-list">
      ${datasets.alerts.map((alert) => `
        <div class="alert-item">
          <div class="record-top">
            <div class="detail-title">${alert.title}</div>
            <span class="tag ${alert.level}">${alert.level === "danger" ? "حرج" : alert.level === "warning" ? "تنبيه" : "معلومة"}</span>
          </div>
          <div class="record-desc">${alert.text}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderFilters() {
  const applicable = ["reports", "circulars", "meetings", "plans"].includes(state.activeView);
  filtersBar.innerHTML = applicable ? `
    <button class="filter-chip ${state.overdueOnly ? "primary-btn" : ""}" id="overdue-chip">العناصر المتأخرة</button>
    <button class="filter-chip" id="reset-chip">إعادة الضبط</button>
  ` : "";

  if (applicable) {
    document.getElementById("overdue-chip").addEventListener("click", () => {
      state.overdueOnly = !state.overdueOnly;
      state.selectedId = null;
      render();
    });
    document.getElementById("reset-chip").addEventListener("click", () => {
      state.overdueOnly = false;
      state.selectedId = null;
      render();
    });
  }
}

function attachRecordEvents(viewName) {
  document.querySelectorAll("[data-record-id]").forEach((item) => {
    item.addEventListener("click", () => {
      state.selectedId = item.getAttribute("data-record-id");
      renderViewOnly(viewName);
    });
  });
}

function renderViewOnly(viewName) {
  switch (viewName) {
    case "dashboard":
      renderDashboard();
      break;
    case "reports":
      renderRecordView(viewName, datasets.reports, "المسؤول");
      break;
    case "circulars":
      renderRecordView(viewName, datasets.circulars, "جهة الإصدار");
      break;
    case "meetings":
      renderRecordView(viewName, datasets.meetings, "منسق المتابعة");
      break;
    case "plans":
      renderRecordView(viewName, datasets.plans, "مالك الخطة");
      break;
    case "missions":
      renderMissions();
      break;
    case "training":
      renderTraining();
      break;
    case "governance":
      renderGovernance();
      break;
    default:
      renderDashboard();
  }
}

function renderHeader() {
  const config = viewConfig[state.activeView];
  document.getElementById("view-title").textContent = config.title;
  document.getElementById("view-subtitle").textContent = config.subtitle;
  document.getElementById("panel-title").textContent = config.panelTitle;
  document.getElementById("panel-label").textContent = config.panelLabel;
}

function render() {
  renderHeader();
  renderMetrics();
  renderFilters();
  renderViewOnly(state.activeView);
  renderAlerts();

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.activeView);
  });

  document.querySelectorAll(".metric-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.view;
      state.selectedId = null;
      render();
    });
  });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeView = button.dataset.view;
    state.selectedId = null;
    render();
  });
});

document.getElementById("focus-toggle").addEventListener("click", () => {
  state.overdueOnly = !state.overdueOnly;
  state.selectedId = null;
  render();
});

document.getElementById("simulate-btn").addEventListener("click", () => {
  document.getElementById("hero-response").textContent = "89%";
  document.getElementById("hero-overdue").textContent = "9";
  document.getElementById("hero-training").textContent = "79%";
});

render();
