import Link from 'next/link'
import Image from 'next/image'
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
  backgroundImage?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  fullViewport?: boolean
}

export function Hero({
  headline,
  subtitle,
  stats,
  ctaText,
  ctaHref,
  breadcrumbs,
  backgroundImage,
  secondaryCtaText,
  secondaryCtaHref,
  fullViewport = false,
}: HeroProps): React.JSX.Element {
  return (
    <section
      className={`relative ${fullViewport ? 'min-h-screen flex flex-col justify-center' : 'py-16 lg:py-24'} text-white overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-bg" />
      )}

      <Container className="relative z-10">
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

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-black hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>

        {/* Stats row — glassmorphism bar */}
        {stats.length > 0 && (
          <div className={`${fullViewport ? 'mt-16' : 'mt-14'} grid grid-cols-2 sm:grid-cols-4 gap-4`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-xl px-5 py-4 text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* Scroll indicator for full viewport hero */}
      {fullViewport && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      )}
    </section>
  )
}
