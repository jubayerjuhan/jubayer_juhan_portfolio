export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

/**
 * Replace quotes with real testimonials from managers, colleagues, or clients
 * when you have written permission to publish them.
 */
export const testimonials: Testimonial[] = [
  {
    id: "goodhive-lead",
    quote:
      "Jubayer ships end-to-end without waiting on handoffs. He takes ambiguous product problems, breaks them into deliverable slices, and owns them through production — especially valuable in a founding team.",
    name: "Product Lead",
    role: "Engineering & Product",
    company: "Goodhive",
  },
  {
    id: "roko-contract",
    quote:
      "Reliable on contract work across time zones. Strong full-stack execution, clear communication async, and he proactively flags risks before they become blockers.",
    name: "Technical Stakeholder",
    role: "Automation Platform",
    company: "Roko Automations",
  },
  {
    id: "my-instructor-founder",
    quote:
      "Built our marketplace from scratch — search, booking, reviews, and APIs. He thinks in user outcomes, not just tickets, which made a real difference at early stage.",
    name: "Founder",
    role: "Product",
    company: "My Instructor",
  },
];
