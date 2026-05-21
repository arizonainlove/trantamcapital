---
description: Project overview, tech stack, and complete site structure for TrantamCapital website
---

## Project Overview

Financial market information website covering cryptocurrency, forex, and binary options. Built for international audience (English).

### Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: react-icons (Hi prefix = Hero Icons)
- **Live Prices**: CoinGecko API (free, no API key)
- **Fonts**: Open Sans (primary), Roboto (secondary) — via Google Fonts
- **Deploy**: Vercel (free tier)

### Site Structure (46 routes)

#### Utility Pages (6)
- `/not-found` (`not-found.tsx`) — Custom 404 page with "Back to Home" button
- `/privacy-policy` — GDPR compliance, data collection (email), cookies, user rights
- `/terms-of-service` — Risk disclaimer, no financial advice, liability limitation
- `/robots.txt` — Robots exclusion standard, allow all, reference sitemap
- `/sitemap.xml` — Auto-generated sitemap with 19+ URLs
- `/api/contact` — Contact form POST endpoint with validation

#### Main Pages (10)
1. Home (`/`) — Hero + Market Overview + Featured Brokers + News + Platforms + Why Us + Newsletter
2. News (`/news`) — Articles grid + sidebar filters + categories
3. For Beginners (`/for-beginners`) — Crypto/Forex/Binary intro + 7 steps + Glossary
4. Investment Analysis (`/investment-analysis`) — Market overview + reports + technical tools
5. Forex Broker (`/forex-broker`) — **CMS-driven** brokers grid + auto comparison table
6. Crypto Exchange (`/crypto-exchange`) — **CMS-driven** exchanges grid + auto comparison + security badges
7. Binary Option (`/binary-option`) — **CMS-driven** platforms + risk warning + auto comparison + how it works
8. Tools (`/tools`) — 6 trading tools grid
9. About (`/about`) — Story + Mission + Values + Team + Timeline
10. Contact (`/contact`) — Form + company info

#### Sub Pages / Detail Pages — Dynamic Routes (3)
- `/forex-broker/[slug]` — Broker review, CMS-managed
- `/crypto-exchange/[slug]` — Exchange review, CMS-managed
- `/binary-option/[slug]` — Platform review, CMS-managed

#### Dynamic Routes (10)
- `/news/[slug]` — 9 article detail pages, statically generated via `generateStaticParams`

#### Components
- `BackToTop.tsx` — Floating button (appears after 400px scroll)
- `Breadcrumb.tsx` — Navigation breadcrumb with aria-label
- `NewsletterForm.tsx` — Email subscription form with validation
- `ReviewPage.tsx` — Shared review page component for all broker review routes

#### Shared Data
- `data/news.ts` — NewsArticle interface + 9 articles with slug, content, metadata
- `data/brokers.ts` — Broker interface **+ comparison fields** + 15 default brokers (fallback when no CMS data)
- `data/reviews.ts` — ReviewContent interface + 7 default reviews (fallback when no CMS data)
- `lib/content.ts` — Reads `.md` files from `src/content/` at build time, merges CMS + static data
- `lib/reviews.ts` — Reads review `.md` files from `src/content/reviews/` at build time
