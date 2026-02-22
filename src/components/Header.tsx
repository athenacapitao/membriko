import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const t = useTranslations('Navigation')

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Membriko
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/applications" className="hover:text-blue-600 transition-colors">
            {t('applications')}
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            {t('about')}
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            {t('blog')}
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            {t('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/quote"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('quote')}
          </Link>
        </div>
      </div>
    </header>
  )
}
