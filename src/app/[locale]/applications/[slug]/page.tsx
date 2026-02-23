import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  applications,
  getApplicationBySlug,
  getRelatedApplications,
} from "@/data/applications";
import type { Metadata } from "next";

export function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApplicationBySlug(slug);
  if (!app) return {};
  const t = await getTranslations({ locale, namespace: "Applications" });
  return {
    title: `${t(`${slug}.title`)} - EPDM | Membriko`,
    description: t(`${slug}.description`),
  };
}

export default async function ApplicationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const app = getApplicationBySlug(slug);

  if (!app) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Applications" });
  const related = getRelatedApplications(slug);
  const benefitKeys = ["1", "2", "3", "4"] as const;
  const specKeys = ["thickness", "width", "temperature", "lifespan"] as const;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Link
            href="/applications"
            className="inline-block text-blue-200 hover:text-white mb-6 transition-colors"
          >
            {t("backToAll")}
          </Link>
          <div className="flex items-start gap-6">
            <span className="text-6xl">{app.icon}</span>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {t(`${slug}.title`)}
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                {t(`${slug}.description`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t("benefits")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitKeys.map((key) => (
              <div
                key={key}
                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {key}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {t(`${slug}.benefits.${key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`${slug}.benefits.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t("specs")}
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {specKeys.map((key, idx) => (
              <div
                key={key}
                className={`flex justify-between items-center px-6 py-4 ${
                  idx !== specKeys.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <span className="font-medium text-gray-900">
                  {t(`${slug}.specs.${key}.label`)}
                </span>
                <span className="text-gray-600">
                  {t(`${slug}.specs.${key}.value`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Related Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t("relatedTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/applications/${rel.slug}`}
                className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{rel.icon}</div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {t(`${rel.slug}.title`)}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {t(`${rel.slug}.description`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
