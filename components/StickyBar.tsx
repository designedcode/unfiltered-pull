"use client";

import { usePathname } from "next/navigation";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";

export function StickyBar() {
  const pathname = usePathname();
  const isServiceDetail = /^\/services\/[^/]+\/[^/]+$/.test(pathname ?? "");
  const secondary = isServiceDetail ? "Book this reading" : "Contact for pricing";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-ivory/95 px-3 py-2 backdrop-blur-md lg:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <InstagramCTA className={`${primaryCtaClass} px-2 text-[10px]`}>
          Claim your free First Pull
        </InstagramCTA>
        <InstagramCTA className={`${secondaryCtaClass} px-2 text-[10px]`}>{secondary}</InstagramCTA>
      </div>
    </div>
  );
}
