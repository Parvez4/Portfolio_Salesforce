export const siteConfig = {
  name: "Parvez Shaik",
  title: "Salesforce Developer",
  tagline:
    "Building enterprise CRM & AI solutions with Apex, LWC, and Agentforce",
  email: "parvezshaik3008@gmail.com",
  phone: "+1 (930) 904-4515",
  location: "Bloomington, Indiana | Open to relocate (U.S.)",
  linkedin: "https://www.linkedin.com/in/parvezshaik44/",
  github: "https://github.com/Parvez4",
  trailhead: "https://www.salesforce.com/trailblazer/parvez",
  availability: "Open to Salesforce Opportunities",
  /** Place PDF in public/parvez-shaik-resume.pdf */
  resumeUrl: "/parvez-shaik-resume.pdf",
  resumeDownloadName: "Parvez_Shaik_Resume.pdf",
};

export const experienceSection = {
  title: "Professional experience",
  description:
    "From enterprise Salesforce at Cognizant to Agentforce builds and graduate study at Indiana University.",
};

export const aboutContent = {
  label: "About",
  title: "Salesforce developer & AI on platform",
  lead: "Four years delivering enterprise CRM for 50,000+ users, with a growing focus on Agentforce, Data Cloud, and production-ready AI.",
  bioParagraphs: [
    "At Cognizant I built and optimized Apex, LWC, Flows, and integrations for global teams. I migrated 22 Visualforce pages to Lightning (2.3x faster loads), improved platform speed by 27.8%, and shipped releases with Salesforce DX, Git, and Gearset.",
    "My recent work centers on Agentforce, Prompt Builder, and the Einstein Trust Layer, including autonomous support at 63.9% auto-resolution and knowledge retrieval at 96% accuracy. I design for secure, measurable outcomes that support and operations teams can trust.",
    "I am a four-time certified Trailblazer, active on Trailhead, and completing an MS in Computer Science at Indiana University Bloomington (May 2026). I combine platform depth with graduate-level rigor in data and AI.",
  ],
  proofPoints: [
    { label: "Trailblazer", value: "4 Salesforce certifications" },
    { label: "Enterprise scale", value: "50,000+ CRM users supported" },
    { label: "Modernization", value: "22 Visualforce pages moved to LWC" },
    { label: "Graduate study", value: "MS CS at IU Bloomington, 2026" },
  ],
  focusAreas: [
    {
      title: "Enterprise CRM",
      description:
        "I build the backbone teams run on every day: Apex, LWC, Flows, triggers, and integrations tuned for performance and maintainability. At Cognizant I improved global CRM speed by 27.8%, cut SLA breaches, and replaced brittle Visualforce with Lightning experiences that load 2.3x faster. I think in user journeys, governor limits, and long-term ownership.",
      highlights: ["Apex & LWC", "Flows & Platform Events", "Large-scale user adoption"],
    },
    {
      title: "AI on Salesforce",
      description:
        "I design AI that belongs inside the CRM, not beside it. From Agentforce agents and Prompt Builder to RAG over Data Cloud and Trust Layer controls, I focus on grounded responses, secure handling of sensitive data, and metrics that matter to support leaders. My recent agents have driven strong auto-resolution and faster first responses without sacrificing compliance.",
      highlights: ["Agentforce & Prompt Builder", "Data Cloud & RAG", "Einstein Trust Layer"],
    },
    {
      title: "DevOps & quality",
      description:
        "Shipping fast only counts if releases stay stable. I use Salesforce DX, Git, Gearset, and CI/CD habits to reduce deployment risk, keep test coverage high (90%+ on critical paths), and make rollbacks rare. I have cut release-related issues and manual ops work by double-digit percentages while keeping teams confident in what goes to production.",
      highlights: ["Salesforce DX & Gearset", "Git-based releases", "Test-driven delivery"],
    },
  ],
};

/** @deprecated Use aboutContent.bioParagraphs for the About section */
export const summary = [aboutContent.lead, ...aboutContent.bioParagraphs].join(" ");

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
    period: "Sep 2024 to Present",
    location: "Bloomington, IN",
    category: "Leadership",
    accent: "text-emerald-400",
    glow: "from-emerald-500/20",
    highlights: [
      "Support daily front desk and member service operations for a high-volume campus recreation facility.",
      "Assist with memberships, facility access, programs, and policy-related questions while maintaining data accuracy.",
      "Coordinate shift-level team operations and resolve issues in a fast-paced environment.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "MyEdMaster",
    period: "Jun 2025 to Aug 2025",
    location: "Herndon, VA",
    category: "AI Engineering",
    accent: "text-violet-400",
    glow: "from-violet-500/20",
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
    period: "Sep 2022 to Apr 2024",
    location: "India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Optimized Apex and LWC for a global CRM, delivering 27.8% speed improvement and 19.6% fewer SLA breaches.",
      "Migrated 22 legacy Visualforce pages to LWC, cutting technical debt by 41.3%.",
      "Built case-handling with Flows and Platform Events, reducing manual effort by 33.7% at 92.4% test coverage.",
      "Used Gearset, Git, and Salesforce DX to reduce release-related issues by 21.4%.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "Cognizant",
    period: "Jan 2021 to Sep 2022",
    location: "India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Built custom CRM workflows for 3,180+ users using Apex, LWC, and Aura, achieving 26.7% process efficiency gain.",
      "Integrated payment gateways, ERP, and marketing platforms via REST APIs.",
      "Optimized updates with batch and scheduled Apex, reducing manual follow-up by 17.8%.",
      "Automated operations with Flows and Process Builder, cutting manual data errors by 18.9%.",
    ],
  },
];

