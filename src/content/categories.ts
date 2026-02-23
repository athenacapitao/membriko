import type { Locale } from '@/lib/i18n'

export interface Category {
  id: string
  icon: string // Lucide icon name
  applicationCount: number
  title: { pt: string; en: string }
  description: { pt: string; en: string }
}

export const categories: Category[] = [
  {
    id: 'roofing',
    icon: 'Home',
    applicationCount: 10,
    title: { pt: 'Coberturas', en: 'Roofing' },
    description: {
      pt: 'Soluções EPDM para todo o tipo de coberturas: planas, inclinadas, verdes, curvas e mais.',
      en: 'EPDM solutions for all roof types: flat, pitched, green, curved and more.',
    },
  },
  {
    id: 'water',
    icon: 'Droplets',
    applicationCount: 10,
    title: { pt: 'Água', en: 'Water Containment' },
    description: {
      pt: 'Impermeabilização para piscinas, lagos, reservatórios, aquacultura e gestão de águas.',
      en: 'Waterproofing for pools, ponds, reservoirs, aquaculture and water management.',
    },
  },
  {
    id: 'civil',
    icon: 'Building2',
    applicationCount: 8,
    title: { pt: 'Construção Civil', en: 'Civil Construction' },
    description: {
      pt: 'Fundações, caves, túneis, pontes e outras estruturas de engenharia civil.',
      en: 'Foundations, basements, tunnels, bridges and other civil engineering structures.',
    },
  },
  {
    id: 'envelope',
    icon: 'Layers',
    applicationCount: 5,
    title: { pt: 'Envelope do Edifício', en: 'Building Envelope' },
    description: {
      pt: 'Fachadas, varandas, casas de banho, rufos e detalhes construtivos.',
      en: 'Facades, balconies, wet rooms, flashing and construction details.',
    },
  },
  {
    id: 'buildings',
    icon: 'Factory',
    applicationCount: 3,
    title: { pt: 'Edifícios', en: 'Building Types' },
    description: {
      pt: 'Soluções específicas para edifícios industriais, comerciais e residenciais.',
      en: 'Specific solutions for industrial, commercial and residential buildings.',
    },
  },
  {
    id: 'agricultural',
    icon: 'Wheat',
    applicationCount: 4,
    title: { pt: 'Agricultura', en: 'Agricultural' },
    description: {
      pt: 'Reservatórios agrícolas, silos, lagoas de chorume e estufas.',
      en: 'Farm reservoirs, silage storage, slurry lagoons and greenhouses.',
    },
  },
  {
    id: 'environmental',
    icon: 'Leaf',
    applicationCount: 4,
    title: { pt: 'Ambiental', en: 'Environmental' },
    description: {
      pt: 'Tratamento de águas residuais, biogás, contenção química e aterros.',
      en: 'Wastewater treatment, biogas, chemical containment and landfill capping.',
    },
  },
  {
    id: 'recreation',
    icon: 'Trophy',
    applicationCount: 2,
    title: { pt: 'Desporto e Recreação', en: 'Sport & Recreation' },
    description: {
      pt: 'Pavimentos de parques infantis e pistas desportivas.',
      en: 'Playground surfaces and sports tracks.',
    },
  },
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function getCategoryTitle(id: string, locale: Locale): string {
  return getCategoryById(id)?.title[locale] ?? id
}
