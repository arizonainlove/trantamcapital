---
description: Project overview, tech stack, and complete site structure for TrantamCapital website
---

## Project Overview

Financial market information website covering cryptocurrency, forex, and binary options. Built for international audience (English).

### Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: react-icons (Hi prefix = Hero Icons)
- **Live Prices**: CoinGecko API (crypto), Frankfurter API (forex), gold-api.com (gold) — all free, no API key
- **Fonts**: Open Sans (primary), Roboto (secondary) — via Google Fonts
- **Deploy**: Vercel (free tier)

### Site Structure (52 routes)

#### Utility Pages (9)
- `/not-found` (`not-found.tsx`) — Custom 404 page with "Back to Home" button
- `/privacy-policy` — GDPR compliance (legal basis, data retention, intl transfers, data subject rights)
- `/terms-of-service` — Binary options warning, affiliate disclosure, governing law (Belize), class action waiver, risk disclaimer
- `/robots.txt` — Robots exclusion standard, allow all, reference sitemap
- `/sitemap.xml` — Auto-generated sitemap with 19+ URLs
- `/api/contact` — Contact form POST endpoint with validation + rate limiting
- `/api/auth/session` — POST to set HTTP-only session cookie, DELETE to clear (admin auth)
- `/api/gold` — Gold price (XAU/USD) proxy via gold-api.com, no API key needed
- `/admin` — Admin SPA route handler, checks session cookie before serving

#### Main Pages (10)
1. Home (`/`) — Hero + Market Overview + Featured Brokers + News + Platforms + Why Us + Newsletter
2. News (`/news`) — Articles grid + sidebar filters + categories
3. For Beginners (`/for-beginners`) — Crypto/Forex/Binary intro cards with "Read News" links + 7 steps + Glossary
4. Investment Analysis (`/investment-analysis`) — Market overview + reports + technical tools
5. Forex Broker (`/forex-broker`) — **CMS-driven** brokers grid + auto comparison table
6. Crypto Exchange (`/crypto-exchange`) — **CMS-driven** exchanges grid + auto comparison + security badges
7. Binary Option (`/binary-option`) — **CMS-driven** platforms + **enhanced risk warning** (geo-restriction: EU/UK/AU/CA) + auto comparison + how it works
8. Tools (`/tools`) — 6 trading tools grid
9. About (`/about`) — Story + Mission + Values + Team + Timeline
10. Contact (`/contact`) — Form + company info

#### Sub Pages / Detail Pages — Dynamic Routes (15)
- `/forex-broker/[slug]` — 5 broker reviews: Exness, IC Markets, Pepperstone, FxPro, XM
- `/crypto-exchange/[slug]` — 5 exchange reviews: Binance, Coinbase, Bybit, OKX, Bitget
- `/binary-option/[slug]` — 5 platform reviews: IQ Option, Pocket Option, Quotex, Binomo, Deriv

#### Dynamic Routes (14)
- `/news/[slug]` — 9 article detail pages, statically generated via `generateStaticParams`
- `/news/categories/[category]` — 4 category-filtered news pages (cryptocurrency, forex, binary-options, markets), statically generated via `generateStaticParams`

#### Components
- `MarketOverview.tsx` — Live price table: 5 crypto pairs (CoinGecko), 4 forex pairs (Frankfurter API), XAU/USD (GoldPrice.org proxy). 60s auto-refresh, skeleton loading, responsive mobile/desktop.
- `BackToTop.tsx` — Floating button (appears after 400px scroll)
- `Breadcrumb.tsx` — Navigation breadcrumb with aria-label
- `NewsletterForm.tsx` — Email subscription form with validation + GDPR consent checkbox
- `ReviewPage.tsx` — Shared review page component for all broker review routes
- `BrokerCard.tsx` — Broker/exchange card with logo + rating + features + highlight badges (from Excel-derived ratings)

#### Middleware
- `middleware.ts` — Rate limiting by IP for API routes: `/api/auth` (10/min), `/api/contact` (20/min)

#### Security
- `lib/sanitize.ts` — stripHtml/sanitize functions for XSS defense-in-depth on CMS content
- `app/admin/route.ts` — Server-side gate for `/admin`: checks HTTP-only `admin_token` cookie before serving admin SPA. Visitors without cookie see a lightweight login page.
- `app/api/auth/session/route.ts` — Session API: `POST` validates GitHub token and sets cookie; `DELETE` clears cookie on logout. Cookie is HTTP-only, secure, 24h expiry.

#### Backup & Recovery
- `scripts/backup.js` — Timestamped snapshot of `src/content/` to `.backups/`
- `scripts/restore.js` — Restore from backup (list + select)
- `scripts/RECOVERY.md` — Recovery guide (backup, git, admin export)

#### Shared Data
- `data/menu.json` — Navigation menu items (editable via admin Menu tab)
- `data/news.ts` — NewsArticle interface + 9 articles with slug, content, metadata
- `data/brokers.ts` — Broker interface **+ comparison fields** + 15 default brokers (fallback when no CMS data)
- `data/reviews.ts` — ReviewContent interface + 7 default reviews (fallback when no CMS data)
- `lib/content.ts` — Reads `.md` files from `src/content/` at build time, merges CMS + static data (+ sanitize)
- `lib/reviews.ts` — Reads review `.md` files from `src/content/reviews/` at build time (+ sanitize)
