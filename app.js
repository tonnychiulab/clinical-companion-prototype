"use strict";

const APP_VERSION = "v0.2.1";

const translations = {
  "zh-TW": {
    skipToContent: "跳到主要內容", brandEyebrow: "家庭醫療協作", brandName: "診前同行",
    systemReady: "原型示範", notOrganized: "尚未整理", uiLanguage: "介面語言",
    loadDemo: "載入示範", showPersonalData: "顯示個資", hidePersonalData: "遮蔽個資", personalDataMasked: "個資已遮蔽", personalDataVisible: "個資已顯示", maskedContent: "內容已遮蔽", maskedPersonalField: "資料已遮蔽", revealToInteract: "請先顯示個資再確認內容", demoOnlyTitle: "僅供示範", prototypeInputWarning: "請勿輸入真實姓名、病歷、聯絡資料或其他可識別個人的醫療資訊。", versionLabel: "版本", demoStandard: "一般候診示範", demoRural: "偏鄉協作示範",
    demoEducation: "教學模擬示範", resetDemo: "重置示範", mode: "模式",
    clinicalMode: "臨床接診", ruralMode: "偏鄉協作", educationMode: "教學模擬",
    quickStart: "快速開始", loadCaregiverDemo: "載入跨語言照護示範", openIntake: "開啟診前填寫",
    principleTitle: "設計原則", principleText: "醫師不選模型、不重打資料，只確認真正需要醫療判斷的內容。",
    welcomeEyebrow: "先整理，再看診", welcomeTitle: "讓病人的故事先被整理好",
    welcomeDescription: "病人或照護者先用熟悉的語言說明，醫師接手時只需確認、補問與判斷。",
    patientOrCaregiverEntry: "病人／照護者填寫", pointOneTitle: "少輸入", pointOneText: "點選、語音、快速補問優先",
    pointTwoTitle: "保留原文", pointTwoText: "原文、翻譯與說話者並存", pointThreeTitle: "醫師確認",
    pointThreeText: "整理不等於診斷", prototypeNotice: "本系統為介面原型，僅使用虛構示範資料，請勿輸入真實病人資訊。",
    handoffData: "接手資料", patientOverview: "病人概況", dataProvider: "資料提供者", speakerLanguage: "使用語言",
    arrivalContext: "接診情境", vitals: "生命徵象", importantBackground: "重要背景", medicalHistory: "病史",
    medications: "目前用藥", allergies: "過敏", dataCompleteness: "資料完整度", patientStory: "病人的故事",
    chiefComplaint: "主訴", pendingReview: "待確認", confirmed: "已確認", timeline: "病程時間軸",
    bilingualRecord: "雙語紀錄", collapseOriginal: "收合原文", expandOriginal: "展開原文", originalText: "原文",
    organizedTranslation: "中文整理", patientConcern: "病人最擔心", patientExpectation: "病人期待",
    sourceRecord: "原始問答紀錄", addNote: "補充紀錄", voiceRecord: "語音記錄", doctorNote: "醫師補充紀錄",
    doctorInputPlaceholder: "補充病人說明或醫師觀察…", addToRecord: "加入紀錄", doctorReview: "醫師接手",
    preVisitReview: "診前整理｜待醫師確認", priorityChecks: "優先確認", missingInformation: "尚缺資料",
    suggestedFollowUp: "建議接續詢問", preVisitSummary: "診前摘要", copy: "複製", confirmSummary: "確認摘要",
    exportHandoff: "匯出交接", preVisitForm: "診前填寫", tellUsInYourLanguage: "用你熟悉的語言，把不舒服說清楚",
    backToDoctor: "返回醫師工作台", step: "步驟", whoIsAnswering: "今天由誰協助說明？", iAmPatient: "我是病人",
    iAmFamily: "我是家屬", iAmCaregiver: "我是家庭照護者", iAmStaff: "我是現場醫療人員",
    preferredLanguage: "希望使用的語言", mainDiscomfort: "今天最不舒服的是什麼？", speakInstead: "改用說的",
    orTypeBriefly: "或簡短輸入", complaintPlaceholder: "例如：今天早上起床時頭暈，差點跌倒",
    whenStarted: "大約什麼時候開始？", today: "今天", yesterday: "昨天", twoThreeDays: "兩到三天",
    withinWeek: "一週內", overWeek: "超過一週", notSure: "不確定", howSevere: "目前影響程度？",
    veryMild: "很輕微", mild: "輕微", moderate: "中等", severe: "嚴重", verySevere: "非常嚴重",
    confirmUnderstanding: "請確認我們整理的內容", correct: "內容正確", partlyIncorrect: "有一部分不正確",
    previous: "上一步", next: "下一步", patient: "病人", story: "故事", summary: "摘要", voice: "語音",
    noteContent: "紀錄內容", notePlaceholder: "補充病人或照護者的說明", cancel: "取消", save: "儲存",
    yearsOld: "歲", female: "女性", male: "男性", caregiver: "家庭照護者", family: "家屬", patientSelf: "病人本人",
    onsiteStaff: "現場醫療人員", outpatient: "門診候診", ruralHandoff: "偏鄉遠距交接", teachingCase: "教學模擬病例",
    english: "英文", traditionalChinese: "正體中文", notMeasured: "尚未測量", noKnownAllergy: "無已知過敏",
    none: "無", pendingVerification: "待核對", completenessHint: "仍有重要資料需要醫師確認。", organizedJustNow: "剛剛完成整理",
    addQuestion: "加入", markedDone: "已確認", copySuccess: "摘要已複製。", exportSuccess: "已產生交接文字檔。",
    confirmedSuccess: "摘要已標記為醫師確認。", demoLoaded: "已載入跨語言照護示範，個資已預設遮蔽。", resetSuccess: "已重置示範。",
    speechUnsupported: "此瀏覽器不支援語音辨識，可改用文字輸入。", listening: "正在聆聽，請開始說話…",
    speechStopped: "語音已停止，請確認辨識內容。", speechError: "語音辨識無法使用，請改用文字輸入。",
    noteAdded: "紀錄已加入。", selectRequired: "請先選擇一個項目。", complaintRequired: "請選擇或輸入主要不適。",
    intakeComplete: "診前資料已送回醫師工作台。", questionAdded: "已加入醫師補問區。",
    fever: "發燒", cough: "咳嗽", headache: "頭痛", dizziness: "頭暈", chestDiscomfort: "胸口不舒服",
    abdominalPain: "腹痛", shortnessOfBreath: "呼吸不順", weakness: "全身無力", appetiteLoss: "食慾下降", other: "其他",
    speaker: "說話者", language: "語言", complaint: "主要不適", onset: "開始時間", severity: "影響程度",
    noData: "尚無資料", menuOpen: "開啟功能選單", moreActions: "更多功能",
    qLossConsciousness: "是否曾失去意識或完全昏倒？", qMedication: "目前使用哪些藥物？最近是否調整？",
    qBloodPressure: "請補測坐姿與站姿血壓。", qBreathing: "目前是否仍有呼吸困難？", qPainRadiation: "疼痛是否延伸至手臂、背部或下顎？",
    qFoodFluid: "今天的進食與飲水量大約多少？", sourceCaregiver: "資料來源：家庭照護者",
    sampleName: "林女士", sampleMeta: "78 歲・女性", sampleProvider: "Maria（家庭照護者）", sampleLanguage: "English",
    sampleContext: "門診候診・照護者陪同", sampleHistory: "高血壓、第二型糖尿病", sampleMeds: "白色降壓藥，藥名待核對",
    sampleAllergy: "無已知藥物過敏", sampleComplaint: "今天早上起身時頭暈、食慾下降，並曾險些跌倒。",
    sampleOriginal: "She became dizzy when she stood up this morning. She ate very little and almost fell near the bathroom.",
    sampleTranslated: "照護者表示，病人今天早上起身時出現頭暈，食慾明顯下降，並曾在浴室附近險些跌倒。",
    sampleConcern: "擔心跌倒，也擔心可能是中風。", sampleExpectation: "希望確認頭暈原因，並知道今天是否需要進一步檢查。",
    sampleSummary: "78 歲女性，由家庭照護者陪同。今天早上起身時出現頭暈，食慾下降，曾在浴室附近險些跌倒。已知有高血壓及第二型糖尿病，目前降壓藥名稱未確認。坐姿血壓 112/68 mmHg，站姿血壓尚未測量。建議優先確認是否曾失去意識、局部神經症狀、近期用藥變更及姿勢性血壓。",
    timelineMorning: "今天 07:10", timelineArrival: "今天 09:20", timelineMorningText: "起身時出現明顯頭暈，需要扶牆。",
    timelineNearFallText: "在浴室附近險些跌倒，未完全失去意識。", timelineArrivalText: "由照護者陪同到門診，仍有輕微頭暈。",
    priorityOne: "病人是否曾完全失去意識，照護者描述仍待本人確認。", priorityTwo: "是否有單側無力、麻木、說話不清或臉歪。",
    priorityThree: "坐姿血壓偏低，尚未測量站姿血壓。", missingOne: "目前降壓藥名稱與最近一次服藥時間。",
    missingTwo: "今天實際飲水與進食量。", missingThree: "病人本人是否同意照護者的描述。",
    transcriptCaregiver: "She became dizzy when she stood up this morning.", transcriptSystem: "照護者表示，病人今天早上起身時頭暈。",
    transcriptDoctor: "尚待醫師補問。", speakerCaregiver: "家庭照護者・英文", speakerSystem: "系統整理・中文", speakerDoctor: "醫師",
    vitalTemperature: "體溫", vitalHeartRate: "心率", vitalBloodPressure: "坐姿血壓", vitalStandingBP: "站姿血壓",
    vitalOxygen: "血氧", vitalRespiratoryRate: "呼吸", minutesAgo: "8 分鐘前",
    standardDemoName: "陳先生", standardDemoMeta: "42 歲・男性", standardDemoComplaint: "咳嗽與發燒兩天，昨晚睡眠受影響。",
    standardDemoSummary: "42 歲男性，咳嗽與發燒兩天，無已知慢性病，尚待確認呼吸困難、胸痛及接觸史。",
    ruralDemoName: "張伯伯", ruralDemoMeta: "83 歲・男性", ruralDemoComplaint: "偏鄉衛生所轉介：活動後呼吸喘，今日較昨日加重。",
    ruralDemoSummary: "83 歲男性，由偏鄉衛生所遠距交接。活動後呼吸喘，今日惡化。現場已量測血氧 92%，尚待確認胸痛、下肢水腫及既往心肺病史。",
    educationDemoName: "模擬病人 A17", educationDemoMeta: "教學案例・腹痛", educationDemoComplaint: "右下腹痛約十二小時。資訊將依學生問診逐步揭露。",
    educationDemoSummary: "教學模擬病例。學習目標：腹痛問診結構、紅旗症狀與避免過早鎖定診斷。",
    simulationNotice: "教學模擬，不是真實病人", ruralNetwork: "網路狀態穩定・可視訊", formGenerated: "由診前填寫產生",
    unknownMedication: "待詢問", simpleConcern: "希望知道是否需要進一步檢查。", simpleExpectation: "希望醫師說明可能原因與下一步。"
  },
  en: {
    skipToContent: "Skip to main content", brandEyebrow: "Family medicine collaboration", brandName: "Clinical Companion",
    systemReady: "Prototype demo", notOrganized: "Not organized yet", uiLanguage: "Interface language",
    loadDemo: "Load demo", showPersonalData: "Show personal data", hidePersonalData: "Hide personal data", personalDataMasked: "Personal data hidden", personalDataVisible: "Personal data visible", maskedContent: "Content hidden", maskedPersonalField: "Data hidden", revealToInteract: "Show personal data before confirming the content", demoOnlyTitle: "Demo only", prototypeInputWarning: "Do not enter real names, medical records, contact details, or other identifiable health information.", versionLabel: "Version", demoStandard: "General clinic demo", demoRural: "Rural care demo", demoEducation: "Teaching simulation demo",
    resetDemo: "Reset demo", mode: "Mode", clinicalMode: "Clinical intake", ruralMode: "Rural collaboration", educationMode: "Teaching simulation",
    quickStart: "Quick start", loadCaregiverDemo: "Load multilingual caregiver demo", openIntake: "Open pre-visit intake",
    principleTitle: "Design principle", principleText: "Doctors do not choose models or re-enter data. They only confirm what requires clinical judgment.",
    welcomeEyebrow: "Organize first, then care", welcomeTitle: "Let the patient's story be organized before the visit",
    welcomeDescription: "Patients or caregivers explain concerns in a familiar language. Clinicians take over by confirming, asking, and deciding.",
    patientOrCaregiverEntry: "Patient / caregiver intake", pointOneTitle: "Less input", pointOneText: "Taps, voice, and quick follow-ups first",
    pointTwoTitle: "Keep original words", pointTwoText: "Original text, translation, and speaker stay together", pointThreeTitle: "Clinician confirmation",
    pointThreeText: "Organization is not diagnosis", prototypeNotice: "Interface prototype using fictional demo data only. Do not enter real patient information.",
    handoffData: "Handoff data", patientOverview: "Patient overview", dataProvider: "Data provider", speakerLanguage: "Language",
    arrivalContext: "Care context", vitals: "Vital signs", importantBackground: "Important background", medicalHistory: "Medical history",
    medications: "Current medications", allergies: "Allergies", dataCompleteness: "Data completeness", patientStory: "Patient story",
    chiefComplaint: "Chief concern", pendingReview: "Pending review", confirmed: "Confirmed", timeline: "Timeline",
    bilingualRecord: "Bilingual record", collapseOriginal: "Hide original", expandOriginal: "Show original", originalText: "Original",
    organizedTranslation: "Organized translation", patientConcern: "Main concern", patientExpectation: "Patient expectation",
    sourceRecord: "Source record", addNote: "Add note", voiceRecord: "Voice note", doctorNote: "Clinician note",
    doctorInputPlaceholder: "Add patient information or clinical observation…", addToRecord: "Add to record", doctorReview: "Clinician handoff",
    preVisitReview: "Pre-visit organization | Clinician review", priorityChecks: "Priority checks", missingInformation: "Missing information",
    suggestedFollowUp: "Suggested follow-ups", preVisitSummary: "Pre-visit summary", copy: "Copy", confirmSummary: "Confirm summary",
    exportHandoff: "Export handoff", preVisitForm: "Pre-visit intake", tellUsInYourLanguage: "Describe the concern in the language you know best",
    backToDoctor: "Back to clinician workspace", step: "Step", whoIsAnswering: "Who is helping answer today?", iAmPatient: "I am the patient",
    iAmFamily: "I am a family member", iAmCaregiver: "I am a home caregiver", iAmStaff: "I am on-site clinical staff",
    preferredLanguage: "Preferred language", mainDiscomfort: "What is the main concern today?", speakInstead: "Speak instead",
    orTypeBriefly: "Or type briefly", complaintPlaceholder: "Example: Dizzy after getting up this morning and almost fell",
    whenStarted: "About when did it start?", today: "Today", yesterday: "Yesterday", twoThreeDays: "Two to three days",
    withinWeek: "Within a week", overWeek: "Over a week", notSure: "Not sure", howSevere: "How much is it affecting daily life?",
    veryMild: "Very mild", mild: "Mild", moderate: "Moderate", severe: "Severe", verySevere: "Very severe",
    confirmUnderstanding: "Please confirm what we understood", correct: "This is correct", partlyIncorrect: "Part of this is incorrect",
    previous: "Previous", next: "Next", patient: "Patient", story: "Story", summary: "Summary", voice: "Voice",
    noteContent: "Note", notePlaceholder: "Add information from the patient or caregiver", cancel: "Cancel", save: "Save",
    yearsOld: "years old", female: "Female", male: "Male", caregiver: "Home caregiver", family: "Family member", patientSelf: "Patient",
    onsiteStaff: "On-site clinical staff", outpatient: "Outpatient waiting room", ruralHandoff: "Rural remote handoff", teachingCase: "Teaching simulation case",
    english: "English", traditionalChinese: "Traditional Chinese", notMeasured: "Not measured", noKnownAllergy: "No known allergy",
    none: "None", pendingVerification: "Needs verification", completenessHint: "Important information still needs clinician confirmation.",
    organizedJustNow: "Organized just now", addQuestion: "Add", markedDone: "Confirmed", copySuccess: "Summary copied.",
    exportSuccess: "Handoff text file created.", confirmedSuccess: "Summary marked as clinician-confirmed.", demoLoaded: "Multilingual caregiver demo loaded with personal data hidden by default.",
    resetSuccess: "Demo reset.", speechUnsupported: "Speech recognition is not available in this browser. Please type instead.",
    listening: "Listening. Please start speaking…", speechStopped: "Speech stopped. Please review the text.", speechError: "Speech recognition is unavailable. Please type instead.",
    noteAdded: "Note added.", selectRequired: "Please select an option first.", complaintRequired: "Please select or enter the main concern.",
    intakeComplete: "Pre-visit information sent to the clinician workspace.", questionAdded: "Question added to the clinician input area.",
    fever: "Fever", cough: "Cough", headache: "Headache", dizziness: "Dizziness", chestDiscomfort: "Chest discomfort",
    abdominalPain: "Abdominal pain", shortnessOfBreath: "Shortness of breath", weakness: "Weakness", appetiteLoss: "Loss of appetite", other: "Other",
    speaker: "Speaker", language: "Language", complaint: "Main concern", onset: "Onset", severity: "Impact", noData: "No data yet",
    menuOpen: "Open menu", moreActions: "More actions", qLossConsciousness: "Did the patient lose consciousness or fully faint?",
    qMedication: "Which medications are currently used? Any recent changes?", qBloodPressure: "Please measure seated and standing blood pressure.",
    qBreathing: "Is shortness of breath still present?", qPainRadiation: "Does the pain spread to the arm, back, or jaw?",
    qFoodFluid: "Approximately how much food and fluid was taken today?", sourceCaregiver: "Source: home caregiver",
    sampleName: "Ms. Lin", sampleMeta: "78 years old · Female", sampleProvider: "Maria (home caregiver)", sampleLanguage: "English",
    sampleContext: "Outpatient waiting room · caregiver present", sampleHistory: "Hypertension, type 2 diabetes",
    sampleMeds: "White blood-pressure tablet; name needs verification", sampleAllergy: "No known drug allergy",
    sampleComplaint: "Dizziness after standing this morning, reduced appetite, and a near fall.",
    sampleOriginal: "She became dizzy when she stood up this morning. She ate very little and almost fell near the bathroom.",
    sampleTranslated: "The caregiver reports dizziness on standing this morning, markedly reduced appetite, and a near fall by the bathroom.",
    sampleConcern: "Worried about another fall and possible stroke.", sampleExpectation: "Wants to understand the cause and whether further tests are needed today.",
    sampleSummary: "78-year-old woman accompanied by a home caregiver. She developed dizziness on standing this morning, ate very little, and nearly fell by the bathroom. History includes hypertension and type 2 diabetes. The name of her current antihypertensive medication is not confirmed. Seated BP is 112/68 mmHg; standing BP is not measured. Priority checks include loss of consciousness, focal neurologic symptoms, recent medication changes, and orthostatic blood pressure.",
    timelineMorning: "Today 07:10", timelineArrival: "Today 09:20", timelineMorningText: "Marked dizziness on standing; needed wall support.",
    timelineNearFallText: "Nearly fell near the bathroom; no confirmed full loss of consciousness.", timelineArrivalText: "Arrived with caregiver; mild dizziness remains.",
    priorityOne: "Whether the patient fully lost consciousness; caregiver description still needs patient confirmation.",
    priorityTwo: "Any one-sided weakness, numbness, slurred speech, or facial droop.", priorityThree: "Seated blood pressure is low-normal; standing BP has not been measured.",
    missingOne: "Current antihypertensive medication name and last dose time.", missingTwo: "Actual food and fluid intake today.",
    missingThree: "Whether the patient agrees with the caregiver's account.", transcriptCaregiver: "She became dizzy when she stood up this morning.",
    transcriptSystem: "Caregiver reports dizziness when the patient stood up this morning.", transcriptDoctor: "Awaiting clinician follow-up.",
    speakerCaregiver: "Home caregiver · English", speakerSystem: "Organized summary · English", speakerDoctor: "Clinician",
    vitalTemperature: "Temperature", vitalHeartRate: "Heart rate", vitalBloodPressure: "Seated BP", vitalStandingBP: "Standing BP",
    vitalOxygen: "Oxygen", vitalRespiratoryRate: "Respiratory rate", minutesAgo: "8 minutes ago",
    standardDemoName: "Mr. Chen", standardDemoMeta: "42 years old · Male", standardDemoComplaint: "Cough and fever for two days, affecting sleep last night.",
    standardDemoSummary: "42-year-old man with cough and fever for two days, no known chronic illness. Shortness of breath, chest pain, and exposure history still need confirmation.",
    ruralDemoName: "Mr. Chang", ruralDemoMeta: "83 years old · Male", ruralDemoComplaint: "Rural clinic handoff: exertional breathlessness, worse today than yesterday.",
    ruralDemoSummary: "83-year-old man referred by a rural clinic for remote review. Exertional breathlessness has worsened today. On-site oxygen saturation is 92%. Chest pain, leg swelling, and prior cardiac or lung disease require confirmation.",
    educationDemoName: "Simulated patient A17", educationDemoMeta: "Teaching case · Abdominal pain", educationDemoComplaint: "Right lower abdominal pain for about twelve hours. Details are disclosed as the student asks.",
    educationDemoSummary: "Teaching simulation. Learning goals: structured abdominal pain history, red flags, and avoiding premature diagnostic closure.",
    simulationNotice: "Teaching simulation, not a real patient", ruralNetwork: "Network stable · video available", formGenerated: "Generated from pre-visit intake",
    unknownMedication: "To be asked", simpleConcern: "Wants to know whether more tests are needed.", simpleExpectation: "Wants an explanation of possible causes and next steps."
  }
};

