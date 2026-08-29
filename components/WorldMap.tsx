"use client";

import { useState } from "react";
import { officeEmbedUrl, officeMapsUrl, site } from "@/data/site";

export function OfficeMap() {
  const [active, setActive] = useState(0);
  const office = site.offices[active];
  const { lat, lng } = office.coords;

  return (
    <div className="office-map">
      <div className="office-map-tabs" role="tablist" aria-label="Offices">
        {site.offices.map((item, index) => (
          <button
            key={item.city}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? "is-on" : undefined}
            onClick={() => setActive(index)}
          >
            {item.city}
          </button>
        ))}
      </div>
      <div className="office-map-canvas">
        <iframe
          key={office.city}
          title={`Kaivalya Law office, ${office.city}`}
          src={officeEmbedUrl(office)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="office-map-meta">
          <span>
            {lat.toFixed(4)}° N · {lng.toFixed(4)}° E
          </span>
          <a href={officeMapsUrl(office)} target="_blank" rel="noreferrer">
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}

export function IndiaMap() {
  return <OfficeMap />;
}
