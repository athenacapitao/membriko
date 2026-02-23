export interface WhyEpdmMeta {
  title: string
  description: string
  keywords: string[]
}

export interface WhyEpdmHero {
  headline: string
  subtitle: string
}

export interface WhyEpdmBenefit {
  icon: string
  title: string
  description: string
  detail: string
}

export interface ComparisonMetric {
  metric: string
  epdm: string
  tpo: string
  pvc: string
  bitumen: string
  /** Higher is better — score from 1 to 5 for visualisation purposes */
  epdmScore: number
}

export interface CostAnalysisEntry {
  year: number
  epdm: number
  tpo: number
  pvc: number
  bitumen: number
}

export interface ScientificEvidence {
  source: string
  year: string
  finding: string
  significance: string
}

export interface ClimateAdvantage {
  zone: string
  icon: string
  description: string
  keyBenefit: string
}

export interface WhyEpdmStandard {
  code: string
  name: string
  description: string
}

export interface WhyEpdmFaq {
  question: string
  answer: string
}

export interface WhyEpdmCta {
  title: string
  subtitle: string
  primaryButton: string
  secondaryButton: string
}

export interface WhyEpdmContent {
  meta: WhyEpdmMeta
  hero: WhyEpdmHero
  benefits: WhyEpdmBenefit[]
  comparisonTable: {
    title: string
    subtitle: string
    metrics: ComparisonMetric[]
  }
  costAnalysis: {
    title: string
    subtitle: string
    description: string
    data: CostAnalysisEntry[]
    note: string
  }
  scientificEvidence: {
    title: string
    subtitle: string
    items: ScientificEvidence[]
    disclaimer: string
  }
  climateAdvantage: {
    title: string
    subtitle: string
    zones: ClimateAdvantage[]
  }
  standards: {
    title: string
    subtitle: string
    items: WhyEpdmStandard[]
  }
  faqs: {
    title: string
    items: WhyEpdmFaq[]
  }
  cta: WhyEpdmCta
}

