import type { Locale } from './i18n'

// Simple translation helper that loads translations synchronously from pre-imported data
import ptMessages from '../../messages/pt.json'
import enMessages from '../../messages/en.json'

const messages: Record<Locale, Record<string, Record<string, string | Record<string, string>>>> = {
  pt: ptMessages as Record<string, Record<string, string | Record<string, string>>>,
  en: enMessages as Record<string, Record<string, string | Record<string, string>>>,
}

export function t(locale: Locale, namespace: string, key: string): string {
  const ns = messages[locale]?.[namespace]
  if (!ns) return key
  const value = ns[key]
  if (typeof value === 'string') return value
  return key
}

export function tNested(locale: Locale, namespace: string, key: string, subKey: string): string {
  const ns = messages[locale]?.[namespace]
  if (!ns) return subKey
  const group = ns[key]
  if (typeof group === 'object' && group !== null) {
    return (group as Record<string, string>)[subKey] ?? subKey
  }
  return subKey
}
