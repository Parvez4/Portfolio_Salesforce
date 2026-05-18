export const siteConfig = {
  name: "Parvez Shaik",
  title: "Salesforce Developer",
  subtitle: "Enterprise CRM & platform AI.",
  heroLine2: "Apex, LWC, and Agentforce.",
  heroDescription:
    "3+ years building and scaling Salesforce for 5,000+ users — from LWC modernization to autonomous agents on Data Cloud.",
  email: "parvezshaik3008@gmail.com",
  phone: "+1 (930) 904-4515",
  location: "Bloomington, Indiana",
  linkedin: "https://www.linkedin.com/in/parvezshaik44/",
  trailhead: "https://www.salesforce.com/trailblazer/parvezshaik44",
  availability:
    "Open to Salesforce developer roles — based in Indiana, available remote & willing to relocate across the U.S.",
};

export const summary = `I'm a Salesforce Developer with deep experience in Apex, Lightning Web Components, and enterprise integrations — now focused on Agentforce, Data Cloud, and the Einstein Trust Layer.

At Cognizant I modernized Visualforce into LWC (2.3× faster loads) and improved CRM performance for thousands of users. My recent work centers on AI-driven case triage and support agents with measurable impact — including 63.9% auto-resolution on routine requests.

I'm completing an MS in Computer Science at Indiana University Bloomington (May 2026) while staying active in the Salesforce ecosystem as a multi-certified Trailblazer.`;

export const highlights = [
  {
    title: "4× Salesforce Certified",
    description:
      "Platform Developer, Administrator, App Builder, and Agentforce Specialist — validated across the stack.",
  },
  {
    title: "Agentforce & Data Cloud",
    description:
      "Built autonomous support agents, case triage, and RAG-grounded knowledge bots inside Salesforce.",
  },
  {
    title: "Enterprise CRM delivery",
    description:
      "Apex, LWC, Flows, and CI/CD (DX, Gearset, Git) for global teams supporting 5,000+ CRM users.",
  },
];

export const skillCategories = [
  {
    title: "Platform & AI",
    skills: [
      "Agentforce",
      "Apex",
      "LWC",
      "Flows",
      "Data Cloud",
      "Einstein Trust Layer",
      "Prompt Builder",
      "RAG",
    ],
  },
  {
    title: "Integrations & data",
    skills: [
      "REST APIs",
      "Platform Events",
      "Salesforce Connect",
      "SOQL / SOSL",
      "ETL",
      "Named Credentials",
    ],
  },
  {
    title: "Delivery & security",
    skills: [
      "Salesforce DX",
      "Gearset",
      "Git",
      "CI/CD",
      "Permission Sets",
      "Sharing Rules",
      "Test Classes",
    ],
  },
];

export const experience = [
  {
    role: "Member Services Lead",
    company: "IU Campus Recreational Sports",
    period: "Sep 2024 – Present",
    location: "Bloomington, IN",
    highlights: [
      "High-volume member services, data accuracy, and team coordination in a campus recreation environment.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "MyEdMaster",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    highlights: [
      "Python AI content pipeline (MySQL, Redis, GraphRAG); 23% less manual review, 83% retrieval relevancy.",
    ],
  },
  {
    role: "Senior Salesforce Developer",
    company: "Cognizant",
    period: "Sep 2022 – Apr 2024",
    location: "India",
    highlights: [
      "27.8% CRM speed gain; migrated 22 Visualforce pages to LWC; Flows & Platform Events at 92.4% test coverage.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "Cognizant",
    period: "Jan 2021 – Sep 2022",
    location: "India",
    highlights: [
      "Custom workflows for 3,180+ users; ERP & payment integrations; batch Apex and Flow automation.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Driven Case Triage & Resolution",
    subtitle: "When manual sorting slows support",
    category: "Agentforce · Data Cloud",
    period: "Sep 2025 – Jan 2026",
    accent: "from-[#0176D3] to-[#032D60]",
    tech: ["Agentforce", "Apex", "LWC", "Flows", "Data Cloud", "Einstein Trust Layer"],
    metrics: [{ label: "AHT reduction", value: "24.6%" }],
    description:
      "Classifies cases by intent and urgency, masks sensitive data via Einstein Trust Layer, and surfaces Data Cloud context in a custom LWC — cutting average handling time across repetitive work.",
    tags: ["Strategy", "Apex", "LWC", "AI"],
  },
  {
    title: "Customer Support Autonomous Agent",
    subtitle: "Routine requests, resolved in-platform",
    category: "Prompt Builder · RAG",
    period: "Feb 2025 – Sep 2025",
    accent: "from-[#06A59A] to-[#0176D3]",
    tech: ["Agentforce", "Prompt Builder", "Data Cloud", "RAG", "REST APIs"],
    metrics: [{ label: "Auto-resolution", value: "63.9%" }],
    description:
      "Autonomous agent grounded in Data Cloud and connected knowledge, with Trust Layer guardrails — handling routine requests before human escalation.",
    tags: ["Agentforce", "Generative AI", "Integration"],
  },
  {
    title: "Intelligent Knowledge Retrieval Bot",
    subtitle: "Grounded answers across scattered content",
    category: "NLP · RAG",
    period: "Jul 2024 – Nov 2024",
    accent: "from-[#1B96FF] to-[#06A59A]",
    tech: ["Agentforce", "Generative AI", "RAG", "NLP"],
    metrics: [{ label: "Accuracy", value: "96%" }],
    description:
      "Helps support teams find relevant articles and internal knowledge with retrieval-first responses — keeping outputs tied to source content, not generic AI filler.",
    tags: ["NLP", "Knowledge", "LWC"],
  },
];

export const certifications = [
  { name: "Platform Developer I", date: "Aug 2025" },
  { name: "Platform App Builder", date: "Jul 2025" },
  { name: "Platform Administrator", date: "Jun 2025" },
  { name: "Agentforce Specialist", date: "2025" },
];

export const education = [
  {
    degree: "MS in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 – May 2026 (Expected)",
  },
  {
    degree: "B.Tech — First Class",
    school: "LBR College of Engineering",
    period: "2014 – 2018",
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const externalLinks = [
  { href: siteConfig.linkedin, label: "LinkedIn", external: true },
  { href: siteConfig.trailhead, label: "Trailhead", external: true },
];
