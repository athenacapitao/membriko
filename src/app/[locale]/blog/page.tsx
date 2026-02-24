import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { Hero, CTASection } from '@/components/sections'
import { Section, Container } from '@/components/ui'

const blogMeta = {
  pt: {
    title: 'Blog — Impermeabilização EPDM',
    description:
      'Artigos técnicos sobre impermeabilização EPDM, manutenção de coberturas, soluções para piscinas e mais. Em breve na Membriko.',
    keywords: ['blog impermeabilização', 'artigos EPDM', 'membriko blog'],
    headline: 'Blog Membriko',
    subtitle: 'Artigos técnicos sobre impermeabilização EPDM — em breve.',
    comingSoon: 'O nosso blog está em preparação. Em breve publicaremos artigos técnicos, guias de instalação e estudos de caso sobre impermeabilização EPDM em Portugal.',
    contactText: 'Enquanto isso, entre em contacto para falar com os nossos especialistas.',
    ctaText: 'Contactar a Membriko',
    contactPath: 'contacto',
  },
  en: {
    title: 'Blog — EPDM Waterproofing',
    description:
      'Technical articles on EPDM waterproofing, roof maintenance, pool solutions and more. Coming soon from Membriko.',
    keywords: ['waterproofing blog', 'EPDM articles', 'membriko blog'],
    headline: 'Membriko Blog',
    subtitle: 'Technical articles on EPDM waterproofing — coming soon.',
    comingSoon: 'Our blog is in preparation. We will soon publish technical articles, installation guides and case studies on EPDM waterproofing in Portugal.',
    contactText: 'In the meantime, get in touch to speak with our specialists.',
    ctaText: 'Contact Membriko',
    contactPath: 'contact',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const meta = blogMeta[locale]

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    locale,
    path: `/${locale}/blog`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/blog`,
    keywords: meta.keywords,
  })
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const text = blogMeta[locale]
  const contactPath = `/${locale}/${text.contactPath}`

  return (
    <>
      <Hero
        headline={text.headline}
        subtitle={text.subtitle}
        stats={[]}
        ctaText={text.ctaText}
        ctaHref={contactPath}
        breadcrumbs={[
          { label: 'Membriko', href: `/${locale}` },
          { label: 'Blog' },
        ]}
      />

      <Section bg="elevated">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📝</span>
            </div>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              {text.comingSoon}
            </p>
            <p className="text-base text-text-muted">{text.contactText}</p>
          </div>
        </Container>
      </Section>

      <CTASection
        title={text.ctaText}
        subtitle={text.contactText}
        ctaText={text.ctaText}
        ctaHref={contactPath}
      />
    </>
  )
}
