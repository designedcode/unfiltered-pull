import Link from "next/link";
import { FirstPullCard } from "@/components/FirstPullCard";
import { InstagramCTA } from "@/components/InstagramCTA";
import { ServicesJsonLd } from "@/components/JsonLd";
import { ServiceSearch } from "@/components/ServiceSearch";
import { ZapierChatbot } from "@/components/ZapierChatbot";
import { LeafIcon, MoonIcon, StarIcon } from "@/components/icons";
import { getService, getServicesByCategory, visibleCategories } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse Unfiltered Pull categories: tarot, love, shadow work, healing, astrology, rituals, and more. First Pull is free. Contact for pricing in Instagram.",
};

const icons = [MoonIcon, StarIcon, LeafIcon];

export default function ServicesPage() {
  const firstPull = getService("signature", "first-pull");

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-8">
      <ServicesJsonLd />
      <ZapierChatbot />
      <p className="font-accent text-[11px] uppercase tracking-[0.24em] text-gold-deep">Catalog</p>
      <h1 className="mt-2 text-5xl">All services</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
        Search anything, or tap a category. Every listing opens details and the exact notes to send
        in your first DM. No prices on this site.
      </p>

      <ServiceSearch />

      {firstPull ? <FirstPullCard service={firstPull} /> : null}

      <h2 className="mt-12 text-3xl">Categories</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {visibleCategories.map((category, i) => {
          const Icon = icons[i % icons.length];
          const count = getServicesByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/services/${category.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-card block rounded-3xl p-5"
            >
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-3 text-3xl">{category.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{category.promise}</p>
              <p className="mt-3 font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep">
                {count} services
              </p>
            </Link>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-ink/65">
        Prefer to talk it through?{" "}
        <InstagramCTA className="underline decoration-gold underline-offset-4">
          Contact for pricing
        </InstagramCTA>
      </p>
    </div>
  );
}
