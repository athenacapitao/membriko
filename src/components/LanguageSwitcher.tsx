'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import {
  pageSlugMap,
  categorySlugMap,
  applicationSlugMap,
  getAlternateSlug,
} from '@/lib/slugs'

interface LanguageSwitcherProps {
  locale: Locale
  currentPath: string
}

// Resolve the equivalent path in the target locale given a path in the source locale.
// Handles static pages, category hubs, and application pages.
function resolveAlternatePath(currentPath: string, fromLocale: Locale): string {
  const toLocale: Locale = fromLocale === 'pt' ? 'en' : 'pt'

  // Strip leading slash and split into segments
  const segments = currentPath.replace(/^\//, '').split('/').filter(Boolean)

  // First segment is always the locale prefix (e.g. 'pt' or 'en')
  if (segments.length === 0) {
    return `/${toLocale}`
  }

  // Remove the locale prefix
  const pathSegments = segments.slice(1)

  if (pathSegments.length === 0) {
    // Just the locale root, e.g. /pt
    return `/${toLocale}`
  }

  const applicationsSlug = pageSlugMap.applications[fromLocale]

  // Static top-level pages: /pt/slug
  if (pathSegments.length === 1) {
    const pageSlug = pathSegments[0]

    // Check if this is a known static page slug
    for (const [, pair] of Object.entries(pageSlugMap)) {
      if (pair[fromLocale] === pageSlug && pair[toLocale]) {
        return `/${toLocale}/${pair[toLocale]}`
      }
    }

    // Fallback — just swap locale
    return `/${toLocale}/${pageSlug}`
  }

  // Applications section: /pt/aplicacoes/...
  if (pathSegments[0] === applicationsSlug) {
    const toApplicationsSlug = pageSlugMap.applications[toLocale]

    if (pathSegments.length === 1) {
      // Applications index
      return `/${toLocale}/${toApplicationsSlug}`
    }

    const categorySlug = pathSegments[1]
    const alternateCategorySlug = getAlternateSlug(
      categorySlugMap,
      categorySlug,
      fromLocale,
      toLocale,
    )

    if (pathSegments.length === 2) {
      // Category hub page
      const resolvedCategory = alternateCategorySlug ?? categorySlug
      return `/${toLocale}/${toApplicationsSlug}/${resolvedCategory}`
    }

    // Application detail page: /pt/aplicacoes/category-slug/app-slug
    const appSlug = pathSegments[2]
    const alternateAppSlug = getAlternateSlug(
      applicationSlugMap,
      appSlug,
      fromLocale,
      toLocale,
    )
    const resolvedCategory = alternateCategorySlug ?? categorySlug
    const resolvedApp = alternateAppSlug ?? appSlug
    return `/${toLocale}/${toApplicationsSlug}/${resolvedCategory}/${resolvedApp}`
  }

  // Unknown path shape — swap locale prefix only
  return `/${toLocale}/${pathSegments.join('/')}`
}

export function LanguageSwitcher({
  locale,
  currentPath,
}: LanguageSwitcherProps): React.JSX.Element {
  const alternateLocale: Locale = locale === 'pt' ? 'en' : 'pt'
  const alternatePath = resolveAlternatePath(currentPath, locale)

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <span
        className={
          locale === 'pt'
            ? 'text-[var(--color-primary)] font-semibold'
            : 'text-[var(--color-text-muted)]'
        }
        aria-current={locale === 'pt' ? 'true' : undefined}
      >
        PT
      </span>
      <span className="text-[var(--color-border)]">|</span>
      <Link
        href={alternatePath}
        className={
          locale === 'en'
            ? 'text-[var(--color-primary)] font-semibold'
            : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors'
        }
        aria-label={`Switch to ${alternateLocale === 'en' ? 'English' : 'Portuguese'}`}
      >
        EN
      </Link>
    </div>
  )
}
