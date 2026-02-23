import type { ApplicationData } from '../types'

export const farmReservoirs: ApplicationData = {
  id: 'farm-reservoirs',
  categoryId: 'agricultural',
  pt: {
    meta: {
      title: 'Impermeabilização de Reservatórios Agrícolas com EPDM | Membriko',
      description: 'Membrana EPDM para charcas e reservatórios de rega agrícola. Inerte a fertilizantes, resistente a UV e adequado para contacto com água para rega. Portugal.',
      keywords: ['impermeabilização reservatório agrícola EPDM', 'charca rega EPDM', 'lago retenção agrícola membrana', 'reservatório água rega Portugal', 'EPDM charca fazenda'],
    },
    hero: {
      headline: 'Reservatórios Agrícolas Estanques com EPDM de 50+ Anos',
      subtitle: 'A membrana EPDM para charcas e reservatórios de rega garante armazenamento de água eficiente sem perdas por infiltração, por toda a vida da exploração agrícola.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '0%', label: 'Perda por infiltração' },
        { value: '100%', label: 'Impermeabilidade' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Reservatórios de Rega Agrícola',
      description: 'As explorações agrícolas em Portugal dependem crescentemente de reservatórios próprios para armazenar água de chuva e de furo para rega. Sem impermeabilização adequada, perde-se entre 20-50% do volume armazenado por infiltração no solo.',
      points: [
        'Perda de 20-50% da água armazenada por infiltração em reservatórios sem membrana',
        'Solo argiloso que parece impermeável seca e fissura nos verões quentes criando infiltrações',
        'Água de rega contaminada por solo sem proteção pode transportar patogénicos para culturas',
        'Reparação de reservatórios sem membrana em solo instável é cara e de curta duração',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Reservatórios Agrícolas',
      description: 'O EPDM de 1,0-1,5 mm em reservatórios agrícolas é a solução de referência mundial. Inerte à água, fertilizantes e sedimentos, dura décadas sem manutenção e adapta-se a qualquer forma e tamanho.',
      points: [
        'Membrana EPDM inerte a fertilizantes, herbicidas e pesticidas da exploração agrícola',
        'Adaptável a reservatórios de qualquer forma: circular, retangular, irregular natural',
        'Instalação em novas charcas e reabilitação de reservatórios existentes com perdas',
        'Compatível com bombas submersíveis, tubagens de rega e sistemas de controlo de nível',
      ],
    },
    benefits: [
      { icon: 'Droplets', title: 'Zero Perdas por Infiltração', description: 'A membrana EPDM elimina as infiltrações — toda a água captada fica disponível para rega, aumentando eficiência hídrica da exploração agrícola.' },
      { icon: 'Shield', title: 'Inerte a Agroquímicos', description: 'O EPDM é inerte a fertilizantes NPK, herbicidas, fungicidas e pesticidas comuns em agricultura — sem degradação da membrana por contacto com estes produtos.' },
      { icon: 'Thermometer', title: 'Resistência a UV e Temperatura', description: 'Resistência a UV intrínseca sem proteção adicional. Estabilidade de -45°C a +130°C — adequado para reservatórios ao ar livre em qualquer clima português.' },
      { icon: 'Layers', title: 'Qualquer Forma e Dimensão', description: 'O EPDM corta-se e vulcaniza-se em obra para cobrir reservatórios de qualquer forma, desde charcas circulares a lagoas irregulares de vários hectares.' },
      { icon: 'Wrench', title: 'Instalação Rápida', description: 'Instalação por equipa especializada em reservatório de 1000 m² em 1-2 dias. Sem cura, sem espera — reservatório em serviço imediatamente após instalação.' },
      { icon: 'Euro', title: 'ROI Positivo', description: 'A membrana EPDM paga-se pela água que economiza. Em explorações de 50 ha com rega intensiva, a poupança de água equivale ao custo da membrana em 2-3 anos.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm (charcas) / 1,5 mm (reservatórios elevados)' },
      { label: 'Resistência a fertilizantes', value: 'Excelente — inerte a NPK e micronutrientes' },
      { label: 'Resistência a herbicidas/pesticidas', value: 'Boa — consultar ficha técnica para produtos específicos' },
      { label: 'Resistência UV (exposto)', value: 'Excelente — 50+ anos sem proteção' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Aptidão para rega', value: 'Sim — inerte, sem libertação de compostos' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Estudo da Charca', description: 'Levantamento topográfico do reservatório. Avaliação do solo (tipo, estabilidade). Definição de volume, forma e sistema de enchimento e extração.' },
      { step: 2, title: 'Preparação do Solo', description: 'Compactação e regularização do leito. Remoção de pedras pontiagudas e raízes. Instalação de geotêxtil de proteção (200 g/m²) sobre o solo compactado.' },
      { step: 3, title: 'Instalação da Membrana', description: 'Colocação da membrana EPDM no leito e taludes do reservatório. Soldadura das emendas por vulcanização a frio.' },
      { step: 4, title: 'Remate nas Bordas', description: 'Ancoragem da membrana no bordo superior do reservatório por vala de ancoragem. A membrana dobra na vala e é coberta por terra.' },
      { step: 5, title: 'Tubagens e Equipamentos', description: 'Instalação de mangas de penetração EPDM para tubagem de enchimento, tubagem de aspiração de bomba e extravasor de emergência.' },
      { step: 6, title: 'Enchimento e Garantia', description: 'Enchimento progressivo do reservatório. Verificação de ausência de infiltrações. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'EPDM sobre Geotêxtil (Reservatórios Escavados)',
        description: 'Geotêxtil de proteção 200 g/m² + EPDM 1,0-1,5 mm no leito e taludes. Sistema standard para charcas escavadas em terra.',
        pros: ['Instalação rápida em qualquer tipo de solo', 'Geotêxtil protege membrana de pedras e raízes', 'Sistema completamente flexível para formas irregulares'],
        cons: ['Geotêxtil requer correta sobreposição nas emendas', 'Reservatórios com fauna aquática requerem atenção ao aquecimento da água com membrana escura'],
      },
      {
        title: 'EPDM em Reservatório de Betão Existente',
        description: 'Para reabilitação de reservatórios de betão com fissuras ou infiltrações, EPDM colado ao interior do betão. Elimina infiltrações sem demolição.',
        pros: ['Reabilitação sem demolição do reservatório existente', 'Estrutura de betão mantém rigidez — membrana é apenas impermeabilização', 'Adequado para reservatórios elevados ou semienterrados'],
        cons: ['Requer preparação e reparação do betão antes da instalação', 'Acessórios de penetração mais complexos em reservatório betão existente'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Polietileno HDPE', value: '20-30 anos' }, { name: 'Solo compactado (argila)', value: 'Indefinida mas com perdas sazonais' }] },
      { feature: 'Perda por infiltração', epdm: 'Zero', alternatives: [{ name: 'Polietileno HDPE', value: 'Mínima' }, { name: 'Solo compactado (argila)', value: '20-50% (sazonal)' }] },
    ],
    climate: [
      { zone: 'Alentejo e Algarve (Stress Hídrico)', description: 'Regiões com escassez de água e verões secos — cada litro de água armazenada conta. O EPDM elimina perdas por infiltração que podem representar 30-50% do volume em solos argilosos que secam no verão.' },
      { zone: 'Norte (Captação de Chuva)', description: 'Precipitação concentrada no inverno — reservatórios para captar água de inverno para rega de verão. O EPDM garante que a água captada em novembro ainda está disponível em julho.' },
      { zone: 'Interior (Solos Expansivos)', description: 'Solos argilosos expansivos do interior criam fissuras na seca e fecham na chuva. O EPDM acomoda estes movimentos sem fissurar, mantendo estanquidade mesmo em solos instáveis.' },
    ],
    faqs: [
      { question: 'A água de rega de um reservatório com EPDM é segura para alimentos?', answer: 'Sim. O EPDM é quimicamente inerte e não liberta compostos na água. É adequado para rega de horticultura, fruticultura e viticultura, incluindo em agricultura biológica, desde que a qualidade da própria água captada seja adequada.' },
      { question: 'Qual o tamanho máximo de reservatório em EPDM?', answer: 'Não há limite prático de dimensão. Reservatórios de várias centenas de metros de comprimento são impermeabilizados com EPDM em todo o mundo. Para grandes reservatórios, as membranas são vulcanizadas em fábrica em painéis de grande dimensão que se ligam em obra.' },
      { question: 'O EPDM resiste ao pisoteio de animais que bebem no reservatório?', answer: 'O EPDM resiste ao pisoteio de bovinos e ovinos no bordo do reservatório. Em zonas de passagem intensiva de animais, recomenda-se proteção adicional do bordo com pedra ou betão. A membrana no fundo do reservatório não é afetada por animais.' },
    ],
    relatedSlugs: ['water-reservoirs', 'irrigation-canals', 'stormwater-management'],
  },
  en: {
    meta: {
      title: 'Agricultural Reservoir Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for farm ponds and irrigation reservoirs. Inert to fertilisers, UV resistant and suitable for irrigation water contact. Portugal.',
      keywords: ['agricultural reservoir waterproofing EPDM', 'irrigation pond EPDM', 'farm retention pond membrane', 'irrigation water reservoir Portugal', 'EPDM farm pond'],
    },
    hero: {
      headline: 'Watertight Agricultural Reservoirs with 50+ Year EPDM',
      subtitle: 'EPDM membrane for irrigation ponds and reservoirs guarantees efficient water storage without infiltration losses, for the entire farm\'s life.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '0%', label: 'Infiltration loss' },
        { value: '100%', label: 'Impermeability' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Agricultural Irrigation Reservoir Challenge',
      description: 'Portuguese farms increasingly depend on their own reservoirs to store rainwater and borehole water for irrigation. Without adequate waterproofing, 20-50% of stored volume is lost through soil infiltration.',
      points: [
        '20-50% water loss through infiltration in unlined reservoirs',
        'Clay soil that appears impermeable dries and cracks in hot summers creating infiltrations',
        'Irrigation water contaminated by unprotected soil can transport pathogens to crops',
        'Repairing unlined reservoirs in unstable soil is costly and short-lived',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Agricultural Reservoirs',
      description: '1.0-1.5 mm EPDM in agricultural reservoirs is the global reference solution. Inert to water, fertilisers and sediment, it lasts decades without maintenance and adapts to any shape and size.',
      points: [
        'EPDM membrane inert to fertilisers, herbicides and pesticides used on the farm',
        'Adaptable to reservoirs of any shape: circular, rectangular, irregular natural',
        'Installation in new ponds and rehabilitation of existing reservoirs with losses',
        'Compatible with submersible pumps, irrigation pipes and level control systems',
      ],
    },
    benefits: [
      { icon: 'Droplets', title: 'Zero Infiltration Losses', description: 'EPDM membrane eliminates infiltrations — all captured water is available for irrigation, increasing farm water efficiency.' },
      { icon: 'Shield', title: 'Inert to Agrochemicals', description: 'EPDM is inert to NPK fertilisers, herbicides, fungicides and common agricultural pesticides — no membrane degradation from contact with these products.' },
      { icon: 'Thermometer', title: 'UV and Temperature Resistance', description: 'Intrinsic UV resistance without additional protection. Stability from -45°C to +130°C — suitable for open-air reservoirs in any Portuguese climate.' },
      { icon: 'Layers', title: 'Any Shape and Size', description: 'EPDM is cut and vulcanised on site to cover reservoirs of any shape, from circular ponds to irregular lakes of several hectares.' },
      { icon: 'Wrench', title: 'Fast Installation', description: 'Specialist team installation on a 1,000 m² reservoir in 1-2 days. No curing, no waiting — reservoir in service immediately after installation.' },
      { icon: 'Euro', title: 'Positive ROI', description: 'EPDM membrane pays for itself through water saved. On 50 ha farms with intensive irrigation, water savings equal membrane cost within 2-3 years.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm (ponds) / 1.5 mm (elevated reservoirs)' },
      { label: 'Fertiliser resistance', value: 'Excellent — inert to NPK and micronutrients' },
      { label: 'Herbicide/pesticide resistance', value: 'Good — consult technical datasheet for specific products' },
      { label: 'UV resistance (exposed)', value: 'Excellent — 50+ years without protection' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Irrigation suitability', value: 'Yes — inert, no compound release' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Pond Survey', description: 'Topographic reservoir survey. Soil assessment (type, stability). Volume, shape and filling/extraction system definition.' },
      { step: 2, title: 'Soil Preparation', description: 'Bed compaction and levelling. Pointed rock and root removal. Protective geotextile installation (200 g/m²) over compacted soil.' },
      { step: 3, title: 'Membrane Installation', description: 'EPDM membrane placement on reservoir bed and slopes. Seam welding by cold vulcanisation.' },
      { step: 4, title: 'Edge Trim', description: 'Membrane anchoring at reservoir top edge by anchor trench. Membrane folds into trench and is covered with soil.' },
      { step: 5, title: 'Pipework and Equipment', description: 'EPDM penetration sleeve installation for filling pipe, pump suction pipe and emergency overflow.' },
      { step: 6, title: 'Filling and Warranty', description: 'Progressive reservoir filling. Infiltration absence verification. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'EPDM over Geotextile (Excavated Reservoirs)',
        description: '200 g/m² protective geotextile + 1.0-1.5 mm EPDM on bed and slopes. Standard system for earth-excavated ponds.',
        pros: ['Fast installation on any soil type', 'Geotextile protects membrane from rocks and roots', 'Fully flexible system for irregular shapes'],
        cons: ['Geotextile requires correct seam overlap', 'Aquatic fauna reservoirs require attention to water heating with dark membrane'],
      },
      {
        title: 'EPDM in Existing Concrete Reservoir',
        description: 'For rehabilitation of concrete reservoirs with cracks or infiltrations, EPDM bonded to interior concrete. Eliminates infiltrations without demolition.',
        pros: ['Rehabilitation without demolishing existing reservoir', 'Concrete structure maintains rigidity — membrane is waterproofing only', 'Suitable for elevated or semi-buried reservoirs'],
        cons: ['Concrete preparation and repair required before installation', 'Penetration accessories more complex in existing concrete reservoir'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'HDPE polyethylene', value: '20-30 years' }, { name: 'Compacted soil (clay)', value: 'Indefinite but with seasonal losses' }] },
      { feature: 'Infiltration loss', epdm: 'Zero', alternatives: [{ name: 'HDPE polyethylene', value: 'Minimal' }, { name: 'Compacted soil (clay)', value: '20-50% (seasonal)' }] },
    ],
    climate: [
      { zone: 'Alentejo and Algarve (Water Stress)', description: 'Regions with water scarcity and dry summers — every litre of stored water counts. EPDM eliminates infiltration losses that can represent 30-50% of volume in clay soils that dry in summer.' },
      { zone: 'North (Rainwater Harvesting)', description: 'Rainfall concentrated in winter — reservoirs to capture winter rain for summer irrigation. EPDM ensures water captured in November is still available in July.' },
      { zone: 'Interior (Expansive Soils)', description: 'Expansive clay soils in the interior crack in drought and close in rain. EPDM accommodates these movements without cracking, maintaining watertightness even in unstable soils.' },
    ],
    faqs: [
      { question: 'Is irrigation water from an EPDM reservoir safe for food crops?', answer: 'Yes. EPDM is chemically inert and does not release compounds into water. It is suitable for irrigation of market gardening, fruit and viticulture, including in organic farming, provided the captured water quality itself is adequate.' },
      { question: 'What is the maximum size of an EPDM reservoir?', answer: 'There is no practical size limit. Reservoirs of several hundred metres length are waterproofed with EPDM worldwide. For large reservoirs, membranes are factory-vulcanised into large panels connected on site.' },
      { question: 'Does EPDM resist livestock trampling when animals drink at the reservoir?', answer: 'EPDM resists cattle and sheep trampling at the reservoir edge. In areas of intensive animal passage, additional edge protection with stone or concrete is recommended. The membrane on the reservoir base is not affected by animals.' },
    ],
    relatedSlugs: ['water-reservoirs', 'irrigation-canals', 'stormwater-management'],
  },
}
