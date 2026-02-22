# Membriko Implementation Plan

**Generated from:** `docs/PRD.md` v1.0
**Created:** 2026-02-22
**Approach:** Vertical slices — each milestone delivers a deployable increment

---

## Milestones Overview

| Milestone | Name | Target Date | Goal |
|-----------|------|-------------|------|
| **M0** | Project Bootstrap | 2026-02-28 | Dev environment, CI/CD, empty shell deployed |
| **M1** | Core Website Shell | 2026-03-14 | Homepage + layout + i18n + CMS connected |
| **M2** | Application Pages | 2026-03-28 | All 11 application pages live with content |
| **M3** | Lead Generation | 2026-04-11 | Quote form, email, CRM integration |
| **M4** | Content & SEO | 2026-04-25 | Blog, case studies, structured data, sitemap |
| **M5** | Polish & Launch | 2026-05-09 | Performance, accessibility, analytics, go-live |

---

## M0 — Project Bootstrap (Target: 2026-02-28)

### DevOps

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T1 | Initialize Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 | — | 2h |
| T2 | Configure ESLint, Prettier, project structure (`src/app`, `src/components`, `src/lib`, `src/content`) | T1 | 2h |
| T3 | Set up Vitest + Testing Library + Playwright | T1 | 2h |
| T4 | Set up Vercel project, connect repo, configure preview deployments | T1 | 1h |
| T5 | Configure Sentry error monitoring | T4 | 1h |
| T6 | Set up CI pipeline: lint → type-check → unit tests → build → Lighthouse CI | T2, T3, T4 | 3h |
| T7 | Set up Sanity.io project with PT/EN field-level localization schema | T1 | 3h |
| T8 | Configure Cloudinary account + Next.js Image integration | T1 | 1h |

---

## M1 — Core Website Shell (Target: 2026-03-14)

### Backend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T9 | Implement i18n routing with subpath strategy (`/pt/...`, `/en/...`) + middleware for locale detection/redirect | T1 | 4h |
| T10 | Create Sanity schemas: `page`, `application`, `caseStudy`, `blogPost`, `faq`, `siteSettings` | T7 | 4h |
| T11 | Build Sanity GROQ query library (`src/lib/sanity/queries.ts`) with typed responses | T10 | 3h |
| T12 | Create i18n dictionary system for UI strings (navigation, CTAs, footer, form labels) | T9 | 3h |

### Frontend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T13 | Design system: color palette, typography scale, spacing, Tailwind theme config | T2 | 4h |
| T14 | Build layout components: `Header` (with locale switcher + mobile nav), `Footer`, `Container`, `Section` | T13, T9 | 6h |
| T15 | Build reusable UI components: `Button`, `Card`, `Badge`, `Accordion`, `Icon` set | T13 | 4h |
| T16 | Build Homepage: Hero, Trust Bar, Applications Grid, Why EPDM, About, Testimonials, Blog Preview, CTA | T14, T15, T11 | 8h |
| T17 | Implement locale switcher component with hreflang-aware URL mapping | T9, T14 | 2h |
| T18 | Create `NotFound` (404) page for both locales | T14, T12 | 1h |

### SEO (M1)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T19 | Implement dynamic `<head>` metadata generation (title, description, OG, Twitter Cards) per page per locale | T9 | 3h |
| T20 | Add `hreflang` link tags to all pages via layout | T9, T19 | 1h |
| T21 | Implement `BreadcrumbList` JSON-LD structured data | T9 | 1h |

---

## M2 — Application Pages (Target: 2026-03-28)

### Backend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T22 | Create Sanity `application` content model: hero, problem/solution, benefits, specs, process steps, FAQs, related apps | T10 | 3h |
| T23 | Seed Sanity with content for all 11 application types (PT + EN) | T22 | — (Content task) |

### Frontend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T24 | Build Application Page template: Hero, Problem/Solution, Benefits Grid, Tech Specs, Process Steps, Case Study Preview, FAQ Accordion, CTA, Related Apps | T15, T22 | 8h |
| T25 | Build Applications Hub page (`/pt/aplicacoes/`, `/en/applications/`) with category cards | T15, T22 | 3h |
| T26 | Build dynamic routing for application pages (`/pt/aplicacoes/[slug]`, `/en/applications/[slug]`) | T24, T11 | 3h |
| T27 | Build "Why EPDM" page (`/pt/porque-epdm/`, `/en/why-epdm/`) — comparison table, benefits deep-dive | T15 | 4h |
| T28 | Build About page (`/pt/sobre/`, `/en/about/`) | T15 | 3h |
| T29 | Build FAQ page (`/pt/faq/`, `/en/faq/`) — aggregated FAQs from all sources | T15 | 3h |

### SEO (M2)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T30 | Add `Service` JSON-LD structured data per application page | T26 | 2h |
| T31 | Add `FAQPage` JSON-LD structured data for FAQ sections | T29, T26 | 2h |
| T32 | Implement internal linking: related applications, cross-links to blog/quote form | T26 | 2h |

