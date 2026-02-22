# Product Requirements Document (PRD)

## Membriko — EPDM Membrane Solutions for Portugal

**Version:** 1.0
**Date:** 2026-02-22
**Status:** Draft

---

## 1. Problem Statement

Portugal's civil construction market lacks a dedicated, trusted specialist for EPDM membrane applications. Property owners, architects, and construction companies face:

- **Fragmented supplier landscape** — EPDM providers exist across Portugal and Spain, but no single company consolidates access to all of them with expert application knowledge.
- **Poor waterproofing outcomes** — Traditional bituminous and PVC membranes degrade within 10–20 years, leading to costly repairs, water damage, and structural deterioration.
- **Limited awareness** — Many Portuguese construction professionals are unaware that EPDM offers 50+ year durability, UV resistance, and full recyclability compared to alternatives.
- **No authoritative Portuguese-language resource** — Existing EPDM content is predominantly in English or generic, failing to address Portugal-specific climate conditions (Atlantic coast humidity, Algarve heat, northern rainfall).
- **Trust gap** — Property owners searching for waterproofing solutions online find generic contractors, not verified EPDM specialists with proven track records.

**Target users:** Architects, civil engineers, construction companies, property developers, municipal/public works departments, and homeowners in Portugal.

---

## 2. Solution Overview

**Membriko** is Portugal's premier EPDM membrane specialist — a bilingual (PT/EN) web platform and service company that:

1. **Aggregates all EPDM providers** from Portugal and Spain into a single point of contact
2. **Covers every application type** — from residential flat roofs to commercial swimming pools to municipal reservoirs
3. **Educates the market** through SEO-optimized, application-specific content in Portuguese and English
4. **Converts visitors into leads** through persuasive, trust-building design and clear CTAs
5. **Positions as the #1 EPDM authority in Portugal** via content strategy, case studies, and technical credibility

### Core Value Proposition

> "Membriko — A melhor solucao EPDM de Portugal. 50+ anos de durabilidade, resistencia total, 100% reciclavel."

### EPDM Applications Covered

| Category | Applications |
|----------|-------------|
| **Roofing** | Flat roofs, pitched roofs, green roofs |
| **Exterior Living** | Terraces, balconies |
| **Water Containment** | Swimming pools, lakes, reservoirs |
| **Building Envelope** | Facades, walls, foundation waterproofing |
| **Building Types** | Industrial buildings, commercial buildings, residential houses |

### Key EPDM Benefits (Messaging Pillars)

| Benefit | Sales Message (PT) | Sales Message (EN) |
|---------|--------------------|--------------------|
| **Durability** | Mais de 50 anos de vida util comprovada | Proven 50+ year lifespan |
| **Weather Resistance** | Resiste a chuva, vento, granizo e temperaturas extremas | Withstands rain, wind, hail, and extreme temperatures |
| **UV Resistance** | Sem degradacao solar — ideal para o clima portugues | No solar degradation — ideal for the Portuguese climate |
| **Eco-Friendly** | 100% reciclavel — construcao sustentavel | 100% recyclable — sustainable construction |
| **Low Maintenance** | Instale e esqueca — manutencao minima durante decadas | Install and forget — minimal maintenance for decades |
| **Easy Installation** | Instalacao rapida por profissionais certificados | Fast installation by certified professionals |

---

## 3. User Stories

### 3.1 Visitor / Prospect

| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| V1 | As a Portuguese architect, I want to find EPDM application details in Portuguese so I can specify it in my projects. | Application pages available in PT-PT with technical specifications, climate suitability data, and downloadable spec sheets. |
| V2 | As a homeowner, I want to understand why EPDM is better than traditional waterproofing so I can make an informed decision. | Comparison page showing EPDM vs bituminous vs PVC with lifespan, cost-over-time, and environmental metrics. |
| V3 | As a construction company, I want to see case studies of EPDM projects in Portugal so I can trust the solution. | Minimum 3 case studies per application category with photos, project details, and client testimonials. |
| V4 | As a property developer, I want to request a quote for multiple application types in one form so I can save time. | Multi-application quote form with project type selector, area estimation, and file upload for plans. |
| V5 | As an international investor in Portuguese real estate, I want to read the site in English so I can evaluate EPDM for my projects. | Full EN translation with locale switcher; EN version mirrors all PT content. |
| V6 | As a visitor on mobile, I want the site to load fast and be easy to navigate so I can browse on-site at a construction project. | Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1); mobile-first responsive design. |

### 3.2 Lead / Customer

| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| L1 | As a lead, I want to receive a quote within 24 hours so I know Membriko is responsive. | Automated confirmation email on form submit; internal SLA tracking for 24h response. |
| L2 | As a returning customer, I want to see my previous projects and warranty information so I can manage my properties. | Future phase: customer portal (out of scope for MVP). |
| L3 | As a lead, I want to schedule a site visit directly from the website so the process feels easy. | Calendar integration with available time slots and address input. |

### 3.3 Admin / Business

| ID | User Story | Acceptance Criteria |
|----|-----------|-------------------|
| A1 | As the Membriko team, I want to manage content (case studies, blog posts) without developer help so we can publish regularly. | CMS integration (headless CMS) with role-based access. |
| A2 | As the business owner, I want to track which pages and applications generate the most leads so I can optimize marketing spend. | Analytics integration with UTM tracking, conversion funnels per application page. |
| A3 | As the SEO manager, I want each application page to target specific Portuguese-language keywords so we rank #1 in Portugal. | Each page has unique meta title, description, H1, structured data, and targets a primary + secondary keyword cluster. |

---

## 4. Implementation Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Framework** | Next.js 15 (App Router) | SSR/SSG for SEO; React ecosystem; built-in i18n routing (`/pt`, `/en`). |
| **Language** | TypeScript | Type safety, better DX, catches errors at build time. |
| **Styling** | Tailwind CSS 4 | Utility-first, fast iteration, small bundle size, design system friendly. |
| **CMS** | Sanity.io | Real-time collaboration, structured content, PT/EN field-level localization, generous free tier. |
| **i18n Strategy** | Subpath routing (`/pt/coberturas-planas`, `/en/flat-roofs`) | Best for SEO — each locale gets its own indexable URLs with hreflang tags. |
| **Hosting** | Vercel | Native Next.js support, edge network with European PoPs, automatic HTTPS, preview deployments. |
| **Analytics** | Plausible Analytics | GDPR-compliant (no cookie banner needed in Portugal), lightweight, open-source option available. |
| **Forms / Leads** | React Hook Form + server action → CRM webhook | Validated client-side, processed server-side, forwarded to CRM (HubSpot free tier or Pipedrive). |
| **Email** | Resend | Transactional emails (quote confirmations), simple API, good deliverability. |
| **Image Optimization** | Next.js Image + Cloudinary | Automatic WebP/AVIF, responsive sizes, CDN delivery for project photos. |
| **Structured Data** | JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList) | Rich snippets in Google.pt results, enhanced CTR. |
| **Performance Budget** | Lighthouse 95+ on all pages | Non-negotiable for SEO and user experience. |
| **Domain** | `membriko.pt` (primary), `membriko.com` (redirect) | `.pt` TLD signals local authority to Google and Portuguese users. |
| **SSL** | Auto via Vercel | HTTPS required for SEO ranking factor and trust. |
| **Monitoring** | Sentry (errors) + Vercel Analytics (performance) | Catch runtime errors and track real-user performance metrics. |

---

## 5. Testing Requirements

### 5.1 Automated Testing

