import { Section, Container, ComparisonTable } from '@/components/ui'

// Re-export the row type so consumers don't need to import from ui directly
interface ComparisonRow {
  feature: string
  epdm: string
  alternatives: { name: string; value: string }[]
}

interface ComparisonSectionProps {
  title: string
  subtitle?: string
  rows: ComparisonRow[]
}

export function ComparisonSection({
  title,
  subtitle,
  rows,
}: ComparisonSectionProps): React.JSX.Element {
  return (
    <Section bg="surface">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        <ComparisonTable rows={rows} />
      </Container>
    </Section>
  )
}

export type { ComparisonRow }
