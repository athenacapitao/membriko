export interface HomepageMeta {
  title: string
  description: string
  keywords: string[]
}

export interface HomepageStat {
  value: string
  label: string
}

export interface HomepageHero {
  headline: string
  subtitle: string
  ctaQuote: string
  ctaApps: string
  stats: HomepageStat[]
}

export interface HomepageTrustBar {
  title: string
}

export interface HomepageProblemSide {
  title: string
  description: string
  points: string[]
}

export interface HomepageProblemSolution {
  problem: HomepageProblemSide
  solution: HomepageProblemSide
}

export interface HomepageCategoriesSection {
  title: string
  subtitle: string
}

export interface HomepageFeaturedSection {
  title: string
  subtitle: string
}

export interface HomepageWhyEpdmPoint {
  icon: string
  title: string
  description: string
}

export interface HomepageWhyEpdmPreview {
  title: string
  subtitle: string
  points: HomepageWhyEpdmPoint[]
  ctaText: string
}

export interface HomepageClimateZone {
  zone: string
  description: string
}

export interface HomepageClimateSection {
  title: string
  subtitle: string
  zones: HomepageClimateZone[]
}

export interface HomepageTestimonial {
  text: string
  author: string
  role: string
}

export interface HomepageSocialProof {
  title: string
  testimonials: HomepageTestimonial[]
  projectCount: string
}

export interface HomepageCta {
  title: string
  subtitle: string
  buttonText: string
}

export interface HomepageContent {
  meta: HomepageMeta
  hero: HomepageHero
  trustBar: HomepageTrustBar
  problemSolution: HomepageProblemSolution
  categoriesSection: HomepageCategoriesSection
  featuredSection: HomepageFeaturedSection
  whyEpdmPreview: HomepageWhyEpdmPreview
  climateSection: HomepageClimateSection
  socialProof: HomepageSocialProof
  cta: HomepageCta
}

