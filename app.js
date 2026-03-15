const STORAGE_KEY = "yemeni_diplomat_system_v3";

const CANONICAL_DEPARTMENTS = [
  { id: "dept-gulf", name: "دائرة الجزيرة والخليج", username: "gulf_dept", password: "Gulf@2026" },
  { id: "dept-arab-world", name: "دائرة الوطن العربي", username: "arab_world_dept", password: "ArabWorld@2026" },
  { id: "dept-asia-australia", name: "دائرة آسيا وأستراليا", username: "asia_dept", password: "Asia@2026" },
  { id: "dept-africa", name: "دائرة أفريقيا", username: "africa_dept", password: "Africa@2026" },
  { id: "dept-europe", name: "دائرة أوروبا", username: "europe_dept", password: "Europe@2026" },
  { id: "dept-americas", name: "دائرة الأمريكتين", username: "americas_dept", password: "Americas@2026" }
];

const CANONICAL_MISSIONS = [
  { id: "mission-riyadh", name: "بعثة الرياض", departmentId: "dept-gulf", username: "riyadh", password: "Riyadh@2026" },
  { id: "mission-abu-dhabi", name: "بعثة أبوظبي", departmentId: "dept-gulf", username: "abudhabi", password: "AbuDhabi@2026" },
  { id: "mission-doha", name: "بعثة الدوحة", departmentId: "dept-gulf", username: "doha", password: "Doha@2026" },
  { id: "mission-manama", name: "بعثة المنامة", departmentId: "dept-gulf", username: "manama", password: "Manama@2026" },
  { id: "mission-muscat", name: "بعثة مسقط", departmentId: "dept-gulf", username: "muscat", password: "Muscat@2026" },
  { id: "mission-kuwait", name: "بعثة الكويت", departmentId: "dept-gulf", username: "kuwait", password: "Kuwait@2026" },
  { id: "mission-baghdad", name: "بعثة بغداد", departmentId: "dept-gulf", username: "baghdad", password: "Baghdad@2026" },

  { id: "mission-cairo", name: "بعثة القاهرة", departmentId: "dept-arab-world", username: "cairo", password: "Cairo@2026" },
  { id: "mission-algiers", name: "بعثة الجزائر", departmentId: "dept-arab-world", username: "algiers", password: "Algiers@2026" },
  { id: "mission-beirut", name: "بعثة بيروت", departmentId: "dept-arab-world", username: "beirut", password: "Beirut@2026" },
  { id: "mission-tunis", name: "بعثة تونس", departmentId: "dept-arab-world", username: "tunis", password: "Tunis@2026" },
  { id: "mission-rabat", name: "بعثة الرباط", departmentId: "dept-arab-world", username: "rabat", password: "Rabat@2026" },
  { id: "mission-amman", name: "بعثة عمّان", departmentId: "dept-arab-world", username: "amman", password: "Amman@2026" },
  { id: "mission-nouakchott", name: "بعثة نواكشوط", departmentId: "dept-arab-world", username: "nouakchott", password: "Nouakchott@2026" },
  { id: "mission-libya", name: "بعثة ليبيا", departmentId: "dept-arab-world", username: "libya", password: "Libya@2026" },
  { id: "mission-damascus", name: "بعثة دمشق", departmentId: "dept-arab-world", username: "damascus", password: "Damascus@2026" },

  { id: "mission-ankara", name: "بعثة أنقرة", departmentId: "dept-asia-australia", username: "ankara", password: "Ankara@2026" },
  { id: "mission-beijing", name: "بعثة بكين", departmentId: "dept-asia-australia", username: "beijing", password: "Beijing@2026" },
  { id: "mission-islamabad", name: "بعثة اسلام اباد", departmentId: "dept-asia-australia", username: "islamabad", password: "Islamabad@2026" },
  { id: "mission-kuala-lumpur", name: "بعثة كوالالمبور", departmentId: "dept-asia-australia", username: "kualalumpur", password: "KualaLumpur@2026" },
  { id: "mission-jakarta", name: "بعثة جاكرتا", departmentId: "dept-asia-australia", username: "jakarta", password: "Jakarta@2026" },
  { id: "mission-tokyo", name: "بعثة طوكيو", departmentId: "dept-asia-australia", username: "tokyo", password: "Tokyo@2026" },
  { id: "mission-new-delhi", name: "بعثة نيودلهي", departmentId: "dept-asia-australia", username: "newdelhi", password: "NewDelhi@2026" },
  { id: "mission-tehran", name: "بعثة طهران", departmentId: "dept-asia-australia", username: "tehran", password: "Tehran@2026" },

  { id: "mission-djibouti", name: "بعثة جيبوتي", departmentId: "dept-africa", username: "djibouti", password: "Djibouti@2026" },
  { id: "mission-khartoum", name: "بعثة الخرطوم", departmentId: "dept-africa", username: "khartoum", password: "Khartoum@2026" },
  { id: "mission-mogadishu", name: "بعثة مقديشو", departmentId: "dept-africa", username: "mogadishu", password: "Mogadishu@2026" },
  { id: "mission-addis-ababa", name: "بعثة أديس أبابا", departmentId: "dept-africa", username: "addisababa", password: "AddisAbaba@2026" },
  { id: "mission-dar-es-salaam", name: "بعثة دار السلام", departmentId: "dept-africa", username: "daressalaam", password: "DarEsSalaam@2026" },
  { id: "mission-nairobi", name: "بعثة نيروبي", departmentId: "dept-africa", username: "nairobi", password: "Nairobi@2026" },
  { id: "mission-asmara", name: "بعثة أسمرا", departmentId: "dept-africa", username: "asmara", password: "Asmara@2026" },
  { id: "mission-pretoria", name: "بعثة بريتوريا", departmentId: "dept-africa", username: "pretoria", password: "Pretoria@2026" },

  { id: "mission-vienna", name: "بعثة فيينا", departmentId: "dept-europe", username: "vienna", password: "Vienna@2026" },
  { id: "mission-moscow", name: "بعثة موسكو", departmentId: "dept-europe", username: "moscow", password: "Moscow@2026" },
  { id: "mission-rome", name: "بعثة روما", departmentId: "dept-europe", username: "rome", password: "Rome@2026" },
  { id: "mission-madrid", name: "بعثة مدريد", departmentId: "dept-europe", username: "madrid", password: "Madrid@2026" },
  { id: "mission-paris", name: "بعثة باريس", departmentId: "dept-europe", username: "paris", password: "Paris@2026" },
  { id: "mission-budapest", name: "بعثة بودابست", departmentId: "dept-europe", username: "budapest", password: "Budapest@2026" },
  { id: "mission-prague", name: "بعثة براغ", departmentId: "dept-europe", username: "prague", password: "Prague@2026" },
  { id: "mission-brussels", name: "بعثة بروكسل", departmentId: "dept-europe", username: "brussels", password: "Brussels@2026" },
  { id: "mission-sofia", name: "بعثة صوفيا", departmentId: "dept-europe", username: "sofia", password: "Sofia@2026" },
  { id: "mission-berlin", name: "بعثة برلين", departmentId: "dept-europe", username: "berlin", password: "Berlin@2026" },
  { id: "mission-warsaw", name: "بعثة وارسو", departmentId: "dept-europe", username: "warsaw", password: "Warsaw@2026" },
  { id: "mission-london", name: "بعثة لندن", departmentId: "dept-europe", username: "london", password: "London@2026" },
  { id: "mission-geneva", name: "بعثة جنيف", departmentId: "dept-europe", username: "geneva", password: "Geneva@2026" },
  { id: "mission-hague", name: "بعثة لاهاي", departmentId: "dept-europe", username: "hague", password: "Hague@2026" },

  { id: "mission-ottawa", name: "بعثة أوتاوا", departmentId: "dept-americas", username: "ottawa", password: "Ottawa@2026" },
  { id: "mission-havana", name: "بعثة هافانا", departmentId: "dept-americas", username: "havana", password: "Havana@2026" },
  { id: "mission-washington", name: "بعثة واشنطن", departmentId: "dept-americas", username: "washington", password: "Washington@2026" }
];

const LEGACY_DEPARTMENT_ID_MAP = {
  "dept-arabia": "dept-gulf"
};

const REPORT_TYPE_OPTIONS = {
  activity: ["نشاط"],
  periodic: ["ربع سنوي", "نصف سنوي", "سنوي"],
  thematic: ["موضوعي"]
};

const THEMATIC_TRACK_OPTIONS = ["سياسي", "اقتصادي", "إعلامي", "ثقافي", "قنصلي"];

const BILATERAL_INDICATOR_FIELDS = [
  { key: "political", label: "السياسية", hint: "الاتصالات الرسمية، الزيارات، التنسيق في المحافل الدولية" },
  { key: "economic", label: "الاقتصادية والاستثمارية", hint: "التبادل التجاري، الاستثمارات، الاتفاقيات الاقتصادية" },
  { key: "parliamentary", label: "البرلمانية", hint: "الزيارات البرلمانية، مذكرات التفاهم، لجان الصداقة" },
  { key: "humanitarian", label: "الإنسانية والإغاثية", hint: "المساعدات الإنسانية وبرامج الدعم والتنمية" },
  { key: "health", label: "الصحية والطبية", hint: "الصحة العامة، البعثات الطبية، دعم القطاع الصحي" },
  { key: "military", label: "العسكرية", hint: "التعاون الدفاعي، التدريب، تبادل المعلومات" },
  { key: "security", label: "الأمنية", hint: "مكافحة الإرهاب والجريمة والهجرة غير الشرعية" },
  { key: "consular", label: "القنصلية", hint: "التسهيلات القنصلية وتبادل الخبرات القانونية" },
  { key: "cultural", label: "الثقافية والعلمية", hint: "التبادل الثقافي والمنح والأنشطة الأكاديمية" },
  { key: "international", label: "المنظمات الدولية", hint: "التنسيق والتصويت المتبادل والمبادرات المشتركة" },
  { key: "other", label: "أخرى", hint: "الرياضة والسياحة والإعلام وغيرها" }
];

