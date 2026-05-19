# Portfolio — Parvez Shaik

**Live site:** [www.parvezshaik.com](https://www.parvezshaik.com)

Personal portfolio site for a **Salesforce Developer** role, highlighting enterprise CRM delivery, Agentforce and AI on platform, certifications, and project work. Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Static assets](#static-assets)
- [Interactive demos](#interactive-demos)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Related repositories](#related-repositories)
- [License](#license)

---

## Features

| Section | Description |
|--------|-------------|
| **Hero** | Headshot, availability, key metrics, contact links (LinkedIn, Trailhead), resume download |
| **About** | Structured bio, proof points, and focus areas (CRM, AI on Salesforce, DevOps) |
| **Skills** | Bento grid plus scrolling marquee of Salesforce and AI skills |
| **Experience** | Timeline cards with role highlights, categories, and metrics |
| **Projects** | Featured work with impact metrics and tech tags |
| **Certifications** | Clickable credentials with modal viewer and “what I learned” notes |
| **Education** | Graduate and undergraduate degrees with focus highlights |
| **Contact** | Email and social links |

Additional behavior:

- Fixed header with scroll styling, active section nav, mobile menu, and **Resume** download
- Custom **Parvez Shaik** logo (rounded, with background) in the header
- Certification images open in a lightbox-style modal
- Optional **live demos** at `/demos/*` (case triage, support agent, knowledge bot)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Geist Sans / Geist Mono (via `next/font`) |

---

## Project structure

```
Salesforce_Portfolio/
├── public/                    # Static files (served at /)
│   ├── parvez-headshot.png
│   ├── parvez-logo.png
│   ├── parvez-shaik-resume.pdf
│   └── certifications/        # Credential screenshots for modals
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, fonts, metadata
│   │   ├── page.tsx           # Home page (all sections)
│   │   ├── globals.css        # Tailwind theme and utilities
│   │   └── demos/             # Standalone demo routes
│   │       ├── case-triage/
│   │       ├── support-agent/
│   │       └── knowledge-bot/
│   ├── components/            # UI sections and shared pieces
│   │   ├── demos/             # Demo page UIs
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── CertificationModal.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   └── data/
│       └── portfolio.ts       # Single source of truth for copy and links
├── repos/                     # Optional standalone Vite demos (separate GitHub repos)
├── scripts/                   # Utility scripts (logo processing, etc.)
├── package.json
├── tsconfig.json              # Excludes /repos from Next.js typecheck
└── README.md
```

---

## Getting started

### Prerequisites

- **Node.js** 20.x or later (LTS recommended)
- **npm** 10+ (or pnpm / yarn)

### Install and run

```bash
git clone https://github.com/Parvez4/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Configuration

Almost all user-facing content lives in **`src/data/portfolio.ts`**. Update this file to change:

| Export | Purpose |
|--------|---------|
| `siteConfig` | Name, title, tagline, email, phone, location, social URLs, resume paths, availability |
| `navLinks` | Header / mobile navigation |
| `aboutContent` | About section copy and focus areas |
| `skillCategories` | Skills bento and marquee |
| `experience` / `experienceSection` | Work history |
| `projects` / `projectsSection` | Featured projects |
| `certifications` | Credential names, dates, images, and “learned” bullets |
| `education` / `educationSection` | Degrees and highlights |

Example — resume download in the header:

```ts
resumeUrl: "/parvez-shaik-resume.pdf",
resumeDownloadName: "Parvez_Shaik_Resume.pdf",
```

Place your PDF at `public/parvez-shaik-resume.pdf`.

---

## Static assets

| Path | Usage |
|------|--------|
| `public/parvez-headshot.png` | Hero portrait |
| `public/parvez-logo.png` | Header logo (rounded circle; keep background in image) |
| `public/parvez-shaik-resume.pdf` | Resume download button |
| `public/certifications/*.png` | Certification modal images (see `public/certifications/README.md`) |

**Certification filenames** must match `credentialImage` in `portfolio.ts`:

- `platform-developer-i.png`
- `platform-app-builder.png`
- `platform-administrator.png`
- `agentforce-specialist.png` (add file when available)

Use a single `.png` extension (not `.png.png`).

---

## Interactive demos

These routes simulate portfolio projects for recruiters and interview walkthroughs:

| Route | Project |
|-------|---------|
| `/demos/case-triage` | AI-driven case triage and resolution |
| `/demos/support-agent` | Customer support autonomous agent (chat) |
| `/demos/knowledge-bot` | Intelligent knowledge retrieval (RAG-style search) |

Implementation: `src/components/demos/*` and `src/app/demos/*/page.tsx`.

---

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**.
4. Deploy. No environment variables are required for the default setup.

Ensure these files are committed (they are required at runtime):

- `public/parvez-headshot.png`
- `public/parvez-logo.png`
- `public/parvez-shaik-resume.pdf`
- `public/certifications/*.png`

### Other hosts

Any platform that supports Next.js 15 static or Node deployment works. Run `npm run build` and serve the output per the host’s Next.js guide.

---

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Start dev server (Turbopack) |
| Build | `npm run build` | Production build |
| Start | `npm start` | Run production server |
| Lint | `npm run lint` | ESLint |

Utility scripts in `scripts/` (optional):

- `process-parvez-logo.py` — background removal for logo experiments (header uses logo **with** background by default)
- `process-logo.py` — legacy Salesforce logo processing

---

## Related repositories

The `repos/` folder contains optional **standalone Vite** copies of the three demos for separate GitHub repositories. They are excluded from the main typecheck via `tsconfig.json` and are not required to run the portfolio.

To publish them individually, see `repos/PUSH_TO_GITHUB.md`.

---

## License

This project is for personal portfolio use. All content, branding, and assets are owned by **Parvez Shaik** unless otherwise noted.

---

## Contact

- **Email:** parvezshaik3008@gmail.com
- **LinkedIn:** [linkedin.com/in/parvezshaik44](https://www.linkedin.com/in/parvezshaik44/)
- **GitHub:** [github.com/Parvez4](https://github.com/Parvez4)
- **Trailhead:** [Salesforce Trailblazer profile](https://www.salesforce.com/trailblazer/parvez)
