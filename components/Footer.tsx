import Link from "next/link";
import { formatPhone, telHref } from "@/data/people";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wide footer-top">
        <div>
          <p className="footer-brand">Kaivalya Law</p>
          <p style={{ marginTop: 16, letterSpacing: "0.16em", fontSize: 12, opacity: 0.7 }}>
            Prayagraj, Uttar Pradesh, India
          </p>
          <p style={{ marginTop: 16, maxWidth: 280, opacity: 0.75, lineHeight: 1.7 }}>
            {site.headquarters.lines.map((line) => (
              <span key={line} style={{ display: "block" }}>
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="label">Contact</p>
          <ul className="footer-contacts" style={{ marginTop: 16 }}>
            {site.contacts.map((person) => (
              <li key={person.name}>
                <span>{person.name}</span>
                {person.phone ? (
                  <a href={telHref(person.phone)}>{formatPhone(person.phone)}</a>
                ) : null}
                {person.email ? (
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Navigate</p>
          <ul style={{ marginTop: 16 }}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Legal</p>
          <ul style={{ marginTop: 16 }}>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wide footer-bottom">
        <span>© {new Date().getFullYear()} Kaivalya Law. All rights reserved.</span>
        <span>Prayagraj · Uttar Pradesh · India</span>
      </div>
    </footer>
  );
}
