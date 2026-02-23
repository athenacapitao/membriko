import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function RenovationsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const services = [
    {
      title: locale === 'pt' ? 'Remoção de Old Coating' : 'Old Coating Removal',
      desc: locale === 'pt' 
        ? 'Remoção segura de membranas antigas, betume ou coatingsdanificados antes da nova aplicação.'
        : 'Safe removal of old membranes, bitumen or damaged coatings before new application.',
      icon: '🔨'
    },
    {
      title: locale === 'pt' ? 'Reimpermeabilização' : 'Re-waterproofing',
      desc: locale === 'pt'
        ? 'Aplicação de nova membrana EPDM sobre substrato existente ouapós remoção completa.'
        : 'Application of new EPDM membrane over existing substrate or after complete removal.',
      icon: '🛡️'
    },
    {
      title: locale === 'pt' ? 'Reparação de Fugas' : 'Leak Repair',
      desc: locale === 'pt'
        ? 'Diagnóstico e reparação de infiltrações em coberturas existentes.'
        : 'Diagnosis and repair of leaks in existing roofs.',
      icon: '🔧'
    },
    {
      title: locale === 'pt' ? 'Reforço Estrutural' : 'Structural Reinforcement',
      desc: locale === 'pt'
        ? 'Reforço de estrutura de cobertura antes de impermeabilização.'
        : 'Roof structure reinforcement before waterproofing.',
      icon: '🏗️'
    },
  ]

  const benefits = [
    locale === 'pt' ? 'Evite danos maiores com manutenção atempada' : 'Avoid major damage with timely maintenance',
    locale === 'pt' ? 'Reduza custos a longo prazo' : 'Reduce long-term costs',
    locale === 'pt' ? 'Prolongue a vida útil da sua cobertura' : 'Extend the lifespan of your roof',
    locale === 'pt' ? 'Melhore a eficiência energética' : 'Improve energy efficiency',
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {locale === 'pt' ? 'Renovação de Coberturas' : 'Roof Renovations'}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              {locale === 'pt'
                ? 'Dê nova vida à sua cobertura com os nossos serviços de renovação EPDM.'
                : 'Give your roof a new life with our EPDM renovation services.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            {locale === 'pt' ? 'Os Nossos Serviços' : 'Our Services'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            {locale === 'pt' ? 'Porquê Renovar?' : 'Why Renovate?'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {locale === 'pt' ? 'Precisa de Renovar a Sua Cobertura?' : 'Need to Renovate Your Roof?'}
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            {locale === 'pt'
              ? 'Solicite uma inspeção gratuita e descubra as opções disponíveis'
              : 'Request a free inspection and discover available options'}
          </p>
          <Link href={`/${locale}/quote`} className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            {locale === 'pt' ? 'Pedir Orçamento' : 'Request Quote'}
          </Link>
        </div>
      </section>
    </div>
  )
}
