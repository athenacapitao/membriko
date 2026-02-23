'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown, ChevronUp } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { categories } from '@/content/categories'
import { pageSlugMap, getCategoryPath } from '@/lib/slugs'
import { LanguageSwitcher } from './LanguageSwitcher'

interface MobileNavProps {
  locale: Locale
  isOpen: boolean
  onClose: () => void
  currentPath: string
}

const navLabels = {
  applications: { pt: 'Aplicações', en: 'Applications' },
  whyEpdm: { pt: 'Porquê EPDM', en: 'Why EPDM' },
  about: { pt: 'Sobre', en: 'About' },
  faq: { pt: 'FAQ', en: 'FAQ' },
  contact: { pt: 'Contacto', en: 'Contact' },
  cta: { pt: 'Pedir Orçamento', en: 'Get a Quote' },
}

export function MobileNav({
  locale,
  isOpen,
  onClose,
  currentPath,
}: MobileNavProps): React.JSX.Element {
  const [applicationsExpanded, setApplicationsExpanded] = useState(false)

  const applicationsPath = `/${locale}/${pageSlugMap.applications[locale]}`
  const whyEpdmPath = `/${locale}/${pageSlugMap['why-epdm'][locale]}`
  const aboutPath = `/${locale}/${pageSlugMap.about[locale]}`
  const faqPath = `/${locale}/${pageSlugMap.faq[locale]}`
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const quotePath = `/${locale}/orcamento`

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[var(--color-navy)]/60 backdrop-blur-sm"
          aria-hidden="true"
          onClick={onClose}
        />
      )}

      {/* Slide-in panel from the right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={locale === 'pt' ? 'Menu de navegação' : 'Navigation menu'}
        className={[
          'fixed top-0 right-0 z-50 h-full w-[min(320px,100vw)] bg-white shadow-2xl',
          'flex flex-col transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
          <Link
            href={`/${locale}`}
            onClick={onClose}
            className="text-xl font-bold text-[var(--color-primary)]"
          >
            Membriko
          </Link>
          <button
            onClick={onClose}
            aria-label={locale === 'pt' ? 'Fechar menu' : 'Close menu'}
            className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface)] transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
          {/* Applications — collapsible */}
          <div>
            <button
              onClick={() => setApplicationsExpanded((prev) => !prev)}
              aria-expanded={applicationsExpanded}
              className="flex items-center justify-between w-full py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors"
            >
              <span>{navLabels.applications[locale]}</span>
              {applicationsExpanded ? (
                <ChevronUp size={18} className="text-[var(--color-text-muted)]" />
              ) : (
                <ChevronDown size={18} className="text-[var(--color-text-muted)]" />
              )}
            </button>

            {applicationsExpanded && (
              <div className="mt-1 ml-3 space-y-1 border-l-2 border-[var(--color-border)] pl-4">
                <Link
                  href={applicationsPath}
                  onClick={onClose}
                  className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {locale === 'pt' ? 'Ver todas as aplicações' : 'View all applications'}
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={getCategoryPath(category.id, locale)}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span>{category.title[locale]}</span>
                    <span className="text-xs text-[var(--color-text-light)] bg-[var(--color-surface)] px-2 py-0.5 rounded-full">
                      {category.applicationCount}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={whyEpdmPath}
            onClick={onClose}
            className="block py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors border-t border-[var(--color-border)]"
          >
            {navLabels.whyEpdm[locale]}
          </Link>

          <Link
            href={aboutPath}
            onClick={onClose}
            className="block py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors border-t border-[var(--color-border)]"
          >
            {navLabels.about[locale]}
          </Link>

          <Link
            href={faqPath}
            onClick={onClose}
            className="block py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors border-t border-[var(--color-border)]"
          >
            {navLabels.faq[locale]}
          </Link>

          <Link
            href={contactPath}
            onClick={onClose}
            className="block py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors border-t border-[var(--color-border)]"
          >
            {navLabels.contact[locale]}
          </Link>
        </nav>

        {/* Footer: language switcher + CTA */}
        <div className="px-6 py-6 border-t border-[var(--color-border)] space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--color-text-muted)]">
              {locale === 'pt' ? 'Idioma:' : 'Language:'}
            </span>
            <LanguageSwitcher locale={locale} currentPath={currentPath} />
          </div>

          <Link
            href={quotePath}
            onClick={onClose}
            className="flex items-center justify-center w-full px-6 py-3 bg-[var(--color-accent)] text-[var(--color-navy)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            {navLabels.cta[locale]}
          </Link>
        </div>
      </div>
    </>
  )
}
