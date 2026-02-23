import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections'
import { ContactPageContent } from '../_shared/ContactPageContent'

const contactMeta = {
  pt: {
    title: 'Pedir Orçamento Gratuito',
    description:
      'Solicite um orçamento gratuito e sem compromisso para impermeabilização EPDM em Portugal. Resposta em menos de 24 horas.',
    keywords: ['orçamento EPDM', 'contacto Membriko', 'pedido impermeabilização'],
  },
  en: {
    title: 'Request a Free Quote',
    description:
      'Request a free, no-obligation quote for EPDM waterproofing in Portugal. Response within 24 hours.',
    keywords: ['EPDM quote', 'contact Membriko', 'waterproofing quote'],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}

  const meta = contactMeta[locale]

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    locale,
    path: `/${locale}/contacto`,
    alternatePath: `/${locale === 'pt' ? 'en' : 'pt'}/${locale === 'pt' ? 'contact' : 'contacto'}`,
    keywords: meta.keywords,
  })
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <>
      <Hero
        headline={locale === 'pt' ? 'Pedir Orçamento Gratuito' : 'Request a Free Quote'}
        subtitle={
          locale === 'pt'
            ? 'Preencha o formulário abaixo e a nossa equipa responde em menos de 24 horas com uma proposta personalizada.'
            : 'Fill in the form below and our team will respond within 24 hours with a personalised proposal.'
        }
        stats={[]}
        ctaText=""
        ctaHref="#form"
        breadcrumbs={[
          { label: 'Membriko', href: `/${locale}` },
          { label: locale === 'pt' ? 'Contacto' : 'Contact' },
        ]}
      />
      <ContactPageContent locale={locale} />
    </>
  )
}
