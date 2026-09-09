export type CategorySlug =
  | "signature"
  | "tarot"
  | "forecast"
  | "specialty"
  | "healing"
  | "shadow"
  | "astrology"
  | "oracle"
  | "esoteric"
  | "coaching"
  | "rituals"
  | "formats"
  | "premium"
  | "groups"
  | "digital";

export type IntakeKind =
  | "core"
  | "love"
  | "forecast"
  | "astrology"
  | "healing"
  | "shadow"
  | "pet"
  | "group"
  | "digital";

export type Category = {
  slug: CategorySlug;
  title: string;
  promise: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  category: CategorySlug;
  tags: string[];
  description: string;
  forWhom: string;
  whatYouGet: string;
  formats: string[];
  intake: string[];
  isFree?: boolean;
  isSignature?: boolean;
};

const CORE_INTAKE = [
  "Your name",
  "The exact service name",
  "Your question or situation in 2-4 sentences",
  "Preferred format: Video, Audio, Chat, or Voice notes",
  "A preferred time window",
];

const INTAKE: Record<IntakeKind, string[]> = {
  core: CORE_INTAKE,
  love: [
    ...CORE_INTAKE,
    "Your connection to them (situationship, no-contact, dating, married)",
    "How long this has been going on",
    "What you want clarity on, not their private accounts",
  ],
  forecast: [
    ...CORE_INTAKE,
    "Your birth date",
    "Birth time and place if you know them",
  ],
  astrology: [
    ...CORE_INTAKE,
    "Your full birth date, time, and place",
    "For synastry only: the other person’s birth data if they consented",
  ],
  healing: [
    ...CORE_INTAKE,
    "What feels stuck in your body or energy",
    "Note: this is not medical treatment",
  ],
  shadow: [
    ...CORE_INTAKE,
    "The pattern that keeps repeating",
    "What you have already tried",
  ],
  pet: [
    ...CORE_INTAKE,
    "Pet name and species",
    "What you want to understand",
  ],
  group: [
    ...CORE_INTAKE,
    "Date and city or Zoom",
    "Approximate guest count",
  ],
  digital: [
    ...CORE_INTAKE,
    "Email for delivery after booking is confirmed privately",
  ],
};

