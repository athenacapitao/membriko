import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { getApplicationById } from '@/content/applications'
import { getCategoryById } from '@/content/categories'
import {
  categorySlugMap,
  applicationSlugMap,
  pageSlugMap,
  getApplicationCategory,
  getApplicationPath,
  getIdFromSlug,
} from '@/lib/slugs'
import {
  Hero,
  ProblemSolution,
  BenefitsGrid,
  TechSpecs,
  InstallationTechniques,
  ComparisonSection,
  ClimateSection,
  FAQSection,
  CTASection,
  RelatedApps,
} from '@/components/sections'
import { Section, Container, ProcessSteps } from '@/components/ui'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'

interface ApplicationDetailContentProps {
  locale: Locale
  categorySlug: string
  appSlug: string
}

const sectionLabels = {
  pt: {
    installation: 'Processo de Instalação',
    techniques: 'Técnicas de Instalação',
    comparison: 'Comparação com Outras Membranas',
    relatedApps: 'Aplicações Relacionadas',
  },
  en: {
    installation: 'Installation Process',
    techniques: 'Installation Techniques',
    comparison: 'Comparison with Other Membranes',
    relatedApps: 'Related Applications',
  },
}

export function ApplicationDetailContent({
  locale,
  categorySlug,
  appSlug,
}: ApplicationDetailContentProps): React.JSX.Element {
  const labels = sectionLabels[locale]

  // Resolve IDs from slugs
  const categoryId = getIdFromSlug(categorySlugMap, categorySlug, locale)
  if (!categoryId) notFound()

  const appId = getIdFromSlug(applicationSlugMap, appSlug, locale)
  if (!appId) notFound()

  // Verify the app belongs to the given category
  const appCategory = getApplicationCategory(appId)
  if (appCategory !== categoryId) notFound()

  const appData = getApplicationById(appId)
  if (!appData) notFound()

  const category = getCategoryById(categoryId)
  if (!category) notFound()

  const content = appData[locale]

  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const applicationsPath = `/${locale}/${pageSlugMap.applications[locale]}`
  const categoryPath = `/${locale}/${pageSlugMap.applications[locale]}/${categorySlug}`

  const BASE_URL = 'https://membriko.pt'
  const currentPath = `/${locale}/${pageSlugMap.applications[locale]}/${categorySlug}/${appSlug}`
  const currentUrl = `${BASE_URL}${currentPath}`

  // Build related apps list from relatedSlugs (internal IDs)
  const relatedApps = content.relatedSlugs
    .map((relatedId) => {
      const relatedData = getApplicationById(relatedId)
      if (!relatedData) return null
      const relatedContent = relatedData[locale]
      return {
        title: relatedContent.hero.headline,
        description: relatedContent.meta.description,
        href: getApplicationPath(relatedId, locale),
        icon: 'FileText',
      }
    })
    .filter((app): app is NonNullable<typeof app> => app !== null)

  return (
    <>
      {/* JSON-LD structured data */}
      <ServiceSchema
        name={content.meta.title}
        description={content.meta.description}
        url={currentUrl}
      />
      <FAQSchema
        faqs={content.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Membriko', url: `${BASE_URL}/${locale}` },
          {
            name: locale === 'pt' ? 'Aplicações' : 'Applications',
            url: `${BASE_URL}${applicationsPath}`,
          },
          { name: category.title[locale], url: `${BASE_URL}${categoryPath}` },
          { name: content.hero.headline, url: currentUrl },
        ]}
      />

      {/* Hero with breadcrumbs */}
      <Hero
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
        stats={content.hero.stats}
        ctaText={locale === 'pt' ? 'Pedir Orçamento Gratuito' : 'Request a Free Quote'}
        ctaHref={contactPath}
        breadcrumbs={[
          { label: 'Membriko', href: `/${locale}` },
          {
            label: locale === 'pt' ? 'Aplicações' : 'Applications',
            href: applicationsPath,
          },
          { label: category.title[locale], href: categoryPath },
          { label: content.hero.headline },
        ]}
      />

      {/* Problem / Solution */}
      <ProblemSolution
        problem={content.problem}
        solution={content.solution}
      />

      {/* Benefits grid */}
      <BenefitsGrid
        title={locale === 'pt' ? 'Vantagens do EPDM' : 'EPDM Benefits'}
        benefits={content.benefits}
      />

      {/* Tech specs */}
      <TechSpecs
        title={locale === 'pt' ? 'Especificações Técnicas' : 'Technical Specifications'}
        specs={content.specs}
      />

      {/* Installation process steps */}
      <Section bg="surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">{labels.installation}</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <ProcessSteps steps={content.installationSteps} />
          </div>
        </Container>
      </Section>

      {/* Installation techniques */}
      <InstallationTechniques
        title={labels.techniques}
        techniques={content.techniques}
      />

      {/* Comparison section */}
      <ComparisonSection
        title={labels.comparison}
        rows={content.comparison}
      />

      {/* Climate section */}
      <ClimateSection
        title={
          locale === 'pt'
            ? 'Desempenho no Clima Português'
            : 'Performance in the Portuguese Climate'
        }
        points={content.climate}
      />

      {/* FAQ section */}
      <FAQSection
        title={locale === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
        faqs={content.faqs}
      />

      {/* CTA */}
      <CTASection
        title={locale === 'pt' ? 'Pronto para Começar?' : 'Ready to Get Started?'}
        subtitle={
          locale === 'pt'
            ? 'Solicite um orçamento gratuito e sem compromisso. A nossa equipa técnica avalia o seu projeto e apresenta a solução EPDM ideal.'
            : 'Request a free, no-obligation quote. Our technical team assesses your project and recommends the ideal EPDM solution.'
        }
        ctaText={locale === 'pt' ? 'Pedir Orçamento Gratuito' : 'Request a Free Quote'}
        ctaHref={contactPath}
      />

      {/* Related apps */}
      {relatedApps.length > 0 && (
        <RelatedApps
          title={labels.relatedApps}
          apps={relatedApps}
        />
      )}
    </>
  )
}
