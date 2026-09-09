"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 400 : 2400;
    const fade = reduced ? 0 : 450;

    const hide = window.setTimeout(() => {
      setLeaving(true);
      window.setTimeout(() => setVisible(false), fade);
    }, hold);

    return () => window.clearTimeout(hide);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ivory transition-opacity duration-[450ms] ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={`${site.name}. ${site.tagline}`}
    >
      <Image
        src="/brand/logo-hand.jpg"
        alt=""
        width={88}
        height={88}
        className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
        priority
      />
      <p className="mt-5 font-heading text-3xl text-charcoal sm:text-4xl">
        unfiltered <span className="font-script text-gold">pull</span>
      </p>
      <p className="mt-3 font-accent text-[11px] uppercase tracking-[0.28em] text-gold-deep">
        {site.tagline}
      </p>
    </div>
  );
}
