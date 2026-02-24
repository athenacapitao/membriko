import Link from 'next/link'
import { Container } from '@/components/ui'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryText?: string
  secondaryHref?: string
}

export function CTASection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryText,
  secondaryHref,
}: CTASectionProps): React.JSX.Element {
  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-bg-elevated via-bg-subtle to-bg-elevated border-t border-white/10 text-white"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-accent text-black hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {ctaText}
            </Link>

            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="text-base font-semibold text-text-muted hover:text-white underline underline-offset-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