const pt: WhyEpdmContent = {
  meta: {
    title: 'Porquê EPDM? Vantagens, Comparações e Dados Técnicos | Membriko',
    description:
      'Descubra porque a membrana EPDM supera PVC, TPO e betume. Dados técnicos reais, comparações de custo a 30 anos, evidência científica e vantagens para o clima português.',
    keywords: [
      'vantagens EPDM',
      'EPDM vs PVC',
      'EPDM vs betume',
      'EPDM vs TPO',
      'membrana EPDM durabilidade',
      'impermeabilização EPDM Portugal',
      'custo EPDM ciclo de vida',
      'membrana borracha sintética vantagens',
      'EPDM resistência UV',
      'comparação membranas impermeabilizantes',
    ],
  },

  hero: {
    headline: 'Porquê EPDM? A Ciência Por Detrás da Melhor Membrana',
    subtitle:
      'Não é marketing — são factos técnicos comprovados por décadas de investigação académica e milhões de metros quadrados instalados em todo o mundo. Descubra porque engenheiros e arquitetos escolhem EPDM.',
  },

  benefits: [
    {
      icon: 'Clock',
      title: 'Durabilidade Extraordinária',
      description: 'Vida útil comprovada superior a 50 anos',
      detail:
        'A EPDM Roofing Association conduziu estudos em membranas instaladas há 28–32 anos e verificou que estas continuavam a funcionar "como novas", sem fissuração, delaminação ou perda de impermeabilidade. A Elevate (antiga Carlisle) projeta uma vida útil esperada de 40+ anos para os seus produtos EPDM. Nenhuma outra categoria de membrana apresenta dados de longevidade comparáveis.',
    },
    {
      icon: 'Sun',
      title: 'Resistência UV Intrínseca',
      description: 'Sem degradação sob exposição solar contínua',
      detail:
        'O EPDM contém grupos diene não conjugados na sua cadeia molecular que absorvem e dissipam energia UV sem quebrar as ligações principais do polímero. Enquanto o PVC necessita de estabilizadores UV adicionais que se esgotam ao longo do tempo, e o betume oxida e endurece, o EPDM mantém as suas propriedades mecânicas após décadas de exposição solar. Para Portugal — com 2 500 a 3 200 horas de sol por ano — esta característica é determinante.',
    },
    {
      icon: 'Recycle',
      title: '100% Reciclável',
      description: 'O material impermeabilizante mais sustentável do mercado',
      detail:
        'No fim de vida útil, as membranas EPDM podem ser recolhidas e transformadas em granulado de borracha para uso em pavimentos desportivos, enchimento de campos de futebol ou peças técnicas. Uma Avaliação de Ciclo de Vida (LCA) publicada em 2010 demonstrou que o EPDM apresenta menor potencial de aquecimento global, menor acidificação e menor depleção de ozono estratosférico do que membranas PVC equivalentes. O EPDM não contém plastificantes ftalatos nem metais pesados.',
    },
    {
      icon: 'Flame',
      title: 'Instalação a Frio — Sem Chama',
      description: 'Zero risco de incêndio durante a aplicação',
      detail:
        'A instalação de betume oxidado com maçarico é responsável por centenas de incêndios em coberturas por ano na Europa. O EPDM é fixado com adesivos de contacto à base de solvente ou aquosos, ou com fixações mecânicas — sem qualquer fonte de calor. Esta vantagem reduz custos de seguro, simplifica procedimentos de obra e é cada vez mais exigida por regulamentos de saúde e segurança no trabalho. A instalação é mais rápida, mais limpa e completamente segura em edifícios ocupados.',
    },
    {
      icon: 'Thermometer',
      title: 'Gama de Temperatura -45°C a +130°C',
      description: 'Desempenho em condições climáticas extremas',
      detail:
        'O EPDM mantém flexibilidade total a temperaturas negativas extremas (-45°C), evitando a fissuração por contração que afeta betume e PVC. No extremo oposto, resiste a +130°C sem amolecer, fundir ou perder adesão — importante em coberturas expostas ao sol de verão, onde a temperatura superficial pode ultrapassar 80°C. Esta gama supera largamente a do PVC (+60°C) e do betume oxidado (+80°C).',
    },
    {
      icon: 'Zap',
      title: 'Elongação de 300–600%',
      description: 'Elasticidade que acompanha qualquer movimento estrutural',
      detail:
        'A capacidade de elongação de 300–600% (conforme norma ASTM D4637) permite que o EPDM acompanhe movimentos estruturais, assentamentos, dilatações térmicas e vibrações sem fissurar ou destacar. O betume, com elongação inferior a 30%, fissura facilmente nas juntas e cantos. Esta propriedade é especialmente valiosa em edifícios de grande vão, coberturas metálicas e zonas sísmicas como Lisboa e Vale do Tejo.',
    },
  ],

  comparisonTable: {
    title: 'EPDM vs TPO vs PVC vs Betume',
    subtitle: 'Comparação técnica objetiva baseada em dados de normas europeias e internacionais',
    metrics: [
      {
        metric: 'Vida Útil Esperada',
        epdm: '40–50+ anos',
        tpo: '20–30 anos',
        pvc: '20–30 anos',
        bitumen: '15–25 anos',
        epdmScore: 5,
      },
      {
        metric: 'Resistência UV',
        epdm: 'Excelente — intrínseca',
        tpo: 'Boa — estabilizadores UV',
        pvc: 'Moderada — degrada-se',
        bitumen: 'Fraca — oxida rapidamente',
        epdmScore: 5,
      },
      {
        metric: 'Gama Temperatura',
        epdm: '-45°C a +130°C',
        tpo: '-40°C a +100°C',
        pvc: '-15°C a +60°C',
        bitumen: '-5°C a +80°C',
        epdmScore: 5,
      },
      {
        metric: 'Elongação',
        epdm: '300–600%',
        tpo: '250–400%',
        pvc: '150–300%',
        bitumen: '< 30%',
        epdmScore: 5,
      },
      {
        metric: 'Risco de Incêndio na Instalação',
        epdm: 'Nenhum — instalação a frio',
        tpo: 'Baixo — soldadura quente',
        pvc: 'Baixo — soldadura quente',
        bitumen: 'Alto — maçarico',
        epdmScore: 5,
      },
      {
        metric: 'Reciclabilidade',
        epdm: '100% reciclável',
        tpo: 'Parcialmente reciclável',
        pvc: 'Parcialmente reciclável',
        bitumen: 'Limitada',
        epdmScore: 5,
      },
      {
        metric: 'Impacto Ambiental (LCA)',
        epdm: 'Baixo — melhor da categoria',
        tpo: 'Médio',
        pvc: 'Alto — contém ftalatos',
        bitumen: 'Alto — derivado de petróleo',
        epdmScore: 5,
      },
      {
        metric: 'Custo de Ciclo de Vida (30 anos)',
        epdm: 'O mais baixo',
        tpo: 'Médio',
        pvc: 'Médio-Alto',
        bitumen: 'O mais alto',
        epdmScore: 5,
      },
      {
        metric: 'Compatibilidade com Telhados Verdes',
        epdm: 'Excelente — resistente a raízes (FLL)',
        tpo: 'Boa',
        pvc: 'Boa',
        bitumen: 'Requer proteção adicional',
        epdmScore: 5,
      },
    ],
  },

  costAnalysis: {
    title: 'Análise de Custo Total de Propriedade — 30 Anos',
    subtitle:
      'O EPDM tem custo inicial ligeiramente superior mas o custo acumulado ao longo de 30 anos é significativamente inferior.',
    description:
      'Considerando instalação inicial, manutenção periódica, reparações e substituição antecipada, o EPDM apresenta o menor custo total de propriedade ao longo de 30 anos. Os valores abaixo são indicativos para uma cobertura de 200 m² e incluem mão de obra, materiais e IVA.',
    data: [
      { year: 0, epdm: 4800, tpo: 4200, pvc: 3800, bitumen: 2400 },
      { year: 5, epdm: 4800, tpo: 4500, pvc: 4300, bitumen: 3200 },
      { year: 10, epdm: 4800, tpo: 4800, pvc: 5100, bitumen: 4400 },
      { year: 15, epdm: 4800, tpo: 5400, pvc: 6200, bitumen: 7200 },
      { year: 20, epdm: 4800, tpo: 9200, pvc: 10800, bitumen: 11600 },
      { year: 25, epdm: 5200, tpo: 9800, pvc: 11500, bitumen: 14200 },
      { year: 30, epdm: 5600, tpo: 13400, pvc: 15200, bitumen: 18800 },
    ],
    note:
      'Valores indicativos em euros. A substituição de betume aos 15 anos e de PVC/TPO aos 20 anos inclui custo de remoção do material antigo.',
  },

  scientificEvidence: {
    title: 'Base Científica e Estudos Independentes',
    subtitle: 'O desempenho do EPDM está documentado por décadas de investigação académica e industrial',
    items: [
      {
        source: 'EPDM Roofing Association — Field Study',
        year: '2019',
        finding:
          'Membranas EPDM com 28–32 anos de instalação foram removidas e analisadas laboratorialmente. Resultado: propriedades físicas e mecânicas mantidas em níveis "como novos", sem fissuração, delaminação ou perda de hidrorepelência.',
        significance:
          'Confirmação direta de longevidade superior a 30 anos em condições reais de exposição.',
      },
      {
        source: 'Elevate (Carlisle SynTec) — Product Testing',
        year: '2021',
        finding:
          'Testes acelerados de envelhecimento (ASTM G155 xenon arc) e análise de amostras de campo confirmam vida útil esperada de 40+ anos para membranas EPDM 1,14 mm e 1,52 mm.',
        significance: 'Suporta especificações de garantia de produto até 30 anos.',
      },
      {
        source: 'Life Cycle Assessment of Flat Roof Membranes — Journal of Cleaner Production',
        year: '2010',
        finding:
          'Comparação LCA entre EPDM, PVC, betume APP e betume SBS em 1 m² ao longo de 50 anos. O EPDM apresentou menor potencial de aquecimento global (GWP), menor acidificação e menor consumo de energia primária.',
        significance:
          'Base científica para argumentos de sustentabilidade e certificação BREEAM/LEED.',
      },
      {
        source: 'Universidade do Minho — Departamento de Engenharia Civil',
        year: '2018',
        finding:
          'Estudo sobre comportamento de membranas impermeabilizantes em coberturas planas em Portugal. Conclusão: o EPDM apresentou menor taxa de falha e menor número de intervenções de manutenção ao longo de 15 anos de monitorização.',
        significance: 'Dados específicos para o contexto climático e construtivo português.',
      },
      {
        source: 'ASTM D4637 — Standard Specification for EPDM Sheet',
        year: 'Atual',
        finding:
          'Norma que define requisitos mínimos: elongação na rotura ≥ 300%, tensão de rotura ≥ 9 MPa, resistência ao ozono, estabilidade dimensional. Os produtos Membriko superam todos os requisitos mínimos.',
        significance:
          'Garante que as membranas instaladas pela Membriko cumprem padrões internacionais rigorosos.',
      },
    ],
    disclaimer:
      'Fontes: EPDM Roofing Association, Elevate/Carlisle SynTec, Journal of Cleaner Production (2010), Universidade do Minho (2018), ASTM International.',
  },

  climateAdvantage: {
    title: 'EPDM e o Clima Português',
    subtitle:
      'Três zonas climáticas, um material que supera em todas elas',
    zones: [
      {
        zone: 'Norte e Interior',
        icon: 'CloudRain',
        description:
          'Clima temperado oceânico com invernos frios e húmidos. Precipitação acumulada anual de 1 200–2 000 mm no Minho e Douro. Geadas ocasionais no interior transmontano.',
        keyBenefit:
          'O EPDM mantém flexibilidade a -45°C, resistindo a ciclos de gelo-degelo sem fissurar. A sua impermeabilidade não depende de juntas soldadas que podem falhar com movimentos térmicos.',
      },
      {
        zone: 'Centro, Lisboa e Alentejo',
        icon: 'Sun',
        description:
          'Clima mediterrânico com verões secos e quentes (35–42°C em Évora e Beja), alta insolação anual e vento de Nordeste seco no interior.',
        keyBenefit:
          'A resistência UV intrínseca do EPDM mantém as propriedades físicas após milhares de horas de irradiação solar. A superfície não endurece, não fissura e não necessita de revestimentos refletores adicionais.',
      },
      {
        zone: 'Algarve e Costa Atlântica',
        icon: 'Waves',
        description:
          'Clima costeiro com salinidade atmosférica elevada, humidade relativa alta e verões quentes com índice UV extremo (índice UV > 8 em julho-agosto).',
        keyBenefit:
          'O EPDM é quimicamente inerte a cloretos, sulfatos e outros compostos do aerossol marítimo. Não oxida, não corrói e mantém aderência mesmo em superfícies expostas a ciclos de humectação e secagem.',
      },
    ],
  },

  standards: {
    title: 'Certificações e Normas',
    subtitle:
      'Os produtos e processos Membriko estão em conformidade com todas as normas europeias e internacionais relevantes',
    items: [
      {
        code: 'EN 13956',
        name: 'Produtos de Impermeabilização Flexíveis',
        description:
          'Norma europeia harmonizada que especifica requisitos para mantas de impermeabilização de plástico e borracha para coberturas. Define ensaios de resistência à tração, elongação, dobramento a baixa temperatura e envelhecimento.',
      },
      {
        code: 'ASTM D4637',
        name: 'EPDM Sheet Waterproofing Standard',
        description:
          'Norma americana que estabelece requisitos físicos mínimos para membranas EPDM em coberturas: elongação ≥ 300%, tensão de rotura ≥ 9 MPa, resistência ao ozono e envelhecimento acelerado.',
      },
      {
        code: 'CE',
        name: 'Marcação CE — Conformidade Europeia',
        description:
          'Todos os produtos EPDM Membriko possuem marcação CE, confirmando conformidade com a Diretiva de Produtos de Construção e os requisitos essenciais do Eurocódigo.',
      },
      {
        code: 'LNEC',
        name: 'Laboratório Nacional de Engenharia Civil',
        description:
          'Aprovação do LNEC para uso de membranas EPDM em Portugal, assegurando adequação ao contexto climático e construtivo nacional.',
      },
      {
        code: 'ISO 9001',
        name: 'Sistema de Gestão da Qualidade',
        description:
          'Certificação ISO 9001 da cadeia de fornecimento, garantindo processos consistentes de fabrico, controlo de qualidade e rastreabilidade de materiais.',
      },
      {
        code: 'FLL',
        name: 'Diretriz Alemã para Telhados Verdes',
        description:
          'A norma FLL (Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau) certifica membranas EPDM como resistentes a raízes — essencial para sistemas de cobertura verde.',
      },
    ],
  },

  faqs: {
    title: 'Perguntas Frequentes sobre EPDM',
    items: [
      {
        question: 'Qual é a diferença entre EPDM e as outras membranas?',
        answer:
          'O EPDM (Etileno Propileno Dieno Monómero) é uma borracha sintética vulcanizada, fundamentalmente diferente dos termoplásticos (PVC, TPO) e do betume. A sua estrutura molecular em cadeia entrecruzada confere-lhe elasticidade permanente, resistência UV intrínseca e estabilidade térmica num intervalo muito mais largo do que qualquer alternativa. Em termos simples: não endurece com o calor, não fissura com o frio e não se degrada com a luz solar.',
      },
      {
        question: 'O EPDM é realmente mais caro do que o betume?',
        answer:
          'O custo de instalação inicial do EPDM pode ser 20–40% superior ao betume, mas o custo total de propriedade ao longo de 30 anos é significativamente inferior. O betume requer aplicação de proteção UV de 2 em 2 anos, reparações frequentes de fissuras e substituição completa ao fim de 15–20 anos. O EPDM não requer manutenção regular e a sua substituição raramente ocorre antes dos 40–50 anos. Para qualquer projeto com horizonte superior a 10 anos, o EPDM é a escolha mais económica.',
      },
      {
        question: 'Posso instalar EPDM por cima de betume existente?',
        answer:
          'Em muitos casos, sim. Se a estrutura de suporte estiver em bom estado, é possível instalar EPDM diretamente sobre betume existente, eliminando o custo e o desperdício de remoção. A Membriko realiza sempre uma inspeção prévia para avaliar a compatibilidade e o estado do substrato antes de recomendar esta abordagem.',
      },
      {
        question: 'Qual é a espessura recomendada de membrana EPDM?',
        answer:
          'As espessuras mais comuns são 1,14 mm e 1,52 mm. Para coberturas residenciais e comerciais standard, 1,14 mm é suficiente. Para aplicações exigentes como telhados verdes (pressão de raízes), piscinas e reservatórios, ou zonas de tráfego pedonal intenso, recomendamos 1,52 mm ou superior. A Membriko dimensiona a espessura adequada com base nas cargas previstas e condições de exposição.',
      },
      {
        question: 'Como é feita a soldadura/união das emendas?',
        answer:
          'As emendas em EPDM são realizadas com fita butílica de dupla face ou adesivo de emenda específico, criando uma ligação vulcanizada entre folhas adjacentes. Quando corretamente executadas, as emendas tornam-se o ponto mais forte de todo o sistema — não o ponto fraco. A Membriko usa exclusivamente materiais de emenda compatíveis com a membrana e aplica protocolos de controlo de qualidade em todas as juntas.',
      },
      {
        question: 'O EPDM é compatível com telhados verdes?',
        answer:
          'Sim. O EPDM possui certificação FLL (norma alemã para telhados verdes) como membrana resistente a raízes. Ao contrário de algumas membranas bituminosas que requerem uma manta de proteção adicional, o EPDM resiste diretamente à penetração de raízes, simplificando o sistema construtivo e reduzindo o peso total da cobertura.',
      },
      {
        question: 'Quanto tempo demora a instalação?',
        answer:
          'Uma cobertura plana simples de 100–200 m² pode ser concluída em 1–2 dias. Projetos maiores ou com muitos detalhes (rufos, passagens de tubagens, lanternins) podem demorar mais. Ao contrário do betume, não há tempo de espera para cura ou secagem — a membrana EPDM fica imediatamente impermeável após instalação, sem necessidade de condições meteorológicas específicas.',
      },
      {
        question: 'Que garantia oferece a Membriko para instalações EPDM?',
        answer:
          'A Membriko oferece garantia de 20 anos nas instalações de membrana EPDM, cobrindo defeitos de material e de mão de obra. Os fabricantes dos produtos EPDM que utilizamos oferecem garantias de produto de 20–30 anos. Em conjunto, o cliente fica coberto com dupla garantia — do material e da aplicação — por um período de tempo que nenhuma outra membrana consegue igualar.',
      },
    ],
  },

  cta: {
    title: 'Convencido? Fale com os Especialistas',
    subtitle:
      'A equipa Membriko está disponível para analisar o seu projeto e recomendar a solução EPDM mais adequada. Orçamento gratuito e sem compromisso.',
    primaryButton: 'Pedir Orçamento Gratuito',
    secondaryButton: 'Ver Aplicações EPDM',
  },
}

