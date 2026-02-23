import type { ApplicationData } from '../types'

export const balconies: ApplicationData = {
  id: 'balconies',
  categoryId: 'envelope',
  pt: {
    meta: {
      title: 'Impermeabilização de Varandas com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização de varandas, logradouros e terraços privados. Resistente a raízes, UV e uso pedonal. Portugal.',
      keywords: ['impermeabilização varanda EPDM', 'membrana varanda impermeável', 'varanda terraço impermeabilização', 'EPDM varanda Portugal', 'impermeabilizar varanda'],
    },
    hero: {
      headline: 'Varandas Impermeáveis com EPDM — Sem Infiltrações para o Andar de Baixo',
      subtitle: 'A membrana EPDM para varandas elimina infiltrações para o andar inferior com 50+ anos de vida útil — sem manutenção periódica.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '1,5 mm', label: 'Espessura para varandas' },
        { value: '100%', label: 'Barreira impermeável' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Varandas e Terraços Privados',
      description: 'As varandas são um dos pontos mais problemáticos em edifícios de habitação. A laje da varanda exposta à chuva, ao gelo e ao uso pedonal cria infiltrações que afetam o andar de baixo — gerando conflitos entre condóminos e custos de reparação.',
      points: [
        'Infiltrações da varanda superior afetam o teto do apartamento abaixo — problema muito comum',
        'Cerâmica aplicada diretamente sobre betão sem membrana cria caminhos de infiltração pelas juntas',
        'Variações térmicas na varanda (-5°C a +60°C na laje) criam movimentos que fissuran revestimentos rígidos',
        'Drenos entupidos ou mal posicionados acumulam água e aumentam pressão sobre a laje',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Varandas',
      description: 'O EPDM de 1,5 mm instalado entre a laje de betão e o revestimento pedonal elimina as infiltrações para o andar de baixo. A sua elasticidade acomoda movimentos térmicos sem criar novas fissuras.',
      points: [
        'Membrana contínua sem emendas de vulcanização que eliminam pontos fracos',
        'Tratamento de ralos e pontos de drenagem com acessórios específicos para varandas',
        'Subida pelo paramento da parede mínima de 150 mm para proteção do rodapé',
        'Compatível com cerâmica, madeira de exterior, gravilha e revestimento pedonal',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Protege o Andar de Baixo', description: 'Elimina completamente as infiltrações que afetam o teto e paredes do apartamento abaixo, evitando conflitos de condomínio e custos de reparação.' },
      { icon: 'Droplets', title: 'Impermeabilidade Total', description: 'Membrana EPDM sem emendas frágeis — a impermeabilidade é da própria membrana, não das soldaduras. Resistente a pressão de água acumulada.' },
      { icon: 'Thermometer', title: 'Resistência Térmica', description: 'Suporta variações térmicas de -45°C a +130°C sem degradação — adequado para varandas expostas a sol intenso e geadas.' },
      { icon: 'Wrench', title: 'Reabilitação Sem Demolição Total', description: 'Em reabilitação, é frequentemente possível instalar EPDM sobre cerâmica existente regularizada, sem demolição total do revestimento.' },
      { icon: 'Layers', title: 'Qualquer Acabamento', description: 'O EPDM é compatível com cerâmica colada, decking de madeira sobre plot, gravilha decorativa ou revestimento de resina — qualquer acabamento estético.' },
      { icon: 'Clock', title: 'Sem Manutenção', description: 'Ao contrário de membranas líquidas que requerem retratamento a 5-10 anos, o EPDM é instalado uma vez e dura toda a vida do edifício.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm' },
      { label: 'Subida em parede', value: 'Mínimo 150 mm acima do revestimento acabado' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência ao gelo/degelo', value: 'Excelente' },
      { label: 'Resistência a detergentes de limpeza', value: 'Boa' },
      { label: 'Proteção obrigatória', value: 'Betão de proteção 30-50 mm ou revestimento colado' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Inspeção da Varanda', description: 'Avaliação da laje existente, identificação de fissuras, verificação de drenos e pendentes. Definição do sistema de impermeabilização e revestimento final.' },
      { step: 2, title: 'Preparação', description: 'Remoção do revestimento existente se necessário. Limpeza e regularização da laje. Criação de pendentes mínimas de 1% para drenos. Tratamento de fissuras.' },
      { step: 3, title: 'Instalação do EPDM', description: 'Colocação da membrana EPDM em toda a laje da varanda. Subida nas paredes e guarda-corpos de mínimo 150 mm acima do revestimento acabado.' },
      { step: 4, title: 'Drenos e Pontos Singulares', description: 'Instalação de colares de ralo EPDM sobre os drenos existentes. Tratamento de cantos com reforço adicional. Verificação de estanquidade por inundação.' },
      { step: 5, title: 'Revestimento Final', description: 'Aplicação de betão de proteção + cerâmica, ou diretamente revestimento de resina ou decking sobre plots. Sistema de colocação sem perfuração do EPDM.' },
      { step: 6, title: 'Garantia', description: 'Emissão de garantia de 15 anos com documentação fotográfica do processo. Instruções de manutenção dos drenos ao proprietário.' },
    ],
    techniques: [
      {
        title: 'EPDM + Cerâmica Colada',
        description: 'Sistema mais comum em Portugal. EPDM 1,5 mm + betão de proteção magro 30 mm + cerâmica colada com argamassa flexível. Acabamento tradicional de alta durabilidade.',
        pros: ['Acabamento cerâmico tradicional', 'Alta resistência ao tráfego pedonal e uso intenso', 'Impermeabilização e acabamento em sistema único'],
        cons: ['Maior tempo de instalação', 'Peso da camada de proteção acrescenta carga à laje'],
      },
      {
        title: 'EPDM + Decking sobre Plots',
        description: 'EPDM 1,5 mm diretamente na laje, com decking de madeira ou composite sobre suportes reguláveis (plots). Câmara de ar ventilada entre EPDM e decking.',
        pros: ['Instalação rápida — decking removível para inspeção', 'Câmara ventilada elimina condensações', 'Aspeto contemporâneo em terraços urbanos'],
        cons: ['Decking requer manutenção periódica (madeira natural)', 'Custo superior à cerâmica'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Membrana líquida poliuretano', value: '10-15 anos' }, { name: 'Tela betuminosa', value: '15-20 anos' }] },
      { feature: 'Manutenção', epdm: 'Nenhuma', alternatives: [{ name: 'Membrana líquida poliuretano', value: 'Retratamento a 10 anos' }, { name: 'Tela betuminosa', value: 'Inspeção anual' }] },
    ],
    climate: [
      { zone: 'Litoral Norte (Chuva e Vento)', description: 'Varandas no litoral norte expostas a chuva intensa e vento. O EPDM com subida adequada nas paredes é essencial para evitar infiltrações pelas juntas parede-laje.' },
      { zone: 'Interior (Geadas e Sol Intenso)', description: 'Ciclos de gelo-degelo no interior degradam cerâmica e argamassas. O EPDM subjacente protege a laje mesmo quando o revestimento fissura.' },
      { zone: 'Sul e Costa (Calor e UV)', description: 'Temperaturas elevadas nas varandas do sul exigem membrana que não amoleça nem escorra. O EPDM é estável a temperaturas de superfície de 80°C+ em dias quentes.' },
    ],
    faqs: [
      { question: 'Preciso remover a cerâmica existente para instalar EPDM na varanda?', answer: 'Depende do estado da cerâmica. Se estiver bem aderida e nivelada, pode ser possível instalar EPDM sobre ela após regularização. Se estiver solta ou com fissuras, é preferível remover e recomeçar. A nossa equipa avalia caso a caso.' },
      { question: 'O EPDM da varanda resolve as infiltrações no teto do apartamento de baixo?', answer: 'Sim, se a infiltração vem da laje da varanda. O EPDM cria uma barreira impermeável completa que impede qualquer passagem de água, independentemente de fissuras no betão ou juntas abertas no revestimento.' },
      { question: 'Quanto tempo demora a impermeabilização de uma varanda com EPDM?', answer: 'Uma varanda típica de 10-15 m² demora 1-2 dias: preparação no primeiro dia, instalação do EPDM e revestimento no segundo. Se incluir novo revestimento cerâmico, adicionar 1-2 dias para cura.' },
    ],
    relatedSlugs: ['terraces-balconies', 'facades', 'flashing-details'],
  },
  en: {
    meta: {
      title: 'Balcony Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing balconies, courtyards and private terraces. Resistant to roots, UV and pedestrian use. Portugal.',
      keywords: ['balcony waterproofing EPDM', 'waterproof balcony membrane', 'balcony terrace waterproofing', 'EPDM balcony Portugal', 'waterproof balcony'],
    },
    hero: {
      headline: 'Waterproof Balconies with EPDM — No Infiltrations to the Floor Below',
      subtitle: 'EPDM membrane for balconies eliminates infiltrations to the lower floor with 50+ years service life — no periodic maintenance.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '1.5 mm', label: 'Balcony thickness' },
        { value: '100%', label: 'Impermeable barrier' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Balcony and Private Terrace Challenge',
      description: 'Balconies are one of the most problematic points in residential buildings. The balcony slab exposed to rain, frost and pedestrian use creates infiltrations affecting the floor below — generating disputes between residents and repair costs.',
      points: [
        'Infiltrations from the upper balcony affect the apartment ceiling below — very common problem',
        'Ceramic applied directly to concrete without membrane creates infiltration paths through joints',
        'Thermal variations on balconies (-5°C to +60°C at slab) create movements cracking rigid claddings',
        'Blocked or poorly positioned drains accumulate water and increase pressure on the slab',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Balconies',
      description: '1.5 mm EPDM installed between the concrete slab and pedestrian surfacing eliminates infiltrations to the floor below. Its elasticity accommodates thermal movements without creating new cracks.',
      points: [
        'Continuous membrane with vulcanisation seams eliminating weak points',
        'Drain and drainage point treatment with balcony-specific accessories',
        'Wall upstand minimum 150 mm for skirting protection',
        'Compatible with ceramic, exterior timber, gravel and pedestrian surfacing',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Protects the Floor Below', description: 'Completely eliminates infiltrations affecting the ceiling and walls of the apartment below, preventing residents\' disputes and repair costs.' },
      { icon: 'Droplets', title: 'Total Impermeability', description: 'EPDM membrane without fragile seams — impermeability is from the membrane itself, not welds. Resistant to accumulated water pressure.' },
      { icon: 'Thermometer', title: 'Thermal Resistance', description: 'Withstands thermal variations from -45°C to +130°C without degradation — suitable for balconies exposed to intense sun and frost.' },
      { icon: 'Wrench', title: 'Rehabilitation Without Full Demolition', description: 'In rehabilitation, it is frequently possible to install EPDM over levelled existing ceramic without full cladding demolition.' },
      { icon: 'Layers', title: 'Any Finish', description: 'EPDM is compatible with bonded ceramic, timber decking on pedestals, decorative gravel or resin coating — any aesthetic finish.' },
      { icon: 'Clock', title: 'Maintenance-Free', description: 'Unlike liquid membranes requiring retreatment at 5-10 years, EPDM is installed once and lasts the life of the building.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Wall upstand', value: 'Minimum 150 mm above finished surfacing' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Freeze-thaw resistance', value: 'Excellent' },
      { label: 'Cleaning detergent resistance', value: 'Good' },
      { label: 'Mandatory protection', value: 'Protection concrete 30-50 mm or bonded cladding' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Balcony Inspection', description: 'Existing slab assessment, crack identification, drain and slope checking. Waterproofing and final surfacing system definition.' },
      { step: 2, title: 'Preparation', description: 'Existing cladding removal if needed. Slab cleaning and levelling. Creation of minimum 1% slopes to drains. Crack treatment.' },
      { step: 3, title: 'EPDM Installation', description: 'EPDM membrane placement across entire balcony slab. Wall and parapet upstands of minimum 150 mm above finished surfacing.' },
      { step: 4, title: 'Drains and Singular Points', description: 'EPDM drain collar installation over existing drains. Corner treatment with additional reinforcement. Watertightness verification by flooding.' },
      { step: 5, title: 'Final Surfacing', description: 'Protection concrete + ceramic application, or direct resin coating or decking on pedestals. Installation system without EPDM puncture.' },
      { step: 6, title: 'Warranty', description: 'Issue of 15-year warranty with photographic process documentation. Drain maintenance instructions provided to owner.' },
    ],
    techniques: [
      {
        title: 'EPDM + Bonded Ceramic',
        description: 'Most common system in Portugal. EPDM 1.5 mm + 30 mm screed + ceramic bonded with flexible adhesive mortar. Traditional high-durability finish.',
        pros: ['Traditional ceramic finish', 'High resistance to pedestrian traffic and intensive use', 'Waterproofing and finish in single system'],
        cons: ['Longer installation time', 'Protection layer weight adds load to slab'],
      },
      {
        title: 'EPDM + Decking on Pedestals',
        description: '1.5 mm EPDM directly on slab, with timber or composite decking on adjustable pedestals. Ventilated air cavity between EPDM and decking.',
        pros: ['Fast installation — removable decking for inspection', 'Ventilated cavity eliminates condensation', 'Contemporary look for urban terraces'],
        cons: ['Decking requires periodic maintenance (natural timber)', 'Higher cost than ceramic'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Polyurethane liquid membrane', value: '10-15 years' }, { name: 'Bituminous sheet', value: '15-20 years' }] },
      { feature: 'Maintenance', epdm: 'None', alternatives: [{ name: 'Polyurethane liquid membrane', value: 'Retreatment at 10 years' }, { name: 'Bituminous sheet', value: 'Annual inspection' }] },
    ],
    climate: [
      { zone: 'Northern Coast (Rain and Wind)', description: 'Balconies on the northern coast exposed to intense rain and wind. EPDM with adequate wall upstands is essential to prevent infiltrations at wall-slab joints.' },
      { zone: 'Interior (Frost and Intense Sun)', description: 'Freeze-thaw cycles in the interior degrade ceramic and mortars. The underlying EPDM protects the slab even when the cladding cracks.' },
      { zone: 'South and Coast (Heat and UV)', description: 'High temperatures on southern balconies require membrane that does not soften or flow. EPDM is stable at surface temperatures of 80°C+ on hot days.' },
    ],
    faqs: [
      { question: 'Do I need to remove existing ceramic to install EPDM on the balcony?', answer: 'It depends on the ceramic condition. If well-adhered and level, it may be possible to install EPDM over it after levelling. If loose or cracked, removal and starting again is preferable. Our team assesses case by case.' },
      { question: 'Does balcony EPDM solve infiltrations in the apartment ceiling below?', answer: 'Yes, if the infiltration comes from the balcony slab. EPDM creates a complete impermeable barrier preventing any water passage, regardless of concrete cracks or open joints in the cladding.' },
      { question: 'How long does balcony waterproofing with EPDM take?', answer: 'A typical 10-15 m² balcony takes 1-2 days: preparation on day one, EPDM installation and surfacing on day two. If including new ceramic cladding, add 1-2 days for curing.' },
    ],
    relatedSlugs: ['terraces-balconies', 'facades', 'flashing-details'],
  },
}
