"use client";

import { useState } from "react";
import { primaryCtaClass } from "@/components/InstagramCTA";
import { ServiceModal } from "@/components/ServiceModal";
import type { Service } from "@/lib/services";

export function FirstPullCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="paper-card mt-6 block w-full rounded-3xl p-6 text-left"
      >
        <p className="font-accent text-[11px] uppercase tracking-[0.2em] text-terracotta">
          Complimentary for first-time clients
        </p>
        <h2 className="mt-2 text-4xl">First Pull</h2>
        <p className="mt-2 text-sm text-ink/75">
          Your first tarot reading is free. One question, honest cards. Tap for what to send in the DM.
        </p>
        <span className={`${primaryCtaClass} mt-5`}>See First Pull details</span>
      </button>
      {open ? (
        <ServiceModal
          service={service}
          categoryTitle="Signature Experiences"
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
