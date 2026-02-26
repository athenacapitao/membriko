import type { Locale } from '@/lib/i18n'
import { categories } from '@/content/categories'
import { getCategoryPath, pageSlugMap } from '@/lib/slugs'
import { Hero, CTASection } from '@/components/sections'
import { Section, Container, CategoryCard } from '@/components/ui'

interface ApplicationsHubContentProps {
  locale: Locale
}

const hubText = {
  pt: {
    headline: 'Todas as Aplicações EPDM',
    subtitle:
      'A membrana EPDM adapta-se a praticamente qualquer desafio de impermeabilização. Explore as 8 categorias de aplicação e encontre a solução para o seu projeto.',
    ctaText: 'Pedir Orçamento Gratuito',
    totalLabel: 'aplicações',
    sectionTitle: 'Categorias de Aplicação',
    sectionSubtitle:
      'Selecione uma categoria para ver todas as aplicações EPDM disponíveis, com especificações técnicas detalhadas.',
  },
  en: {
    headline: 'All EPDM Applications',
    subtitle:
      'EPDM membrane adapts to virtually any waterproofing challenge. Explore the 8 application categories and find the solution for your project.',
    ctaText: 'Request a Free Quote',
    totalLabel: 'applications',
    sectionTitle: 'Application Categories',
    sectionSubtitle:
      'Select a category to view all available EPDM applications, with detailed technical specifications.',
  },
}

export function ApplicationsHubContent({ locale }: ApplicationsHubContentProps): React.JSX.Element {
  const text = hubText[locale]
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`

  const totalApplications = categories.reduce((sum, cat) => sum + cat.applicationCount, 0)

  return (
    <>
      {/* Hero */}
      <Hero
        headline={text.headline}
        subtitle={text.subtitle}
        stats={[
          {
            value: String(totalApplications),
            label: text.totalLabel,
          },
          {
            value: '8',
            label: locale === 'pt' ? 'categorias' : 'categories',
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
        ctaText={text.ctaText}
        ctaHref={contactPath}
      />

      {/* Categories grid */}
      <Section bg="elevated">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {text.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {text.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                icon={category.icon}
                title={category.title[locale]}
                description={category.description[locale]}
                count={category.applicationCount}
                href={getCategoryPath(category.id, locale)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={
          locale === 'pt'
            ? 'Não encontrou a sua aplicação?'
            : "Didn't find your application?"
        }
        subtitle={
          locale === 'pt'
            ? 'Contacte-nos — o EPDM adapta-se a praticamente qualquer superfície e geometria. A nossa equipa técnica encontra a solução certa para o seu projeto específico.'
            : "Contact us — EPDM adapts to virtually any surface and geometry. Our technical team will find the right solution for your specific project."
        }
        ctaText={text.ctaText}
        ctaHref={contactPath}
      />
    </>
  )
}
