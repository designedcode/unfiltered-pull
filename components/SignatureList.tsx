"use client";

import { useState } from "react";
import { ServiceModal } from "@/components/ServiceModal";
import { signatureBlurbs } from "@/lib/copy";
import type { Service } from "@/lib/services";

const iconColors = ["bg-sage", "bg-rose", "bg-terracotta"] as const;

function ServiceGlyph({ index }: { index: number }) {
  const paths = [
    "M12 3l1.2 5.2L18 9.2l-4.2 1.4L12 16l-1.8-5.4L6 9.2l4.8-.999z",
    "M8 16c2-5 6-8 10-9-1 4-3 8-8 10-1-1-2-1-2-1z",
    "M15 6a6 6 0 0 0-7 8.5A7 7 0 1 1 15 6z",
    "M12 19s-6-4.2-6-9a6 6 0 1 1 12 0c0 4.8-6 9-6 9z",
    "M12 5c2 3 2 6 0 9-2-3-2-6 0-9zm0 9c3 1 5 3 5 5H7c0-2 2-4 5-5z",
    "M9 18h6M12 4v2m-4 4h8v8H8z",
    "M12 5c3 2 5 5 5 8a5 5 0 1 1-10 0c0-3 2-6 5-8z",
    "M5 16c3-2 6-6 7-11 1 5 4 9 7 11-4 1-7 2-7 2s-3-1-7-2z",
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-ivory sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
      <path d={paths[index % paths.length]} />
    </svg>
  );
}

export function SignatureList({ services }: { services: Service[] }) {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
        {services.map((service, i) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => setActive(service)}
            className="paper-card flex min-h-16 w-full items-center gap-3 rounded-full px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-gold sm:px-4"
          >
            <span
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconColors[i % iconColors.length]}`}
            >
              <ServiceGlyph index={i} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-heading text-lg uppercase tracking-wide text-charcoal sm:text-xl">
                {service.name}
              </span>
              <span className="mt-0.5 block truncate font-heading text-sm italic text-ink/70">
                {signatureBlurbs[service.slug] ?? service.forWhom}
              </span>
            </span>
            <span className="mx-1 hidden h-8 w-px bg-gold/30 sm:block" />
            <span className="shrink-0 pr-1 font-accent text-[11px] tracking-[0.14em] text-ink/45">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <ServiceModal
          service={active}
          categoryTitle="Signature Experiences"
          onClose={() => setActive(null)}
        />
      ) : null}
    </>
  );
}
