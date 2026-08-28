import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { PeopleSection } from "@/components/PeopleSection";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <>
      <Navbar />
      <PageHero label="Our people" title={<>The people<br />behind the counsel.</>}>
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "People" }]} />
        <p className="lede" style={{ marginTop: 20 }}>
          Experienced legal professionals bringing together deep legal knowledge,
          commercial understanding and a commitment to exceptional client service.
        </p>
      </PageHero>
      <section className="section section-ivory" style={{ paddingTop: 0 }}>
        <div className="wide">
          <PeopleSection compact showFeatured={false} />
        </div>
      </section>
    </>
  );
}
