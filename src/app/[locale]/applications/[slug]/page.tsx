import Link from 'next/link'
import { notFound } from 'next/navigation'

const applications: Record<string, { 
  title: string; titleEn: string; 
  desc: string; descEn: string; 
  icon: string; 
  benefits: string[]; benefitsEn: string[];
  specs?: { label: string; labelEn: string; value: string }[];
  climate?: { pt: string; en: string }[];
}> = {
  'telhados-planos': { 
    title: 'Telhados Planos', titleEn: 'Flat Roofs', 
    desc: 'Impermeabilização duradoura para telhados planos comerciais e residenciais', 
    descEn: 'Long-lasting waterproofing for commercial and residential flat roofs', 
    icon: '🏢', 
    benefits: ['Resistência UV', '50+ anos', 'Instalação rápida', 'Sem manutenção', 'Ideal Portugal'],
    benefitsEn: ['UV Resistance', '50+ years', 'Fast installation', 'No maintenance', 'Ideal Portugal'],
    specs: [
      { label: 'Espessura', labelEn: 'Thickness', value: '60 mil (1.5mm)' },
      { label: 'Resistência UV', labelEn: 'UV Resistance', value: 'Excelente / Excellent' },
      { label: 'Temperatura', labelEn: 'Temperature', value: '-40°C to +130°C' },
      { label: 'Garantia', labelEn: 'Warranty', value: '20 anos / 20 years' },
      { label: 'Instalação', labelEn: 'Installation', value: 'Colado, Fixado, Lastro' },
    ],
    climate: [
      { pt: 'Resistência ao sol intenso português', en: 'Resistance to intense Portuguese sun' },
      { pt: 'Sem degradação por geadas', en: 'No freeze-thaw degradation' },
      { pt: 'Ideal clima mediterrâneo', en: 'Ideal for Mediterranean climate' },
    ]
  },
  'telhados-inclinados': { 
    title: 'Telhados Inclinados', titleEn: 'Pitched Roofs', 
    desc: 'Solução flexível para telhados inclinados com resistência UV', 
    descEn: 'Flexible solution for pitched roofs with UV resistance', 
    icon: '🏠', 
    benefits: ['Flexibilidade', 'Resistência térmica', 'Instalação fácil', 'Garantia longa'],
    benefitsEn: ['Flexibility', 'Thermal resistance', 'Easy installation', 'Long warranty'],
    specs: [
      { label: 'Espessura', labelEn: 'Thickness', value: '45-60 mil' },
      { label: 'Aplicação', labelEn: 'Application', value: 'Adesivo a frio / Cold adhesive' },
      { label: 'Substrato', labelEn: 'Substrate', value: 'OSB, Madeira, Betão' },
    ]
  },
  'telhados-verdes': { 
    title: 'Telhados Verdes', titleEn: 'Green Roofs', 
    desc: 'Membrana root-resistant certificada para telhados ajardinados', 
    descEn: 'FLL-certified root-resistant membrane for garden roofs', 
    icon: '🌿', 
    benefits: ['Resistência a raízes', 'Ecológico', 'Isolamento térmico', 'Certificado FLL'],
    benefitsEn: ['Root resistance', 'Eco-friendly', 'Thermal insulation', 'FLL Certified'],
    specs: [
      { label: 'Certificação', labelEn: 'Certification', value: 'FLL (German)' },
      { label: 'Espessura', labelEn: 'Thickness', value: '60 mil (mín.)' },
      { label: 'Camadas', labelEn: 'Layers', value: 'EPDM + Geotêxtil + Drenagem' },
    ],
    climate: [
      { pt: 'Reduz temperatura interior até 3°C', en: 'Reduces interior temp up to 3°C' },
      { pt: 'Absorção de CO2', en: 'CO2 absorption' },
    ]
  },
  'terracos': { 
    title: 'Terraços e Varandas', titleEn: 'Terraces & Balconies', 
    desc: 'Proteção contra infiltrações em espaços de convivência', 
    descEn: 'Leak protection in living spaces', 
    icon: '☀️', 
    benefits: ['Tráfego pedonal', 'Sistema antiderrapante', 'Fácil limpeza', 'Conforto'],
    benefitsEn: ['Pedestrian traffic', 'Non-slip system', 'Easy cleaning', 'Comfort'],
    specs: [
      { label: 'Sistema', labelEn: 'System', value: 'Walkable / Promenade' },
      { label: 'Opções', labelEn: 'Options', value: 'Deck, Azulejo, Pastilha' },
      { label: 'Proteção', labelEn: 'Protection', value: 'EPDM + Layer de proteção' },
    ]
  },
  'piscinas': { 
    title: 'Piscinas', titleEn: 'Swimming Pools', 
    desc: 'Membrana liners para piscinas residenciais e públicas', 
    descEn: 'Membrane liners for residential and public pools', 
    icon: '🏊', 
    benefits: ['Impermeável', 'Resistente ao cloro', 'Cores variety', 'Instalação rápida'],
    benefitsEn: ['Watertight', 'Chlorine resistant', 'Various colors', 'Fast installation'],
    specs: [
      { label: 'Espessura', labelEn: 'Thickness', value: '60-75 mil' },
      { label: 'Resistência', labelEn: 'Resistance', value: 'Cloro, Sal, UV' },
      { label: 'Aplicação', labelEn: 'Application', value: 'Liner completo / Full liner' },
    ]
  },
  'lagos-reservatorios': { 
    title: 'Lagos e Reservatórios', titleEn: 'Lakes & Reservoirs', 
    desc: 'Impermeabilização para lagos ornamentais e reservatórios', 
    descEn: 'Waterproofing for ornamental lakes and reservoirs', 
    icon: '💧', 
    benefits: ['100% estanque', 'Resistente a UV', 'Ecológico', 'Longa duração'],
    benefitsEn: ['100% watertight', 'UV resistant', 'Eco-friendly', 'Long lasting'],
    specs: [
      { label: 'Temperatura', labelEn: 'Temperature', value: '-45°C to +130°C' },
      { label: 'Resistência', labelEn: 'Resistance', value: 'Raízes, Animais, UV' },
      { label: 'Instalação', labelEn: 'Installation', value: 'Folhas grandes, poucas juntas' },
    ]
  },
  'fachadas': { 
    title: 'Fachadas', titleEn: 'Facades', 
    desc: 'Proteção de fachadas contra intemperismo e humidade', 
    descEn: 'Facade protection against weathering and moisture', 
    icon: '🏢', 
    benefits: ['Impermeável', 'Respirável', 'Juntas de dilatação', 'Diversas cores'],
    benefitsEn: ['Waterproof', 'Breathable', 'Expansion joints', 'Various colors'],
    specs: [
      { label: 'Sistema', labelEn: 'System', value: 'Rainscreen / Ventilado' },
      { label: 'Aplicação', labelEn: 'Application', value: 'Behind cladding' },
    ]
  },
  'fundacoes': { 
    title: 'Fundações', titleEn: 'Foundations', 
    desc: 'Impermeabilização de fundações e estruturas enterradas', 
    descEn: 'Waterproofing for foundations and underground structures', 
    icon: '🏗️', 
    benefits: ['Anti-radícula', 'Alta resistência', 'Aplicação versátil', 'Durabilidade'],
    benefitsEn: ['Root barrier', 'High resistance', 'Versatile application', 'Durability'],
    specs: [
      { label: 'Aplicação', labelEn: 'Application', value: 'Paredes / Slabs subterrâneos' },
      { label: 'Temperatura', labelEn: 'Temperature', value: 'Mín. 10°C aplicação' },
      { label: 'Sistema', labelEn: 'System', value: 'Colado ou fixado' },
    ]
  },
  'edificios-industriais': { 
    title: 'Edifícios Industriais', titleEn: 'Industrial Buildings', 
    desc: 'Soluções para coberturas e impermeabilização industrial', 
    descEn: 'Solutions for industrial roofing and waterproofing', 
    icon: '🏭', 
    benefits: ['Alta resistência', 'Resistente a químicos', 'Rapidez instalação', 'Custo-benefício'],
    benefitsEn: ['High resistance', 'Chemical resistant', 'Fast installation', 'Cost-effective'],
    specs: [
      { label: 'Sistemas', labelEn: 'Systems', value: 'Fully Adhered, Mechanically Fastened' },
      { label: 'Área', labelEn: 'Area', value: 'Grandes vãos (até 50m+)' },
      { label: 'Resistência', labelEn: 'Resistance', value: 'Vento, Chemicals, UV' },
    ]
  },
  'edificios-comerciais': { 
    title: 'Edifícios Comerciais', titleEn: 'Commercial Buildings', 
    desc: 'Impermeabilização para centros comerciais e escritórios', 
    descEn: 'Waterproofing for shopping centers and offices', 
    icon: '🏬', 
    benefits: ['Acabamento premium', 'White EPDM', 'Personalizável', 'Garantia 20+ anos'],
    benefitsEn: ['Premium finish', 'White EPDM', 'Customizable', '20+ year warranty'],
    specs: [
      { label: 'Opções', labelEn: 'Options', value: 'Black EPDM, White EPDM' },
      { label: 'Benefício', labelEn: 'Benefit', value: 'Reduz temperatura até 15%' },
      { label: 'Garantia', labelEn: 'Warranty', value: '20-30 anos' },
    ]
  },
  'habitacoes-residenciais': { 
    title: 'Habitações Residenciais', titleEn: 'Residential Houses', 
    desc: 'Soluções para casas e moradias', 
    descEn: 'Solutions for houses and residential properties', 
    icon: '🏡', 
    benefits: ['Conforto', 'Economia', 'Sustentável', 'Valorização imóvel'],
    benefitsEn: ['Comfort', 'Economy', 'Sustainability', 'Property value'],
    specs: [
      { label: 'Aplicações', labelEn: 'Applications', value: 'Cobertura, Terraço, Pool' },
      { label: 'Investimento', labelEn: 'Investment', value: '€25-40/m2 instalação' },
    ]
  },
}