### Content Creation (M2)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T33 | Write PT content for all 11 application pages (hero, problem/solution, benefits, specs, FAQs) | T22 | — |
| T34 | Write EN content for all 11 application pages | T33 | — |
| T35 | Source/create hero images for all 11 application types | T8 | — |
| T36 | Write "Why EPDM" page content (PT + EN) — EPDM vs bituminous vs PVC comparison | T22 | — |
| T37 | Write About page content (PT + EN) | — | — |
| T38 | Write FAQ content (PT + EN) — 5-8 questions per application | T22 | — |

---

## M3 — Lead Generation (Target: 2026-04-11)

### Backend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T39 | Create quote request server action: validation, sanitization, rate limiting | T1 | 4h |
| T40 | Integrate Resend for transactional emails: quote confirmation (PT + EN templates) | T39 | 3h |
| T41 | Integrate CRM webhook (HubSpot/Pipedrive): forward lead data on form submit | T39 | 3h |
| T42 | Implement file upload for project plans (secure upload to Cloudinary or S3) | T39, T8 | 3h |

### Frontend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T43 | Build multi-application quote form with React Hook Form: project type selector, area estimation, file upload, contact details | T15, T12 | 6h |
| T44 | Build Contact/Quote page (`/pt/contacto/`, `/en/contact/`) | T43, T14 | 3h |
| T45 | Build inline CTA quote form component (for embedding on application pages) | T43 | 2h |
| T46 | Build form success/error states + confirmation UI | T43, T40 | 2h |
| T47 | Add site visit scheduling (calendar integration with time slots + address input) | T44 | 4h |

### SEO (M3)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T48 | Add `LocalBusiness` JSON-LD structured data (address, phone, service area, opening hours) | T44 | 2h |

---

## M4 — Content & SEO (Target: 2026-04-25)

### Backend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T49 | Create Sanity `blogPost` schema with rich text, image blocks, SEO fields, categories, localized slugs | T10 | 3h |
| T50 | Create Sanity `caseStudy` schema: project details, photos gallery, client testimonial, metrics, related application | T10 | 3h |

### Frontend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T51 | Build Blog listing page (`/pt/blog/`, `/en/blog/`) with pagination/infinite scroll | T49, T15 | 4h |
| T52 | Build Blog post page template with rich content rendering, share buttons, related posts | T49, T15 | 4h |
| T53 | Build Case Studies listing page (`/pt/projetos/`, `/en/projects/`) | T50, T15 | 3h |
| T54 | Build Case Study detail page with photo gallery, project specs, testimonial | T50, T15 | 4h |
| T55 | Add Blog Preview section to Homepage (latest 3 posts) | T51, T16 | 1h |
| T56 | Add Case Study Preview component for Application pages | T54, T24 | 2h |
| T57 | Build newsletter signup component for blog pages | T15 | 2h |

### SEO (M4)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T58 | Generate dynamic `sitemap.xml` with all localized URLs (pages, applications, blog posts, case studies) | T26, T51, T53 | 3h |
| T59 | Configure `robots.txt` (allow all, reference sitemap) | T58 | 0.5h |
| T60 | Implement canonical URLs for all pages per locale | T9 | 1h |
| T61 | Audit and optimize all image alt texts (localized, descriptive) | T35 | 2h |
| T62 | Verify internal linking structure: application ↔ blog ↔ case study ↔ quote form | T32, T51, T53 | 2h |
| T63 | Add `Article` JSON-LD structured data for blog posts | T52 | 1h |

### Content Creation (M4)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T64 | Write Month 1 blog posts (PT): "EPDM vs Tela Asfaltica", "Custo Impermeabilizacao Terraco", "O Que e EPDM?" | T49 | — |
| T65 | Translate Month 1 blog posts to EN | T64 | — |
| T66 | Create 3+ case studies per major application category (with photos, specs, testimonials) | T50 | — |
| T67 | Write Month 2 blog posts (PT): "Coberturas Verdes", "Erros Piscinas", "Fundacoes EPDM" | T49 | — |
| T68 | Translate Month 2 blog posts to EN | T67 | — |

---

## M5 — Polish & Launch (Target: 2026-05-09)

### DevOps

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T69 | Configure production domain (`membriko.pt`) + SSL on Vercel | T4 | 1h |
| T70 | Set up `membriko.com` → `membriko.pt` redirect | T69 | 0.5h |
| T71 | Configure Vercel Analytics (real-user performance monitoring) | T69 | 1h |
| T72 | Set up Plausible Analytics with UTM tracking + conversion goals per application page | T69 | 2h |
| T73 | Configure monitoring alerts in Sentry (error thresholds, performance budgets) | T5, T69 | 1h |

### Frontend

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T74 | Performance audit: optimize LCP, FID, CLS — target Lighthouse 95+ on all pages | All frontend tasks | 4h |
| T75 | Accessibility audit: run axe-core on all pages, fix WCAG 2.1 AA violations | All frontend tasks | 4h |
| T76 | Cross-browser testing: Chrome, Firefox, Safari, Edge (latest 2 versions) | All frontend tasks | 3h |
| T77 | Mobile device testing on real devices (iPhone + Android) | All frontend tasks | 2h |
| T78 | Visual regression test suite: key pages × 2 locales × 2 viewports | T3, All frontend tasks | 3h |

