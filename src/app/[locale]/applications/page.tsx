import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { ApplicationsHubContent } from '../_shared/ApplicationsHubContent'

const hubMeta = {
  pt: {
    title: 'Aplicações EPDM — 46 Soluções de Impermeabilização',
    description:
      'Descubra as 46 aplicações de membrana EPDM disponíveis: coberturas, piscinas, fundações, telhados verdes, reservatórios e muito mais. Soluções para cada projeto.',
    keywords: [
      'aplicações EPDM',
      'impermeabilização EPDM',
      'membrana EPDM Portugal',
      'soluções EPDM',
    ],
  },
  en: {
    title: 'EPDM Applications — 46 Waterproofing Solutions',
    description:
      'Discover the 46 EPDM membrane applications available: roofing, pools, foundations, green roofs, reservoirs and much more. Solutions for every project.',
    keywords: [
      'EPDM applications',
      'EPDM waterproofing',
      'EPDM membrane Portugal',
      'EPDM solutions',
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const meta = hubMeta[locale]

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    locale,
    path: `/${locale}/applications`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/${locale === 'pt' ? 'applications' : 'aplicacoes'}`,
    keywords: meta.keywords,
  })
}

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return <ApplicationsHubContent locale={locale} />
}
