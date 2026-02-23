import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { whyEpdm } from '@/content/why-epdm'
import { generatePageMetadata } from '@/lib/metadata'
import { WhyEpdmPageContent } from '../_shared/WhyEpdmPageContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const content = whyEpdm[locale]

  return generatePageMetadata({
    title: content.meta.title.replace(' | Membriko', ''),
    description: content.meta.description,
    locale,
    path: `/${locale}/why-epdm`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/${locale === 'pt' ? 'why-epdm' : 'porque-epdm'}`,
    keywords: content.meta.keywords,
  })
}

export default async function WhyEpdmPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return <WhyEpdmPageContent locale={locale} />
}