### SEO (M5)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T79 | Validate all structured data with Google Rich Results Test | T21, T30, T31, T48, T63 | 2h |
| T80 | Submit sitemap to Google Search Console + verify hreflang tags | T58, T69 | 1h |
| T81 | Set up Google Business Profile with all services listed | T69 | 2h |
| T82 | Verify OG/Twitter Card meta tags render correct previews (all pages) | T19 | 1h |
| T83 | Performance budget enforcement: page load < 3s on 3G, Lighthouse CI gate at 95+ | T6, T74 | 2h |

### Testing

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T84 | E2E tests: Homepage → application page → quote form → confirmation (both locales) | T26, T44 | 4h |
| T85 | E2E tests: language switching mid-flow, mobile navigation | T17, T14 | 2h |
| T86 | Integration test: quote form → email delivery → CRM entry | T40, T41 | 3h |
| T87 | Final manual QA: PT content review by native speaker | All content tasks | — |
| T88 | Final manual QA: EN content review for professional tone | All content tasks | — |

### Content Creation (M5)

| ID | Task | Dependencies | Estimate |
|----|------|--------------|----------|
| T89 | Write Month 3 blog posts (PT): "Escolher Membrana EPDM", "Projeto Industrial Lisboa", "EPDM Sustentabilidade" | T49 | — |
| T90 | Translate Month 3 blog posts to EN | T89 | — |

---

## Dependency Graph (Critical Path)

```
T1 → T2 → T6
T1 → T7 → T10 → T11 → T16 (Homepage)
T1 → T9 → T12 → T14 → T16
T1 → T13 → T14, T15
T10 → T22 → T24 → T26 (Application pages)
T22 → T33 → T34 (Application content)
T26 → T39 → T40, T41 (Lead gen backend)
T15 → T43 → T44 (Quote form)
T10 → T49, T50 → T51, T53 (Blog + Case Studies)
T26, T51, T53 → T58 (Sitemap)
All → T74, T75 → T69 (Launch)
```

**Critical path:** T1 → T7 → T10 → T22 → T24 → T26 → T39 → T43 → T44 → T84 → T74 → Launch

---

## SEO Tasks Summary

All SEO-related tasks grouped for reference:

| ID | Task | Milestone |
|----|------|-----------|
| T19 | Dynamic metadata generation (title, description, OG, Twitter Cards) | M1 |
| T20 | Hreflang link tags | M1 |
| T21 | BreadcrumbList JSON-LD | M1 |
| T30 | Service JSON-LD per application page | M2 |
| T31 | FAQPage JSON-LD | M2 |
| T32 | Internal linking (applications ↔ blog ↔ quote) | M2 |
| T48 | LocalBusiness JSON-LD | M3 |
| T58 | Dynamic sitemap.xml | M4 |
| T59 | robots.txt configuration | M4 |
| T60 | Canonical URLs per locale | M4 |
| T61 | Localized image alt texts | M4 |
| T62 | Internal linking audit | M4 |
| T63 | Article JSON-LD for blog posts | M4 |
| T79 | Structured data validation | M5 |
| T80 | Google Search Console submission | M5 |
| T81 | Google Business Profile setup | M5 |
| T82 | OG/Twitter Card preview verification | M5 |
| T83 | Performance budget enforcement (SEO impact) | M5 |

## Content Creation Tasks Summary

| ID | Task | Milestone |
|----|------|-----------|
| T33 | PT content for 11 application pages | M2 |
| T34 | EN content for 11 application pages | M2 |
| T35 | Hero images for all applications | M2 |
| T36 | "Why EPDM" page content (PT + EN) | M2 |
| T37 | About page content (PT + EN) | M2 |
| T38 | FAQ content per application (PT + EN) | M2 |
| T64 | Month 1 blog posts (PT) | M4 |
| T65 | Month 1 blog posts (EN) | M4 |
| T66 | Case studies with photos/testimonials | M4 |
| T67 | Month 2 blog posts (PT) | M4 |
| T68 | Month 2 blog posts (EN) | M4 |
| T87 | PT content review by native speaker | M5 |
| T88 | EN content review | M5 |
| T89 | Month 3 blog posts (PT) | M5 |
| T90 | Month 3 blog posts (EN) | M5 |

---

## Notes

- **Vertical slices:** Each milestone produces a deployable site. M1 = shell with homepage, M2 = full application pages, M3 = working lead funnel, M4 = content engine, M5 = production-ready.
- **Content tasks** (marked with `—` estimate) are non-dev tasks that run in parallel with development. They should start as early as their CMS dependencies allow.
- **L2 (Customer portal)** is explicitly out of scope for this plan per PRD.
- **Blog months 2-3** content continues post-launch; the CMS and templates are ready by M4.
