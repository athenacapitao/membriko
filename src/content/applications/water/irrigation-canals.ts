import type { ApplicationData } from '../types'

export const irrigationCanals: ApplicationData = {
  id: 'irrigation-canals',
  categoryId: 'water',
  pt: {
    meta: {
      title: 'Impermeabilização de Canais de Irrigação com EPDM | Membriko',
      description:
        'Membrana EPDM para canais de irrigação e condução de água. Reduz perdas por infiltração em 95%. Solução duradoura para agricultura. Portugal.',
      keywords: [
        'canal irrigação EPDM',
        'impermeabilização canal água',
        'membrana canal irrigação Portugal',
        'redução perdas água canal',
        'EPDM vala irrigação',
      ],
    },
    hero: {
      headline: 'Canais de Irrigação Eficientes com Membrana EPDM',
      subtitle:
        'Reduza as perdas por infiltração em canais de irrigação em 95% com membrana EPDM — a solução de 50 anos que maximiza a eficiência hídrica na agricultura portuguesa.',
      stats: [
        { value: '95%', label: 'Redução de perdas por infiltração' },
        { value: '50+', label: 'Anos de vida útil' },
        { value: '400%', label: 'Elongação para movimentos do solo' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Perdas em Canais de Irrigação',
      description:
        'Canais de irrigação em terra não revestidos perdem 30-50% da água por infiltração antes de chegar às culturas. Em Portugal, onde a água é um recurso escasso, especialmente no Sul, estas perdas representam um desperdício e custo inaceitáveis.',
      points: [
        'Canais em terra perdem 30-50% da água transportada por infiltração no solo',
        'Betão em canais fissurea com assentamento diferencial e ciclos térmicos',
        'Vegetação nas margens dos canais danifica o betão e aumenta as perdas',
        'Custo de reparação de canais de betão fendilhados é elevado e eficácia temporária',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Canais de Irrigação',
      description:
        'A membrana EPDM cria uma barreira impermeável contínua no leito e paredes do canal, reduzindo as perdas por infiltração a valores praticamente nulos. A elasticidade do EPDM acomoda os movimentos do solo sem criar fissuras.',
      points: [
        'Barreira impermeável contínua que elimina infiltração no leito e paredes',
        'Elasticidade que acomoda movimentos do solo e raízes sem fissurar',
        'Superfície lisa que reduz resistência ao escoamento e aumenta caudal',
        'Compatível com todos os sistemas de irrigação: gravidade, pressão e gotejo',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Eficiência Hídrica Máxima',
        description:
          'Redução das perdas de água em 95% — a água captada chega às culturas em vez de se infiltrar no solo. Retorno do investimento em 3-7 anos em zonas com tarifas de água elevadas.',
      },
      {
        icon: 'Euro',
        title: 'Poupança em Custos de Água',
        description:
          'Em Portugal, o custo da água de rega aumentou significativamente. Um canal EPDM pode recuperar o seu custo em poucas épocas de rega pela redução do volume de água faturado.',
      },
      {
        icon: 'Shield',
        title: 'Durabilidade em Ambiente Agressivo',
        description:
          'Resistente a raízes, roedores, tratamentos fitossanitários na água de rega, e UV nas zonas expostas acima do nível de água. Vida útil muito superior ao betão.',
      },
      {
        icon: 'Leaf',
        title: 'Sustentabilidade Ambiental',
        description:
          'Menor consumo de água de rega reduz a pressão sobre lençóis freáticos e albufeiras. Contribui para objetivos de eficiência hídrica da PAC e FEADER.',
      },
      {
        icon: 'Wrench',
        title: 'Instalação Rápida',
        description:
          'Um quilómetro de canal pode ser revestido em EPDM em 2-3 dias com equipa especializada. Sem necessidade de cofragem, espera de cura ou equipamento pesado.',
      },
      {
        icon: 'Layers',
        title: 'Revestimento de Canais Existentes',
        description:
          'O EPDM pode ser instalado em canais de terra existentes ou sobre betão fendilhado, sem escavação adicional ou demolição do betão antigo.',
      },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm / 1,5 mm' },
      { label: 'Redução de perdas por infiltração', value: '95-99%' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Resistência a raízes', value: 'Boa para EPDM 1,5 mm com fleece' },
      { label: 'Temperatura da água', value: '0°C a 40°C' },
      { label: 'Resistência UV', value: 'Excelente — parte exposta acima da água' },
      { label: 'Inclinação do canal', value: '0,1% a 5% (qualquer inclinação prática)' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Levantamento do Canal',
        description:
          'Levantamento topográfico do canal existente ou novo. Verificação de inclinações, cálculo de caudais e dimensionamento hidráulico do revestimento.',
      },
      {
        step: 2,
        title: 'Preparação do Leito',
        description:
          'Para canais em terra: compactação e regularização do leito. Remoção de pedras e raízes. Aplicação de camada de areia protetora de 50 mm. Para canais de betão: limpeza e reparação mínima.',
      },
      {
        step: 3,
        title: 'Instalação da Membrana',
        description:
          'Desenrolamento e conformação do EPDM ao perfil do canal. Para canais largos, rolos adjacentes com emenda de 300 mm. Ancoragem nas bermas com vala de enterramento.',
      },
      {
        step: 4,
        title: 'Emendas e Extremidades',
        description:
          'Soldadura de todas as emendas longitudinais e transversais. Tratamento das extremidades do canal com muro de topo ou sobreposição com estruturas de entrada/saída.',
      },
      {
        step: 5,
        title: 'Proteção Superficial (Opcional)',
        description:
          'Para canais sujeitos a tráfego de pessoas ou animais, instalação de proteção de pedra ou betão leve sobre o EPDM. Para uso normal, o EPDM pode ser deixado exposto.',
      },
      {
        step: 6,
        title: 'Teste e Certificação',
        description:
          'Enchimento do canal e verificação de escoamento. Inspeção visual de emendas e ancoragem. Documentação para subsídios de eficiência hídrica (PDR2020, etc.).',
      },
    ],
    techniques: [
      {
        title: 'EPDM em Canal de Terra',
        description:
          'Instalação direta do EPDM em canal escavado em terra com leito regularizado e camada de areia protetora. O método mais económico para canais novos.',
        pros: [
          'Sem necessidade de betão — muito mais económico',
          'Instalação muito mais rápida que revestimento de betão',
          'Adaptação a qualquer perfil de canal',
        ],
        cons: [
          'Vulnerável a perfuração por animais e vandalismo em zonas não protegidas',
          'Bermas de terra podem erodir e cobrir a membrana nas margens',
        ],
      },
      {
        title: 'EPDM Sobre Canal de Betão Existente',
        description:
          'Para reabilitação de canais de betão fendilhados, instalação de EPDM sobre o betão existente como nova camada impermeável.',
        pros: [
          'Sem demolição do betão existente — muito económico',
          'Betão existente protege o EPDM de danos mecânicos',
          'Resistência mecânica superior ao sistema sobre terra',
        ],
        cons: [
          'Requer betão em estado estrutural mínimo aceitável',
          'Reduz ligeiramente a secção útil do canal',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Redução de perdas por infiltração',
        epdm: '95-99%',
        alternatives: [
          { name: 'Canal de terra', value: '0% (referência)' },
          { name: 'Canal de betão novo', value: '80-90%' },
          { name: 'Canal de betão com juntas prefabricadas', value: '70-85%' },
        ],
      },
      {
        feature: 'Vida útil do revestimento',
        epdm: '50+ anos',
        alternatives: [
          { name: 'Canal de terra', value: 'N/A — permanente perdas' },
          { name: 'Canal de betão novo', value: '20-30 anos (fissura)' },
          { name: 'Canal de betão com juntas prefabricadas', value: '15-25 anos' },
        ],
      },
      {
        feature: 'Custo de instalação /km',
        epdm: 'Médio',
        alternatives: [
          { name: 'Canal de terra', value: 'Baixo' },
          { name: 'Canal de betão novo', value: 'Alto' },
          { name: 'Canal de betão com juntas prefabricadas', value: 'Médio-alto' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Alentejo e Algarve (Agricultura Intensiva)',
        description:
          'As maiores perdas de água em canais de irrigação ocorrem no Sul, onde a escassez é maior. O investimento em EPDM tem ROI mais rápido nestas zonas pelo valor da água e volume transportado.',
      },
      {
        zone: 'Ribatejo e Entre-Douro-e-Minho',
        description:
          'Zonas de agricultura intensiva com grande necessidade de irrigação. A eficiência hídrica é cada vez mais regulada pela Diretiva Quadro da Água, tornando o revestimento de canais uma prioridade.',
      },
      {
        zone: 'Interior — Zonas de Regadio',
        description:
          'Canais de aproveitamento hidroagrícola em zonas interiores beneficiam especialmente do EPDM pela resistência a ciclos de gelo e seca que fissurem o betão.',
      },
    ],
    faqs: [
      {
        question: 'O EPDM é elegível para subsídios de eficiência hídrica do PDR?',
        answer:
          'Sim. A impermeabilização de canais de irrigação é elegível para apoio do PDR (Programa de Desenvolvimento Rural) e FEADER como medida de eficiência hídrica na agricultura. Fornecemos documentação técnica completa para processos de candidatura.',
      },
      {
        question: 'Qual a largura máxima de canal coberta sem emendas?',
        answer:
          'Com rolos de 15 m de largura, canais com desenvolvimento de perfil até 15 m (por exemplo, 5 m de base + 2 paredes de 5 m) podem ser cobertos sem emendas no fundo. Canais maiores requerem emendas que são soldadas com adesivo certificado.',
      },
    ],
    relatedSlugs: ['water-reservoirs', 'rainwater-harvesting', 'farm-reservoirs'],
  },
  en: {
    meta: {
      title: 'Irrigation Canal Waterproofing with EPDM | Membriko',
      description:
        'EPDM membrane for irrigation canals and water conduits. Reduces infiltration losses by 95%. Long-lasting agricultural solution. Portugal.',
      keywords: [
        'irrigation canal EPDM',
        'water canal waterproofing',
        'irrigation canal membrane Portugal',
        'water loss reduction canal',
        'EPDM irrigation channel',
      ],
    },
    hero: {
      headline: 'Efficient Irrigation Canals with EPDM Membrane',
      subtitle:
        'Reduce infiltration losses in irrigation canals by 95% with EPDM membrane — the 50-year solution that maximises water efficiency in Portuguese agriculture.',
      stats: [
        { value: '95%', label: 'Reduction in infiltration losses' },
        { value: '50+', label: 'Years service life' },
        { value: '400%', label: 'Elongation for soil movement' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Challenge of Irrigation Canal Losses',
      description:
        'Unlined earth irrigation canals lose 30-50% of water through infiltration before reaching crops. In Portugal, where water is a scarce resource, especially in the South, these losses represent unacceptable waste and cost.',
      points: [
        'Earth canals lose 30-50% of transported water through soil infiltration',
        'Concrete in canals cracks with differential settlement and thermal cycles',
        'Vegetation on canal banks damages concrete and increases losses',
        'Repair cost of cracked concrete canals is high and effectiveness is temporary',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Irrigation Canals',
      description:
        'EPDM membrane creates a continuous impermeable barrier in the canal bed and walls, reducing infiltration losses to near-zero values. EPDM elasticity accommodates soil movements without creating cracks.',
      points: [
        'Continuous impermeable barrier eliminating infiltration in bed and walls',
        'Elasticity accommodating soil movements and roots without cracking',
        'Smooth surface reducing flow resistance and increasing discharge',
        'Compatible with all irrigation systems: gravity, pressure and drip',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Maximum Water Efficiency',
        description:
          'Reduction of water losses by 95% — captured water reaches crops instead of infiltrating soil. Investment payback in 3-7 years in areas with high water tariffs.',
      },
      {
        icon: 'Euro',
        title: 'Irrigation Water Cost Savings',
        description:
          'In Portugal, irrigation water costs have increased significantly. An EPDM canal can recover its cost in a few irrigation seasons through reduction of billed water volume.',
      },
      {
        icon: 'Shield',
        title: 'Durability in Harsh Environment',
        description:
          'Resistant to roots, rodents, phytosanitary treatments in irrigation water, and UV in areas exposed above water level. Much longer service life than concrete.',
      },
      {
        icon: 'Leaf',
        title: 'Environmental Sustainability',
        description:
          'Lower irrigation water consumption reduces pressure on groundwater and reservoirs. Contributes to water efficiency objectives of the CAP and EAFRD.',
      },
      {
        icon: 'Wrench',
        title: 'Fast Installation',
        description:
          'One kilometre of canal can be EPDM-lined in 2-3 days with a specialist team. No formwork, curing waiting time or heavy equipment required.',
      },
      {
        icon: 'Layers',
        title: 'Existing Canal Lining',
        description:
          'EPDM can be installed in existing earth canals or over cracked concrete, without additional excavation or demolition of old concrete.',
      },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm / 1.5 mm' },
      { label: 'Infiltration loss reduction', value: '95-99%' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Root resistance', value: 'Good for 1.5 mm EPDM with fleece' },
      { label: 'Water temperature', value: '0°C to 40°C' },
      { label: 'UV resistance', value: 'Excellent — exposed above water level' },
      { label: 'Canal slope', value: '0.1% to 5% (any practical slope)' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Canal Survey',
        description:
          'Topographic survey of existing or new canal. Slope verification, flow calculations and hydraulic lining sizing.',
      },
      {
        step: 2,
        title: 'Bed Preparation',
        description:
          'For earth canals: bed compaction and levelling. Stone and root removal. Application of 50 mm protective sand layer. For concrete canals: cleaning and minimum repair.',
      },
      {
        step: 3,
        title: 'Membrane Installation',
        description:
          'EPDM unrolling and forming to canal profile. For wide canals, adjacent rolls with 300 mm seam. Bank anchoring with burial trench.',
      },
      {
        step: 4,
        title: 'Seams and Ends',
        description:
          'Welding of all longitudinal and transverse seams. Canal end treatment with headwall or overlap with inlet/outlet structures.',
      },
      {
        step: 5,
        title: 'Surface Protection (Optional)',
        description:
          'For canals subject to human or animal traffic, installation of stone or lightweight concrete protection over EPDM. For normal use, EPDM can be left exposed.',
      },
      {
        step: 6,
        title: 'Testing and Certification',
        description:
          'Canal filling and flow verification. Visual inspection of seams and anchorage. Documentation for water efficiency grants (PDR2020, etc.).',
      },
    ],
    techniques: [
      {
        title: 'EPDM in Earth Canal',
        description:
          'Direct EPDM installation in excavated earth canal with levelled bed and protective sand layer. Most economical method for new canals.',
        pros: [
          'No concrete needed — much more economical',
          'Much faster installation than concrete lining',
          'Adaptation to any canal profile',
        ],
        cons: [
          'Vulnerable to animal puncture and vandalism in unprotected areas',
          'Earth banks may erode and cover membrane at margins',
        ],
      },
      {
        title: 'EPDM Over Existing Concrete Canal',
        description:
          'For rehabilitation of cracked concrete canals, EPDM installation over existing concrete as a new impermeable layer.',
        pros: [
          'No concrete demolition — very economical',
          'Existing concrete protects EPDM from mechanical damage',
          'Superior mechanical resistance to earth system',
        ],
        cons: [
          'Requires concrete in minimum acceptable structural condition',
          'Slightly reduces useful canal section',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Infiltration loss reduction',
        epdm: '95-99%',
        alternatives: [
          { name: 'Earth canal', value: '0% (reference)' },
          { name: 'New concrete canal', value: '80-90%' },
          { name: 'Prefab concrete panel canal', value: '70-85%' },
        ],
      },
      {
        feature: 'Lining service life',
        epdm: '50+ years',
        alternatives: [
          { name: 'Earth canal', value: 'N/A — permanent losses' },
          { name: 'New concrete canal', value: '20-30 years (cracks)' },
          { name: 'Prefab concrete panel canal', value: '15-25 years' },
        ],
      },
      {
        feature: 'Installation cost /km',
        epdm: 'Medium',
        alternatives: [
          { name: 'Earth canal', value: 'Low' },
          { name: 'New concrete canal', value: 'High' },
          { name: 'Prefab concrete panel canal', value: 'Medium-high' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Alentejo and Algarve (Intensive Agriculture)',
        description:
          'The greatest canal irrigation water losses occur in the South, where scarcity is greatest. EPDM investment has fastest ROI in these zones from water value and transported volume.',
      },
      {
        zone: 'Ribatejo and Entre-Douro-e-Minho',
        description:
          'Intensive agriculture zones with high irrigation demand. Water efficiency is increasingly regulated by the Water Framework Directive, making canal lining a priority.',
      },
      {
        zone: 'Interior — Irrigation Zones',
        description:
          'Hydroagricultural canals in interior zones especially benefit from EPDM for resistance to freeze-thaw and drought cycles that crack concrete.',
      },
    ],
    faqs: [
      {
        question: 'Is EPDM eligible for PDR water efficiency grants?',
        answer:
          'Yes. Irrigation canal waterproofing is eligible for PDR (Rural Development Programme) and EAFRD support as an agricultural water efficiency measure. We provide complete technical documentation for application processes.',
      },
      {
        question: 'What is the maximum canal width covered without seams?',
        answer:
          'With 15 m wide rolls, canals with profile development up to 15 m (e.g., 5 m base + 2 walls of 5 m each) can be covered without floor seams. Larger canals require seams welded with certified adhesive.',
      },
    ],
    relatedSlugs: ['water-reservoirs', 'rainwater-harvesting', 'farm-reservoirs'],
  },
}
