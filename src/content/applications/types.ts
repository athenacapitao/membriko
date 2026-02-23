export interface Stat {
  value: string
  label: string
}

export interface Benefit {
  icon: string // Lucide icon name
  title: string
  description: string
}

export interface TechSpec {
  label: string
  value: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Technique {
  title: string
  description: string
  pros: string[]
  cons: string[]
}

export interface ComparisonRow {
  feature: string
  epdm: string
  alternatives: { name: string; value: string }[]
}

export interface ClimatePoint {
  zone: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ApplicationContent {
  meta: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    headline: string
    subtitle: string
    stats: Stat[]
  }
  problem: {
    title: string
    description: string
    points: string[]
  }
  solution: {
    title: string
    description: string
    points: string[]
  }
  benefits: Benefit[]
  specs: TechSpec[]
  installationSteps: ProcessStep[]
  techniques: Technique[]
  comparison: ComparisonRow[]
  climate: ClimatePoint[]
  faqs: FAQ[]
  relatedSlugs: string[]
}

export interface ApplicationData {
  id: string
  categoryId: string
  pt: ApplicationContent
  en: ApplicationContent
}
