export interface Application {
  slug: string;
  icon: string;
  relatedSlugs: string[];
}

export const applications: Application[] = [
  {
    slug: "flat-roofs",
    icon: "🏢",
    relatedSlugs: ["pitched-roofs", "green-roofs", "industrial-buildings"],
  },
  {
    slug: "pitched-roofs",
    icon: "🏠",
    relatedSlugs: ["flat-roofs", "green-roofs", "residential"],
  },
  {
    slug: "green-roofs",
    icon: "🌿",
    relatedSlugs: ["flat-roofs", "terraces", "residential"],
  },
  {
    slug: "terraces",
    icon: "☀️",
    relatedSlugs: ["flat-roofs", "swimming-pools", "residential"],
  },
  {
    slug: "swimming-pools",
    icon: "🏊",
    relatedSlugs: ["lakes-reservoirs", "terraces", "residential"],
  },
  {
    slug: "lakes-reservoirs",
    icon: "💧",
    relatedSlugs: ["swimming-pools", "foundations", "green-roofs"],
  },
  {
    slug: "facades",
    icon: "🏗️",
    relatedSlugs: ["foundations", "commercial-buildings", "residential"],
  },
  {
    slug: "foundations",
    icon: "🧱",
    relatedSlugs: ["facades", "industrial-buildings", "commercial-buildings"],
  },
  {
    slug: "industrial-buildings",
    icon: "🏭",
    relatedSlugs: ["commercial-buildings", "flat-roofs", "foundations"],
  },
  {
    slug: "commercial-buildings",
    icon: "🏬",
    relatedSlugs: ["industrial-buildings", "flat-roofs", "facades"],
  },
  {
    slug: "residential",
    icon: "🏡",
    relatedSlugs: ["pitched-roofs", "terraces", "swimming-pools"],
  },
];

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((app) => app.slug === slug);
}

export function getRelatedApplications(slug: string): Application[] {
  const app = getApplicationBySlug(slug);
  if (!app) return [];
  return app.relatedSlugs
    .map((s) => getApplicationBySlug(s))
    .filter((a): a is Application => a !== undefined);
}
