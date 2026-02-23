import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  const applications = [
    {
      slug: "telhados-planos",
      title: locale === "pt" ? "Telhados Planos" : "Flat Roofs",
      desc: locale === "pt" 
        ? "Impermeabilização duradoura para telhados planos comerciais e residenciais"
        : "Long-lasting waterproofing for commercial and residential flat roofs",
      icon: "🏢",
    },
    {
      slug: "telhados-inclinados",
      title: locale === "pt" ? "Telhados Inclinados" : "Pitched Roofs",
      desc: locale === "pt"
        ? "Solução flexível para telhados inclinados com excelente resistência UV"
        : "Flexible solution for pitched roofs with excellent UV resistance",
      icon: "🏠",
    },
    {
      slug: "telhados-verdes",
      title: locale === "pt" ? "Telhados Verdes" : "Green Roofs",
      desc: locale === "pt"
        ? "Membrana root-resistant para telhados ajardinados"
        : "Root-resistant membrane for garden roofs",
      icon: "🌿",
    },
    {
      slug: "terraços",
      title: locale === "pt" ? "Terraços e Varandas" : "Terraces & Balconies",
      desc: locale === "pt"
        ? "Proteção contra infiltrações em espaços de convivência"
        : "Protection against leaks in living spaces",
      icon: "☀️",
    },
    {
      slug: "piscinas",
      title: locale === "pt" ? "Piscinas" : "Swimming Pools",
      desc: locale === "pt"
        ? "Membrana liners para piscinas residenciais e públicas"
        : "Membrane liners for residential and public pools",
      icon: "🏊",
    },
    {
      slug: "lagos-reservatorios",
      title: locale === "pt" ? "Lagos e Reservatórios" : "Lakes & Reservoirs",
      desc: locale === "pt"
        ? "Impermeabilização para lagos ornamentais e reservatórios de água"
        : "Waterproofing for ornamental lakes and water reservoirs",
      icon: "💧",
    },
  ];

  const benefits = [
    {
      title: locale === "pt" ? "50+ Anos de Durabilidade" : "50+ Year Lifespan",
      desc: locale === "pt"
        ? "Vida útil comprovada superior a 50 anos em condições climáticas extremas"
        : "Proven lifespan of over 50 years in extreme weather conditions",
      icon: "⏱️",
    },
    {
      title: locale === "pt" ? "Resistência UV Total" : "Total UV Resistance",
      desc: locale === "pt"
        ? "Sem degradação solar — ideal para o clima português"
        : "No solar degradation — ideal for Portuguese climate",
      icon: "☀️",
    },
    {
      title: locale === "pt" ? "100% Reciclável" : "100% Recyclable",
      desc: locale === "pt"
        ? "Construção sustentável e amiga do ambiente"
        : "Sustainable and environmentally friendly construction",
      icon: "♻️",
    },
    {
      title: locale === "pt" ? "Manutenção Mínima" : "Minimal Maintenance",
      desc: locale === "pt"
        ? "Instale e esqueca — sem manutenção durante décadas"
        : "Install and forget — no maintenance for decades",
      icon: "🔧",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {locale === "pt"
                ? "A Melhor Solução EPDM de Portugal"
                : "Portugal's Best EPDM Solution"}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              {locale === "pt"
                ? "50+ anos de durabilidade, resistência total, 100% reciclável. Os especialistas em membranas EPDM para o mercado português."
                : "50+ year lifespan, total resistance, 100% recyclable. The EPDM membrane specialists for the Portuguese market."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/quote`}
                className="px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                {locale === "pt" ? "Pedir Orçamento" : "Get a Quote"}
              </Link>
              <Link
                href={`/${locale}/applications`}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                {locale === "pt" ? "Ver Aplicações" : "View Applications"}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-500">50+</div>
              <div className="text-sm text-blue-200">
                {locale === "pt" ? "Anos de durability" : "Years Durability"}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-500">100%</div>
              <div className="text-sm text-blue-200">
                {locale === "pt" ? "Reciclável" : "Recyclable"}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-500">500+</div>
              <div className="text-sm text-blue-200">
                {locale === "pt" ? "Projetos" : "Projects"}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-500">PT</div>
              <div className="text-sm text-blue-200">
                {locale === "pt" ? "Especialistas" : "Specialists"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
            {locale === "pt" ? "Nossas Aplicações" : "Our Applications"}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            {locale === "pt"
              ? "Cobrimos todos os tipos de aplicações EPDM, desde telhados residenciais a piscinas públicas."
              : "We cover all types of EPDM applications, from residential roofs to public pools."}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Link
                key={app.slug}
                href={`/${locale}/applications/${app.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-600">{app.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/applications`}
              className="inline-flex items-center text-blue-600 font-semibold hover:underline"
            >
              {locale === "pt" ? "Ver todas as aplicações →" : "View all applications →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Why EPDM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
            {locale === "pt" ? "Por Que Escolher EPDM?" : "Why Choose EPDM?"}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            {locale === "pt"
              ? "A membrana EPDM é a escolha superior para impermeabilização duradoura."
              : "EPDM membrane is the superior choice for long-lasting waterproofing."}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {locale === "pt"
              ? "Pronto para Impermeabilizar o Seu Projeto?"
              : "Ready to Waterproof Your Project?"}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {locale === "pt"
              ? "Fale com os especialistas em membranas EPDM. Resposta em 24h."
              : "Talk to the EPDM membrane specialists. Response within 24h."}
          </p>
          <Link
            href={`/${locale}/quote`}
            className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            {locale === "pt" ? "Pedir Orçamento Grátis" : "Get Free Quote"}
          </Link>
        </div>
      </section>
    </div>
  );
}
