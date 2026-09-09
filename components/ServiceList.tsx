"use client";

import { useState } from "react";
import { ServiceModal } from "@/components/ServiceModal";
import type { Service } from "@/lib/services";

export function ServiceList({
  services,
  categoryTitle,
}: {
  services: Service[];
  categoryTitle: string;
}) {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <div className="mt-6 grid gap-4">
        {services.map((service) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => setActive(service)}
            className="paper-card rounded-3xl p-5 text-left transition hover:-translate-y-0.5"
          >
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
          </button>
        ))}
      </div>
      {active ? (
        <ServiceModal
          service={active}
          categoryTitle={categoryTitle}
          onClose={() => setActive(null)}
        />
      ) : null}
    </>
  );
}
