import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { getPractice, practices } from "@/data/practices";
import { getPerson, people } from "@/data/people";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return practices.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  return { title: getPractice(params.slug)?.name ?? "Practice" };
}

export default function PracticePage({ params }: Props) {
  const practice = getPractice(params.slug);
  if (!practice) notFound();
  const relatedPeople = practice.people.map(getPerson).filter(Boolean);
  const shownPeople = relatedPeople.length ? relatedPeople : people;
  const relatedPractices = practice.related
    .map((slug) => practices.find((item) => item.slug === slug))
    .filter(Boolean);
  const index = practices.findIndex((item) => item.slug === practice.slug);
  const prev = practices[index - 1];
  const next = practices[index + 1];

  return (
    <>
      <Navbar />
      <article className="practice-page">
        <header className="practice-hero">
          <div className="container">
            <Breadcrumb
              items={[
                { href: "/", label: "Home" },
                { href: "/expertise", label: "Expertise" },
                { label: practice.name },
              ]}
            />
            <p className="label">{practice.number} — Practice</p>
            <h1>{practice.name}</h1>
            <p className="lede">{practice.short}</p>
            <div className="practice-hero-actions">
              <Button href="/contact">Discuss this matter →</Button>
              <Link className="btn" href="/expertise">
                All practices
              </Link>
            </div>
          </div>
        </header>

        <div className="practice-body">
          <div className="practice-intro">
            <section>
              <p className="label">Overview</p>
              <p>{practice.overview}</p>
            </section>
            <section>
              <p className="label">Our approach</p>
              <p>{practice.approach}</p>
            </section>
          </div>

          <section className="practice-caps">
            <p className="label">What we handle</p>
            <div className="cap-grid">
              {practice.capabilities.map((item, i) => (
                <article key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="practice-note">
            <p className="label">In practice</p>
            <p>{practice.experience}</p>
          </section>

          <section>
            <p className="label">Speak with the team</p>
            <div className="practice-people">
              {shownPeople.map((person) =>
                person ? (
                  <Link key={person.slug} className="practice-person" href={`/people/${person.slug}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={person.portrait} alt="" />
                    <div>
                      <strong>{person.name}</strong>
                      <span>{person.designation}</span>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </section>

          {relatedPractices.length ? (
            <section className="practice-related">
              <p className="label">Related expertise</p>
              <div className="practice-chips">
                {relatedPractices.map((item) =>
                  item ? (
                    <Link key={item.slug} href={`/expertise/${item.slug}`}>
                      {item.name} →
                    </Link>
                  ) : null
                )}
              </div>
            </section>
          ) : null}

          <div className="practice-cta-bar">
            <div>
              <p className="label">Next step</p>
              <h3>Let’s discuss your matter.</h3>
            </div>
            <Button href="/contact" light>
              Contact the firm →
            </Button>
          </div>

          <nav className="practice-pager" aria-label="Other practices">
            {prev ? (
              <Link href={`/expertise/${prev.slug}`}>
                <span>Previous</span>
                {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/expertise/${next.slug}`}>
                <span>Next</span>
                {next.name}
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </>
  );
}
