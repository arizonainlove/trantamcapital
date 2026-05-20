---
description: Global component library, file structure, and live price widget specifications
---

## Component Library — `src/components/`

| File | Description |
|------|-------------|
| `Header.tsx` | Navigation bar (#FFCA00), 10 menu items, mobile hamburger toggle |
| `Footer.tsx` | 4-column footer (About, Quick Links, Markets, Contact) + risk disclaimer |
| `PriceTicker.tsx` | Live crypto prices marquee, CoinGecko API, 60s refresh |
| `SectionTitle.tsx` | Section header with title + subtitle + orange underline |
| `Card.tsx` | Reusable card wrapper with standard styling |
| `NewsCard.tsx` | News article card with image + category badge + date + excerpt |
| `BrokerCard.tsx` | Broker/exchange card with logo + rating stars + features + pros |
| `ContactForm.tsx` | Contact form (name, email, subject, message) |

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
│   │   ├── forex-broker/page.tsx
│   │   ├── crypto-exchange/page.tsx
│   │   ├── binary-option/page.tsx
│   │   ├── tools/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-of-service/page.tsx
│   │   ├── not-found.tsx
│   │   └── sitemap.ts
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── PriceTicker.tsx
│       ├── SectionTitle.tsx
│       ├── Card.tsx
│       ├── NewsCard.tsx
│       ├── BrokerCard.tsx
│       └── ContactForm.tsx
├── public/
│   └── images/
├── .claude/
│   └── rules/
├── CLAUDE.md
├── HUONG_DAN_CHI_TIET.md
├── CAU_TRUC_NOI_DUNG.md
├── TU_VAN_MAU_SAC.md
└── tailwind.config.ts
```
