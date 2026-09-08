import { TestimonialBoard } from "@/components/TestimonialBoard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Kind words from people who came to Unfiltered Pull for clarity and relief. Layout placeholders until real reviews are added.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-8">
      <p className="font-accent text-[11px] uppercase tracking-[0.24em] text-gold-deep">Kind words</p>
      <h1 className="mt-2 text-5xl">From people who wanted relief, not a performance</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/75">
        These cards and screenshots are placeholders from our design reference so the page is ready
        for real client notes. They are not verified reviews.
      </p>
      <div className="mt-8">
        <TestimonialBoard />
      </div>
    </div>
  );
}