| Type | Tool | Coverage Target | Scope |
|------|------|----------------|-------|
| **Unit Tests** | Vitest | 80%+ | Utility functions, form validation, price calculators, i18n helpers. |
| **Component Tests** | Vitest + Testing Library | All interactive components | Quote form, locale switcher, navigation, CTAs, accordion/FAQ. |
| **Integration Tests** | Playwright | Critical user flows | Homepage → application page → quote form → confirmation (both locales). |
| **E2E Tests** | Playwright | Core conversion paths | Full quote request flow, language switching mid-flow, mobile navigation. |
| **Visual Regression** | Playwright screenshots | Key pages | Homepage, application pages, quote form — both PT and EN, desktop and mobile. |
| **Accessibility** | axe-core + Lighthouse | WCAG 2.1 AA | All pages must pass; automated checks in CI. |
| **Performance** | Lighthouse CI | 95+ score | Runs on every PR; blocks merge if score drops below threshold. |

### 5.2 Manual Testing Checklist

- [ ] All PT content reviewed by native Portuguese speaker (PT-PT, not PT-BR)
- [ ] All EN content reviewed for professional tone and accuracy
- [ ] Quote form submits correctly and triggers email + CRM entry
- [ ] hreflang tags verified with Google Search Console
- [ ] Structured data validated with Google Rich Results Test
- [ ] Site renders correctly on: Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] Mobile experience tested on real devices (iPhone, Android)
- [ ] 404 page works in both locales
- [ ] Sitemap.xml includes all localized URLs
- [ ] robots.txt is correctly configured
- [ ] Open Graph and Twitter Card meta tags render correct previews

### 5.3 SEO Validation

- [ ] Each page has unique `<title>` and `<meta description>` in the correct locale
- [ ] H1 tags contain primary keyword for each page
- [ ] Image alt texts are descriptive and localized
- [ ] Internal linking structure connects application pages, blog posts, and service pages
- [ ] Canonical URLs are correctly set for each locale
- [ ] Page load time < 3s on 3G connection

---

## 6. SEO Strategy

### 6.1 Keyword Clusters (PT-PT Primary)

| Application | Primary Keyword (PT) | Secondary Keywords (PT) | Search Volume Estimate |
|-------------|----------------------|------------------------|----------------------|
| Flat Roofs | "impermeabilizacao de coberturas planas" | "membrana EPDM telhado plano", "cobertura plana impermeavel" | High |
| Pitched Roofs | "impermeabilizacao de telhados" | "membrana EPDM telhado inclinado", "subtelha EPDM" | High |
| Green Roofs | "coberturas verdes Portugal" | "telhado verde EPDM", "cobertura ajardinada impermeabilizacao" | Medium |
| Terraces | "impermeabilizacao de terracos" | "terraco impermeavel EPDM", "varanda impermeabilizacao" | High |
| Swimming Pools | "impermeabilizacao de piscinas EPDM" | "revestimento piscina membrana", "piscina EPDM Portugal" | Medium |
| Lakes/Reservoirs | "impermeabilizacao de lagos artificiais" | "membrana EPDM lago", "reservatorio impermeavel" | Low-Medium |
| Facades | "impermeabilizacao de fachadas" | "fachada EPDM", "parede exterior impermeavel" | Medium |
| Foundations | "impermeabilizacao de fundacoes" | "membrana EPDM fundacao", "cave impermeabilizacao" | Medium |
| Industrial | "impermeabilizacao industrial" | "nave industrial EPDM", "cobertura industrial membrana" | Medium |
| Commercial | "impermeabilizacao edificios comerciais" | "comercial EPDM Portugal", "centro comercial impermeabilizacao" | Medium |
| Residential | "impermeabilizacao de moradias" | "casa EPDM", "moradia impermeabilizacao membrana" | High |

### 6.2 EN Keyword Clusters (Secondary — targeting expats and international investors)

| Application | Primary Keyword (EN) |
|-------------|---------------------|
| Flat Roofs | "EPDM flat roof waterproofing Portugal" |
| Swimming Pools | "EPDM pool liner Portugal" |
| Green Roofs | "green roof installation Portugal" |
| Residential | "house waterproofing Portugal" |

