import Link from "next/link";
import type { Person } from "@/data/people";

export function TeamCard({
  person,
  index,
}: {
  person: Person;
  index?: number;
}) {
  return (
    <Link className="person-tile" href={`/people/${person.slug}`}>
      {typeof index === "number" ? (
        <span className="chamber-num">{String(index + 1).padStart(2, "0")}</span>
      ) : null}
      <div className="avatar">
        <div className="avatar-clip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={person.portrait} alt={person.name} />
        </div>
        <span className="avatar-go" aria-hidden>
          →
        </span>
      </div>
      <div className="person-info">
        <h3>{person.name}</h3>
        <p>
          {person.designation}
          {person.court ? ` · ${person.court}` : ""}
        </p>
        <div className="person-areas">
          {person.specialisations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <span className="chamber-link">View profile</span>
      </div>
    </Link>
  );
}
