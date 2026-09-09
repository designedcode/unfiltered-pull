"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import { InstagramIcon } from "@/components/icons";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const menu =
    mounted && open
      ? createPortal(
          <div
            id="mobile-nav"
            className="fixed inset-0 z-[100] flex flex-col bg-ivory lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(158,175,152,0.22),_transparent_50%)]" />
            <div className="relative flex items-center justify-between border-b border-gold/20 px-4 py-3">
              <Link
                href="/"
                className="flex min-h-11 items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/brand/logo-hand.jpg"
                  alt="Unfiltered Pull"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-heading text-xl text-charcoal">
                  unfiltered <span className="font-script text-gold">pull</span>
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-2xl leading-none text-charcoal"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav
              className="relative flex flex-1 flex-col justify-center gap-1 px-6 py-8"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="mobile-nav-link min-h-14 border-b border-gold/15 py-3 font-heading text-4xl text-charcoal sm:text-5xl"
                  style={{ animationDelay: `${80 + i * 60}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="relative space-y-3 border-t border-gold/20 px-6 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <InstagramCTA className={`${primaryCtaClass} w-full text-sm`}>Contact us</InstagramCTA>
              <InstagramCTA className={`${secondaryCtaClass} w-full`}>
                Claim your free First Pull
              </InstagramCTA>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gold/20 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="flex min-h-11 items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/brand/logo-hand.jpg"
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
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-5" aria-hidden>
                <span
                  className={`absolute left-0 top-0 block h-px w-full bg-charcoal transition duration-300 ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-full bg-charcoal transition duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-px w-full bg-charcoal transition duration-300 ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      {menu}
    </>
  );
}
