"use client";

import Image from "next/image";
import { useState } from "react";
import { InstagramCTA, primaryCtaClass } from "@/components/InstagramCTA";
import { testimonials, testimonialTopics, type Testimonial } from "@/lib/testimonials";

function Card({ item }: { item: Testimonial }) {
  if (item.kind === "screenshot") {
    return (
      <figure className="paper-card overflow-hidden rounded-3xl">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={800}
            height={600}
            className="h-40 w-full object-cover opacity-80"
          />
        ) : null}
        <figcaption className="p-5">
          <p className="font-accent text-[10px] uppercase tracking-[0.16em] text-terracotta">
            Screenshot placeholder — replace with a real client review
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.quote}</p>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="paper-card rounded-3xl p-6 text-center">
      <Image
        src={item.avatar}
        alt=""
        width={72}
        height={72}
        className="mx-auto h-16 w-16 rounded-full object-cover"
      />
      <blockquote className="mt-4 font-heading text-xl italic text-charcoal">“{item.quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-ink/70">
        {item.name} · {item.place}
      </figcaption>
    </figure>
  );
}

export function TestimonialBoard() {
  const [topic, setTopic] = useState<(typeof testimonialTopics)[number] | "All">("All");
  const items = topic === "All" ? testimonials : testimonials.filter((t) => t.topic === topic);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...testimonialTopics] as const).map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setTopic(chip)}
            className={`min-h-11 rounded-full px-4 font-accent text-[11px] uppercase tracking-[0.14em] ${
              topic === chip ? "bg-gold text-charcoal" : "border border-gold/30 bg-paper text-ink"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink/55">Sample layout — real client notes coming soon.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <InstagramCTA className={primaryCtaClass}>Claim your free First Pull</InstagramCTA>
      </div>
    </div>
  );
}