### 6.3 Technical SEO Requirements

- **Hreflang implementation:** `<link rel="alternate" hreflang="pt" href="https://membriko.pt/pt/..." />` + `<link rel="alternate" hreflang="en" href="https://membriko.pt/en/..." />`
- **XML Sitemap:** Auto-generated, includes all localized URLs, submitted to Google Search Console
- **Robots.txt:** Allow all crawlers, reference sitemap
- **Structured Data:** LocalBusiness (with Portuguese address, phone, service area), Service (per application), FAQPage (per application page), BreadcrumbList
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Mobile-first indexing:** All content accessible on mobile; no hidden content
- **Internal linking:** Each application page links to related applications, blog posts, and the quote form
- **URL structure:** Clean, localized slugs (`/pt/coberturas-planas`, `/en/flat-roofs`)

### 6.4 Local SEO

- Google Business Profile optimized with all services listed
- NAP consistency (Name, Address, Phone) across all directories
- Target directories: Google Maps, Paginas Amarelas, Yelp Portugal, Habitissimo, Fixando
- Encourage Google Reviews from completed projects

---

## 7. Content Strategy

### 7.1 Site Architecture

```
membriko.pt/
├── /pt/ (Portuguese - default)
│   ├── / (Homepage)
│   ├── /sobre/ (About)
│   ├── /aplicacoes/ (Applications hub)
│   │   ├── /coberturas-planas/ (Flat roofs)
│   │   ├── /telhados/ (Pitched roofs)
│   │   ├── /coberturas-verdes/ (Green roofs)
│   │   ├── /terracos-e-varandas/ (Terraces & balconies)
│   │   ├── /piscinas/ (Swimming pools)
│   │   ├── /lagos-e-reservatorios/ (Lakes & reservoirs)
│   │   ├── /fachadas-e-paredes/ (Facades & walls)
│   │   ├── /impermeabilizacao-de-fundacoes/ (Foundation waterproofing)
│   │   ├── /edificios-industriais/ (Industrial buildings)
│   │   ├── /edificios-comerciais/ (Commercial buildings)
│   │   └── /moradias/ (Residential houses)
│   ├── /porque-epdm/ (Why EPDM)
│   ├── /projetos/ (Case studies / portfolio)
│   ├── /blog/ (Blog / resources)
│   ├── /contacto/ (Contact / quote form)
│   └── /faq/ (FAQ)
├── /en/ (English - mirror structure)
│   ├── / (Homepage)
│   ├── /about/
│   ├── /applications/
│   │   ├── /flat-roofs/
│   │   ├── /pitched-roofs/
│   │   ├── /green-roofs/
│   │   ├── /terraces-and-balconies/
│   │   ├── /swimming-pools/
│   │   ├── /lakes-and-reservoirs/
│   │   ├── /facades-and-walls/
│   │   ├── /foundation-waterproofing/
│   │   ├── /industrial-buildings/
│   │   ├── /commercial-buildings/
│   │   └── /residential-houses/
│   ├── /why-epdm/
│   ├── /projects/
│   ├── /blog/
│   ├── /contact/
│   └── /faq/
└── sitemap.xml
```

### 7.2 Page Templates

#### Application Page Template (per application)

Each application page follows a consistent, conversion-optimized structure:

1. **Hero Section** — Application-specific hero image + headline + primary CTA ("Pedir Orcamento")
2. **Problem/Solution** — What goes wrong without proper EPDM + how Membriko solves it
3. **Benefits Grid** — 4–6 EPDM benefits specific to this application
4. **Technical Specs** — Membrane thickness, temperature range, lifespan, certifications
5. **Process Steps** — How Membriko delivers (consultation → assessment → installation → warranty)
6. **Case Study Preview** — 1–2 featured projects for this application type
7. **FAQ Accordion** — 5–8 application-specific FAQs (doubles as structured data)
8. **CTA Section** — Quote form or link to contact page
9. **Related Applications** — Cross-links to related application pages

