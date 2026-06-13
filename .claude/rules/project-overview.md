---
description: Project overview, tech stack, and complete site structure for ProTradeVision website
---

## Project Overview

Financial market information website covering cryptocurrency, forex, binary options, and proprietary trading firms. Built for international audience (English).

### Tech Stack
- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: react-icons (Hi prefix = Hero Icons)
- **Live Prices**: CoinGecko API (crypto), Frankfurter API (forex), gold-api.com (gold) — all free, no API key
- **Fonts**: Open Sans (primary), Roboto (secondary) — via Google Fonts
- **Deploy**: Vercel (free tier)

### Site Structure (59 routes)

#### Utility Pages (11)
- `/not-found` (`not-found.tsx`) — Custom 404 page with "Back to Home" button
- `/privacy-policy` — GDPR compliance (legal basis, data retention, intl transfers, data subject rights)
- `/terms-of-service` — Binary options warning, affiliate disclosure, governing law (Belize), class action waiver, risk disclaimer
- `/robots.txt` — Robots exclusion standard, allow all, reference sitemap
- `/sitemap.xml` — Auto-generated sitemap with 19+ URLs
- `/api/contact` — Contact form POST endpoint with validation + rate limiting + CSRF origin check (exact origin match via URL parsing) + XSS sanitize (stripHtml) + server-side consent validation
- `/api/auth/login` — POST username/password login with bcrypt (12 salt rounds) verification, input validation (2-50 chars username, 6-128 chars password), XSS sanitization via stripHtml, HMAC-SHA256 signed session cookie creation, supports Remember Me (30-day cookie) or session-only (8h cookie), rate limited (5/min via middleware). Requires SESSION_SECRET env var in production.
- `/api/auth/session` — GET reads signed session cookie and returns user info (sliding expiration — re-signs cookie on each request); POST legacy backward compatibility; DELETE clears cookie on logout. Cookie is HTTP-only, secure, HMAC-SHA256 signed via lib/session.ts.
- `/api/admin/proxy` — POST proxy to GitHub API using server-side PAT. Checks session cookie, enforces role-based permissions (staff cannot DELETE or modify menu.json)
- `/api/gold` — Gold price (XAU/USD) proxy via gold-api.com, no API key needed
- `/api/volume` — Forex/gold trading volume via Yahoo Finance (free, no key)
- `/admin` — Admin SPA route handler, serves SPA to all visitors (auth handled client-side via GET /api/auth/session)

#### Main Pages (11)
1. Home (`/`) — Hero + Market Overview + Featured Brokers + News + Platforms + Why Us + Newsletter
2. News (`/news`) — Articles grid + sidebar filters + categories
3. For Beginners (`/for-beginners`) — Crypto/Forex/Binary intro cards with "Read News" links + 7 steps + Glossary
4. Investment Analysis (`/investment-analysis`) — Market overview + reports + technical tools
5. Forex Broker (`/forex-broker`) — **CMS-driven** brokers grid + auto comparison table
6. Crypto Exchange (`/crypto-exchange`) — **CMS-driven** exchanges grid + auto comparison + security badges + **guides section** (paginated articles w/ broker sidebar)
7. Binary Option (`/binary-option`) — **CMS-driven** platforms + **enhanced risk warning** (geo-restriction: EU/UK/AU/CA) + auto comparison + how it works
8. Proprietary Trading Firm (`/proprietary-trading-firm`) — **CMS-driven** prop firms grid + auto comparison + "How to Choose" guide
9. Tools (`/tools`) — 6 trading tools grid
10. About (`/about`) — Story + Mission + Values + Team + Timeline
11. Contact (`/contact`) — Form + company info

#### Sub Pages / Detail Pages — Dynamic Routes (16)
- `/forex-broker/[slug]` — 5 broker reviews: Exness, IC Markets, Pepperstone, FxPro, XM
- `/crypto-exchange/[slug]` — 6 exchange reviews: Binance, Coinbase, Bybit, OKX, Bitget, MEXC
- `/binary-option/[slug]` — 5 platform reviews: IQ Option, Pocket Option, Quotex, Binomo, Deriv
- `/proprietary-trading-firm/[slug]` — 1 prop firm review: Blue Guardian

#### Dynamic Routes (23)
- `/news/[slug]` — 17 article detail pages (12 news + 5 platform guides), statically generated via `generateStaticParams`
- `/news/categories/[category]` — 5 category-filtered news pages (cryptocurrency, forex, binary-options, markets, proprietary-trading-firm), statically generated via `generateStaticParams`

