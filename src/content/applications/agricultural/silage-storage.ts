import type { ApplicationData } from '../types'

export const silageStorage: ApplicationData = {
  id: 'silage-storage',
  categoryId: 'agricultural',
  pt: {
    meta: {
      title: 'Impermeabilização de Silos e Armazéns de Silagem com EPDM | Membriko',
      description: 'Membrana EPDM para revestimento de silos, trincheiras de silagem e armazéns agrícolas. Resistente a ácidos orgânicos de fermentação. Portugal.',
      keywords: ['impermeabilização silo silagem EPDM', 'trincheira silagem membrana', 'silo milho EPDM Portugal', 'revestimento silo agrícola', 'EPDM fermentação silagem'],
    },
    hero: {
      headline: 'Silos de Silagem Estanques com EPDM Resistente a Ácidos',
      subtitle: 'A membrana EPDM para silos e trincheiras de silagem resiste aos ácidos orgânicos de fermentação e protege a estrutura de betão — garantindo qualidade da forragem e durabilidade.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'pH 3', label: 'Resistência a ácidos de fermentação' },
        { value: '400%', label: 'Elongação' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Silos de Silagem',
      description: 'Os silos de silagem são expostos a ácidos orgânicos de fermentação (láctico, acético) com pH 3-4, que atacam progressivamente o betão das paredes e laje. Sem proteção adequada, o betão deteriora-se criando contaminação da forragem e perda de qualidade.',
      points: [
        'Ácidos de fermentação (pH 3-4) atacam betão não protegido — dissolve o cimento em anos',
        'Lixiviado de silagem penetra solo e pode contaminar aquíferos e cursos de água',
        'Paredes de betão deterioradas pela fermentação podem perder capacidade estrutural',
        'Forragem contaminada por betão degradado perde valor nutritivo e qualidade',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Silos de Silagem',
      description: 'O EPDM cria uma barreira química impermeável entre a silagem e o betão das paredes e laje do silo. Resiste a ácidos com pH 3+ sem degradação, protegendo a estrutura e a qualidade da forragem.',
      points: [
        'EPDM com excelente resistência a ácidos orgânicos — validado para pH 3-12',
        'Continuidade impermeável em paredes e laje do silo sem pontos fracos',
        'Sistema de recolha de lixiviado integrado para conformidade ambiental',
        'Instalação em silos novos e reabilitação de silos com betão degradado',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a Ácidos de Fermentação', description: 'O EPDM resiste a ácidos orgânicos de fermentação (láctico, acético, fórmico) com pH 3+ sem degradação — protegendo o betão por décadas.' },
      { icon: 'Droplets', title: 'Contenção de Lixiviado', description: 'Impermeabilização completa do silo evita infiltração de lixiviado no solo, garantindo conformidade com legislação ambiental portuguesa.' },
      { icon: 'Layers', title: 'Proteção da Forragem', description: 'O EPDM inerte à silagem não contamina a forragem armazenada, mantendo qualidade nutricional e segurança alimentar animal.' },
      { icon: 'Thermometer', title: 'Resistência Térmica', description: 'Processo de fermentação de silagem gera calor (60-70°C internamente). O EPDM suporta estas temperaturas sem degradação.' },
      { icon: 'Wrench', title: 'Fácil Limpeza', description: 'Superfície EPDM lisa facilita limpeza e desinfeção entre enchimentos de silagem — reduzindo risco de contaminação bacteriana cruzada.' },
      { icon: 'Euro', title: 'Proteção do Investimento', description: 'Um silo de betão representa investimento de €30.000-€150.000. O EPDM protege este investimento da degradação ácida que pode inutilizá-lo em 15-20 anos sem proteção.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm' },
      { label: 'Resistência a ácidos orgânicos', value: 'Excelente — pH 3-12' },
      { label: 'Resistência ao ácido láctico', value: 'Excelente' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Inércia à silagem', value: 'Confirmada — não contamina forragem' },
      { label: 'Sistema de recolha de lixiviado', value: 'Compatível — integrado na laje' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto do Silo', description: 'Definição de capacidade, dimensões e sistema de recolha de lixiviado. Coordenação com projeto estrutural. Sistema de impermeabilização de paredes e laje.' },
      { step: 2, title: 'Preparação do Betão', description: 'Regularização e limpeza das paredes e laje de betão. Tratamento de juntas de betonagem e fissuras. Arredondamento de cantos vivos.' },
      { step: 3, title: 'Instalação nas Paredes', description: 'Instalação do EPDM nas paredes do silo, do topo ao fundo. Ancoragem no topo. Sobreposição de 150 mm nas emendas. Colagem total com adesivo específico.' },
      { step: 4, title: 'Instalação na Laje', description: 'Instalação do EPDM na laje do silo com pendente para ponto de recolha de lixiviado. Ligação estanque com a membrana das paredes.' },
      { step: 5, title: 'Sistema de Lixiviado', description: 'Instalação de caleira ou sumidouro de lixiviado com manga EPDM estanque. Ligação a tanque de recolha conforme regulamentação ambiental.' },
      { step: 6, title: 'Garantia', description: 'Inspeção final e teste de estanquidade. Emissão de garantia de 15 anos com documentação técnica.' },
    ],
    techniques: [
      {
        title: 'EPDM Colado em Silo de Betão',
        description: 'EPDM 1,5 mm colado à totalidade das paredes e laje do silo. Sistema standard para silos de betão novos e reabilitação de silos existentes.',
        pros: ['Proteção completa do betão dos ácidos de fermentação', 'Superfície lisa para fácil limpeza e desinfeção', 'Instalação eficiente com adesivo específico para ambientes ácidos'],
        cons: ['Requer betão regular e limpo', 'Colagem total necessita condições de temperatura adequadas'],
      },
      {
        title: 'EPDM com Trincheira de Silagem (Silo Horizontal)',
        description: 'Para silos de trincheira (silos horizontais a céu aberto), EPDM 1,5 mm no fundo e taludes laterais com ancoragem nos bordos.',
        pros: ['Impermeabilização de silos de baixo custo inicial', 'Instalação rápida em trincheiras existentes', 'Boa vedação mesmo em solos não uniformes'],
        cons: ['Partes verticais das paredes de trincheira requerem ancoragem específica', 'Cobertura de silagem separada (filme plástico ou cobertura betão)'],
      },
    ],
    comparison: [
      { feature: 'Resistência a ácidos de fermentação', epdm: 'Excelente (pH 3-12)', alternatives: [{ name: 'Betão nu', value: 'Fraca — deteriora em anos' }, { name: 'Epóxi de betão', value: 'Boa mas frágil a movimentos' }] },
      { feature: 'Vida útil em ambiente ácido', epdm: '50+ anos', alternatives: [{ name: 'Betão nu', value: '15-20 anos (com deterioração)' }, { name: 'Epóxi de betão', value: '10-15 anos' }] },
    ],
    climate: [
      { zone: 'Norte (Produção Leiteira Intensiva)', description: 'Norte de Portugal com pecuária leiteira intensiva e silagem de milho e erva. Silos de grande capacidade requerem impermeabilização de longa duração para operação eficiente.' },
      { zone: 'Interior (Pecuária Extensiva)', description: 'Explorações extensivas de bovinos e ovinos no interior armazenam silagem sazonal. O EPDM garante qualidade da forragem e conformidade ambiental.' },
      { zone: 'Alentejo (Suinicultura)', description: 'Suiniculturas do Alentejo com grandes volumes de silagem como suplemento alimentar beneficiam da proteção EPDM para conformidade regulatória ambiental.' },
    ],
    faqs: [
      { question: 'O EPDM é seguro para contacto com silagem destinada a consumo animal?', answer: 'Sim. O EPDM é quimicamente inerte e não liberta compostos na silagem. É adequado para proteção de silos de silagem para bovinos, ovinos, suínos e outras espécies pecuárias.' },
      { question: 'É obrigatório ter sistema de recolha de lixiviado de silagem em Portugal?', answer: 'Sim. A legislação portuguesa (Decreto-Lei 81/2013 e regulamentação de efluentes agrícolas) exige contenção e tratamento do lixiviado de silagem para prevenir contaminação de aquíferos e cursos de água. O EPDM + sistema de recolha garante conformidade.' },
    ],
    relatedSlugs: ['slurry-lagoons', 'farm-reservoirs', 'chemical-containment'],
  },
  en: {
    meta: {
      title: 'Silage Storage and Silo Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for lining silage silos, clamps and agricultural stores. Resistant to organic fermentation acids. Portugal.',
      keywords: ['silage silo waterproofing EPDM', 'silage clamp membrane', 'corn silo EPDM Portugal', 'agricultural silo lining', 'EPDM silage fermentation'],
    },
    hero: {
      headline: 'Watertight Silage Silos with Acid-Resistant EPDM',
      subtitle: 'EPDM membrane for silage silos and clamps resists organic fermentation acids and protects the concrete structure — ensuring forage quality and durability.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'pH 3', label: 'Fermentation acid resistance' },
        { value: '400%', label: 'Elongation' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Silage Silo Challenge',
      description: 'Silage silos are exposed to organic fermentation acids (lactic, acetic) with pH 3-4, which progressively attack concrete walls and slabs. Without adequate protection, concrete deteriorates creating forage contamination and quality loss.',
      points: [
        'Fermentation acids (pH 3-4) attack unprotected concrete — dissolving cement within years',
        'Silage leachate penetrates soil and can contaminate aquifers and watercourses',
        'Concrete walls deteriorated by fermentation can lose structural capacity',
        'Forage contaminated by degraded concrete loses nutritional value and quality',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Silage Silos',
      description: 'EPDM creates an impermeable chemical barrier between silage and the concrete walls and slab. Resists acids at pH 3+ without degradation, protecting the structure and forage quality.',
      points: [
        'EPDM with excellent organic acid resistance — validated for pH 3-12',
        'Impermeable continuity on silo walls and slab without weak points',
        'Integrated leachate collection system for environmental compliance',
        'Installation in new silos and rehabilitation of silos with degraded concrete',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Fermentation Acid Resistance', description: 'EPDM resists organic fermentation acids (lactic, acetic, formic) at pH 3+ without degradation — protecting concrete for decades.' },
      { icon: 'Droplets', title: 'Leachate Containment', description: 'Complete silo waterproofing prevents leachate infiltration in soil, ensuring compliance with Portuguese environmental legislation.' },
      { icon: 'Layers', title: 'Forage Protection', description: 'Silage-inert EPDM does not contaminate stored forage, maintaining nutritional quality and animal feed safety.' },
      { icon: 'Thermometer', title: 'Thermal Resistance', description: 'Silage fermentation process generates heat (60-70°C internally). EPDM withstands these temperatures without degradation.' },
      { icon: 'Wrench', title: 'Easy Cleaning', description: 'Smooth EPDM surface facilitates cleaning and disinfection between silage fills — reducing cross-bacterial contamination risk.' },
      { icon: 'Euro', title: 'Investment Protection', description: 'A concrete silo represents €30,000-€150,000 investment. EPDM protects this investment from acid degradation that can render it unusable within 15-20 years without protection.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Organic acid resistance', value: 'Excellent — pH 3-12' },
      { label: 'Lactic acid resistance', value: 'Excellent' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Silage inertia', value: 'Confirmed — does not contaminate forage' },
      { label: 'Leachate collection system', value: 'Compatible — integrated in slab' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Silo Design', description: 'Capacity, dimensions and leachate collection system definition. Structural design coordination. Wall and slab waterproofing system.' },
      { step: 2, title: 'Concrete Preparation', description: 'Wall and slab levelling and cleaning. Construction joint and crack treatment. Sharp corner rounding.' },
      { step: 3, title: 'Wall Installation', description: 'EPDM installation on silo walls, from top to base. Top anchoring. 150 mm seam overlap. Full bonding with acid-environment-specific adhesive.' },
      { step: 4, title: 'Slab Installation', description: 'EPDM installation on silo slab with slope to leachate collection point. Watertight connection with wall membrane.' },
      { step: 5, title: 'Leachate System', description: 'Leachate channel or sump installation with watertight EPDM sleeve. Connection to collection tank per environmental regulation.' },
      { step: 6, title: 'Warranty', description: 'Final inspection and watertightness test. Issue of 15-year warranty with technical documentation.' },
    ],
    techniques: [
      {
        title: 'Bonded EPDM in Concrete Silo',
        description: '1.5 mm EPDM bonded to entire silo walls and slab. Standard system for new concrete silos and existing silo rehabilitation.',
        pros: ['Complete concrete protection from fermentation acids', 'Smooth surface for easy cleaning and disinfection', 'Efficient installation with acid-environment-specific adhesive'],
        cons: ['Requires regular and clean concrete', 'Full bonding requires adequate temperature conditions'],
      },
      {
        title: 'EPDM in Silage Clamp (Horizontal Silo)',
        description: 'For clamp silos (open horizontal silos), 1.5 mm EPDM on base and side slopes with edge anchoring.',
        pros: ['Waterproofing for low initial cost silos', 'Fast installation in existing clamps', 'Good sealing even on non-uniform soils'],
        cons: ['Vertical parts of clamp walls require specific anchoring', 'Silage covering separate (plastic film or concrete lid)'],
      },
    ],
    comparison: [
      { feature: 'Fermentation acid resistance', epdm: 'Excellent (pH 3-12)', alternatives: [{ name: 'Bare concrete', value: 'Poor — deteriorates within years' }, { name: 'Concrete epoxy', value: 'Good but brittle to movement' }] },
      { feature: 'Service life in acidic environment', epdm: '50+ years', alternatives: [{ name: 'Bare concrete', value: '15-20 years (with deterioration)' }, { name: 'Concrete epoxy', value: '10-15 years' }] },
    ],
    climate: [
      { zone: 'North (Intensive Dairy)', description: 'Northern Portugal with intensive dairy farming and corn/grass silage. Large-capacity silos require long-life waterproofing for efficient operation.' },
      { zone: 'Interior (Extensive Livestock)', description: 'Extensive cattle and sheep farms in the interior store seasonal silage. EPDM ensures forage quality and environmental compliance.' },
      { zone: 'Alentejo (Pig Farming)', description: 'Alentejo pig farms with large silage volumes as feed supplement benefit from EPDM protection for environmental regulatory compliance.' },
    ],
    faqs: [
      { question: 'Is EPDM safe for contact with silage destined for animal consumption?', answer: 'Yes. EPDM is chemically inert and does not release compounds into silage. It is suitable for protecting silage silos for cattle, sheep, pigs and other livestock species.' },
      { question: 'Is silage leachate collection mandatory in Portugal?', answer: 'Yes. Portuguese legislation (Decree-Law 81/2013 and agricultural effluent regulation) requires silage leachate containment and treatment to prevent aquifer and watercourse contamination. EPDM + collection system ensures compliance.' },
    ],
    relatedSlugs: ['slurry-lagoons', 'farm-reservoirs', 'chemical-containment'],
  },
}
