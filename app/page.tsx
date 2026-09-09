import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import { QuestionAsker } from "@/components/QuestionAsker";
import { Reveal } from "@/components/Reveal";
import { SignatureList } from "@/components/SignatureList";
import { HandCardIcon, LeafIcon } from "@/components/icons";
import { brandSubtext } from "@/lib/copy";
import { getSignatureServices } from "@/lib/services";
import { site } from "@/lib/site";
import { stats, trustLine } from "@/lib/stats";
import { testimonials } from "@/lib/testimonials";

export default function HomePage() {
  const signatures = getSignatureServices();

  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden px-4 pt-10 pb-10">
        <LeafIcon className="pointer-events-none absolute bottom-8 left-0 h-12 w-12 text-sage-deep/25" />
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <Image
            src="/brand/moon-phases.png"
            alt=""
            width={640}
            height={88}
            className="h-auto w-full max-w-md object-contain"
            priority
          />
          <h1 className="mt-6 max-w-xl font-heading text-[2rem] font-semibold leading-[1.08] text-charcoal sm:text-5xl">
            Whatever’s weighing on you, bring it here.
          </h1>
          <p className="mt-2 font-heading text-xl italic text-gold-deep sm:text-2xl">{site.tagline}</p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/80 sm:text-base">
            {brandSubtext}
          </p>
          <div className="mt-6 flex w-full max-w-sm flex-col gap-3">
            <InstagramCTA className={`${primaryCtaClass} w-full`}>
              Claim your free First Pull
            </InstagramCTA>
            <Link href="/services" className={`${secondaryCtaClass} w-full`}>
              Browse services
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-sm text-[11px] leading-relaxed text-ink/60 sm:text-xs">
            {trustLine}
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">What are you carrying?</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-ink/70">
            Tap a question. Tell us the same words in Instagram.
          </p>
          <QuestionAsker />
        </div>
      </section>

      <section className="px-4 pb-16">
        <Reveal>
          <div className="paper-card mx-auto max-w-3xl rounded-[28px] px-6 py-8 text-center">
            <HandCardIcon className="mx-auto h-14 w-14 text-gold" />
            <h2 className="mt-3 text-4xl">Your first tarot reading is complimentary</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              First Pull is a free introductory reading for first-time clients. One situation. Honest
              cards. If you need more, we go deeper. Pricing stays in the DM, never on this site.
            </p>
            <InstagramCTA className={`${primaryCtaClass} mt-6`}>Claim your free First Pull</InstagramCTA>
          </div>
        </Reveal>
      </section>

      <section className="px-4 pb-16">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <p className="text-center font-accent text-[11px] uppercase tracking-[0.2em] text-gold-deep">
              Signature experiences
            </p>
            <h2 className="mt-2 text-center text-4xl">Different readings for every chapter of you</h2>
            <SignatureList services={signatures} />
            <div className="mt-8 text-center">
              <InstagramCTA className={secondaryCtaClass}>DM &apos;PULL&apos; to book</InstagramCTA>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage/15 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-accent text-[10px] uppercase tracking-[0.2em] text-gold-deep">
            The practice in numbers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="paper-card rounded-2xl px-2 py-5">
                <p className="font-heading text-3xl text-charcoal sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">Why this practice</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Raw", "The truth, unfiltered."],
              ["Real", "Rituals that ground and transform."],
              ["Revealed", "What is hidden, brought to light."],
            ].map(([t, d]) => (
              <div key={t} className="border border-charcoal/15 bg-sage/20 px-5 py-6 text-center">
                <h3 className="text-3xl">{t}</h3>
                <p className="mt-2 font-heading text-lg italic text-ink/75">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2 text-center">
            {["Self-discovery", "Guidance", "Clarity"].map((item) => (
              <p
                key={item}
                className="font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep/80 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">Kind words</h2>
          <p className="mt-2 text-center text-xs text-ink/55">
            Sample layout. Real client notes coming soon.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {testimonials.slice(0, 2).map((t) => (
              <figure key={t.id} className="paper-card rounded-3xl p-6 text-center">
                <Image
                  src={t.avatar}
                  alt=""
                  width={72}
                  height={72}
                  className="mx-auto h-16 w-16 rounded-full object-cover"
                />
                <blockquote className="mt-4 font-heading text-xl italic text-charcoal">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-ink/70">
                  {t.name} · {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/testimonials" className={`${secondaryCtaClass} inline-flex`}>
              Read testimonials
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl">We did not start this for sugarcoated predictions.</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Most tarot accounts only tell you what you want to hear. Unfiltered Pull is raw tarot,
            moon rituals, and spiritual guidance: honest insight and the power to own your path.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/about" className={secondaryCtaClass}>
              About the practice
            </Link>
            <Link href="/faq" className={secondaryCtaClass}>
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[28px] bg-terracotta/15 px-6 py-10 text-center">
            <h2 className="text-4xl">Ready for the honest pull?</h2>
            <p className="mt-3 text-sm text-ink/75">
              First-time clients: send FIRST PULL. Everyone else: send SERVICES or the reading name.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <InstagramCTA className={primaryCtaClass}>Claim your free First Pull</InstagramCTA>
              <InstagramCTA className={secondaryCtaClass}>Contact for pricing</InstagramCTA>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
