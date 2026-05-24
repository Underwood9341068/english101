import { useState, useMemo } from "react";

const students = [
  { name: "허서아", class: "초등 4 학년 월수금A", studentPhone: "01089419734", guardian1Type: "어머니", guardian1Phone: "01089419734", guardian2Type: "", guardian2Phone: "" },
  { name: "허다윤", class: "초등 4 학년 월수금A", studentPhone: "01034489896", guardian1Type: "어머니", guardian1Phone: "01034489896", guardian2Type: "", guardian2Phone: "" },
  { name: "최시원", class: "초등 4 학년 월수금A", studentPhone: "01076869980", guardian1Type: "어머니", guardian1Phone: "01076869980", guardian2Type: "", guardian2Phone: "" },
  { name: "한민호", class: "초등 4 학년 월수금B", studentPhone: "01036949570", guardian1Type: "어머니", guardian1Phone: "01036949570", guardian2Type: "", guardian2Phone: "" },
  { name: "윤서희", class: "초등 4 학년 월수금B", studentPhone: "01037673360", guardian1Type: "어머니", guardian1Phone: "01041154869", guardian2Type: "", guardian2Phone: "" },
  { name: "오승아", class: "초등 4 학년 월수금B", studentPhone: "01035419621", guardian1Type: "어머니", guardian1Phone: "01035419621", guardian2Type: "", guardian2Phone: "" },
  { name: "양시완", class: "초등 4 학년 월수금B", studentPhone: "01040992950", guardian1Type: "어머니", guardian1Phone: "01040992950", guardian2Type: "", guardian2Phone: "" },
  { name: "배연호", class: "초등 4 학년 월수금B", studentPhone: "01062787886", guardian1Type: "어머니", guardian1Phone: "01062787886", guardian2Type: "", guardian2Phone: "" },
  { name: "박보국", class: "초등 4 학년 월수금B", studentPhone: "01097302316", guardian1Type: "어머니", guardian1Phone: "01097302316", guardian2Type: "", guardian2Phone: "" },
  { name: "김채현", class: "초등 4 학년 월수금B", studentPhone: "01048161620", guardian1Type: "아버지", guardian1Phone: "01063262216", guardian2Type: "어머니", guardian2Phone: "01033993844" },
  { name: "강아린", class: "초등 4 학년 월수금B", studentPhone: "01047252403", guardian1Type: "어머니", guardian1Phone: "01047252403", guardian2Type: "", guardian2Phone: "" },
  { name: "오세현", class: "초등 5 학년 화목", studentPhone: "01020482096", guardian1Type: "어머니", guardian1Phone: "01020482096", guardian2Type: "", guardian2Phone: "" },
  { name: "김규리", class: "초등 5 학년 화목", studentPhone: "01089442587", guardian1Type: "어머니", guardian1Phone: "01089442587", guardian2Type: "", guardian2Phone: "" },
  { name: "조하준", class: "초등 5학년 월수금 A", studentPhone: "01062270292", guardian1Type: "어머니", guardian1Phone: "01062270292", guardian2Type: "", guardian2Phone: "" },
  { name: "장우진", class: "초등 5학년 월수금 A", studentPhone: "01046700671", guardian1Type: "어머니", guardian1Phone: "01046700671", guardian2Type: "", guardian2Phone: "" },
  { name: "임태희", class: "초등 5학년 월수금 A", studentPhone: "01042764219", guardian1Type: "어머니", guardian1Phone: "01052276293", guardian2Type: "", guardian2Phone: "" },
  { name: "윤다올", class: "초등 5학년 월수금 A", studentPhone: "01066753033", guardian1Type: "어머니", guardian1Phone: "01066753033", guardian2Type: "", guardian2Phone: "" },
  { name: "안대훈", class: "초등 5학년 월수금 A", studentPhone: "01032147718", guardian1Type: "기타", guardian1Phone: "01032147718", guardian2Type: "", guardian2Phone: "" },
  { name: "김지수", class: "초등 5학년 월수금 A", studentPhone: "01042276133", guardian1Type: "어머니", guardian1Phone: "01042276133", guardian2Type: "", guardian2Phone: "" },
  { name: "장우민", class: "초등 5학년 월수금 B", studentPhone: "01046700671", guardian1Type: "어머니", guardian1Phone: "01046700671", guardian2Type: "", guardian2Phone: "" },
  { name: "오윤수", class: "초등 5학년 월수금 B", studentPhone: "01082336029", guardian1Type: "어머니", guardian1Phone: "01034310708", guardian2Type: "", guardian2Phone: "" },
  { name: "여로아", class: "초등 5학년 월수금 B", studentPhone: "01046313876", guardian1Type: "어머니", guardian1Phone: "01046603876", guardian2Type: "", guardian2Phone: "" },
  { name: "이규리", class: "초등 5학년 월수금 B", studentPhone: "01023589587", guardian1Type: "아버지", guardian1Phone: "01095876885", guardian2Type: "어머니", guardian2Phone: "01051316885" },
  { name: "이규현", class: "초등 5학년 월수금 B", studentPhone: "01029252959", guardian1Type: "어머니", guardian1Phone: "01041188214", guardian2Type: "", guardian2Phone: "" },
  { name: "최민", class: "초등 5학년 월수금 B", studentPhone: "01097935207", guardian1Type: "어머니", guardian1Phone: "01092925207", guardian2Type: "", guardian2Phone: "" },
  { name: "김지효", class: "초등 5학년 월수금 B", studentPhone: "01085267399", guardian1Type: "어머니", guardian1Phone: "01085267399", guardian2Type: "", guardian2Phone: "" },
  { name: "나세연", class: "초등 5학년 월수금 B", studentPhone: "01047298696", guardian1Type: "어머니", guardian1Phone: "01047298696", guardian2Type: "", guardian2Phone: "" },
  { name: "이소명", class: "초등 6학년 화목 A", studentPhone: "01071318723", guardian1Type: "어머니", guardian1Phone: "01071318723", guardian2Type: "", guardian2Phone: "" },
  { name: "백지우", class: "초등 6학년 화목 A", studentPhone: "01031630815", guardian1Type: "기타", guardian1Phone: "01031630815", guardian2Type: "", guardian2Phone: "" },
  { name: "박채이", class: "초등 6학년 화목 A", studentPhone: "01088975896", guardian1Type: "어머니", guardian1Phone: "01088975896", guardian2Type: "", guardian2Phone: "" },
  { name: "김민채", class: "초등 6학년 화목 A", studentPhone: "01082352856", guardian1Type: "어머니", guardian1Phone: "01023300398", guardian2Type: "", guardian2Phone: "" },
  { name: "염유이", class: "초등 6학년 월수금 A", studentPhone: "01027434758", guardian1Type: "어머니", guardian1Phone: "01027434758", guardian2Type: "", guardian2Phone: "" },
  { name: "양하은", class: "초등 6학년 월수금 A", studentPhone: "01040992950", guardian1Type: "기타", guardian1Phone: "01040992950", guardian2Type: "", guardian2Phone: "" },
  { name: "유한선", class: "초등 6학년 월수금 A", studentPhone: "01093770079", guardian1Type: "어머니", guardian1Phone: "01093770079", guardian2Type: "", guardian2Phone: "" },
  { name: "조수연", class: "초등 6학년 월수금 A", studentPhone: "01089360228", guardian1Type: "기타", guardian1Phone: "01089360228", guardian2Type: "", guardian2Phone: "" },
  { name: "김윤기", class: "초등 6학년 월수금 A", studentPhone: "01042152736", guardian1Type: "어머니", guardian1Phone: "01042152736", guardian2Type: "", guardian2Phone: "" },
  { name: "김승엽", class: "초등 6학년 월수금 A", studentPhone: "01087775181", guardian1Type: "기타", guardian1Phone: "01087775181", guardian2Type: "", guardian2Phone: "" },
  { name: "이호", class: "초등 6학년 월수금 B", studentPhone: "01075047161", guardian1Type: "어머니", guardian1Phone: "01075047161", guardian2Type: "", guardian2Phone: "" },
  { name: "최온유", class: "초등 6학년 월수금 B", studentPhone: "01049769814", guardian1Type: "어머니", guardian1Phone: "01066020602", guardian2Type: "", guardian2Phone: "" },
  { name: "최민지", class: "초등 6학년 월수금 B", studentPhone: "01040641476", guardian1Type: "어머니", guardian1Phone: "01024141476", guardian2Type: "", guardian2Phone: "" },
  { name: "박지안", class: "초등 6학년 월수금 B", studentPhone: "01062415423", guardian1Type: "기타", guardian1Phone: "01094764399", guardian2Type: "", guardian2Phone: "" },
  { name: "김윤서", class: "초등 6학년 월수금 B", studentPhone: "01086482611", guardian1Type: "어머니", guardian1Phone: "01038532611", guardian2Type: "", guardian2Phone: "" },
  { name: "주가온", class: "초등 2,3 학년 화목 A", studentPhone: "01025341937", guardian1Type: "기타", guardian1Phone: "01025341937", guardian2Type: "", guardian2Phone: "" },
  { name: "유호승", class: "초등 2,3 학년 화목 A", studentPhone: "01046193163", guardian1Type: "기타", guardian1Phone: "01046193163", guardian2Type: "", guardian2Phone: "" },
  { name: "구동하", class: "초등 2,3 학년 화목 A", studentPhone: "01068222452", guardian1Type: "기타", guardian1Phone: "01068222452", guardian2Type: "", guardian2Phone: "" },
  { name: "김채원", class: "초등 파닉스 A", studentPhone: "01073860317", guardian1Type: "어머니", guardian1Phone: "01073860317", guardian2Type: "", guardian2Phone: "" },
  { name: "구려원", class: "초등 파닉스 C", studentPhone: "01068222452", guardian1Type: "어머니", guardian1Phone: "01068222452", guardian2Type: "", guardian2Phone: "" },
  { name: "이지유", class: "중등 1학년 월수 A", studentPhone: "01043781307", guardian1Type: "어머니", guardian1Phone: "01041188214", guardian2Type: "", guardian2Phone: "" },
  { name: "이소은", class: "중등 1학년 월수 A", studentPhone: "01021691707", guardian1Type: "어머니", guardian1Phone: "01047051707", guardian2Type: "", guardian2Phone: "" },
  { name: "이세윤", class: "중등 1학년 월수 A", studentPhone: "01075226443", guardian1Type: "어머니", guardian1Phone: "01075226443", guardian2Type: "", guardian2Phone: "" },
  { name: "오선율", class: "중등 1학년 월수 A", studentPhone: "01057853745", guardian1Type: "기타(고모님)", guardian1Phone: "01045349405", guardian2Type: "", guardian2Phone: "" },
  { name: "손예림", class: "중등 1학년 월수 A", studentPhone: "01085455476", guardian1Type: "어머니", guardian1Phone: "01085455476", guardian2Type: "", guardian2Phone: "" },
  { name: "김시현", class: "중등 1학년 월수 A", studentPhone: "01054376431", guardian1Type: "기타", guardian1Phone: "01052056431", guardian2Type: "", guardian2Phone: "" },
  { name: "정태랑", class: "중등 1 학년 화목", studentPhone: "01094220996", guardian1Type: "어머니", guardian1Phone: "01094220996", guardian2Type: "", guardian2Phone: "" },
  { name: "신윤희", class: "중등 1 학년 화목", studentPhone: "01089793187", guardian1Type: "어머니", guardian1Phone: "01089793187", guardian2Type: "", guardian2Phone: "" },
  { name: "문소윤", class: "중등 1 학년 화목", studentPhone: "01047173019", guardian1Type: "기타", guardian1Phone: "01071743019", guardian2Type: "", guardian2Phone: "" },
  { name: "김예진", class: "중등 1 학년 화목", studentPhone: "01057070622", guardian1Type: "기타", guardian1Phone: "01092650622", guardian2Type: "", guardian2Phone: "" },
  { name: "김시헌", class: "중등 1 학년 화목", studentPhone: "01053394982", guardian1Type: "기타", guardian1Phone: "01031254982", guardian2Type: "", guardian2Phone: "" },
  { name: "이환", class: "중등 2학년 월수 A", studentPhone: "01086093372", guardian1Type: "어머니", guardian1Phone: "01050213372", guardian2Type: "", guardian2Phone: "" },
  { name: "이해준", class: "중등 2학년 월수 A", studentPhone: "01095726243", guardian1Type: "어머니", guardian1Phone: "01038826243", guardian2Type: "", guardian2Phone: "" },
  { name: "이해강", class: "중등 2학년 월수 A", studentPhone: "01095716243", guardian1Type: "어머니", guardian1Phone: "01038826243", guardian2Type: "", guardian2Phone: "" },
  { name: "여이레", class: "중등 2학년 월수 A", studentPhone: "01090739530", guardian1Type: "어머니", guardian1Phone: "01090455743", guardian2Type: "", guardian2Phone: "" },
  { name: "유동엽", class: "중등 2학년 월수 A", studentPhone: "01046193163", guardian1Type: "기타", guardian1Phone: "01046193163", guardian2Type: "", guardian2Phone: "" },
  { name: "김정우", class: "중등 2학년 월수 A", studentPhone: "01064423551", guardian1Type: "기타", guardian1Phone: "01091453551", guardian2Type: "", guardian2Phone: "" },
  { name: "김윤재", class: "중등 2학년 월수 A", studentPhone: "01068585439", guardian1Type: "어머니", guardian1Phone: "01042152736", guardian2Type: "", guardian2Phone: "" },
  { name: "김라희", class: "중등 2학년 월수 A", studentPhone: "01087285204", guardian1Type: "기타", guardian1Phone: "01052505204", guardian2Type: "", guardian2Phone: "" },
  { name: "박종연", class: "중등 2학년 월수 A", studentPhone: "01041948094", guardian1Type: "어머니", guardian1Phone: "01041948094", guardian2Type: "", guardian2Phone: "" },
  { name: "윤성준", class: "중등 2학년 월수 B", studentPhone: "01062634869", guardian1Type: "어머니", guardian1Phone: "01041154869", guardian2Type: "", guardian2Phone: "" },
  { name: "이지우B", class: "중등 2학년 월수 B", studentPhone: "01025447974", guardian1Type: "어머니", guardian1Phone: "01046647974", guardian2Type: "", guardian2Phone: "" },
  { name: "이지우A", class: "중등 2학년 월수 B", studentPhone: "01056133813", guardian1Type: "어머니", guardian1Phone: "01043813813", guardian2Type: "", guardian2Phone: "" },
  { name: "엄지예", class: "중등 2학년 월수 B", studentPhone: "01040783552", guardian1Type: "어머니", guardian1Phone: "01042083552", guardian2Type: "", guardian2Phone: "" },
  { name: "배서준", class: "중등 2학년 월수 B", studentPhone: "01043987125", guardian1Type: "어머니", guardian1Phone: "01025817125", guardian2Type: "", guardian2Phone: "" },
  { name: "김시은", class: "중등 2학년 월수 B", studentPhone: "01053297909", guardian1Type: "어머니", guardian1Phone: "01099277909", guardian2Type: "", guardian2Phone: "" },
  { name: "김지아", class: "중등 2학년 월수 B", studentPhone: "01037375273", guardian1Type: "어머니", guardian1Phone: "01088871511", guardian2Type: "", guardian2Phone: "" },
  { name: "이희국", class: "중등 2학년 월수 C", studentPhone: "01085917416", guardian1Type: "어머니", guardian1Phone: "01085917416", guardian2Type: "", guardian2Phone: "" },
  { name: "이지민", class: "중등 2학년 월수 C", studentPhone: "01043207679", guardian1Type: "어머니", guardian1Phone: "01088446660", guardian2Type: "", guardian2Phone: "" },
  { name: "이은혜", class: "중등 2학년 월수 C", studentPhone: "01025589179", guardian1Type: "어머니", guardian1Phone: "01032440071", guardian2Type: "", guardian2Phone: "" },
  { name: "오준호", class: "중등 2 학년 화목 A", studentPhone: "01050395112", guardian1Type: "기타", guardian1Phone: "01050395112", guardian2Type: "", guardian2Phone: "" },
  { name: "임서율", class: "중등 2 학년 화목 A", studentPhone: "01037849351", guardian1Type: "기타", guardian1Phone: "01035249351", guardian2Type: "", guardian2Phone: "" },
  { name: "정하연", class: "중등 2 학년 화목 A", studentPhone: "01087480581", guardian1Type: "어머니", guardian1Phone: "01087480581", guardian2Type: "", guardian2Phone: "" },
  { name: "여인서", class: "중등 2 학년 화목 A", studentPhone: "01037635767", guardian1Type: "어머니", guardian1Phone: "01063196071", guardian2Type: "", guardian2Phone: "" },
  { name: "오세희", class: "중등 2 학년 화목 A", studentPhone: "01062219032", guardian1Type: "어머니", guardian1Phone: "01040802789", guardian2Type: "", guardian2Phone: "" },
  { name: "박서윤", class: "중등 2 학년 화목 A", studentPhone: "01053712367", guardian1Type: "어머니", guardian1Phone: "01090582367", guardian2Type: "", guardian2Phone: "" },
  { name: "김지현", class: "중등 2 학년 화목 A", studentPhone: "01036172013", guardian1Type: "어머니", guardian1Phone: "01052632013", guardian2Type: "", guardian2Phone: "" },
  { name: "최민준", class: "중등 2학년 월수 B", studentPhone: "01053341223", guardian1Type: "기타", guardian1Phone: "01053341223", guardian2Type: "", guardian2Phone: "" },
  { name: "이형근", class: "중등 3학년 월수 A", studentPhone: "01043275874", guardian1Type: "어머니", guardian1Phone: "01027295874", guardian2Type: "", guardian2Phone: "" },
  { name: "이현호", class: "중등 3학년 월수 A", studentPhone: "01040101168", guardian1Type: "어머니", guardian1Phone: "01071770934", guardian2Type: "", guardian2Phone: "" },
  { name: "김해율", class: "중등 3학년 월수 A", studentPhone: "01050336453", guardian1Type: "어머니", guardian1Phone: "01050336453", guardian2Type: "", guardian2Phone: "" },
  { name: "김진현", class: "중등 3학년 월수 A", studentPhone: "01087775181", guardian1Type: "기타", guardian1Phone: "01087775181", guardian2Type: "", guardian2Phone: "" },
  { name: "심영제", class: "중등 3 학년 화목 A", studentPhone: "01023743881", guardian1Type: "어머니", guardian1Phone: "01071183871", guardian2Type: "", guardian2Phone: "" },
  { name: "최이안", class: "중등 3 학년 화목 A", studentPhone: "01092241808", guardian1Type: "어머니", guardian1Phone: "01036251808", guardian2Type: "", guardian2Phone: "" },
  { name: "정진성", class: "중등 3 학년 화목 A", studentPhone: "01095266533", guardian1Type: "기타", guardian1Phone: "01095266533", guardian2Type: "", guardian2Phone: "" },
  { name: "백윤우", class: "중등 3 학년 화목 A", studentPhone: "01031630815", guardian1Type: "기타", guardian1Phone: "01031630815", guardian2Type: "", guardian2Phone: "" },
  { name: "김민결", class: "중등 3 학년 화목 A", studentPhone: "01043459057", guardian1Type: "기타", guardian1Phone: "01032719057", guardian2Type: "", guardian2Phone: "" },
  { name: "마사랑", class: "중등 3학년 화목 B", studentPhone: "01066496856", guardian1Type: "어머니", guardian1Phone: "01090410705", guardian2Type: "", guardian2Phone: "" },
  { name: "김찬희", class: "중등 3학년 화목 B", studentPhone: "01037963491", guardian1Type: "어머니", guardian1Phone: "01077910321", guardian2Type: "", guardian2Phone: "" },
  { name: "강범구", class: "중등 3학년 화목 B", studentPhone: "01079043725", guardian1Type: "어머니", guardian1Phone: "01048121017", guardian2Type: "", guardian2Phone: "" },
  { name: "김수현", class: "중등 3학년 화목 B", studentPhone: "01096312145", guardian1Type: "어머니", guardian1Phone: "01086362145", guardian2Type: "", guardian2Phone: "" },
  { name: "전태오", class: "중등 3학년 화목 C", studentPhone: "01047613538", guardian1Type: "기타", guardian1Phone: "01047613538", guardian2Type: "", guardian2Phone: "" },
  { name: "이효준", class: "중등 3학년 화목 C", studentPhone: "01043699410", guardian1Type: "어머니", guardian1Phone: "01032109410", guardian2Type: "", guardian2Phone: "" },
  { name: "이하온", class: "중등 3학년 화목 C", studentPhone: "01089237775", guardian1Type: "어머니", guardian1Phone: "01089387775", guardian2Type: "", guardian2Phone: "" },
  { name: "이주승", class: "중등 3학년 화목 C", studentPhone: "01030870766", guardian1Type: "기타", guardian1Phone: "01062990766", guardian2Type: "", guardian2Phone: "" },
  { name: "박은서", class: "중등 3학년 화목 C", studentPhone: "01042037357", guardian1Type: "기타", guardian1Phone: "01042037357", guardian2Type: "", guardian2Phone: "" },
  { name: "강서율", class: "중등 3학년 화목 C", studentPhone: "01053004027", guardian1Type: "기타", guardian1Phone: "01053004027", guardian2Type: "", guardian2Phone: "" },
  { name: "추원우", class: "중등 3학년 화목 C", studentPhone: "", guardian1Type: "기타", guardian1Phone: "", guardian2Type: "", guardian2Phone: "" },
  { name: "이주승", class: "내신반(언남/중대부중 3학년) 화목", studentPhone: "01030870766", guardian1Type: "기타", guardian1Phone: "01062990766", guardian2Type: "", guardian2Phone: "" },
];

