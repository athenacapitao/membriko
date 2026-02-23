import Link from 'next/link'

export default function AboutPage() {
  const values = [
    { title: 'Qualidade', desc: 'Apenas utilizamos membranas EPDM de qualidade superior, certificadas e testadas.', icon: '✅' },
    { title: 'Experiência', desc: 'Anos de experiência em impermeabilização EPDM em Portugal.', icon: '💼' },
    { title: 'Profissionalismo', desc: 'Equipa qualificada com formação contínua em técnicas de instalação.', icon: '🔧' },
    { title: 'Sustentabilidade', desc: 'Compromisso com práticas sustentáveis e materiais recicláveis.', icon: '♻️' },
  ]

  const services = [
    { title: 'Impermeabilização de Coberturas', desc: 'Coberturas planas, inclinadas, terraços e varandas.', icon: '🏢' },
    { title: 'Telhados Verdes', desc: 'Sistemas de cobertura verde com membrana root-resistant.', icon: '🌿' },
    { title: 'Piscinas e Lagos', desc: 'Impermeabilização de piscinas, lagos e reservatórios.', icon: '🏊' },
    { title: 'Manutenção e Reparação', desc: 'Serviços de manutenção preventiva e reparação especializada.', icon: '🔧' },
  ]

  const certifications = [
    { name: 'FLL Certified', desc: 'Certificação alemã para telhados verdes' },
    { name: 'CE Marking', desc: 'Conformidade europeia' },
    { name: 'ISO 9001', desc: 'Gestão de qualidade' },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl lg:text-2xl text-blue-100">Especialistas em impermeabilização EPDM em Portugal.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Nossa Missão</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Na Membriko, dedicamo-nos a fornecer soluções de impermeabilização EPDM da mais alta qualidade para clientes em Portugal. Acreditamos que cada projeto merece atenção personalizada e resultados duradouros. O nosso compromisso é com a excelência, a sustentabilidade e a satisfação total do cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Os Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Os Nossos Serviços</h2>
          <p className="text-lg text-center mb-12 text-gray-600">Soluções completas de impermeabilização</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Certificações</h2>
          <p className="text-lg text-center mb-12 text-blue-200">Compromisso com os mais altos padrões de qualidade</p>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((c, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-center min-w-[200px]">
                <div className="text-2xl font-bold mb-2">{c.name}</div>
                <p className="text-blue-200 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Porque Escolher a Membriko</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><span className="text-green-500 mr-2">✓</span>Preços Transparentes</h3>
              <p className="text-gray-600">Orçamentos detalhados sem custos ocultos.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><span className="text-green-500 mr-2">✓</span>Garantia de Qualidade</h3>
              <p className="text-gray-600">Garantia de 20 anos nos nossos serviços.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><span className="text-green-500 mr-2">✓</span>Atendimento Personalizado</h3>
              <p className="text-gray-600">Acompanhamento dedicado do início ao fim.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><span className="text-green-500 mr-2">✓</span>Experiência Local</h3>
              <p className="text-gray-600">Conhecimento profundo do clima e regulations portuguesas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg mb-8 text-gray-600">Entre em contacto para um orçamento personalizado</p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            Pedir Orçamento Grátis
          </Link>
        </div>
      </section>
    </div>
  )
}
