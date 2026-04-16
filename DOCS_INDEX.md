# Documentation Index

> Every markdown file in this repo, organized by purpose.
> For the master reference, see [PROJECT.md](./PROJECT.md).

---

## 🏠 Root-Level Docs

| File | Purpose |
|------|---------|
| [README.md](./README.md) | Project overview, quick start, tech stack |
| [PROJECT.md](./PROJECT.md) | **Master A-Z reference** — read this first |
| [BUSINESS.md](./BUSINESS.md) | Mission, vision, values, financial structure |
| [DOCS_INDEX.md](./DOCS_INDEX.md) | This file — every doc indexed |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Dev workflow, conventions, deploy process |
| [AGENTS.md](./AGENTS.md) | Next.js 15 warning for AI agents |
| [CLAUDE.md](./CLAUDE.md) | Pointer to AGENTS.md |

---

## 📚 Product Content (`content/`)

Product-facing documentation that parents and customers use.

### Guides (`content/guides/`)

| File | Purpose |
|------|---------|
| [parent-setup-guide.md](./content/guides/parent-setup-guide.md) | 10-min walkthrough: copy prompts into ChatGPT, first session |
| [progress-tracker.md](./content/guides/progress-tracker.md) | How to track a child's daily/weekly progress |
| [daily-session-templates.md](./content/guides/daily-session-templates.md) | Session structure templates for each tutor |

### Tutor Prompts (`content/prompts/`)

Source of truth for the 7 AI tutors. When you edit a tutor, update here first, then copy to `public/downloads/`.

| File | Tutor |
|------|-------|
| `math-lab-prompt.md` | Math Lab |
| `language-arts-prompt.md` | Language Arts |
| `mental-math-wizard-prompt.md` | Mental Math Wizard |
| `communication-tutor-prompt.md` | Communication Tutor |
| `ai-adventure-tutor-prompt.md` | AI Adventure Tutor |
| `spanish-tutor-prompt.md` | Spanish Tutor |
| `creative-thinking-prompt.md` | Creative Thinking |

---

## 🚀 Kickstarter Campaign (`kickstarter/`)

Complete campaign planning and launch assets.

| File | Purpose |
|------|---------|
| [campaign-page-copy.md](./kickstarter/campaign-page-copy.md) | Kickstarter campaign page headline, description, copy |
| [reward-tiers.md](./kickstarter/reward-tiers.md) | Every reward tier with pricing and benefits |
| [stretch-goals.md](./kickstarter/stretch-goals.md) | Post-funding expansion goals |
| [video-script.md](./kickstarter/video-script.md) | Main campaign video script |
| [pre-launch-emails.md](./kickstarter/pre-launch-emails.md) | Email sequence for pre-launch list |
| [launch-checklist.md](./kickstarter/launch-checklist.md) | Go-live checklist (creator account, payments, assets) |

---

## 🎓 Skool Community (`skool/`)

Private Skool community structure and onboarding.

| File | Purpose |
|------|---------|
| [community-plan.md](./skool/community-plan.md) | Community structure, tier benefits, 30-day trial flow |
| [onboarding-flow.md](./skool/onboarding-flow.md) | New member welcome sequence and accountability groups |