const CLASS_ORDER = [
  "초등 파닉스 A", "초등 파닉스 C",
  "초등 2,3 학년 화목 A",
  "초등 4 학년 월수금A", "초등 4 학년 월수금B",
  "초등 5 학년 화목", "초등 5학년 월수금 A", "초등 5학년 월수금 B",
  "초등 6학년 화목 A", "초등 6학년 월수금 A", "초등 6학년 월수금 B",
  "중등 1학년 월수 A", "중등 1 학년 화목",
  "중등 2학년 월수 A", "중등 2학년 월수 B", "중등 2학년 월수 C", "중등 2 학년 화목 A",
  "중등 3학년 월수 A", "중등 3 학년 화목 A", "중등 3학년 화목 B", "중등 3학년 화목 C",
  "내신반(언남/중대부중 3학년) 화목",
];

const GRADE_GROUPS = [
  { label: "초등 저학년", grades: ["초등 파닉스", "초등 2,3"] },
  { label: "초등 4학년", grades: ["초등 4"] },
  { label: "초등 5학년", grades: ["초등 5"] },
  { label: "초등 6학년", grades: ["초등 6"] },
  { label: "중등 1학년", grades: ["중등 1"] },
  { label: "중등 2학년", grades: ["중등 2"] },
  { label: "중등 3학년", grades: ["중등 3", "내신반"] },
];

