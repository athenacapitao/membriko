import Link from 'next/link'
import { notFound } from 'next/navigation'

const applications: Record<string, { 
  title: string;
  desc: string;
  icon: string; 
  benefits: string[];
  specs?: { label: string; value: string }[];
  climate?: string[];
}> = {
  'telhados-planos': { 
    title: 'Telhados Planos', 
    desc: 'Impermeabilização duradoura para telhados planos comerciais e residenciais', 
    icon: '🏢', 
    benefits: ['Resistência UV', '50+ anos', 'Instalação rápida', 'Sem manutenção', 'Ideal Portugal'],
    specs: [
      { label: 'Espessura', value: '60 mil (1.5mm)' },
      { label: 'Resistência UV', value: 'Excelente' },
      { label: 'Temperatura', value: '-40°C to +130°C' },
      { label: 'Garantia', value: '20 anos' },
      { label: 'Instalação', value: 'Colado, Fixado, Lastro' },
    ],
    climate: [
      'Resistência ao sol intenso português',
      'Sem degradação por geadas',
      'Ideal clima mediterrâneo',
    ]
  },
  'telhados-inclinados': { 
    title: 'Telhados Inclinados', 
    desc: 'Solução flexível para telhados inclinados com resistência UV', 
    icon: '🏠', 
    benefits: ['Flexibilidade', 'Resistência térmica', 'Instalação fácil', 'Garantia longa'],
    specs: [
      { label: 'Espessura', value: '45-60 mil' },
      { label: 'Aplicação', value: 'Adesivo a frio' },
      { label: 'Substrato', value: 'OSB, Madeira, Betão' },
    ]
  },
  'telhados-verdes': { 
    title: 'Telhados Verdes', 
    desc: 'Membrana root-resistant certificada para telhados ajardinados', 
    icon: '🌿', 
    benefits: ['Resistência a raízes', 'Ecológico', 'Isolamento térmico', 'Certificado FLL'],
    specs: [
      { label: 'Certificação', value: 'FLL (German)' },
      { label: 'Espessura', value: '60 mil (mín.)' },
      { label: 'Camadas', value: 'EPDM + Geotêxtil + Drenagem' },
    ],
    climate: [
      'Reduz temperatura interior até 3°C',
      'Absorção de CO2',
    ]
  },
  'terracos': { 
    title: 'Terraços e Varandas', 
    desc: 'Proteção contra infiltrações em espaços de convivência', 
    icon: '☀️', 
    benefits: ['Tráfego pedonal', 'Sistema antiderrapante', 'Fácil limpeza', 'Conforto'],
    specs: [
      { label: 'Sistema', value: 'Walkable / Promenade' },
      { label: 'Opções', value: 'Deck, Azulejo, Pastilha' },
      { label: 'Proteção', value: 'EPDM + Layer de proteção' },
    ]
  },
  'piscinas': { 
    title: 'Piscinas', 
    desc: 'Membrana liners para piscinas residenciais e públicas', 
    icon: '🏊', 
    benefits: ['Impermeável', 'Resistente ao cloro', 'Cores variety', 'Instalação rápida'],
    specs: [
      { label: 'Espessura', value: '60-75 mil' },
      { label: 'Resistência', value: 'Cloro, Sal, UV' },
      { label: 'Aplicação', value: 'Liner completo' },
    ]
  },
  'lagos-reservatorios': { 
    title: 'Lagos e Reservatórios', 
    desc: 'Impermeabilização para lagos ornamentais e reservatórios', 
    icon: '💧', 
    benefits: ['100% estanque', 'Resistente a UV', 'Ecológico', 'Longa duração'],
    specs: [
      { label: 'Temperatura', value: '-45°C to +130°C' },
      { label: 'Resistência', value: 'Raízes, Animais, UV' },
      { label: 'Instalação', value: 'Folhas grandes, poucas juntas' },
    ]
  },
  'fachadas': { 
    title: 'Fachadas', 
    desc: 'Proteção de fachadas contra intemperismo e humidade', 
    icon: '🏢', 
    benefits: ['Impermeável', 'Respirável', 'Juntas de dilatação', 'Diversas cores'],
    specs: [
      { label: 'Sistema', value: 'Rainscreen / Ventilado' },
      { label: 'Aplicação', value: 'Behind cladding' },
    ]
  },
  'fundacoes': { 
    title: 'Fundações', 
    desc: 'Impermeabilização de fundações e estruturas enterradas', 
    icon: '🏗️', 
    benefits: ['Anti-radícula', 'Alta resistência', 'Aplicação versátil', 'Durabilidade'],
    specs: [
      { label: 'Aplicação', value: 'Paredes / Slabs subterrâneos' },
      { label: 'Temperatura', value: 'Mín. 10°C aplicação' },
      { label: 'Sistema', value: 'Colado ou fixado' },
    ]
  },
  'edificios-industriais': { 
    title: 'Edifícios Industriais', 
    desc: 'Soluções para coberturas e impermeabilização industrial', 
    icon: '🏭', 
    benefits: ['Alta resistência', 'Resistente a químicos', 'Rapidez instalação', 'Custo-benefício'],
    specs: [
      { label: 'Sistemas', value: 'Fully Adhered, Mechanically Fastened' },
      { label: 'Área', value: 'Grandes vãos (até 50m+)' },
      { label: 'Resistência', value: 'Vento, Chemicals, UV' },
    ]
  },
  'edificios-comerciais': { 
    title: 'Edifícios Comerciais', 
    desc: 'Impermeabilização para centros comerciais e escritórios', 
    icon: '🏬', 
    benefits: ['Acabamento premium', 'White EPDM', 'Personalizável', 'Garantia 20+ anos'],
    specs: [
      { label: 'Opções', value: 'Black EPDM, White EPDM' },
      { label: 'Benefício', value: 'Reduz temperatura até 15%' },
      { label: 'Garantia', value: '20-30 anos' },
    ]
  },
  'habitacoes-residenciais': { 
    title: 'Habitações Residenciais', 
    desc: 'Soluções para casas e moradias', 
    icon: '🏡', 
    benefits: ['Conforto', 'Economia', 'Sustentável', 'Valorização imóvel'],
    specs: [
      { label: 'Aplicações', value: 'Cobertura, Terraço, Pool' },
      { label: 'Investimento', value: '€25-40/m2 instalação' },
    ]
  },
}

export function generateStaticParams() {
  return Object.keys(applications).map(slug => ({ slug }))
}

export default async function ApplicationPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const app = applications[slug]
  
  if (!app) notFound()

  return (
    <div className="flex flex-col">
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-6xl mb-4">{app.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{app.title}</h1>
          <p className="text-xl text-blue-100">{app.desc}</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Vantagens</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {app.benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 font-semibold">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {app.specs && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Especificações Técnicas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.specs.map((spec, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                  <div className="text-lg font-semibold text-blue-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {app.climate && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Ideal para Portugal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.climate.map((item, i) => (
                <div key={i} className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Interessado?</h2>
          <p className="text-gray-600 mb-8">Fale connosco para um orçamento personalizado</p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Pedir Orçamento
          </Link>
        </div>
      </section>
    </div>
  )
}
