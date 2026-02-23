import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function SolarPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const benefits = [
    {
      title: locale === 'pt' ? 'Compatibilidade Total' : 'Total Compatibility',
      desc: locale === 'pt'
        ? 'EPDM é completamente compatível com sistemas de montagem fotovoltaicos.'
        : 'EPDM is completely compatible with photovoltaic mounting systems.',
      icon: '✓'
    },
    {
      title: locale === 'pt' ? 'Sem Perfurações' : 'No Penetrations',
      desc: locale === 'pt'
        ? 'Sistemas de lastro não requerem perfuração da membrana, mantendo a garantia.'
        : 'Ballast systems require no membrane perforation, maintaining warranty.',
      icon: '✓'
    },
    {
      title: locale === 'pt' ? 'Resistência UV' : 'UV Resistance',
      desc: locale === 'pt'
        ? 'Membrana resiste à exposição solar constante sob os painéis.'
        : 'Membrane withstands constant sun exposure under panels.',
      icon: '✓'
    },
    {
      title: locale === 'pt' ? 'Fácil Manutenção' : 'Easy Maintenance',
      desc: locale === 'pt'
        ? 'Acesso fácil para manutenção dos painéis solares.'
        : 'Easy access for solar panel maintenance.',
      icon: '✓'
    },
  ]

  const systems = [
    {
      title: locale === 'pt' ? 'Sistema de Lastro' : 'Ballast System',
      desc: locale === 'pt'
        ? 'Painéisfixados com pesos, sem perfuração. Ideal para coberturas planas.'
        : 'Panels fixed with weights, no perforation. Ideal for flat roofs.',
    },
    {
      title: locale === 'pt' ? 'Sistema de Fixação' : 'Fixing System',
      desc: locale === 'pt'
        ? 'Fixação mecánica com perfis especiais, mínimos pontos de penetração.'
        : 'Mechanical fixing with special profiles, minimal penetration points.',
    },
    {
      title: locale === 'pt' ? 'Sistema Integrado' : 'Integrated System',
      desc: locale === 'pt'
        ? 'Painéis integrados na cobertura, doble função impermeabilização/energia.'
        : 'Panels integrated in roof, waterproofing/energy dual function.',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {locale === 'pt' ? 'Integração Solar' : 'Solar Integration'}
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-900">
              {locale === 'pt'
                ? 'Combine impermeabilização EPDM com produção de energia solar.'
                : 'Combine EPDM waterproofing with solar energy production.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {locale === 'pt' ? 'Porquê Combinar?' : 'Why Combine?'}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600">
            {locale === 'pt'
              ? 'EPDM e painéis solares são a combinação perfeita para coberturas planas'
              : 'EPDM and solar panels are the perfect combination for flat roofs'}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border">
                <div className="text-green-500 text-2xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            {locale === 'pt' ? 'Sistemas de Instalação' : 'Installation Systems'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {systems.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {locale === 'pt' ? 'Instale Painis Solares na Sua Cobertura' : 'Install Solar Panels on Your Roof'}
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            {locale === 'pt'
              ? 'Uma cobertura EPDM preparada para solar aumenta o valor do seu imóvel'
              : 'An EPDM roof ready for solar increases your property value'}
          </p>
          <Link href={`/${locale}/quote`} className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            {locale === 'pt' ? 'Pedir Orçamento' : 'Request Quote'}
          </Link>
        </div>
      </section>
    </div>
  )
}
