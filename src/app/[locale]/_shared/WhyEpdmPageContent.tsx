import type { Locale } from '@/lib/i18n'
import { whyEpdm } from '@/content/why-epdm'
import { pageSlugMap } from '@/lib/slugs'
import {
  Hero,
  BenefitsGrid,
  ClimateSection,
  FAQSection,
  CTASection,
} from '@/components/sections'
import { Section, Container, Card, CardBody, Icon, Badge } from '@/components/ui'

interface WhyEpdmPageContentProps {
  locale: Locale
}

export function WhyEpdmPageContent({ locale }: WhyEpdmPageContentProps): React.JSX.Element {
  const content = whyEpdm[locale]
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const applicationsPath = `/${locale}/${pageSlugMap.applications[locale]}`

  const comparisonLabels = {
    feature: locale === 'pt' ? 'Característica' : 'Feature',
    epdm: 'EPDM',
    tpo: 'TPO',
    pvc: 'PVC',
    bitumen: locale === 'pt' ? 'Betume' : 'Bitumen',
  }

  return (
    <>
      {/* Hero */}
      <Hero
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
        stats={[]}
        ctaText={content.cta.primaryButton}
        ctaHref={contactPath}
      />

      {/* Benefits grid */}
      <BenefitsGrid
        title={locale === 'pt' ? 'As 6 Vantagens Técnicas do EPDM' : '6 Technical Advantages of EPDM'}
        subtitle={
          locale === 'pt'
            ? 'Baseadas em dados de normas europeias e estudos independentes'
            : 'Based on data from European standards and independent studies'
        }
        benefits={content.benefits.map((b) => ({
          icon: b.icon,
          title: b.title,
          description: b.detail,
        }))}
      />

      {/* Comparison table */}
      <Section bg="elevated">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.comparisonTable.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.comparisonTable.subtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg-subtle">
                  <th className="px-4 py-4 text-left font-semibold text-text">
                    {comparisonLabels.feature}
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-black bg-accent/80">
                    {comparisonLabels.epdm}
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-text">{comparisonLabels.tpo}</th>
                  <th className="px-4 py-4 text-center font-semibold text-text">{comparisonLabels.pvc}</th>
                  <th className="px-4 py-4 text-center font-semibold text-text">
                    {comparisonLabels.bitumen}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.comparisonTable.metrics.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-bg-elevated' : 'bg-bg-subtle'}
                  >
                    <td className="px-4 py-3 font-medium text-text">{row.metric}</td>
                    <td className="px-4 py-3 text-center bg-accent/10 font-semibold text-accent">
                      {row.epdm}
                    </td>
                    <td className="px-4 py-3 text-center text-text-muted">{row.tpo}</td>
                    <td className="px-4 py-3 text-center text-text-muted">{row.pvc}</td>
                    <td className="px-4 py-3 text-center text-text-muted">{row.bitumen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* 30-year cost analysis */}
      <Section bg="dark">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.costAnalysis.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.costAnalysis.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-text-muted mb-6 leading-relaxed">{content.costAnalysis.description}</p>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-bg-subtle">
                    <th className="px-4 py-3 text-left font-semibold text-text">
                      {locale === 'pt' ? 'Ano' : 'Year'}
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-black bg-accent/80">
                      EPDM
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-text">TPO</th>
                    <th className="px-4 py-3 text-center font-semibold text-text">PVC</th>
                    <th className="px-4 py-3 text-center font-semibold text-text">
                      {locale === 'pt' ? 'Betume' : 'Bitumen'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.costAnalysis.data.map((row, index) => (
                    <tr key={row.year} className={index % 2 === 0 ? 'bg-bg-elevated' : 'bg-bg-subtle'}>
                      <td className="px-4 py-3 font-medium text-text">{row.year}</td>
                      <td className="px-4 py-3 text-center bg-accent/10 font-semibold text-accent">
                        {row.epdm.toLocaleString(locale === 'pt' ? 'pt-PT' : 'en-GB')} €
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted">
                        {row.tpo.toLocaleString(locale === 'pt' ? 'pt-PT' : 'en-GB')} €
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted">
                        {row.pvc.toLocaleString(locale === 'pt' ? 'pt-PT' : 'en-GB')} €
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted">
                        {row.bitumen.toLocaleString(locale === 'pt' ? 'pt-PT' : 'en-GB')} €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-muted italic">{content.costAnalysis.note}</p>
          </div>
        </Container>
      </Section>

      {/* Scientific evidence */}
      <Section bg="elevated">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.scientificEvidence.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.scientificEvidence.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {content.scientificEvidence.items.map((item, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="flex items-start gap-3 mb-3">
                    <Badge variant="accent">{item.year}</Badge>
                    <p className="font-semibold text-text text-sm">{item.source}</p>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">{item.finding}</p>
                  <p className="text-xs text-accent font-medium">{item.significance}</p>
                </CardBody>
              </Card>
            ))}
          </div>

          <p className="text-center text-xs text-text-muted italic">
            {content.scientificEvidence.disclaimer}
          </p>
        </Container>
      </Section>

      {/* Climate advantage */}
      <ClimateSection
        title={content.climateAdvantage.title}
        points={content.climateAdvantage.zones.map((z) => ({
          zone: z.zone,
          description: z.keyBenefit,
        }))}
      />

      {/* Standards & certifications */}
      <Section bg="dark">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              {content.standards.title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {content.standards.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.standards.items.map((item, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="mb-3">
                    <Badge variant="primary">{item.code}</Badge>
                  </div>
                  <h3 className="font-semibold text-text text-base mb-2">{item.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ section */}
      <FAQSection
        title={content.faqs.title}
        faqs={content.faqs.items.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* CTA */}
      <CTASection
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        ctaText={content.cta.primaryButton}
        ctaHref={contactPath}
        secondaryText={content.cta.secondaryButton}
        secondaryHref={applicationsPath}
      />
    </>
  )
}
