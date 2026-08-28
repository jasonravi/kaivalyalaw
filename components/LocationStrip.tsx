import { firm } from "@/data/firm";

export function LocationStrip() {
  return (
    <div className="firm-places">
      {firm.locations.map((item) => (
        <article className="firm-place" key={item.city}>
          <p className="label">{item.region}</p>
          <strong>{item.city}</strong>
        </article>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const row = [...firm.sectorLogos, ...firm.sectorLogos];
  return (
    <div className="marquee" aria-label="Sectors">
      <div className="marquee-track">
        {row.map((item, index) => (
          <span className="marquee-logo" key={`${item.brand}-${index}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={`${item.sector} — ${item.brand}`} />
          </span>
        ))}
      </div>
    </div>
  );
}