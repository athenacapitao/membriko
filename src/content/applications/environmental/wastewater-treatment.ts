import type { ApplicationData } from '../types'

export const wastewaterTreatment: ApplicationData = {
  id: 'wastewater-treatment',
  categoryId: 'environmental',
  pt: {
    meta: {
      title: 'Impermeabilização de Estações de Tratamento de Águas Residuais com EPDM | Membriko',
      description: 'Membrana EPDM para tanques, lagoas e estruturas de ETAR. Alta resistência química a efluentes domésticos e industriais. Portugal.',
      keywords: ['impermeabilização ETAR EPDM', 'tanque tratamento águas residuais', 'lagoa aeração EPDM', 'EPDM estação tratamento Portugal', 'impermeabilização efluentes'],
    },
    hero: {
      headline: 'Estruturas de ETAR Impermeabilizadas com EPDM de Alta Resistência Química',
      subtitle: 'A membrana EPDM para ETARs resiste a efluentes domésticos e industriais, biogás e compostos orgânicos — com vida útil compatível com a infraestrutura pública.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'pH 2-12', label: 'Resistência química' },
        { value: '100%', label: 'Contenção garantida' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Estruturas de ETAR',
      description: 'As estruturas de tratamento de águas residuais enfrentam condições extremamente agressivas: efluentes com pH variável, sulfureto de hidrogénio (H₂S), biogás, ácido sulfúrico bacteriológico na zona de gases e cargas cíclicas de enchimento e esvaziamento.',
      points: [
        'H₂S produzido em digestores anaeróbicos e lagoas converte-se em H₂SO₄ por bactérias — pH < 1 na zona de gases',
        'Ciclos de enchimento-esvaziamento criam variações de pressão e temperatura que fatigam membranas rígidas',
        'ETARs municipais são infraestrutura pública com horizonte de projeto de 50+ anos',
        'Infiltrações em tanques de ETAR contaminam solos e aquíferos com patogénicos e compostos tóxicos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para ETARs',
      description: 'O EPDM de alta resistência química é a membrana de referência para lagoas de estabilização, tanques de equalização e estruturas de ETAR. Resiste a H₂S, ácidos bacteriológicos e compostos orgânicos por décadas.',
      points: [
        'Formulação EPDM com resistência específica a H₂S e ácido sulfúrico bacteriológico',
        'Elasticidade de 400% para ciclos de carga/descarga de tanques de equalização',
        'Sistema completo para lagoas de estabilização de grandes dimensões (até 10 ha)',
        'Compatível com aeradores, misturadores e sistemas de monitorização',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a H₂S e Ácidos Bacteriológicos', description: 'Resistência certificada a sulfureto de hidrogénio e ácido sulfúrico bacteriológico (pH < 1 na zona de gases de digestores) — o ambiente mais agressivo em engenharia ambiental.' },
      { icon: 'Droplets', title: 'Contenção de Efluentes', description: 'Zero infiltrações de efluentes para solo e aquíferos — conformidade com Diretiva Europeia de Águas Residuais e legislação ambiental portuguesa.' },
      { icon: 'Layers', title: 'Grandes Lagoas de Estabilização', description: 'O EPDM em rolos de até 15 m de largura cobre lagoas de estabilização de dezenas de hectares com mínimo de emendas e máxima fiabilidade.' },
      { icon: 'Thermometer', title: 'Temperatura Variável', description: 'Digestores e lagoas de ETAR registam temperaturas de 15-55°C com variação sazonal. O EPDM mantém impermeabilidade e elasticidade em toda esta gama.' },
      { icon: 'Clock', title: 'Infraestrutura de Longa Duração', description: 'ETARs são infraestrutura pública com horizonte de 50 anos. O EPDM é compatível com este horizonte — eliminando necessidade de reabilitação da membrana durante a vida do projeto.' },
      { icon: 'Wrench', title: 'Instalação Eficiente', description: 'Rolos de grande largura e soldadura automática permitem cobrir lagoas de ETAR de grande dimensão em dias, minimizando perturbação das operações.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (tanques de pressão)' },
      { label: 'Resistência a H₂S', value: 'Boa — validado para concentrações de ETAR' },
      { label: 'Resistência a pH variável', value: 'pH 2-12' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Resistência a biogás (CH₄, CO₂)', value: 'Boa' },
      { label: 'Largura máxima de rolo', value: 'Até 15 m' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto de Impermeabilização', description: 'Coordenação com projetista da ETAR. Definição de zonas a impermeabilizar, sistema de ancoragem e compatibilidade com equipamentos.' },
      { step: 2, title: 'Preparação do Suporte', description: 'Preparação de fundo e taludes de terra ou betão. Geotêxtil de proteção em fundos de lagoa. Regularização de taludes.' },
      { step: 3, title: 'Instalação da Membrana', description: 'Colocação do EPDM em grandes painéis pré-vulcanizados em fábrica quando possível. Emendas em obra por vulcanização certificada.' },
      { step: 4, title: 'Ancoragem e Bordo', description: 'Ancoragem da membrana no bordo superior de lagoas por vala de ancoragem. Sistemas de ancoragem resistentes à flutuação por biogás em digestores cobertos.' },
      { step: 5, title: 'Penetrações e Equipamentos', description: 'Instalação de mangas de penetração para aeradores, misturadores, tubagens de entrada e saída e sistemas de monitorização.' },
      { step: 6, title: 'Certificação e Garantia', description: 'Teste de estanquidade documentado. Certificado de instalação para processo de licenciamento ambiental. Garantia de 20 anos.' },
    ],
    techniques: [
      {
        title: 'Sistema EPDM para Lagoas de Estabilização',
        description: 'Geotêxtil de proteção + EPDM 1,5 mm em lagoas de estabilização escavadas em terra. Sistema standard para lagoas de tratamento de águas residuais domésticas.',
        pros: ['Instalação eficiente em grandes superfícies', 'Sistema comprovado em ETARs municipais europeias', 'Mínimo de emendas com painéis de grande dimensão'],
        cons: ['Requer solo estável e regular nos taludes', 'Profundidade de lagoa limitada por pressão hidrostática (solução: EPDM 2,0 mm)'],
      },
      {
        title: 'EPDM em Digestores e Tanques de Betão',
        description: 'Para digestores anaeróbicos e tanques de betão, EPDM colado ao betão com sistema de contenção de biogás. Resistência a H₂S e ácidos bacteriológicos.',
        pros: ['Protege betão de degradação ácida bacteriológica', 'Sistema de contenção de biogás integrado', 'Solução para reabilitação de digestores existentes'],
        cons: ['Instalação mais complexa em espaços confinados', 'Requer betão saneado e regular'],
      },
    ],
    comparison: [
      { feature: 'Resistência a H₂S', epdm: 'Boa', alternatives: [{ name: 'Betão revestimento epóxi', value: 'Boa mas frágil a movimentos' }, { name: 'HDPE', value: 'Boa' }] },
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Betão revestimento epóxi', value: '10-15 anos' }, { name: 'HDPE', value: '25-35 anos' }] },
    ],
    climate: [
      { zone: 'Litoral (ETARs Municipais Grandes)', description: 'ETARs das grandes cidades costeiras (Lisboa, Porto, Setúbal) com capacidade de 100.000+ equivalentes-população. Sistemas de lagoas de grande dimensão requerem impermeabilização fiável e duradoura.' },
      { zone: 'Interior (ETARs de Aglomerados Pequenos)', description: 'Centenas de ETARs de pequenos aglomerados no interior com lagoas de estabilização. O EPDM é solução económica e duradoura para estas infraestruturas de menor dimensão.' },
      { zone: 'Alentejo (Tratamento Industrial)', description: 'ETARs industriais e agro-industriais do Alentejo (azeite, vinho, suiniculturas) com efluentes de alta carga. O EPDM resiste a efluentes de alta força iónica e pH variável.' },
    ],
    faqs: [
      { question: 'O EPDM resiste ao ácido sulfúrico bacteriológico nos digestores?', answer: 'O EPDM tem boa resistência a H₂S e razoável resistência ao ácido sulfúrico concentrado. Para digestores com concentrações muito elevadas de H₂S e zonas de gases com pH < 2, é recomendado consultar especificação técnica do produto EPDM específico e considerar revestimento adicional.' },
      { question: 'É possível impermeabilizar lagoas de ETAR em operação sem as esvaziar?', answer: 'Em geral, não é possível instalar EPDM com a lagoa em operação. No entanto, em ETARs com múltiplas lagoas em série, é possível isolar uma lagoa e tratar cada lagoa sequencialmente com perturbação mínima do processo de tratamento.' },
    ],
    relatedSlugs: ['biogas-digesters', 'chemical-containment', 'landfill-capping'],
  },
  en: {
    meta: {
      title: 'Wastewater Treatment Plant Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for WWTP tanks, lagoons and structures. High chemical resistance to domestic and industrial effluents. Portugal.',
      keywords: ['WWTP waterproofing EPDM', 'wastewater treatment tank', 'aeration lagoon EPDM', 'EPDM treatment plant Portugal', 'effluent waterproofing'],
    },
    hero: {
      headline: 'WWTP Structures Waterproofed with High-Chemical-Resistance EPDM',
      subtitle: 'EPDM membrane for WWTPs resists domestic and industrial effluents, biogas and organic compounds — with service life compatible with public infrastructure.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'pH 2-12', label: 'Chemical resistance' },
        { value: '100%', label: 'Guaranteed containment' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The WWTP Structure Challenge',
      description: 'Wastewater treatment structures face extremely aggressive conditions: variable pH effluents, hydrogen sulphide (H₂S), biogas, bacteriological sulphuric acid in the gas zone, and cyclic fill-empty loading.',
      points: [
        'H₂S produced in anaerobic digesters and lagoons converts to H₂SO₄ by bacteria — pH < 1 in gas zone',
        'Fill-empty cycles create pressure and temperature variations fatiguing rigid membranes',
        'Municipal WWTPs are public infrastructure with 50+ year project horizons',
        'WWTP tank infiltrations contaminate soils and aquifers with pathogens and toxic compounds',
      ],
    },
    solution: {
      title: 'The EPDM Solution for WWTPs',
      description: 'High-chemical-resistance EPDM is the reference membrane for stabilisation lagoons, equalisation tanks and WWTP structures. Resists H₂S, bacteriological acids and organic compounds for decades.',
      points: [
        'EPDM formulation with specific resistance to H₂S and bacteriological sulphuric acid',
        '400% elasticity for equalisation tank load/discharge cycles',
        'Complete system for large stabilisation lagoons (up to 10 ha)',
        'Compatible with aerators, mixers and monitoring systems',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'H₂S and Bacteriological Acid Resistance', description: 'Certified resistance to hydrogen sulphide and bacteriological sulphuric acid (pH < 1 in digester gas zone) — the most aggressive environment in environmental engineering.' },
      { icon: 'Droplets', title: 'Effluent Containment', description: 'Zero effluent infiltrations to soil and aquifers — compliance with European Wastewater Directive and Portuguese environmental legislation.' },
      { icon: 'Layers', title: 'Large Stabilisation Lagoons', description: 'EPDM in rolls up to 15 m wide covers stabilisation lagoons of tens of hectares with minimum seams and maximum reliability.' },
      { icon: 'Thermometer', title: 'Variable Temperature', description: 'WWTP digesters and lagoons record temperatures of 15-55°C with seasonal variation. EPDM maintains impermeability and elasticity across this range.' },
      { icon: 'Clock', title: 'Long-Life Infrastructure', description: 'WWTPs are public infrastructure with 50-year horizons. EPDM is compatible with this horizon — eliminating membrane rehabilitation needs during project life.' },
      { icon: 'Wrench', title: 'Efficient Installation', description: 'Wide rolls and automatic welding enable large WWTP lagoons to be covered in days, minimising operational disruption.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (pressure tanks)' },
      { label: 'H₂S resistance', value: 'Good — validated for WWTP concentrations' },
      { label: 'Variable pH resistance', value: 'pH 2-12' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Biogas resistance (CH₄, CO₂)', value: 'Good' },
      { label: 'Maximum roll width', value: 'Up to 15 m' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Waterproofing Design', description: 'Coordination with WWTP designer. Definition of zones to waterproof, anchoring system and equipment compatibility.' },
      { step: 2, title: 'Substrate Preparation', description: 'Earth or concrete base and slope preparation. Protective geotextile on lagoon bases. Slope levelling.' },
      { step: 3, title: 'Membrane Installation', description: 'EPDM placement in large factory-pre-vulcanised panels where possible. On-site seams by certified vulcanisation.' },
      { step: 4, title: 'Anchoring and Edge', description: 'Membrane anchoring at lagoon top edge by anchor trench. Anchoring systems resistant to biogas uplift in covered digesters.' },
      { step: 5, title: 'Penetrations and Equipment', description: 'Penetration sleeve installation for aerators, mixers, inlet/outlet pipes and monitoring systems.' },
      { step: 6, title: 'Certification and Warranty', description: 'Documented watertightness test. Installation certificate for environmental licensing process. 20-year warranty.' },
    ],
    techniques: [
      {
        title: 'EPDM System for Stabilisation Lagoons',
        description: 'Protective geotextile + 1.5 mm EPDM in earth-excavated stabilisation lagoons. Standard system for domestic wastewater treatment lagoons.',
        pros: ['Efficient installation over large surfaces', 'Proven system in European municipal WWTPs', 'Minimum seams with large-dimension panels'],
        cons: ['Requires stable, regular slope soil', 'Lagoon depth limited by hydrostatic pressure (solution: 2.0 mm EPDM)'],
      },
      {
        title: 'EPDM in Digesters and Concrete Tanks',
        description: 'For anaerobic digesters and concrete tanks, EPDM bonded to concrete with biogas containment system. H₂S and bacteriological acid resistance.',
        pros: ['Protects concrete from bacteriological acid degradation', 'Integrated biogas containment system', 'Solution for existing digester rehabilitation'],
        cons: ['More complex installation in confined spaces', 'Requires treated and regular concrete'],
      },
    ],
    comparison: [
      { feature: 'H₂S resistance', epdm: 'Good', alternatives: [{ name: 'Concrete epoxy lining', value: 'Good but brittle to movement' }, { name: 'HDPE', value: 'Good' }] },
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Concrete epoxy lining', value: '10-15 years' }, { name: 'HDPE', value: '25-35 years' }] },
    ],
    climate: [
      { zone: 'Coast (Large Municipal WWTPs)', description: 'Major coastal city WWTPs (Lisbon, Porto, Setúbal) with 100,000+ population equivalent capacity. Large lagoon systems require reliable, long-lasting waterproofing.' },
      { zone: 'Interior (Small Agglomeration WWTPs)', description: 'Hundreds of small agglomeration WWTPs in the interior with stabilisation lagoons. EPDM is an economical, long-lasting solution for these smaller-scale infrastructures.' },
      { zone: 'Alentejo (Industrial Treatment)', description: 'Alentejo industrial and agro-industrial WWTPs (olive oil, wine, pig farming) with high-load effluents. EPDM resists high ionic strength and variable pH effluents.' },
    ],
    faqs: [
      { question: 'Does EPDM resist bacteriological sulphuric acid in digesters?', answer: 'EPDM has good H₂S resistance and reasonable resistance to concentrated sulphuric acid. For digesters with very high H₂S concentrations and gas zones with pH < 2, consulting the specific EPDM product technical specification and considering additional coating is recommended.' },
      { question: 'Can WWTP lagoons be waterproofed while in operation without emptying?', answer: 'In general, EPDM cannot be installed with the lagoon in operation. However, in WWTPs with multiple series lagoons, it is possible to isolate one lagoon and treat each sequentially with minimal treatment process disruption.' },
    ],
    relatedSlugs: ['biogas-digesters', 'chemical-containment', 'landfill-capping'],
  },
}
