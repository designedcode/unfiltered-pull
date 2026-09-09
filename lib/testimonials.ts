export type Testimonial = {
  id: string;
  name: string;
  place: string;
  quote: string;
  topic: "Love" | "Closure" | "Healing" | "Life path";
  avatar: string;
  kind: "quote" | "screenshot";
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aanya M.",
    place: "Placeholder",
    quote:
      "I came in overthinking every text. The reading named the pattern without sugarcoating it, and I finally stopped waiting for a reply that was never coming.",
    topic: "Love",
    avatar: "/placeholders/avatar-01.jpg",
    kind: "quote",
  },
  {
    id: "t2",
    name: "Riya S.",
    place: "Placeholder",
    quote:
      "No-contact had me spinning. I needed honesty, not hope. The cards were clear about what I was clinging to, and that was the first real exhale.",
    topic: "Closure",
    avatar: "/placeholders/avatar-02.jpg",
    kind: "quote",
  },
  {
    id: "t3",
    name: "Meera K.",
    place: "Placeholder",
    quote:
      "Shadow work here did not feel dramatic. It felt like someone holding up a mirror and asking the question I had been avoiding.",
    topic: "Healing",
    avatar: "/placeholders/avatar-03.jpg",
    kind: "quote",
  },
  {
    id: "t4",
    name: "Ishita P.",
    place: "Placeholder",
    quote:
      "I asked about career and got direction I could actually use, not a vague destiny speech. That is why I came back.",
    topic: "Life path",
    avatar: "/placeholders/avatar-04.jpg",
    kind: "quote",
  },
  {
    id: "t5",
    name: "Client screenshot",
    place: "Replace later",
    quote:
      "Screenshot placeholder. Replace with a real client review. Sample: “Do they still think about me?” got a raw answer. I cried, then I booked the deeper session.",
    topic: "Love",
    avatar: "/placeholders/avatar-02.jpg",
    kind: "screenshot",
    image: "/placeholders/shot-01.jpg",
  },
  {
    id: "t6",
    name: "Client screenshot",
    place: "Replace later",
    quote:
      "Screenshot placeholder. Replace with a real voice-note or chat review. Sample: First Pull was free and still more honest than paid readings I have had elsewhere.",
    topic: "Closure",
    avatar: "/placeholders/avatar-03.jpg",
    kind: "screenshot",
    image: "/placeholders/shot-02.jpg",
  },
  {
    id: "t7",
    name: "N. R.",
    place: "Placeholder",
    quote:
      "I thought I was crazy for still caring. The session named attachment without shaming me. That was the relief I was looking for.",
    topic: "Healing",
    avatar: "/placeholders/avatar-04.jpg",
    kind: "quote",
  },
  {
    id: "t8",
    name: "Client screenshot",
    place: "Replace later",
    quote:
      "Screenshot placeholder. Replace with a real Instagram DM screenshot. Sample: Life Path helped me decide whether to stay or leave the job I kept calling a ‘sign’.",
    topic: "Life path",
    avatar: "/placeholders/avatar-01.jpg",
    kind: "screenshot",
    image: "/placeholders/shot-03.jpg",
  },
];

export const testimonialTopics = ["Love", "Closure", "Healing", "Life path"] as const;