export const projectsSection = {
  title: "Featured work",
  description:
    "Agentforce and AI on Salesforce with measurable impact on support and knowledge workflows.",
};

export const projects = [
  {
    id: "case-triage",
    title: "AI-Driven Case Triage & Resolution System",
    period: "Sep 2025 to Jan 2026",
    featured: true,
    accent: "text-brand-400",
    glow: "from-brand-500/30",
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
      "Agentforce system that classifies cases by intent and urgency, integrates Data Cloud context via REST APIs, and surfaces recommendations in a custom LWC with Einstein Trust Layer masking sensitive data.",
  },
  {
    id: "support-agent",
    title: "Customer Support Autonomous Agent",
    period: "Feb 2025 to Sep 2025",
    featured: false,
    accent: "text-violet-400",
    glow: "from-violet-500/25",
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
      { label: "Faster first response", value: "17.2%" },
    ],
    description:
      "Autonomous support agent using Agentforce and Prompt Builder, grounded in Data Cloud and connected knowledge via RAG, with Trust Layer controls for secure output handling.",
  },
  {
    id: "knowledge-bot",
    title: "Intelligent Knowledge Retrieval Bot",
    period: "Jul 2024 to Nov 2024",
    featured: false,
    accent: "text-cyan-400",
    glow: "from-cyan-500/25",
    tech: ["Agentforce", "Generative AI", "RAG", "NLP"],
    metrics: [{ label: "Answer accuracy", value: "96%" }],
    description:
      "Knowledge retrieval bot inside Salesforce that uses NLP and RAG to pull relevant context before generating grounded responses across scattered articles and internal content.",
  },
];

export const certifications = [
  {
    id: "platform-developer-i",
    name: "Salesforce Certified Platform Developer I",
    shortName: "Platform Developer I",
    issuer: "Salesforce",
    date: "Aug 2025",
    credentialImage: "/certifications/platform-developer-i.png",
    learned: [
      "Apex triggers, batch jobs, schedulers, and test classes with governor-limit awareness.",
      "LWC composition, wire adapters, and Apex-backed APIs for Lightning experiences.",
      "SOQL, DML, security (sharing, FLS), and debugging in enterprise-style scenarios.",
    ],
  },
  {
    id: "platform-app-builder",
    name: "Salesforce Certified Platform App Builder",
    shortName: "Platform App Builder",
    issuer: "Salesforce",
    date: "Jul 2025",
    credentialImage: "/certifications/platform-app-builder.png",
    learned: [
      "Declarative data modeling, apps, and Lightning record pages tailored to business processes.",
      "Flows, validation rules, and automation design without over-relying on custom code.",
      "Reporting, dashboards, and app deployment patterns for maintainable solutions.",
    ],
  },
  {
    id: "platform-administrator",
    name: "Salesforce Certified Platform Administrator",
    shortName: "Platform Administrator",
    issuer: "Salesforce",
    date: "Jun 2025",
    credentialImage: "/certifications/platform-administrator.png",
    learned: [
      "Org setup, users, profiles, permission sets, and role hierarchies for secure access.",
      "Standard and custom objects, page layouts, and productivity features for end users.",
      "Data management, imports, and core automation from an administrator's perspective.",
    ],
  },
  {
    id: "agentforce-specialist",
    name: "Agentforce Specialist",
    shortName: "Agentforce Specialist",
    issuer: "Salesforce",
    date: "2025",
    credentialImage: "/certifications/agentforce-specialist.png",
    learned: [
      "Designing Agentforce agents, topics, and actions grounded in CRM context.",
      "Prompt Builder, Einstein Trust Layer, and safe generative AI on the Salesforce platform.",
      "Connecting Data Cloud and retrieval patterns for accurate, measurable agent outcomes.",
    ],
  },
];

export type Certification = (typeof certifications)[number];

export const educationSection = {
  title: "Academic journey",
  description:
    "Graduate work in computer science at Indiana University and engineering foundations from India.",
};

export const education = [
  {
    id: "iu-ms",
    badge: "Graduate",
    program: "MS in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 to May 2026",
    location: "Bloomington, Indiana",
    status: "Graduated May 2026",
    accent: "text-sky-400",
    glow: "from-sky-500/25",
    highlightLabels: ["Academics", "Research & projects", "Platform & AI"],
    highlights: [
      "Coursework in AI, data systems, and software engineering",
      "Applied research alongside Salesforce and Agentforce projects",
      "Built production-style AI pipelines and platform integrations",
    ],
  },
  {
    id: "gvp-btech",
    badge: "B.Tech",
    program:
      "Bachelor of Technology in Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College of Engineering",
    period: "Aug 2017 to Apr 2021",
    location: "Visakhapatnam, Andhra Pradesh, India",
    accent: "text-amber-400",
    glow: "from-amber-500/20",
    highlightLabels: ["Core curriculum", "Engineering depth", "Achievement"],
    highlights: [
      "Core CS: algorithms, OS, databases, and software engineering",
      "Programming fundamentals that underpin Apex and LWC today",
      "First-class degree with strong analytical and problem-solving focus",
    ],
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
