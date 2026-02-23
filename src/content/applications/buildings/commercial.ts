import type { ApplicationData } from '../types'

export const commercial: ApplicationData = {
  id: 'commercial',
  categoryId: 'buildings',
  pt: {
    meta: {
      title: 'Impermeabilização de Edifícios Comerciais com EPDM | Membriko',
      description: 'Membrana EPDM para coberturas e estruturas de centros comerciais, escritórios e lojas. Desempenho superior em coberturas verdes e terraços acessíveis. Portugal.',
      keywords: ['impermeabilização edifício comercial EPDM', 'cobertura centro comercial', 'escritório impermeabilização membrana', 'EPDM edifício serviços', 'cobertura comercial impermeável'],
    },
    hero: {
      headline: 'Edifícios Comerciais com Coberturas EPDM de Alto Desempenho',
      subtitle: 'O EPDM em edifícios comerciais combina impermeabilidade de 50+ anos com possibilidade de coberturas verdes, terraços acessíveis e integração solar — acrescentando valor ao imóvel.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'A', label: 'Classe de energia (cool roof)' },
        { value: '400%', label: 'Elongação' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Coberturas Comerciais',
      description: 'As coberturas de edifícios comerciais têm exigências que vão além da simples impermeabilização: desempenho energético, sustentabilidade, acesso para manutenção de equipamentos AVAC, e cada vez mais, espaços verdes ou de convívio.',
      points: [
        'Coberturas de centros comerciais com AVAC extenso criam múltiplos pontos singulares de infiltração',
        'Certificação energética de edifícios comerciais beneficia de coberturas frias ou verdes',
        'Terraços de uso público em edifícios comerciais requerem impermeabilização resistente a tráfego pedonal',
        'Gestores de propriedade comercial evitam membranas com substituição frequente que perturbam a actividade',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Edifícios Comerciais',
      description: 'O EPDM em edifícios comerciais oferece impermeabilidade a longo prazo com flexibilidade para diferentes usos de cobertura. A versão branca/clara para cool roof melhora a eficiência energética do edifício.',
      points: [
        'EPDM branco com SRI ≥ 90 para certificação LEED e melhoria energética de edifícios comerciais',
        'Compatível com coberturas verdes para certificações BREEAM e LEED',
        'Tratamento especializado de penetrações AVAC com mangas EPDM sem manutenção',
        'Terraços acessíveis sobre EPDM com sistema completo de proteção e acabamento',
      ],
    },
    benefits: [
      { icon: 'Thermometer', title: 'Cool Roof para Certificação Energética', description: 'EPDM branco com SRI ≥ 90 reduz temperatura de cobertura em 30-40°C, diminuindo consumo de ar condicionado e melhorando certificação energética do edifício.' },
      { icon: 'Leaf', title: 'Compatível com LEED e BREEAM', description: 'O EPDM é elegível para pontos em certificações de sustentabilidade por durabilidade, cool roof e compatibilidade com coberturas verdes.' },
      { icon: 'Shield', title: 'Proteção de Longo Prazo', description: 'Com vida útil de 50+ anos, o EPDM elimina perturbações da actividade comercial por obras de substituição de impermeabilização durante décadas.' },
      { icon: 'Wrench', title: 'Integração com AVAC', description: 'Acessórios EPDM para penetrações de unidades AVAC, condutas e cabos eliminam os pontos de infiltração mais comuns em coberturas comerciais.' },
      { icon: 'Layers', title: 'Terraços de Uso Público', description: 'Sistema EPDM + proteção + acabamento para terraços comerciais com tráfego pedonal intenso — restaurantes de cobertura, eventos, áreas de convívio.' },
      { icon: 'Euro', title: 'Valorização do Imóvel', description: 'Cobertura com EPDM de longa duração, eventualmente verde ou cool roof, é um ativo que valoriza o imóvel comercial em vendas e arrendamentos.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm (standard) / 2,0 mm (terraços acessíveis)' },
      { label: 'Versão cool roof', value: 'EPDM branco — SRI ≥ 90' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +130°C' },
      { label: 'Resistência a raízes (cobertura verde)', value: 'FLL — certificado (versão 2,0 mm)' },
      { label: 'Classificação de fogo', value: 'E-root — EN 13956' },
      { label: 'Certificações sustentabilidade', value: 'LEED, BREEAM, HQE elegível' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto e Certificações', description: 'Definição dos objetivos de certificação energética ou sustentabilidade. Escolha entre EPDM preto, branco ou versão cool roof. Mapeamento de AVAC e outros equipamentos.' },
      { step: 2, title: 'Preparação do Suporte', description: 'Preparação da laje de betão ou deck metálico. Instalação de isolamento térmico de alta performance (PIR, EPS grafite). Regularização.' },
      { step: 3, title: 'EPDM + Pontos Singulares', description: 'Instalação do EPDM sobre isolamento. Tratamento de todas as penetrações AVAC com mangas específicas. Rufos em parapeitos e juntas de dilatação.' },
      { step: 4, title: 'Cobertura Verde ou Cool Roof', description: 'Se aplicável: instalação de sistema cobertura verde extensiva ou intensiva sobre o EPDM. Ou simplesmente deixar EPDM branco exposto como cool roof.' },
      { step: 5, title: 'Terraços Acessíveis', description: 'Se aplicável: instalação de proteção de betão + revestimento pedonal em zonas de terraço acessível sobre o EPDM.' },
      { step: 6, title: 'Garantia e Certificação', description: 'Emissão de garantia de 20 anos. Documentação para processo de certificação LEED/BREEAM se aplicável.' },
    ],
    techniques: [
      {
        title: 'Cool Roof com EPDM Branco',
        description: 'EPDM branco ou cinzento claro com SRI ≥ 90. Instalação mecanicamente fixada ou aderente sobre isolamento. Para edifícios com necessidades de certificação energética.',
        pros: ['Redução de 30-40°C na temperatura de cobertura', 'Melhoria imediata de certificação energética', 'Compatível com LEED e BREEAM'],
        cons: ['Custo ligeiramente superior ao EPDM preto', 'Sujidade visível requer limpeza ocasional'],
      },
      {
        title: 'Cobertura Verde Extensiva sobre EPDM',
        description: 'EPDM 2,0 mm FLL + drenante + substrato extensivo (60-100 mm) + sedum ou gramíneas. Para edifícios comerciais com objetivos de sustentabilidade urbana.',
        pros: ['Pontos LEED e BREEAM por gestão de águas pluviais e biodiversidade', 'Isolamento térmico adicional pela camada viva', 'Redução do efeito ilha de calor urbano'],
        cons: ['Carga adicional de substrato (150-200 kg/m²)', 'Investimento inicial superior'],
      },
    ],
    comparison: [
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'PVC mecanicamente fixado', value: '25-30 anos' }, { name: 'Betume modificado', value: '20 anos' }] },
      { feature: 'Versão cool roof disponível', epdm: 'Sim — SRI ≥ 90', alternatives: [{ name: 'PVC mecanicamente fixado', value: 'Sim' }, { name: 'Betume modificado', value: 'Com pintura refletante' }] },
    ],
    climate: [
      { zone: 'Lisboa e Porto (Clima Temperado)', description: 'Edifícios comerciais em centros urbanos beneficiam da versão cool roof EPDM branco para redução de temperatura e certificação energética.' },
      { zone: 'Algarve (Turismo e Hotelaria)', description: 'Hotéis e resorts do Algarve com coberturas extensas beneficiam do EPDM cool roof para redução de carga de ar condicionado e custos energéticos.' },
      { zone: 'Norte (Coberturas Verdes)', description: 'Clima húmido do norte é ideal para coberturas verdes sobre EPDM — vegetação densa e sem rega adicional, com gestão de água pluvial eficiente.' },
    ],
    faqs: [
      { question: 'O EPDM contribui para a certificação LEED de um edifício comercial?', answer: 'Sim. O EPDM branco contribui para o crédito SS7.2 (Heat Island Effect — Roof) com SRI ≥ 82. O EPDM em coberturas verdes contribui para SS6 (Stormwater Management) e SS7.2. A durabilidade de 50+ anos também contribui para créditos de materiais.' },
      { question: 'É possível criar um jardim ou restaurante no terraço de um centro comercial com EPDM?', answer: 'Sim. O EPDM 2,0 mm com proteção adequada suporta terraços de uso intensivo, incluindo mobiliário, estruturas temporárias e cargas de pessoas. O sistema é projetado para as cargas específicas de cada uso.' },
    ],
    relatedSlugs: ['flat-roofs', 'green-roofs', 'cool-reflective-roofs'],
  },
  en: {
    meta: {
      title: 'Commercial Building Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for roofs and structures of shopping centres, offices and shops. Superior performance in green roofs and accessible terraces. Portugal.',
      keywords: ['commercial building waterproofing EPDM', 'shopping centre roof', 'office waterproofing membrane', 'EPDM services building', 'commercial waterproof roof'],
    },
    hero: {
      headline: 'Commercial Buildings with High-Performance EPDM Roofs',
      subtitle: 'EPDM in commercial buildings combines 50+ year impermeability with green roof, accessible terrace and solar integration possibilities — adding property value.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'A', label: 'Energy class (cool roof)' },
        { value: '400%', label: 'Elongation' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Commercial Roof Challenge',
      description: 'Commercial building roofs have demands beyond simple waterproofing: energy performance, sustainability, HVAC maintenance access, and increasingly, green spaces or social areas.',
      points: [
        'Shopping centre roofs with extensive HVAC create multiple infiltration singular points',
        'Commercial building energy certification benefits from cool or green roofs',
        'Public-use terraces on commercial buildings require pedestrian traffic-resistant waterproofing',
        'Commercial property managers avoid frequent-replacement membranes that disrupt activity',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Commercial Buildings',
      description: 'EPDM in commercial buildings offers long-term impermeability with flexibility for different roof uses. The white/light version for cool roof improves building energy efficiency.',
      points: [
        'White EPDM with SRI ≥ 90 for LEED certification and commercial building energy improvement',
        'Compatible with green roofs for BREEAM and LEED certifications',
        'Specialist HVAC penetration treatment with maintenance-free EPDM sleeves',
        'Accessible terraces over EPDM with complete protection and finish system',
      ],
    },
    benefits: [
      { icon: 'Thermometer', title: 'Cool Roof for Energy Certification', description: 'White EPDM with SRI ≥ 90 reduces roof temperature by 30-40°C, decreasing air conditioning consumption and improving building energy certification.' },
      { icon: 'Leaf', title: 'LEED and BREEAM Compatible', description: 'EPDM is eligible for points in sustainability certifications for durability, cool roof and green roof compatibility.' },
      { icon: 'Shield', title: 'Long-Term Protection', description: 'With 50+ year service life, EPDM eliminates commercial activity disruption from waterproofing replacement works for decades.' },
      { icon: 'Wrench', title: 'HVAC Integration', description: 'EPDM accessories for HVAC unit penetrations, ducts and cables eliminate the most common infiltration points on commercial roofs.' },
      { icon: 'Layers', title: 'Public-Use Terraces', description: 'EPDM + protection + finish system for commercial terraces with intensive pedestrian traffic — rooftop restaurants, events, social areas.' },
      { icon: 'Euro', title: 'Property Value Enhancement', description: 'Long-life EPDM roof, potentially green or cool roof, is an asset that enhances commercial property value in sales and leases.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm (standard) / 2.0 mm (accessible terraces)' },
      { label: 'Cool roof version', value: 'White EPDM — SRI ≥ 90' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +130°C' },
      { label: 'Root resistance (green roof)', value: 'FLL — certified (2.0 mm version)' },
      { label: 'Fire classification', value: 'E-root — EN 13956' },
      { label: 'Sustainability certifications', value: 'LEED, BREEAM, HQE eligible' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Design and Certifications', description: 'Energy or sustainability certification objective definition. Choice between black, white or cool roof EPDM. HVAC and equipment mapping.' },
      { step: 2, title: 'Substrate Preparation', description: 'Concrete slab or metal deck preparation. High-performance thermal insulation installation (PIR, graphite EPS). Levelling.' },
      { step: 3, title: 'EPDM + Singular Points', description: 'EPDM installation over insulation. All HVAC penetration treatment with specific sleeves. Parapet flashings and expansion joints.' },
      { step: 4, title: 'Green Roof or Cool Roof', description: 'If applicable: extensive or intensive green roof system installation over EPDM. Or simply leave white EPDM exposed as cool roof.' },
      { step: 5, title: 'Accessible Terraces', description: 'If applicable: concrete protection + pedestrian surfacing installation in accessible terrace zones over EPDM.' },
      { step: 6, title: 'Warranty and Certification', description: 'Issue of 20-year warranty. Documentation for LEED/BREEAM certification process if applicable.' },
    ],
    techniques: [
      {
        title: 'Cool Roof with White EPDM',
        description: 'White or light grey EPDM with SRI ≥ 90. Mechanically fixed or bonded installation over insulation. For buildings with energy certification needs.',
        pros: ['30-40°C reduction in roof temperature', 'Immediate energy certification improvement', 'Compatible with LEED and BREEAM'],
        cons: ['Slightly higher cost than black EPDM', 'Dirt visible requiring occasional cleaning'],
      },
      {
        title: 'Extensive Green Roof over EPDM',
        description: '2.0 mm FLL EPDM + drainage + extensive substrate (60-100 mm) + sedum or grasses. For commercial buildings with urban sustainability goals.',
        pros: ['LEED and BREEAM points for stormwater management and biodiversity', 'Additional thermal insulation from living layer', 'Urban heat island reduction'],
        cons: ['Additional substrate load (150-200 kg/m²)', 'Higher initial investment'],
      },
    ],
    comparison: [
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'Mechanically fixed PVC', value: '25-30 years' }, { name: 'Modified bitumen', value: '20 years' }] },
      { feature: 'Cool roof version available', epdm: 'Yes — SRI ≥ 90', alternatives: [{ name: 'Mechanically fixed PVC', value: 'Yes' }, { name: 'Modified bitumen', value: 'With reflective paint' }] },
    ],
    climate: [
      { zone: 'Lisbon and Porto (Temperate Climate)', description: 'Commercial buildings in urban centres benefit from white EPDM cool roof for temperature reduction and energy certification.' },
      { zone: 'Algarve (Tourism and Hospitality)', description: 'Algarve hotels and resorts with extensive roofs benefit from EPDM cool roof for air conditioning load reduction and energy costs.' },
      { zone: 'North (Green Roofs)', description: 'Humid northern climate is ideal for green roofs over EPDM — dense vegetation without additional irrigation, with efficient stormwater management.' },
    ],
    faqs: [
      { question: 'Does EPDM contribute to LEED certification of a commercial building?', answer: 'Yes. White EPDM contributes to credit SS7.2 (Heat Island Effect — Roof) with SRI ≥ 82. EPDM on green roofs contributes to SS6 (Stormwater Management) and SS7.2. The 50+ year durability also contributes to materials credits.' },
      { question: 'Is it possible to create a garden or restaurant on a shopping centre rooftop with EPDM?', answer: 'Yes. 2.0 mm EPDM with adequate protection supports intensively used terraces, including furniture, temporary structures and people loads. The system is designed for each use\'s specific loads.' },
    ],
    relatedSlugs: ['flat-roofs', 'green-roofs', 'cool-reflective-roofs'],
  },
}
