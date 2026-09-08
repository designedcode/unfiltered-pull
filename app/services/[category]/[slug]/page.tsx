import Link from "next/link";
import { notFound } from "next/navigation";
import { InstagramCTA, primaryCtaClass, secondaryCtaClass } from "@/components/InstagramCTA";
import { getCategory, getService, services } from "@/lib/services";
import { disclaimer } from "@/lib/site";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({
    category: service.category,
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const service = getService(category, slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const service = getService(category, slug);
  const cat = getCategory(category);
  if (!service || !cat) notFound();

  const cta = service.isFree ? "Claim your free reading" : "Contact for pricing";

  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-8">
      <Link
        href={`/services/${cat.slug}`}
        className="font-accent text-[11px] uppercase tracking-[0.16em] text-gold-deep"
      >
        {cat.title}
      </Link>
      {service.isFree ? (
        <p className="mt-4 font-accent text-[11px] uppercase tracking-[0.2em] text-terracotta">
          Complimentary · First Pull
        </p>
      ) : null}
      <h1 className="mt-2 text-5xl">{service.name}</h1>
      <p className="mt-4 text-base leading-relaxed text-ink/80">{service.description}</p>

      <section className="paper-card mt-8 rounded-3xl p-6">
        <h2 className="text-3xl">Who it is for</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.forWhom}</p>
      </section>
      <section className="paper-card mt-4 rounded-3xl p-6">
        <h2 className="text-3xl">What you walk away with</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.whatYouGet}</p>
      </section>
      <section className="paper-card mt-4 rounded-3xl p-6">
        <h2 className="text-3xl">Formats</h2>
        <p className="mt-2 text-sm text-ink/75">{service.formats.join(" · ")}</p>
      </section>
      <section className="mt-4 rounded-3xl border border-gold/30 bg-sage/10 p-6">
        <h2 className="text-3xl">Send this in your first DM</h2>
        <p className="mt-2 text-sm text-ink/75">
          Paste these answers in Instagram so we can confirm faster. Send{" "}
          <span className="highlight font-medium">{service.isFree ? "FIRST PULL" : service.name}</span>.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
          {service.intake.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <InstagramCTA className={primaryCtaClass}>{cta}</InstagramCTA>
        <InstagramCTA className={secondaryCtaClass}>Book this reading</InstagramCTA>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-ink/55">{disclaimer}</p>
    </div>
  );
}
