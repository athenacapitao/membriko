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

  // Featured applications: take the first 6 from the registry that have full content
  const featuredApps = allApplications.slice(0, 6)

  return (
    <>
      {/* 1. Hero — gradient navy bg */}
      <section
        className="relative bg-gradient-to-br from-navy via-navy-light to-navy text-white py-16 lg:py-24"
        aria-labelledby="homepage-hero-heading"
      >
        <Container>
          <div className="max-w-3xl">
            <h1
              id="homepage-hero-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              {content.hero.headline}
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-10">
              {content.hero.subtitle}
            </p>

            {/* Two CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={contactPath}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-navy hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {content.hero.ctaQuote}
              </Link>
              <Link
                href={applicationsPath}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {content.hero.ctaApps}
              </Link>
            </div>
          </div>

          {/* Stats row */}
          {content.hero.stats.length > 0 && (
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {content.hero.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/8 border border-white/15 rounded-xl px-5 py-4 text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* 2. TrustBar */}
      <TrustBar title={content.trustBar.title} />

      {/* 3. ProblemSolution */}
      <ProblemSolution
        problem={content.problemSolution.problem}
        solution={content.problemSolution.solution}
      />

      {/* 4. Categories grid */}
      <Section bg="surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
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
        <Section bg="white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
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
                    className="group flex flex-col bg-white rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-6"
                  >
                    <h3 className="font-semibold text-navy text-lg mb-2 group-hover:text-primary transition-colors duration-200">
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
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors duration-200"
              >
                {locale === 'pt' ? 'Ver Todas as Aplicações' : 'View All Applications'}
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Why EPDM preview — 4 benefit cards + link */}
      <Section bg="surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={point.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-base mb-1">{point.title}</h3>
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

      {/* 7. ClimateSection — 3 Portugal zones */}
      <ClimateSection
        title={content.climateSection.title}
        points={content.climateSection.zones}
      />

      {/* 8. Social proof — testimonials + project counter */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              {content.socialProof.title}
            </h2>
            <p className="text-2xl font-bold text-primary mt-2">
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
                    <p className="font-semibold text-navy text-sm">{testimonial.author}</p>
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
