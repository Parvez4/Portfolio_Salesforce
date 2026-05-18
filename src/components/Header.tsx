"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { externalLinks, navLinks, siteConfig } from "@/data/portfolio";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/90 backdrop-blur-md">
      <div className="page-wrap flex h-14 items-center justify-between sm:h-16">
        <a href="#" className="font-serif text-lg tracking-tight text-ink">
          {siteConfig.name.split(" ")[0]}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition hover:text-sf-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted transition hover:text-sf-blue"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="btn-primary text-sm">
            Résumé
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-ink-muted md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-canvas px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2.5 text-sm text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-2 py-2.5 text-sm text-ink-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
