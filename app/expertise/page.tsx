import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { JusticeScene } from "@/components/JusticeScene";
import { practices } from "@/data/practices";

export const metadata: Metadata = { title: "Expertise" };

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <PageHero label="Practice" title="Where law meets business.">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Expertise" }]} />
        <p className="lede" style={{ marginTop: 20 }}>
          Nine practices. One standard of precision — transactions, disputes, finance,
          regulation and restructuring.
        </p>
      </PageHero>
      <div className="expertise-visual">
        <JusticeScene />
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="practice-list">
            {practices.map((item) => (
              <Link key={item.slug} href={`/expertise/${item.slug}`} className="practice-item">
                <span className="num">{item.number}</span>
                <span className="name">{item.name}</span>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
