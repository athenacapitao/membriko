import type { ApplicationData } from '../types'

export const basements: ApplicationData = {
  id: 'basements',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Caves com EPDM | Membriko',
      description: 'Impermeabilização de caves e pisos enterrados com membrana EPDM. Solução definitiva para caves húmidas. Resistente à pressão hidrostática. Portugal.',
      keywords: ['impermeabilização cave EPDM', 'cave húmida solução', 'membrana cave betão', 'impermeabilização piso enterrado', 'EPDM cave Portugal'],
    },
    hero: {
      headline: 'Caves Secas e Protegidas com Membrana EPDM',
      subtitle: 'Converta a sua cave húmida numa cave funcional e seca com o sistema de impermeabilização EPDM — a solução definitiva para pisos enterrados.',
      stats: [
        { value: '50+', label: 'Anos de proteção' },
        { value: '100%', label: 'Impermeabilidade garantida' },
        { value: '400%', label: 'Elongação sem rutura' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Caves Húmidas',
      description: 'Caves húmidas são um problema comum em Portugal, especialmente em edifícios mais antigos com impermeabilização deficiente ou inexistente. A humidade destrói revestimentos, cria bolores prejudiciais à saúde e deteriora a estrutura.',
      points: [
        'Humidade persistente em caves cria bolores nocivos à saúde dos residentes',
        'Infiltrações danificam pavimentos, paredes e equipamentos armazenados',
        'Reparações temporárias com tintas ou injeções resolvem o problema por apenas 2-5 anos',
        'Devalorização significativa do imóvel por cave húmida ou inutilizável',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Caves',
      description: 'A membrana EPDM cria uma barreira impermeável contínua que isola completamente o interior da cave da humidade do solo. A sua resistência à pressão hidrostática garante eficácia mesmo com lençol freático elevado.',
      points: [
        'Barreira EPDM contínua em paredes e laje que não tem pontos de fraqueza',
        'Resistência comprovada a pressão hidrostática equivalente a vários metros de coluna de água',
        'Solução definitiva — sem necessidade de reintervenção em 50+ anos',
        'Cave reutilizável para habitação, garagem, armazém ou técnicas após obra',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Solução Definitiva', description: 'Ao contrário de tintas e injeções que falham em poucos anos, o EPDM é uma solução estrutural que dura 50+ anos sem reintervenção.' },
      { icon: 'Droplets', title: 'Resistência a Alta Pressão', description: 'O EPDM ancorado mecanicamente resiste a pressões hidrostáticas equivalentes a 3-5 m de coluna de água, cobrindo a maioria das situações em Portugal.' },
      { icon: 'Home', title: 'Cave Reutilizável', description: 'Uma cave completamente estanque pode ser transformada em espaço habitável, garagem, escritório ou zona técnica, acrescentando valor significativo ao imóvel.' },
      { icon: 'Euro', title: 'Valorização do Imóvel', description: 'Uma cave seca e funcional pode aumentar o valor do imóvel em €20.000-€50.000+ dependendo da dimensão — ROI muito superior ao custo da obra.' },
      { icon: 'Leaf', title: 'Saúde e Qualidade de Ar', description: 'Eliminação de humidade e bolores melhora significativamente a qualidade do ar interior de todo o edifício, com benefícios para a saúde dos ocupantes.' },
      { icon: 'Wrench', title: 'Sem Escavação Exterior', description: 'O sistema interior com EPDM é instalado sem necessidade de escavar à volta do edifício — obra completamente interior com mínima perturbação.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (sistema interior)' },
      { label: 'Resistência à pressão hidrostática', value: 'Até 5 m de coluna de água' },
      { label: 'Sistema de ancoragem', value: 'Mecânico — buchas e perfis de aço inox' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Resistência química ao solo', value: 'Excelente — sulfatos, cloretos' },
      { label: 'Resistência a raízes', value: 'Boa (espessura 2,0 mm)' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Diagnóstico Completo', description: 'Avaliação da dimensão e localização das infiltrações. Identificação das causas (lençol freático, escorrência, condensação). Medição de humidade nas paredes e laje.' },
      { step: 2, title: 'Tratamento de Fissuras Ativas', description: 'Injeção de poliuretano ou resina epóxi em fissuras com fluxo ativo de água antes da instalação do EPDM. Paragem do fluxo ativo é pré-requisito.' },
      { step: 3, title: 'Preparação das Superfícies', description: 'Remoção de revestimentos instáveis, limpeza de eflorescências e salitres. Regularização de superfícies irregulares. Arredondamento de cantos a 45°.' },
      { step: 4, title: 'Instalação da Membrana EPDM', description: 'Instalação e ancoragem mecânica da membrana EPDM em todas as paredes e laje. Sistema de perfis de ancoragem em inox nas junções e bordos.' },
      { step: 5, title: 'Sistema de Drenagem de Emergência', description: 'Instalação de canal de drenagem perimetral e bomba de submersão como segurança adicional. Garante evacuação de eventual água que ultrapasse a membrana.' },
      { step: 6, title: 'Revestimentos Interiores', description: 'Aplicação de revestimentos interiores sobre o EPDM (gesso, isolamento, pladur) para criar acabamento de qualidade. Emissão de garantia de 20 anos.' },
    ],
    techniques: [
      {
        title: 'Sistema Interior Ancorado',
        description: 'Membrana EPDM ancorada mecanicamente ao interior das paredes da cave. Cria câmara de ar entre EPDM e parede que drena eventuais infiltrações para canal perimetral.',
        pros: ['Sem escavação exterior — obra totalmente interior', 'Permite alívio de pressão hidrostática', 'Solução versátil para caves com geometria complexa'],
        cons: ['Perde ligeiramente de espaço interior (câmara de ar)', 'Requer sistema de drenagem complementar', 'Menos eficaz que sistema exterior para pressões muito elevadas'],
      },
      {
        title: 'Sistema Exterior Simultâneo',
        description: 'Quando possível (durante construção ou com escavação acessível), EPDM instalado no exterior das paredes da cave. Máxima proteção — sistema positivo.',
        pros: ['Máxima eficácia — bloqueio da água antes do betão', 'Sem perda de espaço interior', 'Sistema mais durável a longo prazo'],
        cons: ['Requer acesso exterior (escavação)', 'Mais perturbador e caro', 'Não aplicável em caves em banda ou com edifícios adjacentes'],
      },
    ],
    comparison: [
      {
        feature: 'Durabilidade',
        epdm: '50+ anos',
        alternatives: [
          { name: 'Tinta impermeável interior', value: '2-5 anos' },
          { name: 'Injeção de resina', value: '5-15 anos' },
          { name: 'Sistema drenagem + sump', value: '15-20 anos (bomba)' },
        ],
      },
      {
        feature: 'Eficácia a pressão alta',
        epdm: 'Excelente (ancorado)',
        alternatives: [
          { name: 'Tinta impermeável interior', value: 'Nenhuma — levanta com pressão' },
          { name: 'Injeção de resina', value: 'Moderada — colmata fissuras' },
          { name: 'Sistema drenagem + sump', value: 'Gere água (não para)' },
        ],
      },
    ],
    climate: [
      { zone: 'Litoral Atlântico (Lençol Freático Elevado)', description: 'Caves no norte de Portugal têm frequentemente lençol freático a 1-3 m de profundidade. O sistema EPDM ancorado com resistência a 5 m de coluna de água é a solução adequada.' },
      { zone: 'Sul (Chuvas Intensas Sazonais)', description: 'Mesmo em zonas de baixa precipitação, chuvas intensas de inverno saturam o solo e criam pressão hidrostática temporária mas intensa nas caves.' },
      { zone: 'Zonas Costeiras (Solo Salino)', description: 'Caves em zonas costeiras têm risco adicional de corrosão por cloretos. O EPDM protege completamente o betão da cave do solo salino.' },
    ],
    faqs: [
      { question: 'A solução EPDM interior funciona mesmo com pressão hidrostática elevada?', answer: 'Sim. O sistema de ancoragem mecânica do EPDM é dimensionado para resistir à pressão hidrostática específica de cada caso. Para pressões muito elevadas (lençol freático acima do piso da cave), podem ser necessárias ancoragens reforçadas.' },
      { question: 'Quanto tempo demora a obra de impermeabilização de uma cave?', answer: 'Uma cave de 50-100 m² leva tipicamente 3-7 dias de obra interior, incluindo preparação e instalação da membrana. Sem escavação exterior, a perturbação é mínima.' },
    ],
    relatedSlugs: ['foundations', 'underground-parking', 'retaining-walls'],
  },
  en: {
    meta: {
      title: 'Basement Waterproofing with EPDM Membrane | Membriko',
      description: 'Basement and buried floor waterproofing with EPDM membrane. Definitive solution for damp basements. Hydrostatic pressure resistant. Portugal.',
      keywords: ['basement waterproofing EPDM', 'damp basement solution', 'basement membrane concrete', 'buried floor waterproofing', 'EPDM basement Portugal'],
    },
    hero: {
      headline: 'Dry, Protected Basements with EPDM Membrane',
      subtitle: 'Convert your damp basement into a functional, dry space with the EPDM waterproofing system — the definitive solution for below-ground floors.',
      stats: [
        { value: '50+', label: 'Years of protection' },
        { value: '100%', label: 'Guaranteed impermeability' },
        { value: '400%', label: 'Elongation without failure' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Damp Basement Challenge',
      description: 'Damp basements are a common problem in Portugal, especially in older buildings with deficient or absent waterproofing. Moisture destroys finishes, creates health-harmful mould and deteriorates the structure.',
      points: [
        'Persistent basement moisture creates mould harmful to resident health',
        'Infiltrations damage floors, walls and stored equipment',
        'Temporary repairs with paints or injections solve the problem for only 2-5 years',
        'Significant property devaluation from wet or unusable basement',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Basements',
      description: 'EPDM membrane creates a continuous impermeable barrier completely isolating the basement interior from soil moisture. Its hydrostatic pressure resistance ensures effectiveness even with a high water table.',
      points: [
        'Continuous EPDM barrier on walls and slab without weak points',
        'Proven hydrostatic pressure resistance equivalent to several metres of water column',
        'Definitive solution — no re-intervention needed for 50+ years',
        'Reusable basement for housing, garage, storage or technical use after work',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Definitive Solution', description: 'Unlike paints and injections that fail within a few years, EPDM is a structural solution lasting 50+ years without re-intervention.' },
      { icon: 'Droplets', title: 'High Pressure Resistance', description: 'Mechanically anchored EPDM resists hydrostatic pressures equivalent to 3-5 m water column, covering most situations in Portugal.' },
      { icon: 'Home', title: 'Reusable Basement', description: 'A completely watertight basement can be transformed into habitable space, garage, office or technical area, adding significant value to the property.' },
      { icon: 'Euro', title: 'Property Value Enhancement', description: 'A dry, functional basement can increase property value by €20,000-€50,000+ depending on size — ROI far exceeding the project cost.' },
      { icon: 'Leaf', title: 'Health and Air Quality', description: 'Elimination of moisture and mould significantly improves interior air quality throughout the building, with health benefits for occupants.' },
      { icon: 'Wrench', title: 'No Exterior Excavation', description: 'The internal EPDM system is installed without excavating around the building — fully interior work with minimal disruption.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (internal system)' },
      { label: 'Hydrostatic pressure resistance', value: 'Up to 5 m water column' },
      { label: 'Anchoring system', value: 'Mechanical — stainless steel anchors and profiles' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Soil chemical resistance', value: 'Excellent — sulphates, chlorides' },
      { label: 'Root resistance', value: 'Good (2.0 mm thickness)' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Full Diagnosis', description: 'Assessment of infiltration extent and location. Cause identification (water table, runoff, condensation). Moisture measurement in walls and slab.' },
      { step: 2, title: 'Active Crack Treatment', description: 'Polyurethane or epoxy resin injection into cracks with active water flow before EPDM installation. Stopping active flow is a prerequisite.' },
      { step: 3, title: 'Surface Preparation', description: 'Removal of unstable coatings, cleaning of efflorescence and salts. Levelling of irregular surfaces. Chamfering corners to 45°.' },
      { step: 4, title: 'EPDM Membrane Installation', description: 'Installation and mechanical anchoring of EPDM membrane on all walls and slab. Stainless steel anchoring profile system at junctions and edges.' },
      { step: 5, title: 'Emergency Drainage System', description: 'Installation of perimeter drainage channel and submersible pump as additional safety. Ensures evacuation of any water bypassing the membrane.' },
      { step: 6, title: 'Interior Finishes', description: 'Application of interior finishes over EPDM (plaster, insulation, plasterboard) for quality finish. Issue of 20-year warranty.' },
    ],
    techniques: [
      {
        title: 'Anchored Interior System',
        description: 'EPDM mechanically anchored to basement wall interior. Creates air cavity between EPDM and wall draining any infiltrations to perimeter channel.',
        pros: ['No exterior excavation — fully interior work', 'Allows hydrostatic pressure relief', 'Versatile solution for complex basement geometries'],
        cons: ['Slightly reduces interior space (air cavity)', 'Requires complementary drainage system', 'Less effective than exterior system for very high pressures'],
      },
      {
        title: 'Simultaneous External System',
        description: 'Where accessible (during construction or with accessible excavation), EPDM installed on exterior of basement walls. Maximum protection — positive system.',
        pros: ['Maximum effectiveness — water blocked before concrete', 'No interior space loss', 'Most durable long-term system'],
        cons: ['Requires exterior access (excavation)', 'More disruptive and expensive', 'Not applicable in terraced basements or adjacent buildings'],
      },
    ],
    comparison: [
      {
        feature: 'Durability',
        epdm: '50+ years',
        alternatives: [
          { name: 'Interior waterproof paint', value: '2-5 years' },
          { name: 'Resin injection', value: '5-15 years' },
          { name: 'Drainage + sump system', value: '15-20 years (pump)' },
        ],
      },
      {
        feature: 'Effectiveness under high pressure',
        epdm: 'Excellent (anchored)',
        alternatives: [
          { name: 'Interior waterproof paint', value: 'None — lifts under pressure' },
          { name: 'Resin injection', value: 'Moderate — plugs cracks' },
          { name: 'Drainage + sump system', value: 'Manages water (does not stop)' },
        ],
      },
    ],
    climate: [
      { zone: 'Atlantic Coast (High Water Table)', description: 'Basements in northern Portugal frequently have water table at 1-3 m depth. Anchored EPDM system with resistance to 5 m water column is the appropriate solution.' },
      { zone: 'South (Intense Seasonal Rainfall)', description: 'Even in low-precipitation areas, intense winter rains saturate soil and create temporary but intense hydrostatic pressure on basements.' },
      { zone: 'Coastal Zones (Saline Soil)', description: 'Basements in coastal zones have additional chloride corrosion risk. EPDM completely protects basement concrete from saline soil.' },
    ],
    faqs: [
      { question: 'Does the interior EPDM solution work even with high hydrostatic pressure?', answer: 'Yes. The mechanical anchoring system is dimensioned to resist the specific hydrostatic pressure of each case. For very high pressures (water table above basement floor level), reinforced anchoring may be required.' },
      { question: 'How long does basement waterproofing take?', answer: 'A 50-100 m² basement typically takes 3-7 days of interior work, including preparation and membrane installation. Without exterior excavation, disruption is minimal.' },
    ],
    relatedSlugs: ['foundations', 'underground-parking', 'retaining-walls'],
  },
}
