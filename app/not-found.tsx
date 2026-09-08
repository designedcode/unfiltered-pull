import Link from "next/link";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-5xl">This page slipped the spread</h1>
      <p className="mt-3 text-sm text-ink/70">Try the catalog, or claim your free First Pull.</p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/services" className={secondaryCtaClass}>
          Browse services
        </Link>
        <InstagramCTA className={primaryCtaClass}>Claim your free First Pull</InstagramCTA>
      </div>
    </div>
  );
}
