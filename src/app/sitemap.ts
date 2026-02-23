import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { applicationSlugMap, categorySlugMap, pageSlugMap, getApplicationCategory } from '@/lib/slugs'

const BASE_URL = 'https://membriko.pt'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const appBase = pageSlugMap.applications[locale]

    // Homepage
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    })

    // Static pages
    const staticPages = ['why-epdm', 'about', 'contact', 'faq'] as const
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}/${pageSlugMap[page][locale]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }

    // Applications main hub
    entries.push({
      url: `${BASE_URL}/${locale}/${appBase}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    // Category hubs
    for (const [catId, catSlugs] of Object.entries(categorySlugMap)) {
      entries.push({
        url: `${BASE_URL}/${locale}/${appBase}/${catSlugs[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }

    // Application detail pages
    for (const [appId, appSlugs] of Object.entries(applicationSlugMap)) {
      const catId = getApplicationCategory(appId)
      if (!catId) continue
      const catSlug = categorySlugMap[catId]?.[locale]
      if (!catSlug) continue

      entries.push({
        url: `${BASE_URL}/${locale}/${appBase}/${catSlug}/${appSlugs[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }

    // Blog & Projects placeholders
    entries.push({
      url: `${BASE_URL}/${locale}/${pageSlugMap.blog[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    })
    entries.push({
      url: `${BASE_URL}/${locale}/${pageSlugMap.projects[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    })
  }

  return entries
}
