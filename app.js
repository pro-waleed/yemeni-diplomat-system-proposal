const STORAGE_KEY = "yemeni_diplomat_system_v3";
const API_BASE_PATH = "/api";
const API_TIMEOUT_MS = 2500;
const SHARED_STATE_KEYS = [
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

const THEMATIC_TRACK_CONFIG = {
  "سياسي": {
    title: "المسار السياسي",
    description: "يركز على التطورات السياسية واتجاهات المواقف الرسمية وانعكاساتها على مصالح اليمن وحركتها الدبلوماسية.",
    labels: {
      situation: "الوضع القائم وتحليل الملف السياسي",
      developments: "أهم التطورات والاتصالات والرسائل السياسية",
      stakeholders: "الأطراف الفاعلة والجهات المؤثرة",
      implications: "الانعكاسات على مصالح اليمن وموقفها السياسي",
      risks: "الفرص والمخاطر والتحديات",
      missionAction: "تحرك البعثة المطلوب أو المنجز",
      recommendations: "التوصيات السياسية وخطوات المتابعة"
    }
  },
  "اقتصادي": {
    title: "المسار الاقتصادي",
    description: "يركز على التجارة والاستثمار والمساعدات والتنمية والفرص الاقتصادية ذات الصلة ببلد الاعتماد.",
    labels: {
      situation: "الوضع الاقتصادي القائم وتحليل الموضوع",
      developments: "أهم التطورات الاقتصادية والتجارية والاستثمارية",
      stakeholders: "الجهات الاقتصادية والشركاء الرئيسيون",
      implications: "الانعكاسات على مصالح اليمن الاقتصادية والتنموية",
      risks: "الفرص والمعوقات والتحديات الاقتصادية",
      missionAction: "تحرك البعثة الاقتصادي والتنسيقي",
      recommendations: "التوصيات الاقتصادية وخطوات المتابعة"
    }
  },
  "إعلامي": {
    title: "المسار الإعلامي",
    description: "يركز على صورة اليمن في الإعلام والرأي العام والمنصات المؤثرة والرسائل التي تحتاج إلى إدارة ومتابعة.",
    labels: {
      situation: "الوضع الإعلامي القائم وتحليل التغطية",
      developments: "أهم التطورات الإعلامية والرسائل المتداولة",
      stakeholders: "المنابر الإعلامية والجهات والشخصيات المؤثرة",
      implications: "الانعكاسات على صورة اليمن ومصالحها",
      risks: "الفرص والمخاطر الإعلامية والتحديات",
      missionAction: "تحرك البعثة الإعلامي والتواصلي",
      recommendations: "التوصيات الإعلامية وخطوات المتابعة"
    }
  },
  "ثقافي": {
    title: "المسار الثقافي",
    description: "يركز على الحضور الثقافي والتعليمي والعلمي والتبادل الأكاديمي والأنشطة التي تعزز الصورة الحضارية لليمن.",
    labels: {
      situation: "الوضع الثقافي/التعليمي القائم",
      developments: "أهم التطورات والأنشطة الثقافية والعلمية",
      stakeholders: "المؤسسات الثقافية والأكاديمية والشركاء",
      implications: "الانعكاسات على حضور اليمن الثقافي والعلمي",
      risks: "الفرص والمعوقات والتحديات الثقافية",
      missionAction: "تحرك البعثة الثقافي والتعليمي",
      recommendations: "التوصيات الثقافية وخطوات المتابعة"
    }
  },
  "قنصلي": {
    title: "المسار القنصلي",
    description: "يركز على الخدمات القنصلية وشؤون الجالية والتنسيق مع الجهات المختصة والمعالجات الإجرائية.",
    labels: {
      situation: "الوضع القنصلي القائم وتحليل الخدمة",
      developments: "أهم التطورات والمعاملات والقضايا القنصلية",
      stakeholders: "الجهات الرسمية والشركاء المعنيون بالخدمة",
      implications: "الانعكاسات على الجالية والمصالح اليمنية",
      risks: "التحديات التشغيلية والفرص التحسينية",
      missionAction: "تحرك البعثة القنصلي والإجرائي",
      recommendations: "التوصيات القنصلية وخطوات المتابعة"
    }
  }
};

const ACTIVITY_CATEGORY_OPTIONS = ["سياسي", "اقتصادي", "إعلامي", "ثقافي", "قنصلي", "بروتوكولي", "متعدد المسارات"];

const CIRCULAR_CATEGORY_CONFIG = {
  "توجيهي": {
    description: "يستخدم لإيصال توجيه سياساتي أو إداري يحتاج إلى الإحاطة والعمل وفقه من البعثات.",
    useCases: "توحيد المواقف، إحاطة رسمية، توجيه مرجعي",
    actionHint: "حدد ما الذي يجب على البعثة التقيد به أو متابعته أو موافاة الوزارة بشأنه.",
    bodyHint: "اكتب نصًا توجيهيًا واضحًا يحدد الخلفية العامة والمطلوب من البعثات بصورة مؤسسية.",
    summaryHint: "موجز يوضح مضمون التوجيه وأثره على عمل البعثات.",
    responseExpectation: "إفادة بالاطلاع والتنفيذ أو موافاة بملاحظات عند الحاجة.",
    recommendedPriority: "متوسطة"
  },
  "تنفيذي": {
    description: "يستخدم عندما يكون المطلوب من البعثات تنفيذ إجراء محدد خلال مهلة زمنية ومتابعته داخل النظام.",
    useCases: "تحديث بيانات، رفع إفادة، تنفيذ إجراء تشغيلي",
    actionHint: "صغ الإجراء التنفيذي المطلوب بدقة مع المخرج المتوقع من البعثة.",
    bodyHint: "اكتب متن التعميم مع الخلفية والمطلوب التنفيذي والمعايير المرجوة للإنجاز.",
    summaryHint: "موجز تنفيذي يشرح المطلوب العملي من البعثات.",
    responseExpectation: "تأكيد إنجاز مع نتيجة التنفيذ ومرجع أو مرفق داعم إن وجد.",
    recommendedPriority: "متوسطة"
  },
  "إداري": {
    description: "يستخدم للترتيبات الإدارية والتنظيمية الداخلية التي تمس العمل المؤسسي أو متطلبات التشغيل.",
    useCases: "تحديثات تنظيمية، بيانات إدارية، ترتيبات داخلية",
    actionHint: "وضح المتطلبات الإدارية المطلوب استكمالها من كل بعثة والموعد النهائي.",
    bodyHint: "اكتب متنًا إداريًا مباشرًا يوضح الإجراءات والنماذج أو البيانات المطلوبة.",
    summaryHint: "موجز إداري يبين ماهية المطلوب وأثره التنظيمي.",
    responseExpectation: "إفادة إدارية أو استكمال بيانات أو اعتماد ترتيب داخلي.",
    recommendedPriority: "عادية"
  },
  "عاجل": {
    description: "يستخدم للحالات المستعجلة التي تتطلب استجابة سريعة أو متابعة فورية من البعثات المستهدفة.",
    useCases: "تكليف عاجل، حالة طارئة، استجابة زمنية ضيقة",
    actionHint: "اذكر المطلوب العاجل والموعد القصير بوضوح مع تحديد ما يجب رفعه فورًا.",
    bodyHint: "اكتب متنًا مختصرًا وحاسمًا يوضح سبب الاستعجال والإجراء الفوري المطلوب.",
    summaryHint: "موجز عاجل يلفت إلى طبيعة الاستعجال والإجراء المطلوب فورًا.",
    responseExpectation: "تأكيد فوري بالاطلاع ثم موافاة بنتيجة التنفيذ خلال المهلة.",
    recommendedPriority: "عالية"
  }
};

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

const REPORT_FAMILY_TABS = [
  { key: "all", label: "جميع التقارير" },
  { key: "periodic", label: "التقارير الزمنية" },
  { key: "activity", label: "تقارير الأنشطة" },
  { key: "thematic", label: "التقارير الموضوعية" }
];

const PERIODIC_REPORT_TABS = [
  { key: "bilateral", label: "العلاقات الثنائية" },
  { key: "cooperation", label: "الدعم والتعاون" },
  { key: "agreements", label: "الاتفاقيات" },
  { key: "achievements", label: "الأنشطة المنجزة" },
  { key: "followup", label: "الموضوعات قيد المتابعة" },
  { key: "outlook", label: "التقييم والرؤية المستقبلية" },
  { key: "visits", label: "الزيارات المتبادلة" },
  { key: "community", label: "الجالية والإحصاءات" }
];

const PERIODIC_TYPE_GUIDANCE = {
  "سنوي": {
    label: "تقرير سنوي",
    description: "يغطي سنة كاملة، ويركز على الاتجاهات التراكمية والنتائج الممتدة ومقارنة الأداء بالأعوام السابقة.",
    emphasis: "أبرز التحولات الكبرى، وما تحقق خلال العام كاملًا، والفرص والمعوقات والتوصيات القابلة للمتابعة."
  },
  "نصف سنوي": {
    label: "تقرير نصف سنوي",
    description: "يغطي نصف عام، ويركز على المتغيرات المرحلية ومستوى التقدم وما يحتاج إلى استكمال في الفترة التالية.",
    emphasis: "أبرز ما أُنجز خلال الفترة، وما تعثر، وما يجب نقله مباشرة إلى خطة المتابعة القادمة."
  }
};

const REPORT_FORM_STEPS = [
  { key: "basics", label: "البيانات الأساسية" },
  { key: "content", label: "محتوى التقرير" },
  { key: "review", label: "المراجعة النهائية" }
];

const seedState = () => ({
  sessionUserId: null,
  activeView: "dashboard",
  selectedReportId: "report-1",
  reportRegistryTab: "all",
  reportSearch: "",
  reportStageFilter: "all",
  reportMissionFilter: "all",
  reportSort: "latest",
  periodicReportTab: "bilateral",
  reportFormStep: "basics",
  periodicFormTab: "bilateral",
  editingReportId: null,
  reportActionDialog: null,
  circularActionDialog: null,
  circularSearch: "",
  circularStatusFilter: "all",
  circularCategoryFilter: "all",
  circularPriorityFilter: "all",
  entitySearch: "",
  entityDepartmentFilter: "all",
  managementSearch: "",
  managementDepartmentFilter: "all",
  meetingSearch: "",
  meetingDepartmentFilter: "all",
  meetingStatusFilter: "all",
  planSearch: "",
  planStatusFilter: "all",
  planOwnerFilter: "all",
  requestSearch: "",
  requestFamilyFilter: "all",
  requestStatusFilter: "all",
  trainingSearch: "",
  trainingAudienceFilter: "all",
  trainingStatusFilter: "all",
  auditSearch: "",
  auditActionFilter: "all",
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
      priority: "عالية",
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
      activityCategory: "سياسي",
      activityPartners: "وزارة الخارجية المصرية، وسائل إعلام مختارة، وشركاء تنسيق رسمي.",
      activityOutputs: "مذكرة متابعة، نقاط حديث، وخطة تنسيق للربع التالي.",
      activityMediaEcho: "تغطية إيجابية محدودة في الصحافة المحلية ومنصات البعثة.",
      activityDiplomaticImpact: "عزز حضور البعثة وفتح مسار متابعة مع جهات رسمية وإعلامية.",
      activityFollowupOwner: "الملحق السياسي والإعلامي في البعثة",
      afterResults: "تم تنفيذ 6 لقاءات رسمية و3 فعاليات رئيسية وإعداد مذكرة متابعة.",
      afterRecommendations: "جدولة متابعة فنية واستمرار التنسيق الإعلامي خلال الربع القادم.",
      attachmentName: "cairo-half-year-2026.pdf",
      reportFamily: "periodic",
      countrySnapshot: "ملف موجز عن بلد الاعتماد وأهم المتغيرات السياسية والاقتصادية ذات الصلة بالعلاقات الثنائية.",
      bilateralAssessment: "قراءة تقييمية لمؤشرات العلاقات الثنائية واتجاهها العام خلال الفترة محل التقرير.",
      supportCooperation: "عرض لأوجه الدعم والتعاون السياسي والاقتصادي والإنساني والتدريبي وما تحقق منها.",
      activeAgreements: "الاتفاقيات والبروتكولات ومذكرات التفاهم النافذة وسارية المفعول.",
      agreementsNeedingActivation: "الاتفاقيات والبروتكولات ومذكرات التفاهم التي تحتاج إلى تفعيل ومتابعة.",
      completedActivities: "أبرز الأنشطة والملفات التي أنجزتها البعثة خلال الفترة.",
      pendingActivities: "الملفات والأنشطة التي لم تستكمل وتحتاج إلى متابعة لاحقة.",
      relationshipOutlook: "تقدير البعثة لمستقبل العلاقات وأهم الفرص والمعوقات.",
      visitsFromYemen: "أهم الزيارات المتبادلة من جانب بلادنا خلال الفترة.",
      visitsFromHostCountry: "أهم الزيارات المتبادلة من جانب بلد الاعتماد خلال الفترة.",
      communityUpdate: "تحديث موجز عن شؤون الجالية اليمنية ذات الصلة ببلد الاعتماد.",
      communityStats: "إحصاءات عامة عن الجالية اليمنية في بلد الاعتماد.",
      reportingYear: "2026",
      coverageFrom: "2026-01-01",
      coverageTo: "2026-06-30",
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
      category: "تنفيذي",
      priority: "عالية",
      summary: "توجيه للبعثات بمراجعة بيانات التواصل الرسمية وتحديث القوائم المعتمدة خلال المهلة المحددة.",
      body: "يرجى من جميع البعثات المستهدفة مراجعة بيانات التواصل الرسمية للجهات الحكومية والشركاء الرئيسيين، وتحديث أي تغييرات طرأت على الأسماء أو المناصب أو وسائل الاتصال، ثم تأكيد الإنجاز ضمن النظام خلال الفترة المحددة.",
      actionRequired: "مراجعة قاعدة بيانات التواصل الرسمي وتحديثها ثم رفع تأكيد الإنجاز مع الإشارة إلى ما تم تعديله.",
      attachmentName: "official-contacts-template.docx",
      issuedBy: "إدارة التخطيط",
      targetMissionIds: CANONICAL_MISSIONS.map((mission) => mission.id),
      dueDate: "2026-03-28",
      status: "نشط",
      readMissionIds: ["mission-cairo", "mission-riyadh", "mission-washington"],
      completedMissionIds: ["mission-riyadh"],
      workflowHistory: [
        { actor: "إدارة التخطيط", action: "إصدار التعميم", stage: "نشط", at: "2026-03-15 09:10" }
      ],
      processingLog: [
        { actor: "بعثة الرياض", missionId: "mission-riyadh", result: "تم تحديث قائمة الاتصال الرسمية وإرفاق النسخة المعتمدة.", evidenceRef: "riyadh-contacts-update.xlsx", at: "2026-03-18 10:20" }
      ],
      missionResponses: [
        { missionId: "mission-riyadh", note: "تم تحديث قائمة الاتصال الرسمية وإرفاق النسخة المعتمدة.", evidenceRef: "riyadh-contacts-update.xlsx", completedAt: "2026-03-18 10:20", actor: "بعثة الرياض" }
      ]
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

function extractSharedState(source = seedState()) {
  const seeded = seedState();
  return SHARED_STATE_KEYS.reduce((acc, key) => {
    const value = source?.[key] ?? seeded[key];
    acc[key] = JSON.parse(JSON.stringify(value));
    return acc;
  }, {});
}

function extractRuntimeState(source = seedState()) {
  return {
    sessionUserId: source.sessionUserId ?? null,
    activeView: source.activeView || "dashboard",
    selectedReportId: source.selectedReportId || null,
    reportRegistryTab: source.reportRegistryTab || "all",
    reportSearch: source.reportSearch || "",
    reportStageFilter: source.reportStageFilter || "all",
    reportMissionFilter: source.reportMissionFilter || "all",
    reportSort: source.reportSort || "latest",
    periodicReportTab: source.periodicReportTab || "bilateral",
    reportFormStep: source.reportFormStep || "basics",
    periodicFormTab: source.periodicFormTab || "bilateral",
    editingReportId: source.editingReportId || null,
    reportActionDialog: source.reportActionDialog || null,
    circularActionDialog: source.circularActionDialog && typeof source.circularActionDialog === "object" ? source.circularActionDialog : null,
    circularSearch: source.circularSearch || "",
    circularStatusFilter: source.circularStatusFilter || "all",
    circularCategoryFilter: source.circularCategoryFilter || "all",
    circularPriorityFilter: source.circularPriorityFilter || "all",
    entitySearch: source.entitySearch || "",
    entityDepartmentFilter: source.entityDepartmentFilter || "all",
    managementSearch: source.managementSearch || "",
    managementDepartmentFilter: source.managementDepartmentFilter || "all",
    meetingSearch: source.meetingSearch || "",
    meetingDepartmentFilter: source.meetingDepartmentFilter || "all",
    meetingStatusFilter: source.meetingStatusFilter || "all",
    planSearch: source.planSearch || "",
    planStatusFilter: source.planStatusFilter || "all",
    planOwnerFilter: source.planOwnerFilter || "all",
    requestSearch: source.requestSearch || "",
    requestFamilyFilter: source.requestFamilyFilter || "all",
    requestStatusFilter: source.requestStatusFilter || "all",
    trainingSearch: source.trainingSearch || "",
    trainingAudienceFilter: source.trainingAudienceFilter || "all",
    trainingStatusFilter: source.trainingStatusFilter || "all",
    auditSearch: source.auditSearch || "",
    auditActionFilter: source.auditActionFilter || "all",
    editingCircularId: source.editingCircularId || null,
    editingMeetingId: source.editingMeetingId || null,
    editingPlanId: source.editingPlanId || null,
    loginError: source.loginError || "",
    alerts: Array.isArray(source.alerts) ? source.alerts : seedState().alerts
  };
}

function buildPersistedState(sharedState = seedState(), runtimeState = seedState()) {
  return {
    ...seedState(),
    ...extractRuntimeState(runtimeState),
    ...extractSharedState(sharedState)
  };
}

let state = loadState();
const root = document.getElementById("app-root");
let runtimeDataMode = "browser-local";
let remoteSyncTimer = null;
let remoteSyncInFlight = false;
let queuedRemotePayload = "";
let lastSharedStateHash = JSON.stringify(extractSharedState(state));

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return seedState();
  let parsed = null;
  try {
    parsed = JSON.parse(saved);
  } catch (error) {
    console.warn("Failed to parse saved state, resetting to seed state.", error);
    return seedState();
  }
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
  parsed.reportActionDialog = parsed.reportActionDialog && typeof parsed.reportActionDialog === "object" ? parsed.reportActionDialog : null;
  parsed.reportRegistryTab = parsed.reportRegistryTab || "all";
  parsed.reportSearch = parsed.reportSearch || "";
  parsed.reportStageFilter = parsed.reportStageFilter || "all";
  parsed.reportMissionFilter = parsed.reportMissionFilter || "all";
  parsed.reportSort = parsed.reportSort || "latest";
  parsed.periodicReportTab = parsed.periodicReportTab || "bilateral";
  parsed.reportFormStep = parsed.reportFormStep || "basics";
  parsed.periodicFormTab = parsed.periodicFormTab || "bilateral";
  parsed.circularActionDialog = parsed.circularActionDialog && typeof parsed.circularActionDialog === "object" ? parsed.circularActionDialog : null;
  parsed.circularSearch = parsed.circularSearch || "";
  parsed.circularStatusFilter = parsed.circularStatusFilter || "all";
  parsed.circularCategoryFilter = parsed.circularCategoryFilter || "all";
  parsed.circularPriorityFilter = parsed.circularPriorityFilter || "all";
  parsed.editingCircularId = parsed.editingCircularId || null;
  parsed.editingMeetingId = parsed.editingMeetingId || null;
  parsed.editingPlanId = parsed.editingPlanId || null;
  parsed.reportRequests = parsed.reportRequests.map((request) => ({
    ...request,
    requestFamily: request.requestFamily || inferReportFamily(request),
    thematicTrack: request.thematicTrack || "",
    createdByRole: request.createdByRole || "planning",
    requestedByDepartmentId: request.requestedByDepartmentId || "",
    priority: request.priority || "متوسطة",
    targetMissionIds: normalizeMissionIdList(request.targetMissionIds, parsed.missions),
    completedMissionIds: normalizeMissionIdList(request.completedMissionIds, parsed.missions),
    status: request.status || "نشط"
  }));
  parsed.circulars = Array.isArray(parsed.circulars) ? parsed.circulars : seedState().circulars;
  parsed.circulars = parsed.circulars.map((circular) => ({
    ...circular,
    category: ["توجيهي", "تنفيذي", "إداري", "عاجل"].includes(circular.category) ? circular.category : "تنفيذي",
    priority: ["عالية", "متوسطة", "عادية"].includes(circular.priority) ? circular.priority : "متوسطة",
    summary: circular.summary || "",
    body: circular.body || "",
    actionRequired: circular.actionRequired || "",
    attachmentName: circular.attachmentName || "",
    issuedAt: circular.issuedAt || "",
    closureNote: circular.closureNote || "",
    closedAt: circular.closedAt || "",
    targetMissionIds: normalizeMissionIdList(circular.targetMissionIds, parsed.missions),
    readMissionIds: normalizeMissionIdList(circular.readMissionIds, parsed.missions),
    completedMissionIds: normalizeMissionIdList(circular.completedMissionIds, parsed.missions),
    workflowHistory: Array.isArray(circular.workflowHistory) ? circular.workflowHistory : [],
    processingLog: Array.isArray(circular.processingLog) ? circular.processingLog : [],
    missionResponses: normalizeCircularResponses(circular.missionResponses, parsed.missions)
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
  parsed.alerts = Array.isArray(parsed.alerts) ? parsed.alerts : seedState().alerts;
  parsed.reports = parsed.reports.map((report) => ({
    ...report,
    departmentId: parsed.missions.find((mission) => mission.id === report.missionId)?.departmentId || LEGACY_DEPARTMENT_ID_MAP[report.departmentId] || report.departmentId,
    reportFamily: inferReportFamily(report),
    countrySnapshot: report.countrySnapshot || "",
    bilateralAssessment: report.bilateralAssessment || "",
    supportCooperation: report.supportCooperation || "",
    agreementsStatus: report.agreementsStatus || "",
    activeAgreements: report.activeAgreements || report.agreementsStatus || "",
    agreementsNeedingActivation: report.agreementsNeedingActivation || "",
    completedActivities: report.completedActivities || "",
    pendingActivities: report.pendingActivities || "",
    relationshipOutlook: report.relationshipOutlook || "",
    visitsSummary: report.visitsSummary || "",
    visitsFromYemen: report.visitsFromYemen || report.visitsSummary || "",
    visitsFromHostCountry: report.visitsFromHostCountry || "",
    communityUpdate: report.communityUpdate || "",
    communityStats: report.communityStats || "",
    reportingYear: report.reportingYear || "",
    coverageFrom: report.coverageFrom || "",
    coverageTo: report.coverageTo || "",
    bilateralIndicators: normalizeBilateralIndicators(report.bilateralIndicators),
    reviewNotes: report.reviewNotes || "",
    qualityScores: normalizeQualityScores(report.qualityScores),
    submittedOn: report.submittedOn || "",
    thematicSituation: report.thematicSituation || "",
    thematicDevelopments: report.thematicDevelopments || "",
    thematicStakeholders: report.thematicStakeholders || "",
    thematicImplications: report.thematicImplications || "",
    thematicRisks: report.thematicRisks || "",
    thematicMissionAction: report.thematicMissionAction || "",
    thematicRecommendations: report.thematicRecommendations || "",
    activityCategory: report.activityCategory || "",
    activityPartners: report.activityPartners || "",
    activityOutputs: report.activityOutputs || "",
    activityMediaEcho: report.activityMediaEcho || "",
    activityDiplomaticImpact: report.activityDiplomaticImpact || "",
    activityFollowupOwner: report.activityFollowupOwner || "",
    workflowStage: report.workflowStage || "مرفوع من البعثة",
    workflowHistory: Array.isArray(report.workflowHistory) ? report.workflowHistory : []
  }));
  return parsed;
}

function canUseRemoteApi() {
  return typeof window !== "undefined" && /^https?:$/i.test(window.location.protocol);
}

async function requestRemote(path, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);
  try {
    const response = await fetch(path, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.status === 204 ? null : response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

function setStateFromSharedSource(sharedSource) {
  const runtimeState = extractRuntimeState(state);
  const persisted = buildPersistedState(sharedSource, runtimeState);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  state = loadState();
  lastSharedStateHash = JSON.stringify(extractSharedState(state));
}

function scheduleRemoteSync(payload) {
  if (runtimeDataMode !== "shared-api") return;
  queuedRemotePayload = payload || JSON.stringify(extractSharedState(state));
  if (remoteSyncTimer) clearTimeout(remoteSyncTimer);
  remoteSyncTimer = setTimeout(() => {
    void flushRemoteSync();
  }, 300);
}

async function flushRemoteSync() {
  if (runtimeDataMode !== "shared-api" || !queuedRemotePayload) return;
  if (remoteSyncInFlight) return;
  remoteSyncInFlight = true;
  const payload = queuedRemotePayload;
  queuedRemotePayload = "";
  try {
    await requestRemote(`${API_BASE_PATH}/state`, {
      method: "PUT",
      body: JSON.stringify({ state: JSON.parse(payload) })
    });
  } catch (error) {
    console.warn("Remote sync failed. Falling back to browser-local mode.", error);
    runtimeDataMode = "browser-local";
    queuedRemotePayload = "";
  } finally {
    remoteSyncInFlight = false;
    if (queuedRemotePayload) scheduleRemoteSync(queuedRemotePayload);
  }
}

async function bootstrapDataLayer() {
  if (!canUseRemoteApi()) return;
  try {
    const health = await requestRemote(`${API_BASE_PATH}/health`);
    if (!health?.ok) return;
    runtimeDataMode = "shared-api";
    const remoteStateResponse = await requestRemote(`${API_BASE_PATH}/state`);
    if (remoteStateResponse?.state && typeof remoteStateResponse.state === "object") {
      const remoteState = remoteStateResponse.state;
      const remoteIsBootstrapState = !Array.isArray(remoteState.departments) || !remoteState.departments.length || !Array.isArray(remoteState.missions) || !remoteState.missions.length;
      if (remoteIsBootstrapState) {
        lastSharedStateHash = JSON.stringify(extractSharedState(state));
        scheduleRemoteSync(lastSharedStateHash);
      } else {
        setStateFromSharedSource(remoteState);
      }
    } else {
      lastSharedStateHash = JSON.stringify(extractSharedState(state));
      scheduleRemoteSync(lastSharedStateHash);
    }
    renderApp();
  } catch (error) {
    runtimeDataMode = "browser-local";
    console.warn("Shared API unavailable. Continuing in browser-local mode.", error);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const sharedStateHash = JSON.stringify(extractSharedState(state));
  if (runtimeDataMode === "shared-api" && sharedStateHash !== lastSharedStateHash) {
    lastSharedStateHash = sharedStateHash;
    scheduleRemoteSync(sharedStateHash);
  }
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

function resolveMissionId(reference, sourceMissions = null) {
  const value = String(reference || "").trim();
  if (!value) return "";
  const missions = Array.isArray(sourceMissions)
    ? sourceMissions
    : Array.isArray(globalThis.state?.missions)
      ? globalThis.state.missions
      : CANONICAL_MISSIONS;
  const directMission = missions.find((mission) => mission.id === value);
  if (directMission) return directMission.id;
  const byUsername = missions.find((mission) => mission.username === value);
  if (byUsername) return byUsername.id;
  const byName = missions.find((mission) => mission.name === value);
  if (byName) return byName.id;
  if (value.startsWith("user-")) {
    const missionId = value.slice(5);
    if (missions.some((mission) => mission.id === missionId)) return missionId;
  }
  return "";
}

function normalizeMissionIdList(values, sourceMissions = null) {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.map((value) => resolveMissionId(value, sourceMissions)).filter(Boolean))];
}

function normalizeCircularResponses(values, sourceMissions = null) {
  if (!Array.isArray(values)) return [];
  const normalized = [];
  values.forEach((entry) => {
    const missionId = resolveMissionId(entry?.missionId || entry?.missionName || "", sourceMissions);
    if (!missionId) return;
    const existingIndex = normalized.findIndex((item) => item.missionId === missionId);
    const nextEntry = {
      missionId,
      note: String(entry?.note || entry?.result || "").trim(),
      evidenceRef: String(entry?.evidenceRef || entry?.attachmentName || "").trim(),
      completedAt: String(entry?.completedAt || entry?.at || "").trim(),
      actor: String(entry?.actor || "").trim()
    };
    if (existingIndex >= 0) {
      normalized[existingIndex] = nextEntry;
    } else {
      normalized.push(nextEntry);
    }
  });
  return normalized;
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

function getGroupedMissions(missions) {
  return state.departments.map((department) => ({
    department,
    missions: missions.filter((mission) => mission.departmentId === department.id)
  })).filter((group) => group.missions.length);
}

function matchesSearchText(values, query) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  if (!normalizedQuery) return true;
  return values.some((value) => String(value || "").toLowerCase().includes(normalizedQuery));
}

function getFilteredDepartmentMissionCollections({
  departments = state.departments,
  missions = state.missions,
  search = "",
  departmentFilter = "all"
} = {}) {
  const normalizedSearch = String(search || "").trim().toLowerCase();
  const availableDepartmentIds = new Set(departments.map((department) => department.id));
  const effectiveDepartmentFilter = departmentFilter !== "all" && availableDepartmentIds.has(departmentFilter)
    ? departmentFilter
    : "all";
  const matchingDepartmentIds = new Set(
    departments
      .filter((department) => matchesSearchText([department.name, department.username], normalizedSearch))
      .map((department) => department.id)
  );
  const visibleMissions = missions.filter((mission) => {
    if (effectiveDepartmentFilter !== "all" && mission.departmentId !== effectiveDepartmentFilter) return false;
    if (!normalizedSearch) return true;
    return matchingDepartmentIds.has(mission.departmentId)
      || matchesSearchText([mission.name, mission.username, getDepartmentName(mission.departmentId)], normalizedSearch);
  });
  const visibleDepartmentIds = new Set(visibleMissions.map((mission) => mission.departmentId));
  const visibleDepartments = departments.filter((department) => {
    if (effectiveDepartmentFilter !== "all" && department.id !== effectiveDepartmentFilter) return false;
    if (!normalizedSearch) return true;
    return matchingDepartmentIds.has(department.id) || visibleDepartmentIds.has(department.id);
  });
  return {
    search: normalizedSearch,
    departmentFilter: effectiveDepartmentFilter,
    visibleDepartments,
    visibleMissions,
    groups: getGroupedMissions(visibleMissions)
  };
}

function getQualityTone(score) {
  const numericScore = Number(score || 0);
  if (numericScore >= 4) return "success";
  if (numericScore >= 3) return "warning";
  return "danger";
}

function getQualityLabel(score) {
  const numericScore = Number(score || 0);
  if (numericScore >= 4) return "مرتفع";
  if (numericScore >= 3) return "متوسط";
  return "بحاجة إلى تحسين";
}

function getDemoAccounts() {
  return [
    { roleLabel: "مدير النظام", scope: "وزارة", username: "admin", password: "Admin@2026" },
    { roleLabel: "إدارة التخطيط", scope: "وزارة", username: "planning", password: "Planning@2026" },
    { roleLabel: "القيادة العليا", scope: "وزارة", username: "leadership", password: "Leadership@2026" },
    { roleLabel: "دائرة الجزيرة والخليج", scope: "دائرة", username: "gulf_dept", password: "Gulf@2026" },
    { roleLabel: "بعثة الرياض", scope: "بعثة", username: "riyadh", password: "Riyadh@2026" }
  ];
}

function getViewBadge(view, user = getSessionUser()) {
  if (!user) return "";
  if (view === "reports") return String(getVisibleReports(user).length);
  if (view === "circulars") return String(getVisibleCirculars(user).length);
  if (view === "meetings") return String(getVisibleMeetings(user).length);
  if (view === "plans") return String(getVisiblePlans(user).length);
  if (view === "training") return String(getVisibleTrainings(user).length);
  if (view === "requests") return String(getVisibleRequests(user).length);
  if (view === "entities") return String(user.role === "department"
    ? state.missions.filter((mission) => mission.departmentId === user.departmentId).length
    : state.missions.length);
  if (view === "management") return String(state.missions.length);
  if (view === "governance") return String(state.auditLog.length);
  return "";
}

function getAuditCategory(action = "") {
  if (action.includes("تسجيل الدخول") || action.includes("تسجيل الخروج")) return "session";
  if (action.includes("تقرير") || action.includes("طلب")) return "reports";
  if (action.includes("تعميم")) return "circulars";
  if (action.includes("اجتماع") || action.includes("مهمة")) return "meetings";
  if (action.includes("خطة")) return "plans";
  if (action.includes("إضافة دائرة") || action.includes("إضافة بعثة") || action.includes("إدارة")) return "entities";
  return "other";
}

function getAuditCategoryLabel(category = "other") {
  if (category === "session") return "الدخول والجلسات";
  if (category === "reports") return "التقارير والطلبات";
  if (category === "circulars") return "التعاميم";
  if (category === "meetings") return "الاجتماعات";
  if (category === "plans") return "الخطط";
  if (category === "entities") return "إدارة الكيانات";
  return "أخرى";
}

function getAuditCategoryTone(category = "other") {
  if (category === "session") return "info";
  if (category === "reports") return "warning";
  if (category === "circulars") return "danger";
  if (category === "meetings") return "info";
  if (category === "plans") return "success";
  if (category === "entities") return "warning";
  return "info";
}

function getFilteredAuditLog() {
  return (state.auditLog || []).filter((entry) => {
    const category = getAuditCategory(entry.action);
    if (state.auditActionFilter !== "all" && category !== state.auditActionFilter) return false;
    return matchesSearchText([entry.actor, entry.action, entry.target, entry.scope, entry.at], state.auditSearch);
  });
}

function getGovernanceMetrics() {
  const entries = state.auditLog || [];
  const filtered = getFilteredAuditLog();
  const byCategory = entries.reduce((acc, entry) => {
    const category = getAuditCategory(entry.action);
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  return {
    total: entries.length,
    filtered: filtered.length,
    sessions: byCategory.session || 0,
    reports: byCategory.reports || 0,
    circulars: byCategory.circulars || 0,
    entities: byCategory.entities || 0
  };
}

function renderMissionPicker({
  pickerId,
  label = "البعثات المستهدفة",
  inputName = "missionId",
  missions = [],
  selectedIds = [],
  helperText = "استخدم البحث السريع والتجميع حسب الدائرة لاختيار البعثات بسهولة."
}) {
  const selectedSet = new Set(selectedIds);
  const groups = getGroupedMissions(missions);
  return `
    <div class="mission-picker" data-mission-picker-id="${pickerId}">
      <div class="mission-picker-head">
        <div>
          <strong>${label}</strong>
          <p class="mini">${helperText}</p>
        </div>
        <div class="mission-picker-actions">
          <button class="btn secondary" type="button" data-mission-picker-action="select-all" data-picker-id="${pickerId}">تحديد الكل</button>
          <button class="btn secondary" type="button" data-mission-picker-action="clear-all" data-picker-id="${pickerId}">إلغاء الكل</button>
        </div>
      </div>
      <label class="field full mission-picker-search-field">
        <span>بحث في البعثات</span>
        <input type="search" class="mission-picker-search" data-picker-id="${pickerId}" placeholder="ابحث باسم البعثة أو الدائرة">
      </label>
      <div class="detail-row mission-picker-summary">
        <span>إجمالي البعثات المختارة</span>
        <span id="mission-picker-count-${pickerId}">${selectedIds.length} من ${missions.length}</span>
      </div>
      <div class="mission-picker-groups">
        ${groups.map((group) => `
          <details class="mission-group" data-picker-group ${group.missions.length <= 6 ? "open" : ""}>
            <summary class="mission-group-summary">
              <span>${group.department.name}</span>
              <span class="tag info" data-mission-group-count>${group.missions.length}</span>
            </summary>
            <div class="mission-chip-grid">
              ${group.missions.map((mission) => `
                <label class="mission-chip" data-mission-chip data-search-text="${`${mission.name} ${group.department.name}`.toLowerCase()}">
                  <input type="checkbox" name="${inputName}" value="${mission.id}" ${selectedSet.has(mission.id) ? "checked" : ""}>
                  <span class="mission-chip-title">${mission.name}</span>
                  <small class="mission-chip-meta">${group.department.name}</small>
                </label>
              `).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    </div>
  `;
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
  const normalizedCirculars = state.circulars.map((circular) => ({
    ...circular,
    targetMissionIds: normalizeMissionIdList(circular.targetMissionIds),
    readMissionIds: normalizeMissionIdList(circular.readMissionIds),
    completedMissionIds: normalizeMissionIdList(circular.completedMissionIds),
    missionResponses: normalizeCircularResponses(circular.missionResponses)
  }));
  if (user.role === "admin" || user.role === "planning" || user.role === "leadership") {
    return normalizedCirculars;
  }
  if (user.role === "department") {
    const missionIds = state.missions.filter((mission) => mission.departmentId === user.departmentId).map((mission) => mission.id);
    return normalizedCirculars.filter((circular) => circular.targetMissionIds.some((id) => missionIds.includes(id)));
  }
  return normalizedCirculars.filter((circular) => circular.targetMissionIds.includes(user.missionId));
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

function getTrainingProgress(training) {
  const totalUsers = Number(training?.totalUsers || 0);
  const completedUsers = Number(training?.completedUsers || 0);
  const completionTarget = Number(training?.completionTarget || 0);
  const percent = totalUsers ? Math.round((completedUsers / totalUsers) * 100) : 0;
  const gap = Math.max(completionTarget - percent, 0);
  if (percent >= completionTarget) {
    return { percent, gap, label: "حقق الهدف", tone: "success", group: "met" };
  }
  if (gap <= 10) {
    return { percent, gap, label: "قريب من الهدف", tone: "warning", group: "near" };
  }
  return { percent, gap, label: "بحاجة متابعة", tone: "danger", group: "attention" };
}

function getTrainingAudienceBucket(training) {
  const audience = String(training?.audience || "");
  if (audience === "جميع المستخدمين") return "all-users";
  if (audience.includes("البعثات") && audience.includes("الدوائر")) return "shared";
  if (audience.includes("البعثات")) return "missions";
  if (audience.includes("الدوائر")) return "departments";
  return "specialized";
}

function getTrainingAudienceLabel(bucket) {
  if (bucket === "all-users") return "جميع المستخدمين";
  if (bucket === "shared") return "البعثات والدوائر";
  if (bucket === "missions") return "البعثات";
  if (bucket === "departments") return "الدوائر";
  return "برامج متخصصة";
}

function matchesTrainingAudienceFilter(training, filterValue) {
  if (filterValue === "all") return true;
  const audienceBucket = getTrainingAudienceBucket(training);
  if (filterValue === audienceBucket) return true;
  if (filterValue === "missions") return audienceBucket === "shared";
  if (filterValue === "departments") return audienceBucket === "shared";
  return false;
}

function getFilteredTrainings(user = getSessionUser()) {
  const search = String(state.trainingSearch || "").trim().toLowerCase();
  return getVisibleTrainings(user)
    .filter((training) => {
      const progress = getTrainingProgress(training);
      const matchesSearch = !search || [
        training.title,
        training.audience,
        progress.label
      ].some((value) => String(value || "").toLowerCase().includes(search));
      const matchesAudience = matchesTrainingAudienceFilter(training, state.trainingAudienceFilter);
      const matchesStatus = state.trainingStatusFilter === "all" || progress.group === state.trainingStatusFilter;
      return matchesSearch && matchesAudience && matchesStatus;
    })
    .sort((a, b) => {
      const progressA = getTrainingProgress(a);
      const progressB = getTrainingProgress(b);
      const order = { attention: 3, near: 2, met: 1 };
      if ((order[progressB.group] || 0) !== (order[progressA.group] || 0)) {
        return (order[progressB.group] || 0) - (order[progressA.group] || 0);
      }
      if (progressB.gap !== progressA.gap) return progressB.gap - progressA.gap;
      return String(a.title || "").localeCompare(String(b.title || ""), "ar");
    });
}

function getFilteredRequestsForDisplay(user = getSessionUser()) {
  const search = String(state.requestSearch || "").trim().toLowerCase();
  return getSortedRequestsForDisplay(
    getVisibleRequests(user).filter((request) => {
      const lifecycle = getRequestLifecycle(request);
      const urgency = getRequestUrgency(request);
      const missionNames = request.targetMissionIds.map((missionId) => getMissionName(missionId)).join(" ");
      const matchesSearch = !search || [
        request.title,
        request.type,
        request.createdBy,
        request.thematicTrack,
        lifecycle.label,
        urgency.label,
        missionNames
      ].some((value) => String(value || "").toLowerCase().includes(search));
      const matchesFamily = state.requestFamilyFilter === "all" || request.requestFamily === state.requestFamilyFilter;
      const lifecycleGroup = lifecycle.label === "مغلق" || lifecycle.label === "مكتمل"
        ? "complete"
        : lifecycle.label === "متأخر"
          ? "overdue"
          : urgency.label === "قريب الاستحقاق"
            ? "due-soon"
            : "active";
      const matchesStatus = state.requestStatusFilter === "all" || lifecycleGroup === state.requestStatusFilter;
      return matchesSearch && matchesFamily && matchesStatus;
    })
  );
}

function groupRequestsForBoard(requests) {
  const groups = {
    urgent: [],
    active: [],
    archive: []
  };
  requests.forEach((request) => {
    const lifecycle = getRequestLifecycle(request);
    const urgency = getRequestUrgency(request);
    if (lifecycle.label === "مكتمل" || lifecycle.label === "مغلق") {
      groups.archive.push(request);
      return;
    }
    if (lifecycle.label === "متأخر" || urgency.label === "قريب الاستحقاق" || request.priority === "عالية") {
      groups.urgent.push(request);
      return;
    }
    groups.active.push(request);
  });
  return groups;
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
  const canUpdateTask = canUpdateMeetingTask(meeting, task, user);
  if (canUpdateTask && task.status !== "قيد التنفيذ" && task.status !== "منجز") {
    actions.push({ key: "start-task", label: "بدء التنفيذ", nextStatus: "قيد التنفيذ" });
  }
  if (canUpdateTask && task.status !== "منجز") {
    actions.push({ key: "complete-task", label: "إنجاز المهمة", nextStatus: "منجز" });
  }
  if (canUpdateTask && task.status !== "ملغى" && task.status !== "منجز") {
    actions.push({ key: "delay-task", label: "وضع كمُتأخر", nextStatus: "متأخر" });
  }
  return actions;
}

function getMeetingTaskTone(status) {
  if (status === "منجز") return "success";
  if (status === "متأخر") return "danger";
  if (status === "قيد التنفيذ") return "warning";
  return "info";
}

function getMeetingSummary(meeting) {
  const tasks = Array.isArray(meeting?.tasks) ? meeting.tasks : [];
  const completed = tasks.filter((task) => task.status === "منجز").length;
  const delayed = tasks.filter((task) => task.status === "متأخر").length;
  const inProgress = tasks.filter((task) => task.status === "قيد التنفيذ").length;
  const pending = Math.max(tasks.length - completed - delayed - inProgress, 0);
  let statusKey = "pending";
  let label = "جديد";
  let tone = "info";
  if (tasks.length && completed === tasks.length) {
    statusKey = "completed";
    label = "مكتمل";
    tone = "success";
  } else if (delayed > 0) {
    statusKey = "delayed";
    label = "متأخر";
    tone = "danger";
  } else if (inProgress > 0) {
    statusKey = "in-progress";
    label = "قيد التنفيذ";
    tone = "warning";
  }
  return {
    total: tasks.length,
    completed,
    delayed,
    inProgress,
    pending,
    percent: tasks.length ? Math.round((completed / tasks.length) * 100) : 0,
    statusKey,
    label,
    tone
  };
}

function getFilteredMeetings(user = getSessionUser()) {
  const meetings = getVisibleMeetings(user);
  const effectiveDepartmentFilter = user?.role === "department"
    ? user.departmentId
    : (state.meetingDepartmentFilter !== "all" ? state.meetingDepartmentFilter : "all");
  return meetings.filter((meeting) => {
    const summary = getMeetingSummary(meeting);
    if (effectiveDepartmentFilter !== "all" && meeting.departmentId !== effectiveDepartmentFilter) return false;
    if (state.meetingStatusFilter !== "all" && summary.statusKey !== state.meetingStatusFilter) return false;
    return matchesSearchText([
      meeting.title,
      meeting.summary,
      getDepartmentName(meeting.departmentId),
      ...(meeting.tasks || []).flatMap((task) => [task.title, task.assignee, task.status, task.priority])
    ], state.meetingSearch);
  }).sort((a, b) => {
    const summaryDiff = getMeetingSummary(b).delayed - getMeetingSummary(a).delayed;
    if (summaryDiff) return summaryDiff;
    return String((b.workflowHistory || [])[0]?.at || "").localeCompare(String((a.workflowHistory || [])[0]?.at || ""));
  });
}

function getPlanOwnerLabel(plan) {
  return plan.ownerType === "mission" ? getMissionName(plan.ownerId) : getDepartmentName(plan.ownerId);
}

function getFilteredPlans(user = getSessionUser()) {
  const plans = getVisiblePlans(user);
  const effectiveOwnerFilter = (user?.role === "planning" || user?.role === "admin") ? state.planOwnerFilter : "all";
  return plans.filter((plan) => {
    if (state.planStatusFilter !== "all" && plan.status !== state.planStatusFilter) return false;
    if (effectiveOwnerFilter !== "all" && plan.ownerType !== effectiveOwnerFilter) return false;
    return matchesSearchText([
      plan.title,
      plan.kpi,
      plan.period,
      plan.status,
      getPlanOwnerLabel(plan)
    ], state.planSearch);
  }).sort((a, b) => {
    if (a.status !== b.status) {
      const weight = { "متأخرة": 3, "قيد التنفيذ": 2, "منجز": 1 };
      return (weight[b.status] || 0) - (weight[a.status] || 0);
    }
    return Number(b.progress || 0) - Number(a.progress || 0);
  });
}

function getCircularCompletion(circular) {
  const targetMissionIds = normalizeMissionIdList(circular.targetMissionIds);
  const readMissionIds = normalizeMissionIdList(circular.readMissionIds).filter((id) => targetMissionIds.includes(id));
  const completedMissionIds = normalizeMissionIdList(circular.completedMissionIds).filter((id) => targetMissionIds.includes(id));
  const total = targetMissionIds.length;
  const read = readMissionIds.length;
  const completed = completedMissionIds.length;
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

function getCircularPriorityTone(priority) {
  if (priority === "عالية") return "danger";
  if (priority === "متوسطة") return "warning";
  return "info";
}

function getCircularCategoryConfig(category = "تنفيذي") {
  return CIRCULAR_CATEGORY_CONFIG[category] || CIRCULAR_CATEGORY_CONFIG["تنفيذي"];
}

function getCircularUrgency(circular) {
  const stats = getCircularCompletion(circular);
  if (circular.status === "مغلق") return { label: "مغلق", tone: "success" };
  if (stats.total > 0 && stats.pending === 0) return { label: "مكتمل التنفيذ", tone: "success" };
  const dueDate = String(circular.dueDate || "");
  if (!dueDate) return { label: "بدون موعد", tone: "info" };
  const today = new Date().toISOString().slice(0, 10);
  const diffDays = Math.ceil((new Date(dueDate) - new Date(today)) / 86400000);
  if (diffDays < 0 && stats.pending > 0) return { label: "متأخر", tone: "danger" };
  if (diffDays <= 3 && stats.pending > 0) return { label: "قريب الاستحقاق", tone: "warning" };
  return { label: "نشط", tone: "info" };
}

function getCircularMissionStatus(circular, missionId) {
  const response = (circular.missionResponses || []).find((item) => item.missionId === missionId) || null;
  const read = normalizeMissionIdList(circular.readMissionIds).includes(missionId);
  const completed = normalizeMissionIdList(circular.completedMissionIds).includes(missionId);
  const urgency = getCircularUrgency(circular);
  if (completed) {
    return {
      label: "منجز",
      tone: "success",
      detail: response?.note || "تم تأكيد تنفيذ المطلوب من البعثة."
    };
  }
  if (circular.status === "مغلق") {
    return {
      label: "مغلق دون إنجاز",
      tone: "danger",
      detail: circular.closureNote || "أغلق التعميم قبل اكتمال تنفيذ هذه البعثة."
    };
  }
  if (urgency.label === "متأخر") {
    return {
      label: "متأخر",
      tone: "danger",
      detail: read ? "اطّلعت البعثة على التعميم ولم تؤكد التنفيذ حتى الآن." : "لم تؤكد البعثة القراءة أو الإنجاز حتى تجاوز الموعد."
    };
  }
  if (read) {
    return {
      label: "قيد التنفيذ",
      tone: "warning",
      detail: "أكدت البعثة قراءة التعميم وما زال التنفيذ مفتوحًا."
    };
  }
  if (urgency.label === "قريب الاستحقاق") {
    return {
      label: "قريب الاستحقاق",
      tone: "warning",
      detail: "لم تبدأ المعالجة بعد مع اقتراب نهاية المهلة."
    };
  }
  return {
    label: "وارد جديد",
    tone: "info",
    detail: "التعميم وارد للبعثة وبانتظار القراءة والتنفيذ."
  };
}

function getCircularMissionIdsForUser(circular, user = getSessionUser()) {
  const missionIds = normalizeMissionIdList(circular.targetMissionIds);
  if (!user) return [];
  if (user.role === "mission") return missionIds.filter((missionId) => missionId === user.missionId);
  if (user.role === "department") {
    return missionIds.filter((missionId) => getMissionById(missionId)?.departmentId === user.departmentId);
  }
  return missionIds;
}

function getCircularRecipientRows(circular, user = getSessionUser()) {
  return getCircularMissionIdsForUser(circular, user).map((missionId) => {
    const mission = getMissionById(missionId);
    const response = (circular.missionResponses || []).find((item) => item.missionId === missionId) || null;
    return {
      missionId,
      missionName: mission?.name || "-",
      departmentName: getDepartmentName(mission?.departmentId),
      status: getCircularMissionStatus(circular, missionId),
      response
    };
  });
}

function getCircularExecutiveMetrics(user = getSessionUser()) {
  const circulars = getVisibleCirculars(user);
  const activeCirculars = circulars.filter((circular) => circular.status === "نشط");
  return {
    total: circulars.length,
    active: activeCirculars.length,
    overdue: activeCirculars.filter((circular) => getCircularUrgency(circular).label === "متأخر").length,
    dueSoon: activeCirculars.filter((circular) => getCircularUrgency(circular).label === "قريب الاستحقاق").length,
    highPriority: activeCirculars.filter((circular) => circular.priority === "عالية").length
  };
}

function getSortedCircularsForDisplay(circulars) {
  const urgencyWeight = { "متأخر": 4, "قريب الاستحقاق": 3, "نشط": 2, "مكتمل التنفيذ": 1, "مغلق": 0 };
  const priorityWeight = { "عالية": 3, "متوسطة": 2, "عادية": 1 };
  return [...circulars].sort((a, b) => {
    const urgencyA = urgencyWeight[getCircularUrgency(a).label] ?? 1;
    const urgencyB = urgencyWeight[getCircularUrgency(b).label] ?? 1;
    if (urgencyB !== urgencyA) return urgencyB - urgencyA;
    const priorityA = priorityWeight[a.priority] ?? 2;
    const priorityB = priorityWeight[b.priority] ?? 2;
    if (priorityB !== priorityA) return priorityB - priorityA;
    return String(a.dueDate || "").localeCompare(String(b.dueDate || ""));
  });
}

function getCircularRegistryCirculars(user = getSessionUser()) {
  const search = String(state.circularSearch || "").trim().toLowerCase();
  let circulars = getVisibleCirculars(user);

  if (state.circularStatusFilter !== "all") {
    circulars = circulars.filter((circular) => {
      const urgency = getCircularUrgency(circular).label;
      if (state.circularStatusFilter === "active") return circular.status === "نشط";
      if (state.circularStatusFilter === "overdue") return urgency === "متأخر";
      if (state.circularStatusFilter === "due-soon") return urgency === "قريب الاستحقاق";
      if (state.circularStatusFilter === "completed") return urgency === "مكتمل التنفيذ";
      if (state.circularStatusFilter === "closed") return circular.status === "مغلق";
      return true;
    });
  }

  if (state.circularCategoryFilter !== "all") {
    circulars = circulars.filter((circular) => circular.category === state.circularCategoryFilter);
  }

  if (state.circularPriorityFilter !== "all") {
    circulars = circulars.filter((circular) => circular.priority === state.circularPriorityFilter);
  }

  if (search) {
    circulars = circulars.filter((circular) => {
      const haystack = [
        circular.title,
        circular.summary,
        circular.body,
        circular.actionRequired,
        circular.category,
        circular.priority,
        circular.issuedBy,
        circular.attachmentName,
        ...normalizeMissionIdList(circular.targetMissionIds).map((missionId) => getMissionName(missionId))
      ].join(" ").toLowerCase();
      return haystack.includes(search);
    });
  }

  return getSortedCircularsForDisplay(circulars);
}

function getCircularActions(circular, user = getSessionUser()) {
  if (!user) return [];
  const actions = [];
  const targetMissionIds = normalizeMissionIdList(circular.targetMissionIds);
  const readMissionIds = normalizeMissionIdList(circular.readMissionIds);
  const completedMissionIds = normalizeMissionIdList(circular.completedMissionIds);
  if (user.role === "mission" && circular.status === "نشط" && targetMissionIds.includes(user.missionId)) {
    if (!readMissionIds.includes(user.missionId)) {
      actions.push({ key: "mark-read", label: "تأكيد القراءة" });
    }
    if (!completedMissionIds.includes(user.missionId)) {
      actions.push({ key: "mark-complete", label: "تأكيد الإنجاز" });
    }
  }
  if (canSubmitCircular(user) && circular.status === "نشط") {
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

function hasMeaningfulValue(value) {
  return Boolean(String(value || "").trim());
}

function getPeriodicTypeGuidance(type) {
  return PERIODIC_TYPE_GUIDANCE[type] || {
    label: "تقرير زمني",
    description: "قالب زمني منظم يركز على العلاقات الثنائية، الإنجاز، والمتابعة المؤسسية.",
    emphasis: "استكمل جميع التبويبات ثم راجع الاتساق بين المؤشرات والأنشطة والتوصيات."
  };
}

function getCompletedIndicatorCount(indicators = {}) {
  const normalized = normalizeBilateralIndicators(indicators);
  return BILATERAL_INDICATOR_FIELDS.filter((field) => (
    hasMeaningfulValue(normalized[field.key].trend) && hasMeaningfulValue(normalized[field.key].note)
  )).length;
}

function getPeriodicSectionSummaries(report = {}) {
  const completedIndicators = getCompletedIndicatorCount(report.bilateralIndicators);
  return PERIODIC_REPORT_TABS.map((tab) => {
    let complete = false;
    let note = "";
    if (tab.key === "bilateral") {
      complete = hasMeaningfulValue(report.bilateralAssessment) && completedIndicators >= 5;
      note = complete ? `تم استكمال ${completedIndicators} مؤشرات ثنائية.` : "يتطلب تقييمًا تحليليًا واستكمال خمسة مؤشرات على الأقل.";
    } else if (tab.key === "cooperation") {
      complete = hasMeaningfulValue(report.supportCooperation);
      note = complete ? "تم توثيق أوجه الدعم والتعاون." : "أدخل أوجه الدعم والتعاون الثنائي المحقق.";
    } else if (tab.key === "agreements") {
      complete = hasMeaningfulValue(report.activeAgreements) && hasMeaningfulValue(report.agreementsNeedingActivation);
      note = complete ? "تم الفصل بين الاتفاقيات السارية وتلك التي تحتاج متابعة." : "يلزم استكمال الاتفاقيات السارية والاتفاقيات التي تحتاج متابعة.";
    } else if (tab.key === "achievements") {
      complete = hasMeaningfulValue(report.completedActivities);
      note = complete ? "تم توثيق الأنشطة والملفات المنجزة." : "أدخل أهم الموضوعات والأنشطة المنجزة خلال الفترة.";
    } else if (tab.key === "followup") {
      complete = hasMeaningfulValue(report.pendingActivities);
      note = complete ? "تم تحديد ملفات المتابعة غير المنجزة." : "أدخل الملفات التي تحتاج مواصلة المتابعة.";
    } else if (tab.key === "outlook") {
      complete = hasMeaningfulValue(report.relationshipOutlook);
      note = complete ? "تم إدخال التقييم والرؤية المستقبلية." : "أدخل تقييم البعثة للعلاقات الثنائية والرؤية المستقبلية والتوصيات.";
    } else if (tab.key === "visits") {
      complete = hasMeaningfulValue(report.visitsFromYemen) && hasMeaningfulValue(report.visitsFromHostCountry);
      note = complete ? "تم توثيق الزيارات من الجانبين." : "أدخل الزيارات من جانب بلادنا ومن جانب بلد الاعتماد.";
    } else if (tab.key === "community") {
      complete = hasMeaningfulValue(report.communityUpdate) && hasMeaningfulValue(report.communityStats);
      note = complete ? "تم تحديث وضع الجالية والإحصاءات العامة." : "أدخل وصفًا موجزًا للجالية مع الإحصاءات العامة.";
    }
    return { key: tab.key, label: tab.label, complete, note };
  });
}

function getPeriodicCompletion(report = {}) {
  const sections = getPeriodicSectionSummaries(report);
  const completed = sections.filter((section) => section.complete).length;
  return {
    sections,
    completed,
    total: sections.length,
    percent: sections.length ? Math.round((completed / sections.length) * 100) : 0,
    missing: sections.filter((section) => !section.complete)
  };
}

function getPeriodicCoverageLabel(report = {}) {
  if (hasMeaningfulValue(report.coverageFrom) && hasMeaningfulValue(report.coverageTo)) {
    return `${formatDate(report.coverageFrom)} - ${formatDate(report.coverageTo)}`;
  }
  if (hasMeaningfulValue(report.reportingYear)) {
    return `سنة التقرير ${report.reportingYear}`;
  }
  return "لم يحدد نطاق التغطية بعد";
}

function buildPeriodicDraft(form) {
  return {
    type: String(form.get("type") || ""),
    reportingYear: String(form.get("reportingYear") || ""),
    coverageFrom: String(form.get("coverageFrom") || ""),
    coverageTo: String(form.get("coverageTo") || ""),
    bilateralAssessment: String(form.get("bilateralAssessment") || ""),
    supportCooperation: String(form.get("supportCooperation") || ""),
    activeAgreements: String(form.get("activeAgreements") || ""),
    agreementsNeedingActivation: String(form.get("agreementsNeedingActivation") || ""),
    completedActivities: String(form.get("completedActivities") || ""),
    pendingActivities: String(form.get("pendingActivities") || ""),
    relationshipOutlook: String(form.get("relationshipOutlook") || ""),
    visitsFromYemen: String(form.get("visitsFromYemen") || ""),
    visitsFromHostCountry: String(form.get("visitsFromHostCountry") || ""),
    communityUpdate: String(form.get("communityUpdate") || ""),
    communityStats: String(form.get("communityStats") || ""),
    bilateralIndicators: BILATERAL_INDICATOR_FIELDS.reduce((acc, field) => {
      acc[field.key] = {
        trend: String(form.get(`indicator_trend_${field.key}`) || ""),
        note: String(form.get(`indicator_note_${field.key}`) || "")
      };
      return acc;
    }, {})
  };
}

function getThematicTrackConfig(track) {
  return THEMATIC_TRACK_CONFIG[track] || THEMATIC_TRACK_CONFIG["سياسي"];
}

function buildThematicDraft(form) {
  return {
    thematicTrack: String(form.get("thematicTrack") || "سياسي"),
    thematicSituation: String(form.get("thematicSituation") || ""),
    thematicDevelopments: String(form.get("thematicDevelopments") || ""),
    thematicStakeholders: String(form.get("thematicStakeholders") || ""),
    thematicImplications: String(form.get("thematicImplications") || ""),
    thematicRisks: String(form.get("thematicRisks") || ""),
    thematicMissionAction: String(form.get("thematicMissionAction") || ""),
    thematicRecommendations: String(form.get("thematicRecommendations") || "")
  };
}

function getThematicCompletion(report = {}) {
  const config = getThematicTrackConfig(report.thematicTrack || "سياسي");
  const sections = [
    { key: "situation", label: config.labels.situation, complete: hasMeaningfulValue(report.thematicSituation) },
    { key: "developments", label: config.labels.developments, complete: hasMeaningfulValue(report.thematicDevelopments) },
    { key: "stakeholders", label: config.labels.stakeholders, complete: hasMeaningfulValue(report.thematicStakeholders) },
    { key: "implications", label: config.labels.implications, complete: hasMeaningfulValue(report.thematicImplications) },
    { key: "risks", label: config.labels.risks, complete: hasMeaningfulValue(report.thematicRisks) },
    { key: "missionAction", label: config.labels.missionAction, complete: hasMeaningfulValue(report.thematicMissionAction) },
    { key: "recommendations", label: config.labels.recommendations, complete: hasMeaningfulValue(report.thematicRecommendations) }
  ];
  const completed = sections.filter((section) => section.complete).length;
  return {
    config,
    sections,
    completed,
    total: sections.length,
    percent: sections.length ? Math.round((completed / sections.length) * 100) : 0,
    missing: sections.filter((section) => !section.complete)
  };
}

function buildActivityDraft(form) {
  return {
    activityCategory: String(form.get("activityCategory") || ""),
    activityPartners: String(form.get("activityPartners") || ""),
    beforeGoals: String(form.get("beforeGoals") || ""),
    beforeExpected: String(form.get("beforeExpected") || ""),
    activityOutputs: String(form.get("activityOutputs") || ""),
    activityMediaEcho: String(form.get("activityMediaEcho") || ""),
    activityDiplomaticImpact: String(form.get("activityDiplomaticImpact") || ""),
    afterResults: String(form.get("afterResults") || ""),
    afterRecommendations: String(form.get("afterRecommendations") || ""),
    activityFollowupOwner: String(form.get("activityFollowupOwner") || "")
  };
}

function getActivityCompletion(report = {}) {
  const sections = [
    { key: "category", label: "نوع النشاط ومساره", complete: hasMeaningfulValue(report.activityCategory) },
    { key: "partners", label: "الجهات المشاركة والشركاء", complete: hasMeaningfulValue(report.activityPartners) },
    { key: "goals", label: "الأهداف قبل الفعالية", complete: hasMeaningfulValue(report.beforeGoals) },
    { key: "expected", label: "المتوقع قبل الفعالية", complete: hasMeaningfulValue(report.beforeExpected) },
    { key: "outputs", label: "المخرجات والصدى الإعلامي", complete: hasMeaningfulValue(report.activityOutputs) && hasMeaningfulValue(report.activityMediaEcho) },
    { key: "impact", label: "الأثر الدبلوماسي أو المؤسسي", complete: hasMeaningfulValue(report.activityDiplomaticImpact) },
    { key: "results", label: "النتائج بعد الفعالية", complete: hasMeaningfulValue(report.afterResults) },
    { key: "followup", label: "التوصيات والمتابعة", complete: hasMeaningfulValue(report.afterRecommendations) && hasMeaningfulValue(report.activityFollowupOwner) }
  ];
  const completed = sections.filter((section) => section.complete).length;
  return {
    sections,
    completed,
    total: sections.length,
    percent: sections.length ? Math.round((completed / sections.length) * 100) : 0,
    missing: sections.filter((section) => !section.complete)
  };
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

function getRequestMissionIdsForUser(request, user = getSessionUser()) {
  if (!user) return [];
  if (user.role === "mission") return request.targetMissionIds.filter((missionId) => missionId === user.missionId);
  if (user.role === "department") {
    return request.targetMissionIds.filter((missionId) => getMissionById(missionId)?.departmentId === user.departmentId);
  }
  return request.targetMissionIds;
}

function getMissionRequestStatus(requestId, missionId) {
  const request = state.reportRequests.find((item) => item.id === requestId);
  const today = new Date().toISOString().slice(0, 10);
  const approved = state.reports.some((report) => (
    report.requestId === requestId &&
    report.missionId === missionId &&
    (report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف")
  ));
  const submitted = state.reports.some((report) => (
    report.requestId === requestId &&
    report.missionId === missionId &&
    report.workflowStage !== "أعيد للبعثة للاستكمال"
  ));
  const overdue = !approved && !submitted && request?.dueDate && request.dueDate < today;
  return {
    label: approved ? "معتمد" : submitted ? "مرفوع" : overdue ? "متأخر" : "لم يرفع",
    tone: approved ? "success" : submitted ? "info" : overdue ? "danger" : "warning"
  };
}

function getRequestUrgency(request) {
  if (request.status === "مغلق") return { label: "مغلق", tone: "success" };
  const today = new Date().toISOString().slice(0, 10);
  const due = request.dueDate || "";
  if (!due) return { label: "بدون موعد", tone: "info" };
  const diffDays = Math.ceil((new Date(due) - new Date(today)) / 86400000);
  if (diffDays < 0) return { label: "متجاوز الموعد", tone: "danger" };
  if (diffDays <= 7) return { label: "قريب الاستحقاق", tone: "warning" };
  if (diffDays <= 21) return { label: "ضمن المتابعة", tone: "info" };
  return { label: "ضمن الإطار الزمني", tone: "success" };
}

function getRequestPriorityTone(priority) {
  if (priority === "عالية") return "danger";
  if (priority === "متوسطة") return "warning";
  return "info";
}

function getRequestExecutiveMetrics(user = getSessionUser()) {
  const requests = getVisibleRequests(user);
  const activeRequests = requests.filter((request) => request.status === "نشط");
  return {
    total: requests.length,
    overdue: activeRequests.filter((request) => getRequestLifecycle(request).label === "متأخر").length,
    dueSoon: activeRequests.filter((request) => getRequestUrgency(request).label === "قريب الاستحقاق").length,
    highPriority: activeRequests.filter((request) => request.priority === "عالية").length
  };
}

function getSortedRequestsForDisplay(requests) {
  const priorityWeight = { "عالية": 3, "متوسطة": 2, "عادية": 1 };
  const lifecycleWeight = { "متأخر": 3, "نشط": 2, "مكتمل": 1, "مغلق": 0 };
  return [...requests].sort((a, b) => {
    const lifeA = lifecycleWeight[getRequestLifecycle(a).label] || 0;
    const lifeB = lifecycleWeight[getRequestLifecycle(b).label] || 0;
    if (lifeB !== lifeA) return lifeB - lifeA;
    const prA = priorityWeight[a.priority] || 2;
    const prB = priorityWeight[b.priority] || 2;
    if (prB !== prA) return prB - prA;
    return String(a.dueDate || "").localeCompare(String(b.dueDate || ""));
  });
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

function getReportsByFamily(reports, familyTab) {
  if (!familyTab || familyTab === "all") return reports;
  return reports.filter((report) => inferReportFamily(report) === familyTab);
}

function getRegistryReports(user = getSessionUser()) {
  const reports = getReportsByFamily(getVisibleReports(user), state.reportRegistryTab);
  const search = (state.reportSearch || "").trim().toLowerCase();
  let filtered = reports.filter((report) => {
    if (state.reportStageFilter !== "all" && report.workflowStage !== state.reportStageFilter) return false;
    if (state.reportMissionFilter !== "all" && report.missionId !== state.reportMissionFilter) return false;
    if (!search) return true;
    const haystack = [
      report.title,
      report.summary,
      report.type,
      report.thematicTrack,
      getMissionName(report.missionId),
      getDepartmentName(report.departmentId)
    ].join(" ").toLowerCase();
    return haystack.includes(search);
  });
  const byQuality = (report) => getReportQualitySummary(report).average || 0;
  filtered = filtered.sort((a, b) => {
    if (state.reportSort === "quality") return byQuality(b) - byQuality(a);
    if (state.reportSort === "mission") return getMissionName(a.missionId).localeCompare(getMissionName(b.missionId), "ar");
    if (state.reportSort === "oldest") return String(a.submittedOn || a.activityDate || "").localeCompare(String(b.submittedOn || b.activityDate || ""));
    return String(b.submittedOn || b.activityDate || "").localeCompare(String(a.submittedOn || a.activityDate || ""));
  });
  return filtered;
}

function getReportRegistryBucket(report) {
  if (report.workflowStage === "أعيد للبعثة للاستكمال") return "attention";
  if (report.workflowStage === "مرفوع من البعثة" || report.workflowStage === "قيد مراجعة الدائرة") return "attention";
  if (report.workflowStage === "معتمد من التخطيط") return "approved";
  if (report.workflowStage === "مغلق ومؤرشف") return "archived";
  return "other";
}

function getReportRegistryGroups(reports) {
  const groups = [
    {
      key: "attention",
      label: "تقارير قيد المتابعة",
      description: "تشمل التقارير المرفوعة حديثًا أو قيد مراجعة الدائرة أو المعادة للاستكمال.",
      tone: "warning",
      items: reports.filter((report) => getReportRegistryBucket(report) === "attention")
    },
    {
      key: "approved",
      label: "تقارير معتمدة",
      description: "تقارير اعتمدتها إدارة التخطيط وهي جاهزة للرجوع إليها مؤسسيًا.",
      tone: "success",
      items: reports.filter((report) => getReportRegistryBucket(report) === "approved")
    },
    {
      key: "archived",
      label: "تقارير مؤرشفة",
      description: "تقارير أغلقت وأرشفت نهائيًا وتبقى للرجوع المرجعي.",
      tone: "info",
      items: reports.filter((report) => getReportRegistryBucket(report) === "archived")
    }
  ];
  const other = reports.filter((report) => getReportRegistryBucket(report) === "other");
  if (other.length) {
    groups.push({
      key: "other",
      label: "تقارير أخرى",
      description: "عناصر لا تندرج ضمن المجموعات الرئيسية الحالية.",
      tone: "info",
      items: other
    });
  }
  return groups;
}

function getReportReadinessSummary(report) {
  const family = inferReportFamily(report);
  if (family === "periodic") {
    const completion = getPeriodicCompletion(report);
    return {
      label: "جاهزية التقرير الزمني",
      percent: completion.percent,
      detail: `${completion.completed}/${completion.total} تبويبات مكتملة`
    };
  }
  if (family === "thematic") {
    const completion = getThematicCompletion(report);
    return {
      label: "جاهزية التقرير الموضوعي",
      percent: completion.percent,
      detail: `${completion.completed}/${completion.total} محاور مكتملة`
    };
  }
  const completion = getActivityCompletion(report);
  return {
    label: "جاهزية تقرير النشاط",
    percent: completion.percent,
    detail: `${completion.completed}/${completion.total} محاور مكتملة`
  };
}

function getMissionReportProfile(missionId) {
  const reports = state.reports.filter((report) => report.missionId === missionId);
  const approved = reports.filter((report) => report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف");
  const returned = reports.filter((report) => report.workflowStage === "أعيد للبعثة للاستكمال");
  const pendingDepartment = reports.filter((report) => report.workflowStage === "قيد مراجعة الدائرة");
  const draftLike = reports.filter((report) => report.workflowStage === "مرفوع من البعثة");
  const qualityValues = approved.map((report) => getReportQualitySummary(report).average).filter(Boolean);
  const averageQuality = qualityValues.length ? (qualityValues.reduce((sum, value) => sum + value, 0) / qualityValues.length).toFixed(1) : "0.0";
  const latestReport = [...reports].sort((a, b) => String(b.submittedOn || b.activityDate || "").localeCompare(String(a.submittedOn || a.activityDate || "")))[0] || null;
  const requests = state.reportRequests.filter((request) => request.targetMissionIds.includes(missionId));
  const overdueRequests = requests.filter((request) => getMissionRequestStatus(request.id, missionId).label === "متأخر");
  const pendingRequests = requests.filter((request) => {
    const status = getMissionRequestStatus(request.id, missionId).label;
    return status === "لم يرفع" || status === "مرفوع";
  });
  const approvedSorted = [...approved].sort((a, b) => String(b.submittedOn || b.activityDate || "").localeCompare(String(a.submittedOn || a.activityDate || "")));
  const recentQuality = approvedSorted.slice(0, 2).map((report) => getReportQualitySummary(report).average || 0);
  let qualityTrend = "مستقر";
  if (recentQuality.length >= 2) {
    if (recentQuality[0] > recentQuality[1]) qualityTrend = "تحسن";
    if (recentQuality[0] < recentQuality[1]) qualityTrend = "تراجع";
  }
  return {
    reports,
    approvedCount: approved.length,
    returnedCount: returned.length,
    pendingDepartmentCount: pendingDepartment.length,
    draftCount: draftLike.length,
    averageQuality,
    latestReport,
    overdueRequests,
    pendingRequests,
    qualityTrend
  };
}

function getDepartmentReportProfile(departmentId) {
  const missions = state.missions.filter((mission) => mission.departmentId === departmentId);
  const missionProfiles = missions.map((mission) => ({
    mission,
    profile: getMissionReportProfile(mission.id)
  }));
  const approvedCount = missionProfiles.reduce((sum, item) => sum + item.profile.approvedCount, 0);
  const pendingDepartmentCount = missionProfiles.reduce((sum, item) => sum + item.profile.pendingDepartmentCount, 0);
  const returnedCount = missionProfiles.reduce((sum, item) => sum + item.profile.returnedCount, 0);
  const overdueCount = missionProfiles.reduce((sum, item) => sum + item.profile.overdueRequests.length, 0);
  const qualityValues = missionProfiles.map((item) => Number(item.profile.averageQuality)).filter((value) => value > 0);
  const averageQuality = qualityValues.length ? (qualityValues.reduce((sum, value) => sum + value, 0) / qualityValues.length).toFixed(1) : "0.0";
  const weakestMission = [...missionProfiles]
    .filter((item) => item.profile.reports.length)
    .sort((a, b) => Number(a.profile.averageQuality) - Number(b.profile.averageQuality))[0] || null;
  const mostDelayedMission = [...missionProfiles]
    .sort((a, b) => b.profile.overdueRequests.length - a.profile.overdueRequests.length)[0] || null;
  const trendValues = missionProfiles
    .map((item) => item.profile.qualityTrend)
    .filter(Boolean);
  const improvingCount = trendValues.filter((item) => item === "تحسن").length;
  const decliningCount = trendValues.filter((item) => item === "تراجع").length;
  let qualityTrend = "مستقر";
  if (improvingCount > decliningCount) qualityTrend = "تحسن";
  if (decliningCount > improvingCount) qualityTrend = "تراجع";
  return {
    missions: missionProfiles,
    approvedCount,
    pendingDepartmentCount,
    returnedCount,
    overdueCount,
    averageQuality,
    weakestMission,
    mostDelayedMission,
    qualityTrend
  };
}

function getReportsExecutiveMetrics(user = getSessionUser()) {
  const reports = getVisibleReports(user);
  const missionProfiles = [...new Map(reports.map((report) => [report.missionId, getMissionReportProfile(report.missionId)])).entries()]
    .map(([missionId, profile]) => ({ missionId, profile }))
    .filter((item) => item.missionId);
  const departmentProfiles = [...new Map(reports.map((report) => [report.departmentId, getDepartmentReportProfile(report.departmentId)])).entries()]
    .map(([departmentId, profile]) => ({ departmentId, profile }))
    .filter((item) => item.departmentId);
  const topMission = [...missionProfiles].sort((a, b) => Number(b.profile.averageQuality) - Number(a.profile.averageQuality))[0] || null;
  const delayedMission = [...missionProfiles].sort((a, b) => b.profile.overdueRequests.length - a.profile.overdueRequests.length)[0] || null;
  const topDepartment = [...departmentProfiles].sort((a, b) => Number(b.profile.averageQuality) - Number(a.profile.averageQuality))[0] || null;
  const stageDistribution = [
    { label: "مرفوع من البعثة", count: reports.filter((report) => report.workflowStage === "مرفوع من البعثة").length },
    { label: "قيد مراجعة الدائرة", count: reports.filter((report) => report.workflowStage === "قيد مراجعة الدائرة").length },
    { label: "معتمد من التخطيط", count: reports.filter((report) => report.workflowStage === "معتمد من التخطيط").length },
    { label: "مغلق ومؤرشف", count: reports.filter((report) => report.workflowStage === "مغلق ومؤرشف").length }
  ];
  const familyDistribution = [
    { label: "زمني", count: reports.filter((report) => inferReportFamily(report) === "periodic").length },
    { label: "موضوعي", count: reports.filter((report) => inferReportFamily(report) === "thematic").length },
    { label: "نشاط", count: reports.filter((report) => inferReportFamily(report) === "activity").length }
  ];
  const lowQualityMissions = [...missionProfiles]
    .filter((item) => item.profile.reports.length && Number(item.profile.averageQuality) > 0 && Number(item.profile.averageQuality) < 3.5)
    .sort((a, b) => Number(a.profile.averageQuality) - Number(b.profile.averageQuality))
    .slice(0, 3);
  const returnedHeavyMissions = [...missionProfiles]
    .filter((item) => item.profile.returnedCount > 0)
    .sort((a, b) => b.profile.returnedCount - a.profile.returnedCount)
    .slice(0, 3);
  const backlogDepartments = [...departmentProfiles]
    .filter((item) => item.profile.pendingDepartmentCount > 0)
    .sort((a, b) => b.profile.pendingDepartmentCount - a.profile.pendingDepartmentCount)
    .slice(0, 3);
  const improvingMissions = missionProfiles.filter((item) => item.profile.qualityTrend === "تحسن").length;
  const decliningMissions = missionProfiles.filter((item) => item.profile.qualityTrend === "تراجع").length;
  const improvingDepartments = departmentProfiles.filter((item) => item.profile.qualityTrend === "تحسن").length;
  const decliningDepartments = departmentProfiles.filter((item) => item.profile.qualityTrend === "تراجع").length;
  return {
    topMission,
    delayedMission,
    topDepartment,
    stageDistribution,
    familyDistribution,
    lowQualityMissions,
    returnedHeavyMissions,
    backlogDepartments,
    improvingMissions,
    decliningMissions,
    improvingDepartments,
    decliningDepartments
  };
}

function getReportFamilyLabel(report) {
  const family = inferReportFamily(report);
  if (family === "periodic") return "زمني";
  if (family === "thematic") return "موضوعي";
  return "نشاط";
}

function getReportStageCount(reports, stage) {
  return reports.filter((report) => report.workflowStage === stage).length;
}

function renderReportsHero(reports, filteredReports, user) {
  const periodicReports = reports.filter((report) => inferReportFamily(report) === "periodic");
  const approvedReports = reports.filter((report) => report.workflowStage === "معتمد من التخطيط" || report.workflowStage === "مغلق ومؤرشف");
  const pendingReview = reports.filter((report) => report.workflowStage === "مرفوع من البعثة" || report.workflowStage === "قيد مراجعة الدائرة");
  const executive = getReportsExecutiveMetrics(user);
  return `
    <section class="reports-hero">
      <article class="reports-hero-main">
        <span class="tag info">منصة التقارير</span>
        <h1 class="page-title">وحدة التقارير الدبلوماسية</h1>
        <p class="muted">${user.role === "mission" ? "ارفع تقارير الأنشطة والتقارير الموضوعية مباشرة من البعثة، وارفع التقارير الزمنية استجابة للطلبات الرسمية الواردة فقط." : "تابع دورة حياة التقارير من الرفع حتى المراجعة والاعتماد والأرشفة، مع فصل واضح بين التقارير الزمنية والموضوعية وتقارير الأنشطة."}</p>
        <div class="reports-stat-strip">
          <div class="reports-stat-card">
            <span>إجمالي التقارير</span>
            <strong>${reports.length}</strong>
          </div>
          <div class="reports-stat-card">
            <span>ضمن التبويب الحالي</span>
            <strong>${filteredReports.length}</strong>
          </div>
          <div class="reports-stat-card">
            <span>التقارير الزمنية</span>
            <strong>${periodicReports.length}</strong>
          </div>
          <div class="reports-stat-card">
            <span>بانتظار المراجعة</span>
            <strong>${pendingReview.length}</strong>
          </div>
          <div class="reports-stat-card">
            <span>معتمدة أو مؤرشفة</span>
            <strong>${approvedReports.length}</strong>
          </div>
        </div>
        ${user.role !== "mission" ? `
          <div class="reports-executive-grid">
            <div class="detail-card">
              <div class="section-title">أفضل بعثة</div>
              <p class="detail-note">${executive.topMission ? `${getMissionName(executive.topMission.missionId)} بجودة ${executive.topMission.profile.averageQuality}/5` : "لا توجد بيانات كافية بعد."}</p>
            </div>
            <div class="detail-card">
              <div class="section-title">البعثة الأكثر تأخرًا</div>
              <p class="detail-note">${executive.delayedMission && executive.delayedMission.profile.overdueRequests.length ? `${getMissionName(executive.delayedMission.missionId)} بعدد ${executive.delayedMission.profile.overdueRequests.length} طلبات متأخرة` : "لا توجد حالات تأخر مسجلة."}</p>
            </div>
            <div class="detail-card">
              <div class="section-title">أفضل دائرة</div>
              <p class="detail-note">${executive.topDepartment ? `${getDepartmentName(executive.topDepartment.departmentId)} بمتوسط جودة ${executive.topDepartment.profile.averageQuality}/5` : "لا توجد بيانات كافية بعد."}</p>
            </div>
          </div>
          <div class="reports-executive-grid">
            <div class="detail-card">
              <div class="section-title">التوزيع حسب المرحلة</div>
              <div class="detail-list">
                ${executive.stageDistribution.map((item) => `<div class="detail-row"><span>${item.label}</span><span>${item.count}</span></div>`).join("")}
              </div>
            </div>
            <div class="detail-card">
              <div class="section-title">التوزيع حسب النوع</div>
              <div class="detail-list">
                ${executive.familyDistribution.map((item) => `<div class="detail-row"><span>${item.label}</span><span>${item.count}</span></div>`).join("")}
              </div>
            </div>
          </div>
          <div class="reports-executive-grid">
            <div class="detail-card">
              <div class="section-title">بعثات بحاجة لتحسين الجودة</div>
              <div class="detail-list">
                ${executive.lowQualityMissions.length ? executive.lowQualityMissions.map((item) => `
                  <div class="detail-row">
                    <span>${getMissionName(item.missionId)}</span>
                    <span>${item.profile.averageQuality}/5</span>
                  </div>
                `).join("") : `<div class="empty">لا توجد بعثات منخفضة الجودة ضمن النطاق الحالي.</div>`}
              </div>
            </div>
            <div class="detail-card">
              <div class="section-title">بعثات تكرر إرجاع تقاريرها</div>
              <div class="detail-list">
                ${executive.returnedHeavyMissions.length ? executive.returnedHeavyMissions.map((item) => `
                  <div class="detail-row">
                    <span>${getMissionName(item.missionId)}</span>
                    <span>${item.profile.returnedCount} مرات</span>
                  </div>
                `).join("") : `<div class="empty">لا توجد حالات إرجاع متكررة ضمن النطاق الحالي.</div>`}
              </div>
            </div>
            <div class="detail-card">
              <div class="section-title">دوائر لديها تراكم مراجعات</div>
              <div class="detail-list">
                ${executive.backlogDepartments.length ? executive.backlogDepartments.map((item) => `
                  <div class="detail-row">
                    <span>${getDepartmentName(item.departmentId)}</span>
                    <span>${item.profile.pendingDepartmentCount} تقارير</span>
                  </div>
                `).join("") : `<div class="empty">لا توجد تراكمات مراجعة ضمن النطاق الحالي.</div>`}
              </div>
            </div>
          </div>
          <div class="reports-executive-grid">
            <div class="detail-card">
              <div class="section-title">اتجاه جودة البعثات</div>
              <div class="detail-list">
                <div class="detail-row"><span>بعثات تتحسن</span><span>${executive.improvingMissions}</span></div>
                <div class="detail-row"><span>بعثات تتراجع</span><span>${executive.decliningMissions}</span></div>
              </div>
            </div>
            <div class="detail-card">
              <div class="section-title">اتجاه جودة الدوائر</div>
              <div class="detail-list">
                <div class="detail-row"><span>دوائر تتحسن</span><span>${executive.improvingDepartments}</span></div>
                <div class="detail-row"><span>دوائر تتراجع</span><span>${executive.decliningDepartments}</span></div>
              </div>
            </div>
            <div class="detail-card">
              <div class="section-title">قراءة الاتجاه العام</div>
              <p class="detail-note">${executive.improvingMissions > executive.decliningMissions ? "اتجاه الجودة العام للبعثات يميل إلى التحسن." : executive.decliningMissions > executive.improvingMissions ? "هناك تراجع نسبي في جودة مخرجات بعض البعثات ويحتاج متابعة." : "الاتجاه العام متوازن ويحتاج استمرار المراقبة."}</p>
            </div>
          </div>
        ` : ""}
      </article>
      <article class="reports-hero-side">
        <div class="section-title">تسلسل العمل</div>
        <div class="workflow-rail">
          <div class="workflow-step active">
            <strong>1. الإنشاء</strong>
            <span>البعثة تنشئ التقرير</span>
          </div>
          <div class="workflow-step active">
            <strong>2. مراجعة الدائرة</strong>
            <span>فحص أولي وملاحظات</span>
          </div>
          <div class="workflow-step active">
            <strong>3. اعتماد التخطيط</strong>
            <span>تقييم الجودة والاعتماد</span>
          </div>
          <div class="workflow-step active">
            <strong>4. السجل المؤسسي</strong>
            <span>أرشفة التقرير ضمن ملف البعثة</span>
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderReportRecordCard(report, selected) {
  const quality = getReportQualitySummary(report);
  const readiness = getReportReadinessSummary(report);
  const accent = inferReportFamily(report) === "periodic"
    ? getPeriodicCoverageLabel(report)
    : inferReportFamily(report) === "thematic"
        ? (report.thematicTrack || "مسار موضوعي")
        : (report.activityCategory || "نشاط عام");
  return `
    <article class="report-record-card ${selected && selected.id === report.id ? "selected" : ""}" data-report-id="${report.id}">
      <div class="record-top">
        <div>
          <strong class="record-title">${report.title}</strong>
          <div class="record-meta">${getMissionName(report.missionId)} | ${report.type} | ${getReportFamilyLabel(report)}</div>
        </div>
        <span class="tag ${stageTone(report.workflowStage)}">${report.workflowStage}</span>
      </div>
        <p class="record-desc">${report.summary}</p>
        <div class="record-meta">${accent}</div>
        <div class="request-chip-row">
          <span class="tag info">${getReportOriginLabel(report)}</span>
          <span class="tag ${readiness.percent === 100 ? "success" : "warning"}">${readiness.percent}%</span>
        </div>
        <div class="report-record-footer">
          <span class="mini">${report.submittedOn ? `رفع في ${formatDate(report.submittedOn)}` : "لم يسجل تاريخ رفع"}</span>
          <span class="mini">${quality.average ? `جودة ${quality.average}/5` : "بانتظار التقييم"}</span>
          <span class="mini">${readiness.detail}</span>
        </div>
      </article>
    `;
}

function renderPeriodicDetailContent(report, tabKey) {
  if (tabKey === "bilateral") {
    const completedIndicators = getCompletedIndicatorCount(report.bilateralIndicators);
    return `
      <div class="detail-card">
        <div class="section-title">أولًا: العلاقات الثنائية</div>
        <div class="report-periodic-kpis">
          <span class="tag info">${getPeriodicTypeGuidance(report.type).label}</span>
          <span class="tag warning">نطاق التغطية: ${getPeriodicCoverageLabel(report)}</span>
          <span class="tag ${completedIndicators >= 5 ? "success" : "warning"}">المؤشرات المكتملة ${completedIndicators}/${BILATERAL_INDICATOR_FIELDS.length}</span>
        </div>
        <p class="detail-note"><strong>أ. مؤشر العلاقات الثنائية بين بلادنا وبلد الاعتماد في المجالات المختلفة</strong></p>
        <div class="detail-list">
          ${BILATERAL_INDICATOR_FIELDS.map((field) => `
            <div class="detail-row triple">
              <span>${field.label}</span>
              <span class="tag ${report.bilateralIndicators?.[field.key]?.trend === "تنامي" ? "success" : report.bilateralIndicators?.[field.key]?.trend === "تراجع" ? "danger" : "warning"}">${report.bilateralIndicators?.[field.key]?.trend || "غير محدد"}</span>
              <span>${report.bilateralIndicators?.[field.key]?.note || "لا توجد ملاحظات"}</span>
            </div>
          `).join("")}
        </div>
        <p class="detail-note"><strong>ب.</strong> ${report.bilateralAssessment || "لا توجد قراءة تحليلية مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  if (tabKey === "cooperation") {
    return `
      <div class="detail-card">
        <div class="section-title">أوجه الدعم والتعاون الثنائي</div>
        <p class="detail-note">${report.supportCooperation || "لا توجد بيانات مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  if (tabKey === "agreements") {
    return `
      <div class="detail-card">
        <div class="section-title">الاتفاقيات والبروتكولات ومذكرات التفاهم</div>
        <p class="detail-note"><strong>السارية المفعول:</strong> ${report.activeAgreements || "لا توجد بيانات مدخلة حتى الآن."}</p>
        <p class="detail-note"><strong>التي تحتاج إلى تفعيل ومتابعة:</strong> ${report.agreementsNeedingActivation || "لا توجد بيانات مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  if (tabKey === "achievements") {
    return `
      <div class="detail-card">
        <div class="section-title">أهم المواضيع والأنشطة التي أنجزتها البعثة</div>
        <p class="detail-note">${report.completedActivities || "لا توجد بيانات مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  if (tabKey === "followup") {
    return `
      <div class="detail-card">
        <div class="section-title">المواضيع والأنشطة التي لم تُنجز وتحتاج إلى متابعة</div>
        <p class="detail-note">${report.pendingActivities || "لا توجد بيانات مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  if (tabKey === "outlook") {
    return `
      <div class="detail-card">
        <div class="section-title">تقييم البعثة للعلاقات الثنائية ورؤيتها المستقبلية</div>
        <p class="detail-note">${report.relationshipOutlook || "لا توجد بيانات مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  if (tabKey === "visits") {
    return `
      <div class="detail-card">
        <div class="section-title">أهم الزيارات المتبادلة بين البلدين</div>
        <p class="detail-note"><strong>أولًا: جانب بلادنا</strong></p>
        <p class="detail-note">${report.visitsFromYemen || "لا توجد بيانات مدخلة حتى الآن."}</p>
        <p class="detail-note"><strong>ثانيًا: جانب بلد الاعتماد</strong></p>
        <p class="detail-note">${report.visitsFromHostCountry || "لا توجد بيانات مدخلة حتى الآن."}</p>
      </div>
    `;
  }
  return `
      <div class="detail-card">
        <div class="section-title">الجالية اليمنية في بلد الاعتماد</div>
        <p class="detail-note"><strong>ملاحظات عامة:</strong> ${report.communityUpdate || "لا توجد بيانات مدخلة حتى الآن."}</p>
        <p class="detail-note"><strong>إحصاءات عامة:</strong> ${report.communityStats || "لا توجد بيانات إحصائية مدخلة حتى الآن."}</p>
      </div>
    `;
}

function renderReportFamilyWorkspace(report) {
  const family = inferReportFamily(report);
  if (family === "periodic") {
    const periodicTab = state.periodicReportTab || "bilateral";
    const completion = getPeriodicCompletion(report);
    return `
      <details class="compact-disclosure report-detail-section" open>
        <summary>
          <div>
            <strong>ملف التقرير الزمني</strong>
            <div class="entity-summary-meta">
              <span>${getPeriodicTypeGuidance(report.type).label}</span>
              <span>${getPeriodicCoverageLabel(report)}</span>
            </div>
          </div>
          <div class="entity-tag-stack">
            <span class="tag ${completion.percent === 100 ? "success" : "warning"}">${completion.percent}%</span>
          </div>
        </summary>
        <div class="report-detail-body">
          <div class="reports-executive-grid report-detail-summary-grid">
            <div class="detail-card">
              <div class="section-title">نطاق التغطية</div>
              <p class="detail-note">${getPeriodicCoverageLabel(report)}</p>
            </div>
            <div class="detail-card">
              <div class="section-title">جاهزية الملف الزمني</div>
              <p class="detail-note">${completion.completed}/${completion.total} تبويبات مكتملة</p>
            </div>
            <div class="detail-card">
              <div class="section-title">المؤشرات الثنائية</div>
              <p class="detail-note">${getCompletedIndicatorCount(report.bilateralIndicators)}/${BILATERAL_INDICATOR_FIELDS.length} مؤشرات مكتملة</p>
            </div>
          </div>
          <div class="tab-strip">
            ${PERIODIC_REPORT_TABS.map((tab) => `<button class="tab-chip ${periodicTab === tab.key ? "active" : ""}" type="button" data-periodic-tab="${tab.key}">${tab.label}</button>`).join("")}
          </div>
          ${renderPeriodicDetailContent(report, periodicTab)}
        </div>
      </details>
    `;
  }
  if (family === "thematic") {
    const completion = getThematicCompletion(report);
    return `
      <details class="compact-disclosure report-detail-section" open>
        <summary>
          <div>
            <strong>محاور التقرير الموضوعي</strong>
            <div class="entity-summary-meta">
              <span>${completion.config.title}</span>
              <span>${report.thematicTrack || "مسار موضوعي"}</span>
            </div>
          </div>
          <div class="entity-tag-stack">
            <span class="tag ${completion.percent === 100 ? "success" : "warning"}">${completion.percent}%</span>
          </div>
        </summary>
        <div class="report-detail-body detail-list">
          <div class="reports-executive-grid report-detail-summary-grid">
            <div class="detail-card">
              <div class="section-title">${completion.config.labels.situation}</div>
              <p class="detail-note">${report.thematicSituation || "لا توجد بيانات مدخلة حتى الآن."}</p>
            </div>
            <div class="detail-card">
              <div class="section-title">${completion.config.labels.implications}</div>
              <p class="detail-note">${report.thematicImplications || "لا توجد بيانات مدخلة حتى الآن."}</p>
            </div>
            <div class="detail-card">
              <div class="section-title">${completion.config.labels.recommendations}</div>
              <p class="detail-note">${report.thematicRecommendations || "لا توجد بيانات مدخلة حتى الآن."}</p>
            </div>
          </div>
          <div class="detail-card">
            <div class="section-title">تفاصيل التحليل الموضوعي</div>
            <div class="detail-list">
              <div class="detail-row"><span>${completion.config.labels.developments}</span><span>${report.thematicDevelopments || "لا يوجد"}</span></div>
              <div class="detail-row"><span>${completion.config.labels.stakeholders}</span><span>${report.thematicStakeholders || "لا يوجد"}</span></div>
              <div class="detail-row"><span>${completion.config.labels.risks}</span><span>${report.thematicRisks || "لا يوجد"}</span></div>
              <div class="detail-row"><span>${completion.config.labels.missionAction}</span><span>${report.thematicMissionAction || "لا يوجد"}</span></div>
            </div>
          </div>
        </div>
      </details>
    `;
  }
  const completion = getActivityCompletion(report);
  return `
    <details class="compact-disclosure report-detail-section" open>
      <summary>
        <div>
          <strong>ملف تقرير النشاط</strong>
          <div class="entity-summary-meta">
            <span>${report.activityCategory || "نشاط عام"}</span>
            <span>${report.activityFollowupOwner || "لم يحدد مسؤول متابعة"}</span>
          </div>
        </div>
        <div class="entity-tag-stack">
          <span class="tag ${completion.percent === 100 ? "success" : "warning"}">${completion.percent}%</span>
        </div>
      </summary>
      <div class="report-detail-body">
        <div class="report-story-grid">
          <div class="detail-card">
            <div class="section-title">قبل الفعالية</div>
            <p class="detail-note"><strong>مسار النشاط:</strong> ${report.activityCategory || "لا يوجد"}</p>
            <p class="detail-note"><strong>الجهات المشاركة:</strong> ${report.activityPartners || "لا يوجد"}</p>
            <p class="detail-note"><strong>الأهداف:</strong> ${report.beforeGoals || "لا توجد بيانات مدخلة حتى الآن."}</p>
            <p class="detail-note"><strong>المتوقع:</strong> ${report.beforeExpected || "لا توجد بيانات مدخلة حتى الآن."}</p>
          </div>
          <div class="detail-card">
            <div class="section-title">بعد الفعالية</div>
            <p class="detail-note"><strong>المخرجات:</strong> ${report.activityOutputs || "لا يوجد"}</p>
            <p class="detail-note"><strong>الصدى الإعلامي:</strong> ${report.activityMediaEcho || "لا يوجد"}</p>
            <p class="detail-note"><strong>الأثر:</strong> ${report.activityDiplomaticImpact || "لا يوجد"}</p>
            <p class="detail-note"><strong>النتائج:</strong> ${report.afterResults || "لا توجد بيانات مدخلة حتى الآن."}</p>
            <p class="detail-note"><strong>التوصيات:</strong> ${report.afterRecommendations || "لا توجد بيانات مدخلة حتى الآن."}</p>
            <p class="detail-note"><strong>مسؤول المتابعة:</strong> ${report.activityFollowupOwner || "لا يوجد"}</p>
          </div>
        </div>
      </div>
    </details>
  `;
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
  if (user.role === "department" && user.departmentId === report.departmentId && report.workflowStage === "قيد مراجعة الدائرة") {
    actions.push({ key: "return", label: "إعادة للبعثة", nextStage: "أعيد للبعثة للاستكمال" });
  }
  if ((user.role === "planning" || user.role === "admin") && report.workflowStage === "قيد مراجعة الدائرة") {
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
  return user.role === "mission"
    && user.missionId === report.missionId
    && (report.workflowStage === "مرفوع من البعثة" || report.workflowStage === "أعيد للبعثة للاستكمال");
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

function getRuntimeModeLabel() {
  return runtimeDataMode === "shared-api" ? "وضع تشغيلي مشترك" : "وضع تجريبي محلي";
}

function getRuntimeModeTone() {
  return runtimeDataMode === "shared-api" ? "success" : "warning";
}

function canManageEntities(user = getSessionUser()) {
  return Boolean(user && user.role === "admin");
}

function canSubmitCircular(user = getSessionUser()) {
  return Boolean(user && (user.role === "planning" || user.role === "admin"));
}

function canManageMeetingRecord(user = getSessionUser(), meeting = null, departmentId = "") {
  if (!user) return false;
  if (user.role === "planning" || user.role === "admin") return true;
  if (user.role !== "department") return false;
  if (meeting) return meeting.departmentId === user.departmentId;
  return !departmentId || departmentId === user.departmentId;
}

function canUpdateMeetingTask(meeting, task, user = getSessionUser()) {
  if (!meeting || !task || !user) return false;
  const missionName = user.role === "mission" ? getMissionName(user.missionId) : "";
  const departmentName = user.role === "department" ? getDepartmentName(user.departmentId) : "";
  return user.role === "admin" || user.role === "planning" || task.assignee === missionName || task.assignee === departmentName;
}

function dismissAlert(alertId) {
  state.alerts = (state.alerts || []).filter((alert) => alert.id !== alertId);
  saveState();
  renderApp();
}

function openReportActionDialog(reportId, actionKey, nextStage) {
  const report = state.reports.find((item) => item.id === reportId);
  const user = getSessionUser();
  if (!report || !user) return;
  const allowedAction = getAllowedReportActions(report, user).find((action) => action.key === actionKey && action.nextStage === nextStage);
  if (!allowedAction) {
    addAlert("danger", "تعذر تنفيذ الإجراء", "هذا الإجراء غير مسموح به من هذا الحساب أو لا يتوافق مع المرحلة الحالية.");
    saveState();
    renderApp();
    return;
  }
  const quality = normalizeQualityScores(report.qualityScores);
  state.reportActionDialog = {
    reportId,
    actionKey,
    nextStage,
    reviewNotes: report.reviewNotes || "",
    completeness: String(quality.completeness || 4),
    analysis: String(quality.analysis || 4)
  };
  saveState();
  renderApp();
}

function closeReportActionDialog() {
  state.reportActionDialog = null;
  saveState();
  renderApp();
}

function renderAlerts() {
  if (!Array.isArray(state.alerts) || !state.alerts.length) return "";
  return `
    <div class="alerts-stack">
      ${state.alerts.map((alert) => `
        <article class="alert-card alert-${alert.level || "info"}">
          <div class="alert-card-head">
            <strong>${alert.title}</strong>
            <button class="alert-close" type="button" data-dismiss-alert="${alert.id}" aria-label="إغلاق التنبيه">×</button>
          </div>
          <p>${alert.text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderReportActionDialog() {
  const dialog = state.reportActionDialog;
  if (!dialog) return "";
  const report = state.reports.find((item) => item.id === dialog.reportId);
  if (!report) return "";
  const isApproval = dialog.actionKey === "approve";
  const isReturn = dialog.actionKey === "return";
  const title = isApproval ? "اعتماد التقرير" : "إعادة التقرير للبعثة";
  const subtitle = isApproval
    ? "أدخل تقييم الجودة بصورة مؤسسية قبل اعتماد التقرير ضمن السجل الرسمي."
    : "أدخل ملاحظات المراجعة المطلوبة بوضوح حتى تعود للبعثة كتكليف قابل للمعالجة.";
  return `
    <div class="modal-backdrop">
      <div class="modal-card">
        <div class="modal-head">
          <div>
            <span class="tag info">${getMissionName(report.missionId)}</span>
            <div class="section-title">${title}</div>
            <p class="muted">${subtitle}</p>
          </div>
          <button class="modal-close" type="button" data-close-report-dialog aria-label="إغلاق">×</button>
        </div>
        <div class="detail-card modal-reference-card">
          <div class="detail-row"><span>عنوان التقرير</span><span>${report.title}</span></div>
          <div class="detail-row"><span>المرحلة الحالية</span><span>${report.workflowStage}</span></div>
          <div class="detail-row"><span>المرحلة التالية</span><span>${dialog.nextStage}</span></div>
        </div>
        <form id="report-action-form" class="form-grid">
          <input type="hidden" name="reportId" value="${dialog.reportId}">
          <input type="hidden" name="actionKey" value="${dialog.actionKey}">
          <input type="hidden" name="nextStage" value="${dialog.nextStage}">
          ${(isApproval || isReturn) ? `
            <label class="field full">
              <span>ملاحظات المراجعة</span>
              <textarea name="reviewNotes" required>${dialog.reviewNotes || ""}</textarea>
            </label>
          ` : ""}
          ${isApproval ? `
            <label class="field">
              <span>شمولية المحتوى</span>
              <select name="completeness" required>
                ${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(dialog.completeness) === value ? "selected" : ""}>${value}/5</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>جودة التحليل</span>
              <select name="analysis" required>
                ${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(dialog.analysis) === value ? "selected" : ""}>${value}/5</option>`).join("")}
              </select>
            </label>
          ` : ""}
          <div class="field full modal-actions">
            <button class="btn primary" type="submit">${isApproval ? "تأكيد الاعتماد" : "تأكيد الإعادة"}</button>
            <button class="btn secondary" type="button" data-close-report-dialog>إلغاء</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function openCircularActionDialog(circularId, actionKey) {
  const circular = state.circulars.find((item) => item.id === circularId);
  const user = getSessionUser();
  if (!circular || !user) return;
  const allowedAction = getCircularActions(circular, user).find((action) => action.key === actionKey);
  if (!allowedAction) {
    addAlert("danger", "تعذر تنفيذ الإجراء", "هذا الإجراء غير متاح لهذا الحساب أو لم يعد متوافقًا مع حالة التعميم الحالية.");
    saveState();
    renderApp();
    return;
  }
  if (actionKey === "mark-read") {
    handleCircularAction(circularId, actionKey);
    return;
  }
  const currentResponse = (circular.missionResponses || []).find((item) => item.missionId === user.missionId) || null;
  state.circularActionDialog = {
    circularId,
    actionKey,
    executionNote: currentResponse?.note || "",
    evidenceRef: currentResponse?.evidenceRef || "",
    closureNote: circular.closureNote || ""
  };
  saveState();
  renderApp();
}

function closeCircularActionDialog() {
  state.circularActionDialog = null;
  saveState();
  renderApp();
}

function renderCircularActionDialog() {
  const dialog = state.circularActionDialog;
  if (!dialog) return "";
  const circular = state.circulars.find((item) => item.id === dialog.circularId);
  if (!circular) return "";
  const isComplete = dialog.actionKey === "mark-complete";
  const isClose = dialog.actionKey === "close";
  const stats = getCircularCompletion(circular);
  const urgency = getCircularUrgency(circular);
  return `
    <div class="modal-backdrop">
      <div class="modal-card">
        <div class="modal-head">
          <div>
            <span class="tag ${urgency.tone}">${urgency.label}</span>
            <div class="section-title">${isComplete ? "تأكيد إنجاز التعميم" : "إغلاق التعميم"}</div>
            <p class="muted">${isComplete
              ? "دوّن نتيجة التنفيذ بصورة مختصرة ومهنية حتى تظهر في سجل متابعة التعميم للجهات المشرفة."
              : "أدخل مبرر الإغلاق، خصوصًا إذا كانت هناك بعثات لم تستكمل التنفيذ بعد."}</p>
          </div>
          <button class="modal-close" type="button" data-close-circular-dialog aria-label="إغلاق">×</button>
        </div>
        <div class="detail-card modal-reference-card">
          <div class="detail-row"><span>عنوان التعميم</span><span>${circular.title}</span></div>
          <div class="detail-row"><span>نوع التعميم</span><span>${circular.category || "تنفيذي"}</span></div>
          <div class="detail-row"><span>الأولوية</span><span>${circular.priority || "متوسطة"}</span></div>
          <div class="detail-row"><span>المتبقي من البعثات</span><span>${stats.pending} من أصل ${stats.total}</span></div>
        </div>
        <form id="circular-action-form" class="form-grid">
          <input type="hidden" name="circularId" value="${dialog.circularId}">
          <input type="hidden" name="actionKey" value="${dialog.actionKey}">
          ${isComplete ? `
            <label class="field full">
              <span>نتيجة التنفيذ</span>
              <textarea name="executionNote" required>${dialog.executionNote || ""}</textarea>
            </label>
            <label class="field full">
              <span>مرجع أو مرفق داعم</span>
              <input name="evidenceRef" value="${dialog.evidenceRef || ""}" placeholder="اسم ملف أو مرجع مختصر إن وجد">
            </label>
          ` : ""}
          ${isClose ? `
            <label class="field full">
              <span>ملاحظة الإغلاق</span>
              <textarea name="closureNote" ${stats.pending > 0 ? "required" : ""}>${dialog.closureNote || ""}</textarea>
            </label>
          ` : ""}
          <div class="field full modal-actions">
            <button class="btn primary" type="submit">${isComplete ? "حفظ الإنجاز" : "تأكيد الإغلاق"}</button>
            <button class="btn secondary" type="button" data-close-circular-dialog>إلغاء</button>
          </div>
        </form>
      </div>
    </div>
  `;
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
  const demoAccounts = getDemoAccounts();
  return `
    <div class="page-shell">
      <div class="login-shell">
      <section class="login-brand">
        <div class="badge">YD</div>
        <h1 class="title">النظام الدبلوماسي المتكامل</h1>
        <p class="muted">ابدأ من شاشة دخول مؤسسية مبسطة، ثم ستظهر لكل مستخدم الشاشات والصلاحيات المناسبة لدوره فقط مع مؤشرات واضحة وسهلة الوصول.</p>
        <div class="workspace-note-grid login-highlight-grid">
          <div class="detail-card">
            <strong>رحلة دخول أسرع</strong>
            <p class="detail-note">اختر أحد الحسابات التجريبية بضغطة واحدة لملء بيانات الدخول تلقائيًا.</p>
          </div>
          <div class="detail-card">
            <strong>صلاحيات حسب الدور</strong>
            <p class="detail-note">الواجهة لا تعرض إلا الوحدات المناسبة للحساب النشط، مع نطاق رؤية منضبط.</p>
          </div>
        </div>
        <div class="credentials-list">
          ${demoAccounts.map((account) => `
            <div class="cred-card">
              <div class="record-top">
                <div>
                  <strong>${account.roleLabel}</strong>
                  <span class="muted">${account.scope}</span>
                </div>
                <span class="tag info">${account.scope}</span>
              </div>
              <span class="muted">اسم المستخدم: ${account.username} | كلمة المرور: ${account.password}</span>
              <button class="btn secondary demo-login-btn" type="button" data-demo-username="${account.username}" data-demo-password="${account.password}">تجهيز هذا الحساب</button>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="login-form-wrap">
        <div class="form-card">
          <h2 class="section-title">تسجيل الدخول</h2>
          <p class="muted">سجّل الدخول بأحد الحسابات الافتراضية أو بالحسابات التي ينشئها مدير النظام. يمكنك استخدام أزرار التجهيز السريع من اللوحة المقابلة.</p>
          <form id="login-form" class="form-grid">
            <label class="field full">
              <span>اسم المستخدم</span>
              <input name="username" required>
            </label>
            <label class="field full">
              <span>كلمة المرور</span>
              <div class="password-field">
                <input id="login-password" type="password" name="password" required>
                <button class="btn secondary password-toggle" type="button" id="toggle-login-password">إظهار</button>
              </div>
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
  const navItems = visibleViews(user).map((view) => ({
    key: view,
    label: labels[view],
    badge: getViewBadge(view, user)
  }));
  const activeNavItem = navItems.find((item) => item.key === state.activeView) || navItems[0] || {
    key: "dashboard",
    label: "لوحة القيادة",
    badge: ""
  };
  return `
    <div class="page-shell">
      ${renderAlerts()}
      <div class="app-shell">
      <aside class="sidebar">
        <div class="sidebar-top">
          <div class="badge">YD</div>
          <div class="user-box">
            <strong>${user.name}</strong>
            <p>${roleLabel(user)}</p>
            <span class="tag ${getRuntimeModeTone()} runtime-chip">${getRuntimeModeLabel()}</span>
          </div>
          <div class="sidebar-section-card">
            <span class="mini">المسار الحالي</span>
            <strong>${labels[state.activeView] || "لوحة القيادة"}</strong>
            <p class="detail-note">اختر الوحدة المناسبة من القائمة، وستظل الصلاحيات ونطاق البيانات منضبطين بحسب الدور الحالي.</p>
          </div>
          <div class="mobile-nav-card">
            <details class="mobile-nav-panel">
              <summary class="mobile-nav-summary">
                <div class="mobile-nav-summary-main">
                  <span class="mini">التنقل بين الوحدات</span>
                  <div class="mobile-nav-summary-row">
                    <strong>${activeNavItem.label}</strong>
                    ${activeNavItem.badge ? `<span class="nav-badge">${activeNavItem.badge}</span>` : ""}
                  </div>
                  <p class="detail-note">افتح هذه البطاقة للوصول السريع إلى الوحدات من دون تمرير جانبي.</p>
                </div>
                <span class="mobile-nav-summary-action">عرض الوحدات</span>
              </summary>
              <div class="mobile-nav-grid">
                ${navItems.map((item) => `
                  <button class="nav-item mobile-nav-item ${state.activeView === item.key ? "active" : ""}" data-view="${item.key}">
                    <span>${item.label}</span>
                    ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ""}
                  </button>
                `).join("")}
              </div>
            </details>
          </div>
          <div class="menu-list">
            ${navItems.map((item) => `
              <button class="nav-item ${state.activeView === item.key ? "active" : ""}" data-view="${item.key}">
                <span>${item.label}</span>
                ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ""}
              </button>
            `).join("")}
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
      ${renderReportActionDialog()}
      ${renderCircularActionDialog()}
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
  const delayedCirculars = visibleCirculars.filter((circular) => getCircularUrgency(circular).label === "متأخر");
  const delayedPlans = visiblePlans.filter((plan) => plan.status === "متأخرة");
  const delayedMeetingTasks = visibleMeetings.reduce((sum, meeting) => sum + getMeetingSummary(meeting).delayed, 0);
  const averagePlanProgress = visiblePlans.length ? Math.round(visiblePlans.reduce((sum, plan) => sum + Number(plan.progress || 0), 0) / visiblePlans.length) : 0;
  const focusRows = [
    {
      label: "طلبات تقارير بحاجة إلى تدخل",
      value: activeRequests.length ? `${pending} بعثة غير منجزة` : "لا توجد طلبات نشطة",
      tone: pending ? "warning" : "success"
    },
    {
      label: "تعاميم متأخرة",
      value: delayedCirculars.length ? `${delayedCirculars.length} تعميمًا يحتاج المتابعة` : "لا توجد تعاميم متأخرة",
      tone: delayedCirculars.length ? "danger" : "success"
    },
    {
      label: "مهام اجتماعات متأخرة",
      value: delayedMeetingTasks ? `${delayedMeetingTasks} مهمة متأخرة` : "لا توجد مهام متأخرة",
      tone: delayedMeetingTasks ? "danger" : "success"
    },
    {
      label: "خطط بحاجة إلى إنعاش",
      value: delayedPlans.length ? `${delayedPlans.length} خطة متأخرة` : "لا توجد خطط متأخرة",
      tone: delayedPlans.length ? "warning" : "success"
    }
  ];
  const workflowRows = [
    { title: "التقارير", value: reports.length, note: activeRequests.length ? `${activeRequests.length} طلبات نشطة` : "لا توجد طلبات نشطة" },
    { title: "التعاميم", value: visibleCirculars.length, note: delayedCirculars.length ? `${delayedCirculars.length} متأخر` : "ضمن المتابعة" },
    { title: "الاجتماعات", value: visibleMeetings.length, note: delayedMeetingTasks ? `${delayedMeetingTasks} مهمة متأخرة` : "محاضر ومهام مستقرة" },
    { title: "الخطط", value: `${averagePlanProgress}%`, note: visiblePlans.length ? `${visiblePlans.length} خطة في النطاق` : "لا توجد خطط بعد" }
  ];
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">لوحة حسب الدور</span>
          <h1 class="page-title">لوحة القيادة</h1>
          <p class="muted">تظهر هنا المؤشرات الأساسية المناسبة لحساب ${user.name}.</p>
        </div>
        <span class="tag ${getRuntimeModeTone()}">${getRuntimeModeLabel()}</span>
      </div>
    </section>
    <section class="hero-strip">
      <div class="panel workspace-hero-card">
        <span class="tag info">موجز تنفيذي</span>
        <h2 class="section-title">سطح عمل مركّز على الأولويات</h2>
        <p class="muted">تعرض هذه اللوحة المخاطر العاجلة، ومؤشرات الإنجاز، وحالة الوحدات الأربع الأكثر استخدامًا حتى تصل سريعًا إلى ما يحتاج القرار أو المتابعة.</p>
        <div class="workspace-note-grid">
          ${focusRows.map((item) => `
            <div class="detail-card">
              <strong>${item.label}</strong>
              <p class="detail-note">${item.value}</p>
              <span class="tag ${item.tone}">${item.tone === "danger" ? "يتطلب تدخلًا" : item.tone === "warning" ? "يحتاج متابعة" : "مستقر"}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="stats-grid">
        <div class="metric-card"><span>التقارير الظاهرة</span><strong>${reports.length}</strong></div>
        <div class="metric-card"><span>التعاميم في النطاق</span><strong>${visibleCirculars.length}</strong></div>
        <div class="metric-card"><span>الخطط في النطاق</span><strong>${visiblePlans.length}</strong></div>
      </div>
    </section>
    <section class="metrics-grid workspace-metric-grid">
      ${[
        { title: "طلبات التقارير النشطة", value: activeRequests.length, note: `${pending} بعثة غير منجزة` },
        { title: "الاجتماعات المرئية", value: visibleMeetings.length, note: delayedMeetingTasks ? `${delayedMeetingTasks} مهمة متأخرة` : "محاضر ومهام متابعة" },
        { title: "نسبة إنجاز الخطط", value: `${averagePlanProgress}%`, note: "معدل تقريبي" }
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
    <section class="panel">
      <div class="entity-section-head">
        <div>
          <div class="section-title">مسارات العمل</div>
          <p class="mini">تلخيص سريع لحالة الوحدات الأساسية من دون الحاجة لفتح كل شاشة على حدة.</p>
        </div>
      </div>
      <div class="workspace-note-grid">
        ${workflowRows.map((item) => `
          <div class="detail-card">
            <strong>${item.title}</strong>
            <div class="reports-stat-card">
              <strong>${item.value}</strong>
            </div>
            <p class="detail-note">${item.note}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderReportsPage(user) {
  const reports = getVisibleReports(user);
  const filteredReports = getRegistryReports(user);
  const selected = filteredReports.find((item) => item.id === state.selectedReportId) || filteredReports[0] || null;
  const groupedReports = getReportRegistryGroups(filteredReports);
  const missionOptions = [...new Map(reports.map((report) => [report.missionId, getMissionName(report.missionId)])).entries()];
  const stageOptions = [...new Set(reports.map((report) => report.workflowStage).filter(Boolean))];
  return `
    ${renderReportsHero(reports, filteredReports, user)}
    <section class="reports-layout">
      <div class="panel reports-left-pane">
        ${user.role === "mission" ? renderMissionReportForm(user) : ""}
        <div class="report-registry-card">
          <div class="report-registry-head">
            <div>
              <div class="section-title">سجل التقارير</div>
              <p class="muted">اعرض التقارير بحسب العائلة الوظيفية، ثم انتقل إلى المجموعة التشغيلية المناسبة بدل التمرير في قائمة طويلة واحدة.</p>
            </div>
            <span class="tag info">${filteredReports.length} تقرير</span>
          </div>
          <div class="tab-strip">
            ${REPORT_FAMILY_TABS.map((tab) => `<button class="tab-chip ${state.reportRegistryTab === tab.key ? "active" : ""}" type="button" data-report-family-tab="${tab.key}">${tab.label}</button>`).join("")}
          </div>
          <div class="report-filter-bar">
            <label class="field">
              <span>بحث</span>
              <input id="report-search" value="${state.reportSearch || ""}" placeholder="عنوان التقرير أو البعثة أو النوع">
            </label>
            <label class="field">
              <span>المرحلة</span>
              <select id="report-stage-filter">
                <option value="all">جميع المراحل</option>
                ${stageOptions.map((item) => `<option value="${item}" ${state.reportStageFilter === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>البعثة</span>
              <select id="report-mission-filter">
                <option value="all">جميع البعثات</option>
                ${missionOptions.map(([id, name]) => `<option value="${id}" ${state.reportMissionFilter === id ? "selected" : ""}>${name}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>الفرز</span>
              <select id="report-sort">
                <option value="latest" ${state.reportSort === "latest" ? "selected" : ""}>الأحدث أولًا</option>
                <option value="oldest" ${state.reportSort === "oldest" ? "selected" : ""}>الأقدم أولًا</option>
                <option value="quality" ${state.reportSort === "quality" ? "selected" : ""}>الأعلى جودة</option>
                <option value="mission" ${state.reportSort === "mission" ? "selected" : ""}>حسب اسم البعثة</option>
              </select>
            </label>
          </div>
          <div class="entity-overview-strip report-registry-strip">
            <div class="report-mini-kpi">
              <span>قيد المتابعة</span>
              <strong>${groupedReports.find((group) => group.key === "attention")?.items.length || 0}</strong>
            </div>
            <div class="report-mini-kpi">
              <span>معتمدة</span>
              <strong>${groupedReports.find((group) => group.key === "approved")?.items.length || 0}</strong>
            </div>
            <div class="report-mini-kpi">
              <span>مؤرشفة</span>
              <strong>${groupedReports.find((group) => group.key === "archived")?.items.length || 0}</strong>
            </div>
            <div class="report-mini-kpi">
              <span>النتائج المطابقة</span>
              <strong>${filteredReports.length}</strong>
            </div>
          </div>
          <div class="entity-record-stack">
            ${groupedReports.map((group) => `
              <details class="compact-disclosure report-registry-group" ${(group.key === "attention" && group.items.length) || group.items.some((item) => item.id === selected?.id) ? "open" : ""}>
                <summary>
                  <div>
                    <strong>${group.label}</strong>
                    <div class="entity-summary-meta">
                      <span>${group.description}</span>
                    </div>
                  </div>
                  <div class="entity-tag-stack">
                    <span class="tag ${group.tone}">${group.items.length}</span>
                  </div>
                </summary>
                <div class="report-record-grid">
                  ${group.items.map((report) => renderReportRecordCard(report, selected)).join("") || `<div class="empty">لا توجد تقارير ضمن هذا القسم في العرض الحالي.</div>`}
                </div>
              </details>
            `).join("") || `<div class="empty">لا توجد تقارير ضمن هذا التبويب.</div>`}
          </div>
        </div>
      </div>
      <div class="panel reports-right-pane">
        ${selected ? renderReportDetails(selected, user) : `<div class="empty">اختر تقريرًا لعرض التفاصيل.</div>`}
      </div>
    </section>
  `;
}

function renderMissionReportForm(user) {
  const requests = getVisibleRequests(user).filter((item) => item.status === "نشط");
  const editingReport = state.reports.find((item) => item.id === state.editingReportId && item.missionId === user.missionId) || null;
  const indicatorSource = normalizeBilateralIndicators(editingReport?.bilateralIndicators);
  const currentFamily = editingReport ? inferReportFamily(editingReport) : "activity";
  const activeStep = state.reportFormStep || "basics";
  const periodicFormTab = state.periodicFormTab || "bilateral";
  const periodicType = editingReport && inferReportFamily(editingReport) === "periodic" ? editingReport.type : "نصف سنوي";
  const periodicGuidance = getPeriodicTypeGuidance(periodicType);
  const periodicCompletion = getPeriodicCompletion(editingReport || {});
  const thematicTrack = editingReport && inferReportFamily(editingReport) === "thematic" ? (editingReport.thematicTrack || "سياسي") : "سياسي";
  const thematicConfig = getThematicTrackConfig(thematicTrack);
  const thematicCompletion = getThematicCompletion(editingReport || { thematicTrack });
  const activityCompletion = getActivityCompletion(editingReport || {});
  return `
    <div class="report-form-shell">
      <div class="report-form-header">
        <div>
          <div class="section-title">${editingReport ? "تعديل التقرير" : "إعداد تقرير جديد"}</div>
          <p class="muted">صُمم نموذج الإدخال ليقودك خطوة بخطوة بحسب عائلة التقرير، مع إبراز الفروق بين النشاط والموضوعي والزمني.</p>
        </div>
        <span class="tag info">${editingReport ? "وضع التعديل" : "وضع الإنشاء"}</span>
      </div>
      ${requests.length ? `
        <div class="report-incoming-card">
          <div class="section-title">الطلبات الواردة للبعثة</div>
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
      <div class="detail-note">التقارير الزمنية تُرفع استجابة لطلب رسمي فقط، بينما يمكن للبعثة إنشاء تقارير الأنشطة والتقارير الموضوعية مباشرة أو استجابة لطلب من الدائرة أو الجهات القيادية. التسلسل المعتمد هنا هو: إنشاء من البعثة، ثم مراجعة الدائرة، ثم اعتماد التخطيط، ثم الإضافة إلى سجل تقارير البعثة.</div>
      <form id="report-form" class="report-form-workspace">
        <div class="report-step-strip">
          ${REPORT_FORM_STEPS.map((step) => `<button class="report-step-chip ${activeStep === step.key ? "active" : ""}" type="button" data-report-form-step="${step.key}">${step.label}</button>`).join("")}
        </div>

        <section class="report-form-panel ${activeStep === "basics" ? "active" : ""}" data-report-form-panel="basics">
          <div class="report-panel-grid">
            <label class="field report-core-field">
              <span>عائلة القالب</span>
              <select name="reportFamily" id="report-family">
                <option value="activity" ${!editingReport || inferReportFamily(editingReport) === "activity" ? "selected" : ""}>تقرير نشاط</option>
                <option value="periodic" ${editingReport && inferReportFamily(editingReport) === "periodic" ? "selected" : ""}>تقرير زمني</option>
                <option value="thematic" ${editingReport && inferReportFamily(editingReport) === "thematic" ? "selected" : ""}>تقرير موضوعي</option>
              </select>
            </label>
            <label class="field report-core-field">
              <span>عنوان التقرير</span>
              <input name="title" value="${editingReport ? editingReport.title : ""}" required>
            </label>
            <label class="field report-core-field">
              <span>نوع التقرير</span>
              <select name="type" data-current-type="${editingReport ? editingReport.type : "نشاط"}">
                ${[...REPORT_TYPE_OPTIONS.activity, ...REPORT_TYPE_OPTIONS.periodic, ...REPORT_TYPE_OPTIONS.thematic].map((item) => `<option ${editingReport && editingReport.type === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            <div class="field full report-family-section" data-family="periodic">
              <div class="report-periodic-meta-card" id="periodic-meta-card">
                <div>
                  <div class="section-title" id="periodic-type-title">${periodicGuidance.label}</div>
                  <p class="muted" id="periodic-type-description">${periodicGuidance.description}</p>
                </div>
                <p class="detail-note" id="periodic-type-emphasis">${periodicGuidance.emphasis}</p>
                <div class="report-periodic-kpis">
                  <span class="tag info" id="periodic-coverage-badge">${getPeriodicCoverageLabel(editingReport || {})}</span>
                  <span class="tag ${periodicCompletion.percent === 100 ? "success" : "warning"}" id="periodic-progress-badge">اكتمال ${periodicCompletion.completed}/${periodicCompletion.total}</span>
                </div>
              </div>
            </div>
            <label class="field report-core-field report-family-section" data-family="thematic">
              <span>المسار الموضوعي</span>
              <select name="thematicTrack">
                ${THEMATIC_TRACK_OPTIONS.map((item) => `<option ${editingReport && editingReport.thematicTrack === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            <div class="field full report-family-section" data-family="thematic">
              <div class="report-periodic-meta-card" id="thematic-meta-card">
                <div>
                  <div class="section-title" id="thematic-track-title">${thematicConfig.title}</div>
                  <p class="muted" id="thematic-track-description">${thematicConfig.description}</p>
                </div>
                <div class="report-periodic-kpis">
                  <span class="tag info" id="thematic-track-badge">${thematicTrack}</span>
                  <span class="tag ${thematicCompletion.percent === 100 ? "success" : "warning"}" id="thematic-progress-badge">اكتمال ${thematicCompletion.completed}/${thematicCompletion.total}</span>
                </div>
              </div>
            </div>
            <label class="field report-core-field">
              <span>الطلب المرتبط</span>
              <select name="requestId" id="report-request-id" data-current-request-id="${editingReport ? editingReport.requestId || "" : ""}">
                <option value="">بدون ربط</option>
                ${requests.map((request) => `<option value="${request.id}" data-request-family="${request.requestFamily}" ${editingReport && editingReport.requestId === request.id ? "selected" : ""}>${request.title}</option>`).join("")}
              </select>
            </label>
            <label class="field report-core-field">
              <span>تاريخ التقرير/النشاط</span>
              <input type="date" name="activityDate" value="${editingReport ? editingReport.activityDate : ""}" required>
            </label>
            <label class="field full report-core-field">
              <span>اسم المرفق</span>
              <input name="attachmentName" value="${editingReport ? editingReport.attachmentName : ""}" required>
            </label>
            <label class="field report-core-field report-family-section" data-family="periodic" data-required-families="periodic">
              <span>سنة التقرير</span>
              <input type="number" min="2020" max="2100" name="reportingYear" value="${editingReport ? (editingReport.reportingYear || "") : "2026"}">
            </label>
            <label class="field report-core-field report-family-section" data-family="periodic" data-required-families="periodic">
              <span>من تاريخ</span>
              <input type="date" name="coverageFrom" value="${editingReport ? (editingReport.coverageFrom || "") : ""}">
            </label>
            <label class="field report-core-field report-family-section" data-family="periodic" data-required-families="periodic">
              <span>إلى تاريخ</span>
              <input type="date" name="coverageTo" value="${editingReport ? (editingReport.coverageTo || "") : ""}">
            </label>
            <div class="field full">
              <div class="detail-note" id="report-request-guidance">${currentFamily === "periodic" ? "في التقارير الزمنية يجب اختيار الطلب الرسمي الوارد للبعثة قبل الرفع." : "في تقارير النشاط والتقارير الموضوعية يمكن ترك الطلب المرتبط فارغًا إذا كان التقرير مبادرة من البعثة."}</div>
            </div>
          </div>
        </section>

        <section class="report-form-panel ${activeStep === "content" ? "active" : ""}" data-report-form-panel="content">
          <div class="report-family-section" data-family="activity">
            <div class="report-form-intro-card">
              <div class="section-title">قالب تقرير النشاط</div>
              <p class="muted">نموذج قصير ومنظم يركّز على الهدف، المتوقع، النتائج، والتوصيات العملية اللاحقة.</p>
            </div>
            <div class="report-periodic-quality-card" id="activity-quality-card">
              <div class="report-periodic-quality-header">
                <div>
                  <div class="section-title">مؤشر جاهزية تقرير النشاط</div>
                  <p class="muted">يركز على نوع النشاط، الشركاء، المخرجات، الأثر الدبلوماسي، والجهة المسؤولة عن المتابعة بعد الفعالية.</p>
                </div>
                <div class="report-periodic-kpis">
                  <span class="tag info" id="activity-quality-type">${editingReport?.activityCategory || "لم يحدد بعد"}</span>
                  <span class="tag ${activityCompletion.percent === 100 ? "success" : "warning"}" id="activity-quality-progress">جاهزية ${activityCompletion.percent}%</span>
                </div>
              </div>
              <div class="progress"><span id="activity-quality-bar" style="width:${activityCompletion.percent}%"></span></div>
              <div class="report-periodic-status-grid" id="activity-status-grid">
                ${activityCompletion.sections.map((section) => `
                  <div class="check-item ${section.complete ? "complete" : ""}" data-activity-status="${section.key}">
                    <strong>${section.label}</strong>
                    <span>${section.complete ? "مكتمل" : "يحتاج استكمال"}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="report-panel-grid">
              <label class="field" data-required-families="activity">
                <span>مسار النشاط</span>
                <select name="activityCategory">
                  <option value="">اختر المسار</option>
                  ${ACTIVITY_CATEGORY_OPTIONS.map((item) => `<option ${editingReport && editingReport.activityCategory === item ? "selected" : ""}>${item}</option>`).join("")}
                </select>
              </label>
              <label class="field" data-required-families="activity">
                <span>الجهات المشاركة والشركاء</span>
                <input name="activityPartners" value="${editingReport ? (editingReport.activityPartners || "") : ""}">
              </label>
              <label class="field full" data-required-families="activity">
                <span>الأهداف قبل الفعالية</span>
                <textarea name="beforeGoals">${editingReport ? editingReport.beforeGoals : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>المتوقع قبل الفعالية</span>
                <textarea name="beforeExpected">${editingReport ? editingReport.beforeExpected : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>المخرجات المباشرة للنشاط</span>
                <textarea name="activityOutputs">${editingReport ? (editingReport.activityOutputs || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>الصدى الإعلامي أو التغطية المصاحبة</span>
                <textarea name="activityMediaEcho">${editingReport ? (editingReport.activityMediaEcho || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>الأثر الدبلوماسي أو المؤسسي للنشاط</span>
                <textarea name="activityDiplomaticImpact">${editingReport ? (editingReport.activityDiplomaticImpact || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>النتائج بعد الفعالية</span>
                <textarea name="afterResults">${editingReport ? editingReport.afterResults : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>التوصيات بعد الفعالية</span>
                <textarea name="afterRecommendations">${editingReport ? editingReport.afterRecommendations : ""}</textarea>
              </label>
              <label class="field full" data-required-families="activity">
                <span>مسؤول المتابعة بعد النشاط</span>
                <input name="activityFollowupOwner" value="${editingReport ? (editingReport.activityFollowupOwner || "") : ""}">
              </label>
            </div>
          </div>

          <div class="report-family-section" data-family="thematic">
            <div class="report-form-intro-card">
              <div class="section-title">قالب التقرير الموضوعي</div>
              <p class="muted">يبنى على تحليل الموضوع وآثاره على مصالح اليمن ثم يختتم بتوصيات قابلة للتنفيذ والمتابعة.</p>
            </div>
            <div class="report-periodic-quality-card" id="thematic-quality-card">
              <div class="report-periodic-quality-header">
                <div>
                  <div class="section-title">مؤشر جاهزية التقرير الموضوعي</div>
                  <p class="muted">لكل مسار موضوعي عناصره الخاصة، ويجب استكمال الصورة العامة والجهات الفاعلة والآثار والفرص والتوصيات التشغيلية.</p>
                </div>
                <div class="report-periodic-kpis">
                  <span class="tag info" id="thematic-quality-type">${thematicTrack}</span>
                  <span class="tag ${thematicCompletion.percent === 100 ? "success" : "warning"}" id="thematic-quality-progress">جاهزية ${thematicCompletion.percent}%</span>
                </div>
              </div>
              <div class="progress"><span id="thematic-quality-bar" style="width:${thematicCompletion.percent}%"></span></div>
              <div class="report-periodic-status-grid" id="thematic-status-grid">
                ${thematicCompletion.sections.map((section) => `
                  <div class="check-item ${section.complete ? "complete" : ""}" data-thematic-status="${section.key}">
                    <strong>${section.label}</strong>
                    <span>${section.complete ? "مكتمل" : "يحتاج استكمال"}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="report-panel-grid">
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-situation">${thematicConfig.labels.situation}</span>
                <textarea name="thematicSituation">${editingReport ? editingReport.thematicSituation : ""}</textarea>
              </label>
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-developments">${thematicConfig.labels.developments}</span>
                <textarea name="thematicDevelopments">${editingReport ? (editingReport.thematicDevelopments || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-stakeholders">${thematicConfig.labels.stakeholders}</span>
                <textarea name="thematicStakeholders">${editingReport ? (editingReport.thematicStakeholders || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-implications">${thematicConfig.labels.implications}</span>
                <textarea name="thematicImplications">${editingReport ? editingReport.thematicImplications : ""}</textarea>
              </label>
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-risks">${thematicConfig.labels.risks}</span>
                <textarea name="thematicRisks">${editingReport ? (editingReport.thematicRisks || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-action">${thematicConfig.labels.missionAction}</span>
                <textarea name="thematicMissionAction">${editingReport ? (editingReport.thematicMissionAction || "") : ""}</textarea>
              </label>
              <label class="field full" data-required-families="thematic">
                <span id="thematic-label-recommendations">${thematicConfig.labels.recommendations}</span>
                <textarea name="thematicRecommendations">${editingReport ? editingReport.thematicRecommendations : ""}</textarea>
              </label>
            </div>
          </div>

          <div class="report-family-section" data-family="periodic">
            <div class="report-form-intro-card">
              <div class="section-title">قالب التقرير الزمني</div>
              <p class="muted">مساحة إدخال مبوبة لملء التقرير السنوي أو النصف سنوي بصورة تدريجية ومنظمة وفق محاور النموذج المعتمد.</p>
            </div>
            <div class="report-periodic-quality-card" id="periodic-quality-card">
              <div class="report-periodic-quality-header">
                <div>
                  <div class="section-title">مؤشر جودة التقرير الزمني</div>
                  <p class="muted">استكمل التبويبات الثمانية مع ربط المؤشرات الثنائية بالتقييم النهائي والأنشطة والزيارات والجالية.</p>
                </div>
                <div class="report-periodic-kpis">
                  <span class="tag info" id="periodic-quality-type">${periodicGuidance.label}</span>
                  <span class="tag ${periodicCompletion.percent === 100 ? "success" : "warning"}" id="periodic-quality-progress">جاهزية ${periodicCompletion.percent}%</span>
                </div>
              </div>
              <div class="progress"><span id="periodic-quality-bar" style="width:${periodicCompletion.percent}%"></span></div>
              <div class="report-periodic-status-grid" id="periodic-status-grid">
                ${periodicCompletion.sections.map((section) => `
                  <div class="check-item ${section.complete ? "complete" : ""}" data-periodic-status="${section.key}">
                    <strong>${section.label}</strong>
                    <span>${section.complete ? "مكتمل" : "يحتاج استكمال"}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="tab-strip report-inner-tabs">
              ${PERIODIC_REPORT_TABS.map((tab) => `<button class="tab-chip ${periodicFormTab === tab.key ? "active" : ""}" type="button" data-periodic-form-tab="${tab.key}">${tab.label}</button>`).join("")}
            </div>
            <div class="periodic-form-panels">
              <div class="report-form-subpanel ${periodicFormTab === "bilateral" ? "active" : ""}" data-periodic-form-panel="bilateral">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>التقييم العام للعلاقات الثنائية</span>
                    <textarea name="bilateralAssessment">${editingReport ? editingReport.bilateralAssessment : ""}</textarea>
                  </label>
                  <div class="field full">
                    <div class="report-indicator-grid">
                      ${BILATERAL_INDICATOR_FIELDS.map((field) => `
                        <div class="report-indicator-card">
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
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "cooperation" ? "active" : ""}" data-periodic-form-panel="cooperation">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>أوجه الدعم والتعاون الثنائي المحقق خلال الفترة</span>
                    <textarea name="supportCooperation">${editingReport ? editingReport.supportCooperation : ""}</textarea>
                  </label>
                </div>
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "agreements" ? "active" : ""}" data-periodic-form-panel="agreements">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>الاتفاقيات والبروتكولات ومذكرات التفاهم السارية المفعول</span>
                    <textarea name="activeAgreements">${editingReport ? (editingReport.activeAgreements || editingReport.agreementsStatus || "") : ""}</textarea>
                  </label>
                  <label class="field full" data-required-families="periodic">
                    <span>الاتفاقيات والبروتكولات ومذكرات التفاهم التي تحتاج إلى تفعيل ومتابعة</span>
                    <textarea name="agreementsNeedingActivation">${editingReport ? editingReport.agreementsNeedingActivation : ""}</textarea>
                  </label>
                </div>
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "achievements" ? "active" : ""}" data-periodic-form-panel="achievements">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>أهم المواضيع والأنشطة التي أنجزتها البعثة خلال الفترة</span>
                    <textarea name="completedActivities">${editingReport ? editingReport.completedActivities : ""}</textarea>
                  </label>
                </div>
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "followup" ? "active" : ""}" data-periodic-form-panel="followup">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>الموضوعات والأنشطة التي لم تُنجز وتحتاج إلى مواصلة المتابعة</span>
                    <textarea name="pendingActivities">${editingReport ? editingReport.pendingActivities : ""}</textarea>
                  </label>
                </div>
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "outlook" ? "active" : ""}" data-periodic-form-panel="outlook">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>تقييم البعثة للعلاقات الثنائية ورؤيتها المستقبلية والتوصيات</span>
                    <textarea name="relationshipOutlook">${editingReport ? editingReport.relationshipOutlook : ""}</textarea>
                  </label>
                </div>
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "visits" ? "active" : ""}" data-periodic-form-panel="visits">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>أهم الزيارات المتبادلة - جانب بلادنا</span>
                    <textarea name="visitsFromYemen">${editingReport ? (editingReport.visitsFromYemen || editingReport.visitsSummary || "") : ""}</textarea>
                  </label>
                  <label class="field full" data-required-families="periodic">
                    <span>أهم الزيارات المتبادلة - جانب بلد الاعتماد</span>
                    <textarea name="visitsFromHostCountry">${editingReport ? editingReport.visitsFromHostCountry : ""}</textarea>
                  </label>
                </div>
              </div>
              <div class="report-form-subpanel ${periodicFormTab === "community" ? "active" : ""}" data-periodic-form-panel="community">
                <div class="report-panel-grid">
                  <label class="field full" data-required-families="periodic">
                    <span>الجالية اليمنية في بلد الاعتماد</span>
                    <textarea name="communityUpdate">${editingReport ? editingReport.communityUpdate : ""}</textarea>
                  </label>
                  <label class="field full" data-required-families="periodic">
                    <span>إحصاءات عامة عن الجالية</span>
                    <textarea name="communityStats">${editingReport ? editingReport.communityStats : ""}</textarea>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="report-form-panel ${activeStep === "review" ? "active" : ""}" data-report-form-panel="review">
          <div class="report-form-intro-card">
            <div class="section-title">المراجعة النهائية</div>
            <p class="muted">راجع الملخص التنفيذي وتأكد من اكتمال البيانات الأساسية والمرفقات قبل رفع التقرير إلى الدائرة المعنية.</p>
          </div>
          <div class="report-family-section" data-family="periodic">
            <div class="report-review-checklist" id="periodic-review-checklist">
              <div class="section-title">قائمة تحقق التقرير الزمني</div>
              <div class="detail-list">
                <div class="detail-row"><span>نطاق التغطية</span><span id="periodic-review-coverage">${getPeriodicCoverageLabel(editingReport || {})}</span></div>
                <div class="detail-row"><span>مستوى الجاهزية</span><span id="periodic-review-readiness">${periodicCompletion.completed}/${periodicCompletion.total} تبويبات مكتملة</span></div>
                <div class="detail-row"><span>التبويبات غير المكتملة</span><span id="periodic-review-missing">${periodicCompletion.missing.length ? periodicCompletion.missing.map((section) => section.label).join("، ") : "لا توجد نواقص"}</span></div>
              </div>
            </div>
          </div>
          <div class="report-family-section" data-family="thematic">
            <div class="report-review-checklist" id="thematic-review-checklist">
              <div class="section-title">قائمة تحقق التقرير الموضوعي</div>
              <div class="detail-list">
                <div class="detail-row"><span>المسار</span><span id="thematic-review-track">${thematicTrack}</span></div>
                <div class="detail-row"><span>مستوى الجاهزية</span><span id="thematic-review-readiness">${thematicCompletion.completed}/${thematicCompletion.total} محاور مكتملة</span></div>
                <div class="detail-row"><span>المحاور غير المكتملة</span><span id="thematic-review-missing">${thematicCompletion.missing.length ? thematicCompletion.missing.map((section) => section.label).join("، ") : "لا توجد نواقص"}</span></div>
              </div>
            </div>
          </div>
          <div class="report-family-section" data-family="activity">
            <div class="report-review-checklist" id="activity-review-checklist">
              <div class="section-title">قائمة تحقق تقرير النشاط</div>
              <div class="detail-list">
                <div class="detail-row"><span>مسار النشاط</span><span id="activity-review-category">${editingReport?.activityCategory || "لم يحدد بعد"}</span></div>
                <div class="detail-row"><span>مستوى الجاهزية</span><span id="activity-review-readiness">${activityCompletion.completed}/${activityCompletion.total} محاور مكتملة</span></div>
                <div class="detail-row"><span>المحاور غير المكتملة</span><span id="activity-review-missing">${activityCompletion.missing.length ? activityCompletion.missing.map((section) => section.label).join("، ") : "لا توجد نواقص"}</span></div>
              </div>
            </div>
          </div>
          <div class="report-panel-grid">
            <label class="field full">
              <span>الملخص التنفيذي</span>
              <textarea name="summary" required>${editingReport ? editingReport.summary : ""}</textarea>
            </label>
            <div class="field full report-submit-row">
              <button class="btn primary" type="submit">${editingReport ? "حفظ التعديلات" : "رفع التقرير"}</button>
              ${editingReport ? `<button class="btn secondary cancel-edit" type="button" data-kind="report">إلغاء التعديل</button>` : ""}
            </div>
          </div>
        </section>
      </form>
    </div>
  `;
}

function renderReportDetails(report, user) {
  const request = state.reportRequests.find((item) => item.id === report.requestId);
  const actions = getAllowedReportActions(report, user);
  const quality = getReportQualitySummary(report);
  const readiness = getReportReadinessSummary(report);
  return `
    <div class="detail-list report-detail-stack">
      <div class="report-detail-hero">
        <div class="report-detail-hero-main">
          <span class="tag info">${getReportFamilyLabel(report)}</span>
          <div class="section-title">${report.title}</div>
          <p class="detail-note">${report.summary}</p>
          <div class="request-chip-row">
            <span class="tag info">${getReportOriginLabel(report)}</span>
            <span class="tag ${readiness.percent === 100 ? "success" : "warning"}">${readiness.label}: ${readiness.percent}%</span>
            ${report.attachmentName ? `<span class="tag info">المرفق: ${report.attachmentName}</span>` : ""}
          </div>
        </div>
        <div class="report-detail-kpis">
          <div class="report-mini-kpi">
            <span>المرحلة</span>
            <strong class="tag ${stageTone(report.workflowStage)}">${report.workflowStage}</strong>
          </div>
          <div class="report-mini-kpi">
            <span>الجودة</span>
            <strong>${quality.average ? `${quality.average}/5` : "قيد التقييم"}</strong>
          </div>
            <div class="report-mini-kpi">
              <span>منشأ التقرير</span>
              <strong>${getReportOriginLabel(report)}</strong>
            </div>
          </div>
        </div>
      <details class="compact-disclosure report-detail-section" open>
        <summary>
          <div>
            <strong>البيانات المرجعية والجودة</strong>
            <div class="entity-summary-meta">
              <span>${getMissionName(report.missionId)}</span>
              <span>${getDepartmentName(report.departmentId)}</span>
            </div>
          </div>
          <div class="entity-tag-stack">
            <span class="tag ${quality.average && Number(quality.average) >= 4 ? "success" : quality.average ? "warning" : "info"}">${quality.average ? `${quality.average}/5` : "قيد التقييم"}</span>
          </div>
        </summary>
        <div class="report-detail-body">
          <div class="report-summary-grid">
            <div class="detail-card">
              <div class="section-title">البيانات المرجعية</div>
              <div class="detail-row"><span>البعثة</span><span>${getMissionName(report.missionId)}</span></div>
              <div class="detail-row"><span>الدائرة</span><span>${getDepartmentName(report.departmentId)}</span></div>
              <div class="detail-row"><span>نوع التقرير</span><span>${report.type}</span></div>
              <div class="detail-row"><span>الطلب المرتبط</span><span>${request ? request.title : "لا يوجد"}</span></div>
              ${report.submittedOn ? `<div class="detail-row"><span>تاريخ الرفع</span><span>${formatDate(report.submittedOn)}</span></div>` : ""}
            </div>
            <div class="detail-card">
              <div class="section-title">مؤشرات الجودة</div>
              <div class="detail-row"><span>الالتزام بالموعد</span><span>${quality.scores.timeliness ? `${quality.scores.timeliness}/5` : "بانتظار التقييم"}</span></div>
              <div class="detail-row"><span>شمولية المحتوى</span><span>${quality.scores.completeness ? `${quality.scores.completeness}/5` : "بانتظار التقييم"}</span></div>
              <div class="detail-row"><span>جودة التحليل</span><span>${quality.scores.analysis ? `${quality.scores.analysis}/5` : "بانتظار التقييم"}</span></div>
              <p class="detail-note"><strong>ملاحظات المراجعة:</strong> ${report.reviewNotes || "لا توجد ملاحظات مراجعة حتى الآن."}</p>
            </div>
          </div>
        </div>
      </details>
      ${renderReportFamilyWorkspace(report)}
      ${canEditReport(report, user) ? `
        <div class="detail-card">
          <div class="section-title">إجراءات سريعة</div>
          <div class="inline-actions"><button class="btn secondary report-edit" data-report-id="${report.id}">تعديل التقرير</button></div>
        </div>
      ` : ""}
      <details class="compact-disclosure report-detail-section">
        <summary>
          <div>
            <strong>سجل الاعتماد</strong>
            <div class="entity-summary-meta">
              <span>${report.workflowHistory.length} حركة مسجلة</span>
            </div>
          </div>
          <div class="entity-tag-stack">
            <span class="tag info">${report.workflowHistory.length}</span>
          </div>
        </summary>
        <div class="report-detail-body detail-list">
          ${report.workflowHistory.map((item) => `
            <div class="timeline-entry">
              <strong>${item.action}</strong>
              <span>${item.actor}</span>
              <span>${item.stage}</span>
              <span>${item.at}</span>
            </div>
          `).join("")}
        </div>
      </details>
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
  const visibleCirculars = getVisibleCirculars(user);
  const circulars = getCircularRegistryCirculars(user);
  const editingCircular = visibleCirculars.find((item) => item.id === state.editingCircularId) || null;
  const metrics = getCircularExecutiveMetrics(user);
  const canIssueCircular = user.role === "planning" || user.role === "admin";
  const circularCategory = editingCircular?.category || "تنفيذي";
  const categoryConfig = getCircularCategoryConfig(circularCategory);
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">التعاميم</span>
          <h1 class="page-title">إدارة التعاميم</h1>
          <p class="muted">إصدار التعاميم، توضيح المطلوب التنفيذي، ومتابعة القراءة والتنفيذ بحسب البعثة والدائرة والجهات القيادية.</p>
        </div>
      </div>
    </section>
    <section class="stats-grid circular-stat-strip">
      <article class="metric-card"><span>إجمالي التعاميم في النطاق</span><strong>${metrics.total}</strong></article>
      <article class="metric-card"><span>التعاميم النشطة</span><strong>${metrics.active}</strong></article>
      <article class="metric-card"><span>المتأخرة</span><strong>${metrics.overdue}</strong></article>
      <article class="metric-card"><span>قريبة الاستحقاق</span><strong>${metrics.dueSoon}</strong></article>
      <article class="metric-card"><span>عالية الأولوية</span><strong>${metrics.highPriority}</strong></article>
    </section>
    <section class="panel">
      <div class="report-filter-bar circular-filter-bar">
        <label class="field">
          <span>بحث</span>
          <input id="circular-search" value="${state.circularSearch || ""}" placeholder="ابحث في العنوان أو المتن أو البعثة أو الجهة المصدرة">
        </label>
        <label class="field">
          <span>الحالة</span>
          <select id="circular-status-filter">
            <option value="all" ${state.circularStatusFilter === "all" ? "selected" : ""}>الكل</option>
            <option value="active" ${state.circularStatusFilter === "active" ? "selected" : ""}>نشط</option>
            <option value="due-soon" ${state.circularStatusFilter === "due-soon" ? "selected" : ""}>قريب الاستحقاق</option>
            <option value="overdue" ${state.circularStatusFilter === "overdue" ? "selected" : ""}>متأخر</option>
            <option value="completed" ${state.circularStatusFilter === "completed" ? "selected" : ""}>مكتمل التنفيذ</option>
            <option value="closed" ${state.circularStatusFilter === "closed" ? "selected" : ""}>مغلق</option>
          </select>
        </label>
        <label class="field">
          <span>نوع التعميم</span>
          <select id="circular-category-filter">
            <option value="all" ${state.circularCategoryFilter === "all" ? "selected" : ""}>الكل</option>
            ${Object.keys(CIRCULAR_CATEGORY_CONFIG).map((item) => `<option value="${item}" ${state.circularCategoryFilter === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>الأولوية</span>
          <select id="circular-priority-filter">
            <option value="all" ${state.circularPriorityFilter === "all" ? "selected" : ""}>الكل</option>
            ${["عالية", "متوسطة", "عادية"].map((item) => `<option value="${item}" ${state.circularPriorityFilter === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        ${canIssueCircular ? `
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
              <label class="field">
                <span>نوع التعميم</span>
                <select name="category" id="circular-category" required>
                  ${["توجيهي", "تنفيذي", "إداري", "عاجل"].map((item) => `<option value="${item}" ${editingCircular?.category === item || (!editingCircular && item === "تنفيذي") ? "selected" : ""}>${item}</option>`).join("")}
                </select>
              </label>
              <label class="field">
                <span>الأولوية</span>
                <select name="priority" id="circular-priority" required>
                  ${["عالية", "متوسطة", "عادية"].map((item) => `<option value="${item}" ${editingCircular?.priority === item || (!editingCircular && item === "متوسطة") ? "selected" : ""}>${item}</option>`).join("")}
                </select>
              </label>
              <label class="field full">
                <span>ملخص التعميم</span>
                <textarea id="circular-summary" name="summary" placeholder="${categoryConfig.summaryHint}">${editingCircular ? (editingCircular.summary || "") : ""}</textarea>
              </label>
              <label class="field full">
                <span>نص التعميم / المطلوب التنفيذي</span>
                <textarea id="circular-body" name="body" placeholder="${categoryConfig.bodyHint}">${editingCircular ? (editingCircular.body || "") : ""}</textarea>
              </label>
              <label class="field full">
                <span>الإجراء المطلوب من البعثات</span>
                <textarea id="circular-action-required" name="actionRequired" placeholder="${categoryConfig.actionHint}" required>${editingCircular ? (editingCircular.actionRequired || "") : ""}</textarea>
              </label>
              <label class="field full">
                <span>اسم المرفق المرجعي</span>
                <input name="attachmentName" value="${editingCircular ? (editingCircular.attachmentName || "") : ""}" placeholder="اسم ملف أو مرجع مختصر إذا كان هناك تعميم مرفق">
              </label>
              <div class="detail-card circular-guidance-card field full">
                <div class="record-top">
                  <strong id="circular-guidance-title">دليل ${circularCategory}</strong>
                  <span class="tag info" id="circular-guidance-tag">${circularCategory}</span>
                </div>
                <p class="detail-note" id="circular-guidance-description">${categoryConfig.description}</p>
                <div class="detail-row"><span>مناسب لـ</span><span id="circular-guidance-use-cases">${categoryConfig.useCases}</span></div>
                <div class="detail-row"><span>المخرج المتوقع</span><span id="circular-guidance-response">${categoryConfig.responseExpectation}</span></div>
              </div>
              <label class="field full">
                <span>البعثات المستهدفة</span>
                ${renderMissionPicker({
                  pickerId: "circular",
                  missions: state.missions,
                  selectedIds: editingCircular ? editingCircular.targetMissionIds : state.missions.map((mission) => mission.id),
                  helperText: "قائمة البعثات مجمعة حسب الدائرة مع إمكانية البحث والتحديد الجماعي."
                })}
              </label>
              <div class="field full">
                <button class="btn primary" type="submit">${editingCircular ? "حفظ التعديلات" : "إصدار التعميم"}</button>
                ${editingCircular ? `<button class="btn secondary cancel-edit" type="button" data-kind="circular">إلغاء التعديل</button>` : ""}
              </div>
            </form>
          </div>
        ` : ""}
        <div class="record-top">
          <div class="section-title">سجل التعاميم</div>
          <span class="tag info">النتائج ${circulars.length}</span>
        </div>
        <div class="detail-list circular-record-stack">
          ${circulars.map((circular) => {
            const stats = getCircularCompletion(circular);
            const actions = getCircularActions(circular, user);
            const urgency = getCircularUrgency(circular);
            const ownStatus = user.role === "mission" ? getCircularMissionStatus(circular, user.missionId) : null;
            return `
            <div class="detail-card circular-record-card">
              <div class="record-top">
                <div>
                  <strong>${circular.title}</strong>
                  <div class="record-meta">الجهة المصدرة: ${circular.issuedBy || "الوزارة"} | الموعد النهائي ${formatDate(circular.dueDate)}</div>
                </div>
                <span class="tag ${circular.status === "نشط" ? "warning" : "success"}">${circular.status}</span>
              </div>
              <div class="request-chip-row">
                <span class="tag info">${circular.category || "تنفيذي"}</span>
                <span class="tag ${getCircularPriorityTone(circular.priority)}">${circular.priority || "متوسطة"} الأولوية</span>
                <span class="tag ${urgency.tone}">${urgency.label}</span>
                <span class="tag info">موجّه إلى ${circular.targetMissionIds.length} بعثات</span>
                ${user.role === "mission" ? `<span class="tag success">وارد إلى ${getMissionName(user.missionId)}</span>` : ""}
              </div>
              ${circular.summary ? `<p class="record-desc">${circular.summary}</p>` : ""}
              <div class="circular-body-stack">
                ${circular.body ? `
                  <div class="detail-card circular-body-card">
                    <div class="section-title">نص التعميم</div>
                    <p class="detail-note">${circular.body}</p>
                  </div>
                ` : ""}
                ${circular.actionRequired ? `
                  <div class="detail-card circular-body-card">
                    <div class="section-title">الإجراء المطلوب</div>
                    <p class="detail-note">${circular.actionRequired}</p>
                  </div>
                ` : ""}
              </div>
              <div class="circular-kpi-strip">
                <div class="circular-mini-kpi">
                  <span>تأكيد القراءة</span>
                  <strong>${stats.read}/${stats.total}</strong>
                </div>
                <div class="circular-mini-kpi">
                  <span>تأكيد الإنجاز</span>
                  <strong>${stats.completed}/${stats.total}</strong>
                </div>
                <div class="circular-mini-kpi">
                  <span>المتبقي</span>
                  <strong>${stats.pending}</strong>
                </div>
              </div>
              <div class="detail-row"><span>تاريخ الإصدار</span><span>${formatDate(circular.issuedAt || circular.dueDate)}</span></div>
              <div class="detail-row"><span>المرفق المرجعي</span><span>${circular.attachmentName || "لا يوجد"}</span></div>
              ${circular.status === "مغلق" && circular.closureNote ? `<div class="detail-row"><span>ملاحظة الإغلاق</span><span>${circular.closureNote}</span></div>` : ""}
              <div class="progress"><span style="width:${stats.completePercent}%"></span></div>
              <p class="record-desc">المتبقي ${stats.pending} بعثات | غير المقروء ${stats.unread}</p>
              ${ownStatus ? `
                <div class="detail-card circular-status-card">
                  <div class="record-top">
                    <strong>حالة بعثتك</strong>
                    <span class="tag ${ownStatus.tone}">${ownStatus.label}</span>
                  </div>
                  <p class="detail-note">${ownStatus.detail}</p>
                </div>
              ` : ""}
              ${canEditCircular(circular, user) ? `<div class="inline-actions"><button class="btn secondary circular-edit" data-circular-id="${circular.id}">تعديل التعميم</button></div>` : ""}
              ${actions.length ? `<div class="inline-actions">${actions.map((action) => `<button class="btn primary circular-action" data-circular-id="${circular.id}" data-action="${action.key}">${action.label}</button>`).join("")}</div>` : ""}
            </div>
          `;
          }).join("") || `<div class="empty">لا توجد تعاميم في نطاق هذا الحساب.</div>`}
        </div>
      </div>
      <div class="panel">
        <div class="section-title">متابعة التنفيذ</div>
        <div class="detail-list">
          ${circulars.map((circular) => {
            const urgency = getCircularUrgency(circular);
            const recipientRows = getCircularRecipientRows(circular, user);
            return `
            <div class="detail-card circular-monitor-card">
              <div class="record-top">
                <div>
                  <strong>${circular.title}</strong>
                  <div class="record-meta">${circular.category || "تنفيذي"} | ${circular.priority || "متوسطة"} الأولوية</div>
                </div>
                <span class="tag ${urgency.tone}">${urgency.label}</span>
              </div>
              <details class="compact-disclosure" ${recipientRows.length <= 3 ? "open" : ""}>
                <summary>
                  <span>حالات البعثات المستهدفة</span>
                  <span class="tag info">${recipientRows.length}</span>
                </summary>
                <div class="circular-recipient-list">
                  ${recipientRows.map((row) => `
                    <div class="circular-recipient-row">
                      <div class="circular-recipient-main">
                        <strong>${row.missionName}</strong>
                        <span class="circular-recipient-meta">${row.departmentName}</span>
                      </div>
                      <div class="circular-status-stack">
                        <span class="tag ${row.status.tone}">${row.status.label}</span>
                        <span class="mini">${row.response?.note || row.status.detail}</span>
                        ${row.response?.evidenceRef ? `<span class="mini">مرجع: ${row.response.evidenceRef}</span>` : ""}
                      </div>
                    </div>
                  `).join("") || `<div class="empty">لا توجد بعثات في نطاق هذا الحساب داخل هذا التعميم.</div>`}
                </div>
              </details>
              <div class="section-title">آخر المعالجات</div>
              <div class="detail-list">
                ${((circular.processingLog || []).length ? circular.processingLog : circular.workflowHistory || []).slice(0, 4).map((item) => `
                  <div class="timeline-entry">
                    <strong>${item.action || item.actor}</strong>
                    <span>${item.actor}</span>
                    ${item.missionId ? `<span>${getMissionName(item.missionId)}</span>` : ""}
                    ${item.stage ? `<span>${item.stage}</span>` : ""}
                    ${item.result ? `<span>${item.result}</span>` : ""}
                    ${item.evidenceRef ? `<span>مرجع: ${item.evidenceRef}</span>` : ""}
                    <span>${item.at}</span>
                  </div>
                `).join("") || '<div class="empty">لا يوجد سجل حركة.</div>'}
              </div>
            </div>
          `;
          }).join("") || `<div class="empty">لا توجد متابعات تنفيذية في نطاق هذا الحساب.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderMeetingsPage(user) {
  const visibleMeetings = getVisibleMeetings(user);
  const meetings = getFilteredMeetings(user);
  const editingMeeting = visibleMeetings.find((item) => item.id === state.editingMeetingId) || null;
  const primaryTask = editingMeeting?.tasks?.[0] || null;
  const meetingDepartments = user.role === "department"
    ? state.departments.filter((department) => department.id === user.departmentId)
    : state.departments;
  const totalTasks = meetings.reduce((sum, meeting) => sum + getMeetingSummary(meeting).total, 0);
  const delayedTasks = meetings.reduce((sum, meeting) => sum + getMeetingSummary(meeting).delayed, 0);
  const completedTasks = meetings.reduce((sum, meeting) => sum + getMeetingSummary(meeting).completed, 0);
  const activeMeetingCount = meetings.filter((meeting) => {
    const summary = getMeetingSummary(meeting);
    return summary.statusKey === "in-progress" || summary.statusKey === "delayed";
  }).length;
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">الاجتماعات</span>
          <h1 class="page-title">محاضر الاجتماعات والمهام</h1>
          <p class="muted">تحويل المحاضر إلى مهام ومتابعة حالات الإنجاز والتأخر وفق ما ورد في الوثيقة.</p>
        </div>
      </div>
      <div class="entity-overview-strip workspace-overview-strip">
        <div class="report-mini-kpi">
          <span>الاجتماعات المعروضة</span>
          <strong>${meetings.length}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>إجمالي المهام</span>
          <strong>${totalTasks}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>المهام المنجزة</span>
          <strong>${completedTasks}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>المهام المتأخرة</span>
          <strong>${delayedTasks}</strong>
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
              <select name="departmentId" required ${user.role === "department" ? "disabled" : ""}>
                ${meetingDepartments.map((department) => `<option value="${department.id}" ${(editingMeeting ? editingMeeting.departmentId : user.departmentId) === department.id ? "selected" : ""}>${department.name}</option>`).join("")}
              </select>
              ${user.role === "department" ? `<input type="hidden" name="departmentId" value="${user.departmentId}">` : ""}
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
      <div class="panel workspace-list-panel">
        <div class="entity-section-head">
          <div>
            <div class="section-title">سجل الاجتماعات</div>
            <p class="mini">ابحث في الاجتماعات أو صفِّها حسب الدائرة أو الحالة للوصول السريع إلى الاجتماعات المتأخرة أو الجارية.</p>
          </div>
          <span class="tag ${delayedTasks ? "danger" : "info"}">${delayedTasks ? `${delayedTasks} مهمة متأخرة` : `${activeMeetingCount} اجتماعات نشطة`}</span>
        </div>
        <div class="report-filter-bar workspace-filter-bar">
          <label class="field">
            <span>البحث</span>
            <input id="meeting-search" type="search" value="${state.meetingSearch || ""}" placeholder="ابحث بعنوان الاجتماع أو المهمة أو الجهة المكلفة">
          </label>
          ${meetingDepartments.length > 1 ? `
            <label class="field">
              <span>الدائرة</span>
              <select id="meeting-department-filter">
                <option value="all">جميع الدوائر</option>
                ${meetingDepartments.map((department) => `<option value="${department.id}" ${state.meetingDepartmentFilter === department.id ? "selected" : ""}>${department.name}</option>`).join("")}
              </select>
            </label>
          ` : `
            <div class="report-mini-kpi">
              <span>الدائرة</span>
              <strong>${meetingDepartments[0]?.name || "ضمن النطاق"}</strong>
            </div>
          `}
          <label class="field">
            <span>الحالة</span>
            <select id="meeting-status-filter">
              <option value="all" ${state.meetingStatusFilter === "all" ? "selected" : ""}>جميع الحالات</option>
              <option value="pending" ${state.meetingStatusFilter === "pending" ? "selected" : ""}>جديد</option>
              <option value="in-progress" ${state.meetingStatusFilter === "in-progress" ? "selected" : ""}>قيد التنفيذ</option>
              <option value="delayed" ${state.meetingStatusFilter === "delayed" ? "selected" : ""}>متأخر</option>
              <option value="completed" ${state.meetingStatusFilter === "completed" ? "selected" : ""}>مكتمل</option>
            </select>
          </label>
          <div class="report-mini-kpi">
            <span>النتائج</span>
            <strong>${meetings.length}</strong>
          </div>
        </div>
        <div class="workspace-record-stack">
          ${meetings.map((meeting) => {
            const summary = getMeetingSummary(meeting);
            return `
              <details class="compact-disclosure workspace-record-card" ${meetings.length <= 2 ? "open" : ""}>
                <summary>
                  <div>
                    <strong>${meeting.title}</strong>
                    <div class="workspace-summary-meta">
                      <span>${getDepartmentName(meeting.departmentId)}</span>
                      <span>${summary.total} مهام</span>
                      <span>${summary.completed} منجزة</span>
                      <span>${summary.delayed} متأخرة</span>
                    </div>
                  </div>
                  <div class="entity-tag-stack">
                    <span class="tag ${summary.tone}">${summary.label}</span>
                    <span class="tag info">${summary.percent}% إنجاز</span>
                  </div>
                </summary>
                <div class="workspace-card-shell">
                  <p class="muted">${meeting.summary}</p>
                  ${canEditMeeting(meeting, user) ? `<div class="inline-actions"><button class="btn secondary meeting-edit" data-meeting-id="${meeting.id}">تعديل الاجتماع</button></div>` : ""}
                  <div class="entity-kpi-grid workspace-kpi-grid">
                    <div class="report-mini-kpi">
                      <span>إجمالي المهام</span>
                      <strong>${summary.total}</strong>
                    </div>
                    <div class="report-mini-kpi">
                      <span>قيد التنفيذ</span>
                      <strong>${summary.inProgress}</strong>
                    </div>
                    <div class="report-mini-kpi">
                      <span>منجزة</span>
                      <strong>${summary.completed}</strong>
                    </div>
                    <div class="report-mini-kpi">
                      <span>متأخرة</span>
                      <strong>${summary.delayed}</strong>
                    </div>
                  </div>
                  <div class="progress workspace-progress"><span style="width:${summary.percent}%"></span></div>
                  <div class="workspace-card-grid">
                    ${meeting.tasks.map((task) => `
                      <div class="detail-card workspace-task-card">
                        <div class="record-top">
                          <div>
                            <strong>${task.title}</strong>
                            <div class="record-meta">${task.assignee} | الأولوية ${task.priority}</div>
                          </div>
                          <span class="tag ${getMeetingTaskTone(task.status)}">${task.status}</span>
                        </div>
                        ${getMeetingActions(meeting, task, user).length ? `<div class="inline-actions">${getMeetingActions(meeting, task, user).map((action) => `<button class="btn primary meeting-action" data-meeting-id="${meeting.id}" data-task-id="${task.id}" data-status="${action.nextStatus}">${action.label}</button>`).join("")}</div>` : `<div class="detail-note">لا توجد إجراءات إضافية متاحة لهذا الحساب على هذه المهمة.</div>`}
                      </div>
                    `).join("")}
                  </div>
                  ${(meeting.workflowHistory || []).length ? `
                    <details class="compact-disclosure workspace-subrecord">
                      <summary>
                        <strong>سجل الاجتماع</strong>
                        <span class="tag info">${Math.min((meeting.workflowHistory || []).length, 4)} آخر حركات</span>
                      </summary>
                      <div class="detail-list">
                        ${meeting.workflowHistory.slice(0, 4).map((item) => `<div class="timeline-entry"><strong>${item.action}</strong><span>${item.actor}</span><span>${item.at}</span></div>`).join("")}
                      </div>
                    </details>
                  ` : ""}
                </div>
              </details>
            `;
          }).join("") || `<div class="panel empty">لا توجد اجتماعات ضمن هذه الفلاتر.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderPlansPage(user) {
  const visiblePlans = getVisiblePlans(user);
  const plans = getFilteredPlans(user);
  const editingPlan = visiblePlans.find((item) => item.id === state.editingPlanId) || null;
  const completedPlans = plans.filter((plan) => plan.status === "منجز").length;
  const delayedPlans = plans.filter((plan) => plan.status === "متأخرة").length;
  const averageProgress = plans.length ? Math.round(plans.reduce((sum, plan) => sum + Number(plan.progress || 0), 0) / plans.length) : 0;
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">الخطط</span>
          <h1 class="page-title">الخطط التشغيلية ومؤشرات الأداء</h1>
          <p class="muted">ربط الخطط بالمستهدفات والمؤشرات ونسب الإنجاز الفصلية والسنوية.</p>
        </div>
      </div>
      <div class="entity-overview-strip workspace-overview-strip">
        <div class="report-mini-kpi">
          <span>الخطط المعروضة</span>
          <strong>${plans.length}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>متوسط الإنجاز</span>
          <strong>${averageProgress}%</strong>
        </div>
        <div class="report-mini-kpi">
          <span>الخطط المنجزة</span>
          <strong>${completedPlans}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>الخطط المتأخرة</span>
          <strong>${delayedPlans}</strong>
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
      <div class="panel workspace-list-panel">
        <div class="entity-section-head">
          <div>
            <div class="section-title">سجل الخطط</div>
            <p class="mini">فرز سريع للخطط حسب الحالة أو نوع المالك، مع إبقاء التفاصيل وسجل المتابعة داخل البطاقة.</p>
          </div>
          <span class="tag ${delayedPlans ? "danger" : "info"}">${delayedPlans ? `${delayedPlans} خطط متأخرة` : `${completedPlans} خطط منجزة`}</span>
        </div>
        <div class="report-filter-bar workspace-filter-bar">
          <label class="field">
            <span>البحث</span>
            <input id="plan-search" type="search" value="${state.planSearch || ""}" placeholder="ابحث بعنوان الخطة أو المؤشر أو الجهة المالكة">
          </label>
          <label class="field">
            <span>الحالة</span>
            <select id="plan-status-filter">
              <option value="all" ${state.planStatusFilter === "all" ? "selected" : ""}>جميع الحالات</option>
              <option value="قيد التنفيذ" ${state.planStatusFilter === "قيد التنفيذ" ? "selected" : ""}>قيد التنفيذ</option>
              <option value="منجز" ${state.planStatusFilter === "منجز" ? "selected" : ""}>منجز</option>
              <option value="متأخرة" ${state.planStatusFilter === "متأخرة" ? "selected" : ""}>متأخرة</option>
            </select>
          </label>
          ${(user.role === "planning" || user.role === "admin") ? `
            <label class="field">
              <span>نوع المالك</span>
              <select id="plan-owner-filter">
                <option value="all" ${state.planOwnerFilter === "all" ? "selected" : ""}>الكل</option>
                <option value="mission" ${state.planOwnerFilter === "mission" ? "selected" : ""}>بعثات</option>
                <option value="department" ${state.planOwnerFilter === "department" ? "selected" : ""}>دوائر</option>
              </select>
            </label>
          ` : `
            <div class="report-mini-kpi">
              <span>النطاق</span>
              <strong>${user.role === "mission" ? "بعثة" : user.role === "department" ? "دائرة" : "وزارة"}</strong>
            </div>
          `}
          <div class="report-mini-kpi">
            <span>النتائج</span>
            <strong>${plans.length}</strong>
          </div>
        </div>
        <div class="workspace-record-stack">
          ${plans.map((plan) => `
            <details class="compact-disclosure workspace-record-card" ${plans.length <= 2 ? "open" : ""}>
              <summary>
                <div>
                  <strong>${plan.title}</strong>
                  <div class="workspace-summary-meta">
                    <span>${getPlanOwnerLabel(plan)}</span>
                    <span>${plan.period}</span>
                    <span>${plan.kpi}</span>
                  </div>
                </div>
                <div class="entity-tag-stack">
                  <span class="tag ${getPlanStatusTone(plan.status)}">${plan.status}</span>
                  <span class="tag info">${plan.progress}%</span>
                </div>
              </summary>
              <div class="workspace-card-shell">
                <div class="entity-kpi-grid workspace-kpi-grid">
                  <div class="report-mini-kpi">
                    <span>نسبة الإنجاز</span>
                    <strong>${plan.progress}%</strong>
                  </div>
                  <div class="report-mini-kpi">
                    <span>نوع المالك</span>
                    <strong>${plan.ownerType === "mission" ? "بعثة" : "دائرة"}</strong>
                  </div>
                  <div class="report-mini-kpi">
                    <span>الفترة</span>
                    <strong>${plan.period}</strong>
                  </div>
                  <div class="report-mini-kpi">
                    <span>الحالة</span>
                    <strong>${plan.status}</strong>
                  </div>
                </div>
                <div class="progress workspace-progress"><span style="width:${plan.progress}%"></span></div>
                <div class="workspace-card-grid">
                  <div class="detail-card">
                    <div class="section-title">مرجع الخطة</div>
                    <div class="detail-list">
                      <div class="detail-row"><span>المالك</span><span>${getPlanOwnerLabel(plan)}</span></div>
                      <div class="detail-row"><span>مؤشر الأداء</span><span>${plan.kpi}</span></div>
                      <div class="detail-row"><span>الفترة</span><span>${plan.period}</span></div>
                      <div class="detail-row"><span>الوضع الحالي</span><span>${plan.status}</span></div>
                    </div>
                  </div>
                  <div class="detail-card">
                    <div class="section-title">إجراءات سريعة</div>
                    ${canEditPlan(plan, user) ? `<div class="inline-actions"><button class="btn secondary plan-edit" data-plan-id="${plan.id}">تعديل الخطة</button></div>` : ""}
                    ${getPlanActions(plan, user).length ? `<div class="inline-actions">${getPlanActions(plan, user).map((action) => `<button class="btn primary plan-action" data-plan-id="${plan.id}" data-action="${action.key}" data-delta="${action.delta || ""}" data-status="${action.status || ""}" data-progress="${action.progress || ""}">${action.label}</button>`).join("")}</div>` : `<div class="detail-note">لا توجد إجراءات متاحة لهذا الحساب على هذه الخطة.</div>`}
                  </div>
                </div>
                ${(plan.workflowHistory || []).length ? `
                  <details class="compact-disclosure workspace-subrecord">
                    <summary>
                      <strong>سجل الخطة</strong>
                      <span class="tag info">${Math.min((plan.workflowHistory || []).length, 4)} آخر حركات</span>
                    </summary>
                    <div class="detail-list">
                      ${plan.workflowHistory.slice(0, 4).map((item) => `<div class="timeline-entry"><strong>${item.action}</strong><span>${item.actor}</span><span>${item.at}</span></div>`).join("")}
                    </div>
                  </details>
                ` : ""}
              </div>
            </details>
          `).join("") || `<div class="panel empty">لا توجد خطط ضمن هذه الفلاتر.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderTrainingPage(user) {
  const trainings = getFilteredTrainings(user);
  const groupedTrainings = {
    attention: trainings.filter((training) => getTrainingProgress(training).group === "attention"),
    near: trainings.filter((training) => getTrainingProgress(training).group === "near"),
    met: trainings.filter((training) => getTrainingProgress(training).group === "met")
  };
  const averageProgress = trainings.length
    ? Math.round(trainings.reduce((sum, training) => sum + getTrainingProgress(training).percent, 0) / trainings.length)
    : 0;
  const trainingGroups = [
    {
      key: "attention",
      label: "برامج بحاجة إلى متابعة",
      description: "ابدأ بهذه البرامج لأنها بعيدة عن الهدف أو تحتاج دعماً إداريًا أو تنسيقًا إضافيًا.",
      tone: "danger",
      items: groupedTrainings.attention
    },
    {
      key: "near",
      label: "برامج قريبة من الهدف",
      description: "هذه البرامج تحتاج دفعة أخيرة للوصول إلى نسبة الإنجاز المستهدفة.",
      tone: "warning",
      items: groupedTrainings.near
    },
    {
      key: "met",
      label: "برامج حققت الهدف",
      description: "يمكن استخدامها كنماذج نجاح أو الاكتفاء بمتابعة دورية أخف.",
      tone: "success",
      items: groupedTrainings.met
    }
  ];
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">التدريب</span>
          <h1 class="page-title">منصة التدريب</h1>
          <p class="muted">متابعة برامج التدريب الإلزامية والمتخصصة مع إبراز البرامج التي تحتاج دعماً عاجلاً قبل أن تمتد الصفحة بلا فائدة تشغيلية.</p>
        </div>
        <span class="tag info">${trainings.length} برنامج ضمن العرض الحالي</span>
      </div>
      <div class="reports-stat-strip">
        <div class="reports-stat-card">
          <span>إجمالي البرامج</span>
          <strong>${trainings.length}</strong>
        </div>
        <div class="reports-stat-card">
          <span>بحاجة متابعة</span>
          <strong>${groupedTrainings.attention.length}</strong>
        </div>
        <div class="reports-stat-card">
          <span>قريبة من الهدف</span>
          <strong>${groupedTrainings.near.length}</strong>
        </div>
        <div class="reports-stat-card">
          <span>حققت الهدف</span>
          <strong>${groupedTrainings.met.length}</strong>
        </div>
        <div class="reports-stat-card">
          <span>متوسط الإنجاز</span>
          <strong>${averageProgress}%</strong>
        </div>
      </div>
      <div class="report-filter-bar workspace-filter-bar">
        <label class="field">
          <span>البحث</span>
          <input id="training-search" type="search" value="${state.trainingSearch || ""}" placeholder="ابحث بعنوان البرنامج أو الفئة المستهدفة">
        </label>
        <label class="field">
          <span>الفئة المستهدفة</span>
          <select id="training-audience-filter">
            <option value="all" ${state.trainingAudienceFilter === "all" ? "selected" : ""}>جميع الفئات</option>
            <option value="all-users" ${state.trainingAudienceFilter === "all-users" ? "selected" : ""}>جميع المستخدمين</option>
            <option value="missions" ${state.trainingAudienceFilter === "missions" ? "selected" : ""}>برامج البعثات</option>
            <option value="departments" ${state.trainingAudienceFilter === "departments" ? "selected" : ""}>برامج الدوائر</option>
          </select>
        </label>
        <label class="field">
          <span>الحالة</span>
          <select id="training-status-filter">
            <option value="all" ${state.trainingStatusFilter === "all" ? "selected" : ""}>جميع الحالات</option>
            <option value="attention" ${state.trainingStatusFilter === "attention" ? "selected" : ""}>بحاجة متابعة</option>
            <option value="near" ${state.trainingStatusFilter === "near" ? "selected" : ""}>قريبة من الهدف</option>
            <option value="met" ${state.trainingStatusFilter === "met" ? "selected" : ""}>حققت الهدف</option>
          </select>
        </label>
        <div class="report-mini-kpi">
          <span>النتائج المعروضة</span>
          <strong>${trainings.length}</strong>
        </div>
      </div>
    </section>
    <section class="panel">
      <div class="entity-section-head">
        <div>
          <div class="section-title">لوحة متابعة البرامج</div>
          <p class="mini">تم تجميع البرامج حسب الأولوية التشغيلية حتى تصل إلى ما يحتاج التدخل أولًا من دون إغراق بصري.</p>
        </div>
        <span class="tag info">${trainingGroups.filter((group) => group.items.length).length} مجموعات نشطة</span>
      </div>
      <div class="entity-record-stack">
        ${trainingGroups.map((group) => `
          <details class="compact-disclosure entity-group-card" ${(group.key === "attention" || (trainings.length && group.items.length === trainings.length)) ? "open" : ""}>
            <summary>
              <div>
                <strong>${group.label}</strong>
                <div class="entity-summary-meta">
                  <span>${group.description}</span>
                </div>
              </div>
              <div class="entity-tag-stack">
                <span class="tag ${group.tone}">${group.items.length}</span>
              </div>
            </summary>
            <div class="entity-group-grid">
              ${group.items.map((training) => {
                const progress = getTrainingProgress(training);
                const audienceBucket = getTrainingAudienceBucket(training);
                return `
                  <div class="detail-card workspace-card-shell training-card">
                    <div class="record-top">
                      <div>
                        <strong>${training.title}</strong>
                        <div class="workspace-summary-meta">
                          <span>${training.audience}</span>
                          <span>الفجوة ${progress.gap}%</span>
                        </div>
                      </div>
                      <div class="entity-tag-stack">
                        <span class="tag info">${getTrainingAudienceLabel(audienceBucket)}</span>
                        <span class="tag ${progress.tone}">${progress.label}</span>
                      </div>
                    </div>
                    <div class="workspace-kpi-grid training-kpi-grid">
                      <div class="report-mini-kpi">
                        <span>الإنجاز</span>
                        <strong>${progress.percent}%</strong>
                      </div>
                      <div class="report-mini-kpi">
                        <span>المستهدف</span>
                        <strong>${training.completionTarget}%</strong>
                      </div>
                      <div class="report-mini-kpi">
                        <span>المكتملون</span>
                        <strong>${training.completedUsers}</strong>
                      </div>
                      <div class="report-mini-kpi">
                        <span>إجمالي المستهدفين</span>
                        <strong>${training.totalUsers}</strong>
                      </div>
                    </div>
                    <div class="progress workspace-progress"><span style="width:${progress.percent}%"></span></div>
                    <p class="muted">${progress.label === "حقق الهدف" ? "يمكن الاكتفاء بمتابعة دورية خفيفة مع الحفاظ على المستوى." : progress.label === "قريب من الهدف" ? "دفعة متابعة صغيرة قد تكفي للوصول إلى المستهدف." : "هذا البرنامج يحتاج دعماً وتذكيراً وتشجيعاً أكبر لرفع نسبة الالتزام."}</p>
                  </div>
                `;
              }).join("") || `<div class="empty">لا توجد برامج ضمن هذه الحالة في العرض الحالي.</div>`}
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function renderEntitiesPage(user) {
  const missions = user.role === "department"
    ? state.missions.filter((mission) => mission.departmentId === user.departmentId)
    : state.missions;
  const departments = user.role === "department"
    ? state.departments.filter((department) => department.id === user.departmentId)
    : state.departments;
  const {
    visibleDepartments,
    visibleMissions,
    groups: visibleMissionGroups,
    departmentFilter
  } = getFilteredDepartmentMissionCollections({
    departments,
    missions,
    search: state.entitySearch,
    departmentFilter: user.role === "department" ? user.departmentId : state.entityDepartmentFilter
  });
  const missionProfiles = visibleMissions.map((mission) => ({
    mission,
    profile: getMissionReportProfile(mission.id)
  }));
  const averageQuality = missionProfiles.length
    ? (missionProfiles.reduce((sum, item) => sum + Number(item.profile.averageQuality || 0), 0) / missionProfiles.length).toFixed(1)
    : "0.0";
  const overdueRequests = missionProfiles.reduce((sum, item) => sum + item.profile.overdueRequests.length, 0);
  const approvedReports = missionProfiles.reduce((sum, item) => sum + item.profile.approvedCount, 0);
  const pendingDepartmentReviews = missionProfiles.reduce((sum, item) => sum + item.profile.pendingDepartmentCount, 0);
  const autoOpenDepartmentCards = visibleDepartments.length <= 1;
  const autoOpenMissionGroups = visibleMissionGroups.length <= 1 || departmentFilter !== "all";
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">ملفات الجهات</span>
          <h1 class="page-title">ملفات البعثات والدوائر</h1>
          <p class="muted">ملف موحد لكل بعثة أو دائرة يشمل الخطط والتقارير والتعاميم والاجتماعات والتدريب.</p>
        </div>
      </div>
      <div class="report-filter-bar entity-filter-bar">
        <label class="field">
          <span>البحث</span>
          <input id="entity-search" type="search" value="${state.entitySearch || ""}" placeholder="ابحث باسم البعثة أو الدائرة أو اسم المستخدم">
        </label>
        ${departments.length > 1 ? `
          <label class="field">
            <span>الدائرة</span>
            <select id="entity-department-filter">
              <option value="all" ${departmentFilter === "all" ? "selected" : ""}>جميع الدوائر</option>
              ${departments.map((department) => `<option value="${department.id}" ${departmentFilter === department.id ? "selected" : ""}>${department.name}</option>`).join("")}
            </select>
          </label>
        ` : `
          <div class="report-mini-kpi">
            <span>النطاق</span>
            <strong>${departments[0]?.name || "لا توجد دائرة"}</strong>
          </div>
        `}
        <div class="report-mini-kpi">
          <span>الدوائر المعروضة</span>
          <strong>${visibleDepartments.length}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>البعثات المعروضة</span>
          <strong>${visibleMissions.length}</strong>
        </div>
      </div>
      <div class="entity-overview-strip">
        <div class="report-mini-kpi">
          <span>متوسط الجودة</span>
          <strong>${averageQuality}/5</strong>
        </div>
        <div class="report-mini-kpi">
          <span>إجمالي الطلبات المتأخرة</span>
          <strong>${overdueRequests}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>التقارير المعتمدة</span>
          <strong>${approvedReports}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>قيد مراجعة الدوائر</span>
          <strong>${pendingDepartmentReviews}</strong>
        </div>
      </div>
    </section>
    <section class="panel">
      <div class="entity-section-head">
        <div>
          <div class="section-title">ملفات الدوائر</div>
          <p class="mini">عرض مختصر للدوائر مع فتح التفاصيل عند الحاجة لتقليل طول الصفحة.</p>
        </div>
        <span class="tag info">${visibleDepartments.length} دائرة</span>
      </div>
      <div class="entity-record-stack">
      ${visibleDepartments.map((department) => {
        const profile = getDepartmentReportProfile(department.id);
        const missionRows = [...profile.missions].sort((a, b) => (
          b.profile.overdueRequests.length - a.profile.overdueRequests.length
          || Number(a.profile.averageQuality) - Number(b.profile.averageQuality)
        ));
        return `
          <details class="compact-disclosure entity-group-card" ${autoOpenDepartmentCards ? "open" : ""}>
            <summary>
              <div>
                <strong>${department.name}</strong>
                <div class="entity-summary-meta">
                  <span>${profile.missions.length} بعثة</span>
                  <span>متوسط الجودة ${profile.averageQuality}/5</span>
                  <span>اتجاه الجودة ${profile.qualityTrend}</span>
                </div>
              </div>
              <div class="entity-tag-stack">
                <span class="tag ${getQualityTone(profile.averageQuality)}">جودة ${profile.averageQuality}/5</span>
                <span class="tag ${profile.overdueCount ? "danger" : "success"}">${profile.overdueCount ? `متأخر ${profile.overdueCount}` : "لا تأخير"}</span>
              </div>
            </summary>
            <div class="entity-profile-card">
              <div class="entity-kpi-grid">
                <div class="report-mini-kpi">
                  <span>المعتمد</span>
                  <strong>${profile.approvedCount}</strong>
                </div>
                <div class="report-mini-kpi">
                  <span>قيد المراجعة</span>
                  <strong>${profile.pendingDepartmentCount}</strong>
                </div>
                <div class="report-mini-kpi">
                  <span>المعاد للاستكمال</span>
                  <strong>${profile.returnedCount}</strong>
                </div>
                <div class="report-mini-kpi">
                  <span>الطلبات المتأخرة</span>
                  <strong>${profile.overdueCount}</strong>
                </div>
              </div>
              <div class="entity-disclosure-grid">
                <div class="detail-card">
                  <div class="section-title">مقارنة البعثات</div>
                  <div class="detail-list">
                    ${missionRows.map((item) => `
                      <div class="detail-row">
                        <span>${item.mission.name}</span>
                        <span>جودة ${item.profile.averageQuality}/5 | متأخر ${item.profile.overdueRequests.length}</span>
                      </div>
                    `).join("") || `<div class="empty">لا توجد بعثات ضمن هذه الدائرة.</div>`}
                  </div>
                </div>
                <div class="detail-card">
                  <div class="section-title">نقاط انتباه الدائرة</div>
                  <div class="detail-list">
                    <div class="detail-row"><span>الأقل جودة</span><span>${profile.weakestMission ? `${profile.weakestMission.mission.name} (${profile.weakestMission.profile.averageQuality}/5)` : "لا توجد بيانات كافية"}</span></div>
                    <div class="detail-row"><span>الأكثر تأخرًا</span><span>${profile.mostDelayedMission && profile.mostDelayedMission.profile.overdueRequests.length ? `${profile.mostDelayedMission.mission.name} (${profile.mostDelayedMission.profile.overdueRequests.length})` : "لا توجد طلبات متأخرة"}</span></div>
                    <div class="detail-row"><span>التقييم العام</span><span>${Number(profile.averageQuality) >= 4 ? "أداء قوي" : Number(profile.averageQuality) >= 3 ? "أداء متوسط" : "يحتاج متابعة مركزة"}</span></div>
                    <div class="detail-row"><span>اتجاه الجودة</span><span>${profile.qualityTrend}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        `;
      }).join("") || `<div class="empty">لا توجد دوائر مطابقة لخيارات البحث الحالية.</div>`}
      </div>
    </section>
    <section class="panel">
      <div class="entity-section-head">
        <div>
          <div class="section-title">ملفات البعثات</div>
          <p class="mini">تم تجميع البعثات حسب الدائرة مع إبقاء التفاصيل داخل كل بطاقة لتسهيل الوصول السريع.</p>
        </div>
        <span class="tag info">${visibleMissions.length} بعثة</span>
      </div>
      <div class="entity-group-stack">
        ${visibleMissionGroups.map((group) => {
          const groupProfiles = group.missions.map((mission) => ({
            mission,
            profile: getMissionReportProfile(mission.id)
          }));
          const groupAverageQuality = groupProfiles.length
            ? (groupProfiles.reduce((sum, item) => sum + Number(item.profile.averageQuality || 0), 0) / groupProfiles.length).toFixed(1)
            : "0.0";
          const groupOverdueCount = groupProfiles.reduce((sum, item) => sum + item.profile.overdueRequests.length, 0);
          return `
            <details class="compact-disclosure entity-group-card" ${autoOpenMissionGroups ? "open" : ""}>
              <summary>
                <div>
                  <strong>${group.department.name}</strong>
                  <div class="entity-summary-meta">
                    <span>${group.missions.length} بعثة</span>
                    <span>متوسط الجودة ${groupAverageQuality}/5</span>
                    <span>متأخر ${groupOverdueCount}</span>
                  </div>
                </div>
                <div class="entity-tag-stack">
                  <span class="tag ${getQualityTone(groupAverageQuality)}">جودة ${groupAverageQuality}/5</span>
                  <span class="tag ${groupOverdueCount ? "danger" : "success"}">${groupOverdueCount ? `طلبات متأخرة ${groupOverdueCount}` : "مستوى متابعة جيد"}</span>
                </div>
              </summary>
              <div class="entity-group-grid">
                ${groupProfiles.sort((a, b) => a.mission.name.localeCompare(b.mission.name, "ar")).map((item) => `
                  <details class="compact-disclosure entity-inline-card">
                    <summary>
                      <div>
                        <strong>${item.mission.name}</strong>
                        <div class="entity-summary-meta">
                          <span>${item.profile.reports.length} تقرير</span>
                          <span>${item.profile.pendingRequests.length} طلب قيد المتابعة</span>
                        </div>
                      </div>
                      <div class="entity-tag-stack">
                        <span class="tag ${getQualityTone(item.profile.averageQuality)}">جودة ${item.profile.averageQuality}/5</span>
                        <span class="tag ${item.profile.overdueRequests.length ? "danger" : "success"}">${item.profile.overdueRequests.length ? `متأخر ${item.profile.overdueRequests.length}` : "ملتزم"}</span>
                      </div>
                    </summary>
                    <div class="entity-profile-card">
                      <div class="entity-kpi-grid">
                        <div class="report-mini-kpi">
                          <span>المعتمد</span>
                          <strong>${item.profile.approvedCount}</strong>
                        </div>
                        <div class="report-mini-kpi">
                          <span>قيد مراجعة الدائرة</span>
                          <strong>${item.profile.pendingDepartmentCount}</strong>
                        </div>
                        <div class="report-mini-kpi">
                          <span>أعيد للاستكمال</span>
                          <strong>${item.profile.returnedCount}</strong>
                        </div>
                        <div class="report-mini-kpi">
                          <span>طلبات متأخرة</span>
                          <strong>${item.profile.overdueRequests.length}</strong>
                        </div>
                      </div>
                      <div class="entity-disclosure-grid">
                        <div class="detail-card">
                          <div class="section-title">ملخص تشغيلي</div>
                          <div class="detail-list">
                            <div class="detail-row"><span>إجمالي التقارير</span><span>${item.profile.reports.length}</span></div>
                            <div class="detail-row"><span>عدد التعاميم</span><span>${state.circulars.filter((circular) => normalizeMissionIdList(circular.targetMissionIds).includes(item.mission.id)).length}</span></div>
                            <div class="detail-row"><span>حالة الخطة</span><span>${state.plans.find((plan) => plan.ownerId === item.mission.id)?.status || "لا توجد خطة"}</span></div>
                            <div class="detail-row"><span>طلبات التقرير قيد المتابعة</span><span>${item.profile.pendingRequests.length}</span></div>
                          </div>
                        </div>
                        <div class="detail-card">
                          <div class="section-title">آخر حركة تقريرية</div>
                          ${item.profile.latestReport ? `
                            <div class="detail-list">
                              <div class="detail-row"><span>العنوان</span><span>${item.profile.latestReport.title}</span></div>
                              <div class="detail-row"><span>النوع</span><span>${item.profile.latestReport.type}</span></div>
                              <div class="detail-row"><span>المرحلة</span><span>${item.profile.latestReport.workflowStage}</span></div>
                              <div class="detail-row"><span>تاريخ الرفع</span><span>${formatDate(item.profile.latestReport.submittedOn || item.profile.latestReport.activityDate)}</span></div>
                            </div>
                          ` : `<div class="empty">لا توجد تقارير مرفوعة لهذه البعثة بعد.</div>`}
                        </div>
                      </div>
                      <div class="detail-card">
                        <div class="section-title">نقاط انتباه</div>
                        <div class="detail-list">
                          <div class="detail-row"><span>طلبات متأخرة</span><span>${item.profile.overdueRequests.length ? item.profile.overdueRequests.map((request) => request.title).join("، ") : "لا توجد"}</span></div>
                          <div class="detail-row"><span>تقارير معادة</span><span>${item.profile.returnedCount ? `${item.profile.returnedCount} تقرير يحتاج استكمال` : "لا توجد"}</span></div>
                          <div class="detail-row"><span>مستوى الجودة</span><span>${getQualityLabel(item.profile.averageQuality)}</span></div>
                          <div class="detail-row"><span>اتجاه الجودة</span><span>${item.profile.qualityTrend}</span></div>
                        </div>
                      </div>
                    </div>
                  </details>
                `).join("")}
              </div>
            </details>
          `;
        }).join("") || `<div class="empty">لا توجد بعثات مطابقة لخيارات البحث الحالية.</div>`}
      </div>
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
  const metrics = getGovernanceMetrics();
  const filteredAuditEntries = getFilteredAuditLog();
  const scopedRoles = roleRows.reduce((acc, row) => {
    const scope = row[1];
    if (!acc[scope]) acc[scope] = [];
    acc[scope].push(row);
    return acc;
  }, {});

  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">الحوكمة والصلاحيات</span>
          <h1 class="page-title">الحوكمة وسجل التدقيق</h1>
          <p class="muted">تمت إضافة مصفوفة أدوار عملية وسجل تدقيق يعكس متطلبات الوثيقة بشأن الحوكمة والتتبع.</p>
        </div>
      </div>
      <div class="entity-overview-strip workspace-overview-strip">
        <div class="report-mini-kpi">
          <span>إجمالي الأحداث</span>
          <strong>${metrics.total}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>الجلسات</span>
          <strong>${metrics.sessions}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>أحداث التقارير</span>
          <strong>${metrics.reports}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>إدارة الكيانات</span>
          <strong>${metrics.entities}</strong>
        </div>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        <div class="entity-section-head">
          <div>
            <div class="section-title">مصفوفة الأدوار والصلاحيات</div>
            <p class="mini">تم تجميع الأدوار حسب النطاق لتسهيل القراءة السريعة أثناء العرض أو المراجعة الإدارية.</p>
          </div>
        </div>
        <div class="entity-record-stack">
          ${Object.entries(scopedRoles).map(([scope, rows]) => `
            <details class="compact-disclosure management-record-card" ${scope === "وزارة" ? "open" : ""}>
              <summary>
                <div>
                  <strong>${scope}</strong>
                  <div class="entity-summary-meta">
                    <span>${rows.length} أدوار ضمن هذا النطاق</span>
                  </div>
                </div>
                <div class="entity-tag-stack">
                  <span class="tag info">${rows.length} دور</span>
                </div>
              </summary>
              <div class="entity-group-grid">
                ${rows.map((row) => `
                  <div class="detail-card">
                    <strong>${row[0]}</strong>
                    <div class="detail-list">
                      <div class="detail-row"><span>النطاق</span><span>${row[1]}</span></div>
                      <div class="detail-row"><span>أبرز الصلاحيات</span><span>${row[2]}</span></div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </details>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="entity-section-head">
          <div>
            <div class="section-title">سجل التدقيق</div>
            <p class="mini">ابحث في السجل أو صفّه حسب نوع الحدث للوصول إلى الأثر التشغيلي المطلوب بسرعة.</p>
          </div>
          <span class="tag info">${metrics.filtered} نتيجة</span>
        </div>
        <div class="report-filter-bar workspace-filter-bar">
          <label class="field">
            <span>البحث</span>
            <input id="audit-search" type="search" value="${state.auditSearch || ""}" placeholder="ابحث بالفاعل أو الإجراء أو الهدف أو النطاق">
          </label>
          <label class="field">
            <span>نوع الحدث</span>
            <select id="audit-action-filter">
              <option value="all" ${state.auditActionFilter === "all" ? "selected" : ""}>جميع الأحداث</option>
              ${["session", "reports", "circulars", "meetings", "plans", "entities", "other"].map((category) => `<option value="${category}" ${state.auditActionFilter === category ? "selected" : ""}>${getAuditCategoryLabel(category)}</option>`).join("")}
            </select>
          </label>
          <div class="report-mini-kpi">
            <span>آخر تحديث</span>
            <strong>${filteredAuditEntries[0]?.at || "-"}</strong>
          </div>
          <div class="report-mini-kpi">
            <span>المعروض</span>
            <strong>${filteredAuditEntries.length}</strong>
          </div>
        </div>
        <div class="workspace-record-stack">
          ${filteredAuditEntries.slice(0, 20).map((entry) => {
            const category = getAuditCategory(entry.action);
            return `
              <div class="detail-card audit-entry-card">
                <div class="record-top">
                  <div>
                    <strong>${entry.action}</strong>
                    <div class="workspace-summary-meta">
                      <span>${entry.actor}</span>
                      <span>${entry.target}</span>
                    </div>
                  </div>
                  <div class="entity-tag-stack">
                    <span class="tag ${getAuditCategoryTone(category)}">${getAuditCategoryLabel(category)}</span>
                    <span class="tag info">${entry.at}</span>
                  </div>
                </div>
                <div class="detail-list">
                  <div class="detail-row"><span>الفاعل</span><span>${entry.actor}</span></div>
                  <div class="detail-row"><span>الهدف</span><span>${entry.target}</span></div>
                  <div class="detail-row"><span>النطاق</span><span>${entry.scope || "-"}</span></div>
                </div>
              </div>
            `;
          }).join("") || '<div class="empty">لا توجد أحداث مطابقة للفلاتر الحالية.</div>'}
        </div>
      </div>
    </section>
  `;
}

function renderRequestsPage(user) {
  const requests = getFilteredRequestsForDisplay(user);
  const canRequest = canIssueReportRequest(user, "activity") || canIssueReportRequest(user, "periodic");
  const metrics = getRequestExecutiveMetrics(user);
  const requestBoard = groupRequestsForBoard(requests);
  const requestGroups = [
    {
      key: "urgent",
      label: "طلبات تحتاج متابعة عاجلة",
      description: "تشمل الطلبات المتأخرة أو قريبة الاستحقاق أو العالية الأولوية.",
      tone: "danger",
      items: requestBoard.urgent
    },
    {
      key: "active",
      label: "طلبات جارية ضمن المسار",
      description: "طلبات نشطة لكن لا تظهر عليها مؤشرات خطر مباشر الآن.",
      tone: "info",
      items: requestBoard.active
    },
    {
      key: "archive",
      label: "طلبات مكتملة أو مغلقة",
      description: "للاطلاع السريع من دون تمديد الصفحة الرئيسية بالطلبات المنتهية.",
      tone: "success",
      items: requestBoard.archive
    }
  ];
  const renderRequestCard = (request) => {
    const c = getCompletion(request);
    const lifecycle = getRequestLifecycle(request);
    const urgency = getRequestUrgency(request);
    const scopedMissionIds = getRequestMissionIdsForUser(request, user);
    const ownMissionStatus = user.role === "mission" ? getMissionRequestStatus(request.id, user.missionId) : null;
    return `
      <div class="detail-card workspace-card-shell request-board-card">
        <div class="record-top">
          <div>
            <strong>${request.title}</strong>
            <div class="record-meta">${request.requestFamily === "periodic" ? "طلب زمني" : request.requestFamily === "thematic" ? "طلب موضوعي" : "طلب نشاط"} | ${request.type} | الموعد ${formatDate(request.dueDate)}</div>
          </div>
          <span class="tag ${lifecycle.tone}">${lifecycle.label}</span>
        </div>
        <div class="request-chip-row">
          <span class="tag ${getRequestPriorityTone(request.priority)}">${request.priority || "متوسطة"} الأولوية</span>
          <span class="tag ${urgency.tone}">${urgency.label}</span>
          ${request.thematicTrack ? `<span class="tag info">${request.thematicTrack}</span>` : ""}
        </div>
        <div class="workspace-kpi-grid request-kpi-grid">
          <div class="report-mini-kpi">
            <span>نسبة الإنجاز</span>
            <strong>${c.percent}%</strong>
          </div>
          <div class="report-mini-kpi">
            <span>المرفوع</span>
            <strong>${c.done}</strong>
          </div>
          <div class="report-mini-kpi">
            <span>المعتمد</span>
            <strong>${c.approved}</strong>
          </div>
          <div class="report-mini-kpi">
            <span>الجهات المستهدفة</span>
            <strong>${scopedMissionIds.length || c.total}</strong>
          </div>
        </div>
        <div class="progress workspace-progress"><span style="width:${c.percent}%"></span></div>
        <div class="detail-list">
          <div class="detail-row"><span>الجهة الطالبة</span><span>${request.createdBy}</span></div>
          ${user.role === "mission" ? `
            <div class="detail-row"><span>حالة بعثتك</span><span class="tag ${ownMissionStatus.tone}">${ownMissionStatus.label}</span></div>
            <div class="detail-row"><span>البعثة المستهدفة</span><span>${getMissionName(user.missionId)}</span></div>
          ` : `
            <div class="detail-row"><span>النطاق المعروض</span><span>${user.role === "department" ? `${scopedMissionIds.length} بعثة ضمن الدائرة` : `${c.total} بعثة مستهدفة`}</span></div>
            <div class="detail-row"><span>بعثات لم ترفع بعد</span><span>${c.pending}</span></div>
          `}
        </div>
        ${user.role === "mission" ? `
          <p class="muted">يعرض هذا السجل الطلب الوارد إلى بعثتك فقط، مع حالتك الحالية ضمن دورة الإنجاز.</p>
        ` : `
          <details class="compact-disclosure compact-inline-disclosure" ${scopedMissionIds.length <= 4 ? "open" : ""}>
            <summary>
              <span>حالات البعثات المستهدفة</span>
              <span class="tag info">${scopedMissionIds.length}</span>
            </summary>
            <div class="detail-list compact-status-list">
              ${scopedMissionIds.map((missionId) => {
                const missionStatus = getMissionRequestStatus(request.id, missionId);
                return `
                  <div class="detail-row">
                    <span>${getMissionName(missionId)}</span>
                    <span class="tag ${missionStatus.tone}">${missionStatus.label}</span>
                  </div>
                `;
              }).join("") || `<div class="empty">لا توجد بعثات واقعة ضمن نطاق هذا الحساب داخل هذا الطلب.</div>`}
            </div>
          </details>
        `}
      </div>
    `;
  };
  return `
    <section class="panel">
      <div class="topbar">
        <div>
          <span class="tag info">متابعة الإنجاز</span>
          <h1 class="page-title">طلبات التقارير</h1>
          <p class="muted">${canRequest ? "يمكنك إصدار الطلبات ومتابعة الأداء ضمن لوحة مختصرة تبرز ما يحتاج قرارًا أو متابعة قبل أن تتضخم الصفحة." : "يمكنك متابعة الطلبات الواردة ضمن نطاقك مع إبراز ما يحتاج تدخلك أولًا."}</p>
        </div>
        <span class="tag info">${requests.length} طلب ضمن العرض الحالي</span>
      </div>
      <div class="reports-stat-strip">
        <div class="reports-stat-card">
          <span>إجمالي الطلبات</span>
          <strong>${metrics.total}</strong>
        </div>
        <div class="reports-stat-card">
          <span>عالية الأولوية</span>
          <strong>${metrics.highPriority}</strong>
        </div>
        <div class="reports-stat-card">
          <span>قريبة الاستحقاق</span>
          <strong>${metrics.dueSoon}</strong>
        </div>
        <div class="reports-stat-card">
          <span>متأخرة</span>
          <strong>${metrics.overdue}</strong>
        </div>
        <div class="reports-stat-card">
          <span>ضمن الفلترة الحالية</span>
          <strong>${requests.length}</strong>
        </div>
      </div>
    </section>
    <section class="two-col">
      ${canRequest ? renderRequestForm(user) : ""}
      <div class="panel">
        <div class="entity-section-head">
          <div>
            <div class="section-title">سجل الطلبات</div>
            <p class="mini">تم تنظيم الطلبات بحسب الأولوية التشغيلية مع فلاتر تقلل زمن الوصول إلى الطلب المهم.</p>
          </div>
          <span class="tag info">${requests.length} طلب</span>
        </div>
        <div class="report-filter-bar workspace-filter-bar">
          <label class="field">
            <span>البحث</span>
            <input id="request-search" type="search" value="${state.requestSearch || ""}" placeholder="ابحث بعنوان الطلب أو الجهة أو البعثة أو المسار">
          </label>
          <label class="field">
            <span>عائلة الطلب</span>
            <select id="request-family-filter">
              <option value="all" ${state.requestFamilyFilter === "all" ? "selected" : ""}>جميع الطلبات</option>
              <option value="activity" ${state.requestFamilyFilter === "activity" ? "selected" : ""}>طلبات الأنشطة</option>
              <option value="thematic" ${state.requestFamilyFilter === "thematic" ? "selected" : ""}>الطلبات الموضوعية</option>
              <option value="periodic" ${state.requestFamilyFilter === "periodic" ? "selected" : ""}>الطلبات الزمنية</option>
            </select>
          </label>
          <label class="field">
            <span>حالة المتابعة</span>
            <select id="request-status-filter">
              <option value="all" ${state.requestStatusFilter === "all" ? "selected" : ""}>جميع الحالات</option>
              <option value="overdue" ${state.requestStatusFilter === "overdue" ? "selected" : ""}>متأخرة</option>
              <option value="due-soon" ${state.requestStatusFilter === "due-soon" ? "selected" : ""}>قريبة الاستحقاق</option>
              <option value="active" ${state.requestStatusFilter === "active" ? "selected" : ""}>نشطة</option>
              <option value="complete" ${state.requestStatusFilter === "complete" ? "selected" : ""}>مكتملة أو مغلقة</option>
            </select>
          </label>
          <div class="report-mini-kpi">
            <span>النتائج المطابقة</span>
            <strong>${requests.length}</strong>
          </div>
        </div>
        <div class="entity-record-stack workspace-board">
          ${requestGroups.map((group) => `
            <details class="compact-disclosure entity-group-card" ${(group.key === "urgent" || (requests.length && group.items.length === requests.length)) ? "open" : ""}>
              <summary>
                <div>
                  <strong>${group.label}</strong>
                  <div class="entity-summary-meta">
                    <span>${group.description}</span>
                  </div>
                </div>
                <div class="entity-tag-stack">
                  <span class="tag ${group.tone}">${group.items.length}</span>
                </div>
              </summary>
              <div class="entity-record-stack">
                ${group.items.map((request) => renderRequestCard(request)).join("") || `<div class="empty">لا توجد طلبات ضمن هذا القسم في العرض الحالي.</div>`}
              </div>
            </details>
          `).join("") || `<div class="empty">لا توجد طلبات ظاهرة لهذا الحساب.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderRequestForm(user) {
  const availableMissions = user.role === "department"
    ? state.missions.filter((mission) => mission.departmentId === user.departmentId)
    : state.missions;
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
        <label class="field">
          <span>الأولوية</span>
          <select name="priority">
            <option value="عالية">عالية</option>
            <option value="متوسطة" selected>متوسطة</option>
            <option value="عادية">عادية</option>
          </select>
        </label>
        <label class="field full">
          <span>البعثات المستهدفة</span>
          ${renderMissionPicker({
            pickerId: "request",
            missions: availableMissions,
            selectedIds: availableMissions.map((mission) => mission.id),
            helperText: "حدد البعثات المستهدفة من خلال البحث أو اختيار الكل أو الإلغاء."
          })}
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
  const {
    visibleDepartments,
    visibleMissions,
    groups: visibleMissionGroups,
    departmentFilter
  } = getFilteredDepartmentMissionCollections({
    search: state.managementSearch,
    departmentFilter: state.managementDepartmentFilter
  });
  const autoOpenManagementGroups = visibleMissionGroups.length <= 1 || departmentFilter !== "all";
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
    <section class="panel">
      <div class="entity-section-head">
        <div>
          <div class="section-title">دليل الكيانات الحالي</div>
          <p class="mini">تم ضغط القوائم الطويلة في مجموعات قابلة للطي مع بحث مباشر للوصول السريع.</p>
        </div>
        <span class="tag info">${visibleMissions.length} بعثة ضمن العرض الحالي</span>
      </div>
      <div class="report-filter-bar entity-filter-bar">
        <label class="field">
          <span>البحث</span>
          <input id="management-search" type="search" value="${state.managementSearch || ""}" placeholder="ابحث باسم الدائرة أو البعثة أو اسم المستخدم">
        </label>
        <label class="field">
          <span>الدائرة</span>
          <select id="management-department-filter">
            <option value="all" ${departmentFilter === "all" ? "selected" : ""}>جميع الدوائر</option>
            ${state.departments.map((department) => `<option value="${department.id}" ${departmentFilter === department.id ? "selected" : ""}>${department.name}</option>`).join("")}
          </select>
        </label>
        <div class="report-mini-kpi">
          <span>الدوائر الظاهرة</span>
          <strong>${visibleDepartments.length}</strong>
        </div>
        <div class="report-mini-kpi">
          <span>البعثات الظاهرة</span>
          <strong>${visibleMissions.length}</strong>
        </div>
      </div>
    </section>
    <section class="two-col">
      <div class="panel">
        <div class="entity-section-head">
          <div class="section-title">الدوائر الحالية</div>
          <span class="tag info">${visibleDepartments.length} دائرة</span>
        </div>
        <div class="entity-record-stack">
          ${visibleDepartments.map((department) => {
            const departmentMissions = state.missions
              .filter((mission) => mission.departmentId === department.id)
              .sort((a, b) => a.name.localeCompare(b.name, "ar"));
            return `
              <details class="compact-disclosure management-record-card" ${visibleDepartments.length <= 1 ? "open" : ""}>
                <summary>
                  <div>
                    <strong>${department.name}</strong>
                    <div class="entity-summary-meta">
                      <span>اسم المستخدم ${department.username}</span>
                      <span>${departmentMissions.length} بعثة تابعة</span>
                    </div>
                  </div>
                  <div class="entity-tag-stack">
                    <span class="tag info">${departmentMissions.length} بعثة</span>
                  </div>
                </summary>
                <div class="entity-disclosure-grid">
                  <div class="detail-card">
                    <div class="section-title">بيانات الدائرة</div>
                    <div class="detail-list">
                      <div class="detail-row"><span>اسم المستخدم</span><span>${department.username}</span></div>
                      <div class="detail-row"><span>عدد البعثات التابعة</span><span>${departmentMissions.length}</span></div>
                    </div>
                  </div>
                  <div class="detail-card">
                    <div class="section-title">البعثات التابعة</div>
                    <div class="entity-compact-list">
                      ${departmentMissions.map((mission) => `
                        <div class="detail-row">
                          <span>${mission.name}</span>
                          <span>${mission.username}</span>
                        </div>
                      `).join("") || `<div class="empty">لا توجد بعثات تابعة لهذه الدائرة.</div>`}
                    </div>
                  </div>
                </div>
              </details>
            `;
          }).join("") || `<div class="empty">لا توجد دوائر مطابقة للبحث الحالي.</div>`}
        </div>
      </div>
      <div class="panel">
        <div class="entity-section-head">
          <div class="section-title">البعثات الحالية</div>
          <span class="tag info">${visibleMissions.length} بعثة</span>
        </div>
        <div class="entity-group-stack">
          ${visibleMissionGroups.map((group) => `
            <details class="compact-disclosure management-record-card" ${autoOpenManagementGroups ? "open" : ""}>
              <summary>
                <div>
                  <strong>${group.department.name}</strong>
                  <div class="entity-summary-meta">
                    <span>${group.missions.length} بعثة ضمن هذه المجموعة</span>
                  </div>
                </div>
                <div class="entity-tag-stack">
                  <span class="tag info">${group.missions.length} بعثة</span>
                </div>
              </summary>
              <div class="entity-group-grid">
                ${group.missions
                  .slice()
                  .sort((a, b) => a.name.localeCompare(b.name, "ar"))
                  .map((mission) => `
                    <div class="detail-card">
                      <strong>${mission.name}</strong>
                      <div class="detail-list">
                        <div class="detail-row"><span>الدائرة التابعة</span><span>${getDepartmentName(mission.departmentId)}</span></div>
                        <div class="detail-row"><span>اسم المستخدم</span><span>${mission.username}</span></div>
                      </div>
                    </div>
                  `).join("")}
              </div>
            </details>
          `).join("") || `<div class="empty">لا توجد بعثات مطابقة للبحث الحالي.</div>`}
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

  document.querySelectorAll(".demo-login-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const usernameField = document.querySelector('#login-form input[name="username"]');
      const passwordField = document.querySelector('#login-form input[name="password"]');
      if (!usernameField || !passwordField) return;
      usernameField.value = button.dataset.demoUsername || "";
      passwordField.value = button.dataset.demoPassword || "";
      usernameField.focus();
    });
  });

  const toggleLoginPassword = document.getElementById("toggle-login-password");
  const loginPasswordField = document.getElementById("login-password");
  if (toggleLoginPassword && loginPasswordField) {
    toggleLoginPassword.addEventListener("click", () => {
      const isHidden = loginPasswordField.type === "password";
      loginPasswordField.type = isHidden ? "text" : "password";
      toggleLoginPassword.textContent = isHidden ? "إخفاء" : "إظهار";
    });
  }

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
    state.reportActionDialog = null;
    state.circularActionDialog = null;
    saveState();
    renderApp();
  });

  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", resetState);

  document.querySelectorAll("[data-dismiss-alert]").forEach((button) => {
    button.addEventListener("click", () => {
      dismissAlert(button.dataset.dismissAlert);
    });
  });

  const reportForm = document.getElementById("report-form");
  if (reportForm) reportForm.addEventListener("submit", handleReportSubmit);

  const reportFamily = document.getElementById("report-family");
  const reportType = document.querySelector('#report-form select[name="type"]');
  const thematicTrack = document.querySelector('#report-form select[name="thematicTrack"]');
  const reportRequestId = document.getElementById("report-request-id");
  const reportRequestGuidance = document.getElementById("report-request-guidance");
  const reportFormPanels = document.querySelectorAll("[data-report-form-panel]");
  const reportFormStepButtons = document.querySelectorAll("[data-report-form-step]");
  const periodicFormTabButtons = document.querySelectorAll("[data-periodic-form-tab]");
  if (reportFamily && reportType && thematicTrack) {
    const periodicCoverageBadge = document.getElementById("periodic-coverage-badge");
    const periodicProgressBadge = document.getElementById("periodic-progress-badge");
    const periodicTypeTitle = document.getElementById("periodic-type-title");
    const periodicTypeDescription = document.getElementById("periodic-type-description");
    const periodicTypeEmphasis = document.getElementById("periodic-type-emphasis");
    const periodicQualityType = document.getElementById("periodic-quality-type");
    const periodicQualityProgress = document.getElementById("periodic-quality-progress");
    const periodicQualityBar = document.getElementById("periodic-quality-bar");
    const periodicReviewCoverage = document.getElementById("periodic-review-coverage");
    const periodicReviewReadiness = document.getElementById("periodic-review-readiness");
    const periodicReviewMissing = document.getElementById("periodic-review-missing");
    const thematicTrackTitle = document.getElementById("thematic-track-title");
    const thematicTrackDescription = document.getElementById("thematic-track-description");
    const thematicTrackBadge = document.getElementById("thematic-track-badge");
    const thematicProgressBadge = document.getElementById("thematic-progress-badge");
    const thematicQualityType = document.getElementById("thematic-quality-type");
    const thematicQualityProgress = document.getElementById("thematic-quality-progress");
    const thematicQualityBar = document.getElementById("thematic-quality-bar");
    const thematicReviewTrack = document.getElementById("thematic-review-track");
    const thematicReviewReadiness = document.getElementById("thematic-review-readiness");
    const thematicReviewMissing = document.getElementById("thematic-review-missing");
    const activityQualityType = document.getElementById("activity-quality-type");
    const activityQualityProgress = document.getElementById("activity-quality-progress");
    const activityQualityBar = document.getElementById("activity-quality-bar");
    const activityReviewCategory = document.getElementById("activity-review-category");
    const activityReviewReadiness = document.getElementById("activity-review-readiness");
    const activityReviewMissing = document.getElementById("activity-review-missing");
    const thematicLabels = {
      situation: document.getElementById("thematic-label-situation"),
      developments: document.getElementById("thematic-label-developments"),
      stakeholders: document.getElementById("thematic-label-stakeholders"),
      implications: document.getElementById("thematic-label-implications"),
      risks: document.getElementById("thematic-label-risks"),
      action: document.getElementById("thematic-label-action"),
      recommendations: document.getElementById("thematic-label-recommendations")
    };
    const updatePeriodicInsights = () => {
      const draft = buildPeriodicDraft(new FormData(reportForm));
      const guidance = getPeriodicTypeGuidance(reportType.value);
      const completion = getPeriodicCompletion(draft);
      if (periodicTypeTitle) periodicTypeTitle.textContent = guidance.label;
      if (periodicTypeDescription) periodicTypeDescription.textContent = guidance.description;
      if (periodicTypeEmphasis) periodicTypeEmphasis.textContent = guidance.emphasis;
      if (periodicQualityType) periodicQualityType.textContent = guidance.label;
      if (periodicCoverageBadge) periodicCoverageBadge.textContent = getPeriodicCoverageLabel(draft);
      if (periodicProgressBadge) {
        periodicProgressBadge.textContent = `اكتمال ${completion.completed}/${completion.total}`;
        periodicProgressBadge.className = `tag ${completion.percent === 100 ? "success" : "warning"}`;
      }
      if (periodicQualityProgress) {
        periodicQualityProgress.textContent = `جاهزية ${completion.percent}%`;
        periodicQualityProgress.className = `tag ${completion.percent === 100 ? "success" : "warning"}`;
      }
      if (periodicQualityBar) periodicQualityBar.style.width = `${completion.percent}%`;
      if (periodicReviewCoverage) periodicReviewCoverage.textContent = getPeriodicCoverageLabel(draft);
      if (periodicReviewReadiness) periodicReviewReadiness.textContent = `${completion.completed}/${completion.total} تبويبات مكتملة`;
      if (periodicReviewMissing) periodicReviewMissing.textContent = completion.missing.length ? completion.missing.map((section) => section.label).join("، ") : "لا توجد نواقص";
      document.querySelectorAll("[data-periodic-status]").forEach((item) => {
        const section = completion.sections.find((entry) => entry.key === item.dataset.periodicStatus);
        if (!section) return;
        item.classList.toggle("complete", section.complete);
        const note = item.querySelector("span");
        if (note) note.textContent = section.complete ? "مكتمل" : "يحتاج استكمال";
      });
    };
    const updateThematicInsights = () => {
      const draft = buildThematicDraft(new FormData(reportForm));
      const completion = getThematicCompletion(draft);
      if (thematicTrackTitle) thematicTrackTitle.textContent = completion.config.title;
      if (thematicTrackDescription) thematicTrackDescription.textContent = completion.config.description;
      if (thematicTrackBadge) thematicTrackBadge.textContent = draft.thematicTrack || "سياسي";
      if (thematicProgressBadge) {
        thematicProgressBadge.textContent = `اكتمال ${completion.completed}/${completion.total}`;
        thematicProgressBadge.className = `tag ${completion.percent === 100 ? "success" : "warning"}`;
      }
      if (thematicQualityType) thematicQualityType.textContent = draft.thematicTrack || "سياسي";
      if (thematicQualityProgress) {
        thematicQualityProgress.textContent = `جاهزية ${completion.percent}%`;
        thematicQualityProgress.className = `tag ${completion.percent === 100 ? "success" : "warning"}`;
      }
      if (thematicQualityBar) thematicQualityBar.style.width = `${completion.percent}%`;
      if (thematicReviewTrack) thematicReviewTrack.textContent = draft.thematicTrack || "سياسي";
      if (thematicReviewReadiness) thematicReviewReadiness.textContent = `${completion.completed}/${completion.total} محاور مكتملة`;
      if (thematicReviewMissing) thematicReviewMissing.textContent = completion.missing.length ? completion.missing.map((section) => section.label).join("، ") : "لا توجد نواقص";
      if (thematicLabels.situation) thematicLabels.situation.textContent = completion.config.labels.situation;
      if (thematicLabels.developments) thematicLabels.developments.textContent = completion.config.labels.developments;
      if (thematicLabels.stakeholders) thematicLabels.stakeholders.textContent = completion.config.labels.stakeholders;
      if (thematicLabels.implications) thematicLabels.implications.textContent = completion.config.labels.implications;
      if (thematicLabels.risks) thematicLabels.risks.textContent = completion.config.labels.risks;
      if (thematicLabels.action) thematicLabels.action.textContent = completion.config.labels.missionAction;
      if (thematicLabels.recommendations) thematicLabels.recommendations.textContent = completion.config.labels.recommendations;
      document.querySelectorAll("[data-thematic-status]").forEach((item) => {
        const section = completion.sections.find((entry) => entry.key === item.dataset.thematicStatus);
        if (!section) return;
        item.classList.toggle("complete", section.complete);
        const note = item.querySelector("span");
        if (note) note.textContent = section.complete ? "مكتمل" : "يحتاج استكمال";
      });
    };
    const updateActivityInsights = () => {
      const draft = buildActivityDraft(new FormData(reportForm));
      const completion = getActivityCompletion(draft);
      if (activityQualityType) activityQualityType.textContent = draft.activityCategory || "لم يحدد بعد";
      if (activityQualityProgress) {
        activityQualityProgress.textContent = `جاهزية ${completion.percent}%`;
        activityQualityProgress.className = `tag ${completion.percent === 100 ? "success" : "warning"}`;
      }
      if (activityQualityBar) activityQualityBar.style.width = `${completion.percent}%`;
      if (activityReviewCategory) activityReviewCategory.textContent = draft.activityCategory || "لم يحدد بعد";
      if (activityReviewReadiness) activityReviewReadiness.textContent = `${completion.completed}/${completion.total} محاور مكتملة`;
      if (activityReviewMissing) activityReviewMissing.textContent = completion.missing.length ? completion.missing.map((section) => section.label).join("، ") : "لا توجد نواقص";
      document.querySelectorAll("[data-activity-status]").forEach((item) => {
        const section = completion.sections.find((entry) => entry.key === item.dataset.activityStatus);
        if (!section) return;
        item.classList.toggle("complete", section.complete);
        const note = item.querySelector("span");
        if (note) note.textContent = section.complete ? "مكتمل" : "يحتاج استكمال";
      });
    };
    const updateReportSections = () => {
      const value = reportFamily.value;
      const currentType = reportType.dataset.currentType || reportType.value;
      reportType.innerHTML = REPORT_TYPE_OPTIONS[value].map((item) => `<option ${currentType === item ? "selected" : ""}>${item}</option>`).join("");
      reportType.dataset.currentType = reportType.value;
      thematicTrack.disabled = value !== "thematic";
      if (value !== "thematic") thematicTrack.value = "";
      if (reportRequestId) {
        const currentRequestId = reportRequestId.value || reportRequestId.dataset.currentRequestId || "";
        let selectedStillVisible = false;
        Array.from(reportRequestId.options).forEach((option) => {
          if (!option.value) {
            option.hidden = false;
            option.disabled = false;
            return;
          }
          const matchesFamily = option.dataset.requestFamily === value;
          option.hidden = !matchesFamily;
          option.disabled = !matchesFamily;
          if (matchesFamily && option.value === currentRequestId) {
            selectedStillVisible = true;
          }
        });
        if (value === "periodic") {
          if (selectedStillVisible) {
            reportRequestId.value = currentRequestId;
          } else {
            const firstMatching = Array.from(reportRequestId.options).find((option) => option.value && option.dataset.requestFamily === value);
            reportRequestId.value = firstMatching ? firstMatching.value : "";
          }
        } else if (!selectedStillVisible && reportRequestId.value && reportRequestId.selectedOptions[0]?.dataset.requestFamily !== value) {
          reportRequestId.value = "";
        }
      }
      if (reportRequestGuidance) {
        reportRequestGuidance.textContent = value === "periodic"
          ? "في التقارير الزمنية يجب اختيار الطلب الرسمي الوارد للبعثة قبل الرفع."
          : "في تقارير النشاط والتقارير الموضوعية يمكن ترك الطلب المرتبط فارغًا إذا كان التقرير مبادرة من البعثة.";
      }
      document.querySelectorAll(".report-family-section").forEach((section) => {
        const matches = section.dataset.family === value;
        section.style.display = matches ? "" : "none";
        section.querySelectorAll("input, select, textarea").forEach((field) => {
          if (field === thematicTrack) return;
          field.disabled = !matches && !field.closest(".report-core-field");
          const requiredFamilies = (field.dataset.requiredFamilies || field.closest("[data-required-families]")?.dataset.requiredFamilies || "").split(",").map((item) => item.trim()).filter(Boolean);
          if (requiredFamilies.length) {
            field.required = matches && requiredFamilies.includes(value);
          }
        });
      });
      document.querySelectorAll("[data-required-families]").forEach((wrapper) => {
        const field = wrapper.querySelector("input, select, textarea");
        if (!field) return;
        const requiredFamilies = wrapper.dataset.requiredFamilies.split(",").map((item) => item.trim());
        field.required = requiredFamilies.includes(value);
      });
      document.querySelectorAll("[data-periodic-form-panel]").forEach((panel) => {
        const active = panel.dataset.periodicFormPanel === state.periodicFormTab;
        panel.classList.toggle("active", active);
      });
      reportFormPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.reportFormPanel === state.reportFormStep);
      });
      updatePeriodicInsights();
      updateThematicInsights();
      updateActivityInsights();
    };
    reportFamily.addEventListener("change", updateReportSections);
    reportType.addEventListener("change", () => {
      reportType.dataset.currentType = reportType.value;
      updatePeriodicInsights();
    });
    reportFormStepButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.reportFormStep = button.dataset.reportFormStep;
        saveState();
        reportFormPanels.forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.reportFormPanel === state.reportFormStep);
        });
        reportFormStepButtons.forEach((chip) => {
          chip.classList.toggle("active", chip.dataset.reportFormStep === state.reportFormStep);
        });
      });
    });
    periodicFormTabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.periodicFormTab = button.dataset.periodicFormTab;
        saveState();
        periodicFormTabButtons.forEach((chip) => {
          chip.classList.toggle("active", chip.dataset.periodicFormTab === state.periodicFormTab);
        });
        document.querySelectorAll("[data-periodic-form-panel]").forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.periodicFormPanel === state.periodicFormTab);
        });
      });
    });
    reportForm.addEventListener("input", () => {
      updatePeriodicInsights();
      updateThematicInsights();
      updateActivityInsights();
    });
    reportForm.addEventListener("change", () => {
      updatePeriodicInsights();
      updateThematicInsights();
      updateActivityInsights();
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

  const circularCategory = document.getElementById("circular-category");
  const circularPriority = document.getElementById("circular-priority");
  const circularSummary = document.getElementById("circular-summary");
  const circularBody = document.getElementById("circular-body");
  const circularActionRequired = document.getElementById("circular-action-required");
  const circularGuidanceTitle = document.getElementById("circular-guidance-title");
  const circularGuidanceTag = document.getElementById("circular-guidance-tag");
  const circularGuidanceDescription = document.getElementById("circular-guidance-description");
  const circularGuidanceUseCases = document.getElementById("circular-guidance-use-cases");
  const circularGuidanceResponse = document.getElementById("circular-guidance-response");
  if (circularCategory) {
    const applyCircularCategoryGuidance = () => {
      const config = getCircularCategoryConfig(circularCategory.value);
      if (!state.editingCircularId && circularPriority) circularPriority.value = config.recommendedPriority;
      if (circularSummary) circularSummary.placeholder = config.summaryHint;
      if (circularBody) circularBody.placeholder = config.bodyHint;
      if (circularActionRequired) circularActionRequired.placeholder = config.actionHint;
      if (circularGuidanceTitle) circularGuidanceTitle.textContent = `دليل ${circularCategory.value}`;
      if (circularGuidanceTag) circularGuidanceTag.textContent = circularCategory.value;
      if (circularGuidanceDescription) circularGuidanceDescription.textContent = config.description;
      if (circularGuidanceUseCases) circularGuidanceUseCases.textContent = config.useCases;
      if (circularGuidanceResponse) circularGuidanceResponse.textContent = config.responseExpectation;
    };
    circularCategory.addEventListener("change", applyCircularCategoryGuidance);
    applyCircularCategoryGuidance();
  }

  document.querySelectorAll("[data-mission-picker-id]").forEach((picker) => {
    const pickerId = picker.dataset.missionPickerId;
    const searchInput = picker.querySelector(`.mission-picker-search[data-picker-id="${pickerId}"]`);
    const countNode = picker.querySelector(`#mission-picker-count-${pickerId}`);
    const checkboxes = [...picker.querySelectorAll(`input[name="missionId"]`)];
    const groups = [...picker.querySelectorAll("[data-picker-group]")];
    const updatePickerCount = () => {
      if (countNode) countNode.textContent = `${checkboxes.filter((input) => input.checked).length} من ${checkboxes.length}`;
    };
    const applyPickerFilter = () => {
      const search = String(searchInput?.value || "").trim().toLowerCase();
      picker.querySelectorAll("[data-mission-chip]").forEach((chip) => {
        const haystack = String(chip.dataset.searchText || "");
        chip.hidden = Boolean(search) && !haystack.includes(search);
      });
      groups.forEach((group) => {
        const visibleCount = group.querySelectorAll("[data-mission-chip]:not([hidden])").length;
        group.hidden = visibleCount === 0;
        const countBadge = group.querySelector("[data-mission-group-count]");
        if (countBadge) countBadge.textContent = String(visibleCount);
      });
    };
    if (searchInput) {
      searchInput.addEventListener("input", applyPickerFilter);
      applyPickerFilter();
    }
    checkboxes.forEach((input) => input.addEventListener("change", updatePickerCount));
    updatePickerCount();
  });

  document.querySelectorAll("[data-mission-picker-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const pickerId = button.dataset.pickerId;
      const picker = document.querySelector(`[data-mission-picker-id="${pickerId}"]`);
      if (!picker) return;
      const checked = button.dataset.missionPickerAction === "select-all";
      picker.querySelectorAll('input[name="missionId"]').forEach((input) => {
        input.checked = checked;
      });
      const countNode = picker.querySelector(`#mission-picker-count-${pickerId}`);
      const checkboxes = [...picker.querySelectorAll('input[name="missionId"]')];
      if (countNode) countNode.textContent = `${checkboxes.filter((input) => input.checked).length} من ${checkboxes.length}`;
    });
  });

  const circularSearch = document.getElementById("circular-search");
  if (circularSearch) {
    const applyCircularSearch = () => {
      state.circularSearch = circularSearch.value;
      saveState();
      renderApp();
    };
    circularSearch.addEventListener("change", applyCircularSearch);
    circularSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyCircularSearch();
      }
    });
  }

  const circularStatusFilter = document.getElementById("circular-status-filter");
  if (circularStatusFilter) {
    circularStatusFilter.addEventListener("change", () => {
      state.circularStatusFilter = circularStatusFilter.value;
      saveState();
      renderApp();
    });
  }

  const circularCategoryFilter = document.getElementById("circular-category-filter");
  if (circularCategoryFilter) {
    circularCategoryFilter.addEventListener("change", () => {
      state.circularCategoryFilter = circularCategoryFilter.value;
      saveState();
      renderApp();
    });
  }

  const circularPriorityFilter = document.getElementById("circular-priority-filter");
  if (circularPriorityFilter) {
    circularPriorityFilter.addEventListener("change", () => {
      state.circularPriorityFilter = circularPriorityFilter.value;
      saveState();
      renderApp();
    });
  }

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

  document.querySelectorAll("[data-report-family-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportRegistryTab = button.dataset.reportFamilyTab;
      const visibleReports = getRegistryReports(getSessionUser());
      state.selectedReportId = visibleReports[0]?.id || null;
      saveState();
      renderApp();
    });
  });

  const reportSearch = document.getElementById("report-search");
  if (reportSearch) {
    const applyReportSearch = () => {
      state.reportSearch = reportSearch.value;
      const visibleReports = getRegistryReports(getSessionUser());
      state.selectedReportId = visibleReports.find((item) => item.id === state.selectedReportId)?.id || visibleReports[0]?.id || null;
      saveState();
      renderApp();
    };
    reportSearch.addEventListener("change", applyReportSearch);
    reportSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyReportSearch();
      }
    });
  }

  const reportStageFilter = document.getElementById("report-stage-filter");
  if (reportStageFilter) {
    reportStageFilter.addEventListener("change", () => {
      state.reportStageFilter = reportStageFilter.value;
      const visibleReports = getRegistryReports(getSessionUser());
      state.selectedReportId = visibleReports[0]?.id || null;
      saveState();
      renderApp();
    });
  }

  const reportMissionFilter = document.getElementById("report-mission-filter");
  if (reportMissionFilter) {
    reportMissionFilter.addEventListener("change", () => {
      state.reportMissionFilter = reportMissionFilter.value;
      const visibleReports = getRegistryReports(getSessionUser());
      state.selectedReportId = visibleReports[0]?.id || null;
      saveState();
      renderApp();
    });
  }

  const reportSort = document.getElementById("report-sort");
  if (reportSort) {
    reportSort.addEventListener("change", () => {
      state.reportSort = reportSort.value;
      const visibleReports = getRegistryReports(getSessionUser());
      state.selectedReportId = visibleReports[0]?.id || null;
      saveState();
      renderApp();
    });
  }

  const entitySearch = document.getElementById("entity-search");
  if (entitySearch) {
    const applyEntitySearch = () => {
      state.entitySearch = entitySearch.value;
      saveState();
      renderApp();
    };
    entitySearch.addEventListener("change", applyEntitySearch);
    entitySearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyEntitySearch();
      }
    });
  }

  const entityDepartmentFilter = document.getElementById("entity-department-filter");
  if (entityDepartmentFilter) {
    entityDepartmentFilter.addEventListener("change", () => {
      state.entityDepartmentFilter = entityDepartmentFilter.value;
      saveState();
      renderApp();
    });
  }

  const managementSearch = document.getElementById("management-search");
  if (managementSearch) {
    const applyManagementSearch = () => {
      state.managementSearch = managementSearch.value;
      saveState();
      renderApp();
    };
    managementSearch.addEventListener("change", applyManagementSearch);
    managementSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyManagementSearch();
      }
    });
  }

  const managementDepartmentFilter = document.getElementById("management-department-filter");
  if (managementDepartmentFilter) {
    managementDepartmentFilter.addEventListener("change", () => {
      state.managementDepartmentFilter = managementDepartmentFilter.value;
      saveState();
      renderApp();
    });
  }

  const meetingSearch = document.getElementById("meeting-search");
  if (meetingSearch) {
    const applyMeetingSearch = () => {
      state.meetingSearch = meetingSearch.value;
      saveState();
      renderApp();
    };
    meetingSearch.addEventListener("change", applyMeetingSearch);
    meetingSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyMeetingSearch();
      }
    });
  }

  const meetingDepartmentFilter = document.getElementById("meeting-department-filter");
  if (meetingDepartmentFilter) {
    meetingDepartmentFilter.addEventListener("change", () => {
      state.meetingDepartmentFilter = meetingDepartmentFilter.value;
      saveState();
      renderApp();
    });
  }

  const meetingStatusFilter = document.getElementById("meeting-status-filter");
  if (meetingStatusFilter) {
    meetingStatusFilter.addEventListener("change", () => {
      state.meetingStatusFilter = meetingStatusFilter.value;
      saveState();
      renderApp();
    });
  }

  const planSearch = document.getElementById("plan-search");
  if (planSearch) {
    const applyPlanSearch = () => {
      state.planSearch = planSearch.value;
      saveState();
      renderApp();
    };
    planSearch.addEventListener("change", applyPlanSearch);
    planSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyPlanSearch();
      }
    });
  }

  const planStatusFilter = document.getElementById("plan-status-filter");
  if (planStatusFilter) {
    planStatusFilter.addEventListener("change", () => {
      state.planStatusFilter = planStatusFilter.value;
      saveState();
      renderApp();
    });
  }

  const planOwnerFilter = document.getElementById("plan-owner-filter");
  if (planOwnerFilter) {
    planOwnerFilter.addEventListener("change", () => {
      state.planOwnerFilter = planOwnerFilter.value;
      saveState();
      renderApp();
    });
  }

  const requestSearch = document.getElementById("request-search");
  if (requestSearch) {
    const applyRequestSearch = () => {
      state.requestSearch = requestSearch.value;
      saveState();
      renderApp();
    };
    requestSearch.addEventListener("change", applyRequestSearch);
    requestSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyRequestSearch();
      }
    });
  }

  const requestFamilyFilter = document.getElementById("request-family-filter");
  if (requestFamilyFilter) {
    requestFamilyFilter.addEventListener("change", () => {
      state.requestFamilyFilter = requestFamilyFilter.value;
      saveState();
      renderApp();
    });
  }

  const requestStatusFilter = document.getElementById("request-status-filter");
  if (requestStatusFilter) {
    requestStatusFilter.addEventListener("change", () => {
      state.requestStatusFilter = requestStatusFilter.value;
      saveState();
      renderApp();
    });
  }

  const trainingSearch = document.getElementById("training-search");
  if (trainingSearch) {
    const applyTrainingSearch = () => {
      state.trainingSearch = trainingSearch.value;
      saveState();
      renderApp();
    };
    trainingSearch.addEventListener("change", applyTrainingSearch);
    trainingSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyTrainingSearch();
      }
    });
  }

  const trainingAudienceFilter = document.getElementById("training-audience-filter");
  if (trainingAudienceFilter) {
    trainingAudienceFilter.addEventListener("change", () => {
      state.trainingAudienceFilter = trainingAudienceFilter.value;
      saveState();
      renderApp();
    });
  }

  const trainingStatusFilter = document.getElementById("training-status-filter");
  if (trainingStatusFilter) {
    trainingStatusFilter.addEventListener("change", () => {
      state.trainingStatusFilter = trainingStatusFilter.value;
      saveState();
      renderApp();
    });
  }

  const auditSearch = document.getElementById("audit-search");
  if (auditSearch) {
    const applyAuditSearch = () => {
      state.auditSearch = auditSearch.value;
      saveState();
      renderApp();
    };
    auditSearch.addEventListener("change", applyAuditSearch);
    auditSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyAuditSearch();
      }
    });
  }

  const auditActionFilter = document.getElementById("audit-action-filter");
  if (auditActionFilter) {
    auditActionFilter.addEventListener("change", () => {
      state.auditActionFilter = auditActionFilter.value;
      saveState();
      renderApp();
    });
  }

  document.querySelectorAll("[data-periodic-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.periodicReportTab = button.dataset.periodicTab;
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll(".report-action").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "approve" || button.dataset.action === "return") {
        openReportActionDialog(button.dataset.reportId, button.dataset.action, button.dataset.stage);
        return;
      }
      handleReportAction(button.dataset.reportId, button.dataset.action, button.dataset.stage);
    });
  });

  const reportActionForm = document.getElementById("report-action-form");
  if (reportActionForm) reportActionForm.addEventListener("submit", handleReportActionFormSubmit);

  document.querySelectorAll("[data-close-report-dialog]").forEach((button) => {
    button.addEventListener("click", closeReportActionDialog);
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
      if (button.dataset.action === "mark-complete" || button.dataset.action === "close") {
        openCircularActionDialog(button.dataset.circularId, button.dataset.action);
        return;
      }
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

  const circularActionForm = document.getElementById("circular-action-form");
  if (circularActionForm) circularActionForm.addEventListener("submit", handleCircularActionFormSubmit);

  document.querySelectorAll("[data-close-circular-dialog]").forEach((button) => {
    button.addEventListener("click", closeCircularActionDialog);
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
  state.reportActionDialog = null;
  state.circularActionDialog = null;
  logAudit(user.name, "تسجيل الدخول", "جلسة النظام", user.role === "mission" ? getMissionName(user.missionId) : user.role === "department" ? getDepartmentName(user.departmentId) : "وزارة");
  saveState();
  renderApp();
}

function handleReportSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  if (!user || user.role !== "mission") {
    addAlert("danger", "تعذر رفع التقرير", "رفع التقارير محصور بحسابات البعثات ضمن هذه النسخة.");
    saveState();
    renderApp();
    return;
  }
  const form = new FormData(event.currentTarget);
  const editingReport = state.reports.find((item) => item.id === state.editingReportId && item.missionId === user.missionId);
  if (editingReport && !canEditReport(editingReport, user)) {
    addAlert("danger", "تعذر تعديل التقرير", "لا يمكن تعديل التقرير بعد دخوله مرحلة المراجعة أو بعد اعتماده، ويجب أن يمر عبر المسار المؤسسي المعتمد.");
    state.editingReportId = null;
    saveState();
    renderApp();
    return;
  }
  const previousRequestId = editingReport?.requestId || "";
  const requestId = String(form.get("requestId") || "");
  const linkedRequest = state.reportRequests.find((item) => item.id === requestId);
  const proposedFamily = String(form.get("reportFamily") || "activity");
  const currentFamily = editingReport ? inferReportFamily(editingReport) : "";
  const resolvedFamily = linkedRequest ? linkedRequest.requestFamily : proposedFamily;
  const isActivitySubmission = resolvedFamily === "activity" || currentFamily === "activity";
  const isPeriodicSubmission = resolvedFamily === "periodic" || currentFamily === "periodic";
  const isThematicSubmission = resolvedFamily === "thematic" || currentFamily === "thematic";
  if (!linkedRequest && requestId) {
    addAlert("danger", "تعذر رفع التقرير", "الطلب المرتبط غير صحيح أو لم يعد ظاهرًا ضمن نطاق هذه البعثة.");
    saveState();
    renderApp();
    return;
  }
  if (linkedRequest && linkedRequest.requestFamily !== proposedFamily) {
    addAlert("danger", "تعذر رفع التقرير", "لا يمكن ربط التقرير بطلب يخص عائلة مختلفة من التقارير.");
    saveState();
    renderApp();
    return;
  }
  if (linkedRequest && !linkedRequest.targetMissionIds.includes(user.missionId)) {
    addAlert("danger", "تعذر رفع التقرير", "لا يمكن ربط التقرير بطلب لا يستهدف هذه البعثة.");
    saveState();
    renderApp();
    return;
  }
  if (isPeriodicSubmission && !linkedRequest) {
    addAlert("danger", "تعذر رفع التقرير", "التقارير الزمنية لا تُرفع إلا استجابة لطلب رسمي صادر من الجهات القيادية.");
    saveState();
    renderApp();
    return;
  }
  const periodicDraft = buildPeriodicDraft(form);
  const thematicDraft = buildThematicDraft(form);
  const activityDraft = buildActivityDraft(form);
  if (isActivitySubmission) {
    const activityCompletion = getActivityCompletion(activityDraft);
    if (activityCompletion.missing.length) {
      addAlert("danger", "تعذر رفع التقرير", `لا يمكن رفع تقرير النشاط قبل استكمال المحاور التالية: ${activityCompletion.missing.map((section) => section.label).join("، ")}.`);
      saveState();
      renderApp();
      return;
    }
  }
  if (isPeriodicSubmission) {
    if (!hasMeaningfulValue(periodicDraft.reportingYear) || !hasMeaningfulValue(periodicDraft.coverageFrom) || !hasMeaningfulValue(periodicDraft.coverageTo)) {
      addAlert("danger", "تعذر رفع التقرير", "يجب استكمال سنة التقرير ونطاق التغطية الزمنية للتقرير السنوي أو النصف سنوي.");
      saveState();
      renderApp();
      return;
    }
    if (periodicDraft.coverageTo < periodicDraft.coverageFrom) {
      addAlert("danger", "تعذر رفع التقرير", "تاريخ نهاية التغطية يجب أن يكون لاحقًا أو مساويًا لتاريخ البداية.");
      saveState();
      renderApp();
      return;
    }
    const coverageYearFrom = periodicDraft.coverageFrom.slice(0, 4);
    const coverageYearTo = periodicDraft.coverageTo.slice(0, 4);
    if (periodicDraft.reportingYear !== coverageYearFrom && periodicDraft.reportingYear !== coverageYearTo) {
      addAlert("danger", "تعذر رفع التقرير", "سنة التقرير يجب أن تتسق مع نطاق التغطية الزمنية المحدد.");
      saveState();
      renderApp();
      return;
    }
    const periodicCompletion = getPeriodicCompletion(periodicDraft);
    if (periodicCompletion.missing.length) {
      addAlert("danger", "تعذر رفع التقرير", `لا يمكن رفع التقرير الزمني قبل استكمال التبويبات التالية: ${periodicCompletion.missing.map((section) => section.label).join("، ")}.`);
      saveState();
      renderApp();
      return;
    }
  }
  if (isThematicSubmission) {
    const thematicCompletion = getThematicCompletion(thematicDraft);
    if (thematicCompletion.missing.length) {
      addAlert("danger", "تعذر رفع التقرير", `لا يمكن رفع التقرير الموضوعي قبل استكمال المحاور التالية: ${thematicCompletion.missing.map((section) => section.label).join("، ")}.`);
      saveState();
      renderApp();
      return;
    }
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
  Object.assign(report, {
    reportFamily: resolvedFamily,
    title: String(form.get("title")),
    type: linkedRequest ? linkedRequest.type : String(form.get("type")),
    thematicTrack: linkedRequest && linkedRequest.requestFamily === "thematic" ? linkedRequest.thematicTrack : String(form.get("thematicTrack")),
    requestId,
    activityDate: String(form.get("activityDate")),
    summary: String(form.get("summary")),
    activityCategory: String(form.get("activityCategory") || ""),
    activityPartners: String(form.get("activityPartners") || ""),
    beforeGoals: String(form.get("beforeGoals")),
    beforeExpected: String(form.get("beforeExpected")),
    activityOutputs: String(form.get("activityOutputs") || ""),
    activityMediaEcho: String(form.get("activityMediaEcho") || ""),
    activityDiplomaticImpact: String(form.get("activityDiplomaticImpact") || ""),
    afterResults: String(form.get("afterResults")),
    afterRecommendations: String(form.get("afterRecommendations")),
    activityFollowupOwner: String(form.get("activityFollowupOwner") || ""),
    attachmentName: String(form.get("attachmentName")),
    countrySnapshot: String(form.get("countrySnapshot") || ""),
    bilateralAssessment: String(form.get("bilateralAssessment") || ""),
    supportCooperation: String(form.get("supportCooperation") || ""),
    agreementsStatus: String(form.get("activeAgreements") || form.get("agreementsStatus") || ""),
    activeAgreements: String(form.get("activeAgreements") || ""),
    agreementsNeedingActivation: String(form.get("agreementsNeedingActivation") || ""),
    completedActivities: String(form.get("completedActivities") || ""),
    pendingActivities: String(form.get("pendingActivities") || ""),
    relationshipOutlook: String(form.get("relationshipOutlook") || ""),
    visitsSummary: String(form.get("visitsFromYemen") || form.get("visitsSummary") || ""),
    visitsFromYemen: String(form.get("visitsFromYemen") || ""),
    visitsFromHostCountry: String(form.get("visitsFromHostCountry") || ""),
    communityUpdate: String(form.get("communityUpdate") || ""),
    communityStats: String(form.get("communityStats") || ""),
    reportingYear: periodicDraft.reportingYear,
    coverageFrom: periodicDraft.coverageFrom,
    coverageTo: periodicDraft.coverageTo,
    bilateralIndicators,
    submittedOn: new Date().toISOString().slice(0, 10),
    reviewNotes: editingReport && editingReport.workflowStage !== "أعيد للبعثة للاستكمال" ? editingReport.reviewNotes || "" : "",
    qualityScores: editingReport ? normalizeQualityScores(editingReport.qualityScores) : normalizeQualityScores({}),
    thematicSituation: String(form.get("thematicSituation") || ""),
    thematicDevelopments: String(form.get("thematicDevelopments") || ""),
    thematicStakeholders: String(form.get("thematicStakeholders") || ""),
    thematicImplications: String(form.get("thematicImplications") || ""),
    thematicRisks: String(form.get("thematicRisks") || ""),
    thematicMissionAction: String(form.get("thematicMissionAction") || ""),
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
  const dueDate = String(form.get("dueDate") || "");
  const priority = String(form.get("priority") || "متوسطة");
  const normalizedPriority = ["عالية", "متوسطة", "عادية"].includes(priority) ? priority : "متوسطة";
  const targetMissionIds = form.getAll("missionId");
  if (!targetMissionIds.length) {
    addAlert("danger", "تعذر إصدار الطلب", "يجب تحديد بعثة واحدة على الأقل قبل إصدار طلب التقرير.");
    saveState();
    renderApp();
    return;
  }
  if (!canIssueReportRequest(user, requestFamily)) {
    addAlert("danger", "تعذر إصدار الطلب", "لا تملك هذه الجهة صلاحية إصدار هذا النوع من طلبات التقارير.");
    saveState();
    renderApp();
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  if (!dueDate || dueDate < today) {
    addAlert("danger", "تعذر إصدار الطلب", "يجب أن يكون الموعد النهائي اليوم أو تاريخًا لاحقًا.");
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
    priority: normalizedPriority,
    dueDate,
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
  if (!canSubmitCircular(user)) {
    addAlert("danger", "تعذر إصدار التعميم", "لا تملك هذه الجهة صلاحية إصدار أو تعديل التعاميم.");
    saveState();
    renderApp();
    return;
  }
  const form = new FormData(event.currentTarget);
  const targetMissionIds = normalizeMissionIdList(form.getAll("missionId"));
  const summary = String(form.get("summary") || "").trim();
  const body = String(form.get("body") || "").trim();
  const dueDate = String(form.get("dueDate") || "");
  if (!targetMissionIds.length) {
    addAlert("danger", "تعذر إصدار التعميم", "يجب اختيار بعثة واحدة على الأقل ضمن الجهات المستهدفة.");
    saveState();
    renderApp();
    return;
  }
  if (!summary && !body) {
    addAlert("danger", "تعذر إصدار التعميم", "يجب إدخال ملخص أو نص التعميم قبل الإصدار.");
    saveState();
    renderApp();
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  if (!dueDate || dueDate < today) {
    addAlert("danger", "تعذر إصدار التعميم", "يجب تحديد موعد نهائي صالح اليوم أو بتاريخ لاحق.");
    saveState();
    renderApp();
    return;
  }

  const editingCircular = state.circulars.find((item) => item.id === state.editingCircularId);
  if (editingCircular && !canEditCircular(editingCircular, user)) {
    addAlert("danger", "تعذر تعديل التعميم", "لا تملك هذه الجهة صلاحية تعديل هذا التعميم أو أنه أُغلق بالفعل.");
    saveState();
    renderApp();
    return;
  }
  const circular = editingCircular || {
    id: `circ-${Date.now()}`,
    issuedBy: user.name,
    issuedAt: new Date().toISOString().slice(0, 10),
    status: "نشط",
    readMissionIds: [],
    completedMissionIds: [],
    workflowHistory: [],
    processingLog: [],
    missionResponses: []
  };
  const category = String(form.get("category") || "تنفيذي");
  const priority = String(form.get("priority") || "متوسطة");
  const actionRequired = String(form.get("actionRequired") || "").trim();
  const attachmentName = String(form.get("attachmentName") || "").trim();
  const normalizedCategory = ["توجيهي", "تنفيذي", "إداري", "عاجل"].includes(category) ? category : "تنفيذي";
  const normalizedPriority = ["عالية", "متوسطة", "عادية"].includes(priority) ? priority : "متوسطة";
  if (!actionRequired) {
    addAlert("danger", "تعذر إصدار التعميم", "يجب تحديد الإجراء المطلوب من البعثات بصورة صريحة قبل إصدار التعميم.");
    saveState();
    renderApp();
    return;
  }
  circular.title = String(form.get("title"));
  circular.category = normalizedCategory;
  circular.priority = normalizedPriority;
  circular.summary = summary;
  circular.body = body;
  circular.actionRequired = actionRequired;
  circular.attachmentName = attachmentName;
  circular.targetMissionIds = targetMissionIds;
  circular.readMissionIds = normalizeMissionIdList(circular.readMissionIds).filter((missionId) => targetMissionIds.includes(missionId));
  circular.completedMissionIds = normalizeMissionIdList(circular.completedMissionIds).filter((missionId) => targetMissionIds.includes(missionId));
  circular.missionResponses = normalizeCircularResponses(circular.missionResponses).filter((entry) => targetMissionIds.includes(entry.missionId));
  circular.processingLog = (Array.isArray(circular.processingLog) ? circular.processingLog : []).filter((entry) => !entry.missionId || targetMissionIds.includes(resolveMissionId(entry.missionId)));
  circular.dueDate = dueDate;
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
  const requestedDepartmentId = String(form.get("departmentId") || "");
  if (!canManageMeetingRecord(user, editingMeeting, requestedDepartmentId)) {
    addAlert("danger", "تعذر تسجيل الاجتماع", "لا تملك هذه الجهة صلاحية إنشاء أو تعديل هذا الاجتماع.");
    saveState();
    renderApp();
    return;
  }
  const meeting = editingMeeting || {
    id: `meet-${Date.now()}`,
    ownerRole: user.role,
    tasks: [],
    workflowHistory: []
  };
  const existingTask = meeting.tasks[0];
  const preservedTasks = Array.isArray(meeting.tasks) ? meeting.tasks.slice(1) : [];
  const departmentId = user.role === "department" ? user.departmentId : requestedDepartmentId;
  Object.assign(meeting, {
    title: String(form.get("title")),
    departmentId,
    summary: String(form.get("summary")),
    tasks: [
      {
        id: existingTask?.id || `task-${Date.now()}`,
        title: String(form.get("taskTitle")),
        assignee: String(form.get("assignee")),
        status: existingTask?.status || "قيد التنفيذ",
        priority: String(form.get("priority"))
      },
      ...preservedTasks
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
  if (editingPlan && !canEditPlan(editingPlan, user)) {
    addAlert("danger", "تعذر تعديل الخطة", "لا تملك هذه الجهة صلاحية تعديل هذه الخطة.");
    saveState();
    renderApp();
    return;
  }
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
  const user = getSessionUser();
  if (!canManageEntities(user)) {
    addAlert("danger", "تعذر إضافة الدائرة", "صلاحية إضافة الدوائر محصورة بمدير النظام.");
    saveState();
    renderApp();
    return;
  }
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
  logAudit(user.name, "إضافة دائرة", String(form.get("name")), "وزارة");
  saveState();
  renderApp();
}

function handleMissionSubmit(event) {
  event.preventDefault();
  const user = getSessionUser();
  if (!canManageEntities(user)) {
    addAlert("danger", "تعذر إضافة البعثة", "صلاحية إضافة البعثات محصورة بمدير النظام.");
    saveState();
    renderApp();
    return;
  }
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim();
  const departmentId = String(form.get("departmentId"));
  if (!getDepartmentById(departmentId)) {
    addAlert("danger", "تعذر إضافة البعثة", "الدائرة المختارة غير صحيحة أو لم تعد موجودة.");
    saveState();
    renderApp();
    return;
  }
  if (getAllUsers().some((user) => user.username === username)) {
    addAlert("danger", "تعذر إضافة البعثة", "اسم المستخدم مستخدم بالفعل.");
    saveState();
    renderApp();
    return;
  }
  state.missions.push({
    id: `mission-${Date.now()}`,
    name: String(form.get("name")),
    departmentId,
    username,
    password: String(form.get("password"))
  });
  addAlert("success", "تمت إضافة بعثة", "أضيفت بعثة جديدة وربطت بالدائرة المختارة مع حساب دخول خاص.");
  logAudit(user.name, "إضافة بعثة", String(form.get("name")), getDepartmentName(departmentId));
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
  if (!ownMissionPlan && !ownDepartmentPlan && !central) {
    addAlert("danger", "تعذر تحديث الخطة", "لا تملك هذه الجهة صلاحية تعديل هذه الخطة.");
    saveState();
    renderApp();
    return;
  }
  const allowedAction = getPlanActions(plan, user).find((action) => action.key === actionKey);
  if (!allowedAction) {
    addAlert("danger", "تعذر تحديث الخطة", "الإجراء المطلوب غير متاح في الحالة الحالية لهذه الخطة.");
    saveState();
    renderApp();
    return;
  }

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

function handleReportActionFormSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  handleReportAction(
    String(form.get("reportId") || ""),
    String(form.get("actionKey") || ""),
    String(form.get("nextStage") || ""),
    {
      reviewNotes: String(form.get("reviewNotes") || "").trim(),
      completeness: Number(form.get("completeness") || 0),
      analysis: Number(form.get("analysis") || 0)
    }
  );
}

function handleReportAction(reportId, actionKey, nextStage, actionPayload = null) {
  const report = state.reports.find((item) => item.id === reportId);
  const user = getSessionUser();
  if (!report || !user) return;
  const allowedAction = getAllowedReportActions(report, user).find((action) => action.key === actionKey && action.nextStage === nextStage);
  if (!allowedAction) {
    addAlert("danger", "تعذر تنفيذ الإجراء", "هذا الإجراء غير مسموح به من هذا الحساب أو لا يتوافق مع المرحلة الحالية للتقرير.");
    saveState();
    renderApp();
    return;
  }
  const labels = {
    review: "بدء مراجعة الدائرة",
    return: "إعادة التقرير للبعثة",
    approve: "اعتماد التقرير",
    archive: "أرشفة التقرير",
    resubmit: "إعادة رفع التقرير"
  };
  if ((actionKey === "return" || actionKey === "approve") && !actionPayload) {
    addAlert("danger", "تعذر تنفيذ الإجراء", "يجب استكمال نموذج المراجعة قبل تنفيذ هذا الإجراء.");
    saveState();
    renderApp();
    return;
  }
  if (actionKey === "return") {
    const note = String(actionPayload?.reviewNotes || "").trim();
    if (!note) {
      addAlert("danger", "تعذر إعادة التقرير", "يجب إدخال ملاحظات مراجعة واضحة قبل إعادة التقرير للبعثة.");
      saveState();
      renderApp();
      return;
    }
    report.reviewNotes = note;
  }
  if (actionKey === "approve") {
    const note = String(actionPayload?.reviewNotes || "").trim();
    const completeness = Math.min(5, Math.max(1, Number(actionPayload?.completeness || 0)));
    const analysis = Math.min(5, Math.max(1, Number(actionPayload?.analysis || 0)));
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
    report.reviewNotes = note || report.reviewNotes || "تمت المراجعة والاعتماد بعد استكمال المتطلبات.";
  }
  report.workflowStage = allowedAction.nextStage;
  if (report.requestId) {
    syncRequestCompletion(report.requestId, report.missionId);
  }
  state.reportActionDialog = null;
  addWorkflowEntry(report, user.name, labels[actionKey] || "تحديث المسار", allowedAction.nextStage);
  addAlert(allowedAction.nextStage === "أعيد للبعثة للاستكمال" ? "warning" : "info", "تحديث مسار التقرير", `انتقل التقرير "${report.title}" إلى مرحلة "${allowedAction.nextStage}".`);
  logAudit(user.name, labels[actionKey] || "تحديث المسار", report.title, getMissionName(report.missionId));
  saveState();
  renderApp();
}

function handleCircularActionFormSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  handleCircularAction(
    String(form.get("circularId") || ""),
    String(form.get("actionKey") || ""),
    {
      executionNote: String(form.get("executionNote") || "").trim(),
      evidenceRef: String(form.get("evidenceRef") || "").trim(),
      closureNote: String(form.get("closureNote") || "").trim()
    }
  );
}

function handleCircularAction(circularId, actionKey, actionPayload = null) {
  const circular = state.circulars.find((item) => item.id === circularId);
  const user = getSessionUser();
  if (!circular || !user) return;
  circular.targetMissionIds = normalizeMissionIdList(circular.targetMissionIds);
  circular.readMissionIds = normalizeMissionIdList(circular.readMissionIds);
  circular.completedMissionIds = normalizeMissionIdList(circular.completedMissionIds);
  circular.missionResponses = normalizeCircularResponses(circular.missionResponses);
  const allowedAction = getCircularActions(circular, user).find((action) => action.key === actionKey);
  if (!allowedAction) {
    addAlert("danger", "تعذر تنفيذ الإجراء", "هذا الإجراء غير متاح لهذا الحساب أو لم يعد متوافقًا مع حالة التعميم الحالية.");
    saveState();
    renderApp();
    return;
  }

  if (actionKey === "mark-read" && user.role === "mission" && circular.targetMissionIds.includes(user.missionId) && !circular.readMissionIds.includes(user.missionId)) {
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

  if (actionKey === "mark-complete" && user.role === "mission" && circular.targetMissionIds.includes(user.missionId) && !circular.completedMissionIds.includes(user.missionId)) {
    const executionNote = String(actionPayload?.executionNote || "").trim();
    if (!executionNote) {
      addAlert("danger", "تعذر حفظ الإنجاز", "يجب إدخال نتيجة تنفيذ واضحة قبل اعتماد إنجاز التعميم.");
      saveState();
      renderApp();
      return;
    }
    const evidenceRef = String(actionPayload?.evidenceRef || "").trim();
    if (!circular.readMissionIds.includes(user.missionId)) {
      circular.readMissionIds.push(user.missionId);
    }
    circular.completedMissionIds.push(user.missionId);
    circular.missionResponses = circular.missionResponses.filter((item) => item.missionId !== user.missionId);
    circular.missionResponses.unshift({
      missionId: user.missionId,
      note: executionNote,
      evidenceRef,
      completedAt: new Date().toLocaleString("ar-YE"),
      actor: user.name
    });
    circular.processingLog.unshift({
      actor: user.name,
      missionId: user.missionId,
      result: executionNote,
      evidenceRef,
      at: new Date().toLocaleString("ar-YE")
    });
    circular.workflowHistory.unshift({
      actor: user.name,
      action: "تأكيد إنجاز التعميم",
      stage: circular.status,
      at: new Date().toLocaleString("ar-YE")
    });
    state.circularActionDialog = null;
    addAlert("success", "تم إنجاز التعميم", `${user.name} أكد تنفيذ المطلوب في التعميم "${circular.title}".`);
    logAudit(user.name, "إنجاز تعميم", circular.title, getMissionName(user.missionId));
  }

  if (actionKey === "close" && canSubmitCircular(user)) {
    const stats = getCircularCompletion(circular);
    const closureNote = String(actionPayload?.closureNote || "").trim();
    if (stats.pending > 0 && !closureNote) {
      addAlert("danger", "تعذر إغلاق التعميم", "يجب إدخال ملاحظة إغلاق توضح سبب الإغلاق مع بقاء بعثات لم تنجز التعميم.");
      saveState();
      renderApp();
      return;
    }
    circular.status = "مغلق";
    circular.closedAt = new Date().toISOString().slice(0, 10);
    circular.closureNote = closureNote;
    if (closureNote) {
      circular.processingLog.unshift({
        actor: user.name,
        result: `إغلاق التعميم: ${closureNote}`,
        at: new Date().toLocaleString("ar-YE")
      });
    }
    circular.workflowHistory.unshift({
      actor: user.name,
      action: "إغلاق التعميم",
      stage: "مغلق",
      at: new Date().toLocaleString("ar-YE")
    });
    state.circularActionDialog = null;
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
  if (!canUpdateMeetingTask(meeting, task, user)) {
    addAlert("danger", "تعذر تحديث المهمة", "لا تملك هذه الجهة صلاحية تعديل هذه المهمة.");
    saveState();
    renderApp();
    return;
  }
  const allowedAction = getMeetingActions(meeting, task, user).find((action) => action.nextStatus === nextStatus);
  if (!allowedAction) {
    addAlert("danger", "تعذر تحديث المهمة", "الإجراء المطلوب غير متاح لهذه المهمة في حالتها الحالية.");
    saveState();
    renderApp();
    return;
  }

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
void bootstrapDataLayer();
