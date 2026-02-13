# TheraKids - Project Guide

## Overview

TheraKids is a pediatric therapy center website (Centro Terapéutico Infantil) in Costa Rica. Static informational site with blog, optimized for mobile, SEO, and AI discoverability.

## Commands

```bash
npm run dev        # Start dev server (Turbopack) at http://localhost:3000
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint
```

## Tech Stack

- **Next.js 15** (App Router), **TypeScript** (strict), **Tailwind CSS v4**, **React 19**
- **React Hook Form + Zod** for form validation
- **Google Material Icons Round** (CDN)
- Fonts: **Nunito** (display) + **Open Sans** (body) via `next/font`

## Project Structure

```
src/
├── app/                          # App Router pages
│   ├── page.tsx                  # Home (/)
│   ├── servicios/page.tsx        # /servicios
│   ├── nosotros/page.tsx         # /nosotros
│   ├── blog/
│   │   ├── page.tsx              # /blog (server) + BlogListClient.tsx (client filtering)
│   │   └── [slug]/page.tsx       # /blog/[slug] (generateStaticParams + generateMetadata)
│   ├── contacto/
│   │   ├── page.tsx              # /contacto (server)
│   │   └── ContactForm.tsx       # Client component with RHF + Zod
│   ├── feed.xml/route.ts         # RSS feed route handler
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # robots.txt
│   ├── layout.tsx                # Root layout (fonts, metadata, JSON-LD, Header/Footer)
│   ├── globals.css               # Tailwind v4 @theme tokens
│   ├── loading.tsx / error.tsx / not-found.tsx
├── components/
│   ├── ui/MaterialIcon.tsx       # <span class="material-icons-round"> wrapper
│   ├── layout/                   # Header, Footer, WhatsAppButton
│   └── sections/                 # Home page sections (Hero, Services, Team, Blog, CTA)
├── lib/
│   ├── data/                     # Static typed data (CMS-ready abstraction)
│   │   ├── types.ts              # Service, TeamMember, BlogPost, Sede, SiteConfig
│   │   ├── services.ts           # 6 services
│   │   ├── team.ts               # 4 team members
│   │   ├── blog.ts               # 6 posts + categories
│   │   ├── sedes.ts              # 2 locations
│   │   ├── site.ts               # Site config (urls, contact, social)
│   │   └── index.ts              # Barrel export
│   └── jsonLd.ts                 # JSON-LD generators (Organization, MedicalClinic, BlogPosting, etc.)
```

## Architecture Decisions

- **Data layer abstraction**: All data in `src/lib/data/` with typed interfaces. Replace with CMS fetches without changing components.
- **Server-first**: Pages are server components by default. Client components only for interactivity: `Header` (menu toggle), `BlogListClient` (category filter), `ContactForm` (form state).
- **Tailwind v4**: Uses `@theme` directive in `globals.css` instead of `tailwind.config.ts`. Custom tokens: `--color-primary`, `--color-secondary`, `--font-display`, `--font-body`.
- **Blog rendering**: Custom `renderMarkdown()` function in `blog/[slug]/page.tsx` converts markdown-like content to HTML. Not using MDX.

## Design Tokens (globals.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#9C5FB5` | Purple brand, headings, links, buttons |
| `--color-secondary` | `#FFD166` | Yellow accent, CTAs |
| `--color-primary-dark` | `#7a4496` | Hover states |
| `--color-background-light` | `#FAFAFA` | Page background |
| `--color-surface-light` | `#FFFFFF` | Cards, header |
| `--color-text-main` | `#333333` | Body text |
| `--color-text-muted` | `#666666` | Secondary text |

## Naming Conventions

- **Components**: PascalCase files and exports (`Header.tsx`, `CTASection.tsx`)
- **Data files**: camelCase (`services.ts`, `blogPosts`)
- **Types**: PascalCase (`Service`, `TeamMember`, `BlogPost`)
- **Route folders**: kebab-case (`/servicios`, `/nosotros`)
- **Path alias**: `@/*` maps to `./src/*`

## SEO

- Per-page `Metadata` exports with title template, OpenGraph, Twitter Cards, canonical URLs
- JSON-LD in layout and pages: Organization, MedicalClinic (2 locations), BlogPosting, BreadcrumbList, Person
- Auto-generated: `sitemap.xml`, `robots.txt`, `/feed.xml` (RSS)
- All content server-rendered for crawlers

## Key Files

- **Theme/tokens**: `src/app/globals.css`
- **Root layout + global SEO**: `src/app/layout.tsx`
- **Data types**: `src/lib/data/types.ts`
- **JSON-LD helpers**: `src/lib/jsonLd.ts`
- **Image config**: `next.config.ts` (allows `lh3.googleusercontent.com`)
- **Design reference**: `stitch_assets/*.html` (Stitch mockups — read-only)

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://therakids.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
RESEND_API_KEY=
```

## Content Language

All content is in **Spanish (es-CR)**. UI labels, data, metadata, and error messages are all in Spanish.