const initialState = {
  uiLanguage: "zh-TW",
  mode: "clinical",
  view: "welcome",
  reviewStatus: "pending",
  privacyMasked: true,
  currentMobilePanel: "storyPanel",
  lastOrganized: null,
  patient: null,
  intake: {
    step: 1,
    speakerRole: "",
    speakerLanguage: "zh-TW",
    symptom: "",
    complaintText: "",
    onset: "",
    severity: ""
  }
};

let state = loadState();
if (typeof state.privacyMasked !== "boolean") state.privacyMasked = true;
let speechController = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const elements = {
  welcomeView: $("#welcomeView"), workspace: $("#workspace"), intakeView: $("#intakeView"),
  sidePanel: $("#sidePanel"), moreMenu: $("#moreMenu"), toast: $("#toast"),
  languageSelect: $("#languageSelect"), privacyToggleButton: $("#privacyToggleButton"), lastOrganizedText: $("#lastOrganizedText"),
  patientPanel: $("#patientPanel"), storyPanel: $("#storyPanel"), reviewPanel: $("#reviewPanel"),
  mobileNav: $(".mobile-nav"), noteDialog: $("#noteDialog")
};

function t(key) {
  return translations[state.uiLanguage]?.[key] ?? translations["zh-TW"][key] ?? key;
}

