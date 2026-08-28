import Link from "next/link";
import { practices } from "@/data/practices";
import { JusticeScene } from "@/components/JusticeScene";

export function PracticeIndex() {
  return (
    <div className="practice-home">
      <div className="practice-home-visual">
        <JusticeScene />
      </div>
      <div className="practice-grid">
        {practices.map((item) => (
          <Link key={item.slug} href={`/expertise/${item.slug}`} className="practice-tile">
            <div className="practice-tile-media">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt={item.name} />
              ) : null}
              <span className="practice-tile-num">{item.number}</span>
            </div>
            <div className="practice-tile-copy">
              <h3>{item.name}</h3>
              <p>{item.short}</p>
              <span className="practice-tile-go">View practice →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