const REPORT_QUALITY_FIELDS = [
  { key: "timeliness", label: "الالتزام بالموعد" },
  { key: "completeness", label: "شمولية المحتوى" },
  { key: "analysis", label: "جودة التحليل" }
];

const seedState = () => ({
  sessionUserId: null,
  activeView: "dashboard",
  selectedReportId: "report-1",
  editingReportId: null,
  editingCircularId: null,
  editingMeetingId: null,
  editingPlanId: null,
  loginError: "",
  departments: CANONICAL_DEPARTMENTS,
  missions: CANONICAL_MISSIONS,
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
      requestFamily: "periodic",
      thematicTrack: "",
      createdBy: "إدارة التخطيط",
      createdByRole: "planning",
      requestedByDepartmentId: "",
      dueDate: "2026-06-30",
      targetMissionIds: CANONICAL_MISSIONS.map((mission) => mission.id),
      completedMissionIds: ["mission-cairo", "mission-riyadh", "mission-paris"],
      status: "نشط"
    }
  ],
  reports: [
    {
      id: "report-1",
      missionId: "mission-cairo",
      departmentId: "dept-arab-world",
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
      reportFamily: "periodic",
      countrySnapshot: "ملف موجز عن بلد الاعتماد وأهم المتغيرات السياسية والاقتصادية ذات الصلة بالعلاقات الثنائية.",
      bilateralAssessment: "قراءة تقييمية لمؤشرات العلاقات الثنائية واتجاهها العام خلال الفترة محل التقرير.",
      supportCooperation: "عرض لأوجه الدعم والتعاون السياسي والاقتصادي والإنساني والتدريبي وما تحقق منها.",
      agreementsStatus: "موقف الاتفاقيات ومذكرات التفاهم النافذة وما يحتاج إلى تفعيل أو متابعة.",
      completedActivities: "أبرز الأنشطة والملفات التي أنجزتها البعثة خلال الفترة.",
      pendingActivities: "الملفات والأنشطة التي لم تستكمل وتحتاج إلى متابعة لاحقة.",
      relationshipOutlook: "تقدير البعثة لمستقبل العلاقات وأهم الفرص والمعوقات.",
      visitsSummary: "خلاصة الزيارات المتبادلة والاتصالات الرسمية خلال الفترة.",
      communityUpdate: "تحديث موجز عن شؤون الجالية اليمنية ذات الصلة ببلد الاعتماد.",
      bilateralIndicators: {
        political: { trend: "تنامي", note: "نشاط اتصالات رسمية منتظم وتنسيق في المواقف الدولية." },
        economic: { trend: "استقرار", note: "حراك اقتصادي محدود مع فرص توسع قائمة." },
        parliamentary: { trend: "استقرار", note: "قنوات البرلمان قائمة دون تطور كبير." },
        humanitarian: { trend: "تنامي", note: "وجود دعم إنساني وتسهيلات لبرامج الإغاثة." },
        health: { trend: "استقرار", note: "تعاون صحي متقطع ويحتاج إلى تأطير مؤسسي." },
        military: { trend: "تراجع", note: "غياب برامج تعاون عسكرية خلال الفترة." },
        security: { trend: "استقرار", note: "تنسيق أمني محدود في قضايا مشتركة." },
        consular: { trend: "تنامي", note: "تحسن في الخدمات والمعالجات القنصلية." },
        cultural: { trend: "استقرار", note: "مبادرات ثقافية وأكاديمية محدودة." },
        international: { trend: "تنامي", note: "تنسيق أفضل في بعض ملفات المنظمات الدولية." },
        other: { trend: "استقرار", note: "لا توجد متغيرات كبيرة في المجالات الأخرى." }
      },
      reviewNotes: "",
      qualityScores: { timeliness: 5, completeness: 4, analysis: 4 },
      submittedOn: "2026-03-10",
      thematicSituation: "",
      thematicImplications: "",
      thematicRecommendations: "",
      workflowStage: "معتمد من التخطيط",
      createdAt: "2026-03-10 09:20",
      workflowHistory: [
        { actor: "بعثة القاهرة", action: "رفع التقرير", stage: "مرفوع من البعثة", at: "2026-03-10 09:20" },
        { actor: "دائرة الوطن العربي", action: "بدء مراجعة الدائرة", stage: "قيد مراجعة الدائرة", at: "2026-03-10 11:00" },
        { actor: "إدارة التخطيط", action: "اعتماد التقرير", stage: "معتمد من التخطيط", at: "2026-03-11 08:30" }
      ]
    }
  ],
  circulars: [
    {
      id: "circ-1",
      title: "تحديث قاعدة بيانات التواصل الرسمي",
      issuedBy: "إدارة التخطيط",
      targetMissionIds: CANONICAL_MISSIONS.map((mission) => mission.id),
      dueDate: "2026-03-28",
      status: "نشط",
      readMissionIds: ["mission-cairo", "mission-riyadh", "mission-washington"],
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
      departmentId: "dept-gulf",
      summary: "مراجعة تقدم الوحدات الأساسية والجاهزية التشغيلية.",
      tasks: [
        { id: "task-1", title: "استكمال نماذج التقارير", assignee: "بعثة الرياض", status: "قيد التنفيذ", priority: "عالية" },
        { id: "task-2", title: "مراجعة صلاحيات البعثات", assignee: "دائرة الجزيرة والخليج", status: "منجز", priority: "متوسطة" }
      ],
      workflowHistory: [
        { actor: "إدارة التخطيط", action: "تسجيل محضر الاجتماع", at: "2026-03-15 10:00" }
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
      progress: 72,
      workflowHistory: [
        { actor: "بعثة الرياض", action: "إعداد الخطة", at: "2026-03-15 09:30" },
        { actor: "إدارة التخطيط", action: "متابعة تقدم الخطة", at: "2026-03-15 10:10" }
      ]
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
  const seeded = seedState();
  const parsedCoreUsers = Array.isArray(parsed.coreUsers) ? parsed.coreUsers : [];
  parsed.coreUsers = seeded.coreUsers.map((seedUser) => {
    const existing = parsedCoreUsers.find((user) => user.id === seedUser.id || user.username === seedUser.username);
    return existing ? { ...seedUser, ...existing } : seedUser;
  });
  const parsedDepartments = Array.isArray(parsed.departments) ? parsed.departments : [];
  parsed.departments = CANONICAL_DEPARTMENTS.map((department) => {
    const existing = parsedDepartments.find((item) => item.id === department.id || item.id === Object.keys(LEGACY_DEPARTMENT_ID_MAP).find((legacyId) => LEGACY_DEPARTMENT_ID_MAP[legacyId] === department.id));
    return existing ? { ...department, ...existing, id: department.id, name: department.name } : department;
  });
  const parsedMissions = Array.isArray(parsed.missions) ? parsed.missions : [];
  const canonicalMissions = CANONICAL_MISSIONS.map((mission) => {
    const existing = parsedMissions.find((item) => item.id === mission.id || item.username === mission.username);
    return existing ? { ...mission, ...existing, id: mission.id, name: mission.name, departmentId: mission.departmentId } : mission;
  });
  const customMissions = parsedMissions
    .filter((mission) => !CANONICAL_MISSIONS.some((item) => item.id === mission.id))
    .map((mission) => ({
      ...mission,
      departmentId: LEGACY_DEPARTMENT_ID_MAP[mission.departmentId] || mission.departmentId
    }));
  parsed.missions = [...canonicalMissions, ...customMissions];
  parsed.reportRequests = Array.isArray(parsed.reportRequests) ? parsed.reportRequests : seeded.reportRequests;
  parsed.editingReportId = parsed.editingReportId || null;
  parsed.editingCircularId = parsed.editingCircularId || null;
  parsed.editingMeetingId = parsed.editingMeetingId || null;
  parsed.editingPlanId = parsed.editingPlanId || null;
  parsed.reportRequests = parsed.reportRequests.map((request) => ({
    ...request,
    requestFamily: request.requestFamily || inferReportFamily(request),
    thematicTrack: request.thematicTrack || "",
    createdByRole: request.createdByRole || "planning",
    requestedByDepartmentId: request.requestedByDepartmentId || "",
    targetMissionIds: Array.isArray(request.targetMissionIds) ? request.targetMissionIds : [],
    completedMissionIds: Array.isArray(request.completedMissionIds) ? request.completedMissionIds : [],
    status: request.status || "نشط"
  }));
  parsed.circulars = Array.isArray(parsed.circulars) ? parsed.circulars : seedState().circulars;
  parsed.circulars = parsed.circulars.map((circular) => ({
    ...circular,
    workflowHistory: Array.isArray(circular.workflowHistory) ? circular.workflowHistory : [],
    processingLog: Array.isArray(circular.processingLog) ? circular.processingLog : []
  }));
  parsed.meetings = (Array.isArray(parsed.meetings) ? parsed.meetings : seedState().meetings).map((meeting) => ({
    ...meeting,
    departmentId: LEGACY_DEPARTMENT_ID_MAP[meeting.departmentId] || meeting.departmentId,
    workflowHistory: Array.isArray(meeting.workflowHistory) ? meeting.workflowHistory : [],
    tasks: Array.isArray(meeting.tasks) ? meeting.tasks.map((task) => ({
      ...task,
      id: task.id || `task-${Math.random().toString(16).slice(2, 8)}`,
      priority: task.priority || "متوسطة",
      assignee: task.assignee === "الدائرة الجغرافية لشبه الجزيرة العربية" ? "دائرة الجزيرة والخليج" : task.assignee
    })) : []
  }));
  parsed.plans = (Array.isArray(parsed.plans) ? parsed.plans : seedState().plans).map((plan) => ({
    ...plan,
    workflowHistory: Array.isArray(plan.workflowHistory) ? plan.workflowHistory : []
  }));
  parsed.trainings = Array.isArray(parsed.trainings) ? parsed.trainings : seedState().trainings;
  parsed.auditLog = Array.isArray(parsed.auditLog) ? parsed.auditLog : seedState().auditLog;
  parsed.reports = parsed.reports.map((report) => ({
    ...report,
    departmentId: parsed.missions.find((mission) => mission.id === report.missionId)?.departmentId || LEGACY_DEPARTMENT_ID_MAP[report.departmentId] || report.departmentId,
    reportFamily: inferReportFamily(report),
    countrySnapshot: report.countrySnapshot || "",
    bilateralAssessment: report.bilateralAssessment || "",
    supportCooperation: report.supportCooperation || "",
    agreementsStatus: report.agreementsStatus || "",
    completedActivities: report.completedActivities || "",
    pendingActivities: report.pendingActivities || "",
    relationshipOutlook: report.relationshipOutlook || "",
    visitsSummary: report.visitsSummary || "",
    communityUpdate: report.communityUpdate || "",
    bilateralIndicators: normalizeBilateralIndicators(report.bilateralIndicators),
    reviewNotes: report.reviewNotes || "",
    qualityScores: normalizeQualityScores(report.qualityScores),
    submittedOn: report.submittedOn || "",
    thematicSituation: report.thematicSituation || "",
    thematicImplications: report.thematicImplications || "",
    thematicRecommendations: report.thematicRecommendations || "",
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
    return state.reportRequests.filter((request) => (
      request.requestedByDepartmentId === user.departmentId ||
      request.targetMissionIds.some((id) => missionIds.includes(id))
    ));
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

function getPlanActions(plan, user = getSessionUser()) {
  if (!user) return [];
  const actions = [];
  const ownMissionPlan = user.role === "mission" && plan.ownerType === "mission" && plan.ownerId === user.missionId;
  const ownDepartmentPlan = user.role === "department" && plan.ownerType === "department" && plan.ownerId === user.departmentId;
  const central = user.role === "planning" || user.role === "admin";
  if (ownMissionPlan || ownDepartmentPlan || central) {
    actions.push({ key: "progress-10", label: "رفع الإنجاز +10%", delta: 10 });
    actions.push({ key: "mark-complete", label: "اعتبار الخطة منجزة", status: "منجز", progress: 100 });
    actions.push({ key: "mark-delayed", label: "اعتبار الخطة متأخرة", status: "متأخرة" });
  }
  return actions;
}

function getMeetingActions(meeting, task, user = getSessionUser()) {
  if (!user || !task) return [];
  const actions = [];
  const missionName = user.role === "mission" ? getMissionName(user.missionId) : "";
  const departmentName = user.role === "department" ? getDepartmentName(user.departmentId) : "";
  const canUpdateTask = user.role === "admin" || user.role === "planning" || task.assignee === missionName || task.assignee === departmentName;
  if (canUpdateTask && task.status !== "منجز") {
    actions.push({ key: "start-task", label: "بدء التنفيذ", nextStatus: "قيد التنفيذ" });
    actions.push({ key: "complete-task", label: "إنجاز المهمة", nextStatus: "منجز" });
  }
  if (canUpdateTask && task.status !== "ملغى") {
    actions.push({ key: "delay-task", label: "وضع كمُتأخر", nextStatus: "متأخر" });
  }
  return actions;
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
  const submittedMissionIds = [...new Set(state.reports
    .filter((report) => report.requestId === request.id && report.workflowStage !== "أعيد للبعثة للاستكمال")
    .map((report) => report.missionId))];
  const approvedMissionIds = [...new Set(state.reports
    .filter((report) => report.requestId === request.id && (report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف"))
    .map((report) => report.missionId))];
  const done = submittedMissionIds.length;
  const total = request.targetMissionIds.length;
  return {
    done,
    approved: approvedMissionIds.length,
    total,
    pending: total - done,
    percent: total ? Math.round((done / total) * 100) : 0
  };
}

function stageTone(stage) {
  if (stage === "مغلق ومؤرشف" || stage === "معتمد من التخطيط") return "success";
  if (stage === "قيد مراجعة الدائرة") return "warning";
  if (stage === "أعيد للبعثة للاستكمال") return "danger";
  return "info";
}

function getPlanStatusTone(status) {
  if (status === "منجز") return "success";
  if (status === "متأخرة") return "danger";
  if (status === "قيد التنفيذ") return "warning";
  return "info";
}

function inferReportFamily(report) {
  if (report?.reportFamily) return report.reportFamily;
  if (report?.type === "سنوي" || report?.type === "نصف سنوي" || report?.type === "ربع سنوي") return "periodic";
  if (report?.type === "موضوعي") return "thematic";
  return "activity";
}

function normalizeBilateralIndicators(indicators = {}) {
  return BILATERAL_INDICATOR_FIELDS.reduce((acc, field) => {
    const current = indicators[field.key] || {};
    acc[field.key] = {
      trend: current.trend || "",
      note: current.note || ""
    };
    return acc;
  }, {});
}

function normalizeQualityScores(scores = {}) {
  return REPORT_QUALITY_FIELDS.reduce((acc, field) => {
    const value = Number(scores[field.key] || 0);
    acc[field.key] = Number.isFinite(value) && value >= 1 && value <= 5 ? value : 0;
    return acc;
  }, {});
}

function getRequestLifecycle(request) {
  const completion = getCompletion(request);
  const today = new Date().toISOString().slice(0, 10);
  if (request.status === "مغلق" || (completion.total > 0 && completion.approved === completion.total)) {
    return { label: "مكتمل", tone: "success" };
  }
  if (request.status === "نشط" && request.dueDate && request.dueDate < today && completion.pending > 0) {
    return { label: "متأخر", tone: "danger" };
  }
  return { label: request.status || "نشط", tone: request.status === "نشط" ? "warning" : "info" };
}

function getReportOriginLabel(report) {
  return report.requestId ? "استجابة لطلب رسمي" : "مبادرة من البعثة";
}

function calculateTimelinessScore(report) {
  if (!report?.requestId || !report.submittedOn) return 0;
  const request = state.reportRequests.find((item) => item.id === report.requestId);
  if (!request?.dueDate) return 0;
  if (report.submittedOn <= request.dueDate) return 5;
  const diffDays = Math.ceil((new Date(report.submittedOn) - new Date(request.dueDate)) / 86400000);
  if (diffDays <= 7) return 3;
  return 1;
}

function getReportQualitySummary(report) {
  const baseScores = normalizeQualityScores(report.qualityScores);
  const scores = {
    timeliness: calculateTimelinessScore(report) || baseScores.timeliness,
    completeness: baseScores.completeness,
    analysis: baseScores.analysis
  };
  const values = Object.values(scores).filter((value) => value > 0);
  const average = values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1) : "";
  return { scores, average };
}

function canIssueReportRequest(user = getSessionUser(), requestFamily = "activity") {
  if (!user) return false;
  if (requestFamily === "periodic") {
    return user.role === "admin" || user.role === "planning" || user.role === "leadership";
  }
  return user.role === "admin" || user.role === "planning" || user.role === "leadership" || user.role === "department";
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

function syncRequestCompletion(requestId, missionId) {
  if (!requestId || !missionId) return;
  const request = state.reportRequests.find((item) => item.id === requestId);
  if (!request) return;

  const hasValidReport = state.reports.some((report) => (
    report.requestId === requestId &&
    report.missionId === missionId &&
    report.workflowStage !== "أعيد للبعثة للاستكمال"
  ));

  if (hasValidReport && !request.completedMissionIds.includes(missionId)) {
    request.completedMissionIds.push(missionId);
  }

  if (!hasValidReport) {
    request.completedMissionIds = request.completedMissionIds.filter((id) => id !== missionId);
  }
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

function canEditReport(report, user = getSessionUser()) {
  if (!report || !user) return false;
  return user.role === "mission" && user.missionId === report.missionId && report.workflowStage !== "مغلق ومؤرشف";
}

function canEditCircular(circular, user = getSessionUser()) {
  return Boolean(circular && user && (user.role === "planning" || user.role === "admin") && circular.status !== "مغلق");
}

function canEditMeeting(meeting, user = getSessionUser()) {
  if (!meeting || !user) return false;
  if (user.role === "planning" || user.role === "admin") return true;
  return user.role === "department" && user.departmentId === meeting.departmentId;
}

function canEditPlan(plan, user = getSessionUser()) {
  if (!plan || !user) return false;
  if (user.role === "planning" || user.role === "admin") return true;
  if (user.role === "department") return plan.ownerType === "department" && plan.ownerId === user.departmentId;
  return user.role === "mission" && plan.ownerType === "mission" && plan.ownerId === user.missionId;
}

function renderApp() {
  const user = getSessionUser();
  root.innerHTML = user ? renderSystem(user) : renderLogin();
  bindEvents();
}

function renderIntellectualFooter() {
  return `
    <footer class="ip-footer">
      <span>النظام الدبلوماسي المتكامل - الادارة العامة للتخطيط والبحوث</span>
      <span>تطوير م. وليد العماري</span>
      <span>اشراف السفير طارق عبداللطيف ضيف الله</span>
    </footer>
  `;
}

function renderLogin() {
  return `
    <div class="page-shell">
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
            <strong>دائرة الجزيرة والخليج</strong>
            <span class="muted">اسم المستخدم: gulf_dept | كلمة المرور: Gulf@2026</span>
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
      ${renderIntellectualFooter()}
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
    <div class="page-shell">
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
      ${renderIntellectualFooter()}
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
  const editingReport = state.reports.find((item) => item.id === state.editingReportId && item.missionId === user.missionId) || null;
  const indicatorSource = normalizeBilateralIndicators(editingReport?.bilateralIndicators);
  return `
    <div class="detail-card">
      <div class="section-title">${editingReport ? "تعديل التقرير" : "رفع تقرير نشاط"}</div>
      ${requests.length ? `
        <div class="detail-card">
          <div class="section-title">طلبات التقارير النشطة</div>
          <div class="detail-list">
            ${requests.map((request) => `
              <div class="detail-row">
                <span>${request.title}</span>
                <span>${request.requestFamily === "periodic" ? "زمني" : request.requestFamily === "thematic" ? "موضوعي" : "نشاط"} | الموعد ${formatDate(request.dueDate)} | ${getRequestLifecycle(request).label}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : `
        <div class="detail-note">لا توجد حاليًا طلبات تقارير نشطة موجّهة إلى هذه البعثة.</div>
      `}
      <div class="detail-note">التقارير الزمنية تُرفع استجابة لطلب رسمي فقط، بينما يمكن للبعثة إنشاء تقارير الأنشطة والتقارير الموضوعية مباشرة أو استجابة لطلب من الدائرة أو الجهات القيادية.</div>
      <form id="report-form" class="form-grid">
        <label class="field">
          <span>عائلة القالب</span>
          <select name="reportFamily" id="report-family">
            <option value="activity" ${!editingReport || inferReportFamily(editingReport) === "activity" ? "selected" : ""}>تقرير نشاط</option>
            <option value="periodic" ${editingReport && inferReportFamily(editingReport) === "periodic" ? "selected" : ""}>تقرير زمني</option>
            <option value="thematic" ${editingReport && inferReportFamily(editingReport) === "thematic" ? "selected" : ""}>تقرير موضوعي</option>
          </select>
        </label>
        <label class="field">
          <span>عنوان التقرير</span>
          <input name="title" value="${editingReport ? editingReport.title : ""}" required>
        </label>
        <label class="field">
          <span>نوع التقرير</span>
          <select name="type" data-current-type="${editingReport ? editingReport.type : "نشاط"}">
            ${[...REPORT_TYPE_OPTIONS.activity, ...REPORT_TYPE_OPTIONS.periodic, ...REPORT_TYPE_OPTIONS.thematic].map((item) => `<option ${editingReport && editingReport.type === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>المسار الموضوعي</span>
          <select name="thematicTrack">
            ${THEMATIC_TRACK_OPTIONS.map((item) => `<option ${editingReport && editingReport.thematicTrack === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>الطلب المرتبط</span>
          <select name="requestId">
            <option value="">بدون ربط</option>
            ${requests.map((request) => `<option value="${request.id}" ${editingReport && editingReport.requestId === request.id ? "selected" : ""}>${request.title}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>تاريخ النشاط</span>
          <input type="date" name="activityDate" value="${editingReport ? editingReport.activityDate : ""}" required>
        </label>
        <label class="field">
          <span>اسم المرفق</span>
          <input name="attachmentName" value="${editingReport ? editingReport.attachmentName : ""}" required>
        </label>
        <label class="field full">
          <span>الأهداف قبل الفعالية</span>
          <textarea name="beforeGoals" required>${editingReport ? editingReport.beforeGoals : ""}</textarea>
        </label>
        <label class="field full">
          <span>المتوقع قبل الفعالية</span>
          <textarea name="beforeExpected" required>${editingReport ? editingReport.beforeExpected : ""}</textarea>
        </label>
        <label class="field full">
          <span>النتائج بعد الفعالية</span>
          <textarea name="afterResults" required>${editingReport ? editingReport.afterResults : ""}</textarea>
        </label>
        <label class="field full">
          <span>التوصيات بعد الفعالية</span>
          <textarea name="afterRecommendations" required>${editingReport ? editingReport.afterRecommendations : ""}</textarea>
        </label>
        <label class="field full">
          <span>الملخص التنفيذي</span>
          <textarea name="summary" required>${editingReport ? editingReport.summary : ""}</textarea>
        </label>
        <div class="field full report-template-section" data-template="periodic">
          <div class="detail-card">
            <div class="section-title">محاور التقرير الزمني</div>
            <p class="muted">يعتمد هذا القالب على النموذج السنوي ويصلح للسنوي والنصف سنوي والربع سنوي.</p>
          </div>
        </div>
        <label class="field full report-template-section" data-template="periodic">
          <span>بيانات أساسية عن بلد الاعتماد</span>
          <textarea name="countrySnapshot">${editingReport ? editingReport.countrySnapshot : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>تقييم العلاقات الثنائية ومؤشراتها</span>
          <textarea name="bilateralAssessment">${editingReport ? editingReport.bilateralAssessment : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>أوجه الدعم والتعاون المحققة</span>
          <textarea name="supportCooperation">${editingReport ? editingReport.supportCooperation : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>وضع الاتفاقيات ومذكرات التفاهم</span>
          <textarea name="agreementsStatus">${editingReport ? editingReport.agreementsStatus : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>أهم الأنشطة المنجزة خلال الفترة</span>
          <textarea name="completedActivities">${editingReport ? editingReport.completedActivities : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>الأنشطة أو الملفات غير المنجزة</span>
          <textarea name="pendingActivities">${editingReport ? editingReport.pendingActivities : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>تقييم العلاقة والرؤية المستقبلية</span>
          <textarea name="relationshipOutlook">${editingReport ? editingReport.relationshipOutlook : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>الزيارات والاتصالات الرسمية</span>
          <textarea name="visitsSummary">${editingReport ? editingReport.visitsSummary : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="periodic">
          <span>أوضاع الجالية أو الملاحظات المجتمعية</span>
          <textarea name="communityUpdate">${editingReport ? editingReport.communityUpdate : ""}</textarea>
        </label>
        <div class="field full report-template-section" data-template="periodic">
          <div class="detail-card">
            <div class="section-title">مؤشر العلاقات الثنائية</div>
            <div class="detail-list">
              ${BILATERAL_INDICATOR_FIELDS.map((field) => `
                <div class="detail-card">
                  <strong>${field.label}</strong>
                  <div class="record-meta">${field.hint}</div>
                  <label class="field">
                    <span>اتجاه المؤشر</span>
                    <select name="indicator_trend_${field.key}">
                      <option value="">غير محدد</option>
                      ${["تنامي", "استقرار", "تراجع"].map((item) => `<option value="${item}" ${indicatorSource[field.key].trend === item ? "selected" : ""}>${item}</option>`).join("")}
                    </select>
                  </label>
                  <label class="field">
                    <span>العوامل والمؤشرات المعبّرة</span>
                    <textarea name="indicator_note_${field.key}">${indicatorSource[field.key].note}</textarea>
                  </label>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="field full report-template-section" data-template="thematic">
          <div class="detail-card">
            <div class="section-title">محاور التقرير الموضوعي</div>
            <p class="muted">يصلح للتقارير السياسية والاقتصادية والإعلامية والثقافية والقنصلية المتخصصة.</p>
          </div>
        </div>
        <label class="field full report-template-section" data-template="thematic">
          <span>الوضع القائم وتحليل الموضوع</span>
          <textarea name="thematicSituation">${editingReport ? editingReport.thematicSituation : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="thematic">
          <span>الانعكاسات على مصالح اليمن</span>
          <textarea name="thematicImplications">${editingReport ? editingReport.thematicImplications : ""}</textarea>
        </label>
        <label class="field full report-template-section" data-template="thematic">
          <span>التوصيات الموضوعية</span>
          <textarea name="thematicRecommendations">${editingReport ? editingReport.thematicRecommendations : ""}</textarea>
        </label>
        <div class="field full">
          <button class="btn primary" type="submit">${editingReport ? "حفظ التعديلات" : "رفع التقرير"}</button>
          ${editingReport ? `<button class="btn secondary cancel-edit" type="button" data-kind="report">إلغاء التعديل</button>` : ""}
        </div>
      </form>
    </div>
  `;
}

function renderReportDetails(report, user) {
  const request = state.reportRequests.find((item) => item.id === report.requestId);
  const actions = getAllowedReportActions(report, user);
  const quality = getReportQualitySummary(report);
  return `
    <div class="detail-list">
      <div class="detail-card">
        <div class="section-title">${report.title}</div>
        <div class="detail-row"><span>البعثة</span><span>${getMissionName(report.missionId)}</span></div>
        <div class="detail-row"><span>الدائرة</span><span>${getDepartmentName(report.departmentId)}</span></div>
        <div class="detail-row"><span>منشأ التقرير</span><span>${getReportOriginLabel(report)}</span></div>
        <div class="detail-row"><span>مرحلة الاعتماد</span><span class="tag ${stageTone(report.workflowStage)}">${report.workflowStage}</span></div>
        <div class="detail-row"><span>الطلب المرتبط</span><span>${request ? request.title : "لا يوجد"}</span></div>
        ${report.submittedOn ? `<div class="detail-row"><span>تاريخ الرفع</span><span>${formatDate(report.submittedOn)}</span></div>` : ""}
        ${canEditReport(report, user) ? `<div class="inline-actions"><button class="btn secondary report-edit" data-report-id="${report.id}">تعديل التقرير</button></div>` : ""}
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
        <div class="section-title">تقييم الجودة</div>
        <div class="detail-row"><span>الالتزام بالموعد</span><span>${quality.scores.timeliness ? `${quality.scores.timeliness}/5` : "بانتظار التقييم"}</span></div>
        <div class="detail-row"><span>شمولية المحتوى</span><span>${quality.scores.completeness ? `${quality.scores.completeness}/5` : "بانتظار التقييم"}</span></div>
        <div class="detail-row"><span>جودة التحليل</span><span>${quality.scores.analysis ? `${quality.scores.analysis}/5` : "بانتظار التقييم"}</span></div>
        <div class="detail-row"><span>المتوسط العام</span><span>${quality.average ? `${quality.average}/5` : "بانتظار التقييم"}</span></div>
        <p class="detail-note"><strong>ملاحظات المراجعة:</strong> ${report.reviewNotes || "لا توجد ملاحظات مراجعة حتى الآن."}</p>
      </div>
      ${inferReportFamily(report) === "periodic" ? `
        <div class="detail-card">
          <div class="section-title">محاور التقرير الزمني</div>
          <p class="detail-note"><strong>بلد الاعتماد:</strong> ${report.countrySnapshot || "لا يوجد"}</p>
          <p class="detail-note"><strong>العلاقات الثنائية:</strong> ${report.bilateralAssessment || "لا يوجد"}</p>
          <p class="detail-note"><strong>الدعم والتعاون:</strong> ${report.supportCooperation || "لا يوجد"}</p>
          <p class="detail-note"><strong>الاتفاقيات:</strong> ${report.agreementsStatus || "لا يوجد"}</p>
          <p class="detail-note"><strong>الأنشطة المنجزة:</strong> ${report.completedActivities || "لا يوجد"}</p>
          <p class="detail-note"><strong>الأنشطة غير المنجزة:</strong> ${report.pendingActivities || "لا يوجد"}</p>
          <p class="detail-note"><strong>الرؤية المستقبلية:</strong> ${report.relationshipOutlook || "لا يوجد"}</p>
          <p class="detail-note"><strong>الزيارات والاتصالات:</strong> ${report.visitsSummary || "لا يوجد"}</p>
          <p class="detail-note"><strong>الجالية والملاحظات:</strong> ${report.communityUpdate || "لا يوجد"}</p>
        </div>
        <div class="detail-card">
          <div class="section-title">مؤشر العلاقات الثنائية</div>
          <div class="detail-list">
            ${BILATERAL_INDICATOR_FIELDS.map((field) => `
              <div class="detail-row">
                <span>${field.label}</span>
                <span class="tag ${report.bilateralIndicators?.[field.key]?.trend === "تنامي" ? "success" : report.bilateralIndicators?.[field.key]?.trend === "تراجع" ? "danger" : "warning"}">${report.bilateralIndicators?.[field.key]?.trend || "غير محدد"}</span>
                <span>${report.bilateralIndicators?.[field.key]?.note || "لا توجد ملاحظات"}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}
      ${inferReportFamily(report) === "thematic" ? `
        <div class="detail-card">
          <div class="section-title">محاور التقرير الموضوعي</div>
          <p class="detail-note"><strong>الوضع القائم:</strong> ${report.thematicSituation || "لا يوجد"}</p>
          <p class="detail-note"><strong>الانعكاسات:</strong> ${report.thematicImplications || "لا يوجد"}</p>
          <p class="detail-note"><strong>التوصيات الموضوعية:</strong> ${report.thematicRecommendations || "لا يوجد"}</p>
        </div>
      ` : ""}
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
  const editingCircular = circulars.find((item) => item.id === state.editingCircularId) || null;
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
            <div class="section-title">${editingCircular ? "تعديل التعميم" : "إصدار تعميم جديد"}</div>
            <form id="circular-form" class="form-grid">
              <label class="field">
                <span>عنوان التعميم</span>
                <input name="title" value="${editingCircular ? editingCircular.title : ""}" required>
              </label>
              <label class="field">
                <span>الموعد النهائي</span>
                <input type="date" name="dueDate" value="${editingCircular ? editingCircular.dueDate : ""}" required>
              </label>
              <label class="field full">
                <span>البعثات المستهدفة</span>
                <div class="checkbox-grid">
                  ${state.missions.map((mission) => `
                    <label class="check-item">
                      <input type="checkbox" name="missionId" value="${mission.id}" ${!editingCircular || editingCircular.targetMissionIds.includes(mission.id) ? "checked" : ""}>
                      <span>${mission.name}</span>
                    </label>
                  `).join("")}
                </div>
              </label>
              <div class="field full">
                <button class="btn primary" type="submit">${editingCircular ? "حفظ التعديلات" : "إصدار التعميم"}</button>
                ${editingCircular ? `<button class="btn secondary cancel-edit" type="button" data-kind="circular">إلغاء التعديل</button>` : ""}
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
              ${canEditCircular(circular, user) ? `<div class="inline-actions"><button class="btn secondary circular-edit" data-circular-id="${circular.id}">تعديل التعميم</button></div>` : ""}
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
  const editingMeeting = meetings.find((item) => item.id === state.editingMeetingId) || null;
  const primaryTask = editingMeeting?.tasks?.[0] || null;
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
      ${(user.role === "planning" || user.role === "admin" || user.role === "department") ? `
        <div class="panel">
          <div class="section-title">${editingMeeting ? "تعديل الاجتماع" : "تسجيل اجتماع جديد"}</div>
          <form id="meeting-form" class="form-grid">
            <label class="field">
              <span>عنوان الاجتماع</span>
              <input name="title" value="${editingMeeting ? editingMeeting.title : ""}" required>
            </label>
            <label class="field">
              <span>الدائرة المعنية</span>
              <select name="departmentId" required>
                ${state.departments.map((department) => `<option value="${department.id}" ${editingMeeting && editingMeeting.departmentId === department.id ? "selected" : ""}>${department.name}</option>`).join("")}
              </select>
            </label>
            <label class="field full">
              <span>ملخص المحضر</span>
              <textarea name="summary" required>${editingMeeting ? editingMeeting.summary : ""}</textarea>
            </label>
            <label class="field">
              <span>عنوان المهمة الأولى</span>
              <input name="taskTitle" value="${primaryTask ? primaryTask.title : ""}" required>
            </label>
            <label class="field">
              <span>الجهة المكلفة</span>
              <select name="assignee" required>
                ${[...state.missions.map((mission) => mission.name), ...state.departments.map((department) => department.name)].map((name) => `<option value="${name}" ${primaryTask && primaryTask.assignee === name ? "selected" : ""}>${name}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>الأولوية</span>
              <select name="priority" required>
                ${["عالية", "متوسطة", "منخفضة"].map((item) => `<option ${primaryTask && primaryTask.priority === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            <div class="field full">
              <button class="btn primary" type="submit">${editingMeeting ? "حفظ التعديلات" : "تسجيل الاجتماع"}</button>
              ${editingMeeting ? `<button class="btn secondary cancel-edit" type="button" data-kind="meeting">إلغاء التعديل</button>` : ""}
            </div>
          </form>
        </div>
      ` : ""}
      ${meetings.map((meeting) => `
        <div class="panel">
          <div class="section-title">${meeting.title}</div>
          <p class="muted">${meeting.summary}</p>
          ${canEditMeeting(meeting, user) ? `<div class="inline-actions"><button class="btn secondary meeting-edit" data-meeting-id="${meeting.id}">تعديل الاجتماع</button></div>` : ""}
          <div class="detail-list">
            ${meeting.tasks.map((task) => `
              <div class="detail-card">
                <div class="record-top">
                  <div>
                    <strong>${task.title}</strong>
                    <div class="record-meta">${task.assignee} | الأولوية ${task.priority}</div>
                  </div>
                  <span class="tag ${task.status === "منجز" ? "success" : task.status === "متأخر" ? "danger" : "warning"}">${task.status}</span>
                </div>
                ${getMeetingActions(meeting, task, user).length ? `<div class="inline-actions">${getMeetingActions(meeting, task, user).map((action) => `<button class="btn primary meeting-action" data-meeting-id="${meeting.id}" data-task-id="${task.id}" data-status="${action.nextStatus}">${action.label}</button>`).join("")}</div>` : ""}
              </div>
            `).join("")}
            ${(meeting.workflowHistory || []).length ? `
              <div class="detail-card">
                <div class="section-title">سجل الاجتماع</div>
                <div class="detail-list">
                  ${meeting.workflowHistory.slice(0, 4).map((item) => `<div class="timeline-entry"><strong>${item.action}</strong><span>${item.actor}</span><span>${item.at}</span></div>`).join("")}
                </div>
              </div>
            ` : ""}
          </div>
        </div>
      `).join("") || `<div class="panel empty">لا توجد اجتماعات في نطاق هذا الحساب.</div>`}
    </section>
  `;
}

function renderPlansPage(user) {
  const plans = getVisiblePlans(user);
  const editingPlan = plans.find((item) => item.id === state.editingPlanId) || null;
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
      ${(user.role === "planning" || user.role === "admin" || user.role === "department" || user.role === "mission") ? `
        <div class="panel">
          <div class="section-title">${editingPlan ? "تعديل الخطة" : "إنشاء خطة جديدة"}</div>
          <form id="plan-form" class="form-grid">
            <label class="field">
              <span>عنوان الخطة</span>
              <input name="title" value="${editingPlan ? editingPlan.title : ""}" required>
            </label>
            <label class="field">
              <span>الفترة</span>
              <select name="period">
                ${["سنوية", "نصف سنوية", "ربع سنوية"].map((item) => `<option ${editingPlan && editingPlan.period === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            ${(user.role === "planning" || user.role === "admin") ? `
              <label class="field">
                <span>الجهة المالكة</span>
                <select name="ownerId">
                  <optgroup label="البعثات">
                    ${state.missions.map((mission) => `<option value="mission:${mission.id}" ${editingPlan && editingPlan.ownerType === "mission" && editingPlan.ownerId === mission.id ? "selected" : ""}>${mission.name}</option>`).join("")}
                  </optgroup>
                  <optgroup label="الدوائر">
                    ${state.departments.map((department) => `<option value="department:${department.id}" ${editingPlan && editingPlan.ownerType === "department" && editingPlan.ownerId === department.id ? "selected" : ""}>${department.name}</option>`).join("")}
                  </optgroup>
                </select>
              </label>
            ` : `
              <div class="detail-card">
                <div class="detail-row">
                  <span>المالك</span>
                  <span>${user.role === "mission" ? getMissionName(user.missionId) : getDepartmentName(user.departmentId)}</span>
                </div>
              </div>
            `}
            <label class="field full">
              <span>مؤشر الأداء المرتبط</span>
              <input name="kpi" value="${editingPlan ? editingPlan.kpi : ""}" required placeholder="مثال: نسبة الإنجاز مقابل المستهدف">
            </label>
            <div class="field full">
              <button class="btn primary" type="submit">${editingPlan ? "حفظ التعديلات" : "إنشاء الخطة"}</button>
              ${editingPlan ? `<button class="btn secondary cancel-edit" type="button" data-kind="plan">إلغاء التعديل</button>` : ""}
            </div>
          </form>
        </div>
      ` : ""}
      ${plans.map((plan) => `
        <div class="panel">
          <div class="record-top">
            <div>
              <strong>${plan.title}</strong>
              <div class="record-meta">${plan.period} | ${plan.kpi}</div>
            </div>
            <span class="tag ${getPlanStatusTone(plan.status)}">${plan.status}</span>
          </div>
          <div class="progress"><span style="width:${plan.progress}%"></span></div>
          <p class="muted">نسبة الإنجاز الحالية: ${plan.progress}%</p>
          <div class="detail-row"><span>المالك</span><span>${plan.ownerType === "mission" ? getMissionName(plan.ownerId) : getDepartmentName(plan.ownerId)}</span></div>
          ${canEditPlan(plan, user) ? `<div class="inline-actions"><button class="btn secondary plan-edit" data-plan-id="${plan.id}">تعديل الخطة</button></div>` : ""}
          ${getPlanActions(plan, user).length ? `<div class="inline-actions">${getPlanActions(plan, user).map((action) => `<button class="btn primary plan-action" data-plan-id="${plan.id}" data-action="${action.key}" data-delta="${action.delta || ""}" data-status="${action.status || ""}" data-progress="${action.progress || ""}">${action.label}</button>`).join("")}</div>` : ""}
          ${(plan.workflowHistory || []).length ? `
            <div class="detail-card">
              <div class="section-title">سجل الخطة</div>
              <div class="detail-list">
                ${plan.workflowHistory.slice(0, 4).map((item) => `<div class="timeline-entry"><strong>${item.action}</strong><span>${item.actor}</span><span>${item.at}</span></div>`).join("")}
              </div>
            </div>
          ` : ""}
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
  const canRequest = canIssueReportRequest(user, "activity") || canIssueReportRequest(user, "periodic");
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">متابعة الإنجاز</span>
          <h1 class="page-title">طلبات التقارير</h1>
          <p class="muted">${canRequest ? "يمكنك إصدار طلبات تقارير ومتابعة الإنجاز بحسب صلاحيتك." : "يمكنك متابعة الطلبات الواقعة ضمن نطاقك."}</p>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${canRequest ? renderRequestForm(user) : ""}
      <div class="panel">
        <div class="section-title">سجل الطلبات</div>
        <div class="detail-list">
          ${requests.map((request) => {
            const c = getCompletion(request);
            const lifecycle = getRequestLifecycle(request);
            const missionApproved = user.role === "mission" && state.reports.some((report) => (
              report.requestId === request.id &&
              report.missionId === user.missionId &&
              (report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف")
            ));
            const missionSubmitted = user.role === "mission" && state.reports.some((report) => (
              report.requestId === request.id &&
              report.missionId === user.missionId &&
              report.workflowStage !== "أعيد للبعثة للاستكمال"
            ));
            const missionStatusLabel = missionApproved ? "معتمد" : missionSubmitted ? "مرفوع" : "لم يرفع";
            const missionStatusTone = missionApproved ? "success" : missionSubmitted ? "info" : "warning";
            return `
              <div class="detail-card">
                <div class="record-top">
                  <div>
                    <strong>${request.title}</strong>
                    <div class="record-meta">${request.requestFamily === "periodic" ? "طلب زمني" : request.requestFamily === "thematic" ? "طلب موضوعي" : "طلب نشاط"} | ${request.type} | الموعد ${formatDate(request.dueDate)}</div>
                  </div>
                  <span class="tag ${lifecycle.tone}">${lifecycle.label}</span>
                </div>
                <div class="detail-row"><span>الجهة الطالبة</span><span>${request.createdBy}</span></div>
                ${request.thematicTrack ? `<div class="detail-row"><span>المسار الموضوعي</span><span>${request.thematicTrack}</span></div>` : ""}
                <div class="progress"><span style="width:${c.percent}%"></span></div>
                ${user.role === "mission" ? `
                  <p class="record-desc">هذا الطلب موجّه إلى ${getMissionName(user.missionId)}، وحالة الإنجاز الحالية للبعثة هي ${missionStatusLabel}.</p>
                  <div class="detail-list">
                    <div class="detail-row">
                      <span>${getMissionName(user.missionId)}</span>
                      <span class="tag ${missionStatusTone}">${missionStatusLabel}</span>
                    </div>
                  </div>
                ` : `
                  <p class="record-desc">رفعت ${c.done} بعثة تقاريرها، واعتمد ${c.approved} تقريرًا، وما يزال ${c.pending} بعثة دون رفع من أصل ${c.total}.</p>
                  <div class="detail-list">
                    ${request.targetMissionIds.map((missionId) => `
                      <div class="detail-row">
                        <span>${getMissionName(missionId)}</span>
                        <span class="tag ${state.reports.some((report) => report.requestId === request.id && report.missionId === missionId && (report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف")) ? "success" : state.reports.some((report) => report.requestId === request.id && report.missionId === missionId && report.workflowStage !== "أعيد للبعثة للاستكمال") ? "info" : "warning"}">${state.reports.some((report) => report.requestId === request.id && report.missionId === missionId && (report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف")) ? "معتمد" : state.reports.some((report) => report.requestId === request.id && report.missionId === missionId && report.workflowStage !== "أعيد للبعثة للاستكمال") ? "مرفوع" : "لم يرفع"}</span>
                      </div>
                    `).join("")}
                  </div>
                `}
              </div>
            `;
          }).join("") || `<div class="empty">لا توجد طلبات ظاهرة لهذا الحساب.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderRequestForm(user) {
  const availableMissionIds = user.role === "department"
    ? state.missions.filter((mission) => mission.departmentId === user.departmentId).map((mission) => mission.id)
    : state.missions.map((mission) => mission.id);
  return `
    <div class="panel">
      <div class="section-title">إصدار طلب تقرير جديد</div>
      <form id="request-form" class="form-grid">
        <label class="field">
          <span>عائلة الطلب</span>
          <select name="requestFamily" id="request-family">
            ${canIssueReportRequest(user, "activity") ? `<option value="activity">طلب نشاط</option>` : ""}
            ${canIssueReportRequest(user, "thematic") ? `<option value="thematic">طلب موضوعي</option>` : ""}
            ${canIssueReportRequest(user, "periodic") ? `<option value="periodic">طلب زمني</option>` : ""}
          </select>
        </label>
        <label class="field">
          <span>عنوان الطلب</span>
          <input name="title" required>
        </label>
        <label class="field">
          <span>نوع الطلب</span>
          <select name="type" id="request-type">
            <option>نشاط</option>
            <option>موضوعي</option>
            <option>ربع سنوي</option>
            <option>نصف سنوي</option>
            <option>سنوي</option>
          </select>
        </label>
        <label class="field">
          <span>المسار الموضوعي</span>
          <select name="thematicTrack" id="request-thematic-track">
            <option value="">غير منطبق</option>
            ${THEMATIC_TRACK_OPTIONS.map((item) => `<option value="${item}">${item}</option>`).join("")}
          </select>
        </label>
        <label class="field full">
          <span>الموعد النهائي</span>
          <input type="date" name="dueDate" required>
        </label>
        <label class="field full">
          <span>البعثات المستهدفة</span>
          <div class="checkbox-grid">
            ${state.missions.filter((mission) => availableMissionIds.includes(mission.id)).map((mission) => `
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

  const reportFamily = document.getElementById("report-family");
  const reportType = document.querySelector('#report-form select[name="type"]');
  const thematicTrack = document.querySelector('#report-form select[name="thematicTrack"]');
  if (reportFamily && reportType && thematicTrack) {
    const updateReportSections = () => {
      const value = reportFamily.value;
      const currentType = reportType.dataset.currentType || reportType.value;
      reportType.innerHTML = REPORT_TYPE_OPTIONS[value].map((item) => `<option ${currentType === item ? "selected" : ""}>${item}</option>`).join("");
      reportType.dataset.currentType = reportType.value;
      thematicTrack.disabled = value !== "thematic";
      if (value !== "thematic") thematicTrack.value = "";
      document.querySelectorAll(".report-template-section").forEach((section) => {
        section.style.display = section.dataset.template === value ? "" : "none";
      });
    };
    reportFamily.addEventListener("change", updateReportSections);
    reportType.addEventListener("change", () => {
      reportType.dataset.currentType = reportType.value;
    });
    updateReportSections();
  }

  const requestForm = document.getElementById("request-form");
  if (requestForm) requestForm.addEventListener("submit", handleRequestSubmit);

  const requestFamily = document.getElementById("request-family");
  const requestType = document.getElementById("request-type");
  const requestThematicTrack = document.getElementById("request-thematic-track");
  if (requestFamily && requestType && requestThematicTrack) {
    const updateRequestControls = () => {
      const family = requestFamily.value;
      requestType.innerHTML = REPORT_TYPE_OPTIONS[family].map((item) => `<option>${item}</option>`).join("");
      requestThematicTrack.disabled = family !== "thematic";
      if (family !== "thematic") requestThematicTrack.value = "";
    };
    requestFamily.addEventListener("change", updateRequestControls);
    updateRequestControls();
  }

  const circularForm = document.getElementById("circular-form");
  if (circularForm) circularForm.addEventListener("submit", handleCircularSubmit);

  const meetingForm = document.getElementById("meeting-form");
  if (meetingForm) meetingForm.addEventListener("submit", handleMeetingSubmit);

  const planForm = document.getElementById("plan-form");
  if (planForm) planForm.addEventListener("submit", handlePlanSubmit);

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

  document.querySelectorAll(".report-edit").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingReportId = button.dataset.reportId;
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll(".circular-action").forEach((button) => {
    button.addEventListener("click", () => {
      handleCircularAction(button.dataset.circularId, button.dataset.action);
    });
  });

  document.querySelectorAll(".circular-edit").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingCircularId = button.dataset.circularId;
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll(".meeting-action").forEach((button) => {
    button.addEventListener("click", () => {
      handleMeetingTaskAction(button.dataset.meetingId, button.dataset.taskId, button.dataset.status);
    });
  });

  document.querySelectorAll(".meeting-edit").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingMeetingId = button.dataset.meetingId;
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll(".plan-action").forEach((button) => {
    button.addEventListener("click", () => {
      handlePlanAction(
        button.dataset.planId,
        button.dataset.action,
        button.dataset.delta,
        button.dataset.status,
        button.dataset.progress
      );
    });
  });

  document.querySelectorAll(".plan-edit").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingPlanId = button.dataset.planId;
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll(".cancel-edit").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.kind === "report") state.editingReportId = null;
      if (button.dataset.kind === "circular") state.editingCircularId = null;
      if (button.dataset.kind === "meeting") state.editingMeetingId = null;
      if (button.dataset.kind === "plan") state.editingPlanId = null;
      saveState();
      renderApp();
    });
  });
}

function handleLogin(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim();
  const password = String(form.get("password")).trim();
  let user = getAllUsers().find((item) => item.username === username && item.password === password);
  if (!user) {
    const fallbackCoreUser = seedState().coreUsers.find((item) => item.username === username && item.password === password);
    if (fallbackCoreUser) {
      const existingCoreUsers = Array.isArray(state.coreUsers) ? state.coreUsers : [];
      if (!existingCoreUsers.some((item) => item.id === fallbackCoreUser.id || item.username === fallbackCoreUser.username)) {
        state.coreUsers = [...existingCoreUsers, fallbackCoreUser];
      }
      user = fallbackCoreUser;
    }
  }
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
  const editingReport = state.reports.find((item) => item.id === state.editingReportId && item.missionId === user.missionId);
  const previousRequestId = editingReport?.requestId || "";
  const linkedRequest = state.reportRequests.find((item) => item.id === String(form.get("requestId") || ""));
  const proposedFamily = String(form.get("reportFamily") || "activity");
  if (proposedFamily === "periodic" && !linkedRequest && !editingReport) {
    addAlert("danger", "تعذر رفع التقرير", "التقارير الزمنية لا تُرفع إلا استجابة لطلب رسمي صادر من الجهات القيادية.");
    saveState();
    renderApp();
    return;
  }
  const report = editingReport || {
    id: `report-${Date.now()}`,
    missionId: user.missionId,
    departmentId: user.departmentId,
    workflowStage: "مرفوع من البعثة",
    createdAt: new Date().toLocaleString("ar-YE"),
    workflowHistory: []
  };
  const bilateralIndicators = BILATERAL_INDICATOR_FIELDS.reduce((acc, field) => {
    acc[field.key] = {
      trend: String(form.get(`indicator_trend_${field.key}`) || ""),
      note: String(form.get(`indicator_note_${field.key}`) || "")
    };
    return acc;
  }, {});
  const resolvedFamily = linkedRequest ? linkedRequest.requestFamily : proposedFamily;
  Object.assign(report, {
    reportFamily: resolvedFamily,
    title: String(form.get("title")),
    type: linkedRequest ? linkedRequest.type : String(form.get("type")),
    thematicTrack: linkedRequest && linkedRequest.requestFamily === "thematic" ? linkedRequest.thematicTrack : String(form.get("thematicTrack")),
    requestId: String(form.get("requestId")) || "",
    activityDate: String(form.get("activityDate")),
    summary: String(form.get("summary")),
    beforeGoals: String(form.get("beforeGoals")),
    beforeExpected: String(form.get("beforeExpected")),
    afterResults: String(form.get("afterResults")),
    afterRecommendations: String(form.get("afterRecommendations")),
    attachmentName: String(form.get("attachmentName")),
    countrySnapshot: String(form.get("countrySnapshot") || ""),
    bilateralAssessment: String(form.get("bilateralAssessment") || ""),
    supportCooperation: String(form.get("supportCooperation") || ""),
    agreementsStatus: String(form.get("agreementsStatus") || ""),
    completedActivities: String(form.get("completedActivities") || ""),
    pendingActivities: String(form.get("pendingActivities") || ""),
    relationshipOutlook: String(form.get("relationshipOutlook") || ""),
    visitsSummary: String(form.get("visitsSummary") || ""),
    communityUpdate: String(form.get("communityUpdate") || ""),
    bilateralIndicators,
    submittedOn: new Date().toISOString().slice(0, 10),
    reviewNotes: editingReport && editingReport.workflowStage !== "أعيد للبعثة للاستكمال" ? editingReport.reviewNotes || "" : "",
    qualityScores: editingReport ? normalizeQualityScores(editingReport.qualityScores) : normalizeQualityScores({}),
    thematicSituation: String(form.get("thematicSituation") || ""),
    thematicImplications: String(form.get("thematicImplications") || ""),
    thematicRecommendations: String(form.get("thematicRecommendations") || "")
  });
  addWorkflowEntry(report, user.name, editingReport ? "تعديل التقرير" : "رفع التقرير", report.workflowStage);
  if (!editingReport) {
    state.reports.unshift(report);
  }
  state.selectedReportId = report.id;
  state.editingReportId = null;
  if (previousRequestId && previousRequestId !== report.requestId) syncRequestCompletion(previousRequestId, report.missionId);
  if (report.requestId) syncRequestCompletion(report.requestId, report.missionId);
  addAlert("success", "تم رفع تقرير جديد", `رفعت ${user.name} التقرير "${report.title}" وأصبح مرئيًا للجهات المخولة.`);
  logAudit(user.name, editingReport ? "تعديل تقرير" : "رفع تقرير", report.title, getMissionName(report.missionId));
  saveState();
  renderApp();
}

function handleRequestSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  const form = new FormData(event.currentTarget);
  const requestFamily = String(form.get("requestFamily"));
  const targetMissionIds = form.getAll("missionId");
  if (!targetMissionIds.length) return;
  if (!canIssueReportRequest(user, requestFamily)) {
    addAlert("danger", "تعذر إصدار الطلب", "لا تملك هذه الجهة صلاحية إصدار هذا النوع من طلبات التقارير.");
    saveState();
    renderApp();
    return;
  }
  state.reportRequests.unshift({
    id: `request-${Date.now()}`,
    title: String(form.get("title")),
    type: String(form.get("type")),
    requestFamily,
    thematicTrack: String(form.get("thematicTrack") || ""),
    createdBy: user.name,
    createdByRole: user.role,
    requestedByDepartmentId: user.role === "department" ? user.departmentId : "",
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

  const editingCircular = state.circulars.find((item) => item.id === state.editingCircularId);
  const circular = editingCircular || {
    id: `circ-${Date.now()}`,
    issuedBy: user.name,
    status: "نشط",
    readMissionIds: [],
    completedMissionIds: [],
    workflowHistory: [],
    processingLog: []
  };
  circular.title = String(form.get("title"));
  circular.targetMissionIds = targetMissionIds;
  circular.dueDate = String(form.get("dueDate"));
  circular.workflowHistory.unshift({
    actor: user.name,
    action: editingCircular ? "تعديل التعميم" : "إصدار التعميم",
    stage: circular.status,
    at: new Date().toLocaleString("ar-YE")
  });
  if (!editingCircular) {
    state.circulars.unshift(circular);
  }
  state.editingCircularId = null;
  addAlert("info", editingCircular ? "تم تعديل تعميم" : "تم إصدار تعميم", `${editingCircular ? "عدّل" : "أصدر"} ${user.name} التعميم "${circular.title}" إلى ${targetMissionIds.length} بعثات.`);
  logAudit(user.name, editingCircular ? "تعديل تعميم" : "إصدار تعميم", circular.title, "وزارة");
  saveState();
  renderApp();
}

function handleMeetingSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  const form = new FormData(event.currentTarget);
  const editingMeeting = state.meetings.find((item) => item.id === state.editingMeetingId);
  const meeting = editingMeeting || {
    id: `meet-${Date.now()}`,
    ownerRole: user.role,
    tasks: [],
    workflowHistory: []
  };
  const existingTask = meeting.tasks[0];
  Object.assign(meeting, {
    title: String(form.get("title")),
    departmentId: String(form.get("departmentId")),
    summary: String(form.get("summary")),
    tasks: [
      {
        id: existingTask?.id || `task-${Date.now()}`,
        title: String(form.get("taskTitle")),
        assignee: String(form.get("assignee")),
        status: existingTask?.status || "قيد التنفيذ",
        priority: String(form.get("priority"))
      }
    ]
  });
  meeting.workflowHistory.unshift({
    actor: user.name,
    action: editingMeeting ? "تعديل الاجتماع" : "تسجيل محضر الاجتماع",
    at: new Date().toLocaleString("ar-YE")
  });
  if (!editingMeeting) {
    state.meetings.unshift(meeting);
  }
  state.editingMeetingId = null;
  addAlert("info", editingMeeting ? "تم تعديل اجتماع" : "تم تسجيل اجتماع", `${editingMeeting ? "عدّل" : "سجل"} ${user.name} الاجتماع "${meeting.title}".`);
  logAudit(user.name, editingMeeting ? "تعديل اجتماع" : "تسجيل اجتماع", meeting.title, getDepartmentName(meeting.departmentId));
  saveState();
  renderApp();
}

function handlePlanSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  if (!user) return;

  const form = new FormData(event.currentTarget);
  let ownerType = "";
  let ownerId = String(form.get("ownerId") || "");

  if ((user.role === "planning" || user.role === "admin") && ownerId.includes(":")) {
    const [selectedType, selectedId] = ownerId.split(":");
    ownerType = selectedType;
    ownerId = selectedId;
  }

  if (user.role === "mission") {
    ownerType = "mission";
    ownerId = user.missionId;
  } else if (user.role === "department") {
    ownerType = "department";
    ownerId = user.departmentId;
  }

  const ownerExists = ownerType === "mission"
    ? Boolean(getMissionById(ownerId))
    : Boolean(getDepartmentById(ownerId));
  if (!ownerExists) {
    addAlert("danger", "تعذر إنشاء الخطة", "الجهة المالكة المحددة غير صحيحة أو لا تتوافق مع نوع المالك.");
    saveState();
    renderApp();
    return;
  }

  const editingPlan = state.plans.find((item) => item.id === state.editingPlanId);
  const plan = editingPlan || {
    id: `plan-${Date.now()}`,
    progress: 0,
    status: "قيد التنفيذ",
    workflowHistory: []
  };
  Object.assign(plan, {
    title: String(form.get("title")),
    ownerType,
    ownerId,
    period: String(form.get("period")),
    kpi: String(form.get("kpi"))
  });
  plan.workflowHistory.unshift({
    actor: user.name,
    action: editingPlan ? "تعديل الخطة" : "إنشاء الخطة",
    at: new Date().toLocaleString("ar-YE")
  });

  if (!editingPlan) {
    state.plans.unshift(plan);
  }
  state.editingPlanId = null;
  addAlert("success", editingPlan ? "تم تعديل الخطة" : "تم إنشاء خطة جديدة", `${editingPlan ? "عدّل" : "أنشأ"} ${user.name} الخطة "${plan.title}" وربطها بمؤشر الأداء المحدد.`);
  logAudit(
    user.name,
    editingPlan ? "تعديل خطة" : "إنشاء خطة",
    plan.title,
    ownerType === "mission" ? getMissionName(ownerId) : getDepartmentName(ownerId)
  );
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

function handlePlanAction(planId, actionKey, deltaValue, nextStatus, progressValue) {
  const plan = state.plans.find((item) => item.id === planId);
  const user = getSessionUser();
  if (!plan || !user) return;

  const ownMissionPlan = user.role === "mission" && plan.ownerType === "mission" && plan.ownerId === user.missionId;
  const ownDepartmentPlan = user.role === "department" && plan.ownerType === "department" && plan.ownerId === user.departmentId;
  const central = user.role === "planning" || user.role === "admin";
  if (!ownMissionPlan && !ownDepartmentPlan && !central) return;

  let actionLabel = "تحديث الخطة";
  if (actionKey === "progress-10") {
    const nextProgress = Math.min(100, plan.progress + Number(deltaValue || 0));
    plan.progress = nextProgress;
    plan.status = nextProgress >= 100 ? "منجز" : "قيد التنفيذ";
    actionLabel = "رفع نسبة الإنجاز";
  } else if (actionKey === "mark-complete") {
    plan.progress = Number(progressValue || 100);
    plan.status = nextStatus || "منجز";
    actionLabel = "اعتبار الخطة منجزة";
  } else if (actionKey === "mark-delayed") {
    plan.status = nextStatus || "متأخرة";
    actionLabel = "وضع الخطة كمتأخرة";
  }

  plan.workflowHistory.unshift({
    actor: user.name,
    action: actionLabel,
    at: new Date().toLocaleString("ar-YE")
  });

  addAlert("info", "تحديث على الخطة", `تم تحديث الخطة "${plan.title}" وأصبحت حالتها "${plan.status}" بنسبة إنجاز ${plan.progress}%.`);
  logAudit(
    user.name,
    actionLabel,
    plan.title,
    plan.ownerType === "mission" ? getMissionName(plan.ownerId) : getDepartmentName(plan.ownerId)
  );
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
  if (actionKey === "return") {
    const note = window.prompt("أدخل ملاحظات المراجعة المطلوبة لاستكمال التقرير:", report.reviewNotes || "");
    if (note === null) return;
    report.reviewNotes = note.trim();
  }
  if (actionKey === "approve") {
    const completenessInput = window.prompt("قيّم شمولية المحتوى من 1 إلى 5:", String(report.qualityScores?.completeness || 4));
    if (completenessInput === null) return;
    const analysisInput = window.prompt("قيّم جودة التحليل من 1 إلى 5:", String(report.qualityScores?.analysis || 4));
    if (analysisInput === null) return;
    const completeness = Math.min(5, Math.max(1, Number(completenessInput)));
    const analysis = Math.min(5, Math.max(1, Number(analysisInput)));
    if (!Number.isFinite(completeness) || !Number.isFinite(analysis)) {
      addAlert("danger", "تعذر اعتماد التقرير", "يجب إدخال درجات صحيحة بين 1 و5 لتقييم الجودة.");
      saveState();
      renderApp();
      return;
    }
    report.qualityScores = {
      timeliness: calculateTimelinessScore(report),
      completeness,
      analysis
    };
    if (!report.reviewNotes) {
      report.reviewNotes = "تمت المراجعة والاعتماد بعد استكمال المتطلبات.";
    }
  }
  report.workflowStage = nextStage;
  if (report.requestId) {
    syncRequestCompletion(report.requestId, report.missionId);
  }
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

function handleMeetingTaskAction(meetingId, taskId, nextStatus) {
  const meeting = state.meetings.find((item) => item.id === meetingId);
  const user = getSessionUser();
  if (!meeting || !user) return;
  const task = meeting.tasks.find((item) => item.id === taskId);
  if (!task) return;

  task.status = nextStatus;
  meeting.workflowHistory.unshift({
    actor: user.name,
    action: `تحديث حالة المهمة إلى ${nextStatus}`,
    at: new Date().toLocaleString("ar-YE")
  });

  addAlert(nextStatus === "منجز" ? "success" : nextStatus === "متأخر" ? "warning" : "info", "تحديث مهمة اجتماع", `حدّث ${user.name} حالة المهمة "${task.title}" إلى "${nextStatus}".`);
  logAudit(user.name, "تحديث مهمة اجتماع", task.title, meeting.title);
  saveState();
  renderApp();
}

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString("ar-YE") : "-";
}

renderApp();
