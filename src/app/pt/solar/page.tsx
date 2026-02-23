import Link from 'next/link'

export default function SolarPage() {
  const benefits = [
    { title: 'Compatibilidade Total', desc: 'EPDM é completamente compatível com sistemas de montagem fotovoltaicos.', icon: '✓' },
    { title: 'Sem Perfurações', desc: 'Sistemas de lastro não requerem perfuração da membrana, mantendo a garantia.', icon: '✓' },
    { title: 'Resistência UV', desc: 'Membrana resiste à exposição solar constante sob os painéis.', icon: '✓' },
    { title: 'Fácil Manutenção', desc: 'Acesso fácil para manutenção dos painéis solares.', icon: '✓' },
  ]

  const systems = [
    { title: 'Sistema de Lastro', desc: 'Painéis fixados com pesos, sem perfuração. Ideal para coberturas planas.' },
    { title: 'Sistema de Fixação', desc: 'Fixação mecânica com perfis especiais, mínimos pontos de penetração.' },
    { title: 'Sistema Integrado', desc: 'Painéis integrados na cobertura, dupla função impermeabilização/energia.' },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Integração Solar</h1>
            <p className="text-xl lg:text-2xl text-yellow-900">Combine impermeabilização EPDM com produção de energia solar.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Porquê Combinar?</h2>
          <p className="text-lg text-center mb-12 text-gray-600">EPDM e painéis solares são a combinação perfeita para coberturas planas</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Sistemas de Instalação</h2>
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
          <h2 className="text-3xl font-bold mb-6">Instale Painéis Solares na Sua Cobertura</h2>
          <p className="text-lg mb-8 text-gray-600">Uma cobertura EPDM preparada para solar aumenta o valor do seu imóvel</p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            Pedir Orçamento
          </Link>
        </div>
      </section>
    </div>
  )
}