export const categories: Category[] = [
  {
    slug: "signature",
    title: "Signature Experiences",
    promise: "The named journeys people come back for",
    description:
      "First Pull and the core Unfiltered Pull experiences: focused, honest, and built for the questions you are actually carrying.",
  },
  {
    slug: "tarot",
    title: "Tarot Readings",
    promise: "Quick pulls to full-life spreads",
    description:
      "Card-led sessions for one question or a wider life read. Raw language, no sugarcoated predictions.",
  },
  {
    slug: "forecast",
    title: "Forecast and Future",
    promise: "Month-ahead through the year ahead",
    description:
      "Timing, forecasts, and “what you need to know now”: possibilities, not guarantees.",
  },
  {
    slug: "specialty",
    title: "Specialty Tarot",
    promise: "Archetypes, past lives, soul contracts",
    description:
      "Deeper tarot work for shadow, deja vu, the Fool’s Journey, and the stories underneath the situation.",
  },
  {
    slug: "healing",
    title: "Healing and Energy",
    promise: "Reiki, chakras, crystals, cord-cutting",
    description:
      "Energy-based sessions for cleansing, alignment, and protection. Guidance and reflection, not medical care.",
  },
  {
    slug: "shadow",
    title: "Shadow Work and Inner Healing",
    promise: "Patterns, heartbreak, inner child",
    description:
      "For repeating loops, self-sabotage, and the part of you that keeps choosing the same person.",
  },
  {
    slug: "astrology",
    title: "Astrology and Cosmic Guidance",
    promise: "Natal charts, transits, synastry",
    description:
      "Birth-chart and timing work, alone or with tarot, for purpose, relationships, and decisions.",
  },
  {
    slug: "oracle",
    title: "Angel, Oracle, and Intuitive",
    promise: "Messages, pendulums, runes",
    description:
      "Angel and oracle cards, mediumship, pendulum, runes, and “the universe says hello.”",
  },
  {
    slug: "esoteric",
    title: "Spiritual and Esoteric",
    promise: "Akashic, dreams, soul purpose",
    description:
      "Akashic records, soul contracts, dreams, signs, and spiritual awakening guidance.",
  },
  {
    slug: "coaching",
    title: "Life Coaching and Mentorship",
    promise: "Tarot plus direction you can use",
    description:
      "1:1 mentorship and coaching for decisions, relationships, and the next chapter.",
  },
  {
    slug: "rituals",
    title: "Rituals and Practices",
    promise: "Moon, candle, protection, manifestation",
    description:
      "Personalized ritual guidance for new moons, full moons, bay leaves, cords, and protection.",
  },
  {
    slug: "formats",
    title: "Readings by Format",
    promise: "Live or recorded, your way",
    description:
      "Choose how you receive the work: Zoom, phone, in-person, voice notes, email, or PDF.",
  },
  {
    slug: "premium",
    title: "Premium Experiences",
    promise: "Multi-session and multi-modality",
    description:
      "Deeper containers that combine tarot, healing, astrology, and mentorship over time.",
  },
  {
    slug: "groups",
    title: "Groups, Events, and Experiences",
    promise: "Workshops, parties, retreats",
    description:
      "Circles, private parties, corporate wellness, and seasonal gatherings.",
  },
  {
    slug: "digital",
    title: "Digital and Self-Guided",
    promise: "Journals, spreads, courses",
    description:
      "Downloadable readings, journals, meditations, and self-guided healing tools.",
  },
];

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/["“”']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeService(
  name: string,
  category: CategorySlug,
  intake: IntakeKind,
  extra: Partial<Service> = {},
): Service {
  const cat = categories.find((c) => c.slug === category)!;
  return {
    slug: extra.slug ?? slugify(name),
    name,
    category,
    tags: extra.tags ?? [cat.title, name],
    description:
      extra.description ??
      `${name} is an Unfiltered Pull session inside ${cat.title.toLowerCase()}. Honest insight for the situation you are in, not a script of what you want to hear.`,
    forWhom:
      extra.forWhom ??
      "People who want relief and clarity, not performance. Especially if you are overthinking, waiting, or repeating a pattern.",
    whatYouGet:
      extra.whatYouGet ??
      "A direct read of the energy, the pattern underneath, and a practical next step you can actually take.",
    formats: extra.formats ?? ["Video", "Audio", "Chat", "Voice notes"],
    intake: extra.intake ?? INTAKE[intake],
    isFree: extra.isFree,
    isSignature: extra.isSignature,
  };
}

