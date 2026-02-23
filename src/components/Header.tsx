'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export function Header() {
  const t = useTranslations('Navigation')
  const pathname = usePathname()
  const locale = pathname?.split('/')[1] || 'pt'

  const switchLocale = locale === 'pt' ? 'en' : 'pt'

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-2xl font-bold text-blue-600">
          Membriko
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${locale}/applications`} className="hover:text-blue-600 transition-colors">
            {t('applications')}
          </Link>
          <Link href={`/${locale}/why-epdm`} className="hover:text-blue-600 transition-colors">
            {locale === 'pt' ? 'Porquê EPDM' : 'Why EPDM'}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-blue-600 transition-colors">
            {t('about')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href={`/${switchLocale}`} className="text-sm text-gray-500 hover:text-blue-600">
            {switchLocale.toUpperCase()}
          </Link>
          <Link href={`/${locale}/quote`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {t('quote')}
          </Link>
        </div>
      </div>
    </header>
  )
}
