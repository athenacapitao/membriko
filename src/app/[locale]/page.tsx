import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, locales } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { homepage } from '@/content/homepage'
import { generatePageMetadata } from '@/lib/metadata'
import { HomepageContent } from './_shared/HomepageContent'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const content = homepage[locale]
  const otherLocale: Locale = locale === 'pt' ? 'en' : 'pt'

  return generatePageMetadata({
    title: content.meta.title.replace(' | Membriko', ''),
    description: content.meta.description,
    locale,
    path: `/${locale}`,
    alternatePath: `/${otherLocale}`,
    keywords: content.meta.keywords,
  })
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return <HomepageContent locale={locale} />
}
