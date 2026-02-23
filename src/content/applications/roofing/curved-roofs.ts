import type { ApplicationData } from '../types'

export const curvedRoofs: ApplicationData = {
  id: 'curved-roofs',
  categoryId: 'roofing',
  pt: {
    meta: {
      title: 'Impermeabilização de Coberturas Curvas com EPDM | Membriko',
      description:
        'Membrana EPDM para coberturas curvas, abobadadas e com formas complexas. Elasticidade de 400% permite adaptação perfeita a qualquer geometria. Portugal.',
      keywords: [
        'impermeabilização cobertura curva',
        'membrana EPDM cobertura curva',
        'impermeabilização abóbada',
        'cobertura arqueada EPDM',
        'membrana flexível cobertura',
      ],
    },
    hero: {
      headline: 'Coberturas Curvas: O EPDM Adapta-se a Qualquer Forma',
      subtitle:
        'Com elongação de 400%, a membrana EPDM envolve perfeitamente coberturas curvas, abobadadas e geometrias complexas sem emendas nem rugas.',
      stats: [
        { value: '400%', label: 'Elongação máxima' },
        { value: '0 emendas', label: 'Em superfícies contínuas' },
        { value: '-45°C/+130°C', label: 'Amplitude térmica' },
        { value: '50+', label: 'Anos de durabilidade' },
      ],
    },
    problem: {
      title: 'O Desafio das Coberturas Curvas',
      description:
        'As coberturas curvas e com formas complexas são os maiores desafios da impermeabilização. A maioria dos sistemas rígidos ou semi-rígidos não se adapta a curvaturas apertadas, criando emendas, dobras e pontos de fraqueza que inevitavelmente falham.',
      points: [
        'Sistemas betuminosos em rolo não dobram em raios de curvatura pequenos sem fissurarem',
        'Múltiplas emendas em coberturas curvas multiplicam os pontos de infiltração potencial',
        'PVC rígido requer termomoldagem — processo caro e com resultado esteticamente inferior',
        'Manutenção e reparação de coberturas curvas com sistemas tradicionais é extremamente difícil',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Coberturas Curvas',
      description:
        'A extraordinária elasticidade do EPDM (400% de elongação) permite que uma folha única se molde a qualquer curvatura sem criar tensões, dobras ou pontos de fraqueza. É o único material que consegue cobrir uma cúpula ou abóbada em folha única sem emendas.',
      points: [
        'Uma única folha EPDM cobre coberturas curvas de grande dimensão sem emendas intermédias',
        'Adapta-se a raios de curvatura tão pequenos quanto 50 mm sem fissurar',
        'Mantém elasticidade e conformidade ao longo de toda a vida útil — nunca endurece',
        'Disponível em larguras até 15 m para cobrir superfícies curvas de grande escala',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Cobertura Sem Emendas',
        description:
          'A flexibilidade do EPDM permite cobrir toda uma cobertura curva em folha única, eliminando completamente as emendas — a principal causa de falha em coberturas de forma livre.',
      },
      {
        icon: 'Thermometer',
        title: 'Estabilidade Dimensional',
        description:
          'O EPDM tem um coeficiente de expansão térmica baixo e acomoda as variações dimensionais com a sua elasticidade, sem criar ondulações visíveis.',
      },
      {
        icon: 'Palette',
        title: 'Versatilidade Estética',
        description:
          'Disponível em preto standard e em cores especiais (branco, cinza, verde). Pode ser pintado ou revestido para integração estética em edifícios de arquitetura marcante.',
      },
      {
        icon: 'Wrench',
        title: 'Instalação Simplificada',
        description:
          'A equipa instala o EPDM num único processo de estiramento e colagem, sem necessidade de termomoldagem ou fabrico de peças especiais em fábrica.',
      },
      {
        icon: 'Clock',
        title: 'Manutenção Mínima',
        description:
          'Superfície lisa e sem emendas é de fácil limpeza e inspeção. Reparações pontuais são simples com remendos de EPDM colados a frio.',
      },
      {
        icon: 'Layers',
        title: 'Compatibilidade Universal',
        description:
          'Adere a todos os substratos: betão, aço, madeira, espuma rígida, poliestireno expandido. Ideal para coberturas em estrutura metálica ou de madeira laminada.',
      },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm / 1,2 mm / 1,5 mm' },
      { label: 'Elongação na rutura', value: '≥ 400% (EN 12311-2)' },
      { label: 'Raio de curvatura mínimo', value: '50 mm (membrana 1,0 mm)' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência à tração', value: '≥ 9 N/mm²' },
      { label: 'Largura máxima do rolo', value: '15,25 m' },
      { label: 'Resistência UV', value: 'Excelente — nativa' },
      { label: 'Norma de produto', value: 'EN 13956 / ASTM D4637' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Levantamento 3D e Projeto',
        description:
          'Levantamento topográfico ou 3D da cobertura curva. Cálculo de desenvolvimento de superfície para otimização de cortes e minimização de emendas.',
      },
      {
        step: 2,
        title: 'Preparação do Suporte',
        description:
          'Limpeza e regularização do suporte. Aplicação de primer de adesão compatível com o material do suporte (betão, metal, madeira).',
      },
      {
        step: 3,
        title: 'Corte e Pré-Conformação',
        description:
          'Corte da membrana com sobrelargura calculada. Pré-estiramento controlado para facilitar a aplicação em curvas de maior raio.',
      },
      {
        step: 4,
        title: 'Aplicação e Colagem',
        description:
          'Aplicação de adesivo de contacto no suporte e na membrana. Posicionamento e prensagem progressiva da folha de fundo para as extremidades, eliminando ar aprisionado.',
      },
      {
        step: 5,
        title: 'Emendas e Rufos',
        description:
          'Soldadura de quaisquer emendas necessárias com adesivo certificado. Remate de todos os beirais, calhas e pontos de penetração com acessórios de EPDM moldável.',
      },
      {
        step: 6,
        title: 'Controlo de Qualidade e Garantia',
        description:
          'Inspeção visual completa de toda a superfície. Teste de aderência em pontos amostrados. Emissão de certificado de garantia.',
      },
    ],
    techniques: [
      {
        title: 'Colagem Total com Adesivo de Neoprene',
        description:
          'Método preferencial para coberturas curvas. O adesivo de neoprene permite uma janela de trabalho suficiente para conformar a membrana a curvaturas complexas.',
        pros: [
          'Máxima aderência ao suporte — sem risco de levantamento',
          'Permite estiramento controlado durante a aplicação',
          'Adequado para geometrias complexas e dupla curvatura',
        ],
        cons: [
          'Requer superfície absolutamente limpa e seca',
          'Tempo de trabalho limitado após aplicação do adesivo',
          'Necessita de equipa experiente para geometrias complexas',
        ],
      },
      {
        title: 'Sistema de Fita Auto-Aderente (EPDM Fleece-Backed)',
        description:
          'EPDM com não-tecido na face inferior que recebe adesivo de contacto com maior uniformidade. Ideal para aplicações em substrato poroso (betão, alvenaria).',
        pros: [
          'Melhor distribuição de adesivo em substratos porosos',
          'Conformação mais fácil em geometrias de simples curvatura',
          'Instalação mais rápida que EPDM liso',
        ],
        cons: [
          'Menos flexível que EPDM liso para dupla curvatura',
          'Peso ligeiramente superior',
          'Custo maior por m²',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Adaptação a curvas',
        epdm: 'Excelente — 400% elongação',
        alternatives: [
          { name: 'PVC', value: 'Limitada — requer termomoldagem' },
          { name: 'Betume modificado', value: 'Fraca — fissuração nas curvas' },
          { name: 'Poliurea líquida', value: 'Boa — mas emissões VOC' },
        ],
      },
      {
        feature: 'Emendas em cobertura curva',
        epdm: 'Mínimas ou zero',
        alternatives: [
          { name: 'PVC', value: 'Múltiplas — cada curva é uma peça' },
          { name: 'Betume modificado', value: 'Muitas — material rígido' },
          { name: 'Poliurea líquida', value: 'Zero — mas espessura variável' },
        ],
      },
      {
        feature: 'Raio mínimo de curvatura',
        epdm: '50 mm',
        alternatives: [
          { name: 'PVC', value: '300 mm sem aquecimento' },
          { name: 'Betume modificado', value: '500 mm (fissuração abaixo)' },
          { name: 'Poliurea líquida', value: 'N/A — líquido' },
        ],
      },
      {
        feature: 'Durabilidade',
        epdm: '50+ anos',
        alternatives: [
          { name: 'PVC', value: '25-30 anos' },
          { name: 'Betume modificado', value: '15-20 anos' },
          { name: 'Poliurea líquida', value: '15-20 anos' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Litoral Atlântico',
        description:
          'Coberturas curvas em ambiente costeiro estão sujeitas a ventos fortes. O EPDM colado é a única solução que resiste ao levantamento mesmo em coberturas de forma aerodinâmica complexa.',
      },
      {
        zone: 'Sul e Mediterrâneo',
        description:
          'Coberturas curvas acumulam menos água que planas mas atingem temperaturas elevadas. O EPDM mantém elasticidade e coesão com o suporte mesmo a 130°C em dias de sol intenso.',
      },
      {
        zone: 'Interior Continental',
        description:
          'As variações térmicas extremas expandem e contraem a estrutura continuamente. O EPDM elástico acompanha estes movimentos sem destacar ou fissurar ao longo de décadas.',
      },
    ],
    faqs: [
      {
        question: 'Pode o EPDM cobrir uma cúpula sem emendas?',
        answer:
          'Sim, para cúpulas de até 15 m de diâmetro é possível usar uma única folha de EPDM sem emendas. Para dimensões maiores, as emendas são minimizadas e executadas com adesivo certificado que garante estanquidade igual à membrana base.',
      },
      {
        question: 'O EPDM pode ser aplicado em barris e abóbadas de betão?',
        answer:
          'Absolutamente. O EPDM cola excelentemente ao betão com primer adequado. A sua flexibilidade permite conformação perfeita a qualquer raio de curvatura sem risco de destacamento por temperatura.',
      },
      {
        question: 'Qual é o raio mínimo de curvatura suportado pelo EPDM?',
        answer:
          'Para membrana de 1,0 mm, o raio mínimo de curvatura é de aproximadamente 50 mm. Para espessuras maiores (1,5-2,0 mm), o raio mínimo prático é de 100-150 mm. Consulte-nos para geometrias específicas.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'facades', 'roof-renovation'],
  },
  en: {
    meta: {
      title: 'Curved Roof Waterproofing with EPDM Membrane | Membriko',
      description:
        'EPDM membrane for curved, vaulted and complex-shaped roofs. 400% elongation allows perfect adaptation to any geometry in Portugal.',
      keywords: [
        'curved roof waterproofing',
        'EPDM curved roof membrane',
        'vaulted roof waterproofing',
        'arched roof EPDM',
        'flexible roof membrane',
      ],
    },
    hero: {
      headline: 'Curved Roofs: EPDM Adapts to Any Shape',
      subtitle:
        'With 400% elongation, EPDM membrane perfectly wraps curved, vaulted and complex-geometry roofs without seams or wrinkles.',
      stats: [
        { value: '400%', label: 'Maximum elongation' },
        { value: '0 seams', label: 'On continuous surfaces' },
        { value: '-45°C/+130°C', label: 'Thermal range' },
        { value: '50+', label: 'Years of durability' },
      ],
    },
    problem: {
      title: 'The Curved Roof Challenge',
      description:
        'Curved and complex-shaped roofs are the greatest challenges in waterproofing. Most rigid or semi-rigid systems cannot adapt to tight curvatures, creating seams, folds and weak points that inevitably fail.',
      points: [
        'Bituminous roll systems cannot bend to small radii of curvature without cracking',
        'Multiple seams on curved roofs multiply potential infiltration points',
        'Rigid PVC requires thermoforming — an expensive process with inferior aesthetic results',
        'Maintenance and repair of curved roofs with traditional systems is extremely difficult',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Curved Roofs',
      description:
        'The extraordinary elasticity of EPDM (400% elongation) allows a single sheet to mould to any curvature without creating stress, folds or weak points. It is the only material that can cover a dome or vault in a single sheet without seams.',
      points: [
        'A single EPDM sheet covers large curved roofs without intermediate seams',
        'Adapts to radii of curvature as small as 50 mm without cracking',
        'Maintains elasticity and conformity throughout its service life — never hardens',
        'Available in widths up to 15 m for covering large-scale curved surfaces',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Seamless Coverage',
        description:
          'EPDM flexibility allows an entire curved roof to be covered in a single sheet, completely eliminating seams — the primary cause of failure in free-form roofs.',
      },
      {
        icon: 'Thermometer',
        title: 'Dimensional Stability',
        description:
          'EPDM has a low coefficient of thermal expansion and accommodates dimensional variations through its elasticity, without creating visible ripples.',
      },
      {
        icon: 'Palette',
        title: 'Aesthetic Versatility',
        description:
          'Available in standard black and special colours (white, grey, green). Can be painted or coated for aesthetic integration in architecturally striking buildings.',
      },
      {
        icon: 'Wrench',
        title: 'Simplified Installation',
        description:
          'The team installs EPDM in a single stretch-and-bond process, without thermoforming or factory-fabricated special parts.',
      },
      {
        icon: 'Clock',
        title: 'Minimal Maintenance',
        description:
          'Smooth, seamless surface is easy to clean and inspect. Localised repairs are simple with cold-bonded EPDM patches.',
      },
      {
        icon: 'Layers',
        title: 'Universal Compatibility',
        description:
          'Bonds to all substrates: concrete, steel, timber, rigid foam, expanded polystyrene. Ideal for metal or glued-laminated timber structure roofs.',
      },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm / 1.2 mm / 1.5 mm' },
      { label: 'Elongation at break', value: '≥ 400% (EN 12311-2)' },
      { label: 'Minimum radius of curvature', value: '50 mm (1.0 mm membrane)' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Tensile strength', value: '≥ 9 N/mm²' },
      { label: 'Maximum roll width', value: '15.25 m' },
      { label: 'UV resistance', value: 'Excellent — native' },
      { label: 'Product standard', value: 'EN 13956 / ASTM D4637' },
    ],
    installationSteps: [
      {
        step: 1,
        title: '3D Survey and Design',
        description:
          'Topographic or 3D survey of the curved roof. Surface development calculation for cut optimisation and seam minimisation.',
      },
      {
        step: 2,
        title: 'Substrate Preparation',
        description:
          'Cleaning and regularisation of substrate. Application of adhesion primer compatible with substrate material (concrete, metal, timber).',
      },
      {
        step: 3,
        title: 'Cutting and Pre-Forming',
        description:
          'Membrane cutting with calculated overwidth. Controlled pre-stretching to facilitate application on larger-radius curves.',
      },
      {
        step: 4,
        title: 'Application and Bonding',
        description:
          'Application of contact adhesive to substrate and membrane. Progressive positioning and pressing of sheet from centre to edges, eliminating trapped air.',
      },
      {
        step: 5,
        title: 'Seams and Flashings',
        description:
          'Welding of any necessary seams with certified adhesive. Finishing of all eaves, gutters and penetration points with mouldable EPDM accessories.',
      },
      {
        step: 6,
        title: 'Quality Control and Warranty',
        description:
          'Full visual inspection of entire surface. Adhesion testing at sampled points. Issue of warranty certificate.',
      },
    ],
    techniques: [
      {
        title: 'Full Bonding with Neoprene Adhesive',
        description:
          'Preferred method for curved roofs. Neoprene adhesive provides sufficient working window to conform the membrane to complex curvatures.',
        pros: [
          'Maximum adhesion to substrate — no uplift risk',
          'Allows controlled stretching during application',
          'Suitable for complex geometries and double curvature',
        ],
        cons: [
          'Requires absolutely clean and dry surface',
          'Limited working time after adhesive application',
          'Requires experienced team for complex geometries',
        ],
      },
      {
        title: 'Self-Adhesive System (Fleece-Backed EPDM)',
        description:
          'EPDM with non-woven fabric on the underside for more uniform contact adhesive reception. Ideal for applications on porous substrates (concrete, masonry).',
        pros: [
          'Better adhesive distribution on porous substrates',
          'Easier conforming on single-curvature geometries',
          'Faster installation than smooth EPDM',
        ],
        cons: [
          'Less flexible than smooth EPDM for double curvature',
          'Slightly higher weight',
          'Higher cost per m²',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Adaptation to curves',
        epdm: 'Excellent — 400% elongation',
        alternatives: [
          { name: 'PVC', value: 'Limited — requires thermoforming' },
          { name: 'Modified bitumen', value: 'Poor — cracking at curves' },
          { name: 'Liquid polyurea', value: 'Good — but VOC emissions' },
        ],
      },
      {
        feature: 'Seams on curved roof',
        epdm: 'Minimal or zero',
        alternatives: [
          { name: 'PVC', value: 'Multiple — each curve is a piece' },
          { name: 'Modified bitumen', value: 'Many — rigid material' },
          { name: 'Liquid polyurea', value: 'Zero — but variable thickness' },
        ],
      },
      {
        feature: 'Minimum radius of curvature',
        epdm: '50 mm',
        alternatives: [
          { name: 'PVC', value: '300 mm without heating' },
          { name: 'Modified bitumen', value: '500 mm (cracking below)' },
          { name: 'Liquid polyurea', value: 'N/A — liquid' },
        ],
      },
      {
        feature: 'Durability',
        epdm: '50+ years',
        alternatives: [
          { name: 'PVC', value: '25-30 years' },
          { name: 'Modified bitumen', value: '15-20 years' },
          { name: 'Liquid polyurea', value: '15-20 years' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Atlantic Coast',
        description:
          'Curved roofs in coastal environments are subject to strong winds. Bonded EPDM is the only solution that resists uplift even on aerodynamically complex roof shapes.',
      },
      {
        zone: 'South and Mediterranean',
        description:
          'Curved roofs accumulate less water than flat ones but reach high temperatures. EPDM maintains elasticity and adhesion even at 130°C on intensely sunny days.',
      },
      {
        zone: 'Continental Interior',
        description:
          'Extreme thermal variations continuously expand and contract the structure. Elastic EPDM accommodates these movements without detaching or cracking over decades.',
      },
    ],
    faqs: [
      {
        question: 'Can EPDM cover a dome without seams?',
        answer:
          'Yes, for domes up to 15 m in diameter a single EPDM sheet without seams is possible. For larger dimensions, seams are minimised and executed with certified adhesive that guarantees the same watertightness as the base membrane.',
      },
      {
        question: 'Can EPDM be applied to concrete barrel vaults and domes?',
        answer:
          'Absolutely. EPDM bonds excellently to concrete with appropriate primer. Its flexibility allows perfect conformation to any radius of curvature without risk of detachment from temperature changes.',
      },
      {
        question: 'What is the minimum radius of curvature supported by EPDM?',
        answer:
          'For 1.0 mm membrane, the minimum radius of curvature is approximately 50 mm. For greater thicknesses (1.5-2.0 mm), the practical minimum radius is 100-150 mm. Contact us for specific geometries.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'facades', 'roof-renovation'],
  },
}
