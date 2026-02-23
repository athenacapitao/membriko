import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { faq } from '@/content/faq'
import { generatePageMetadata } from '@/lib/metadata'
import { FaqPageContent } from '../_shared/FaqPageContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const content = faq[locale]

  return generatePageMetadata({
    title: content.meta.title.replace(' | Membriko', ''),
    description: content.meta.description,
    locale,
    path: `/${locale}/faq`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/faq`,
    keywords: content.meta.keywords,
  })
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return <FaqPageContent locale={locale} />
}
