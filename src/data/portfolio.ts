export const siteConfig = {
  name: "Parvez Shaik",
  title: "Salesforce Developer",
  tagline:
    "Building enterprise CRM & AI solutions with Apex, LWC, and Agentforce",
  email: "parvezshaik3008@gmail.com",
  phone: "+1 (930) 904-4515",
  location: "Bloomington, Indiana · Open to relocate (U.S.)",
  linkedin: "https://www.linkedin.com/in/parvezshaik44/",
  trailhead: "https://www.salesforce.com/trailblazer/parvezshaik44",
  availability: "Open to Salesforce opportunities",
};

export const summary = `Salesforce Developer with 3+ years of experience supporting global CRM platforms for 5,000+ users. I specialize in enterprise Salesforce environments using Apex and LWC, with a growing focus on Agentforce, Data Cloud, and the Einstein Trust Layer.

I migrated legacy Visualforce pages to LWC (2.3× faster page loads) and built autonomous support agents achieving 63.9% auto-resolution. Currently pursuing an MS in Computer Science at Indiana University Bloomington (expected May 2026).`;

export const skillCategories = [
  {
    title: "Certifications",
    skills: [
      "Agentforce Specialist",
      "Platform Developer I",
      "Platform Administrator",
      "Platform App Builder",
    ],
  },
  {
    title: "AI & Data Cloud",
    skills: [
      "Agentforce",
      "Prompt Builder",
      "Einstein Trust Layer",
      "Generative AI",
      "RAG",
      "Data Cloud",
    ],
  },
  {
    title: "Salesforce Development",
    skills: [
      "Apex",
      "LWC",
      "Triggers",
      "Test Classes",
      "Aura",
      "Visualforce",
      "Batch & Scheduler",
    ],
  },
  {
    title: "Integrations & APIs",
    skills: [
      "REST APIs",
      "SOAP APIs",
      "Named Credentials",
      "OAuth",
      "External Services",
      "Salesforce Connect",
    ],
  },
  {
    title: "Automation & Platform",
    skills: [
      "Flows",
      "Platform Events",
      "Validation Rules",
      "Process Builder",
      "Approval Processes",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Salesforce DX",
      "Gearset",
      "Git",
      "Jenkins",
      "CI/CD",
      "Deployment Automation",
    ],
  },
  {
    title: "Data & Security",
    skills: [
      "SOQL / SOSL",
      "Data Loader",
      "ETL",
      "Permission Sets",
      "Sharing Rules",
      "Field-Level Security",
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
      "Support daily front desk and member service operations for a high-volume campus recreation facility.",
      "Assist with memberships, facility access, programs, and policy-related questions while maintaining data accuracy.",
      "Coordinate shift-level team operations and resolve issues in a fast-paced environment.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "MyEdMaster",
    period: "Jun 2025 – Aug 2025",
    location: "Herndon, VA (Remote)",
    highlights: [
      "Built a Python-based AI content pipeline using MySQL, Redis, and GraphRAG-style retrieval.",
      "Integrated AutoGen agents into content review, reducing manual evaluation time by 23%.",
      "Improved retrieval with LlamaIndex and SpaCy, raising content relevancy from 72% to 83%.",
      "Deployed Flask backend on AWS EC2 with Docker and Apache; improved model evaluation speed by 18%.",
    ],
  },
  {
    role: "Senior Salesforce Developer",
    company: "Cognizant",
    period: "Sep 2022 – Apr 2024",
    location: "India",
    highlights: [
      "Optimized Apex and LWC for a global CRM — 27.8% speed improvement and 19.6% fewer SLA breaches.",
      "Migrated 22 legacy Visualforce pages to LWC, cutting technical debt by 41.3%.",
      "Built case-handling with Flows and Platform Events, reducing manual effort by 33.7% at 92.4% test coverage.",
      "Used Gearset, Git, and Salesforce DX to reduce release-related issues by 21.4%.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "Cognizant",
    period: "Jan 2021 – Sep 2022",
    location: "India",
    highlights: [
      "Built custom CRM workflows for 3,180+ users using Apex, LWC, and Aura — 26.7% process efficiency gain.",
      "Integrated payment gateways, ERP, and marketing platforms via REST APIs.",
      "Optimized updates with batch and scheduled Apex, reducing manual follow-up by 17.8%.",
      "Automated operations with Flows and Process Builder, cutting manual data errors by 18.9%.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Driven Case Triage & Resolution System",
    period: "Sep 2025 – Jan 2026",
    tech: [
      "Agentforce",
      "Apex",
      "LWC",
      "Flows",
      "Data Cloud",
      "Einstein Trust Layer",
      "REST APIs",
    ],
    metrics: [
      { label: "AHT reduction", value: "24.6%" },
      { label: "Manual sorting", value: "Reduced" },
    ],
    description:
      "Agentforce system that classifies cases by intent and urgency, integrates Data Cloud context via REST APIs, and surfaces recommendations in a custom LWC — with Einstein Trust Layer masking sensitive data.",
  },
  {
    title: "Customer Support Autonomous Agent",
    period: "Feb 2025 – Sep 2025",
    tech: [
      "Agentforce",
      "Prompt Builder",
      "Data Cloud",
      "Einstein Trust Layer",
      "RAG",
      "REST APIs",
    ],
    metrics: [
      { label: "Auto-resolution", value: "63.9%" },
      { label: "First response", value: "−17.2%" },
    ],
    description:
      "Autonomous support agent using Agentforce and Prompt Builder, grounded in Data Cloud and connected knowledge via RAG, with Trust Layer controls for secure output handling.",
  },
  {
    title: "Intelligent Knowledge Retrieval Bot",
    period: "Jul 2024 – Nov 2024",
    tech: ["Agentforce", "Generative AI", "RAG", "NLP"],
    metrics: [{ label: "Answer accuracy", value: "96%" }],
    description:
      "Knowledge retrieval bot inside Salesforce that uses NLP and RAG to pull relevant context before generating grounded responses across scattered articles and internal content.",
  },
];

export const certifications = [
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "Aug 2025",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    date: "Jul 2025",
  },
  {
    name: "Salesforce Certified Platform Administrator",
    issuer: "Salesforce",
    date: "Jun 2025",
  },
  {
    name: "Agentforce Specialist",
    issuer: "Salesforce",
    date: "2025",
  },
];

export const education = [
  {
    degree: "MS in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 – May 2026 (Expected)",
    detail: "Pursuing graduate studies while building AI-driven Salesforce solutions.",
  },
  {
    degree: "B.Tech — First Class",
    school: "Lakireddy Bali Reddy College of Engineering",
    period: "2014 – 2018",
    detail: "Mylavaram, Andhra Pradesh, India",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
