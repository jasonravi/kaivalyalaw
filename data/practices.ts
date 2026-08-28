export type Practice = {
  slug: string;
  number: string;
  name: string;
  short: string;
  overview: string;
  approach: string;
  capabilities: string[];
  experience: string;
  related: string[];
  people: string[];
  image?: string;
};

export const practices: Practice[] = [
  {
    slug: "banking-finance",
    number: "01",
    name: "Banking & Finance",
    short: "Counsel on lending, recovery, regulatory capital and financial disputes.",
    overview:
      "We advise financial institutions, funds and corporates on banking, finance and recovery matters, including disputes that sit at the intersection of regulation and commercial outcomes.",
    approach:
      "Financial matters require confidentiality, speed and technical fluency. We combine courtroom capability with an understanding of how institutions actually take decisions.",
    capabilities: [
      "Lending, security and recovery",
      "Financial disputes and arbitration",
      "Regulatory engagement",
      "Cross-border finance issues",
    ],
    experience:
      "The firm advises banks, financial institutions and corporates on lending, recovery, regulatory questions and financial disputes — with an emphasis on speed, confidentiality and a clear commercial outcome.",
    related: ["dispute-resolution-arbitration", "insolvency-restructuring", "commercial-contracts"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "commercial-contracts",
    number: "02",
    name: "Commercial Contracts",
    short: "Drafting, negotiation and enforcement of high-stakes commercial agreements.",
    overview:
      "We advise on commercial contracts for corporations, start-ups and institutions — from formation through dispute, including overseas contractual issues.",
    approach:
      "Contracts are commercial instruments first. We draft and dispute them with the same attention to leverage, risk allocation and enforceability.",
    capabilities: [
      "Negotiation and drafting",
      "Shareholders and collaboration agreements",
      "Cross-border contractual breach",
      "Enforcement strategy",
    ],
    experience:
      "The team has advised on collaboration and shareholders’ arrangements and handled civil and contract disputes, including overseas contractual breach.",
    related: ["mergers-acquisitions", "dispute-resolution-arbitration", "foreign-investment"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "dispute-resolution-arbitration",
    number: "03",
    name: "Dispute Resolution & Arbitration",
    short: "Litigation and arbitration across courts, tribunals and international seats.",
    overview:
      "Dispute resolution sits at the centre of the practice. We appear before the Supreme Court of India, High Courts, national tribunals and arbitral forums, and handle international arbitrations including challenge and enforcement.",
    approach:
      "We select the forum that serves the client’s commercial objective — court, tribunal or arbitration — and build a record that can travel across borders.",
    capabilities: [
      "Commercial litigation",
      "Domestic and international arbitration",
      "Challenge and enforcement of awards",
      "White collar and sensitive investigations",
    ],
    experience:
      "The team appears before the Supreme Court, High Courts and specialised agencies, and handles commercial litigation, arbitration and the challenge and enforcement of awards.",
    related: ["banking-finance", "insolvency-restructuring", "commercial-contracts"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "film-media-broadcast",
    number: "04",
    name: "Film, Media & Broadcast",
    short: "Counsel for film, media, advertising, sports and digital platforms.",
    overview:
      "We advise leading players in film, media, advertising, sports management and e-sports on disputes, contracts and regulatory questions.",
    approach:
      "Creative industries move quickly and publicly. We protect reputation, rights and deal certainty without slowing production.",
    capabilities: [
      "Media and entertainment disputes",
      "Rights, talent and production contracts",
      "Advertising and sports matters",
      "Platform and digital issues",
    ],
    experience:
      "The firm has represented leading players in film and media, advertising, sports management and e-sports on disputes, contracts and regulatory questions.",
    related: ["intellectual-property", "commercial-contracts", "dispute-resolution-arbitration"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
  },
  {
    slug: "foreign-investment",
    number: "05",
    name: "Foreign Investment",
    short: "Inbound and outbound investment, policy and cross-border structuring.",
    overview:
      "We assist clients on inbound and outbound investment, policy and structuring — with local insight and a sophisticated reading of how capital and regulation meet.",
    approach:
      "Investment questions are legal and political. We read the policy as it is written, then map the practical approval path.",
    capabilities: [
      "FDI policy and structuring",
      "Cross-border transactions",
      "Regulatory approvals",
      "Counsel for cross-border structuring",
    ],
    experience:
      "The firm publishes analysis of India’s FDI policy, including the 2020 consolidated policy and digital news and media caps. The work is rooted in Indian law, with a view to how investment questions travel.",
    related: ["mergers-acquisitions", "private-equity-venture-capital", "commercial-contracts"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "insolvency-restructuring",
    number: "06",
    name: "Insolvency & Restructuring",
    short: "IBC, restructuring strategy and distressed situations.",
    overview:
      "We advise on insolvency, restructuring and related disputes, including questions that arise before the NCLT and appellate forums.",
    approach:
      "Distress is a legal process and a commercial negotiation. We work the statute without losing sight of recovery.",
    capabilities: [
      "Insolvency and Bankruptcy Code matters",
      "Restructuring advice",
      "NCLT / NCLAT strategy",
      "Confidentiality in insolvency processes",
    ],
    experience:
      "The firm’s publications include analysis of decree holders as financial creditors under the IBC and confidentiality issues in the insolvency process.",
    related: ["banking-finance", "dispute-resolution-arbitration", "mergers-acquisitions"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "intellectual-property",
    number: "07",
    name: "Intellectual Property",
    short: "Trademarks, patents, copyright, designs and enforcement.",
    overview:
      "We advise corporations and start-ups on trademarks, patents, copyright, geographical indications and designs, including filings, prosecution, oppositions and cancellations in India and abroad.",
    approach:
      "IP is an asset and a dispute. We prosecute portfolios with the same discipline we bring to court.",
    capabilities: [
      "Filings and prosecution",
      "Oppositions and cancellations",
      "Searches and opinions",
      "Contentious IP",
    ],
    experience:
      "The firm advises on trademark and copyright portfolios for corporations and start-ups, and has published on phonetically generic marks and the Trademark Clearing House.",
    related: ["film-media-broadcast", "commercial-contracts", "dispute-resolution-arbitration"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "mergers-acquisitions",
    number: "08",
    name: "Mergers & Acquisitions",
    short: "Transactional counsel for acquisitions, collaborations and corporate change.",
    overview:
      "We advise on mergers, acquisitions and corporate transactions for multi-national corporations, funds, start-ups and institutions.",
    approach:
      "A deal is a sequence of risks. We identify the ones that matter and close around them.",
    capabilities: [
      "Acquisitions and collaborations",
      "Shareholders’ arrangements",
      "Corporate advisory",
      "Cross-border deal support",
    ],
    experience:
      "The firm provides transactional and advisory services to multi-national corporations, funds, angel investors and start-ups. Counsel have advised on collaboration and shareholders’ agreements for significant projects.",
    related: ["foreign-investment", "private-equity-venture-capital", "commercial-contracts"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85",
  },
  {
    slug: "private-equity-venture-capital",
    number: "09",
    name: "Private Equity & Venture Capital",
    short: "Funds, founders and investors across growth and control transactions.",
    overview:
      "We advise funds, angel investors and start-ups on investment, governance and disputes that follow capital.",
    approach:
      "Investment documents should still work when the relationship does not. We draft for that moment.",
    capabilities: [
      "Investment documentation",
      "Founder and fund advisory",
      "Governance disputes",
      "Exit and enforcement",
    ],
    experience:
      "Kaivalya Law provides legal services to funds, angel investors and start-ups alongside multi-national corporations and financial institutions.",
    related: ["foreign-investment", "mergers-acquisitions", "commercial-contracts"],
    people: ["manish-tiwari", "akhand-pratap-tripathi", "shwetabh-sharma"],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85",
  },
];

export function getPractice(slug: string) {
  return practices.find((item) => item.slug === slug);
}
