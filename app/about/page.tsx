import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { firm } from "@/data/firm";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero label="The firm" title={<>More than legal counsel.</>}>
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "About" }]} />
        <p className="lede" style={{ marginTop: 24 }}>
          {firm.philosophy} A pan-India practice — strategic legal thinking, and counsel
          that appears across courts and tribunals of the country.
        </p>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="timeline">
            {firm.aboutTimeline.map((item) => (
              <article key={item.label}>
                <p className="label">{item.label}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{ marginTop: 12, maxWidth: "40rem", color: "var(--muted)" }}>
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Button href="/people">Meet the practice →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
