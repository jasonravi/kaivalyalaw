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
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`nav ${solid || open ? "solid" : ""} ${open ? "is-open" : ""}`}>
        <div className="nav-inner">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
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
            <Link className="btn nav-cta" href="/contact">
              Speak With Us
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} id="site-menu">
        <nav className="mobile-menu-nav" aria-label="Mobile">
          {site.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <Link className="btn btn-fill" href="/contact" onClick={() => setOpen(false)}>
            Speak With Us
          </Link>
        </div>
      </div>
    </>
  );
}
