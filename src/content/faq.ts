export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  icon: string
  label: string
  description: string
  items: FaqItem[]
}

export interface FaqCta {
  title: string
  subtitle: string
  buttonText: string
}

export interface FaqContent {
  meta: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    headline: string
    subtitle: string
  }
  categories: FaqCategory[]
  cta: FaqCta
}

const pt: FaqContent = {
  meta: {
    title: 'Perguntas Frequentes sobre Membrana EPDM | Membriko',
    description:
      'Respostas detalhadas a todas as perguntas sobre membrana EPDM: técnicas, instalação, preços, garantias e manutenção. Tudo o que precisa saber antes de decidir.',
    keywords: [
      'perguntas frequentes EPDM',
      'FAQ membrana EPDM',
      'EPDM quanto custa',
      'EPDM durabilidade vida útil',
      'EPDM instalação Portugal',
      'EPDM garantia',
      'EPDM manutenção',
      'membrana EPDM dúvidas',
      'impermeabilização EPDM questões',
    ],
  },

  hero: {
    headline: 'Perguntas Frequentes',
    subtitle:
      'Reunimos as perguntas que os nossos clientes mais fazem sobre membrana EPDM — desde características técnicas até preços, instalação e garantias. Se não encontrar a resposta que procura, entre em contacto connosco.',
  },

  categories: [
    {
      id: 'general',
      icon: 'HelpCircle',
      label: 'Geral',
      description: 'Conceitos básicos sobre membrana EPDM e a sua utilização',
      items: [
        {
          question: 'O que é a membrana EPDM?',
          answer:
            'A membrana EPDM (Etileno Propileno Dieno Monómero) é uma borracha sintética vulcanizada fabricada a partir de monómeros de etileno, propileno e dieno. Forma um elastómero com cadeia molecular entrecruzada que lhe confere elasticidade permanente, resistência UV intrínseca e estabilidade térmica excecional. Ao contrário do PVC ou do betume, o EPDM não é um termoplástico — não amolece com o calor nem fissura com o frio. É a membrana impermeabilizante com maior vida útil comprovada do mercado.',
        },
        {
          question: 'Para que serve a membrana EPDM?',
          answer:
            'A membrana EPDM tem mais de 46 aplicações documentadas: coberturas planas e inclinadas, telhados verdes, terraços e varandas, piscinas e lagos, fundações e caves, túneis e pontes, reservatórios de água, lagoas de aquacultura e tratamento de efluentes. A sua versatilidade, elasticidade e resistência a UV, ozono e temperaturas extremas tornam-na adequada para praticamente qualquer superfície que necessite de impermeabilização duradoura.',
        },
        {
          question: 'Qual é a diferença entre EPDM e PVC para impermeabilização?',
          answer:
            'São tecnologias fundamentalmente diferentes. O PVC é um termoplástico que amolece com o calor, requer estabilizadores UV adicionais que se esgotam com o tempo, contém plastificantes (frequentemente ftalatos) que migram ao longo dos anos causando fragilização, e tem uma gama de temperatura limitada (-15°C a +60°C). O EPDM é uma borracha vulcanizada com resistência UV intrínseca, sem plastificantes, que funciona de -45°C a +130°C e é 100% reciclável. Em termos de custo total de propriedade a 30 anos, o EPDM é significativamente mais económico.',
        },
        {
          question: 'O EPDM é adequado para o clima do Sul de Portugal?',
          answer:
            'Sim — é especialmente adequado. A resistência UV intrínseca do EPDM e a sua capacidade de suportar temperaturas superficiais até +130°C tornam-no ideal para os verões quentes do Alentejo e Algarve. Estudos em países mediterrânicos confirmam que membranas EPDM com mais de 20 anos mantêm propriedades físicas e mecânicas praticamente inalteradas, mesmo após exposição intensa ao sol. Para Portugal — com 2 500 a 3 200 horas de sol por ano — esta característica é determinante.',
        },
        {
          question: 'O EPDM é seguro para contacto com água potável?',
          answer:
            'Sim, com a especificação correta. Existem membranas EPDM especificamente formuladas e certificadas para contacto com água destinada ao consumo humano, cumprindo normas como WRAS (Water Regulations Advisory Scheme) no Reino Unido e ANSI/NSF nos EUA. Para reservatórios de água potável, cisternas e sistemas de recolha de água da chuva, a Membriko especifica sempre o produto adequado e fornece documentação de conformidade.',
        },
        {
          question: 'Posso caminhar sobre uma membrana EPDM?',
          answer:
            'Depende da espessura e do sistema instalado. Uma membrana EPDM de 1,14 mm não está dimensionada para tráfego pedonal regular. Para terraços com tráfego, recomenda-se 1,52 mm com camada de proteção adequada (betonilha, lajetas flutuantes ou ripas de madeira sobre suportes). Para coberturas com manutenção ocasional, a membrana pode ser pisada com cuidado. A Membriko dimensiona o sistema correto com base no uso previsto.',
        },
        {
          question: 'O EPDM é compatível com painéis solares fotovoltaicos?',
          answer:
            'Sim, e é a combinação ideal. A membrana EPDM é frequentemente utilizada como base impermeabilizante para instalações de painéis solares em coberturas planas. É quimicamente inerte, não reage com os materiais dos sistemas de fixação e suporta perfuração por buchas mecânicas sem comprometer a impermeabilidade quando devidamente vedada. Sistemas de fixação balastados (sem perfuração) são ainda mais simples com EPDM.',
        },
        {
          question: 'A Membriko opera em todo o território português?',
          answer:
            'Sim. A Membriko opera em todo o território continental português, de Viana do Castelo ao Algarve e de Lisboa a Bragança. Para projetos nas ilhas (Açores e Madeira) analisamos caso a caso. Contacte-nos com os detalhes do seu projeto para verificar disponibilidade e condições. O orçamento e a visita técnica são sempre gratuitos e sem compromisso.',
        },
      ],
    },
    {
      id: 'technical',
      icon: 'Settings',
      label: 'Técnico',
      description: 'Especificações, desempenho e propriedades técnicas do EPDM',
      items: [
        {
          question: 'Qual é a vida útil real de uma membrana EPDM?',
          answer:
            'A vida útil esperada de uma membrana EPDM de qualidade corretamente instalada é de 40–50+ anos. A EPDM Roofing Association conduziu estudos em membranas com 28–32 anos e verificou que apresentavam propriedades físicas e mecânicas "como novas". A Elevate (antiga Carlisle) projeta vida útil de 40+ anos. Estes dados são suportados por testes de envelhecimento acelerado (ASTM G155) e por dados de campo de instalações com décadas. Existem instalações da década de 1970 ainda em serviço ativo em Portugal.',
        },
        {
          question: 'Qual é a espessura ideal de membrana EPDM?',
          answer:
            'As espessuras mais comuns são 1,14 mm e 1,52 mm. A escolha depende da aplicação: coberturas planas residenciais e comerciais standard — 1,14 mm é suficiente; telhados verdes, piscinas, reservatórios e áreas com tráfego pedonal — recomenda-se 1,52 mm; aplicações industriais, lagoas de grandes dimensões e locais com risco de dano mecânico — pode ser necessário 2,0 mm ou proteção mecânica adicional. A Membriko dimensiona sempre a espessura adequada com base na análise do projeto.',
        },
        {
          question: 'O que é a elongação do EPDM e porque é importante?',
          answer:
            'A elongação é a capacidade da membrana de se esticar antes de romper, expressa em percentagem. O EPDM tem elongação de 300–600% (ASTM D4637), podendo ser esticado até 7 vezes o comprimento original sem romper. Esta propriedade é crucial porque os edifícios se movem por dilatação térmica, assentamentos e vibração. Uma membrana com baixa elongação (como o betume, com < 30%) fissurar nas zonas de movimento. O EPDM adapta-se a esses movimentos sem perder integridade.',
        },
        {
          question: 'Como é que o EPDM resiste à luz UV?',
          answer:
            'A estrutura molecular do EPDM (cadeia de carbono saturada no esqueleto principal, com grupos dieno nas cadeias laterais) confere-lhe resistência UV intrínseca sem aditivos ou revestimentos adicionais. O PVC necessita de estabilizadores UV que se consomem progressivamente, levando à fragilização. Testes de envelhecimento acelerado por irradiação UV (ASTM G155, EN ISO 4892) confirmam que o EPDM mantém as suas propriedades mecânicas após exposição equivalente a décadas de sol.',
        },
        {
          question: 'O EPDM resiste a produtos químicos?',
          answer:
            'O EPDM apresenta excelente resistência à maioria dos ácidos diluídos, álcalis, sais, ozono e água. É adequado para reservatórios de água potável, tanques de aquacultura e lagoas de tratamento de efluentes. Contudo, o EPDM não é resistente a hidrocarbonetos (combustíveis, óleos minerais, solventes alifáticos). Para contenção de hidrocarbonetos são necessárias membranas HDPE ou LLDPE. A Membriko avalia sempre a compatibilidade química antes de especificar.',
        },
        {
          question: 'Como se compara o peso do EPDM ao betume?',
          answer:
            'O EPDM é significativamente mais leve. Uma membrana EPDM de 1,14 mm pesa aproximadamente 1,3 kg/m². Uma tela betuminosa de 4 mm pesa 4–5 kg/m², e um sistema betuminoso bicamada pode pesar 10–12 kg/m². Esta diferença tem implicações importantes na carga estrutural das coberturas, especialmente em reabilitações de edifícios existentes que não foram dimensionados para cargas adicionais.',
        },
        {
          question: 'O EPDM é resistente a raízes de plantas?',
          answer:
            'Sim, com certificação específica. As membranas EPDM com certificação FLL foram testadas e certificadas como resistentes à penetração radicular segundo a norma alemã para telhados verdes. Esta certificação é obrigatória para qualquer sistema de cobertura verde responsável. Ao contrário de algumas membranas betuminosas que necessitam de manta anti-raiz separada, o EPDM certificado FLL resiste diretamente à penetração de raízes.',
        },
        {
          question: 'Qual é o impacto ambiental do EPDM em comparação com alternativas?',
          answer:
            'O EPDM tem o melhor perfil ambiental entre as membranas impermeabilizantes. Uma Avaliação de Ciclo de Vida (LCA) publicada no Journal of Cleaner Production (2010) concluiu que o EPDM apresenta menor potencial de aquecimento global (GWP), menor acidificação e menor consumo de energia primária do que PVC, betume APP ou betume SBS ao longo de 50 anos. O EPDM não contém plastificantes ftalatos, não liberta hidrocarbonetos aromáticos e é 100% reciclável no fim de vida.',
        },
      ],
    },
    {
      id: 'installation',
      icon: 'Wrench',
      label: 'Instalação',
      description: 'Processo de instalação, técnicas e preparação da obra',
      items: [
        {
          question: 'Como é feita a instalação de membrana EPDM?',
          answer:
            'A instalação EPDM segue um processo sistemático: (1) avaliação e preparação do substrato — limpeza, secagem, correção de defeitos; (2) instalação de isolamento térmico se aplicável; (3) fixação da membrana por adesivo de contacto (aderida), fixação mecânica ou balastagem; (4) soldadura das emendas com fita butílica ou adesivo de emenda específico; (5) tratamento de detalhes — rufos, platibandas, passagens de tubagens, ralos; (6) inspeção e controlo de qualidade. Todo o processo é a frio, sem maçarico.',
        },
        {
          question: 'Posso instalar EPDM por cima de betume existente?',
          answer:
            'Na maioria dos casos, sim. Se o substrato betuminoso existente estiver aderente, plano e sem bolhas ou zonas de humidade ativa, é possível instalar EPDM diretamente sobre ele com adesivo compatível. Esta abordagem elimina o custo e o desperdício da remoção do betume e pode ser mais económica. A Membriko realiza sempre uma inspeção técnica prévia para avaliar a viabilidade.',
        },
        {
          question: 'Quanto tempo demora a instalação?',
          answer:
            'Uma cobertura plana simples de 80–150 m² pode ser concluída em 1–2 dias. Uma cobertura de 500 m² com muitos detalhes pode levar 3–5 dias. Ao contrário do betume, não há tempo de espera para cura — a membrana fica imediatamente impermeável após instalação. O trabalho pode ser realizado em edifícios ocupados sem necessidade de evacuação.',
        },
        {
          question: 'Em que condições meteorológicas pode ser instalado o EPDM?',
          answer:
            'A aplicação de adesivo requer temperatura acima de 5°C e superfície seca. Ao contrário do betume aplicado com maçarico, o EPDM tem um envelope de condições meteorológicas mais amplo — sem risco de queimar materiais com vento e retomando imediatamente após chuva assim que o substrato seque. Em Portugal, a janela de instalação é praticamente todo o ano.',
        },
        {
          question: 'Como são tratados detalhes difíceis como rufos e cantos?',
          answer:
            'A elasticidade do EPDM (300–600%) é uma vantagem significativa em detalhes complexos: conforma-se a ângulos e curvas sem fissurar. Rufos são formados dobrando a membrana sobre o parapeito e colando com adesivo. Cantos interiores e exteriores utilizam pré-formas moldadas em EPDM ("corners") vulcanizadas à membrana principal. Passagens de tubagens utilizam manchões de borracha compatíveis, inspecionados individualmente pela equipa Membriko.',
        },
        {
          question: 'Quais são os métodos de fixação do EPDM?',
          answer:
            'Existem três métodos principais: colagem total (membrana colada na totalidade ao substrato com adesivo de contacto — melhor desempenho ao vento, sem risco de condensações sub-membrana), fixação mecânica (fixada com buchas e discos nas emendas — instalação mais rápida, sem odores de solvente) e lastro (membrana colocada livremente e mantida com seixo ou lajes — sistema mais económico, sem penetrações no substrato). A Membriko recomenda o método mais adequado para cada projeto.',
        },
      ],
    },
    {
      id: 'pricing',
      icon: 'Euro',
      label: 'Preços',
      description: 'Custos, orçamentos e análise de custo-benefício do EPDM',
      items: [
        {
          question: 'Quanto custa instalar membrana EPDM?',
          answer:
            'O custo varia com a dimensão, complexidade e localização. A título indicativo, para uma cobertura plana residencial simples em Portugal Continental, o custo total (materiais + mão de obra + IVA) situa-se entre 25–50 €/m². Projetos maiores têm economias de escala. Projetos com muitos detalhes ou acessos difíceis têm custo por m² superior. A forma mais rigorosa de obter um preço é solicitar visita técnica gratuita e orçamento detalhado da Membriko.',
        },
        {
          question: 'O EPDM é mais caro que o betume? Vale o investimento?',
          answer:
            'O custo inicial do EPDM pode ser 20–40% superior ao betume, mas o custo total a 30 anos é significativamente inferior. O betume requer proteção UV bienal (~1 000 €/100 m² de 2 em 2 anos), reparações periódicas e substituição completa ao fim de 15–20 anos. O EPDM não requer manutenção regular e raramente é substituído antes dos 40 anos. Para qualquer projeto com horizonte superior a 10 anos, o EPDM é invariavelmente a escolha mais económica.',
        },
        {
          question: 'O que está incluído no orçamento da Membriko?',
          answer:
            'Os orçamentos Membriko são detalhados e incluem: membrana EPDM (espessura e produto especificados), adesivos e materiais de emenda, perfis de rufo e fixações, eventuais trabalhos de preparação do substrato identificados na visita, mão de obra de instalação, inspeção final de qualidade e IVA. Não cobramos custos de deslocação para visitas na maioria das regiões de Portugal Continental. Sem custos surpresa.',
        },
        {
          question: 'Fazem visitas técnicas gratuitas?',
          answer:
            'Sim. A visita técnica é gratuita e sem compromisso para a maioria das regiões de Portugal Continental. Permite avaliar o substrato, dimensionar os materiais, identificar detalhes específicos e apresentar um orçamento preciso. Projectos em zonas remotas ou nas ilhas podem ter condições específicas — consulte-nos.',
        },
        {
          question: 'Existem apoios ou financiamentos para impermeabilização EPDM?',
          answer:
            'A impermeabilização de coberturas pode ser elegível para o programa IFRRU 2020 (reabilitação urbana) e benefícios fiscais de reabilitação (IRS e IMT). Telhados verdes sobre EPDM podem qualificar para benefícios municipais de sustentabilidade em alguns concelhos. A Membriko aconselha sobre possíveis enquadramentos, mas a responsabilidade pela candidatura é sempre do cliente e do seu consultor fiscal.',
        },
        {
          question: 'Qual é o prazo de entrega de orçamento?',
          answer:
            'Após visita técnica ou receção de planta do projeto, o orçamento detalhado é entregue em 2–5 dias úteis. Para projetos urgentes, podemos agilizar o processo. Para projetos simples com documentação completa, o orçamento pode ser emitido sem visita prévia, embora seja sempre preferível a visita para garantir precisão.',
        },
      ],
    },
    {
      id: 'warranty',
      icon: 'Shield',
      label: 'Garantia e Manutenção',
      description: 'Garantias, manutenção e reparação de instalações EPDM',
      items: [
        {
          question: 'Que garantia oferece a Membriko?',
          answer:
            'A Membriko oferece garantia de 20 anos em todas as instalações de membrana EPDM, cobrindo defeitos de material e de mão de obra. A garantia é emitida por escrito com certificado de obra, número de série e identificação dos produtos. Em caso de problema coberto pela garantia, deslocamo-nos ao local e realizamos a reparação sem custo. A garantia é transferível em caso de venda do imóvel.',
        },
        {
          question: 'O EPDM necessita de manutenção regular?',
          answer:
            'A membrana EPDM não necessita de manutenção preventiva obrigatória — ao contrário do betume, que requer revestimento UV de 2 em 2 anos. Recomendamos uma inspeção visual anual simples (verificação de ralos, emendas e rufos) que o próprio proprietário pode realizar. A Membriko disponibiliza um guia de inspeção a todos os clientes. Serviços de inspeção formal são opcionais.',
        },
        {
          question: 'Como se repara uma membrana EPDM danificada?',
          answer:
            'Danos pontuais (furos ou cortes causados por objetos) são reparados com remendos de EPDM e adesivo de emenda específico, criando uma ligação tão forte quanto o material original. A reparação é praticamente invisível e duradoura, sem necessidade de substituir áreas extensas. Para danos cobertos pela garantia Membriko, a reparação é gratuita. A facilidade de reparação é uma vantagem clara do EPDM face ao betume (que requer reaquecimento) e ao PVC (que requer soldadura quente).',
        },
        {
          question: 'Quanto tempo garante o fabricante do produto EPDM?',
          answer:
            'Os principais fabricantes (Carlisle/Elevate, Firestone/Holcim, Sika) oferecem garantias de produto de 20–30 anos, condicionadas à instalação por instaladores qualificados. A Membriko é instalador qualificado dos principais fornecedores, garantindo que as instalações ativam a garantia do fabricante. Em conjunto com a garantia de instalação Membriko (20 anos), o cliente beneficia de dupla cobertura — do produto e da mão de obra — por um período que nenhuma outra membrana iguala.',
        },
      ],
    },
  ],

  cta: {
    title: 'Ainda Tem Dúvidas?',
    subtitle:
      'A equipa Membriko responde a qualquer questão técnica gratuitamente. Não hesite em contactar-nos — adoramos falar sobre EPDM.',
    buttonText: 'Contactar a Membriko',
  },
}

