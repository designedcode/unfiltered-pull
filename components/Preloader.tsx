"use client";

import { useEffect, useState } from "react";
import { MoonIcon } from "@/components/icons";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setVisible(false), reduced ? 200 : 900);
    return () => window.clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory"
      role="status"
      aria-live="polite"
    >
      <MoonIcon className="glow-moon h-16 w-16 text-gold" />
      <p className="mt-4 font-heading text-3xl text-charcoal">
        unfiltered <span className="font-script text-gold">pull</span>
      </p>
      <p className="mt-2 font-accent text-[10px] uppercase tracking-[0.28em] text-gold-deep">
        First Pull is free
      </p>
    </div>
  );
}
