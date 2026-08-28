import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero, Breadcrumb } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PageHero label="Legal" title="Privacy Policy">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Privacy" }]} />
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article-body">
          <p>
            Kaivalya Law treats client and enquiry information as confidential. Contact
            details submitted through this website are used only to respond to your matter.
          </p>
          <p>
            This demonstration site does not operate a production database. For the firm’s
            current privacy practices, write to manish.tiwari@kaivalyalaw.com or
            akhand.tripathi@kaivalyalaw.com.
          </p>
        </div>
      </section>
    </>
  );
}
