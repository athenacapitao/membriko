import type { ApplicationData } from '../types'

export const greenhouses: ApplicationData = {
  id: 'greenhouses',
  categoryId: 'agricultural',
  pt: {
    meta: {
      title: 'Impermeabilização de Estufas e Instalações Agrícolas com EPDM | Membriko',
      description: 'Membrana EPDM para revestimento de canais de drenagem, fundações e reservatórios em estufas e instalações hortícolas. Inerte à cultura e resistente. Portugal.',
      keywords: ['impermeabilização estufa EPDM', 'estufa horticultura membrana', 'canal drenagem estufa EPDM', 'instalação agrícola impermeabilização', 'EPDM estufa Portugal'],
    },
    hero: {
      headline: 'Estufas e Instalações Hortícolas com EPDM Inerte às Culturas',
      subtitle: 'A membrana EPDM para estufas e instalações hortícolas garante impermeabilização durável de canais, fundações e reservatórios sem afetar as culturas.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '0', label: 'Impacto nas culturas' },
        { value: '400%', label: 'Elongação' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização em Estufas',
      description: 'As estufas modernas têm sistemas hidropónicos, de drenagem e de recolha de águas de rega muito sofisticados. A impermeabilização adequada é crítica para eficiência hídrica, qualidade da cultura e conformidade regulatória.',
      points: [
        'Sistemas hidropónicos requerem canais e reservatórios impermeáveis para evitar perda de nutrientes',
        'Drenagem de pesticidas e fertilizantes sem contenção adequada contamina solo e aquíferos',
        'Ambientes húmidos e quentes de estufas degradam membranas convencionais mais rapidamente',
        'Regulamentação de uso sustentável de produtos fitossanitários exige sistemas de recolha de efluentes',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Estufas e Instalações Hortícolas',
      description: 'O EPDM inerte a fertilizantes, pesticidas e fungicidas é a membrana de escolha para canais de drenagem, fundações e reservatórios em estufas. Resistente ao ambiente húmido e quente sem degradação.',
      points: [
        'EPDM inerte a fertilizantes hidropónicos (soluções com pH 5-7 e alta concentração mineral)',
        'Resistência ao ambiente de estufa: calor, humidade e produtos fitossanitários',
        'Sistema completo para canais de drenagem de esgoto hortícola com recolha e reutilização',
        'Compatível com automatização e sensores de monitorização de cultura',
      ],
    },
    benefits: [
      { icon: 'Leaf', title: 'Inerte às Culturas', description: 'O EPDM não liberta compostos na água de rega ou solução nutritiva — sem impacto na qualidade das culturas hortícolas, incluindo em produção biológica certificada.' },
      { icon: 'Droplets', title: 'Eficiência Hídrica', description: 'Zero perdas por infiltração em canais e reservatórios de rega — conformidade com requisitos de eficiência hídrica em zonas de stress hídrico português.' },
      { icon: 'Shield', title: 'Resistência a Produtos Fitossanitários', description: 'Resistência comprovada a herbicidas, fungicidas e pesticidas usados em horticultura — sem degradação da membrana em contacto com estes produtos.' },
      { icon: 'Thermometer', title: 'Ambiente de Estufa', description: 'Resistência a temperaturas de estufa de +50°C+ e humidade relativa de 90%+ sem degradação, ao contrário de PVC que fragiliza com UV e calor.' },
      { icon: 'Wrench', title: 'Instalação em Canais', description: 'Perfis pré-moldados EPDM para canais de drenagem de estufas — instalação rápida e precisa em todos os tipos e dimensões de canal.' },
      { icon: 'Euro', title: 'Conformidade Regulatória', description: 'Sistemas de contenção de drenagem hortícola são exigidos pela regulamentação europeia de uso sustentável de pesticidas. O EPDM é a solução técnica mais durável.' },
    ],
    specs: [
      { label: 'Espessura (canais)', value: '1,0 mm' },
      { label: 'Espessura (reservatórios/fundações)', value: '1,5 mm' },
      { label: 'Resistência a fertilizantes hidropónicos', value: 'Excelente — pH 4-8' },
      { label: 'Resistência a pesticidas', value: 'Boa — consultar ficha técnica para produtos específicos' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Humidade relativa de serviço', value: '0-100% — não afeta desempenho' },
      { label: 'Inércia a culturas hortícolas', value: 'Confirmada' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto da Estufa', description: 'Definição de zonas a impermeabilizar: canais de drenagem, fundações da estrutura, reservatórios de água e tanques de solução nutritiva.' },
      { step: 2, title: 'Canais de Drenagem', description: 'Instalação de perfis EPDM pré-moldados em canais de drenagem. Ligação estanque entre troços. Sistema de recolha para reutilização ou tratamento.' },
      { step: 3, title: 'Fundações', description: 'Aplicação de EPDM nas fundações da estrutura da estufa para impermeabilização contra humidade ascensional e contacto com solo húmido.' },
      { step: 4, title: 'Reservatórios', description: 'Instalação de EPDM em reservatórios de água de rega, tanques de fertilização e reservatórios de solução nutritiva hidropónica.' },
      { step: 5, title: 'Sistema de Recolha', description: 'Instalação de sistema de recolha e encaminhamento de drenagem para reutilização ou tratamento antes de descarga.' },
      { step: 6, title: 'Garantia', description: 'Inspeção de todos os pontos de conexão. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'Canais EPDM Pré-Moldados para Hidroponics',
        description: 'Perfis EPDM pré-moldados em U para canais de cultivo hidropónico. Instalação precisa com encaixes específicos para junções e conexões.',
        pros: ['Dimensões precisas para sistemas hidropónicos padronizados', 'Instalação rápida por encaixe', 'Reutilizável na renovação do sistema hidropónico'],
        cons: ['Dimensões padrão — personalização com custo adicional', 'Requer suporte estrutural para canais de grande comprimento'],
      },
      {
        title: 'Membrana EPDM para Canteiros de Substrato',
        description: 'Para estufas com cultivo em substrato (coco, perlite), EPDM 1,0 mm no fundo dos canteiros para contenção de drenagem e reutilização.',
        pros: ['Contenção total de drenagem de substrato', 'Facilita recolha para reutilização', 'Adequado para qualquer tipo de substrato'],
        cons: ['Instalação mais complexa em canteiros elevados', 'Requer pendente para ponto de recolha'],
      },
    ],
    comparison: [
      { feature: 'Inércia à solução nutritiva', epdm: 'Excelente', alternatives: [{ name: 'PVC', value: 'Boa mas plastificantes migram' }, { name: 'Polietileno (PE)', value: 'Boa' }] },
      { feature: 'Vida útil em ambiente de estufa', epdm: '50+ anos', alternatives: [{ name: 'PVC', value: '15-20 anos (fragiliza com UV)' }, { name: 'Polietileno (PE)', value: '20-25 anos' }] },
    ],
    climate: [
      { zone: 'Algarve e Alentejo (Horticultura Intensiva)', description: 'Maior zona de produção hortícola de Portugal com estufas intensivas. Calor extremo (+45°C nas estufas) e uso intensivo de pesticidas exigem membrana de alta resistência química e térmica.' },
      { zone: 'Oeste (Flori e Horticultura)', description: 'Região do Oeste com alta densidade de estufas de flores e horticultura. Ambiente húmido e uso frequente de fungicidas — o EPDM resiste melhor que alternativas.' },
      { zone: 'Ribatejo (Tomate e Pimento)', description: 'Produção intensiva de tomate e pimento com sistemas hidropónicos avançados. Canais e reservatórios EPDM garantem eficiência hídrica e conformidade ambiental.' },
    ],
    faqs: [
      { question: 'O EPDM é adequado para sistemas hidropónicos de produção biológica certificada?', answer: 'Sim. O EPDM é inerte e não liberta compostos na solução nutritiva. É compatível com as normas de produção biológica europeias (Regulamento CE 834/2007 e 889/2008) — consultar certificador específico para confirmação.' },
      { question: 'Como se conectam os canais EPDM a tubagens de recolha de drenagem?', answer: 'Através de mangas de conexão EPDM pré-vulcanizadas que se encaixam nas tubagens de recolha. A conexão é estanque e não requer colas ou vedantes adicionais.' },
    ],
    relatedSlugs: ['irrigation-canals', 'farm-reservoirs', 'aquaculture'],
  },
  en: {
    meta: {
      title: 'Greenhouse and Agricultural Installation Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for drainage channel lining, foundations and reservoirs in greenhouses and horticultural installations. Crop-inert and resistant. Portugal.',
      keywords: ['greenhouse waterproofing EPDM', 'horticultural greenhouse membrane', 'greenhouse drainage channel EPDM', 'agricultural installation waterproofing', 'EPDM greenhouse Portugal'],
    },
    hero: {
      headline: 'Greenhouses and Horticultural Installations with Crop-Inert EPDM',
      subtitle: 'EPDM membrane for greenhouses and horticultural installations guarantees durable waterproofing of channels, foundations and reservoirs without affecting crops.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '0', label: 'Crop impact' },
        { value: '400%', label: 'Elongation' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Greenhouse Waterproofing Challenge',
      description: 'Modern greenhouses have sophisticated hydroponic, drainage and irrigation water collection systems. Adequate waterproofing is critical for water efficiency, crop quality and regulatory compliance.',
      points: [
        'Hydroponic systems require waterproof channels and reservoirs to prevent nutrient loss',
        'Pesticide and fertiliser drainage without adequate containment contaminates soil and aquifers',
        'Hot, humid greenhouse environments degrade conventional membranes faster',
        'Sustainable use regulation for plant protection products requires effluent collection systems',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Greenhouses and Horticultural Installations',
      description: 'EPDM inert to fertilisers, pesticides and fungicides is the membrane of choice for drainage channels, foundations and reservoirs in greenhouses. Resistant to hot, humid environments without degradation.',
      points: [
        'EPDM inert to hydroponic fertilisers (solutions with pH 5-7 and high mineral concentration)',
        'Resistance to greenhouse environment: heat, humidity and plant protection products',
        'Complete system for horticultural waste drainage channels with collection and reuse',
        'Compatible with automation and crop monitoring sensors',
      ],
    },
    benefits: [
      { icon: 'Leaf', title: 'Crop-Inert', description: 'EPDM does not release compounds into irrigation water or nutrient solution — no impact on horticultural crop quality, including in certified organic production.' },
      { icon: 'Droplets', title: 'Water Efficiency', description: 'Zero infiltration losses in irrigation channels and reservoirs — compliance with water efficiency requirements in Portuguese water-stressed zones.' },
      { icon: 'Shield', title: 'Plant Protection Product Resistance', description: 'Proven resistance to herbicides, fungicides and pesticides used in horticulture — no membrane degradation on contact with these products.' },
      { icon: 'Thermometer', title: 'Greenhouse Environment', description: 'Resistance to greenhouse temperatures of +50°C+ and 90%+ relative humidity without degradation, unlike PVC which becomes brittle with UV and heat.' },
      { icon: 'Wrench', title: 'Channel Installation', description: 'Pre-moulded EPDM profiles for greenhouse drainage channels — fast and precise installation in all channel types and sizes.' },
      { icon: 'Euro', title: 'Regulatory Compliance', description: 'Horticultural drainage containment systems are required by European sustainable pesticide use regulation. EPDM is the most durable technical solution.' },
    ],
    specs: [
      { label: 'Thickness (channels)', value: '1.0 mm' },
      { label: 'Thickness (reservoirs/foundations)', value: '1.5 mm' },
      { label: 'Hydroponic fertiliser resistance', value: 'Excellent — pH 4-8' },
      { label: 'Pesticide resistance', value: 'Good — consult technical datasheet for specific products' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Service relative humidity', value: '0-100% — does not affect performance' },
      { label: 'Horticultural crop inertia', value: 'Confirmed' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Greenhouse Design', description: 'Definition of zones to waterproof: drainage channels, structure foundations, water reservoirs and nutrient solution tanks.' },
      { step: 2, title: 'Drainage Channels', description: 'Pre-moulded EPDM profile installation in drainage channels. Watertight connection between sections. Collection system for reuse or treatment.' },
      { step: 3, title: 'Foundations', description: 'EPDM application on greenhouse structure foundations for rising damp and wet soil contact waterproofing.' },
      { step: 4, title: 'Reservoirs', description: 'EPDM installation in irrigation water reservoirs, fertilisation tanks and hydroponic nutrient solution reservoirs.' },
      { step: 5, title: 'Collection System', description: 'Drainage collection and routing system installation for reuse or treatment before discharge.' },
      { step: 6, title: 'Warranty', description: 'All connection point inspection. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'Pre-Moulded EPDM Channels for Hydroponics',
        description: 'Pre-moulded U-shaped EPDM profiles for hydroponic growing channels. Precise installation with specific fittings for junctions and connections.',
        pros: ['Precise dimensions for standardised hydroponic systems', 'Fast snap-fit installation', 'Reusable on hydroponic system renewal'],
        cons: ['Standard dimensions — customisation at additional cost', 'Requires structural support for long channels'],
      },
      {
        title: 'EPDM Membrane for Substrate Beds',
        description: 'For substrate-grown greenhouses (coco, perlite), 1.0 mm EPDM on bed base for drainage containment and reuse.',
        pros: ['Total substrate drainage containment', 'Facilitates collection for reuse', 'Suitable for any substrate type'],
        cons: ['More complex installation in raised beds', 'Requires slope to collection point'],
      },
    ],
    comparison: [
      { feature: 'Nutrient solution inertia', epdm: 'Excellent', alternatives: [{ name: 'PVC', value: 'Good but plasticisers migrate' }, { name: 'Polyethylene (PE)', value: 'Good' }] },
      { feature: 'Service life in greenhouse environment', epdm: '50+ years', alternatives: [{ name: 'PVC', value: '15-20 years (brittle with UV)' }, { name: 'Polyethylene (PE)', value: '20-25 years' }] },
    ],
    climate: [
      { zone: 'Algarve and Alentejo (Intensive Horticulture)', description: 'Portugal\'s largest horticultural production zone with intensive greenhouses. Extreme heat (+45°C in greenhouses) and intensive pesticide use demand high chemical and thermal resistance membrane.' },
      { zone: 'Oeste (Flower and Horticulture)', description: 'Oeste region with high flower and horticulture greenhouse density. Humid environment and frequent fungicide use — EPDM resists better than alternatives.' },
      { zone: 'Ribatejo (Tomato and Pepper)', description: 'Intensive tomato and pepper production with advanced hydroponic systems. EPDM channels and reservoirs ensure water efficiency and environmental compliance.' },
    ],
    faqs: [
      { question: 'Is EPDM suitable for hydroponic systems in certified organic production?', answer: 'Yes. EPDM is inert and does not release compounds into nutrient solution. It is compatible with European organic production standards (EC Regulation 834/2007 and 889/2008) — consult specific certifier for confirmation.' },
      { question: 'How are EPDM channels connected to drainage collection pipes?', answer: 'Through pre-vulcanised EPDM connection sleeves that fit drainage collection pipes. The connection is watertight and requires no additional adhesives or sealants.' },
    ],
    relatedSlugs: ['irrigation-canals', 'farm-reservoirs', 'aquaculture'],
  },
}
