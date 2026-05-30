---
description: Custom Admin UI for content management (replaces Decap CMS)
---

## Custom Admin UI — Content Management

### Overview
- Type: Self-contained SPA, no CMS dependency
- Access URL: `/admin` on the live site
- Authentication: Username/password login via `POST /api/auth/login` with bcrypt password hashing + HMAC-SHA256 signed session cookie
- Server-side protection: Route handler at `app/admin/route.ts` — serves admin SPA to all visitors (auth handled client-side via `GET /api/auth/session`)
- Session cookie: HMAC-SHA256 signed (`base64(payload).hmac`), set via `POST /api/auth/login`, cleared on logout (`DELETE /api/auth/session`). Cookie is HTTP-only, secure, sameSite=lax. Supports Remember Me (30 days) or session-only (8 hours). Sliding expiration (re-signed on every request).
- Requires `SESSION_SECRET` env var in production (generated via `crypto.randomBytes(32)`), fallback in development
- No database required — all content stored as Markdown files in the repo

### Content Storage
- News articles: `src/content/news/` (Markdown with frontmatter)
- Brokers: `src/content/brokers/` (Markdown with frontmatter + comparison fields)
- Reviews: `src/content/reviews/` (Markdown with frontmatter, 16 files — one per broker)
- Navigation menu: `trantamcapital/src/data/menu.json` (JSON, editable via admin)
- Image uploads: `trantamcapital/public/images/uploads/` (via GitHub API)
- Workflow: Write in admin → auto-commits file to GitHub → Vercel rebuilds

### Key Files
- `public/admin/HƯỚNG_DẪN_SỬ_DỤNG_CMS.md` — User guide (Vietnamese)
- `src/admin-ui/index.html` — Single-file SPA with login, dashboard, editor (4 tabs: News, Brokers, Reviews, Menu). Served by route handler at `app/admin/route.ts` (not from `public/`)
- `src/app/admin/route.ts` — Route handler that checks session cookie before serving admin SPA
- `src/app/api/auth/session/route.ts` — API to set/clear HTTP-only session cookie
- `src/lib/content.ts` — Reads `.md` files at build time for news + brokers
- `src/lib/reviews.ts` — Reads review `.md` files at build time

### Admin Features
| Feature | Description |
|---------|-------------|
| Login | GitHub OAuth via popup → saves token to localStorage → server sets HTTP-only session cookie |
| Dashboard | Tab-based: **News Articles**, **Brokers**, **Reviews**, and **Menu** tabs |
| Statistics | Stats bar showing counts for articles, brokers, reviews |
| Search | Filter articles and brokers by name/title |
| Article Editor | Form-based: title, date, category, author, image upload, excerpt, body. **Body toolbar**: Insert Image (upload → auto-embed), Bold, Italic, Link |
| Broker Editor | Form-based: name, type, rating, features, review URL, visit URL, logo upload, highlights, **+34 comparison & rating fields** (includes forex, crypto, binary, and prop firm fields) |
| Review Editor | Form-based: broker select, pros/cons, trust score, overview (markdown) |
| Menu Editor | Drag-and-drop reorder, add/edit/delete items, supports dropdown children |
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
category: enum [Cryptocurrency, Forex, Binary Options, Markets, Proprietary Trading Firm]
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
type: enum [Forex Broker, Crypto Exchange, Binary Options, Proprietary Trading Firm]
rating: number (0–5)
features:
  - "Feature one"
highlights:
  - "Lowest Spread"       # Key selling points shown as colored badges on cards
reviewHref: string (URL path)
visitHref: string (URL path)
logo: string (raw GitHub URL to uploaded broker logo)
order: number             # Display order (lower = first)
# Comparison fields (type-specific, used in auto comparison tables)
regulation: string         # Forex
minDeposit: string         # Forex
spread: string             # Forex
leverage: string           # Forex
platforms: string          # Forex
scalping: string           # Forex — rating (Excellent/Very Good/Good/Medium)
eaBot: string              # Forex — rating
withdrawals: string        # Forex — rating
goldTrading: string        # Forex — rating
bonusPrograms: string      # Forex — rating
vietnamSuitability: string # Forex — rating
tradingFees: string        # Crypto
security: string           # Crypto — rating
exchangeFeatures: string   # Crypto
coins: string              # Crypto
futures: string            # Crypto — rating
spot: string               # Crypto — rating
copyTrading: string        # Crypto — rating
web3: string               # Crypto — rating
affiliateProgram: string   # Crypto — rating
payout: string             # Binary Options
expiryTypes: string        # Binary Options
assets: string             # Binary Options
popularity: string         # Binary — rating
cryptoSupport: string      # Binary — rating
binaryCopyTrading: string  # Binary — rating
profitSplit: string        # Proprietary Trading Firm
evaluationFee: string      # Proprietary Trading Firm
maxCapital: string         # Proprietary Trading Firm
tradingPlatforms: string   # Proprietary Trading Firm
instruments: string        # Proprietary Trading Firm
propLeverage: string       # Proprietary Trading Firm
evaluationType: string     # Proprietary Trading Firm
dailyLossLimit: string     # Proprietary Trading Firm
profitTarget: string       # Proprietary Trading Firm
refundPolicy: string       # Proprietary Trading Firm
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
- **Body content renders Markdown**: headings (H2 with bottom border, H3 with orange left accent), bold, italic, images, tables, links, and bullet points are all supported via `react-markdown` + `remark-gfm`
- Content sanitized via `stripHtml()` for XSS defense (HTML tags stripped, Markdown syntax preserved)
- Pages rebuilt on every git push to main
- Uses Next.js static generation (SSG) for content pages
- Broker data: `getAllBrokers()` in `lib/content.ts` + `defaultBrokerData` fallback
- Review data: `getAllReviews()` in `lib/reviews.ts` + `defaultReviews` fallback (16 entries)
