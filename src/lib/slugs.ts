import type { Locale } from './i18n'

// Bidirectional slug mapping: PT slug <-> EN slug
// Key: category identifier, Value: { pt, en } slug pairs

export interface SlugPair {
  pt: string
  en: string
}

// Category slugs
export const categorySlugMap: Record<string, SlugPair> = {
  roofing: { pt: 'coberturas', en: 'roofing' },
  water: { pt: 'agua', en: 'water' },
  civil: { pt: 'construcao-civil', en: 'civil-construction' },
  envelope: { pt: 'envelope', en: 'building-envelope' },
  buildings: { pt: 'edificios', en: 'buildings' },
  agricultural: { pt: 'agricultura', en: 'agricultural' },
  environmental: { pt: 'ambiental', en: 'environmental' },
  recreation: { pt: 'desporto', en: 'sports-recreation' },
}

// Application slugs: keyed by internal ID
export const applicationSlugMap: Record<string, SlugPair> = {
  // Roofing (10)
  'flat-roofs': { pt: 'coberturas-planas', en: 'flat-roofs' },
  'pitched-roofs': { pt: 'telhados-inclinados', en: 'pitched-roofs' },
  'green-roofs': { pt: 'coberturas-verdes', en: 'green-roofs' },
  'curved-roofs': { pt: 'coberturas-curvas', en: 'curved-roofs' },
  'cool-reflective-roofs': { pt: 'coberturas-frias-reflectivas', en: 'cool-reflective-roofs' },
  'terraces-balconies': { pt: 'terracos-e-varandas', en: 'terraces-balconies' },
  'solar-integration': { pt: 'telhados-solares', en: 'solar-roof-integration' },
  'gutter-lining': { pt: 'revestimento-de-caleiras', en: 'gutter-lining' },
  'shed-garage-roofing': { pt: 'coberturas-de-alpendres', en: 'shed-garage-roofing' },
  'roof-renovation': { pt: 'renovacao-de-coberturas', en: 'roof-renovation' },
  // Water (10)
  'swimming-pools': { pt: 'piscinas', en: 'swimming-pools' },
  'ponds-water-gardens': { pt: 'lagos-e-tanques-ornamentais', en: 'ponds-water-gardens' },
  'decorative-lakes': { pt: 'lagos-decorativos', en: 'decorative-lakes' },
  'water-reservoirs': { pt: 'reservatorios-de-agua', en: 'water-reservoirs' },
  'aquaculture': { pt: 'aquacultura', en: 'aquaculture-fish-farming' },
  'irrigation-canals': { pt: 'canais-de-irrigacao', en: 'irrigation-canals' },
  'fountains-water-features': { pt: 'fontes-e-cascatas', en: 'fountains-water-features' },
  'rainwater-harvesting': { pt: 'recolha-de-aguas-pluviais', en: 'rainwater-harvesting' },
  'stormwater-management': { pt: 'gestao-de-aguas-pluviais', en: 'stormwater-management' },
  'potable-water': { pt: 'agua-potavel', en: 'potable-water-storage' },
  // Civil Construction (8)
  'foundations': { pt: 'fundacoes', en: 'foundations' },
  'basements': { pt: 'caves-e-subsolos', en: 'basements' },
  'retaining-walls': { pt: 'muros-de-contencao', en: 'retaining-walls' },
  'underground-parking': { pt: 'estacionamentos-subterraneos', en: 'underground-parking' },
  'tunnels': { pt: 'tuneis', en: 'tunnels' },
  'bridges': { pt: 'pontes-e-viadutos', en: 'bridges-viaducts' },
  'expansion-joints': { pt: 'juntas-de-dilatacao', en: 'expansion-joints' },
  'plaza-podium': { pt: 'plataformas-e-pracetas', en: 'plaza-podium-decks' },
  // Building Envelope (5)
  'facades': { pt: 'fachadas', en: 'facades' },
  'balconies': { pt: 'varandas', en: 'balcony-waterproofing' },
  'wet-rooms': { pt: 'casas-de-banho', en: 'wet-rooms-bathrooms' },
  'flashing-details': { pt: 'rufos-e-remates', en: 'flashing-details' },
  'planter-boxes': { pt: 'floreira-e-canteiros', en: 'planter-boxes' },
  // Building Types (3)
  'industrial': { pt: 'edificios-industriais', en: 'industrial-buildings' },
  'commercial': { pt: 'edificios-comerciais', en: 'commercial-buildings' },
  'residential': { pt: 'moradias', en: 'residential-housing' },
  // Agricultural (4)
  'farm-reservoirs': { pt: 'reservatorios-agricolas', en: 'agricultural-reservoirs' },
  'silage-storage': { pt: 'silos-e-silagem', en: 'silage-storage' },
  'slurry-lagoons': { pt: 'lagoas-de-chorume', en: 'slurry-lagoons' },
  'greenhouses': { pt: 'estufas', en: 'greenhouses' },
  // Environmental (4)
  'wastewater-treatment': { pt: 'tratamento-de-aguas-residuais', en: 'wastewater-treatment' },
  'biogas-digesters': { pt: 'biogas-e-digestores', en: 'biogas-digesters' },
  'chemical-containment': { pt: 'contencao-quimica', en: 'chemical-containment' },
  'landfill-capping': { pt: 'aterros-e-coberturas-ambientais', en: 'landfill-capping' },
  // Sport & Recreation (2)
  'playground-surfaces': { pt: 'pavimentos-de-parques-infantis', en: 'playground-surfaces' },
  'sports-surfaces': { pt: 'pistas-e-pavimentos-desportivos', en: 'sports-surfaces' },
}

