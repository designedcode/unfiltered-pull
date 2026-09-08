"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import { InstagramIcon } from "@/components/icons";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-simple.jpg"
            alt="Unfiltered Pull"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-heading text-xl text-charcoal">
            unfiltered <span className="font-script text-gold">pull</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-accent text-[11px] uppercase tracking-[0.18em] text-ink/80 hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <InstagramCTA className={secondaryCtaClass}>Claim First Pull</InstagramCTA>
          <InstagramCTA className={primaryCtaClass}>Contact for pricing</InstagramCTA>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <InstagramCTA
            ariaLabel="Open Instagram DMs"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep"
          >
            <InstagramIcon />
          </InstagramCTA>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className="block h-px bg-charcoal" />
              <span className="block h-px bg-charcoal" />
              <span className="block h-px bg-charcoal" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-gold/20 bg-ivory px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="min-h-11 font-heading text-2xl text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
