# Contributing to Zy AI Academy

> Development workflow, conventions, and deploy process.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Development Workflow](#development-workflow)
4. [Code Conventions](#code-conventions)
5. [Editing Content](#editing-content)
6. [Editing AI Tutors](#editing-ai-tutors)
7. [Adding Videos](#adding-videos)
8. [Deploying](#deploying)
9. [Troubleshooting](#troubleshooting)
10. [Security](#security)

---

## Prerequisites

Before you start, make sure you have:

- **Node.js 18.x or higher** (up to 22.x) — `node -v`
- **npm** (comes with Node) — `npm -v`
- **Git** — `git --version`
- **Railway CLI** (optional, for manual deploys) — `npm i -g @railway/cli`
- **A text editor** (VS Code recommended)
- **Access to the GitHub repo** (`jbellsolutions/zy-ai-academy`)

---

## Initial Setup

### 1. Clone the repo

```bash
git clone https://github.com/jbellsolutions/zy-ai-academy.git
cd zy-ai-academy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open **http://localhost:3000** — you should see the Zy AI Academy landing page.

### 4. (Optional) Install Railway CLI

For manual deploys and log access:

```bash
npm install -g @railway/cli
railway login
cd zy-ai-academy
railway link
```

---

## Development Workflow

### Branches

- `main` — **production.** Every push auto-deploys to zyaiacademy.com via Railway.
- `feature/*` — feature branches. Use for any non-trivial work.

### Making changes

```bash
# Create a feature branch
git checkout -b feature/your-change

# Make your changes, test locally
npm run dev

# Run the build to verify nothing breaks
npm run build

# Commit
git add .
git commit -m "Your descriptive commit message"

# Merge to main when ready (or open a PR if collaborating)
git checkout main
git merge feature/your-change
git push origin main
```

On push to `main`, Railway auto-deploys. Takes ~2-3 minutes.

### Hotfix workflow

For urgent fixes:

```bash
# Edit directly on main (only for hotfixes)
git checkout main
# ...make fix...
npm run build  # ALWAYS verify the build passes
git add .
git commit -m "Hotfix: <description>"
git push origin main
```

---

## Code Conventions

### File structure

- **App Router pages** live in `src/app/`. Each route is a folder with a `page.tsx`.
- **Shared components** (if needed later) go in `src/components/`.
- **Static assets** (images, videos, downloads) go in `public/`.
- **Content** (markdown) lives in `content/`, `kickstarter/`, `youtube/`, `skool/`, `fulfillment/`, `cold-outreach/`.

### Styling

- **Tailwind CSS v4** — use utility classes, not custom CSS (except in `globals.css`)
- **Brand colors:** `teal` (`#0D7C66`), `orange` (`#E8651A`), `dark` (`#1A1A2E`), `light` (`#F7F9FB`)
- **Fonts:** System stack (Segoe UI, Arial, sans-serif)

### TypeScript

- **Strict mode** is on
- Avoid `any` — use proper types or `unknown` where truly dynamic
- React component files use `.tsx`, utility files use `.ts`

### Naming

- **Components:** PascalCase (`Hero`, `VideoCarousel`, `PricingCard`)
- **Files:** kebab-case for utility files, PascalCase for component files
- **Page folders:** kebab-case (`founding-circle/`, not `FoundingCircle/`)

### Commit messages

Start with a verb, be descriptive:

✅ Good:
- "Add Skool community section to landing page"
- "Fix video lazy-load on Safari"
- "Update pricing copy for Founding Family tier"

❌ Bad:
- "updates"
- "wip"
- "Fixed stuff"

---

## Editing Content

### Landing page (`src/app/page.tsx`)

The main landing page is a **single large file** with many sections as inline components. Each section is clearly commented (search for `/* ─────── SECTION NAME ─────── */`).

To edit copy:
1. Open `src/app/page.tsx`
2. Find the section via comment
3. Edit the JSX (text is usually in `<p>`, `<h1>`, `<h2>` tags)
4. Save — dev server hot-reloads
5. Build (`npm run build`) before committing

### Copy on other pages

Smaller pages live in their own folder under `src/app/`. Each has a single `page.tsx` that's easier to navigate.

### Markdown docs

All markdown files in `content/`, `kickstarter/`, `skool/`, `youtube/`, `fulfillment/`, `cold-outreach/` are free-form documentation. Edit as needed. They don't require builds or deploys — they're just reference docs.

---

## Editing AI Tutors

### Source of truth

**Edit tutors in `content/prompts/`** (markdown format). These are the source files.

### Sync to customer downloads

After editing a tutor in `content/prompts/`:

1. Convert the markdown to `.txt` (strip markdown syntax, keep content)
2. Save to `public/downloads/<tutor-name>-prompt.txt`
3. Commit both files together

Or use a script (to be built):
```bash
# Future helper: npm run sync-tutors
```

### Testing a tutor

1. Copy the prompt text
2. Paste into ChatGPT → "Create a GPT" → paste in system prompt
3. Test with sample parent inputs
4. Iterate on the prompt in `content/prompts/` until it works
5. Sync to `public/downloads/`

### Tutor naming

If adding a new tutor:
- File: `<tutor-slug>-prompt.md` (e.g., `science-explorer-prompt.md`)
- Route: `/downloads/<tutor-slug>-prompt.txt`
- Update: [PROJECT.md](./PROJECT.md) table and [DOCS_INDEX.md](./DOCS_INDEX.md)

---

## Adding Videos

### Format requirements

- **Portrait shorts:** 1080x1920, 20-30 seconds, MP4 (H.264)
- **Landscape sessions:** 1920x1080, up to 2 minutes, MP4
- **Compressed** before committing (aim for 2-5MB per short, up to 20MB for full sessions)

### Compression workflow

Use `ffmpeg` to compress:

```bash
# Portrait short
ffmpeg -i input.mp4 -vf scale=1080:1920 -c:v libx264 -crf 24 -preset slow -c:a aac -b:a 128k -movflags +faststart output.mp4

# Landscape session
ffmpeg -i input.mp4 -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 128k -movflags +faststart output.mp4
```

### Generate thumbnail

```bash
ffmpeg -i output.mp4 -ss 00:00:02 -vframes 1 -q:v 2 thumbnail.jpg
```

### Add to the site

1. Save video to `public/videos/<name>.mp4`
2. Save thumbnail to `public/videos/<name>-thumb.jpg`
3. Add to the appropriate section in `src/app/page.tsx` (usually `ProofStrip` or `SessionVideos`)
4. Use the existing `<LazyVideo>` component for lazy loading

---

## Deploying

### Auto-deploy (preferred)

Just push to `main`:

```bash
git push origin main
```

Railway detects the push, builds, and deploys. Watch at [railway.app](https://railway.app/).

### Manual deploy

```bash
railway up
```

### Check deploy status

```bash
railway logs
railway status
```

Or check [Railway dashboard](https://railway.com/project/ba5bd7a3-4b25-4dcb-86ef-c4120521a185).

### Rollback

In Railway dashboard → **Deployments** tab → click **Redeploy** on any previous successful deployment.

---

## Troubleshooting

### "Build fails locally"
```bash
# Clear cache and try again
rm -rf .next node_modules
npm install
npm run build
```

### "Build passes locally but fails on Railway"
- Check Node version (Railway uses the version in `.node-version` or `package.json` engines)
- Check environment variables (Railway has its own env, not your local `.env`)
- Check Railway logs: `railway logs`

### "Domain shows 'Application not found'"
Railway hasn't issued the SSL cert yet. Wait 5-15 minutes. If it persists:
1. Check Cloudflare DNS records match what Railway expects
2. In Cloudflare → SSL/TLS, ensure mode is **Full** (not Flexible)
3. Try removing and re-adding the domain via Railway dashboard

### "Redirect loop on zyaiacademy.com"
Cloudflare SSL mode is set to **Flexible**. Change to **Full** in Cloudflare → SSL/TLS → Overview.

### "Changes not showing up in production"
1. Check that your push made it to GitHub: `git log origin/main`
2. Check Railway deployment history — did the build succeed?
3. Hard-refresh the browser: Cmd+Shift+R
4. Clear Cloudflare cache: Cloudflare dashboard → Caching → Purge Everything

### "npm install fails with permission errors"
Don't use `sudo`. Fix npm prefix:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# Add to ~/.zshrc or ~/.bashrc:
export PATH=~/.npm-global/bin:$PATH
```

### "TypeScript errors"
```bash
npx tsc --noEmit
```
Fix errors reported. The build will fail if there are unresolved TypeScript errors.

### "Tailwind classes not working"
Tailwind v4 uses a different config approach. Check that:
- `postcss.config.mjs` has `@tailwindcss/postcss`
- `globals.css` has `@import "tailwindcss"`
- Custom theme is inline in `globals.css` via `@theme inline { ... }`

---

## Security

### Never commit

- API keys (Anthropic, OpenAI, HeyGen, ElevenLabs, Apify)
- `.env` files (already in `.gitignore`)
- Customer data
- Passwords / tokens
- Database credentials

### API keys

All keys live in `../marketing-agency/.env` (sibling directory, not in this repo).

If a key is accidentally committed:
1. **Rotate the key immediately** at the provider
2. Remove from git history: `git filter-branch` or BFG Repo-Cleaner
3. Force-push: `git push origin main --force-with-lease`
4. Notify Justin: jbellsolutions@gmail.com

### Dependencies

Periodically check for security updates:
```bash
npm audit
npm audit fix
```

### Child safety

This is an education product for kids. **Never** include:
- Full close-ups of Zion's face in paid ads (organic is OK)
- Personally identifying details about Zion or customers
- Links to unmoderated AI interactions
- Any content that sexualizes or exploits children

Brand safety rules: [`../marketing-agency/campaigns/zy-ai-academy/brand-voice/writing-rules.md`](../marketing-agency/campaigns/zy-ai-academy/brand-voice/writing-rules.md)

---

## Getting Help

1. **Read [PROJECT.md](./PROJECT.md)** — most questions are answered there
2. **Check [DOCS_INDEX.md](./DOCS_INDEX.md)** — to find the right doc
3. **Email** Justin: jbellsolutions@gmail.com

---

## License

Private / proprietary. Not open source. See [README.md § License](./README.md#license).

© 2026 Zy AI Academy
