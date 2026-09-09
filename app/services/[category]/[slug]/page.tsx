import { notFound } from "next/navigation";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { getCategory, getService, isCategoryVisible, services } from "@/lib/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services
    .filter((service) => isCategoryVisible(service.category))
    .map((service) => ({
      category: service.category,
      slug: service.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const service = getService(category, slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const service = getService(category, slug);
  const cat = getCategory(category);
  if (!service || !cat) notFound();

  return (
    <div className="min-h-[50vh]">
      <ServiceDetailClient
        service={service}
        categoryTitle={cat.title}
        backHref={`/services/${cat.slug}`}
      />
    </div>
  );
}
