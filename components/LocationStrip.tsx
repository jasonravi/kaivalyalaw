import { firm } from "@/data/firm";

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
