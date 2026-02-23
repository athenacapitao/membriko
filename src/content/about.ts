export interface AboutMeta {
  title: string
  description: string
  keywords: string[]
}

export interface AboutHero {
  headline: string
  subtitle: string
}

export interface AboutMission {
  title: string
  description: string
  vision: string
}

export interface AboutValue {
  icon: string
  title: string
  description: string
}

export interface AboutService {
  icon: string
  title: string
  description: string
  applications: string[]
}

export interface AboutCertification {
  code: string
  name: string
  description: string
  icon: string
}

export interface AboutWhyChoosePoint {
  icon: string
  title: string
  description: string
}

export interface AboutCta {
  title: string
  subtitle: string
  buttonText: string
}

export interface AboutContent {
  meta: AboutMeta
  hero: AboutHero
  mission: AboutMission
  values: {
    title: string
    items: AboutValue[]
  }
  services: {
    title: string
    subtitle: string
    items: AboutService[]
  }
  certifications: {
    title: string
    subtitle: string
    items: AboutCertification[]
  }
  whyChoose: {
    title: string
    points: AboutWhyChoosePoint[]
  }
  cta: AboutCta
}

const pt: AboutContent = {
  meta: {
    title: 'Sobre a Membriko — Especialistas em Impermeabilização EPDM em Portugal',
    description:
      'Conheça a Membriko, a empresa portuguesa especializada em instalação de membrana EPDM. A nossa missão, valores, certificações e porque somos a escolha certa para o seu projeto.',
    keywords: [
      'Membriko empresa',
      'especialistas EPDM Portugal',
      'empresa impermeabilização Portugal',
      'instalação membrana EPDM Lisboa',
      'empresa telhado EPDM',
      'impermeabilização certificada Portugal',
      'sobre Membriko',
      'empresa impermeabilização sustentável',
    ],
  },

  hero: {
    headline: 'Sobre a Membriko',
    subtitle:
      'Somos os especialistas portugueses em instalação de membrana EPDM. Combinamos conhecimento técnico profundo, materiais certificados e um compromisso inabalável com a qualidade para entregar impermeabilização que dura décadas.',
  },

  mission: {
    title: 'A Nossa Missão',
    description:
      'Na Membriko, dedicamo-nos a proteger edifícios, infraestruturas e investimentos com a tecnologia de impermeabilização mais avançada disponível — a membrana EPDM. Acreditamos que cada projeto merece atenção personalizada, materiais da mais alta qualidade e uma instalação executada com rigor técnico e profissionalismo. O nosso compromisso é com resultados duradouros — coberturas, piscinas e estruturas que protejam durante décadas, não anos.',
    vision:
      'A nossa visão é ser a referência nacional em soluções de impermeabilização EPDM, reconhecidos pela excelência técnica, pela sustentabilidade das nossas práticas e pela confiança que os nossos clientes depositam em nós durante décadas.',
  },

  values: {
    title: 'Os Nossos Valores',
    items: [
      {
        icon: 'Award',
        title: 'Qualidade sem Compromisso',
        description:
          'Utilizamos exclusivamente membranas EPDM de fabricantes certificados com normas EN 13956, ASTM D4637 e marcação CE. Cada instalação segue um protocolo rigoroso de controlo de qualidade — desde a preparação do substrato até à inspeção final das emendas e detalhes. Nenhum corte de custos que comprometa a integridade do sistema.',
      },
      {
        icon: 'Users',
        title: 'Experiência Comprovada',
        description:
          'A nossa equipa acumula anos de experiência em impermeabilização EPDM em Portugal, com centenas de projetos concluídos em coberturas residenciais, comerciais e industriais, piscinas, telhados verdes e infraestruturas de engenharia civil. Esse historial traduz-se em eficiência e previsibilidade para o cliente.',
      },
      {
        icon: 'Shield',
        title: 'Profissionalismo e Transparência',
        description:
          'Do primeiro contacto à entrega final, operamos com transparência, pontualidade e comunicação clara. Os nossos orçamentos são detalhados e sem custos ocultos. As nossas equipas chegam preparadas, trabalham com organização e deixam o estaleiro limpo. O cliente acompanha o progresso a cada etapa.',
      },
      {
        icon: 'Leaf',
        title: 'Responsabilidade Ambiental',
        description:
          'O EPDM é a membrana impermeabilizante com menor impacto ambiental ao longo do ciclo de vida — 100% reciclável, sem plastificantes ftalatos e com menor pegada de carbono que PVC ou betume. Escolhemos materiais e práticas que minimizam desperdício, evitam trabalho a quente e contribuem para edifícios mais sustentáveis.',
      },
    ],
  },

  services: {
    title: 'Os Nossos Serviços',
    subtitle: 'Soluções completas de impermeabilização EPDM para cada tipo de projeto',
    items: [
      {
        icon: 'Home',
        title: 'Impermeabilização de Coberturas',
        description:
          'Solução completa para coberturas planas e inclinadas com membrana EPDM. Desde moradias residenciais a grandes coberturas industriais e comerciais, garantimos impermeabilidade duradoura com instalação a frio e sem perturbações.',
        applications: [
          'Coberturas planas',
          'Coberturas inclinadas',
          'Terraços e varandas',
          'Coberturas metálicas',
          'Mansardas e coberturas complexas',
        ],
      },
      {
        icon: 'Leaf',
        title: 'Telhados Verdes e Coberturas Ajardinadas',
        description:
          'Sistemas de cobertura verde com membrana EPDM certificada FLL como resistente a raízes. Integramos a impermeabilização com drenagem, substrato e vegetação para criar coberturas verdes funcionais e sustentáveis.',
        applications: [
          'Telhados verdes extensivos',
          'Telhados verdes intensivos',
          'Jardins de cobertura',
          'Coberturas acessíveis com vegetação',
          'Integração solar fotovoltaica e vegetação',
        ],
      },
      {
        icon: 'Droplets',
        title: 'Piscinas, Lagos e Contenção de Água',
        description:
          'Impermeabilização de estruturas de retenção de água com membranas EPDM de espessura reforçada. Adequado para piscinas particulares e públicas, lagos ornamentais, reservatórios agrícolas e tanques de aquacultura.',
        applications: [
          'Piscinas residenciais e comerciais',
          'Lagos ornamentais e piscinas naturais',
          'Reservatórios de água',
          'Tanques de aquacultura',
          'Lagoas de tratamento de águas',
        ],
      },
      {
        icon: 'Wrench',
        title: 'Manutenção, Reparação e Reabilitação',
        description:
          'Serviços especializados de diagnóstico, reparação pontual e reabilitação completa de coberturas e impermeabilizações existentes. Podemos instalar EPDM sobre betume ou outras membranas degradadas, eliminando custos de remoção.',
        applications: [
          'Diagnóstico e inspeção de infiltrações',
          'Reparação pontual de membranas',
          'Reabilitação de coberturas betuminosas',
          'Substituição de membranas degradadas',
          'Manutenção preventiva de sistemas EPDM',
        ],
      },
    ],
  },

  certifications: {
    title: 'Certificações e Parcerias',
    subtitle:
      'Trabalhamos com os melhores fabricantes e cumprimos os mais elevados padrões de qualidade europeus',
    items: [
      {
        code: 'FLL',
        name: 'Certificação FLL para Telhados Verdes',
        description:
          'As membranas EPDM que instalamos possuem certificação FLL (Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau) confirmando resistência à penetração radicular — requisito obrigatório para sistemas de cobertura verde.',
        icon: 'Leaf',
      },
      {
        code: 'CE',
        name: 'Marcação CE — Conformidade Europeia',
        description:
          'Todos os produtos EPDM utilizados pela Membriko possuem marcação CE, confirmando conformidade com o Regulamento de Produtos de Construção (UE) 305/2011 e requisitos essenciais do Eurocódigo.',
        icon: 'Shield',
      },
      {
        code: 'ISO 9001',
        name: 'Sistema de Gestão da Qualidade ISO 9001',
        description:
          'A cadeia de fornecimento Membriko está certificada ISO 9001, garantindo processos consistentes de fabrico, controlo de qualidade e rastreabilidade total dos materiais instalados.',
        icon: 'Award',
      },
      {
        code: 'EN 13956',
        name: 'Norma Europeia EN 13956',
        description:
          'Os produtos que utilizamos cumprem a norma europeia harmonizada EN 13956 para produtos de impermeabilização flexíveis, incluindo ensaios de resistência UV, elongação, resistência à tração e comportamento a baixa temperatura.',
        icon: 'FileCheck',
      },
    ],
  },

  whyChoose: {
    title: 'Porquê Escolher a Membriko?',
    points: [
      {
        icon: 'Target',
        title: 'Preços Transparentes',
        description:
          'Os nossos orçamentos são detalhados por área, tipo de membrana, espessura, detalhes construtivos e mão de obra — sem custos ocultos nem surpresas no final. Sabemos que a confiança se constrói desde o primeiro contacto.',
      },
      {
        icon: 'Shield',
        title: 'Garantia de 20 Anos',
        description:
          'Todas as instalações Membriko incluem garantia de 20 anos cobrindo defeitos de material e de mão de obra. Complementada com a garantia do fabricante do produto, o cliente fica protegido por uma dupla cobertura que nenhum concorrente iguala.',
      },
      {
        icon: 'Heart',
        title: 'Serviço Personalizado',
        description:
          'Cada projeto é único. Realizamos visita técnica gratuita ao local, analisamos as condições específicas e recomendamos a solução EPDM mais adequada. Acompanhamos o cliente do orçamento à entrega final.',
      },
      {
        icon: 'Globe',
        title: 'Experiência Local',
        description:
          'Conhecemos profundamente o clima português, os regulamentos de construção nacionais e as práticas construtivas locais. Operamos em todo o território continental e ilhas para projetos de maior dimensão.',
      },
    ],
  },

  cta: {
    title: 'Vamos Trabalhar Juntos?',
    subtitle:
      'Entre em contacto para uma conversa sem compromisso sobre o seu projeto. A experiência Membriko começa com um orçamento gratuito.',
    buttonText: 'Pedir Orçamento Grátis',
  },
}

