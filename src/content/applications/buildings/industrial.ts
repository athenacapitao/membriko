import type { ApplicationData } from '../types'

export const industrial: ApplicationData = {
  id: 'industrial',
  categoryId: 'buildings',
  pt: {
    meta: {
      title: 'Impermeabilização de Edifícios Industriais com EPDM | Membriko',
      description: 'Membrana EPDM para coberturas e estruturas de armazéns, fábricas e edifícios industriais. Grandes vãos, vida útil longa e instalação eficiente. Portugal.',
      keywords: ['impermeabilização industrial EPDM', 'cobertura armazém EPDM', 'fábrica impermeabilização membrana', 'pavilhão industrial cobertura', 'EPDM industrial Portugal'],
    },
    hero: {
      headline: 'Coberturas Industriais Impermeáveis com EPDM de Grande Vão',
      subtitle: 'A membrana EPDM para coberturas industriais cobre grandes superfícies com poucas emendas, resistindo a ambientes químicos, variações térmicas extremas e uso intensivo.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '15 m', label: 'Largura máxima sem emenda' },
        { value: '400%', label: 'Elongação para movimentos' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Coberturas Industriais',
      description: 'As coberturas de edifícios industriais apresentam desafios únicos: grandes superfícies com variações térmicas extremas, exposição a agentes químicos dos processos industriais, vibração de equipamentos e acesso frequente para manutenção.',
      points: [
        'Grandes superfícies amplificam os efeitos de variações térmicas — movimentos de dezenas de milímetros',
        'Agentes químicos de processos industriais (ácidos, solventes, óleos) degradam membranas betuminosas',
        'Vibrações de maquinaria pesada criam fadiga em impermeabilizações rígidas',
        'Acesso de manutenção frequente a coberturas industriais requer impermeabilização resistente à circulação',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Coberturas Industriais',
      description: 'O EPDM é a membrana de referência para coberturas industriais de grande vão. Disponível em rolos de até 15 m de largura, reduz o número de emendas e o risco de infiltração por km² de cobertura.',
      points: [
        'Rolos de EPDM de até 15 m de largura reduzem emendas a menos de uma por 15 m de cobertura',
        'Resistência química certificada a ácidos, álcalis e hidrocarbonetos',
        'Elasticidade de 400% acomoda movimentos estruturais e vibrações sem fadiga',
        'Sistema de fixação mecânica resistente a cargas de vento em coberturas industriais extensas',
      ],
    },
    benefits: [
      { icon: 'Layers', title: 'Grandes Rolos — Menos Emendas', description: 'EPDM disponível em rolos de até 15 m de largura permite cobrir superfícies industriais extensas com mínimo de emendas, reduzindo pontos potenciais de infiltração.' },
      { icon: 'Shield', title: 'Resistência Química Industrial', description: 'Formulação EPDM resistente a ácidos, hidrocarbonetos alifáticos e álcalis — agentes comuns em ambientes industriais que destroem membranas betuminosas.' },
      { icon: 'Thermometer', title: 'Amplitude Térmica Extrema', description: 'Coberturas industriais de grande superfície registam temperaturas de -20°C a +120°C. O EPDM mantém desempenho em toda esta gama sem ramolecimento ou fissuração.' },
      { icon: 'Wrench', title: 'Instalação Rápida em Grandes Áreas', description: 'Equipamentos de soldadura automática percorrem até 5 m/min — coberturas de 10.000 m² são instaladas em dias, minimizando interrupção da actividade industrial.' },
      { icon: 'Clock', title: 'Baixa Manutenção', description: 'Coberturas industriais com EPDM requerem apenas inspeção visual anual. Sem limpeza especial, pintura ou tratamento necessários.' },
      { icon: 'Euro', title: 'Custo Total de Posse Baixo', description: 'O custo inicial superior ao betume é amplamente compensado ao longo de 50 anos — sem substituições, sem manutenção e com menor risco de sinistro por infiltrações.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (coberturas industriais)' },
      { label: 'Largura máxima do rolo', value: 'Até 15 m' },
      { label: 'Resistência a hidrocarbonetos', value: 'Boa (EPDM alifático)' },
      { label: 'Resistência a ácidos e álcalis', value: 'pH 3-12 — excelente' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência a UV', value: 'Excelente — 50+ anos sem proteção' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Levantamento e Projeto', description: 'Levantamento da cobertura existente ou projeto de cobertura nova. Definição de sistema: aderente, mecanicamente fixado ou lastrado. Cálculo de carga de vento para fixação.' },
      { step: 2, title: 'Preparação do Suporte', description: 'Preparação da estrutura de suporte (deck metálico, betão ou painel sandwich). Instalação de isolamento térmico se necessário. Regularização de superfícies irregulares.' },
      { step: 3, title: 'Instalação do EPDM', description: 'Colocação dos rolos EPDM de grande largura sobre o suporte. Sobreposição de 150 mm nas emendas longitudinais e transversais.' },
      { step: 4, title: 'Emendas e Fixação', description: 'Soldadura das emendas por máquina automática de ar quente. Fixação mecânica nas fileiras de fixadores conforme cálculo de vento. Teste de todas as emendas.' },
      { step: 5, title: 'Pontos Singulares', description: 'Tratamento de lanternins, ventiladores, condutas AVAC, rufos de parede e juntas de dilatação com acessórios EPDM específicos para coberturas industriais.' },
      { step: 6, title: 'Inspeção e Garantia', description: 'Inspeção visual completa e teste de detetor de falhas eletromagnético. Emissão de garantia de 20 anos com plano de inspeções periódicas.' },
    ],
    techniques: [
      {
        title: 'Sistema Mecanicamente Fixado (Coberturas Industriais Standard)',
        description: 'EPDM fixado mecanicamente ao deck ou estrutura de suporte, com fileiras de fixadores sobre as linhas de emenda. Sistema standard para coberturas industriais.',
        pros: ['Instalação rápida em grandes áreas', 'Adequado para coberturas com carga de vento elevada', 'Sem necessidade de adesivo ou primer em toda a superfície'],
        cons: ['Fixadores concentram esforços de vento nos pontos de fixação', 'Requer cálculo específico de fixação para cada projeto'],
      },
      {
        title: 'Sistema Lastrado (Coberturas Planas Extensas)',
        description: 'EPDM não fixado, lastre com gravilha 50 mm ou placas de betão. Para coberturas industriais planas com acesso vedado ao público.',
        pros: ['Instalação mais simples — sem máquina de soldadura', 'Membranas facilmente substituíveis no futuro', 'Gravilha protege membrana de danos mecânicos e UV'],
        cons: ['Carga adicional da gravilha sobre a estrutura', 'Não adequado para coberturas inclinadas ou com carga de vento muito elevada'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Tela betuminosa bicamada', value: '20-25 anos' }, { name: 'PVC mecanicamente fixado', value: '25-30 anos' }] },
      { feature: 'Resistência química', epdm: 'Boa (hidrocarbonetos alifáticos)', alternatives: [{ name: 'Tela betuminosa bicamada', value: 'Fraca' }, { name: 'PVC mecanicamente fixado', value: 'Boa' }] },
    ],
    climate: [
      { zone: 'Interior Industrial (Variações Extremas)', description: 'Coberturas industriais no interior português com amplitudes térmicas de 50°C+ requerem membrana de alta flexibilidade. O EPDM acomoda movimentos de dezenas de milímetros sem fadiga.' },
      { zone: 'Norte Chuvoso (Precipitação Intensa)', description: 'Alta precipitação no norte cria pressão de água intensa em coberturas planas industriais. O EPDM com emendas soldadas é impermeável mesmo com lâmina de água acumulada.' },
      { zone: 'Sul (Calor e UV Intenso)', description: 'Coberturas industriais no sul atingem temperaturas de superfície de 120°C+ no verão. O EPDM mantém integridade sem amolecer, fluir ou fissurar nestas condições extremas.' },
    ],
    faqs: [
      { question: 'O EPDM resiste às emissões de uma fábrica química?', answer: 'Depende dos agentes específicos. O EPDM resiste a ácidos, álcalis e hidrocarbonetos alifáticos comuns em indústria química geral. Para solventes aromáticos (tolueno, xileno) ou cetónas, consultar ficha técnica específica do produto EPDM.' },
      { question: 'Quanto tempo demora a impermeabilização de uma cobertura industrial de 5.000 m²?', answer: 'Com EPDM em rolos de grande largura e máquina de soldadura automática, uma equipa especializada de 4-6 pessoas cobre 5.000 m² em 5-7 dias de trabalho (excluindo pontos singulares e condições adversas).' },
      { question: 'É possível instalar EPDM sobre cobertura betuminosa existente?', answer: 'Sim, em muitos casos. Avaliação da cobertura existente é sempre necessária. Se a tela betuminosa estiver aderente e sem bolhas de gás, o EPDM pode ser instalado sobre ela com isolamento adicional — evitando demolição da cobertura existente.' },
    ],
    relatedSlugs: ['flat-roofs', 'commercial', 'cool-reflective-roofs'],
  },
  en: {
    meta: {
      title: 'Industrial Building Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for roofs and structures of warehouses, factories and industrial buildings. Large spans, long service life and efficient installation. Portugal.',
      keywords: ['industrial waterproofing EPDM', 'warehouse roof EPDM', 'factory waterproofing membrane', 'industrial building roof', 'EPDM industrial Portugal'],
    },
    hero: {
      headline: 'Waterproof Industrial Roofs with Large-Span EPDM',
      subtitle: 'EPDM membrane for industrial roofs covers large surfaces with fewer seams, resisting chemical environments, extreme thermal variations and intensive use.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '15 m', label: 'Maximum seam-free width' },
        { value: '400%', label: 'Elongation for movement' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Industrial Roof Challenge',
      description: 'Industrial building roofs present unique challenges: large surfaces with extreme thermal variations, exposure to chemical agents from industrial processes, equipment vibration and frequent maintenance access.',
      points: [
        'Large surfaces amplify thermal variation effects — movements of tens of millimetres',
        'Chemical agents from industrial processes (acids, solvents, oils) degrade bituminous membranes',
        'Heavy machinery vibration creates fatigue in rigid waterproofing',
        'Frequent maintenance access to industrial roofs requires circulation-resistant waterproofing',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Industrial Roofs',
      description: 'EPDM is the reference membrane for large-span industrial roofs. Available in rolls up to 15 m wide, it reduces the number of seams and infiltration risk per km² of roof.',
      points: [
        'EPDM rolls up to 15 m wide reduce seams to fewer than one per 15 m of roof',
        'Certified chemical resistance to acids, alkalis and hydrocarbons',
        '400% elasticity accommodates structural movements and vibrations without fatigue',
        'Wind load-rated mechanical fixing system for extensive industrial roofs',
      ],
    },
    benefits: [
      { icon: 'Layers', title: 'Wide Rolls — Fewer Seams', description: 'EPDM available in rolls up to 15 m wide enables extensive industrial surfaces to be covered with minimum seams, reducing potential infiltration points.' },
      { icon: 'Shield', title: 'Industrial Chemical Resistance', description: 'EPDM formulation resistant to acids, aliphatic hydrocarbons and alkalis — common industrial agents that destroy bituminous membranes.' },
      { icon: 'Thermometer', title: 'Extreme Thermal Amplitude', description: 'Industrial roofs of large area record temperatures from -20°C to +120°C. EPDM maintains performance across this entire range without softening or cracking.' },
      { icon: 'Wrench', title: 'Fast Installation over Large Areas', description: 'Automatic welding equipment covers up to 5 m/min — 10,000 m² roofs installed in days, minimising industrial activity disruption.' },
      { icon: 'Clock', title: 'Low Maintenance', description: 'Industrial EPDM roofs require only annual visual inspection. No special cleaning, painting or treatment needed.' },
      { icon: 'Euro', title: 'Low Total Cost of Ownership', description: 'Higher initial cost vs bitumen is widely offset over 50 years — no replacements, no maintenance and lower infiltration claim risk.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (industrial roofs)' },
      { label: 'Maximum roll width', value: 'Up to 15 m' },
      { label: 'Hydrocarbon resistance', value: 'Good (aliphatic EPDM)' },
      { label: 'Acid and alkali resistance', value: 'pH 3-12 — excellent' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'UV resistance', value: 'Excellent — 50+ years without protection' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Survey and Design', description: 'Existing roof survey or new roof design. System definition: bonded, mechanically fixed or ballasted. Wind load calculation for fixing.' },
      { step: 2, title: 'Substrate Preparation', description: 'Support structure preparation (metal deck, concrete or sandwich panel). Thermal insulation installation if required. Irregular surface levelling.' },
      { step: 3, title: 'EPDM Installation', description: 'Large-width EPDM roll placement over substrate. 150 mm overlap on longitudinal and transverse seams.' },
      { step: 4, title: 'Seams and Fixing', description: 'Seam welding by automatic hot-air machine. Mechanical fixing at fastener rows per wind load calculation. All seam testing.' },
      { step: 5, title: 'Singular Points', description: 'Rooflights, ventilators, HVAC ducts, wall flashings and expansion joint treatment with industrial roof-specific EPDM accessories.' },
      { step: 6, title: 'Inspection and Warranty', description: 'Full visual inspection and electromagnetic fault detector test. Issue of 20-year warranty with periodic inspection plan.' },
    ],
    techniques: [
      {
        title: 'Mechanically Fixed System (Standard Industrial Roofs)',
        description: 'EPDM mechanically fixed to deck or support structure, with fastener rows over seam lines. Standard system for industrial roofs.',
        pros: ['Fast installation over large areas', 'Suitable for roofs with high wind load', 'No adhesive or primer needed over full surface'],
        cons: ['Fasteners concentrate wind loads at fixing points', 'Specific fixing calculation required for each project'],
      },
      {
        title: 'Ballasted System (Extensive Flat Roofs)',
        description: 'Unfixed EPDM, ballasted with 50 mm gravel or concrete slabs. For flat industrial roofs with restricted public access.',
        pros: ['Simpler installation — no welding machine', 'Membranes easily replaceable in future', 'Gravel protects membrane from mechanical damage and UV'],
        cons: ['Additional gravel load on structure', 'Not suitable for sloped roofs or very high wind loads'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Bituminous double-layer sheet', value: '20-25 years' }, { name: 'Mechanically fixed PVC', value: '25-30 years' }] },
      { feature: 'Chemical resistance', epdm: 'Good (aliphatic hydrocarbons)', alternatives: [{ name: 'Bituminous double-layer sheet', value: 'Poor' }, { name: 'Mechanically fixed PVC', value: 'Good' }] },
    ],
    climate: [
      { zone: 'Industrial Interior (Extreme Variations)', description: 'Industrial roofs in the Portuguese interior with 50°C+ thermal amplitude require high-flexibility membrane. EPDM accommodates movements of tens of millimetres without fatigue.' },
      { zone: 'Rainy North (Intense Rainfall)', description: 'High rainfall in the north creates intense water pressure on flat industrial roofs. EPDM with welded seams is watertight even with accumulated water.' },
      { zone: 'South (Heat and Intense UV)', description: 'Industrial roofs in the south reach surface temperatures of 120°C+ in summer. EPDM maintains integrity without softening, flowing or cracking in these extreme conditions.' },
    ],
    faqs: [
      { question: 'Does EPDM resist chemical factory emissions?', answer: 'It depends on the specific agents. EPDM resists acids, alkalis and aliphatic hydrocarbons common in general chemical industry. For aromatic solvents (toluene, xylene) or ketones, consult the specific EPDM product technical datasheet.' },
      { question: 'How long does waterproofing a 5,000 m² industrial roof take?', answer: 'With large-width EPDM rolls and automatic welding machine, a specialist team of 4-6 people covers 5,000 m² in 5-7 working days (excluding singular points and adverse conditions).' },
      { question: 'Can EPDM be installed over an existing bituminous roof?', answer: 'Yes, in many cases. Assessment of the existing roof is always required. If the bituminous sheet is adherent and blister-free, EPDM can be installed over it with additional insulation — avoiding demolition of the existing roof.' },
    ],
    relatedSlugs: ['flat-roofs', 'commercial', 'cool-reflective-roofs'],
  },
}
