import { termsPoints } from "@/lib/faq";
import { disclaimer } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for booking Unfiltered Pull tarot and spiritual sessions.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-10 pt-8">
      <h1 className="text-5xl">Terms</h1>
      <p className="mt-4 text-sm text-ink/75">By booking a session, you acknowledge that:</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
        {termsPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-ink/70">{disclaimer}</p>
      <p className="mt-4 text-sm text-ink/70">
        All services are available subject to availability. Pricing is shared privately — never
        published here. First Pull is complimentary for first-time clients.
      </p>
    </div>
  );
}
