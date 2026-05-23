---
description: SEO and UX/UI standards for TrantamCapital
---

## SEO Standards

### Technical SEO
- **robots.txt**: Must exist at `src/app/robots.ts` — allow all crawl, reference sitemap
- **Canonical URLs**: Each page must have `<link rel="canonical" href="..." />`
- **Sitemap**: `src/app/sitemap.ts` must include all pages with proper priority and lastModified
- **PageSpeed**: Score ≥ 90 on pagespeed.web.dev (mobile + desktop)
- **HSTS headers**: Set in `next.config.ts` (Strict-Transport-Security)

### On-Page SEO
- **Metadata**: Every `page.tsx` must export `metadata` with unique `title` and `description`
- **Open Graph**: Every page must have `openGraph` with `title`, `description`, `type`, and `images` (1200x630px)
- **Semantic HTML**: Use `<h1>` (one per page), `<h2>`, `<h3>` in correct hierarchy
- **JSON-LD structured data**: Must include:
  - `Organization` schema on homepage
  - `Article` schema on news pages
  - `BreadcrumbList` schema on all pages (especially sub-pages)
  - `Review` schema on broker/exchange detail pages
- **URL structure**: Clean, hyphen-separated, descriptive (e.g., `/forex-broker/broker-a`)
- **Internal linking**: Every page linked from at least one other page. No orphan pages.
- **Image alt text**: All `<img>` must have descriptive `alt` attribute
- **No broken links**: No `href="#"` placeholders in production

---

## UX/UI Standards

### Layout & Navigation
- **Sticky header**: Navigation bar visible on scroll
- **Breadcrumbs**: Sub-pages must show Home > Category > Page
- **Back to Top**: Floating button on pages longer than 2 viewports
- **Search overlay**: Available from header, real-time filtering, dismiss via Escape/click-outside/close button

### States (Every Interactive Component)
Every component must handle these states:
- **Loading**: Show skeleton/spinner while data loads. At minimum, a `loading.tsx` per route segment.
- **Empty**: Show meaningful message when no data (e.g., "No articles found")
- **Error**: Show friendly error with retry option. At minimum, an `error.tsx` per route segment.
- **Success**: Confirm user actions (form submitted, etc.)
- **Edge cases**: Handle null/undefined data, network failures, empty arrays

### Responsive Design
- **Mobile-first**: Default styles for < 768px, then tablet (768-1024px), desktop (> 1024px)
- **Breakpoints**: Use Tailwind `sm:`, `md:`, `lg:`, `xl:` consistently
- **Touch targets**: All interactive elements ≥ 44×44px with ≥ 8px gap

### Accessibility
- **Skip to content**: First focusable element must be a "Skip to main content" link
- **Keyboard navigation**: Dropdowns must open on focus, not just hover. Use `onFocus`/`onBlur` alongside `onMouseEnter`/`onMouseLeave`.
- **aria attributes**:
  - `aria-current="page"` on active nav link
  - `aria-expanded` + `aria-haspopup` on dropdown toggles
  - `aria-label` on icon-only buttons
- **Focus indicators**: `focus-visible:ring-2 focus-visible:ring-primary` on all interactive elements
- **Form labels**: Every `<input>` must have an associated `<label>` with `htmlFor`
- **Form validation**: Show inline error messages on each field. Never rely on placeholder alone.
- **Color contrast**: Text must meet WCAG AA (4.5:1 for normal text, 3:1 for large text). Text-light colors must only be used for decorative/non-informational content.
- **Language**: `<html lang="en">` in root layout

### Legal & GDPR
- **Consent checkboxes**: Contact form and newsletter require explicit consent checkbox linked to Privacy Policy
- **Binary options warning**: High-risk warning with geo-restriction info (EU/UK/AU/CA) on binary option listing and detail pages
- **Terms of Service** must include: governing law, binary options clause, affiliate disclosure, class action waiver
- **Privacy Policy** must include: legal basis (GDPR), data retention periods, international transfer safeguards, detailed data subject rights

### Performance
- **next/font**: Use `next/font/google` with `display: swap`. No `@import` in CSS.
- **next/image**: Use for all remote images. Configure `remotePatterns` in `next.config.ts`.
- **Tree shaking**: Import icons individually (`import { HiSearch } from "react-icons/hi"`), never `import *`.
- **Lazy loading**: Images below the fold get `loading="lazy"`.
- **No render-blocking**: No external CSS/JS in `<head>`.
