import { people } from "@/data/people";
import { TeamCard } from "./TeamCard";

export function TeamScroller() {
  return (
    <div className="team-scroll">
      {people.slice(0, 3).map((person) => (
        <TeamCard key={person.slug} person={person} />
      ))}
    </div>
  );
}
