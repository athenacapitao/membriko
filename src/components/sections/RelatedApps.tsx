import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Section, Container, Icon } from '@/components/ui'

interface RelatedApp {
  title: string
  description: string
  href: string
  icon: string
}

interface RelatedAppsProps {
  title: string
  apps: RelatedApp[]
}

export function RelatedApps({ title, apps }: RelatedAppsProps): React.JSX.Element {
  return (
    <Section bg="white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">{title}</h2>
        </div>

        {/* Apps grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <Link
              key={index}
              href={app.href}
              className="group flex flex-col bg-white rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                <Icon name={app.icon} size={24} className="text-primary" />
              </div>

              <h3 className="font-semibold text-navy text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                {app.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">{app.description}</p>

              {/* Link indicator */}
              <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
                <span>Saber mais</span>
                <ChevronRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
