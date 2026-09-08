import type { ReactNode } from "react";
import { instagramDmHref } from "@/lib/instagram";

type Props = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function InstagramCTA({ children, className, ariaLabel }: Props) {
  return (
    <a
      href={instagramDmHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

export const primaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2.5 text-center font-accent text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal transition hover:bg-gold-deep hover:text-ivory";

export const secondaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-charcoal/25 bg-ivory/80 px-5 py-2.5 text-center font-accent text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal transition hover:border-gold hover:bg-paper";