function maskSensitive(value, kind = "content") {
  if (value === undefined || value === null || value === "" || value === "—") return "—";
  if (kind === "name") {
    const text = String(value).trim();
    if (/^[\u3400-\u9fff]/.test(text)) return "○○○";
    return "••••";
  }
  if (kind === "avatar") return "●";
  if (kind === "time") return "••:••";
  if (kind === "vital") return "•••";
  if (kind === "field") return t("maskedPersonalField");
  return t("maskedContent");
}

function privacyText(value, kind = "content") {
  return state.privacyMasked ? maskSensitive(value, kind) : value;
}

function setSensitiveText(target, value, kind = "content") {
  const element = typeof target === "string" ? $(target) : target;
  if (!element) return;
  element.textContent = privacyText(value, kind);
  element.classList.add("is-sensitive");
  element.classList.toggle("is-masked", state.privacyMasked);
  if (state.privacyMasked) element.setAttribute("aria-label", t("maskedContent"));
  else element.removeAttribute("aria-label");
}

function updatePrivacyControl() {
  document.body.classList.toggle("privacy-masked", state.privacyMasked);
  const button = elements.privacyToggleButton;
  if (!button) return;
  button.classList.toggle("is-active", state.privacyMasked);
  button.setAttribute("aria-pressed", String(state.privacyMasked));
  button.setAttribute("aria-label", state.privacyMasked ? t("showPersonalData") : t("hidePersonalData"));
  const text = $("#privacyToggleText");
  if (text) text.textContent = state.privacyMasked ? t("showPersonalData") : t("hidePersonalData");
}

