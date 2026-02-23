import type { ApplicationData } from '../types'

export const rainwaterHarvesting: ApplicationData = {
  id: 'rainwater-harvesting',
  categoryId: 'water',
  pt: {
    meta: {
      title: 'Recolha de Águas Pluviais com Membranas EPDM | Membriko',
      description:
        'Sistemas de recolha e armazenamento de águas pluviais com membrana EPDM. Cisternas e reservatórios impermeáveis para reutilização de água da chuva. Portugal.',
      keywords: [
        'recolha água pluvial EPDM',
        'cisterna água chuva membrana',
        'impermeabilização cisterna pluvial',
        'reutilização água chuva Portugal',
        'reservatório pluvial EPDM',
      ],
    },
    hero: {
      headline: 'Recolha de Águas Pluviais com Sistemas EPDM',
      subtitle:
        'Maximize a captação e armazenamento de água da chuva com cisternas e reservatórios impermeabilizados com EPDM — a solução de longa duração para autonomia hídrica.',
      stats: [
        { value: '600 L', label: 'Poupança anual /m² de cobertura' },
        { value: '50+', label: 'Anos de vida útil do sistema' },
        { value: '40-70%', label: 'Redução no consumo de água potável' },
        { value: '20 anos', label: 'Garantia do reservatório' },
      ],
    },
    problem: {
      title: 'O Desafio do Armazenamento de Água Pluvial',
      description:
        'Portugal enfrenta crescente escassez hídrica, especialmente no Sul. A captação de água da chuva é obrigatória em novos edifícios em muitos municípios. O desafio é armazenar esta água de forma segura, durável e sem contaminação.',
      points: [
        'Cisternas de betão sem revestimento contaminam água com calcário e bacterias',
        'Cisternas plásticas têm capacidade limitada e não são adequadas para volumes grandes',
        'Sistemas enterrados em PVC degradam em 20-30 anos com pressão do solo',
        'Perda de água por infiltração em cisternas mal impermeabilizadas desperdiça o recurso captado',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Captação de Água Pluvial',
      description:
        'O EPDM certificado para contacto com água cria cisternas e reservatórios pluviais absolutamente impermeáveis, de qualquer tamanho, que preservam a qualidade da água por décadas sem manutenção.',
      points: [
        'Cisterna de qualquer volume: de 5 m³ doméstica a 10.000 m³ municipal',
        'Certificação ACS/WRAS para água que pode ser usada para rega, lavagem e sistemas de descarga',
        'Resistência a pressão de solo e hidrostática em cisternas enterradas',
        'Superfície EPDM inibe crescimento de algas e biofilmes melhor que betão nu',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Armazenamento Puro e Seguro',
        description:
          'Água pluvial armazenada em cisterna EPDM mantém qualidade microbiológica e química muito superior à de cisterna de betão sem revestimento.',
      },
      {
        icon: 'Euro',
        title: 'ROI em 3-8 Anos',
        description:
          'Em Portugal, a água da rede tem custo crescente. Uma cisterna de 50 m³ em Lisboa poupar pode €500-1.000/ano em água para rega e lavagem. ROI total em 3-8 anos.',
      },
      {
        icon: 'Leaf',
        title: 'Sustentabilidade Certificável',
        description:
          'Sistemas EPDM de captação pluvial contribuem para LEED, BREEAM e certificação LiderA. Obrigatório em muitos novos edifícios pelo Regime Jurídico da Urbanização e Edificação.',
      },
      {
        icon: 'Shield',
        title: 'Durabilidade Superior',
        description:
          'Uma cisterna EPDM dura 50+ anos sem manutenção — ao contrário de cisternas plásticas que degradam em 20-30 anos ou betão que fissurea e deixa entrar solo.',
      },
      {
        icon: 'Building2',
        title: 'Escalável a Qualquer Dimensão',
        description:
          'O EPDM é adequado para sistemas desde simples cisternas domésticas de 5 m³ a grandes reservatórios municipais ou industriais de milhares de m³.',
      },
      {
        icon: 'Thermometer',
        title: 'Funcional em Cisternas Enterradas',
        description:
          'O EPDM resiste a pressão hidrostática e de solo em cisternas enterradas sem delaminação — condição impossível de cumprir por tintas epóxi ou revestimentos cimentícios.',
      },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (cisternas enterradas)' },
      { label: 'Certificação água não potável', value: 'EN 15797 / requisitos municipais PT' },
      { label: 'Certificação água potável (rega por aspersão)', value: 'ACS / WRAS disponível' },
      { label: 'Resistência à pressão do solo', value: 'Calculada por engenheiro' },
      { label: 'Temperatura da água', value: '0°C a 30°C' },
      { label: 'pH suportado', value: '5,0 a 9,0 (água pluvial típica)' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Dimensionamento do Sistema',
        description:
          'Cálculo da área de captação, volume de precipitação anual, necessidades de consumo e dimensão do reservatório. Projeto conforme Portaria 1350/2007 e regulamentos municipais.',
      },
      {
        step: 2,
        title: 'Construção da Cisterna',
        description:
          'Escavação e construção de cisterna em betão armado ou blocos. Cura do betão. Preparação de superfícies para receção da membrana.',
      },
      {
        step: 3,
        title: 'Instalação do EPDM',
        description:
          'Colocação e colagem da membrana EPDM em toda a superfície interior. Tratamento de cantos com raio mínimo de 50 mm. Subida das paredes até acima do nível máximo.',
      },
      {
        step: 4,
        title: 'Tubagens e Acessórios',
        description:
          'Instalação de flanges certificadas para: entrada de água da chuva, saída para uso, overflow de segurança, acesso de limpeza e sensor de nível.',
      },
      {
        step: 5,
        title: 'Cobertura e Proteção',
        description:
          'Instalação de cobertura da cisterna (laje de betão ou tampa) que protege a água de UV, algas, insetos e contaminação. O EPDM é certificado para água em espaço escuro.',
      },
      {
        step: 6,
        title: 'Teste e Legalização',
        description:
          'Teste de estanquidade e qualidade da água. Documentação para legalização junto da Câmara Municipal. Emissão de garantia de 20 anos.',
      },
    ],
    techniques: [
      {
        title: 'Cisterna Enterrada com EPDM',
        description:
          'A cisterna mais comum: escavada no solo, em betão armado, com EPDM como liner interior. Invisível, não ocupa espaço superficial, capacidade ilimitada.',
        pros: [
          'Capacidade ilimitada de armazenamento',
          'Não ocupa espaço superficial',
          'Temperatura da água mais estável (isolamento pelo solo)',
        ],
        cons: [
          'Custo de escavação e betão',
          'Acesso para inspeção/manutenção requer escotilha',
          'Requer estudo de lençol freático',
        ],
      },
      {
        title: 'Reservatório Elevado com EPDM',
        description:
          'Para distribuição por gravidade, reservatório elevado em estrutura de aço ou betão com EPDM interior. Elimina necessidade de bomba para distribuição.',
        pros: [
          'Distribuição por gravidade — sem custos de bomba',
          'Acesso fácil para inspeção',
          'Instalação mais rápida que cisterna enterrada',
        ],
        cons: [
          'Volume limitado pela capacidade da estrutura de suporte',
          'Exposto a variações de temperatura',
          'Impacto visual se não integrado arquitetonicamente',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Custo de ciclo de vida (50 anos)',
        epdm: 'Baixo — sem substituição',
        alternatives: [
          { name: 'Cisterna plástica PE', value: 'Alto — 2 substituições' },
          { name: 'Betão com revestimento epóxi', value: 'Médio — repintura periódica' },
          { name: 'GRP/fibra de vidro', value: 'Médio-baixo — 1 substituição' },
        ],
      },
      {
        feature: 'Volume máximo prático',
        epdm: 'Ilimitado',
        alternatives: [
          { name: 'Cisterna plástica PE', value: 'Até 10.000 L típico' },
          { name: 'Betão com revestimento epóxi', value: 'Qualquer tamanho' },
          { name: 'GRP/fibra de vidro', value: 'Até 500.000 L' },
        ],
      },
      {
        feature: 'Qualidade da água',
        epdm: 'Excelente — sem migração',
        alternatives: [
          { name: 'Cisterna plástica PE', value: 'Boa — com certificação' },
          { name: 'Betão com revestimento epóxi', value: 'Variável — depende do epóxi' },
          { name: 'GRP/fibra de vidro', value: 'Boa — com gel coat' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Norte (Alta Precipitação)',
        description:
          'Com 1.200-3.000 mm de precipitação anual no norte, a captação de água pluvial tem enorme potencial. Cisternas EPDM de grande volume permitem autonomia quase total para rega e usos não potáveis.',
      },
      {
        zone: 'Centro (Precipitação Moderada)',
        description:
          'Precipitação de 600-1.200 mm concentrada no inverno. Cisternas de grande volume com EPDM permitem armazenar a precipitação de inverno para uso no verão seco.',
      },
      {
        zone: 'Sul (Escassez Hídrica)',
        description:
          'Com apenas 400-600 mm/ano no Alentejo e Algarve, cada litro captado é precioso. O zero perdas do EPDM é decisivo nestas zonas onde a água é o maior custo agrícola.',
      },
    ],
    faqs: [
      {
        question: 'A água pluvial armazenada em cisterna EPDM pode ser usada para beber?',
        answer:
          'Não sem tratamento adicional. A água pluvial pode ser usada diretamente para rega, lavagem de veículos e autoclismo. Para consumo humano, requer tratamento (filtragem + desinfeção UV) e cisterna com EPDM certificado ACS.',
      },
      {
        question: 'Qual o tamanho de cisterna recomendado para uma habitação?',
        answer:
          'Para uso doméstico (rega, autoclismo, lavagem), o tamanho típico é 5.000-15.000 L dependendo do consumo e área de captação. Em Portugal, uma cisterna de 10.000 L capta cerca de 60-80 m² de cobertura adequadamente.',
      },
      {
        question: 'A cisterna EPDM necessita de licença de construção?',
        answer:
          'Cisternas até 1,5 m de profundidade e volume inferior a 50 m³ geralmente não requerem licença, apenas comunicação prévia à câmara. Cisternas maiores requerem projeto de engenharia e licença. Consulte os regulamentos do seu município.',
      },
    ],
    relatedSlugs: ['water-reservoirs', 'green-roofs', 'stormwater-management'],
  },
  en: {
    meta: {
      title: 'Rainwater Harvesting with EPDM Membranes | Membriko',
      description:
        'Rainwater collection and storage systems with EPDM membrane. Waterproof cisterns and reservoirs for rainwater reuse. Portugal.',
      keywords: [
        'rainwater harvesting EPDM',
        'rainwater cistern membrane',
        'rainwater storage waterproofing',
        'rainwater reuse Portugal',
        'EPDM rainwater reservoir',
      ],
    },
    hero: {
      headline: 'Rainwater Harvesting with EPDM Systems',
      subtitle:
        'Maximise rainwater capture and storage with EPDM-waterproofed cisterns and reservoirs — the long-lasting solution for water autonomy.',
      stats: [
        { value: '600 L', label: 'Annual savings per m² of roof' },
        { value: '50+', label: 'Years system service life' },
        { value: '40-70%', label: 'Reduction in potable water use' },
        { value: '20 years', label: 'Reservoir warranty' },
      ],
    },
    problem: {
      title: 'The Rainwater Storage Challenge',
      description:
        'Portugal faces increasing water scarcity, especially in the South. Rainwater capture is mandatory in new buildings in many municipalities. The challenge is storing this water safely, durably and without contamination.',
      points: [
        'Unlined concrete cisterns contaminate water with limestone and bacteria',
        'Plastic cisterns have limited capacity and are not suitable for large volumes',
        'Buried PVC systems degrade in 20-30 years from soil pressure',
        'Water loss through infiltration in poorly waterproofed cisterns wastes the captured resource',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Rainwater Harvesting',
      description:
        'Water-contact certified EPDM creates absolutely waterproof rainwater cisterns and reservoirs of any size, preserving water quality for decades without maintenance.',
      points: [
        'Cistern of any volume: from 5 m³ domestic to 10,000 m³ municipal',
        'ACS/WRAS certification for water usable for irrigation, washing and flush systems',
        'Resistance to soil and hydrostatic pressure in buried cisterns',
        'EPDM surface inhibits algae and biofilm growth better than bare concrete',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Pure and Safe Storage',
        description:
          'Rainwater stored in an EPDM cistern maintains microbiological and chemical quality much superior to an unlined concrete cistern.',
      },
      {
        icon: 'Euro',
        title: 'ROI in 3-8 Years',
        description:
          'In Portugal, mains water costs are increasing. A 50 m³ cistern in Lisbon can save €500-1,000/year in water for irrigation and washing. Full ROI in 3-8 years.',
      },
      {
        icon: 'Leaf',
        title: 'Certifiable Sustainability',
        description:
          'EPDM rainwater harvesting systems contribute to LEED, BREEAM and LiderA certification. Mandatory in many new buildings under the Legal Regime for Urbanisation and Building.',
      },
      {
        icon: 'Shield',
        title: 'Superior Durability',
        description:
          'An EPDM cistern lasts 50+ years without maintenance — unlike plastic cisterns that degrade in 20-30 years or concrete that cracks and allows soil ingress.',
      },
      {
        icon: 'Building2',
        title: 'Scalable to Any Size',
        description:
          'EPDM is suitable for systems from simple 5 m³ domestic cisterns to large municipal or industrial reservoirs of thousands of m³.',
      },
      {
        icon: 'Thermometer',
        title: 'Functional in Buried Cisterns',
        description:
          'EPDM resists hydrostatic and soil pressure in buried cisterns without delamination — a condition impossible to meet with epoxy paints or cementitious coatings.',
      },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (buried cisterns)' },
      { label: 'Non-potable water certification', value: 'EN 15797 / Portuguese municipal requirements' },
      { label: 'Potable water certification (sprinkler)', value: 'ACS / WRAS available' },
      { label: 'Soil pressure resistance', value: 'Calculated by engineer' },
      { label: 'Water temperature', value: '0°C to 30°C' },
      { label: 'Supported pH', value: '5.0 to 9.0 (typical rainwater)' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'System Sizing',
        description:
          'Calculation of catchment area, annual precipitation volume, consumption needs and reservoir size. Design per Portaria 1350/2007 and municipal regulations.',
      },
      {
        step: 2,
        title: 'Cistern Construction',
        description:
          'Excavation and construction of reinforced concrete or block cistern. Concrete curing. Surface preparation for membrane reception.',
      },
      {
        step: 3,
        title: 'EPDM Installation',
        description:
          'Placement and bonding of EPDM membrane on all interior surfaces. Corner treatment with minimum 50 mm radius. Wall upstand above maximum level.',
      },
      {
        step: 4,
        title: 'Pipes and Accessories',
        description:
          'Installation of certified flanges for: rainwater inlet, use outlet, safety overflow, cleaning access and level sensor.',
      },
      {
        step: 5,
        title: 'Cover and Protection',
        description:
          'Installation of cistern cover (concrete slab or lid) protecting water from UV, algae, insects and contamination. EPDM is certified for water in dark enclosed spaces.',
      },
      {
        step: 6,
        title: 'Testing and Legalisation',
        description:
          'Watertightness and water quality testing. Documentation for legalisation with the Câmara Municipal. Issue of 20-year warranty.',
      },
    ],
    techniques: [
      {
        title: 'Buried Cistern with EPDM',
        description:
          'The most common cistern: buried in the ground, in reinforced concrete, with EPDM as interior liner. Invisible, takes no surface space, unlimited capacity.',
        pros: [
          'Unlimited storage capacity',
          'No surface space occupied',
          'More stable water temperature (ground insulation)',
        ],
        cons: [
          'Excavation and concrete cost',
          'Inspection/maintenance access requires hatch',
          'Requires groundwater level study',
        ],
      },
      {
        title: 'Elevated Reservoir with EPDM',
        description:
          'For gravity distribution, elevated reservoir in steel or concrete structure with interior EPDM. Eliminates pump requirement for distribution.',
        pros: [
          'Gravity distribution — no pump costs',
          'Easy inspection access',
          'Faster installation than buried cistern',
        ],
        cons: [
          'Volume limited by supporting structure capacity',
          'Exposed to temperature variations',
          'Visual impact if not architecturally integrated',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Life-cycle cost (50 years)',
        epdm: 'Low — no replacement',
        alternatives: [
          { name: 'PE plastic cistern', value: 'High — 2 replacements' },
          { name: 'Concrete with epoxy coating', value: 'Medium — periodic repainting' },
          { name: 'GRP/fibreglass', value: 'Medium-low — 1 replacement' },
        ],
      },
      {
        feature: 'Maximum practical volume',
        epdm: 'Unlimited',
        alternatives: [
          { name: 'PE plastic cistern', value: 'Up to 10,000 L typical' },
          { name: 'Concrete with epoxy coating', value: 'Any size' },
          { name: 'GRP/fibreglass', value: 'Up to 500,000 L' },
        ],
      },
      {
        feature: 'Water quality',
        epdm: 'Excellent — no migration',
        alternatives: [
          { name: 'PE plastic cistern', value: 'Good — with certification' },
          { name: 'Concrete with epoxy coating', value: 'Variable — depends on epoxy' },
          { name: 'GRP/fibreglass', value: 'Good — with gel coat' },
        ],
      },
    ],
    climate: [
      {
        zone: 'North (High Precipitation)',
        description:
          'With 1,200-3,000 mm annual precipitation in the north, rainwater harvesting has enormous potential. Large-volume EPDM cisterns allow near-total autonomy for irrigation and non-potable uses.',
      },
      {
        zone: 'Centre (Moderate Precipitation)',
        description:
          'Precipitation of 600-1,200 mm concentrated in winter. Large-volume EPDM cisterns allow storage of winter precipitation for use in the dry summer.',
      },
      {
        zone: 'South (Water Scarcity)',
        description:
          'With only 400-600 mm/year in Alentejo and Algarve, every captured litre is precious. Zero EPDM losses are decisive in these zones where water is the largest agricultural cost.',
      },
    ],
    faqs: [
      {
        question: 'Can rainwater stored in an EPDM cistern be used for drinking?',
        answer:
          'Not without additional treatment. Rainwater can be used directly for irrigation, vehicle washing and toilet flushing. For human consumption, treatment is required (filtration + UV disinfection) and a cistern with ACS-certified EPDM.',
      },
      {
        question: 'What cistern size is recommended for a home?',
        answer:
          'For domestic use (irrigation, toilet, washing), the typical size is 5,000-15,000 L depending on consumption and catchment area. In Portugal, a 10,000 L cistern adequately captures from about 60-80 m² of roof.',
      },
      {
        question: 'Does an EPDM cistern need a building permit?',
        answer:
          'Cisterns up to 1.5 m depth and less than 50 m³ volume generally require only prior notification to the council, not a permit. Larger cisterns require an engineering design and licence. Check your municipal regulations.',
      },
    ],
    relatedSlugs: ['water-reservoirs', 'green-roofs', 'stormwater-management'],
  },
}
