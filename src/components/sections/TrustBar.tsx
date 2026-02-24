import { Container } from '@/components/ui'

const MANUFACTURER_NAMES = [
  'Carlisle',
  'Firestone',
  'Elevate',
  'Sika',
  'Soprema',
  'IKO',
] as const

interface TrustBarProps {
  title?: string
}

export function TrustBar({ title }: TrustBarProps): React.JSX.Element {
  return (
    <section className="py-10 bg-bg-subtle border-y border-white/10" aria-label="Fabricantes parceiros">
      <Container>
        {title && (
          <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-wider mb-8">
            {title}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {MANUFACTURER_NAMES.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center w-32 h-12 bg-white/5 rounded-lg border border-white/10 px-4"
              aria-label={name}
            >
              <span className="text-sm font-semibold text-text-muted">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
