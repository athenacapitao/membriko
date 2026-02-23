import { Section, Container, Accordion } from '@/components/ui'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  subtitle?: string
  faqs: FAQ[]
}

export function FAQSection({ title, subtitle, faqs }: FAQSectionProps): React.JSX.Element {
  // Build FAQ schema structured data for search engines
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Section bg="surface">
      <Container>
        {/* FAQ JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Accordion — already a client component */}
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </Container>
    </Section>
  )
}
