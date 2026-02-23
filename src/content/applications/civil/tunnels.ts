import type { ApplicationData } from '../types'

export const tunnels: ApplicationData = {
  id: 'tunnels',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Túneis com Membrana EPDM | Membriko',
      description: 'Sistemas de impermeabilização EPDM para túneis rodoviários, ferroviários e de infraestrutura. Alta resistência à pressão hidrostática e movimentos. Portugal.',
      keywords: ['impermeabilização túnel EPDM', 'membrana túnel rodoviário', 'túnel impermeabilização Portugal', 'EPDM túnel ferroviário', 'impermeabilização obra subterrânea'],
    },
    hero: {
      headline: 'Túneis Impermeáveis com Sistemas EPDM de Alta Performance',
      subtitle: 'A membrana EPDM garante impermeabilidade em túneis sujeitos a pressão hidrostática elevada, movimentos estruturais e condições de exposição permanente.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '10 bar', label: 'Resistência à pressão hidrostática' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização de Túneis',
      description: 'Os túneis são estruturas de engenharia civil particularmente exigentes em termos de impermeabilização. A pressão hidrostática pode ser muito elevada, os movimentos estruturais são continuados e o acesso para reparação é difícil e caro.',
      points: [
        'Pressão hidrostática em túneis em zonas de lençol freático pode atingir 5-10 bar',
        'Movimentos estruturais por cargas sísmicas, tráfego e variações térmicas criam fissuras',
        'Infiltrações em túneis rodoviários criam gelo no inverno e perigo para utilizadores',
        'Reparação de impermeabilização em túneis requer encerramento e custos muito elevados',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Túneis',
      description: 'O EPDM em sistemas de impermeabilização de túneis é aplicado entre o suporte primário (projeção betão) e o revestimento definitivo, criando uma membrana de alta performance selada nas juntas.',
      points: [
        'Instalação entre suporte primário e revestimento definitivo — proteção integrada na estrutura',
        'Sistemas de junta selante certificados para pressões até 10 bar',
        'Elasticidade que acomoda movimentos sísmicos e deformações da estrutura',
        'Resistência a ácidos e compostos agressivos do solo em contacto com o túnel',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a Alta Pressão', description: 'Sistemas EPDM para túneis são certificados para pressões hidrostáticas até 10 bar, cobrindo a maioria das situações de túneis rodoviários e ferroviários portugueses.' },
      { icon: 'Layers', title: 'Integração Estrutural', description: 'Instalada entre suporte primário e revestimento, a membrana EPDM é protegida mecanicamente pela estrutura e dura toda a vida do túnel.' },
      { icon: 'Thermometer', title: 'Resistência Sísmica', description: 'A elongação de 400% do EPDM acomoda os movimentos sísmicos típicos de Portugal sem fissurar, ao contrário de membranas rígidas.' },
      { icon: 'Clock', title: 'Vida Útil do Túnel', description: 'Um túnel é projetado para 100+ anos. O EPDM tem vida útil compatível com este horizonte, eliminando necessidade de substituição da impermeabilização.' },
      { icon: 'Droplets', title: 'Sistema de Drenagem Integrado', description: 'O sistema EPDM para túneis inclui drenagem integrada que recolhe eventuais infiltrações antes de chegarem ao revestimento definitivo.' },
      { icon: 'Wrench', title: 'Instalação Especializada', description: 'Equipa especializada com experiência em projetos de túnel, incluindo trabalho em espaços confinados e aplicação em condições de humidade.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (sistemas de túnel)' },
      { label: 'Resistência à pressão hidrostática', value: 'Até 10 bar (EN 1928)' },
      { label: 'Sistema de junta', value: 'Perfil EPDM selante certificado' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Resistência a ácidos sulfúricos do solo', value: 'Excelente' },
      { label: 'Resistência a metano e gases', value: 'Boa' },
      { label: 'Norma de produto', value: 'EN 13956 / AFTES GT7' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto de Impermeabilização', description: 'Projeto detalhado em coordenação com projetista do túnel. Definição de pressão de projeto, sistema de junta, zonas de atenção (portais, cruzamentos, poços).' },
      { step: 2, title: 'Suporte Primário', description: 'Preparação do suporte primário em betão projetado. Verificação de irregularidades. Instalação de géotêxtil de proteção onde necessário.' },
      { step: 3, title: 'Instalação da Membrana', description: 'Instalação da membrana EPDM por painéis desde a caleira de drenagem até ao coroamento. Fixação por soldadura a pontos de ancoragem termo-elétrica.' },
      { step: 4, title: 'Juntas e Estanqueidade', description: 'Instalação de perfis de junta EPDM em todas as juntas transversais. Soldadura e teste de pressão de cada junta antes de continuar.' },
      { step: 5, title: 'Revestimento Definitivo', description: 'Betonagem do revestimento definitivo sobre a membrana EPDM. Cuidado especial para não perfurar a membrana durante a betonagem.' },
      { step: 6, title: 'Monitorização e Garantia', description: 'Instalação de sistema de monitorização de infiltrações. Emissão de garantia de 20 anos com programa de inspeções periódicas.' },
    ],
    techniques: [
      {
        title: 'Sistema de Membrana Livre (NMT)',
        description: 'Membrana EPDM instalada livremente entre suporte primário e revestimento definitivo. Sistema standard para túneis em rocha ou betão projetado.',
        pros: ['Acomoda movimentos estruturais sem tensões na membrana', 'Drenagem integrada entre membrana e suporte', 'Padrão internacional reconhecido'],
        cons: ['Requer suporte primário regular e sem protuberâncias', 'Instalação em altura em túneis grandes requer equipamento especial'],
      },
      {
        title: 'Sistema de Membrana Aderente (AT)',
        description: 'Para condições de pressão hidrostática extremamente elevada, membrana EPDM colada ao suporte primário. Sem câmara de drenagem.',
        pros: ['Máxima resistência a pressão hidrostática muito elevada', 'Sem câmara que pode acumular água pressurizada', 'Adequado para túneis subaquáticos'],
        cons: ['Movimentos estruturais criam tensões na membrana', 'Instalação mais complexa e cara', 'Sem drenagem de emergência'],
      },
    ],
    comparison: [
      { feature: 'Resistência à pressão hidrostática', epdm: 'Até 10 bar', alternatives: [{ name: 'PVC para túneis', value: 'Até 8 bar' }, { name: 'HDPE para túneis', value: 'Até 6 bar' }] },
      { feature: 'Elongação (sísmica)', epdm: '400%', alternatives: [{ name: 'PVC para túneis', value: '250%' }, { name: 'HDPE para túneis', value: '150%' }] },
    ],
    climate: [
      { zone: 'Zonas de Montanha (Serra da Estrela, Gerês)', description: 'Túneis em zonas de montanha portuguesa têm lençol freático e precipitação intensa. A pressão hidrostática elevada exige sistema EPDM certificado para 5-10 bar.' },
      { zone: 'Zonas Sísmicas (Lisboa, Setúbal)', description: 'Portugal tem risco sísmico significativo. A elongação de 400% do EPDM é fundamental para túneis em zonas de risco sísmico moderado a elevado.' },
      { zone: 'Zonas Costeiras', description: 'Ambiente salino e lençol freático salobro em zonas costeiras exige resistência química específica. O EPDM é inerte ao sal e às águas costeiras.' },
    ],
    faqs: [
      { question: 'O EPDM é adequado para túneis ferroviários?', answer: 'Sim. O EPDM é utilizado em túneis ferroviários em toda a Europa, incluindo em linhas de alta velocidade. A resistência sísmica e a durabilidade são as principais razões de escolha sobre alternativas.' },
      { question: 'Como se repara uma membrana EPDM danificada num túnel ativo?', answer: 'Em túneis em operação, a reparação é feita por injeção de resina pelo lado do revestimento definitivo, sem acesso à membrana. Danos extensos requerem encerramento temporário mas são raros com EPDM.' },
    ],
    relatedSlugs: ['foundations', 'underground-parking', 'bridges'],
  },
  en: {
    meta: {
      title: 'Tunnel Waterproofing with EPDM Membrane | Membriko',
      description: 'EPDM waterproofing systems for road, rail and infrastructure tunnels. High hydrostatic pressure and movement resistance. Portugal.',
      keywords: ['tunnel waterproofing EPDM', 'road tunnel membrane', 'tunnel waterproofing Portugal', 'EPDM rail tunnel', 'underground structure waterproofing'],
    },
    hero: {
      headline: 'Waterproof Tunnels with High-Performance EPDM Systems',
      subtitle: 'EPDM membrane guarantees impermeability in tunnels subject to high hydrostatic pressure, structural movements and permanent exposure conditions.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '10 bar', label: 'Hydrostatic pressure resistance' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Tunnel Waterproofing Challenge',
      description: 'Tunnels are civil engineering structures particularly demanding for waterproofing. Hydrostatic pressure can be very high, structural movements are continuous and repair access is difficult and costly.',
      points: [
        'Hydrostatic pressure in tunnels in water table zones can reach 5-10 bar',
        'Structural movements from seismic loads, traffic and thermal variations create cracks',
        'Infiltrations in road tunnels create ice in winter and danger for users',
        'Waterproofing repair in tunnels requires closure and very high costs',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Tunnels',
      description: 'EPDM in tunnel waterproofing systems is applied between the primary support (sprayed concrete) and the definitive lining, creating a high-performance membrane sealed at joints.',
      points: [
        'Installation between primary support and definitive lining — integrated structural protection',
        'Certified joint sealing systems for pressures up to 10 bar',
        'Elasticity accommodating seismic movements and structural deformations',
        'Resistance to acids and aggressive soil compounds in contact with the tunnel',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'High Pressure Resistance', description: 'EPDM systems for tunnels are certified for hydrostatic pressures up to 10 bar, covering most Portuguese road and rail tunnel situations.' },
      { icon: 'Layers', title: 'Structural Integration', description: 'Installed between primary support and lining, the EPDM membrane is mechanically protected by the structure and lasts the entire tunnel life.' },
      { icon: 'Thermometer', title: 'Seismic Resistance', description: '400% EPDM elongation accommodates typical Portuguese seismic movements without cracking, unlike rigid membranes.' },
      { icon: 'Clock', title: 'Tunnel Service Life', description: 'A tunnel is designed for 100+ years. EPDM has a service life compatible with this horizon, eliminating waterproofing replacement needs.' },
      { icon: 'Droplets', title: 'Integrated Drainage System', description: 'The EPDM tunnel system includes integrated drainage collecting any infiltrations before they reach the definitive lining.' },
      { icon: 'Wrench', title: 'Specialist Installation', description: 'Specialised team experienced in tunnel projects, including confined space working and application in humid conditions.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (tunnel systems)' },
      { label: 'Hydrostatic pressure resistance', value: 'Up to 10 bar (EN 1928)' },
      { label: 'Joint system', value: 'Certified EPDM sealing profile' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Soil sulphuric acid resistance', value: 'Excellent' },
      { label: 'Methane and gas resistance', value: 'Good' },
      { label: 'Product standard', value: 'EN 13956 / AFTES GT7' },
    ],
    installationSteps: [
      { step: 1, title: 'Waterproofing Design', description: 'Detailed design in coordination with tunnel designer. Definition of design pressure, joint system, areas of attention (portals, crossings, shafts).' },
      { step: 2, title: 'Primary Support', description: 'Sprayed concrete primary support preparation. Irregularity checking. Protective geotextile installation where needed.' },
      { step: 3, title: 'Membrane Installation', description: 'EPDM membrane installation in panels from drainage channel to crown. Fixing by welding to thermo-electric anchor points.' },
      { step: 4, title: 'Joints and Watertightness', description: 'EPDM joint profiles installed at all transverse joints. Welding and pressure testing of each joint before continuing.' },
      { step: 5, title: 'Definitive Lining', description: 'Concreting of definitive lining over EPDM membrane. Special care to avoid membrane puncture during concreting.' },
      { step: 6, title: 'Monitoring and Warranty', description: 'Installation of infiltration monitoring system. Issue of 20-year warranty with periodic inspection programme.' },
    ],
    techniques: [
      {
        title: 'Free Membrane System (NMT)',
        description: 'EPDM membrane installed freely between primary support and definitive lining. Standard system for tunnels in rock or sprayed concrete.',
        pros: ['Accommodates structural movements without membrane stress', 'Integrated drainage between membrane and support', 'Internationally recognised standard'],
        cons: ['Requires regular primary support without protrusions', 'Installation at height in large tunnels requires special equipment'],
      },
      {
        title: 'Bonded Membrane System (AT)',
        description: 'For extremely high hydrostatic pressure conditions, EPDM membrane bonded to primary support. No drainage cavity.',
        pros: ['Maximum resistance to very high hydrostatic pressure', 'No cavity that could accumulate pressurised water', 'Suitable for underwater tunnels'],
        cons: ['Structural movements create membrane stress', 'More complex and expensive installation', 'No emergency drainage'],
      },
    ],
    comparison: [
      { feature: 'Hydrostatic pressure resistance', epdm: 'Up to 10 bar', alternatives: [{ name: 'PVC for tunnels', value: 'Up to 8 bar' }, { name: 'HDPE for tunnels', value: 'Up to 6 bar' }] },
      { feature: 'Elongation (seismic)', epdm: '400%', alternatives: [{ name: 'PVC for tunnels', value: '250%' }, { name: 'HDPE for tunnels', value: '150%' }] },
    ],
    climate: [
      { zone: 'Mountain Zones (Serra da Estrela, Gerês)', description: 'Portuguese mountain tunnels have intense water table and precipitation. High hydrostatic pressure demands EPDM system certified for 5-10 bar.' },
      { zone: 'Seismic Zones (Lisbon, Setúbal)', description: 'Portugal has significant seismic risk. EPDM 400% elongation is fundamental for tunnels in moderate to high seismic risk zones.' },
      { zone: 'Coastal Zones', description: 'Saline environment and brackish water table in coastal zones demand specific chemical resistance. EPDM is inert to salt and coastal waters.' },
    ],
    faqs: [
      { question: 'Is EPDM suitable for rail tunnels?', answer: 'Yes. EPDM is used in rail tunnels throughout Europe, including on high-speed lines. Seismic resistance and durability are the main reasons for choosing it over alternatives.' },
      { question: 'How is damaged EPDM membrane repaired in an active tunnel?', answer: 'In operating tunnels, repair is done by resin injection through the definitive lining side, without membrane access. Extensive damage requires temporary closure but is rare with EPDM.' },
    ],
    relatedSlugs: ['foundations', 'underground-parking', 'bridges'],
  },
}
