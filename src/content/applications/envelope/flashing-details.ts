import type { ApplicationData } from '../types'

export const flashingDetails: ApplicationData = {
  id: 'flashing-details',
  categoryId: 'envelope',
  pt: {
    meta: {
      title: 'Rufos e Pontos Singulares em EPDM | Membriko',
      description: 'Acessórios e sistemas EPDM para rufos, remates, peitoris e pontos singulares de impermeabilização. Solução definitiva para pontos críticos. Portugal.',
      keywords: ['rufo EPDM impermeabilização', 'remate cobertura EPDM', 'ponto singular impermeabilização', 'EPDM rufo parede', 'impermeabilização detalhes construtivos'],
    },
    hero: {
      headline: 'Rufos e Pontos Singulares Estanques com EPDM',
      subtitle: 'Os pontos singulares são a causa da maioria das infiltrações em coberturas. Os acessórios e sistemas EPDM resolvem rufos, peitoris, caleiras e penetrações definitivamente.',
      stats: [
        { value: '80%', label: 'Infiltrações começam nos pontos singulares' },
        { value: '50+', label: 'Anos de vida útil' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Pontos Singulares',
      description: 'Mais de 80% das infiltrações em coberturas e fachadas têm origem nos pontos singulares — rufos, remates, penetrações e juntas. A membrana principal raramente falha; são os detalhes construtivos que criam os problemas.',
      points: [
        'Rufos metálicos dilatam e contratam com a temperatura, abrindo fissuras nas ligações com a membrana',
        'Penetrações de chaminés, condutas e cabos de instalações técnicas criam pontos frágeis',
        'Peitoris de janelas sem rufo adequado permitem entrada de água pelas juntas com a fachada',
        'Remates de cobertura em parapeitos com betão fissurado são origem de infiltrações crónicas',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Pontos Singulares',
      description: 'O sistema EPDM para pontos singulares usa acessórios pré-fabricados vulcanizados que se integram perfeitamente na membrana principal, criando uma ligação monolítica sem pontos fracos.',
      points: [
        'Mangas de penetração EPDM pré-vulcanizadas para tubagens e chaminés',
        'Cantoneiras e rodapés EPDM pré-moldados para rufos em parapeito',
        'Sistemas de remate de cume e cumeeira específicos para cada tipo de cobertura',
        'Caleiras EPDM contínuas sem emendas ao longo do comprimento total',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Monolítico com a Membrana', description: 'Os acessórios EPDM vulcanizam-se à membrana principal criando um único elemento impermeável — sem juntas de interface entre materiais diferentes.' },
      { icon: 'Layers', title: 'Acessórios Pré-Fabricados', description: 'Mangas, cantoneiras, caleiras e rufos pré-fabricados em fábrica garantem geometria precisa e qualidade constante, independente das condições da obra.' },
      { icon: 'Wrench', title: 'Compatível com Todos os Sistemas', description: 'Os acessórios EPDM integram qualquer sistema de cobertura ou fachada EPDM — plana, inclinada, ventilada ou ajardinada.' },
      { icon: 'Thermometer', title: 'Sem Fadiga Térmica', description: 'O EPDM acomoda movimentos térmicos de todos os componentes sem criar tensões na ligação — ao contrário de rufos metálicos que dilatam diferentemente do betão.' },
      { icon: 'Clock', title: 'Sem Manutenção em Pontos Críticos', description: 'Rufos EPDM não oxidam, não requerem pintura e não abrem por dilatação diferencial — ao contrário de alumínio, zinco ou aço galvanizado.' },
      { icon: 'Euro', title: 'Prevenção de Custos de Reparação', description: 'Investir em pontos singulares corretos durante a obra previne custos de investigação e reparação que frequentemente ultrapassam o custo da obra original.' },
    ],
    specs: [
      { label: 'Espessura da membrana de base', value: '1,5 mm (coberturas) / 1,0 mm (fachadas)' },
      { label: 'Acessórios disponíveis', value: 'Manga, cantoneira, caleira, cume, rodapé, flange' },
      { label: 'Método de ligação', value: 'Vulcanização a frio ou cola de contacto' },
      { label: 'Elongação', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência UV', value: 'Excelente (acessórios expostos)' },
      { label: 'Tamanhos de manga disponíveis', value: 'DN 20 a DN 200 mm' },
      { label: 'Norma', value: 'EN 13956 — acessórios para membranas' },
    ],
    installationSteps: [
      { step: 1, title: 'Mapeamento dos Pontos Singulares', description: 'Identificação de todas as penetrações, rufos, juntas e remates na cobertura ou fachada. Definição do acessório EPDM adequado para cada ponto.' },
      { step: 2, title: 'Instalação da Membrana Principal', description: 'Instalação da membrana EPDM principal, deixando abertura nos locais de cada ponto singular para tratamento específico.' },
      { step: 3, title: 'Mangas de Penetração', description: 'Instalação de mangas EPDM pré-vulcanizadas em cada tubagem, caleira ou chaminé. Ligação à membrana principal por vulcanização a frio.' },
      { step: 4, title: 'Rufos e Cantoneiras', description: 'Instalação de cantoneiras EPDM em todos os rufos verticais — parapeitos, platibandas, juntas com fachada. Fixação mecânica no topo com perfil de remate.' },
      { step: 5, title: 'Remates de Cume e Caleiras', description: 'Instalação de remates de cume e caleiras EPDM contínuas. Ligação a caleiras ou tubos de queda por mangas de adaptação.' },
      { step: 6, title: 'Verificação e Garantia', description: 'Inspeção detalhada de cada ponto singular. Teste de estanquidade por aspersor ou inundação. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'Vulcanização a Frio de Acessórios',
        description: 'Ligação de acessórios EPDM à membrana principal por cimento de vulcanização a frio. Cria ligação química permanente — o método profissional standard.',
        pros: ['Ligação monolítica permanente', 'Resistência máxima às forças de desprendimento', 'Aplicável em qualquer temperatura acima de 5°C'],
        cons: ['Requer limpeza e preparação cuidadosa das superfícies', 'Tempo de cura de 24 horas antes de sobrecarga'],
      },
      {
        title: 'Acessórios com Cola de Contacto',
        description: 'Para aplicações menos exigentes ou de reabilitação rápida, acessórios EPDM colados com cola de contacto específica para EPDM.',
        pros: ['Instalação mais rápida', 'Adequado para reabilitação com acesso limitado', 'Sem necessidade de kit de vulcanização'],
        cons: ['Resistência inferior à vulcanização química', 'Requer renovação a 20-25 anos'],
      },
    ],
    comparison: [
      { feature: 'Vida útil do rufo', epdm: '50+ anos', alternatives: [{ name: 'Alumínio lacado', value: '20-30 anos (depois oxida)' }, { name: 'Zinco', value: '30-40 anos' }] },
      { feature: 'Manutenção', epdm: 'Nenhuma', alternatives: [{ name: 'Alumínio lacado', value: 'Repintura a 15-20 anos' }, { name: 'Zinco', value: 'Verificação de juntas soldadas' }] },
    ],
    climate: [
      { zone: 'Norte Atlântico (Chuva e Vento)', description: 'Precipitação intensa e ventos de tempestade no norte testam todos os pontos singulares. Os acessórios EPDM não deformam por vento e não permitem entrada de água por capilaridade.' },
      { zone: 'Interior (Geadas e Variações Térmicas)', description: 'Ciclos de gelo-degelo e grandes amplitudes térmicas criam movimentos nos rufos metálicos que abrem fissuras. Os rufos EPDM eliminam este problema pela sua elasticidade.' },
      { zone: 'Sul (Calor e UV)', description: 'Exposição UV intensa degrada plásticos e vedantes em pontos singulares. O EPDM tem resistência UV intrínseca sem necessidade de proteção adicional.' },
    ],
    faqs: [
      { question: 'Como se repara uma manga de penetração EPDM danificada?', answer: 'Reparação por patch de EPDM vulcanizado sobre o dano ou substituição da manga completa por corte e instalação de nova manga. Na maioria dos casos, reparação possível sem remover a membrana envolvente.' },
      { question: 'Os rufos EPDM são visualmente aceitáveis em coberturas de edifícios habitacionais?', answer: 'Sim. O EPDM preto em rufos tem aspeto limpo e profissional. Em coberturas planas onde os rufos não são visíveis da rua, é a solução preferida. Para fachadas visíveis, os rufos EPDM podem ser cobertos por componentes metálicos de remate.' },
      { question: 'É possível substituir rufos metálicos existentes por EPDM em reabilitação?', answer: 'Sim. Em reabilitação de coberturas, os rufos metálicos existentes são removidos e substituídos por sistema EPDM integrado na membrana. Este é um dos trabalhos mais comuns de impermeabilização em Portugal.' },
    ],
    relatedSlugs: ['flat-roofs', 'facades', 'balconies'],
  },
  en: {
    meta: {
      title: 'EPDM Flashings and Details | Membriko',
      description: 'EPDM accessories and systems for flashings, trims, sills and waterproofing singular points. Definitive solution for critical points. Portugal.',
      keywords: ['EPDM flashing waterproofing', 'roof trim EPDM', 'waterproofing singular point', 'EPDM wall flashing', 'waterproofing construction details'],
    },
    hero: {
      headline: 'Watertight Flashings and Singular Points with EPDM',
      subtitle: 'Singular points are the cause of most roof infiltrations. EPDM accessories and systems definitively resolve flashings, sills, gutters and penetrations.',
      stats: [
        { value: '80%', label: 'Infiltrations start at singular points' },
        { value: '50+', label: 'Years service life' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Singular Point Challenge',
      description: 'Over 80% of infiltrations in roofs and facades originate at singular points — flashings, trims, penetrations and joints. The main membrane rarely fails; it is the construction details that create problems.',
      points: [
        'Metal flashings expand and contract with temperature, opening cracks at membrane connections',
        'Penetrations for chimneys, ducts and installation cables create fragile points',
        'Window sills without adequate flashings allow water entry through facade joints',
        'Parapet roof trims with cracked concrete are the origin of chronic infiltrations',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Singular Points',
      description: 'The EPDM system for singular points uses pre-fabricated vulcanised accessories that integrate perfectly with the main membrane, creating a monolithic connection without weak points.',
      points: [
        'Pre-vulcanised EPDM penetration sleeves for pipes and chimneys',
        'Pre-moulded EPDM angles and skirtings for parapet flashings',
        'Ridge and apex trim systems specific to each roof type',
        'Continuous EPDM gutters without seams along their entire length',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Monolithic with Membrane', description: 'EPDM accessories vulcanise to the main membrane creating a single impermeable element — without interface joints between different materials.' },
      { icon: 'Layers', title: 'Pre-Fabricated Accessories', description: 'Factory pre-fabricated sleeves, angles, gutters and flashings guarantee precise geometry and consistent quality, independent of site conditions.' },
      { icon: 'Wrench', title: 'Compatible with All Systems', description: 'EPDM accessories integrate with any EPDM roof or facade system — flat, pitched, ventilated or landscaped.' },
      { icon: 'Thermometer', title: 'No Thermal Fatigue', description: 'EPDM accommodates thermal movements of all components without creating connection stresses — unlike metal flashings that expand differently from concrete.' },
      { icon: 'Clock', title: 'Maintenance-Free at Critical Points', description: 'EPDM flashings do not oxidise, require no painting and do not open from differential expansion — unlike aluminium, zinc or galvanised steel.' },
      { icon: 'Euro', title: 'Repair Cost Prevention', description: 'Investing in correct singular points during construction prevents investigation and repair costs that frequently exceed the original construction cost.' },
    ],
    specs: [
      { label: 'Base membrane thickness', value: '1.5 mm (roofs) / 1.0 mm (facades)' },
      { label: 'Available accessories', value: 'Sleeve, angle, gutter, ridge, skirting, flange' },
      { label: 'Connection method', value: 'Cold vulcanisation or contact adhesive' },
      { label: 'Elongation', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'UV resistance', value: 'Excellent (exposed accessories)' },
      { label: 'Available sleeve sizes', value: 'DN 20 to DN 200 mm' },
      { label: 'Standard', value: 'EN 13956 — accessories for membranes' },
    ],
    installationSteps: [
      { step: 1, title: 'Singular Point Mapping', description: 'Identification of all penetrations, flashings, joints and trims on the roof or facade. EPDM accessory definition appropriate for each point.' },
      { step: 2, title: 'Main Membrane Installation', description: 'Main EPDM membrane installation, leaving opening at each singular point location for specific treatment.' },
      { step: 3, title: 'Penetration Sleeves', description: 'Pre-vulcanised EPDM sleeve installation at each pipe, gutter or chimney. Connection to main membrane by cold vulcanisation.' },
      { step: 4, title: 'Flashings and Angles', description: 'EPDM angle installation at all vertical flashings — parapets, coping walls, facade joints. Mechanical fixing at top with trim profile.' },
      { step: 5, title: 'Ridge Trims and Gutters', description: 'Ridge trim and continuous EPDM gutter installation. Connection to downpipes or drainage by adapter sleeves.' },
      { step: 6, title: 'Verification and Warranty', description: 'Detailed inspection of each singular point. Watertightness test by spray or flooding. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'Cold Vulcanisation of Accessories',
        description: 'EPDM accessory connection to main membrane by cold vulcanisation cement. Creates permanent chemical bond — the professional standard method.',
        pros: ['Permanent monolithic connection', 'Maximum resistance to detachment forces', 'Applicable at any temperature above 5°C'],
        cons: ['Requires careful surface cleaning and preparation', '24-hour curing time before loading'],
      },
      {
        title: 'Accessories with Contact Adhesive',
        description: 'For less demanding applications or fast rehabilitation, EPDM accessories bonded with EPDM-specific contact adhesive.',
        pros: ['Faster installation', 'Suitable for rehabilitation with limited access', 'No vulcanisation kit required'],
        cons: ['Lower resistance than chemical vulcanisation', 'Renewal required at 20-25 years'],
      },
    ],
    comparison: [
      { feature: 'Flashing service life', epdm: '50+ years', alternatives: [{ name: 'Lacquered aluminium', value: '20-30 years (then oxidises)' }, { name: 'Zinc', value: '30-40 years' }] },
      { feature: 'Maintenance', epdm: 'None', alternatives: [{ name: 'Lacquered aluminium', value: 'Repainting at 15-20 years' }, { name: 'Zinc', value: 'Welded joint inspection' }] },
    ],
    climate: [
      { zone: 'Atlantic North (Rain and Wind)', description: 'Intense rainfall and storm winds in the north test all singular points. EPDM accessories do not deform in wind and do not allow capillary water entry.' },
      { zone: 'Interior (Frost and Thermal Variations)', description: 'Freeze-thaw cycles and large thermal amplitudes create movements in metal flashings that open cracks. EPDM flashings eliminate this problem through their elasticity.' },
      { zone: 'South (Heat and UV)', description: 'Intense UV exposure degrades plastics and sealants at singular points. EPDM has intrinsic UV resistance without requiring additional protection.' },
    ],
    faqs: [
      { question: 'How is a damaged EPDM penetration sleeve repaired?', answer: 'Repair by vulcanised EPDM patch over the damage or complete sleeve replacement by cutting and installing a new sleeve. In most cases, repair is possible without removing the surrounding membrane.' },
      { question: 'Are EPDM flashings visually acceptable on residential building roofs?', answer: 'Yes. Black EPDM on flashings has a clean, professional appearance. On flat roofs where flashings are not visible from the street, it is the preferred solution. For visible facades, EPDM flashings can be covered by metal trim components.' },
      { question: 'Is it possible to replace existing metal flashings with EPDM in rehabilitation?', answer: 'Yes. In roof rehabilitation, existing metal flashings are removed and replaced by an EPDM system integrated with the membrane. This is one of the most common waterproofing works in Portugal.' },
    ],
    relatedSlugs: ['flat-roofs', 'facades', 'balconies'],
  },
}