function saveState() {
  try {
    sessionStorage.setItem("clinicalCompanionState", JSON.stringify(state));
  } catch (_) {
    // Prototype remains functional even when storage is unavailable.
  }
}

function loadState() {
  try {
    const stored = sessionStorage.getItem("clinicalCompanionState");
    if (stored) {
      const restored = { ...structuredClone(initialState), ...JSON.parse(stored) };
      restored.privacyMasked = true;
      return restored;
    }
  } catch (_) {}
  return structuredClone(initialState);
}

function applyTranslations() {
  document.documentElement.lang = state.uiLanguage === "zh-TW" ? "zh-Hant" : "en";
  document.title = state.uiLanguage === "zh-TW" ? "診前同行｜Clinical Companion" : "Clinical Companion | Pre-visit Handoff";
  $$('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });
  $$('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  elements.languageSelect.value = state.uiLanguage;
  $("#appVersion").textContent = APP_VERSION;
  $("#appVersion").setAttribute("aria-label", `${t("versionLabel")} ${APP_VERSION}`);
  updatePrivacyControl();
  $("#menuButton").setAttribute("aria-label", t("menuOpen"));
  $("#moreButton").setAttribute("aria-label", t("moreActions"));
  renderSymptomChoices();
  renderQuickPhrases();
  renderModeLabels();
  if (state.patient) renderWorkspace();
  renderIntakeConfirmation();
}

function setView(view) {
  state.view = view;
  elements.welcomeView.hidden = view !== "welcome";
  elements.workspace.hidden = view !== "workspace";
  elements.intakeView.hidden = view !== "intake";
  elements.mobileNav.hidden = view !== "workspace";
  if (view === "workspace") setMobilePanel(state.currentMobilePanel || "storyPanel");
  saveState();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { elements.toast.hidden = true; }, 2600);
}

function getDemoPatient(type = "caregiver") {
  const base = {
    type,
    nameKey: "sampleName",
    metaKey: "sampleMeta",
    avatar: state.uiLanguage === "zh-TW" ? "林" : "L",
    providerKey: "sampleProvider",
    languageKey: "sampleLanguage",
    contextKey: "sampleContext",
    historyKey: "sampleHistory",
    medsKey: "sampleMeds",
    allergyKey: "sampleAllergy",
    complaintKey: "sampleComplaint",
    originalKey: "sampleOriginal",
    translatedKey: "sampleTranslated",
    concernKey: "sampleConcern",
    expectationKey: "sampleExpectation",
    summaryKey: "sampleSummary",
    completeness: 82,
    vitalsTimeKey: "minutesAgo",
    vitals: [
      { labelKey: "vitalTemperature", value: "36.5 °C" },
      { labelKey: "vitalHeartRate", value: "76 /min" },
      { labelKey: "vitalBloodPressure", value: "112/68 mmHg" },
      { labelKey: "vitalStandingBP", valueKey: "notMeasured", missing: true },
      { labelKey: "vitalOxygen", value: "98%" },
      { labelKey: "vitalRespiratoryRate", value: "17 /min" }
    ],
    timeline: [
      { timeKey: "timelineMorning", textKey: "timelineMorningText" },
      { time: "07:25", textKey: "timelineNearFallText" },
      { timeKey: "timelineArrival", textKey: "timelineArrivalText" }
    ],
    priority: ["priorityOne", "priorityTwo", "priorityThree"],
    missing: ["missingOne", "missingTwo", "missingThree"],
    followUps: ["qLossConsciousness", "qMedication", "qBloodPressure", "qFoodFluid"],
    transcript: [
      { speakerKey: "speakerCaregiver", language: "en", textKey: "transcriptCaregiver", time: "09:11" },
      { speakerKey: "speakerSystem", language: state.uiLanguage, textKey: "transcriptSystem", time: "09:12" }
    ],
    speakerBadgeKey: "sourceCaregiver"
  };

  if (type === "standard") {
    return {
      ...base,
      type,
      nameKey: "standardDemoName", metaKey: "standardDemoMeta", avatar: state.uiLanguage === "zh-TW" ? "陳" : "C",
      providerKey: "patientSelf", languageKey: "traditionalChinese", contextKey: "outpatient",
      historyKey: "none", medsKey: "none", complaintKey: "standardDemoComplaint", originalKey: "standardDemoComplaint",
      translatedKey: "standardDemoComplaint", concernKey: "simpleConcern", expectationKey: "simpleExpectation",
      summaryKey: "standardDemoSummary", completeness: 74,
      priority: ["qBreathing", "qPainRadiation"], missing: ["missingTwo"], followUps: ["qBreathing", "qPainRadiation", "qFoodFluid"],
      timeline: [{ timeKey: "yesterday", textKey: "standardDemoComplaint" }],
      transcript: [{ speakerKey: "speakerDoctor", language: state.uiLanguage, textKey: "standardDemoComplaint", time: "10:05" }],
      speakerBadgeKey: "patientSelf"
    };
  }

  if (type === "rural") {
    return {
      ...base,
      type,
      nameKey: "ruralDemoName", metaKey: "ruralDemoMeta", avatar: state.uiLanguage === "zh-TW" ? "張" : "Z",
      providerKey: "onsiteStaff", languageKey: "traditionalChinese", contextKey: "ruralHandoff",
      historyKey: "pendingVerification", medsKey: "pendingVerification", complaintKey: "ruralDemoComplaint",
      originalKey: "ruralDemoComplaint", translatedKey: "ruralDemoComplaint", concernKey: "simpleConcern", expectationKey: "ruralNetwork",
      summaryKey: "ruralDemoSummary", completeness: 68,
      vitals: [
        { labelKey: "vitalTemperature", value: "37.1 °C" }, { labelKey: "vitalHeartRate", value: "104 /min" },
        { labelKey: "vitalBloodPressure", value: "138/82 mmHg" }, { labelKey: "vitalOxygen", value: "92%" },
        { labelKey: "vitalRespiratoryRate", value: "24 /min" }, { labelKey: "vitalStandingBP", valueKey: "notMeasured", missing: true }
      ],
      priority: ["qBreathing", "qPainRadiation"], missing: ["missingOne", "missingThree"], followUps: ["qBreathing", "qPainRadiation"],
      timeline: [{ timeKey: "today", textKey: "ruralDemoComplaint" }],
      transcript: [{ speakerKey: "onsiteStaff", language: state.uiLanguage, textKey: "ruralDemoComplaint", time: "11:40" }],
      speakerBadgeKey: "onsiteStaff"
    };
  }

  if (type === "education") {
    return {
      ...base,
      type,
      nameKey: "educationDemoName", metaKey: "educationDemoMeta", avatar: "A17",
      providerKey: "simulationNotice", languageKey: "traditionalChinese", contextKey: "teachingCase",
      historyKey: "pendingVerification", medsKey: "unknownMedication", complaintKey: "educationDemoComplaint",
      originalKey: "educationDemoComplaint", translatedKey: "educationDemoComplaint", concernKey: "simpleConcern", expectationKey: "simulationNotice",
      summaryKey: "educationDemoSummary", completeness: 35,
      vitals: [
        { labelKey: "vitalTemperature", value: "37.4 °C" }, { labelKey: "vitalHeartRate", value: "92 /min" },
        { labelKey: "vitalBloodPressure", value: "126/74 mmHg" }, { labelKey: "vitalOxygen", value: "99%" },
        { labelKey: "vitalRespiratoryRate", value: "18 /min" }, { labelKey: "vitalStandingBP", valueKey: "notMeasured", missing: true }
      ],
      priority: ["missingThree"], missing: ["missingOne", "missingTwo"], followUps: ["qLossConsciousness", "qMedication"],
      timeline: [{ time: "12 h", textKey: "educationDemoComplaint" }],
      transcript: [{ speakerKey: "simulationNotice", language: state.uiLanguage, textKey: "educationDemoComplaint", time: "—" }],
      speakerBadgeKey: "simulationNotice"
    };
  }

  return base;
}

function loadDemo(type = "caregiver") {
  // Every demo load starts in privacy mode, even when the previous case was revealed.
  // This is especially important for the multilingual caregiver scenario because
  // the original utterance, translated summary, speaker and caregiver identity
  // can all contain identifiable health information.
  state.privacyMasked = true;
  state.patient = getDemoPatient(type);
  state.mode = type === "rural" ? "rural" : type === "education" ? "education" : "clinical";
  state.reviewStatus = "pending";
  state.lastOrganized = Date.now();
  setView("workspace");
  renderAll();
  showToast(type === "caregiver" ? t("demoLoaded") : t("organizedJustNow"));
}

function resetDemo() {
  const language = state.uiLanguage;
  state = structuredClone(initialState);
  state.uiLanguage = language;
  setView("welcome");
  renderAll();
  showToast(t("resetSuccess"));
}

function renderAll() {
  applyTranslations();
  renderModeButtons();
  renderLastOrganized();
  renderView();
  saveState();
}

function renderView() {
  setView(state.view || "welcome");
  if (state.patient) renderWorkspace();
  renderIntakeStep();
}

function renderLastOrganized() {
  elements.lastOrganizedText.textContent = state.lastOrganized ? t("organizedJustNow") : t("notOrganized");
}

function renderModeButtons() {
  $$(".mode-button").forEach((button) => button.classList.toggle("is-active", button.dataset.mode === state.mode));
}

function renderModeLabels() {
  const key = state.mode === "rural" ? "ruralMode" : state.mode === "education" ? "educationMode" : "clinicalMode";
  $("#modeEyebrow").textContent = t(key);
}

function renderWorkspace() {
  const patient = state.patient;
  if (!patient) return;

  setSensitiveText("#patientAvatar", patient.avatar, "avatar");
  setSensitiveText("#patientName", t(patient.nameKey), "name");
  setSensitiveText("#patientMeta", t(patient.metaKey), "field");
  setSensitiveText("#dataProvider", t(patient.providerKey), "field");
  setSensitiveText("#speakerLanguage", t(patient.languageKey), "field");
  setSensitiveText("#arrivalContext", t(patient.contextKey), "field");
  setSensitiveText("#medicalHistory", t(patient.historyKey));
  setSensitiveText("#medications", t(patient.medsKey));
  setSensitiveText("#allergies", t(patient.allergyKey || "noKnownAllergy"));
  setSensitiveText("#vitalsTime", t(patient.vitalsTimeKey || "minutesAgo"), "time");
  $("#completenessValue").textContent = `${patient.completeness}%`;
  $("#completenessBar").style.width = `${patient.completeness}%`;
  $("#completenessHint").textContent = t("completenessHint");
  setSensitiveText("#speakerBadge", t(patient.speakerBadgeKey), "field");
  setSensitiveText("#chiefComplaint", t(patient.complaintKey));
  setSensitiveText("#originalText", t(patient.originalKey));
  setSensitiveText("#translatedText", t(patient.translatedKey));
  setSensitiveText("#patientConcern", t(patient.concernKey));
  setSensitiveText("#patientExpectation", t(patient.expectationKey));
  setSensitiveText("#clinicalSummary", t(patient.summaryKey));

  const reviewBadge = $("#reviewBadge");
  reviewBadge.textContent = state.reviewStatus === "confirmed" ? t("confirmed") : t("pendingReview");
  reviewBadge.className = `review-badge ${state.reviewStatus === "confirmed" ? "is-confirmed" : "is-pending"}`;

  renderVitals(patient.vitals);
  renderTimeline(patient.timeline);
  renderList($("#priorityList"), patient.priority);
  renderList($("#missingList"), patient.missing);
  $("#priorityCount").textContent = patient.priority.length;
  $("#missingCount").textContent = patient.missing.length;
  renderFollowUps(patient.followUps);
  renderTranscript(patient.transcript);
  renderModeLabels();
  $("#confirmSummaryButton").disabled = state.privacyMasked;
  $("#confirmSummaryButton").title = state.privacyMasked ? t("revealToInteract") : "";
  updatePrivacyControl();
  setMobilePanel(state.currentMobilePanel || "storyPanel");
}

function renderVitals(vitals) {
  const container = $("#vitalsGrid");
  container.innerHTML = "";
  vitals.forEach((vital) => {
    const card = document.createElement("div");
    card.className = `vital-card${vital.missing ? " is-missing" : ""}`;
    const label = document.createElement("span");
    label.textContent = t(vital.labelKey);
    const value = document.createElement("strong");
    setSensitiveText(value, vital.valueKey ? t(vital.valueKey) : vital.value, "vital");
    card.append(label, value);
    container.append(card);
  });
}

function renderTimeline(items) {
  const list = $("#timelineList");
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const time = document.createElement("time");
    setSensitiveText(time, item.timeKey ? t(item.timeKey) : item.time, "time");
    const text = document.createElement("span");
    setSensitiveText(text, t(item.textKey));
    li.append(time, text);
    list.append(li);
  });
}

