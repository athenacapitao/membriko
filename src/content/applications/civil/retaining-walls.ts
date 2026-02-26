import type { ApplicationData } from '../types'

export const retainingWalls: ApplicationData = {
  id: 'retaining-walls',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Muros de Contenção com EPDM | Membriko',
      description:
        'Membrana EPDM para impermeabilização e proteção de muros de contenção e muros de suporte. Resistente à pressão hidrostática e agressivos do solo. Garantia de 20 anos. Portugal.',
      keywords: [
        'impermeabilização muro contenção',
        'membrana muro suporte EPDM',
        'muro betão impermeável',
        'contenção solo EPDM',
        'muro jardim impermeabilização',
        'muro cantilever EPDM',
        'impermeabilização estrutura enterrada',
      ],
    },
    hero: {
      headline: 'Muros de Contenção Protegidos com Membrana EPDM',
      subtitle:
        'Impermeabilize e proteja muros de contenção e suporte contra humidade, sulfatos e carbonatação com EPDM de longa duração — a única solução que combina resistência à pressão hidrostática, elongação para fissuras e durabilidade em solo húmido.',
      stats: [
        { value: '50+', label: 'Anos de proteção comprovada' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '60 kPa', label: 'Resistência hidrostática (EN 1928)' },
        { value: '20 anos', label: 'Garantia Membriko' },
      ],
    },
    problem: {
      title: 'O Desafio dos Muros de Contenção',
      description:
        'Muros de contenção e suporte são expostos a pressão lateral do solo, água de infiltração, sulfatos e ciclos de expansão-retração. A humidade através dos muros causa problemas estéticos e estruturais que, quando se tornam visíveis, já implicam reparações muito dispendiosas.',
      points: [
        'Eflorescências e manchas de humidade em muros de betão e alvenaria não impermeabilizados',
        'Sulfatos do solo atacam progressivamente a argamassa e o betão, causando deterioração estrutural',
        'Pressão hidrostática durante períodos chuvosos pode desestabilizar muros sem drenagem adequada',
        'Juntas de construção abertas por retração diferencial criam caminhos preferenciais de infiltração',
        'Muros em zonas de jardim sofrem pressão adicional por raízes de árvores e arbustos',
        'Reparações tardias de muros com armaduras corroídas custam 5 a 12 vezes mais que a impermeabilização preventiva',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Muros de Contenção',
      description:
        'A membrana EPDM instalada na face do solo protege o muro da humidade e agressividade química. Com elongação de ≥ 400%, a membrana atravessa fissuras e juntas estruturais sem romper. Testada a 60 kPa (EN 1928), cobre a maioria das situações de muros residenciais e comerciais em Portugal.',
      points: [
        'Barreira impermeável na face do solo que protege o muro de humidade, sulfatos e ácidos húmicos',
        'Elongação de 400% que atravessa juntas de construção e fissuras sem comprometer a estanquidade',
        'Compatible com geocomposto drenante para alívio total da pressão hidrostática',
        'Resistência química a pH 3-12 — inerte a todos os solos encontrados em Portugal',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Proteção Contra Agressivos do Solo',
        description:
          'Barreira física que isola completamente o muro de sulfatos, cloretos e ácidos húmicos. O EPDM é quimicamente inerte a todos os solos portugueses — granito, argila, calcário ou aluvião — sem degradação ao longo de 50+ anos.',
      },
      {
        icon: 'Droplets',
        title: 'Controlo Total de Humidade',
        description:
          'Elimina manchas de humidade, eflorescências e calcário na face vista do muro. A membrana EPDM não absorve água nem sofre hidrólise — a absorção de água é inferior a 1% em massa mesmo após décadas de imersão.',
      },
      {
        icon: 'Layers',
        title: 'Sistema Completo com Drenagem',
        description:
          'O sistema EPDM + geocomposto drenante + dreno francês é o padrão para muros de contenção em zonas com precipitação significativa. A drenagem reduz a carga hidrostática de vários metros de coluna de água para menos de 0,5 m.',
      },
      {
        icon: 'Wrench',
        title: 'Atravessamento de Juntas e Fissuras',
        description:
          'A junta de construção base-fuste é o ponto crítico em muros cantilever. O EPDM com elongação de ≥ 400% atravessa aberturas de 15-20 mm com fator de segurança de ≥ 2,5 — ao contrário de betumes que fissuram nestes pontos.',
      },
      {
        icon: 'Euro',
        title: 'Proteção do Investimento',
        description:
          'Muros de contenção têm custo construtivo elevado. A proteção com EPDM garante que o investimento dura 50+ anos sem deterioração estrutural. Reparações de armaduras corroídas custam 5 a 12 vezes mais que a impermeabilização preventiva.',
      },
      {
        icon: 'Leaf',
        title: 'Resistência a Raízes e Compatibilidade FLL',
        description:
          'EPDM de 1,5 mm com certificação FLL adequado para muros em jardins com vegetação próxima. A rede tridimensional de ligações carbono-carbono da borracha vulcanizada não pode ser penetrada por extremidades radiculares.',
      },
    ],
    specs: [
      { label: 'Espessura (residencial/agrícola)', value: '1,5 mm (EN 1849-2)' },
      { label: 'Espessura (comercial/infraestrutura)', value: '2,0 mm (EN 1849-2)' },
      { label: 'Resistência à tração', value: '≥ 9 N/mm² (EN 12311-2)' },
      { label: 'Elongação na rutura', value: '≥ 400% (EN 12311-2)' },
      { label: 'Estanquidade hidrostática', value: 'Aprovado a 60 kPa — 6 m coluna de água (EN 1928)' },
      { label: 'Resistência ao rasgamento', value: '≥ 10 N/mm (EN 12310-2)' },
      { label: 'Resistência química (pH)', value: 'Excelente — pH 3 a 12, sulfatos, cloretos, ácidos húmicos' },
      { label: 'Norma de produto', value: 'EN 13956 / EN 13967' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Avaliação Geotécnica e Diagnóstico',
        description:
          'Visita técnica gratuita. Avaliação do tipo e estado do muro (gravidade, cantilever, contenção urbana), indicadores do nível freático, identificação de fissuras e eflorescências. Análise de documentação de projeto quando disponível.',
      },
      {
        step: 2,
        title: 'Projeto de Impermeabilização',
        description:
          'Definição da espessura de EPDM (1,5 ou 2,0 mm), sistema drenante (geocomposto, granular ou combinado), detalhes de pontos singulares (juntas, cantos, penetrações, ancoragens) e plano de corte para minimizar emendas.',
      },
      {
        step: 3,
        title: 'Preparação da Superfície',
        description:
          'Limpeza e desengorduramento do paramento, remoção de eflorescências e tintas descoladas. Reparação de fissuras com argamassa flexível — fissuras ativas com poliuretano expansivo. Regularização de arestas vivas e saliências acima de 5 mm.',
      },
      {
        step: 4,
        title: 'Instalação da Membrana EPDM',
        description:
          'Aplicação por adesão total com adesivo de base aquosa. Instalação da base para o topo. Cantos internos e externos com acessórios EPDM pré-moldados. Emendas com sobreposição mínima de 50 mm e fita QuickSeam. Teste individual de cada emenda.',
      },
      {
        step: 5,
        title: 'Sistema de Drenagem Integrado',
        description:
          'Instalação do geocomposto drenante sobre o EPDM, cobrindo toda a face enterrada desde o dreno de base até ao coroamento. Perfil de retenção no topo para impedir entrada de finos. Conexão ao dreno francês perimetral com saída para câmara de visita.',
      },
      {
        step: 6,
        title: 'Pontos Singulares e Remate',
        description:
          'Tratamento de todos os atravessamentos de tubagens, ancoragens e juntas de dilatação com acessórios EPDM pré-moldados ou mangas de compressão mecânica. Remate de coroamento com perfil metálico selado com mastique de poliuretano.',
      },
      {
        step: 7,
        title: 'Inspeção, Aterro e Garantia',
        description:
          'Inspeção visual sistemática e ensaio de faísca elétrica em emendas e pontos singulares. Registo fotográfico as-built. Aterro compactado em camadas de 300 mm sem equipamento pesado a menos de 2 m do paramento nas primeiras três camadas. Emissão de garantia de 20 anos.',
      },
    ],
    techniques: [
      {
        title: 'Sistema EPDM + Geocomposto Drenante (Standard)',
        description:
          'Método padrão para muros de contenção em zonas húmidas. EPDM impermeabiliza o muro e o geocomposto drenante sobre ele alvia a pressão hidrostática, conduzindo a água para dreno francês de fundo. A Membriko fornece o sistema completo — membrana, drenante, dreno e garantia.',
        pros: [
          'Dupla função: impermeabilização + alívio de pressão hidrostática',
          'Reduz pressão hidrostática de metros de coluna de água para menos de 0,5 m',
          'Sistema completo para qualquer tipo de solo, incluindo argilas expansivas',
          'Geocomposto protege mecanicamente a membrana durante o aterro',
        ],
        cons: [
          'Instalação em duas camadas — ligeiramente mais cara que solução simples',
          'Requer dreno de fundo funcional para evacuação da água captada',
        ],
      },
      {
        title: 'EPDM Colado Direto (Muros Pouco Enterrados)',
        description:
          'Para muros de jardim ou suporte pouco enterrados sem pressão hidrostática significativa, EPDM colado diretamente ao betão ou alvenaria sem geocomposto drenante. Adequado para muros até 1 m de solo em zonas com boa drenagem natural.',
        pros: [
          'Instalação mais rápida e económica em obras simples',
          'Adequado para muros de jardim e socalcos agrícolas até 1 m de solo',
          'Sem necessidade de dreno de fundo em solos com boa permeabilidade',
        ],
        cons: [
          'Não adequado para muros com pressão hidrostática significativa',
          'Requer boa drenagem natural do solo — não adequado para argilas',
        ],
      },
      {
        title: 'Sistema Exterior para Muros Cantilever e Cortinas de Estacas',
        description:
          'Para muros cantilever de betão armado e cortinas de estacas em ambiente urbano. EPDM 2,0 mm em adesão total com mangas de penetração nas ancoragens. Geocomposto de alta capacidade para solos urbanos com pressão artesiana.',
        pros: [
          'Sistema positivo — bloqueia a água antes de atingir o betão estrutural',
          'Mangas EPDM pré-moldadas nas ancoragens garantem continuidade do sistema',
          'Especificado para muros em Zona Sísmica A com movimentos dinâmicos adicionais',
        ],
        cons: [
          'Requer acesso exterior para instalação — não aplicável com edifícios adjacentes',
          'Maior complexidade nas ancoragens em cortinas de estacas',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Vida útil',
        epdm: '50+ anos',
        alternatives: [
          { name: 'SBS betuminoso', value: '15-25 anos' },
          { name: 'Geomembrana HDPE', value: '30-50 anos' },
          { name: 'Revestimento cimentício cristalino', value: '20-30 anos (sem fissuras)' },
        ],
      },
      {
        feature: 'Elongação na rutura (atravessamento de juntas)',
        epdm: '≥ 400%',
        alternatives: [
          { name: 'SBS betuminoso', value: '30-150%' },
          { name: 'Geomembrana HDPE', value: '12-18% (cedência)' },
          { name: 'Revestimento cimentício cristalino', value: '0% (rígido)' },
        ],
      },
      {
        feature: 'Resistência a sulfatos do solo',
        epdm: 'Excelente — inerte a pH 3-12',
        alternatives: [
          { name: 'SBS betuminoso', value: 'Moderada' },
          { name: 'Geomembrana HDPE', value: 'Boa' },
          { name: 'Revestimento cimentício cristalino', value: 'Limitada em solos ácidos' },
        ],
      },
      {
        feature: 'Compatibilidade com alvenaria irregular',
        epdm: 'Excelente — conforma-se à superfície',
        alternatives: [
          { name: 'SBS betuminoso', value: 'Boa' },
          { name: 'Geomembrana HDPE', value: 'Limitada — requer superfície regular' },
          { name: 'Revestimento cimentício cristalino', value: 'Não adequado para alvenaria' },
        ],
      },
      {
        feature: 'Método de instalação',
        epdm: 'Adesivo a frio — sem risco de incêndio',
        alternatives: [
          { name: 'SBS betuminoso', value: 'Maçarico — risco de incêndio em espaços confinados' },
          { name: 'Geomembrana HDPE', value: 'Soldadura térmica — condições controladas' },
          { name: 'Revestimento cimentício cristalino', value: 'Pincel/projeção sobre betão limpo' },
        ],
      },
      {
        feature: 'Índice de custo a 30 anos',
        epdm: '100',
        alternatives: [
          { name: 'SBS betuminoso', value: '175 (reparações e substituição)' },
          { name: 'Geomembrana HDPE', value: '120' },
          { name: 'Revestimento cimentício cristalino', value: '160 (remediação de fissuras)' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Norte Húmido (Minho, Trás-os-Montes)',
        description:
          'Precipitação elevada cria pressão hidrostática permanente em muros de contenção. Solos graníticos com areia abrasiva exigem geocomposto drenante com resistência ao punçoamento verificada (mínimo 1,5 kN por EN ISO 12236). O sistema EPDM + geocomposto drenante é obrigatório nestas zonas.',
      },
      {
        zone: 'Alentejo e Ribatejo (Argilas Expansivas)',
        description:
          'Solos argilosos Vertissolo incham significativamente quando saturados e contraem quando secos. Este ciclo impõe movimentos adicionais nos muros que sistemas rígidos não acomodam. O EPDM de ≥ 400% de elongação é a única solução que atravessa as juntas sem fissurar.',
      },
      {
        zone: 'Algarve (Calcários, Carso e Zona Sísmica A)',
        description:
          'O Algarve tem a maior perigosidade sísmica do território nacional (Zona Sísmica A, EC8). Os incrementos dinâmicos de pressão das terras podem atingir 30-50% acima dos valores estáticos. A Membriko especifica EPDM de 2,0 mm para todos os muros acima de 2 m de altura no Algarve.',
      },
      {
        zone: 'Lisboa e Porto (Ambiente Urbano, Solos de Aterro)',
        description:
          'Cidades construídas sobre aluviões do Tejo e Douro com nível freático elevado — por vezes artesiano nas zonas mais baixas. A Membriko especifica EPDM 2,0 mm em adesão total, geocomposto de alta capacidade (mínimo 1 l/s·m) e detalhe reforçado em todas as juntas de construção.',
      },
      {
        zone: 'Zonas Costeiras (Ambiente Marinho)',
        description:
          'Sal e cloretos do ambiente marinho atacam betão sem proteção. O EPDM como barreira exterior isola completamente o betão do ambiente corrosivo — quimicamente inerte ao cloreto de sódio e ao ambiente salino costeiro.',
      },
    ],
    faqs: [
      {
        question: 'Qual membrana é melhor para um muro de contenção — EPDM ou betume?',
        answer:
          'Para muros com juntas de construção, potencial de movimento ou substrato de alvenaria, o EPDM é tecnicamente superior. O elongamento de ≥ 400% do EPDM (face a 30-150% do SBS betuminoso) é determinante quando as juntas do muro abrem sob variações de temperatura e humidade. A instalação a frio elimina o risco de incêndio em espaços confinados. A vida útil de 50+ anos compara favoravelmente com 15-25 anos das membranas betuminosas.',
      },
      {
        question: 'É necessário colocar sistema de drenagem atrás da membrana EPDM?',
        answer:
          'Sim, sempre que o muro está sujeito a pressão hidrostática. A drenagem é a primeira linha de defesa — um muro com geocomposto drenante corretamente instalado pode reduzir a carga hidrostática de vários metros de coluna de água para menos de 0,5 m. A Membriko especifica e instala o sistema drenante integrado com a membrana — não são dois trabalhos separados.',
      },
      {
        question: 'A membrana EPDM aguenta a pressão da terra e da água atrás do muro?',
        answer:
          'A membrana não é um elemento estrutural — é uma barreira hidráulica. A pressão das terras é resistida pela estrutura do muro. O EPDM resiste à pressão hidrostática da água até 60 kPa (equivalente a 6 m de coluna de água, EN 1928) e atravessa fissuras e juntas estruturais com o elongamento de ≥ 400%.',
      },
      {
        question: 'Posso impermeabilizar um muro de contenção existente fissurado com EPDM?',
        answer:
          'Sim. O EPDM é ideal para a remediação de muros fissurados. As fissuras são preenchidas com argamassa flexível antes da aplicação. Se novas fissuras se desenvolverem após a impermeabilização, o EPDM acomoda o movimento sem romper — ao contrário de sistemas rígidos que fissuram novamente no mesmo ponto.',
      },
      {
        question: 'O EPDM pode ser instalado num muro de pedra natural irregular?',
        answer:
          'Sim. A flexibilidade de ≥ 400% e a instalação por adesivo a frio permitem à membrana conformar-se à superfície irregular de alvenaria de pedra. Protuberâncias superiores a 10 mm são esmeriladas ou regularizadas com argamassa; arestas vivas são arredondadas. Esta versatilidade não existe com sistemas HDPE ou cimentícios rígidos.',
      },
      {
        question: 'Qual a espessura de EPDM recomendada para muros de contenção?',
        answer:
          'A Membriko especifica 1,5 mm para muros residenciais e agrícolas até 3 m de altura. Para estruturas comerciais, muros acima de 3 m, muros em Zona Sísmica A (sul de Portugal) e muros com nível freático acima de 3 m, especifica 2,0 mm. Para pressões hidrostáticas superiores a 6 m de coluna de água, é realizada análise de engenharia específica.',
      },
      {
        question: 'Como se repara um muro de contenção com EPDM danificado após o aterro?',
        answer:
          'Danos pontuais no remate de coroamento (zona exposta) são reparados com patch de EPDM e fita QuickSeam sem escavação. Para danos na membrana enterrada, a reparação implica escavação localizada do aterro para acesso. A Membriko fornece um kit de reparação de emergência com cada obra entregue.',
      },
      {
        question: 'Qual é a garantia da Membriko para impermeabilização de muros de contenção?',
        answer:
          'A Membriko emite garantia de instalação de 20 anos para toda a impermeabilização de muros de contenção. Esta garantia complementa a garantia de produto do fabricante e o prazo legal de garantia de 5 anos previsto no Código Civil português (Artigo 1225.º). O certificado de garantia é entregue com registo fotográfico as-built e relatório de instalação.',
      },
    ],
    relatedSlugs: ['foundations', 'basements', 'underground-parking'],
  },
  en: {
    meta: {
      title: 'Retaining Wall Waterproofing with EPDM Membrane | Membriko',
      description:
        'EPDM membrane for waterproofing and protecting retaining and support walls. Resistant to hydrostatic pressure, soil sulphates and root penetration. 20-year guarantee. Portugal.',
      keywords: [
        'retaining wall waterproofing',
        'EPDM support wall membrane',
        'concrete wall waterproofing',
        'soil retention EPDM',
        'garden wall waterproofing',
        'cantilever wall EPDM',
        'buried structure waterproofing',
      ],
    },
    hero: {
      headline: 'Protected Retaining Walls with EPDM Membrane',
      subtitle:
        'Waterproof and protect retaining and support walls against moisture, sulphates and carbonation with long-lasting EPDM — the only solution combining hydrostatic pressure resistance, crack-bridging elongation, and durability in permanent contact with wet soil.',
      stats: [
        { value: '50+', label: 'Years of proven protection' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '60 kPa', label: 'Hydrostatic resistance (EN 1928)' },
        { value: '20 years', label: 'Membriko guarantee' },
      ],
    },
    problem: {
      title: 'The Retaining Wall Challenge',
      description:
        'Retaining and support walls are exposed to lateral soil pressure, infiltration water, sulphates and expansion-retraction cycles. Moisture through walls causes aesthetic and structural problems that, by the time they become visible, already require expensive remediation.',
      points: [
        'Efflorescence and moisture stains on non-waterproofed concrete and masonry walls',
        'Soil sulphates progressively attack mortar and wall concrete, causing structural deterioration',
        'Hydrostatic pressure during rainy periods can destabilise walls without adequate drainage',
        'Construction joints opening through differential shrinkage create preferential water infiltration paths',
        'Walls in garden zones suffer additional pressure from tree and shrub roots',
        'Late remediation of walls with corroded reinforcement costs 5 to 12 times more than preventive waterproofing',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Retaining Walls',
      description:
        'EPDM membrane installed on the soil face protects the wall from moisture and soil chemical aggressiveness. With ≥ 400% elongation, the membrane bridges structural cracks and joints without failure. Tested at 60 kPa (EN 1928), it covers the vast majority of residential and commercial retaining wall situations in Portugal.',
      points: [
        'Impermeable barrier on soil face protecting wall from moisture, sulphates and humic acids',
        '400% elongation that bridges construction joints and cracks without compromising watertightness',
        'Compatible with geocomposite drainage board for complete hydrostatic pressure relief',
        'Chemical resistance to pH 3-12 — inert to all soil types found in Portugal',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Soil Aggressive Resistance',
        description:
          'Physical barrier completely isolating wall from sulphates, chlorides and humic acids. EPDM is chemically inert to all Portuguese soil environments — granite, clay, limestone or alluvium — without degradation over 50+ years.',
      },
      {
        icon: 'Droplets',
        title: 'Complete Moisture Control',
        description:
          'Eliminates moisture stains, efflorescence and limescale on the visible wall face. EPDM membrane does not absorb water or undergo hydrolysis — water absorption is below 1% by mass even after decades of immersion.',
      },
      {
        icon: 'Layers',
        title: 'Complete System with Drainage',
        description:
          'The EPDM + geocomposite drainage board + French drain system is the standard for retaining walls in high-rainfall zones. Drainage reduces hydrostatic loading from several metres of water head to less than 0.5 m.',
      },
      {
        icon: 'Wrench',
        title: 'Construction Joint and Crack Bridging',
        description:
          'The base-stem construction joint is the critical point in cantilever walls. EPDM with ≥ 400% elongation bridges 15-20 mm openings with a safety factor of ≥ 2.5 — unlike bitumen systems that crack at these points.',
      },
      {
        icon: 'Euro',
        title: 'Investment Protection',
        description:
          'Retaining walls have high construction costs. EPDM protection ensures the investment lasts 50+ years without structural deterioration. Repairs to corroded reinforcement cost 5 to 12 times more than preventive waterproofing.',
      },
      {
        icon: 'Leaf',
        title: 'Root Resistance and FLL Compatibility',
        description:
          '1.5 mm EPDM with FLL certification suitable for garden-zone walls with nearby vegetation. The three-dimensional carbon-carbon bond network of vulcanised rubber cannot be penetrated by root tips.',
      },
    ],
    specs: [
      { label: 'Thickness (residential/agricultural)', value: '1.5 mm (EN 1849-2)' },
      { label: 'Thickness (commercial/infrastructure)', value: '2.0 mm (EN 1849-2)' },
      { label: 'Tensile strength', value: '≥ 9 N/mm² (EN 12311-2)' },
      { label: 'Elongation at break', value: '≥ 400% (EN 12311-2)' },
      { label: 'Hydrostatic watertightness', value: 'Pass at 60 kPa — 6 m water head (EN 1928)' },
      { label: 'Tear resistance', value: '≥ 10 N/mm (EN 12310-2)' },
      { label: 'Chemical resistance (pH)', value: 'Excellent — pH 3 to 12, sulphates, chlorides, humic acids' },
      { label: 'Product standard', value: 'EN 13956 / EN 13967' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Geotechnical Assessment and Diagnosis',
        description:
          'Free technical site visit. Assessment of wall type and condition (gravity, cantilever, urban sheet pile), groundwater indicators, crack and efflorescence identification. Review of project documentation where available.',
      },
      {
        step: 2,
        title: 'Waterproofing Design',
        description:
          'EPDM thickness selection (1.5 or 2.0 mm), drainage system type (geocomposite, granular or combined), singular point details (joints, corners, penetrations, anchors) and cut plan to minimise field seams.',
      },
      {
        step: 3,
        title: 'Surface Preparation',
        description:
          'Cleaning and degreasing of wall face, removal of efflorescence and flaking paint. Crack repair with flexible repair mortar — active cracks with expansive polyurethane. Grinding of sharp edges and protrusions above 5 mm.',
      },
      {
        step: 4,
        title: 'EPDM Membrane Installation',
        description:
          'Full adhesion with water-based neoprene adhesive. Installation from base to coping. Internal and external corners with pre-moulded EPDM accessories. Seams with minimum 50 mm overlap and QuickSeam tape. Individual testing of each seam.',
      },
      {
        step: 5,
        title: 'Integrated Drainage System',
        description:
          'Geocomposite drainage board installation over EPDM, covering the full retained face from base drain to coping. Retention profile at top to prevent soil fines entry. Connection to perimeter French drain pipe with outfall to inspection chamber.',
      },
      {
        step: 6,
        title: 'Singular Points and Coping Termination',
        description:
          'Treatment of all pipe penetrations, anchor heads and expansion joints with pre-moulded EPDM accessories or flanged mechanical compression sleeves. Coping termination with metal termination bar sealed with polyurethane sealant.',
      },
      {
        step: 7,
        title: 'Inspection, Backfill and Warranty',
        description:
          'Systematic visual inspection and electrical spark testing at seams and singular points. Photographic as-built record. Backfill in 300 mm compacted lifts without heavy plant within 2 m of wall face for first three lifts. Issue of 20-year warranty.',
      },
    ],
    techniques: [
      {
        title: 'EPDM + Geocomposite Drainage Board (Standard)',
        description:
          'Standard method for retaining walls in wet zones. EPDM waterproofs the wall and the geocomposite drainage board over it relieves hydrostatic pressure, directing water to the base French drain. Membriko supplies the complete system — membrane, drainage board, drain pipe and warranty.',
        pros: [
          'Dual function: waterproofing + hydrostatic pressure relief',
          'Reduces hydrostatic loading from metres of water head to less than 0.5 m',
          'Complete system for any soil type, including expansive clays',
          'Geocomposite mechanically protects membrane during backfilling',
        ],
        cons: [
          'Two-layer installation — slightly more expensive than simple solution',
          'Requires functional base drain for evacuation of captured water',
        ],
      },
      {
        title: 'Direct Bonded EPDM (Shallow-Buried Walls)',
        description:
          'For garden or support walls with minimal buried depth and no significant hydrostatic pressure, EPDM bonded directly to concrete or masonry without drainage board. Suitable for walls up to 1 m of soil depth in zones with good natural drainage.',
        pros: [
          'Faster and more economical installation for simple projects',
          'Suitable for garden walls and agricultural terracing up to 1 m of soil',
          'No base drain required in permeable soils',
        ],
        cons: [
          'Not suitable for walls with significant hydrostatic pressure',
          'Requires good natural soil drainage — not suitable for clays',
        ],
      },
      {
        title: 'External System for Cantilever Walls and Sheet Pile Walls',
        description:
          'For reinforced concrete cantilever walls and urban sheet pile walls. EPDM 2.0 mm in full adhesion with penetration sleeves at anchor heads. High-capacity geocomposite for urban soils with artesian pressure conditions.',
        pros: [
          'Positive-side system — blocks water before it reaches structural concrete',
          'Pre-moulded EPDM sleeves at anchor heads ensure system continuity',
          'Specified for walls in Seismic Zone A with dynamic pressure increments',
        ],
        cons: [
          'Requires exterior access for installation — not applicable adjacent to buildings',
          'Greater complexity at anchor penetrations in sheet pile walls',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Service life',
        epdm: '50+ years',
        alternatives: [
          { name: 'SBS modified bitumen', value: '15-25 years' },
          { name: 'HDPE geomembrane', value: '30-50 years' },
          { name: 'Cementitious crystalline', value: '20-30 years (if crack-free)' },
        ],
      },
      {
        feature: 'Elongation at break (joint bridging)',
        epdm: '≥ 400%',
        alternatives: [
          { name: 'SBS modified bitumen', value: '30-150%' },
          { name: 'HDPE geomembrane', value: '12-18% (yield strain)' },
          { name: 'Cementitious crystalline', value: '0% (rigid)' },
        ],
      },
      {
        feature: 'Sulphate resistance',
        epdm: 'Excellent — inert pH 3-12',
        alternatives: [
          { name: 'SBS modified bitumen', value: 'Moderate' },
          { name: 'HDPE geomembrane', value: 'Good' },
          { name: 'Cementitious crystalline', value: 'Limited in acid soils' },
        ],
      },
      {
        feature: 'Compatibility with irregular masonry',
        epdm: 'Excellent — conforms to surface',
        alternatives: [
          { name: 'SBS modified bitumen', value: 'Good' },
          { name: 'HDPE geomembrane', value: 'Limited — requires regular surface' },
          { name: 'Cementitious crystalline', value: 'Not suitable for masonry' },
        ],
      },
      {
        feature: 'Installation method',
        epdm: 'Cold adhesive — no fire risk',
        alternatives: [
          { name: 'SBS modified bitumen', value: 'Torch — fire risk in confined spaces' },
          { name: 'HDPE geomembrane', value: 'Thermal welding — controlled conditions' },
          { name: 'Cementitious crystalline', value: 'Brush/spray on clean concrete only' },
        ],
      },
      {
        feature: '30-year cost index',
        epdm: '100',
        alternatives: [
          { name: 'SBS modified bitumen', value: '175 (repairs and replacement)' },
          { name: 'HDPE geomembrane', value: '120' },
          { name: 'Cementitious crystalline', value: '160 (crack remediation)' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Humid North (Minho, Trás-os-Montes)',
        description:
          'High rainfall creates permanent hydrostatic pressure on retaining walls. Granitic soils with abrasive sand require geocomposite drainage board with verified puncture resistance (minimum 1.5 kN per EN ISO 12236). EPDM + drainage board system is mandatory in these zones.',
      },
      {
        zone: 'Alentejo and Ribatejo (Expansive Clays)',
        description:
          'Vertisol clay soils swell significantly when saturated and shrink when dry. This cycle imposes additional movements on retaining walls that rigid systems cannot accommodate. EPDM at ≥ 400% elongation is the only solution that bridges joints without cracking.',
      },
      {
        zone: 'Algarve (Limestone, Karst and Seismic Zone A)',
        description:
          'The Algarve has the highest seismic hazard on Portuguese territory (Seismic Zone A, EC8). Dynamic earth pressure increments during seismic events can reach 30-50% above static values. Membriko specifies 2.0 mm EPDM for all walls above 2 m height in the Algarve.',
      },
      {
        zone: 'Lisbon and Porto (Urban Environment, Fill Soils)',
        description:
          'Cities built on Tagus and Douro alluvium with high water tables — sometimes artesian in the lowest zones. Membriko specifies 2.0 mm EPDM in full adhesion, high-capacity geocomposite (minimum 1 l/s·m) and reinforced detail at all construction joints.',
      },
      {
        zone: 'Coastal Zones (Marine Environment)',
        description:
          'Salt and chlorides from marine environments attack unprotected concrete. EPDM as exterior barrier completely isolates concrete from the corrosive environment — chemically inert to sodium chloride and the saline coastal environment.',
      },
    ],
    faqs: [
      {
        question: 'Which membrane is better for a retaining wall — EPDM or bitumen?',
        answer:
          'For walls with construction joints, movement potential or masonry substrates, EPDM is technically superior in every relevant category. The ≥ 400% elongation of EPDM (compared to 30-150% for SBS bitumen) is decisive when wall joints open under thermal and moisture cycling. Cold adhesive installation eliminates fire risk in confined spaces. The 50+ year service life compares favourably with 15-25 years for bituminous systems.',
      },
      {
        question: 'Does drainage need to be installed behind the EPDM membrane?',
        answer:
          'Yes, whenever the wall is subject to hydrostatic pressure. Drainage is the first line of defence — a wall with correctly installed geocomposite drainage board can reduce hydrostatic loading from several metres of water head to less than 0.5 m. Membriko specifies and installs the drainage system as an integrated part of the waterproofing package.',
      },
      {
        question: 'Does the EPDM membrane withstand earth pressure from the backfill?',
        answer:
          'The membrane is not a structural element — it is a hydraulic barrier. Earth pressure is resisted by the wall structure. The EPDM membrane resists hydrostatic water pressure up to 60 kPa (equivalent to a 6 m water head, per EN 1928) and bridges structural cracks and joints through its ≥ 400% elongation capacity.',
      },
      {
        question: 'Can EPDM waterproof an existing cracked retaining wall?',
        answer:
          'Yes. EPDM is ideal for remediation of cracked or deteriorated retaining walls. Cracks are filled with flexible repair mortar before membrane application. If new cracks develop at the same location after waterproofing, the EPDM accommodates the movement without tearing — unlike rigid cementitious or aged bituminous systems that crack again at the same point.',
      },
      {
        question: 'Can EPDM be installed on an irregular stone masonry wall?',
        answer:
          'Yes. EPDM\'s ≥ 400% elongation and cold-adhesive installation method allow the membrane to conform to irregular stone masonry surfaces. Protrusions above 10 mm are ground flush or mortared in; sharp edges are rounded; the membrane is pressed into surface depressions during adhesive application. This adaptability is not available with rigid HDPE or cementitious systems.',
      },
      {
        question: 'What EPDM thickness does Membriko recommend for retaining walls?',
        answer:
          'Membriko specifies 1.5 mm for residential and agricultural retaining walls up to 3 m height. For commercial structures, walls above 3 m, walls in seismic zone A (southern Portugal) and walls subject to a water table more than 3 m above foundation level, the specification is 2.0 mm. For hydrostatic pressure heads above 6 m, a specific engineering analysis is conducted.',
      },
      {
        question: 'How is damaged EPDM on a buried retaining wall repaired?',
        answer:
          'Localised damage at the exposed coping zone is repaired with EPDM patch and QuickSeam tape without excavation. For damage to the buried membrane, repair requires localised excavation of the backfill to access the membrane. Membriko supplies an emergency repair kit with every completed project.',
      },
      {
        question: 'What warranty does Membriko provide for retaining wall waterproofing?',
        answer:
          'Membriko issues a 20-year installation warranty on all retaining wall waterproofing work. This warranty supplements the manufacturer\'s product warranty and the 5-year statutory defects liability period under the Portuguese Civil Code (Art. 1225). The warranty certificate is delivered with a photographic as-built record and an installation report.',
      },
    ],
    relatedSlugs: ['foundations', 'basements', 'underground-parking'],
  },
}
