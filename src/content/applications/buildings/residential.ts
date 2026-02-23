import type { ApplicationData } from '../types'

export const residential: ApplicationData = {
  id: 'residential',
  categoryId: 'buildings',
  pt: {
    meta: {
      title: 'Impermeabilização Residencial com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização de moradias e apartamentos. Coberturas planas, terraços, varandas e caves com vida útil de 50+ anos. Portugal.',
      keywords: ['impermeabilização moradia EPDM', 'apartamento impermeabilização membrana', 'casa EPDM cobertura', 'habitação impermeabilização Portugal', 'EPDM residencial'],
    },
    hero: {
      headline: 'Casas e Apartamentos Impermeabilizados com EPDM para Toda a Vida',
      subtitle: 'O EPDM para habitação protege coberturas, terraços, varandas e caves com uma única instalação para 50+ anos — sem manutenção e com garantia de 20 anos.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '0', label: 'Manutenção necessária' },
        { value: '400%', label: 'Elongação' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'Os Problemas de Impermeabilização em Habitação',
      description: 'As infiltrações são um dos problemas mais comuns e dispendiosos em habitação. Em Portugal, as coberturas betuminosas de moradias têm vida útil de 15-20 anos — o que significa que uma casa nova já precisará de substituição durante a vida do proprietário.',
      points: [
        'Tela betuminosa de cobertura de moradia substitui-se a 15-20 anos — custo de €5.000 a €15.000',
        'Varandas de apartamentos são origem comum de infiltrações para o andar abaixo — conflitos de condomínio',
        'Caves sem impermeabilização adequada têm humidade permanente e inservibilidade do espaço',
        'Infiltrações descobertas tarde causam danos estruturais que multiplicam os custos de reparação',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Habitação',
      description: 'O EPDM para habitação oferece uma solução definitiva para coberturas, terraços e caves. A vida útil de 50+ anos significa que a impermeabilização dura mais do que o ciclo de vida típico de uma habitação.',
      points: [
        'Cobertura plana de moradia com EPDM — instalação única para toda a vida da casa',
        'Varanda de apartamento com EPDM — elimina conflitos de condomínio por infiltrações',
        'Cave com EPDM exterior nas paredes e laje de fundo — espaço seco e habitável',
        'Garantia de 20 anos com plano de inspeção incluído',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Proteção Definitiva', description: 'Uma única instalação de EPDM protege a habitação por 50+ anos — durante toda a vida útil prevista do edifício — sem necessidade de substituição.' },
      { icon: 'Euro', title: 'Investimento Inteligente', description: 'O custo inicial superior ao betume é recuperado ao evitar 2-3 substituições durante 50 anos. O custo total de posse do EPDM é significativamente inferior.' },
      { icon: 'Clock', title: 'Zero Manutenção', description: 'O EPDM em coberturas e terraços residenciais não requer manutenção preventiva — apenas inspeção visual a cada 5 anos recomendada.' },
      { icon: 'Droplets', title: 'Caves Habitáveis', description: 'O EPDM aplicado exteriormente nas paredes e laje de cave cria uma cave completamente seca, transformando-a em espaço habitável de qualidade.' },
      { icon: 'Thermometer', title: 'Conforto Térmico', description: 'A cobertura EPDM não irradia calor para o interior como betume escuro — temperatura de superfície mais baixa melhora conforto nos andares superiores.' },
      { icon: 'Leaf', title: 'Cobertura Verde em Moradia', description: 'Para moradias com cobertura plana, o EPDM FLL permite criar jardim, terraço ajardinado ou horta urbana sobre a cobertura — utilizando espaço não aproveitado.' },
    ],
    specs: [
      { label: 'Espessura (cobertura)', value: '1,5 mm' },
      { label: 'Espessura (cave / varanda)', value: '1,5 mm' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência UV (exposto)', value: 'Excelente — sem proteção necessária' },
      { label: 'Resistência ao gelo/degelo', value: 'Excelente' },
      { label: 'Certificação cobertura verde', value: 'FLL (versão 2,0 mm)' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Diagnóstico e Projeto', description: 'Inspeção da habitação. Identificação das zonas a impermeabilizar. Projeto de impermeabilização coordenado com obra de renovação se aplicável.' },
      { step: 2, title: 'Cobertura', description: 'Preparação da laje ou estrutura de cobertura. Instalação de isolamento térmico. Colocação do EPDM com tratamento de rufos, caleiras e pontos singulares.' },
      { step: 3, title: 'Varandas e Terraços', description: 'Preparação das lajes de varanda. Instalação do EPDM com subida em paredes. Tratamento de drenos. Revestimento final.' },
      { step: 4, title: 'Cave e Fundações', description: 'Aplicação do EPDM nas paredes exteriores e laje de fundo da cave. Sistema de drenagem perimetral para alívio de pressão hidrostática.' },
      { step: 5, title: 'Inspeção', description: 'Verificação de todos os pontos singulares e emendas. Teste de estanquidade antes de cobrir a membrana.' },
      { step: 6, title: 'Garantia', description: 'Emissão de garantia de 20 anos por zona impermeabilizada. Plano de inspeções quinquenais recomendado.' },
    ],
    techniques: [
      {
        title: 'Cobertura Plana de Moradia com EPDM',
        description: 'Para moradias com cobertura plana ou inclinação suave. EPDM aderente ou mecanicamente fixado sobre isolamento PIR. Sistema mais durável do mercado para habitação.',
        pros: ['Vida útil superior a cobertura de telha (50+ vs 30-40 anos para telha boa)', 'Possibilidade de terraço ou jardim sobre a cobertura', 'Custo total de posse inferior ao betume com substituições'],
        cons: ['Estética diferente de cobertura inclinada (pode requerer autorização municipal)', 'Custo inicial superior ao betume'],
      },
      {
        title: 'Reabilitação de Cave com EPDM',
        description: 'Para caves com humidade crónica. Escavação perimetral, aplicação de EPDM nas paredes exteriores + dreno de fundo + aterro. Solução definitiva para cave seca.',
        pros: ['Cave passa de espaço húmido inservível a área habitável', 'Elimina custo de humidade crónica (tratamentos, manutenção)', 'Aumenta área útil da habitação'],
        cons: ['Requer escavação perimetral — obra exterior significativa', 'Custo mais elevado que soluções interiores (mas mais eficaz)'],
      },
    ],
    comparison: [
      { feature: 'Vida útil (cobertura)', epdm: '50+ anos', alternatives: [{ name: 'Telha cerâmica', value: '30-40 anos (mas com manutenção)' }, { name: 'Tela betuminosa', value: '15-20 anos' }] },
      { feature: 'Manutenção', epdm: 'Nenhuma', alternatives: [{ name: 'Telha cerâmica', value: 'Limpeza + substituição pontual' }, { name: 'Tela betuminosa', value: 'Substituição a 15-20 anos' }] },
    ],
    climate: [
      { zone: 'Norte Atlântico (Humidade e Chuva)', description: 'Precipitação de 1500-2000 mm anuais no norte exige coberturas com impermeabilidade garantida. O EPDM sem manutenção é a solução ideal para habitação no noroeste português.' },
      { zone: 'Interior (Geadas e Calor Intenso)', description: 'Moradias no interior com invernos frios e verões quentes — EPDM resiste a ciclos gelo-degelo e a temperaturas de superfície de 120°C sem degradação.' },
      { zone: 'Sul e Algarve (Turismo e Segunda Habitação)', description: 'Habitação de uso não permanente no Algarve e Alentejo beneficia especialmente do EPDM — impermeabilização que funciona mesmo sem manutenção durante períodos de não ocupação.' },
    ],
    faqs: [
      { question: 'Vale a pena escolher EPDM em vez de betume para a cobertura da minha moradia?', answer: 'Depende do horizonte temporal. Para quem planeia ficar na moradia por 20+ anos, o EPDM tem custo total de posse inferior (sem substituições). Para quem planeia vender a curto prazo, a diferença de custo inicial pode não ser recuperada.' },
      { question: 'Posso criar um jardim ou terraço na cobertura plana da minha moradia com EPDM?', answer: 'Sim. Com EPDM 2,0 mm FLL e o sistema adequado de drenagem e substrato, é possível criar jardim, horta urbana ou terraço com vegetação sobre a cobertura da sua moradia.' },
      { question: 'O EPDM na cave da minha moradia vai resolver a humidade crónica?', answer: 'Sim, se aplicado exteriormente com o sistema correto (EPDM + dreno de fundo + aterro). Soluções interiores de hidroizolação funcionam apenas sob determinadas condições — o EPDM exterior é a solução mais eficaz e definitiva.' },
    ],
    relatedSlugs: ['flat-roofs', 'basements', 'balconies'],
  },
  en: {
    meta: {
      title: 'Residential Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing houses and apartments. Flat roofs, terraces, balconies and basements with 50+ year service life. Portugal.',
      keywords: ['house waterproofing EPDM', 'apartment waterproofing membrane', 'home EPDM roof', 'residential waterproofing Portugal', 'EPDM residential'],
    },
    hero: {
      headline: 'Houses and Apartments Waterproofed with EPDM for Life',
      subtitle: 'EPDM for housing protects roofs, terraces, balconies and basements with a single installation for 50+ years — maintenance-free with 20-year guarantee.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '0', label: 'Maintenance required' },
        { value: '400%', label: 'Elongation' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'Waterproofing Problems in Residential Buildings',
      description: 'Infiltrations are one of the most common and costly problems in housing. In Portugal, bituminous house roofs have a 15-20 year service life — meaning a new home will already need replacement during the owner\'s lifetime.',
      points: [
        'Bituminous house roof membrane replaces at 15-20 years — €5,000 to €15,000 cost',
        'Apartment balconies commonly cause infiltrations to the floor below — residents\' disputes',
        'Basements without adequate waterproofing have permanent moisture and unusable space',
        'Late-discovered infiltrations cause structural damage multiplying repair costs',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Residential',
      description: 'EPDM for housing offers a definitive solution for roofs, terraces and basements. The 50+ year service life means the waterproofing outlasts the typical residential lifecycle.',
      points: [
        'House flat roof with EPDM — single installation for the entire home life',
        'Apartment balcony with EPDM — eliminates residents\' infiltration disputes',
        'Basement with exterior EPDM on walls and base slab — dry, habitable space',
        '20-year guarantee with included inspection plan',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Definitive Protection', description: 'A single EPDM installation protects housing for 50+ years — throughout the building\'s expected service life — without replacement.' },
      { icon: 'Euro', title: 'Smart Investment', description: 'Higher initial cost vs bitumen is recovered by avoiding 2-3 replacements over 50 years. Total EPDM cost of ownership is significantly lower.' },
      { icon: 'Clock', title: 'Zero Maintenance', description: 'EPDM on residential roofs and terraces requires no preventive maintenance — only visual inspection every 5 years recommended.' },
      { icon: 'Droplets', title: 'Habitable Basements', description: 'EPDM applied externally on basement walls and base slab creates a completely dry basement, transforming it into quality habitable space.' },
      { icon: 'Thermometer', title: 'Thermal Comfort', description: 'EPDM roof does not radiate heat into the interior like dark bitumen — lower surface temperature improves comfort on upper floors.' },
      { icon: 'Leaf', title: 'Green Roof on House', description: 'For houses with flat roofs, FLL EPDM allows creating a garden, landscaped terrace or urban allotment on the roof — using unused space.' },
    ],
    specs: [
      { label: 'Thickness (roof)', value: '1.5 mm' },
      { label: 'Thickness (basement / balcony)', value: '1.5 mm' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'UV resistance (exposed)', value: 'Excellent — no protection needed' },
      { label: 'Freeze-thaw resistance', value: 'Excellent' },
      { label: 'Green roof certification', value: 'FLL (2.0 mm version)' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Diagnosis and Design', description: 'Home inspection. Zones to waterproof identification. Waterproofing design coordinated with renovation works if applicable.' },
      { step: 2, title: 'Roof', description: 'Slab or roof structure preparation. Thermal insulation installation. EPDM placement with flashings, gutters and singular point treatment.' },
      { step: 3, title: 'Balconies and Terraces', description: 'Balcony slab preparation. EPDM installation with wall upstands. Drain treatment. Final surfacing.' },
      { step: 4, title: 'Basement and Foundations', description: 'EPDM application on exterior basement walls and base slab. Perimeter drainage system for hydrostatic pressure relief.' },
      { step: 5, title: 'Inspection', description: 'All singular points and seam verification. Watertightness test before covering membrane.' },
      { step: 6, title: 'Warranty', description: 'Issue of 20-year warranty per waterproofed zone. Quinquennial inspection plan recommended.' },
    ],
    techniques: [
      {
        title: 'House Flat Roof with EPDM',
        description: 'For houses with flat or gently sloped roofs. Bonded or mechanically fixed EPDM over PIR insulation. Most durable market system for residential.',
        pros: ['Longer service life than pitched roof (50+ vs 30-40 years for good tiles)', 'Terrace or garden over roof possibility', 'Lower total cost of ownership vs bitumen with replacements'],
        cons: ['Different aesthetic from pitched roof (may require planning permission)', 'Higher initial cost vs bitumen'],
      },
      {
        title: 'Basement Rehabilitation with EPDM',
        description: 'For basements with chronic moisture. Perimeter excavation, EPDM application on exterior walls + base drain + backfill. Definitive dry basement solution.',
        pros: ['Basement goes from unusable damp space to habitable area', 'Eliminates chronic moisture cost (treatments, maintenance)', 'Increases home usable area'],
        cons: ['Requires perimeter excavation — significant exterior works', 'Higher cost than interior solutions (but more effective)'],
      },
    ],
    comparison: [
      { feature: 'Service life (roof)', epdm: '50+ years', alternatives: [{ name: 'Ceramic tiles', value: '30-40 years (with maintenance)' }, { name: 'Bituminous sheet', value: '15-20 years' }] },
      { feature: 'Maintenance', epdm: 'None', alternatives: [{ name: 'Ceramic tiles', value: 'Cleaning + spot replacement' }, { name: 'Bituminous sheet', value: 'Replacement at 15-20 years' }] },
    ],
    climate: [
      { zone: 'Atlantic North (Humidity and Rain)', description: '1500-2000 mm annual rainfall in the north demands roofs with guaranteed impermeability. Maintenance-free EPDM is the ideal solution for housing in northwest Portugal.' },
      { zone: 'Interior (Frost and Intense Heat)', description: 'Houses in the interior with cold winters and hot summers — EPDM resists freeze-thaw cycles and surface temperatures of 120°C without degradation.' },
      { zone: 'South and Algarve (Tourism and Second Homes)', description: 'Non-permanent use housing in Algarve and Alentejo especially benefits from EPDM — waterproofing that works even without maintenance during periods of non-occupancy.' },
    ],
    faqs: [
      { question: 'Is it worth choosing EPDM instead of bitumen for my house roof?', answer: 'It depends on your time horizon. For those planning to stay in the house for 20+ years, EPDM has lower total cost of ownership (no replacements). For those planning to sell short-term, the initial cost difference may not be recovered.' },
      { question: 'Can I create a garden or terrace on my house flat roof with EPDM?', answer: 'Yes. With FLL 2.0 mm EPDM and the appropriate drainage and substrate system, it is possible to create a garden, urban allotment or landscaped terrace on your house roof.' },
      { question: 'Will EPDM in my house basement solve chronic moisture?', answer: 'Yes, if applied externally with the correct system (EPDM + base drain + backfill). Interior waterproofing solutions work only under certain conditions — exterior EPDM is the most effective and definitive solution.' },
    ],
    relatedSlugs: ['flat-roofs', 'basements', 'balconies'],
  },
}