**Live community:** [skool.com/zyaiacademy-6081](https://www.skool.com/zyaiacademy-6081)

---

## 📺 YouTube Channel (`youtube/`)

Channel strategy, content planning, and production templates.

| File | Purpose |
|------|---------|
| [channel-strategy.md](./youtube/channel-strategy.md) | Channel positioning, SEO keywords, upload cadence |
| [content-calendar.md](./youtube/content-calendar.md) | Monthly/weekly content schedule |
| [video-templates.md](./youtube/video-templates.md) | Recording + editing templates for consistency |

**Live channel:** [@ZyAIAcademy](https://www.youtube.com/@ZyAIAcademy)

---

## 📧 Fulfillment (`fulfillment/`)

Post-purchase customer journey.

| File | Purpose |
|------|---------|
| [email-sequence.md](./fulfillment/email-sequence.md) | Welcome + onboarding email sequence (Day 1, 3, 7, 14, 30) |

See also: Welcome pages in [`src/app/welcome/`](./src/app/welcome/)

---

## 🎯 Cold Outreach (`cold-outreach/`)

Proactive customer acquisition via direct outreach.

| File | Purpose |
|------|---------|
| [florida-homeschool-leads.md](./cold-outreach/florida-homeschool-leads.md) | Florida homeschool groups/networks lead list |
| [email-sequence.md](./cold-outreach/email-sequence.md) | Cold email templates (3-5 touches) |
| [scraping-playbook.md](./cold-outreach/scraping-playbook.md) | LinkedIn/Facebook scraping methodology |

---

## 🎨 Brand & Marketing (external — in sibling dir)

Marketing automation and brand voice lives in `../marketing-agency/`:

| File | Purpose |
|------|---------|
| `../marketing-agency/CLAUDE.md` | Marketing agency architecture (3-layer pipeline) |
| `../marketing-agency/README.md` | Usage commands, setup instructions |
| `../marketing-agency/campaigns/zy-ai-academy/brand-voice/voice.md` | Brand voice guide (tone, vocabulary, 4 example scripts) |
| `../marketing-agency/campaigns/zy-ai-academy/brand-voice/icp.md` | 4 Ideal Customer Profiles with pain/platforms/objections |
| `../marketing-agency/campaigns/zy-ai-academy/brand-voice/product.md` | Product spec with pricing and proof points |
| `../marketing-agency/campaigns/zy-ai-academy/brand-voice/writing-rules.md` | Absolute writing rules + platform guidelines |
| `../marketing-agency/campaigns/zy-ai-academy/content-seeds/current-week.json` | Weekly content plan |
| `../marketing-agency/campaigns/zy-ai-academy/content-seeds/zy-scripts.json` | Reusable script templates |
| `../marketing-agency/campaigns/zy-ai-academy/influencer-targets.json` | Influencer outreach list |

---

## 🧠 Memory Files (Claude's cross-session memory)

These live in `~/.claude/projects/-Users-home/memory/`. They aren't part of the repo — they're Claude-specific quick-reference docs.

| File | Purpose |
|------|---------|
| `MEMORY.md` | Cross-project memory index |
| `zy_ai_academy.md` | Zy AI Academy master reference (Claude quick-lookup) |
| `zy_business_structure.md` | Business structure summary |
| `zy_swipe_library.md` | Swipe library reference (jbellsolutions/swipe-library) |

These are a **secondary reference** — the repo is the source of truth.

---

## 🔗 External References

| Resource | URL |
|----------|-----|
| Live site | https://zyaiacademy.com |
| Railway URL | https://zy-academy-production.up.railway.app |
| GitHub repo | https://github.com/jbellsolutions/zy-ai-academy |
| Skool community | https://www.skool.com/zyaiacademy-6081 |
| YouTube channel | https://www.youtube.com/@ZyAIAcademy |
| Swipe library | https://github.com/jbellsolutions/swipe-library |
| Marketing agency template | https://github.com/jbellsolutions/autonomous-marketing-agency |

---

## 🔍 How to Find Things

### "I want to understand the business end-to-end"
→ Read [PROJECT.md](./PROJECT.md) top to bottom

### "I want to contribute code"
→ Start with [CONTRIBUTING.md](./CONTRIBUTING.md)

### "I want to edit a tutor"
→ Edit in `content/prompts/`, then copy to `public/downloads/`

### "I want to update the landing page"
→ Edit `src/app/page.tsx`

### "I want to run a marketing cycle"
→ Go to `../marketing-agency/`, add OpenAI + Apify keys, run `npm run eddie-cycle`

### "I want to launch the Kickstarter"
→ Follow [kickstarter/launch-checklist.md](./kickstarter/launch-checklist.md)

### "I want to understand the financial structure"
→ [BUSINESS.md § Financial Structure](./BUSINESS.md#financial-structure)

### "I want to add a new customer tier"
→ Add welcome page in `src/app/welcome/`, update [PROJECT.md](./PROJECT.md), update emails in `fulfillment/email-sequence.md`

### "Deploy is broken"
→ [PROJECT.md § Deployment](./PROJECT.md#9-deployment--hosting) troubleshooting section

---

**Last updated:** 2026-04-16