function renderList(container, keys) {
  container.innerHTML = "";
  keys.forEach((key) => {
    const li = document.createElement("li");
    setSensitiveText(li, t(key));
    container.append(li);
  });
}

function renderFollowUps(keys) {
  const container = $("#followUpList");
  container.innerHTML = "";
  keys.forEach((key) => {
    const item = document.createElement("div");
    item.className = "follow-up-item";
    const p = document.createElement("p");
    setSensitiveText(p, t(key));
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = t("addQuestion");
    button.disabled = state.privacyMasked;
    button.title = state.privacyMasked ? t("revealToInteract") : "";
    button.addEventListener("click", () => {
      $("#doctorInput").value = t(key);
      $("#doctorInput").focus();
      item.classList.add("is-done");
      button.textContent = t("markedDone");
      showToast(t("questionAdded"));
    });
    item.append(p, button);
    container.append(item);
  });
}

function renderTranscript(items) {
  const container = $("#transcriptList");
  container.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "small-muted";
    empty.textContent = t("noData");
    container.append(empty);
    return;
  }
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "transcript-item";
    const meta = document.createElement("div");
    meta.className = "transcript-meta";
    const speaker = document.createElement("strong");
    setSensitiveText(speaker, item.speakerText || t(item.speakerKey), "field");
    const time = document.createElement("span");
    setSensitiveText(time, item.time || "", "time");
    const p = document.createElement("p");
    setSensitiveText(p, item.text || t(item.textKey));
    meta.append(speaker, time);
    card.append(meta, p);
    container.append(card);
  });
}

