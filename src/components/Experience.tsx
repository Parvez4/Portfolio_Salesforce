"use client";

import { Section } from "@/components/Section";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Professional journey"
      description="From Salesforce development at Cognizant to AI engineering and campus leadership."
    >
      <div className="relative">
        <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/60 via-slate-700 to-transparent sm:block" />

        <div className="space-y-10">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="relative sm:pl-12"
            >
              <div className="absolute left-0 top-1.5 hidden size-6 items-center justify-center rounded-full border border-brand-500/40 bg-slate-950 sm:flex">
                <Briefcase className="size-3 text-brand-400" />
              </div>

              <div className="glass-card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-brand-400">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p>{job.period}</p>
                    <p className="mt-0.5">{job.location}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
