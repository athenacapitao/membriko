import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function WhyEPDMPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  const comparisons = [
    { metric: locale === 'pt' ? 'Vida Útil' : 'Lifespan', epdm: '30-50 anos', tpo: '20-30 anos', pvc: '20-30 anos', bitume: '15-25 anos' },
    { metric: locale === 'pt' ? 'Resistência UV' : 'UV Resistance', epdm: '⭐⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐', bitume: '⭐⭐' },
    { metric: locale === 'pt' ? 'Flexibilidade' : 'Flexibility', epdm: '⭐⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐⭐', bitume: '⭐⭐' },
    { metric: locale === 'pt' ? 'Reciclabilidade' : 'Recyclability', epdm: '100%', tpo: 'Parcial', pvc: 'Parcial', bitume: 'Limitada' },
    { metric: locale === 'pt' ? 'Instalação' : 'Installation', epdm: '⭐⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐', bitume: '⭐⭐' },
    { metric: locale === 'pt' ? 'Custo-Benefício' : 'Cost-Effectiveness', epdm: '⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐', bitume: '⭐⭐⭐' },
  ]

  const benefits = [
    {
      title: locale === 'pt' ? 'Durabilidade Extraordinária' : 'Extraordinary Durability',
      desc: locale === 'pt' 
        ? 'Estudos académicos confirmam que membranas EPDM com 30+ anos ainda funcionam como novas. Vida útil esperada de 40-50 anos.'
        : 'Academic studies confirm EPDM membranes 30+ years old still perform like new. Expected lifespan 40-50 years.',
      icon: '⏱️'
    },
    {
      title: locale === 'pt' ? 'Resistência UV Superior' : 'Superior UV Resistance',
      desc: locale === 'pt'
        ? 'O EPDM não degrada com exposição solar contínua. Ideal para o clima português com alto índice UV.'
        : 'EPDM does not degrade with continuous sun exposure. Ideal for Portuguese climate with high UV index.',
      icon: '☀️'
    },
    {
      title: locale === 'pt' ? '100% Reciclável' : '100% Recyclable',
      desc: locale === 'pt'
        ? 'EPDM é 100% reciclável. Estudos LCA mostram melhor desempenho ambiental que outras membranas.'
        : 'EPDM is 100% recyclable. LCA studies show better environmental performance than other membranes.',
      icon: '♻️'
    },
    {
      title: locale === 'pt' ? 'Instalação a Frio' : 'Cold Installation',
      desc: locale === 'pt'
        ? 'Aplicação sem chama, sem cheiros, sem riscos de incêndio. Mais seguro e sustentável.'
        : 'Application without flame, without smells, without fire risks. Safer and more sustainable.',
      icon: '🔒'
    },
    {
      title: locale === 'pt' ? 'Adaptabilidade Térmica' : 'Thermal Adaptability',
      desc: locale === 'pt'
        ? 'Funciona de -40°C a +130°C. Resiste às temperaturas extremas portuguesas.'
        : 'Works from -40°C to +130°C. Resists Portuguese extreme temperatures.',
      icon: '🌡️'
    },
    {
      title: locale === 'pt' ? 'Flexibilidade Contínua' : 'Continuous Flexibility',
      desc: locale === 'pt'
        ? 'Mantém elasticidade mesmo após décadas. Adapta-se aos movimentos estruturais do edifício.'
        : 'Maintains elasticity even after decades. Adapts to building structural movements.',
      icon: '🔄'
    },
  ]

  const research = [
    {
      title: 'EPDM Roofing Association Study',
      finding: '28-32 year old membranes still performing "like new"'
    },
    {
      title: 'Elevate (Carlisle) Testing',
      finding: 'Expected service life of 40+ years'
    },
    {
      title: 'Life Cycle Assessment 2010',
      finding: 'EPDM outperforms other membranes in global warming potential'
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {locale === 'pt' ? 'Porquê EPDM?' : 'Why EPDM?'}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              {locale === 'pt' 
                ? 'A escolha inteligente para impermeabilização de coberturas em Portugal.'
                : 'The smart choice for roof waterproofing in Portugal.'}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {locale === 'pt' ? 'Vantagens do EPDM' : 'Benefits of EPDM'}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600">
            {locale === 'pt'
              ? 'Porque o EPDM é a melhor escolha para o seu projeto'
              : 'Why EPDM is the best choice for your project'}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {locale === 'pt' ? 'Comparação com Outros Materiais' : 'Comparison with Other Materials'}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600">
            {locale === 'pt'
              ? 'EPDM vs TPO vs PVC vs Betume'
              : 'EPDM vs TPO vs PVC vs Bitumen'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{locale === 'pt' ? 'Característica' : 'Feature'}</th>
                  <th className="px-6 py-4 text-center bg-yellow-500 text-blue-900">EPDM</th>
                  <th className="px-6 py-4 text-center">TPO</th>
                  <th className="px-6 py-4 text-center">PVC</th>
                  <th className="px-6 py-4 text-center">{locale === 'pt' ? 'Betume' : 'Bitumen'}</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium">{row.metric}</td>
                    <td className="px-6 py-4 text-center bg-yellow-50 font-semibold text-blue-900">{row.epdm}</td>
                    <td className="px-6 py-4 text-center">{row.tpo}</td>
                    <td className="px-6 py-4 text-center">{row.pvc}</td>
                    <td className="px-6 py-4 text-center">{row.bitume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {locale === 'pt' ? 'Base Científica' : 'Scientific Basis'}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600">
            {locale === 'pt'
              ? 'Investigação académica que valida o desempenho do EPDM'
              : 'Academic research validating EPDM performance'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {research.map((r, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-blue-900 font-semibold mb-2">{r.title}</div>
                <p className="text-gray-700">{r.finding}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            {locale === 'pt'
              ? 'Fontes: EPDM Roofing Association, Elevate/Carlisle, LCA Study 2010'
              : 'Sources: EPDM Roofing Association, Elevate/Carlisle, LCA Study 2010'}
          </p>
        </div>
      </section>

      {/* Portugal Specific */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            {locale === 'pt' ? 'Ideal para Portugal' : 'Ideal for Portugal'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-2">{locale === 'pt' ? 'Clima Mediterranean' : 'Mediterranean Climate'}</h3>
              <p className="text-blue-200">
                {locale === 'pt'
                  ? 'Resistência UV excepcional para os verões quentes portugueses'
                  : 'Exceptional UV resistance for hot Portuguese summers'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌧️</div>
              <h3 className="text-xl font-semibold mb-2">{locale === 'pt' ? 'Invernos Leves' : 'Mild Winters'}</h3>
              <p className="text-blue-200">
                {locale === 'pt'
                  ? 'Sem degradação por ciclos de congelação'
                  : 'No degradation from freeze-thaw cycles'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold mb-2">{locale === 'pt' ? 'Costa Atlântica' : 'Atlantic Coast'}</h3>
              <p className="text-blue-200">
                {locale === 'pt'
                  ? 'Resistência à salinidade e humidade costeira'
                  : 'Resistance to coastal salt and humidity'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {locale === 'pt' ? 'Pronto para impermeabilizar?' : 'Ready to waterproof?'}
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            {locale === 'pt'
              ? 'Solicite um orçamento gratuito e descubra as vantagens do EPDM'
              : 'Request a free quote and discover the advantages of EPDM'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/quote`} className="px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
              {locale === 'pt' ? 'Pedir Orçamento' : 'Request Quote'}
            </Link>
            <Link href={`/${locale}/applications`} className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800">
              {locale === 'pt' ? 'Ver Aplicações' : 'View Applications'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
