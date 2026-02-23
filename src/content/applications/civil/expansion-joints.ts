import type { ApplicationData } from '../types'

export const expansionJoints: ApplicationData = {
  id: 'expansion-joints',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Juntas de Dilatação com EPDM | Membriko',
      description: 'Perfis e membranas EPDM para juntas de dilatação em coberturas, pontes, lajes e fachadas. Estanqueidade com movimentos ±75 mm. Portugal.',
      keywords: ['impermeabilização junta dilatação EPDM', 'perfil EPDM junta', 'junta dilatação estanque', 'membrana junta movimento', 'EPDM junta estrutural'],
    },
    hero: {
      headline: 'Juntas de Dilatação Estanques com EPDM de Alta Flexibilidade',
      subtitle: 'Perfis e sistemas EPDM para juntas de dilatação garantem estanquidade em movimentos cíclicos de ±75 mm, em coberturas, pontes, lajes e fachadas.',
      stats: [
        { value: '±75 mm', label: 'Movimento acomodado' },
        { value: '400%', label: 'Elongação do material' },
        { value: '50+', label: 'Anos de vida útil' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Juntas de Dilatação',
      description: 'As juntas de dilatação são os pontos mais críticos em qualquer impermeabilização. São necessárias para acomodar movimentos estruturais, mas cada junta é um potencial ponto de infiltração. A maioria das infiltrações em coberturas e lajes ocorre nas juntas.',
      points: [
        'Movimentos térmicos cíclicos de ±10-75 mm criam fadiga em materiais de vedação rígidos',
        'Assentamentos diferenciais e movimentos sísmicos ampliam os movimentos nas juntas',
        'Juntas mal resolvidas são responsáveis por mais de 60% das infiltrações em obras de construção',
        'Soluções inadequadas (silicone, betume) duram 5-10 anos e requerem manutenção periódica',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Juntas de Dilatação',
      description: 'Os perfis e sistemas de membrana EPDM para juntas de dilatação são especificamente desenvolvidos para acomodar movimentos de grande amplitude de forma duradoura. A elasticidade do EPDM elimina a fadiga por ciclos repetidos.',
      points: [
        'Perfis EPDM pré-moldados em U, W e Omega para diferentes amplitudes de movimento',
        'Sistemas de membrana EPDM com folga suficiente para acomodar movimentos sem tensões',
        'Vulcanização em obra para ligações perfeitas entre membrana e perfil de junta',
        'Sistemas testados para 10.000+ ciclos de movimento sem degradação',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Estanquidade Duradoura', description: 'O EPDM mantém estanquidade em juntas com movimentos cíclicos de décadas sem perder elasticidade, ao contrário de silicone ou betume que endurecem com o tempo.' },
      { icon: 'Layers', title: 'Perfis Pré-Moldados', description: 'Perfis EPDM em U, W e Omega pré-vulcanizados em fábrica garantem geometria perfeita e comportamento previsível em cada tipo de junta.' },
      { icon: 'Wrench', title: 'Compatível com Todos os Sistemas', description: 'Os perfis de junta EPDM integram-se em qualquer sistema de impermeabilização de cobertura, ponte, laje ou fachada, criando continuidade impermeável.' },
      { icon: 'Thermometer', title: 'Resistência a Ciclos Térmicos', description: 'Testado para 10.000+ ciclos térmicos sem degradação — representa mais de 27 anos de movimentos diários sem perda de estanquidade.' },
      { icon: 'Clock', title: 'Sem Manutenção', description: 'Ao contrário de silicone (substituição a 10-15 anos) e betume (reperfilagem frequente), o EPDM não requer manutenção preventiva nas juntas.' },
      { icon: 'Euro', title: 'Custo Total Reduzido', description: 'O custo inicial superior ao silicone é amplamente compensado pela eliminação de substituições periódicas e intervenções de manutenção.' },
    ],
    specs: [
      { label: 'Amplitude de movimento', value: '±10 mm a ±75 mm (dependente do perfil)' },
      { label: 'Número de ciclos testado', value: '> 10.000 ciclos (sem degradação)' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Elongação do perfil', value: '≥ 300%' },
      { label: 'Perfis disponíveis', value: 'U, W, Omega, T, retangular' },
      { label: 'Método de ligação à membrana', value: 'Vulcanização a frio ou cola de contacto' },
      { label: 'Resistência a sais de degelo', value: 'Excelente' },
      { label: 'Norma', value: 'EN 14695 (pontes) / EN 13956 (coberturas)' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto das Juntas', description: 'Definição de amplitudes de movimento por análise estrutural ou térmica. Seleção do perfil EPDM adequado para cada localização e amplitude prevista.' },
      { step: 2, title: 'Preparação das Bordas', description: 'Limpeza e regularização das bordas da junta. Mínimo 150 mm de área de apoio em cada lado. Arredondamento de cantos vivos.' },
      { step: 3, title: 'Instalação da Membrana Base', description: 'Instalação da membrana EPDM principal até 50 mm de cada lado da junta. Deixar folga suficiente para o perfil de junta.' },
      { step: 4, title: 'Instalação do Perfil de Junta', description: 'Colagem do perfil EPDM pré-moldado sobre a junta com cola de contacto específica. Pressão uniforme para garantir aderência completa.' },
      { step: 5, title: 'Vulcanização das Ligações', description: 'Vulcanização a frio nas ligações entre membrana e perfil de junta. Reforço com patch EPDM adicional em cruzamentos e cantos.' },
      { step: 6, title: 'Teste e Garantia', description: 'Teste de estanquidade de cada junta por inundação ou pressão de ar. Documentação fotográfica. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'Perfil EPDM Pré-Moldado em U (Movimentos Até ±30 mm)',
        description: 'Perfil EPDM em U aplicado sobre a junta com flanges coladas à membrana principal. Para movimentos térmicos moderados em coberturas e lajes.',
        pros: ['Instalação rápida e precisa', 'Testado em laboratório para amplitudes definidas', 'Stock disponível para vários tamanhos de junta'],
        cons: ['Amplitude limitada — não adequado para movimentos sísmicos grandes', 'Requer superfície de apoio regular'],
      },
      {
        title: 'Sistema de Membrana com Folga (Movimentos Até ±75 mm)',
        description: 'Para juntas com movimentos de grande amplitude, membrana EPDM instalada com comprimento extra dobrado em forma de W ou Omega sobre a junta.',
        pros: ['Acomoda movimentos muito grandes incluindo sísmicos', 'Continuidade total de membrana — sem ligações entre materiais diferentes', 'Adequado para pontes e estruturas sujeitas a movimentos sísmicos'],
        cons: ['Instalação mais complexa e exige mais material', 'Proteção mecânica específica necessária sobre a dobra'],
      },
    ],
    comparison: [
      { feature: 'Vida útil da vedação', epdm: '50+ anos', alternatives: [{ name: 'Silicone estrutural', value: '10-15 anos' }, { name: 'Polissulfureto', value: '15-20 anos' }] },
      { feature: 'Amplitude de movimento', epdm: 'Até ±75 mm', alternatives: [{ name: 'Silicone estrutural', value: 'Até ±25% largura junta' }, { name: 'Polissulfureto', value: 'Até ±20% largura junta' }] },
      { feature: 'Manutenção necessária', epdm: 'Nenhuma preventiva', alternatives: [{ name: 'Silicone estrutural', value: 'Substituição a 10-15 anos' }, { name: 'Polissulfureto', value: 'Verificação anual' }] },
    ],
    climate: [
      { zone: 'Interior Continental (Amplitudes Térmicas Extremas)', description: 'Interior de Portugal com invernos frios e verões muito quentes cria juntas com movimentos de ±20-40 mm em estruturas expostas. O EPDM acomoda estes movimentos sem fadiga.' },
      { zone: 'Zonas Sísmicas (Lisboa, Setúbal, Algarve)', description: 'Juntas de dilatação em zonas sísmicas devem acomodar movimentos sísmicos que podem exceder os térmicos. Os sistemas EPDM com folga são dimensionados para estes cenários.' },
      { zone: 'Zonas Costeiras (Humidade e Sal)', description: 'Juntas em ambiente marinho sujeitas a sal e humidade. A resistência química do EPDM ao ambiente salino é superior a todos os elastómeros alternativos.' },
    ],
    faqs: [
      { question: 'Qual a diferença entre perfil de junta e membrana com folga?', answer: 'Um perfil de junta EPDM é um elemento pré-moldado instalado sobre a junta. Uma membrana com folga usa a própria membrana de impermeabilização com comprimento extra dobrado sobre a junta. Ambos são sistemas EPDM — a escolha depende da amplitude de movimento e do contexto da obra.' },
      { question: 'O EPDM pode substituir o silicone nas juntas de dilatação?', answer: 'Sim, para juntas em coberturas, lajes e pontes. O EPDM tem desempenho muito superior ao silicone em durabilidade e amplitude de movimento. O silicone é mais fácil de aplicar em obra, mas requer substituição a 10-15 anos.' },
      { question: 'Como se repara uma junta EPDM danificada?', answer: 'Reparação por patch de EPDM vulcanizado sobre o dano. Se o perfil de junta estiver danificado, substituição do troço danificado por soldadura de novo perfil. Reparação geralmente possível sem remoção de outros elementos.' },
    ],
    relatedSlugs: ['bridges', 'tunnels', 'plaza-podium'],
  },
  en: {
    meta: {
      title: 'Expansion Joint Waterproofing with EPDM | Membriko',
      description: 'EPDM profiles and membranes for expansion joints in roofs, bridges, slabs and facades. Watertightness with ±75 mm movements. Portugal.',
      keywords: ['expansion joint waterproofing EPDM', 'EPDM joint profile', 'watertight expansion joint', 'movement joint membrane', 'EPDM structural joint'],
    },
    hero: {
      headline: 'Watertight Expansion Joints with High-Flexibility EPDM',
      subtitle: 'EPDM profiles and systems for expansion joints guarantee watertightness under cyclic movements of ±75 mm, in roofs, bridges, slabs and facades.',
      stats: [
        { value: '±75 mm', label: 'Movement accommodated' },
        { value: '400%', label: 'Material elongation' },
        { value: '50+', label: 'Years service life' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Expansion Joint Challenge',
      description: 'Expansion joints are the most critical points in any waterproofing system. They are needed to accommodate structural movements, but each joint is a potential infiltration point. Most infiltrations in roofs and slabs occur at joints.',
      points: [
        'Cyclic thermal movements of ±10-75 mm create fatigue in rigid sealing materials',
        'Differential settlements and seismic movements amplify joint movements',
        'Poorly resolved joints are responsible for over 60% of infiltrations in construction',
        'Inadequate solutions (silicone, bitumen) last 5-10 years and require periodic maintenance',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Expansion Joints',
      description: 'EPDM profiles and membrane systems for expansion joints are specifically developed to accommodate large-amplitude movements durably. EPDM elasticity eliminates fatigue from repeated cycles.',
      points: [
        'Pre-moulded EPDM profiles in U, W and Omega for different movement amplitudes',
        'EPDM membrane systems with sufficient slack to accommodate movements without stress',
        'On-site vulcanisation for perfect connections between membrane and joint profile',
        'Systems tested for 10,000+ movement cycles without degradation',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Lasting Watertightness', description: 'EPDM maintains watertightness in joints with decades of cyclic movements without losing elasticity, unlike silicone or bitumen which harden over time.' },
      { icon: 'Layers', title: 'Pre-Moulded Profiles', description: 'Factory pre-vulcanised EPDM profiles in U, W and Omega guarantee perfect geometry and predictable behaviour for each joint type.' },
      { icon: 'Wrench', title: 'Compatible with All Systems', description: 'EPDM joint profiles integrate into any roof, bridge, slab or facade waterproofing system, creating impermeable continuity.' },
      { icon: 'Thermometer', title: 'Thermal Cycle Resistance', description: 'Tested for 10,000+ thermal cycles without degradation — representing over 27 years of daily movements without watertightness loss.' },
      { icon: 'Clock', title: 'Maintenance-Free', description: 'Unlike silicone (replacement at 10-15 years) and bitumen (frequent re-profiling), EPDM requires no preventive maintenance at joints.' },
      { icon: 'Euro', title: 'Reduced Total Cost', description: 'The higher initial cost vs silicone is widely offset by elimination of periodic replacements and maintenance interventions.' },
    ],
    specs: [
      { label: 'Movement amplitude', value: '±10 mm to ±75 mm (profile dependent)' },
      { label: 'Tested cycle count', value: '> 10,000 cycles (without degradation)' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Profile elongation', value: '≥ 300%' },
      { label: 'Available profiles', value: 'U, W, Omega, T, rectangular' },
      { label: 'Connection to membrane method', value: 'Cold vulcanisation or contact adhesive' },
      { label: 'De-icing salt resistance', value: 'Excellent' },
      { label: 'Standard', value: 'EN 14695 (bridges) / EN 13956 (roofs)' },
    ],
    installationSteps: [
      { step: 1, title: 'Joint Design', description: 'Movement amplitude definition by structural or thermal analysis. EPDM profile selection appropriate for each location and anticipated amplitude.' },
      { step: 2, title: 'Edge Preparation', description: 'Joint edge cleaning and levelling. Minimum 150 mm bearing area each side. Sharp corner rounding.' },
      { step: 3, title: 'Base Membrane Installation', description: 'Main EPDM membrane installation to 50 mm either side of joint. Sufficient slack for joint profile.' },
      { step: 4, title: 'Joint Profile Installation', description: 'Pre-moulded EPDM profile bonding over joint with specific contact adhesive. Uniform pressure to ensure complete adhesion.' },
      { step: 5, title: 'Connection Vulcanisation', description: 'Cold vulcanisation at connections between membrane and joint profile. EPDM patch reinforcement at crossings and corners.' },
      { step: 6, title: 'Testing and Warranty', description: 'Watertightness test of each joint by flooding or air pressure. Photographic documentation. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'Pre-Moulded U Profile EPDM (Movements up to ±30 mm)',
        description: 'U-shaped EPDM profile applied over joint with flanges bonded to main membrane. For moderate thermal movements in roofs and slabs.',
        pros: ['Fast and precise installation', 'Laboratory-tested for defined amplitudes', 'Stock available for various joint sizes'],
        cons: ['Limited amplitude — not suitable for large seismic movements', 'Requires regular bearing surface'],
      },
      {
        title: 'Membrane with Slack System (Movements up to ±75 mm)',
        description: 'For large-amplitude movement joints, EPDM membrane installed with extra length folded in W or Omega shape over the joint.',
        pros: ['Accommodates very large movements including seismic', 'Full membrane continuity — no connections between different materials', 'Suitable for bridges and seismically active structures'],
        cons: ['More complex installation requiring more material', 'Specific mechanical protection needed over the fold'],
      },
    ],
    comparison: [
      { feature: 'Seal service life', epdm: '50+ years', alternatives: [{ name: 'Structural silicone', value: '10-15 years' }, { name: 'Polysulphide', value: '15-20 years' }] },
      { feature: 'Movement amplitude', epdm: 'Up to ±75 mm', alternatives: [{ name: 'Structural silicone', value: 'Up to ±25% joint width' }, { name: 'Polysulphide', value: 'Up to ±20% joint width' }] },
      { feature: 'Maintenance required', epdm: 'None preventive', alternatives: [{ name: 'Structural silicone', value: 'Replacement at 10-15 years' }, { name: 'Polysulphide', value: 'Annual inspection' }] },
    ],
    climate: [
      { zone: 'Continental Interior (Extreme Thermal Amplitude)', description: 'Portuguese interior with cold winters and very hot summers creates joints with ±20-40 mm movements in exposed structures. EPDM accommodates these movements without fatigue.' },
      { zone: 'Seismic Zones (Lisbon, Setúbal, Algarve)', description: 'Expansion joints in seismic zones must accommodate seismic movements that can exceed thermal ones. EPDM systems with slack are designed for these scenarios.' },
      { zone: 'Coastal Zones (Humidity and Salt)', description: 'Joints in marine environments subject to salt and humidity. EPDM chemical resistance to saline environments is superior to all alternative elastomers.' },
    ],
    faqs: [
      { question: 'What is the difference between a joint profile and a membrane with slack?', answer: 'An EPDM joint profile is a pre-moulded element installed over the joint. A membrane with slack uses the waterproofing membrane itself with extra length folded over the joint. Both are EPDM systems — the choice depends on movement amplitude and project context.' },
      { question: 'Can EPDM replace silicone in expansion joints?', answer: 'Yes, for joints in roofs, slabs and bridges. EPDM has far superior performance to silicone in durability and movement amplitude. Silicone is easier to apply on site, but requires replacement at 10-15 years.' },
      { question: 'How is a damaged EPDM joint repaired?', answer: 'Repair by vulcanised EPDM patch over the damage. If the joint profile is damaged, replacement of the damaged section by welding in a new profile. Repair generally possible without removing other elements.' },
    ],
    relatedSlugs: ['bridges', 'tunnels', 'plaza-podium'],
  },
}
