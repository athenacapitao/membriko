'use client'

import { useEffect, useRef } from 'react'
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
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const imageEl = imageRef.current
    if (!section || !imageEl || !backgroundImage) return

    // Capture the initial viewport height in pixels — this never changes,
    // so the image container size is locked regardless of address bar state
    const lockedHeight = window.innerHeight
    section.style.height = `${lockedHeight}px`
    imageEl.style.height = `${lockedHeight + 300}px`
    imageEl.style.top = '-150px'

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const isMobile = window.innerHeight > window.innerWidth
    const factor = isMobile ? 0.35 : 0.5

    let ticking = false

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (imageEl) {
            imageEl.style.transform = `translate3d(0, ${window.scrollY * factor}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    // On orientation change, re-lock to new dimensions
    function onOrientationChange() {
      // Small delay for the browser to settle after rotation
      setTimeout(() => {
        const newHeight = window.innerHeight
        section!.style.height = `${newHeight}px`
        imageEl!.style.height = `${newHeight + 120}px`
      }, 200)
    }

    window.addEventListener('orientationchange', onOrientationChange)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('orientationchange', onOrientationChange)
    }
  }, [backgroundImage])

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col justify-center text-white overflow-hidden ${fullViewport ? '' : 'sm:!h-auto sm:py-16 lg:py-24 sm:block'}`}
      style={{
        // Fallback before JS hydrates — svh is stable
        height: '100svh',
        clipPath: backgroundImage ? 'inset(0)' : undefined,
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background image — fixed in place, only parallax moves it */}
      {backgroundImage ? (
        <>
          <div
            ref={imageRef}
            className="fixed left-0 right-0 will-change-transform"
            style={{ top: '-60px', height: '100svh' }}
          >
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="100vw"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBf/EABgQAAMBAQAAAAAAAAAAAAAAAAABAhES/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwEC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAECESH/2gAMAwEAAhEDEQA/AOfFDTRjhvR5bwOxaRw/SIDWRnF1/9k="
            />
          </div>
          <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
          >
            {headline}
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-white/80 leading-relaxed mb-8 sm:mb-10">{subtitle}</p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold rounded-lg bg-accent text-black hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>

        {/* Stats row — glassmorphism bar */}
        {stats.length > 0 && (
          <div className={`${fullViewport ? 'mt-10 sm:mt-16' : 'mt-10 sm:mt-14'} grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">{stat.label}</div>
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
