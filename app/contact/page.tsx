import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactSuite } from "@/components/ContactSuite";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Navbar overlay />
      <section className="contact-mast">
        <div className="contact-mast-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/kaivalya-hall-cinematic.png" alt="" />
        </div>
        <div className="contact-mast-copy">
          <p className="label">Prayagraj · Uttar Pradesh · India</p>
          <h1>
            Let’s talk about
            <br />
            what comes next.
          </h1>
        </div>
      </section>
      <ContactSuite lead={false} />
    </>
  );
}
