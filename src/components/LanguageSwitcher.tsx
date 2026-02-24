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
function resolveAlternatePath(currentPath: string, fromLocale: Locale): string {
  const toLocale: Locale = fromLocale === 'pt' ? 'en' : 'pt'

  const segments = currentPath.replace(/^\//, '').split('/').filter(Boolean)

  if (segments.length === 0) {
    return `/${toLocale}`
  }

  const pathSegments = segments.slice(1)

  if (pathSegments.length === 0) {
    return `/${toLocale}`
  }

  const applicationsSlug = pageSlugMap.applications[fromLocale]

  if (pathSegments.length === 1) {
    const pageSlug = pathSegments[0]

    for (const [, pair] of Object.entries(pageSlugMap)) {
      if (pair[fromLocale] === pageSlug && pair[toLocale]) {
        return `/${toLocale}/${pair[toLocale]}`
      }
    }

    return `/${toLocale}/${pageSlug}`
  }

  if (pathSegments[0] === applicationsSlug) {
    const toApplicationsSlug = pageSlugMap.applications[toLocale]

    if (pathSegments.length === 1) {
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
      const resolvedCategory = alternateCategorySlug ?? categorySlug
      return `/${toLocale}/${toApplicationsSlug}/${resolvedCategory}`
    }

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
            ? 'text-accent font-semibold'
            : 'text-text-muted'
        }
        aria-current={locale === 'pt' ? 'true' : undefined}
      >
        PT
      </span>
      <span className="text-white/20">|</span>
      <Link
        href={alternatePath}
        className={
          locale === 'en'
            ? 'text-accent font-semibold'
            : 'text-text-muted hover:text-white transition-colors'
        }
        aria-label={`Switch to ${alternateLocale === 'en' ? 'English' : 'Portuguese'}`}
      >
        EN
      </Link>
    </div>
  )
}
