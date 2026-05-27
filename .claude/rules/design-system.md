---
description: Design system — colors, typography, component specifications, responsive breakpoints
---

## Design System — Premium Financial (Option D)

### Colors

| Role | Hex | Usage |
|------|-----|-------|
| Primary CTA | `#E84910` | Buttons, active links, badges |
| Primary Hover | `#C93D0A` | Button hover state |
| Primary Light | `#FFF0E8` | Section backgrounds, tag backgrounds |
| Nav Background | `#FFCA00` | Top navigation bar |
| Dark Background | `#0F1A2E` | Footer, hero, dark sections |
| Dark Card | `#1A2A42` | Cards on dark backgrounds |
| Gold Accent | `#C8A84E` | Star ratings, premium badges |
| Link Blue | `#1E88E5` | Text links |
| Success | `#2E7D32` | Price up, positive indicators |
| Error | `#C62828` | Price down, negative indicators, risk warnings |
| Warning | `#F9A825` | Alert badges, warnings |
| Text Primary | `#1A1A2E` | Body text, headings |
| Text Secondary | `#5A6377` | Secondary text, metadata |
| Text Light | `#8E99B0` | Placeholder, disabled text |
| Border | `#E2E5EC` | Card borders, dividers |
| Section BG | `#F7F8FA` | Alternating section backgrounds |
| White | `#FFFFFF` | Page background, cards |

### Typography

- **Primary font**: Open Sans (via `next/font/google`, CSS variable `--font-primary`)
- **Secondary font**: Roboto (via `next/font/google`, CSS variable `--font-secondary`)
- **Loading method**: `next/font` — tự động self-host, không gọi Google CDN, không render-blocking
- **Setup**: Import trong `layout.tsx` → gán `variable` → className trên `<html>`
- **Minimum body text**: **16px** for all article/review body content. Do not use `prose-sm` or `text-sm` for article text — they are 14px and harm readability on desktop.

| Role | Font | Size | Weight | Line Height |
|------|------|------|--------|-------------|
| Display | Open Sans | 32px | 700 | 35px |
| H1 | Open Sans | 28px | 700 | 31px |
| Body | Open Sans | 16px | 400 | 26px |
| Small | Open Sans | 14px | 400 | 20px |
| Navigation | Open Sans | 14px | 700 | — |
| Button | Open Sans | 16px | 700 | — |
| Metadata | Roboto | 14px | 400 | 25px |

### Component Specifications

#### Primary Button
- bg `#E84910`, color `#FFFFFF`, bold 700, 16px
- padding `12px 24px`, border-radius `4px`, height `44px`
- border `none`, box-shadow `0 2px 8px rgba(232,73,16,0.3)`
- hover: bg `#C93D0A`, shadow `0 4px 12px rgba(232,73,16,0.4)`

#### Secondary Button
- bg `rgba(232,73,16,0.15)`, color `#E84910`, 14px, weight 400
- padding `8px 16px`, border-radius `4px`, height `36px`
- border `1px solid #E84910`, box-shadow `none`

#### Card
- bg `#FFFFFF`, border `1px solid #E2E5EC`
- border-radius `7px`, padding `20px 24px`
- box-shadow `0 1px 3px rgba(0,0,0,0.05)`
- hover: shadow `0 2px 6px rgba(0,0,0,0.1)`

#### Dark Card
- bg `#0F1A2E`, border `1px solid #2A3F5A`
- text color `#EBEEF0`
- Same radius/padding as standard card

#### Navigation Bar
- bg `#FFCA00`, height `48px`, padding `0 16px`
- text `#333333`, 14px Open Sans
- active link: bottom border `3px solid #E84910`, color `#E84910`

#### Section Padding
- Desktop: `52px 0`
- Mobile: `36px 0`

#### Container
- max-width `1200px`, margin `0 auto`
- padding: `0 16px` (mobile), `0 32px` (tablet+)

### Responsive Breakpoints

| Breakpoint | Width | Columns | Key Changes |
|-----------|-------|---------|-------------|
| Mobile | < 768px | 1 column | Hamburger menu, full-width cards, 16px padding |
| Tablet | 768—1024px | 2—3 columns | Horizontal nav, 32px padding |
| Desktop | > 1024px | 12 columns | Full layout, all content visible |

### Touch Targets
- Minimum: `44px × 44px` for all interactive elements
- Minimum `8px` gap between adjacent touch targets
