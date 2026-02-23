import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { applications } from "@/data/applications";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Applications" });
  return {
    title: `${t("title")} | Membriko`,
    description: t("subtitle"),
  };
}

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Applications" });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Link
                key={app.slug}
                href={`/applications/${app.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {t(`${app.slug}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`${app.slug}.description`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          <Link
            href="/quote"
            className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
