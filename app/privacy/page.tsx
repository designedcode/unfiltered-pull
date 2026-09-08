import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Unfiltered Pull treats session details and personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-10 pt-8">
      <h1 className="text-5xl">Privacy</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink/80">
        We treat your questions, personal information, and everything discussed during a session
        with care and confidentiality. Details you send on Instagram or email are used only to
        book and deliver your reading.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink/80">
        This website does not take payments or store booking forms. Contact happens through
        Instagram DMs or {site.email}.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">
        Do not send another person’s private accounts or information they have not consented to
        share.
      </p>
    </div>
  );
}