const en: WhyEpdmContent = {
  meta: {
    title: 'Why EPDM? Technical Advantages, Comparisons and Data | Membriko',
    description:
      'Discover why EPDM membrane outperforms PVC, TPO and bitumen. Real technical data, 30-year cost comparisons, scientific evidence and advantages for the Portuguese climate.',
    keywords: [
      'EPDM membrane advantages',
      'EPDM vs PVC roofing',
      'EPDM vs bitumen',
      'EPDM vs TPO',
      'EPDM membrane durability',
      'EPDM waterproofing Portugal',
      'EPDM lifecycle cost',
      'synthetic rubber membrane benefits',
      'EPDM UV resistance',
      'waterproofing membrane comparison',
    ],
  },

  hero: {
    headline: 'Why EPDM? The Science Behind the Best Membrane',
    subtitle:
      'This is not marketing — these are technical facts backed by decades of academic research and millions of square metres installed worldwide. Discover why engineers and architects choose EPDM.',
  },

  benefits: [
    {
      icon: 'Clock',
      title: 'Extraordinary Durability',
      description: 'Proven lifespan exceeding 50 years',
      detail:
        'The EPDM Roofing Association conducted studies on membranes installed 28–32 years prior and found they were still performing "like new", with no cracking, delamination or loss of watertightness. Elevate (formerly Carlisle) projects an expected service life of 40+ years for its EPDM products. No other membrane category presents comparable longevity data.',
    },
    {
      icon: 'Sun',
      title: 'Inherent UV Resistance',
      description: 'No degradation under continuous solar exposure',
      detail:
        'EPDM contains unconjugated diene groups in its molecular chain that absorb and dissipate UV energy without breaking the main polymer bonds. While PVC requires additional UV stabilisers that are consumed over time, and bitumen oxidises and hardens, EPDM retains its mechanical properties after decades of solar exposure. For Portugal — with 2,500 to 3,200 sunshine hours per year — this characteristic is decisive.',
    },
    {
      icon: 'Recycle',
      title: '100% Recyclable',
      description: 'The most sustainable waterproofing material on the market',
      detail:
        'At end of life, EPDM membranes can be collected and processed into rubber granulate for use in sports surfaces, football pitch infill or technical moulded parts. A Life Cycle Assessment (LCA) published in 2010 demonstrated that EPDM has lower global warming potential, lower acidification and lower stratospheric ozone depletion than equivalent PVC membranes. EPDM contains no phthalate plasticisers or heavy metals.',
    },
    {
      icon: 'Flame',
      title: 'Cold-Applied Installation — No Flame',
      description: 'Zero fire risk during application',
      detail:
        'Torch-applied bitumen installation is responsible for hundreds of roof fires per year across Europe. EPDM is bonded with solvent-based or water-based contact adhesives, or mechanical fastening — with no heat source whatsoever. This advantage reduces insurance costs, simplifies site safety procedures and is increasingly mandated by occupational health and safety regulations. Installation is faster, cleaner and completely safe in occupied buildings.',
    },
    {
      icon: 'Thermometer',
      title: 'Temperature Range: -45°C to +130°C',
      description: 'Reliable performance in extreme climatic conditions',
      detail:
        'EPDM maintains full flexibility at extreme sub-zero temperatures (-45°C), preventing the contraction cracking that affects bitumen and PVC. At the opposite extreme, it withstands +130°C without softening, melting or losing adhesion — important on sun-exposed roofs where surface temperatures can exceed 80°C. This range far exceeds that of PVC (+60°C) and oxidised bitumen (+80°C).',
    },
    {
      icon: 'Zap',
      title: '300–600% Elongation',
      description: 'Elasticity that accommodates any structural movement',
      detail:
        'The 300–600% elongation capacity (per ASTM D4637) allows EPDM to follow structural movements, settlements, thermal expansion and vibrations without cracking or delaminating. Bitumen, with elongation below 30%, readily cracks at joints and corners. This property is especially valuable in long-span buildings, metal roofs and seismic zones such as the Lisbon and Tagus Valley area.',
    },
  ],

  comparisonTable: {
    title: 'EPDM vs TPO vs PVC vs Bitumen',
    subtitle:
      'Objective technical comparison based on European and international standards data',
    metrics: [
      {
        metric: 'Expected Service Life',
        epdm: '40–50+ years',
        tpo: '20–30 years',
        pvc: '20–30 years',
        bitumen: '15–25 years',
        epdmScore: 5,
      },
      {
        metric: 'UV Resistance',
        epdm: 'Excellent — inherent',
        tpo: 'Good — UV stabilisers',
        pvc: 'Moderate — degrades',
        bitumen: 'Poor — oxidises rapidly',
        epdmScore: 5,
      },
      {
        metric: 'Temperature Range',
        epdm: '-45°C to +130°C',
        tpo: '-40°C to +100°C',
        pvc: '-15°C to +60°C',
        bitumen: '-5°C to +80°C',
        epdmScore: 5,
      },
      {
        metric: 'Elongation',
        epdm: '300–600%',
        tpo: '250–400%',
        pvc: '150–300%',
        bitumen: '< 30%',
        epdmScore: 5,
      },
      {
        metric: 'Installation Fire Risk',
        epdm: 'None — cold-applied',
        tpo: 'Low — heat welding',
        pvc: 'Low — heat welding',
        bitumen: 'High — torch-applied',
        epdmScore: 5,
      },
      {
        metric: 'Recyclability',
        epdm: '100% recyclable',
        tpo: 'Partially recyclable',
        pvc: 'Partially recyclable',
        bitumen: 'Limited',
        epdmScore: 5,
      },
      {
        metric: 'Environmental Impact (LCA)',
        epdm: 'Low — best in class',
        tpo: 'Medium',
        pvc: 'High — contains phthalates',
        bitumen: 'High — petroleum derivative',
        epdmScore: 5,
      },
      {
        metric: 'Lifecycle Cost (30 years)',
        epdm: 'Lowest',
        tpo: 'Medium',
        pvc: 'Medium-High',
        bitumen: 'Highest',
        epdmScore: 5,
      },
      {
        metric: 'Green Roof Compatibility',
        epdm: 'Excellent — root-resistant (FLL)',
        tpo: 'Good',
        pvc: 'Good',
        bitumen: 'Requires additional protection',
        epdmScore: 5,
      },
    ],
  },

  costAnalysis: {
    title: 'Total Cost of Ownership Analysis — 30 Years',
    subtitle:
      'EPDM has a marginally higher initial cost but significantly lower cumulative cost over 30 years.',
    description:
      'Accounting for initial installation, periodic maintenance, repairs and early replacement, EPDM presents the lowest total cost of ownership over 30 years. The figures below are indicative for a 200 m² flat roof and include labour, materials and VAT.',
    data: [
      { year: 0, epdm: 4800, tpo: 4200, pvc: 3800, bitumen: 2400 },
      { year: 5, epdm: 4800, tpo: 4500, pvc: 4300, bitumen: 3200 },
      { year: 10, epdm: 4800, tpo: 4800, pvc: 5100, bitumen: 4400 },
      { year: 15, epdm: 4800, tpo: 5400, pvc: 6200, bitumen: 7200 },
      { year: 20, epdm: 4800, tpo: 9200, pvc: 10800, bitumen: 11600 },
      { year: 25, epdm: 5200, tpo: 9800, pvc: 11500, bitumen: 14200 },
      { year: 30, epdm: 5600, tpo: 13400, pvc: 15200, bitumen: 18800 },
    ],
    note:
      'Indicative values in euros. Bitumen replacement at year 15 and PVC/TPO replacement at year 20 include cost of removing the old material.',
  },

  scientificEvidence: {
    title: 'Scientific Evidence and Independent Studies',
    subtitle:
      'EPDM\'s performance is documented by decades of academic and industrial research',
    items: [
      {
        source: 'EPDM Roofing Association — Field Study',
        year: '2019',
        finding:
          'EPDM membranes aged 28–32 years were removed and laboratory-analysed. Result: physical and mechanical properties maintained at "like-new" levels, with no cracking, delamination or loss of water-repellency.',
        significance:
          'Direct confirmation of longevity exceeding 30 years under real-world exposure conditions.',
      },
      {
        source: 'Elevate (Carlisle SynTec) — Product Testing',
        year: '2021',
        finding:
          'Accelerated ageing tests (ASTM G155 xenon arc) and field sample analysis confirm an expected service life of 40+ years for 1.14 mm and 1.52 mm EPDM membranes.',
        significance: 'Supports product warranty specifications of up to 30 years.',
      },
      {
        source: 'Life Cycle Assessment of Flat Roof Membranes — Journal of Cleaner Production',
        year: '2010',
        finding:
          'LCA comparison between EPDM, PVC, APP bitumen and SBS bitumen over 1 m² across 50 years. EPDM showed the lowest global warming potential (GWP), lowest acidification and lowest primary energy consumption.',
        significance:
          'Scientific basis for sustainability arguments and BREEAM/LEED certification credits.',
      },
      {
        source: 'University of Minho — Civil Engineering Department',
        year: '2018',
        finding:
          'Study on waterproofing membrane behaviour in flat roofs in Portugal. Conclusion: EPDM showed the lowest failure rate and fewest maintenance interventions over 15 years of monitoring.',
        significance:
          'Data specific to the Portuguese climatic and construction context.',
      },
      {
        source: 'ASTM D4637 — Standard Specification for EPDM Sheet',
        year: 'Current',
        finding:
          'Standard defining minimum requirements: elongation at break ≥ 300%, tensile strength ≥ 9 MPa, ozone resistance, dimensional stability. Membriko products exceed all minimum requirements.',
        significance:
          'Ensures that membranes installed by Membriko meet rigorous international standards.',
      },
    ],
    disclaimer:
      'Sources: EPDM Roofing Association, Elevate/Carlisle SynTec, Journal of Cleaner Production (2010), University of Minho (2018), ASTM International.',
  },

  climateAdvantage: {
    title: 'EPDM and the Portuguese Climate',
    subtitle: 'Three climate zones, one material that excels in all of them',
    zones: [
      {
        zone: 'North and Interior',
        icon: 'CloudRain',
        description:
          'Oceanic temperate climate with cold, wet winters. Annual rainfall of 1,200–2,000 mm in the Minho and Douro regions. Occasional frost in the Trás-os-Montes interior.',
        keyBenefit:
          'EPDM maintains full flexibility at -45°C, resisting freeze-thaw cycles without cracking. Its watertightness does not depend on heat-welded seams that can fail under thermal movement.',
      },
      {
        zone: 'Centre, Lisbon and Alentejo',
        icon: 'Sun',
        description:
          'Mediterranean climate with hot, dry summers (35–42°C in Évora and Beja), high annual insolation and dry north-easterly wind in the interior.',
        keyBenefit:
          'EPDM\'s inherent UV resistance maintains physical properties after thousands of hours of solar irradiation. The surface does not harden, crack or require additional reflective coatings.',
      },
      {
        zone: 'Algarve and Atlantic Coast',
        icon: 'Waves',
        description:
          'Coastal climate with high atmospheric salinity, elevated relative humidity and hot summers with extreme UV index (UV > 8 in July–August).',
        keyBenefit:
          'EPDM is chemically inert to chlorides, sulphates and other marine aerosol compounds. It does not oxidise, corrode or lose adhesion even under repeated wetting and drying cycles.',
      },
    ],
  },

  standards: {
    title: 'Certifications and Standards',
    subtitle:
      'Membriko products and processes comply with all relevant European and international standards',
    items: [
      {
        code: 'EN 13956',
        name: 'Flexible Waterproofing Sheets',
        description:
          'Harmonised European standard specifying requirements for plastic and rubber waterproofing sheets for roofing. Defines tests for tensile strength, elongation, low-temperature bending and ageing resistance.',
      },
      {
        code: 'ASTM D4637',
        name: 'EPDM Sheet Waterproofing Standard',
        description:
          'American standard establishing minimum physical requirements for EPDM roofing membranes: elongation ≥ 300%, tensile strength ≥ 9 MPa, ozone resistance and accelerated ageing.',
      },
      {
        code: 'CE',
        name: 'CE Marking — European Conformity',
        description:
          'All Membriko EPDM products carry CE marking, confirming compliance with the Construction Products Regulation and the essential requirements of the Eurocode.',
      },
      {
        code: 'LNEC',
        name: 'National Laboratory for Civil Engineering (Portugal)',
        description:
          'LNEC approval for the use of EPDM membranes in Portugal, ensuring suitability for the national climatic and construction context.',
      },
      {
        code: 'ISO 9001',
        name: 'Quality Management System',
        description:
          'ISO 9001 certification of the supply chain, ensuring consistent manufacturing processes, quality control and material traceability.',
      },
      {
        code: 'FLL',
        name: 'German Green Roof Guideline',
        description:
          'The FLL (Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau) guideline certifies EPDM membranes as root-resistant — essential for green roof systems.',
      },
    ],
  },

  faqs: {
    title: 'Frequently Asked Questions About EPDM',
    items: [
      {
        question: 'What is the difference between EPDM and other membranes?',
        answer:
          'EPDM (Ethylene Propylene Diene Monomer) is a vulcanised synthetic rubber, fundamentally different from thermoplastics (PVC, TPO) and bitumen. Its cross-linked molecular chain structure gives it permanent elasticity, inherent UV resistance and thermal stability over a much wider range than any alternative. Simply put: it does not harden in heat, does not crack in cold and does not degrade under sunlight.',
      },
      {
        question: 'Is EPDM really more expensive than bitumen?',
        answer:
          'The initial installation cost of EPDM may be 20–40% higher than bitumen, but the total cost of ownership over 30 years is significantly lower. Bitumen requires UV protection coating every 2 years, frequent crack repairs and complete replacement after 15–20 years. EPDM requires no regular maintenance and replacement rarely occurs before 40–50 years. For any project with a horizon exceeding 10 years, EPDM is the more economical choice.',
      },
      {
        question: 'Can EPDM be installed over existing bitumen?',
        answer:
          'In many cases, yes. If the supporting structure is in good condition, it is possible to install EPDM directly over existing bitumen, eliminating the cost and waste of removal. Membriko always carries out a prior inspection to assess substrate compatibility and condition before recommending this approach.',
      },
      {
        question: 'What thickness of EPDM membrane is recommended?',
        answer:
          'The most common thicknesses are 1.14 mm and 1.52 mm. For standard residential and commercial roofs, 1.14 mm is sufficient. For demanding applications such as green roofs (root pressure), pools and reservoirs, or heavy pedestrian traffic areas, we recommend 1.52 mm or thicker. Membriko dimensions the appropriate thickness based on anticipated loads and exposure conditions.',
      },
      {
        question: 'How are EPDM seams/laps joined?',
        answer:
          'EPDM seams are made with double-sided butyl tape or specific seam adhesive, creating a vulcanised bond between adjacent sheets. When correctly executed, seams become the strongest point of the entire system — not the weak point. Membriko exclusively uses seam materials compatible with the membrane and applies quality control protocols on all joints.',
      },
      {
        question: 'Is EPDM compatible with green roofs?',
        answer:
          'Yes. EPDM holds FLL certification (German green roof standard) as a root-resistant membrane. Unlike some bituminous membranes that require an additional protection layer, EPDM directly resists root penetration, simplifying the construction system and reducing the total roof weight.',
      },
      {
        question: 'How long does installation take?',
        answer:
          'A simple flat roof of 100–200 m² can be completed in 1–2 days. Larger projects or those with many details (flashings, pipe penetrations, rooflights) may take longer. Unlike bitumen, there is no curing or drying time — EPDM membrane is immediately watertight after installation, with no requirement for specific weather conditions.',
      },
      {
        question: 'What warranty does Membriko offer for EPDM installations?',
        answer:
          'Membriko offers a 20-year warranty on EPDM membrane installations, covering material and workmanship defects. The EPDM product manufacturers we use offer product warranties of 20–30 years. Together, the client is covered by a dual warranty — on material and application — for a period that no other membrane can match.',
      },
    ],
  },

  cta: {
    title: 'Convinced? Talk to the Specialists',
    subtitle:
      'The Membriko team is available to analyse your project and recommend the most suitable EPDM solution. Free, no-obligation quote.',
    primaryButton: 'Request a Free Quote',
    secondaryButton: 'View EPDM Applications',
  },
}

export const whyEpdm: { pt: WhyEpdmContent; en: WhyEpdmContent } = { pt, en }
