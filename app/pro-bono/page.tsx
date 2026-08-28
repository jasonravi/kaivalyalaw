import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { firm } from "@/data/firm";

export const metadata: Metadata = { title: "Pro Bono" };

export default function ProBonoPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="04 — Pro bono"
        title={
          <>
            Law should serve
            <br />
            beyond business.
          </>
        }
      >
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Pro Bono" }]} />
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          {firm.proBono.map((para) => (
            <p key={para.slice(0, 28)} style={{ marginBottom: 20 }}>
              {para}
            </p>
          ))}
          <Button href="/people">Meet the team →</Button>
        </div>
      </section>
    </>
  );
}
