"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav ${solid || open ? "solid" : ""}`}>
        <div className="nav-inner">
          <Link className="brand" href="/">
            <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#101820" />
              <circle cx="16" cy="16" r="12.2" fill="none" stroke="#B48A5A" strokeWidth="1.35" />
              <path
                fill="#F5F1E8"
                d="M11.2 8.2h3.05v6.15l5.55-6.15h3.7l-6.35 6.85 6.85 8.95h-3.85l-5.9-7.85v7.85H11.2V8.2z"
              />
            </svg>
            Kaivalya Law
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-right">
            <span className="lang">EN</span>
            <Link className="btn" href="/contact">
              Speak With Us
            </Link>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="btn btn-light" onClick={() => setOpen(false)} type="button">
          Close
        </button>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          Speak With Us
        </Link>
      </div>
    </>
  );
}
