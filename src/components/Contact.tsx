import { siteConfig } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="page-wrap text-center">
        <p className="section-label">Let&apos;s connect</p>
        <h2 className="section-title mx-auto mt-3 max-w-lg">
          Interested in working together?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-ink-muted">
          Open to Salesforce developer roles, contract work, and collaborations
          on Agentforce and CRM modernization.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${siteConfig.email}`} className="btn-primary gap-2">
            Get in touch
            <ArrowRight className="size-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-12 text-sm text-ink-faint">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition hover:text-sf-blue"
          >
            {siteConfig.email}
          </a>
          <span className="mx-2">·</span>
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="transition hover:text-sf-blue">
            {siteConfig.phone}
          </a>
          <span className="mx-2">·</span>
          {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