function formatPhone(num) {
  if (!num) return "-";
  const d = num.replace(/\D/g, "");
  if (d.length === 11) return `${d.slice(0,3)}-${d.slice(3,7)}-${d.slice(7)}`;
  if (d.length === 10) return `${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6)}`;
  return num;
}

const TAG_COLORS = {
  "어머니": { bg: "#fce7f3", text: "#be185d" },
  "아버지": { bg: "#dbeafe", text: "#1e40af" },
  "기타": { bg: "#f3f4f6", text: "#374151" },
  "기타(고모님)": { bg: "#fef3c7", text: "#92400e" },
};

function GuardianTag({ type }) {
  const colors = TAG_COLORS[type] || { bg: "#f3f4f6", text: "#374151" };
  return (
    <span style={{
      fontSize: "11px", fontWeight: 600, padding: "2px 7px", borderRadius: "99px",
      background: colors.bg, color: colors.text, letterSpacing: "0.02em"
    }}>{type || "보호자"}</span>
  );
}

function StudentCard({ student }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "14px",
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      transition: "box-shadow 0.15s",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)"}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 800, fontSize: "15px", flexShrink: 0,
          fontFamily: "'Noto Sans KR', sans-serif",
        }}>
          {student.name[0]}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "16px", color: "#111827", fontFamily: "'Noto Sans KR', sans-serif" }}>
            {student.name}
          </div>
          <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "1px" }}>{student.class}</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px", paddingLeft: "4px" }}>
        {/* Student phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{
            fontSize: "11px", fontWeight: 600, padding: "2px 7px", borderRadius: "99px",
            background: "#ecfdf5", color: "#065f46"
          }}>학생</span>
          <a href={`tel:${student.studentPhone}`} style={{
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "14px", color: "#1d4ed8", textDecoration: "none", fontWeight: 500,
            letterSpacing: "0.03em"
          }}>
            {formatPhone(student.studentPhone)}
          </a>
        </div>

        {/* Guardian 1 */}
        {student.guardian1Phone && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <GuardianTag type={student.guardian1Type} />
            <a href={`tel:${student.guardian1Phone}`} style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "14px", color: "#1d4ed8", textDecoration: "none", fontWeight: 500,
              letterSpacing: "0.03em"
            }}>
              {formatPhone(student.guardian1Phone)}
            </a>
          </div>
        )}

        {/* Guardian 2 */}
        {student.guardian2Phone && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <GuardianTag type={student.guardian2Type} />
            <a href={`tel:${student.guardian2Phone}`} style={{
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "14px", color: "#1d4ed8", textDecoration: "none", fontWeight: 500,
              letterSpacing: "0.03em"
            }}>
              {formatPhone(student.guardian2Phone)}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedClass, setSelectedClass] = useState("전체");
  const [searchText, setSearchText] = useState("");
  const [activeGradeGroup, setActiveGradeGroup] = useState("전체");

  const allClasses = useMemo(() => CLASS_ORDER.filter(c => students.some(s => s.class === c)), []);

  const filteredStudents = useMemo(() => {
    let list = students;

    if (selectedClass !== "전체") {
      list = list.filter(s => s.class === selectedClass);
    }

    if (activeGradeGroup !== "전체" && selectedClass === "전체") {
      const group = GRADE_GROUPS.find(g => g.label === activeGradeGroup);
      if (group) {
        list = list.filter(s => group.grades.some(g => s.class.includes(g)));
      }
    }

    if (searchText.trim()) {
      const q = searchText.trim();
      list = list.filter(s =>
        s.name.includes(q) ||
        s.class.includes(q) ||
        s.studentPhone.includes(q) ||
        s.guardian1Phone.includes(q)
      );
    }

    return list;
  }, [selectedClass, searchText, activeGradeGroup]);

  const classesForGroup = useMemo(() => {
    if (activeGradeGroup === "전체") return allClasses;
    const group = GRADE_GROUPS.find(g => g.label === activeGradeGroup);
    if (!group) return allClasses;
    return allClasses.filter(c => group.grades.some(g => c.includes(g)));
  }, [activeGradeGroup, allClasses]);

  const handleGradeGroup = (label) => {
    setActiveGradeGroup(label);
    setSelectedClass("전체");
    setSearchText("");
  };

  const handleClass = (cls) => {
    setSelectedClass(cls);
    setSearchText("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8fafc",
      fontFamily: "'Noto Sans KR', -apple-system, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)",
        padding: "24px 20px 20px",
        color: "#fff",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{
              background: "#fff", borderRadius: "10px", padding: "6px 10px",
              display: "flex", flexDirection: "column", lineHeight: 1.1,
            }}>
              <span style={{ fontWeight: 900, fontSize: "18px", color: "#0f172a", letterSpacing: "-0.5px" }}>101</span>
              <span style={{ fontWeight: 700, fontSize: "8px", color: "#1e40af", letterSpacing: "1px" }}>ENGLISH</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.3px" }}>학생 연락처</div>
              <div style={{ fontSize: "12px", color: "#93c5fd", marginTop: "2px" }}>총 {students.length}명 · {allClasses.length}개 클래스</div>
            </div>
          </div>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)",
              fontSize: "16px", pointerEvents: "none"
            }}>🔍</span>
            <input
              type="text"
              placeholder="이름, 학년, 클래스, 번호로 검색..."
              value={searchText}
              onChange={e => { setSearchText(e.target.value); setSelectedClass("전체"); setActiveGradeGroup("전체"); }}
              style={{
                width: "100%", boxSizing: "border-box",
                padding: "12px 16px 12px 42px",
                borderRadius: "12px", border: "none",
                background: "rgba(255,255,255,0.15)",
                color: "#fff", fontSize: "14px",
                outline: "none", backdropFilter: "blur(8px)",
                "::placeholder": { color: "#94a3b8" },
              }}
            />
          </div>
        </div>
      </div>

      {/* Grade group tabs */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>
        <div style={{
          display: "flex", gap: "0", maxWidth: 700, margin: "0 auto",
          padding: "0 12px",
        }}>
          {["전체", ...GRADE_GROUPS.map(g => g.label)].map(label => (
            <button
              key={label}
              onClick={() => handleGradeGroup(label)}
              style={{
                padding: "12px 14px",
                background: "none", border: "none", cursor: "pointer",
                fontSize: "13px", fontWeight: activeGradeGroup === label ? 700 : 400,
                color: activeGradeGroup === label ? "#1d4ed8" : "#6b7280",
                borderBottom: activeGradeGroup === label ? "2.5px solid #1d4ed8" : "2.5px solid transparent",
                whiteSpace: "nowrap", transition: "all 0.15s",
                fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Class chips */}
      {!searchText && (
        <div style={{
          background: "#f8fafc",
          borderBottom: "1px solid #e5e7eb",
          padding: "10px 16px",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}>
          <div style={{ display: "flex", gap: "8px", maxWidth: 700, margin: "0 auto", flexWrap: "nowrap" }}>
            <button
              onClick={() => handleClass("전체")}
              style={{
                padding: "6px 14px", borderRadius: "99px", border: "none", cursor: "pointer",
                background: selectedClass === "전체" ? "#1d4ed8" : "#e5e7eb",
                color: selectedClass === "전체" ? "#fff" : "#374151",
                fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap",
                transition: "all 0.15s", fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              전체 클래스
            </button>
            {classesForGroup.map(cls => (
              <button
                key={cls}
                onClick={() => handleClass(cls)}
                style={{
                  padding: "6px 14px", borderRadius: "99px", border: "none", cursor: "pointer",
                  background: selectedClass === cls ? "#1d4ed8" : "#e5e7eb",
                  color: selectedClass === cls ? "#fff" : "#374151",
                  fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap",
                  transition: "all 0.15s", fontFamily: "'Noto Sans KR', sans-serif",
                }}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results count */}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "14px 16px 6px" }}>
        <div style={{ fontSize: "13px", color: "#6b7280", fontWeight: 500 }}>
          {searchText
            ? `"${searchText}" 검색 결과 · ${filteredStudents.length}명`
            : selectedClass !== "전체"
              ? `${selectedClass} · ${filteredStudents.length}명`
              : `${activeGradeGroup !== "전체" ? activeGradeGroup + " · " : ""}${filteredStudents.length}명`
          }
        </div>
      </div>

      {/* Student cards */}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "8px 16px 40px" }}>
        {filteredStudents.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "60px 0",
            color: "#9ca3af", fontSize: "14px",
          }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔍</div>
            검색 결과가 없습니다
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "12px",
          }}>
            {filteredStudents.map((student, i) => (
              <StudentCard key={`${student.name}-${i}`} student={student} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
