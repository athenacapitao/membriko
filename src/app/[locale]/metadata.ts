import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Home' })

  return {
    title: locale === 'pt' 
      ? 'Membriko - A Melhor Solução EPDM de Portugal' 
      : 'Membriko - Portugal\'s Best EPDM Solution',
    description: locale === 'pt'
      ? '50+ anos de durabilidade, resistência total, 100% reciclável. Especialistas em membranas EPDM para o mercado português.'
      : '50+ year lifespan, total resistance, 100% recyclable. EPDM membrane specialists for the Portuguese market.',
    keywords: locale === 'pt'
      ? 'EPDM, membrana EPDM, impermeabilização, telhados planos, Portugal, construção'
      : 'EPDM, EPDM membrane, waterproofing, flat roofs, Portugal, construction',
    openGraph: {
      title: locale === 'pt'
        ? 'Membriko - A Melhor Solução EPDM de Portugal'
        : 'Membriko - Portugal\'s Best EPDM Solution',
      description: locale === 'pt'
        ? '50+ anos de durabilidade, resistência total, 100% reciclável. Especialistas em membranas EPDM para o mercado português.'
        : '50+ year lifespan, total resistance, 100% recyclable. EPDM membrane specialists for the Portuguese market.',
      type: 'website',
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      url: 'https://membriko.vercel.app',
      siteName: 'Membriko',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'pt'
        ? 'Membriko - A Melhor Solução EPDM de Portugal'
        : 'Membriko - Portugal\'s Best EPDM Solution',
      description: locale === 'pt'
        ? '50+ anos de durabilidade, resistência total, 100% reciclável. Especialistas em membranas EPDM para o mercado português.'
        : '50+ year lifespan, total resistance, 100% recyclable. EPDM membrane specialists for the Portuguese market.',
    },
    alternates: {
      canonical: 'https://membriko.vercel.app',
      languages: {
        'pt': 'https://membriko.vercel.app/pt',
        'en': 'https://membriko.vercel.app/en',
      },
    },
  }
}
