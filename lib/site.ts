export const site = {
  name: "Unfiltered Pull",
  tagline: "RAW. REAL. REVEALED.",
  description:
    "Raw tarot, moon rituals, and spiritual guidance for emotional clarity. No fluff, no gatekeeping — honest insight for love, patterns, and your next chapter.",
  url: "https://unfiltered-pull.vercel.app",
  email: "unfiltered.pull@gmail.com",
  instagramHandle: "tarotbyunfiltered.pull",
  instagramProfile: "https://www.instagram.com/tarotbyunfiltered.pull",
  instagramDm: "https://ig.me/m/tarotbyunfiltered.pull",
  firstPullKeyword: "FIRST PULL",
  servicesKeyword: "SERVICES",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
] as const;

export const disclaimer =
  "Tarot and spiritual services are intended for reflection, guidance, and personal insight. They are not a substitute for professional medical, psychological, legal, or financial advice.";
