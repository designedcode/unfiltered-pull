import { InstagramCTA, primaryCtaClass } from "@/components/InstagramCTA";
import { FaqJsonLd } from "@/components/JsonLd";
import { faqs, termsPoints } from "@/lib/faq";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "How to book Unfiltered Pull, session formats, confirmation, rescheduling, privacy, and terms. First Pull is free for first-time clients.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-10 pt-8">
      <FaqJsonLd />
      <p className="font-accent text-[11px] uppercase tracking-[0.24em] text-gold-deep">Questions</p>
      <h1 className="mt-2 text-5xl">Frequently asked</h1>
      <p className="mt-3 text-sm text-ink/75">
        First Pull is complimentary for first-time clients. Send FIRST PULL on Instagram.
      </p>
      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="paper-card rounded-3xl px-5 py-4">
            <summary className="cursor-pointer font-heading text-2xl text-charcoal">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{faq.answer}</p>
          </details>
        ))}
      </div>
      <section className="paper-card mt-10 rounded-3xl p-6">
        <p className="font-accent text-[11px] uppercase tracking-[0.18em] text-gold-deep">
          Before you book
        </p>
        <h2 className="mt-2 text-3xl">Terms</h2>
        <p className="mt-3 text-sm text-ink/75">By booking a session, you acknowledge that:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
          {termsPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
      <p className="mt-6 text-sm text-ink/70">
        Email{" "}
        <a
          href={`mailto:${site.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gold underline-offset-4"
        >
          {site.email}
        </a>{" "}
        or DM Instagram.
      </p>
      <InstagramCTA className={`${primaryCtaClass} mt-6`}>Claim your free First Pull</InstagramCTA>
    </div>
  );
}
