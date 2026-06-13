# ProTradeVision Website

Financial market information website covering cryptocurrency, forex, and binary options. Built for international audience (English).

## Quick Links

- [Project Overview](.claude/rules/project-overview.md) — Tech stack, site structure (20 pages)
- [Design System](.claude/rules/design-system.md) — Colors, typography, components, responsive
- [Components](.claude/rules/components.md) — Component library, price ticker, file structure
- [Custom Admin UI](.claude/rules/cms-decap.md) — Content management setup
- [Build & Deploy](.claude/rules/build-deploy.md) — Commands, next.config.js, paths, verification
- [Code Reviewer](.claude/rules/code-reviewer.md) — Code quality & security review specs
- [SEO & UX/UI](.claude/rules/seo-ux.md) — SEO, accessibility, and UX standards
- [Content Conversion](.claude/rules/content-conversion.md) — Vietnamese → English article rewrite & SEO

## TL;DR

| Area | Summary |
|------|---------|
| Stack | Next.js 16 + TypeScript + Tailwind CSS |
| Design | Premium Financial — cam `#E84910`, navy `#0F1A2E`, gold `#C8A84E`, body text 16px |
| Pages | 11 main + 8 sub + 19 news/[slug] (12 news + 7 guides) + utility = 42 routes, English |
| CMS | Custom Admin UI via `/admin` — Username/password login + role-based access (admin/staff) + GitHub PAT proxy for content ops. 4 tabs: News, Brokers, Reviews, Menu + **Platform Guides** (extensible for crypto/forex/binary/prop) |
| Live prices | CoinGecko API, 12 coins, 60s refresh |
| Security | XSS sanitize (CMS + contact), CSRF origin check (contact + newsletter), rate limiting (API: login 5/min, general 60/min, proxy 120/min), CSP + security headers, GDPR consent, HMAC-SHA256 signed session cookie admin auth with sliding expiration + Remember Me (30 days), role-based access (admin/staff), bcrypt password hashing, SESSION_SECRET env var |
| Legal | Binary options risk warning + geo-restriction, affiliate disclosure, governing law (Belize) |
| Backup | `npm run backup` / `npm run restore` — CMS content snapshots |
| Content inventory | `NOI_DUNG_WEBSITE.md` — all website text for editing reference |
| Deploy | Vercel (free), GitHub auto-deploy |
| Initial command | `npm run dev` in `trantamcapital/` |
