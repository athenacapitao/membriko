import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { categories } from '@/content/categories'
import { pageSlugMap, getCategoryPath, getApplicationPath } from '@/lib/slugs'

interface FooterProps {
  locale: Locale
}

const topApplicationIds = [
  'flat-roofs',
  'swimming-pools',
  'green-roofs',
  'foundations',
  'facades',
  'water-reservoirs',
] as const

const topApplicationLabels: Record<string, { pt: string; en: string }> = {
  'flat-roofs': { pt: 'Coberturas Planas', en: 'Flat Roofs' },
  'swimming-pools': { pt: 'Piscinas', en: 'Swimming Pools' },
  'green-roofs': { pt: 'Coberturas Verdes', en: 'Green Roofs' },
  foundations: { pt: 'Fundações', en: 'Foundations' },
  facades: { pt: 'Fachadas', en: 'Facades' },
  'water-reservoirs': { pt: 'Reservatórios', en: 'Water Reservoirs' },
}

const footerLabels = {
  company: { pt: 'Empresa', en: 'Company' },
  tagline: {
    pt: 'Especialistas em membranas EPDM para impermeabilização em Portugal.',
    en: 'EPDM membrane waterproofing specialists in Portugal.',
  },
  topApplications: { pt: 'Aplicações em Destaque', en: 'Top Applications' },
  categories: { pt: 'Categorias', en: 'Categories' },
  contact: { pt: 'Contacto', en: 'Contact' },
  rights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
  location: { pt: 'Portugal', en: 'Portugal' },
}

export function Footer({ locale }: FooterProps): React.JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-elevated border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1: Company info */}
          <div>
            <Link
              href={`/${locale}`}
              className="text-xl font-bold text-accent mb-4 inline-block"
            >
              Membriko
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mt-2">
              {footerLabels.tagline[locale]}
            </p>
          </div>

          {/* Column 2: Top applications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">
              {footerLabels.topApplications[locale]}
            </h3>
            <ul className="space-y-2">
              {topApplicationIds.map((appId) => (
                <li key={appId}>
                  <Link
                    href={getApplicationPath(appId, locale)}
                    className="text-sm text-text-muted hover:text-white transition-colors"
                  >
                    {topApplicationLabels[appId]?.[locale] ?? appId}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">
              {footerLabels.categories[locale]}
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={getCategoryPath(category.id, locale)}
                    className="text-sm text-text-muted hover:text-white transition-colors"
                  >
                    {category.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">
              {footerLabels.contact[locale]}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:geral@membriko.pt"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-accent" />
                  geral@membriko.pt
                </a>
              </li>
              <li>
                <a
                  href="tel:+351912596037"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-accent" />
                  +351 912 596 037
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={15} className="shrink-0 text-accent" />
                {footerLabels.location[locale]}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-light">
          <p>
            &copy; {currentYear} Membriko. {footerLabels.rights[locale]}
          </p>

          {/* Language links */}
          <div className="flex items-center gap-3">
            <Link
              href={`/pt`}
              className={`hover:text-white transition-colors ${locale === 'pt' ? 'text-white font-medium' : ''}`}
            >
              Português
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/en`}
              className={`hover:text-white transition-colors ${locale === 'en' ? 'text-white font-medium' : ''}`}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
