---
description: Build commands, project paths, deployment configuration, and verification steps
---

## Build & Deploy

### Commands
```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Build
npm run build        # Production build (must succeed before deploy)

# Lint
npm run lint         # Run ESLint

# Backup / Restore (CMS content)
npm run backup       # Snapshot src/content/ to .backups/<timestamp>/
npm run restore      # List and restore from a backup
```

### Project Paths
- Root: `C:\CodeProjects\TranTam-Finance`
- Source code: `C:\CodeProjects\TranTam-Finance\trantamcapital\src`
- Components: `trantamcapital\src\components\`
- Pages: `trantamcapital\src\app\`
- Public: `trantamcapital\public\`
- Content (CMS): `trantamcapital\src\content\`
- Admin SPA (served via route handler): `trantamcapital\src\admin-ui\`
- CMS config: `trantamcapital\public\admin\` (guide only)

### next.config.ts — Required Config

```ts
// next.config.ts — PHẢI CÓ trước khi build/deploy
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',  // CoinGecko icons
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',  // CoinGecko images
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',  // Admin uploaded images
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // HSTS
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Chặn clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Chặn MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Kiểm soát referrer
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Hạn chế quyền trình duyệt
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
          // CSP
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self';" +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval';" +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;" +
              "font-src 'self' https://fonts.gstatic.com;" +
              "img-src 'self' https://assets.coingecko.com https://coin-images.coingecko.com https://raw.githubusercontent.com data:;" +
              "connect-src 'self' https://api.github.com https://api.coingecko.com;" +
              "frame-src 'none';" +
              "object-src 'none';" +
              "base-uri 'self'",
          },
        ],
      },
    ];
  },
};
```

**Ghi chú:**
- `images.remotePatterns` — 🔴 **bắt buộc** nếu dùng PriceTicker (CoinGecko icon) hoặc admin uploaded images
- Security headers (HSTS, CSP, X-Frame-Options, etc.) — 🔴 nên có, nhất là website tài chính
- CSP `connect-src` phải bao gồm `api.coingecko.com` (PriceTicker) và `api.github.com` (admin OAuth)

### Deployment (Vercel)
1. Push code to GitHub repository
2. Import repository in Vercel dashboard
3. Vercel auto-detects Next.js configuration
4. Environment variables: none required (static site)
5. Auto-deploys on every push to main branch

### SEO Requirements
- Every page must have `export const metadata` with `title` and `description`
- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<aside>`)
- All interactive elements must have visible focus states (`:focus-visible` with 2px solid `#E84910`)
- sitemap.ts generates `/sitemap.xml` automatically

### Security
- **Middleware** (`src/middleware.ts`): Rate limiting cho API routes — `/api/auth` (10/min), `/api/contact` (20/min)
- **Admin auth** (`src/app/admin/route.ts`): Server-side gate — checks HTTP-only `admin_token` cookie trước khi serve admin SPA. Cookie được set bởi `POST /api/auth/session` sau OAuth, xóa bởi `DELETE /api/auth/session` khi logout.
- **XSS**: `src/lib/sanitize.ts` — stripHtml() applied to all CMS content at build time (content.ts, reviews.ts)
- **Backup**: `scripts/backup.js` và `scripts/restore.js` — snapshot/restore CMS content (.backups/ bị gitignore)
- **Recovery guide**: `scripts/RECOVERY.md`

### Performance Guidelines
- Images: Use CSS gradients instead of real images for placeholders
- Price ticker: Client component with 60s refresh interval
- No `useEffect` or state management libraries needed beyond React built-ins
- Fonts: Dùng `next/font/google` (Open Sans, Roboto) — tự động self-host, không render-blocking. KHÔNG dùng @import trong CSS.

### Verification Checklist
- [ ] `npm run build` completes without errors
- [ ] 404 page renders correctly on invalid routes
- [ ] All routes render correctly
- [ ] Navigation works on mobile (hamburger menu) and desktop
- [ ] Price ticker loads and updates
- [ ] Pages are responsive at 375px, 768px, 1024px, 1440px
- [ ] Privacy Policy and Terms of Service pages exist and are linked in footer
- [ ] Risk disclaimer displayed in footer
- [ ] Contact form UI displays correctly
- [ ] `next.config.js` has `images.remotePatterns` for CoinGecko
- [ ] HSTS headers are set in `next.config.js`
- [ ] **PageSpeed Desktop ≥ 80**: CLS < 0.1 (skeleton MarketOverview), avoid forced reflow (will-change marquee)
- [ ] **PageSpeed Mobile ≥ 85**: LCP < 3s (preconnect CoinGecko), code-split client components
