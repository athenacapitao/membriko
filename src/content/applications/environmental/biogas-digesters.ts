import type { ApplicationData } from '../types'

export const biogasDigesters: ApplicationData = {
  id: 'biogas-digesters',
  categoryId: 'environmental',
  pt: {
    meta: {
      title: 'Impermeabilização de Digestores de Biogás com EPDM | Membriko',
      description: 'Coberturas e revestimentos EPDM para digestores de biogás e instalações de biometano. Resistente a CH₄, CO₂ e H₂S. Portugal.',
      keywords: ['digestor biogás EPDM', 'cobertura digestor membrana', 'biogás impermeabilização Portugal', 'EPDM digestor anaeróbico', 'biometano instalação membrana'],
    },
    hero: {
      headline: 'Digestores de Biogás com Coberturas EPDM Resistentes a Gases',
      subtitle: 'A membrana EPDM para coberturas e revestimentos de digestores anaeróbicos resiste a metano, CO₂ e H₂S — garantindo contenção segura e eficiência da instalação de biogás.',
      stats: [
        { value: '50+', label: 'Anos de vida útil' },
        { value: 'CH₄', label: 'Resistente a metano' },
        { value: 'H₂S', label: 'Resistente a sulfureto' },
        { value: '20 anos', label: 'Garantia' },
      ],
    },
    problem: {
      title: 'O Desafio das Instalações de Biogás',
      description: 'As instalações de biogás combinam condições extremamente agressivas: metano (CH₄) sob pressão, dióxido de carbono (CO₂), sulfureto de hidrogénio (H₂S), temperatura de digestão (35-55°C) e efluente digerido com alto teor de amónia.',
      points: [
        'Biogás com 55-70% CH₄ cria pressão interna nos digestores — exige membrana resistente',
        'H₂S em concentrações de 100-10.000 ppm é altamente corrosivo para a maioria dos materiais',
        'Temperatura de digestão mesofílica (35°C) e termofílica (55°C) permanente degrada materiais inadequados',
        'Fugas de biogás criam riscos de explosão e contribuem para emissões de GEE de instalações de biogás',
      ],
    },
    solution: {
      title: 'A Solução EPDM para Digestores de Biogás',
      description: 'O EPDM com certificação específica para aplicações de biogás é a membrana de referência para coberturas de digestores e reservatórios de gás. Resiste aos gases e compostos da digestão anaeróbica com vida útil de décadas.',
      points: [
        'Formulação EPDM validada para resistência a CH₄, CO₂ e H₂S em concentrações de biogás',
        'Coberturas flutuantes e rígidas em EPDM para digestores abertos e fechados',
        'Sistema de contenção e recolha de biogás integrado com a membrana de cobertura',
        'Compatível com sistemas de pressão positiva de biogás (0-10 mbar)',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Resistência a Gases de Biogás', description: 'Formulação EPDM com resistência validada a CH₄, CO₂ e H₂S — os três principais componentes do biogás — em concentrações encontradas em digestores agrícolas e municipais.' },
      { icon: 'Droplets', title: 'Contenção Segura de Biogás', description: 'Zero fugas de biogás — garantindo segurança da instalação (prevenção de explosão) e maximizando captura de biogás para produção de energia.' },
      { icon: 'Thermometer', title: 'Temperaturas de Digestão', description: 'Resistência permanente a 55°C (digestão termofílica) e ciclos de temperatura — superior a materiais alternativos que degradam a estas temperaturas.' },
      { icon: 'Layers', title: 'Coberturas Flutuantes', description: 'Sistemas de cobertura flutuante EPDM acompanham a variação de nível do digestor, mantendo contenção mesmo com variações de volume de biogás.' },
      { icon: 'Clock', title: 'Longa Durabilidade', description: 'Investimento numa instalação de biogás é de longo prazo. O EPDM com 50+ anos de vida útil é compatível com o horizonte de amortização destes projetos (20-30 anos).' },
      { icon: 'Euro', title: 'Maximização da Produção', description: 'Zero fugas de biogás = máxima captura de energia. Em digestores de 1.000 m³, uma fuga de 5% pode representar €10.000+ por ano de biogás perdido.' },
    ],
    specs: [
      { label: 'Espessura', value: '1,5 mm / 2,0 mm (coberturas de pressão)' },
      { label: 'Resistência a CH₄', value: 'Boa — validado para biogás' },
      { label: 'Resistência a H₂S', value: 'Boa — até 5.000 ppm' },
      { label: 'Pressão de trabalho', value: 'Até 15 mbar (cobertura flutuante)' },
      { label: 'Temperatura de serviço', value: '-45°C a +80°C' },
      { label: 'Resistência a NH₃', value: 'Excelente' },
      { label: 'Tipo de cobertura', value: 'Flutuante simples ou dupla membrana' },
      { label: 'Norma', value: 'EN 13956 / DVS 2225 (Alemanha)' },
    ],
    installationSteps: [
      { step: 1, title: 'Projeto da Cobertura', description: 'Dimensionamento da cobertura para pressão de biogás, volume de gás e sistema de recolha. Coordenação com projeto de biogás e sistema de segurança.' },
      { step: 2, title: 'Preparação do Digestor', description: 'Preparação do topo do digestor (betão ou aço). Instalação de ancoragens perimetrais para cobertura flutuante ou estrutura para cobertura rígida.' },
      { step: 3, title: 'Instalação da Cobertura EPDM', description: 'Colocação da membrana EPDM exterior e interior (sistema de dupla membrana). Soldadura de todas as emendas por vulcanização certificada para aplicações de gás.' },
      { step: 4, title: 'Sistema de Recolha de Gás', description: 'Instalação de tubagem de recolha de biogás integrada na cobertura. Válvulas de segurança e sistema de pressurização controlada.' },
      { step: 5, title: 'Sistema de Segurança', description: 'Instalação de válvulas de alívio de pressão, detetores de gás e sistema de purga. Conformidade com regulamentação de segurança de instalações de biogás (DL 97/2017).' },
      { step: 6, title: 'Certificação e Garantia', description: 'Teste de pressão e estanquidade da cobertura. Certificado de conformidade para licenciamento. Garantia de 20 anos.' },
    ],
    techniques: [
      {
        title: 'Cobertura de Dupla Membrana EPDM',
        description: 'Sistema de cobertura flutuante com membrana exterior de EPDM exposta ao ambiente e membrana interior em contacto com o biogás. Câmara de ar entre membranas para isolamento e segurança.',
        pros: ['Máxima segurança por dupla barreira de contenção de biogás', 'Isolamento térmico pela câmara de ar — melhora eficiência de digestão termofílica', 'Sistema standard em instalações de biogás europeias'],
        cons: ['Custo superior à membrana simples', 'Sistema de pressurização da câmara de ar necessário'],
      },
      {
        title: 'Revestimento EPDM Interior de Digestores de Betão',
        description: 'Para digestores de betão com resistência ao biogás inadequada, revestimento interior com EPDM colado. Protege betão de H₂S e aumenta estanquidade.',
        pros: ['Reabilitação de digestores existentes sem demolição', 'Proteção do betão de degradação ácida bacteriológica', 'Compatível com sistemas de agitação existentes'],
        cons: ['Trabalho em espaço confinado com riscos específicos', 'Requer esvaziamento e limpeza do digestor'],
      },
    ],
    comparison: [
      { feature: 'Resistência a CH₄', epdm: 'Boa', alternatives: [{ name: 'PVC (coberturas gás)', value: 'Boa' }, { name: 'PE (coberturas gás)', value: 'Boa' }] },
      { feature: 'Vida útil', epdm: '50+ anos', alternatives: [{ name: 'PVC (coberturas gás)', value: '15-20 anos' }, { name: 'PE (coberturas gás)', value: '20-25 anos' }] },
    ],
    climate: [
      { zone: 'Norte (Biogás Agrícola)', description: 'Norte de Portugal com alta densidade de explorações pecuárias com potencial de digestão anaeróbica. Instalações de biogás agrícola de 200-2.000 m³ beneficiam de coberturas EPDM duráveis.' },
      { zone: 'ETARs Municipais (Biogás de Lamas)', description: 'ETARs urbanas com digestores de lamas que produzem biogás. Coberturas EPDM de longa duração são custo-eficazes em infraestrutura pública.' },
      { zone: 'Agro-Indústria (Resíduos Orgânicos)', description: 'Indústrias agroalimentares (vinho, azeite, queijarias) com digestores de resíduos orgânicos. O EPDM resiste aos efluentes específicos de cada indústria.' },
    ],
    faqs: [
      { question: 'O EPDM é certificado para aplicações de biogás?', answer: 'Existem formulações EPDM especificamente testadas e validadas para resistência a biogás (CH₄, CO₂, H₂S). A norma alemã DVS 2225 é referência para coberturas de biogás em geomembranas. Confirmar sempre com ficha técnica do produto específico.' },
      { question: 'Qual a diferença entre cobertura de membrana simples e dupla para digestores?', answer: 'A membrana simples é mais económica mas menos segura. A dupla membrana tem câmara de ar entre membranas — a membrana interior contém o biogás e a exterior é a barreira ambiental. Em caso de falha da membrana interior, o biogás fica contido na câmara e não é emitido. É o sistema mais seguro e o standard em instalações novas.' },
    ],
    relatedSlugs: ['wastewater-treatment', 'slurry-lagoons', 'chemical-containment'],
  },
  en: {
    meta: {
      title: 'Biogas Digester Waterproofing with EPDM | Membriko',
      description: 'EPDM covers and linings for biogas digesters and biomethane installations. Resistant to CH₄, CO₂ and H₂S. Portugal.',
      keywords: ['biogas digester EPDM', 'digester cover membrane', 'biogas waterproofing Portugal', 'EPDM anaerobic digester', 'biomethane installation membrane'],
    },
    hero: {
      headline: 'Biogas Digesters with Gas-Resistant EPDM Covers',
      subtitle: 'EPDM membrane for anaerobic digester covers and linings resists methane, CO₂ and H₂S — ensuring safe containment and biogas installation efficiency.',
      stats: [
        { value: '50+', label: 'Years service life' },
        { value: 'CH₄', label: 'Methane resistant' },
        { value: 'H₂S', label: 'Sulphide resistant' },
        { value: '20 years', label: 'Guarantee' },
      ],
    },
    problem: {
      title: 'The Biogas Installation Challenge',
      description: 'Biogas installations combine extremely aggressive conditions: methane (CH₄) under pressure, carbon dioxide (CO₂), hydrogen sulphide (H₂S), digestion temperature (35-55°C) and digested effluent with high ammonia content.',
      points: [
        'Biogas with 55-70% CH₄ creates internal digester pressure — requires resistant membrane',
        'H₂S at 100-10,000 ppm concentrations is highly corrosive to most materials',
        'Permanent mesophilic (35°C) and thermophilic (55°C) digestion temperature degrades inadequate materials',
        'Biogas leaks create explosion risks and contribute to GHG emissions from biogas installations',
      ],
    },
    solution: {
      title: 'The EPDM Solution for Biogas Digesters',
      description: 'EPDM with specific certification for biogas applications is the reference membrane for digester covers and gas storage. Resists gases and compounds of anaerobic digestion with decades of service life.',
      points: [
        'EPDM formulation validated for CH₄, CO₂ and H₂S resistance at biogas concentrations',
        'Floating and rigid EPDM covers for open and closed digesters',
        'Biogas containment and collection system integrated with the cover membrane',
        'Compatible with positive biogas pressure systems (0-10 mbar)',
      ],
    },
    benefits: [
      { icon: 'Shield', title: 'Biogas Resistance', description: 'EPDM formulation with validated resistance to CH₄, CO₂ and H₂S — the three main biogas components — at concentrations found in agricultural and municipal digesters.' },
      { icon: 'Droplets', title: 'Safe Biogas Containment', description: 'Zero biogas leaks — ensuring installation safety (explosion prevention) and maximising biogas capture for energy production.' },
      { icon: 'Thermometer', title: 'Digestion Temperatures', description: 'Permanent resistance to 55°C (thermophilic digestion) and temperature cycles — superior to alternative materials that degrade at these temperatures.' },
      { icon: 'Layers', title: 'Floating Covers', description: 'EPDM floating cover systems follow digester level variation, maintaining containment even with biogas volume variations.' },
      { icon: 'Clock', title: 'Long Durability', description: 'Investment in a biogas installation is long-term. EPDM with 50+ year service life is compatible with these projects\' depreciation horizon (20-30 years).' },
      { icon: 'Euro', title: 'Production Maximisation', description: 'Zero biogas leaks = maximum energy capture. In 1,000 m³ digesters, a 5% leak can represent €10,000+ per year of lost biogas.' },
    ],
    specs: [
      { label: 'Thickness', value: '1.5 mm / 2.0 mm (pressure covers)' },
      { label: 'CH₄ resistance', value: 'Good — validated for biogas' },
      { label: 'H₂S resistance', value: 'Good — up to 5,000 ppm' },
      { label: 'Working pressure', value: 'Up to 15 mbar (floating cover)' },
      { label: 'Service temperature', value: '-45°C to +80°C' },
      { label: 'NH₃ resistance', value: 'Excellent' },
      { label: 'Cover type', value: 'Single or double membrane floating' },
      { label: 'Standard', value: 'EN 13956 / DVS 2225 (Germany)' },
    ],
    installationSteps: [
      { step: 1, title: 'Cover Design', description: 'Cover sizing for biogas pressure, gas volume and collection system. Coordination with biogas design and safety system.' },
      { step: 2, title: 'Digester Preparation', description: 'Digester top preparation (concrete or steel). Perimeter anchoring installation for floating cover or structure for rigid cover.' },
      { step: 3, title: 'EPDM Cover Installation', description: 'Outer and inner EPDM membrane placement (double membrane system). All seam welding by certified gas-application vulcanisation.' },
      { step: 4, title: 'Gas Collection System', description: 'Biogas collection pipework installation integrated in cover. Safety valves and controlled pressurisation system.' },
      { step: 5, title: 'Safety System', description: 'Pressure relief valve, gas detector and purge system installation. Compliance with biogas installation safety regulation (DL 97/2017).' },
      { step: 6, title: 'Certification and Warranty', description: 'Cover pressure and watertightness test. Compliance certificate for licensing. 20-year warranty.' },
    ],
    techniques: [
      {
        title: 'Double Membrane EPDM Cover',
        description: 'Floating cover system with outer EPDM membrane exposed to environment and inner membrane in contact with biogas. Air chamber between membranes for insulation and safety.',
        pros: ['Maximum safety by double biogas containment barrier', 'Thermal insulation by air chamber — improves thermophilic digestion efficiency', 'Standard system in European biogas installations'],
        cons: ['Higher cost than single membrane', 'Air chamber pressurisation system required'],
      },
      {
        title: 'EPDM Interior Lining of Concrete Digesters',
        description: 'For concrete digesters with inadequate biogas resistance, interior lining with bonded EPDM. Protects concrete from H₂S and increases watertightness.',
        pros: ['Existing digester rehabilitation without demolition', 'Concrete protection from bacteriological acid degradation', 'Compatible with existing agitation systems'],
        cons: ['Confined space work with specific risks', 'Requires digester emptying and cleaning'],
      },
    ],
    comparison: [
      { feature: 'CH₄ resistance', epdm: 'Good', alternatives: [{ name: 'PVC (gas covers)', value: 'Good' }, { name: 'PE (gas covers)', value: 'Good' }] },
      { feature: 'Service life', epdm: '50+ years', alternatives: [{ name: 'PVC (gas covers)', value: '15-20 years' }, { name: 'PE (gas covers)', value: '20-25 years' }] },
    ],
    climate: [
      { zone: 'North (Agricultural Biogas)', description: 'Northern Portugal with high livestock farm density and anaerobic digestion potential. Agricultural biogas installations of 200-2,000 m³ benefit from durable EPDM covers.' },
      { zone: 'Municipal WWTPs (Sludge Biogas)', description: 'Urban WWTPs with sludge digesters producing biogas. Long-life EPDM covers are cost-effective in public infrastructure.' },
      { zone: 'Agro-Industry (Organic Waste)', description: 'Agri-food industries (wine, olive oil, dairies) with organic waste digesters. EPDM resists the specific effluents of each industry.' },
    ],
    faqs: [
      { question: 'Is EPDM certified for biogas applications?', answer: 'There are EPDM formulations specifically tested and validated for biogas resistance (CH₄, CO₂, H₂S). German standard DVS 2225 is the reference for biogas geomembrane covers. Always confirm with the specific product technical datasheet.' },
      { question: 'What is the difference between single and double membrane covers for digesters?', answer: 'Single membrane is more economical but less safe. Double membrane has an air chamber between membranes — the inner membrane contains the biogas and the outer is the environmental barrier. If the inner membrane fails, biogas remains contained in the chamber and is not emitted. It is the safest system and standard in new installations.' },
    ],
    relatedSlugs: ['wastewater-treatment', 'slurry-lagoons', 'chemical-containment'],
  },
}