export const services: Service[] = [
  makeService("First Pull", "signature", "core", {
    isFree: true,
    isSignature: true,
    tags: ["Free", "Introductory", "Tarot"],
    description:
      "A complimentary introductory reading for first-time clients. One situation, honest cards, no fluff, so you can feel the work before you go deeper.",
    forWhom:
      "First-time clients who want to know if this space is for them. Bring one real question.",
    whatYouGet:
      "A focused first pull, plain language, and a clear sense of whether a deeper session is needed.",
  }),
  makeService("Quick Clarity", "signature", "core", {
    isSignature: true,
    description:
      "A focused reading for one situation or question when you need an answer, not a monologue.",
    forWhom: "When you are spiraling over one decision, text, or conversation.",
    whatYouGet: "A tight, unfiltered read and one grounded next step.",
  }),
  makeService("Deep Dive", "signature", "core", {
    isSignature: true,
    description:
      "A detailed reading when a quick answer is not enough: the story, the pattern, and the fork in the road.",
    forWhom: "When the situation has layers and a yes/no will not hold it.",
    whatYouGet: "A fuller spread, context, and the honest landscape of options.",
  }),
  makeService("Love and Relationships", "signature", "love", {
    isSignature: true,
    tags: ["Love", "Situationship", "No-contact"],
    description:
      "Explore feelings, patterns, dynamics, blocks, and possible paths forward, including the ones you do not want to hear.",
    forWhom:
      "Stuck in a situationship, no-contact, hot-and-cold, or asking if this is love or attachment.",
    whatYouGet:
      "Clarity on the dynamic, your part in it, and whether to reach, wait, or walk.",
  }),
  makeService("Shadow Work", "signature", "shadow", {
    isSignature: true,
    description:
      "Recurring emotional patterns, triggers, blocks, and lessons through tarot and guided reflection.",
    forWhom: "If you keep choosing the same person in a different body.",
    whatYouGet: "The loop named clearly, and a way to stop handing your power away.",
  }),
  makeService("Tarot + Healing", "signature", "healing", {
    isSignature: true,
    description:
      "Tarot plus energy-based work for when insight alone is not landing in the body.",
    forWhom: "When you understand the pattern and still cannot move.",
    whatYouGet: "Cards for the story and energy work for the residue.",
  }),
  makeService("Deep Transformation", "signature", "healing", {
    isSignature: true,
    description:
      "A deeper container combining tarot, healing, and personalized guidance.",
    forWhom: "When one session will not hold the chapter you are in.",
    whatYouGet: "A fuller map and a plan for the work after the call.",
  }),
  makeService("3-Session Journey", "signature", "shadow", {
    isSignature: true,
    slug: "3-session-journey",
    description:
      "A structured journey: where you are, what keeps repeating, and where you want to go next.",
    forWhom: "People ready for more than a one-off pull.",
    whatYouGet: "Three sessions with a through-line, not three disconnected readings.",
  }),
  makeService("Life Path", "signature", "core", {
    isSignature: true,
    description:
      "Career, purpose, decisions, direction, and the next chapter, without destiny theatrics.",
    forWhom: "When you are between jobs, cities, or identities and need a real read.",
    whatYouGet: "Direction you can use this month, not a vague life purpose slogan.",
  }),

  makeService("One-Question Reading", "tarot", "core"),
  makeService("Yes / No Reading", "tarot", "core", {
    description: "A direct yes/no when you already know the question and need the cards to stop the loop.",
  }),
  makeService("Specific Question Reading", "tarot", "core"),
  makeService("3-5 Card Reading", "tarot", "core", { slug: "3-5-card-reading" }),
  makeService("Mini Tarot Reading", "tarot", "core"),
  makeService("Voice Note Reading", "tarot", "core", {
    formats: ["Voice notes"],
  }),
  makeService("Text Reading", "tarot", "core", { formats: ["Chat"] }),
  makeService("Full Tarot Reading", "tarot", "core"),
  makeService("Comprehensive Life Reading", "tarot", "core"),
  makeService("General Energy Reading", "tarot", "core"),
  makeService("Intuitive Tarot Reading", "tarot", "core"),
  makeService("Spirit Guide Tarot Reading", "tarot", "core"),
  makeService("Pet Reading", "tarot", "pet"),
  makeService("Mediumship Tarot Reading", "tarot", "core"),
  makeService("Ancestral Connection Reading", "tarot", "core"),
  makeService("Their Feelings and Intentions", "tarot", "love"),
  makeService("No-Contact / Separation Reading", "tarot", "love"),
  makeService("Future Partner Reading", "tarot", "love"),
  makeService("Future Lover Reading", "tarot", "love"),
  makeService("Love Life Reading", "tarot", "love"),
  makeService("Relationship Compatibility Reading", "tarot", "love"),
  makeService("Career Reading", "tarot", "core"),
  makeService("Career Path Reading", "tarot", "core"),
  makeService("Money and Abundance Reading", "tarot", "core"),
  makeService("Life Purpose Reading", "tarot", "core"),
  makeService("Decision-Making Reading", "tarot", "core"),
  makeService("Soul Path Reading", "tarot", "core"),
  makeService("Destiny Reading", "tarot", "core"),
  makeService("Higher Self Tarot Reading", "tarot", "core"),

  makeService("Month Ahead Reading", "forecast", "forecast"),
  makeService("3-Month Forecast", "forecast", "forecast", { slug: "3-month-forecast" }),
  makeService("Year Ahead Reading", "forecast", "forecast"),
  makeService("New Year Guidance", "forecast", "forecast"),
  makeService("Birthday / Solar Year Reading", "forecast", "forecast"),
  makeService("Yearly Divine Forecast", "forecast", "forecast"),
  makeService("Future Energy Reading", "forecast", "forecast"),
  makeService("Divine Timing Reading", "forecast", "forecast"),
  makeService("Timing and Predictions Reading", "forecast", "forecast"),
  makeService("What You Need to Know Reading", "forecast", "core"),
  makeService("What's Really Going On? Reading", "forecast", "core"),
  makeService("Glimpse of the Year", "forecast", "forecast"),
  makeService("Past-Present-Future Reading", "forecast", "core"),

  makeService("Shadow Work Tarot", "specialty", "shadow"),
  makeService("Deja Vu Tarot", "specialty", "core"),
  makeService("Fool's Journey", "specialty", "shadow"),
  makeService("Archetype Reading", "specialty", "shadow"),
  makeService("Soul Contract Tarot Reading", "specialty", "core"),
  makeService("Past Life Tarot Reading", "specialty", "core"),
  makeService("Ancestral Tarot Reading", "specialty", "core"),
  makeService("Unseen Forces Reading", "specialty", "core"),
  makeService("Psychic Abilities Reading", "specialty", "core"),
  makeService("Divine Feminine / Divine Masculine Reading", "specialty", "shadow"),
  makeService("Inner Child Tarot Reading", "specialty", "shadow"),
  makeService("Dream and Energy Reading", "specialty", "core"),
  makeService("Intuitive Life Reading", "specialty", "core"),

  makeService("Tarot + Energy Healing", "healing", "healing"),
  makeService("Tarot + Reiki Healing", "healing", "healing"),
  makeService("Reiki Healing", "healing", "healing"),
  makeService("Reiki + Tarot", "healing", "healing"),
  makeService("Reiki + Angel Cards", "healing", "healing"),
  makeService("Reiki + Crystals", "healing", "healing"),
  makeService("Angelic Reiki Healing", "healing", "healing"),
  makeService("Chakra Healing", "healing", "healing"),
  makeService("Chakra Cleansing", "healing", "healing"),
  makeService("Energy Cleansing", "healing", "healing"),
  makeService("Energy Alignment", "healing", "healing"),
  makeService("Crystal Healing", "healing", "healing"),
  makeService("Crystal Guidance", "healing", "healing"),
  makeService("Aura Reading", "healing", "healing"),
  makeService("Aura Cleansing", "healing", "healing"),
  makeService("Cord-Cutting Work", "healing", "healing"),
  makeService("Protection and Energetic Cleansing", "healing", "healing"),
  makeService("Full-Moon Energy Work", "healing", "healing"),
  makeService("Spiritual Cleansing", "healing", "healing"),
  makeService("Intuitive Energy Healing", "healing", "healing"),

  makeService("Shadow Work Session", "shadow", "shadow"),
  makeService("Shadow Work + Tarot", "shadow", "shadow"),
  makeService("Emotional Pattern Reading", "shadow", "shadow"),
  makeService("Repeating Pattern Reading", "shadow", "shadow"),
  makeService("Inner Child Exploration", "shadow", "shadow"),
  makeService("Self-Love Reading", "shadow", "shadow"),
  makeService("Healing After Heartbreak", "shadow", "love"),
  makeService("Emotional Block Reading", "shadow", "shadow"),
  makeService("Limiting Belief Exploration", "shadow", "shadow"),
  makeService("Relationship Pattern Reading", "shadow", "love"),
  makeService("Self-Sabotage Exploration", "shadow", "shadow"),
  makeService("Personal Reflection Session", "shadow", "shadow"),
  makeService("Healing Guidance Session", "shadow", "healing"),

  makeService("Birth Chart Reading", "astrology", "astrology"),
  makeService("Full Natal Chart Reading", "astrology", "astrology"),
  makeService("Big 3 Reading", "astrology", "astrology"),
  makeService("Zodiac Reading", "astrology", "astrology"),
  makeService("Astrology + Tarot", "astrology", "astrology"),
  makeService("Tarot + Numerology", "astrology", "forecast"),
  makeService("Astro Transits", "astrology", "astrology"),
  makeService("Solar Return Reading", "astrology", "astrology"),
  makeService("Birth Chart + Tarot", "astrology", "astrology"),
  makeService("Relationship / Synastry Reading", "astrology", "astrology"),
  makeService("Compatibility Astrology Reading", "astrology", "astrology"),
  makeService("Career Astrology", "astrology", "astrology"),
  makeService("Life Purpose Astrology", "astrology", "astrology"),
  makeService("Astrological Forecast", "astrology", "astrology"),
  makeService("Divine Timing through Astrology", "astrology", "astrology"),

  makeService("Angel Card Reading", "oracle", "core"),
  makeService("Oracle Card Reading", "oracle", "core"),
  makeService("Spirit Guide Reading", "oracle", "core"),
  makeService("Higher Self Reading", "oracle", "core"),
  makeService("Intuitive Guidance Reading", "oracle", "core"),
  makeService("Divine Messages", "oracle", "core"),
  makeService("Universe Message Reading", "oracle", "core"),
  makeService("Universe Says Hello", "oracle", "core"),
  makeService("Ancestor Messages", "oracle", "core"),
  makeService("Mediumship Reading", "oracle", "core"),
  makeService("Psychic Reading", "oracle", "core"),
  makeService("Pendulum Reading", "oracle", "core"),
  makeService("Italian Playing Card Reading", "oracle", "core"),
  makeService("Runes Reading", "oracle", "core"),

  makeService("Akashic Reading", "esoteric", "core"),
  makeService("Akashic Records Reading", "esoteric", "core"),
  makeService("Past Life Reading", "esoteric", "core"),
  makeService("Soul Contract Reading", "esoteric", "core"),
  makeService("Ancestral Connection", "esoteric", "core"),
  makeService("Spirit Communication", "esoteric", "core"),
  makeService("Psychic Guidance", "esoteric", "core"),
  makeService("Soul Purpose", "esoteric", "core"),
  makeService("Higher Self Connection", "esoteric", "core"),
  makeService("Spiritual Awakening Guidance", "esoteric", "core"),
  makeService("Manifestation Guidance", "esoteric", "core"),
  makeService("Dream Interpretation", "esoteric", "core"),
  makeService("Symbol / Sign Interpretation", "esoteric", "core"),

  makeService("Intuitive Life Coaching", "coaching", "core"),
  makeService("Spiritual Life Coaching", "coaching", "core"),
  makeService("1:1 Mentorship", "coaching", "core"),
  makeService("Tarot + Coaching", "coaching", "core"),
  makeService("Tarot + Mentorship", "coaching", "core"),
  makeService("Life Coaching + Reiki", "coaching", "healing"),
  makeService("Personal Growth Guidance", "coaching", "core"),
  makeService("Self-Discovery Sessions", "coaching", "shadow"),
  makeService("Purpose and Direction Sessions", "coaching", "core"),
  makeService("Decision-Making Support", "coaching", "core"),
  makeService("Relationship Guidance", "coaching", "love"),
  makeService("Spiritual Growth Mentorship", "coaching", "core"),

  makeService("Full Moon Rituals", "rituals", "healing"),
  makeService("New Moon Rituals", "rituals", "healing"),
  makeService("Manifestation Rituals", "rituals", "core"),
  makeService("Intention Setting", "rituals", "core"),
  makeService("Candle Rituals", "rituals", "core"),
  makeService("Bay Leaf Rituals", "rituals", "core"),
  makeService("Abundance Rituals", "rituals", "core"),
  makeService("Love and Self-Love Rituals", "rituals", "love"),
  makeService("Protection Rituals", "rituals", "healing"),
  makeService("Energy Cleansing Rituals", "rituals", "healing"),
  makeService("Cord-Cutting Rituals", "rituals", "healing"),
  makeService("Crystal Rituals", "rituals", "healing"),
  makeService("Personalized Ritual Guidance", "rituals", "core"),

  makeService("In-Person Reading", "formats", "core", { formats: ["In-person"] }),
  makeService("Zoom Reading", "formats", "core", { formats: ["Video"] }),
  makeService("Video Call Reading", "formats", "core", { formats: ["Video"] }),
  makeService("Live Audio Reading", "formats", "core", { formats: ["Audio"] }),
  makeService("Phone Reading", "formats", "core", { formats: ["Audio"] }),
  makeService("Pre-Recorded Video Reading", "formats", "core", {
    formats: ["Recorded video"],
  }),
  makeService("Pre-Recorded Audio Reading", "formats", "core", {
    formats: ["Recorded audio"],
  }),
  makeService("Email Reading", "formats", "digital", { formats: ["Email"] }),
  makeService("Written / Text Reading", "formats", "digital", { formats: ["Chat"] }),
  makeService("Downloadable PDF Reading", "formats", "digital", { formats: ["PDF"] }),

  makeService("Deep Transformation Session", "premium", "healing"),
  makeService("Tarot + Healing Experience", "premium", "healing"),
  makeService("Tarot + Coaching Experience", "premium", "core"),
  makeService("Tarot + Reiki + Guidance", "premium", "healing"),
  makeService("Tarot + Astrology + Numerology", "premium", "astrology"),
  makeService("Full Spiritual Guidance Session", "premium", "core"),
  makeService("Personalized Spiritual Blueprint", "premium", "astrology"),
  makeService("Year-Ahead Deep Dive", "premium", "forecast"),
  makeService("Multi-Session Healing Journey", "premium", "healing"),
  makeService("3-Session Transformation Journey", "premium", "shadow"),
  makeService("Personalized Spiritual Mentorship", "premium", "core"),

  makeService("Tarot Workshops", "groups", "group"),
  makeService("Beginner Tarot Workshops", "groups", "group"),
  makeService("Advanced Tarot Workshops", "groups", "group"),
  makeService("Tarot Masterclasses", "groups", "group"),
  makeService("Tarot Circles", "groups", "group"),
  makeService("Intuition Circles", "groups", "group"),
  makeService("Group Tarot Readings", "groups", "group"),
  makeService("Group Healing Sessions", "groups", "group"),
  makeService("Tarot Parties", "groups", "group"),
  makeService("Private Tarot Parties", "groups", "group"),
  makeService("Birthday Tarot Experiences", "groups", "group"),
  makeService("Bachelorette Tarot Experiences", "groups", "group"),
  makeService("Wedding Tarot Experiences", "groups", "group"),
  makeService("Corporate Wellness Experiences", "groups", "group"),
  makeService("Spiritual Retreats", "groups", "group"),
  makeService("Tarot Retreats", "groups", "group"),
  makeService("Summer / Seasonal Retreats", "groups", "group"),
  makeService("Private Gatherings", "groups", "group"),
  makeService("Small Group Experiences", "groups", "group"),
  makeService("Large Group Experiences", "groups", "group"),

  makeService("Downloadable Tarot Readings", "digital", "digital"),
  makeService("PDF Tarot Readings", "digital", "digital"),
  makeService("Tarot Journaling Guides", "digital", "digital"),
  makeService("Shadow Work Journals", "digital", "digital"),
  makeService("Tarot Spreads", "digital", "digital"),
  makeService("Tarot Cheat Sheets", "digital", "digital"),
  makeService("Guided Meditations", "digital", "digital"),
  makeService("Affirmation Guides", "digital", "digital"),
  makeService("Manifestation Guides", "digital", "digital"),
  makeService("Spiritual Workbooks", "digital", "digital"),
  makeService("Tarot Courses", "digital", "digital"),
  makeService("Reiki / Energy Healing Courses", "digital", "digital"),
  makeService("Self-Guided Healing Experiences", "digital", "digital"),
];

