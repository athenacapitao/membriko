import type { ApplicationData } from '../types'

export const wetRooms: ApplicationData = {
  id: 'wet-rooms',
  categoryId: 'envelope',
  pt: {
    meta: {
      title: 'Impermeabilização de Casas de Banho e WC com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização de casas de banho, chuveiros e zonas húmidas. Solução duradoura para habitação e hotelaria. Portugal.',
      keywords: ['impermeabilização casa banho EPDM', 'membrana duche impermeável', 'wet room impermeabilização', 'casas banho hotel impermeabilização', 'EPDM zona húmida'],
    },
    hero: {
      headline: 'Casas de Banho e Zonas Húmidas Impermeáveis com EPDM',
      subtitle: 'A membrana EPDM para casas de banho e wet rooms elimina infiltrações para os andares inferiores com 50+ anos de vida útil — para habitação, hotéis e spas.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '1,0 mm', label: 'Espessura para zonas húmidas' },
        { value: '100%', label: 'Impermeabilidade' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Zonas Húmidas em Edifícios',
      description: 'As casas de banho são a principal fonte de infiltrações em edifícios de apartamentos. Água de chuveiro, banheira e sanitas penetra juntas de cerâmica e betão, acumulando-se no interior da laje e causando manchas e bolores nos andares inferiores.',
      points: [
        'Juntas de cerâmica de casa de banho absorvem água e permitem infiltração mesmo com silicone',
        'Lajes de betão em zonas húmidas sem membrana absorvem água progressivamente',
        'Infiltrações crónicas em casas de banho de hotéis causam reclamações e custos de manutenção',
        'Reabilitação de casa de banho sem tratar impermeabilização reproduz o mesmo problema',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Zonas Húmidas',
      description: 'O EPDM de 1,0 mm instalado entre a laje de betão e o revestimento cerâmico cria uma barreira impermeável completa que elimina definitivamente as infiltrações para os andares inferiores.',
      points: [
        'Membrana EPDM de 1,0 mm em toda a laje, paredes até 300 mm de altura e box de duche',
        'Tratamento de ralos e penetrações de canalização com acessórios específicos',
        'Compatível com aquecimento por laje radiante — EPDM suporta temperaturas até +80°C',
        'Certificação EN 14891 para sistemas de impermeabilização em zonas húmidas interiores',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Impermeabilidade Certificada', description: 'Sistema certificado EN 14891 para zonas húmidas. Elimina definitivamente infiltrações para os andares inferiores — sem exceções.' },
      { icon: 'Droplets', title: 'Proteção de Paredes', description: 'A membrana EPDM sobe pelas paredes até 300 mm protegendo completamente a zona de respingos do chuveiro e banheira.' },
      { icon: 'Thermometer', title: 'Compatível com Piso Radiante', description: 'O EPDM suporta temperaturas de aquecimento por laje (até +60°C) sem degradação — ideal para casas de banho com piso radiante.' },
      { icon: 'Wrench', title: 'Fácil Integração', description: 'Instalação rápida antes da cerâmica. Colares de ralo pré-fabricados para uma instalação precisa. Sem necessidade de secagem prolongada.' },
      { icon: 'Clock', title: 'Vida Útil Superior a Membranas Líquidas', description: 'Membranas líquidas de casa de banho duram 10-15 anos. O EPDM dura 50+ anos — eliminando necessidade de obras repetidas.' },
      { icon: 'Euro', title: 'Solução Profissional para Hotelaria', description: 'Para hotéis e spas onde casas de banho de luxo têm vida útil longa e manutenção difícil, o EPDM é a solução de referência profissional.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm' },
      { label: 'Subida em parede', value: 'Mínimo 300 mm (zona de chuveiro)' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C (piso radiante)' },
      { label: 'Resistência a detergentes', value: 'Boa — pH 3-12' },
      { label: 'Certificação', value: 'EN 14891 — sistemas impermeabilização zonas húmidas' },
      { label: 'Tempo de espera antes de cerâmica', value: '24 horas (adesivo cured)' },
      { label: 'Norma', value: 'EN 14891' },
    ],
    installationSteps: [
      { step: 1, title: 'Preparação da Laje e Paredes', description: 'Limpeza e regularização da laje e paredes da casa de banho. Criação de pendente mínima de 1,5% para o ralo. Tratamento de cantos com cordão de vedação.' },
      { step: 2, title: 'Instalação do EPDM na Laje', description: 'Colocação da membrana EPDM em toda a laje com sobreposição nas emendas. Reforço especial no canto laje-parede com patch adicional.' },
      { step: 3, title: 'Subida nas Paredes', description: 'Colagem do EPDM nas paredes até mínimo 300 mm de altura. Em box de duche, subida até 300 mm acima do prato ou total da parede molhada.' },
      { step: 4, title: 'Ralo e Penetrações', description: 'Instalação de colar de ralo EPDM com flange de vedação. Tratamento de tubagens de canalização com manga de vedação específica.' },
      { step: 5, title: 'Teste de Estanquidade', description: 'Inundação da laje por 24 horas para verificação de estanquidade antes da cerâmica. Sem infiltrações visíveis no andar inferior.' },
      { step: 6, title: 'Cerâmica e Garantia', description: 'Aplicação de cerâmica com argamassa flexível sobre o EPDM. Emissão de garantia de 15 anos após conclusão.' },
    ],
    techniques: [
      {
        title: 'EPDM + Cerâmica (Casa de Banho Standard)',
        description: 'Para casas de banho de habitação e hotéis. EPDM 1,0 mm em laje e paredes + cerâmica colada com argamassa flexível. Solução definitiva para impermeabilização.',
        pros: ['Impermeabilidade definitiva da laje', 'Qualquer acabamento cerâmico compatível', 'Solução standard para habitação e hotelaria'],
        cons: ['Requer preparação cuidadosa de pendentes e cantos', 'Instalação de 2 dias'],
      },
      {
        title: 'EPDM em Wet Room (Casa de Banho Aberta)',
        description: 'Para wet rooms sem box de duche, EPDM em toda a laje e paredes até teto com ralinete de nível. Sistema para hotéis de design contemporâneo.',
        pros: ['Impermeabilidade total de toda a área húmida', 'Aspeto minimalista sem box', 'Adequado para cadeira de rodas (acesso sem degrau)'],
        cons: ['Subida nas paredes até teto aumenta material e tempo', 'Requer ventilação adequada para evitar condensações'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Membrana líquida (poliuretano)', value: '10-15 anos' }, { name: 'Vedante silicone', value: '5-10 anos' }] },
      { feature: 'Certificação EN 14891', epdm: 'Sim', alternatives: [{ name: 'Membrana líquida (poliuretano)', value: 'Sim (algumas marcas)' }, { name: 'Vedante silicone', value: 'Não' }] },
    ],
    climate: [
      { zone: 'Habitação Urbana (Apartamentos)', description: 'Casas de banho de apartamentos em edifícios com múltiplos pisos — a infiltração de uma casa de banho afeta sempre o apartamento abaixo. O EPDM resolve definitivamente.' },
      { zone: 'Hotelaria e Turismo', description: 'Casas de banho de hotéis sofrem uso intensivo. Reabilitação com EPDM elimina infiltrações recorrentes e reduz custos de manutenção em hotéis boutique e cadeias.' },
      { zone: 'Spas e Piscinas Interiores', description: 'Zonas de spa com chuveiros tropicais, hammam e piscinas interiores requerem impermeabilização de máxima performance. O EPDM é a solução profissional para estas instalações.' },
    ],
    faqs: [
      { question: 'Posso instalar EPDM numa casa de banho existente sem demolir tudo?', answer: 'Em alguns casos é possível instalar sobre cerâmica existente se estiver em bom estado. Na maioria das reabilitações, a remoção da cerâmica é necessária para verificar o estado da laje e garantir pendentes corretas para o ralo.' },
      { question: 'Quanto tempo demora a impermeabilização de uma casa de banho com EPDM?', answer: 'A instalação do EPDM demora 1 dia. O teste de estanquidade requer 24 horas de inundação. A cerâmica é instalada depois, na mesma semana.' },
      { question: 'O EPDM é compatível com piso radiante eléctrico?', answer: 'Sim. O EPDM suporta temperaturas de aquecimento por laje até +80°C sem degradação. Os sistemas de piso radiante eléctrico tipicamente operam a 40-50°C, bem dentro da gama de segurança.' },
    ],
    relatedSlugs: ['balconies', 'facades', 'flashing-details'],
  },
  en: {
    meta: {
      title: 'Bathroom and Wet Room Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing bathrooms, showers and wet rooms. Long-lasting solution for residential and hospitality. Portugal.',
      keywords: ['bathroom waterproofing EPDM', 'waterproof shower membrane', 'wet room waterproofing', 'hotel bathroom waterproofing', 'EPDM wet area'],
    },
    hero: {
      headline: 'Waterproof Bathrooms and Wet Rooms with EPDM',
      subtitle: 'EPDM membrane for bathrooms and wet rooms eliminates infiltrations to lower floors with 50+ years service life — for residential, hotels and spas.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '1.0 mm', label: 'Wet area thickness' },
        { value: '100%', label: 'Impermeability' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Wet Area Challenge in Buildings',
      description: 'Bathrooms are the main source of infiltrations in apartment buildings. Shower, bath and toilet water penetrates ceramic and concrete joints, accumulating inside the slab and causing stains and mould on lower floors.',
      points: [
        'Bathroom ceramic joints absorb water and allow infiltration even with silicone',
        'Concrete slabs in wet areas without membrane progressively absorb water',
        'Chronic bathroom infiltrations in hotels cause complaints and maintenance costs',
        'Bathroom rehabilitation without treating waterproofing reproduces the same problem',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Wet Areas',
      description: '1.0 mm EPDM installed between the concrete slab and ceramic creates a complete impermeable barrier that definitively eliminates infiltrations to lower floors.',
      points: [
        '1.0 mm EPDM membrane on entire slab, walls up to 300 mm height and shower enclosure',
        'Drain and pipe penetration treatment with specific accessories',
        'Compatible with underfloor heating — EPDM withstands temperatures up to +80°C',
        'EN 14891 certification for waterproofing systems in interior wet areas',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Certified Impermeability', description: 'EN 14891 certified system for wet areas. Definitively eliminates infiltrations to lower floors — without exceptions.' },
      { icon: 'Droplets', title: 'Wall Protection', description: 'EPDM membrane rises up walls to 300 mm completely protecting the splash zone of shower and bath.' },
      { icon: 'Thermometer', title: 'Underfloor Heating Compatible', description: 'EPDM withstands underfloor heating temperatures (up to +60°C) without degradation — ideal for bathrooms with underfloor heating.' },
      { icon: 'Wrench', title: 'Easy Integration', description: 'Fast installation before ceramic. Pre-fabricated drain collars for precise installation. No extended drying time required.' },
      { icon: 'Clock', title: 'Longer Life than Liquid Membranes', description: 'Liquid bathroom membranes last 10-15 years. EPDM lasts 50+ years — eliminating the need for repeated works.' },
      { icon: 'Euro', title: 'Professional Solution for Hospitality', description: 'For hotels and spas where luxury bathrooms have long service life and difficult maintenance, EPDM is the professional reference solution.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm' },
      { label: 'Wall upstand', value: 'Minimum 300 mm (shower zone)' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C (underfloor heating)' },
      { label: 'Detergent resistance', value: 'Good — pH 3-12' },
      { label: 'Certification', value: 'EN 14891 — wet area waterproofing systems' },
      { label: 'Waiting time before ceramic', value: '24 hours (adhesive cured)' },
      { label: 'Standard', value: 'EN 14891' },
    ],
    installationSteps: [
      { step: 1, title: 'Slab and Wall Preparation', description: 'Bathroom slab and wall cleaning and levelling. Minimum 1.5% slope to drain creation. Corner treatment with sealing bead.' },
      { step: 2, title: 'EPDM Slab Installation', description: 'EPDM membrane placement across entire slab with seam overlap. Special reinforcement at slab-wall corner with additional patch.' },
      { step: 3, title: 'Wall Upstands', description: 'EPDM bonding on walls to minimum 300 mm height. In shower enclosure, upstand to 300 mm above tray or full height of wet wall.' },
      { step: 4, title: 'Drain and Penetrations', description: 'EPDM drain collar installation with sealing flange. Pipework treatment with specific sealing sleeve.' },
      { step: 5, title: 'Watertightness Test', description: 'Slab flooding for 24 hours to verify watertightness before ceramic. No visible infiltrations on lower floor.' },
      { step: 6, title: 'Ceramic and Warranty', description: 'Ceramic application with flexible adhesive mortar over EPDM. Issue of 15-year warranty after completion.' },
    ],
    techniques: [
      {
        title: 'EPDM + Ceramic (Standard Bathroom)',
        description: 'For residential and hotel bathrooms. 1.0 mm EPDM on slab and walls + ceramic bonded with flexible adhesive mortar. Definitive waterproofing solution.',
        pros: ['Definitive slab impermeability', 'Any compatible ceramic finish', 'Standard solution for residential and hospitality'],
        cons: ['Requires careful slope and corner preparation', '2-day installation'],
      },
      {
        title: 'EPDM in Wet Room (Open Bathroom)',
        description: 'For wet rooms without shower enclosure, EPDM on entire slab and walls to ceiling with level drain. System for contemporary design hotels.',
        pros: ['Total impermeability of entire wet area', 'Minimalist look without enclosure', 'Suitable for wheelchair access (step-free)'],
        cons: ['Wall upstands to ceiling increase material and time', 'Adequate ventilation required to prevent condensation'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Liquid membrane (polyurethane)', value: '10-15 years' }, { name: 'Silicone sealant', value: '5-10 years' }] },
      { feature: 'EN 14891 certification', epdm: 'Yes', alternatives: [{ name: 'Liquid membrane (polyurethane)', value: 'Yes (some brands)' }, { name: 'Silicone sealant', value: 'No' }] },
    ],
    climate: [
      { zone: 'Urban Residential (Apartments)', description: 'Bathrooms in multi-storey apartment buildings — infiltration from one bathroom always affects the apartment below. EPDM resolves this definitively.' },
      { zone: 'Hospitality and Tourism', description: 'Hotel bathrooms suffer intensive use. EPDM rehabilitation eliminates recurring infiltrations and reduces maintenance costs in boutique hotels and chains.' },
      { zone: 'Spas and Indoor Pools', description: 'Spa areas with tropical showers, hammams and indoor pools require maximum performance waterproofing. EPDM is the professional solution for these installations.' },
    ],
    faqs: [
      { question: 'Can I install EPDM in an existing bathroom without demolishing everything?', answer: 'In some cases it is possible to install over existing ceramic if in good condition. In most rehabilitations, ceramic removal is necessary to verify slab condition and ensure correct slopes to the drain.' },
      { question: 'How long does bathroom waterproofing with EPDM take?', answer: 'EPDM installation takes 1 day. The watertightness test requires 24 hours of flooding. Ceramic is installed afterwards, in the same week.' },
      { question: 'Is EPDM compatible with electric underfloor heating?', answer: 'Yes. EPDM withstands underfloor heating temperatures up to +80°C without degradation. Electric underfloor heating systems typically operate at 40-50°C, well within the safe range.' },
    ],
    relatedSlugs: ['balconies', 'facades', 'flashing-details'],
  },
}
