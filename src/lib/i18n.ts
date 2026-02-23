export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'pt'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export async function getMessages(locale: Locale) {
  return (await import(`../../messages/${locale}.json`)).default
}

export function getDirection(locale: Locale) {
  return 'ltr' as const
}
