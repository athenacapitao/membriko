import type { ApplicationData } from '../types'

export const chemicalContainment: ApplicationData = {
  id: 'chemical-containment',
  categoryId: 'environmental',
  pt: {
    meta: {
      title: 'Contenção Secundária de Produtos Químicos com EPDM | Membriko',
      description: 'Membrana EPDM para bacias de contenção secundária de produtos químicos, tanques e instalações industriais. Alta resistência química certificada. Portugal.',
      keywords: ['contenção secundária EPDM', 'bacia contenção química membrana', 'impermeabilização instalação química', 'EPDM tanque químico Portugal', 'contenção derrame industrial'],
    },
    hero: {
      headline: 'Contenção Secundária Química com EPDM de Alta Resistência',
      subtitle: 'As bacias de contenção secundária com membrana EPDM garantem proteção ambiental em caso de derrame de produtos químicos, em conformidade com a legislação Seveso e ambiental.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'pH 2-12', label: 'Resistência química' },
        { value: '100%', label: 'Contenção garantida' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Contenção Química Secundária',
      description: 'As instalações industriais com produtos químicos são obrigadas a dispor de sistemas de contenção secundária para proteger o ambiente em caso de derrame ou acidente. A membrana de contenção deve resistir a todos os produtos armazenados durante décadas.',
      points: [
        'Legislação Seveso III (DL 254/2007) exige bacias de retenção estanques em instalações com produtos perigosos',
        'Derrame de produtos químicos sem contenção adequada pode causar coimas de milhões de euros',
        'A membrana de contenção deve resistir a todos os produtos armazenados — tipicamente várias substâncias diferentes',
        'Membranas de betão ou aço oxidam e degradam com produtos ácidos ou alcalinos em anos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Contenção Secundária',
      description: 'O EPDM com alta resistência química a ácidos, álcalis e compostos orgânicos é a membrana de referência para bacias de contenção secundária. A ficha de resistência química do EPDM cobre a maioria dos produtos industriais comuns.',
      points: [
        'Ficha de resistência química EPDM para mais de 500 produtos químicos industriais comuns',
        'Instalação em bacias de betão existentes e novas, cobrindo fundo e paredes',
        'Compatibilidade com sistemas de drenagem e recolha de efluentes da bacia',
        'Documentação técnica para processo de licenciamento Seveso e ambiental',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Alta Resistência Química', description: 'O EPDM resiste a ácidos inorgânicos (exceto H₂SO₄ concentrado), álcalis fortes, soluções salinas e muitos compostos orgânicos. Ficha de resistência química disponível para 500+ produtos.' },
      { icon: 'Droplets', title: 'Contenção a 100%', description: 'Zero infiltração de produtos químicos para solo em caso de derrame — proteção ambiental garantida e conformidade com legislação Seveso e AIA.' },
      { icon: 'Layers', title: 'Cobertura de Fundo e Paredes', description: 'Sistema contínuo de EPDM cobrindo fundo e paredes da bacia sem juntas de interface entre diferentes materiais — eliminando pontos fracos de ligação.' },
      { icon: 'Wrench', title: 'Instalação em Bacias Existentes', description: 'O EPDM instala-se sobre betão, alvenaria ou aço existente — permitindo conformidade regulatória sem demolição e reconstrução de bacias existentes.' },
      { icon: 'Clock', title: 'Longa Durabilidade', description: 'Vida útil de 50+ anos — compatível com o período de operação típico de instalações industriais. Sem substituição necessária durante o ciclo de vida do projeto.' },
      { icon: 'Euro', title: 'Conformidade Regulatory', description: 'A membrana EPDM em bacias de contenção é aceite pelas autoridades de licenciamento (APA, IGAMAOT) como solução técnica conforme para instalações Seveso.' },
    ],
    specs: [
      { label: 'Espessura', value: '2,0 mm (contenção química)' },
      { label: 'Resistência a ácidos diluídos', value: 'Excelente (HCl, HNO₃, H₃PO₄)' },
      { label: 'Resistência a álcalis', value: 'Excelente (NaOH, KOH, NH₃)' },
      { label: 'Resistência a soluções salinas', value: 'Excelente' },
      { label: 'Resistência a hidrocarbonetos alifáticos', value: 'Boa' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Norma', value: 'EN 13956 / EN 13492 (geomembranas)' },
    ],
    installationSteps: [
      { step: 1, title: 'Auditoria de Produtos', description: 'Identificação de todos os produtos armazenados. Verificação de compatibilidade química EPDM com cada produto. Definição de espessura e sistema.' },
      { step: 2, title: 'Preparação da Bacia', description: 'Inspeção e reparação da estrutura de betão ou aço existente. Tratamento de fissuras. Arredondamento de cantos vivos. Primer de adesão.' },
      { step: 3, title: 'EPDM no Fundo', description: 'Colocação do EPDM 2,0 mm no fundo da bacia. Colagem total ao betão para evitar migração de produto por debaixo da membrana.' },
      { step: 4, title: 'EPDM nas Paredes', description: 'Colagem do EPDM nas paredes da bacia com sobreposição de 200 mm sobre o EPDM do fundo. Ancoragem no topo das paredes.' },
      { step: 5, title: 'Sistema de Drenagem', description: 'Instalação de sumidouro ou dreno de fundo com manga EPDM estanque. Sistema de recolha de efluentes para tanque de segurança.' },
      { step: 6, title: 'Teste e Certificação', description: 'Teste de estanquidade por inundação de 24 horas. Certificado técnico para processo de licenciamento Seveso. Garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'EPDM Colado Total em Bacia de Betão',
        description: 'EPDM 2,0 mm colado à totalidade do fundo e paredes da bacia de betão. Sistema de referência para instalações Seveso e contenção de produtos ácidos ou alcalinos.',
        pros: ['Contenção certificada para produtos químicos', 'Sem possibilidade de migração de produto por baixo da membrana', 'Documentação técnica para licenciamento Seveso'],
        cons: ['Requer betão regular e aderente', 'Temperatura de aplicação > 10°C para cura de adesivo'],
      },
      {
        title: 'EPDM em Bacia de Terra (Contenção de Grande Volume)',
        description: 'Para bacias de contenção de grande volume (tanques de crude, biodiesel), EPDM em bacia escavada em terra. Alternativa económica para grandes volumes.',
        pros: ['Custo por m³ de contenção muito baixo', 'Instalação rápida em grandes bacias', 'Adequado para armazenamento de produtos não muito agressivos'],
        cons: ['Não adequado para produtos de alta agressividade química', 'Requer solo estável para os taludes da bacia'],
      },
    ],
    comparison: [
      { feature: 'Resistência química ampla', epdm: 'Excelente (pH 2-12)', alternatives: [{ name: 'Betão simples', value: 'Fraca — ataque ácido' }, { name: 'Epóxi', value: 'Boa mas frágil' }] },
      { feature: 'Vida útil em ambiente químico', epdm: '50+ anos', alternatives: [{ name: 'Betão simples', value: '10-20 anos' }, { name: 'Epóxi', value: '10-15 anos' }] },
    ],
    climate: [
      { zone: 'Zonas Industriais (Setúbal, Sines, Aveiro)', description: 'Instalações petroquímicas, químicas e de refinação em zonas industriais portuguesas requerem bacias de contenção Seveso com impermeabilização de alta performance.' },
      { zone: 'Agro-Indústria (Pesticidas, Fertilizantes)', description: 'Armazenamento de pesticidas e fertilizantes em explorações agrícolas de grande dimensão — contenção secundária exigida por regulamentação fitossanitária.' },
      { zone: 'Logística e Distribuição (Combustíveis)', description: 'Terminais de combustíveis e postos de abastecimento com armazenamento de hidrocarbonetos — contenção EPDM conforme regulamentação de instalações de armazenamento de combustíveis (DL 31/2006).' },
    ],
    faqs: [
      { question: 'O EPDM é aprovado para contenção de ácidos sulfúrico e nítrico?', answer: 'O EPDM resiste a ácido sulfúrico diluído (< 30%) e ácido nítrico diluído (< 20%). Para concentrações mais elevadas, a resistência é limitada e deve ser verificada na ficha técnica específica. Para ácidos concentrados, podem ser necessárias formulações especiais ou membranas alternativas.' },
      { question: 'A bacia de contenção com EPDM conta para o volume de retenção Seveso?', answer: 'Sim, desde que o sistema seja dimensionado para 110% do volume do maior recipiente e a membrana EPDM seja certificada. A documentação técnica Membriko inclui os dados necessários para o processo de licenciamento Seveso (PERIGO MAIOR).' },
    ],
    relatedSlugs: ['wastewater-treatment', 'landfill-capping', 'biogas-digesters'],
  },
  en: {
    meta: {
      title: 'Chemical Secondary Containment with EPDM | Membriko',
      description: 'EPDM membrane for secondary containment bunds for chemicals, tanks and industrial installations. Certified high chemical resistance. Portugal.',
      keywords: ['secondary containment EPDM', 'chemical containment bund membrane', 'chemical installation waterproofing', 'EPDM chemical tank Portugal', 'industrial spill containment'],
    },
    hero: {
      headline: 'Chemical Secondary Containment with High-Resistance EPDM',
      subtitle: 'Secondary containment bunds with EPDM membrane guarantee environmental protection in case of chemical spill, in compliance with Seveso and environmental legislation.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'pH 2-12', label: 'Chemical resistance' },
        { value: '100%', label: 'Guaranteed containment' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Chemical Secondary Containment Challenge',
      description: 'Industrial installations with chemicals are required to have secondary containment systems to protect the environment in case of spill or accident. The containment membrane must resist all stored products for decades.',
      points: [
        'Seveso III legislation (DL 254/2007) requires watertight retention bunds at hazardous substance installations',
        'Chemical spills without adequate containment can cause fines of millions of euros',
        'The containment membrane must resist all stored products — typically several different substances',
        'Concrete or steel membranes oxidise and degrade with acidic or alkaline products within years',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Secondary Containment',
      description: 'EPDM with high chemical resistance to acids, alkalis and organic compounds is the reference membrane for secondary containment bunds. The EPDM chemical resistance datasheet covers most common industrial products.',
      points: [
        'EPDM chemical resistance datasheet for 500+ common industrial chemical products',
        'Installation in existing and new concrete bunds, covering base and walls',
        'Compatibility with bund drainage and effluent collection systems',
        'Technical documentation for Seveso and environmental licensing process',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'High Chemical Resistance', description: 'EPDM resists inorganic acids (except concentrated H₂SO₄), strong alkalis, saline solutions and many organic compounds. Chemical resistance datasheet available for 500+ products.' },
      { icon: 'Droplets', title: '100% Containment', description: 'Zero chemical infiltration to soil in case of spill — guaranteed environmental protection and compliance with Seveso and EIA legislation.' },
      { icon: 'Layers', title: 'Base and Wall Coverage', description: 'Continuous EPDM system covering bund base and walls without interface joints between different materials — eliminating connection weak points.' },
      { icon: 'Wrench', title: 'Installation in Existing Bunds', description: 'EPDM installs over existing concrete, masonry or steel — enabling regulatory compliance without demolition and reconstruction of existing bunds.' },
      { icon: 'Clock', title: 'Long Durability', description: 'Service life of 50+ years — compatible with typical industrial installation operating period. No replacement needed during project lifecycle.' },
      { icon: 'Euro', title: 'Regulatory Compliance', description: 'EPDM membrane in containment bunds is accepted by licensing authorities (APA, IGAMAOT) as a compliant technical solution for Seveso installations.' },
    ],
    specs: [
      { label: 'Thickness', value: '2.0 mm (chemical containment)' },
      { label: 'Dilute acid resistance', value: 'Excellent (HCl, HNO₃, H₃PO₄)' },
      { label: 'Alkali resistance', value: 'Excellent (NaOH, KOH, NH₃)' },
      { label: 'Saline solution resistance', value: 'Excellent' },
      { label: 'Aliphatic hydrocarbon resistance', value: 'Good' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Standard', value: 'EN 13956 / EN 13492 (geomembranes)' },
    ],
    installationSteps: [
      { step: 1, title: 'Product Audit', description: 'Identification of all stored products. EPDM chemical compatibility verification with each product. Thickness and system definition.' },
      { step: 2, title: 'Bund Preparation', description: 'Existing concrete or steel structure inspection and repair. Crack treatment. Sharp corner rounding. Adhesion primer.' },
      { step: 3, title: 'EPDM on Base', description: '2.0 mm EPDM placement on bund base. Full bonding to concrete to prevent product migration under membrane.' },
      { step: 4, title: 'EPDM on Walls', description: 'EPDM bonding on bund walls with 200 mm overlap over base EPDM. Anchoring at wall tops.' },
      { step: 5, title: 'Drainage System', description: 'Sump or base drain installation with watertight EPDM sleeve. Effluent collection system to safety tank.' },
      { step: 6, title: 'Testing and Certification', description: '24-hour flooding watertightness test. Technical certificate for Seveso licensing process. 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'Fully Bonded EPDM in Concrete Bund',
        description: '2.0 mm EPDM fully bonded to entire concrete bund base and walls. Reference system for Seveso installations and acidic or alkaline product containment.',
        pros: ['Certified chemical product containment', 'No possibility of product migration under membrane', 'Technical documentation for Seveso licensing'],
        cons: ['Requires regular, adherent concrete', 'Application temperature > 10°C for adhesive curing'],
      },
      {
        title: 'EPDM in Earth Bund (Large Volume Containment)',
        description: 'For large volume containment bunds (crude, biodiesel tanks), EPDM in earth-excavated bund. Economical alternative for large volumes.',
        pros: ['Very low cost per m³ of containment', 'Fast installation in large bunds', 'Suitable for storage of less aggressive products'],
        cons: ['Not suitable for highly aggressive chemical products', 'Requires stable soil for bund slopes'],
      },
    ],
    comparison: [
      { feature: 'Broad chemical resistance', epdm: 'Excellent (pH 2-12)', alternatives: [{ name: 'Plain concrete', value: 'Poor — acid attack' }, { name: 'Epoxy', value: 'Good but brittle' }] },
      { feature: 'Service life in chemical environment', epdm: '50+ years', alternatives: [{ name: 'Plain concrete', value: '10-20 years' }, { name: 'Epoxy', value: '10-15 years' }] },
    ],
    climate: [
      { zone: 'Industrial Zones (Setúbal, Sines, Aveiro)', description: 'Petrochemical, chemical and refining installations in Portuguese industrial zones require Seveso containment bunds with high-performance waterproofing.' },
      { zone: 'Agro-Industry (Pesticides, Fertilisers)', description: 'Pesticide and fertiliser storage at large-scale agricultural operations — secondary containment required by plant protection regulation.' },
      { zone: 'Logistics and Distribution (Fuels)', description: 'Fuel terminals and service stations with hydrocarbon storage — EPDM containment per fuel storage installation regulation (DL 31/2006).' },
    ],
    faqs: [
      { question: 'Is EPDM approved for sulphuric and nitric acid containment?', answer: 'EPDM resists dilute sulphuric acid (< 30%) and dilute nitric acid (< 20%). For higher concentrations, resistance is limited and must be verified in the specific technical datasheet. For concentrated acids, special formulations or alternative membranes may be needed.' },
      { question: 'Does an EPDM containment bund count for Seveso retention volume?', answer: 'Yes, provided the system is sized for 110% of the largest vessel volume and the EPDM membrane is certified. Membriko technical documentation includes the data needed for the Seveso (MAJOR HAZARD) licensing process.' },
    ],
    relatedSlugs: ['wastewater-treatment', 'landfill-capping', 'biogas-digesters'],
  },
}
