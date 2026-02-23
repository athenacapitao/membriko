# Membriko - Applications Page

## Task
Build all 11 EPDM application pages for the Membriko website.

## Applications to Build
1. Telhados Planos / Flat Roofs
2. Telhados Inclinados / Pitched Roofs  
3. Telhados Verdes / Green Roofs
4. Terraços e Varandas / Terraces & Balconies
5. Piscinas / Swimming Pools
6. Lagos e Reservatórios / Lakes & Reservoirs
7. Fachadas / Facades
8. Fundações / Foundations
9. Edifícios Industriais / Industrial Buildings
10. Edifícios Comerciais / Commercial Buildings
11. Habitações Residenciais / Residential Houses

## Requirements
- Location: `/home/athena/membriko/src/app/[locale]/applications/[slug]/page.tsx`
- Use dynamic route `[slug]` to handle all applications
- Bilingual: Support both `pt` and `en` locales
- Each page should have:
  - Hero section with application title and description
  - Benefits specific to that application
  - Technical specifications
  - Call to action to quote page
  - Related applications section
- Use Tailwind CSS for styling (already configured)
- Use next-intl for translations
- Create translation keys in `/messages/pt.json` and `/messages/en.json`

## Application Data (Portuguese/English)

### 1. Telhados Planos / Flat Roofs
- Title PT: "Telhados Planos"
- Title EN: "Flat Roofs"
- Desc PT: "Impermeabilização duradoura para telhados planos comerciais e residenciais"
- Desc EN: "Long-lasting waterproofing for commercial and residential flat roofs"

### 2. Telhados Inclinados / Pitched Roofs
- Title PT: "Telhados Inclinados"
- Title EN: "Pitched Roofs"
- Desc PT: "Solução flexível para telhados inclinados com excelente resistência UV"
- Desc EN: "Flexible solution for pitched roofs with excellent UV resistance"

### 3. Telhados Verdes / Green Roofs
- Title PT: "Telhados Verdes"
- Title EN: "Green Roofs"
- Desc PT: "Membrana root-resistant para telhados ajardinados"
- Desc EN: "Root-resistant membrane for garden roofs"

### 4. Terraços e Varandas / Terraces & Balconies
- Title PT: "Terraços e Varandas"
- Title EN: "Terraces & Balconies"
- Desc PT: "Proteção contra infiltrações em espaços de convivência"
- Desc EN: "Protection against leaks in living spaces"

### 5. Piscinas / Swimming Pools
- Title PT: "Piscinas"
- Title EN: "Swimming Pools"
- Desc PT: "Membrana liners para piscinas residenciais e públicas"
- Desc EN: "Membrane liners for residential and public pools"

### 6. Lagos e Reservatórios / Lakes & Reservoirs
- Title PT: "Lagos e Reservatórios"
- Title EN: "Lakes & Reservoirs"
- Desc PT: "Impermeabilização para lagos ornamentais e reservatórios de água"
- Desc EN: "Waterproofing for ornamental lakes and water reservoirs"

### 7. Fachadas / Facades
- Title PT: "Fachadas"
- Title EN: "Facades"
- Desc PT: "Proteção de fachadas contra intemperismo e humidade"
- Desc EN: "Facade protection against weathering and moisture"

### 8. Fundações / Foundations
- Title PT: "Fundações"
- Title EN: "Foundations"
- Desc PT: "Impermeabilização de fundações e estruturas enterradas"
- Desc EN: "Waterproofing for foundations and underground structures"

### 9. Edifícios Industriais / Industrial Buildings
- Title PT: "Edifícios Industriais"
- Title EN: "Industrial Buildings"
- Desc PT: "Soluções para coberturas e impermeabilização industrial"
- Desc EN: "Solutions for industrial roofing and waterproofing"

### 10. Edifícios Comerciais / Commercial Buildings
- Title PT: "Edifícios Comerciais"
- Title EN: "Commercial Buildings"
- Desc PT: "Impermeabilização para centros comerciais e escritórios"
- Desc EN: "Waterproofing for shopping centers and offices"

### 11. Habitações Residenciais / Residential Houses
- Title PT: "Habitações Residenciais"
- Title EN: "Residential Houses"
- Desc PT: "Soluções para casas e moradias"
- Desc EN: "Solutions for houses and residential properties"

## Technical Notes
- Use the existing layout from `/src/app/[locale]/layout.tsx`
- Reuse Header and Footer components
- Use Tailwind classes from the homepage for consistency
- Make pages responsive (mobile-first)
- Add proper metadata for SEO

## Success Criteria
- [ ] All 11 application pages work in both PT and EN
- [ ] Pages are responsive
- [ ] Navigation works correctly
- [ ] SEO metadata is present
