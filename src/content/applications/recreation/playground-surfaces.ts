import type { ApplicationData } from '../types'

export const playgroundSurfaces: ApplicationData = {
  id: 'playground-surfaces',
  categoryId: 'recreation',
  pt: {
    meta: {
      title: 'Revestimentos de Parques Infantis com EPDM | Membriko',
      description: 'Pavimentos e revestimentos EPDM para parques infantis, áreas de recreio e espaços de jogo. Seguro, colorido e resistente a UV. Portugal.',
      keywords: ['pavimento parque infantil EPDM', 'revestimento área recreio', 'piso borracha parque infantil', 'EPDM área jogo Portugal', 'pavimento seguro crianças'],
    },
    hero: {
      headline: 'Parques Infantis Seguros com Revestimentos EPDM Coloridos',
      subtitle: 'Os pavimentos EPDM para parques infantis oferecem amortecimento de impacto certificado, resistência UV e cores vibrantes que mantêm o aspeto por anos.',
      stats: [
        { value: 'HIC', label: 'Certificação de segurança de impacto' },
        { value: '15+', label: 'Cores disponíveis' },
        { value: '50+', label: 'Anos de vida útil' },
        { value: '10 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio dos Pavimentos de Parques Infantis',
      description: 'Os parques infantis requerem pavimentos que equilibrem segurança de impacto, durabilidade, manutenção fácil e aspeto apelativo para crianças. Os pavimentos inadequados criam riscos de lesão, degradam rapidamente e requerem manutenção constante.',
      points: [
        'Quedas em pavimentos duros causam lesões graves — regulamentação EN 1176/EN 1177 exige amortecimento',
        'Areia e gravilha em parques infantis escorregam, escondem objetos perigosos e enterram-se no calçado',
        'Pavimentos betuminosos ficam muito quentes no verão e degradam-se com UV em poucos anos',
        'Parques infantis em áreas públicas requerem manutenção fácil e resistência a vandalismos',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Parques Infantis',
      description: 'Os pavimentos EPDM para parques infantis são certificados pela norma EN 1177 (absorção de impacto) e EN 1176 (segurança em equipamentos). Disponíveis em múltiplas cores e padrões para criar ambientes estimulantes e seguros.',
      points: [
        'Certificação EN 1177 para amortecimento de impacto com HIC calculado para altura de queda específica',
        'EPDM granulado colorido em 15+ cores para desenhos personalizados no pavimento',
        'Resistência a UV sem desvanecimento de cor em 10+ anos em Portugal',
        'Impermeável — sem lamas, areia ou poças de água em dias de chuva',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Segurança de Impacto EN 1177', description: 'Certificação EN 1177 para amortecimento de impacto — pavimento absorve energia de queda, reduzindo risco de lesões graves em crianças.' },
      { icon: 'Layers', title: 'Cores e Padrões Personalizados', description: 'EPDM granulado em 15+ cores permite criar pavimentos com zonas de jogo, símbolos, números, animais e padrões — estimulantes e educativos.' },
      { icon: 'Droplets', title: 'Impermeável e Drenante', description: 'EPDM poroso com drenagem integrada — sem lamas, sem poças, sem areia. Crianças brincam mesmo após chuva.' },
      { icon: 'Thermometer', title: 'Confortável no Calor', description: 'O EPDM aquece menos que asfalto no verão — temperatura de superfície 20-30°C mais baixa em dias de calor intenso. Mais seguro para crianças em joelhos.' },
      { icon: 'Wrench', title: 'Fácil Manutenção', description: 'Limpeza com água e detergente neutro. Sem juntas onde acumula sujidade. Sem substituição de elementos individuais por desgaste.' },
      { icon: 'Clock', title: 'Vida Útil de 10+ Anos', description: 'Com manutenção básica, os pavimentos EPDM para parques infantis mantêm desempenho de segurança e aspeto estético por 10-15 anos.' },
    ],
    specs: [
      { label: 'Espessura', value: '40-100 mm (conforme altura de queda prevista)' },
      { label: 'Certificação de segurança', value: 'EN 1177 — absorção de impacto (HIC)' },
      { label: 'Cores disponíveis', value: '15+ cores standard + personalização' },
      { label: 'Resistência UV', value: 'Excelente — cor estável 10+ anos' },
      { label: 'Coeficiente de atrito', value: '≥ 0,4 (superfície antiderrapante)' },
      { label: 'Drenagem', value: 'Permeável — 1-3 cm/min conforme especificação' },
      { label: 'Temperatura de serviço', value: '-30°C a +80°C' },
      { label: 'Norma', value: 'EN 1177 / EN 1176' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto de Pavimento', description: 'Definição de zonas, equipamentos e alturas de queda. Cálculo de espessura de EPDM necessária para cada zona conforme EN 1177.' },
      { step: 2, title: 'Base', description: 'Preparação da base (sub-base de brita + betão betuminoso ou betão). Pendentes para drenagem. Geotêxtil de separação.' },
      { step: 3, title: 'Camada de Borracha Base', description: 'Aplicação de camada base de granulado de borracha SBR (cinzento) + aglutinante poliuretano. Espessura conforme projeto.' },
      { step: 4, title: 'Camada de Acabamento EPDM', description: 'Aplicação de camada de acabamento de granulado EPDM colorido + aglutinante. Espessura mínima 10-15 mm. Padrões e cores conforme projeto.' },
      { step: 5, title: 'Acabamentos e Marcações', description: 'Aplicação de elementos decorativos, jogos de chão, números e animais em EPDM de cores diferentes.' },
      { step: 6, title: 'Certificação', description: 'Teste de absorção de impacto HIC. Certificado EN 1177 para efeitos de conformidade regulatória. Garantia de 10 anos.' },
    ],
    techniques: [
      {
        title: 'EPDM Vazado In-Situ (Seamless)',
        description: 'Pavimento EPDM aplicado in-situ como sistema contínuo sem juntas. Sistema mais resistente e com mais opções de design para parques infantis de referência.',
        pros: ['Sem juntas onde acumulam detritos', 'Máxima flexibilidade de design e padrões', 'Melhor desempenho de impacto por espessura uniforme'],
        cons: ['Custo superior a painéis modulares', 'Instalação requer condições meteorológicas adequadas'],
      },
      {
        title: 'Placas de Borracha EPDM Modulares',
        description: 'Placas pré-fabricadas de EPDM colorido em formatos padrão (500x500 mm ou 1000x1000 mm). Instalação rápida por encaixe ou colagem.',
        pros: ['Instalação mais rápida', 'Substituição fácil de placas danificadas', 'Adequado para obras faseadas ou reabilitação'],
        cons: ['Juntas entre placas acumulam sujidade com o tempo', 'Menos opções de design personalizado'],
      },
    ],
    comparison: [
      { feature: 'Certificação EN 1177', epdm: 'Sim — in-situ e modular', alternatives: [{ name: 'Areia/gravilha', value: 'Sim (profundidade controlada)' }, { name: 'Aparas de madeira', value: 'Sim (mas degrada)' }] },
      { feature: 'Manutenção', epdm: 'Baixa — limpeza periódica', alternatives: [{ name: 'Areia/gravilha', value: 'Alta — reposição frequente' }, { name: 'Aparas de madeira', value: 'Alta — reposição anual' }] },
    ],
    climate: [
      { zone: 'Litoral (Humidade e UV)', description: 'Parques infantis costeiros com humidade elevada e UV intenso requerem EPDM com resistência UV específica para manutenção da cor e não desenvolvimento de bolores.' },
      { zone: 'Sul (Calor Intenso)', description: 'Parques infantis no Algarve e Alentejo com temperaturas extremas de verão — o EPDM é preferível ao asfalto que atinge temperaturas perigosas para crianças.' },
      { zone: 'Norte (Chuva e Humidade)', description: 'Norte com alta precipitação — o EPDM poroso com boa drenagem mantém o parque utilizável mesmo após chuva intensa, ao contrário de superfícies de terra.' },
    ],
    faqs: [
      { question: 'Que espessura de EPDM é necessária para um escorrega de 2 m de altura?', answer: 'Para uma altura de queda de 2 m, é necessária espessura total de aproximadamente 80-100 mm de EPDM (camada base SBR + camada de acabamento EPDM), conforme cálculo EN 1177. A espessura exata depende da densidade específica do granulado utilizado.' },
      { question: 'O pavimento EPDM de parque infantil é seguro para crianças com alergias ao látex?', answer: 'Sim. O EPDM é um elastómero sintético que não contém látex natural. É seguro para crianças com alergia ao látex, ao contrário de alguns borrachas naturais usadas em alternativas.' },
    ],
    relatedSlugs: ['sports-surfaces', 'terraces-balconies', 'cool-reflective-roofs'],
  },
  en: {
    meta: {
      title: 'Playground Surface EPDM Surfacing | Membriko',
      description: 'EPDM flooring and surfaces for playgrounds, recreation areas and play spaces. Safe, colourful and UV resistant. Portugal.',
      keywords: ['playground EPDM surface', 'recreation area surfacing', 'rubber playground flooring', 'EPDM play area Portugal', 'safe children\'s flooring'],
    },
    hero: {
      headline: 'Safe Playgrounds with Colourful EPDM Surfaces',
      subtitle: 'EPDM surfaces for playgrounds offer certified impact attenuation, UV resistance and vibrant colours that maintain appearance for years.',
      stats: [
        { value: 'HIC', label: 'Impact safety certification' },
        { value: '15+', label: 'Available colours' },
        { value: '50+', label: 'Years service life' },
        { value: '10 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Playground Surface Challenge',
      description: 'Playgrounds require surfaces balancing impact safety, durability, easy maintenance and appealing appearance for children. Inadequate surfaces create injury risks, degrade quickly and require constant maintenance.',
      points: [
        'Falls on hard surfaces cause serious injuries — EN 1176/EN 1177 regulation requires impact attenuation',
        'Sand and gravel in playgrounds slip, hide dangerous objects and fill shoes',
        'Bituminous surfaces get very hot in summer and degrade with UV within years',
        'Public area playgrounds require easy maintenance and vandalism resistance',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Playgrounds',
      description: 'EPDM playground surfaces are certified to EN 1177 (impact absorption) and EN 1176 (equipment safety). Available in multiple colours and patterns to create stimulating and safe environments.',
      points: [
        'EN 1177 certification for impact attenuation with HIC calculated for specific fall height',
        'Coloured EPDM granulate in 15+ colours for customised floor designs',
        'UV resistance without colour fading for 10+ years in Portugal',
        'Waterproof — no mud, sand or puddles on rainy days',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'EN 1177 Impact Safety', description: 'EN 1177 certification for impact attenuation — surface absorbs fall energy, reducing serious injury risk for children.' },
      { icon: 'Layers', title: 'Custom Colours and Patterns', description: 'EPDM granulate in 15+ colours allows creating surfaces with play zones, symbols, numbers, animals and patterns — stimulating and educational.' },
      { icon: 'Droplets', title: 'Waterproof and Draining', description: 'Porous EPDM with integrated drainage — no mud, no puddles, no sand. Children play even after rain.' },
      { icon: 'Thermometer', title: 'Comfortable in Heat', description: 'EPDM heats less than asphalt in summer — surface temperature 20-30°C lower on intense heat days. Safer for children on knees.' },
      { icon: 'Wrench', title: 'Easy Maintenance', description: 'Cleaning with water and neutral detergent. No joints accumulating dirt. No individual element replacement from wear.' },
      { icon: 'Clock', title: '10+ Year Service Life', description: 'With basic maintenance, EPDM playground surfaces maintain safety performance and aesthetic appearance for 10-15 years.' },
    ],
    specs: [
      { label: 'Thickness', value: '40-100 mm (per anticipated fall height)' },
      { label: 'Safety certification', value: 'EN 1177 — impact absorption (HIC)' },
      { label: 'Available colours', value: '15+ standard colours + customisation' },
      { label: 'UV resistance', value: 'Excellent — colour stable 10+ years' },
      { label: 'Friction coefficient', value: '≥ 0.4 (anti-slip surface)' },
      { label: 'Drainage', value: 'Permeable — 1-3 cm/min per specification' },
      { label: 'Service temperature', value: '-30°C to +80°C' },
      { label: 'Standard', value: 'EN 1177 / EN 1176' },
    ],
    installationSteps: [
      { step: 1, title: 'Surface Design', description: 'Zone, equipment and fall height definition. EPDM thickness calculation required for each zone per EN 1177.' },
      { step: 2, title: 'Base', description: 'Base preparation (gravel sub-base + bituminous concrete or concrete). Drainage slopes. Separation geotextile.' },
      { step: 3, title: 'Base Rubber Layer', description: 'SBR rubber granulate base layer application (grey) + polyurethane binder. Thickness per design.' },
      { step: 4, title: 'EPDM Finish Layer', description: 'Coloured EPDM granulate finish layer application + binder. Minimum 10-15 mm thickness. Patterns and colours per design.' },
      { step: 5, title: 'Finishes and Markings', description: 'Decorative elements, floor games, numbers and animals application in different EPDM colours.' },
      { step: 6, title: 'Certification', description: 'HIC impact absorption test. EN 1177 certificate for regulatory compliance. 10-year warranty.' },
    ],
    techniques: [
      {
        title: 'In-Situ Poured EPDM (Seamless)',
        description: 'EPDM surface applied in-situ as continuous seamless system. Most resistant system with most design options for reference playgrounds.',
        pros: ['No joints accumulating debris', 'Maximum design and pattern flexibility', 'Best impact performance from uniform thickness'],
        cons: ['Higher cost than modular tiles', 'Installation requires suitable weather conditions'],
      },
      {
        title: 'Modular EPDM Rubber Tiles',
        description: 'Pre-fabricated coloured EPDM tiles in standard formats (500x500 mm or 1000x1000 mm). Fast snap-fit or bonded installation.',
        pros: ['Faster installation', 'Easy damaged tile replacement', 'Suitable for phased works or rehabilitation'],
        cons: ['Joints between tiles accumulate dirt over time', 'Fewer custom design options'],
      },
    ],
    comparison: [
      { feature: 'EN 1177 certification', epdm: 'Yes — in-situ and modular', alternatives: [{ name: 'Sand/gravel', value: 'Yes (controlled depth)' }, { name: 'Wood chips', value: 'Yes (but degrades)' }] },
      { feature: 'Maintenance', epdm: 'Low — periodic cleaning', alternatives: [{ name: 'Sand/gravel', value: 'High — frequent topping up' }, { name: 'Wood chips', value: 'High — annual replacement' }] },
    ],
    climate: [
      { zone: 'Coast (Humidity and UV)', description: 'Coastal playgrounds with high humidity and intense UV require UV-resistant EPDM to maintain colour and prevent mould development.' },
      { zone: 'South (Intense Heat)', description: 'Playgrounds in Algarve and Alentejo with extreme summer temperatures — EPDM is preferable to asphalt which reaches temperatures dangerous for children.' },
      { zone: 'North (Rain and Humidity)', description: 'North with high rainfall — porous EPDM with good drainage keeps the playground usable even after heavy rain, unlike earth surfaces.' },
    ],
    faqs: [
      { question: 'What EPDM thickness is needed for a 2 m high slide?', answer: 'For a 2 m fall height, total thickness of approximately 80-100 mm of EPDM (SBR base layer + EPDM finish layer) is required, per EN 1177 calculation. The exact thickness depends on the specific density of the granulate used.' },
      { question: 'Is EPDM playground surface safe for children with latex allergies?', answer: 'Yes. EPDM is a synthetic elastomer containing no natural latex. It is safe for latex-allergic children, unlike some natural rubbers used in alternatives.' },
    ],
    relatedSlugs: ['sports-surfaces', 'terraces-balconies', 'cool-reflective-roofs'],
  },
}
