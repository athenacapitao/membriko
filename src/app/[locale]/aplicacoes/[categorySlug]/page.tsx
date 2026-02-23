import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, locales } from '@/lib/i18n'
import { getCategoryById } from '@/content/categories'
import { categorySlugMap, getIdFromSlug } from '@/lib/slugs'
import { generatePageMetadata } from '@/lib/metadata'
import { CategoryHubContent } from '../../_shared/CategoryHubContent'

// Generate static params for all PT category slugs
export function generateStaticParams() {
  const params: { locale: string; categorySlug: string }[] = []
  for (const locale of locales) {
    for (const slugPair of Object.values(categorySlugMap)) {
      params.push({ locale, categorySlug: slugPair[locale] })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string }>
}): Promise<Metadata> {
  const { locale, categorySlug } = await params
  if (!isValidLocale(locale)) return {}

  const categoryId = getIdFromSlug(categorySlugMap, categorySlug, locale)
  if (!categoryId) return {}

  const category = getCategoryById(categoryId)
  if (!category) return {}

  const otherLocale = locale === 'pt' ? 'en' : 'pt'
  const otherCategorySlug = categorySlugMap[categoryId]?.[otherLocale] ?? categorySlug
  const otherAppsPath = locale === 'pt' ? 'applications' : 'aplicacoes'

  return generatePageMetadata({
    title: `${category.title[locale]} — Impermeabilização EPDM`,
    description: category.description[locale],
    locale,
    path: `/${locale}/aplicacoes/${categorySlug}`,
    alternatePath: `/${otherLocale}/${otherAppsPath}/${otherCategorySlug}`,
  })
}

export default async function AplicacoesCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string }>
}) {
  const { locale, categorySlug } = await params
  if (!isValidLocale(locale)) notFound()

  return <CategoryHubContent locale={locale} categorySlug={categorySlug} />
}
