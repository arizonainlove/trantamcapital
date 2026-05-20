---
description: Decap CMS (formerly Netlify CMS) configuration for content management
---

## Decap CMS — Git-Based Content Management

### Overview
- Type: Open-source, git-based CMS (free)
- Access URL: `/admin` on the live site
- Authentication: GitHub OAuth
- No database required — all content stored as Markdown files in the repo

### Content Storage
- Content files: `src/content/` (Markdown with frontmatter)
- Media uploads: `public/images/uploads/`
- Workflow: Write in CMS → auto-creates `.md` file → commits to GitHub → Vercel rebuilds

### Configuration Files
- `public/admin/config.yml` — CMS collections and settings
- `public/admin/index.html` — CMS entry point and identity widget

### Collections

#### News Articles (`src/content/news/`)
```
---
title: string
date: date
category: enum [Cryptocurrency, Forex, Binary Options, Markets]
author: string
image: string (path to image)
excerpt: text
---
Body content (Markdown)
```

#### Broker Reviews (`src/content/brokers/`)
```
---
broker_name: string
rating: number (1-5)
regulation: string
min_deposit: string
spread: string
leverage: string
platforms: string
features: list
pros: list
cons: list
---
Body content (Markdown)
```

#### Exchange Reviews (`src/content/exchanges/`)
Same structure as broker reviews, adapted for crypto exchanges.

#### Static Pages (`src/content/pages/`)
```
---
title: string
---
Body content (Markdown)
```

### Build Integration
- Content fetched at build time using `fs` or `gray-matter` to parse `.md` files
- Pages rebuilt on every git push (auto-triggered by CMS commit)
- Uses Next.js static generation (SSG) for content pages
