"use client";

import { Section } from "@/components/Section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical expertise"
      description="Salesforce development, AI on platform, integrations, and enterprise DevOps."
      className="border-t border-slate-800/60 bg-slate-900/20"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass-card flex flex-col p-5 transition hover:border-slate-700"
          >
            <h3 className="text-sm font-semibold text-white">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-slate-700/80 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
