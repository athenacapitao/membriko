import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const values = [
    {
      title: locale === 'pt' ? 'Qualidade' : 'Quality',
      desc: locale === 'pt'
        ? 'Apenas utilizamos membranas EPDM de qualidade superior, certificadas e testadas.'
        : 'We only use superior quality EPDM membranes, certified and tested.',
      icon: '✅'
    },
    {
      title: locale === 'pt' ? 'Experiência' : 'Experience',
      desc: locale === 'pt'
        ? 'Anos de experiência em impermeabilização EPDM em Portugal.'
        : 'Years of experience in EPDM waterproofing in Portugal.',
      icon: '💼'
    },
    {
      title: locale === 'pt' ? 'Profissionalismo' : 'Professionalism',
      desc: locale === 'pt'
        ? 'Equipa qualificada com formação contínua em técnicas de instalação.'
        : 'Qualified team with continuous training in installation techniques.',
      icon: '🔧'
    },
    {
      title: locale === 'pt' ? 'Sustentabilidade' : 'Sustainability',
      desc: locale === 'pt'
        ? 'Compromisso com práticas sustentáveis e materiais recicláveis.'
        : 'Commitment to sustainable practices and recyclable materials.',
      icon: '♻️'
    },
  ]

  const services = [
    {
      title: locale === 'pt' ? 'Impermeabilização de Coberturas' : 'Roof Waterproofing',
      desc: locale === 'pt'
        ? 'Coberturas planas, inclinadas, terraços e varandas.'
        : 'Flat roofs, pitched roofs, terraces and balconies.',
      icon: '🏢'
    },
    {
      title: locale === 'pt' ? 'Telhados Verdes' : 'Green Roofs',
      desc: locale === 'pt'
        ? 'Sistemas de cobertura verde com membrana root-resistant.'
        : 'Green roof systems with root-resistant membrane.',
      icon: '🌿'
    },
    {
      title: locale === 'pt' ? 'Piscinas e Lagos' : 'Pools and Lakes',
      desc: locale === 'pt'
        ? 'Impermeabilização de piscinas, lagos e reservatórios.'
        : 'Waterproofing of pools, lakes and reservoirs.',
      icon: '🏊'
    },
    {
      title: locale === 'pt' ? 'Manutenção e Reparação' : 'Maintenance and Repair',
      desc: locale === 'pt'
        ? 'Serviços de manutenção preventiva e reparação especializada.'
        : 'Preventive maintenance and specialized repair services.',
      icon: '🔧'
    },
  ]

  const certifications = [
    { name: 'FLL Certified', desc: locale === 'pt' ? 'Certificação alemã para telhados verdes' : 'German certification for green roofs' },
    { name: 'CE Marking', desc: locale === 'pt' ? 'Conformidade europeia' : 'European conformity' },
    { name: 'ISO 9001', desc: locale === 'pt' ? 'Gestão de qualidade' : 'Quality management' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {locale === 'pt' ? 'Sobre Nós' : 'About Us'}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              {locale === 'pt'
                ? 'Especialistas em impermeabilização EPDM em Portugal.'
                : 'EPDM waterproofing specialists in Portugal.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {locale === 'pt' ? 'A Nossa Missão' : 'Our Mission'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Na Membriko, dedicamo-nos a fornecer soluções de impermeabilização EPDM da mais alta qualidade para clientes em Portugal. Acreditamos que cada projeto merece atenção personalizada e resultados duradouros. O nosso compromisso é com a excelência, a sustentabilidade e a satisfação total do cliente.'
                : 'At Membriko, we are dedicated to providing the highest quality EPDM waterproofing solutions to clients in Portugal. We believe every project deserves personalized attention and lasting results. Our commitment is to excellence, sustainability and total customer satisfaction.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            {locale === 'pt' ? 'Os Nossos Valores' : 'Our Values'}
          </h2>
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {locale === 'pt' ? 'Os Nossos Serviços' : 'Our Services'}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600">
            {locale === 'pt'
              ? 'Soluções completas de impermeabilização'
              : 'Complete waterproofing solutions'}
          </p>
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

      {/* Certifications */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {locale === 'pt' ? 'Certificações' : 'Certifications'}
          </h2>
          <p className="text-lg text-center mb-12 text-blue-200">
            {locale === 'pt'
              ? 'Compromisso com os mais altos padrões de qualidade'
              : 'Commitment to the highest quality standards'}
          </p>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            {locale === 'pt' ? 'Porque Escolher a Membriko' : 'Why Choose Membriko'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {locale === 'pt' ? 'Preços Transparentes' : 'Transparent Prices'}
              </h3>
              <p className="text-gray-600">
                {locale === 'pt'
                  ? 'Orçamentos detalhados sem custos ocultos.'
                  : 'Detailed quotes with no hidden costs.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {locale === 'pt' ? 'Garantia de Qualidade' : 'Quality Guarantee'}
              </h3>
              <p className="text-gray-600">
                {locale === 'pt'
                  ? 'Garantia de 20 anos nos nossos serviços.'
                  : '20-year warranty on our services.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {locale === 'pt' ? 'Atendimento Personalizado' : 'Personalized Service'}
              </h3>
              <p className="text-gray-600">
                {locale === 'pt'
                  ? 'Acompanhamento dedicado do início ao fim.'
                  : 'Dedicated support from start to finish.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {locale === 'pt' ? 'Experiência Local' : 'Local Experience'}
              </h3>
              <p className="text-gray-600">
                {locale === 'pt'
                  ? 'Conhecimento profundo do clima e regulations portuguesas.'
                  : 'Deep knowledge of Portuguese climate and regulations.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {locale === 'pt' ? 'Vamos Trabalhar Juntos?' : 'Let\'s Work Together?'}
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            {locale === 'pt'
              ? 'Entre em contacto para um orçamento personalizado'
              : 'Contact us for a personalized quote'}
          </p>
          <Link href={`/${locale}/quote`} className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            {locale === 'pt' ? 'Pedir Orçamento Grátis' : 'Request Free Quote'}
          </Link>
        </div>
      </section>
    </div>
  )
}
