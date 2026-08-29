import { SectionLabel } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { formatPhone, people, telHref } from "@/data/people";
import { officeMapsUrl, site } from "@/data/site";

export function ContactSuite({
  numbered = false,
  lead = true,
}: {
  numbered?: boolean;
  lead?: boolean;
}) {
  return (
    <>
      <section className="section section-ink contact-block" id="contact">
        <div className="wide">
          <SectionLabel>{numbered ? "07 — Contact" : "Offices"}</SectionLabel>
          {lead ? (
            <>
              <h2>
                Let’s talk about
                <br />
                what comes next.
              </h2>
              <p className="lede">
                For legal advice, strategic counsel or a discussion about a complex matter,
                speak with the partnership. Every enquiry is treated as confidential.
              </p>
            </>
          ) : (
            <h2>
              The practice
              <br />
              appears across India.
            </h2>
          )}

          <div className="contact-grid">
            <div className="contact-plaque">
              <p className="label">Visit</p>
              <div className="office-entries">
                {site.offices.map((office) => (
                  <article className="office-entry" key={office.city}>
                    <p className="contact-city">{office.city}</p>
                    {office.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <a
                      className="contact-map"
                      href={officeMapsUrl(office)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in maps →
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="contact-write">
              <p className="label">Write</p>
              {site.contacts.map((person) => {
                const match = people.find((item) => item.name === person.name);
                return (
                  <div key={person.name} className="contact-person">
                    {match ? (
                      <span className="contact-face">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={match.portrait} alt="" />
                      </span>
                    ) : null}
                    <span>
                      <strong>{person.name}</strong>
                      {person.phone ? (
                        <a href={telHref(person.phone)}>{formatPhone(person.phone)}</a>
                      ) : null}
                      {person.email ? (
                        <a href={`mailto:${person.email}`}>{person.email}</a>
                      ) : null}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ivory enquiry-block" id="enquiry">
        <div className="wide enquiry-shell">
          <div className="enquiry-intro">
            <SectionLabel>{numbered ? "08 — Enquiry" : "Enquiry"}</SectionLabel>
            <h2>Tell us about the matter.</h2>
            <p className="lede">
              Share a brief note on the issue. We will review it in confidence and revert
              to the right person in the partnership.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
