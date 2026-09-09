import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import { brandSubtext } from "@/lib/copy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: brandSubtext,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-8">
      <p className="font-accent text-[11px] uppercase tracking-[0.24em] text-gold-deep">About</p>
      <h1 className="mt-2 text-5xl">We did not start this page for sugarcoated predictions.</h1>
      <p className="mt-4 font-heading text-2xl italic text-gold-deep">
        Most tarot accounts only tell you what you want to hear. Here is why we do things differently.
      </p>
      <div className="paper-card mt-8 rounded-3xl p-6">
        <p className="text-base leading-relaxed text-ink/80">
          Unfiltered Pull is raw tarot, moon rituals, and spiritual guidance: no fluff, no
          gatekeeping, just honest insight, practical rituals, and the power to own your path.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          First Pull, our introductory tarot reading, is complimentary for first-time clients.
        </p>
      </div>
      <div className="mt-6 grid gap-3">
        {[
          ["Raw", "The truth, unfiltered."],
          ["Real", "Rituals that ground and transform."],
          ["Revealed", "What is hidden, brought to light."],
        ].map(([t, d]) => (
          <div key={t} className="border border-charcoal/15 bg-sage/20 px-5 py-5">
            <h2 className="text-3xl">{t}</h2>
            <p className="font-heading text-lg italic text-ink/75">{d}</p>
          </div>
        ))}
      </div>
      <h2 className="mt-10 text-3xl">What to expect</h2>
      <ul className="mt-4 space-y-3 text-sm text-ink/80">
        <li>Pick-a-card energy and personalised 1:1 readings</li>
        <li>Moon rituals, healing, and shadow work when a pull is not enough</li>
        <li>Direct answers to the questions you are actually asking at 1am</li>
        <li>Confidential sessions. Your story stays yours</li>
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <InstagramCTA className={primaryCtaClass}>Claim your free First Pull</InstagramCTA>
        <InstagramCTA className={secondaryCtaClass}>Contact for pricing</InstagramCTA>
      </div>
    </div>
  );
}
