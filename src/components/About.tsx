"use client";

import { Section } from "@/components/Section";
import { summary } from "@/data/portfolio";

const pillars = [
  {
    title: "Enterprise CRM",
    text: "Apex, LWC, Flows, and integrations for thousands of users.",
  },
  {
    title: "AI on Salesforce",
    text: "Agentforce, RAG, Prompt Builder, and Einstein Trust Layer.",
  },
  {
    title: "DevOps & quality",
    text: "Salesforce DX, Gearset, Git, and 90%+ test coverage discipline.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Engineering CRM at scale, with AI at the core"
      description="From Apex and LWC modernization to Agentforce and Data Cloud — I build solutions that are fast, secure, and measurable."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <p className="col-span-3 text-base leading-relaxed text-slate-300 sm:text-lg">
          {summary}
        </p>
        <div className="col-span-2 flex flex-col gap-4">
          {pillars.map((item) => (
            <div key={item.title} className="glass-card p-5">
              <h3 className="font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


