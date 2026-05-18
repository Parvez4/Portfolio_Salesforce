"use client";

import { Section } from "@/components/Section";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title="Academic background"
      className="border-t border-slate-800/60 bg-slate-900/20"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            className="glass-card flex gap-4 p-6"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-slate-800">
              <GraduationCap className="size-5 text-brand-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{item.degree}</h3>
              <p className="mt-1 text-brand-400">{item.school}</p>
              <p className="mt-2 text-sm text-slate-500">{item.period}</p>
              <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
