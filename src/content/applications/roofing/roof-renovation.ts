import type { ApplicationData } from '../types'

export const roofRenovation: ApplicationData = {
  id: 'roof-renovation',
  categoryId: 'roofing',
  pt: {
    meta: {
      title: 'Renovação de Coberturas com EPDM — Sem Demolição | Membriko',
      description:
        'Renovação de coberturas planas existentes com EPDM. Aplicação sobre betume, PVC ou substrato existente sem demolição. Solução de 50 anos. Portugal.',
      keywords: [
        'renovação cobertura EPDM',
        'impermeabilização sobre existente',
        'reabilitação cobertura plana',
        'reparação cobertura Portugal',
        'EPDM sobre betume',
      ],
    },
    hero: {
      headline: 'Renovação de Coberturas: EPDM Sobre o Existente Sem Demolição',
      subtitle:
        'Revitalize coberturas envelhecidas sem a disrupção e custo da demolição total. O EPDM instala-se sobre a maioria dos sistemas existentes com garantia de 20 anos.',
      stats: [
        { value: '50%', label: 'Poupança vs demolição e reconstrução' },
        { value: '50+', label: 'Anos de nova vida útil' },
        { value: '1-3 dias', label: 'Duração típica da obra' },
        { value: '20 anos', label: 'Nova garantia emitida' },
      ],
    },
    problem: {
      title: 'O Desafio das Coberturas Envelhecidas',
      description:
        'Milhares de coberturas planas em Portugal têm sistemas de impermeabilização com 20-40 anos que já ultrapassaram a vida útil. A opção tradicional — demolição total e reconstrução — é cara, demorada e perturbadora para edifícios em funcionamento.',
      points: [
        'Betume oxidado e fendilhado em coberturas de 20+ anos deixa infiltrar em múltiplos pontos',
        'Demolição total de sistema existente custa 2-3x mais do que sobre-instalação de EPDM',
        'Obras de demolição perturbam edifícios habitados ou comerciais durante semanas',
        'Entulho de demolição tem custos ambientais e de transporte significativos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Renovação de Coberturas',
      description:
        'Na maioria dos casos, o EPDM pode ser instalado diretamente sobre o sistema de impermeabilização existente, seja betume, PVC, poliuretano ou feltro. Esta abordagem de "sobre-instalação" elimina a necessidade de demolição, reduz custos, acelera a obra e minimiza a perturbação.',
      points: [
        'Instalação sobre sistema existente em betume, PVC, poliuretano ou feltro',
        'Diagnóstico técnico identifica se demolição parcial é necessária antes da sobre-instalação',
        'Emissão de nova garantia de 20 anos sobre o sistema renovado',
        'Perturbação mínima para ocupantes — a obra é seca e limpa',
      ],
    },
    benefits: [
      {
        icon: 'Euro',
        title: 'Poupança de 30-50%',
        description:
          'Sobre-instalar EPDM sobre sistema existente custa tipicamente 30-50% menos do que demolição total e reconstrução, com igual resultado final de estanquidade.',
      },
      {
        icon: 'Clock',
        title: 'Obra Mais Rápida',
        description:
          'Sem demolição, a instalação de EPDM sobre existente é 2-3 vezes mais rápida. Coberturas de 500 m² que levariam 2 semanas de demolição ficam prontas em 3-5 dias.',
      },
      {
        icon: 'Leaf',
        title: 'Sustentabilidade',
        description:
          'Eliminação de entulho de demolição, redução de consumo de materiais novos, e menor pegada de carbono. A solução de renovação mais ecológica disponível.',
      },
      {
        icon: 'Shield',
        title: 'Nova Garantia de 20 Anos',
        description:
          'A renovação com EPDM vem acompanhada de nova garantia de 20 anos sobre a estanquidade do sistema — independentemente do estado do sistema antigo em baixo.',
      },
      {
        icon: 'Wrench',
        title: 'Mínima Perturbação',
        description:
          'Instalação a frio, sem torcha, sem cheiros, sem barulho excessivo. Ideal para renovações em hotéis, hospitais, escolas ou edifícios residenciais ocupados.',
      },
      {
        icon: 'Building2',
        title: 'Avaliação Técnica Gratuita',
        description:
          'Antes de qualquer obra, a Membriko realiza diagnóstico técnico completo da cobertura existente para determinar o melhor método de renovação e detetar problemas ocultos.',
      },
    ],
    specs: [
      { label: 'Espessura EPDM para renovação', value: '1,2 mm / 1,5 mm' },
      { label: 'Compatibilidade sobre betume', value: 'Sim — com primer específico' },
      { label: 'Compatibilidade sobre PVC', value: 'Sim — verificar compatibilidade química' },
      { label: 'Compatibilidade sobre feltro', value: 'Sim — se estruturalmente sólido' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Espessura adicional no sistema', value: '1,2-1,5 mm (mínima adição)' },
      { label: 'Carga adicional na estrutura', value: '1,5-2,0 kg/m²' },
      { label: 'Norma de produto', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Diagnóstico Técnico Detalhado',
        description:
          'Inspeção completa da cobertura existente: mapeamento de infiltrações, teste de humidade do suporte, levantamento fotográfico, identificação do sistema existente e avaliação da aderência.',
      },
      {
        step: 2,
        title: 'Reparação Seletiva do Sistema Antigo',
        description:
          'Reparação de áreas com delaminação, bolhas ou falhas estruturais no sistema existente. Em casos graves, demolição seletiva das zonas problemáticas.',
      },
      {
        step: 3,
        title: 'Preparação e Primer',
        description:
          'Limpeza completa da superfície existente. Aplicação de primer de compatibilidade específico para o tipo de membrana existente.',
      },
      {
        step: 4,
        title: 'Instalação do EPDM',
        description:
          'Instalação da nova membrana EPDM sobre o sistema existente preparado. Tratamento cuidadoso de todos os pontos singulares: rufos, ralos, penetrações, juntas de dilatação.',
      },
      {
        step: 5,
        title: 'Controlo de Qualidade Rigoroso',
        description:
          'Inspeção visual e tátil de toda a superfície. Teste de aderência em pontos amostrados. Teste de estanquidade com água ou deteção eletrónica.',
      },
      {
        step: 6,
        title: 'Emissão de Nova Garantia',
        description:
          'Documentação completa da renovação realizada. Emissão de novo certificado de garantia de 20 anos. Plano de manutenção preventiva.',
      },
    ],
    techniques: [
      {
        title: 'EPDM Colado Sobre Sistema Betuminoso',
        description:
          'O método mais comum de renovação em Portugal. Após primer de compatibilidade, o EPDM é colado totalmente sobre a membrana betuminosa existente.',
        pros: [
          'Elimina demolição — poupança de 30-50%',
          'Nova impermeabilidade imediata sobre sistema antigo',
          'Compatível com betume APP, SBS ou oxidado',
        ],
        cons: [
          'Requer sistema betuminoso estruturalmente sólido',
          'Humidade aprisionada entre as camadas pode ser problemática',
          'Diagnóstico técnico obrigatório antes da instalação',
        ],
      },
      {
        title: 'EPDM com Demolição Seletiva',
        description:
          'Para coberturas com problemas localizados graves, demolição apenas das zonas problemáticas antes da instalação de EPDM. Combina economia com qualidade.',
        pros: [
          'Elimina problemas ocultos localizados',
          'Menor custo e perturbação que demolição total',
          'Resultado de qualidade superior à sobre-instalação pura',
        ],
        cons: [
          'Mais demorado que sobre-instalação direta',
          'Custo intermédio',
          'Requer diagnóstico técnico preciso das zonas a demolir',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Custo da renovação',
        epdm: 'Baixo — sem demolição',
        alternatives: [
          { name: 'Demolição total + betume novo', value: 'Alto — 2-3x mais' },
          { name: 'Reparação pontual com betume', value: 'Muito baixo — mas temporário' },
          { name: 'Demolição total + PVC novo', value: 'Alto — 2x mais' },
        ],
      },
      {
        feature: 'Duração da obra (500 m²)',
        epdm: '3-5 dias',
        alternatives: [
          { name: 'Demolição total + betume novo', value: '2-3 semanas' },
          { name: 'Reparação pontual com betume', value: '1-2 dias — mas repete' },
          { name: 'Demolição total + PVC novo', value: '1-2 semanas' },
        ],
      },
      {
        feature: 'Nova vida útil',
        epdm: '50+ anos',
        alternatives: [
          { name: 'Demolição total + betume novo', value: '15-20 anos' },
          { name: 'Reparação pontual com betume', value: '2-5 anos' },
          { name: 'Demolição total + PVC novo', value: '25-30 anos' },
        ],
      },
      {
        feature: 'Perturbação do edifício',
        epdm: 'Mínima',
        alternatives: [
          { name: 'Demolição total + betume novo', value: 'Elevada — barulho, pó, cheiros' },
          { name: 'Reparação pontual com betume', value: 'Baixa' },
          { name: 'Demolição total + PVC novo', value: 'Moderada a elevada' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Todo o Portugal — Coberturas Envelhecidas',
        description:
          'Portugal tem um stock massivo de coberturas com sistemas betuminosos de 20-40 anos. A renovação com EPDM é a solução mais custo-eficiente para este problema generalizado.',
      },
      {
        zone: 'Sul e Litoral (Degradação Acelerada)',
        description:
          'Calor intenso e radiação UV elevada do sul e litoral degradam betume mais rapidamente. Coberturas de 15 anos já podem necessitar de renovação nestas zonas.',
      },
      {
        zone: 'Zonas Industriais (Poluição Atmosférica)',
        description:
          'Poluentes atmosféricos atacam quimicamente os sistemas betuminosos. A renovação com EPDM quimicamente resistente oferece proteção superior nestes ambientes.',
      },
    ],
    faqs: [
      {
        question: 'A sobre-instalação de EPDM sobre betume é uma boa solução?',
        answer:
          'Sim, quando executada corretamente com diagnóstico técnico prévio, preparação adequada e primer de compatibilidade. A garantia de 20 anos que emitimos cobre esta situação explicitamente — a nossa confiança na solução é total.',
      },
      {
        question: 'Como sei se a minha cobertura precisa de renovação?',
        answer:
          'Sinais claros: manchas de humidade no interior, bolhas ou fissuras visíveis na membrana, membrana com bordos a levantar, ou sistema com mais de 15-20 anos sem manutenção. A nossa inspeção gratuita determina o estado exato e a melhor solução.',
      },
      {
        question: 'É possível renovar uma cobertura com painéis solares instalados?',
        answer:
          'Sim, mas requer coordenação cuidadosa. Os painéis são temporariamente movidos (sistemas balastrados) ou são criadas zonas de acesso. A renovação EPDM é feita por etapas para manter sempre parte da cobertura operacional.',
      },
      {
        question: 'A sobre-instalação adiciona demasiado peso à estrutura?',
        answer:
          'Uma membrana EPDM de 1,5 mm acrescenta apenas 1,5-2,0 kg/m² à estrutura. Isto é negligenciável para qualquer estrutura normal. Verificamos sempre a capacidade estrutural, mas em 99% dos casos não existe problema.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'terraces-balconies', 'green-roofs'],
  },
  en: {
    meta: {
      title: 'Roof Renovation with EPDM — No Demolition Required | Membriko',
      description:
        'Renovation of existing flat roofs with EPDM. Application over bitumen, PVC or existing substrate without demolition. 50-year solution. Portugal.',
      keywords: [
        'roof renovation EPDM',
        'over-roofing waterproofing',
        'flat roof rehabilitation',
        'roof repair Portugal',
        'EPDM over bitumen',
      ],
    },
    hero: {
      headline: 'Roof Renovation: EPDM Over Existing — No Demolition',
      subtitle:
        'Revitalise ageing roofs without the disruption and cost of full demolition. EPDM installs over most existing systems with a 20-year guarantee.',
      stats: [
        { value: '50%', label: 'Savings vs demolition and rebuild' },
        { value: '50+', label: 'Years of new service life' },
        { value: '1-3 days', label: 'Typical project duration' },
        { value: '20 years', label: 'New warranty issued' },
      ],
    },
    problem: {
      title: 'The Ageing Roof Challenge',
      description:
        'Thousands of flat roofs in Portugal have waterproofing systems that are 20-40 years old and have exceeded their service life. The traditional option — full demolition and reconstruction — is expensive, slow and disruptive for operating buildings.',
      points: [
        'Oxidised and cracked bitumen on 20+ year roofs allows infiltration at multiple points',
        'Full demolition of existing system costs 2-3x more than over-installing EPDM',
        'Demolition works disrupt occupied or commercial buildings for weeks',
        'Demolition rubble has significant environmental and transport costs',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Roof Renovation',
      description:
        'In most cases, EPDM can be installed directly over the existing waterproofing system, whether bitumen, PVC, polyurethane or felt. This "over-roofing" approach eliminates demolition, reduces costs, accelerates work and minimises disruption.',
      points: [
        'Installation over existing system in bitumen, PVC, polyurethane or felt',
        'Technical diagnosis identifies if partial demolition is needed before over-installation',
        'New 20-year warranty issued on the renovated system',
        'Minimal disruption to occupants — work is dry and clean',
      ],
    },
    benefits: [
      {
        icon: 'Euro',
        title: '30-50% Savings',
        description:
          'Over-installing EPDM on an existing system typically costs 30-50% less than full demolition and reconstruction, with an equal final watertightness result.',
      },
      {
        icon: 'Clock',
        title: 'Faster Project',
        description:
          'Without demolition, EPDM installation over existing is 2-3x faster. 500 m² roofs that would take 2 weeks of demolition are ready in 3-5 days.',
      },
      {
        icon: 'Leaf',
        title: 'Sustainability',
        description:
          'Elimination of demolition rubble, reduction of new material consumption and lower carbon footprint. The most ecological renovation solution available.',
      },
      {
        icon: 'Shield',
        title: 'New 20-Year Warranty',
        description:
          'Renovation with EPDM comes with a new 20-year warranty on system watertightness — regardless of the condition of the old system below.',
      },
      {
        icon: 'Wrench',
        title: 'Minimal Disruption',
        description:
          'Cold installation, no torch, no odours, no excessive noise. Ideal for renovations in hotels, hospitals, schools or occupied residential buildings.',
      },
      {
        icon: 'Building2',
        title: 'Free Technical Assessment',
        description:
          'Before any work, Membriko carries out a complete technical diagnosis of the existing roof to determine the best renovation method and detect hidden problems.',
      },
    ],
    specs: [
      { label: 'EPDM thickness for renovation', value: '1.2 mm / 1.5 mm' },
      { label: 'Compatibility over bitumen', value: 'Yes — with specific primer' },
      { label: 'Compatibility over PVC', value: 'Yes — verify chemical compatibility' },
      { label: 'Compatibility over felt', value: 'Yes — if structurally sound' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Additional system thickness', value: '1.2-1.5 mm (minimal addition)' },
      { label: 'Additional structural load', value: '1.5-2.0 kg/m²' },
      { label: 'Product standard', value: 'EN 13956' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Detailed Technical Diagnosis',
        description:
          'Complete inspection of existing roof: infiltration mapping, substrate humidity testing, photographic survey, existing system identification and adhesion assessment.',
      },
      {
        step: 2,
        title: 'Selective Repair of Old System',
        description:
          'Repair of delaminated, blistered or structurally failed areas in existing system. In severe cases, selective demolition of problem zones.',
      },
      {
        step: 3,
        title: 'Preparation and Primer',
        description:
          'Complete cleaning of existing surface. Application of compatibility primer specific to the type of existing membrane.',
      },
      {
        step: 4,
        title: 'EPDM Installation',
        description:
          'Installation of new EPDM membrane over prepared existing system. Careful treatment of all singular points: flashings, drains, penetrations, expansion joints.',
      },
      {
        step: 5,
        title: 'Rigorous Quality Control',
        description:
          'Visual and tactile inspection of entire surface. Adhesion testing at sampled points. Watertightness testing with water or electronic detection.',
      },
      {
        step: 6,
        title: 'New Warranty Issue',
        description:
          'Complete documentation of renovation carried out. Issue of new 20-year warranty certificate. Preventive maintenance plan.',
      },
    ],
    techniques: [
      {
        title: 'EPDM Bonded Over Bituminous System',
        description:
          'The most common renovation method in Portugal. After compatibility primer, EPDM is fully bonded over the existing bituminous membrane.',
        pros: [
          'Eliminates demolition — 30-50% savings',
          'Immediate new impermeability over old system',
          'Compatible with APP, SBS or oxidised bitumen',
        ],
        cons: [
          'Requires structurally sound bituminous system',
          'Trapped moisture between layers can be problematic',
          'Technical diagnosis mandatory before installation',
        ],
      },
      {
        title: 'EPDM with Selective Demolition',
        description:
          'For roofs with severe localised problems, demolition only of problem areas before EPDM installation. Combines economy with quality.',
        pros: [
          'Eliminates hidden localised problems',
          'Lower cost and disruption than full demolition',
          'Higher quality result than pure over-installation',
        ],
        cons: [
          'More time-consuming than direct over-installation',
          'Intermediate cost',
          'Requires precise technical diagnosis of areas to demolish',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Renovation cost',
        epdm: 'Low — no demolition',
        alternatives: [
          { name: 'Full demolition + new bitumen', value: 'High — 2-3x more' },
          { name: 'Localised bitumen repair', value: 'Very low — but temporary' },
          { name: 'Full demolition + new PVC', value: 'High — 2x more' },
        ],
      },
      {
        feature: 'Project duration (500 m²)',
        epdm: '3-5 days',
        alternatives: [
          { name: 'Full demolition + new bitumen', value: '2-3 weeks' },
          { name: 'Localised bitumen repair', value: '1-2 days — but repeats' },
          { name: 'Full demolition + new PVC', value: '1-2 weeks' },
        ],
      },
      {
        feature: 'New service life',
        epdm: '50+ years',
        alternatives: [
          { name: 'Full demolition + new bitumen', value: '15-20 years' },
          { name: 'Localised bitumen repair', value: '2-5 years' },
          { name: 'Full demolition + new PVC', value: '25-30 years' },
        ],
      },
      {
        feature: 'Building disruption',
        epdm: 'Minimal',
        alternatives: [
          { name: 'Full demolition + new bitumen', value: 'High — noise, dust, odours' },
          { name: 'Localised bitumen repair', value: 'Low' },
          { name: 'Full demolition + new PVC', value: 'Moderate to high' },
        ],
      },
    ],
    climate: [
      {
        zone: 'All Portugal — Ageing Roofs',
        description:
          'Portugal has a massive stock of roofs with 20-40 year old bituminous systems. EPDM renovation is the most cost-effective solution for this widespread problem.',
      },
      {
        zone: 'South and Coast (Accelerated Degradation)',
        description:
          'Intense heat and high UV radiation in the south and coast degrade bitumen faster. Roofs as young as 15 years may already need renovation in these areas.',
      },
      {
        zone: 'Industrial Zones (Air Pollution)',
        description:
          'Atmospheric pollutants chemically attack bituminous systems. Renovation with chemically resistant EPDM offers superior protection in these environments.',
      },
    ],
    faqs: [
      {
        question: 'Is over-installing EPDM over bitumen a good solution?',
        answer:
          'Yes, when correctly executed with prior technical diagnosis, adequate preparation and compatibility primer. The 20-year warranty we issue covers this situation explicitly — our confidence in the solution is total.',
      },
      {
        question: 'How do I know if my roof needs renovation?',
        answer:
          'Clear signs: humidity stains on the interior, visible blisters or cracks in the membrane, membrane with lifting edges, or a system over 15-20 years old without maintenance. Our free inspection determines the exact condition and best solution.',
      },
      {
        question: 'Is it possible to renovate a roof with solar panels installed?',
        answer:
          'Yes, but requires careful coordination. Panels are temporarily moved (ballasted systems) or access zones are created. EPDM renovation is done in phases to always keep part of the roof operational.',
      },
      {
        question: 'Does over-installation add too much weight to the structure?',
        answer:
          'A 1.5 mm EPDM membrane adds only 1.5-2.0 kg/m² to the structure. This is negligible for any normal structure. We always check structural capacity, but in 99% of cases there is no problem.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'terraces-balconies', 'green-roofs'],
  },
}
