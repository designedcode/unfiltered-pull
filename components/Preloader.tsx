"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 300 : 1000;
    const fade = reduced ? 0 : 350;

    const hide = window.setTimeout(() => {
      setLeaving(true);
      window.setTimeout(() => setVisible(false), fade);
    }, hold);

    return () => window.clearTimeout(hide);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ivory px-6 transition-opacity duration-[350ms] ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={`${site.name}. ${site.tagline}`}
    >
      <Image
        src="/brand/logo-hand.jpg"
        alt=""
        width={160}
        height={160}
        className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
        priority
      />
      <p className="mt-7 font-heading text-5xl text-charcoal sm:text-6xl">
        unfiltered <span className="font-script text-gold">pull</span>
      </p>
      <p className="mt-4 font-accent text-sm uppercase tracking-[0.28em] text-gold-deep sm:text-base">
        {site.tagline}
      </p>
    </div>
  );
}