const HIDDEN_CATEGORIES = new Set<CategorySlug>(["forecast", "digital"]);

export const visibleCategories = categories.filter((c) => !HIDDEN_CATEGORIES.has(c.slug));

export function isCategoryVisible(slug: string) {
  return !HIDDEN_CATEGORIES.has(slug as CategorySlug);
}

export function getCategory(slug: string) {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat || HIDDEN_CATEGORIES.has(cat.slug)) return undefined;
  return cat;
}

export function getServicesByCategory(slug: CategorySlug) {
  if (HIDDEN_CATEGORIES.has(slug)) return [];
  return services.filter((s) => s.category === slug);
}

export function getService(category: string, slug: string) {
  if (HIDDEN_CATEGORIES.has(category as CategorySlug)) return undefined;
  return services.find((s) => s.category === category && s.slug === slug);
}

export function getSignatureServices() {
  return services.filter((s) => s.isSignature);
}

export function searchServices(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return services.filter((s) => {
    if (HIDDEN_CATEGORIES.has(s.category)) return false;
    const cat = categories.find((c) => c.slug === s.category);
    const hay = [s.name, s.description, s.forWhom, s.tags.join(" "), cat?.title]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function servicePath(service: Service) {
  return `/services/${service.category}/${service.slug}`;
}
