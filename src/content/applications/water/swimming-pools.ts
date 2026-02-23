import type { ApplicationData } from '../types'

export const swimmingPools: ApplicationData = {
  id: 'swimming-pools',
  categoryId: 'water',
  pt: {
    meta: {
      title: 'Impermeabilização de Piscinas com Membrana EPDM | Membriko',
      description:
        'Membrana EPDM para revestimento e impermeabilização de piscinas. Resistente a cloro, UV e químicos. Solução de 50 anos para piscinas residenciais e públicas. Portugal.',
      keywords: [
        'impermeabilização piscina EPDM',
        'membrana piscina Portugal',
        'revestimento piscina EPDM',
        'piscina membrana impermeável',
        'impermeabilizar piscina',
      ],
    },
    hero: {
      headline: 'Piscinas Impermeáveis com Membrana EPDM de 50 Anos',
      subtitle:
        'A membrana EPDM é a solução profissional para impermeabilização de piscinas — resistente a cloro, UV, pressão hidrostática e variações térmicas extremas.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: '100%', label: 'Resistência ao cloro' },
        { value: '400%', label: 'Elongação — sem fissuras' },
        { value: '20 anos', label: 'Garantia da obra' },
      ],
    },
    problem: {
      title: 'O Desafio da Impermeabilização de Piscinas',
      description:
        'Uma piscina está em contacto permanente com água tratada com produtos químicos agressivos. A pressão hidrostática, os ciclos térmicos e a ação do cloro e outros tratamentos degradam rapidamente as soluções convencionais.',
      points: [
        'Revestimentos em tinta epóxi fissurem em 3-7 anos com pressão hidrostática e UV',
        'Liner de PVC degrada com UV e cloro, tornando-se frágil e rasgando-se em 10-15 anos',
        'Mosaicos e cerâmica ficam descolados pela pressão hidrostática após ciclos de vazio',
        'Fissuras em piscinas de betão causam perda de 20.000-50.000 litros/dia',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Piscinas',
      description:
        'A membrana EPDM para piscinas é formulada com resistência específica a cloro, ozono, UV e pressão hidrostática continuada. Com espessura de 1,5-2,0 mm, cria uma bacia impermeável que não fissurea, não descolora e não necessita de manutenção por 50+ anos.',
      points: [
        'Resistência química certificada a cloro, bromo, sal e ozono para tratamento de água',
        'Elasticidade permanente que acomoda movimentos estruturais sem fissurar',
        'Instalação em folha única sem emendas subaquáticas vulneráveis',
        'Disponível em preto, cinzento e azul para diferentes estéticas',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Resistência Química Total',
        description:
          'O EPDM para piscinas é certificado para imersão permanente em água com cloro, bromo, sal e ozono. Nenhuma degradação química ao longo de 50+ anos de uso.',
      },
      {
        icon: 'Shield',
        title: 'Estanquidade Permanente',
        description:
          'Uma bacia EPDM não fissurea nem descolore — a piscina mantém o nível de água sem perdas ao longo de toda a vida útil do sistema.',
      },
      {
        icon: 'Thermometer',
        title: 'Compatível com Aquecimento',
        description:
          'Resistente a temperaturas de água entre 0°C e 50°C para piscinas aquecidas ou com coberturas solares. Não degrada com água quente ao contrário do PVC.',
      },
      {
        icon: 'Euro',
        title: 'Custo de Ciclo de Vida Muito Baixo',
        description:
          'Enquanto liners PVC precisam de substituição em 15 anos, o EPDM dura 50+ sem substituição. O custo acumulado de 50 anos do EPDM é 30-50% inferior a liners PVC.',
      },
      {
        icon: 'Palette',
        title: 'Opções Estéticas',
        description:
          'Disponível em preto profundo (estética contemporânea), cinzento azulado e azul standard para qualquer projeto de piscina residencial ou pública.',
      },
      {
        icon: 'Leaf',
        title: 'Sem Plastificantes',
        description:
          'Ao contrário do PVC, o EPDM não contém plastificantes que migram para a água da piscina. A qualidade química da água é mantida pura ao longo do tempo.',
      },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm (residencial) / 2,0 mm (público/desportivo)' },
      { label: 'Resistência ao cloro (livre)', value: 'Até 5 mg/L — sem degradação' },
      { label: 'pH da água suportado', value: '6,5 a 8,5' },
      { label: 'Temperatura da água', value: '0°C a 50°C' },
      { label: 'Elongação na rutura', value: '≥ 400%' },
      { label: 'Resistência à tração', value: '≥ 9 N/mm²' },
      { label: 'Resistência à pressão hidrostática', value: 'Aprovado EN 1928 (método B)' },
      { label: 'Certificação para contacto com água', value: 'ACS / WRAS / KTW' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Projeto e Dimensionamento',
        description:
          'Levantamento da piscina, cálculo de cortes e emendas para minimizar juntas. Definição de cor e espessura. Verificação de compatibilidade com sistema de filtração.',
      },
      {
        step: 2,
        title: 'Preparação da Estrutura',
        description:
          'Limpeza e reparação da estrutura de betão. Tratamento de fissuras com produto de regularização flexível. Alisamento de arestas vivas que possam perfurar a membrana.',
      },
      {
        step: 3,
        title: 'Instalação do EPDM',
        description:
          'Colocação da membrana EPDM começando pelo fundo e subindo pelas paredes laterais. Colagem em toda a superfície com adesivo específico para imersão permanente.',
      },
      {
        step: 4,
        title: 'Emendas e Detalhes',
        description:
          'Soldadura de todas as emendas com adesivo de contacto EPDM certificado para imersão. Tratamento dos cantos e degraus com peças pré-formadas de EPDM.',
      },
      {
        step: 5,
        title: 'Skimmers, Injetores e Ralos',
        description:
          'Instalação de acessórios EPDM para skimmers, injetores de retorno, ralos de fundo e iluminação. Vedação certificada de todas as penetrações.',
      },
      {
        step: 6,
        title: 'Enchimento e Verificação',
        description:
          'Enchimento gradual da piscina. Verificação de nível de água ao longo de 72 horas para confirmar ausência de fugas. Emissão de garantia de 20 anos.',
      },
    ],
    techniques: [
      {
        title: 'EPDM Colado em Toda a Superfície',
        description:
          'Membrana EPDM colada em 100% da superfície da piscina com adesivo de imersão. Método preferido para piscinas residenciais de geometria standard.',
        pros: [
          'Sem bolsas de ar aprisionado',
          'Máxima aderência à estrutura',
          'Adequado para piscinas aquecidas com grandes variações de nível',
        ],
        cons: [
          'Processo de instalação mais demorado',
          'Requer superfície de betão perfeitamente lisa',
          'Acesso para reparação requer esvaziamento',
        ],
      },
      {
        title: 'EPDM com Fixação Perimetral',
        description:
          'Membrana fixada apenas no perímetro da piscina com perfil de encaixe. O EPDM "flutua" ligeiramente mas é mantido tenso. Instalação mais rápida.',
        pros: [
          'Instalação mais rápida e económica',
          'Tolerante a movimentos diferenciais da estrutura',
          'Mais fácil remoção para inspeção ou substituição',
        ],
        cons: [
          'Não adequado para piscinas com variações de nível frequentes',
          'Requer cuidado especial nos cantos',
          'Perfil de fixação pode ser ponto de infiltração se mal instalado',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Vida útil',
        epdm: '50+ anos',
        alternatives: [
          { name: 'Liner PVC', value: '10-15 anos' },
          { name: 'Tinta epóxi', value: '3-7 anos' },
          { name: 'Mosaico português', value: '15-25 anos (juntas degradam)' },
        ],
      },
      {
        feature: 'Resistência ao cloro',
        epdm: 'Excelente — sem migração química',
        alternatives: [
          { name: 'Liner PVC', value: 'Moderada — plastificantes migram' },
          { name: 'Tinta epóxi', value: 'Boa inicialmente — degrada' },
          { name: 'Mosaico português', value: 'Boa — mas juntas degradam' },
        ],
      },
      {
        feature: 'Resistência a fissuras estruturais',
        epdm: 'Excelente — 400% elongação',
        alternatives: [
          { name: 'Liner PVC', value: 'Moderada' },
          { name: 'Tinta epóxi', value: 'Nenhuma — fissuração inevitável' },
          { name: 'Mosaico português', value: 'Fraca — mosaicos descolam' },
        ],
      },
      {
        feature: 'Custo acumulado 30 anos',
        epdm: 'Baixo',
        alternatives: [
          { name: 'Liner PVC', value: 'Alto — 2 substituições' },
          { name: 'Tinta epóxi', value: 'Muito alto — 4-5 reaplicações' },
          { name: 'Mosaico português', value: 'Médio — reparações pontuais' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Algarve e Alentejo (Uso Intensivo)',
        description:
          'As piscinas do Algarve estão abertas 8-10 meses por ano com exposição UV intensa. O EPDM mantém cor e elasticidade durante décadas neste clima agressivo para todos os materiais.',
      },
      {
        zone: 'Lisboa e Centro (Uso Moderado)',
        description:
          'Ciclos de enchimento/esvaziamento no outono e inverno criam pressão hidrostática variável. O EPDM adapta-se a estes ciclos sem desenvolver fissuras ou destacamentos.',
      },
      {
        zone: 'Norte (Piscinas Aquecidas)',
        description:
          'Piscinas aquecidas no norte têm temperaturas de água até 32°C. O EPDM mantém resistência química e elasticidade a estas temperaturas, ao contrário do PVC que abomba.',
      },
    ],
    faqs: [
      {
        question: 'Posso instalar EPDM sobre os azulejos existentes da minha piscina?',
        answer:
          'Sim, na maioria dos casos. O EPDM pode ser instalado sobre azulejos ou mosaicos antigos desde que estes estejam bem aderidos. É uma alternativa económica à remoção completa dos azulejos, embora reduza ligeiramente a profundidade útil da piscina.',
      },
      {
        question: 'O EPDM preto aquece demasiado a água da piscina?',
        answer:
          'Sim — o EPDM preto absorve mais calor solar e pode aumentar a temperatura da água em 2-5°C em relação a revestimentos claros. Para piscinas onde isso seja indesejável, existem opções em cinzento ou azul que equilibram estética e comportamento térmico.',
      },
      {
        question: 'Quanto tempo demora a instalar EPDM numa piscina de 50 m²?',
        answer:
          'Uma piscina residencial standard de 50 m² com geometria simples leva tipicamente 2-3 dias para instalar. Piscinas com formas irregulares, degraus ou muitos skimmers podem levar 4-5 dias.',
      },
      {
        question: 'O EPDM é certificado para contacto com água potável?',
        answer:
          'Existem formulações EPDM com certificação ACS (França), WRAS (UK) e KTW (Alemanha) para contacto com água potável. Para piscinas privadas standard, estas certificações não são obrigatórias mas garantem ausência de migração de compostos para a água.',
      },
    ],
    relatedSlugs: ['ponds-water-gardens', 'potable-water', 'water-reservoirs'],
  },
  en: {
    meta: {
      title: 'Swimming Pool Waterproofing with EPDM Membrane | Membriko',
      description:
        'EPDM membrane for pool lining and waterproofing. Chlorine, UV and chemical resistant. 50-year solution for residential and public pools. Portugal.',
      keywords: [
        'swimming pool waterproofing EPDM',
        'pool membrane Portugal',
        'EPDM pool lining',
        'swimming pool waterproof membrane',
        'pool impermeabilization',
      ],
    },
    hero: {
      headline: 'Waterproof Swimming Pools with 50-Year EPDM Membrane',
      subtitle:
        'EPDM membrane is the professional solution for pool waterproofing — resistant to chlorine, UV, hydrostatic pressure and extreme thermal variations.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: '100%', label: 'Chlorine resistance' },
        { value: '400%', label: 'Elongation — no cracking' },
        { value: '20 years', label: 'Installation warranty' },
      ],
    },
    problem: {
      title: 'The Swimming Pool Waterproofing Challenge',
      description:
        'A pool is in permanent contact with water treated with aggressive chemicals. Hydrostatic pressure, thermal cycles and the action of chlorine and other treatments rapidly degrade conventional solutions.',
      points: [
        'Epoxy paint coatings crack in 3-7 years from hydrostatic pressure and UV',
        'PVC liner degrades with UV and chlorine, becoming brittle and tearing in 10-15 years',
        'Tiles and ceramics become unbonded from hydrostatic pressure after emptying cycles',
        'Cracks in concrete pools cause loss of 20,000-50,000 litres/day',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Swimming Pools',
      description:
        'Pool EPDM membrane is formulated with specific resistance to chlorine, ozone, UV and continuous hydrostatic pressure. With 1.5-2.0 mm thickness, it creates a waterproof basin that does not crack, discolour or require maintenance for 50+ years.',
      points: [
        'Certified chemical resistance to chlorine, bromine, salt and ozone for water treatment',
        'Permanent elasticity that accommodates structural movements without cracking',
        'Single-sheet installation without vulnerable underwater seams',
        'Available in black, grey and blue for different aesthetics',
      ],
    },
    benefits: [
      {
        icon: 'Droplets',
        title: 'Total Chemical Resistance',
        description:
          'Pool EPDM is certified for permanent immersion in water with chlorine, bromine, salt and ozone. No chemical degradation over 50+ years of use.',
      },
      {
        icon: 'Shield',
        title: 'Permanent Watertightness',
        description:
          'An EPDM basin does not crack or discolour — the pool maintains water level without losses throughout the system service life.',
      },
      {
        icon: 'Thermometer',
        title: 'Heating Compatible',
        description:
          'Resistant to water temperatures between 0°C and 50°C for heated pools or with solar covers. Does not degrade with hot water unlike PVC.',
      },
      {
        icon: 'Euro',
        title: 'Very Low Life-Cycle Cost',
        description:
          'While PVC liners need replacement in 15 years, EPDM lasts 50+ without replacement. The accumulated 50-year cost of EPDM is 30-50% lower than PVC liners.',
      },
      {
        icon: 'Palette',
        title: 'Aesthetic Options',
        description:
          'Available in deep black (contemporary aesthetic), blue-grey and standard blue for any residential or public pool project.',
      },
      {
        icon: 'Leaf',
        title: 'No Plasticisers',
        description:
          'Unlike PVC, EPDM contains no plasticisers that migrate into pool water. Chemical water quality is maintained pure over time.',
      },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm (residential) / 2.0 mm (public/sports)' },
      { label: 'Free chlorine resistance', value: 'Up to 5 mg/L — no degradation' },
      { label: 'Water pH supported', value: '6.5 to 8.5' },
      { label: 'Water temperature', value: '0°C to 50°C' },
      { label: 'Elongation at break', value: '≥ 400%' },
      { label: 'Tensile strength', value: '≥ 9 N/mm²' },
      { label: 'Hydrostatic pressure resistance', value: 'Pass EN 1928 (method B)' },
      { label: 'Water contact certification', value: 'ACS / WRAS / KTW' },
    ],
    installationSteps: [
      {
        step: 1,
        title: 'Design and Dimensioning',
        description:
          'Pool survey, cut and seam calculation to minimise joints. Definition of colour and thickness. Compatibility check with filtration system.',
      },
      {
        step: 2,
        title: 'Structure Preparation',
        description:
          'Cleaning and repair of concrete structure. Crack treatment with flexible levelling product. Smoothing of sharp edges that could puncture the membrane.',
      },
      {
        step: 3,
        title: 'EPDM Installation',
        description:
          'EPDM membrane placement starting from the floor and rising up the side walls. Full-surface bonding with immersion-specific adhesive.',
      },
      {
        step: 4,
        title: 'Seams and Details',
        description:
          'Welding of all seams with EPDM contact adhesive certified for immersion. Treatment of corners and steps with pre-formed EPDM pieces.',
      },
      {
        step: 5,
        title: 'Skimmers, Returns and Drains',
        description:
          'Installation of EPDM accessories for skimmers, return inlets, floor drains and lighting. Certified sealing of all penetrations.',
      },
      {
        step: 6,
        title: 'Filling and Verification',
        description:
          'Gradual pool filling. Water level verification over 72 hours to confirm absence of leaks. Issue of 20-year warranty.',
      },
    ],
    techniques: [
      {
        title: 'Full-Surface Bonded EPDM',
        description:
          'EPDM membrane bonded to 100% of pool surface with immersion adhesive. Preferred method for residential pools with standard geometry.',
        pros: [
          'No trapped air pockets',
          'Maximum adhesion to structure',
          'Suitable for heated pools with large level variations',
        ],
        cons: [
          'Longer installation process',
          'Requires perfectly smooth concrete surface',
          'Repair access requires draining',
        ],
      },
      {
        title: 'EPDM with Perimeter Fixing',
        description:
          'Membrane fixed only at pool perimeter with snap-fit profile. EPDM "floats" slightly but is held taut. Faster installation.',
        pros: [
          'Faster and more economical installation',
          'Tolerant of differential structural movements',
          'Easier removal for inspection or replacement',
        ],
        cons: [
          'Not suitable for pools with frequent level variations',
          'Requires special care at corners',
          'Fixing profile can be infiltration point if poorly installed',
        ],
      },
    ],
    comparison: [
      {
        feature: 'Service life',
        epdm: '50+ years',
        alternatives: [
          { name: 'PVC liner', value: '10-15 years' },
          { name: 'Epoxy paint', value: '3-7 years' },
          { name: 'Portuguese mosaic tile', value: '15-25 years (joints degrade)' },
        ],
      },
      {
        feature: 'Chlorine resistance',
        epdm: 'Excellent — no chemical migration',
        alternatives: [
          { name: 'PVC liner', value: 'Moderate — plasticisers migrate' },
          { name: 'Epoxy paint', value: 'Good initially — degrades' },
          { name: 'Portuguese mosaic tile', value: 'Good — but joints degrade' },
        ],
      },
      {
        feature: 'Structural crack resistance',
        epdm: 'Excellent — 400% elongation',
        alternatives: [
          { name: 'PVC liner', value: 'Moderate' },
          { name: 'Epoxy paint', value: 'None — cracking inevitable' },
          { name: 'Portuguese mosaic tile', value: 'Poor — tiles debond' },
        ],
      },
      {
        feature: 'Accumulated cost over 30 years',
        epdm: 'Low',
        alternatives: [
          { name: 'PVC liner', value: 'High — 2 replacements' },
          { name: 'Epoxy paint', value: 'Very high — 4-5 reapplications' },
          { name: 'Portuguese mosaic tile', value: 'Medium — localised repairs' },
        ],
      },
    ],
    climate: [
      {
        zone: 'Algarve and Alentejo (Intensive Use)',
        description:
          'Algarve pools are open 8-10 months a year with intense UV exposure. EPDM maintains colour and elasticity for decades in this climate that is aggressive to all materials.',
      },
      {
        zone: 'Lisbon and Centre (Moderate Use)',
        description:
          'Filling/emptying cycles in autumn and winter create variable hydrostatic pressure. EPDM adapts to these cycles without developing cracks or debonding.',
      },
      {
        zone: 'North (Heated Pools)',
        description:
          'Heated pools in the north have water temperatures up to 32°C. EPDM maintains chemical resistance and elasticity at these temperatures, unlike PVC which blisters.',
      },
    ],
    faqs: [
      {
        question: 'Can EPDM be installed over existing pool tiles?',
        answer:
          'Yes, in most cases. EPDM can be installed over old tiles or mosaics as long as they are well bonded. This is an economical alternative to complete tile removal, though it slightly reduces the usable pool depth.',
      },
      {
        question: 'Does black EPDM overheat the pool water?',
        answer:
          'Yes — black EPDM absorbs more solar heat and can increase water temperature by 2-5°C compared with lighter linings. For pools where this is undesirable, grey or blue options are available that balance aesthetics and thermal behaviour.',
      },
      {
        question: 'How long does it take to install EPDM in a 50 m² pool?',
        answer:
          'A standard residential pool of 50 m² with simple geometry typically takes 2-3 days to install. Pools with irregular shapes, steps or many skimmers can take 4-5 days.',
      },
      {
        question: 'Is EPDM certified for contact with drinking water?',
        answer:
          'There are EPDM formulations with ACS (France), WRAS (UK) and KTW (Germany) certification for drinking water contact. For standard private pools, these certifications are not mandatory but guarantee absence of compound migration into the water.',
      },
    ],
    relatedSlugs: ['ponds-water-gardens', 'potable-water', 'water-reservoirs'],
  },
}
