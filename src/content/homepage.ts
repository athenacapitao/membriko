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
    title: 'Membriko – Especialistas em Membrana EPDM em Portugal | Impermeabilização de Alta Durabilidade',
    description:
      'A Membriko é o especialista português em instalação de membrana EPDM. Impermeabilização com 50+ anos de vida útil, 100% reciclável e sem trabalho a quente. Orçamento gratuito.',
    keywords: [
      'membrana EPDM',
      'impermeabilização EPDM Portugal',
      'telhado plano EPDM',
      'impermeabilização telhado',
      'membrana borracha sintética',
      'EPDM cobertura',
      'impermeabilização piscina EPDM',
      'telhado verde EPDM',
      'instalação EPDM Portugal',
      'membrana impermeabilizante',
      'Membriko',
    ],
  },

  hero: {
    headline: 'A Membrana EPDM que Protege Portugal',
    subtitle:
      'Impermeabilização de alta durabilidade com membrana EPDM — a escolha de engenheiros e arquitetos para coberturas, piscinas, fundações e muito mais. Sem trabalho a quente, sem manutenção, 50+ anos de vida útil.',
    ctaQuote: 'Pedir Orçamento Grátis',
    ctaApps: 'Ver Todas as Aplicações',
    stats: [
      { value: '50+', label: 'Anos de Vida Útil' },
      { value: '100%', label: 'Reciclável' },
      { value: '-45°C a +130°C', label: 'Gama de Temperatura' },
      { value: '300–600%', label: 'Elasticidade' },
    ],
  },

  trustBar: {
    title: 'Certificado e Aprovado pelos Padrões Europeus',
  },

  problemSolution: {
    problem: {
      title: 'O Problema das Membranas Tradicionais',
      description:
        'Betume, PVC e TPO degradam-se rapidamente sob o sol português, exigem reparações frequentes e colocam riscos de segurança durante a instalação a quente.',
      points: [
        'Vida útil de apenas 15–25 anos com betume',
        'Degradação UV acelera fissuras e infiltrações',
        'Instalação com chama cria risco de incêndio',
        'Manutenção anual cara e disruptiva',
        'PVC liberta plastificantes nocivos ao longo do tempo',
        'Baixo desempenho em climas de temperatura variável',
      ],
    },
    solution: {
      title: 'A Solução Membriko EPDM',
      description:
        'A membrana EPDM é borracha sintética vulcanizada com 50+ anos de vida comprovada, instalada a frio por especialistas certificados da Membriko em todo o país.',
      points: [
        'Vida útil superior a 50 anos sem degradação significativa',
        'Resistência UV intrínseca — sem revestimentos adicionais',
        'Instalação sem chama — zero risco de incêndio',
        'Sem manutenção preventiva obrigatória',
        '100% reciclável — a escolha sustentável',
        'Funciona de -45 °C a +130 °C',
      ],
    },
  },

  categoriesSection: {
    title: 'Aplicações EPDM para Cada Projeto',
    subtitle:
      'Da cobertura de um moradia à impermeabilização de uma estação de tratamento de águas — o EPDM adapta-se a tudo.',
  },

  featuredSection: {
    title: 'Projetos em Destaque',
    subtitle: 'Exemplos reais de impermeabilização EPDM em Portugal',
  },

  whyEpdmPreview: {
    title: 'Porquê Escolher EPDM?',
    subtitle:
      'Seis razões técnicas que fazem do EPDM a membrana impermeabilizante mais avançada do mercado.',
    points: [
      {
        icon: 'Clock',
        title: 'Durabilidade de 50+ Anos',
        description:
          'Estudos independentes confirmam que membranas EPDM com 28–32 anos ainda apresentam desempenho "como novas". Nenhuma outra membrana chega perto.',
      },
      {
        icon: 'Sun',
        title: 'Resistência UV Superior',
        description:
          'O EPDM não necessita de revestimentos adicionais contra UV. A sua composição molecular resiste à radiação solar contínua, essencial no clima português.',
      },
      {
        icon: 'Recycle',
        title: '100% Reciclável',
        description:
          'No fim de vida, a membrana EPDM é totalmente reciclável. Avaliações de ciclo de vida (LCA) mostram impacto de carbono inferior ao PVC e betume.',
      },
      {
        icon: 'Flame',
        title: 'Instalação a Frio',
        description:
          'Sem maçarico, sem odores, sem risco de incêndio. A adesão é feita com cola especializada, tornando a instalação mais segura para operários e edifícios.',
      },
      {
        icon: 'Thermometer',
        title: 'Gama Térmica Extrema',
        description:
          'Mantém flexibilidade e impermeabilidade de -45 °C a +130 °C. Perfeito para as variações climáticas entre o Minho e o Algarve.',
      },
      {
        icon: 'Zap',
        title: '300–600% de Elongação',
        description:
          'A elasticidade excepcional permite que a membrana acompanhe movimentos estruturais e dilatações térmicas sem fissurar nem destacar.',
      },
    ],
    ctaText: 'Saber Mais Sobre o EPDM',
  },

  climateSection: {
    title: 'Ideal para o Clima Português',
    subtitle:
      'Portugal apresenta três zonas climáticas distintas. O EPDM foi concebido para superar cada uma delas.',
    zones: [
      {
        zone: 'Norte e Interior — Clima Temperado Oceânico',
        description:
          'Invernos frios com chuva persistente e verões quentes. O EPDM resiste a ciclos alternados de frio e calor sem empenar ou fissurar, mantendo a estanqueidade perfeita durante décadas.',
      },
      {
        zone: 'Lisboa, Centro e Alentejo — Clima Mediterrânico',
        description:
          'Verões secos e quentes com índice UV elevado. A resistência UV intrínseca do EPDM elimina a necessidade de revestimentos periódicos, reduzindo custos de manutenção a longo prazo.',
      },
      {
        zone: 'Algarve e Costa Atlântica — Clima Costeiro',
        description:
          'Salinidade do ar marítimo e humidade elevada são fatores que destroem o betume em poucos anos. O EPDM é inerte a cloretos e não oxida, garantindo proteção duradoura em zonas costeiras.',
      },
    ],
  },

  socialProof: {
    title: 'O Que Dizem os Nossos Clientes',
    testimonials: [
      {
        text: 'Instalámos membrana EPDM da Membriko numa cobertura plana de 1 200 m² há seis anos. Não houve uma única infiltração desde então. O trabalho foi rápido, limpo e sem perturbações para os nossos inquilinos.',
        author: 'António Ferreira',
        role: 'Gestor de Condomínio, Lisboa',
      },
      {
        text: 'Escolhemos a Membriko para impermeabilizar a nossa piscina natural. O resultado superou todas as expectativas — a membrana adapta-se perfeitamente à forma irregular do lago e a qualidade da água melhorou.',
        author: 'Maria João Costa',
        role: 'Proprietária de Quinta, Alentejo',
      },
      {
        text: 'Como empreiteiro, trabalho com várias membranas. O EPDM da Membriko é de longe o mais fácil de instalar e o mais fiável a longo prazo. Os meus clientes nunca se arrependem da escolha.',
        author: 'Carlos Silva',
        role: 'Empreiteiro de Construção, Porto',
      },
    ],
    projectCount: '500+ projetos concluídos em Portugal',
  },

  cta: {
    title: 'Pronto para Impermeabilizar com Qualidade?',
    subtitle:
      'Solicite um orçamento gratuito e sem compromisso. A nossa equipa avalia o seu projeto e apresenta a solução EPDM ideal.',
    buttonText: 'Pedir Orçamento Gratuito',
  },
}

