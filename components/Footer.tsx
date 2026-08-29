import Link from "next/link";
import { formatPhone, telHref } from "@/data/people";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wide">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Kaivalya Law</p>
            <p className="footer-heading">Offices</p>
            <div className="footer-offices">
              {site.offices.map((office) => (
                <p className="footer-address" key={office.city}>
                  <strong>{office.city}</strong>
                  {office.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-heading">Direct Contacts</p>
            <div className="footer-contact-list">
              {site.contacts.map((person) => (
                <div className="footer-contact-card" key={person.name}>
                  <p className="footer-contact-name">{person.name}</p>
                  <div className="footer-contact-details">
                    {person.phone ? (
                      <a className="footer-contact-link" href={telHref(person.phone)}>
                        {formatPhone(person.phone)}
                      </a>
                    ) : null}
                    {person.email ? (
                      <a className="footer-contact-link email" href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-heading">Navigate</p>
            <ul className="footer-nav">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Legal</p>
            <ul className="footer-nav">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kaivalya Law. All rights reserved.</span>
          <span>Legal Advocates & Consultants</span>
        </div>
      </div>
    </footer>
  );
}
