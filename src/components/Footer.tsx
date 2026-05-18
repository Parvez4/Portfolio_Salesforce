import { externalLinks, navLinks, siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="page-wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-lg text-ink">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              {siteConfig.title} focused on enterprise CRM, Agentforce, and
              scalable platform delivery on Salesforce.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition hover:text-sf-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-muted transition hover:text-sf-blue"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-muted transition hover:text-sf-blue"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-ink-faint">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
