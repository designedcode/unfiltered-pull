import { categories, services } from "@/lib/services";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/testimonials", "/faq", "/terms", "/privacy"];
  const now = new Date();
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })),
    ...categories.map((category) => ({
      url: `${site.url}/services/${category.slug}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.category}/${service.slug}`,
      lastModified: now,
    })),
  ];
}
