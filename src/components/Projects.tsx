"use client";

import { Section } from "@/components/Section";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Featured work"
      description="AI-driven Salesforce solutions with measurable impact on support operations."
      className="border-t border-slate-800/60 bg-slate-900/20"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`glass-card group flex flex-col p-6 transition hover:border-brand-500/30 ${
              index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-slate-500">{project.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-slate-600 transition group-hover:text-brand-400" />
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-brand-500/20 bg-brand-500/10 px-3 py-2"
                >
                  <p className="text-lg font-semibold text-brand-300">
                    {metric.value}
                  </p>
                  <p className="text-xs text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-slate-950/80 px-2 py-0.5 text-xs text-slate-400"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
