import type { ApplicationData } from '../types'

export const retainingWalls: ApplicationData = {
  id: 'retaining-walls',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Muros de Contenção com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização e proteção de muros de contenção e muros de suporte. Resistente à pressão lateral do solo. Portugal.',
      keywords: ['impermeabilização muro contenção', 'membrana muro suporte EPDM', 'muro betão impermeável', 'contenção solo EPDM', 'muro jardim impermeabilização'],
    },
    hero: {
      headline: 'Muros de Contenção Protegidos com Membrana EPDM',
      subtitle: 'Impermeabilize e proteja muros de contenção e suporte contra humidade, sulfatos e carbonatação com EPDM de longa duração.',
      stats: [
        { value: '50+', label: 'Anos de proteção' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '100%', label: 'Barreira contra humidade' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Muros de Contenção',
      description: 'Muros de contenção e suporte são expostos a pressão lateral do solo, água de infiltração e ciclos de expansão-retração. A humidade através dos muros causa problemas estéticos e estruturais no lado seco.',
      points: [
        'Eflorescências e manchas de humidade em muros de betão e alvenaria não impermeabilizados',
        'Sulfatos do solo atacam progressivamente a argamassa e o betão do muro',
        'Pressão hidrostática durante períodos chuvosos pode desestabilizar muros não drenados',
        'Muros em zonas de jardim sofrem pressão adicional por raízes de árvores e arbustos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Muros de Contenção',
      description: 'A membrana EPDM instalada na face do solo protege o muro da humidade e agressividade química do solo. A sua elasticidade acomoda movimentos do muro sem criar pontos de falha.',
      points: [
        'Barreira impermeável na face do solo que protege o muro de humidade e sulfatos',
        'Elasticidade que acomoda movimentos diferenciais entre muro e solo',
        'Compatível com sistemas de drenagem perimetral para alívio de pressão hidrostática',
        'Proteção na face seca do muro com EPDM colado evita entrada de humidade ascensional',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Proteção Contra Agressivos do Solo', description: 'Barreira física que isola completamente o muro de sulfatos, cloretos e ácidos húmicos, prolongando a vida útil estrutural.' },
      { icon: 'Droplets', title: 'Controlo de Humidade', description: 'Elimina manchas de humidade, eflorescências e calcário na face vista do muro, mantendo aspeto estético limpo por décadas.' },
      { icon: 'Layers', title: 'Compatível com Drenagem', description: 'O sistema EPDM + tela drenante é o standard para muros de contenção em zonas com precipitação significativa.' },
      { icon: 'Euro', title: 'Proteção do Investimento', description: 'Muros de contenção têm custo construtivo elevado. A proteção com EPDM garante que o investimento dura 50+ anos sem deterioração.' },
      { icon: 'Wrench', title: 'Instalação Rápida', description: 'Instalação antes do aterro ou em muros acessíveis por escavação. Processo rápido e limpo sem torcha.' },
      { icon: 'Leaf', title: 'Resistência a Raízes', description: 'EPDM de 1,5 mm com certificação FLL é adequado para muros em jardins com vegetação próxima.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm / 1,5 mm' },
      { label: 'Resistência a sulfatos', value: 'Excelente' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Resistência a pH 3-12', value: 'Excelente' },
      { label: 'Compatibilidade com tela drenante', value: 'Sim — instalação combinada' },
      { label: 'Resistência a raízes (FLL)', value: 'Sim (1,5 mm)' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Inspeção do Muro', description: 'Avaliação do estado do muro, identificação de fissuras, verificação de drenagem existente. Definição do sistema de impermeabilização + drenagem.' },
      { step: 2, title: 'Preparação', description: 'Limpeza do muro, tratamento de fissuras, arredondamento de cantos vivos. Instalação de primer de adesão se necessário.' },
      { step: 3, title: 'Instalação do EPDM', description: 'Colocação da membrana EPDM na face do solo do muro, com sobreposição de 150 mm nas emendas. Ancoragem no topo com perfil metálico.' },
      { step: 4, title: 'Tela Drenante', description: 'Instalação de tela drenante sobre o EPDM para alívio de pressão hidrostática. A tela encaminha a água para o dreno de fundo.' },
      { step: 5, title: 'Dreno de Fundo', description: 'Instalação de tubo de drenagem perforado envolto em brita e geotêxtil na base do muro. Ligação a ponto de descarga.' },
      { step: 6, title: 'Aterro e Garantia', description: 'Aterro compactado em camadas. Proteção mecânica da membrana durante aterro. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'Sistema EPDM + Tela Drenante',
        description: 'Método standard para muros de contenção. EPDM impermeabiliza o muro e a tela drenante sobre ele alvia a pressão hidrostática, conduzindo a água para dreno de fundo.',
        pros: ['Dupla função: impermeabilização + drenagem', 'Reduz pressão hidrostática no muro', 'Sistema completo para qualquer tipo de solo'],
        cons: ['Instalação em duas camadas — ligeiramente mais cara', 'Requer dreno de fundo funcional'],
      },
      {
        title: 'EPDM Colado Direto (Muros Pouco Enterrados)',
        description: 'Para muros de jardim ou suporte pouco enterrados sem pressão hidrostática significativa, EPDM colado diretamente ao betão sem tela drenante.',
        pros: ['Instalação mais rápida e económica', 'Adequado para muros de jardim até 1 m de solo', 'Sem necessidade de dreno de fundo'],
        cons: ['Não adequado para muros com pressão hidrostática significativa', 'Requer boa drenagem natural do solo'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Tela betuminosa', value: '15-20 anos' }, { name: 'Revestimento cimentício', value: '10-20 anos' }] },
      { feature: 'Resistência a sulfatos', epdm: 'Excelente', alternatives: [{ name: 'Tela betuminosa', value: 'Moderada' }, { name: 'Revestimento cimentício', value: 'Moderada' }] },
    ],
    climate: [
      { zone: 'Norte Húmido', description: 'Precipitação elevada cria pressão hidrostática permanente em muros de contenção. O sistema EPDM + tela drenante é obrigatório nestas zonas.' },
      { zone: 'Sul (Solos Expansivos)', description: 'Solos argilosos do sul criam forças laterais variáveis nos muros. A elasticidade do EPDM é fundamental para acompanhar estes movimentos sem fissurar.' },
      { zone: 'Zonas Costeiras', description: 'Sal e cloretos do ambiente marinho atacam betão sem proteção. O EPDM como barreira exterior isola completamente o betão do ambiente corrosivo.' },
    ],
    faqs: [
      { question: 'O EPDM pode ser instalado em muros de pedra natural?', answer: 'Sim. O EPDM adere a pedra natural com primer adequado. Para muros de pedra irregular, é necessário regularização prévia das juntas para criar superfície minimamente uniforme para aplicação da membrana.' },
      { question: 'Qual a diferença entre impermeabilizar o muro e drenar o solo atrás do muro?', answer: 'São ações complementares: o EPDM impermeabiliza o muro (protege o betão e impede passagem de humidade) e a tela drenante + dreno de fundo elimina a água do solo atrás do muro (reduz pressão). Um sistema completo faz as duas coisas.' },
    ],
    relatedSlugs: ['foundations', 'basements', 'underground-parking'],
  },
  en: {
    meta: {
      title: 'Retaining Wall Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing and protecting retaining and support walls. Resistant to lateral soil pressure. Portugal.',
      keywords: ['retaining wall waterproofing', 'EPDM support wall membrane', 'concrete wall waterproofing', 'soil retention EPDM', 'garden wall waterproofing'],
    },
    hero: {
      headline: 'Protected Retaining Walls with EPDM Membrane',
      subtitle: 'Waterproof and protect retaining and support walls against moisture, sulphates and carbonation with long-lasting EPDM.',
      stats: [
        { value: '50+', label: 'Years of protection' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '100%', label: 'Moisture barrier' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Retaining Wall Challenge',
      description: 'Retaining and support walls are exposed to lateral soil pressure, infiltration water and expansion-retraction cycles. Moisture through walls causes aesthetic and structural problems on the dry side.',
      points: [
        'Efflorescence and moisture stains on non-waterproofed concrete and masonry walls',
        'Soil sulphates progressively attack mortar and wall concrete',
        'Hydrostatic pressure during rainy periods can destabilise undrained walls',
        'Walls in garden zones suffer additional pressure from tree and shrub roots',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Retaining Walls',
      description: 'EPDM membrane installed on the soil face protects the wall from moisture and soil chemical aggressiveness. Its elasticity accommodates wall movements without creating failure points.',
      points: [
        'Impermeable barrier on soil face protecting wall from moisture and sulphates',
        'Elasticity accommodating differential movements between wall and soil',
        'Compatible with perimeter drainage systems for hydrostatic pressure relief',
        'Protection on dry face of wall with bonded EPDM prevents rising damp ingress',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Soil Aggressive Resistance', description: 'Physical barrier completely isolating wall from sulphates, chlorides and humic acids, extending structural service life.' },
      { icon: 'Droplets', title: 'Moisture Control', description: 'Eliminates moisture stains, efflorescence and limescale on the visible wall face, maintaining clean aesthetic appearance for decades.' },
      { icon: 'Layers', title: 'Drainage Compatible', description: 'The EPDM + drainage board system is the standard for retaining walls in areas with significant rainfall.' },
      { icon: 'Euro', title: 'Investment Protection', description: 'Retaining walls have high construction costs. EPDM protection ensures the investment lasts 50+ years without deterioration.' },
      { icon: 'Wrench', title: 'Fast Installation', description: 'Installation before backfilling or on accessible walls by excavation. Fast and clean process without torch.' },
      { icon: 'Leaf', title: 'Root Resistance', description: '1.5 mm EPDM with FLL certification is suitable for garden zone walls with nearby vegetation.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm / 1.5 mm' },
      { label: 'Sulphate resistance', value: 'Excellent' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'pH 3-12 resistance', value: 'Excellent' },
      { label: 'Drainage board compatibility', value: 'Yes — combined installation' },
      { label: 'Root resistance (FLL)', value: 'Yes (1.5 mm)' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Wall Inspection', description: 'Wall condition assessment, crack identification, existing drainage check. Definition of waterproofing + drainage system.' },
      { step: 2, title: 'Preparation', description: 'Wall cleaning, crack treatment, sharp corner rounding. Adhesion primer application if required.' },
      { step: 3, title: 'EPDM Installation', description: 'EPDM membrane placement on soil face of wall, with 150 mm seam overlap. Top anchoring with metal profile.' },
      { step: 4, title: 'Drainage Board', description: 'Drainage board installation over EPDM for hydrostatic pressure relief. Board directs water to base drain.' },
      { step: 5, title: 'Base Drain', description: 'Installation of perforated drainage pipe wrapped in gravel and geotextile at wall base. Connection to discharge point.' },
      { step: 6, title: 'Backfill and Warranty', description: 'Compacted backfill in layers. Membrane mechanical protection during backfilling. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'EPDM + Drainage Board System',
        description: 'Standard method for retaining walls. EPDM waterproofs the wall and drainage board over it relieves hydrostatic pressure, directing water to base drain.',
        pros: ['Dual function: waterproofing + drainage', 'Reduces hydrostatic pressure on wall', 'Complete system for any soil type'],
        cons: ['Two-layer installation — slightly more expensive', 'Requires functional base drain'],
      },
      {
        title: 'Direct Bonded EPDM (Shallow-Buried Walls)',
        description: 'For garden or support walls with minimal buried depth and no significant hydrostatic pressure, EPDM bonded directly to concrete without drainage board.',
        pros: ['Faster and more economical installation', 'Suitable for garden walls up to 1 m soil', 'No base drain required'],
        cons: ['Not suitable for walls with significant hydrostatic pressure', 'Requires good natural soil drainage'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Bituminous sheet', value: '15-20 years' }, { name: 'Cementitious coating', value: '10-20 years' }] },
      { feature: 'Sulphate resistance', epdm: 'Excellent', alternatives: [{ name: 'Bituminous sheet', value: 'Moderate' }, { name: 'Cementitious coating', value: 'Moderate' }] },
    ],
    climate: [
      { zone: 'Humid North', description: 'High rainfall creates permanent hydrostatic pressure on retaining walls. EPDM + drainage board system is mandatory in these zones.' },
      { zone: 'South (Expansive Soils)', description: 'Clay soils in the south create variable lateral forces on walls. EPDM elasticity is fundamental to follow these movements without cracking.' },
      { zone: 'Coastal Zones', description: 'Salt and chlorides from marine environment attack unprotected concrete. EPDM as exterior barrier completely isolates concrete from corrosive environment.' },
    ],
    faqs: [
      { question: 'Can EPDM be installed on natural stone walls?', answer: 'Yes. EPDM bonds to natural stone with appropriate primer. For irregular stone walls, prior joint levelling is needed to create a minimally uniform surface for membrane application.' },
      { question: 'What is the difference between waterproofing the wall and draining soil behind it?', answer: 'They are complementary actions: EPDM waterproofs the wall (protects concrete and prevents moisture passage) and drainage board + base drain removes soil water behind the wall (reduces pressure). A complete system does both.' },
    ],
    relatedSlugs: ['foundations', 'basements', 'underground-parking'],
  },
}
