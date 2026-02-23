import type { ApplicationData } from '../types'

export const potableWater: ApplicationData = {
  id: 'potable-water',
  categoryId: 'water',
  pt: {
    meta: {
      title: 'Armazenamento de Água Potável com EPDM Certificado | Membriko',
      description:
        'Membrana EPDM certificada ACS/WRAS para armazenamento de água potável. Reservatórios e cisternas para consumo humano. Portugal.',
      keywords: [
        'armazenamento água potável EPDM',
        'cisterna água potável membrana',
        'reservatório água consumo EPDM Portugal',
        'EPDM ACS água potável',
        'tanque água beber membrana',
      ],
    },
    hero: {
      headline: 'Armazenamento de Água Potável com EPDM Certificado ACS',
      subtitle:
        'A solução mais segura e durável para reservatórios de água destinada a consumo humano — certificada pelos mais exigentes organismos reguladores europeus.',
      stats: [
        { value: 'ACS/WRAS', label: 'Dupla certificação europeia' },
        { value: '0 ppb', label: 'Migração de compostos nocivos' },
        { value: '50+', label: 'Anos de vida útil' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio da Qualidade em Reservatórios de Água Potável',
      description:
        'A água destinada a consumo humano tem exigências de qualidade extremamente elevadas. O material do reservatório pode contaminar a água com compostos químicos, metais pesados, compostos orgânicos ou facilitar o crescimento de microrganismos patogénicos.',
      points: [
        'Betão não certificado liberta hidróxido de cálcio que altera pH e gosto da água',
        'Tintas e revestimentos não certificados libertam plastificantes e compostos orgânicos voláteis',
        'Superfícies rugosas de betão são ideais para biofilme e crescimento de Legionella',
        'PVC padrão sem certificação liberta ftalatos carcinogénicos para a água armazenada',
      ],
    },
    solution: {
      title: 'A Solução EPDM Certificado para Água Potável',
      description:
        'O EPDM certificado ACS (Attestation de Conformité Sanitaire, França) e WRAS (Water Regulations Advisory Scheme, UK) é formulado sem plastificantes, solventes halogenados ou outros compostos que possam migrar para a água.',
      points: [
        'Formulação especial sem plastificantes, ftalatos ou compostos halogenados',
        'Superfície lisa que dificulta a adesão de biofilme e microrganismos',
        'Inerte a pH, temperatura e compostos de desinfeção usados em água potável',
        'Certificação documentada disponível para auditorias regulatórias da ERSAR',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'Certificação ACS e WRAS',
        description:
          'As certificações ACS (francesa) e WRAS (britânica) são os padrões mais exigentes mundialmente para materiais em contacto com água potável. O nosso EPDM cumpre ambas.',
      },
      {
        icon: 'Droplets',
        title: 'Qualidade de Água Inviolável',
        description:
          'Zero migração de compostos para a água em toda a vida útil. Testes de migração realizados em laboratório certificado confirmam ausência de qualquer contaminante regulado.',
      },
      {
        icon: 'Leaf',
        title: 'Superfície Higiénica',
        description:
          'A superfície lisa e não porosa do EPDM não favorece a adesão de biofilme, reduzindo o risco de Legionella e outros patogéneos em reservatórios de água quente.',
      },
      {
        icon: 'Clock',
        title: 'Sem Degradação ao Longo do Tempo',
        description:
          'Ao contrário de revestimentos que degradam e libertam compostos progressivamente, o EPDM mantém a sua inércia química inalterada durante 50+ anos.',
      },
      {
        icon: 'Euro',
        title: 'Custo Regulatório Zero',
        description:
          'Certificação ACS/WRAS integrada na membrana elimina auditorias de qualidade do material e ensaios periódicos de migração — poupança em custos regulatórios ao longo da vida.',
      },
      {
        icon: 'Building2',
        title: 'Adequado para Todos os Sistemas',
        description:
          'Reservatórios municipais, edifícios multifamiliares, hospitais, hotéis e habitações individuais — o EPDM certificado é adequado para qualquer sistema de armazenamento de água potável.',
      },
    ],
    specs: [
      { label: 'Certificação ACS', value: 'Sim — Attestation de Conformité Sanitaire (FR)' },
      { label: 'Certificação WRAS', value: 'Sim — Water Regulations Advisory Scheme (UK)' },
      { label: 'Espessura', value: '1,5 mm / 2,0 mm' },
      { label: 'Migração de compostos orgânicos', value: '< 0,1 mg/L (EN 12873)' },
      { label: 'Temperatura da água', value: '0°C a 65°C (água quente sanitária)' },
      { label: 'pH suportado', value: '5,5 a 9,5' },
      { label: 'Resistência ao cloro livre', value: 'Até 2 mg/L — desinfeção standard' },
      { label: 'Norma de produto', value: 'EN 13956 / ACS / WRAS' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Projeto com Engenheiro Sanitário',
        description:
          'Coordenação com engenheiro sanitário para cumprimento do Decreto-Lei 152/2017 (qualidade da água) e regulamentos ERSAR. Dimensionamento do reservatório.',
      },
      {
        step: 2,
        title: 'Preparação da Estrutura',
        description:
          'Preparação da estrutura do reservatório em betão alimentar (sem adjuvantes prejudiciais). Cura completa do betão (28 dias) e lavagem alcalina antes da membrana.',
      },
      {
        step: 3,
        title: 'Instalação do EPDM Certificado',
        description:
          'Instalação da membrana EPDM com certificação ACS/WRAS. Uso exclusivo de adesivos e acessórios certificados para contacto com água potável.',
      },
      {
        step: 4,
        title: 'Penetrações Certificadas',
        description:
          'Todas as penetrações (tubagens, sondas, acesso) equipadas com flanges certificadas ACS/WRAS. Não é permitido uso de materiais não certificados em contacto com a água.',
      },
      {
        step: 5,
        title: 'Desinfeção e Limpeza',
        description:
          'Limpeza e desinfeção do reservatório com cloro conforme NP EN 805. Enchimento e análise bacteriológica e química da água antes de entrada em serviço.',
      },
      {
        step: 6,
        title: 'Certificação e Registo ERSAR',
        description:
          'Elaboração de dossiê técnico para registo ERSAR do reservatório. Emissão de certificado de conformidade e garantia de 20 anos.',
      },
    ],
    techniques: [
      {
        title: 'Reservatório de Rede Pública — Liner Interior',
        description:
          'Para reservatórios municipais ou de condomínio, instalação de EPDM ACS como liner interior do reservatório de betão. Método standard para grandes volumes.',
        pros: [
          'Certificação integrada no processo',
          'Documentação para ERSAR incluída',
          'Compatível com sistemas de monitorização contínua',
        ],
        cons: [
          'Requer coordenação com EG (entidade gestora) de água',
          'Interrupção do abastecimento durante obra',
        ],
      },
      {
        title: 'Cisterna Doméstica de Água Potável',
        description:
          'Para habitações com captação própria (furo, nascente), cisterna de betão com EPDM ACS como alternativa a cisterna plástica. Maior capacidade e durabilidade.',
        pros: [
          'Capacidade ilimitada — muito superior às cisternas plásticas',
          'Durabilidade 50+ anos sem substituição',
          'Qualidade de água superior por ausência de migração plástica',
        ],
        cons: [
          'Custo de construção superior à cisterna plástica',
          'Requer análise da qualidade da água da fonte',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Certificação para água potável',
        epdm: 'ACS + WRAS — dupla certificação',
        alternatives: [
          { name: 'Tinta epóxi para água', value: 'Alguns certificados (verificar)' },
          { name: 'Cisterna PE certificada', value: 'EN 12451 / ACS' },
          { name: 'GRP com gel coat', value: 'Certificável' },
        ],
      },
      {
        feature: 'Superfície higiénica',
        epdm: 'Lisa — excelente',
        alternatives: [
          { name: 'Tinta epóxi para água', value: 'Boa — mas degrada' },
          { name: 'Cisterna PE certificada', value: 'Lisa — boa' },
          { name: 'GRP com gel coat', value: 'Lisa — boa' },
        ],
      },
      {
        feature: 'Durabilidade',
        epdm: '50+ anos — sem degradação',
        alternatives: [
          { name: 'Tinta epóxi para água', value: '5-10 anos' },
          { name: 'Cisterna PE certificada', value: '25-30 anos' },
          { name: 'GRP com gel coat', value: '20-30 anos' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Todo Portugal — Reservatórios Municipais',
        description:
          'Muitos reservatórios municipais portugueses têm betão com 30-50 anos sem revestimento interior adequado. Reabilitação com EPDM ACS é a solução de referência recomendada pela ERSAR.',
      },
      {
        zone: 'Zonas Rurais — Captações Próprias',
        description:
          'Habitações rurais com furo ou nascente própria precisam de cisternas certificadas. O EPDM ACS é a solução mais durável e segura para estas aplicações isoladas.',
      },
      {
        zone: 'Zonas Quentes — Reservatórios de Água Quente',
        description:
          'Reservatórios de água quente sanitária (até 65°C) exigem material estável a estas temperaturas. O EPDM ACS é certificado até 65°C sem degradação química.',
      },
    ],
    faqs: [
      {
        question: 'Quais as diferenças entre certificação ACS e WRAS?',
        answer:
          'A ACS (francesa) é reconhecida pela maioria das entidades reguladoras europeias incluindo Portugal. A WRAS é o padrão britânico equivalente. Ter ambas as certificações é a melhor prática para sistemas de abastecimento público e privado.',
      },
      {
        question: 'A ERSAR aceita EPDM certificado em reservatórios municipais?',
        answer:
          'Sim. A ERSAR reconhece os padrões ACS e WRAS para materiais em contacto com água potável. A documentação técnica que fornecemos inclui todos os certificados necessários para aprovação regulatória.',
      },
      {
        question: 'Com que frequência deve ser inspecionado um reservatório com EPDM?',
        answer:
          'A legislação exige inspeção visual anual de todos os reservatórios de água potável. O EPDM facilita esta inspeção pela sua cor contrastante e superfície lisa onde anomalias são facilmente visíveis.',
      },
    ],
    relatedSlugs: ['water-reservoirs', 'rainwater-harvesting', 'swimming-pools'],
  },
  en: {
    meta: {
      title: 'Potable Water Storage with Certified EPDM | Membriko',
      description:
        'ACS/WRAS certified EPDM membrane for potable water storage. Reservoirs and cisterns for human consumption. Portugal.',
      keywords: [
        'potable water storage EPDM',
        'drinking water cistern membrane',
        'potable water reservoir EPDM Portugal',
        'ACS certified EPDM water',
        'drinking water tank membrane',
      ],
    },
    hero: {
      headline: 'Potable Water Storage with ACS Certified EPDM',
      subtitle:
        'The safest and most durable solution for water reservoirs intended for human consumption — certified by the most demanding European regulatory bodies.',
      stats: [
        { value: 'ACS/WRAS', label: 'Dual European certification' },
        { value: '0 ppb', label: 'Harmful compound migration' },
        { value: '50+', label: 'Years service life' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Water Quality Challenge in Potable Water Reservoirs',
      description:
        'Water intended for human consumption has extremely high quality requirements. The reservoir material can contaminate water with chemical compounds, heavy metals, organic compounds or facilitate the growth of pathogenic microorganisms.',
      points: [
        'Non-certified concrete releases calcium hydroxide that alters pH and water taste',
        'Non-certified paints and coatings release plasticisers and volatile organic compounds',
        'Rough concrete surfaces are ideal for biofilm and Legionella growth',
        'Standard PVC without certification releases carcinogenic phthalates into stored water',
      ],
    },
    solution: {
      title: 'The Certified EPDM Solution for Potable Water',
      description:
        'ACS (Attestation de Conformité Sanitaire, France) and WRAS (Water Regulations Advisory Scheme, UK) certified EPDM is formulated without plasticisers, halogenated solvents or other compounds that could migrate into water.',
      points: [
        'Special formulation without plasticisers, phthalates or halogenated compounds',
        'Smooth surface resisting biofilm and microorganism adhesion',
        'Inert to pH, temperature and disinfection compounds used in potable water',
        'Documented certification available for ERSAR regulatory audits',
      ],
    },
    benefits: [
      {
        icon: 'Shield',
        title: 'ACS and WRAS Certification',
        description:
          'ACS (French) and WRAS (British) certifications are the world\'s most demanding standards for materials in contact with drinking water. Our EPDM meets both.',
      },
      {
        icon: 'Droplets',
        title: 'Inviolable Water Quality',
        description:
          'Zero compound migration into water throughout service life. Migration tests performed in a certified laboratory confirm absence of any regulated contaminant.',
      },
      {
        icon: 'Leaf',
        title: 'Hygienic Surface',
        description:
          'The smooth, non-porous EPDM surface does not favour biofilm adhesion, reducing the risk of Legionella and other pathogens in hot water reservoirs.',
      },
      {
        icon: 'Clock',
        title: 'No Degradation Over Time',
        description:
          'Unlike coatings that degrade and progressively release compounds, EPDM maintains its chemical inertness unchanged for 50+ years.',
      },
      {
        icon: 'Euro',
        title: 'Zero Regulatory Cost',
        description:
          'ACS/WRAS certification integrated in the membrane eliminates material quality audits and periodic migration tests — saving in regulatory costs over the lifetime.',
      },
      {
        icon: 'Building2',
        title: 'Suitable for All Systems',
        description:
          'Municipal reservoirs, multi-family buildings, hospitals, hotels and single-family homes — certified EPDM is suitable for any potable water storage system.',
      },
    ],
    specs: [
      { label: 'ACS certification', value: 'Yes — Attestation de Conformité Sanitaire (FR)' },
      { label: 'WRAS certification', value: 'Yes — Water Regulations Advisory Scheme (UK)' },
      { label: 'Thickness', value: '1.5 mm / 2.0 mm' },
      { label: 'Organic compound migration', value: '< 0.1 mg/L (EN 12873)' },
      { label: 'Water temperature', value: '0°C to 65°C (domestic hot water)' },
      { label: 'Supported pH', value: '5.5 to 9.5' },
      { label: 'Free chlorine resistance', value: 'Up to 2 mg/L — standard disinfection' },
      { label: 'Product standard', value: 'EN 13956 / ACS / WRAS' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Project with Sanitary Engineer',
        description:
          'Coordination with sanitary engineer for compliance with Decree-Law 152/2017 (water quality) and ERSAR regulations. Reservoir sizing.',
      },
      {
        step: 2,
        title: 'Structure Preparation',
        description:
          'Preparation of reinforced concrete structure (without harmful admixtures). Full concrete curing (28 days) and alkaline washing before membrane.',
      },
      {
        step: 3,
        title: 'Certified EPDM Installation',
        description:
          'Installation of ACS/WRAS certified EPDM membrane. Exclusive use of certified adhesives and accessories for potable water contact.',
      },
      {
        step: 4,
        title: 'Certified Penetrations',
        description:
          'All penetrations (pipes, probes, access) fitted with ACS/WRAS certified flanges. Use of non-certified materials in contact with water is not permitted.',
      },
      {
        step: 5,
        title: 'Disinfection and Cleaning',
        description:
          'Reservoir cleaning and disinfection with chlorine per NP EN 805. Filling and bacteriological and chemical water analysis before entry into service.',
      },
      {
        step: 6,
        title: 'Certification and ERSAR Registration',
        description:
          'Technical dossier preparation for ERSAR reservoir registration. Issue of compliance certificate and 20-year warranty.',
      },
    ],
    techniques: [
      {
        title: 'Public Network Reservoir — Interior Liner',
        description:
          'For municipal or condominium reservoirs, installation of ACS EPDM as interior liner of concrete reservoir. Standard method for large volumes.',
        pros: [
          'Certification integrated in the process',
          'ERSAR documentation included',
          'Compatible with continuous monitoring systems',
        ],
        cons: [
          'Requires coordination with water managing entity',
          'Supply interruption during works',
        ],
      },
      {
        title: 'Domestic Potable Water Cistern',
        description:
          'For homes with own water source (borehole, spring), concrete cistern with ACS EPDM as alternative to plastic cistern. Greater capacity and durability.',
        pros: [
          'Unlimited capacity — far exceeds plastic cisterns',
          '50+ year durability without replacement',
          'Superior water quality due to absence of plastic migration',
        ],
        cons: [
          'Higher construction cost than plastic cistern',
          'Requires source water quality analysis',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Potable water certification',
        epdm: 'ACS + WRAS — dual certification',
        alternatives: [
          { name: 'Epoxy paint for water', value: 'Some certified (verify)' },
          { name: 'Certified PE cistern', value: 'EN 12451 / ACS' },
          { name: 'GRP with gel coat', value: 'Certifiable' },
        ],
      },
      {
        feature: 'Hygienic surface',
        epdm: 'Smooth — excellent',
        alternatives: [
          { name: 'Epoxy paint for water', value: 'Good — but degrades' },
          { name: 'Certified PE cistern', value: 'Smooth — good' },
          { name: 'GRP with gel coat', value: 'Smooth — good' },
        ],
      },
      {
        feature: 'Durability',
        epdm: '50+ years — no degradation',
        alternatives: [
          { name: 'Epoxy paint for water', value: '5-10 years' },
          { name: 'Certified PE cistern', value: '25-30 years' },
          { name: 'GRP with gel coat', value: '20-30 years' },
        ],
      },
    ],
    climate: [
      {
        zone: 'All Portugal — Municipal Reservoirs',
        description:
          'Many Portuguese municipal reservoirs have 30-50 year old concrete without adequate interior coating. Rehabilitation with ACS EPDM is the reference solution recommended by ERSAR.',
      },
      {
        zone: 'Rural Zones — Own Water Sources',
        description:
          'Rural homes with their own borehole or spring need certified cisterns. ACS EPDM is the most durable and safe solution for these isolated applications.',
      },
      {
        zone: 'Hot Zones — Hot Water Reservoirs',
        description:
          'Domestic hot water reservoirs (up to 65°C) require material stable at these temperatures. ACS EPDM is certified up to 65°C without chemical degradation.',
      },
    ],
    faqs: [
      {
        question: 'What are the differences between ACS and WRAS certification?',
        answer:
          'ACS (French) is recognised by most European regulatory bodies including Portugal. WRAS is the equivalent British standard. Having both certifications is best practice for public and private water supply systems.',
      },
      {
        question: 'Does ERSAR accept certified EPDM in municipal reservoirs?',
        answer:
          'Yes. ERSAR recognises ACS and WRAS standards for materials in contact with drinking water. The technical documentation we provide includes all certificates needed for regulatory approval.',
      },
      {
        question: 'How frequently should a reservoir with EPDM be inspected?',
        answer:
          'Legislation requires annual visual inspection of all potable water reservoirs. EPDM facilitates this inspection through its contrasting colour and smooth surface where anomalies are easily visible.',
      },
    ],
    relatedSlugs: ['water-reservoirs', 'rainwater-harvesting', 'swimming-pools'],
  },
}