// Static page slugs
export const pageSlugMap: Record<string, SlugPair> = {
  home: { pt: '', en: '' },
  applications: { pt: 'aplicacoes', en: 'applications' },
  'why-epdm': { pt: 'porque-epdm', en: 'why-epdm' },
  about: { pt: 'sobre', en: 'about' },
  contact: { pt: 'contacto', en: 'contact' },
  faq: { pt: 'faq', en: 'faq' },
  blog: { pt: 'blog', en: 'blog' },
  projects: { pt: 'projetos', en: 'projects' },
}

// Get localized slug from internal ID
export function getLocalizedSlug(map: Record<string, SlugPair>, id: string, locale: Locale): string {
  return map[id]?.[locale] ?? id
}

// Get internal ID from localized slug
export function getIdFromSlug(map: Record<string, SlugPair>, slug: string, locale: Locale): string | undefined {
  return Object.entries(map).find(([, pair]) => pair[locale] === slug)?.[0]
}

// Get the equivalent slug in another locale
export function getAlternateSlug(map: Record<string, SlugPair>, slug: string, fromLocale: Locale, toLocale: Locale): string | undefined {
  const id = getIdFromSlug(map, slug, fromLocale)
  if (!id) return undefined
  return map[id]?.[toLocale]
}

// Build full localized path for an application
export function getApplicationPath(appId: string, locale: Locale): string {
  const app = applicationSlugMap[appId]
  if (!app) return `/${locale}`
  // Find which category this app belongs to
  const catId = getApplicationCategory(appId)
  if (!catId) return `/${locale}`
  const catSlug = categorySlugMap[catId]?.[locale]
  const appSlug = app[locale]
  return `/${locale}/${pageSlugMap.applications[locale]}/${catSlug}/${appSlug}`
}

// Map application IDs to their category
const appCategoryMap: Record<string, string> = {
  'flat-roofs': 'roofing', 'pitched-roofs': 'roofing', 'green-roofs': 'roofing',
  'curved-roofs': 'roofing', 'cool-reflective-roofs': 'roofing', 'terraces-balconies': 'roofing',
  'solar-integration': 'roofing', 'gutter-lining': 'roofing', 'shed-garage-roofing': 'roofing',
  'roof-renovation': 'roofing',
  'swimming-pools': 'water', 'ponds-water-gardens': 'water', 'decorative-lakes': 'water',
  'water-reservoirs': 'water', 'aquaculture': 'water', 'irrigation-canals': 'water',
  'fountains-water-features': 'water', 'rainwater-harvesting': 'water',
  'stormwater-management': 'water', 'potable-water': 'water',
  'foundations': 'civil', 'basements': 'civil', 'retaining-walls': 'civil',
  'underground-parking': 'civil', 'tunnels': 'civil', 'bridges': 'civil',
  'expansion-joints': 'civil', 'plaza-podium': 'civil',
  'facades': 'envelope', 'balconies': 'envelope', 'wet-rooms': 'envelope',
  'flashing-details': 'envelope', 'planter-boxes': 'envelope',
  'industrial': 'buildings', 'commercial': 'buildings', 'residential': 'buildings',
  'farm-reservoirs': 'agricultural', 'silage-storage': 'agricultural',
  'slurry-lagoons': 'agricultural', 'greenhouses': 'agricultural',
  'wastewater-treatment': 'environmental', 'biogas-digesters': 'environmental',
  'chemical-containment': 'environmental', 'landfill-capping': 'environmental',
  'playground-surfaces': 'recreation', 'sports-surfaces': 'recreation',
}

export function getApplicationCategory(appId: string): string | undefined {
  return appCategoryMap[appId]
}

export function getApplicationsInCategory(categoryId: string): string[] {
  return Object.entries(appCategoryMap)
    .filter(([, cat]) => cat === categoryId)
    .map(([appId]) => appId)
}

// Get category hub path
export function getCategoryPath(categoryId: string, locale: Locale): string {
  const catSlug = categorySlugMap[categoryId]?.[locale]
  if (!catSlug) return `/${locale}`
  return `/${locale}/${pageSlugMap.applications[locale]}/${catSlug}`
}
