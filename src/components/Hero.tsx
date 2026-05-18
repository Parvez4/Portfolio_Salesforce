import { Portrait } from "@/components/Portrait";
import { highlights, siteConfig } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-border pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="page-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-16 xl:grid-cols-[1fr_320px]">
          <div>
            <p className="section-label mb-6">Salesforce · Platform development</p>

            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-ink">
              {siteConfig.name}
              <span className="text-ink-faint"> · </span>
              {siteConfig.title}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              {siteConfig.subtitle}
              <br />
              {siteConfig.heroLine2}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              {siteConfig.heroDescription}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-ink-faint">
              {siteConfig.availability}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary gap-2">
                View work
                <ArrowRight className="size-4" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <Portrait />
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="bg-white p-6 sm:p-7"
            >
              <h2 className="font-serif text-lg text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
