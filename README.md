# Zy AI Academy

**Live site:** https://zyaiacademy.com

AI tutoring system for kids ages 5-12. Built by a dad for his 5-year-old son Zy. Math, reading, coding, and more — powered by Custom GPTs and structured daily sessions.

## Tech Stack

- **Framework:** Next.js 15 (standalone mode)
- **Styling:** Tailwind CSS 4
- **Hosting:** Railway
- **Domain:** zyaiacademy.com

## Routes

### Public Pages
- `/` — Main landing page
- `/founding-circle` — Alpha group application (50 families)
- `/kickstarter` — Pre-launch email capture

### Backer Welcome Pages (unlisted, shared via email)
- `/welcome/early-bird`
- `/welcome/founding-family`
- `/welcome/family-friends`
- `/welcome/homeschool-hero`
- `/welcome/vip`
- `/welcome/founding-sponsor`

### Downloadable Prompt Files
- `/downloads/math-lab-prompt.txt`
- `/downloads/language-arts-prompt.txt`
- `/downloads/mental-math-wizard-prompt.txt`
- `/downloads/communication-tutor-prompt.txt`
- `/downloads/ai-adventure-tutor-prompt.txt`
- `/downloads/spanish-tutor-prompt.txt`
- `/downloads/creative-thinking-prompt.txt`

## Development

```bash
npm run dev     # Start dev server on localhost:3000
npm run build   # Build for production
```

## Deployment

Deployed on Railway. To redeploy:

```bash
railway up
```

## Project Structure

```
src/app/              — Next.js pages
public/downloads/     — Downloadable prompt .txt files
kickstarter/          — Kickstarter campaign copy and assets
cold-outreach/        — Florida homeschool outreach strategy
youtube/              — YouTube channel strategy and content calendar
skool/                — Skool community plan
content/              — Product content (guides, prompts, curriculum)
fulfillment/          — Post-campaign delivery documentation
```
