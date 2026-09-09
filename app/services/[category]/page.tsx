import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceList } from "@/components/ServiceList";
import { ServiceSearch } from "@/components/ServiceSearch";
import { ZapierChatbot } from "@/components/ZapierChatbot";
import {
  getCategory,
  getServicesByCategory,
  visibleCategories,
  type CategorySlug,
} from "@/lib/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return visibleCategories.map((category) => ({ category: category.slug }));
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
      <ZapierChatbot />
      <Link
        href="/services"
        target="_blank"
        rel="noopener noreferrer"
        className="font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep"
      >
        All categories
      </Link>
      <h1 className="mt-3 text-5xl">{cat.title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">{cat.description}</p>
      <ServiceSearch scopedCategory={cat.slug as CategorySlug} placeholder={`Search ${cat.title}…`} />
      <ServiceList services={items} categoryTitle={cat.title} />
    </div>
  );
}
