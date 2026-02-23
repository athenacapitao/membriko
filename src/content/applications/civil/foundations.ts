import type { ApplicationData } from '../types'

export const foundations: ApplicationData = {
  id: 'foundations',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Fundações com EPDM | Membriko',
      description:
        'Membrana EPDM para impermeabilização de fundações e laje de cave. Proteção contra humidade ascensional e pressão hidrostática. Garantia 20 anos. Portugal.',
      keywords: [
        'impermeabilização fundações EPDM',
        'membrana fundação betão',
        'impermeabilização laje cave',
        'fundações impermeáveis Portugal',
        'EPDM fundação edifício',
      ],
    },
    hero: {
      headline: 'Fundações Protegidas com Membrana EPDM de Alta Performance',
      subtitle:
        'Proteja as fundações do seu edifício para 50+ anos com membrana EPDM — resistente à pressão hidrostática, humidade ascensional e agressividade química do solo.',
      stats: [
        { value: '50+', label: 'Anos de proteção garantida' },
        { value: '400%', label: 'Elongação — acompanha movimentos' },
        { value: '100%', label: 'Estanquidade sob pressão' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização de Fundações',
      description:
        'As fundações estão em contacto permanente com o solo húmido e, em muitos casos, com o lençol freático. A pressão hidrostática, sulfatos e cloretos do solo, e movimentos de assentamento criam condições extremas para qualquer sistema de impermeabilização.',
      points: [
        'Humidade ascensional através de fundações de betão causa deterioração de paredes e pavimentos interiores',
        'Sulfatos e cloretos do solo atacam quimicamente o betão das fundações',
        'Movimentos de assentamento diferencial fissuream membranas rígidas',
        'Reparação de impermeabilização de fundações após construção é extremamente cara e perturbadora',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Fundações',
      description:
        'A membrana EPDM cria uma barreira impermeável contínua em toda a superfície das fundações, incluindo laje de fundo, paredes exteriores da cave e ligação com o edificado acima. A sua elasticidade acomoda assentamentos sem criar pontos de falha.',
      points: [
        'Barreira impermeável contínua sem juntas vulneráveis em toda a envolvente da fundação',
        'Resistência química certificada a sulfatos, cloretos e outros compostos agressivos do solo',
        'Elongação de 400% que acomoda assentamentos diferenciais sem fissurar',
        'Instalação como membrana exterior antes do aterro — proteção permanente e não intrusiva',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Proteção Total da Estrutura',
        description: 'Uma fundação com EPDM não apresenta infiltrações ao longo de toda a vida do edifício, preservando a integridade estrutural e eliminando custos de reparação.',
      },
      {
        icon: 'Layers',
        title: 'Resistência Química ao Solo',
        description: 'O EPDM é inerte a sulfatos, cloretos, ácidos húmicos e outros agressivos típicos dos solos portugueses. Não degrada mesmo em solos com pH baixo.',
      },
      {
        icon: 'Thermometer',
        title: 'Estabilidade Dimensional',
        description: 'Não fissurea com variações de temperatura extremas. Em fundações enterradas, as variações de temperatura são menores mas os movimentos de solo são constantes — o EPDM acomoda ambos.',
      },
      {
        icon: 'Wrench',
        title: 'Instalação Antes do Aterro',
        description: 'Instalado como membrana exterior antes do aterro, o EPDM fica protegido mecanicamente e nunca precisará de intervenção — a obra de fundação é feita uma única vez.',
      },
      {
        icon: 'Euro',
        title: 'Custo vs Reparação',
        description: 'O custo de impermeabilização correta na construção é 5-10x inferior ao custo de reparação de infiltrações após o edifício estar construído.',
      },
      {
        icon: 'Leaf',
        title: 'Compatível com Drenagem Perimetral',
        description: 'O EPDM trabalha em conjunto com sistemas de drenagem perimetral (telas drenantes, tubos de drenagem) para gestão eficaz da água no solo.',
      },
    ],
    specs: [
      { label: 'Espessura', value: '1,2 mm / 1,5 mm / 2,0 mm' },
      { label: 'Resistência a sulfatos', value: 'Excelente (EN 13956)' },
      { label: 'Resistência a cloretos', value: 'Excelente' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Resistência à punção (pedras do solo)', value: 'Aprovado com fleece de proteção' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C (enterrada)' },
      { label: 'Resistência a ácidos húmicos', value: 'Excelente' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Projeto de Impermeabilização',
        description: 'Definição do sistema de impermeabilização de acordo com a exposição à água (W1-W4 EN ISO 9690) e classe de pressão hidrostática. Coordenação com projetista de estruturas.',
      },
      {
        step: 2,
        title: 'Preparação da Superfície',
        description: 'Preparação do betão das fundações: remoção de restos de cofragem, regularização de superfície, tratamento de juntas de betonagem e cantos.',
      },
      {
        step: 3,
        title: 'Instalação no Fundo (Laje)',
        description: 'Instalação da membrana EPDM na laje de fundo antes da betonagem, se possível, ou colada após cura. Sobreposição mínima de 200 mm com a membrana das paredes.',
      },
      {
        step: 4,
        title: 'Instalação nas Paredes',
        description: 'Instalação da membrana EPDM nas paredes exteriores da cave, desde a laje de fundo até 300 mm acima da cota do terreno. Fixação mecânica no topo.',
      },
      {
        step: 5,
        title: 'Proteção Mecânica',
        description: 'Instalação de placa de proteção drenante (nódulo) ou betão de proteção antes do aterro. Esta proteção é essencial para evitar perfuração da membrana durante o aterro.',
      },
      {
        step: 6,
        title: 'Aterro e Verificação Final',
        description: 'Aterro compactado em camadas conforme projeto geotécnico. Inspeção visual da membrana visível antes de cada camada de aterro. Verificação final de continuidade.',
      },
    ],
    techniques: [
      {
        title: 'Sistema Exterior (Antes do Aterro)',
        description: 'A membrana EPDM é instalada no exterior da fundação antes do aterro. A água não chega ao betão — sistema mais eficaz e durável.',
        pros: ['Máxima proteção — água bloqueada antes do betão', 'Betão nunca entra em contacto com água', 'Sistema que dura toda a vida do edifício'],
        cons: ['Requer acesso exterior durante construção', 'Não aplicável a fundações já aterradas', 'Proteção mecânica antes do aterro obrigatória'],
      },
      {
        title: 'Sistema Interior (Reabilitação)',
        description: 'Para caves já construídas com infiltrações, instalação de EPDM no interior com sistema de pressão inversa. A membrana resiste à pressão hidrostática por dentro.',
        pros: ['Aplicável sem escavação exterior', 'Não perturba o aterro existente', 'Adequado para reabilitação de caves húmidas'],
        cons: ['A pressão hidrostática trabalha contra a membrana', 'Requer ancoragem especial de alta resistência', 'Menos durável que sistema exterior'],
      },
    ],
    comparison: [
      {
        feature: 'Vida útil',
        epdm: '50+ anos',
        alternatives: [
          { name: 'Betão impermeabilizado (KMC)', value: '20-30 anos' },
          { name: 'Tela betuminosa', value: '15-20 anos' },
          { name: 'Revestimento de bentonite', value: '20-40 anos (variável)' },
        ],
      },
      {
        feature: 'Resistência a fissuras por assentamento',
        epdm: 'Excelente — 400% elongação',
        alternatives: [
          { name: 'Betão impermeabilizado (KMC)', value: 'Fraca — fissuração' },
          { name: 'Tela betuminosa', value: 'Moderada' },
          { name: 'Revestimento de bentonite', value: 'Boa — auto-selante' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Norte e Zonas Húmidas',
        description: 'Lençol freático elevado e precipitação abundante criam pressão hidrostática permanente nas fundações. O EPDM com certificação para pressão de água sustentada é essencial nestas zonas.',
      },
      {
        zone: 'Sul (Solos Expansivos)',
        description: 'Solos argilosos do Alentejo e Algarve expandem no inverno e retraem no verão. A elongação de 400% do EPDM acomoda estes movimentos sem fissurar.',
      },
      {
        zone: 'Zonas Costeiras (Solo Salino)',
        description: 'Solo com cloretos em zonas costeiras ataca o betão das fundações por carbonatação. O EPDM cria barreira física que isola completamente o betão do solo agressivo.',
      },
    ],
    faqs: [
      {
        question: 'O EPDM pode ser instalado em fundações existentes com infiltrações?',
        answer: 'Sim, mas o método é diferente. Para reabilitação de fundações já enterradas, usamos o sistema interior com EPDM ancorado mecanicamente e resistente à pressão hidrostática. A eficácia é boa mas inferior ao sistema exterior aplicado durante a construção.',
      },
      {
        question: 'Qual a diferença entre sistema de impermeabilização positivo e negativo?',
        answer: 'Sistema positivo (exterior) instala a membrana pelo lado onde a água chega — mais eficaz. Sistema negativo (interior) instala pelo lado oposto à pressão de água — usado em reabilitação. O EPDM é usado em ambos os sistemas.',
      },
    ],
    relatedSlugs: ['basements', 'underground-parking', 'retaining-walls'],
  },
  en: {
    meta: {
      title: 'Foundation Waterproofing with EPDM Membrane | Membriko',
      description: 'EPDM membrane for foundation and basement slab waterproofing. Protection against rising damp and hydrostatic pressure. 20-year guarantee. Portugal.',
      keywords: ['foundation waterproofing EPDM', 'foundation membrane concrete', 'basement slab waterproofing', 'foundation waterproofing Portugal', 'EPDM building foundation'],
    },
    hero: {
      headline: 'Protected Foundations with High-Performance EPDM Membrane',
      subtitle: 'Protect your building foundations for 50+ years with EPDM membrane — resistant to hydrostatic pressure, rising damp and soil chemical aggressiveness.',
      stats: [
        { value: '50+', label: 'Years guaranteed protection' },
        { value: '400%', label: 'Elongation — follows movement' },
        { value: '100%', label: 'Watertightness under pressure' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Foundation Waterproofing Challenge',
      description: 'Foundations are in permanent contact with moist soil and, in many cases, with the water table. Hydrostatic pressure, sulphates and chlorides in soil, and settlement movements create extreme conditions for any waterproofing system.',
      points: [
        'Rising damp through concrete foundations causes interior wall and floor deterioration',
        'Soil sulphates and chlorides chemically attack foundation concrete',
        'Differential settlement movements crack rigid membranes',
        'Repairing foundation waterproofing after construction is extremely expensive and disruptive',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Foundations',
      description: 'EPDM membrane creates a continuous impermeable barrier on all foundation surfaces, including floor slab, external basement walls and connection with the superstructure. Its elasticity accommodates settlements without creating failure points.',
      points: [
        'Continuous impermeable barrier without vulnerable joints across the entire foundation envelope',
        'Certified chemical resistance to sulphates, chlorides and other aggressive soil compounds',
        '400% elongation accommodating differential settlements without cracking',
        'Installation as external membrane before backfilling — permanent, non-intrusive protection',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Total Structure Protection', description: 'An EPDM foundation shows no infiltrations throughout the building life, preserving structural integrity and eliminating repair costs.' },
      { icon: 'Layers', title: 'Soil Chemical Resistance', description: 'EPDM is inert to sulphates, chlorides, humic acids and other aggressives typical of Portuguese soils. Does not degrade even in low-pH soils.' },
      { icon: 'Thermometer', title: 'Dimensional Stability', description: 'Does not crack with extreme temperature variations. In buried foundations, temperature variations are less but soil movements are constant — EPDM accommodates both.' },
      { icon: 'Wrench', title: 'Installation Before Backfill', description: 'Installed as external membrane before backfilling, EPDM is mechanically protected and will never require intervention — foundation work done once only.' },
      { icon: 'Euro', title: 'Cost vs Repair', description: 'The cost of correct waterproofing during construction is 5-10x lower than the cost of repairing infiltrations after the building is complete.' },
      { icon: 'Leaf', title: 'Compatible with Perimeter Drainage', description: 'EPDM works together with perimeter drainage systems (drainage boards, drainage pipes) for effective soil water management.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.2 mm / 1.5 mm / 2.0 mm' },
      { label: 'Sulphate resistance', value: 'Excellent (EN 13956)' },
      { label: 'Chloride resistance', value: 'Excellent' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Puncture resistance (soil stones)', value: 'Pass with protective fleece' },
      { label: 'Service temperature', value: '-45°C to +80°C (buried)' },
      { label: 'Humic acid resistance', value: 'Excellent' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Waterproofing Design', description: 'Definition of waterproofing system according to water exposure (W1-W4 EN ISO 9690) and hydrostatic pressure class. Coordination with structural designer.' },
      { step: 2, title: 'Surface Preparation', description: 'Foundation concrete preparation: removal of formwork remnants, surface levelling, treatment of construction joints and corners.' },
      { step: 3, title: 'Floor Slab Installation', description: 'EPDM installation on floor slab before concreting if possible, or bonded after curing. Minimum 200 mm overlap with wall membrane.' },
      { step: 4, title: 'Wall Installation', description: 'EPDM installation on external basement walls, from floor slab to 300 mm above ground level. Mechanical fixing at top.' },
      { step: 5, title: 'Mechanical Protection', description: 'Installation of drainage protection board (nodule) or protection concrete before backfilling. This protection is essential to prevent membrane puncture during backfilling.' },
      { step: 6, title: 'Backfill and Final Check', description: 'Compacted backfill in layers per geotechnical design. Visual membrane inspection before each backfill layer. Final continuity verification.' },
    ],
    techniques: [
      {
        title: 'External System (Before Backfill)',
        description: 'EPDM installed on foundation exterior before backfilling. Water does not reach concrete — most effective and durable system.',
        pros: ['Maximum protection — water blocked before concrete', 'Concrete never contacts water', 'System lasting the entire building life'],
        cons: ['Requires exterior access during construction', 'Not applicable to already-backfilled foundations', 'Mechanical protection before backfill mandatory'],
      },
      {
        title: 'Internal System (Rehabilitation)',
        description: 'For already-built basements with infiltrations, EPDM installation inside with reverse pressure system. Membrane resists hydrostatic pressure from inside.',
        pros: ['Applicable without exterior excavation', 'Does not disturb existing backfill', 'Suitable for wet basement rehabilitation'],
        cons: ['Hydrostatic pressure works against membrane', 'Requires special high-strength anchoring', 'Less durable than external system'],
      },
    ],
    comparison: [
      {
        feature: 'Service life',
        epdm: '50+ years',
        alternatives: [
          { name: 'Waterproofed concrete (KMC)', value: '20-30 years' },
          { name: 'Bituminous sheet', value: '15-20 years' },
          { name: 'Bentonite coating', value: '20-40 years (variable)' },
        ],
      },
      {
        feature: 'Settlement crack resistance',
        epdm: 'Excellent — 400% elongation',
        alternatives: [
          { name: 'Waterproofed concrete (KMC)', value: 'Poor — cracking' },
          { name: 'Bituminous sheet', value: 'Moderate' },
          { name: 'Bentonite coating', value: 'Good — self-sealing' },
        ],
      },
    ],
    climate: [
      { zone: 'North and Humid Zones', description: 'High water table and abundant rainfall create permanent hydrostatic pressure on foundations. EPDM certified for sustained water pressure is essential in these zones.' },
      { zone: 'South (Expansive Soils)', description: 'Clay soils in Alentejo and Algarve expand in winter and contract in summer. EPDM 400% elongation accommodates these movements without cracking.' },
      { zone: 'Coastal Zones (Saline Soil)', description: 'Soil with chlorides in coastal zones attacks foundation concrete through carbonation. EPDM creates physical barrier completely isolating concrete from aggressive soil.' },
    ],
    faqs: [
      {
        question: 'Can EPDM be installed on existing foundations with infiltrations?',
        answer: 'Yes, but the method is different. For already-buried foundation rehabilitation, we use the internal system with mechanically anchored EPDM resistant to hydrostatic pressure. Effectiveness is good but inferior to the external system applied during construction.',
      },
      {
        question: 'What is the difference between positive and negative waterproofing systems?',
        answer: 'Positive system (external) installs membrane on the side where water arrives — more effective. Negative system (internal) installs on the opposite side to water pressure — used in rehabilitation. EPDM is used in both systems.',
      },
    ],
    relatedSlugs: ['basements', 'underground-parking', 'retaining-walls'],
  },
}
