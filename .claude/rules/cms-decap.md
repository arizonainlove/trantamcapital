---
description: Custom Admin UI for content management (replaces Decap CMS)
---

## Custom Admin UI — Content Management

### Overview
- Type: Self-contained SPA, no CMS dependency
- Access URL: `/admin` on the live site
- Authentication: GitHub OAuth via `/api/auth` route
- No database required — all content stored as Markdown files in the repo

### Content Storage
- News articles: `src/content/news/` (Markdown with frontmatter)
- Brokers: `src/content/brokers/` (Markdown with frontmatter + comparison fields)
- Reviews: `src/content/reviews/` (Markdown with frontmatter, 16 files — one per broker)
- Image uploads: `trantamcapital/public/images/uploads/` (via GitHub API)
- Workflow: Write in admin → auto-commits `.md` file to GitHub → Vercel rebuilds

### Key Files
- `public/admin/index.html` — Single-file SPA with login, dashboard, editor (3 tabs)
- `public/admin/HƯỚNG_DẪN_SỬ_DỤNG_CMS.md` — User guide (Vietnamese)
- `src/lib/content.ts` — Reads `.md` files at build time for news + brokers
- `src/lib/reviews.ts` — Reads review `.md` files at build time

### Admin Features
| Feature | Description |
|---------|-------------|
| Login | GitHub OAuth via popup → saves token to localStorage |
| Dashboard | Tab-based: **News Articles**, **Brokers**, and **Reviews** tabs |
| Article Editor | Form-based: title, date, category, author, image upload, excerpt, body |
| Broker Editor | Form-based: name, type, rating, features, review URL, visit URL, gradient, **+12 comparison fields** |
| Review Editor | Form-based: broker select, pros/cons, trust score, overview (markdown) |
| Image upload | File picker → base64 → GitHub API PUT to `public/images/uploads/` |
| Create | Generates slug from title/name, creates `.md` with frontmatter |
| Edit | Reads existing file, updates content via GitHub API |
| Delete | Removes file via GitHub API with confirmation |

### How It Works
1. User opens popup to `/api/auth` → GitHub OAuth → token saved to localStorage
2. Admin reads GitHub Contents API to list/read articles
3. Admin writes GitHub Contents API to create/update/delete articles
4. All operations create commits on GitHub (triggers Vercel rebuild)
5. Image URLs stored as raw GitHub URLs: `https://raw.githubusercontent.com/arizonainlove/trantamcapital/main/trantamcapital/public/images/uploads/{filename}`

### Article Frontmatter (`src/content/news/*.md`)
```
---
title: string
date: date
category: enum [Cryptocurrency, Forex, Binary Options, Markets]
author: string
image: string (raw GitHub URL to image)
excerpt: text
---
Body content (Markdown)
```

### Broker Frontmatter (`src/content/brokers/*.md`)
```
---
name: string
type: enum [Forex Broker, Crypto Exchange, Binary Options]
rating: number (0–5)
features:
  - "Feature one"
reviewHref: string (URL path)
visitHref: string (URL path)
gradient: string (CSS gradient, optional)
# Comparison fields (type-specific, used in auto comparison tables)
regulation: string         # Forex
minDeposit: string         # Forex
spread: string             # Forex
leverage: string           # Forex
platforms: string          # Forex
tradingFees: string        # Crypto
security: string           # Crypto
exchangeFeatures: string   # Crypto
coins: string              # Crypto
payout: string             # Binary Options
expiryTypes: string        # Binary Options
assets: string             # Binary Options
---
```

### Review Frontmatter (`src/content/reviews/*.md`)
```
---
brokerSlug: string         # Links to broker data file slug
pros:
  - "Pro one"
cons:
  - "Con one"
trustScore: number (0–100) # Optional
---
Overview content (Markdown)
```

### Build Integration
- Content fetched at build time using `gray-matter` to parse `.md` files
- Pages rebuilt on every git push to main
- Uses Next.js static generation (SSG) for content pages
- Broker data: `getAllBrokers()` in `lib/content.ts` + `defaultBrokerData` fallback
- Review data: `getAllReviews()` in `lib/reviews.ts` + `defaultReviews` fallback (16 entries)
