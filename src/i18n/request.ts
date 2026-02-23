import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Without middleware, we need to handle locale detection differently
  // For now, default to Portuguese
  const locale = routing.defaultLocale
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
