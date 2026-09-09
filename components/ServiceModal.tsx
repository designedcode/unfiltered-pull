"use client";

import { useEffect } from "react";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import type { Service } from "@/lib/services";
import { disclaimer } from "@/lib/site";

export function ServiceModal({
  service,
  categoryTitle,
  onClose,
}: {
  service: Service;
  categoryTitle: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-charcoal/55 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={service.name}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-ivory sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-gold/20 px-5 py-4">
          <div>
            <p className="font-accent text-[10px] uppercase tracking-[0.18em] text-gold-deep">
              {categoryTitle}
            </p>
            {service.isFree ? (
              <p className="mt-1 font-accent text-[10px] uppercase tracking-[0.16em] text-terracotta">
                Complimentary
              </p>
            ) : null}
            <h2 className="mt-1 font-heading text-3xl text-charcoal sm:text-4xl">{service.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-xl text-charcoal"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 pb-28">
          <p className="text-sm leading-relaxed text-ink/80">{service.description}</p>
          <section className="paper-card mt-5 rounded-2xl p-4">
            <h3 className="text-2xl">Who it is for</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.forWhom}</p>
          </section>
          <section className="paper-card mt-3 rounded-2xl p-4">
            <h3 className="text-2xl">What you walk away with</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.whatYouGet}</p>
          </section>
          <section className="paper-card mt-3 rounded-2xl p-4">
            <h3 className="text-2xl">Formats</h3>
            <p className="mt-2 text-sm text-ink/75">{service.formats.join(" · ")}</p>
          </section>
          <section className="mt-3 rounded-2xl border border-gold/30 bg-sage/10 p-4">
            <h3 className="text-2xl">Send this in your first DM</h3>
            <p className="mt-2 text-sm text-ink/75">
              Paste these answers in Instagram so we can confirm faster. Send{" "}
              <span className="highlight font-medium">
                {service.isFree ? "FIRST PULL" : service.name}
              </span>
              .
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80">
              {service.intake.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <p className="mt-4 text-xs leading-relaxed text-ink/55">{disclaimer}</p>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-gold/25 bg-ivory/95 px-4 py-3 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
            <InstagramCTA className={`${primaryCtaClass} px-2 text-[10px]`}>
              Book this reading
            </InstagramCTA>
            <InstagramCTA className={`${secondaryCtaClass} px-2 text-[10px]`}>
              Contact for pricing
            </InstagramCTA>
          </div>
        </div>
      </div>
    </div>
  );
}
