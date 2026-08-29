import { people } from "./people";

export type Office = {
  city: string;
  state: string;
  country: string;
  lines: string[];
  query: string;
  coords: {
    lat: number;
    lng: number;
  };
};

export const offices: Office[] = [
  {
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    lines: ["B-93, Side Gate", "Sector-14", "Noida, Uttar Pradesh – 201301"],
    query: "B-93, Side Gate, Sector-14, Noida, Uttar Pradesh 201301",
    coords: { lat: 28.5836, lng: 77.319 },
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    lines: [
      "12, Sankalp City, Gali No. 14",
      "Ekta Nagar, Kalli Paschim",
      "Lucknow, Uttar Pradesh – 226014",
    ],
    query: "12 Sankalp City, Gali No 14, Ekta Nagar, Kalli Paschim, Lucknow, Uttar Pradesh 226014",
    coords: { lat: 26.7748, lng: 80.9435 },
  },
  {
    city: "Prayagraj",
    state: "Uttar Pradesh",
    country: "India",
    lines: [
      "House No. 35/246, Dev Prayagam Colony, Phase-2",
      "IIIT Chauraha, Jhalwa",
      "Prayagraj, Uttar Pradesh – 211012",
    ],
    query: "House No. 35/246, Dev Prayagam Colony, Phase-2, IIIT Chauraha, Jhalwa, Prayagraj, Uttar Pradesh 211012",
    coords: { lat: 25.4296, lng: 81.7708 },
  },
];

export function officeMapsUrl(office: Office) {
  return `https://www.google.com/maps?q=${encodeURIComponent(office.query)}`;
}

export function officeEmbedUrl(office: Office) {
  return `https://www.google.com/maps?q=${encodeURIComponent(office.query)}&z=16&hl=en&output=embed`;
}

export const site = {
  name: "Kaivalya Law",
  tagline: "Law without borders. Counsel without compromise.",
  offices,
  headquarters: offices[0],
  contacts: people.map((person) => ({
    name: person.name,
    email: person.email,
    phone: person.phone,
  })),
  social: {
    linkedin: "https://www.linkedin.com/company/kaivalyalaw",
    instagram: "https://www.linkedin.com/company/kaivalyalaw",
    facebook: "https://www.linkedin.com/company/kaivalyalaw",
  },
  nav: [
    { href: "/expertise", label: "Expertise" },
    { href: "/people", label: "People" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/pro-bono", label: "Pro Bono" },
    { href: "/contact", label: "Contact" },
  ],
};
