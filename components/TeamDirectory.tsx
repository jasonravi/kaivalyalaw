"use client";

import { useMemo, useState } from "react";
import { people, type RoleGroup } from "@/data/people";
import { TeamCard } from "./TeamCard";

const filters: { id: "all" | RoleGroup; label: string }[] = [
  { id: "all", label: "All" },
  { id: "partners", label: "Partners" },
  { id: "counsel", label: "Counsel" },
  { id: "associates", label: "Associates" },
];

export function TeamDirectory({
  exclude,
  showFilters = false,
}: {
  exclude?: string;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const source = useMemo(
    () => (exclude ? people.filter((person) => person.slug !== exclude) : people),
    [exclude],
  );
  const available = useMemo(
    () =>
      filters.filter(
        (item) => item.id === "all" || source.some((person) => person.group === item.id),
      ),
    [source],
  );
  const list = filter === "all" ? source : source.filter((person) => person.group === filter);
  const showBar = showFilters && available.length > 2;

  return (
    <>
      {showBar ? (
        <div className="filters" role="tablist" aria-label="Team filters">
          {available.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? "on" : ""}
              type="button"
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
      {list.length ? (
        <div className={`dir ${list.length === 2 ? "dir-pair" : ""} ${list.length >= 3 ? "dir-chamber" : ""}`}>
          {list.map((person, index) => (
            <TeamCard
              key={person.slug}
              person={person}
              index={people.findIndex((item) => item.slug === person.slug)}
            />
          ))}
        </div>
      ) : (
        <p className="dir-empty">No one in this group yet.</p>
      )}
    </>
  );
}