#### Homepage Structure

1. **Hero** — Bold positioning statement + primary CTA
2. **Trust Bar** — Provider logos (EPDM manufacturers from PT and ES)
3. **Applications Grid** — Visual cards linking to each application page
4. **Why EPDM** — Key benefits with icons and stats
5. **About Membriko** — Brief company intro + credibility markers
6. **Testimonials** — Client quotes with project photos
7. **Blog Preview** — Latest 3 articles
8. **CTA** — Final conversion section with quote form

### 7.3 Blog Content Calendar (First 3 Months)

| Month | Topic (PT) | Target Keyword | Type |
|-------|-----------|---------------|------|
| 1 | "EPDM vs Tela Asfaltica: Qual a Melhor Impermeabilizacao?" | "epdm vs tela asfaltica" | Comparison |
| 1 | "Quanto Custa Impermeabilizar um Terraco em Portugal?" | "custo impermeabilizacao terraco" | Commercial |
| 1 | "O Que e EPDM? Guia Completo para Construcao Civil" | "o que e epdm" | Educational |
| 2 | "Coberturas Verdes em Portugal: Guia de Impermeabilizacao" | "coberturas verdes portugal" | Educational |
| 2 | "5 Erros Comuns na Impermeabilizacao de Piscinas" | "impermeabilizacao piscinas erros" | Problem/Solution |
| 2 | "Impermeabilizacao de Fundacoes: Porque o EPDM e Superior" | "impermeabilizacao fundacoes" | Technical |
| 3 | "Como Escolher uma Membrana EPDM: Espessura, Marca e Aplicacao" | "escolher membrana epdm" | Buyer's Guide |
| 3 | "Projeto Membriko: Impermeabilizacao de Cobertura Industrial em Lisboa" | "impermeabilizacao industrial lisboa" | Case Study |
| 3 | "EPDM e Sustentabilidade: Construcao Ecologica em Portugal" | "construcao sustentavel portugal" | Thought Leadership |

### 7.4 Tone of Voice

| Attribute | Description |
|-----------|------------|
| **Professional** | Technical authority without jargon overload. Speak as experts who make complexity simple. |
| **Trustworthy** | Back claims with data (50+ years, certifications, case studies). No vague superlatives. |
| **Portuguese-first** | Content written natively in PT-PT (not translated from English). Local references, local climate, local regulations. |
| **Action-oriented** | Every page drives toward a conversion action — quote request, phone call, or site visit booking. |
| **Warm but direct** | Approachable without being casual. Respect the reader's time and intelligence. |

### 7.5 Conversion Strategy

- **Primary CTA:** "Pedir Orcamento Gratuito" / "Request a Free Quote" — appears on every page
- **Secondary CTA:** "Agendar Visita Tecnica" / "Schedule a Site Visit" — on application pages
- **Tertiary CTA:** Newsletter signup — on blog pages
- **Social Proof:** Client testimonials, project counter ("200+ projetos concluidos"), provider logos
- **Urgency/Scarcity:** Seasonal messaging (e.g., "Prepare o seu telhado antes do inverno")
- **Trust Signals:** Certifications, insurance, warranty terms, years of experience, provider partnerships

---

## Appendix: Success Metrics

| Metric | Target (6 months) | Target (12 months) |
|--------|-------------------|---------------------|
| Organic traffic (PT) | 2,000 sessions/month | 8,000 sessions/month |
| Organic traffic (EN) | 500 sessions/month | 2,000 sessions/month |
| Quote requests/month | 30 | 100 |
| Google.pt top 10 keywords | 15 keywords | 40 keywords |
| Lighthouse performance score | 95+ | 95+ |
| Average page load time | < 2s | < 1.5s |
| Bounce rate | < 50% | < 40% |
