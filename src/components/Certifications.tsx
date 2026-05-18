"use client";

import { Section } from "@/components/Section";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Salesforce credentials"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="glass-card flex items-start gap-4 p-5 transition hover:border-slate-700"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
              <Award className="size-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
