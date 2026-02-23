import { Section, Container, Card, CardBody, Icon } from '@/components/ui'

interface Benefit {
  icon: string
  title: string
  description: string
}

interface BenefitsGridProps {
  title: string
  subtitle?: string
  benefits: Benefit[]
}

export function BenefitsGrid({ title, subtitle, benefits }: BenefitsGridProps): React.JSX.Element {
  return (
    <Section bg="surface">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Benefits grid — 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardBody>
                {/* Icon container */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={24} className="text-primary" />
                </div>

                <h3 className="font-semibold text-navy text-lg mb-2">{benefit.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{benefit.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
