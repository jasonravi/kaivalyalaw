import { Button, SectionLabel } from "@/components/Button";
import { LogoMarquee } from "@/components/LocationStrip";
import { Navbar } from "@/components/Navbar";
import { PracticeIndex } from "@/components/PracticeIndex";
import { PeopleSection } from "@/components/PeopleSection";
import { ContactSuite } from "@/components/ContactSuite";
import { ArticleCard } from "@/components/ArticleCard";
import { OfficeMap } from "@/components/WorldMap";
import { firm } from "@/data/firm";
import { featuredArticles } from "@/data/insights";
import { practices } from "@/data/practices";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Navbar overlay />
      <section className="hero">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/kaivalya-hall-cinematic.png" alt="Kaivalya Law" />
        </div>
        <div className="hero-copy">
          <h1>
            Law without borders.
            <br />
            Counsel without compromise.
          </h1>
          <p className="lede">
            Strategic legal counsel from Prayagraj — local insight, sophisticated
            thinking, and a clear path through complex matters.
          </p>
          <div className="hero-actions">
            <Button href="/contact" fill>
              Contact the firm →
            </Button>
            <Button href="/expertise" light>
              Explore expertise →
            </Button>
          </div>
        </div>
      </section>

      <section className="proof">
        <article>
          <strong>03</strong>
          <span>Partners</span>
        </article>
        <article>
          <strong>{String(practices.length).padStart(2, "0")}</strong>
          <span>Practice areas</span>
        </article>
        <article>
          <strong>UP</strong>
          <span>Rooted in Prayagraj</span>
        </article>
      </section>

      <section className="section">
        <div className="wide firm-block">
          <SectionLabel>01 — The Firm</SectionLabel>
          <div className="firm-lead">
            <h2 className="firm-quote">
              Complex matters require more than legal knowledge. They require
              perspective.
            </h2>
            <div className="firm-copy">
              {firm.intro.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
              <Button href="/about">About the firm →</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wide">
          <div className="section-head">
            <div>
              <SectionLabel>02 — Expertise</SectionLabel>
              <h2 style={{ marginTop: 16 }}>Where law meets business.</h2>
            </div>
            <p className="lede">
              Strategic counsel across transactions, disputes, finance, regulation and
              restructuring.
            </p>
          </div>
          <PracticeIndex />
          <div className="practice-home-more">
            <Button href="/expertise">All practice areas →</Button>
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="wide">
          <SectionLabel>03 — Why Kaivalya Law</SectionLabel>
          <h2 className="why-title">Precision. Perspective. Resolution.</h2>
          <div className="why-cols">
            {firm.why.map((item) => (
              <article key={item.number}>
                <p className="label">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wide">
          <PeopleSection eyebrow="04 — Our people" showFeatured={false} />
        </div>
      </section>

      <LogoMarquee />

      <section className="section section-ink location-band">
        <div className="wide location-split">
          <div>
            <SectionLabel>05 — Location</SectionLabel>
            <h2 style={{ marginTop: 16 }}>
              Rooted in Prayagraj.
              <br />
              Connected to the world.
            </h2>
            <p className="lede" style={{ color: "rgba(245,241,232,0.7)", marginTop: 16 }}>
              {firm.intro[0]}
            </p>
            <p className="office-address">
              {site.headquarters.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <OfficeMap />
        </div>
      </section>

      <section className="section">
        <div className="wide">
          <div className="section-head">
            <div>
              <SectionLabel>06 — Insights</SectionLabel>
              <h2 style={{ marginTop: 16 }}>Thinking beyond the case.</h2>
            </div>
            <Button href="/insights">All publications →</Button>
          </div>
          <div className="articles">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} feature={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="probono-strip">
        <div className="wide">
          <div>
            <SectionLabel>Pro Bono</SectionLabel>
            <h3>Law should serve beyond business.</h3>
          </div>
          <Button href="/pro-bono">Our pro bono work →</Button>
        </div>
      </section>

      <ContactSuite numbered />
    </>
  );
}