function renderQuickPhrases() {
  const container = $("#quickPhrases");
  const keys = ["qLossConsciousness", "qMedication", "qBloodPressure", "qFoodFluid"];
  container.innerHTML = "";
  keys.forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-phrase";
    button.textContent = t(key);
    button.addEventListener("click", () => {
      $("#doctorInput").value = t(key);
      $("#doctorInput").focus();
    });
    container.append(button);
  });
}

function renderSymptomChoices() {
  const container = $("#symptomChoiceGrid");
  if (!container) return;
  const symptoms = ["fever", "cough", "headache", "dizziness", "chestDiscomfort", "abdominalPain", "shortnessOfBreath", "weakness", "appetiteLoss", "other"];
  container.innerHTML = "";
  symptoms.forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "symptom-chip";
    button.dataset.value = key;
    button.textContent = t(key);
    button.classList.toggle("is-selected", state.intake.symptom === key);
    button.addEventListener("click", () => {
      state.intake.symptom = key;
      $$(".symptom-chip", container).forEach((chip) => chip.classList.toggle("is-selected", chip === button));
      saveState();
    });
    container.append(button);
  });
}

function openIntake() {
  state.view = "intake";
  state.intake.step = 1;
  setView("intake");
  renderIntakeStep();
}

function renderIntakeStep() {
  const step = state.intake.step || 1;
  $$(".intake-step").forEach((section) => {
    const active = Number(section.dataset.step) === step;
    section.hidden = !active;
    section.classList.toggle("is-active", active);
  });
  $("#intakeProgressBar").style.width = `${step * 25}%`;
  $("#intakePrevButton").hidden = step === 1;
  $("#intakeNextButton").hidden = step === 4;
  if (step === 4) renderIntakeConfirmation();
  renderChoiceGroups();
}