const en: AboutContent = {
  meta: {
    title: 'About Membriko — EPDM Membrane Waterproofing Specialists in Portugal',
    description:
      "Learn about Membriko, Portugal's specialist in EPDM membrane installation. Our mission, values, certifications and why we are the right choice for your waterproofing project.",
    keywords: [
      'Membriko company',
      'EPDM specialists Portugal',
      'waterproofing company Portugal',
      'EPDM membrane installation Lisbon',
      'EPDM roofing company',
      'certified waterproofing Portugal',
      'about Membriko',
      'sustainable waterproofing company Portugal',
    ],
  },

  hero: {
    headline: 'About Membriko',
    subtitle:
      "We are Portugal's specialists in EPDM membrane installation. We combine deep technical knowledge, certified materials and an unwavering commitment to quality to deliver waterproofing that lasts for decades.",
  },

  mission: {
    title: 'Our Mission',
    description:
      'At Membriko, we are dedicated to protecting buildings, infrastructure and investments with the most advanced waterproofing technology available — EPDM membrane. We believe every project deserves personalised attention, the highest quality materials and installation executed with technical rigour and professionalism. Our commitment is to lasting results — roofs, pools and structures that protect for decades, not years.',
    vision:
      'Our vision is to be the national reference for EPDM waterproofing solutions, recognised for technical excellence, the sustainability of our practices and the trust our clients place in us for decades.',
  },

  values: {
    title: 'Our Values',
    items: [
      {
        icon: 'Award',
        title: 'Quality Without Compromise',
        description:
          'We exclusively use EPDM membranes from manufacturers certified to EN 13956, ASTM D4637 and CE marking standards. Every installation follows a rigorous quality control protocol — from substrate preparation through to final inspection of seams and details. No cost-cutting that compromises system integrity.',
      },
      {
        icon: 'Users',
        title: 'Proven Experience',
        description:
          "Our team has accumulated years of experience in EPDM waterproofing across Portugal, with hundreds of completed projects in residential, commercial and industrial roofing, swimming pools, green roofs and civil engineering infrastructure. That track record translates into efficiency and predictability for our clients.",
      },
      {
        icon: 'Shield',
        title: 'Professionalism and Transparency',
        description:
          'From the first enquiry to final handover, we operate with transparency, punctuality and clear communication. Our quotes are detailed and free of hidden costs. Our teams arrive prepared, work in an organised manner and leave the site clean. The client tracks progress at every stage.',
      },
      {
        icon: 'Leaf',
        title: 'Environmental Responsibility',
        description:
          'EPDM is the waterproofing membrane with the lowest environmental impact across its lifecycle — 100% recyclable, free of phthalate plasticisers and with a lower carbon footprint than PVC or bitumen. We choose materials and practices that minimise waste, avoid hot-work and contribute to more sustainable buildings.',
      },
    ],
  },

  services: {
    title: 'Our Services',
    subtitle: 'Complete EPDM waterproofing solutions for every type of project',
    items: [
      {
        icon: 'Home',
        title: 'Roof Waterproofing',
        description:
          'Complete solution for flat and pitched roofs with EPDM membrane. From residential homes to large industrial and commercial roofs, we guarantee lasting watertightness with cold-applied installation and minimal disruption.',
        applications: [
          'Flat roofs',
          'Pitched roofs',
          'Terraces and balconies',
          'Metal roofs',
          'Mansard and complex roofs',
        ],
      },
      {
        icon: 'Leaf',
        title: 'Green Roofs and Planted Roof Systems',
        description:
          'Green roof systems with EPDM membrane certified FLL root-resistant. We integrate waterproofing with drainage, substrate and vegetation to create functional, sustainable green roofs.',
        applications: [
          'Extensive green roofs',
          'Intensive green roofs',
          'Roof gardens',
          'Accessible planted roofs',
          'Combined solar PV and vegetation roofs',
        ],
      },
      {
        icon: 'Droplets',
        title: 'Pools, Ponds and Water Containment',
        description:
          'Waterproofing of water-retaining structures with heavy-gauge EPDM membranes. Suitable for private and public swimming pools, ornamental lakes, agricultural reservoirs and aquaculture tanks.',
        applications: [
          'Residential and commercial pools',
          'Ornamental and natural swimming ponds',
          'Water storage reservoirs',
          'Aquaculture tanks',
          'Water treatment lagoons',
        ],
      },
      {
        icon: 'Wrench',
        title: 'Maintenance, Repair and Rehabilitation',
        description:
          'Specialist diagnostic, point-repair and full rehabilitation services for existing roofs and waterproofing. We can install EPDM over degraded bitumen or other membranes, eliminating removal costs.',
        applications: [
          'Leak diagnosis and inspection',
          'Spot membrane repairs',
          'Bituminous roof rehabilitation',
          'Degraded membrane replacement',
          'Preventive maintenance of EPDM systems',
        ],
      },
    ],
  },

  certifications: {
    title: 'Certifications and Partnerships',
    subtitle:
      'We work with the best manufacturers and comply with the highest European quality standards',
    items: [
      {
        code: 'FLL',
        name: 'FLL Green Roof Certification',
        description:
          'The EPDM membranes we install hold FLL (Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau) certification confirming resistance to root penetration — a mandatory requirement for green roof systems.',
        icon: 'Leaf',
      },
      {
        code: 'CE',
        name: 'CE Marking — European Conformity',
        description:
          "All EPDM products used by Membriko carry CE marking, confirming compliance with the Construction Products Regulation (EU) 305/2011 and essential Eurocode requirements.",
        icon: 'Shield',
      },
      {
        code: 'ISO 9001',
        name: 'ISO 9001 Quality Management',
        description:
          "Membriko's supply chain is ISO 9001 certified, ensuring consistent manufacturing processes, quality control and full traceability of installed materials.",
        icon: 'Award',
      },
      {
        code: 'EN 13956',
        name: 'European Standard EN 13956',
        description:
          'The products we use comply with harmonised European standard EN 13956 for flexible waterproofing sheets, including UV resistance, elongation, tensile strength and low-temperature performance tests.',
        icon: 'FileCheck',
      },
    ],
  },

  whyChoose: {
    title: 'Why Choose Membriko?',
    points: [
      {
        icon: 'Target',
        title: 'Transparent Pricing',
        description:
          'Our quotes are itemised by area, membrane type, thickness, construction details and labour — with no hidden costs or end-of-project surprises. We know that trust is built from the very first contact.',
      },
      {
        icon: 'Shield',
        title: '20-Year Quality Guarantee',
        description:
          "All Membriko installations include a 20-year warranty covering material and workmanship defects. Combined with the product manufacturer's guarantee, the client is protected by dual coverage that no competitor matches.",
      },
      {
        icon: 'Heart',
        title: 'Personalised Service',
        description:
          'Every project is unique. We carry out a free technical site visit, analyse specific conditions and recommend the most appropriate EPDM solution. We accompany the client from quote to final handover.',
      },
      {
        icon: 'Globe',
        title: 'Local Experience',
        description:
          'We have deep knowledge of the Portuguese climate, national building regulations and local construction practices. We operate throughout mainland Portugal and the islands for larger projects.',
      },
    ],
  },

  cta: {
    title: "Let's Work Together?",
    subtitle:
      'Get in touch for a no-obligation conversation about your project. The Membriko experience begins with a free quote.',
    buttonText: 'Request a Free Quote',
  },
}

export const about: { pt: AboutContent; en: AboutContent } = { pt, en }
