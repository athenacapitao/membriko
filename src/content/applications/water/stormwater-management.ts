import type { ApplicationData } from '../types'

export const stormwaterManagement: ApplicationData = {
  id: 'stormwater-management',
  categoryId: 'water',
  pt: {
    meta: {
      title: 'Gestão de Águas Pluviais com EPDM | Membriko',
      description:
        'Sistemas de gestão e retenção de águas pluviais com membrana EPDM. Bacias de retenção, trincheiras de infiltração e sistemas SUDs impermeáveis. Portugal.',
      keywords: [
        'gestão águas pluviais EPDM',
        'bacia retenção pluvial membrana',
        'sistemas SUDs impermeabilização',
        'retenção pluvial Portugal',
        'EPDM bacia inundação',
      ],
    },
    hero: {
      headline: 'Gestão de Águas Pluviais com Sistemas EPDM',
      subtitle:
        'Controle inundações urbanas e cumpra regulamentos de gestão pluvial com bacias de retenção e sistemas SUDs impermeabilizados com EPDM.',
      stats: [
        { value: '100%', label: 'Impermeabilidade da bacia' },
        { value: '50+', label: 'Anos de vida útil' },
        { value: '40-70%', label: 'Redução de caudal de ponta' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Inundações Urbanas',
      description:
        'A urbanização crescente impermeabiliza solos, aumentando o escoamento superficial e sobrecarregando redes de drenagem. As inundações urbanas causam danos, contaminam aquíferos e prejudicam a biodiversidade dos ecossistemas ribeirinhos.',
      points: [
        'Eventos de precipitação intensa causam inundações em zonas urbanas com elevada impermeabilização',
        'Redes de drenagem dimensionadas para precipitação histórica são insuficientes para eventos extremos',
        'Escoamento não gerido carrega poluentes urbanos para cursos de água e costa',
        'Regulamentação europeia (DQA) e nacional impõe limites de caudal de ponta em novos licenciamentos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Gestão Pluvial',
      description:
        'Bacias de retenção e sistemas SUDs impermeabilizados com EPDM são a solução de referência para gestão de águas pluviais. A membrana garante que a água fica retida na bacia e não infiltra no aquífero, até ser libertada controladamente.',
      points: [
        'Bacia de retenção com EPDM garante retenção total sem perdas por infiltração',
        'Libertação controlada da água para a rede de drenagem a caudal regulado',
        'Compatível com sistemas de reutilização: a água retida pode ser bombeada para uso',
        'Resistência a poluentes urbanos típicos do escoamento pluvial',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Retenção Total',
        description:
          'A membrana EPDM garante que a bacia retém 100% da água sem perdas por infiltração, permitindo gestão precisa do volume e caudal de saída.',
      },
      {
        icon: 'Shield',
        title: 'Cumprimento Regulamentar',
        description:
          'Sistemas com EPDM cumprem os requisitos do RJUE, regulamentos municipais de drenagem e a Diretiva Quadro da Água para limitação de caudal de ponta.',
      },
      {
        icon: 'Leaf',
        title: 'Proteção de Aquíferos',
        description:
          'Em zonas com solos contaminados ou aquíferos sensíveis, a impermeabilização EPDM da bacia evita contaminação do lençol freático pela água pluvial urbana.',
      },
      {
        icon: 'Euro',
        title: 'Alternativa a Redes de Drenagem Mais Caras',
        description:
          'Uma bacia de retenção EPDM pode substituir o aumento de capacidade da rede pública de drenagem, com custo muito inferior a alargamento de coletores.',
      },
      {
        icon: 'Building2',
        title: 'Integração Paisagística',
        description:
          'As bacias EPDM podem ser integradas em espaços verdes, parques e zonas de lazer — funcionais como gestão pluvial mas com aparência de jardim.',
      },
      {
        icon: 'Recycle',
        title: 'Reutilização de Água Pluvial',
        description:
          'A água retida pode ser bombeada para uso em rega, lavagem e outros usos não potáveis, transformando a gestão pluvial em fonte de água reutilizável.',
      },
    ],
    specs: [
      { label: 'Espessura', value: '1,0 mm / 1,5 mm' },
      { label: 'Resistência a hidrocarbonetos (poluentes)', value: 'Boa — verificar concentração' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Resistência UV (partes expostas)', value: 'Excelente' },
      { label: 'Compatibilidade com substrato vegetal', value: 'Excelente (bacia paisagística)' },
      { label: 'Temperatura', value: '-45°C a +50°C' },
      { label: 'Resistência a pH 4-10 (escoamento urbano)', value: 'Excelente' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Projeto Hidrológico',
        description:
          'Cálculo hidrológico de caudais de ponta para diferentes períodos de retorno. Dimensionamento da bacia para retenção requerida. Projeto do órgão de descarga controlada.',
      },
      {
        step: 2,
        title: 'Escavação e Modelação',
        description:
          'Escavação e modelação topográfica da bacia segundo o projeto. Compactação das margens. Criação de taludes estáveis com ângulo não superior a 1:2.',
      },
      {
        step: 3,
        title: 'Camada Protetora',
        description:
          'Instalação de camada de areia ou geotêxtil de proteção antes da membrana. Proteção especialmente importante em solos com pedras ou raízes.',
      },
      {
        step: 4,
        title: 'Instalação do EPDM',
        description:
          'Colocação da membrana EPDM com sobreposição de 300 mm nas emendas. Ancoragem perimetral em vala enterrada. Tratamento de entrada de coletores e órgão de descarga.',
      },
      {
        step: 5,
        title: 'Órgão de Descarga Controlada',
        description:
          'Instalação de descarregador de superfície e/ou orifício de descarga de fundo certificados. Proteção da membrana junto ao órgão de descarga com placa de aço inox.',
      },
      {
        step: 6,
        title: 'Integração Paisagística',
        description:
          'Colocação de substrato e vegetação nas margens da bacia (acima da linha de máxima cheia). Integração visual com o espaço verde circundante.',
      },
    ],
    techniques: [
      {
        title: 'Bacia de Retenção Seca',
        description:
          'Bacia que retém água apenas durante e após eventos de precipitação, ficando seca entre eventos. O EPDM garante retenção durante o evento e ausência de perdas por infiltração.',
        pros: [
          'Custo mais baixo — sem gestão permanente de espelho de água',
          'Pode ser integrada em espaço verde normal',
          'Gestão mais simples (sem evaporação a gerir)',
        ],
        cons: [
          'Aspeto visual inferior quando seca',
          'Pode colonizar por vegetação invasora na zona molhável',
        ],
      },
      {
        title: 'Bacia de Retenção com Espelho de Água',
        description:
          'Bacia com nível de água permanente até o órgão de descarga. O EPDM cobre toda a superfície da bacia incluindo a zona seca acima do nível permanente.',
        pros: [
          'Aspeto visual muito agradável — integrável em parques e jardins',
          'Apoio a biodiversidade aquática',
          'Volume de armazenamento sempre disponível na zona seca',
        ],
        cons: [
          'Gestão permanente do espelho de água (algas, qualidade)',
          'Custo de instalação ligeiramente superior',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Garantia de retenção',
        epdm: '100% — sem infiltração',
        alternatives: [
          { name: 'Bacia em terra (bentonite)', value: '80-95% — pode fissurar' },
          { name: 'Bacia de betão', value: '90-99% — junta fissurea' },
          { name: 'Bacia HDPE', value: '99% — boa mas mais rígida' },
        ],
      },
      {
        feature: 'Flexibilidade a movimentos de solo',
        epdm: 'Excelente — 400% elongação',
        alternatives: [
          { name: 'Bacia em terra (bentonite)', value: 'Boa — mas resseca' },
          { name: 'Bacia de betão', value: 'Nenhuma — fissuração' },
          { name: 'Bacia HDPE', value: 'Fraca — rígida' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Zonas Urbanas (Lisboa, Porto)',
        description:
          'A crescente intensidade de eventos de precipitação extrema em Lisboa e Porto devido às alterações climáticas torna a retenção pluvial urgente. O EPDM é a solução preferida em novos desenvolvimentos urbanos.',
      },
      {
        zone: 'Zonas Costeiras (Precipitação Intensa)',
        description:
          'O litoral português recebe precipitações de alta intensidade em curtos períodos. Bacias EPDM de grande capacidade são a resposta ao risco de inundação.',
      },
      {
        zone: 'Interior (Solo Argiloso Expansivo)',
        description:
          'Em solos argilosos, bacias sem membrana enchem de forma imprevisível. O EPDM isola a bacia do solo, garantindo comportamento hidrológico controlado independentemente do tipo de solo.',
      },
    ],
    faqs: [
      {
        question: 'Uma bacia de retenção EPDM cumpre os requisitos do RJUE?',
        answer:
          'Sim. Bacias com EPDM impermeabilizante garantem o coeficiente de escoamento requerido pelo RJUE e pelos regulamentos municipais de drenagem. Fornecemos documentação técnica para licenciamento.',
      },
      {
        question: 'O EPDM resiste aos poluentes típicos do escoamento urbano (óleos, metais)?',
        answer:
          'Sim. O EPDM tem boa resistência a hidrocarbonetos em concentrações típicas de escoamento pluvial urbano (até ~500 ppm). Para bacias de retenção de água de parques de estacionamento com derrames de combustível, recomendamos ensaio de compatibilidade específico.',
      },
    ],
    relatedSlugs: ['rainwater-harvesting', 'green-roofs', 'decorative-lakes'],
  },
  en: {
    meta: {
      title: 'Stormwater Management with EPDM Membrane | Membriko',
      description:
        'Stormwater management and retention systems with EPDM membrane. Retention basins, infiltration trenches and waterproof SuDS systems. Portugal.',
      keywords: [
        'stormwater management EPDM',
        'retention basin waterproofing',
        'SuDS waterproofing membrane',
        'stormwater retention Portugal',
        'EPDM flood basin',
      ],
    },
    hero: {
      headline: 'Stormwater Management with EPDM Systems',
      subtitle:
        'Control urban flooding and meet stormwater management regulations with retention basins and SuDS systems waterproofed with EPDM.',
      stats: [
        { value: '100%', label: 'Basin impermeability' },
        { value: '50+', label: 'Years service life' },
        { value: '40-70%', label: 'Peak flow reduction' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Urban Flooding Challenge',
      description:
        'Increasing urbanisation seals soils, increasing surface runoff and overloading drainage networks. Urban floods cause damage, contaminate aquifers and harm biodiversity in riparian ecosystems.',
      points: [
        'Intense rainfall events cause flooding in urban areas with high impermeabilisation',
        'Drainage networks sized for historical rainfall are insufficient for extreme events',
        'Unmanaged runoff carries urban pollutants to watercourses and coast',
        'European (WFD) and national regulation imposes peak flow limits on new developments',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Stormwater Management',
      description:
        'Retention basins and SuDS systems waterproofed with EPDM are the reference solution for stormwater management. The membrane ensures water is retained in the basin without infiltrating the aquifer, until released in a controlled manner.',
      points: [
        'EPDM retention basin ensures total retention without infiltration losses',
        'Controlled water release to drainage network at regulated flow',
        'Compatible with reuse systems: retained water can be pumped for use',
        'Resistance to typical urban pollutants in stormwater runoff',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Total Retention',
        description:
          'EPDM membrane ensures the basin retains 100% of water without infiltration losses, enabling precise management of volume and outlet flow.',
      },
      {
        icon: 'Shield',
        title: 'Regulatory Compliance',
        description:
          'EPDM systems meet RJUE requirements, municipal drainage regulations and the Water Framework Directive for peak flow limitation.',
      },
      {
        icon: 'Leaf',
        title: 'Aquifer Protection',
        description:
          'In areas with contaminated soils or sensitive aquifers, EPDM basin waterproofing prevents groundwater contamination by urban stormwater runoff.',
      },
      {
        icon: 'Euro',
        title: 'Alternative to More Expensive Drainage Networks',
        description:
          'An EPDM retention basin can replace capacity increases in the public drainage network, at much lower cost than sewer enlargement.',
      },
      {
        icon: 'Building2',
        title: 'Landscape Integration',
        description:
          'EPDM basins can be integrated in green spaces, parks and recreational areas — functional for stormwater management but with a garden appearance.',
      },
      {
        icon: 'Recycle',
        title: 'Stormwater Reuse',
        description:
          'Retained water can be pumped for irrigation, washing and other non-potable uses, turning stormwater management into a reusable water source.',
      },
    ],
    specs: [
      { label: 'Thickness', value: '1.0 mm / 1.5 mm' },
      { label: 'Hydrocarbon resistance (pollutants)', value: 'Good — verify concentration' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'UV resistance (exposed parts)', value: 'Excellent' },
      { label: 'Vegetation substrate compatibility', value: 'Excellent (landscape basin)' },
      { label: 'Temperature', value: '-45°C to +50°C' },
      { label: 'pH 4-10 resistance (urban runoff)', value: 'Excellent' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Hydrological Design',
        description:
          'Hydrological calculation of peak flows for different return periods. Basin sizing for required retention. Design of controlled discharge structure.',
      },
      {
        step: 2,
        title: 'Excavation and Shaping',
        description:
          'Excavation and topographic shaping of basin per design. Bank compaction. Creation of stable slopes at no more than 1:2 angle.',
      },
      {
        step: 3,
        title: 'Protective Layer',
        description:
          'Installation of sand or geotextile protective layer before membrane. Protection especially important in soils with stones or roots.',
      },
      {
        step: 4,
        title: 'EPDM Installation',
        description:
          'EPDM membrane placement with 300 mm seam overlap. Perimeter anchoring in buried trench. Treatment of collector inlets and discharge structure.',
      },
      {
        step: 5,
        title: 'Controlled Discharge Structure',
        description:
          'Installation of certified surface weir and/or bottom orifice discharge. EPDM protection at discharge structure with stainless steel plate.',
      },
      {
        step: 6,
        title: 'Landscape Integration',
        description:
          'Substrate and vegetation placement on basin banks (above maximum flood line). Visual integration with surrounding green space.',
      },
    ],
    techniques: [
      {
        title: 'Dry Retention Basin',
        description:
          'Basin that retains water only during and after rainfall events, remaining dry between events. EPDM ensures retention during the event and prevents infiltration losses.',
        pros: [
          'Lower cost — no permanent water management',
          'Can be integrated in normal green space',
          'Simpler management (no evaporation to manage)',
        ],
        cons: [
          'Poorer visual appearance when dry',
          'Can be colonised by invasive vegetation in the wetted zone',
        ],
      },
      {
        title: 'Retention Basin with Permanent Pool',
        description:
          'Basin with permanent water level up to discharge structure. EPDM covers entire basin surface including dry zone above permanent level.',
        pros: [
          'Very pleasant visual appearance — integrable in parks and gardens',
          'Supports aquatic biodiversity',
          'Storage volume always available in dry zone',
        ],
        cons: [
          'Ongoing pool management (algae, quality)',
          'Slightly higher installation cost',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Retention guarantee',
        epdm: '100% — no infiltration',
        alternatives: [
          { name: 'Earth basin (bentonite)', value: '80-95% — can crack' },
          { name: 'Concrete basin', value: '90-99% — joints crack' },
          { name: 'HDPE basin', value: '99% — good but more rigid' },
        ],
      },
      {
        feature: 'Flexibility to soil movement',
        epdm: 'Excellent — 400% elongation',
        alternatives: [
          { name: 'Earth basin (bentonite)', value: 'Good — but dries out' },
          { name: 'Concrete basin', value: 'None — cracking' },
          { name: 'HDPE basin', value: 'Poor — rigid' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Urban Zones (Lisbon, Porto)',
        description:
          'The increasing intensity of extreme rainfall events in Lisbon and Porto due to climate change makes stormwater retention urgent. EPDM is the preferred solution in new urban developments.',
      },
      {
        zone: 'Coastal Zones (Intense Precipitation)',
        description:
          'The Portuguese coast receives high-intensity rainfall in short periods. Large-capacity EPDM basins are the response to flood risk.',
      },
      {
        zone: 'Interior (Expansive Clay Soil)',
        description:
          'In clay soils, unlined basins fill unpredictably. EPDM isolates the basin from soil, ensuring controlled hydrological behaviour regardless of soil type.',
      },
    ],
    faqs: [
      {
        question: 'Does an EPDM retention basin meet RJUE requirements?',
        answer:
          'Yes. Basins with waterproofing EPDM guarantee the runoff coefficient required by the RJUE and municipal drainage regulations. We provide technical documentation for licensing.',
      },
      {
        question: 'Does EPDM resist typical urban runoff pollutants (oils, metals)?',
        answer:
          'Yes. EPDM has good resistance to hydrocarbons at typical urban stormwater runoff concentrations (up to ~500 ppm). For retention basins for car park water with fuel spills, we recommend a specific compatibility test.',
      },
    ],
    relatedSlugs: ['rainwater-harvesting', 'green-roofs', 'decorative-lakes'],
  },
}
