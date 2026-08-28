import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageHero label="Gallery" title="A quieter record.">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Gallery" }]} />
        <p className="lede" style={{ marginTop: 20 }}>
          Portraits of the practice appear on the People pages. This space is reserved
          for firm photography when it is published.
        </p>
      </PageHero>
    </>
  );
}
