import type { ApplicationData } from '../types'

export const planterBoxes: ApplicationData = {
  id: 'planter-boxes',
  categoryId: 'envelope',
  pt: {
    meta: {
      title: 'Impermeabilização de Floreiras e Jardineiras com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização de floreiras, jardineiras e caixas de plantação em terraços e coberturas. Resistente a raízes e fertilizantes. Portugal.',
      keywords: ['impermeabilização floreira EPDM', 'jardineira impermeável', 'caixa plantação membrana', 'floreira terraço EPDM', 'impermeabilização vasos jardim'],
    },
    hero: {
      headline: 'Floreiras e Jardineiras Impermeáveis com EPDM Anti-Raiz',
      subtitle: 'A membrana EPDM para floreiras e jardineiras embutidas protege a estrutura de raízes, fertilizantes e humidade permanente — com garantia de 15 anos.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'FLL', label: 'Certificação anti-raiz' },
        { value: '400%', label: 'Elongação' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Floreiras Embutidas em Estrutura',
      description: 'Floreiras e jardineiras embutidas em terraços, coberturas e fachadas parecem simples mas são dos pontos mais problemáticos em edifícios. A humidade permanente do substrato, as raízes das plantas e os fertilizantes criam condições agressivas para qualquer impermeabilização inadequada.',
      points: [
        'Humidade permanente em floreiras cria pressão hidrostática constante sobre a impermeabilização',
        'Raízes de plantas ornamentais penetram microfrissuras em membranas inadequadas',
        'Fertilizantes e pesticidas são quimicamente agressivos para membranas betuminosas e PVC',
        'Floreiras em fachadas com drenagem deficiente causam infiltrações nas paredes abaixo',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Floreiras e Jardineiras',
      description: 'O EPDM 1,5 mm com certificação FLL é a solução de referência para floreiras e jardineiras embutidas. Resiste a raízes, fertilizantes e humidade permanente, protegendo a estrutura por décadas.',
      points: [
        'EPDM 1,5 mm com certificação FLL para resistência a raízes de plantas ornamentais',
        'Resistência química comprovada a fertilizantes, herbicidas e pesticidas comuns',
        'Sistema completo com drenagem integrada para evitar encharcamento do substrato',
        'Acessórios específicos para drenos de fundo e remates no bordo das floreiras',
      ],
    },
    benefits: [
      { icon: 'Leaf', title: 'Anti-Raiz FLL Certificado', description: 'Certificação FLL do Instituto Alemão de Horticultura para resistência a raízes de plantas ornamentais — o standard europeu para impermeabilização em contacto com vegetação.' },
      { icon: 'Shield', title: 'Resistência Química', description: 'O EPDM é inerte a fertilizantes NPK, herbicidas, pesticidas e fungicidas — agentes que degradam membranas betuminosas e PVC em poucos anos.' },
      { icon: 'Droplets', title: 'Gestão de Drenagem', description: 'O sistema EPDM para floreiras inclui camada drenante integrada que evita encharcamento do substrato e previne humidade excessiva na estrutura.' },
      { icon: 'Wrench', title: 'Formas Complexas', description: 'O EPDM é flexível e corta-se facilmente em obra — adapta-se a floreiras de qualquer forma, cantos interiores e exteriores e perfis irregulares.' },
      { icon: 'Euro', title: 'Proteção do Edifício', description: 'Floreiras mal impermeabilizadas em coberturas e terraços causam infiltrações muito difíceis de localizar e reparar. O EPDM previne este problema desde a construção.' },
      { icon: 'Clock', title: 'Vida Útil Igual à Estrutura', description: 'Com 50+ anos de vida útil, o EPDM não requer substituição durante a vida da floreira — ao contrário de revestimentos cimentícios que deterioram com a humidade.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm' },
      { label: 'Certificação anti-raiz', value: 'FLL — Forschungsgesellschaft Landschaftsentwicklung' },
      { label: 'Resistência a fertilizantes', value: 'Excelente — inerte a NPK e micronutrientes' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Drenagem recomendada', value: 'Camada drenante 20-30 mm + geotêxtil' },
      { label: 'Subida no bordo', value: 'Mínimo 100 mm acima do nível do substrato' },
      { label: 'Norma', value: 'EN 13956 / FLL' },
    ],
    installationSteps: [
      { step: 1, title: 'Preparação da Floreira', description: 'Limpeza da estrutura da floreira. Verificação da existência de drenos de fundo. Arredondamento de cantos vivos com cordão de enchimento.' },
      { step: 2, title: 'Instalação do EPDM', description: 'Colocação da membrana EPDM em toda a floreira, subindo pelas paredes até mínimo 100 mm acima do nível do substrato previsto.' },
      { step: 3, title: 'Cantos e Remates', description: 'Tratamento de cantos interiores e exteriores com patch de reforço vulcanizado. Etapa crítica para floreiras com perfil irregular.' },
      { step: 4, title: 'Drenos de Fundo', description: 'Instalação de colares de ralo EPDM nos drenos de fundo. Ligação estanque entre membrana e ralo para evitar bypass pela junta.' },
      { step: 5, title: 'Camada Drenante', description: 'Instalação de geotêxtil + camada drenante (gravilha lavada ou perfis plásticos) sobre o EPDM. Protege a membrana e garante drenagem eficiente.' },
      { step: 6, title: 'Substrato e Garantia', description: 'Preenchimento com substrato de jardim adequado. Emissão de garantia de 15 anos após conclusão.' },
    ],
    techniques: [
      {
        title: 'EPDM Colado em Floreiras Pequenas',
        description: 'Para floreiras de dimensão reduzida (até 1 m²), EPDM colado diretamente às paredes e fundo da floreira com adesivo específico.',
        pros: ['Instalação simples e rápida', 'Boa aderência evita destacamento pelo empuxo das raízes', 'Adequado para floreiras de betão e alvenaria'],
        cons: ['Não adequado para floreiras com movimentos estruturais', 'Requer superfície regular'],
      },
      {
        title: 'EPDM Solto com Remate de Bordo',
        description: 'Para floreiras maiores ou com movimentos previstos, EPDM instalado solto com remate mecânico no bordo superior e folga para acomodar movimentos.',
        pros: ['Acomoda movimentos da estrutura da floreira', 'Mais fácil de remover para inspeção ou reparação', 'Adequado para floreiras em lajes com movimentos'],
        cons: ['Requer remate de bordo específico', 'Ligeiramente mais complexo de instalar'],
      },
    ],
    comparison: [
      { feature: 'Certificação anti-raiz', epdm: 'FLL — certificado', alternatives: [{ name: 'Revestimento cimentício', value: 'Não certificado' }, { name: 'PVC flexível', value: 'Certificação limitada' }] },
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Revestimento cimentício', value: '10-15 anos' }, { name: 'PVC flexível', value: '15-20 anos' }] },
    ],
    climate: [
      { zone: 'Clima Temperado (Lisboa, Porto)', description: 'Vegetação de rápido crescimento em clima temperado exige certificação FLL robusta. Plantas ornamentais comuns em floreiras urbanas têm sistemas radiculares agressivos.' },
      { zone: 'Algarve (Irrigação Permanente)', description: 'Floreiras no sul regadas frequentemente criam humidade permanente. O EPDM resiste a esta condição indefinidamente ao contrário de revestimentos cimentícios que saturam.' },
      { zone: 'Norte (Precipitação Intensa)', description: 'Precipitação intensa no norte cria pressão hidrostática em floreiras sem drenagem adequada. O sistema EPDM + camada drenante é essencial nestas condições.' },
    ],
    faqs: [
      { question: 'Preciso de EPDM numa floreira de betão simples?', answer: 'Sim, se a floreira está integrada na estrutura do edifício ou sobre lajes que cobrem espaços habitados. O betão simples não é impermeável — absorve água e permite infiltrações progressivas.' },
      { question: 'O EPDM resiste a plantas suculentas e cactos com raízes superficiais?', answer: 'Sim. A certificação FLL cobre todo o tipo de plantas ornamentais, incluindo suculentas, cactos e gramináceas. A resistência é validada para as espécies mais agressivas.' },
      { question: 'Como evitar que o substrato obstrua os drenos de fundo da floreira?', answer: 'Instalando geotêxtil de filtração entre a camada drenante e o substrato. O geotêxtil retém partículas finas do substrato enquanto permite passagem livre da água para o dreno.' },
    ],
    relatedSlugs: ['green-roofs', 'balconies', 'terraces-balconies'],
  },
  en: {
    meta: {
      title: 'Planter Box Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing planters and planting boxes on terraces and rooftops. Resistant to roots and fertilisers. Portugal.',
      keywords: ['planter waterproofing EPDM', 'waterproof planter box', 'planting box membrane', 'terrace planter EPDM', 'garden pot waterproofing'],
    },
    hero: {
      headline: 'Waterproof Planters and Planting Boxes with Root-Resistant EPDM',
      subtitle: 'EPDM membrane for built-in planters and planting boxes protects the structure from roots, fertilisers and permanent moisture — with 15-year guarantee.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'FLL', label: 'Root resistance certification' },
        { value: '400%', label: 'Elongation' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Challenge of Built-In Structural Planters',
      description: 'Built-in planters on terraces, rooftops and facades look simple but are among the most problematic points in buildings. Permanent substrate moisture, plant roots and fertilisers create aggressive conditions for any inadequate waterproofing.',
      points: [
        'Permanent moisture in planters creates constant hydrostatic pressure on waterproofing',
        'Ornamental plant roots penetrate microcracks in inadequate membranes',
        'Fertilisers and pesticides are chemically aggressive to bituminous and PVC membranes',
        'Facade planters with poor drainage cause infiltrations in walls below',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Planters and Planting Boxes',
      description: '1.5 mm FLL-certified EPDM is the reference solution for built-in planters and planting boxes. It resists roots, fertilisers and permanent moisture, protecting the structure for decades.',
      points: [
        '1.5 mm EPDM with FLL certification for resistance to ornamental plant roots',
        'Proven chemical resistance to fertilisers, herbicides and common pesticides',
        'Complete system with integrated drainage to prevent substrate waterlogging',
        'Specific accessories for bottom drains and planter edge trims',
      ],
    },
    benefits: [
      { icon: 'Leaf', title: 'FLL Certified Root Resistance', description: 'FLL certification from the German Horticultural Research Society for ornamental plant root resistance — the European standard for waterproofing in contact with vegetation.' },
      { icon: 'Shield', title: 'Chemical Resistance', description: 'EPDM is inert to NPK fertilisers, herbicides, pesticides and fungicides — agents that degrade bituminous and PVC membranes within a few years.' },
      { icon: 'Droplets', title: 'Drainage Management', description: 'The EPDM system for planters includes integrated drainage layer preventing substrate waterlogging and excessive structural moisture.' },
      { icon: 'Wrench', title: 'Complex Shapes', description: 'EPDM is flexible and easily cut on site — adapts to planters of any shape, interior and exterior corners and irregular profiles.' },
      { icon: 'Euro', title: 'Building Protection', description: 'Poorly waterproofed planters on roofs and terraces cause infiltrations very difficult to locate and repair. EPDM prevents this problem from construction.' },
      { icon: 'Clock', title: 'Service Life Matching Structure', description: 'With 50+ years service life, EPDM requires no replacement during the planter\'s life — unlike cementitious coatings that deteriorate with moisture.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Root resistance certification', value: 'FLL — Forschungsgesellschaft Landschaftsentwicklung' },
      { label: 'Fertiliser resistance', value: 'Excellent — inert to NPK and micronutrients' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Recommended drainage', value: 'Drainage layer 20-30 mm + geotextile' },
      { label: 'Edge upstand', value: 'Minimum 100 mm above substrate level' },
      { label: 'Standard', value: 'EN 13956 / FLL' },
    ],
    installationSteps: [
      { step: 1, title: 'Planter Preparation', description: 'Planter structure cleaning. Bottom drain existence verification. Sharp corner rounding with filler bead.' },
      { step: 2, title: 'EPDM Installation', description: 'EPDM membrane placement across entire planter, rising up walls to minimum 100 mm above intended substrate level.' },
      { step: 3, title: 'Corners and Trims', description: 'Interior and exterior corner treatment with vulcanised reinforcement patch. Critical step for planters with irregular profiles.' },
      { step: 4, title: 'Bottom Drains', description: 'EPDM drain collar installation at bottom drains. Watertight connection between membrane and drain to prevent bypass at joint.' },
      { step: 5, title: 'Drainage Layer', description: 'Geotextile + drainage layer (washed gravel or plastic profiles) installation over EPDM. Protects membrane and ensures efficient drainage.' },
      { step: 6, title: 'Substrate and Warranty', description: 'Filling with appropriate garden substrate. Issue of 15-year warranty after completion.' },
    ],
    techniques: [
      {
        title: 'Bonded EPDM for Small Planters',
        description: 'For small planters (up to 1 m²), EPDM bonded directly to planter walls and base with specific adhesive.',
        pros: ['Simple and fast installation', 'Good adhesion prevents detachment from root pressure', 'Suitable for concrete and masonry planters'],
        cons: ['Not suitable for planters with structural movements', 'Requires regular surface'],
      },
      {
        title: 'Loose EPDM with Edge Trim',
        description: 'For larger planters or those with anticipated movements, EPDM installed loosely with mechanical edge trim at top and slack to accommodate movements.',
        pros: ['Accommodates planter structure movements', 'Easier to remove for inspection or repair', 'Suitable for planters on slabs with movements'],
        cons: ['Requires specific edge trim', 'Slightly more complex to install'],
      },
    ],
    comparison: [
      { feature: 'Root resistance certification', epdm: 'FLL — certified', alternatives: [{ name: 'Cementitious coating', value: 'Not certified' }, { name: 'Flexible PVC', value: 'Limited certification' }] },
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Cementitious coating', value: '10-15 years' }, { name: 'Flexible PVC', value: '15-20 years' }] },
    ],
    climate: [
      { zone: 'Temperate Climate (Lisbon, Porto)', description: 'Rapid vegetation growth in temperate climate requires robust FLL certification. Ornamental plants common in urban planters have aggressive root systems.' },
      { zone: 'Algarve (Permanent Irrigation)', description: 'Planters in the south frequently irrigated create permanent moisture. EPDM resists this condition indefinitely unlike cementitious coatings that saturate.' },
      { zone: 'North (Intense Rainfall)', description: 'Intense rainfall in the north creates hydrostatic pressure in planters without adequate drainage. EPDM + drainage layer system is essential in these conditions.' },
    ],
    faqs: [
      { question: 'Do I need EPDM in a plain concrete planter?', answer: 'Yes, if the planter is integrated into the building structure or over slabs covering inhabited spaces. Plain concrete is not waterproof — it progressively absorbs water allowing infiltrations.' },
      { question: 'Does EPDM resist succulents and cacti with shallow roots?', answer: 'Yes. FLL certification covers all types of ornamental plants, including succulents, cacti and ornamental grasses. Resistance is validated for the most aggressive species.' },
      { question: 'How to prevent substrate blocking planter bottom drains?', answer: 'By installing filter geotextile between the drainage layer and substrate. Geotextile retains fine substrate particles while allowing free water passage to the drain.' },
    ],
    relatedSlugs: ['green-roofs', 'balconies', 'terraces-balconies'],
  },
}
