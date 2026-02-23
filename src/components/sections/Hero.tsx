import Link from 'next/link'
import { Container } from '@/components/ui'

interface Breadcrumb {
  label: string
  href?: string
}

interface Stat {
  value: string
  label: string
}

interface HeroProps {
  headline: string
  subtitle: string
  stats: Stat[]
  ctaText: string
  ctaHref: string
  breadcrumbs?: Breadcrumb[]
}

export function Hero({
  headline,
  subtitle,
  stats,
  ctaText,
  ctaHref,
  breadcrumbs,
}: HeroProps): React.JSX.Element {
  return (
    <section
      className="relative bg-gradient-to-br from-navy via-navy-light to-navy text-white py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <Container>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1

                return (
                  <li key={index} className="flex items-center gap-2">
                    {index > 0 && (
                      <span aria-hidden="true" className="text-white/40">
                        /
                      </span>
                    )}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-white/90' : ''}>{crumb.label}</span>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}

        {/* Headline and subtitle */}
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
          >
            {headline}
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-10">{subtitle}</p>

          {/* CTA button */}
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-navy hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            {ctaText}
          </Link>
        </div>

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/8 border border-white/15 rounded-xl px-5 py-4 text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
