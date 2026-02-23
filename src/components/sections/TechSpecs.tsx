import { Section, Container } from '@/components/ui'

interface Spec {
  label: string
  value: string
}

interface TechSpecsProps {
  title: string
  specs: Spec[]
}

export function TechSpecs({ title, specs }: TechSpecsProps): React.JSX.Element {
  return (
    <Section bg="white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">{title}</h2>
        </div>

        {/* Specs grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl px-6 py-5"
            >
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                {spec.label}
              </p>
              <p className="text-2xl font-bold text-navy">{spec.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
