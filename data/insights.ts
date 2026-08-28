export type ArticleCategory = "LEGAL UPDATE" | "ANALYSIS" | "PUBLICATION";

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "msme-development-amendment-act-2026",
    title: "MSME Development (Amendment) Act, 2026 — Addressing Cash Crunch and Dispute Resolution",
    category: "LEGAL UPDATE",
    date: "2026",
    excerpt:
      "An update on the MSME Development (Amendment) Act, 2026, and its implications for cash flow and dispute resolution.",
    body: [
      "The firm has published analysis of the MSME Development (Amendment) Act, 2026, focusing on how the amendment addresses cash crunch and dispute resolution for micro, small and medium enterprises.",
      "Readers seeking the full text of this update should refer to the firm’s publications archive. This page presents the piece as listed on kaivalyalaw.com.",
    ],
  },
  {
    slug: "financial-arbitrations-the-way-forward-for-india",
    title: "Financial Arbitrations — The Way Forward for India",
    category: "ANALYSIS",
    date: "2020",
    excerpt:
      "Why banks are moving from public litigation to specialised arbitration, and what India still lacks.",
    body: [
      "Financial institutions have traditionally opted for litigation instead of arbitration. Courts offered interim measures, summary judgments and the public pressure of open proceedings. That paradigm has changed. Complex financial transactions and a need for confidentiality have pushed banks toward arbitration. In 2019, 32% of LCIA arbitrations and 58% of AAA arbitrations involved financial institutions.",
      "The 2008–09 financial crisis made clear the need for adjudicators who understand finance, and for private forums that do not move listed stocks through public distress. Awards are also typically easier to enforce than judgments that can be appealed repeatedly.",
      "Specialist infrastructure has followed: P.R.I.M.E. Finance in The Hague, ISDA model clauses, FINRA in the United States, CIETAC’s Financial Disputes Arbitration Rules, and summary procedures at SIAC, SCC, HKIAC and the ICC.",
      "India remains different. Financial disputes of scale continue to be heard largely by generalist retired judges. No dedicated financial arbitration body exists. The article recommends a panel in consultation with ICAI, and rule reform at Indian institutions, if India is to attract such work as an arbitration-friendly seat.",
    ],
  },
  {
    slug: "indian-fdi-policy-2020-key-changes",
    title: "Indian FDI Policy, 2020 — Key Changes",
    category: "ANALYSIS",
    date: "2020",
    excerpt:
      "The consolidated FDI policy of October 2020: neighbouring-country approvals, sector caps and e-commerce compliance.",
    body: [
      "In October 2020, DPIIT issued a consolidated FDI policy superseding prior press notes and circulars. It is India’s consolidated foreign-investment framework after a three-year gap.",
      "Investment from neighbouring countries sharing a land border with India, including China, requires government approval regardless of quantum — a response to opportunistic takeovers during the pandemic, including after the Chinese Central Bank’s acquisition of shares in HDFC Bank. Investment from Pakistan remains prohibited in defence, atomic energy, space and other barred sectors. Transfers resulting in restricted beneficial ownership also require approval.",
      "Sectoral changes include a 26% cap, with government approval, on digital news and media; an increase in defence manufacturing FDI from 49% to 74% under the automatic route, with conditions; and 100% FDI under the automatic route for single-brand retail trading.",
      "E-commerce entities with foreign investment face additional audit and related-party restrictions. Investments may be made in equity and specified convertible instruments under automatic or approval routes, with FC-TRS acknowledgement required before recording share transfers.",
    ],
  },
  {
    slug: "denial-of-protection-to-phonetically-generic-marks",
    title: "Denial of Protection to Phonetically Generic Marks — Delhi High Court",
    category: "LEGAL UPDATE",
    date: "2021",
    excerpt: "How the Delhi High Court has treated marks that are phonetically generic.",
    body: [
      "This publication examines Delhi High Court reasoning on the denial of protection to phonetically generic marks, as listed in the firm’s research archive.",
    ],
  },
  {
    slug: "fdi-policy-for-digital-news-media-platforms",
    title: "FDI Policy for Digital News & Media Platforms",
    category: "ANALYSIS",
    date: "2020",
    excerpt: "Investment caps and approval routes for digital news and current-affairs platforms.",
    body: [
      "The firm’s analysis of FDI policy for digital news and media platforms sits alongside the 2020 consolidated policy, including the 26% cap and government-approval route brought into line with print news.",
    ],
  },
  {
    slug: "grant-of-anti-arbitration-injunctions-in-india",
    title: "Grant of Anti-Arbitration Injunctions in India — Recent Developments",
    category: "ANALYSIS",
    date: "2021",
    excerpt: "Recent Indian developments on anti-arbitration injunctions.",
    body: [
      "This article surveys recent developments in the grant of anti-arbitration injunctions in India, as published in the firm’s insights archive.",
    ],
  },
  {
    slug: "decree-holders-as-financial-creditors",
    title: "Decree Holders as Financial Creditors — Can they approach NCLT under IBC?",
    category: "ANALYSIS",
    date: "2021",
    excerpt:
      "NCLAT’s examination of whether a decree holder may initiate CIRP as a financial creditor.",
    body: [
      "The NCLAT, in Sushil Ansal vs. Ashok Tripathi, examined whether a decree holder can initiate corporate insolvency resolution for execution of a decree. Although a decree holder falls within the definition of creditor under section 3(10) of the IBC, the tribunal held that CIRP cannot be used as a substitute for execution.",
      "The respondents had obtained a UP RERA recovery order against Ansal Infrastructure, then approached the NCLT under section 7 rather than execution proceedings. NCLT admitted the application; NCLAT analysed the definitions of financial creditor and financial debt, including the deeming fiction for real-estate allottees.",
    ],
  },
  {
    slug: "arbitrations-and-violations-of-rule-of-law",
    title: "Arbitrations and the Violations of Rule of Law — A Breach of Public Policy?",
    category: "PUBLICATION",
    date: "2020",
    excerpt: "Public policy and the rule of law as limits on arbitral process.",
    body: [
      "This publication considers whether violations of the rule of law in arbitral process engage public-policy grounds, as listed on the firm’s publications page.",
    ],
  },
  {
    slug: "arbitrability-of-fraud-in-india",
    title: "Arbitrability of Fraud in India",
    category: "ANALYSIS",
    date: "2020",
    excerpt: "The evolving Indian position on whether allegations of fraud can be arbitrated.",
    body: [
      "This analysis addresses the arbitrability of fraud in India, as published in the firm’s research and insights archive.",
    ],
  },
  {
    slug: "e-commerce-rules-2020",
    title: "E-Commerce Rules, 2020 — Consumer Protection in E-Commerce Markets in India",
    category: "LEGAL UPDATE",
    date: "2020",
    excerpt: "Consumer-protection rules for e-commerce marketplaces in India.",
    body: [
      "The firm has published on the E-Commerce Rules, 2020, and consumer protection in Indian e-commerce markets.",
    ],
  },
  {
    slug: "regulation-of-medical-devices-in-india",
    title: "The Regulation of Medical Devices in India",
    category: "LEGAL UPDATE",
    date: "2020",
    excerpt: "How medical devices are regulated in India.",
    body: [
      "This legal update examines the regulation of medical devices in India, as listed in the firm’s publications.",
    ],
  },
  {
    slug: "anti-maritime-piracy-bill-2019",
    title: "Anti Maritime Piracy Bill, 2019 — A fierce deterrent or a toothless tiger?",
    category: "PUBLICATION",
    date: "2019",
    excerpt: "An assessment of the Anti Maritime Piracy Bill, 2019.",
    body: [
      "This publication asks whether the Anti Maritime Piracy Bill, 2019 is a fierce deterrent or a toothless tiger.",
    ],
  },
  {
    slug: "trademark-clearing-house",
    title: "Trademark Clearing House: A proactive mechanism to fight cybersquatting",
    category: "ANALYSIS",
    date: "2019",
    excerpt: "Using the Trademark Clearing House against cybersquatting.",
    body: [
      "This analysis considers the Trademark Clearing House as a proactive mechanism against cybersquatting.",
    ],
  },
  {
    slug: "confidentiality-issues-in-insolvency-process",
    title: "Confidentiality Issues in Insolvency Process",
    category: "ANALYSIS",
    date: "2019",
    excerpt: "Confidentiality obligations and tensions in insolvency proceedings.",
    body: [
      "This article examines confidentiality issues in the insolvency process, as published by the firm.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

export const featuredArticles = articles.slice(0, 3);
