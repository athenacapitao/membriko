import Link from 'next/link'
import { notFound } from 'next/navigation'

const applications: Record<string, { title: string; titleEn: string; desc: string; descEn: string; icon: string; benefits: string[]; benefitsEn: string[] }> = {
  'telhados-planos': { title: 'Telhados Planos', titleEn: 'Flat Roofs', desc: 'Impermeabilização duradoura para telhados planos comerciais e residenciais', descEn: 'Long-lasting waterproofing for commercial and residential flat roofs', icon: '🏢', benefits: ['Resistência UV', '50+ anos', 'Instalação rápida', 'Sem manutenção'], benefitsEn: ['UV Resistance', '50+ years', 'Fast installation', 'No maintenance'] },
  'telhados-inclinados': { title: 'Telhados Inclinados', titleEn: 'Pitched Roofs', desc: 'Solução flexível para telhados inclinados com resistência UV', descEn: 'Flexible solution for pitched roofs with UV resistance', icon: '🏠', benefits: ['Flexibilidade', 'Resistência térmica', 'Instalação fácil', 'Garantia longa'], benefitsEn: ['Flexibility', 'Thermal resistance', 'Easy installation', 'Long warranty'] },
  'telhados-verdes': { title: 'Telhados Verdes', titleEn: 'Green Roofs', desc: 'Membrana root-resistant para telhados ajardinados', descEn: 'Root-resistant membrane for garden roofs', icon: '🌿', benefits: ['Resistência a raízes', 'Ecológico', 'Isolamento térmico', 'Certificado verde'], benefitsEn: ['Root resistance', 'Eco-friendly', 'Thermal insulation', 'Green certified'] },
  'terracos': { title: 'Terraços e Varandas', titleEn: 'Terraces & Balconies', desc: 'Proteção contra infiltrações em espaços de convivência', descEn: 'Leak protection in living spaces', icon: '☀️', benefits: ['Antiderrapante', 'Resistente', 'Fácil limpeza', 'Conforto'], benefitsEn: ['Non-slip', 'Resistant', 'Easy cleaning', 'Comfort'] },
  'piscinas': { title: 'Piscinas', titleEn: 'Swimming Pools', desc: 'Membrana liners para piscinas residenciais e públicas', descEn: 'Membrane liners for residential and public pools', icon: '🏊', benefits: ['Impermeável', 'Resistente ao cloro', 'Cores variety', 'Instalação rápida'], benefitsEn: ['Watertight', 'Chlorine resistant', 'Various colors', 'Fast installation'] },
  'lagos-reservatorios': { title: 'Lagos e Reservatórios', titleEn: 'Lakes & Reservoirs', desc: 'Impermeabilização para lagos ornamentais e reservatórios', descEn: 'Waterproofing for ornamental lakes and reservoirs', icon: '💧', benefits: ['100% estanque', 'Resistente a UV', 'Ecológico', 'Longa duração'], benefitsEn: ['100% watertight', 'UV resistant', 'Eco-friendly', 'Long lasting'] },
  'fachadas': { title: 'Fachadas', titleEn: 'Facades', desc: 'Proteção de fachadas contra intemperismo e humidade', descEn: 'Facade protection against weathering and moisture', icon: '🏢', benefits: ['Impermeável', 'Respirável', 'Verniz protetor', 'Diversas cores'], benefitsEn: ['Waterproof', 'Breathable', 'Protective varnish', 'Various colors'] },
  'fundacoes': { title: 'Fundações', titleEn: 'Foundations', desc: 'Impermeabilização de fundações e estruturas enterradas', descEn: 'Waterproofing for foundations and underground structures', icon: '🏗️', benefits: ['Anti-radícula', 'Alta resistência', 'Aplicação versátil', 'Durabilidade'], benefitsEn: ['Root barrier', 'High resistance', 'Versatile application', 'Durability'] },
  'edificios-industriais': { title: 'Edifícios Industriais', titleEn: 'Industrial Buildings', desc: 'Soluções para coberturas e impermeabilização industrial', descEn: 'Solutions for industrial roofing and waterproofing', icon: '🏭', benefits: ['Alta resistência', 'Resistente a químicos', 'Rapidez instalação', 'Custo-benefício'], benefitsEn: ['High resistance', 'Chemical resistant', 'Fast installation', 'Cost-effective'] },
  'edificios-comerciais': { title: 'Edifícios Comerciais', titleEn: 'Commercial Buildings', desc: 'Impermeabilização para centros comerciais e escritórios', descEn: 'Waterproofing for shopping centers and offices', icon: '🏬', benefits: ['Acabamento premium', 'Resistente', 'Personalizável', 'Garantia'], benefitsEn: ['Premium finish', 'Resistant', 'Customizable', 'Warranty'] },
  'habitacoes-residenciais': { title: 'Habitações Residenciais', titleEn: 'Residential Houses', desc: 'Soluções para casas e moradias', descEn: 'Solutions for houses and residential properties', icon: '🏡', benefits: ['Conforto', 'Economia', 'Sustentável', 'Valorização'], benefitsEn: ['Comfort', 'Economy', 'Sustainability', 'Value add'] },
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
