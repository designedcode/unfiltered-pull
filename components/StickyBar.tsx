"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";

function isServicesCatalogPath(pathname: string) {
  if (pathname === "/services") return true;
  // Category pages only: /services/[category] — not /services/[category]/[slug]
  return /^\/services\/[^/]+$/.test(pathname);
}

export function StickyBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const onServicesCatalog = isServicesCatalogPath(pathname);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.min(window.innerHeight * 0.85, 700);
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function focusServiceSearch() {
    const input = document.getElementById("service-search") as HTMLInputElement | null;
    if (!input) return;
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => input.focus(), 280);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 w-full max-w-[100vw] overflow-hidden border-t border-gold/25 bg-ivory/95 px-3 py-2 backdrop-blur-md lg:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-2">
        <InstagramCTA className={`${primaryCtaClass} min-w-0 w-full px-2 text-[10px] tracking-[0.12em]`}>
          DM to book
        </InstagramCTA>
        {onServicesCatalog ? (
          <button
            type="button"
            onClick={focusServiceSearch}
            className={`${secondaryCtaClass} min-w-0 w-full px-2 text-[10px] tracking-[0.12em]`}
          >
            Search services
          </button>
        ) : (
          <Link
            href="/services"
            className={`${secondaryCtaClass} min-w-0 w-full px-2 text-[10px] tracking-[0.12em]`}
          >
            Browse services
          </Link>
        )}
      </div>
    </div>
  );
}
