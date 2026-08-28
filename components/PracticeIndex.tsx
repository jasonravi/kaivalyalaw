"use client";

import { useState } from "react";
import Link from "next/link";
import { practices } from "@/data/practices";
import { getPerson } from "@/data/people";
import { JusticeScene } from "@/components/JusticeScene";

export function PracticeIndex() {
  const [active, setActive] = useState(practices[2].slug);

  return (
    <div className="practice-flow">
      <div className="practice-visual">
        <JusticeScene />
      </div>
      <div className="practice-stack">
        {practices.map((item) => {
          const on = item.slug === active;
          const leads = item.people
            .map((slug) => getPerson(slug))
            .filter(Boolean)
            .slice(0, 2);
          return (
            <Link
              key={item.slug}
              href={`/expertise/${item.slug}`}
              className={`practice-card ${on ? "is-on" : ""}`}
              onMouseEnter={() => setActive(item.slug)}
              onFocus={() => setActive(item.slug)}
            >
              <div className={`practice-card-media${item.image ? "" : " is-blank"}`}>
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.name} />
                ) : null}
                <span className="practice-card-index" aria-hidden>
                  {item.number}
                </span>
              </div>
              <div className="practice-card-copy">
                <span className="practice-card-num">{item.number}</span>
                <div className="practice-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                </div>
                <div className="practice-card-extra">
                  <div>
                    <div className="practice-pills">
                      {item.capabilities.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {leads.length ? (
                      <p className="practice-leads">
                        {leads.map((person) => person!.name).join(" · ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <span className="practice-card-go" aria-hidden>
                ↗
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
