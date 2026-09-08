import Image from "next/image";
import Link from "next/link";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import { HandCardIcon, LeafIcon, MoonIcon, StarIcon } from "@/components/icons";
import { firstPullHint } from "@/lib/instagram";
import { getSignatureServices, servicePath } from "@/lib/services";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

const questions = [
  "Do they still think about me?",
  "Why are they acting distant?",
  "Should I message them?",
  "Will they come back?",
  "Am I crazy for feeling this?",
  "Why can’t I move on?",
  "Is this love or attachment?",
  "How do I stop giving my power away?",
];

const steps = [
  { title: "Send the details", body: "DM FIRST PULL or the reading name plus the checklist on the service page." },
  { title: "We confirm", body: "First Pull is free. Paid sessions confirm once details — and payment, arranged privately — are in." },
  { title: "Choose a format", body: "Video, Audio, Chat, or Voice notes. Live or recorded." },
  { title: "Get the honest read", body: "Relief and clarity. Not a script of what you wanted to hear." },
];

export default function HomePage() {
  const signatures = getSignatureServices();

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-16 pt-10">
        <MoonIcon className="glow-moon pointer-events-none absolute -right-6 top-8 h-24 w-24 text-gold/40" />
        <LeafIcon className="pointer-events-none absolute -left-2 bottom-8 h-16 w-16 text-sage-deep/30" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-[11px] uppercase tracking-[0.28em] text-gold-deep">
            Tarot + honest insight
          </p>
          <p className="mt-3 inline-flex rounded-full bg-sage/20 px-4 py-1.5 font-accent text-[11px] uppercase tracking-[0.2em] text-sage-deep">
            First Pull is free
          </p>
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[0.95] text-charcoal sm:text-6xl">
            You are not looking for a prediction. You are looking for relief.
          </h1>
          <p className="mt-4 font-heading text-2xl italic text-gold-deep">{site.tagline}</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/80">
            Raw tarot, moon rituals, and spiritual guidance for the situationship, the silence, and
            the pattern that will not quit. No fluff. No gatekeeping.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <InstagramCTA className={primaryCtaClass}>Claim your free First Pull</InstagramCTA>
            <Link href="/services" className={secondaryCtaClass}>
              Browse services
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-ink/60">{firstPullHint}</p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="paper-card mx-auto max-w-3xl rounded-[28px] px-6 py-8 text-center">
          <HandCardIcon className="mx-auto h-14 w-14 text-gold" />
          <h2 className="mt-3 text-4xl">Your first tarot reading is complimentary</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            First Pull is a free introductory reading for first-time clients. One situation. Honest
            cards. If you need more, we go deeper — pricing stays in the DM, never on this site.
          </p>
          <InstagramCTA className={`${primaryCtaClass} mt-6`}>Claim your free First Pull</InstagramCTA>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">What are you carrying?</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-ink/70">
            Tap a question. Tell us the same words in Instagram.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {questions.map((q) => (
              <InstagramCTA
                key={q}
                className="glass-chip min-h-11 rounded-full px-4 py-2 text-sm text-charcoal"
              >
                {q}
              </InstagramCTA>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-accent text-[11px] uppercase tracking-[0.2em] text-gold-deep">
            Signature experiences
          </p>
          <h2 className="mt-2 text-center text-4xl">Start here</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {signatures.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service)}
                className="paper-card rounded-3xl p-5 transition hover:-translate-y-0.5"
              >
                {service.isFree ? (
                  <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    Complimentary
                  </span>
                ) : null}
                <h3 className="mt-1 text-3xl">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.description}</p>
                <span className="mt-4 inline-block font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep">
                  See details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage/15 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-accent text-[10px] uppercase tracking-[0.2em] text-gold-deep">
            Replace with real numbers
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ["000+", "Private sessions"],
              ["000+", "Return clients"],
              ["100%", "Confidential"],
            ].map(([n, l]) => (
              <div key={l} className="paper-card rounded-2xl px-2 py-5">
                <p className="font-heading text-3xl text-charcoal sm:text-4xl">{n}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink/65">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Honest", "Confidential", "Personalized"].map((pillar) => (
              <div key={pillar} className="rounded-2xl border border-gold/20 bg-ivory/70 px-4 py-5 text-center">
                <StarIcon className="mx-auto h-5 w-5 text-gold" />
                <h3 className="mt-2 text-2xl">{pillar}</h3>
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
              <p key={item} className="font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">How it works</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step.title} className="paper-card rounded-2xl p-5">
                <p className="font-accent text-[11px] uppercase tracking-[0.18em] text-gold-deep">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory-deep/80 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">Kind words</h2>
          <p className="mt-2 text-center text-xs text-ink/55">
            Sample layout — real client notes coming soon.
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
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <Image
            src="/brand/about-mission.jpg"
            alt="Unfiltered Pull brand story"
            width={800}
            height={1000}
            className="h-auto w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="text-4xl">We did not start this for sugarcoated predictions.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Most tarot accounts only tell you what you want to hear. Unfiltered Pull is raw tarot,
              moon rituals, and spiritual guidance — honest insight and the power to own your path.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className={secondaryCtaClass}>
                About the practice
              </Link>
              <Link href="/faq" className={secondaryCtaClass}>
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
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
      </section>
    </div>
  );
}
