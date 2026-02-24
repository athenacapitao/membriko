import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { getCategoryById } from '@/content/categories'
import { getApplicationById } from '@/content/applications'
import {
  categorySlugMap,
  applicationSlugMap,
  pageSlugMap,
  getApplicationsInCategory,
  getApplicationPath,
  getIdFromSlug,
} from '@/lib/slugs'
import { Hero, CTASection } from '@/components/sections'
import { Section, Container, Card, CardBody } from '@/components/ui'

interface CategoryHubContentProps {
  locale: Locale
  categorySlug: string
}

const sectionText = {
  pt: {
    allApplications: 'Todas as Aplicações',
    learnMore: 'Saber mais',
    ctaTitle: 'Pronto para Começar?',
    ctaSubtitle:
      'Solicite um orçamento gratuito e a nossa equipa técnica recomendará a solução EPDM ideal para o seu projeto.',
    ctaButton: 'Pedir Orçamento Gratuito',
    specs: 'Especificações',
  },
  en: {
    allApplications: 'All Applications',
    learnMore: 'Learn more',
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle:
      'Request a free quote and our technical team will recommend the ideal EPDM solution for your project.',
    ctaButton: 'Request a Free Quote',
    specs: 'Specifications',
  },
}

export function CategoryHubContent({
  locale,
  categorySlug,
}: CategoryHubContentProps): React.JSX.Element {
  const text = sectionText[locale]

  const categoryId = getIdFromSlug(categorySlugMap, categorySlug, locale)
  if (!categoryId) notFound()

  const category = getCategoryById(categoryId)
  if (!category) notFound()

  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const applicationsPath = `/${locale}/${pageSlugMap.applications[locale]}`

  const appIds = getApplicationsInCategory(categoryId)

  return (
    <>
      {/* Hero with breadcrumbs */}
      <Hero
        headline={category.title[locale]}
        subtitle={category.description[locale]}
        stats={[
          {
            value: String(category.applicationCount),
            label: locale === 'pt' ? 'aplicações EPDM' : 'EPDM applications',
          },
          {
            value: '50+',
            label: locale === 'pt' ? 'anos de durabilidade' : 'year lifespan',
          },
          {
            value: '100%',
            label: locale === 'pt' ? 'reciclável' : 'recyclable',
          },
        ]}
        ctaText={text.ctaButton}
        ctaHref={contactPath}
        breadcrumbs={[
          { label: 'Membriko', href: `/${locale}` },
          {
            label: locale === 'pt' ? 'Aplicações' : 'Applications',
            href: applicationsPath,
          },
          { label: category.title[locale] },
        ]}
      />

      {/* Applications grid */}
      <Section bg="elevated">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {text.allApplications} — {category.title[locale]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appIds.map((appId) => {
              const appData = getApplicationById(appId)
              const appPath = getApplicationPath(appId, locale)

              const appSlugPair = applicationSlugMap[appId]
              const appSlug = appSlugPair?.[locale] ?? appId

              if (appData) {
                const appContent = appData[locale]
                return (
                  <Link
                    key={appId}
                    href={appPath}
                    className="group flex flex-col bg-bg-elevated rounded-xl border border-white/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 p-6"
                  >
                    <h3 className="font-semibold text-text text-lg mb-2 group-hover:text-accent transition-colors duration-200">
                      {appContent.hero.headline}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">
                      {appContent.meta.description}
                    </p>
                    {appContent.hero.stats.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {appContent.hero.stats.slice(0, 2).map((stat, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-accent/15 text-accent-light px-2 py-1 rounded"
                          >
                            {stat.value} {stat.label}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-1 mt-4 text-accent text-sm font-medium">
                      <span>{text.learnMore}</span>
                    </div>
                  </Link>
                )
              }

              // Fallback card
              return (
                <Card key={appId}>
                  <CardBody>
                    <h3 className="font-semibold text-text text-lg mb-2">
                      {appSlug.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {locale === 'pt'
                        ? 'Conteúdo detalhado em breve.'
                        : 'Detailed content coming soon.'}
                    </p>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={text.ctaTitle}
        subtitle={text.ctaSubtitle}
        ctaText={text.ctaButton}
        ctaHref={contactPath}
      />
    </>
  )
}
