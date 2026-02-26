'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { faq } from '@/content/faq'
import { pageSlugMap } from '@/lib/slugs'
import { Hero, CTASection } from '@/components/sections'
import { Section, Container, Accordion } from '@/components/ui'

interface FaqPageContentProps {
  locale: Locale
}

export function FaqPageContent({ locale }: FaqPageContentProps): React.JSX.Element {
  const content = faq[locale]
  const contactPath = `/${locale}/${pageSlugMap.contact[locale]}`
  const [activeCategory, setActiveCategory] = useState(content.categories[0]?.id ?? 'general')

  const activeItems =
    content.categories.find((c) => c.id === activeCategory)?.items ?? []

  return (
    <>
      {/* Hero */}
      <Hero
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
        stats={[]}
        ctaText={content.cta.buttonText}
        ctaHref={contactPath}
      />

      {/* Tab navigation + Accordion */}
      <Section bg="elevated">
        <Container>
          {/* Category tab bar */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center" role="tablist">
            {content.categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 sm:px-5 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 min-h-[44px] ${
                  activeCategory === category.id
                    ? 'bg-accent text-black'
                    : 'bg-white/10 border border-white/10 text-text-muted hover:border-accent/30 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ accordion for active category */}
          <div
            className="max-w-3xl mx-auto"
            role="tabpanel"
            aria-label={activeCategory}
          >
            <Accordion items={activeItems} />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        ctaText={content.cta.buttonText}
        ctaHref={contactPath}
      />
    </>
  )
}
