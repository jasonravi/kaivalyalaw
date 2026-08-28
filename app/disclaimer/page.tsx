import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero, Breadcrumb } from "@/components/PageHero";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <PageHero label="Legal" title="Disclaimer">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Disclaimer" }]} />
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article-body">
          <p>
            Content on this website is for general information. It is not legal advice and
            does not create a lawyer–client relationship. Outcomes depend on the facts of
            each matter.
          </p>
          <p>
            Copy is drawn from publicly available material on kaivalyalaw.com. Visual
            design, photography and structure are original to this redesign.
          </p>
        </div>
      </section>
    </>
  );
}