function renderChoiceGroups() {
  $$('[data-choice-group]').forEach((group) => {
    const key = group.dataset.choiceGroup;
    $$('button[data-value]', group).forEach((button) => {
      button.classList.toggle("is-selected", state.intake[key] === button.dataset.value);
    });
  });
  $("#speakerLanguageSelect").value = state.intake.speakerLanguage || "zh-TW";
  $("#complaintText").value = state.intake.complaintText || "";
}

function intakeNext() {
  const step = state.intake.step;
  if (step === 1 && !state.intake.speakerRole) return showToast(t("selectRequired"));
  if (step === 2) {
    state.intake.complaintText = $("#complaintText").value.trim();
    if (!state.intake.symptom && !state.intake.complaintText) return showToast(t("complaintRequired"));
  }
  if (step === 3 && (!state.intake.onset || !state.intake.severity)) return showToast(t("selectRequired"));
  state.intake.step = Math.min(4, step + 1);
  renderIntakeStep();
  saveState();
}

function intakePrevious() {
  state.intake.step = Math.max(1, state.intake.step - 1);
  renderIntakeStep();
  saveState();
}

function renderIntakeConfirmation() {
  const container = $("#intakeConfirmation");
  if (!container) return;
  const roleMap = { patient: "patientSelf", family: "family", caregiver: "caregiver", staff: "onsiteStaff" };
  const languageMap = { "zh-TW": "traditionalChinese", en: "english", id: "Bahasa Indonesia", vi: "Tiếng Việt", th: "ภาษาไทย", fil: "Filipino" };
  const values = [
    ["speaker", t(roleMap[state.intake.speakerRole] || "noData")],
    ["language", t(languageMap[state.intake.speakerLanguage] || "noData")],
    ["complaint", state.intake.complaintText || (state.intake.symptom ? t(state.intake.symptom) : t("noData"))],
    ["onset", state.intake.onset ? t(state.intake.onset) : t("noData")],
    ["severity", state.intake.severity ? t(state.intake.severity) : t("noData")]
  ];
  const dl = document.createElement("dl");
  values.forEach(([labelKey, value]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = t(labelKey);
    dd.textContent = value;
    row.append(dt, dd);
    dl.append(row);
  });
  container.innerHTML = "";
  container.append(dl);
}

function completeIntake() {
  const roleMap = { patient: "patientSelf", family: "family", caregiver: "caregiver", staff: "onsiteStaff" };
  const complaint = state.intake.complaintText || t(state.intake.symptom);
  state.patient = {
    type: "intake",
    nameKey: "sampleName", metaKey: "sampleMeta", avatar: state.uiLanguage === "zh-TW" ? "新" : "N",
    providerKey: roleMap[state.intake.speakerRole] || "patientSelf",
    languageKey: state.intake.speakerLanguage === "en" ? "english" : "traditionalChinese",
    contextKey: "formGenerated", historyKey: "pendingVerification", medsKey: "unknownMedication", allergyKey: "pendingVerification",
    complaintKey: "__dynamicComplaint", originalKey: "__dynamicComplaint", translatedKey: "__dynamicComplaint",
    concernKey: "simpleConcern", expectationKey: "simpleExpectation", summaryKey: "__dynamicSummary", completeness: 46,
    vitalsTimeKey: "notMeasured",
    vitals: [
      { labelKey: "vitalTemperature", valueKey: "notMeasured", missing: true }, { labelKey: "vitalHeartRate", valueKey: "notMeasured", missing: true },
      { labelKey: "vitalBloodPressure", valueKey: "notMeasured", missing: true }, { labelKey: "vitalStandingBP", valueKey: "notMeasured", missing: true },
      { labelKey: "vitalOxygen", valueKey: "notMeasured", missing: true }, { labelKey: "vitalRespiratoryRate", valueKey: "notMeasured", missing: true }
    ],
    timeline: [{ timeKey: state.intake.onset || "notSure", textKey: "__dynamicComplaint" }],
    priority: [], missing: ["missingOne", "missingTwo"], followUps: ["qMedication", "qFoodFluid"],
    transcript: [{ speakerText: t(roleMap[state.intake.speakerRole] || "patientSelf"), text: complaint, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }],
    speakerBadgeKey: roleMap[state.intake.speakerRole] || "patientSelf",
    dynamicComplaint: complaint,
    dynamicSummary: `${complaint} ${t("formGenerated")}.`
  };
  state.reviewStatus = "pending";
  state.privacyMasked = true;
  state.lastOrganized = Date.now();
  state.view = "workspace";
  patchDynamicTranslations();
  renderAll();
  showToast(t("intakeComplete"));
}

function patchDynamicTranslations() {
  if (!state.patient || state.patient.type !== "intake") return;
  translations[state.uiLanguage].__dynamicComplaint = state.patient.dynamicComplaint;
  translations[state.uiLanguage].__dynamicSummary = state.patient.dynamicSummary;
}

function addDoctorNote(text) {
  const value = (text || $("#doctorInput").value).trim();
  if (!value || !state.patient) return;
  state.patient.transcript.push({ speakerText: t("speakerDoctor"), text: value, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) });
  $("#doctorInput").value = "";
  renderTranscript(state.patient.transcript);
  saveState();
  showToast(t("noteAdded"));
}

function confirmSummary() {
  if (state.privacyMasked) return showToast(t("revealToInteract"));
  state.reviewStatus = "confirmed";
  renderWorkspace();
  saveState();
  showToast(t("confirmedSuccess"));
}

async function copySummary() {
  const text = $("#clinicalSummary").textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch (_) {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  showToast(t("copySuccess"));
}

function exportHandoff() {
  if (!state.patient) return;
  const content = [
    `Clinical Companion ${APP_VERSION}`,
    `${t("preVisitSummary")}`,
    "",
    `${t("patientOverview")}: ${privacyText(t(state.patient.nameKey), "name")} / ${privacyText(t(state.patient.metaKey), "field")}`,
    `${t("dataProvider")}: ${privacyText(t(state.patient.providerKey), "field")}`,
    `${t("chiefComplaint")}: ${$("#chiefComplaint").textContent}`,
    "",
    `${t("preVisitSummary")}:`,
    $("#clinicalSummary").textContent,
    "",
    `${t("priorityChecks")}:`,
    ...state.patient.priority.map((key) => `- ${privacyText(t(key))}`),
    "",
    `${t("missingInformation")}:`,
    ...state.patient.missing.map((key) => `- ${privacyText(t(key))}`)
  ].join("\n");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = state.uiLanguage === "zh-TW" ? "診前交接摘要.txt" : "pre-visit-handoff.txt";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast(t("exportSuccess"));
}

function setMobilePanel(panelId) {
  state.currentMobilePanel = panelId;
  $$(".workspace-panel").forEach((panel) => panel.classList.toggle("is-mobile-active", panel.id === panelId));
  $$(".mobile-nav [data-mobile-panel]").forEach((button) => button.classList.toggle("is-active", button.dataset.mobilePanel === panelId));
  saveState();
}

function toggleSidePanel(force) {
  const open = force ?? !elements.sidePanel.classList.contains("is-open");
  elements.sidePanel.classList.toggle("is-open", open);
  $("#menuButton").setAttribute("aria-expanded", String(open));
}

function setupSpeech(button, target, statusElement, languageGetter) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    button.addEventListener("click", () => showToast(t("speechUnsupported")));
    return;
  }
  button.addEventListener("click", () => {
    if (speechController) {
      speechController.stop();
      speechController = null;
      button.classList.remove("is-listening");
      button.setAttribute("aria-pressed", "false");
      statusElement.textContent = t("speechStopped");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = languageGetter();
    recognition.interimResults = true;
    recognition.continuous = false;
    speechController = recognition;
    recognition.onstart = () => {
      button.classList.add("is-listening");
      button.setAttribute("aria-pressed", "true");
      statusElement.textContent = t("listening");
    };
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) transcript += event.results[i][0].transcript;
      target.value = transcript;
      if (target.id === "complaintText") state.intake.complaintText = transcript;
    };
    recognition.onerror = () => { statusElement.textContent = t("speechError"); };
    recognition.onend = () => {
      speechController = null;
      button.classList.remove("is-listening");
      button.setAttribute("aria-pressed", "false");
      if (!statusElement.textContent.includes(t("speechError"))) statusElement.textContent = t("speechStopped");
    };
    recognition.start();
  });
}

