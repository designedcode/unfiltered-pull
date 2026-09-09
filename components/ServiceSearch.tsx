"use client";

import { useMemo, useState } from "react";
import { ServiceModal } from "@/components/ServiceModal";
import { searchServices, visibleCategories, type CategorySlug, type Service } from "@/lib/services";

export function ServiceSearch({
  scopedCategory,
  placeholder = "Search readings, healing, love, rituals…",
}: {
  scopedCategory?: CategorySlug;
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Service | null>(null);
  const results = useMemo(() => {
    const found = searchServices(query);
    return scopedCategory ? found.filter((s) => s.category === scopedCategory) : found;
  }, [query, scopedCategory]);

  return (
    <div className="sticky top-[72px] z-30 bg-ivory/95 py-3 backdrop-blur-md">
      <label className="sr-only" htmlFor="service-search">
        Search services
      </label>
      <input
        id="service-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-full border border-gold/35 bg-paper px-5 text-base text-charcoal outline-none ring-gold/40 placeholder:text-ink/45 focus:ring-2"
      />
      {query.trim() ? (
        <div className="paper-card mt-3 max-h-80 overflow-auto rounded-2xl p-3">
          {results.length === 0 ? (
            <p className="px-2 py-3 text-sm text-ink/70">No matches. Try love, reiki, or shadow work.</p>
          ) : (
            <ul className="divide-y divide-gold/15">
              {results.slice(0, 20).map((service) => (
                <li key={`${service.category}-${service.slug}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(service);
                      setQuery("");
                    }}
                    className="flex min-h-12 w-full flex-col justify-center px-2 py-2 text-left"
                  >
                    <span className="font-heading text-lg text-charcoal">{service.name}</span>
                    <span className="font-accent text-[10px] uppercase tracking-[0.16em] text-gold-deep">
                      {visibleCategories.find((c) => c.slug === service.category)?.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
      {active ? (
        <ServiceModal
          service={active}
          categoryTitle={
            visibleCategories.find((c) => c.slug === active.category)?.title ?? "Services"
          }
          onClose={() => setActive(null)}
        />
      ) : null}
    </div>
  );
}
