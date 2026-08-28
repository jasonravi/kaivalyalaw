import type { Person } from "@/data/people";
import { Button } from "@/components/Button";

export function FeaturedPartner({ person }: { person: Person }) {
  return (
    <article className="people-featured">
      <div className="avatar avatar-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={person.portrait} alt={person.name} />
      </div>
      <div className="people-featured-copy">
        <p className="label">
          {person.designation}
          {person.court ? ` · ${person.court}` : ""}
        </p>
        <h3>{person.name}</h3>
        <p className="people-featured-bio">{person.biography[0] ?? person.summary}</p>
        <div className="person-areas">
          {person.specialisations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="people-featured-cta">
          <Button href={`/people/${person.slug}`}>View profile →</Button>
        </div>
      </div>
    </article>
  );
}
