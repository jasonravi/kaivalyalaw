import { site } from "@/data/site";

const { lat, lng } = site.headquarters.coords;
const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=16&hl=en&output=embed`;

export function OfficeMap() {
  return (
    <div className="office-map">
      <iframe
        title="Kaivalya Law office, Jhalwa, Prayagraj"
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="office-map-meta">
        <span>
          {lat.toFixed(4)}° N · {lng.toFixed(4)}° E
        </span>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          Open in Google Maps →
        </a>
      </div>
    </div>
  );
}

export function IndiaMap() {
  return <OfficeMap />;
}
