import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { homepage } from '@/content/homepage'
import { categories } from '@/content/categories'
import { allApplications } from '@/content/applications'
import { getCategoryPath, getApplicationPath, pageSlugMap } from '@/lib/slugs'
import {
  Hero,
  TrustBar,
  ProblemSolution,
  BenefitsGrid,
  ClimateSection,
  CTASection,
} from '@/components/sections'
import { Section, Container, CategoryCard, Card, CardBody, Icon } from '@/components/ui'

interface HomepageContentProps {
  locale: Locale
}

export function HomepageContent({ locale }: HomepageContentProps): React.JSX.Element {
  const content = homepage[locale]
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const applicationsPath = `/${locale}/${pageSlugMap.applications[locale]}`
  const whyEpdmPath = `/${locale}/${pageSlugMap['why-epdm'][locale]}`

  const featuredApps = allApplications.slice(0, 6)

  return (
    <>
      {/* 1. Hero — full viewport with background image */}
      <Hero
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
        stats={content.hero.stats}
        ctaText={content.hero.ctaQuote}
        ctaHref={contactPath}
        secondaryCtaText={content.hero.ctaApps}
        secondaryCtaHref={applicationsPath}
        backgroundImage="/images/hero.jpg"
        fullViewport
      />

      {/* 2. TrustBar */}
      <TrustBar title={content.trustBar.title} />

      {/* 3. ProblemSolution */}
      <ProblemSolution
        problem={content.problemSolution.problem}
        solution={content.problemSolution.solution}
      />

      {/* 4. Categories grid */}
      <Section bg="elevated">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.categoriesSection.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.categoriesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* 5. Featured applications */}
      {featuredApps.length > 0 && (
        <Section bg="dark">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                {content.featuredSection.title}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                {content.featuredSection.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredApps.map((app) => {
                const appContent = app[locale]
                return (
                  <Link
                    key={app.id}
                    href={getApplicationPath(app.id, locale)}
                    className="group flex flex-col bg-bg-elevated rounded-xl border border-white/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 p-6"
                  >
                    <h3 className="font-semibold text-text text-lg mb-2 group-hover:text-accent transition-colors duration-200">
                      {appContent.hero.headline}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1">
                      {appContent.hero.subtitle}
                    </p>
                  </Link>
                )
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href={applicationsPath}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
              >
                {locale === 'pt' ? 'Ver Todas as Aplicações' : 'View All Applications'}
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Why EPDM preview — 4 benefit cards + link */}
      <Section bg="elevated">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.whyEpdmPreview.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.whyEpdmPreview.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {content.whyEpdmPreview.points.slice(0, 4).map((point, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Icon name={point.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text text-base mb-1">{point.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={whyEpdmPath}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
            >
              {content.whyEpdmPreview.ctaText}
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7. ClimateSection */}
      <ClimateSection
        title={content.climateSection.title}
        points={content.climateSection.zones}
      />

      {/* 8. Social proof — testimonials + project counter */}
      <Section bg="dark">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.socialProof.title}
            </h2>
            <p className="text-2xl font-bold text-accent mt-2">
              {content.socialProof.projectCount}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.socialProof.testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardBody>
                  <blockquote className="text-text-muted text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <footer>
                    <p className="font-semibold text-text text-sm">{testimonial.author}</p>
                    <p className="text-text-muted text-xs">{testimonial.role}</p>
                  </footer>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. CTASection */}
      <CTASection
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        ctaText={content.cta.buttonText}
        ctaHref={contactPath}
      />
    </>
  )
}
