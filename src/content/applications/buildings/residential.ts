import type { ApplicationData } from '../types'

export const residential: ApplicationData = {
  id: 'residential',
  categoryId: 'buildings',
  pt: {
    meta: {
      title: 'Impermeabilização Residencial com EPDM | Membriko',
      description: 'Membrana EPDM para impermeabilização de moradias e apartamentos. Coberturas planas, terraços, varandas e caves com vida útil de 50+ anos. IVA a 6%. Portugal.',
      keywords: ['impermeabilização moradia EPDM', 'apartamento impermeabilização membrana', 'casa EPDM cobertura', 'habitação impermeabilização Portugal', 'EPDM residencial', 'impermeabilização varanda condomínio'],
    },
    hero: {
      headline: 'Casas e Apartamentos Impermeabilizados com EPDM para Toda a Vida',
      subtitle: 'O EPDM para habitação protege coberturas, terraços, varandas e caves com uma única instalação para 50+ anos — instalação a frio sem chama, IVA a 6%, garantia de 20 anos e manutenção zero.',
      stats: [
        { value: '50+', label: 'Anos de vida útil documentada' },
        { value: '6%', label: 'IVA reduzido em reabilitação' },
        { value: '0', label: 'Manutenção periódica necessária' },
        { value: '20 anos', label: 'Garantia de instalação' },
      ],
    },
    problem: {
      title: 'Os Problemas de Impermeabilização em Habitação',
      description: 'Em Portugal, mais de 60% dos edifícios foram construídos antes de 1990 com sistemas de impermeabilização que tinham vida útil de 15-20 anos e nunca foram adequadamente substituídos. O INE apurou, nos Censos de 2021, que aproximadamente 1,2 milhões de alojamentos apresentavam necessidades de reparação moderadas ou profundas — a humidade é a causa mais frequentemente citada. A solução típica tem sido paliativa: tintas impermeabilizantes que falham em 2-4 anos, mastiques em juntas visíveis, betume líquido sobre coberturas. Cada ciclo de reparação cria um substrato com sistemas sobrepostos incompatíveis — e o problema regressa agravado.',
      points: [
        'Tela betuminosa de cobertura de moradia substitui-se a 15-20 anos — custo de €5.000 a €15.000 por substituição, recorrente ao longo da vida do proprietário',
        'Varandas de apartamentos são origem comum de infiltrações para o andar abaixo — conflitos de condomínio e litígios ao abrigo do Código Civil',
        'Caves sem impermeabilização adequada têm humidade permanente, bolores, radão em zonas de risco e espaço inutilizável',
        'Portugal recebe 2.500-3.000 horas de sol por ano — o dobro do Reino Unido — degradando membranas betuminosas muito mais rapidamente do que as fichas técnicas nórdicas sugerem',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Habitação',
      description: 'O EPDM para habitação oferece uma solução definitiva para coberturas, terraços, varandas e caves. A cadeia polimérica saturada do EPDM é quimicamente inerte ao UV e ao ozono — a sua resistência não se esgota com o tempo como acontece com revestimentos protetores. A vulcanização cria uma rede tridimensional de cadeias cruzadas que mantém elasticidade de -45°C a +150°C durante toda a vida útil do imóvel.',
      points: [
        'Cobertura plana de moradia com EPDM — instalação única para toda a vida da casa, sem substituição prevista',
        'Varanda de apartamento com EPDM — elimina conflitos de condomínio e cumpre o dever de conservação do Código Civil',
        'Cave com EPDM exterior nas paredes e laje — espaço seco e habitável, com proteção simultânea contra radão nas zonas de risco geológico',
        'IVA a 6% (Lista II-Verba 2.27 do Código do IVA) em obras de reabilitação residencial — poupança de €2.070 num projeto de €15.000',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Proteção Definitiva — 50+ Anos Documentados',
        description: 'Uma única instalação de EPDM protege a habitação por 50+ anos — documentado pelo estudo ERA (membranas de 28-32 anos com elongação retida de 180-240%) e pelo estudo SKZ (mediana de vida útil projetada > 50 anos por metodologia de Arrhenius). Ao contrário de tintas (2-4 anos) e betume (15-20 anos), o EPDM não tem o mecanismo de degradação por UV que as membranas com ligações duplas C=C apresentam.',
      },
      {
        icon: 'Euro',
        title: 'IVA a 6% e Custo Total de Posse Inferior',
        description: 'Obras de impermeabilização em edifícios residenciais beneficiam de IVA reduzido de 6% (vs 23% normal) ao abrigo da Lista II-Verba 2.27 do Código do IVA — poupança de €2.070 num projeto de €15.000 e de €5.520 num projeto de €40.000 com isolamento incluído. O custo total de posse do EPDM ao longo de 50 anos é significativamente inferior ao betume quando se contabilizam 2-3 substituições.',
      },
      {
        icon: 'Clock',
        title: 'Zero Manutenção Periódica',
        description: 'O EPDM não requer pintura periódica, reaplicação de selantes, tratamento anti-UV ou qualquer produto de manutenção. As emendas da Membriko são seladas com fita de butilo de pressão activada — não requerem reselagem periódica. A Membriko recomenda apenas inspeção visual anual em outubro (verificar drenos, parapeitos e eventuais danos físicos) e, após tempestades severas, verificar a ausência de debris metálicos cortantes.',
      },
      {
        icon: 'Droplets',
        title: 'Caves Habitáveis e Proteção contra Radão',
        description: 'O EPDM aplicado exteriormente nas paredes e laje de cave cria uma cave completamente seca, transformando espaço inservível em área habitável. Em zonas de risco geológico de radão (Beira Interior, Trás-os-Montes, Serra da Estrela), a membrana EPDM é reconhecida pela DGS como barreira de retenção de Rn-222 eficaz (BRE 211, EN 13829).',
      },
      {
        icon: 'Thermometer',
        title: 'Conforto Térmico e Certificado Energético REH',
        description: 'A instalação de cobertura quente EPDM + PIR melhora o U-value da cobertura de 2,0-3,0 W/m²K (laje não isolada) para 0,18-0,22 W/m²K (100-120 mm PIR) — excedendo o requisito REH de 0,35 W/m²K em mais de 37%. Redução de temperatura interior em 3-5°C em julho-agosto para apartamentos de topo. O Certificado de Desempenho Energético melhorado é obrigatório para venda e arrendamento.',
      },
      {
        icon: 'Leaf',
        title: 'Cobertura Verde e Terraço Ajardinado',
        description: 'Para moradias com cobertura plana, o EPDM FLL (EN 13948) permite criar jardim, horta urbana ou terraço com vegetação — completamente invisível sob o substrato de jardinagem. Coberturas extensivas (10-15 cm substrato) adicionam 120-150 kg/m² à laje; coberturas intensivas (30+ cm) adicionam 300-500 kg/m² — verificação estrutural obrigatória. A Membriko coordena com engenheiro de estruturas quando necessário.',
      },
    ],
    specs: [
      { label: 'Espessura (cobertura e terraço)', value: '1,2 mm / 1,5 mm (standard) / 2,0 mm (cobertura verde ou tráfego intenso)' },
      { label: 'Espessura (cave e varanda)', value: '1,5 mm' },
      { label: 'Elongação na rutura', value: '≥ 300% típico 400-500% (EN 12311-2)' },
      { label: 'Temperatura de serviço', value: '-45°C a +150°C' },
      { label: 'Resistência UV (exposto)', value: 'Intrínseca — cadeia saturada sem ligações duplas C=C' },
      { label: 'Resistência ao gelo/degelo', value: 'Excelente — Tg de -60°C a -50°C' },
      { label: 'Certificação cobertura verde', value: 'FLL e EN 13948 (versão 2,0 mm)' },
      { label: 'Norma', value: 'EN 13956 Tipo 3 — marcação CE' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Diagnóstico e Visita Técnica Gratuita',
        description: 'Inspeção da habitação: identificação das zonas a impermeabilizar, avaliação do substrato (com martelo de teste para varandas com azulejos, medição resistiva de humidade em coberturas), identificação de infiltrações ativas. A Membriko realiza a visita técnica sem custo e sem compromisso — o relatório escrito inclui avaliação do estado atual, solução recomendada e prazo indicativo.',
      },
      {
        step: 2,
        title: 'Cobertura Principal',
        description: 'Preparação da laje ou estrutura de cobertura. Decisão: sobre-cobertura (onde o substrato está íntegro e seco) ou remoção total (quando há humidade retida ou impermeabilização delaminada). Instalação de isolamento térmico PIR (80-120 mm conforme objetivo de U-value). Colocação do EPDM com tratamento de rufos, caleiras e pontos singulares — sem mástique como elemento primário em nenhum ponto.',
      },
      {
        step: 3,
        title: 'Varandas e Terraços',
        description: 'Preparação das lajes de varanda. Instalação do EPDM com subida em paredes (mínimo 150 mm acima do revestimento). Tratamento de drenos com flange EPDM ou ferro fundido — a membrana passa sob o anel de aperto, sem mástique visível em nenhum ralo. Remate de soleira prefabricado em EPDM para a junção com o caixilho da porta. Revestimento final em cerâmica, pedra ou deck em apoios reguláveis.',
      },
      {
        step: 4,
        title: 'Cave e Fundações',
        description: 'Para caves com acesso exterior: EPDM aplicado na face exterior das paredes e laje de fundo antes do aterro — sistema positivo de máxima eficácia. Para reabilitação sem acesso exterior: sistema de tanking interior com EPDM ancorado mecanicamente e drenagem perimetral para alívio de pressão. Em zonas de risco de radão: instalação de geocompósito de ventilação sub-laje integrada.',
      },
      {
        step: 5,
        title: 'Pontos Singulares e Continuidade Total',
        description: 'Todos os pontos que atravessam a membrana — tubagens de escoamento, condutas elétricas, mastros de antena, suportes de painéis solares, clarabóias — recebem botas de EPDM prefabricadas ou colares de pressão em inox. Nenhum ponto singular é selado com mástique de betume ou silicone como elemento primário. Juntas de dilatação tratadas com perfis de EPDM prefabricados que acomodam ±50 mm de movimento.',
      },
      {
        step: 6,
        title: 'Ensaio de Estanquidade',
        description: 'Teste de estanquidade por inundação (para terraços e varandas acessíveis — nível de água mínimo de 50 mm por 24 horas) ou deteção eletrónica de fugas (ELD) antes de cobrir a membrana com revestimento final. Verificação de todos os pontos singulares com sonda metálica. Sem aprovação do ensaio, não se avança para o revestimento final.',
      },
      {
        step: 7,
        title: 'Garantia, Documentação e Plano de Manutenção',
        description: 'Emissão de garantia de 20 anos por zona impermeabilizada, transferível em venda do imóvel. Dossier técnico: fichas técnicas da membrana, registo fotográfico de execução, resultado do ensaio de estanquidade, e recomendações de manutenção anual (inspeção visual em outubro + verificação de drenos). A Membriko disponibiliza contrato de manutenção anual opcional.',
      },
      {
        step: 8,
        title: 'Documentação Fiscal (IVA a 6%)',
        description: 'A Membriko é empresa de construção registada no IMPIC e emite faturas com IVA a 6% para todos os projetos de reabilitação residencial que cumpram os requisitos da Lista II-Verba 2.27 do Código do IVA. Fornecemos a documentação necessária para suporte de deduções fiscais em IRS onde aplicável.',
      },
    ],
    techniques: [
      {
        title: 'Cobertura Quente com EPDM sobre PIR',
        description: 'Para coberturas planas ou de baixa inclinação. EPDM aderente ou mecanicamente fixado sobre isolamento PIR. Sistema mais durável do mercado para habitação — combina impermeabilidade de 50+ anos com melhoria do U-value conforme REH.',
        pros: [
          'Vida útil superior a cobertura betuminosa (50+ anos vs 15-20 anos)',
          'Melhoria simultânea do U-value da cobertura — U = 0,22 W/m²K com 100 mm PIR (cumpre REH com margem de 37%)',
          'Possibilidade de terraço ou jardim sobre a cobertura com EPDM FLL',
          'Instalação a frio — sem chama, sem risco para estruturas de madeira adjacentes ou pergolas',
        ],
        cons: [
          'Custo inicial superior ao betume (compensado ao evitar 2-3 substituições ao longo de 50 anos)',
          'Estética de cobertura plana diferente de cobertura inclinada (pode requerer autorização municipal em determinadas localidades)',
        ],
      },
      {
        title: 'Reabilitação de Cave com EPDM Exterior',
        description: 'Para caves com humidade crónica com acesso exterior disponível. Escavação perimetral, aplicação de EPDM nas paredes exteriores + geocompósito de drenagem + dreno francês + aterro controlado. Solução definitiva para cave seca.',
        pros: [
          'Cave passa de espaço húmido inservível a área habitável — valorização de €20.000-€50.000+ no imóvel',
          'Sistema positivo — água bloqueada antes de contactar o betão',
          'Proteção simultânea contra radão em zonas de risco geológico (BRE 211)',
          'Elimina custo recorrente de humidade crónica (tratamentos, manutenção, mobiliário danificado)',
        ],
        cons: [
          'Requer escavação perimetral — obra exterior significativa (1-2 semanas)',
          'Custo mais elevado que soluções interiores, mas mais eficaz e duradouro',
        ],
      },
      {
        title: 'Tanking Interior para Reabilitação Sem Escavação',
        description: 'Para caves existentes com infiltrações onde a escavação exterior não é viável (moradias em banda, edifícios adjacentes). EPDM ancorado mecanicamente ao interior das paredes e laje, com canal de drenagem perimetral. Obra totalmente interior.',
        pros: [
          'Obra totalmente interior — sem escavação, mínima perturbação aos moradores',
          'Aplicável a caves em banda ou com edifícios adjacentes onde a escavação é impossível',
          'Canal de drenagem perimetral como sistema de segurança complementar',
          'Combinável com instalação de ventilação de radão sub-laje',
        ],
        cons: [
          'Sistema negativo — não impede a água de contactar o betão; gere a entrada',
          'Ligeira redução do espaço interior pela câmara de ar (30-50 mm por parede)',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Vida útil documentada (campo)',
        epdm: '50+ anos (ERA: elongação retida 180-240% aos 28-32 anos)',
        alternatives: [
          { name: 'Tela betuminosa SBS/APP', value: '10-20 anos em clima português (UV intenso)' },
          { name: 'Folha de PVC plastificado', value: '15-25 anos (perda de plastificantes' },
          { name: 'Líquido de poliuretano (PU)', value: '5-10 anos (recoating necessário)' },
        ],
      },
      {
        feature: 'Resistência UV (Portugal — 2.500-3.000 h sol/ano)',
        epdm: 'Intrínseca — cadeia saturada, sem mecanismo de fotoxidação',
        alternatives: [
          { name: 'Tela betuminosa SBS/APP', value: 'Fraca — fotoxidação nas ligações C=C do SBS' },
          { name: 'Folha de PVC plastificado', value: 'Boa com plastificante intacto; degrada ao perder plastificante' },
        ],
      },
      {
        feature: 'Instalação sem chama (habitação com madeiras adjacentes)',
        epdm: 'Sim — adesivo de base aquosa, sem maçarico',
        alternatives: [
          { name: 'Tela betuminosa (torch)', value: 'Não — risco real de incêndio em estruturas de madeira' },
          { name: 'Líquido PU', value: 'Sim — mas solventes voláteis' },
        ],
      },
      {
        feature: 'Manutenção periódica',
        epdm: 'Nenhuma — apenas inspeção visual anual recomendada',
        alternatives: [
          { name: 'Tela betuminosa SBS/APP', value: 'Anual recomendada + substituição a 15-20 anos' },
          { name: 'Líquido PU', value: 'Recoating obrigatório a 5-10 anos' },
        ],
      },
      {
        feature: 'Certificação cobertura verde (raízes)',
        epdm: 'Sim — FLL e EN 13948 (versão 2,0 mm)',
        alternatives: [
          { name: 'Tela betuminosa SBS/APP', value: 'Não — raízes penetram o betume' },
          { name: 'Folha de PVC plastificado', value: 'Não recomendado — raízes e interface betume incompatível' },
        ],
      },
      {
        feature: 'IVA aplicável em reabilitação residencial',
        epdm: '6% — Membriko emite fatura com taxa reduzida (IMPIC registada)',
        alternatives: [
          { name: 'Qualquer material em obra de reabilitação', value: '6% — taxa reduzida disponível para qualquer sistema se o empreiteiro for registado' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Norte Atlântico (Minho, Douro Litoral — Humidade e Chuva)',
        description: 'Precipitação de 1.200-1.800 mm anuais no noroeste exige coberturas com impermeabilidade garantida em condições de chuva persistente. O EPDM sem manutenção é a solução ideal para habitação no noroeste português — especialmente para coberturas de casas de férias desocupadas no inverno, onde não há ninguém para detetar infiltrações no início.',
      },
      {
        zone: 'Interior (Trás-os-Montes, Beiras — Geadas e Calor Intenso)',
        description: 'Moradias no interior com invernos frios (geadas frequentes, temperaturas abaixo de -5°C) e verões quentes (coberturas a 80-85°C em agosto). O EPDM resiste a ciclos gelo-degelo e a temperaturas de superfície de 150°C sem degradação. Em Trás-os-Montes e Beira Interior — zonas de risco geológico de radão — a membrana EPDM é simultaneamente a solução de impermeabilização e a barreira de radão recomendada pela DGS.',
      },
      {
        zone: 'Sul e Algarve (Segunda Habitação e Turismo)',
        description: 'Habitação de uso não permanente no Algarve e Alentejo beneficia especialmente do EPDM — impermeabilização que funciona sem manutenção durante longos períodos de não ocupação. Coberturas atingem 85-90°C em julho-agosto; o betume amolece e flui nestas condições. Para habitações de férias com piscina integrada ou jardim de cobertura, o EPDM FLL é o único sistema que combina impermeabilidade a longo prazo com resistência a raízes.',
      },
      {
        zone: 'Lisboa e Porto (Condomínios e Reabilitação Urbana)',
        description: 'O parque habitacional pré-1990 dos centros históricos de Lisboa e Porto tem a maior concentração de coberturas betuminosas em fim de vida. A sobre-cobertura EPDM (over-membrane) sobre betume existente é frequentemente a solução mais económica — elimina a remoção total e a perturbação dos condóminos. A documentação técnica da Membriko é formatada para apresentação em Assembleia de Condóminos, facilitando a aprovação por maioria qualificada.',
      },
      {
        zone: 'Zonas Costeiras (Cloretos e Ambiente Marinho)',
        description: 'Moradias e apartamentos em zonas costeiras — Costa Vicentina, Algarve, Costa da Prata — enfrentam ambiente marinho com cloretos e humidade salina que degradam membranas betuminosas e PVC muito mais rapidamente. O EPDM é completamente inerte a água salgada e soluções de cloreto, mantendo o desempenho de impermeabilização sem degradação acelerada em proximidade ao mar.',
      },
    ],
    faqs: [
      {
        question: 'Posso impermeabilizar a minha varanda sem retirar os azulejos existentes?',
        answer: 'Depende da condição dos azulejos e do substrato. Se os azulejos estiverem solidamente aderidos e o betonilha subjacente for estruturalmente sólido e seco, a Membriko pode preparar a superfície e aplicar EPDM sobre o sistema existente. Se a sondagem com martelo detetar azulejos ocos, ou se a medição resistiva identificar humidade retida, a Membriko recomenda a remoção total. A visita de diagnóstico determina a abordagem correta.',
      },
      {
        question: 'Vale a pena escolher EPDM em vez de betume para a cobertura da minha moradia?',
        answer: 'Para quem planeia ficar na moradia por 20+ anos, o EPDM tem custo total de propriedade inferior ao betume (sem substituições ao longo de 50 anos vs 2-3 substituições com betume). Para habitações em zonas com UV intenso (Alentejo, Algarve), a vantagem é ainda maior porque o betume degrada muito mais rapidamente do que a maioria dos proprietários espera. A garantia de 20 anos da Membriko e o IVA a 6% tornam a decisão mais clara.',
      },
      {
        question: 'O EPDM na cave da minha moradia vai resolver a humidade crónica?',
        answer: 'Sim, se aplicado exteriormente com o sistema correto (EPDM + geocompósito de drenagem + dreno francês + aterro controlado). O sistema exterior positivo bloqueia a água antes de contactar o betão — é a solução mais eficaz. Para caves onde a escavação exterior não é viável, o tanking interior com EPDM ancorado mecanicamente e drenagem perimetral é uma alternativa eficaz, embora menos definitiva.',
      },
      {
        question: 'Posso criar um jardim ou terraço na cobertura plana da minha moradia com EPDM?',
        answer: 'Sim. Com EPDM 2,0 mm FLL (certificação EN 13948 para resistência a raízes) e o sistema adequado de drenagem e substrato, é possível criar jardim, horta urbana ou terraço ajardinado. A consideração crítica é a estrutura portante: coberturas verdes extensivas adicionam 120-150 kg/m². A Membriko coordena com engenheiro de estruturas para verificar a capacidade da laje antes de especificar este sistema.',
      },
      {
        question: 'Qual o impacto da impermeabilização EPDM no meu certificado energético?',
        answer: 'A membrana EPDM em si tem resistência térmica negligenciável. Mas quando instalada como parte de um sistema de cobertura quente sobre isolamento PIR (prática standard da Membriko), o sistema melhora significativamente o U-value da cobertura — de 2,0-3,0 W/m²K (laje não isolada) para 0,22 W/m²K com 100 mm PIR. Esta melhoria pode contribuir para a subida de uma a duas classes energéticas no Certificado de Desempenho Energético, com impacto direto no valor de mercado.',
      },
      {
        question: 'O IVA a 6% aplica-se à impermeabilização do meu apartamento?',
        answer: 'A taxa reduzida de IVA de 6% (Lista II-Verba 2.27 do Código do IVA) aplica-se a obras de conservação, manutenção, reparação e reabilitação em edifícios de habitação com pelo menos 2 anos de construção, realizadas por empreiteiro licenciado. A Membriko é registada no IMPIC e emite faturas com taxa de 6% para todos os projetos residenciais qualificados — incluindo obras em condomínios e apartamentos arrendados. Fornecemos a documentação necessária para suporte de deduções fiscais em IRS.',
      },
      {
        question: 'Quanto tempo durarão os trabalhos numa moradia típica?',
        answer: 'Uma moradia unifamiliar com cobertura plana de 100-150 m² demora tipicamente 3-5 dias úteis da preparação do substrato à conclusão, incluindo o ensaio de estanquidade e instalação de drenos. Projetos de maior complexidade — múltiplos planos de cobertura, isolamento simultâneo, cobertura verde, pontos singulares numerosos — podem requerer 7-10 dias. A Membriko entrega um programa de trabalhos escrito com cada proposta.',
      },
      {
        question: 'O que acontece se aparecer uma infiltração durante o período de garantia?',
        answer: 'A garantia de 20 anos da Membriko cobre defeitos de materiais e de execução de instalação. Em caso de infiltração durante o período de garantia, a Membriko realiza visita de diagnóstico, identifica a causa e executa a reparação sem custos para o cliente se o defeito for coberto pela garantia. A garantia é entregue como certificado escrito na conclusão dos trabalhos — tem valor jurídico e comercial demonstrável na venda ou arrendamento do imóvel.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'basements', 'balconies'],
  },
  en: {
    meta: {
      title: 'Residential Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for waterproofing houses and apartments. Flat roofs, terraces, balconies and basements with 50+ year service life. 6% VAT on renovation. Portugal.',
      keywords: ['house waterproofing EPDM', 'apartment waterproofing membrane', 'home EPDM roof', 'residential waterproofing Portugal', 'EPDM residential', 'balcony waterproofing condominium'],
    },
    hero: {
      headline: 'Houses and Apartments Waterproofed with EPDM for Life',
      subtitle: 'EPDM for housing protects roofs, terraces, balconies and basements with a single installation for 50+ years — cold flame-free installation, 6% VAT on renovation works, 20-year guarantee and zero maintenance.',
      stats: [
        { value: '50+', label: 'Years documented service life' },
        { value: '6%', label: 'VAT rate on renovation' },
        { value: '0', label: 'Periodic maintenance required' },
        { value: '20 years', label: 'Installation guarantee' },
      ],
    },
    problem: {
      title: 'Waterproofing Problems in Residential Buildings',
      description: 'In Portugal, more than 60% of buildings were constructed before 1990 with waterproofing systems designed for a 15-20 year service life that have never been adequately replaced. The 2021 Census (INE) established that approximately 1.2 million dwellings showed moderate or major repair needs, with moisture cited as the most frequent cause. The typical response has been palliative: waterproof paints that fail in 2-4 years, mastic at visible joints, liquid bitumen over roofs. Each repair cycle creates a substrate of incompatible superimposed systems — and the problem returns worse than before.',
      points: [
        'Bituminous house roof membrane replaces at 15-20 years — €5,000 to €15,000 per replacement, recurring throughout the owner\'s lifetime',
        'Apartment balconies commonly cause infiltrations to the apartment below — residents\' disputes and legal claims under the Civil Code',
        'Basements without adequate waterproofing have permanent moisture, mould, radon in geological risk zones, and unusable space',
        'Portugal receives 2,500-3,000 hours of sunshine annually — double the UK — degrading bituminous membranes far faster than Northern European data sheets suggest',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Residential',
      description: 'EPDM for housing offers a definitive solution for roofs, terraces, balconies and basements. EPDM\'s saturated polymer chain is chemically inert to UV and ozone — its resistance is not depleted over time as happens with protective coatings. Vulcanisation creates a three-dimensional cross-linked network that maintains elasticity from -45°C to +150°C throughout the building\'s service life.',
      points: [
        'House flat roof with EPDM — single installation for the entire home life, no anticipated replacement cycle',
        'Apartment balcony with EPDM — eliminates residents\' disputes and fulfils the Civil Code conservation obligation',
        'Basement with exterior EPDM on walls and base slab — dry habitable space, with simultaneous radon protection in geological risk zones',
        '6% VAT (Lista II-Verba 2.27 of the Código do IVA) on residential renovation works — saving €2,070 on a €15,000 project',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Definitive Protection — 50+ Years Field-Documented',
        description: 'A single EPDM installation protects housing for 50+ years — documented by the ERA study (membranes aged 28-32 years with retained elongation of 180-240%) and the SKZ study (median projected service life exceeding 50 years by Arrhenius methodology). Unlike paints (2-4 years) and bitumen (15-20 years), EPDM has no UV degradation mechanism: its saturated polymer backbone has no double C=C bonds to photooxidise.',
      },
      {
        icon: 'Euro',
        title: '6% VAT and Lower Total Cost of Ownership',
        description: 'Waterproofing works on residential buildings qualify for reduced 6% VAT (instead of 23%) under Lista II-Verba 2.27 of the Código do IVA — saving €2,070 on a €15,000 project and €5,520 on a €40,000 project with insulation included. Total EPDM cost of ownership over 50 years is significantly lower than bitumen when 2-3 replacements are included.',
      },
      {
        icon: 'Clock',
        title: 'Zero Periodic Maintenance',
        description: 'EPDM requires no periodic painting, sealant reapplication, UV treatment or maintenance product of any kind. Membriko seams are sealed with pressure-activated butyl tape — they require no periodic resealing if correctly installed. Membriko recommends only annual visual inspection in October (check drains, parapets and any physical damage) and, after severe storms, checking for sharp metal debris.',
      },
      {
        icon: 'Droplets',
        title: 'Habitable Basements and Radon Protection',
        description: 'EPDM applied externally to basement walls and base slab creates a completely dry basement, transforming unusable space into habitable area. In geological radon risk zones (Beira Interior, Trás-os-Montes, Serra da Estrela), EPDM membrane is recognised by Portugal\'s DGS as an effective Rn-222 retention barrier (BRE 211, EN 13829).',
      },
      {
        icon: 'Thermometer',
        title: 'Thermal Comfort and REH Energy Certificate',
        description: 'EPDM + PIR warm-roof installation improves the U-value from 2.0-3.0 W/m²K (uninsulated slab) to 0.18-0.22 W/m²K (100-120 mm PIR) — exceeding the REH requirement of 0.35 W/m²K by more than 37%. Indoor temperature reduction of 3-5°C in July-August for top-floor apartments. The improved Energy Performance Certificate is mandatory documentation for property sale and rental in Portugal.',
      },
      {
        icon: 'Leaf',
        title: 'Green Roof and Landscaped Terrace',
        description: 'For houses with flat roofs, FLL-certified EPDM (EN 13948) supports a garden, urban allotment or planted terrace — completely invisible beneath the planting substrate. Extensive green roofs (10-15 cm substrate) add 120-150 kg/m² to the slab; intensive (30+ cm) add 300-500 kg/m². Structural verification is mandatory. Membriko coordinates with a structural engineer when this configuration is specified.',
      },
    ],
    specs: [
      { label: 'Thickness (roof and terrace)', value: '1.2 mm / 1.5 mm (standard) / 2.0 mm (green roof or intensive traffic)' },
      { label: 'Thickness (basement and balcony)', value: '1.5 mm' },
      { label: 'Elongation at break', value: '≥ 300%, typical 400-500% (EN 12311-2)' },
      { label: 'Service temperature', value: '-45°C to +150°C' },
      { label: 'UV resistance (exposed)', value: 'Intrinsic — saturated backbone, no C=C double bonds' },
      { label: 'Freeze-thaw resistance', value: 'Excellent — glass transition temperature -60°C to -50°C' },
      { label: 'Green roof certification', value: 'FLL and EN 13948 (2.0 mm version)' },
      { label: 'Standard', value: 'EN 13956 Type 3 — CE marking' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Diagnosis and Free Technical Visit',
        description: 'Home inspection: identification of zones to waterproof, substrate assessment (tap testing for tiled balconies, resistive moisture measurement for roofs), identification of active infiltrations. Membriko performs the technical visit at no cost and without obligation — the written report includes current condition assessment, recommended solution and indicative programme.',
      },
      {
        step: 2,
        title: 'Main Roof',
        description: 'Substrate preparation. Decision: over-membrane installation (where substrate is sound and dry) or full strip-out (where moisture is trapped or existing waterproofing has delaminated). PIR thermal insulation installation (80-120 mm depending on U-value target). EPDM installation with flashings, gutters and singular points — no mastic as primary element on any singular point.',
      },
      {
        step: 3,
        title: 'Balconies and Terraces',
        description: 'Balcony slab preparation. EPDM installation with wall upstands (minimum 150 mm above finish level). Drain treatment with EPDM or cast iron flange — membrane passes under the clamping ring, no exposed mastic on any drain. Prefabricated EPDM threshold flashing for the junction with the door frame. Final surfacing in ceramic, stone or composite decking on adjustable pedestals.',
      },
      {
        step: 4,
        title: 'Basement and Foundations',
        description: 'For basements with exterior access: EPDM applied to positive (external) face of walls and base slab before backfilling — positive system of maximum effectiveness. For rehabilitation without exterior access: internal tanking system with mechanically anchored EPDM and perimeter drainage channel. In radon risk zones: integrated sub-slab ventilation geocomposite installation.',
      },
      {
        step: 5,
        title: 'Singular Points and Full Continuity',
        description: 'All membrane penetrations — drainage pipes, electrical conduits, antenna masts, solar panel brackets, rooflights — receive prefabricated EPDM pipe boots or stainless steel pressure-ring collars. No singular point is sealed with bituminous mastic or silicone as primary element. Expansion joints treated with prefabricated EPDM profiles accommodating ±50 mm of movement.',
      },
      {
        step: 6,
        title: 'Watertightness Test',
        description: 'Flood test (for accessible terraces and balconies — minimum 50 mm water level for 24 hours) or electronic leak detection (ELD) before covering the membrane with final surfacing. All singular points verified with metal probe. Without passing the test, no advancement to final surfacing.',
      },
      {
        step: 7,
        title: 'Warranty, Documentation and Maintenance Plan',
        description: 'Issue of 20-year warranty per waterproofed zone, transferable on property sale. Technical dossier: membrane data sheets, photographic installation record, watertightness test result, and annual maintenance recommendations (visual inspection in October + drain verification). Membriko offers an optional annual maintenance contract.',
      },
      {
        step: 8,
        title: 'Tax Documentation (6% VAT)',
        description: 'Membriko is a construction company registered with IMPIC and issues invoices at 6% VAT for all qualifying residential renovation projects under Lista II-Verba 2.27 of the Código do IVA. We provide clients with the documentation needed to support IRS tax deductions where applicable.',
      },
    ],
    techniques: [
      {
        title: 'Warm Roof with EPDM over PIR Insulation',
        description: 'For flat or gently sloped roofs. Bonded or mechanically fastened EPDM over PIR insulation. Most durable residential roofing system on the market — combines 50+ year impermeability with REH-compliant thermal improvement.',
        pros: [
          'Service life exceeding bituminous roof (50+ years vs 15-20 years)',
          'Simultaneous U-value improvement — U = 0.22 W/m²K with 100 mm PIR (exceeds REH by 37%)',
          'Terrace or garden on the roof possible with FLL EPDM',
          'Cold installation — no flame, no fire risk near timber structures or pergolas',
        ],
        cons: [
          'Higher initial cost than bitumen (offset by avoiding 2-3 replacements over 50 years)',
          'Flat roof aesthetic differs from pitched roof (may require planning permission in some municipalities)',
        ],
      },
      {
        title: 'Basement Rehabilitation with Exterior EPDM',
        description: 'For basements with chronic moisture where exterior access is available. Perimeter excavation, EPDM on exterior walls + drainage geocomposite + French drain + controlled backfill. Definitive dry basement solution.',
        pros: [
          'Basement goes from unusable damp space to habitable area — property value increase of €20,000-€50,000+',
          'Positive system — water blocked before contacting concrete',
          'Simultaneous radon protection in geological risk zones (BRE 211)',
          'Eliminates recurring chronic moisture costs (treatments, maintenance, damaged belongings)',
        ],
        cons: [
          'Requires perimeter excavation — significant exterior works (1-2 weeks)',
          'Higher cost than interior solutions, but more effective and durable',
        ],
      },
      {
        title: 'Internal Tanking for Rehabilitation Without Excavation',
        description: 'For existing basements with infiltrations where exterior excavation is not feasible (terraced houses, adjacent buildings). EPDM mechanically anchored to the interior of walls and slab with perimeter drainage channel. Fully interior works.',
        pros: [
          'Fully interior works — no excavation, minimal disruption to occupants',
          'Applicable to terraced houses or with adjacent buildings where excavation is impossible',
          'Perimeter drainage channel as complementary safety system',
          'Combinable with sub-slab radon ventilation installation',
        ],
        cons: [
          'Negative system — does not prevent water contacting concrete; manages entry',
          'Slight interior space reduction from air cavity (30-50 mm per wall)',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Documented service life (field data)',
        epdm: '50+ years (ERA: retained elongation 180-240% at 28-32 years)',
        alternatives: [
          { name: 'SBS/APP bituminous felt', value: '10-20 years in Portuguese climate (intense UV)' },
          { name: 'Plasticised PVC sheet', value: '15-25 years (plasticiser loss leads to cracking)' },
          { name: 'Liquid polyurethane (PU)', value: '5-10 years (recoating required)' },
        ],
      },
      {
        feature: 'UV resistance (Portugal — 2,500-3,000 sun hours/year)',
        epdm: 'Intrinsic — saturated backbone, no photooxidation mechanism',
        alternatives: [
          { name: 'SBS/APP bituminous felt', value: 'Poor — photooxidation at C=C bonds of SBS block' },
          { name: 'Plasticised PVC sheet', value: 'Good with intact plasticiser; degrades as plasticiser is lost' },
        ],
      },
      {
        feature: 'Flame-free installation near timber structures',
        epdm: 'Yes — water-based adhesive, no torch',
        alternatives: [
          { name: 'Bituminous felt (torch)', value: 'No — genuine fire risk near timber structures' },
          { name: 'Liquid PU', value: 'Yes — but volatile solvents present' },
        ],
      },
      {
        feature: 'Periodic maintenance',
        epdm: 'None — annual visual inspection only recommended',
        alternatives: [
          { name: 'SBS/APP bituminous felt', value: 'Annual recommended + replacement at 15-20 years' },
          { name: 'Liquid PU', value: 'Mandatory recoating at 5-10 years' },
        ],
      },
      {
        feature: 'Green roof certification (root resistance)',
        epdm: 'Yes — FLL and EN 13948 (2.0 mm version)',
        alternatives: [
          { name: 'SBS/APP bituminous felt', value: 'No — roots penetrate bitumen readily' },
          { name: 'Plasticised PVC sheet', value: 'Not recommended — roots and bitumen interface incompatible' },
        ],
      },
      {
        feature: 'VAT applicable on residential renovation',
        epdm: '6% — Membriko issues invoice at reduced rate (IMPIC registered)',
        alternatives: [
          { name: 'Any material in renovation works', value: '6% reduced rate available for any system when contractor is registered' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Atlantic North (Minho, Douro Litoral — Humidity and Rain)',
        description: '1,200-1,800 mm of annual rainfall in the northwest demands roofs with guaranteed impermeability under sustained wet conditions. Maintenance-free EPDM is the ideal solution for housing in northwest Portugal — especially for holiday homes unoccupied in winter, where nobody is present to detect early infiltration signs before they cause significant damage.',
      },
      {
        zone: 'Interior (Trás-os-Montes, Beiras — Frost and Intense Heat)',
        description: 'Houses in the interior experience cold winters (frequent frost, temperatures below -5°C) and hot summers (roofs reaching 80-85°C in August). EPDM resists freeze-thaw cycling and surface temperatures of 150°C without degradation. In Trás-os-Montes and Beira Interior — geological radon risk zones — EPDM membrane simultaneously serves as waterproofing and DGS-recognised radon retention barrier.',
      },
      {
        zone: 'South and Algarve (Second Homes and Tourism)',
        description: 'Non-permanent residential use in Algarve and Alentejo especially benefits from EPDM — waterproofing that functions without maintenance during extended periods of non-occupancy. Roofs reach 85-90°C in July-August; bitumen softens and flows under these conditions. For holiday homes with integrated pools or green roofs, FLL EPDM is the only system combining long-term impermeability with root resistance.',
      },
      {
        zone: 'Lisbon and Porto (Condominiums and Urban Rehabilitation)',
        description: 'The pre-1990 residential stock of Lisbon and Porto historic centres has the highest concentration of bituminous roofing at end of service life. The EPDM over-membrane approach over existing bitumen is frequently the most economical solution — eliminating full removal and minimising condominium resident disruption. Membriko\'s technical documentation is formatted for presentation at Condominium Assembly, facilitating approval by qualified majority under Article 1427 of the Civil Code.',
      },
      {
        zone: 'Coastal Zones (Chlorides and Marine Environment)',
        description: 'Homes and apartments in coastal locations — Costa Vicentina, Algarve, Costa da Prata — face marine chloride and salt humidity that degrades bituminous and PVC membranes far faster than inland. EPDM is completely inert to salt water and chloride solutions, maintaining waterproofing performance without accelerated degradation in coastal proximity.',
      },
    ],
    faqs: [
      {
        question: 'Can I waterproof my balcony without removing the existing tiles?',
        answer: 'This depends on the condition of the tiles and the substrate beneath them. Where tiles are solidly adhered and the screed underneath is structurally sound and dry, Membriko can prepare the surface and apply EPDM over the existing system. Where hollow-sounding tiles are detected by tapping, or where moisture measurement identifies trapped moisture, Membriko recommends full strip-out before EPDM is applied. The diagnostic site visit determines the correct approach.',
      },
      {
        question: 'Is it worth choosing EPDM instead of bitumen for my house roof?',
        answer: 'For those planning to stay in the house for 20+ years, EPDM has lower total cost of ownership than bitumen (no replacements over 50 years vs 2-3 with bitumen). For properties in high-UV zones (Alentejo, Algarve), the advantage is greater still because bitumen degrades much faster than most homeowners expect. Membriko\'s 20-year warranty and the 6% VAT rate make the decision clearer.',
      },
      {
        question: 'Will EPDM in my house basement solve chronic moisture?',
        answer: 'Yes, if applied externally with the correct system (EPDM + drainage geocomposite + French drain + controlled backfill). The positive exterior system blocks water before it contacts concrete — it is the most effective solution. For basements where exterior excavation is not feasible, internal tanking with mechanically anchored EPDM and perimeter drainage is an effective alternative, though less definitive than the external system.',
      },
      {
        question: 'Can I create a garden or terrace on my house flat roof with EPDM?',
        answer: 'Yes. With FLL-certified 2.0 mm EPDM (EN 13948 root resistance certification) and the appropriate drainage and substrate system, it is possible to create a garden, urban allotment or planted terrace. The critical consideration is the load-bearing capacity of the slab: extensive green roofs add approximately 120-150 kg/m². Membriko coordinates with a structural engineer to verify slab capacity when this configuration is specified.',
      },
      {
        question: 'What is the impact of EPDM waterproofing on my energy performance certificate?',
        answer: 'The EPDM membrane itself has negligible thermal resistance. However, when installed as part of a warm-roof system over PIR insulation — standard Membriko practice for renovation projects — the combined system dramatically improves the roof U-value from 2.0-3.0 W/m²K (uninsulated slab) to 0.22 W/m²K with 100 mm PIR. This can contribute to an improvement of one to two EPC classes, with a direct impact on market value and rental yield.',
      },
      {
        question: 'Does the 6% VAT rate apply to waterproofing work on my apartment?',
        answer: 'The reduced 6% VAT rate (Lista II-Verba 2.27, Código do IVA) applies to works of conservation, maintenance, repair and renovation on residential buildings regardless of whether they are owner-occupied or rented, provided the building is at least two years old and works are carried out by a licensed contractor. Works on a shared building element (such as the building roof) managed by the condominium committee also qualify under the same conditions. Membriko is registered with IMPIC and issues invoices at the 6% rate for all qualifying projects.',
      },
      {
        question: 'How long will installation take on a typical family home?',
        answer: 'A single-family home with a flat roof of 100-150 m² typically takes three to five working days from substrate preparation to completion, including the flood test and drain installation. More complex projects — multiple roof planes, simultaneous insulation, green roof, high numbers of singular points — may require seven to ten working days. Membriko provides a written day-by-day programme with every project quotation.',
      },
      {
        question: 'What happens if a leak appears during the warranty period?',
        answer: 'Membriko\'s 20-year warranty covers defects in materials and installation workmanship. If moisture ingress occurs during the warranty period, Membriko carries out a site investigation, identifies the cause and undertakes repair at no cost to the client if the defect falls within the warranty scope. The warranty is delivered as a formal written certificate at project handover — retained with property title documents, it has demonstrable legal and commercial value in any future sale or remortgage.',
      },
    ],
    relatedSlugs: ['flat-roofs', 'basements', 'balconies'],
  },
}
