import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, locales } from '@/lib/i18n'
import { getApplicationById } from '@/content/applications'
import {
  categorySlugMap,
  applicationSlugMap,
  getApplicationCategory,
  getIdFromSlug,
  getApplicationsInCategory,
} from '@/lib/slugs'
import { generatePageMetadata } from '@/lib/metadata'
import { ApplicationDetailContent } from '../../../_shared/ApplicationDetailContent'

// Generate static params: all valid category+app combinations for both locales
export function generateStaticParams() {
  const params: { locale: string; categorySlug: string; appSlug: string }[] = []

  for (const locale of locales) {
    for (const [categoryId, catSlugs] of Object.entries(categorySlugMap)) {
      const categorySlug = catSlugs[locale]
      const appIds = getApplicationsInCategory(categoryId)

      for (const appId of appIds) {
        const appSlugs = applicationSlugMap[appId]
        if (!appSlugs) continue
        params.push({ locale, categorySlug, appSlug: appSlugs[locale] })
      }
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string; appSlug: string }>
}): Promise<Metadata> {
  const { locale, categorySlug, appSlug } = await params
  if (!isValidLocale(locale)) return {}

  const categoryId = getIdFromSlug(categorySlugMap, categorySlug, locale)
  if (!categoryId) return {}

  const appId = getIdFromSlug(applicationSlugMap, appSlug, locale)
  if (!appId) return {}

  if (getApplicationCategory(appId) !== categoryId) return {}

  const appData = getApplicationById(appId)
  if (!appData) return {}

  const content = appData[locale]

  const otherLocale = locale === 'pt' ? 'en' : 'pt'
  const otherCategorySlug = categorySlugMap[categoryId]?.[otherLocale] ?? categorySlug
  const otherAppSlug = applicationSlugMap[appId]?.[otherLocale] ?? appSlug
  const otherAppsPath = locale === 'pt' ? 'applications' : 'aplicacoes'

  return generatePageMetadata({
    title: content.meta.title.replace(' | Membriko', ''),
    description: content.meta.description,
    locale,
    path: `/${locale}/applications/${categorySlug}/${appSlug}`,
    alternatePath: `/${otherLocale}/${otherAppsPath}/${otherCategorySlug}/${otherAppSlug}`,
    keywords: content.meta.keywords,
  })
}

export default async function ApplicationsAppPage({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string; appSlug: string }>
}) {
  const { locale, categorySlug, appSlug } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <ApplicationDetailContent
      locale={locale}
      categorySlug={categorySlug}
      appSlug={appSlug}
    />
  )
}
