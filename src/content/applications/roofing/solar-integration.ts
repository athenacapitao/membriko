import type { ApplicationData } from '../types'

export const solarIntegration: ApplicationData = {
  id: 'solar-integration',
  categoryId: 'roofing',
  pt: {
    meta: {
      title: 'EPDM para Coberturas com Painéis Fotovoltaicos | Membriko',
      description:
        'Membrana EPDM é a escolha preferida da indústria solar para coberturas fotovoltaicas. Compatível com todos os sistemas de suporte PV. Garantia 20 anos. Portugal.',
      keywords: [
        'impermeabilização cobertura solar',
        'EPDM painéis fotovoltaicos',
        'membrana EPDM solar',
        'cobertura PV impermeabilização',
        'telhado solar Portugal',
      ],
    },
    hero: {
      headline: 'EPDM: A Membrana Preferida para Coberturas Solares',
      subtitle:
        'A compatibilidade química e mecânica do EPDM com sistemas fotovoltaicos torna-o a escolha de referência para instalações solares em coberturas planas em Portugal.',
      stats: [
        { value: '30+', label: 'Anos de compatibilidade comprovada' },
        { value: '0', label: 'Penetrações sem vedação adequada' },
        { value: '20 anos', label: 'Garantia da impermeabilização' },
        { value: '100%', label: 'Compatível com todos os sistemas PV' },
      ],
    },
    problem: {
      title: 'O Desafio da Integração Solar em Coberturas',
      description:
        'A instalação de painéis fotovoltaicos numa cobertura existente cria múltiplos desafios de estanquidade: perfurações para fixações, cablagem a penetrar a membrana, e cargas adicionais. Uma impermeabilização inadequada compromete tanto a cobertura como o investimento solar.',
      points: [
        'Cada fixação de suporte PV é uma potencial fonte de infiltração se não executada corretamente',
        'A cablagem entre painéis e inversor penetra a membrana em múltiplos pontos',
        'O sombreamento parcial das coberturas por painéis cria microclimas de humidade',
        'Manutenção e reparação de membranas sob painéis instalados é extremamente difícil',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Integração Solar',
      description:
        'O EPDM é quimicamente inerte e compatível com todos os componentes metálicos e plásticos dos sistemas fotovoltaicos. Os sistemas de fixação PV sem penetração (balastrados) são especialmente compatíveis com EPDM. Para fixações ancoradas, existem buchas certificadas com vedação EPDM integrada.',
      points: [
        'Sistemas PV balastrados não requerem qualquer perfuração da membrana EPDM',
        'Buchas de fixação com vedação EPDM integrada para sistemas ancorados',
        'Vedantes EPDM para passagem de cablagem completamente impermeáveis',
        'EPDM resiste sem degradação ao sombreamento e microclimas de humidade',
      ],
    },
    benefits: [
      {
        icon: 'Zap',
        title: 'Compatibilidade Total com PV',
        description:
          'O EPDM é quimicamente neutro e não reage com alumínio, aço inoxidável ou polímeros dos suportes fotovoltaicos, garantindo compatibilidade para todo o ciclo de vida.',
      },
      {
        icon: 'Shield',
        title: 'Instalação Sem Comprometer Garantias',
        description:
          'Com os acessórios corretos, a instalação PV sobre EPDM não invalida a garantia da impermeabilização. Emissão de garantia combinada impermeabilização + suporte PV.',
      },
      {
        icon: 'Clock',
        title: 'Vida Útil Alinhada',
        description:
          'A vida útil do EPDM (50+ anos) supera a vida dos painéis fotovoltaicos (25-30 anos). A membrana não precisará de ser substituída antes dos painéis — eliminando um custo futuro enorme.',
      },
      {
        icon: 'Wrench',
        title: 'Manutenção Simplificada',
        description:
          'Para inspeção ou reparação da membrana, painéis balastrados podem ser temporariamente movidos sem ferramentas especiais. Sistemas ancorados têm pontos de acesso predefinidos.',
      },
      {
        icon: 'Leaf',
        title: 'Maximização Ambiental',
        description:
          'Combinação ideal de energia solar renovável com impermeabilização ecológica. EPDM branco sob painéis reduz ilha de calor e pode aumentar eficiência dos painéis pelo efeito reflexivo.',
      },
      {
        icon: 'Euro',
        title: 'Proteção do Investimento',
        description:
          'Com uma instalação PV a representar €50.000-€500.000+, a impermeabilização é o seguro mais importante. O EPDM com garantia de 20 anos protege este investimento por toda a sua vida útil.',
      },
    ],
    specs: [
      { label: 'Espessura recomendada', value: '1,2 mm / 1,5 mm' },
      { label: 'Compatibilidade química com alumínio', value: 'Excelente — sem galvanismo' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência à punção (suportes PV)', value: 'Aprovado com proteção adequada' },
      { label: 'Resistência UV sob painéis', value: 'Excelente — mesmo com sombreamento' },
      { label: 'Carga de vento nos suportes PV', value: 'Calculada por engenheiro estrutural' },
      { label: 'Vedante de penetração de cabo', value: 'Acessório EPDM certificado' },
      { label: 'Norma de produto', value: 'EN 13956 / ASTM D4637' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Coordenação com Instalador Solar',
        description:
          'Reunião de coordenação entre a equipa Membriko e o instalador fotovoltaico para definir método de fixação, pontos de passagem de cablagem e sequência de trabalhos.',
      },
      {
        step: 2,
        title: 'Instalação da Membrana EPDM',
        description:
          'Impermeabilização completa da cobertura com EPDM antes de qualquer instalação PV. Esta sequência é fundamental para garantir impermeabilização sem compromissos.',
      },
      {
        step: 3,
        title: 'Passagens de Cablagem',
        description:
          'Instalação de passagens de cabo EPDM certificadas em todas as posições de penetração definidas no projeto elétrico. Cada passagem é vedada e testada.',
      },
      {
        step: 4,
        title: 'Proteção nos Suportes',
        description:
          'Instalação de discos de proteção EPDM sob cada base de suporte PV. Para sistemas ancorados, instalação de buchas com vedação EPDM integrada.',
      },
      {
        step: 5,
        title: 'Instalação dos Painéis PV',
        description:
          'Instalação dos painéis e suportes pelo instalador fotovoltaico. A equipa Membriko supervisiona todos os pontos de contacto com a membrana.',
      },
      {
        step: 6,
        title: 'Inspeção Combinada e Garantias',
        description:
          'Inspeção final conjunta de impermeabilização e sistema PV. Emissão de garantias coordenadas cobrindo toda a interface entre sistemas.',
      },
    ],
    techniques: [
      {
        title: 'Sistema PV Balastrado (Sem Penetrações)',
        description:
          'Suportes fotovoltaicos mantidos no lugar pelo seu próprio peso e balastros adicionais. Não requer qualquer perfuração da membrana EPDM. Método de referência recomendado.',
        pros: [
          'Zero penetrações na membrana — máxima estanquidade',
          'Fácil reconfigurações futuras dos painéis',
          'Garantia de impermeabilização não afetada pela instalação PV',
        ],
        cons: [
          'Carga adicional significativa na estrutura (calcular com engenheiro)',
          'Não adequado para coberturas com inclinação superior a 5°',
          'Requer análise de vento para garantir estabilidade dos suportes',
        ],
      },
      {
        title: 'Sistema PV Ancorado com Vedação EPDM',
        description:
          'Suportes fixados mecanicamente ao suporte estrutural através da membrana EPDM, com buchas de vedação especializadas. Para coberturas com vento muito intenso ou inclinação.',
        pros: [
          'Resistência ao vento superior ao sistema balastrado',
          'Adequado para qualquer inclinação de cobertura',
          'Menor carga na estrutura',
        ],
        cons: [
          'Cada bucha é uma penetração que requer vedação perfeita',
          'Requer inspeção periódica das vedações',
          'Reparação de bucha danificada requer acesso sob o painel',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Compatibilidade com PV balastrado',
        epdm: 'Excelente — sistema de referência',
        alternatives: [
          { name: 'Betume modificado', value: 'Problemática — amolece sob calor + carga' },
          { name: 'PVC', value: 'Boa mas plastificantes migram' },
        ],
      },
      {
        feature: 'Vida útil vs vida útil painel PV',
        epdm: 'EPDM (50a) > Painel (25-30a)',
        alternatives: [
          { name: 'Betume modificado', value: 'Betume (15-20a) < Painel (25-30a)' },
          { name: 'PVC', value: 'PVC (25-30a) ≈ Painel (25-30a)' },
        ],
      },
      {
        feature: 'Custo substituição membrana durante vida PV',
        epdm: 'Zero',
        alternatives: [
          { name: 'Betume modificado', value: 'Uma substituição completa necessária' },
          { name: 'PVC', value: 'Possível — depende das condições' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Todo Portugal — Alta Irradiação',
        description:
          'Portugal tem das maiores irradiações solares da Europa (1.500-2.100 kWh/m²/ano). A impermeabilização sob painéis PV deve durar os 25-30 anos dos painéis sem substituição — só o EPDM garante isto com certeza.',
      },
      {
        zone: 'Sul (Alentejo, Algarve) — Irradiação Máxima',
        description:
          'Com temperaturas de cobertura até 90°C e irradiação máxima, o EPDM é o único sistema de impermeabilização que mantém integridade por toda a vida útil dos painéis sem qualquer manutenção.',
      },
      {
        zone: 'Norte (Porto, Braga) — Alta Produção Solar',
        description:
          'Apesar de irradiação ligeiramente inferior, o norte tem enorme potencial solar. O EPDM resiste à humidade atlântica e precipitação que caracteriza esta zona, protegendo o investimento PV.',
      },
    ],
    faqs: [
      {
        question: 'A instalação de painéis solares invalida a garantia do EPDM?',
        answer:
          'Não, se executada com os acessórios e métodos corretos. A Membriko coordena com o instalador solar para garantir que todos os pontos de contacto são executados conforme as especificações do fabricante EPDM, mantendo a garantia de 20 anos intacta.',
      },
      {
        question: 'O EPDM suporta a carga dos painéis solares balastrados?',
        answer:
          'Sim. O EPDM resiste à carga distribuída dos sistemas balastrados. O cálculo estrutural da cobertura deve ser verificado por engenheiro para garantir que a estrutura suporta a carga adicional de 15-25 kg/m².',
      },
      {
        question: 'Que acontece quando um painel solar precisa de substituição após 20 anos?',
        answer:
          'Com sistema balastrado, os painéis são simplesmente movidos temporariamente. A membrana EPDM em baixo está intacta e não requer qualquer intervenção. Esta é uma vantagem enorme do EPDM sobre sistemas alternativos.',
      },
      {
        question: 'Qual a espessura de EPDM recomendada para coberturas solares?',
        answer:
          'Recomendamos 1,5 mm para coberturas com painéis balastrados (espessura extra protege contra cargas acidentais durante instalação/manutenção) e 1,2 mm para sistemas totalmente ancorados sem tráfego sobre a membrana.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'cool-reflective-roofs', 'green-roofs'],
  },
  en: {
    meta: {
      title: 'EPDM for Solar PV Roofs | Membriko Portugal',
      description:
        'EPDM membrane is the solar industry\'s preferred choice for photovoltaic roofs. Compatible with all PV support systems. 20-year guarantee. Portugal.',
      keywords: [
        'solar roof waterproofing',
        'EPDM photovoltaic panels',
        'EPDM solar membrane',
        'PV roof waterproofing',
        'solar rooftop Portugal',
      ],
    },
    hero: {
      headline: 'EPDM: The Preferred Membrane for Solar Roofs',
      subtitle:
        'The chemical and mechanical compatibility of EPDM with photovoltaic systems makes it the reference choice for solar installations on flat roofs in Portugal.',
      stats: [
        { value: '30+', label: 'Years proven compatibility' },
        { value: '0', label: 'Penetrations without adequate sealing' },
        { value: '20 years', label: 'Waterproofing guarantee' },
        { value: '100%', label: 'Compatible with all PV systems' },
      ],
    },
    problem: {
      title: 'The Solar Integration Challenge on Roofs',
      description:
        'Installing photovoltaic panels on an existing roof creates multiple watertightness challenges: perforations for fixings, cabling penetrating the membrane, and additional loads. Inadequate waterproofing compromises both the roof and the solar investment.',
      points: [
        'Each PV support fixing is a potential infiltration source if not correctly executed',
        'Cabling between panels and inverter penetrates the membrane at multiple points',
        'Partial shading of roofs by panels creates humidity microclimates',
        'Maintenance and repair of membranes under installed panels is extremely difficult',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Solar Integration',
      description:
        'EPDM is chemically inert and compatible with all metallic and plastic components of photovoltaic systems. Ballasted (non-penetrating) PV fixation systems are especially compatible with EPDM. For anchored fixings, there are certified anchors with integrated EPDM sealing.',
      points: [
        'Ballasted PV systems require no perforation of the EPDM membrane',
        'Fixing anchors with integrated EPDM sealing for anchored systems',
        'EPDM cable entry seals completely waterproof',
        'EPDM resists shading and humidity microclimates without degradation',
      ],
    },
    benefits: [
      {
        icon: 'Zap',
        title: 'Full PV Compatibility',
        description:
          'EPDM is chemically neutral and does not react with aluminium, stainless steel or polymers in PV supports, guaranteeing compatibility for the entire service life.',
      },
      {
        icon: 'Shield',
        title: 'Installation Without Voiding Warranties',
        description:
          'With the correct accessories, PV installation on EPDM does not invalidate the waterproofing warranty. Combined warranty issued covering waterproofing + PV support.',
      },
      {
        icon: 'Clock',
        title: 'Aligned Service Life',
        description:
          'EPDM service life (50+ years) exceeds photovoltaic panel life (25-30 years). The membrane will not need replacing before the panels — eliminating a huge future cost.',
      },
      {
        icon: 'Wrench',
        title: 'Simplified Maintenance',
        description:
          'For membrane inspection or repair, ballasted panels can be temporarily moved without special tools. Anchored systems have predefined access points.',
      },
      {
        icon: 'Leaf',
        title: 'Maximum Environmental Value',
        description:
          'Ideal combination of renewable solar energy with ecological waterproofing. White EPDM under panels reduces heat island and may increase panel efficiency through the reflective effect.',
      },
      {
        icon: 'Euro',
        title: 'Investment Protection',
        description:
          'With a PV installation representing €50,000-€500,000+, waterproofing is the most important insurance. EPDM with a 20-year guarantee protects this investment for its entire service life.',
      },
    ],
    specs: [
      { label: 'Recommended thickness', value: '1.2 mm / 1.5 mm' },
      { label: 'Chemical compatibility with aluminium', value: 'Excellent — no galvanism' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Puncture resistance (PV supports)', value: 'Approved with adequate protection' },
      { label: 'UV resistance under panels', value: 'Excellent — even with shading' },
      { label: 'Wind load on PV supports', value: 'Calculated by structural engineer' },
      { label: 'Cable entry seal', value: 'Certified EPDM accessory' },
      { label: 'Product standard', value: 'EN 13956 / ASTM D4637' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Coordination with Solar Installer',
        description:
          'Coordination meeting between Membriko team and PV installer to define fixing method, cable penetration points and work sequence.',
      },
      {
        step: 2,
        title: 'EPDM Membrane Installation',
        description:
          'Complete roof waterproofing with EPDM before any PV installation. This sequence is fundamental to guarantee waterproofing without compromise.',
      },
      {
        step: 3,
        title: 'Cable Penetrations',
        description:
          'Installation of certified EPDM cable entries at all penetration positions defined in the electrical design. Each entry is sealed and tested.',
      },
      {
        step: 4,
        title: 'Support Protection',
        description:
          'Installation of EPDM protection discs under each PV support base. For anchored systems, installation of anchors with integrated EPDM sealing.',
      },
      {
        step: 5,
        title: 'PV Panel Installation',
        description:
          'Installation of panels and supports by the PV installer. Membriko team supervises all contact points with the membrane.',
      },
      {
        step: 6,
        title: 'Combined Inspection and Warranties',
        description:
          'Joint final inspection of waterproofing and PV system. Issue of coordinated warranties covering the entire interface between systems.',
      },
    ],
    techniques: [
      {
        title: 'Ballasted PV System (No Penetrations)',
        description:
          'Photovoltaic supports held in place by their own weight and additional ballasts. Requires no perforation of the EPDM membrane. Recommended reference method.',
        pros: [
          'Zero membrane penetrations — maximum watertightness',
          'Easy future panel reconfiguration',
          'Waterproofing warranty not affected by PV installation',
        ],
        cons: [
          'Significant additional structural load (calculate with engineer)',
          'Not suitable for roofs with more than 5° slope',
          'Wind analysis required to ensure support stability',
        ],
      },
      {
        title: 'Anchored PV System with EPDM Sealing',
        description:
          'Supports mechanically fixed to structural substrate through the EPDM membrane, with specialised sealing anchors. For roofs with very strong wind or slope.',
        pros: [
          'Superior wind resistance to ballasted system',
          'Suitable for any roof slope',
          'Lower structural load',
        ],
        cons: [
          'Each anchor is a penetration requiring perfect sealing',
          'Requires periodic seal inspection',
          'Damaged anchor repair requires access under panel',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Compatibility with ballasted PV',
        epdm: 'Excellent — reference system',
        alternatives: [
          { name: 'Modified bitumen', value: 'Problematic — softens under heat + load' },
          { name: 'PVC', value: 'Good but plasticisers migrate' },
        ],
      },
      {
        feature: 'Service life vs PV panel life',
        epdm: 'EPDM (50yr) > Panel (25-30yr)',
        alternatives: [
          { name: 'Modified bitumen', value: 'Bitumen (15-20yr) < Panel (25-30yr)' },
          { name: 'PVC', value: 'PVC (25-30yr) ≈ Panel (25-30yr)' },
        ],
      },
      {
        feature: 'Membrane replacement cost during PV life',
        epdm: 'Zero',
        alternatives: [
          { name: 'Modified bitumen', value: 'One full replacement needed' },
          { name: 'PVC', value: 'Possible — depends on conditions' },
        ],
      },
    ],
    climate: [
      {
        zone: 'All Portugal — High Irradiation',
        description:
          'Portugal has one of Europe\'s highest solar irradiations (1,500-2,100 kWh/m²/year). Waterproofing under PV panels must last the 25-30-year panel lifetime without replacement — only EPDM guarantees this with certainty.',
      },
      {
        zone: 'South (Alentejo, Algarve) — Maximum Irradiation',
        description:
          'With roof temperatures up to 90°C and maximum irradiation, EPDM is the only waterproofing system that maintains integrity for the entire panel lifetime without any maintenance.',
      },
      {
        zone: 'North (Porto, Braga) — High Solar Production',
        description:
          'Despite slightly lower irradiation, the north has enormous solar potential. EPDM resists the Atlantic humidity and rainfall that characterises this zone, protecting the PV investment.',
      },
    ],
    faqs: [
      {
        question: 'Does solar panel installation void the EPDM warranty?',
        answer:
          'No, if executed with the correct accessories and methods. Membriko coordinates with the solar installer to ensure all contact points are executed per the EPDM manufacturer\'s specifications, keeping the 20-year warranty intact.',
      },
      {
        question: 'Does EPDM support the load of ballasted solar panels?',
        answer:
          'Yes. EPDM resists the distributed load of ballasted systems. The structural calculation of the roof must be verified by an engineer to ensure the structure supports the additional 15-25 kg/m² load.',
      },
      {
        question: 'What happens when a solar panel needs replacing after 20 years?',
        answer:
          'With a ballasted system, panels are simply temporarily moved. The EPDM membrane below is intact and requires no intervention. This is a huge advantage of EPDM over alternative systems.',
      },
      {
        question: 'What EPDM thickness is recommended for solar roofs?',
        answer:
          'We recommend 1.5 mm for roofs with ballasted panels (extra thickness protects against accidental loads during installation/maintenance) and 1.2 mm for fully anchored systems without traffic over the membrane.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'cool-reflective-roofs', 'green-roofs'],
  },
}