function bindEvents() {
  $("#loadDemoButton").addEventListener("click", () => loadDemo("caregiver"));
  $("#sideDemoButton").addEventListener("click", () => loadDemo("caregiver"));
  $("#welcomeDemoButton").addEventListener("click", () => loadDemo("caregiver"));
  $("#openIntakeButton").addEventListener("click", openIntake);
  $("#welcomeIntakeButton").addEventListener("click", openIntake);
  $("#closeIntakeButton").addEventListener("click", () => setView(state.patient ? "workspace" : "welcome"));

  elements.privacyToggleButton.addEventListener("click", () => {
    state.privacyMasked = !state.privacyMasked;
    renderAll();
    showToast(t(state.privacyMasked ? "personalDataMasked" : "personalDataVisible"));
  });

  elements.languageSelect.addEventListener("change", (event) => {
    state.uiLanguage = event.target.value;
    patchDynamicTranslations();
    renderAll();
  });

  $("#menuButton").addEventListener("click", () => toggleSidePanel());
  $("#moreButton").addEventListener("click", () => {
    const willOpen = elements.moreMenu.hidden;
    elements.moreMenu.hidden = !willOpen;
    $("#moreButton").setAttribute("aria-expanded", String(willOpen));
  });

  elements.moreMenu.addEventListener("click", (event) => {
    const action = event.target.closest("button")?.dataset.action;
    if (!action) return;
    elements.moreMenu.hidden = true;
    $("#moreButton").setAttribute("aria-expanded", "false");
    if (action === "demo-standard") loadDemo("standard");
    if (action === "demo-rural") loadDemo("rural");
    if (action === "demo-education") loadDemo("education");
    if (action === "reset") resetDemo();
  });

  document.addEventListener("click", (event) => {
    if (!elements.moreMenu.hidden && !elements.moreMenu.contains(event.target) && !$("#moreButton").contains(event.target)) {
      elements.moreMenu.hidden = true;
      $("#moreButton").setAttribute("aria-expanded", "false");
    }
    if (window.innerWidth <= 1180 && elements.sidePanel.classList.contains("is-open") && !elements.sidePanel.contains(event.target) && !$("#menuButton").contains(event.target)) {
      toggleSidePanel(false);
    }
  });

  $$(".mode-button").forEach((button) => button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    if (mode === "clinical") loadDemo("caregiver");
    if (mode === "rural") loadDemo("rural");
    if (mode === "education") loadDemo("education");
    toggleSidePanel(false);
  }));

  $("#toggleOriginalButton").addEventListener("click", () => {
    const wrap = $("#originalRecordWrap");
    const hidden = wrap.hidden;
    wrap.hidden = !hidden;
    $("#toggleOriginalButton").textContent = hidden ? t("collapseOriginal") : t("expandOriginal");
    $("#toggleOriginalButton").setAttribute("aria-expanded", String(hidden));
  });

  $("#addDoctorNoteButton").addEventListener("click", () => addDoctorNote());
  $("#doctorInput").addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") addDoctorNote();
  });
  $("#confirmSummaryButton").addEventListener("click", confirmSummary);
  $("#copySummaryButton").addEventListener("click", copySummary);
  $("#exportButton").addEventListener("click", exportHandoff);

  $("#addNoteButton").addEventListener("click", () => elements.noteDialog.showModal());
  $("#saveDialogNoteButton").addEventListener("click", (event) => {
    event.preventDefault();
    const value = $("#noteDialogText").value.trim();
    if (value) addDoctorNote(value);
    $("#noteDialogText").value = "";
    elements.noteDialog.close();
  });

  $$('[data-choice-group]').forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-value]");
      if (!button) return;
      const key = group.dataset.choiceGroup;
      state.intake[key] = button.dataset.value;
      $$('button[data-value]', group).forEach((item) => item.classList.toggle("is-selected", item === button));
      saveState();
    });
  });

  $("#speakerLanguageSelect").addEventListener("change", (event) => {
    state.intake.speakerLanguage = event.target.value;
    saveState();
  });
  $("#complaintText").addEventListener("input", (event) => { state.intake.complaintText = event.target.value; saveState(); });
  $("#intakeNextButton").addEventListener("click", intakeNext);
  $("#intakePrevButton").addEventListener("click", intakePrevious);
  $("#intakeConfirmButton").addEventListener("click", completeIntake);
  $("#intakeEditButton").addEventListener("click", () => { state.intake.step = 2; renderIntakeStep(); });

  $$(".mobile-nav [data-mobile-panel]").forEach((button) => button.addEventListener("click", () => setMobilePanel(button.dataset.mobilePanel)));
  $$("[data-close-panel]").forEach((button) => button.addEventListener("click", () => setMobilePanel("storyPanel")));
  $("#mobileVoiceButton").addEventListener("click", () => {
    setMobilePanel("storyPanel");
    $("#doctorVoiceButton").click();
  });

  setupSpeech($("#doctorVoiceButton"), $("#doctorInput"), $("#doctorVoiceStatus"), () => state.uiLanguage === "zh-TW" ? "zh-TW" : "en-US");
  setupSpeech($("#patientVoiceButton"), $("#complaintText"), $("#patientVoiceStatus"), () => state.intake.speakerLanguage === "en" ? "en-US" : "zh-TW");

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1180) toggleSidePanel(false);
    if (window.innerWidth > 820) $$(".workspace-panel").forEach((panel) => panel.classList.remove("is-mobile-active"));
    else setMobilePanel(state.currentMobilePanel || "storyPanel");
  });
}

patchDynamicTranslations();
bindEvents();
renderAll();
