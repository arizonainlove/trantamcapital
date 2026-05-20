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
```

### Project Paths
- Root: `C:\CodeProjects\TranTam-Finance`
- Source code: `C:\CodeProjects\TranTam-Finance\trantamcapital\src`
- Components: `trantamcapital\src\components\`
- Pages: `trantamcapital\src\app\`
- Public: `trantamcapital\public\`
- Content (CMS): `trantamcapital\src\content\`
- CMS config: `trantamcapital\public\admin\`

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

### Performance Guidelines
- Images: Use CSS gradients instead of real images for placeholders
- Price ticker: Client component with 60s refresh interval
- No `useEffect` or state management libraries needed beyond React built-ins
- Fonts: Dùng `next/font/google` (Open Sans, Roboto) — tự động self-host, không render-blocking. KHÔNG dùng @import trong CSS.

### Verification Checklist
- [ ] `npm run build` completes without errors
- [ ] All 17 routes render correctly
- [ ] Navigation works on mobile (hamburger menu) and desktop
- [ ] Price ticker loads and updates
- [ ] Pages are responsive at 375px, 768px, 1024px, 1440px
- [ ] Contact form UI displays correctly
