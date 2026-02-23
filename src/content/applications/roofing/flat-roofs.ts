import type { ApplicationData } from '../types'

export const flatRoofs: ApplicationData = {
  id: 'flat-roofs',
  categoryId: 'roofing',
  pt: {
    meta: {
      title: 'Impermeabilização de Coberturas Planas com EPDM | Membriko',
      description:
        'Impermeabilização de coberturas planas com membranas EPDM de alta durabilidade. Solução ideal para edifícios residenciais e comerciais em Portugal. Garantia de 20 anos.',
      keywords: [
        'impermeabilização cobertura plana',
        'membrana EPDM cobertura',
        'impermeabilização telhado plano',
        'cobertura plana EPDM Portugal',
        'membrana impermeabilizante',
      ],
    },
    hero: {
      headline: 'Impermeabilização de Coberturas Planas com EPDM',
      subtitle:
        'A membrana EPDM é a solução definitiva para coberturas planas — durável, flexível e resistente às condições climáticas adversas de Portugal.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '-45°C a +130°C', label: 'Amplitude térmica' },
        { value: '400%', label: 'Elongação máxima' },
        { value: '20 anos', label: 'Garantia da obra' },
      ],
    },
    problem: {
      title: 'O Desafio das Coberturas Planas',
      description:
        'As coberturas planas estão sujeitas a condições extremas: acumulação de água, expansão e contração térmica, raízes de vegetação e exposição UV intensa. As soluções tradicionais falham sistematicamente ao fim de poucos anos.',
      points: [
        'Fissuras e bolhas nas membranas betuminosas após 5-10 anos de exposição solar',
        'Infiltrações nas juntas e pontos singulares que causam danos estruturais progressivos',
        'Degradação acelerada pela amplitude térmica diária e sazonal em Portugal',
        'Custos de manutenção recorrentes que superam o investimento inicial ao fim de 15 anos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Coberturas Planas',
      description:
        'A membrana EPDM (Etileno Propileno Dieno Monómero) é produzida como uma folha única e contínua, eliminando as juntas que são o ponto fraco de outros sistemas. A sua composição química confere-lhe resistência excecional à radiação UV, ozono e variações térmicas extremas.',
      points: [
        'Instalação em folha única sem juntas intermédias — o maior ponto de falha eliminado',
        'Resistência UV nativa sem necessidade de camadas protetoras adicionais',
        'Flexibilidade permanente que acompanha movimentos estruturais sem fissurar',
        'Compatível com sistemas de cobertura verde, solar e de retenção de águas pluviais',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Durabilidade Excecional',
        description:
          'Com vida útil superior a 50 anos comprovada em clima europeu, o EPDM supera todos os sistemas alternativos. Instalações da década de 1970 ainda em serviço ativo em Portugal.',
      },
      {
        icon: 'Thermometer',
        title: 'Resistência Térmica Total',
        description:
          'Mantém elasticidade e integridade entre -45°C e +130°C, suportando sem degradação as amplitudes térmicas extremas das coberturas portuguesas no verão.',
      },
      {
        icon: 'Droplets',
        title: 'Impermeabilidade Absoluta',
        description:
          'Zero permeabilidade à água mesmo sob pressão hidrostática. A membrana EPDM não absorve água nem sofre hidrólise ao longo do tempo.',
      },
      {
        icon: 'Leaf',
        title: 'Sustentabilidade',
        description:
          'Material 100% reciclável no final da vida útil. Peso reduzido diminui a carga estrutural. Compatível com sistemas de cobertura verde e fotovoltaica.',
      },
      {
        icon: 'Wrench',
        title: 'Instalação Eficiente',
        description:
          'Disponível em rolos de grande dimensão que cobrem vastas áreas sem emendas. Instalação mais rápida e limpa que sistemas de torcha, sem riscos de incêndio.',
      },
      {
        icon: 'Euro',
        title: 'Custo Total Reduzido',
        description:
          'Apesar do investimento inicial competitivo, o custo de ciclo de vida é significativamente inferior ao betume modificado — menos manutenção, maior durabilidade.',
      },
    ],
    specs: [
      { label: 'Espessura disponível', value: '1,0 mm / 1,2 mm / 1,5 mm / 2,0 mm' },
      { label: 'Largura dos rolos', value: 'Até 15,25 m' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Alongamento na rutura', value: '≥ 400% (EN 12311-2)' },
      { label: 'Resistência à tração', value: '≥ 9 N/mm² (EN 12311-2)' },
      { label: 'Resistência ao puncionamento estático', value: 'Aprovado EN 12730' },
      { label: 'Classificação de reação ao fogo', value: 'E (EN 13501-1)' },
      { label: 'Norma de produto', value: 'EN 13956 / ASTM D4637' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Consultoria e Diagnóstico',
        description:
          'Visita técnica gratuita para avaliar o estado da cobertura, identificar pontos críticos e definir a solução mais adequada. Elaboração de relatório fotográfico e proposta detalhada.',
      },
      {
        step: 2,
        title: 'Preparação do Suporte',
        description:
          'Limpeza e reparação do suporte existente. Remoção de sistema antigo se necessário. Regularização de superfícies irregulares e tratamento de pontos singulares.',
      },
      {
        step: 3,
        title: 'Projeto e Corte',
        description:
          'Medição rigorosa e corte da membrana em obra ou em fábrica para minimizar emendas. Cada peça é identificada e numerada para instalação eficiente.',
      },
      {
        step: 4,
        title: 'Instalação da Membrana',
        description:
          'Colocação da membrana EPDM usando o método mais adequado: colagem total, fixação mecânica ou lastro. Soldadura das emendas com adesivo de contacto de alta performance.',
      },
      {
        step: 5,
        title: 'Controlo de Qualidade',
        description:
          'Inspeção detalhada de todas as emendas, rufos e pontos singulares. Teste de estanquidade com água ou deteção eletrónica de falhas.',
      },
      {
        step: 6,
        title: 'Garantia e Acompanhamento',
        description:
          'Emissão de certificado de garantia de 20 anos. Plano de manutenção preventiva e disponibilidade para inspeções anuais.',
      },
    ],
    techniques: [
      {
        title: 'Sistema Colado (Totalmente Aderente)',
        description:
          'A membrana EPDM é colada na totalidade ao suporte usando adesivo de contacto de base neoprene ou adesivo de base aquosa. Ideal para coberturas com exposição ao vento elevada.',
        pros: [
          'Máxima resistência ao levantamento pelo vento',
          'Sem risco de acumulação de água sob a membrana',
          'Adequado para renovações sobre suporte irregular',
        ],
        cons: [
          'Requer suporte limpo, seco e resistente',
          'Tempo de instalação superior ao sistema de lastro',
          'Não adequado para superfícies friáveis',
        ],
      },
      {
        title: 'Sistema de Lastro (Balastrado)',
        description:
          'A membrana é colocada livremente sobre o suporte e mantida no lugar por um lastro de seixo rolado (50-80 kg/m²) ou lajes de betão. O método mais económico e rápido.',
        pros: [
          'Instalação mais rápida e económica',
          'Fácil inspeção e reparação futura',
          'A membrana pode expandir e contrair livremente',
        ],
        cons: [
          'Carga adicional na estrutura da cobertura',
          'Não adequado para coberturas com inclinação superior a 5°',
          'Seixo pode migrar em eventos de vento extremo',
        ],
      },
      {
        title: 'Sistema de Fixação Mecânica',
        description:
          'A membrana é fixada ao suporte através de buchas e discos de fixação nas emendas. Método intermédio ideal quando o suporte não suporta carga adicional.',
        pros: [
          'Não requer suporte de alta resistência',
          'Adequado para suportes ligeiros (deck metálico, OSB)',
          'Facilita inspeção nas fixações',
        ],
        cons: [
          'As fixações são pontos potenciais de infiltração se mal executadas',
          'Requer cálculo preciso de distância entre fixações',
          'Visualmente as fixações ficam visíveis nas emendas',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Vida útil estimada',
        epdm: '50+ anos',
        alternatives: [
          { name: 'Betume modificado APP', value: '15-20 anos' },
          { name: 'PVC', value: '25-30 anos' },
          { name: 'Poliuretano líquido', value: '10-15 anos' },
        ],
      },
      {
        feature: 'Resistência UV',
        epdm: 'Nativa — sem degradação',
        alternatives: [
          { name: 'Betume modificado APP', value: 'Requer proteção adicional' },
          { name: 'PVC', value: 'Boa, com plastificantes' },
          { name: 'Poliuretano líquido', value: 'Requer revestimento UV' },
        ],
      },
      {
        feature: 'Temperatura de serviço',
        epdm: '-45°C a +130°C',
        alternatives: [
          { name: 'Betume modificado APP', value: '-15°C a +100°C' },
          { name: 'PVC', value: '-30°C a +60°C' },
          { name: 'Poliuretano líquido', value: '-20°C a +80°C' },
        ],
      },
      {
        feature: 'Método de instalação',
        epdm: 'Frio — sem torcha',
        alternatives: [
          { name: 'Betume modificado APP', value: 'Torcha a gás — risco de incêndio' },
          { name: 'PVC', value: 'Ar quente — equipamento especializado' },
          { name: 'Poliuretano líquido', value: 'Projeção/rolo — produtos VOC' },
        ],
      },
      {
        feature: 'Sustentabilidade',
        epdm: '100% reciclável',
        alternatives: [
          { name: 'Betume modificado APP', value: 'Difícil reciclagem' },
          { name: 'PVC', value: 'Contém plastificantes e cloro' },
          { name: 'Poliuretano líquido', value: 'Resíduos de solventes' },
        ],
      },
      {
        feature: 'Custo de ciclo de vida (30 anos)',
        epdm: 'Baixo — sem substituição',
        alternatives: [
          { name: 'Betume modificado APP', value: 'Alto — 1-2 substituições' },
          { name: 'PVC', value: 'Médio — manutenção regular' },
          { name: 'Poliuretano líquido', value: 'Alto — reaplicações periódicas' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Litoral Atlântico (Porto, Lisboa, Setúbal)',
        description:
          'Amplitude térmica moderada mas humidade relativa elevada e precipitação frequente. O EPDM resiste sem problemas à exposição crónica à humidade e aos ciclos gelo-degelo ocasionais no inverno.',
      },
      {
        zone: 'Mediterrâneo (Algarve, Alentejo Litoral)',
        description:
          'Verões quentes e secos com coberturas a atingir 80-90°C em dias de sol intenso. O EPDM mantém integridade até +130°C, tornando-se a única escolha segura para estas condições.',
      },
      {
        zone: 'Interior Continental (Trás-os-Montes, Alentejo Interior)',
        description:
          'Amplitudes térmicas extremas: -15°C no inverno a +40°C no verão. O EPDM é o único sistema que mantém flexibilidade em toda esta amplitude sem fissurar.',
      },
    ],
    faqs: [
      {
        question: 'Quanto tempo dura uma cobertura plana com EPDM?',
        answer:
          'Uma membrana EPDM instalada corretamente tem uma vida útil comprovada superior a 50 anos. Existem instalações da década de 1970 ainda em perfeito estado em toda a Europa. Com manutenção preventiva anual, é razoável esperar 60+ anos de serviço.',
      },
      {
        question: 'Posso instalar EPDM sobre a impermeabilização existente?',
        answer:
          'Na maioria dos casos, sim. Se o sistema existente estiver estruturalmente sólido (sem delaminações ou bolhas significativas), o EPDM pode ser instalado por cima, eliminando os custos de demolição. A nossa equipa técnica avalia caso a caso.',
      },
      {
        question: 'O EPDM é adequado para coberturas transitáveis?',
        answer:
          'O EPDM standard não é adequado para tráfego pedonal frequente sem proteção. Para coberturas transitáveis, recomendamos EPDM com espessura 1,5 mm ou 2,0 mm associado a lajes de betão ou deck de madeira.',
      },
      {
        question: 'Qual é o processo de reparação de uma membrana EPDM danificada?',
        answer:
          'Danos pontuais (furos, cortes) são reparados com facilidade usando remendos de EPDM e adesivo de contacto. A reparação é quase invisível e tão durável como a membrana original. Não é necessário substituir áreas extensas.',
      },
      {
        question: 'O EPDM é compatível com painéis fotovoltaicos?',
        answer:
          'Sim. O EPDM é o sistema de impermeabilização preferido pela indústria fotovoltaica para coberturas planas. Os suportes dos painéis são fixados diretamente através da membrana com vedantes certificados, sem comprometer a estanquidade.',
      },
      {
        question: 'Qual a inclinação mínima para uma cobertura plana com EPDM?',
        answer:
          'O EPDM funciona desde inclinação zero (0%) até coberturas muito inclinadas. Para coberturas com inclinação inferior a 2%, recomendamos análise hidráulica para garantir drenagem adequada e evitar acumulação de água.',
      },
    ],
    relatedSlugs: ['green-roofs', 'terraces-balconies', 'roof-renovation'],
  },
  en: {
    meta: {
      title: 'Flat Roof Waterproofing with EPDM Membrane | Membriko',
      description:
        'High-durability EPDM membrane waterproofing for flat roofs. Ideal solution for residential and commercial buildings in Portugal. 20-year guarantee.',
      keywords: [
        'flat roof waterproofing',
        'EPDM roof membrane',
        'flat roof EPDM Portugal',
        'rubber roof membrane',
        'flat roof impermeabilization',
      ],
    },
    hero: {
      headline: 'Flat Roof Waterproofing with EPDM Membrane',
      subtitle:
        'EPDM membrane is the definitive solution for flat roofs — durable, flexible, and resistant to the harsh climatic conditions of Portugal.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '-45°C to +130°C', label: 'Thermal range' },
        { value: '400%', label: 'Maximum elongation' },
        { value: '20 years', label: 'Installation warranty' },
      ],
    },
    problem: {
      title: 'The Flat Roof Challenge',
      description:
        'Flat roofs are subject to extreme conditions: water accumulation, thermal expansion and contraction, vegetation root penetration and intense UV exposure. Traditional solutions systematically fail within a few years.',
      points: [
        'Cracks and blisters in bituminous membranes after 5-10 years of solar exposure',
        'Leaks at joints and singular points causing progressive structural damage',
        'Accelerated degradation from daily and seasonal temperature swings in Portugal',
        'Recurring maintenance costs that exceed the initial investment after 15 years',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Flat Roofs',
      description:
        'EPDM (Ethylene Propylene Diene Monomer) membrane is manufactured as a single continuous sheet, eliminating the joints that are the weak point of other systems. Its chemical composition gives it exceptional resistance to UV radiation, ozone and extreme thermal variations.',
      points: [
        'Single-sheet installation without intermediate joints — the biggest failure point eliminated',
        'Native UV resistance without additional protective layers',
        'Permanent flexibility that accommodates structural movements without cracking',
        'Compatible with green roof, solar and rainwater retention systems',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Exceptional Durability',
        description:
          'With a proven service life of over 50 years in European climates, EPDM outperforms all alternative systems. Installations from the 1970s are still in active service across Portugal.',
      },
      {
        icon: 'Thermometer',
        title: 'Total Thermal Resistance',
        description:
          'Maintains elasticity and integrity between -45°C and +130°C, withstanding without degradation the extreme thermal swings of Portuguese rooftops in summer.',
      },
      {
        icon: 'Droplets',
        title: 'Absolute Impermeability',
        description:
          'Zero water permeability even under hydrostatic pressure. EPDM membrane does not absorb water or undergo hydrolysis over time.',
      },
      {
        icon: 'Leaf',
        title: 'Sustainability',
        description:
          '100% recyclable at end of life. Reduced weight decreases structural load. Compatible with green roof and photovoltaic systems.',
      },
      {
        icon: 'Wrench',
        title: 'Efficient Installation',
        description:
          'Available in large-format rolls covering vast areas without seams. Faster and cleaner installation than torch systems, with no fire risks.',
      },
      {
        icon: 'Euro',
        title: 'Reduced Total Cost',
        description:
          'Despite a competitive initial investment, the life-cycle cost is significantly lower than modified bitumen — less maintenance, greater durability.',
      },
    ],
    specs: [
      { label: 'Available thickness', value: '1.0 mm / 1.2 mm / 1.5 mm / 2.0 mm' },
      { label: 'Roll width', value: 'Up to 15.25 m' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Elongation at break', value: '≥ 400% (EN 12311-2)' },
      { label: 'Tensile strength', value: '≥ 9 N/mm² (EN 12311-2)' },
      { label: 'Static puncture resistance', value: 'Pass EN 12730' },
      { label: 'Reaction to fire class', value: 'E (EN 13501-1)' },
      { label: 'Product standard', value: 'EN 13956 / ASTM D4637' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Consultation and Assessment',
        description:
          'Free technical site visit to evaluate roof condition, identify critical points and define the most appropriate solution. Photographic report and detailed proposal prepared.',
      },
      {
        step: 2,
        title: 'Substrate Preparation',
        description:
          'Cleaning and repair of existing substrate. Removal of old system if necessary. Levelling of irregular surfaces and treatment of singular points.',
      },
      {
        step: 3,
        title: 'Design and Cutting',
        description:
          'Precise measurement and membrane cutting on site or at factory to minimise seams. Each piece is identified and numbered for efficient installation.',
      },
      {
        step: 4,
        title: 'Membrane Installation',
        description:
          'EPDM membrane placement using the most appropriate method: full adhesion, mechanical fastening or ballasting. Seam welding with high-performance contact adhesive.',
      },
      {
        step: 5,
        title: 'Quality Control',
        description:
          'Detailed inspection of all seams, flashings and singular points. Watertightness testing with water or electronic fault detection.',
      },
      {
        step: 6,
        title: 'Warranty and Follow-up',
        description:
          'Issuance of 20-year warranty certificate. Preventive maintenance plan and availability for annual inspections.',
      },
    ],
    techniques: [
      {
        title: 'Fully Adhered System',
        description:
          'The EPDM membrane is bonded entirely to the substrate using neoprene-based or water-based contact adhesive. Ideal for roofs with high wind exposure.',
        pros: [
          'Maximum resistance to wind uplift',
          'No risk of water accumulation under the membrane',
          'Suitable for renovations on irregular substrate',
        ],
        cons: [
          'Requires clean, dry and resistant substrate',
          'Longer installation time than ballasted system',
          'Not suitable for friable surfaces',
        ],
      },
      {
        title: 'Ballasted System',
        description:
          'The membrane is placed loosely on the substrate and held in place by a ballast of rounded gravel (50-80 kg/m²) or concrete slabs. The most economical and fastest method.',
        pros: [
          'Faster and more economical installation',
          'Easy future inspection and repair',
          'Membrane can freely expand and contract',
        ],
        cons: [
          'Additional load on roof structure',
          'Not suitable for roofs with more than 5° slope',
          'Gravel can migrate during extreme wind events',
        ],
      },
      {
        title: 'Mechanically Fastened System',
        description:
          'The membrane is fixed to the substrate through anchor bolts and fastening discs at the seams. An intermediate method ideal when the substrate cannot support additional load.',
        pros: [
          'Does not require high-strength substrate',
          'Suitable for lightweight substrates (metal deck, OSB)',
          'Fasteners are accessible for inspection',
        ],
        cons: [
          'Fasteners are potential infiltration points if poorly installed',
          'Requires precise calculation of fastener spacing',
          'Fasteners remain visible at seams',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Estimated service life',
        epdm: '50+ years',
        alternatives: [
          { name: 'APP modified bitumen', value: '15-20 years' },
          { name: 'PVC', value: '25-30 years' },
          { name: 'Liquid polyurethane', value: '10-15 years' },
        ],
      },
      {
        feature: 'UV resistance',
        epdm: 'Native — no degradation',
        alternatives: [
          { name: 'APP modified bitumen', value: 'Requires additional protection' },
          { name: 'PVC', value: 'Good, with plasticisers' },
          { name: 'Liquid polyurethane', value: 'Requires UV coating' },
        ],
      },
      {
        feature: 'Service temperature',
        epdm: '-45°C to +130°C',
        alternatives: [
          { name: 'APP modified bitumen', value: '-15°C to +100°C' },
          { name: 'PVC', value: '-30°C to +60°C' },
          { name: 'Liquid polyurethane', value: '-20°C to +80°C' },
        ],
      },
      {
        feature: 'Installation method',
        epdm: 'Cold — no torch required',
        alternatives: [
          { name: 'APP modified bitumen', value: 'Gas torch — fire risk' },
          { name: 'PVC', value: 'Hot air — specialised equipment' },
          { name: 'Liquid polyurethane', value: 'Spray/roller — VOC products' },
        ],
      },
      {
        feature: 'Sustainability',
        epdm: '100% recyclable',
        alternatives: [
          { name: 'APP modified bitumen', value: 'Difficult to recycle' },
          { name: 'PVC', value: 'Contains plasticisers and chlorine' },
          { name: 'Liquid polyurethane', value: 'Solvent waste' },
        ],
      },
      {
        feature: 'Life-cycle cost (30 years)',
        epdm: 'Low — no replacement needed',
        alternatives: [
          { name: 'APP modified bitumen', value: 'High — 1-2 replacements' },
          { name: 'PVC', value: 'Medium — regular maintenance' },
          { name: 'Liquid polyurethane', value: 'High — periodic reapplication' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Atlantic Coast (Porto, Lisbon, Setúbal)',
        description:
          'Moderate thermal range but high relative humidity and frequent rainfall. EPDM withstands chronic humidity exposure and occasional freeze-thaw cycles in winter without any issues.',
      },
      {
        zone: 'Mediterranean (Algarve, Coastal Alentejo)',
        description:
          'Hot, dry summers with roofs reaching 80-90°C on intensely sunny days. EPDM maintains integrity up to +130°C, making it the only safe choice for these conditions.',
      },
      {
        zone: 'Continental Interior (Trás-os-Montes, Interior Alentejo)',
        description:
          'Extreme thermal ranges: -15°C in winter to +40°C in summer. EPDM is the only system that maintains flexibility across this entire range without cracking.',
      },
    ],
    faqs: [
      {
        question: 'How long does a flat roof with EPDM last?',
        answer:
          'A correctly installed EPDM membrane has a proven service life of over 50 years. There are installations from the 1970s still in perfect condition across Europe. With annual preventive maintenance, 60+ years of service is a reasonable expectation.',
      },
      {
        question: 'Can EPDM be installed over existing waterproofing?',
        answer:
          'In most cases, yes. If the existing system is structurally sound (no significant delaminations or blisters), EPDM can be installed over it, eliminating demolition costs. Our technical team evaluates on a case-by-case basis.',
      },
      {
        question: 'Is EPDM suitable for accessible flat roofs?',
        answer:
          'Standard EPDM is not suitable for frequent pedestrian traffic without protection. For accessible roofs, we recommend EPDM with 1.5 mm or 2.0 mm thickness combined with concrete slabs or timber decking.',
      },
      {
        question: 'What is the repair process for a damaged EPDM membrane?',
        answer:
          'Localised damage (holes, cuts) is easily repaired using EPDM patches and contact adhesive. The repair is nearly invisible and as durable as the original membrane. Replacement of large areas is not necessary.',
      },
      {
        question: 'Is EPDM compatible with photovoltaic panels?',
        answer:
          'Yes. EPDM is the preferred waterproofing system by the photovoltaic industry for flat roofs. Panel supports are fixed directly through the membrane with certified sealants, without compromising watertightness.',
      },
      {
        question: 'What is the minimum slope for a flat roof with EPDM?',
        answer:
          'EPDM works from zero slope (0%) to very steep roofs. For roofs with less than 2% slope, we recommend hydraulic analysis to ensure adequate drainage and avoid water accumulation.',
      },
    ],
    relatedSlugs: ['green-roofs', 'terraces-balconies', 'roof-renovation'],
  },
}
