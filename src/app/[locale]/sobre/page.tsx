import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { about } from '@/content/about'
import { generatePageMetadata } from '@/lib/metadata'
import { AboutPageContent } from '../_shared/AboutPageContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const content = about[locale]

  return generatePageMetadata({
    title: content.meta.title.replace(' | Membriko', ''),
    description: content.meta.description,
    locale,
    path: `/${locale}/sobre`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/${locale === 'pt' ? 'about' : 'sobre'}`,
    keywords: content.meta.keywords,
  })
}

export default async function SobrePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return <AboutPageContent locale={locale} />
}
