import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { Hero, CTASection } from '@/components/sections'
import { Section, Container } from '@/components/ui'

const projectsMeta = {
  pt: {
    title: 'Projetos — Obras EPDM em Portugal',
    description:
      'Galeria de projetos de impermeabilização EPDM realizados pela Membriko em Portugal. Coberturas, piscinas, reservatórios e mais. Em breve.',
    keywords: ['projetos EPDM', 'obras impermeabilização', 'portfolio membriko'],
    headline: 'Os Nossos Projetos',
    subtitle: 'Galeria de obras de impermeabilização EPDM realizadas em Portugal — em breve.',
    comingSoon: 'O nosso portfólio de projetos está em preparação. Em breve partilharemos estudos de caso detalhados das obras de impermeabilização EPDM que realizámos em Portugal.',
    contactText: 'Enquanto isso, solicite um orçamento gratuito para o seu projeto.',
    ctaText: 'Pedir Orçamento Grátis',
    contactPath: 'contacto',
  },
  en: {
    title: 'Projects — EPDM Works in Portugal',
    description:
      'Gallery of EPDM waterproofing projects completed by Membriko in Portugal. Roofs, pools, reservoirs and more. Coming soon.',
    keywords: ['EPDM projects', 'waterproofing works', 'membriko portfolio'],
    headline: 'Our Projects',
    subtitle: 'Gallery of EPDM waterproofing projects completed in Portugal — coming soon.',
    comingSoon: 'Our project portfolio is in preparation. We will soon share detailed case studies of EPDM waterproofing works we have completed across Portugal.',
    contactText: 'In the meantime, request a free quote for your project.',
    ctaText: 'Request a Free Quote',
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

  const meta = projectsMeta[locale]

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    locale,
    path: `/${locale}/projetos`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/${locale === 'pt' ? 'projects' : 'projetos'}`,
    keywords: meta.keywords,
  })
}

export default async function ProjetosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const text = projectsMeta[locale]
  const contactPath = `/${locale}/${text.contactPath}`

  return (
    <>
      <Hero
        headline={text.headline}
        subtitle={text.subtitle}
        stats={[
          { value: '500+', label: locale === 'pt' ? 'projetos concluídos' : 'projects completed' },
        ]}
        ctaText={text.ctaText}
        ctaHref={contactPath}
        breadcrumbs={[
          { label: 'Membriko', href: `/${locale}` },
          { label: locale === 'pt' ? 'Projetos' : 'Projects' },
        ]}
      />

      <Section bg="surface">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏗️</span>
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
