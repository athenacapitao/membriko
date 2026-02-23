import type { ApplicationData } from '../types'

export const sportsSurfaces: ApplicationData = {
  id: 'sports-surfaces',
  categoryId: 'recreation',
  pt: {
    meta: {
      title: 'Pavimentos Desportivos com EPDM | Membriko',
      description: 'Revestimentos EPDM para pistas de atletismo, campos multisport, pistas de ciclismo e pavimentos desportivos exteriores. Certificado para competição. Portugal.',
      keywords: ['pavimento desportivo EPDM', 'pista atletismo EPDM Portugal', 'campo multisport revestimento', 'EPDM pista corrida', 'pavimento desportivo exterior'],
    },
    hero: {
      headline: 'Pavimentos Desportivos EPDM para Performance e Durabilidade',
      subtitle: 'Os pavimentos EPDM para instalações desportivas oferecem desempenho atlético certificado, resistência a UV e utilização intensiva, com vida útil de 10-15 anos.',
      stats: [
        { value: 'IAAF', label: 'Certificação para competição' },
        { value: '15+', label: 'Cores disponíveis' },
        { value: '15 anos', label: 'Vida útil' },
        { value: '10 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Pavimentos Desportivos Exteriores',
      description: 'Os pavimentos desportivos exteriores estão expostos a utilização intensiva, UV intenso, variações térmicas extremas e cargas de impacto específicas de cada modalidade. A escolha inadequada compromete desempenho atlético e aumenta risco de lesões.',
      points: [
        'Pavimentos desportivos inadequados aumentam risco de lesões por amortecimento insuficiente',
        'UV intenso em Portugal desvanece cores e degrada ligantes de pavimentos de baixa qualidade',
        'Pistas de atletismo em betão betuminoso fissurem com variações térmicas e perdem certificação',
        'Campos multisport com superfície inadequada criam irregularidades que comprometem o jogo',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Pavimentos Desportivos',
      description: 'Os sistemas de pavimento EPDM para instalações desportivas são certificados pelas federações internacionais (IAAF para atletismo, ITF para ténis). Oferecem o equilíbrio correto entre desempenho atlético, amortecimento e durabilidade.',
      points: [
        'Sistema EPDM in-situ para pistas de atletismo com certificação IAAF classes 1-4',
        'EPDM granulado colorido para campos multisport com diferentes especificações por modalidade',
        'Resistência a UV com estabilidade de cor de 10+ anos sob condições portuguesas',
        'Sistema de drenagem integrado para campos exteriores sem acumulação de água',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Certificações Desportivas', description: 'Sistemas EPDM com certificação IAAF (atletismo), ITF (ténis) e FIFA (futebol de 5) — garantindo qualidade de jogo para competições.' },
      { icon: 'Layers', title: 'Desempenho Atlético Optimizado', description: 'O EPDM oferece o equilíbrio correto entre firmeza (para velocidade e salto) e amortecimento (para proteção de articulações) específico para cada modalidade.' },
      { icon: 'Thermometer', title: 'Resistência UV Portuguesa', description: 'Estabilidade de cor garantida por 10+ anos sob UV intenso português — sem desvanecimento nem degradação de ligante que criaria superfície solta.' },
      { icon: 'Droplets', title: 'Drenagem Integrada', description: 'Pavimento poroso com drenagem integrada — campos de desporto utilizáveis 30 minutos após chuva intensa.' },
      { icon: 'Clock', title: 'Vida Útil de Instalação Desportiva', description: 'Vida útil de 10-15 anos compatível com ciclos de renovação de instalações desportivas públicas e privadas.' },
      { icon: 'Wrench', title: 'Renovação Simples', description: 'Ao fim da vida útil, a camada de acabamento EPDM pode ser renovada sem substituição da camada base — reduzindo custo de ciclo de vida.' },
    ],
    specs: [
      { label: 'Espessura total', value: '10-40 mm (conforme modalidade e certificação)' },
      { label: 'Certificações', value: 'IAAF (atletismo), ITF (ténis), FIFA (futebol)' },
      { label: 'Cores disponíveis', value: '15+ cores standard' },
      { label: 'Resistência UV', value: 'Excelente — cor estável 10+ anos' },
      { label: 'Dureza Shore A', value: '30-60 (conforme especificação desportiva)' },
      { label: 'Coeficiente de atrito', value: '0,5-0,8 (anti-derrapante desportivo)' },
      { label: 'Temperatura de serviço', value: '-30°C a +80°C' },
      { label: 'Norma', value: 'EN 14904 (superfícies desportivas)' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto Desportivo', description: 'Definição de modalidades, dimensões, certificações necessárias e especificações de desempenho. Coordenação com federações desportivas se aplicável.' },
      { step: 2, title: 'Base e Sub-base', description: 'Compactação de sub-base mineral. Aplicação de betão betuminoso de base. Pendentes de drenagem. Inspeção de planimetria.' },
      { step: 3, title: 'Camada Base de Borracha', description: 'Aplicação de camada base SBR + poliuretano conforme espessura de projeto. Mistura in-situ ou painéis pré-fabricados.' },
      { step: 4, title: 'Camada de Acabamento EPDM', description: 'Aplicação de camada de acabamento EPDM granulado colorido. Espessura mínima e cor conforme certificação desportiva.' },
      { step: 5, title: 'Marcações e Delimitações', description: 'Pintura de marcações de campo (linhas, zonas, circuitos) com tinta de poliuretano certificada para cada modalidade.' },
      { step: 6, title: 'Certificação e Garantia', description: 'Teste de desempenho desportivo (EN 14904). Certificado de instalação para federação desportiva. Garantia de 10 anos.' },
    ],
    techniques: [
      {
        title: 'Sistema Full PU para Pistas de Atletismo',
        description: 'Camada base SBR 9-13 mm + camada de acabamento EPDM 2-3 mm com ligante PU. Sistema standard para pistas de atletismo com certificação IAAF.',
        pros: ['Desempenho atlético certificado IAAF', 'Máxima resistência a desgaste em pistas de corrida', 'Superfície uniforme e precisa para competição'],
        cons: ['Custo mais elevado por m²', 'Instalação requer condições meteorológicas controladas'],
      },
      {
        title: 'Sistema Poroso para Campos Multisport',
        description: 'Sistema poroso com drenagem integrada para campos de basquete, voleibol e futebol de 5. EPDM granulado com estrutura aberta para drenagem rápida.',
        pros: ['Drenagem rápida após chuva', 'Versátil para múltiplas modalidades', 'Custo inferior ao sistema pista de atletismo'],
        cons: ['Desempenho de corrida inferior ao sistema Full PU', 'Partículas de EPDM podem soltar-se em uso intenso'],
      },
    ],
    comparison: [
      { feature: 'Certificação IAAF (atletismo)', epdm: 'Sim — classes 1-4', alternatives: [{ name: 'Betume modificado', value: 'Não certificado' }, { name: 'Resina PU pura', value: 'Sim' }] },
      { feature: 'Vida útil', epdm: '10-15 anos', alternatives: [{ name: 'Betume modificado', value: '5-8 anos' }, { name: 'Resina PU pura', value: '10-12 anos' }] },
    ],
    climate: [
      { zone: 'Sul (Atletismo e Desporto ao Ar Livre)', description: 'Algarve e Alentejo com clima ideal para desporto ao ar livre — UV intenso exige EPDM de alta resistência UV para manter cor e desempenho durante a vida útil.' },
      { zone: 'Norte (Chuva Frequente)', description: 'Norte com precipitação intensa exige sistema poroso com drenagem superior. O EPDM poroso garante campos utilizáveis mesmo em períodos chuvosos.' },
      { zone: 'Centros Urbanos (Uso Intensivo)', description: 'Instalações desportivas em centros urbanos com alta frequência de uso requerem EPDM de alta resistência ao desgaste e manutenção fácil.' },
    ],
    faqs: [
      { question: 'O EPDM para pistas de atletismo tem certificação para competições internacionais?', answer: 'Sim. Os sistemas EPDM full PU para pistas de atletismo podem obter certificação IAAF classes 1 e 2 (para competições internacionais) e classes 3 e 4 (para uso recreativo e escolar), conforme as especificações técnicas de cada classe.' },
      { question: 'Qual a diferença entre EPDM para pista de atletismo e campo multisport?', answer: 'A pista de atletismo requer superfície firme e uniforme específica para corrida e saltos — sistema full PU com espessura precisa e maior dureza. O campo multisport requer versatilidade para várias modalidades e boa drenagem — sistema poroso mais flexível e com menor custo por m².' },
      { question: 'É possível renovar apenas a camada de acabamento EPDM ao fim da vida útil?', answer: 'Sim. A camada base de SBR tem vida útil de 20-25 anos. Ao fim de 10-15 anos, só a camada de acabamento EPDM necessita de renovação, com custo de 40-50% da instalação nova. Este é o principal vantagem do sistema em duas camadas para instalações desportivas.' },
    ],
    relatedSlugs: ['playground-surfaces', 'terraces-balconies', 'commercial'],
  },
  en: {
    meta: {
      title: 'EPDM Sports Surfaces | Membriko',
      description: 'EPDM surfacing for athletics tracks, multisport courts, cycling tracks and outdoor sports surfaces. Certified for competition. Portugal.',
      keywords: ['sports surface EPDM', 'athletics track EPDM Portugal', 'multisport court surfacing', 'EPDM running track', 'outdoor sports surface'],
    },
    hero: {
      headline: 'EPDM Sports Surfaces for Performance and Durability',
      subtitle: 'EPDM surfaces for sports facilities offer certified athletic performance, UV resistance and intensive use, with 10-15 year service life.',
      stats: [
        { value: 'IAAF', label: 'Competition certification' },
        { value: '15+', label: 'Available colours' },
        { value: '15 years', label: 'Service life' },
        { value: '10 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Outdoor Sports Surface Challenge',
      description: 'Outdoor sports surfaces face intensive use, intense UV, extreme thermal variations and sport-specific impact loads. Inadequate choice compromises athletic performance and increases injury risk.',
      points: [
        'Inadequate sports surfaces increase injury risk from insufficient attenuation',
        'Intense UV in Portugal fades colours and degrades binders in low-quality surfaces',
        'Bituminous athletics tracks crack with thermal variations and lose certification',
        'Multisport courts with inadequate surface create irregularities compromising play',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Sports Surfaces',
      description: 'EPDM sports surface systems are certified by international federations (IAAF for athletics, ITF for tennis). They offer the correct balance of athletic performance, attenuation and durability.',
      points: [
        'In-situ EPDM system for athletics tracks with IAAF classes 1-4 certification',
        'Coloured EPDM granulate for multisport courts with different specifications per sport',
        'UV resistance with colour stability of 10+ years under Portuguese conditions',
        'Integrated drainage system for outdoor courts without water accumulation',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Sports Certifications', description: 'EPDM systems with IAAF (athletics), ITF (tennis) and FIFA (5-a-side football) certification — guaranteeing play quality for competitions.' },
      { icon: 'Layers', title: 'Optimised Athletic Performance', description: 'EPDM offers the correct balance between firmness (for speed and jumping) and attenuation (for joint protection) specific to each sport.' },
      { icon: 'Thermometer', title: 'Portuguese UV Resistance', description: 'Colour stability guaranteed for 10+ years under intense Portuguese UV — no fading or binder degradation creating loose surface.' },
      { icon: 'Droplets', title: 'Integrated Drainage', description: 'Porous surface with integrated drainage — sports courts usable 30 minutes after heavy rain.' },
      { icon: 'Clock', title: 'Sports Facility Service Life', description: 'Service life of 10-15 years compatible with renovation cycles of public and private sports facilities.' },
      { icon: 'Wrench', title: 'Simple Renewal', description: 'At end of service life, the EPDM finish layer can be renewed without replacing the base layer — reducing lifecycle cost.' },
    ],
    specs: [
      { label: 'Total thickness', value: '10-40 mm (per sport and certification)' },
      { label: 'Certifications', value: 'IAAF (athletics), ITF (tennis), FIFA (football)' },
      { label: 'Available colours', value: '15+ standard colours' },
      { label: 'UV resistance', value: 'Excellent — colour stable 10+ years' },
      { label: 'Shore A hardness', value: '30-60 (per sports specification)' },
      { label: 'Friction coefficient', value: '0.5-0.8 (sports anti-slip)' },
      { label: 'Service temperature', value: '-30°C to +80°C' },
      { label: 'Standard', value: 'EN 14904 (sports surfaces)' },
    ],
    installationSteps: [
      { step: 1, title: 'Sports Design', description: 'Sport definition, dimensions, required certifications and performance specifications. Sports federation coordination if applicable.' },
      { step: 2, title: 'Base and Sub-base', description: 'Mineral sub-base compaction. Base bituminous concrete application. Drainage slopes. Planimetry inspection.' },
      { step: 3, title: 'Rubber Base Layer', description: 'SBR + polyurethane base layer application per design thickness. In-situ mixing or pre-fabricated panels.' },
      { step: 4, title: 'EPDM Finish Layer', description: 'Coloured EPDM granulate finish layer application. Minimum thickness and colour per sports certification.' },
      { step: 5, title: 'Markings and Lines', description: 'Court marking painting (lines, zones, circuits) with polyurethane paint certified for each sport.' },
      { step: 6, title: 'Certification and Warranty', description: 'Sports performance test (EN 14904). Installation certificate for sports federation. 10-year warranty.' },
    ],
    techniques: [
      {
        title: 'Full PU System for Athletics Tracks',
        description: 'SBR base layer 9-13 mm + EPDM finish layer 2-3 mm with PU binder. Standard system for IAAF-certified athletics tracks.',
        pros: ['IAAF certified athletic performance', 'Maximum wear resistance on running tracks', 'Uniform and precise surface for competition'],
        cons: ['Higher cost per m²', 'Installation requires controlled weather conditions'],
      },
      {
        title: 'Porous System for Multisport Courts',
        description: 'Porous system with integrated drainage for basketball, volleyball and 5-a-side football courts. EPDM granulate with open structure for fast drainage.',
        pros: ['Fast drainage after rain', 'Versatile for multiple sports', 'Lower cost than athletics track system'],
        cons: ['Running performance inferior to full PU system', 'EPDM particles may loosen with intensive use'],
      },
    ],
    comparison: [
      { feature: 'IAAF certification (athletics)', epdm: 'Yes — classes 1-4', alternatives: [{ name: 'Modified bitumen', value: 'Not certified' }, { name: 'Pure PU resin', value: 'Yes' }] },
      { feature: 'Service life', epdm: '10-15 years', alternatives: [{ name: 'Modified bitumen', value: '5-8 years' }, { name: 'Pure PU resin', value: '10-12 years' }] },
    ],
    climate: [
      { zone: 'South (Athletics and Outdoor Sport)', description: 'Algarve and Alentejo with ideal outdoor sport climate — intense UV demands high UV-resistance EPDM to maintain colour and performance throughout service life.' },
      { zone: 'North (Frequent Rain)', description: 'North with intense rainfall demands porous system with superior drainage. Porous EPDM ensures courts usable even during rainy periods.' },
      { zone: 'Urban Centres (Intensive Use)', description: 'Sports facilities in urban centres with high use frequency require high wear-resistance EPDM with easy maintenance.' },
    ],
    faqs: [
      { question: 'Does athletics track EPDM have certification for international competitions?', answer: 'Yes. Full PU EPDM systems for athletics tracks can obtain IAAF class 1 and 2 certification (for international competitions) and classes 3 and 4 (for recreational and school use), per the technical specifications of each class.' },
      { question: 'What is the difference between EPDM for athletics tracks and multisport courts?', answer: 'Athletics tracks require firm, uniform surface specific for running and jumping — full PU system with precise thickness and greater hardness. Multisport courts require versatility for multiple sports and good drainage — more flexible porous system at lower cost per m².' },
      { question: 'Is it possible to renew only the EPDM finish layer at end of service life?', answer: 'Yes. The SBR base layer has a 20-25 year service life. After 10-15 years, only the EPDM finish layer needs renewal, at 40-50% of new installation cost. This is the main advantage of the two-layer system for sports facilities.' },
    ],
    relatedSlugs: ['playground-surfaces', 'terraces-balconies', 'commercial'],
  },
}