const pt: HomepageContent = {
  meta: {
    title: 'Membriko – Aplicação Profissional de Membrana EPDM em Portugal',
    description:
      'A Membriko aplica membrana EPDM em coberturas, piscinas, lagos, fundações e muito mais. Selecionamos as melhores membranas do mercado e instalamos com precisão. Orçamento gratuito.',
    keywords: [
      'aplicação membrana EPDM',
      'instalação EPDM Portugal',
      'impermeabilização EPDM',
      'telhado plano EPDM',
      'impermeabilização telhado',
      'EPDM cobertura',
      'impermeabilização piscina EPDM',
      'telhado verde EPDM',
      'membrana impermeabilizante',
      'Membriko',
    ],
  },

  hero: {
    headline: 'Nós Aplicamos EPDM. É o Que Fazemos.',
    subtitle:
      'Não fabricamos membranas. Selecionamos as melhores do mercado e aplicamos com precisão cirúrgica — em coberturas, piscinas, lagos, fundações ou o que o seu projeto exigir.',
    ctaQuote: 'Pedir Orçamento Grátis',
    ctaApps: 'Ver Aplicações',
    stats: [
      { value: '50+', label: 'Anos de Vida Útil' },
      { value: '100%', label: 'Reciclável' },
      { value: '-45°C a +130°C', label: 'Gama de Temperatura' },
      { value: '300–600%', label: 'Elasticidade' },
    ],
  },

  trustBar: {
    title: 'Membranas Certificadas dos Melhores Fabricantes Europeus',
  },

  problemSolution: {
    problem: {
      title: 'Impermeabilização Mal Aplicada Custa Caro',
      description:
        'O problema raramente é o material — é quem o aplica. Betume mal instalado, PVC com juntas fracas, obras sem garantia. O resultado? Infiltrações, reparações e dinheiro ao lixo.',
      points: [
        'Betume dura 15–25 anos, no máximo',
        'Sol português destrói membranas baratas em poucos anos',
        'Instalação com chama = risco de incêndio',
        'Manutenção anual que nunca acaba',
        'PVC liberta químicos nocivos com o tempo',
        'A maioria dos instaladores não é especialista em EPDM',
      ],
    },
    solution: {
      title: 'A Membriko Resolve',
      description:
        'Somos especialistas em aplicação de EPDM. Trabalhamos com os melhores fabricantes europeus e aplicamos a membrana certa para cada projeto — instalada a frio, sem manutenção, feita para durar.',
      points: [
        '50+ anos de vida útil comprovada',
        'Resistência UV de fábrica — sem revestimentos extra',
        'Instalação a frio — zero risco de incêndio',
        'Sem manutenção obrigatória',
        '100% reciclável',
        'Funciona de -45 °C a +130 °C',
      ],
    },
  },

  categoriesSection: {
    title: 'Onde Aplicamos EPDM',
    subtitle:
      'De telhados a lagos artificiais, de piscinas a estações de tratamento — se precisa de impermeabilização, nós aplicamos.',
  },

  featuredSection: {
    title: 'Trabalhos Recentes',
    subtitle: 'Projetos reais. Resultados reais.',
  },

  whyEpdmPreview: {
    title: 'Porquê EPDM?',
    subtitle:
      'Não vendemos EPDM porque é moda. Vendemos porque é o melhor material de impermeabilização que existe.',
    points: [
      {
        icon: 'Clock',
        title: '50+ Anos de Durabilidade',
        description:
          'Membranas EPDM com 30 anos ainda funcionam como novas. Nenhum outro material chega perto.',
      },
      {
        icon: 'Sun',
        title: 'Feito para o Sol Português',
        description:
          'Resistência UV intrínseca. Não precisa de revestimentos. Não degrada. Não fissura.',
      },
      {
        icon: 'Recycle',
        title: '100% Reciclável',
        description:
          'Menor pegada de carbono que PVC ou betume. No fim de vida, recicla-se por completo.',
      },
      {
        icon: 'Flame',
        title: 'Instalação a Frio',
        description:
          'Sem chama, sem fumos, sem risco. Colagem especializada que é mais segura e mais rápida.',
      },
      {
        icon: 'Thermometer',
        title: 'Resiste a Tudo',
        description:
          'De -45 °C a +130 °C. Do Minho ao Algarve, em qualquer estação.',
      },
      {
        icon: 'Zap',
        title: 'Elasticidade Extrema',
        description:
          'Estica 300–600% sem rasgar. Acompanha movimentos estruturais sem fissurar.',
      },
    ],
    ctaText: 'Saber Mais Sobre EPDM',
  },

  climateSection: {
    title: 'Funciona em Todo o País',
    subtitle:
      'Portugal tem três climas distintos. O EPDM domina todos.',
    zones: [
      {
        zone: 'Norte e Interior',
        description:
          'Chuva, frio, calor intenso. O EPDM aguenta ciclos térmicos extremos sem empenar nem fissurar. Décadas sem problemas.',
      },
      {
        zone: 'Lisboa, Centro e Alentejo',
        description:
          'Sol forte e UV elevado. O EPDM não precisa de revestimentos — resiste por natureza. Menos manutenção, menos custos.',
      },
      {
        zone: 'Algarve e Costa',
        description:
          'Sal, humidade, maresia. Onde o betume apodrece em anos, o EPDM mantém-se intacto. Não oxida, não degrada.',
      },
    ],
  },

  socialProof: {
    title: 'Quem Trabalhou Connosco, Sabe',
    testimonials: [
      {
        text: 'Cobertura plana de 1 200 m², há seis anos. Zero infiltrações. Trabalho rápido, limpo, sem chatices.',
        author: 'António Ferreira',
        role: 'Gestor de Condomínio, Lisboa',
      },
      {
        text: 'Impermeabilizaram a nossa piscina natural. A membrana adaptou-se à forma irregular do lago na perfeição. Resultado impecável.',
        author: 'Maria João Costa',
        role: 'Proprietária de Quinta, Alentejo',
      },
      {
        text: 'Trabalho com várias membranas há 20 anos. O EPDM que a Membriko aplica é o mais fiável. Ponto final.',
        author: 'Carlos Silva',
        role: 'Empreiteiro, Porto',
      },
    ],
    projectCount: '500+ projetos em Portugal',
  },

  cta: {
    title: 'Tem um Projeto? Fale Connosco.',
    subtitle:
      'Orçamento gratuito, sem compromisso. Avaliamos o seu projeto e recomendamos a melhor solução.',
    buttonText: 'Pedir Orçamento',
  },
}

