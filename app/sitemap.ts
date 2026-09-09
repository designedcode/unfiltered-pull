import { visibleCategories, services, isCategoryVisible } from "@/lib/services";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/testimonials", "/faq", "/terms", "/privacy"];
  const now = new Date();
  const visibleServices = services.filter((service) => isCategoryVisible(service.category));

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })),
    ...visibleCategories.map((category) => ({
      url: `${site.url}/services/${category.slug}`,
      lastModified: now,
    })),
    ...visibleServices.map((service) => ({
      url: `${site.url}/services/${service.category}/${service.slug}`,
      lastModified: now,
    })),
  ];
}
