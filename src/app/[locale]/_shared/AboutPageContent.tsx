import type { Locale } from '@/lib/i18n'
import { about } from '@/content/about'
import { pageSlugMap } from '@/lib/slugs'
import { Hero, CTASection } from '@/components/sections'
import { Section, Container, Card, CardBody, Icon, Badge } from '@/components/ui'

interface AboutPageContentProps {
  locale: Locale
}

export function AboutPageContent({ locale }: AboutPageContentProps): React.JSX.Element {
  const content = about[locale]
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`

  return (
    <>
      {/* Hero */}
      <Hero
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
        stats={[]}
        ctaText={content.cta.buttonText}
        ctaHref={contactPath}
      />

      {/* Mission statement */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              {content.mission.title}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {content.mission.description}
            </p>
            <p className="text-base text-text-muted leading-relaxed italic border-l-4 border-primary pl-4 text-left">
              {content.mission.vision}
            </p>
          </div>
        </Container>
      </Section>

      {/* Values grid — 4 cards */}
      <Section bg="surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">
              {content.values.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.values.items.map((value, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={value.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-2">{value.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services grid — 4 cards */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              {content.services.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.services.items.map((service, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-1">{service.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {service.applications.length > 0 && (
                    <ul className="space-y-1 pl-4">
                      {service.applications.map((app, appIndex) => (
                        <li
                          key={appIndex}
                          className="text-text-muted text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section bg="surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              {content.certifications.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.certifications.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.certifications.items.map((cert, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="mb-3">
                    <Badge variant="primary">{cert.code}</Badge>
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-2">{cert.name}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{cert.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose Membriko — 4 points */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">
              {content.whyChoose.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.whyChoose.points.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-surface rounded-xl border border-border">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={point.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-base mb-2">{point.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        ctaText={content.cta.buttonText}
        ctaHref={contactPath}
      />
    </>
  )
}