const en: HomepageContent = {
  meta: {
    title: 'Membriko – Professional EPDM Membrane Application in Portugal',
    description:
      'Membriko applies EPDM membrane to roofs, pools, ponds, foundations and more. We source the best membranes and install them with precision. Free quote.',
    keywords: [
      'EPDM membrane application',
      'EPDM installation Portugal',
      'EPDM waterproofing',
      'flat roof EPDM',
      'rubber membrane roofing',
      'pool waterproofing EPDM',
      'green roof EPDM',
      'waterproofing membrane',
      'Membriko',
      'EPDM roofing specialist',
    ],
  },

  hero: {
    headline: 'We Apply EPDM. That\'s What We Do.',
    subtitle:
      'We don\'t manufacture membranes. We source the best on the market and apply them with surgical precision — on roofs, pools, ponds, foundations, or whatever your project demands.',
    ctaQuote: 'Get a Free Quote',
    ctaApps: 'See Applications',
    stats: [
      { value: '50+', label: 'Year Lifespan' },
      { value: '100%', label: 'Recyclable' },
      { value: '-45°C to +130°C', label: 'Temperature Range' },
      { value: '300–600%', label: 'Elongation' },
    ],
  },

  trustBar: {
    title: 'Certified Membranes from Top European Manufacturers',
  },

  problemSolution: {
    problem: {
      title: 'Bad Application Costs You More Than Bad Material',
      description:
        'The problem is rarely the material — it\'s who installs it. Poorly applied bitumen, weak PVC joints, no warranty. The result? Leaks, repairs, and money down the drain.',
      points: [
        'Bitumen lasts 15–25 years, at best',
        'Portuguese sun destroys cheap membranes in years',
        'Torch installation = fire risk',
        'Never-ending annual maintenance',
        'PVC leaches harmful chemicals over time',
        'Most installers aren\'t EPDM specialists',
      ],
    },
    solution: {
      title: 'Membriko Gets It Done',
      description:
        'We specialise in EPDM application. We work with the best European manufacturers and apply the right membrane for each project — cold-installed, maintenance-free, built to last.',
      points: [
        '50+ year proven lifespan',
        'Factory-built UV resistance — no coatings needed',
        'Cold installation — zero fire risk',
        'No mandatory maintenance',
        '100% recyclable',
        'Performs from -45°C to +130°C',
      ],
    },
  },

  categoriesSection: {
    title: 'Where We Apply EPDM',
    subtitle:
      'From rooftops to artificial lakes, from pools to treatment plants — if it needs waterproofing, we apply it.',
  },

  featuredSection: {
    title: 'Recent Work',
    subtitle: 'Real projects. Real results.',
  },

  whyEpdmPreview: {
    title: 'Why EPDM?',
    subtitle:
      'We don\'t push EPDM because it\'s trendy. We push it because it\'s the best waterproofing material that exists.',
    points: [
      {
        icon: 'Clock',
        title: '50+ Year Durability',
        description:
          'EPDM membranes aged 30 years still perform like new. Nothing else comes close.',
      },
      {
        icon: 'Sun',
        title: 'Built for the Portuguese Sun',
        description:
          'Inherent UV resistance. No coatings needed. Doesn\'t degrade. Doesn\'t crack.',
      },
      {
        icon: 'Recycle',
        title: '100% Recyclable',
        description:
          'Lower carbon footprint than PVC or bitumen. Fully recyclable at end of life.',
      },
      {
        icon: 'Flame',
        title: 'Cold-Applied Installation',
        description:
          'No flame, no fumes, no risk. Specialist bonding that\'s safer and faster.',
      },
      {
        icon: 'Thermometer',
        title: 'Handles Everything',
        description:
          'From -45°C to +130°C. From the Minho to the Algarve, any season.',
      },
      {
        icon: 'Zap',
        title: 'Extreme Elasticity',
        description:
          'Stretches 300–600% without tearing. Follows structural movement without cracking.',
      },
    ],
    ctaText: 'Learn More About EPDM',
  },

  climateSection: {
    title: 'Works Across the Country',
    subtitle:
      'Portugal has three distinct climates. EPDM dominates all of them.',
    zones: [
      {
        zone: 'North and Interior',
        description:
          'Rain, cold, intense heat. EPDM handles extreme thermal cycling without warping or cracking. Decades without issues.',
      },
      {
        zone: 'Lisbon, Centre and Alentejo',
        description:
          'Harsh sun and high UV. EPDM doesn\'t need coatings — it resists by nature. Less maintenance, lower costs.',
      },
      {
        zone: 'Algarve and Coast',
        description:
          'Salt, humidity, sea air. Where bitumen rots in years, EPDM stays intact. Doesn\'t oxidise, doesn\'t degrade.',
      },
    ],
  },

  socialProof: {
    title: 'Our Clients Know',
    testimonials: [
      {
        text: '1,200 m² flat roof, six years ago. Zero leaks. Fast, clean, no hassle.',
        author: 'António Ferreira',
        role: 'Property Manager, Lisbon',
      },
      {
        text: 'They waterproofed our natural swimming pond. The membrane adapted perfectly to the irregular shape. Flawless result.',
        author: 'Maria João Costa',
        role: 'Farm Owner, Alentejo',
      },
      {
        text: 'I\'ve worked with membranes for 20 years. The EPDM Membriko applies is the most reliable. Full stop.',
        author: 'Carlos Silva',
        role: 'Contractor, Porto',
      },
    ],
    projectCount: '500+ projects across Portugal',
  },

  cta: {
    title: 'Got a Project? Talk to Us.',
    subtitle:
      'Free quote, no strings attached. We assess your project and recommend the best solution.',
    buttonText: 'Get a Quote',
  },
}

export const homepage: { pt: HomepageContent; en: HomepageContent } = { pt, en }