export function generateStaticParams() {
  return Object.keys(applications).map(slug => ({ slug }))
}

export default async function ApplicationPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const app = applications[slug]
  
  if (!app) notFound()

  const title = locale === 'pt' ? app.title : app.titleEn
  const desc = locale === 'pt' ? app.desc : app.descEn
  const benefits = locale === 'pt' ? app.benefits : app.benefitsEn

  return (
    <div className="flex flex-col">
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-6xl mb-4">{app.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100">{desc}</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">{locale === 'pt' ? 'Vantagens' : 'Benefits'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
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
            <h2 className="text-2xl font-bold mb-8">{locale === 'pt' ? 'Especificações Técnicas' : 'Technical Specifications'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.specs.map((spec, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">{locale === 'pt' ? spec.label : spec.labelEn}</div>
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
            <h2 className="text-2xl font-bold mb-8">{locale === 'pt' ? 'Ideal para Portugal' : 'Ideal for Portugal'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.climate.map((item, i) => (
                <div key={i} className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span className="text-gray-700">{locale === 'pt' ? item.pt : item.en}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{locale === 'pt' ? 'Interessado?' : 'Interested?'}</h2>
          <p className="text-gray-600 mb-8">{locale === 'pt' ? 'Fale connosco para um orçamento personalizado' : 'Contact us for a personalized quote'}</p>
          <Link href={`/${locale}/quote`} className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            {locale === 'pt' ? 'Pedir Orçamento' : 'Get a Quote'}
          </Link>
        </div>
      </section>
    </div>
  )
}
