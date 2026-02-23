import Link from 'next/link'

export default function RenovationsPage() {
  const services = [
    { title: 'Remoção de Old Coating', desc: 'Remoção segura de membranas antigas, betume ou coatingsdanificados antes da nova aplicação.', icon: '🔨' },
    { title: 'Reimpermeabilização', desc: 'Aplicação de nova membrana EPDM sobre substrato existente ouapós remoção completa.', icon: '🛡️' },
    { title: 'Reparação de Fugas', desc: 'Diagnóstico e reparação de infiltrações em coberturas existentes.', icon: '🔧' },
    { title: 'Reforço Estrutural', desc: 'Reforço de estrutura de cobertura antes de impermeabilização.', icon: '🏗️' },
  ]

  const benefits = [
    'Evite danos maiores com manutenção atempada',
    'Reduza custos a longo prazo',
    'Prolongue a vida útil da sua cobertura',
    'Melhore a eficiência energética',
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Renovação de Coberturas</h1>
            <p className="text-xl lg:text-2xl text-blue-100">Dê nova vida à sua cobertura com os nossos serviços de renovação EPDM.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Os Nossos Serviços</h2>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Porquê Renovar?</h2>
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
          <h2 className="text-3xl font-bold mb-6">Precisa de Renovar a Sua Cobertura?</h2>
          <p className="text-lg mb-8 text-gray-600">Solicite uma inspeção gratuita e descubra as opções disponíveis</p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            Pedir Orçamento
          </Link>
        </div>
      </section>
    </div>
  )
}