const en: HomepageContent = {
  meta: {
    title: 'Membriko – EPDM Membrane Specialists in Portugal | High-Durability Waterproofing',
    description:
      'Membriko is Portugal\'s EPDM membrane installation specialist. Waterproofing with 50+ year lifespan, 100% recyclable and no hot-work required. Free quote available.',
    keywords: [
      'EPDM membrane Portugal',
      'EPDM waterproofing',
      'flat roof EPDM',
      'rubber membrane roofing',
      'EPDM installation Portugal',
      'pool waterproofing EPDM',
      'green roof EPDM',
      'synthetic rubber membrane',
      'waterproofing membrane',
      'Membriko',
      'EPDM roofing specialist',
    ],
  },

  hero: {
    headline: 'The EPDM Membrane That Protects Portugal',
    subtitle:
      'High-durability waterproofing with EPDM membrane — the choice of engineers and architects for roofs, pools, foundations and much more. No hot-work, no maintenance, 50+ year lifespan.',
    ctaQuote: 'Get a Free Quote',
    ctaApps: 'View All Applications',
    stats: [
      { value: '50+', label: 'Year Lifespan' },
      { value: '100%', label: 'Recyclable' },
      { value: '-45°C to +130°C', label: 'Temperature Range' },
      { value: '300–600%', label: 'Elongation' },
    ],
  },

  trustBar: {
    title: 'Certified and Approved to European Standards',
  },

  problemSolution: {
    problem: {
      title: 'The Problem with Traditional Membranes',
      description:
        'Bitumen, PVC and TPO deteriorate rapidly under the Portuguese sun, require frequent repairs and pose safety hazards during hot-work installation.',
      points: [
        'Only 15–25 year lifespan with bitumen',
        'UV degradation accelerates cracking and water ingress',
        'Torch-applied installation creates fire risk',
        'Expensive and disruptive annual maintenance',
        'PVC leaches harmful plasticisers over time',
        'Poor performance across variable climatic conditions',
      ],
    },
    solution: {
      title: 'The Membriko EPDM Solution',
      description:
        'EPDM membrane is vulcanised synthetic rubber with a proven 50+ year lifespan, cold-applied by Membriko\'s certified specialists across Portugal.',
      points: [
        'Lifespan exceeding 50 years with no significant degradation',
        'Inherent UV resistance — no additional coatings needed',
        'Cold installation — zero fire risk',
        'No mandatory preventive maintenance',
        '100% recyclable — the sustainable choice',
        'Performs from -45°C to +130°C',
      ],
    },
  },

  categoriesSection: {
    title: 'EPDM Applications for Every Project',
    subtitle:
      'From a residential roof to a water treatment plant — EPDM adapts to every challenge.',
  },

  featuredSection: {
    title: 'Featured Projects',
    subtitle: 'Real-world EPDM waterproofing projects across Portugal',
  },

  whyEpdmPreview: {
    title: 'Why Choose EPDM?',
    subtitle:
      'Six technical reasons why EPDM is the most advanced waterproofing membrane on the market.',
    points: [
      {
        icon: 'Clock',
        title: '50+ Year Durability',
        description:
          'Independent studies confirm EPDM membranes aged 28–32 years still perform "like new". No other membrane comes close to this longevity.',
      },
      {
        icon: 'Sun',
        title: 'Superior UV Resistance',
        description:
          'EPDM requires no additional UV coatings. Its molecular composition resists continuous solar radiation — essential in Portugal\'s sunny climate.',
      },
      {
        icon: 'Recycle',
        title: '100% Recyclable',
        description:
          'At end of life, EPDM membrane is fully recyclable. Life Cycle Assessments show a lower carbon footprint than PVC or bitumen.',
      },
      {
        icon: 'Flame',
        title: 'Cold-Applied Installation',
        description:
          'No torch, no fumes, no fire risk. Bonding is achieved with specialist adhesive, making installation safer for workers and buildings alike.',
      },
      {
        icon: 'Thermometer',
        title: 'Extreme Temperature Range',
        description:
          'Maintains flexibility and watertightness from -45°C to +130°C — perfect for Portugal\'s climate variations from the Minho to the Algarve.',
      },
      {
        icon: 'Zap',
        title: '300–600% Elongation',
        description:
          'Exceptional elasticity allows the membrane to follow structural movements and thermal expansion without cracking or delaminating.',
      },
    ],
    ctaText: 'Learn More About EPDM',
  },

  climateSection: {
    title: 'Ideal for the Portuguese Climate',
    subtitle:
      'Portugal has three distinct climate zones. EPDM was engineered to outperform in every one of them.',
    zones: [
      {
        zone: 'North and Interior — Oceanic Temperate Climate',
        description:
          'Cold, wet winters and hot summers create repeated freeze-thaw and thermal cycling. EPDM withstands these cycles without warping or cracking, maintaining a perfect seal for decades.',
      },
      {
        zone: 'Lisbon, Centre and Alentejo — Mediterranean Climate',
        description:
          'Dry, hot summers with high UV index. EPDM\'s inherent UV resistance eliminates the need for periodic coatings, significantly reducing long-term maintenance costs.',
      },
      {
        zone: 'Algarve and Atlantic Coast — Coastal Climate',
        description:
          'Marine salt air and high humidity destroy bitumen within years. EPDM is inert to chlorides and does not oxidise, delivering lasting protection in coastal environments.',
      },
    ],
  },

  socialProof: {
    title: 'What Our Clients Say',
    testimonials: [
      {
        text: 'We installed Membriko EPDM on a 1,200 m² flat roof six years ago. Not a single leak since. The work was fast, clean and caused no disruption to our tenants.',
        author: 'António Ferreira',
        role: 'Property Manager, Lisbon',
      },
      {
        text: 'We chose Membriko to waterproof our natural swimming pond. The result exceeded all expectations — the membrane adapts perfectly to the irregular shape and water quality has improved.',
        author: 'Maria João Costa',
        role: 'Farm Owner, Alentejo',
      },
      {
        text: 'As a contractor I work with many membranes. Membriko\'s EPDM is by far the easiest to install and the most reliable long-term. My clients never regret the choice.',
        author: 'Carlos Silva',
        role: 'Building Contractor, Porto',
      },
    ],
    projectCount: '500+ projects completed across Portugal',
  },

  cta: {
    title: 'Ready to Waterproof with Quality?',
    subtitle:
      'Request a free, no-obligation quote. Our team assesses your project and recommends the ideal EPDM solution.',
    buttonText: 'Request a Free Quote',
  },
}

export const homepage: { pt: HomepageContent; en: HomepageContent } = { pt, en }
