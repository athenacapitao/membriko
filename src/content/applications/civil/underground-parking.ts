import type { ApplicationData } from '../types'

export const undergroundParking: ApplicationData = {
  id: 'underground-parking',
  categoryId: 'civil',
  pt: {
    meta: {
      title: 'Impermeabilização de Estacionamentos Subterrâneos com EPDM | Membriko',
      description: 'Membrana EPDM para lajes e paredes de estacionamentos subterrâneos. Resistente a combustíveis, sais de degelo e pressão hidrostática. Portugal.',
      keywords: ['impermeabilização parque estacionamento', 'membrana EPDM garagem subterrânea', 'laje estacionamento impermeável', 'parking subterrâneo impermeabilização'],
    },
    hero: {
      headline: 'Estacionamentos Subterrâneos Impermeáveis com EPDM',
      subtitle: 'Proteja lajes e paredes de estacionamentos subterrâneos com EPDM — resistente a combustíveis, sais de degelo, tráfego e pressão hidrostática.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '2,0 mm', label: 'Espessura para tráfego' },
        { value: '100%', label: 'Impermeabilidade' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Estacionamentos Subterrâneos',
      description: 'Os estacionamentos subterrâneos sofrem um conjunto único de agressões: pressão hidrostática, tráfego pesado de veículos, derrames de combustível e óleo, e em zonas frias, sais de degelo altamente corrosivos.',
      points: [
        'Infiltrações na laje de cobertura de estacionamento danificam veículos e estrutura',
        'Sais de degelo penetram betão e corroem armaduras em zonas de clima frio',
        'Derrames de combustível e óleo degradam membranas betuminosas em poucos anos',
        'Fissuração por retração do betão cria caminhos de infiltração que expandem progressivamente',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Estacionamentos',
      description: 'O EPDM de 2,0 mm com proteção adequada é a membrana de referência para lajes de estacionamento. Resiste a combustíveis, sais e tráfego pesado, proporcionando 50+ anos de estanquidade.',
      points: [
        'Espessura 2,0 mm com fleece de reforço para resistência a tráfego pesado',
        'Resistência certificada a combustíveis, óleos e fluidos de veículos',
        'Cobertura de toda a laje sem emendas no eixo de circulação',
        'Compatível com proteção de betão, asfalto ou revestimento de uso ligeiro',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a Combustíveis', description: 'Formulação específica com resistência certificada a gasolina, gasóleo e óleos lubrificantes — agentes que destroem membranas betuminosas em poucos meses.' },
      { icon: 'Layers', title: 'Para Tráfego Pesado', description: 'Com espessura 2,0 mm e proteção de betão adequada, suporta tráfego de veículos pesados sem degradação por punção ou compressão.' },
      { icon: 'Droplets', title: 'Estanquidade Total', description: 'Elimina infiltrações nos pisos inferiores, protegendo veículos estacionados e instalações abaixo do estacionamento.' },
      { icon: 'Thermometer', title: 'Resistência a Sais de Degelo', description: 'O EPDM é quimicamente inerte ao cloreto de sódio e cloreto de cálcio usados para degelo — não degrada ao contrário de betão e armaduras.' },
      { icon: 'Wrench', title: 'Instalação em Obra Nova e Reabilitação', description: 'Adequado para estacionamentos novos (instalado antes do asfalto) e reabilitação de estacionamentos existentes com infiltrações.' },
      { icon: 'Euro', title: 'Proteção do Ativo Imobiliário', description: 'Estacionamentos subterrâneos representam investimento elevado. A proteção com EPDM garante a funcionalidade e valor deste ativo por décadas.' },
    ],
    specs: [
      { label: 'Espessura', value: '2,0 mm (tráfego ligeiro) / 2,0 mm + reforço (pesado)' },
      { label: 'Resistência a combustíveis', value: 'Boa — ensaiada conforme EN 13956' },
      { label: 'Resistência a sais de degelo', value: 'Excelente' },
      { label: 'Resistência à punção (proteção betão)', value: 'Alta' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Proteção obrigatória', value: 'Betão de proteção 50-80 mm' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto Estrutural + Impermeabilização', description: 'Coordenação com engenheiro estrutural para definição de cargas, juntas de dilatação e sistema de drenagem da laje.' },
      { step: 2, title: 'Laje de Betão', description: 'Preparação da laje de betão estrutural. Tratamento de juntas de betonagem. Pendentes mínimas de 1% para drenagem.' },
      { step: 3, title: 'Instalação do EPDM', description: 'Colocação da membrana EPDM 2,0 mm em toda a laje. Tratamento de ralos, juntas de dilatação e pontos singulares com acessórios específicos.' },
      { step: 4, title: 'Proteção Mecânica', description: 'Betonagem da camada de proteção (50-80 mm de betão simples ou armado) sobre o EPDM antes do revestimento de circulação.' },
      { step: 5, title: 'Revestimento de Circulação', description: 'Aplicação de asfalto, betão afagado ou revestimento epóxi sobre a proteção. Sistema de marcação e sinalização.' },
      { step: 6, title: 'Inspeção e Garantia', description: 'Teste de estanquidade antes da betonagem de proteção. Documentação fotográfica. Emissão de garantia de 20 anos.' },
    ],
    techniques: [
      {
        title: 'Laje Invertida com EPDM',
        description: 'EPDM instalado sobre a laje estrutural, coberto por betão de proteção e asfalto. Sistema mais robusto e durável para estacionamentos de tráfego intenso.',
        pros: ['Máxima proteção mecânica da membrana', 'Adequado para tráfego pesado', 'Juntas de dilatação integradas no sistema'],
        cons: ['Maior complexidade e custo de instalação', 'Reparação requer remoção da proteção'],
      },
      {
        title: 'EPDM com Proteção Leve',
        description: 'Para estacionamentos de uso ligeiro ou reabilitação, EPDM com proteção de betão leve (30 mm) ou revestimento epóxi reforçado.',
        pros: ['Menor peso sobre a estrutura', 'Instalação mais rápida', 'Adequado para reabilitação de estruturas com capacidade limitada'],
        cons: ['Menor resistência mecânica ao tráfego', 'Não adequado para veículos pesados'],
      },
    ],
    comparison: [
      { feature: 'Resistência a combustíveis', epdm: 'Boa (com proteção)', alternatives: [{ name: 'Betume modificado', value: 'Fraca — dissolve com combustíveis' }, { name: 'PVC', value: 'Moderada' }] },
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'Betume modificado', value: '15-20 anos' }, { name: 'PVC', value: '20-25 anos' }] },
    ],
    climate: [
      { zone: 'Norte (Humidade Elevada)', description: 'Alta precipitação no norte cria pressão hidrostática permanente em estacionamentos subterrâneos. O EPDM com resistência à pressão sustentada é essencial.' },
      { zone: 'Zonas com Neve e Gelo (Serra da Estrela)', description: 'Uso de sais de degelo nos acessos ao estacionamento cria ambiente extremamente corrosivo. O EPDM é inerte a estes sais ao contrário de betume.' },
      { zone: 'Zonas Urbanas (Poluição)', description: 'Estacionamentos urbanos acumulam óleos, combustíveis e poluentes. A resistência química do EPDM é decisiva nestas condições.' },
    ],
    faqs: [
      { question: 'O EPDM aguenta veículos pesados como autocarros e camiões?', answer: 'Sim, desde que protegido adequadamente com betão de proteção dimensionado para as cargas previstas. O EPDM em si é a barreira impermeável — a carga é suportada pela camada de betão de proteção.' },
      { question: 'Posso usar EPDM para reabilitar um estacionamento com infiltrações?', answer: 'Sim. É possível instalar EPDM sobre a laje existente após preparação e reparação de fissuras. O betão de proteção novo é então betonado sobre o EPDM, criando sistema completamente renovado.' },
    ],
    relatedSlugs: ['foundations', 'basements', 'tunnels'],
  },
  en: {
    meta: {
      title: 'Underground Parking Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for underground car park slabs and walls. Resistant to fuels, de-icing salts and hydrostatic pressure. Portugal.',
      keywords: ['car park waterproofing EPDM', 'underground garage membrane', 'parking slab waterproofing', 'underground car park waterproofing Portugal'],
    },
    hero: {
      headline: 'Waterproof Underground Car Parks with EPDM',
      subtitle: 'Protect underground car park slabs and walls with EPDM — resistant to fuels, de-icing salts, traffic and hydrostatic pressure.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '2.0 mm', label: 'Traffic-grade thickness' },
        { value: '100%', label: 'Impermeability' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Underground Car Park Challenge',
      description: 'Underground car parks suffer a unique combination of aggressions: hydrostatic pressure, heavy vehicle traffic, fuel and oil spills, and in cold zones, highly corrosive de-icing salts.',
      points: [
        'Roof slab infiltrations damage vehicles and structure',
        'De-icing salts penetrate concrete and corrode reinforcement in cold climates',
        'Fuel and oil spills degrade bituminous membranes within a few years',
        'Concrete shrinkage cracking creates infiltration pathways that progressively expand',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Car Parks',
      description: '2.0 mm EPDM with adequate protection is the reference membrane for car park slabs. Resists fuels, salts and heavy traffic, providing 50+ years of watertightness.',
      points: [
        '2.0 mm thickness with reinforcing fleece for heavy traffic resistance',
        'Certified resistance to fuels, oils and vehicle fluids',
        'Full slab coverage without seams on traffic axes',
        'Compatible with concrete, asphalt or light-duty surface protection',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Fuel Resistance', description: 'Specific formulation with certified resistance to petrol, diesel and lubricating oils — agents that destroy bituminous membranes within months.' },
      { icon: 'Layers', title: 'Heavy Traffic Rated', description: 'With 2.0 mm thickness and adequate concrete protection, withstands heavy vehicle traffic without degradation from punching or compression.' },
      { icon: 'Droplets', title: 'Total Watertightness', description: 'Eliminates infiltrations on lower floors, protecting parked vehicles and installations below the car park.' },
      { icon: 'Thermometer', title: 'De-icing Salt Resistance', description: 'EPDM is chemically inert to sodium chloride and calcium chloride used for de-icing — unlike concrete and reinforcement which it corrodes.' },
      { icon: 'Wrench', title: 'New Build and Rehabilitation', description: 'Suitable for new car parks (installed before asphalt) and rehabilitation of existing car parks with infiltrations.' },
      { icon: 'Euro', title: 'Real Estate Asset Protection', description: 'Underground car parks represent high investment. EPDM protection guarantees the functionality and value of this asset for decades.' },
    ],
    specs: [
      { label: 'Thickness', value: '2.0 mm (light traffic) / 2.0 mm + reinforcement (heavy)' },
      { label: 'Fuel resistance', value: 'Good — tested per EN 13956' },
      { label: 'De-icing salt resistance', value: 'Excellent' },
      { label: 'Puncture resistance (concrete protection)', value: 'High' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Mandatory protection', value: 'Protection concrete 50-80 mm' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Structural + Waterproofing Design', description: 'Coordination with structural engineer for load definition, expansion joints and slab drainage system.' },
      { step: 2, title: 'Concrete Slab', description: 'Structural concrete slab preparation. Construction joint treatment. Minimum 1% slopes for drainage.' },
      { step: 3, title: 'EPDM Installation', description: 'EPDM 2.0 mm membrane placement across entire slab. Treatment of drains, expansion joints and singular points with specific accessories.' },
      { step: 4, title: 'Mechanical Protection', description: 'Concreting of protection layer (50-80 mm plain or reinforced concrete) over EPDM before circulation surfacing.' },
      { step: 5, title: 'Circulation Surface', description: 'Application of asphalt, power-floated concrete or epoxy coating over protection. Marking and signage system.' },
      { step: 6, title: 'Inspection and Warranty', description: 'Watertightness test before protection concreting. Photographic documentation. Issue of 20-year warranty.' },
    ],
    techniques: [
      {
        title: 'Inverted Slab with EPDM',
        description: 'EPDM installed over structural slab, covered by protection concrete and asphalt. Most robust and durable system for high-traffic car parks.',
        pros: ['Maximum membrane mechanical protection', 'Suitable for heavy traffic', 'Expansion joints integrated in system'],
        cons: ['Greater installation complexity and cost', 'Repair requires protection removal'],
      },
      {
        title: 'EPDM with Light Protection',
        description: 'For light-use car parks or rehabilitation, EPDM with lightweight concrete protection (30 mm) or reinforced epoxy coating.',
        pros: ['Lower structural weight', 'Faster installation', 'Suitable for limited-capacity structure rehabilitation'],
        cons: ['Lower mechanical traffic resistance', 'Not suitable for heavy vehicles'],
      },
    ],
    comparison: [
      { feature: 'Fuel resistance', epdm: 'Good (with protection)', alternatives: [{ name: 'Modified bitumen', value: 'Poor — dissolves with fuels' }, { name: 'PVC', value: 'Moderate' }] },
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Modified bitumen', value: '15-20 years' }, { name: 'PVC', value: '20-25 years' }] },
    ],
    climate: [
      { zone: 'North (High Humidity)', description: 'High rainfall in the north creates permanent hydrostatic pressure in underground car parks. EPDM with sustained pressure resistance is essential.' },
      { zone: 'Snow and Ice Zones (Serra da Estrela)', description: 'Use of de-icing salts on car park access creates an extremely corrosive environment. EPDM is inert to these salts unlike bitumen.' },
      { zone: 'Urban Zones (Pollution)', description: 'Urban car parks accumulate oils, fuels and pollutants. EPDM chemical resistance is decisive in these conditions.' },
    ],
    faqs: [
      { question: 'Does EPDM withstand heavy vehicles such as buses and lorries?', answer: 'Yes, provided it is adequately protected with protection concrete dimensioned for the expected loads. EPDM itself is the impermeable barrier — the load is supported by the protection concrete layer.' },
      { question: 'Can EPDM be used to rehabilitate a car park with infiltrations?', answer: 'Yes. EPDM can be installed over the existing slab after preparation and crack repair. New protection concrete is then cast over the EPDM, creating a completely renewed system.' },
    ],
    relatedSlugs: ['foundations', 'basements', 'tunnels'],
  },
}
