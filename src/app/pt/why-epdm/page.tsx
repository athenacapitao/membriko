import Link from 'next/link'

export default function WhyEPDMPage() {
  const comparisons = [
    { metric: 'Vida Útil', epdm: '30-50 anos', tpo: '20-30 anos', pvc: '20-30 anos', bitume: '15-25 anos' },
    { metric: 'Resistência UV', epdm: '⭐⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐', bitume: '⭐⭐' },
    { metric: 'Flexibilidade', epdm: '⭐⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐⭐', bitume: '⭐⭐' },
    { metric: 'Reciclabilidade', epdm: '100%', tpo: 'Parcial', pvc: 'Parcial', bitume: 'Limitada' },
    { metric: 'Instalação', epdm: '⭐⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐', bitume: '⭐⭐' },
    { metric: 'Custo-Benefício', epdm: '⭐⭐⭐⭐', tpo: '⭐⭐⭐⭐', pvc: '⭐⭐⭐', bitume: '⭐⭐⭐' },
  ]

  const benefits = [
    { title: 'Durabilidade Extraordinária', desc: 'Estudos académicos confirmam que membranas EPDM com 30+ anos ainda funcionam como novas. Vida útil esperada de 40-50 anos.', icon: '⏱️' },
    { title: 'Resistência UV Superior', desc: 'O EPDM não degrada com exposição solar contínua. Ideal para o clima português com alto índice UV.', icon: '☀️' },
    { title: '100% Reciclável', desc: 'EPDM é 100% reciclável. Estudos LCA mostram melhor desempenho ambiental que outras membranas.', icon: '♻️' },
    { title: 'Instalação a Frio', desc: 'Aplicação sem chama, sem cheiros, sem riscos de incêndio. Mais seguro e sustentável.', icon: '🔒' },
    { title: 'Adaptabilidade Térmica', desc: 'Funciona de -40°C a +130°C. Resiste às temperaturas extremas portuguesas.', icon: '🌡️' },
    { title: 'Flexibilidade Contínua', desc: 'Mantém elasticidade mesmo após décadas. Adapta-se aos movimentos estruturais do edifício.', icon: '🔄' },
  ]

  const research = [
    { title: 'EPDM Roofing Association Study', finding: '28-32 year old membranes still performing "like new"' },
    { title: 'Elevate (Carlisle) Testing', finding: 'Expected service life of 40+ years' },
    { title: 'Life Cycle Assessment 2010', finding: 'EPDM outperforms other membranes in global warming potential' },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Porquê EPDM?</h1>
            <p className="text-xl lg:text-2xl text-blue-100">A escolha inteligente para impermeabilização de coberturas em Portugal.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Vantagens do EPDM</h2>
          <p className="text-lg text-center mb-12 text-gray-600">Porque o EPDM é a melhor escolha para o seu projeto</p>
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Comparação com Outros Materiais</h2>
          <p className="text-lg text-center mb-12 text-gray-600">EPDM vs TPO vs PVC vs Betume</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Característica</th>
                  <th className="px-6 py-4 text-center bg-yellow-500 text-blue-900">EPDM</th>
                  <th className="px-6 py-4 text-center">TPO</th>
                  <th className="px-6 py-4 text-center">PVC</th>
                  <th className="px-6 py-4 text-center">Betume</th>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Base Científica</h2>
          <p className="text-lg text-center mb-12 text-gray-600">Investigação académica que valida o desempenho do EPDM</p>
          <div className="grid md:grid-cols-3 gap-6">
            {research.map((r, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-blue-900 font-semibold mb-2">{r.title}</div>
                <p className="text-gray-700">{r.finding}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">Fontes: EPDM Roofing Association, Elevate/Carlisle, LCA Study 2010</p>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Ideal para Portugal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-2">Clima Mediterrânico</h3>
              <p className="text-blue-200">Resistência UV excepcional para os verões quentes portugueses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌧️</div>
              <h3 className="text-xl font-semibold mb-2">Invernos Leves</h3>
              <p className="text-blue-200">Sem degradação por ciclos de congelação</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold mb-2">Costa Atlântica</h3>
              <p className="text-blue-200">Resistência à salinidade e humidade costeira</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para impermeabilizar?</h2>
          <p className="text-lg mb-8 text-gray-600">Solicite um orçamento gratuito e descubra as vantagens do EPDM</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
              Pedir Orçamento
            </Link>
            <Link href="/applications" className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800">
              Ver Aplicações
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
