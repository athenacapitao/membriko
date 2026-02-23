import type { ApplicationData } from '../types'

export const bridges: ApplicationData = {
  id: 'bridges',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Pontes e Viadutos com EPDM | Membriko',
      description: 'Sistemas de impermeabilização EPDM para tabuleiros de pontes e viadutos. Resistência a tráfego pesado, ciclos térmicos e movimentos estruturais. Portugal.',
      keywords: ['impermeabilização ponte EPDM', 'membrana tabuleiro ponte', 'viaduto impermeabilização Portugal', 'EPDM ponte rodoviária', 'impermeabilização obras arte'],
    },
    hero: {
      headline: 'Pontes e Viadutos Protegidos com Sistemas EPDM',
      subtitle: 'A membrana EPDM para tabuleiros de pontes resiste ao tráfego pesado, variações térmicas extremas e movimentos estruturais, com vida útil compatível com a obra de arte.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '150°C', label: 'Amplitude térmica suportada' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização de Pontes',
      description: 'Os tabuleiros de pontes e viadutos estão expostos a algumas das condições mais severas da engenharia civil: tráfego pesado, variações térmicas de -20°C a +130°C na superfície, movimentos de dilatação nas juntas, sais de degelo e ambiente marinho em pontes costeiras.',
      points: [
        'Variações térmicas de mais de 100°C na superfície do tabuleiro entre inverno e verão',
        'Tráfego pesado cria solicitações dinâmicas de fadiga em toda a impermeabilização',
        'Juntas de dilatação sujeitas a movimentos cíclicos que destroem membranas rígidas',
        'Infiltrações no tabuleiro corroem armaduras e vigas metálicas, comprometendo a segurança estrutural',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Tabuleiros de Pontes',
      description: 'O EPDM é a membrana de escolha para impermeabilização de tabuleiros de pontes de classe A (tráfego pesado), instalada entre a laje de betão e o revestimento asfáltico. O sistema inclui tratamento especializado das juntas de dilatação.',
      points: [
        'Resistência a temperaturas de aplicação do asfalto (+160°C) sem degradação',
        'Elongação de 400% que acomoda movimentos nas juntas de dilatação sem falhar',
        'Resistência certificada à fadiga por tráfego pesado (EN 14695)',
        'Sistema de junta de dilatação com perfil EPDM moldado para movimentos de ±75 mm',
      ],
    },
    benefits: [
      { icon: 'Thermometer', title: 'Resistência Térmica Extrema', description: 'Suporta temperaturas de aplicação do asfalto (+160°C) e ciclos térmicos de -45°C a +130°C em serviço, sem amolecer, escorrer ou fissurar.' },
      { icon: 'Shield', title: 'Proteção das Armaduras', description: 'Barreira impermeável que protege a laje de betão e as vigas metálicas da corrosão — o principal mecanismo de degradação estrutural em pontes.' },
      { icon: 'Layers', title: 'Resistência à Fadiga', description: 'Certificado EN 14695 para membranas de pontes. Resiste a milhões de ciclos de carga de tráfego pesado sem delaminar ou fissurar.' },
      { icon: 'Wrench', title: 'Tratamento de Juntas', description: 'Sistema completo para juntas de dilatação com perfis EPDM moldados, certificados para movimentos cíclicos de grande amplitude.' },
      { icon: 'Clock', title: 'Vida Útil da Obra de Arte', description: 'Uma ponte é projetada para 100+ anos. O EPDM tem durabilidade compatível com este horizonte, eliminando necessidade de substituição durante a vida útil.' },
      { icon: 'Droplets', title: 'Resistência Marinha', description: 'Em pontes costeiras e sobre estuários, o EPDM é inerte ao ambiente salino, ao contrário de membranas betuminosas que sofrem degradação por ozono e UV.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (tráfego de classe A)' },
      { label: 'Temperatura de aplicação do asfalto', value: 'Até +170°C sem degradação' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Resistência à fadiga por tráfego', value: 'EN 14695 — certificado' },
      { label: 'Resistência a sais de degelo', value: 'Excelente' },
      { label: 'Resistência ao ozono', value: 'Excelente (EPDM tem resistência intrínseca)' },
      { label: 'Norma de produto', value: 'EN 14695 (membranas para pontes)' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto de Impermeabilização', description: 'Projeto específico para a ponte com engenheiro de estruturas. Definição de classe de tráfego, sistema de junta de dilatação, zonas de atenção (apoios, guardas, drenos).' },
      { step: 2, title: 'Preparação do Tabuleiro', description: 'Limpeza e preparação da laje de betão. Tratamento de fissuras e irregularidades. Pendentes mínimas para drenos laterais. Aplicação de primer de adesão.' },
      { step: 3, title: 'Instalação da Membrana', description: 'Colocação da membrana EPDM em toda a superfície do tabuleiro. Colagem total com adesivo específico para resistir às tensões de tráfego e temperatura.' },
      { step: 4, title: 'Juntas de Dilatação', description: 'Instalação de perfis EPDM moldados nas juntas de dilatação. Sistema certificado para movimentos de ±75 mm. Teste de estanquidade de cada junta.' },
      { step: 5, title: 'Revestimento Asfáltico', description: 'Aplicação de camada asfáltica de ligação + camada de desgaste sobre o EPDM. Temperatura controlada para não exceder limite da membrana.' },
      { step: 6, title: 'Inspeção e Garantia', description: 'Inspeção visual e testes de aderência. Emissão de garantia de 20 anos com programa de inspeções periódicas alinhado com o plano de manutenção da ponte.' },
    ],
    techniques: [
      {
        title: 'Sistema EPDM Colado Total (Pontes de Tráfego)',
        description: 'Para pontes rodoviárias com tráfego pesado, EPDM colado à totalidade do tabuleiro. Resiste às forças de tração do asfalto durante betonagem a quente e ao tráfego.',
        pros: ['Máxima aderência ao tabuleiro — sem levantamento pelo tráfego', 'Certificado EN 14695 para tráfego de classe A', 'Sistema standard em autoestradas portuguesas'],
        cons: ['Instalação exige condições meteorológicas controladas', 'Reparação requer remoção do asfalto'],
      },
      {
        title: 'Sistema EPDM para Passagens Pedonais e Ciclistas',
        description: 'Para pontes pedonais e ciclovias, EPDM de 1,5 mm com proteção de betão ou revestimento epóxi. Sem necessidade de asfalto a quente.',
        pros: ['Instalação mais rápida e económica', 'Possibilidade de acabamento antiderrapante colorido', 'Menor peso na estrutura'],
        cons: ['Não adequado para tráfego motorizado pesado', 'Revestimento epóxi requer renovação periódica'],
      },
    ],
    comparison: [
      { feature: 'Resistência térmica (asfalto quente)', epdm: 'Até +170°C', alternatives: [{ name: 'Betume modificado', value: 'Limite +130°C' }, { name: 'PVC', value: 'Não adequado' }] },
      { feature: 'Resistência à fadiga (EN 14695)', epdm: 'Certificado Classe A', alternatives: [{ name: 'Betume modificado', value: 'Classe B' }, { name: 'Poliuretano', value: 'Classe B' }] },
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Betume modificado', value: '20-25 anos' }, { name: 'Poliuretano', value: '15-20 anos' }] },
    ],
    climate: [
      { zone: 'Norte Continental (Variações Térmicas Extremas)', description: 'Interior norte com amplitudes térmicas de 40°C+ exige membrana que não fisture no frio nem amoleça no calor. O EPDM mantém desempenho de -45°C a +130°C.' },
      { zone: 'Algarve (Calor Intenso)', description: 'Tabuleiros de pontes no sul atingem +70°C à superfície no verão. O EPDM não amolece nem escorre nestas temperaturas, ao contrário de membranas betuminosas.' },
      { zone: 'Zonas Costeiras e Estuarinas', description: 'Pontes sobre estuários e junto ao mar expostas a névoa salina e humidade constante. A resistência química do EPDM ao ambiente marinho é superior à de alternativas orgânicas.' },
    ],
    faqs: [
      { question: 'O EPDM aguenta o asfalto a quente aplicado sobre ele?', answer: 'Sim. O EPDM resiste a temperaturas de aplicação do asfalto até +170°C sem degradação. É especificamente desenvolvido para esta aplicação e está certificado pela norma EN 14695 para membranas de pontes.' },
      { question: 'Quanto tempo dura a impermeabilização de uma ponte?', answer: 'Com EPDM, a vida útil é de 50+ anos, compatível com a vida de projeto de pontes (100 anos). A substituição é necessária quando há danos mecânicos por acidentes ou obras, não por degradação natural da membrana.' },
      { question: 'Como se repara uma membrana EPDM numa ponte sem cortar o trânsito?', answer: 'Reparações pontuais são possíveis em zonas de tráfego reduzido com fresagem do asfalto, aplicação de patch EPDM com adesivo e novo asfalto. Em pontes com separação de faixas, uma faixa pode ser reparada sem corte total.' },
    ],
    relatedSlugs: ['tunnels', 'expansion-joints', 'plaza-podium'],
  },
  en: {
    meta: {
      title: 'Bridge and Viaduct Waterproofing with EPDM | Membriko',
      description: 'EPDM waterproofing systems for bridge and viaduct decks. Resistance to heavy traffic, extreme thermal cycles and structural movements. Portugal.',
      keywords: ['bridge waterproofing EPDM', 'bridge deck membrane', 'viaduct waterproofing Portugal', 'EPDM road bridge', 'structure waterproofing'],
    },
    hero: {
      headline: 'Protected Bridges and Viaducts with EPDM Systems',
      subtitle: 'EPDM membrane for bridge decks withstands heavy traffic, extreme thermal variations and structural movements, with service life compatible with the structure.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '150°C', label: 'Thermal amplitude tolerated' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Bridge Waterproofing Challenge',
      description: 'Bridge and viaduct decks are exposed to some of the most severe conditions in civil engineering: heavy traffic, thermal variations from -20°C to +130°C at the surface, expansion joint movements, de-icing salts and marine environment on coastal bridges.',
      points: [
        'Thermal variations exceeding 100°C at deck surface between winter and summer',
        'Heavy traffic creates dynamic fatigue loads across the entire waterproofing system',
        'Expansion joints subject to cyclic movements that destroy rigid membranes',
        'Deck infiltrations corrode reinforcement and steel beams, compromising structural safety',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Bridge Decks',
      description: 'EPDM is the membrane of choice for Class A (heavy traffic) bridge deck waterproofing, installed between the concrete slab and asphalt surfacing. The system includes specialist treatment of expansion joints.',
      points: [
        'Resistance to asphalt application temperatures (+160°C) without degradation',
        '400% elongation accommodating expansion joint movements without failure',
        'Certified fatigue resistance to heavy traffic (EN 14695)',
        'Expansion joint system with moulded EPDM profile for ±75 mm movements',
      ],
    },
    benefits: [
      { icon: 'Thermometer', title: 'Extreme Thermal Resistance', description: 'Withstands asphalt application temperatures (+160°C) and thermal cycles from -45°C to +130°C in service, without softening, flowing or cracking.' },
      { icon: 'Shield', title: 'Reinforcement Protection', description: 'Impermeable barrier protecting concrete slab and steel beams from corrosion — the primary structural degradation mechanism in bridges.' },
      { icon: 'Layers', title: 'Fatigue Resistance', description: 'EN 14695 certified for bridge membranes. Withstands millions of heavy traffic load cycles without delaminating or cracking.' },
      { icon: 'Wrench', title: 'Joint Treatment', description: 'Complete system for expansion joints with moulded EPDM profiles, certified for large-amplitude cyclic movements.' },
      { icon: 'Clock', title: 'Structure Service Life', description: 'A bridge is designed for 100+ years. EPDM has durability compatible with this horizon, eliminating replacement needs during service life.' },
      { icon: 'Droplets', title: 'Marine Resistance', description: 'On coastal bridges and over estuaries, EPDM is inert to saline environments, unlike bituminous membranes which degrade from ozone and UV.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (Class A traffic)' },
      { label: 'Asphalt application temperature', value: 'Up to +170°C without degradation' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Traffic fatigue resistance', value: 'EN 14695 — certified' },
      { label: 'De-icing salt resistance', value: 'Excellent' },
      { label: 'Ozone resistance', value: 'Excellent (EPDM has intrinsic resistance)' },
      { label: 'Product standard', value: 'EN 14695 (bridge membranes)' },
    ],
    installationSteps: [
      { step: 1, title: 'Waterproofing Design', description: 'Bridge-specific design with structural engineer. Traffic class definition, expansion joint system, attention zones (bearings, parapets, drains).' },
      { step: 2, title: 'Deck Preparation', description: 'Concrete slab cleaning and preparation. Crack and irregularity treatment. Minimum slopes for lateral drains. Adhesion primer application.' },
      { step: 3, title: 'Membrane Installation', description: 'EPDM membrane placement across entire deck surface. Full bonding with specific adhesive to resist traffic and temperature stresses.' },
      { step: 4, title: 'Expansion Joints', description: 'Moulded EPDM profiles installed at expansion joints. System certified for ±75 mm cyclic movements. Watertightness test of each joint.' },
      { step: 5, title: 'Asphalt Surfacing', description: 'Application of binder course + wearing course over EPDM. Controlled temperature to avoid exceeding membrane limit.' },
      { step: 6, title: 'Inspection and Warranty', description: 'Visual inspection and adhesion testing. Issue of 20-year warranty with periodic inspection programme aligned with bridge maintenance plan.' },
    ],
    techniques: [
      {
        title: 'Fully Bonded EPDM System (Traffic Bridges)',
        description: 'For heavy traffic road bridges, EPDM fully bonded to the entire deck. Resists tensile forces from hot asphalt application and traffic.',
        pros: ['Maximum deck adhesion — no uplift from traffic', 'EN 14695 certified for Class A traffic', 'Standard system on Portuguese motorways'],
        cons: ['Installation requires controlled weather conditions', 'Repair requires asphalt removal'],
      },
      {
        title: 'EPDM System for Pedestrian and Cycle Bridges',
        description: 'For pedestrian bridges and cycleways, 1.5 mm EPDM with concrete protection or epoxy coating. No hot asphalt required.',
        pros: ['Faster and more economical installation', 'Possibility of coloured anti-slip finish', 'Lower structural weight'],
        cons: ['Not suitable for heavy motorised traffic', 'Epoxy coating requires periodic renewal'],
      },
    ],
    comparison: [
      { feature: 'Thermal resistance (hot asphalt)', epdm: 'Up to +170°C', alternatives: [{ name: 'Modified bitumen', value: '+130°C limit' }, { name: 'PVC', value: 'Not suitable' }] },
      { feature: 'Fatigue resistance (EN 14695)', epdm: 'Certified Class A', alternatives: [{ name: 'Modified bitumen', value: 'Class B' }, { name: 'Polyurethane', value: 'Class B' }] },
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Modified bitumen', value: '20-25 years' }, { name: 'Polyurethane', value: '15-20 years' }] },
    ],
    climate: [
      { zone: 'Continental North (Extreme Thermal Variations)', description: 'Interior north with 40°C+ thermal amplitude demands membrane that does not crack in cold or soften in heat. EPDM maintains performance from -45°C to +130°C.' },
      { zone: 'Algarve (Intense Heat)', description: 'Bridge decks in the south reach +70°C at the surface in summer. EPDM does not soften or flow at these temperatures, unlike bituminous membranes.' },
      { zone: 'Coastal and Estuarine Zones', description: 'Bridges over estuaries and near the sea exposed to salt spray and constant humidity. EPDM chemical resistance to marine environment is superior to organic alternatives.' },
    ],
    faqs: [
      { question: 'Does EPDM withstand hot asphalt applied over it?', answer: 'Yes. EPDM resists asphalt application temperatures up to +170°C without degradation. It is specifically developed for this application and is certified to EN 14695 for bridge membranes.' },
      { question: 'How long does bridge waterproofing last?', answer: 'With EPDM, service life is 50+ years, compatible with bridge design life (100 years). Replacement is needed when mechanical damage occurs from accidents or works, not from natural membrane degradation.' },
      { question: 'How is EPDM membrane repaired on a bridge without traffic closure?', answer: 'Localised repairs are possible in reduced-traffic zones by milling the asphalt, applying an EPDM patch with adhesive and new asphalt. On bridges with lane separation, one lane can be repaired without full closure.' },
    ],
    relatedSlugs: ['tunnels', 'expansion-joints', 'plaza-podium'],
  },
}