#### Components
- `MarketOverview.tsx` — Live price table: 5 crypto (CoinGecko), 4 forex (Frankfurter API), XAU/USD (gold-api.com proxy). Volume data for gold via `/api/volume`. 60s auto-refresh, skeleton loading, responsive mobile/desktop.
- `BackToTop.tsx` — Floating button (appears after 400px scroll)
- `Breadcrumb.tsx` — Navigation breadcrumb with aria-label
- `NewsletterForm.tsx` — Email subscription form with validation + GDPR consent checkbox
- `ReviewPage.tsx` — Shared review page component for all broker review routes
- Article/review/guide body content renders **Markdown** via `react-markdown` + `remark-gfm` — supports: styled headings (H2 bottom border, H3 orange left bar), bold, tables, images, links, bullet points. Content is sanitized for XSS at build time.
- `BrokerCard.tsx` — Broker/exchange card with logo + rating + features + highlight badges (from Excel-derived ratings). Supports `variant="compact"` for sidebar layout.
- `GuidesSection.tsx` — Paginated platform guides grid (2-col desktop, 1-col mobile, 6 per page) with sticky broker sidebar (compact cards). Client component, used by platform listing pages (e.g. `/crypto-exchange`).
- `Pagination.tsx` — Reusable pagination with ellipsis, Prev/Next, aria-current.

#### Middleware
- `middleware.ts` — Rate limiting by IP for API routes: `/api/auth/login` (5/min — brute force protection), `/api/auth` (10/min), `/api/contact` (20/min), `/api/newsletter` (10/min), `/api/admin/proxy` (120/min), general `/api/` (60/min)

#### Security
- `lib/sanitize.ts` — stripHtml/sanitize functions for XSS defense-in-depth on CMS content and contact form
- `lib/session.ts` — HMAC-SHA256 session signing and verification (`signSession`/`verifySession`). Uses `createHmac` with `timingSafeEqual` comparison. Requires `SESSION_SECRET` env var (production) or fallback (development).
- `app/api/contact/route.ts` — CSRF origin check (whitelist: protradevision.com + localhost:3000, exact origin match via `new URL().origin`), XSS sanitize via stripHtml, server-side consent validation, rate limited (20/min via middleware)
- `app/api/newsletter/route.ts` — CSRF origin check (same exact-match pattern as contact route)
- **Admin authentication** (HMAC-SHA256 signed sessions, replaces old base64 encoding):
  - `app/api/auth/login/route.ts` — Username/password login with bcrypt (12 salt rounds), input validation (2-50 chars username, 6-128 chars password), XSS sanitization via stripHtml, supports Remember Me checkbox (30-day cookie) or session-only (8h cookie), sets HMAC-SHA256 signed HTTP-only session cookie with sliding expiration
  - `src/data/admin-users.json` — JSON file with 2 users: admin (role: admin, full access) and nhanvien1 (role: staff, no delete, no menu). Passwords bcrypt hashed.
  - `scripts/hash-password.js` — Utility: `node scripts/hash-password.js <password>` outputs bcrypt hash for adding users
  - `app/api/admin/proxy/route.ts` — Server-side GitHub API proxy. Verifies HMAC-signed session cookie, validates path, enforces role-based permissions (staff cannot DELETE or modify menu.json). GitHub PAT stored in env variable `GITHUB_TOKEN`, never exposed to client. Re-signs session cookie (sliding expiration) on each successful request.
  - `app/api/auth/session/route.ts` — Session API: GET reads signed cookie and returns user info (re-signs cookie on each request for sliding expiration); POST legacy backward compatibility; DELETE clears cookie on logout. Cookie is HTTP-only, secure, HMAC-SHA256 signed, 8h (or 30d with Remember Me) expiry, sliding.
  - `app/admin/route.ts` — Serves admin SPA to all visitors (auth is client-side via GET /api/auth/session). Reads HTML file fresh on each request (no server cache).
  - Admin SPA (`src/admin-ui/index.html`): username/password login form with Remember Me checkbox, role-based UI (Menu tab hidden for staff, delete buttons hidden). Login button resets on logout and after successful login.

#### Backup & Recovery
- `scripts/backup.js` — Timestamped snapshot of `src/content/` to `.backups/`
- `scripts/restore.js` — Restore from backup (list + select)
- `scripts/RECOVERY.md` — Recovery guide (backup, git, admin export)

#### Shared Data
- `data/menu.json` — Navigation menu items (editable via admin Menu tab)
- `data/news.ts` — NewsArticle interface + 9 articles with slug, content, metadata
- `data/brokers.ts` — Broker interface **+ comparison fields** (`Forex Broker` | `Crypto Exchange` | `Binary Options` | `Proprietary Trading Firm`) + 16 default brokers (fallback when no CMS data)
- `data/reviews.ts` — ReviewContent interface + 7 default reviews (fallback when no CMS data)
- `lib/content.ts` — Reads `.md` files from `src/content/` at build time, merges CMS + static data (+ sanitize). Includes `GuideArticle` interface, `getAllGuides()`, `getGuidesByPlatform()`, and `getArticleBySlug()` with guide fallback.
- `lib/reviews.ts` — Reads review `.md` files from `src/content/reviews/` at build time (+ sanitize)
- `src/content/guides/` — Platform guide `.md` files with frontmatter (title, platform, date, author, image, excerpt), editable via admin Platform Guides tab
