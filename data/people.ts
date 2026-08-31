export type RoleGroup = "partners" | "counsel" | "associates";

export type PracticeArea = {
  title: string;
  body: string;
};

export type Person = {
  slug: string;
  name: string;
  designation: string;
  group: RoleGroup;
  specialisations: string[];
  portrait: string;
  initials: string;
  livePhoto?: boolean;
  court?: string;
  summary: string;
  biography: string[];
  areas?: PracticeArea[];
  credentials?: string[];
  email?: string;
  phone?: string;
};

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return phone;
}

export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return `tel:+91${local}`;
}

export const people: Person[] = [
  {
    slug: "manish-tiwari",
    name: "Manish Tiwari",
    designation: "Partner",
    group: "partners",
    specialisations: ["Civil", "Criminal", "Taxation"],
    portrait: "/people/manish-tiwari.png",
    initials: "MT",
    livePhoto: true,
    court: "Different High Courts and District Courts of UP as well as Delhi",
    email: "manish.tiwari@kaivalyalaw.com",
    phone: "9990454928",
    summary:
      "Practicing advocate before different High Courts and District Courts of UP as well as Delhi, with a versatile practice spanning civil, criminal, and taxation matters.",
    biography: [
      "Manish Tiwari is a practicing advocate before different High Courts and District Courts of UP as well as Delhi, with a broad and versatile legal practice spanning civil, criminal, and taxation matters. Known for his methodical approach and strong command over procedural and substantive law, he represents clients in a wide range of disputes, from property and contractual issues to complex criminal litigation and tax-related proceedings.",
      "Manish Tiwari is valued for his client-focused approach, clear communication, and commitment to delivering practical, timely legal solutions.",
    ],
    areas: [
      {
        title: "Civil",
        body: "In the civil domain, he regularly handles cases involving property disputes, injunctions, recovery suits, and family matters, providing strategic counsel tailored to each client’s needs.",
      },
      {
        title: "Criminal",
        body: "His criminal practice includes both prosecution and defense work, where he is recognized for careful case analysis and effective courtroom advocacy.",
      },
      {
        title: "Taxation",
        body: "In taxation law, he advises and represents clients in matters related to direct and indirect taxes, assisting with compliance issues as well as litigation before appropriate authorities and courts.",
      },
    ],
  },
  {
    slug: "akhand-pratap-tripathi",
    name: "Akhand Pratap Tripathi",
    designation: "Partner",
    group: "partners",
    specialisations: ["Constitutional", "Criminal", "Civil", "RERA", "Arbitration"],
    portrait: "/people/akhand-pratap-tripathi.png",
    initials: "AT",
    livePhoto: true,
    court: "Allahabad High Court",
    email: "akhand.tripathi@kaivalyalaw.com",
    phone: "9958395181",
    summary:
      "Counsel across civil, criminal, constitutional, commercial and regulatory litigation, with substantial experience before High Courts, tribunals and subordinate courts.",
    biography: [
      "Our practice encompasses a broad spectrum of civil, criminal, constitutional, commercial, and regulatory litigation, with substantial experience before various High Courts, tribunals, and subordinate courts.",
      "The practice is supported by extensive experience in legal research, strategic litigation, case preparation, pleadings, and comprehensive legal drafting, with a focus on providing effective and well-structured legal representation across diverse areas of law.",
    ],
    areas: [
      {
        title: "Constitutional & Writ Jurisdiction",
        body: "Extensive experience in drafting and filing writ petitions before the Allahabad High Court, including Service Writs, Criminal Writs, RERA-related Writs, and matters involving public authorities and statutory bodies.",
      },
      {
        title: "Real Estate & RERA Matters",
        body: "Representation in RERA Appeals, RERA Writ Petitions, and related real estate disputes.",
      },
      {
        title: "Civil & Commercial Litigation",
        body: "Handling civil disputes, commercial matters, company-related litigation, and proceedings before competent judicial and quasi-judicial forums.",
      },
      {
        title: "Criminal Litigation",
        body: "Experience in Criminal Appeals, Criminal Writs, Bail Applications, Capital Cases, and other criminal proceedings before the High Court and subordinate courts.",
      },
      {
        title: "Contempt Proceedings",
        body: "Drafting and handling Civil Contempt Petitions and proceedings arising from non-compliance with judicial orders.",
      },
      {
        title: "Arbitration & Dispute Resolution",
        body: "Handling arbitration matters, including proceedings arising out of commercial and contractual disputes.",
      },
      {
        title: "Land Acquisition & Revenue Matters",
        body: "Representation in Land Acquisition disputes, revenue matters, and proceedings before the Revenue Board and other relevant authorities.",
      },
      {
        title: "Tribunal Litigation",
        body: "Experience before specialised forums, including DRT, DRAT, NCLT, CESTAT, CAT, and the Revenue Board.",
      },
      {
        title: "District Court Litigation",
        body: "Experience in both civil and criminal proceedings before District and subordinate courts.",
      },
      {
        title: "Multi-Jurisdictional Practice",
        body: "Professional experience before the Allahabad High Court, Patna High Court, and Delhi High Court, in addition to various tribunals and subordinate courts.",
      },
      {
        title: "Legal Drafting",
        body: "Extensive expertise in legal drafting, including writ petitions, appeals, applications, pleadings, legal notices, affidavits, petitions, written submissions, and other legal documents.",
      },
      {
        title: "Corporate & Company Matters",
        body: "Handling company and corporate matters, including litigation, legal documentation, and proceedings before appropriate judicial and regulatory forums.",
      },
    ],
  },
  {
    slug: "swetabh-sharma",
    name: "Swetabh Sharma",
    designation: "Partner",
    group: "partners",
    specialisations: ["Civil", "Criminal", "Constitutional", "Arbitration", "Tribunals"],
    portrait: "/people/swetabh-sharma.png",
    initials: "SS",
    livePhoto: true,
    court: "Delhi High Court, specialised tribunals, and District Courts across Delhi and NCR",
    phone: "9560275734",
    summary:
      "Counsel across civil, criminal, constitutional, commercial, corporate and regulatory matters, with litigation before the Delhi High Court, specialised tribunals, and District Courts across Delhi and NCR.",
    biography: [
      "The practice encompasses a diverse range of civil, criminal, constitutional, commercial, corporate, and regulatory matters, with extensive experience in litigation and legal representation before the Delhi High Court, various specialised tribunals, and District Courts across Delhi and the National Capital Region (NCR).",
      "With experience across High Court litigation, criminal trials, specialised tribunals, arbitration proceedings, and corporate matters, the practice focuses on delivering strategic, well-researched, and effective legal representation tailored to the requirements of each matter.",
    ],
    areas: [
      {
        title: "Civil & Constitutional Litigation",
        body: "Extensive experience in drafting and filing various civil writ petitions and other proceedings before the Delhi High Court, involving complex legal and constitutional issues.",
      },
      {
        title: "Criminal Litigation",
        body: "Handling Criminal Appeals, Criminal Writ Petitions, Bail Applications, and other criminal proceedings before the High Court and subordinate courts.",
      },
      {
        title: "Criminal Trials",
        body: "Substantial experience in conducting and assisting in criminal trials before various District Courts across Delhi and NCR, including matters involving complex factual and legal issues.",
      },
      {
        title: "Arbitration & Dispute Resolution",
        body: "Handling arbitration proceedings and disputes arising from contractual, commercial, and business relationships.",
      },
      {
        title: "Tribunal & Regulatory Matters",
        body: "Experience in proceedings before specialised forums including the Debt Recovery Tribunal (DRT), Debt Recovery Appellate Tribunal (DRAT), National Company Law Tribunal (NCLT), Customs, Excise & Service Tax Appellate Tribunal (CESTAT), and Central Administrative Tribunal (CAT), Delhi.",
      },
      {
        title: "District Court Practice",
        body: "Representation in both civil and criminal matters before District and subordinate courts across Delhi and NCR.",
      },
      {
        title: "Corporate & Company Matters",
        body: "Handling company and corporate disputes, legal proceedings, and related advisory and documentation requirements.",
      },
      {
        title: "Legal Drafting",
        body: "Extensive expertise in legal drafting and documentation, including writ petitions, appeals, bail applications, pleadings, affidavits, applications, legal notices, written submissions, petitions, and other court-related documents.",
      },
      {
        title: "Legal Research & Litigation Strategy",
        body: "Strong experience in comprehensive legal research, preparation of cases, development of litigation strategy, and presenting well-structured legal arguments before judicial and quasi-judicial forums.",
      },
    ],
  },
];

export function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}
