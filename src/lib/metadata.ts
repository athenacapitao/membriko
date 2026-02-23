import type { Metadata } from 'next'
import type { Locale } from './i18n'

const BASE_URL = 'https://membriko.pt'

interface MetaParams {
  title: string
  description: string
  locale: Locale
  path: string
  alternatePath?: string // path in other locale
  keywords?: string[]
}

export function generatePageMetadata({
  title,
  description,
  locale,
  path,
  alternatePath,
  keywords,
}: MetaParams): Metadata {
  const otherLocale = locale === 'pt' ? 'en' : 'pt'
  const url = `${BASE_URL}${path}`

  const alternates: Metadata['alternates'] = {
    canonical: url,
    languages: {
      [locale]: url,
      ...(alternatePath ? { [otherLocale]: `${BASE_URL}${alternatePath}` } : {}),
    },
  }

  return {
    title: `${title} | Membriko`,
    description,
    keywords,
    alternates,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Membriko',
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
