import { people } from "./people";

export const site = {
  name: "Kaivalya Law",
  tagline: "Law without borders. Counsel without compromise.",
  locationLine: "Prayagraj · Uttar Pradesh · India",
  headquarters: {
    city: "Prayagraj",
    state: "Uttar Pradesh",
    country: "India",
    lines: [
      "House No. 35/246, Dev Prayagam Colony, Phase-2",
      "IIIT Chauraha, Jhalwa",
      "Prayagraj, Uttar Pradesh – 211012",
    ],
    coords: {
      lat: 25.4296,
      lng: 81.7708,
    },
  },
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
