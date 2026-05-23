---
description: Global component library, file structure, and live price widget specifications
---

## Component Library — `src/components/`

| File | Description |
|------|-------------|
| `Header.tsx` | Navigation bar (#FFCA00), dynamic menu from `src/data/menu.json`, bold (700) nav links, mobile hamburger toggle |
| `Footer.tsx` | 4-column footer (About, Quick Links, Markets, Contact) + risk disclaimer |
| `PriceTicker.tsx` | Live crypto prices marquee, CoinGecko API, 60s refresh |
| `SectionTitle.tsx` | Section header with title + subtitle + orange underline |
| `Card.tsx` | Reusable card wrapper with standard styling |
| `NewsCard.tsx` | News article card with image + category badge + date + excerpt |
| `BrokerCard.tsx` | Broker/exchange card with logo + rating stars + features + pros |
| `ContactForm.tsx` | Contact form (name, email, subject, message) + GDPR consent checkbox |
| `NewsletterForm.tsx` | Email subscription + GDPR consent checkbox |
| `BackToTop.tsx` | Floating back-to-top button, visible after 400px scroll |
| `Breadcrumb.tsx` | Breadcrumb navigation with schema.org aria-label |
| `ReviewPage.tsx` | Shared review page for broker/exchange reviews (pros/cons, key features, rating sidebar) |

### Live Price Widget — PriceTicker

- **API**: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,polkadot,avalanche-2,matic-network,chainlink,litecoin&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
- **Coins**: BTC, ETH, BNB, SOL, XRP, ADA, DOGE, DOT, AVAX, MATIC, LINK, LTC
- **Refresh**: Every 60 seconds (client-side fetch)
- **Display**: Horizontal marquee animation
  - Coin icon (img) + Symbol (uppercase) + Price (USD) + 24h change %
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
│   │   └── api/contact/route.ts
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
