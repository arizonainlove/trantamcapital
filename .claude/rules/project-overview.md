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

### Site Structure (31 routes)

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
5. Forex Broker (`/forex-broker`) — Brokers grid + comparison table
6. Crypto Exchange (`/crypto-exchange`) — Exchanges grid + comparison
7. Binary Option (`/binary-option`) — Platforms + risk warning + how it works
8. Tools (`/tools`) — 6 trading tools grid
9. About (`/about`) — Story + Mission + Values + Team + Timeline
10. Contact (`/contact`) — Form + company info

#### Sub Pages / Detail Pages (7)
- `/forex-broker/broker-a` — ForexBroker A review + 3 articles
- `/forex-broker/broker-b` — ForexBroker B review + 3 articles
- `/forex-broker/broker-c` — ForexBroker C review + 3 articles
- `/crypto-exchange/exchange-a` — Exchange A review + 3 articles
- `/crypto-exchange/exchange-b` — Exchange B review + 3 articles
- `/crypto-exchange/exchange-c` — Exchange C review + 3 articles
- `/binary-option/platform-a` — BinaryPlatform A review + 3 articles

#### Dynamic Routes (9)
- `/news/[slug]` — 9 article detail pages, statically generated via `generateStaticParams`

#### New Components
- `BackToTop.tsx` — Floating button (appears after 400px scroll)
- `Breadcrumb.tsx` — Navigation breadcrumb with aria-label
- `NewsletterForm.tsx` — Email subscription form with validation

#### Shared Data
- `data/news.ts` — NewsArticle interface + 9 articles with slug, content, metadata
