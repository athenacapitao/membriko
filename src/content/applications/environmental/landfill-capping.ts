import type { ApplicationData } from '../types'

export const landfillCapping: ApplicationData = {
  id: 'landfill-capping',
  categoryId: 'environmental',
  pt: {
    meta: {
      title: 'Impermeabilização de Aterros Sanitários com EPDM | Membriko',
      description: 'Geomembranas EPDM para impermeabilização de base e cobertura final de aterros sanitários e depósitos de resíduos. Conformidade com Diretiva Aterros. Portugal.',
      keywords: ['impermeabilização aterro sanitário EPDM', 'geomembrana aterro EPDM', 'cobertura final aterro membrana', 'aterro resíduos impermeabilização Portugal', 'EPDM landfill'],
    },
    hero: {
      headline: 'Aterros Sanitários Impermeabilizados com Geomembranas EPDM',
      subtitle: 'As geomembranas EPDM para aterros garantem contenção de lixiviado e biogás por 50+ anos, em conformidade com a Diretiva Europeia de Aterros e legislação portuguesa.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'EU', label: 'Conformidade Diretiva Aterros' },
        { value: '100%', label: 'Contenção garantida' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização de Aterros',
      description: 'Os aterros sanitários são das estruturas mais exigentes em termos de impermeabilização: lixiviado altamente agressivo, produção de biogás, assentamentos diferenciais da massa de resíduos e horizonte temporal de décadas.',
      points: [
        'Lixiviado de aterro com pH 4-9, metais pesados e compostos orgânicos é altamente poluente',
        'Assentamentos diferenciais da massa de resíduos criam deformações que destroem geomembranas rígidas',
        'Produção de biogás (CH₄, CO₂, H₂S) cria pressão e exige sistema de captação integrado',
        'Diretiva Aterros (2003/33/CE) exige sistema duplo de impermeabilização para aterros de resíduos perigosos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Aterros Sanitários',
      description: 'A geomembrana EPDM é aprovada pela Agência Portuguesa do Ambiente (APA) para aplicações em aterros sanitários. A sua elasticidade de 400% acomoda os assentamentos diferenciais sem falhar.',
      points: [
        'Elasticidade de 400% para acomodar assentamentos diferenciais de resíduos compactados',
        'Resistência química certificada a lixiviado de aterro (ácidos, metais pesados, compostos orgânicos)',
        'Sistema de impermeabilização de base e cobertura final conforme Diretiva Aterros',
        'Aprovado pela APA como geomembrana para impermeabilização de aterros em Portugal',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a Lixiviado de Aterro', description: 'Resistência certificada a lixiviado de aterro — mistura complexa de ácidos orgânicos, metais pesados, compostos nitrogenados e cloretos que degrada materiais inadequados.' },
      { icon: 'Droplets', title: 'Proteção de Aquíferos', description: 'Zero infiltração de lixiviado para solo e aquíferos — proteção da qualidade da água subterrânea conforme exigência da Diretiva Quadro da Água (60/CE/2000).' },
      { icon: 'Layers', title: 'Alta Elongação para Assentamentos', description: 'Elongação de 400% é a propriedade mais crítica para aterros. Acomoda assentamentos diferenciais de resíduos compactados de 0,5-2 m por 100 m sem falhar.' },
      { icon: 'Thermometer', title: 'Resistência a Biogás e Temperatura', description: 'Temperatura interna de aterros pode atingir 60-80°C na fase activa de decomposição. O EPDM mantém integridade e impermeabilidade nestas condições.' },
      { icon: 'Clock', title: 'Horizonte Temporal de Aterro', description: 'Os aterros têm horizonte de 30+ anos (fase de exploração + período pós-encerramento). O EPDM com vida útil de 50+ anos cobre todo este período sem substituição.' },
      { icon: 'Wrench', title: 'Grandes Superfícies Eficientemente', description: 'Rolos de grande largura e equipamentos de soldadura automática cobrem aterros de dezenas de hectares eficientemente — minimizando custo por m² de geomembrana instalada.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (aterros perigosos)' },
      { label: 'Elongação na rutura', value: '≥ 400% (crítico para aterros)' },
      { label: 'Resistência a lixiviado de aterro', value: 'Boa — pH 4-9' },
      { label: 'Resistência a CH₄ e CO₂', value: 'Boa' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Coeficiente de permeabilidade', value: '< 10⁻¹² m/s' },
      { label: 'Aprovação APA', value: 'Sim — para aterros de RNP e RSU' },
      { label: 'Norma', value: 'EN 13956 / EN 13493 / EN 13492' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto de Impermeabilização', description: 'Projeto conforme Diretiva Aterros e legislação nacional. Sistema simples ou duplo conforme classe do aterro. Coordenação com projeto de captação de lixiviado e biogás.' },
      { step: 2, title: 'Preparação do Suporte', description: 'Compactação e regularização do fundo e taludes. Geotêxtil de proteção de 600 g/m² sobre material compactado. Verificação de ausência de materiais pontiagudos.' },
      { step: 3, title: 'Instalação da Geomembrana', description: 'Colocação de painéis EPDM pré-vulcanizados em fábrica quando possível. Emendas em obra por vulcanização certificada. Identificação de cada painel para rastreabilidade.' },
      { step: 4, title: 'Teste de Emendas', description: 'Teste de pressão ou vácuo de 100% das emendas. Reparação de defeitos identificados. Registo fotográfico de cada emenda.' },
      { step: 5, title: 'Camadas de Drenagem', description: 'Instalação de geocomposto ou brita de drenagem sobre a geomembrana. Sistema de captação e encaminhamento de lixiviado para tanque de equalização.' },
      { step: 6, title: 'Certificação', description: 'Relatório final de instalação com rastreabilidade de todos os painéis, emendas e testes. Documentação para processo de licenciamento da APA.' },
    ],
    techniques: [
      {
        title: 'Sistema de Base Simples (RNP)',
        description: 'Para aterros de Resíduos Não Perigosos (RNP): camada mineral compactada + geomembrana EPDM 1,5 mm + geocomposto de drenagem de lixiviado.',
        pros: ['Sistema conforme requisitos mínimos Diretiva Aterros para RNP', 'Custo por m² relativamente baixo', 'Instalação eficiente em grandes superfícies'],
        cons: ['Sistema simples — não adequado para resíduos perigosos', 'Requer camada mineral de baixa permeabilidade subjacente'],
      },
      {
        title: 'Sistema Duplo de Base (Resíduos Perigosos)',
        description: 'Para aterros de resíduos perigosos: duas geomembranas EPDM separadas por geocomposto de drenagem de controlo. Sistema conforme Diretiva Aterros para resíduos perigosos.',
        pros: ['Dupla barreira de contenção de lixiviado', 'Sistema de deteção de fugas por monitorização do geocomposto entre membranas', 'Conformidade total com Diretiva Aterros para perigosos'],
        cons: ['Custo superior ao sistema simples', 'Maior complexidade de instalação e controlo de qualidade'],
      },
    ],
    comparison: [
      { feature: 'Elongação (assentamentos)', epdm: '400%', alternatives: [{ name: 'HDPE', value: '100-150%' }, { name: 'PVC', value: '200-250%' }] },
      { feature: 'Conformidade Diretiva Aterros', epdm: 'Sim', alternatives: [{ name: 'HDPE', value: 'Sim' }, { name: 'PVC', value: 'Sim (certas formulações)' }] },
    ],
    climate: [
      { zone: 'Norte (Precipitação Elevada)', description: 'Alta precipitação no norte gera grande volume de lixiviado. Geomembrana EPDM com alta elongação e impermeabilidade garantida é essencial em aterros de regiões de alta pluviosidade.' },
      { zone: 'Sul (Calor Intenso)', description: 'Calor intenso no Alentejo e Algarve acelera decomposição de resíduos e aumenta temperatura interna do aterro. O EPDM mantém integridade a temperaturas de 80°C+.' },
      { zone: 'Zonas Sísmicas', description: 'Portugal tem atividade sísmica significativa. A elongação de 400% do EPDM acomoda deformações sísmicas do maciço de resíduos que seriam catastróficas para geomembranas de baixa elongação.' },
    ],
    faqs: [
      { question: 'O EPDM é aprovado pela APA para impermeabilização de aterros sanitários?', answer: 'Sim. O EPDM é aprovado pela Agência Portuguesa do Ambiente como geomembrana para impermeabilização de aterros de resíduos não perigosos (RNP) e resíduos urbanos (RSU), quando especificado de acordo com os requisitos da Portaria 209/2004 e legislação aplicável.' },
      { question: 'Qual a diferença de custo entre EPDM e HDPE para aterros?', answer: 'O HDPE é tipicamente mais económico por m² como matéria-prima. No entanto, a instalação de HDPE requer máquinas de soldadura mais caras e controlo de qualidade mais rigoroso. Para terrenos irregulares ou aterros com assentamentos esperados elevados, o EPDM é tecnicamente mais adequado apesar do custo potencialmente superior.' },
    ],
    relatedSlugs: ['chemical-containment', 'wastewater-treatment', 'stormwater-management'],
  },
  en: {
    meta: {
      title: 'Landfill Capping and Waterproofing with EPDM | Membriko',
      description: 'EPDM geomembranes for landfill base and final capping. Compliance with EU Landfill Directive. Portugal.',
      keywords: ['landfill waterproofing EPDM', 'landfill EPDM geomembrane', 'landfill final cap membrane', 'waste depot waterproofing Portugal', 'EPDM landfill'],
    },
    hero: {
      headline: 'Waterproofed Landfills with EPDM Geomembranes',
      subtitle: 'EPDM geomembranes for landfills guarantee leachate and biogas containment for 50+ years, in compliance with the European Landfill Directive and Portuguese legislation.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'EU', label: 'Landfill Directive compliance' },
        { value: '100%', label: 'Guaranteed containment' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Landfill Waterproofing Challenge',
      description: 'Landfills are among the most demanding waterproofing structures: highly aggressive leachate, biogas production, differential settlement of waste mass and decades-long time horizons.',
      points: [
        'Landfill leachate with pH 4-9, heavy metals and organic compounds is highly polluting',
        'Differential settlements of waste mass create deformations that destroy rigid geomembranes',
        'Biogas production (CH₄, CO₂, H₂S) creates pressure and requires integrated collection system',
        'Landfill Directive (2003/33/EC) requires double waterproofing system for hazardous waste landfills',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Landfills',
      description: 'EPDM geomembrane is approved by the Portuguese Environment Agency (APA) for landfill applications. Its 400% elasticity accommodates differential settlements without failure.',
      points: [
        '400% elasticity to accommodate differential settlements of compacted waste',
        'Certified chemical resistance to landfill leachate (acids, heavy metals, organic compounds)',
        'Base and final capping waterproofing system per Landfill Directive',
        'APA-approved geomembrane for landfill waterproofing in Portugal',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Landfill Leachate Resistance', description: 'Certified resistance to landfill leachate — complex mixture of organic acids, heavy metals, nitrogenous compounds and chlorides that degrades inadequate materials.' },
      { icon: 'Droplets', title: 'Aquifer Protection', description: 'Zero leachate infiltration to soil and aquifers — groundwater quality protection per Water Framework Directive (60/EC/2000) requirements.' },
      { icon: 'Layers', title: 'High Elongation for Settlement', description: '400% elongation is the most critical property for landfills. Accommodates compacted waste differential settlements of 0.5-2 m per 100 m without failure.' },
      { icon: 'Thermometer', title: 'Biogas and Temperature Resistance', description: 'Landfill internal temperature can reach 60-80°C in the active decomposition phase. EPDM maintains integrity and impermeability under these conditions.' },
      { icon: 'Clock', title: 'Landfill Time Horizon', description: 'Landfills have a 30+ year horizon (operational phase + post-closure period). EPDM with 50+ year service life covers this entire period without replacement.' },
      { icon: 'Wrench', title: 'Large Surfaces Efficiently', description: 'Wide rolls and automatic welding equipment cover landfills of tens of hectares efficiently — minimising cost per m² of installed geomembrane.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (hazardous waste)' },
      { label: 'Elongation at break', value: '≥ 400% (critical for landfills)' },
      { label: 'Landfill leachate resistance', value: 'Good — pH 4-9' },
      { label: 'CH₄ and CO₂ resistance', value: 'Good' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'Permeability coefficient', value: '< 10⁻¹² m/s' },
      { label: 'APA approval', value: 'Yes — for NHW and MSW landfills' },
      { label: 'Standard', value: 'EN 13956 / EN 13493 / EN 13492' },
    ],
    installationSteps: [
      { step: 1, title: 'Waterproofing Design', description: 'Design per Landfill Directive and national legislation. Single or double system per landfill class. Coordination with leachate and biogas collection design.' },
      { step: 2, title: 'Substrate Preparation', description: 'Base and slope compaction and levelling. 600 g/m² protective geotextile over compacted material. Absence of pointed materials verification.' },
      { step: 3, title: 'Geomembrane Installation', description: 'Factory-pre-vulcanised EPDM panel placement where possible. On-site seams by certified vulcanisation. Each panel identified for traceability.' },
      { step: 4, title: 'Seam Testing', description: 'Pressure or vacuum testing of 100% of seams. Identified defect repair. Photographic record of each seam.' },
      { step: 5, title: 'Drainage Layers', description: 'Geocomposite or drainage gravel installation over geomembrane. Leachate collection and routing system to equalisation tank.' },
      { step: 6, title: 'Certification', description: 'Final installation report with traceability of all panels, seams and tests. Documentation for APA licensing process.' },
    ],
    techniques: [
      {
        title: 'Single Base System (NHW)',
        description: 'For Non-Hazardous Waste (NHW) landfills: compacted mineral layer + 1.5 mm EPDM geomembrane + leachate drainage geocomposite.',
        pros: ['System compliant with minimum Landfill Directive requirements for NHW', 'Relatively low cost per m²', 'Efficient installation over large surfaces'],
        cons: ['Single system — not suitable for hazardous waste', 'Requires underlying low-permeability mineral layer'],
      },
      {
        title: 'Double Base System (Hazardous Waste)',
        description: 'For hazardous waste landfills: two EPDM geomembranes separated by monitoring drainage geocomposite. System compliant with Landfill Directive for hazardous waste.',
        pros: ['Double leachate containment barrier', 'Leak detection system by monitoring of geocomposite between membranes', 'Full compliance with Landfill Directive for hazardous'],
        cons: ['Higher cost than single system', 'Greater installation and quality control complexity'],
      },
    ],
    comparison: [
      { feature: 'Elongation (settlement)', epdm: '400%', alternatives: [{ name: 'HDPE', value: '100-150%' }, { name: 'PVC', value: '200-250%' }] },
      { feature: 'Landfill Directive compliance', epdm: 'Yes', alternatives: [{ name: 'HDPE', value: 'Yes' }, { name: 'PVC', value: 'Yes (certain formulations)' }] },
    ],
    climate: [
      { zone: 'North (High Rainfall)', description: 'High rainfall in the north generates large leachate volumes. High-elongation, guaranteed-impermeability EPDM geomembrane is essential in landfills in high-rainfall regions.' },
      { zone: 'South (Intense Heat)', description: 'Intense heat in Alentejo and Algarve accelerates waste decomposition and increases landfill internal temperature. EPDM maintains integrity at 80°C+.' },
      { zone: 'Seismic Zones', description: 'Portugal has significant seismic activity. EPDM\'s 400% elongation accommodates seismic deformations of the waste mass that would be catastrophic for low-elongation geomembranes.' },
    ],
    faqs: [
      { question: 'Is EPDM approved by APA for landfill waterproofing?', answer: 'Yes. EPDM is approved by the Portuguese Environment Agency as a geomembrane for non-hazardous waste (NHW) and municipal solid waste (MSW) landfill waterproofing, when specified in accordance with Order 209/2004 and applicable legislation requirements.' },
      { question: 'What is the cost difference between EPDM and HDPE for landfills?', answer: 'HDPE is typically more economical per m² as raw material. However, HDPE installation requires more expensive welding machines and stricter quality control. For irregular terrain or landfills with high expected settlements, EPDM is technically more suitable despite potentially higher cost.' },
    ],
    relatedSlugs: ['chemical-containment', 'wastewater-treatment', 'stormwater-management'],
  },
}
