import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const applications: Record<string, { title: string; desc: string; icon: string; benefits: string[] }> = {
  'telhados-planos': { 
    title: 'Telhados Planos', 
    desc: 'Impermeabilização duradoura para telhados planos comerciais e residenciais',
    icon: '🏢',
    benefits: ['Resistência UV', '50+ anos de durabilidade', 'Instalação rápida', 'Sem manutenção']
  },
  'telhados-inclinados': { 
    title: 'Telhados Inclinados', 
    desc: 'Solução flexível para telhados inclinados com excelente resistência UV',
    icon: '🏠',
    benefits: ['Flexibilidade', 'Resistência térmica', 'Instalação fácil', 'Garantia longa']
  },
  'telhados-verdes': { 
    title: 'Telhados Verdes', 
    desc: 'Membrana root-resistant para telhados ajardinados',
    icon: '🌿',
    benefits: ['Resistência a raízes', 'Ecológico', 'Isolamento térmico', 'Certificado verde']
  },
  'terracos': { 
    title: 'Terraços e Varandas', 
    desc: 'Proteção contra infiltrações em espaços de convivência',
    icon: '☀️',
    benefits: ['Antiderrapante', 'Resistente', 'Fácil limpeza', 'Conforto']
  },
  'piscinas': { 
    title: 'Piscinas', 
    desc: 'Membrana liners para piscinas residenciais e públicas',
    icon: '🏊',
    benefits: ['Impermeável', 'Resistente ao cloro', 'Cores variety', 'Instalação rápida']
  },
  'lagos-reservatorios': { 
    title: 'Lagos e Reservatórios', 
    desc: 'Impermeabilização para lagos ornamentais e reservatórios de água',
    icon: '💧',
    benefits: ['100% estanque', 'Resistente a UV', ' Ecológico', 'Longa duração']
  },
  'fachadas': { 
    title: 'Fachadas', 
    desc: 'Proteção de fachadas contra intemperismo e humidade',
    icon: '🏢',
    benefits: ['Impermeável', 'Respirável', 'Verniz protetor', 'Diversas cores']
  },
  'fundacoes': { 
    title: 'Fundações', 
    desc: 'Impermeabilização de fundações e estruturas enterradas',
    icon: '🏗️',
    benefits: ['Anti-radícula', 'Alta resistência', 'Aplicação versátil', 'Durabilidade']
  },
  'edificios-industriais': { 
    title: 'Edifícios Industriais', 
    desc: 'Soluções para coberturas e impermeabilização industrial',
    icon: '🏭',
    benefits: ['Alta resistência', 'Resistente a químicos', 'Rapidez instalação', 'Custo-benefício']
  },
  'edificios-comerciais': { 
    title: 'Edifícios Comerciais', 
    desc: 'Impermeabilização para centros comerciais e escritórios',
    icon: '🏬',
    benefits: ['Acabamento premium', 'Resistência', 'Personalizável', 'Garantia']
  },
  'habitacoes-residenciais': { 
    title: 'Habitações Residenciais', 
    desc: 'Soluções para casas e moradias',
    icon: '🏡',
    benefits: ['Conforto', 'Economia', 'Sustentável', 'Valorização']
  },
}

export function generateStaticParams() {
  return Object.keys(applications).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = applications[slug]
  if (!app) return { title: 'Aplicação não encontrada' }
  return {
    title: `${app.title} - Membriko`,
    description: app.desc
  }
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = applications[slug]
  
  if (!app) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Aplicação não encontrada</h1>
            <Link href="/applications" className="text-blue-600 hover:underline mt-4 block">
              Voltar às aplicações
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Interessado em {app.title}?</h2>
          <p className="text-gray-600 mb-8">Fale connosco para um orçamento personalizado</p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Pedir Orçamento
          </Link>
        </div>
      </section>
    </div>
  )
}
