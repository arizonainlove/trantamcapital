# TrantamCapital Website

Financial market information website covering cryptocurrency, forex, and binary options. Built for international audience (English).

## Quick Links

- [Project Overview](.claude/rules/project-overview.md) — Tech stack, site structure (20 pages)
- [Design System](.claude/rules/design-system.md) — Colors, typography, components, responsive
- [Components](.claude/rules/components.md) — Component library, price ticker, file structure
- [CMS — Decap CMS](.claude/rules/cms-decap.md) — Content management setup
- [Build & Deploy](.claude/rules/build-deploy.md) — Commands, next.config.js, paths, verification
- [Code Reviewer](.claude/rules/code-reviewer.md) — Code quality & security review specs
- [SEO & UX/UI](.claude/rules/seo-ux.md) — SEO, accessibility, and UX standards

## TL;DR

| Area | Summary |
|------|---------|
| Stack | Next.js 14 + TypeScript + Tailwind CSS |
| Design | Premium Financial — cam `#E84910`, navy `#0F1A2E`, gold `#C8A84E` |
| Pages | 10 main + 7 sub + 9 news/[slug] + utility = 31 routes, English |
| CMS | Decap CMS (git-based, free) via `/admin` |
| Live prices | CoinGecko API, 12 coins, 60s refresh |
| Deploy | Vercel (free), GitHub auto-deploy |
| Initial command | `npm run dev` in `trantamcapital/` |