const en: FaqContent = {
  meta: {
    title: 'FAQ — Frequently Asked Questions About EPDM Membrane | Membriko',
    description:
      'Detailed answers to all your questions about EPDM membrane: technical specs, installation, pricing, warranties and maintenance. Everything you need to know before deciding.',
    keywords: [
      'EPDM membrane FAQ',
      'EPDM frequently asked questions',
      'EPDM cost Portugal',
      'EPDM lifespan durability',
      'EPDM installation Portugal',
      'EPDM warranty',
      'EPDM maintenance',
      'EPDM membrane questions',
      'waterproofing EPDM queries',
    ],
  },

  hero: {
    headline: 'Frequently Asked Questions',
    subtitle:
      'We have compiled the questions our clients most often ask about EPDM membrane — from technical characteristics to pricing, installation and warranties. If you cannot find the answer you are looking for, get in touch with us.',
  },

  categories: [
    {
      id: 'general',
      icon: 'HelpCircle',
      label: 'General',
      description: 'Basic concepts about EPDM membrane and its uses',
      items: [
        {
          question: 'What is EPDM membrane?',
          answer:
            'EPDM (Ethylene Propylene Diene Monomer) is a vulcanised synthetic rubber manufactured from ethylene, propylene and diene monomers. It forms an elastomer with a cross-linked molecular chain that gives it permanent elasticity, inherent UV resistance and exceptional thermal stability. Unlike PVC or bitumen, EPDM is not a thermoplastic — it does not soften in heat or crack in cold. It is the waterproofing membrane with the highest proven service life on the market.',
        },
        {
          question: 'What is EPDM membrane used for?',
          answer:
            'EPDM membrane has over 46 documented applications: flat and pitched roofs, green roofs, terraces and balconies, pools and ponds, foundations and basements, tunnels and bridges, water reservoirs, aquaculture tanks and effluent treatment lagoons. Its versatility, elasticity and resistance to UV, ozone and extreme temperatures make it suitable for virtually any surface requiring durable waterproofing.',
        },
        {
          question: 'What is the difference between EPDM and PVC for waterproofing?',
          answer:
            'They are fundamentally different technologies. PVC is a thermoplastic that softens in heat, requires additional UV stabilisers that are consumed over time, contains plasticisers (often phthalates) that migrate over the years causing embrittlement, and has a limited temperature range (-15°C to +60°C). EPDM is a vulcanised rubber with inherent UV resistance, no plasticisers, that operates from -45°C to +130°C and is 100% recyclable. In terms of total cost of ownership over 30 years, EPDM is significantly more economical.',
        },
        {
          question: 'Is EPDM suitable for hot climates such as southern Portugal?',
          answer:
            "Yes — it is especially well-suited. EPDM's inherent UV resistance and its ability to withstand surface temperatures up to +130°C make it ideal for the hot summers of the Alentejo and Algarve. Studies in Mediterranean countries confirm that EPDM membranes aged over 20 years retain practically unchanged physical and mechanical properties, even after intense sun exposure. For Portugal — with 2,500 to 3,200 sunshine hours per year — this characteristic is decisive.",
        },
        {
          question: 'Is EPDM safe for contact with drinking water?',
          answer:
            'Yes, with the correct specification. There are EPDM membranes specifically formulated and certified for contact with water intended for human consumption, complying with standards such as WRAS in the UK and ANSI/NSF in the USA. For drinking water reservoirs, cisterns and rainwater harvesting systems, Membriko always specifies the appropriate product and provides compliance documentation.',
        },
        {
          question: 'Can I walk on an installed EPDM membrane?',
          answer:
            'It depends on the thickness and system installed. A 1.14 mm EPDM membrane is not dimensioned for regular pedestrian traffic. For terraces with foot traffic, 1.52 mm or thicker EPDM is recommended, with an appropriate protection layer (screed, floating pavers or timber decking on supports). For roofs with occasional maintenance access, the membrane can be walked on with care. Membriko dimensions the correct system based on the intended use.',
        },
        {
          question: 'Is EPDM compatible with solar photovoltaic panels?',
          answer:
            'Yes, and it is the ideal combination. EPDM is frequently used as the waterproofing base for solar panel installations on flat roofs. It is chemically inert, does not react with fixing system materials, and tolerates mechanical anchor penetration without compromising watertightness when properly sealed. Ballasted fixing systems (no penetration) are even simpler to implement with EPDM. Membriko has experience in combined solar and EPDM roofing projects.',
        },
        {
          question: 'Does Membriko operate throughout Portugal?',
          answer:
            'Yes. Membriko operates across mainland Portugal, from Viana do Castelo to the Algarve and from Lisbon to Bragança. For island projects (Azores and Madeira) we evaluate on a case-by-case basis. Contact us with your project details to check availability and conditions. The technical visit and quote are always free and no-obligation.',
        },
      ],
    },
    {
      id: 'technical',
      icon: 'Settings',
      label: 'Technical',
      description: 'Specifications, performance and technical properties of EPDM',
      items: [
        {
          question: 'What is the actual service life of an EPDM membrane?',
          answer:
            'The expected service life of a quality EPDM membrane correctly installed is 40–50+ years. The EPDM Roofing Association conducted studies on membranes aged 28–32 years and found they exhibited physical and mechanical properties at "like-new" levels. Elevate (formerly Carlisle) projects a service life of 40+ years. These estimates are supported by accelerated ageing tests (ASTM G155) and field data from decades-old installations. There are installations from the 1970s still in active service in Portugal.',
        },
        {
          question: 'What is the ideal thickness of EPDM membrane?',
          answer:
            'The most common thicknesses are 1.14 mm and 1.52 mm. The choice depends on the application: standard residential and commercial flat roofs — 1.14 mm is sufficient; green roofs, pools, reservoirs and pedestrian traffic areas — 1.52 mm is recommended; industrial applications, large-scale lagoons and locations with mechanical damage risk — 2.0 mm or additional protection may be needed. Membriko always dimensions the appropriate thickness based on project analysis.',
        },
        {
          question: "What is EPDM's elongation and why does it matter?",
          answer:
            'Elongation is the ability of the membrane to stretch before breaking, expressed as a percentage. EPDM has elongation of 300–600% (ASTM D4637), meaning it can be stretched up to 7 times its original length without tearing. This property is crucial because buildings move through thermal expansion, settlement and vibration. A membrane with low elongation (like bitumen, with < 30%) cracks at movement zones. EPDM accommodates these movements without losing integrity.',
        },
        {
          question: 'How does EPDM resist UV light?',
          answer:
            "EPDM's molecular structure (saturated carbon chain in the main backbone, with diene groups on side chains) gives it inherent UV resistance without additives or additional coatings. PVC requires UV stabilisers that are progressively consumed, leading to embrittlement. Accelerated UV ageing tests (ASTM G155, EN ISO 4892) confirm that EPDM retains its mechanical properties after exposure equivalent to decades of sunlight.",
        },
        {
          question: 'Does EPDM resist chemicals?',
          answer:
            'EPDM shows excellent resistance to most dilute acids, alkalis, salts, ozone and water. It is suitable for drinking water reservoirs, aquaculture tanks and effluent treatment lagoons. However, EPDM is not resistant to hydrocarbons (fuels, mineral oils, aliphatic solvents). For hydrocarbon containment, HDPE or LLDPE membranes are required. Membriko always evaluates chemical compatibility before specifying.',
        },
        {
          question: 'How does EPDM weight compare to bitumen?',
          answer:
            'EPDM is significantly lighter. A 1.14 mm EPDM membrane weighs approximately 1.3 kg/m². A 4 mm bituminous felt weighs 4–5 kg/m², and a two-layer bituminous system can weigh 10–12 kg/m². This weight difference has important structural loading implications, especially in rehabilitation of existing buildings not designed for additional loads.',
        },
        {
          question: 'Is EPDM resistant to plant roots?',
          answer:
            'Yes, with specific certification. EPDM membranes with FLL certification have been tested and certified as resistant to root penetration according to the German green roof standard. Unlike some bituminous membranes that require a separate anti-root blanket, FLL-certified EPDM directly resists root penetration, simplifying the construction system and reducing total roof weight.',
        },
        {
          question: "What is EPDM's environmental impact compared to alternatives?",
          answer:
            "EPDM has the best environmental profile among waterproofing membranes. A Life Cycle Assessment published in the Journal of Cleaner Production (2010) concluded that EPDM shows the lowest global warming potential (GWP), lowest acidification and lowest primary energy consumption compared to PVC, APP bitumen or SBS bitumen over 50 years. EPDM contains no phthalate plasticisers, does not release aromatic hydrocarbons and is 100% recyclable at end of life.",
        },
      ],
    },
    {
      id: 'installation',
      icon: 'Wrench',
      label: 'Installation',
      description: 'Installation process, techniques and site preparation',
      items: [
        {
          question: 'How is EPDM membrane installed?',
          answer:
            'EPDM installation follows a systematic process: (1) substrate assessment and preparation — cleaning, drying, defect correction; (2) thermal insulation installation if applicable; (3) membrane attachment by contact adhesive (fully adhered), mechanical fastening or ballasting; (4) seam bonding with butyl tape or specific seam adhesive; (5) detail treatment — flashings, upstands, pipe penetrations, drains; (6) inspection and quality control. The entire process is cold-applied, with no torch.',
        },
        {
          question: 'Can EPDM be installed over existing bitumen?',
          answer:
            "In most cases, yes. If the existing bituminous substrate is well-adhered, flat and free of air pockets or damp zones, EPDM can be installed directly over it using compatible adhesive. This eliminates the cost and waste of removing existing bitumen. Membriko always carries out a prior technical inspection to assess viability and identify problem areas.",
        },
        {
          question: 'How long does installation take?',
          answer:
            'A simple flat roof of 80–150 m² can be completed in 1–2 days. A 500 m² roof with many details may take 3–5 days. Unlike bitumen, there is no curing or drying time — the membrane is immediately watertight after installation. Work can be carried out in occupied buildings without requiring evacuation.',
        },
        {
          question: 'In what weather conditions can EPDM be installed?',
          answer:
            'Adhesive application requires temperatures above 5°C and a dry surface. Unlike torch-applied bitumen, EPDM has a wider weather window — no ignition risk in wind, and installation resumes immediately after rain once the substrate dries. In Portugal, the installation window is practically year-round.',
        },
        {
          question: 'How are difficult details such as flashings and corners handled?',
          answer:
            "EPDM's elasticity (300–600%) allows it to conform to angles, corners and curves without cracking. Flashings are formed by folding the membrane over the parapet and bonding with contact adhesive. Corners use pre-moulded EPDM forms ('corners') vulcanised to the main membrane with seam adhesive. Pipe penetrations use compatible rubber boots, individually inspected by the Membriko team.",
        },
        {
          question: 'What are the EPDM fixing methods?',
          answer:
            'There are three main methods: full adhesion (membrane bonded entirely to the substrate — best wind performance, no sub-membrane condensation risk), mechanical fastening (fixed with anchor bolts and discs at seams — faster installation, no solvent odours) and ballasting (membrane placed freely, held down with gravel or concrete slabs — most economical, no substrate penetrations). Membriko recommends the most appropriate method for each project.',
        },
      ],
    },
    {
      id: 'pricing',
      icon: 'Euro',
      label: 'Pricing',
      description: 'Costs, quotes and cost-benefit analysis of EPDM',
      items: [
        {
          question: 'How much does EPDM membrane installation cost?',
          answer:
            'Cost varies with size, complexity and location. As a guide, for a simple residential flat roof in mainland Portugal, the total cost (materials + labour + VAT) is generally between €25–50/m². Larger projects benefit from economies of scale. Projects with many details or difficult access have a higher cost per m². The most reliable way to obtain a price is to request a free technical visit and detailed quote from Membriko.',
        },
        {
          question: 'Is EPDM more expensive than bitumen? Is it worth the investment?',
          answer:
            'The initial cost of EPDM may be 20–40% higher than bitumen, but the total cost of ownership over 30 years is significantly lower. Bitumen requires biennial UV protection coating, periodic crack repairs and complete replacement after 15–20 years. EPDM requires no regular maintenance and is rarely replaced before 40 years. For any project with a horizon exceeding 10 years, EPDM is invariably the more economical choice.',
        },
        {
          question: 'What is included in a Membriko quote?',
          answer:
            "Membriko quotes are itemised and include: EPDM membrane (specified thickness and product), adhesives and seam materials, flashing profiles and fixings, any substrate preparation work identified during the technical visit, installation labour, final quality inspection and VAT. We don't charge travel costs for visits to most regions of mainland Portugal. No surprise costs.",
        },
        {
          question: 'Do you provide free technical site visits?',
          answer:
            'Yes. The technical site visit is free and no-obligation for most regions of mainland Portugal. It allows us to assess the substrate condition, correctly size materials, identify project-specific details and present an accurate quote. Projects in remote areas or on the islands may have specific conditions — please enquire.',
        },
        {
          question: 'Are there financing options or grants for EPDM installation?',
          answer:
            'Roof waterproofing may be eligible for the IFRRU 2020 programme (urban rehabilitation) and urban rehabilitation tax benefits (IRS and IMT). Green roofs over EPDM may qualify for municipal sustainability benefits in some councils. Membriko advises on possible frameworks, but responsibility for applying and obtaining approval always lies with the client and their tax adviser.',
        },
        {
          question: 'What is the typical quote turnaround time?',
          answer:
            'Following a technical visit or receipt of project plans, the detailed quote is delivered within 2–5 working days. For urgent projects we can expedite. For simple projects with complete documentation, a quote can be issued without a prior visit, although a site visit is always preferable for accuracy.',
        },
      ],
    },
    {
      id: 'warranty',
      icon: 'Shield',
      label: 'Warranty & Maintenance',
      description: 'Warranties, maintenance and repair of EPDM installations',
      items: [
        {
          question: 'What warranty does Membriko offer?',
          answer:
            "Membriko offers a 20-year warranty on all EPDM membrane installations, covering material and workmanship defects. The warranty is issued in writing with a completion certificate, serial number and product identification. In case of a covered problem, we visit the site and carry out the repair at no cost. The warranty is transferable in case of property sale.",
        },
        {
          question: 'Does EPDM require regular maintenance?',
          answer:
            'EPDM requires no mandatory preventive maintenance — unlike bitumen, which requires UV coating every 2 years. We recommend a simple annual visual inspection (checking drains, seams and flashings) that the owner can carry out themselves. Membriko provides an inspection guide to all clients. Formal inspection services are optional.',
        },
        {
          question: 'What happens if the EPDM membrane is damaged?',
          answer:
            'Localised damage (punctures or cuts caused by sharp objects) is easily repaired using EPDM patches and specific seam adhesive, creating a bond as strong as the original material. The repair is practically invisible and durable, without replacing large areas. For damage covered by the Membriko warranty, repair is free. The ease of repair is a clear advantage over bitumen (which requires reheating) and PVC (which requires hot welding).',
        },
        {
          question: 'How long is the manufacturer product warranty?',
          answer:
            'Leading manufacturers (Carlisle/Elevate, Firestone/Holcim, Sika) offer product warranties of 20–30 years, conditional on installation by qualified contractors. Membriko is a qualified installer for the main suppliers, ensuring installations activate the manufacturer warranty. Together with the Membriko installation warranty (20 years), the client benefits from dual coverage — product and workmanship — for a period that no other membrane can match.',
        },
      ],
    },
  ],

  cta: {
    title: 'Still Have Questions?',
    subtitle:
      'The Membriko team answers any technical question free of charge. Do not hesitate to contact us — we love talking about EPDM.',
    buttonText: 'Contact Membriko',
  },
}

export const faq: { pt: FaqContent; en: FaqContent } = { pt, en }
