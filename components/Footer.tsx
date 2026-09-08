import Link from "next/link";
import { InstagramCTA } from "@/components/InstagramCTA";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gold/20 bg-sage/15 pb-28 lg:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-3xl text-charcoal">
            unfiltered <span className="font-script text-gold">pull</span>
          </p>
          <p className="mt-2 font-accent text-[11px] uppercase tracking-[0.2em] text-gold-deep">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/80">
            Raw tarot, moon rituals, and spiritual guidance. First Pull is free for first-time
            clients.
          </p>
        </div>
        <div>
          <p className="font-accent text-[11px] uppercase tracking-[0.18em] text-gold-deep">Explore</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-charcoal">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/terms" className="text-sm text-ink hover:text-charcoal">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-ink hover:text-charcoal">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-accent text-[11px] uppercase tracking-[0.18em] text-gold-deep">Connect</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <InstagramCTA className="underline decoration-gold/50 underline-offset-4">
                Instagram DMs
              </InstagramCTA>
            </li>
            <li>
              <a href={site.instagramProfile} className="underline decoration-gold/50 underline-offset-4">
                @{site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="underline decoration-gold/50 underline-offset-4">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="px-4 pb-6 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Unfiltered Pull. All rights reserved.
      </p>
    </footer>
  );
}
