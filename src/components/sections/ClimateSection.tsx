import { Sun, Droplets, Mountain } from 'lucide-react'
import { Container } from '@/components/ui'
import { type ForwardRefExoticComponent, type RefAttributes } from 'react'
import { type LucideProps } from 'lucide-react'

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>

interface ClimatePoint {
  zone: string
  description: string
}

interface ClimateSectionProps {
  title: string
  points: ClimatePoint[]
}

const ZONE_ICONS: LucideIcon[] = [Sun, Droplets, Mountain]

export function ClimateSection({ title, points }: ClimateSectionProps): React.JSX.Element {
  return (
    <section
      className="py-16 lg:py-24 bg-bg-subtle text-white"
      aria-labelledby="climate-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 id="climate-heading" className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const ZoneIcon = ZONE_ICONS[index % ZONE_ICONS.length]

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl px-6 py-8"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                  <ZoneIcon size={28} className="text-accent" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{point.zone}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{point.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
