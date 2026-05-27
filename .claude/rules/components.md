---
description: Global component library, file structure, and live price widget specifications
---

## Component Library — `src/components/`

| File | Description |
|------|-------------|
| `Header.tsx` | Navigation bar (#FFCA00), dynamic menu from `src/data/menu.json`, bold (700) nav links, mobile hamburger toggle. Logo: PNG image (`/logo/logo.png`) via next/image, 132×44px |
| `Footer.tsx` | 4-column footer (About, Quick Links, Markets, Contact) + risk disclaimer |
| `PriceTicker.tsx` | Live prices marquee — 10 pairs: 5 crypto + 4 forex + XAU/USD. Server API route aggregates CoinGecko + Frankfurter + GoldPrice.org, 60s refresh |
| `SectionTitle.tsx` | Section header with title + subtitle + orange underline |
| `MarketOverview.tsx` | Live price table — 5 crypto (CoinGecko), 4 forex (Frankfurter API, 24h change included), XAU/USD (via gold-api.com proxy). Volume data for gold via `/api/volume` (Yahoo Finance GC=F). 60s refresh, skeleton, responsive. |
| `Card.tsx` | Reusable card wrapper with standard styling |
| `NewsCard.tsx` | News article card with image + category badge + date + excerpt |
| `BrokerCard.tsx` | Broker/exchange card with logo + rating stars + features + highlight badges + color-coded ratings |
| `ContactForm.tsx` | Contact form (name, email, subject, message) + GDPR consent checkbox |
| `NewsletterForm.tsx` | Email subscription + GDPR consent checkbox. Calls `POST /api/newsletter` (Zoho SMTP notification). 3 error states: invalid email, missing consent, server error. |
| `BackToTop.tsx` | Floating back-to-top button, visible after 400px scroll |
| `Breadcrumb.tsx` | Breadcrumb navigation with schema.org aria-label |
| `ReviewPage.tsx` | Shared review page for broker/exchange reviews (pros/cons, key features, rating sidebar) |

### Live Price Widget — PriceTicker

- **API**: `/api/crypto-prices` (server-side aggregation)
  - **Crypto**: CoinGecko — BTC, ETH, BNB, XRP, SOL
  - **Forex**: Frankfurter API (ECB) — EUR/USD, GBP/USD, USD/JPY, EUR/GBP
  - **Gold**: gold-api.com proxy — XAU/USD
- **Pairs**: BTC/USD, ETH/USD, BNB/USD, XRP/USD, SOL/USD, EUR/USD, GBP/USD, USD/JPY, EUR/GBP, XAU/USD
- **Refresh**: Every 60 seconds (client-side fetch, server cache 55s)
- **Display**: Horizontal marquee animation
  - Crypto: coin icon + Symbol + Price + 24h change %
  - Forex/Gold: letter avatar + Symbol + Price (+ 24h change % for gold when available)
  - Price prefix per pair: $ (USD pairs), ¥ (JPY), £ (GBP)
  - Green `#2E7D32` if positive, Red `#C62828` if negative
  - Change indicator: HiArrowSmUp / HiArrowSmDown from react-icons/hi
- **Fallback**: Shows "Loading prices..." with pulse animation while fetching

### Directory Structure
```
trantamcapital/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── news/page.tsx
│   │   ├── for-beginners/page.tsx
│   │   ├── investment-analysis/page.tsx
│   │   ├── forex-broker/
│   │   │   ├── page.tsx              # CMS-driven broker grid + comparison
│   │   │   └── [slug]/page.tsx       # Dynamic review page
│   │   ├── crypto-exchange/
│   │   │   ├── page.tsx              # CMS-driven exchange grid + comparison
│   │   │   └── [slug]/page.tsx       # Dynamic review page
│   │   ├── binary-option/
│   │   │   ├── page.tsx              # CMS-driven platform grid + comparison
│   │   │   └── [slug]/page.tsx       # Dynamic review page
│   │   ├── tools/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-of-service/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── news/[slug]/page.tsx
│   │   ├── news/categories/[category]/page.tsx  # Filtered news by category
│   │   └── api/
│   │       ├── contact/route.ts
│   │       ├── gold/route.ts                   # Gold price (XAU/USD) proxy
│   │       ├── newsletter/route.ts            # Newsletter subscription (Zoho SMTP)
│   │       └── volume/route.ts                 # Forex/gold volume via Yahoo Finance
│   ├── data/
│   │   ├── menu.json                 # Navigation menu (editable via admin)
│   │   ├── news.ts
│   │   ├── brokers.ts                # Broker interface + 15 defaults + comparison field sets
│   │   └── reviews.ts                # ReviewContent interface + 16 defaults
│   ├── middleware.ts                 # Rate limiting (API routes)
│   ├── lib/
│   │   ├── sanitize.ts               # XSS: stripHtml for CMS content
│   │   ├── content.ts                # Reads news/broker .md files at build time (+ sanitize)
│   │   └── reviews.ts                # Reads review .md files at build time (+ sanitize)
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── PriceTicker.tsx
│       ├── SectionTitle.tsx
│       ├── Card.tsx
│       ├── NewsCard.tsx
│       ├── BrokerCard.tsx
│       ├── ContactForm.tsx
│       ├── NewsletterForm.tsx
│       ├── BackToTop.tsx
│       ├── Breadcrumb.tsx
│       ├── MarketOverview.tsx           # Live prices: crypto + forex + gold
│       └── ReviewPage.tsx             # Shared review page component
├── content/                           # CMS content (.md files)
│   ├── news/
│   ├── brokers/
│   └── reviews/
├── src/
│   ├── app/
│   │   ├── admin/route.ts             # Server-side gate for admin SPA
│   │   └── api/auth/session/route.ts  # Session cookie API
│   ├── admin-ui/index.html            # Admin SPA (served via route handler)
├── public/
│   ├── images/
│   └── admin/                         # Admin guide only (HƯỚNG_DẪN_SỬ_DỤNG_CMS.md)
├── .claude/
│   └── rules/
├── CLAUDE.md
└── tailwind.config.ts
```
