import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceSearch } from "@/components/ServiceSearch";
import {
  categories,
  getCategory,
  getServicesByCategory,
  servicePath,
  type CategorySlug,
} from "@/lib/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Services" };
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const items = getServicesByCategory(cat.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-8">
      <Link href="/services" className="font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep">
        All categories
      </Link>
      <h1 className="mt-3 text-5xl">{cat.title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">{cat.description}</p>
      <ServiceSearch scopedCategory={cat.slug as CategorySlug} placeholder={`Search ${cat.title}…`} />
      <div className="mt-6 grid gap-4">
        {items.map((service) => (
          <Link key={service.slug} href={servicePath(service)} className="paper-card rounded-3xl p-5">
            <div className="flex flex-wrap gap-2">
              {service.isFree ? (
                <span className="font-accent text-[10px] uppercase tracking-[0.16em] text-terracotta">
                  Free
                </span>
              ) : null}
              {service.formats.slice(0, 3).map((format) => (
                <span
                  key={format}
                  className="font-accent text-[10px] uppercase tracking-[0.14em] text-gold-deep"
                >
                  {format}
                </span>
              ))}
            </div>
            <h2 className="mt-2 text-3xl">{service.name}</h2>
            <p className="mt-2 text-sm text-ink/75">{service.forWhom}</p>
            <span className="mt-3 inline-block font-accent text-[11px] uppercase tracking-[0.16em] text-charcoal">
              See details
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
