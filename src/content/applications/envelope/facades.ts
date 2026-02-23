import type { ApplicationData } from '../types'

export const facades: ApplicationData = {
  id: 'facades',
  categoryId: 'envelope',
  pt: {
    meta: {
      title: 'Impermeabilização de Fachadas com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização e proteção de fachadas ventiladas e não ventiladas. Resistente a UV, chuva e movimentos. Portugal.',
      keywords: ['impermeabilização fachada EPDM', 'membrana fachada ventilada', 'fachada impermeável Portugal', 'EPDM parede exterior', 'revestimento fachada impermeável'],
    },
    hero: {
      headline: 'Fachadas Protegidas com Barreira EPDM de Longa Duração',
      subtitle: 'A membrana EPDM em fachadas cria uma barreira impermeável por trás do revestimento exterior, protegendo a estrutura de infiltrações e humidade por décadas.',
      stats: [
        { value: '50+', label: 'Anos de proteção' },
        { value: '0', label: 'Manutenção necessária' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização de Fachadas',
      description: 'As fachadas são a primeira linha de defesa do edifício contra a chuva e vento. Em Portugal, com precipitação intensa no norte e ventos de tempestade nas zonas costeiras, a proteção adequada da fachada é crítica para a durabilidade do edificado.',
      points: [
        'Chuva horizontal em Portugal costeiro penetra qualquer junta ou fissura na fachada',
        'Revestimentos cerâmicos e pedra natural com juntas permitem entrada de água por capilaridade',
        'Movimentos térmicos na fachada criam fissuras em rebocos e argamassas de junta',
        'Humidade na parede promove desenvolvimento de bolores e degrada isolamento térmico',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Fachadas',
      description: 'O EPDM instalado por trás do revestimento exterior de fachada cria uma membrana de segurança: mesmo que o revestimento seja penetrado, a água é impedida de entrar na estrutura pelo EPDM.',
      points: [
        'Membrana EPDM de 1,0 mm instalada entre estrutura e revestimento exterior',
        'Compatível com fachadas ventiladas — a câmara de ar drena a água que atravessa o revestimento',
        'Elasticidade que acomoda movimentos térmicos e assentamentos sem fissurar',
        'Instalação em obra nova e reabilitação de fachadas existentes',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Barreira de Segurança', description: 'Mesmo com juntas abertas ou fissuras no revestimento exterior, o EPDM garante que a água não atinge a estrutura portante ou o isolamento térmico.' },
      { icon: 'Thermometer', title: 'Compatível com ETICS/RCCTE', description: 'O EPDM pode ser instalado por trás de sistemas de isolamento exterior (ETICS/capoto) ou em fachadas ventiladas, sem interferir com o desempenho térmico.' },
      { icon: 'Layers', title: 'Fachadas Ventiladas', description: 'Em sistemas de fachada ventilada, o EPDM é o standard para a barreira pára-chuva por trás do painel exterior — cerâmica, pedra, metal ou composite.' },
      { icon: 'Droplets', title: 'Controlo de Humidade', description: 'Elimina infiltrações de água da chuva que causam bolores, deterioração de isolamento e danos nos acabamentos interiores.' },
      { icon: 'Wrench', title: 'Reabilitação de Fachadas', description: 'Em reabilitação, o EPDM pode ser instalado sobre o reboco existente antes de novo revestimento — elimina infiltrações sem demolição total da fachada.' },
      { icon: 'Clock', title: 'Sem Manutenção', description: 'O EPDM por trás do revestimento não requer manutenção — ao contrário de vedantes de silicone que degradam e requerem substituição periódica.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm / 1,5 mm' },
      { label: 'Resistência UV (exposto)', value: 'Excelente — EPDM resiste 50+ anos a UV' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência à chuva batida', value: 'Categoria A — EN 12865' },
      { label: 'Permeabilidade ao vapor', value: 'Baixa — barreira contra vapor' },
      { label: 'Compatibilidade com fachada ventilada', value: 'Sim — sistema standard' },
      { label: 'Norma', value: 'EN 13956 / EN 12865' },
    ],
    installationSteps: [
      { step: 1, title: 'Avaliação da Fachada', description: 'Inspeção da fachada existente ou projeto da nova. Definição de sistema: fachada ventilada ou revestimento colado. Identificação de pontos singulares: janelas, varandas, peitoris.' },
      { step: 2, title: 'Preparação do Suporte', description: 'Limpeza e regularização da parede estrutural. Reparação de fissuras. Instalação de primer de adesão em zonas de colagem direta.' },
      { step: 3, title: 'Instalação do EPDM', description: 'Colocação da membrana EPDM na parede com sobreposição de 100 mm nas emendas. Fixação mecânica (fachada ventilada) ou colagem (revestimento direto).' },
      { step: 4, title: 'Pontos Singulares', description: 'Tratamento de janelas, peitoris, varandas e tubagens com acessórios de canto e adesivo específico. Etapa crítica para estanquidade total.' },
      { step: 5, title: 'Revestimento Exterior', description: 'Instalação da estrutura de fachada ventilada + painéis ou aplicação direta de revestimento sobre o EPDM (cerâmica, pedra, reboco armado).' },
      { step: 6, title: 'Inspeção e Garantia', description: 'Verificação de sobreposições e pontos singulares. Teste por aspersor de água. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'EPDM em Fachada Ventilada',
        description: 'Membrana EPDM fixada mecanicamente na parede estrutural, câmara de ar ventilada e painel exterior. Sistema standard para edifícios de habitação, escritórios e comércio.',
        pros: ['Câmara ventilada elimina condensações e drena água infiltrada', 'Flexibilidade de escolha do painel exterior', 'Sistema de alta performance energética'],
        cons: ['Custo superior a reboco simples', 'Requer projeto cuidadoso dos suportes metálicos'],
      },
      {
        title: 'EPDM sob Reboco Armado (ETICS)',
        description: 'Para reabilitação de fachadas com reboco existente em mau estado, EPDM instalado sobre a parede e coberto por sistema de isolamento + reboco armado.',
        pros: ['Reabilitação sem demolição total da fachada', 'Melhoria simultânea de impermeabilização e isolamento térmico', 'Custo-eficaz para reabilitação de parque habitacional'],
        cons: ['Complexidade na gestão de peitoris e vãos', 'Requer compatibilidade com sistema ETICS específico'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Vedante silicone em juntas', value: '10-15 anos' }, { name: 'Barreira pára-chuva betuminosa', value: '20-25 anos' }] },
      { feature: 'Resistência UV', epdm: 'Excelente', alternatives: [{ name: 'Vedante silicone em juntas', value: 'Boa — mas endurece' }, { name: 'PVC', value: 'Fraca — amarelece' }] },
    ],
    climate: [
      { zone: 'Norte Atlântico (Chuva Intensa)', description: 'Precipitação de 1500-2000 mm anuais e ventos do Atlântico criam pressão de chuva batida intensa nas fachadas a norte. O EPDM como barreira pára-chuva é essencial nestas condições.' },
      { zone: 'Zonas Costeiras (Sal e Vento)', description: 'Névoa salina e ventos fortes nas zonas costeiras portuguesas degradam juntas de vedação em anos. A resistência química do EPDM ao sal é superior a todas as alternativas.' },
      { zone: 'Sul (Calor e UV)', description: 'Radiação UV intensa no sul degrada rebocos e vedantes orgânicos. O EPDM tem resistência UV intrínseca que o torna durável mesmo em exposição direta.' },
    ],
    faqs: [
      { question: 'O EPDM pode ser aplicado diretamente sobre reboco existente?', answer: 'Sim, desde que o reboco esteja aderente e sem fissuras ativas. Em reabilitação, o EPDM é frequentemente instalado sobre o reboco existente saneado, servindo de barreira impermeável antes de novo revestimento.' },
      { question: 'Qual a diferença entre EPDM em fachada e tela de impermeabilização betuminosa?', answer: 'O EPDM tem vida útil de 50+ anos ao contrário dos 20-25 anos das telas betuminosas. Além disso, o EPDM é mais flexível (400% vs 50-100%) e resiste melhor à UV sem proteção adicional.' },
    ],
    relatedSlugs: ['flat-roofs', 'balconies', 'flashing-details'],
  },
  en: {
    meta: {
      title: 'Facade Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing and protecting ventilated and non-ventilated facades. Resistant to UV, rain and movement. Portugal.',
      keywords: ['facade waterproofing EPDM', 'ventilated facade membrane', 'waterproof facade Portugal', 'EPDM exterior wall', 'waterproof facade cladding'],
    },
    hero: {
      headline: 'Protected Facades with Long-Lasting EPDM Barrier',
      subtitle: 'EPDM membrane in facades creates an impermeable barrier behind the exterior cladding, protecting the structure from infiltrations and moisture for decades.',
      stats: [
        { value: '50+', label: 'Years of protection' },
        { value: '0', label: 'Maintenance required' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Facade Waterproofing Challenge',
      description: 'Facades are the building\'s first line of defence against rain and wind. In Portugal, with intense rainfall in the north and storm winds in coastal zones, adequate facade protection is critical for building durability.',
      points: [
        'Horizontal rain on the Portuguese coast penetrates any joint or crack in the facade',
        'Ceramic and natural stone claddings with joints allow water entry by capillarity',
        'Thermal movements in the facade create cracks in renders and joint mortars',
        'Moisture in walls promotes mould growth and degrades thermal insulation',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Facades',
      description: 'EPDM installed behind the exterior facade cladding creates a safety membrane: even if the cladding is penetrated, water is prevented from entering the structure by the EPDM.',
      points: [
        '1.0 mm EPDM membrane installed between structure and exterior cladding',
        'Compatible with ventilated facades — air cavity drains water that crosses the cladding',
        'Elasticity accommodating thermal movements and settlements without cracking',
        'Installation in new build and rehabilitation of existing facades',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Safety Barrier', description: 'Even with open joints or cracks in exterior cladding, EPDM ensures water does not reach the loadbearing structure or thermal insulation.' },
      { icon: 'Thermometer', title: 'ETICS/RCCTE Compatible', description: 'EPDM can be installed behind external insulation systems (ETICS) or on ventilated facades without interfering with thermal performance.' },
      { icon: 'Layers', title: 'Ventilated Facades', description: 'In ventilated facade systems, EPDM is the standard for the rainscreen barrier behind the exterior panel — ceramic, stone, metal or composite.' },
      { icon: 'Droplets', title: 'Moisture Control', description: 'Eliminates rainwater infiltrations causing mould, insulation deterioration and interior finish damage.' },
      { icon: 'Wrench', title: 'Facade Rehabilitation', description: 'In rehabilitation, EPDM can be installed over existing render before new cladding — eliminates infiltrations without full facade demolition.' },
      { icon: 'Clock', title: 'Maintenance-Free', description: 'EPDM behind cladding requires no maintenance — unlike silicone sealants which degrade and require periodic replacement.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm / 1.5 mm' },
      { label: 'UV resistance (exposed)', value: 'Excellent — EPDM resists 50+ years of UV' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Driving rain resistance', value: 'Category A — EN 12865' },
      { label: 'Vapour permeability', value: 'Low — vapour barrier' },
      { label: 'Ventilated facade compatibility', value: 'Yes — standard system' },
      { label: 'Standard', value: 'EN 13956 / EN 12865' },
    ],
    installationSteps: [
      { step: 1, title: 'Facade Assessment', description: 'Existing facade inspection or new design. System definition: ventilated facade or bonded cladding. Singular point identification: windows, balconies, sills.' },
      { step: 2, title: 'Substrate Preparation', description: 'Structural wall cleaning and levelling. Crack repair. Adhesion primer application in direct bonding zones.' },
      { step: 3, title: 'EPDM Installation', description: 'EPDM membrane placement on wall with 100 mm seam overlap. Mechanical fixing (ventilated facade) or bonding (direct cladding).' },
      { step: 4, title: 'Singular Points', description: 'Window, sill, balcony and pipework treatment with corner accessories and specific adhesive. Critical step for complete watertightness.' },
      { step: 5, title: 'Exterior Cladding', description: 'Ventilated facade structure + panel installation or direct cladding application over EPDM (ceramic, stone, reinforced render).' },
      { step: 6, title: 'Inspection and Warranty', description: 'Overlap and singular point verification. Water spray test. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'EPDM in Ventilated Facade',
        description: 'EPDM membrane mechanically fixed to structural wall, ventilated air cavity and exterior panel. Standard system for residential, office and commercial buildings.',
        pros: ['Ventilated cavity eliminates condensation and drains infiltrated water', 'Flexibility of exterior panel choice', 'High energy performance system'],
        cons: ['Higher cost than simple render', 'Requires careful design of metal supports'],
      },
      {
        title: 'EPDM under Reinforced Render (ETICS)',
        description: 'For rehabilitation of facades with failing render, EPDM installed over wall and covered by insulation + reinforced render system.',
        pros: ['Rehabilitation without full facade demolition', 'Simultaneous improvement of waterproofing and thermal insulation', 'Cost-effective for residential building stock rehabilitation'],
        cons: ['Complexity in managing sills and openings', 'Requires compatibility with specific ETICS system'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Silicone sealant at joints', value: '10-15 years' }, { name: 'Bituminous rainscreen', value: '20-25 years' }] },
      { feature: 'UV resistance', epdm: 'Excellent', alternatives: [{ name: 'Silicone sealant at joints', value: 'Good — but hardens' }, { name: 'PVC', value: 'Poor — yellows' }] },
    ],
    climate: [
      { zone: 'Atlantic North (Intense Rain)', description: '1500-2000 mm annual rainfall and Atlantic winds create intense driving rain pressure on north-facing facades. EPDM as rainscreen barrier is essential in these conditions.' },
      { zone: 'Coastal Zones (Salt and Wind)', description: 'Salt spray and strong winds on Portuguese coasts degrade sealing joints within years. EPDM chemical resistance to salt is superior to all alternatives.' },
      { zone: 'South (Heat and UV)', description: 'Intense UV radiation in the south degrades renders and organic sealants. EPDM has intrinsic UV resistance making it durable even in direct exposure.' },
    ],
    faqs: [
      { question: 'Can EPDM be applied directly over existing render?', answer: 'Yes, provided the render is adherent and without active cracks. In rehabilitation, EPDM is frequently installed over treated existing render, serving as an impermeable barrier before new cladding.' },
      { question: 'What is the difference between EPDM on a facade and a bituminous waterproofing sheet?', answer: 'EPDM has a service life of 50+ years compared to 20-25 years for bituminous sheets. EPDM is also more flexible (400% vs 50-100%) and resists UV better without additional protection.' },
    ],
    relatedSlugs: ['flat-roofs', 'balconies', 'flashing-details'],
  },
}
