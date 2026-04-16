# Zy AI Academy

> **Live site:** [zyaiacademy.com](https://zyaiacademy.com)
> AI tutoring for kids ages 5–14. Built by a dad for his 5-year-old son Zy.
> Math, reading, coding, and more — powered by Custom GPTs + a Skool community.

[![Status](https://img.shields.io/badge/status-live-success)](https://zyaiacademy.com)
[![Platform](https://img.shields.io/badge/hosting-Railway-6231c4)](https://railway.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-private-red)]()

---

## Table of Contents

1. [What is Zy AI Academy?](#what-is-zy-ai-academy)
2. [Who It's For](#who-its-for)
3. [The Offer](#the-offer)
4. [The 7 AI Tutors](#the-7-ai-tutors)
5. [Live Pages](#live-pages)
6. [Tech Stack](#tech-stack)
7. [Quick Start (Development)](#quick-start-development)
8. [Deployment](#deployment)
9. [Project Structure](#project-structure)
10. [Documentation](#documentation)
11. [External Services](#external-services)
12. [Contributing](#contributing)
13. [License](#license)

---

## What is Zy AI Academy?

Zy AI Academy is a **done-for-you AI tutoring system** for kids ages 5–14. Parents get:

- 7 pre-configured ChatGPT tutors (math, reading, Spanish, creative thinking, etc.)
- Daily habit templates and progress tracking
- A private Skool community with done-for-you setup help
- A free Minecraft vibe-coding bonus curriculum
- Lifetime access for one payment ($47 Founding Family launch price)

**The story:** Justin Bellware built this for his 5-year-old son Zion after watching him struggle in a traditional classroom. Zion went from struggling with basic addition to completing 40+ math problems daily at 3rd-grade level and reading at 9–10 year-old level. Now Zion is the **Founder & Chief Learning Officer** of the business — and every purchase funds his real paycheck.

See [BUSINESS.md](./BUSINESS.md) for the full mission, vision, and financial structure.

---

## Who It's For

1. **Busy Professionals** — Work 50+ hrs/week, can't do homework every night. Want an independent learning system.
2. **Homeschool Families** — Know one-size-fits-all doesn't work. Want AI supplements that adapt to each child.
3. **Achievement-Focused Parents** — Want kids ahead of the curve with real-world skills, not test scores.
4. **Budget-Conscious Families** — Can't afford $100/hr tutors. Want world-class education at a fair price.

Full ICP profiles: [`marketing-agency/campaigns/zy-ai-academy/brand-voice/icp.md`](../marketing-agency/campaigns/zy-ai-academy/brand-voice/icp.md)

---

## The Offer

### Founding Family — $47 one-time
- All 7 AI tutors
- Parent dashboard & progress tracking
- Daily habit templates & homework help prompts
- **FREE** Safe Vibe Coding for Kids bonus ($197 value)
- Free future updates forever
- **30 days FREE** Skool community access
- Done-for-you setup help from our team
- Daily accountability with other parents

### VIP Family — $297 one-time
- Everything in Founding Family
- Private 30-min onboarding video call
- Custom tutor configuration for your child
- **6 months FREE** Skool community (instead of 30 days)
- Direct message access to Justin
- Priority support — responses within 4 hours

### Guarantee
**30-day "They'll Use It" Guarantee** — If your child doesn't complete 10 AI tutoring sessions in their first 30 days, full refund. No questions asked.

---

## The 7 AI Tutors

Each tutor is a ChatGPT Custom GPT with a pre-configured system prompt. Downloadable as `.txt` files on the live site.

| # | Tutor | Purpose | Source |
|---|-------|---------|--------|
| 1 | Math Lab | Core math practice, grade-level adaptive | [`/downloads/math-lab-prompt.txt`](https://zyaiacademy.com/downloads/math-lab-prompt.txt) |
| 2 | Language Arts | Reading comprehension, writing, vocab | [`/downloads/language-arts-prompt.txt`](https://zyaiacademy.com/downloads/language-arts-prompt.txt) |
| 3 | Mental Math Wizard | Quick-fire arithmetic, pattern recognition | [`/downloads/mental-math-wizard-prompt.txt`](https://zyaiacademy.com/downloads/mental-math-wizard-prompt.txt) |
| 4 | Communication Tutor | Speaking, listening, social intelligence | [`/downloads/communication-tutor-prompt.txt`](https://zyaiacademy.com/downloads/communication-tutor-prompt.txt) |
| 5 | AI Adventure Tutor | Storytelling-based learning, problem solving | [`/downloads/ai-adventure-tutor-prompt.txt`](https://zyaiacademy.com/downloads/ai-adventure-tutor-prompt.txt) |
| 6 | Spanish Tutor | Bilingual immersion at age-appropriate pace | [`/downloads/spanish-tutor-prompt.txt`](https://zyaiacademy.com/downloads/spanish-tutor-prompt.txt) |
| 7 | Creative Thinking | Divergent thinking, "what if" exploration | [`/downloads/creative-thinking-prompt.txt`](https://zyaiacademy.com/downloads/creative-thinking-prompt.txt) |

Source files (markdown versions) for editing: [`content/prompts/`](./content/prompts/)
Parent setup guide: [`content/guides/parent-setup-guide.md`](./content/guides/parent-setup-guide.md)

---

## Live Pages

### Public Pages
- [`/`](https://zyaiacademy.com/) — Main landing page
- [`/founding-circle`](https://zyaiacademy.com/founding-circle) — Alpha group application (50 families)
- [`/kickstarter`](https://zyaiacademy.com/kickstarter) — Pre-launch email capture

### Customer Welcome Pages (shared via email after purchase)
- [`/welcome/early-bird`](https://zyaiacademy.com/welcome/early-bird)
- [`/welcome/founding-family`](https://zyaiacademy.com/welcome/founding-family)
- [`/welcome/homeschool-hero`](https://zyaiacademy.com/welcome/homeschool-hero)
- [`/welcome/vip`](https://zyaiacademy.com/welcome/vip)
- [`/welcome/founding-sponsor`](https://zyaiacademy.com/welcome/founding-sponsor)

### Business Dashboard
- [`/zions-dashboard`](https://zyaiacademy.com/zions-dashboard) — Zion's kid-friendly business dashboard (revenue splits, lessons)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, SSR mode) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Hosting | [Railway](https://railway.app/) |
| DNS / SSL | [Cloudflare](https://cloudflare.com/) (Full SSL mode) |
| Domain | [zyaiacademy.com](https://zyaiacademy.com) (Hostinger registrar) |
| Version Control | Git / GitHub |
| Node Version | 18.x – 22.x |

---

## Quick Start (Development)

### Prerequisites
- Node.js 18 or higher
- npm or pnpm
- Git

### Setup
```bash
# Clone the repo
git clone https://github.com/jbellsolutions/zy-ai-academy.git
cd zy-ai-academy

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site runs at **http://localhost:3000**

### Common Scripts
```bash
npm run dev      # Dev server with hot reload
npm run build    # Production build
npm run start    # Start production build locally
npm run lint     # Run ESLint
```

---

## Deployment

Deployed on **Railway**. Auto-deploys on push to `main` branch.

### Manual deploy (if needed)
```bash
railway up
```

### Live URLs
- **Primary:** https://zyaiacademy.com (custom domain via Cloudflare)
- **Railway:** https://zy-academy-production.up.railway.app

### DNS Configuration
Managed via Cloudflare (nameservers: `eve.ns.cloudflare.com`, `zahir.ns.cloudflare.com`).
DNS records are configured via Railway's one-click Cloudflare integration.

**SSL Mode:** Full (not Flexible — Flexible causes redirect loops with Railway)

See [`PROJECT.md`](./PROJECT.md) for full deployment details and troubleshooting.

---

## Project Structure

```
zy-ai-academy/
├── README.md                    ← You are here
├── PROJECT.md                   ← Master reference (A-Z)
├── DOCS_INDEX.md                ← Index of all documentation
├── CONTRIBUTING.md              ← Dev workflow & conventions
├── BUSINESS.md                  ← Mission, vision, financial structure
│
├── src/
│   └── app/                     ← Next.js App Router pages
│       ├── page.tsx             ← Main landing (~15 sections)
│       ├── layout.tsx
│       ├── founding-circle/     ← Alpha group application
│       ├── kickstarter/         ← Pre-launch capture page
│       ├── welcome/             ← 5 customer welcome pages
│       └── zions-dashboard/     ← Zion's business dashboard
│
├── public/
│   ├── videos/                  ← 13 video clips (proof, sessions, shorts)
│   └── downloads/               ← 7 tutor prompt .txt files
│
├── content/
│   ├── guides/                  ← parent-setup, progress-tracker, templates
│   └── prompts/                 ← 7 tutor prompts in .md format (source)
│
├── kickstarter/                 ← 6 campaign planning docs
│   ├── campaign-page-copy.md
│   ├── reward-tiers.md
│   ├── stretch-goals.md
│   ├── video-script.md
│   ├── pre-launch-emails.md
│   └── launch-checklist.md
│
├── skool/                       ← Community plan & onboarding flow
├── youtube/                     ← Channel strategy & content calendar
├── cold-outreach/               ← Florida homeschool playbook
└── fulfillment/                 ← Post-purchase email sequence
```

For a fully indexed doc map, see [DOCS_INDEX.md](./DOCS_INDEX.md).

---

## Documentation

This repo is documentation-heavy. Everything is markdown, version-controlled.

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Project overview, quick start (this file) |
| [PROJECT.md](./PROJECT.md) | **Master reference — A to Z** |
| [BUSINESS.md](./BUSINESS.md) | Mission, vision, financial structure, Zion's role |
| [DOCS_INDEX.md](./DOCS_INDEX.md) | Index of all docs with descriptions |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Dev workflow, conventions, deploy process |

---

## External Services

| Service | URL | Purpose |
|---------|-----|---------|
| **GitHub** | [jbellsolutions/zy-ai-academy](https://github.com/jbellsolutions/zy-ai-academy) | Source of truth |
| **Railway** | [Railway project](https://railway.com/project/ba5bd7a3-4b25-4dcb-86ef-c4120521a185) | Hosting + deploy |
| **Cloudflare** | [Cloudflare dash](https://dash.cloudflare.com/) | DNS + SSL |
| **Skool** | [skool.com/zyaiacademy-6081](https://www.skool.com/zyaiacademy-6081) | Private community |
| **YouTube** | [@ZyAIAcademy](https://www.youtube.com/@ZyAIAcademy) | Content & proof videos |
| **HeyGen** | Avatar ID `cadaa4a110a0495a9a2e9d8159bccb18` | Justin's avatar + voice clone |
| **Swipe Library** | [jbellsolutions/swipe-library](https://github.com/jbellsolutions/swipe-library) | Marketing copy examples |
| **Marketing Agency** | `../marketing-agency/` (sibling dir) | Autonomous content pipeline |

---

## Contributing

This is currently a single-maintainer project (Justin). If you're spinning this up on a new machine or bringing in collaborators:

1. Read [PROJECT.md](./PROJECT.md) end-to-end
2. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for workflow/conventions
3. Reach out: **jbellsolutions@gmail.com**

---

## License

**Private / Proprietary.** Not open source. All content, code, and brand assets belong to Justin Bellware / Zy AI Academy.

© 2026 Zy AI Academy. All rights reserved.

---

**Questions?** [jbellsolutions@gmail.com](mailto:jbellsolutions@gmail.com)
