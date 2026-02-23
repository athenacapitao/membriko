import type { ApplicationData } from '../types'

export const slurryLagoons: ApplicationData = {
  id: 'slurry-lagoons',
  categoryId: 'agricultural',
  pt: {
    meta: {
      title: 'Impermeabilização de Lagoas de Estrume com EPDM | Membriko',
      description: 'Membrana EPDM para lagoas e fossas de chorume e estrume líquido. Alta resistência química e conformidade ambiental. Portugal.',
      keywords: ['impermeabilização lagoa chorume EPDM', 'fossa estrume membrana', 'lagoa dejetos suínos EPDM', 'chorume impermeabilização Portugal', 'EPDM lagoa pecuária'],
    },
    hero: {
      headline: 'Lagoas de Chorume Estanques com EPDM de Alta Resistência Química',
      subtitle: 'A membrana EPDM para lagoas de chorume e estrume líquido garante conformidade ambiental e proteção de aquíferos, com resistência a amónia e compostos orgânicos.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'NH₃', label: 'Resistente a amónia' },
        { value: '100%', label: 'Contenção de efluente' },
        { value: '15 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Lagoas de Chorume',
      description: 'As lagoas de chorume e estrume líquido são estruturas críticas em termos ambientais. A legislação portuguesa exige contenção total para proteger aquíferos e linhas de água. O chorume é altamente corrosivo para materiais convencionais.',
      points: [
        'Chorume com pH 7-9 e alto teor de amónia degrada materiais convencionais em poucos anos',
        'Fugas de chorume em lagoas sem impermeabilização adequada contaminam aquíferos',
        'Legislação ambiental portuguesa (DL 81/2013) exige plano de gestão de efluentes com contenção total',
        'Coimas por contaminação de aquíferos por chorume pecuário podem atingir €100.000+',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Lagoas de Chorume',
      description: 'O EPDM com resistência química certificada a amónia e compostos orgânicos é a membrana de referência para lagoas de chorume. Garante contenção total e conformidade ambiental por décadas.',
      points: [
        'EPDM com resistência certificada a amónia, sulfureto de hidrogénio e compostos nitrogenados',
        'Sistema completo para lagoas novas e reabilitação de lagoas existentes com fugas',
        'Cobertura flutuante EPDM opcional para redução de emissões de NH₃ para atmosfera',
        'Documentação técnica para processo de licenciamento ambiental',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a Amónia e Compostos', description: 'O EPDM resiste a amónia (NH₃), sulfureto de hidrogénio (H₂S) e compostos orgânicos nitrogenados do chorume sem degradação — validado em instalações pecuárias.' },
      { icon: 'Droplets', title: 'Contenção Total', description: 'Zero fugas para solo e aquíferos. Conformidade total com legislação ambiental e possibilidade de recuperação do valor fertilizante do chorume.' },
      { icon: 'Layers', title: 'Cobertura Flutuante Opcional', description: 'Sistema de cobertura flutuante EPDM reduz emissões de amónia para atmosfera em 70-90% — relevante para explorações em zonas habitadas ou de proteção ambiental.' },
      { icon: 'Wrench', title: 'Lagoas de Qualquer Dimensão', description: 'O EPDM adapta-se a lagoas de qualquer forma e dimensão, desde fossas de 50 m³ a lagoas de 5.000 m³ em explorações pecuárias intensivas.' },
      { icon: 'Clock', title: 'Longevidade', description: 'Vida útil de 50+ anos — superior ao período de amortização de instalações pecuárias (20-30 anos). Uma única instalação para toda a vida da exploração.' },
      { icon: 'Euro', title: 'Conformidade Regulatória', description: 'A impermeabilização com EPDM é aceite pelas entidades reguladoras portuguesas (APA, DRAAP) como solução válida para contenção de efluentes pecuários.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (lagoas de alta pressão)' },
      { label: 'Resistência a amónia', value: 'Excelente — validado para concentrações pecuárias' },
      { label: 'Resistência a H₂S', value: 'Boa' },
      { label: 'pH de trabalho', value: '4-12' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Cobertura flutuante', value: 'Disponível — sistema EPDM flutuante' },
      { label: 'Norma', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto e Licenciamento', description: 'Dimensionamento da lagoa conforme regulamentação (volume mínimo de 3 meses de produção). Documentação para licenciamento ambiental.' },
      { step: 2, title: 'Preparação da Lagoa', description: 'Compactação e regularização do fundo e taludes. Remoção de pedras e raízes. Instalação de geotêxtil de proteção (300 g/m²) para ambientes agressivos.' },
      { step: 3, title: 'Instalação do EPDM', description: 'Colocação da membrana EPDM no fundo e taludes. Sobreposição mínima de 200 mm nas emendas. Vulcanização de todas as emendas por processo certificado.' },
      { step: 4, title: 'Ancoragem', description: 'Ancoragem da membrana no bordo da lagoa por vala de ancoragem ou fixação mecânica. Sistema resistente a pressão hidrostática e uplift por biogás.' },
      { step: 5, title: 'Cobertura (Opcional)', description: 'Instalação de cobertura flutuante EPDM se aplicável. Sistema flutuante com câmaras de ar mantidas pela pressão do biogás produzido.' },
      { step: 6, title: 'Certificação e Garantia', description: 'Teste de estanquidade documentado para processo de licenciamento. Emissão de garantia de 15 anos.' },
    ],
    techniques: [
      {
        title: 'Lagoa de Chorume em Terra com EPDM',
        description: 'Lagoa escavada em terra, fundo e taludes revestidos com geotêxtil 300 g/m² + EPDM 1,5 mm. Sistema mais económico para grandes volumes.',
        pros: ['Custo por m³ de armazenamento baixo', 'Instalação rápida em grandes lagoas', 'Conformidade ambiental garantida'],
        cons: ['Requer solo estável e compactável', 'Necessita sistema de controlo de nível'],
      },
      {
        title: 'Reabilitação de Lagoa Existente',
        description: 'Para lagoas de betão ou terra com fugas, instalação de EPDM interior sem demolição. Resolve conformidade ambiental rapidamente.',
        pros: ['Conformidade ambiental rápida sem demolição', 'Possibilidade de aumentar volume útil', 'Documentação técnica para regularização'],
        cons: ['Requer esvaziamento e limpeza da lagoa', 'Complexidade adicional em lagoas de forma irregular existente'],
      },
    ],
    comparison: [
      { feature: 'Resistência química a chorume', epdm: 'Excelente', alternatives: [{ name: 'Betão simples', value: 'Fraca — deteriora' }, { name: 'HDPE', value: 'Boa' }] },
      { feature: 'Cobertura flutuante integrada', epdm: 'Disponível', alternatives: [{ name: 'Betão simples', value: 'Não disponível' }, { name: 'HDPE', value: 'Separada' }] },
    ],
    climate: [
      { zone: 'Norte (Suinicultura e Avicultura)', description: 'Norte de Portugal com alta densidade de suiniculturas e aviários. Lagoas de grande capacidade requerem impermeabilização robusta para conformidade com regulamentação de zonas vulneráveis ao nitrato.' },
      { zone: 'Interior (Bovinos e Ovinos)', description: 'Explorações extensivas com armazenamento de chorume para valorização agronómica. O EPDM garante conformidade ambiental e qualidade fertilizante do efluente.' },
      { zone: 'Alentejo (Suinicultura Intensiva)', description: 'Suiniculturas intensivas do Alentejo com grandes volumes de chorume líquido. Lagoas de 2.000-5.000 m³ requerem membrana de longa duração com sistema de cobertura.' },
    ],
    faqs: [
      { question: 'A legislação portuguesa obriga à impermeabilização de lagoas de chorume?', answer: 'Sim. O Decreto-Lei 81/2013 e os Planos de Gestão de Efluentes Pecuários (PGEP) exigem que instalações pecuárias acima de determinados limiares de produção disponham de sistemas de armazenamento estanques. O EPDM é uma solução técnica aceite pelas entidades licenciadoras.' },
      { question: 'A cobertura flutuante EPDM reduz o cheiro das lagoas de chorume?', answer: 'Sim significativamente. A cobertura flutuante EPDM reduz emissões de amónia em 70-90%, o que se traduz numa redução proporcional do odor. É especialmente relevante para explorações em zonas habitadas ou com conflitos de vizinhança.' },
    ],
    relatedSlugs: ['silage-storage', 'farm-reservoirs', 'wastewater-treatment'],
  },
  en: {
    meta: {
      title: 'Slurry Lagoon Waterproofing with EPDM | Membriko',
      description: 'EPDM membrane for slurry and liquid manure lagoons and pits. High chemical resistance and environmental compliance. Portugal.',
      keywords: ['slurry lagoon waterproofing EPDM', 'manure pit membrane', 'pig slurry lagoon EPDM', 'slurry waterproofing Portugal', 'EPDM livestock lagoon'],
    },
    hero: {
      headline: 'Watertight Slurry Lagoons with High-Chemical-Resistance EPDM',
      subtitle: 'EPDM membrane for slurry and liquid manure lagoons ensures environmental compliance and aquifer protection, with ammonia and organic compound resistance.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'NH₃', label: 'Ammonia resistant' },
        { value: '100%', label: 'Effluent containment' },
        { value: '15 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Slurry Lagoon Challenge',
      description: 'Slurry and liquid manure lagoons are environmentally critical structures. Portuguese legislation requires total containment to protect aquifers and watercourses. Slurry is highly corrosive to conventional materials.',
      points: [
        'Slurry at pH 7-9 with high ammonia content degrades conventional materials within years',
        'Slurry leaks from poorly waterproofed lagoons contaminate aquifers',
        'Portuguese environmental legislation (DL 81/2013) requires effluent management plan with total containment',
        'Fines for aquifer contamination from livestock slurry can reach €100,000+',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Slurry Lagoons',
      description: 'EPDM with certified chemical resistance to ammonia and organic compounds is the reference membrane for slurry lagoons. Guarantees total containment and environmental compliance for decades.',
      points: [
        'EPDM with certified resistance to ammonia, hydrogen sulphide and nitrogenous compounds',
        'Complete system for new lagoons and rehabilitation of existing lagoons with leaks',
        'Optional floating EPDM cover to reduce NH₃ atmospheric emissions',
        'Technical documentation for environmental licensing process',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Ammonia and Compound Resistance', description: 'EPDM resists ammonia (NH₃), hydrogen sulphide (H₂S) and nitrogenous organic slurry compounds without degradation — validated in livestock installations.' },
      { icon: 'Droplets', title: 'Total Containment', description: 'Zero leaks to soil and aquifers. Full environmental legislation compliance and possibility of recovering slurry fertiliser value.' },
      { icon: 'Layers', title: 'Optional Floating Cover', description: 'EPDM floating cover system reduces atmospheric ammonia emissions by 70-90% — relevant for farms in inhabited or environmental protection zones.' },
      { icon: 'Wrench', title: 'Lagoons of Any Size', description: 'EPDM adapts to lagoons of any shape and size, from 50 m³ pits to 5,000 m³ lagoons in intensive livestock farms.' },
      { icon: 'Clock', title: 'Longevity', description: 'Service life of 50+ years — greater than livestock installation depreciation period (20-30 years). Single installation for the entire farm life.' },
      { icon: 'Euro', title: 'Regulatory Compliance', description: 'EPDM waterproofing is accepted by Portuguese regulatory bodies (APA, DRAAP) as a valid solution for livestock effluent containment.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (high-pressure lagoons)' },
      { label: 'Ammonia resistance', value: 'Excellent — validated for livestock concentrations' },
      { label: 'H₂S resistance', value: 'Good' },
      { label: 'Working pH', value: '4-12' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Floating cover', value: 'Available — floating EPDM system' },
      { label: 'Standard', value: 'EN 13956' },
    ],
    installationSteps: [
      { step: 1, title: 'Design and Licensing', description: 'Lagoon sizing per regulation (minimum 3 months production volume). Documentation for environmental licensing.' },
      { step: 2, title: 'Lagoon Preparation', description: 'Base and slope compaction and levelling. Rock and root removal. Protective geotextile installation (300 g/m²) for aggressive environments.' },
      { step: 3, title: 'EPDM Installation', description: 'EPDM membrane placement on base and slopes. Minimum 200 mm seam overlap. All seams vulcanised by certified process.' },
      { step: 4, title: 'Anchoring', description: 'Membrane anchoring at lagoon edge by anchor trench or mechanical fixing. System resistant to hydrostatic pressure and biogas uplift.' },
      { step: 5, title: 'Cover (Optional)', description: 'Floating EPDM cover installation if applicable. Floating system with air chambers maintained by produced biogas pressure.' },
      { step: 6, title: 'Certification and Warranty', description: 'Documented watertightness test for licensing process. Issue of 15-year warranty.' },
    ],
    techniques: [
      {
        title: 'Earth Slurry Lagoon with EPDM',
        description: 'Earth-excavated lagoon, base and slopes lined with 300 g/m² geotextile + 1.5 mm EPDM. Most economical system for large volumes.',
        pros: ['Low cost per m³ of storage', 'Fast installation in large lagoons', 'Guaranteed environmental compliance'],
        cons: ['Requires stable, compactable soil', 'Needs level control system'],
      },
      {
        title: 'Existing Lagoon Rehabilitation',
        description: 'For concrete or earth lagoons with leaks, EPDM interior installation without demolition. Resolves environmental compliance quickly.',
        pros: ['Fast environmental compliance without demolition', 'Possibility of increasing useful volume', 'Technical documentation for regularisation'],
        cons: ['Requires lagoon emptying and cleaning', 'Additional complexity in existing irregular-shape lagoons'],
      },
    ],
    comparison: [
      { feature: 'Chemical resistance to slurry', epdm: 'Excellent', alternatives: [{ name: 'Plain concrete', value: 'Poor — deteriorates' }, { name: 'HDPE', value: 'Good' }] },
      { feature: 'Integrated floating cover', epdm: 'Available', alternatives: [{ name: 'Plain concrete', value: 'Not available' }, { name: 'HDPE', value: 'Separate' }] },
    ],
    climate: [
      { zone: 'North (Pig and Poultry Farming)', description: 'Northern Portugal with high pig and poultry farm density. Large-capacity lagoons require robust waterproofing for compliance with nitrate vulnerable zone regulation.' },
      { zone: 'Interior (Cattle and Sheep)', description: 'Extensive farms with slurry storage for agronomic value recovery. EPDM ensures environmental compliance and effluent fertiliser quality.' },
      { zone: 'Alentejo (Intensive Pig Farming)', description: 'Intensive Alentejo pig farms with large liquid slurry volumes. 2,000-5,000 m³ lagoons require long-life membrane with cover system.' },
    ],
    faqs: [
      { question: 'Does Portuguese legislation require slurry lagoon waterproofing?', answer: 'Yes. Decree-Law 81/2013 and Livestock Effluent Management Plans (PGEP) require that livestock installations above certain production thresholds have watertight storage systems. EPDM is a technically accepted solution by licensing bodies.' },
      { question: 'Does the floating EPDM cover reduce slurry lagoon odour?', answer: 'Yes, significantly. The floating EPDM cover reduces ammonia emissions by 70-90%, translating to a proportional odour reduction. It is especially relevant for farms in inhabited zones or with neighbourhood conflicts.' },
    ],
    relatedSlugs: ['silage-storage', 'farm-reservoirs', 'wastewater-treatment'],
  },
}
