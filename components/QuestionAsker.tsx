"use client";

import { useState, type FormEvent } from "react";
import { InstagramCTA } from "@/components/InstagramCTA";
import { instagramDmHref } from "@/lib/instagram";

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

export function QuestionAsker() {
  const [custom, setCustom] = useState("");

  function submitCustom(e: FormEvent) {
    e.preventDefault();
    const q = custom.trim();
    if (!q) return;
    void navigator.clipboard?.writeText(q).catch(() => undefined);
    window.open(instagramDmHref(), "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {questions.map((q) => (
          <InstagramCTA
            key={q}
            className="glass-chip min-h-11 rounded-full px-4 py-2 text-sm text-charcoal transition hover:border-gold hover:bg-gold/10"
          >
            {q}
          </InstagramCTA>
        ))}
      </div>
      <form
        onSubmit={submitCustom}
        className="mx-auto mt-5 flex max-w-xl items-center gap-2 rounded-full border border-gold/35 bg-paper px-2 py-1.5 shadow-sm"
      >
        <label className="sr-only" htmlFor="custom-question">
          Ask your own question
        </label>
        <input
          id="custom-question"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Or type your own question…"
          className="min-h-11 flex-1 bg-transparent px-3 text-sm text-charcoal outline-none placeholder:text-ink/45"
        />
        <button
          type="submit"
          aria-label="Send question in Instagram"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal transition hover:bg-gold-deep hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            <path
              d="M5 12h12M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <p className="mt-2 text-center text-[11px] text-ink/50">
        Your question copies to the clipboard, then Instagram opens.
      </p>
    </div>
  );
}
