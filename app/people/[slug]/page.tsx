import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { formatPhone, getPerson, people, telHref } from "@/data/people";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  return { title: person?.name ?? "Profile" };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();
  const intro = person.biography[0];
  const closing = person.biography.slice(1);

  return (
    <>
      <Navbar />
      <article className="profile">
        <div className="profile-crumb">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/people", label: "People" },
              { label: person.name },
            ]}
          />
        </div>

        <header className="profile-hero">
          <p className="label">{person.designation}</p>
          <h1>{person.name}</h1>
          {person.court ? <p className="profile-court">{person.court}</p> : null}
          {person.phone || person.email ? (
            <p className="profile-reach">
              {person.phone ? (
                <a href={telHref(person.phone)}>{formatPhone(person.phone)}</a>
              ) : null}
              {person.phone && person.email ? <span aria-hidden> · </span> : null}
              {person.email ? (
                <a href={`mailto:${person.email}`}>{person.email}</a>
              ) : null}
            </p>
          ) : null}

          <div className={`profile-photo ${person.livePhoto ? "live" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={person.portrait} alt={person.name} />
          </div>

          <div className="chips">
            {person.specialisations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </header>

        <div className="profile-body">
          <p className="profile-intro">{intro}</p>

          {person.areas?.length ? (
            <section className="profile-expertise">
              <p className="label">Area of Expertise</p>
              <div className={`profile-areas${person.areas.length > 3 ? " is-many" : ""}`}>
                {person.areas.map((area) => (
                  <article key={area.title}>
                    <p className="label">{area.title}</p>
                    <p>{area.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {closing.map((para) => (
            <p key={para.slice(0, 40)} className="profile-close">
              {para}
            </p>
          ))}

          {person.credentials ? (
            <ul className="profile-creds">
              {person.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          <footer className="profile-foot">
            <Button href="/contact">Discuss a matter →</Button>
          </footer>
        </div>
      </article>
    </>
  );
}
