'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { categories } from '@/content/categories'
import { pageSlugMap, getCategoryPath } from '@/lib/slugs'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileNav } from './MobileNav'

interface HeaderProps {
  locale: Locale
  currentPath?: string
}

const navLabels = {
  applications: { pt: 'Aplicações', en: 'Applications' },
  whyEpdm: { pt: 'Porquê EPDM', en: 'Why EPDM' },
  about: { pt: 'Sobre', en: 'About' },
  faq: { pt: 'FAQ', en: 'FAQ' },
  contact: { pt: 'Contacto', en: 'Contact' },
  cta: { pt: 'Pedir Orçamento', en: 'Get a Quote' },
}

// Resolve a Lucide icon component by name string from category data.
// Falls back to a neutral placeholder if the name is not found.
function resolveLucideIcon(
  iconName: string,
): React.ComponentType<{ size?: number; className?: string }> {
  const icons = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ size?: number; className?: string }>
  >
  return icons[iconName] ?? icons['Square']
}

export function Header({
  locale,
  currentPath = `/${locale}`,
}: HeaderProps): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mega menu on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setMegaMenuOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const applicationsPath = `/${locale}/${pageSlugMap.applications[locale]}`
  const whyEpdmPath = `/${locale}/${pageSlugMap['why-epdm'][locale]}`
  const aboutPath = `/${locale}/${pageSlugMap.about[locale]}`
  const faqPath = `/${locale}/${pageSlugMap.faq[locale]}`
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const quotePath = `/${locale}/orcamento`

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-[var(--color-border)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="text-xl font-bold text-[var(--color-primary)] tracking-tight shrink-0"
            >
              Membriko
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {/* Applications mega menu trigger */}
              <div ref={megaMenuRef} className="relative">
                <button
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
                >
                  {navLabels.applications[locale]}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Mega menu dropdown */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-xl shadow-xl border border-[var(--color-border)] p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {categories.map((category) => {
                        const Icon = resolveLucideIcon(category.icon)
                        return (
                          <Link
                            key={category.id}
                            href={getCategoryPath(category.id, locale)}
                            onClick={() => setMegaMenuOpen(false)}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
                          >
                            <div className="mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
                              <Icon size={16} />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                                  {category.title[locale]}
                                </span>
                                <span className="text-xs text-[var(--color-text-light)] bg-[var(--color-surface-alt)] px-1.5 py-0.5 rounded-full shrink-0">
                                  {category.applicationCount}
                                </span>
                              </div>
                              <p className="mt-0.5 text-xs text-[var(--color-text-muted)] line-clamp-1">
                                {category.description[locale]}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* View all link */}
                    <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                      <Link
                        href={applicationsPath}
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                      >
                        {locale === 'pt'
                          ? 'Ver todas as aplicações →'
                          : 'View all applications →'}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={whyEpdmPath}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {navLabels.whyEpdm[locale]}
              </Link>

              <Link
                href={aboutPath}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {navLabels.about[locale]}
              </Link>

              <Link
                href={faqPath}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {navLabels.faq[locale]}
              </Link>

              <Link
                href={contactPath}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {navLabels.contact[locale]}
              </Link>
            </nav>

            {/* Right side: language switcher + CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Language switcher — hidden on mobile to keep header clean */}
              <div className="hidden lg:block">
                <LanguageSwitcher locale={locale} currentPath={currentPath} />
              </div>

              {/* CTA — hidden on small mobile */}
              <Link
                href={quotePath}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-[var(--color-accent)] text-[var(--color-navy)] text-sm font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                {navLabels.cta[locale]}
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label={locale === 'pt' ? 'Abrir menu' : 'Open menu'}
                className="lg:hidden p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <MobileNav
        locale={locale}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={currentPath}
      />
    </>
  )
}
