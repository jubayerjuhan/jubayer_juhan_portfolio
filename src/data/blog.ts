export type BlogBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-web3-ux-that-feels-human",
    title: "Shipping Web3 UX That Feels Human",
    excerpt:
      "What I learned building wallet flows and on-chain actions for non-crypto users at a production Web3 startup.",
    publishedAt: "2025-11-12",
    readTimeMinutes: 6,
    tags: ["Web3", "UX", "Product"],
    content: [
      {
        type: "paragraph",
        content:
          "Most Web3 products fail in the first 30 seconds — not because the idea is wrong, but because the wallet experience is confusing. At Goodhive, our goal was to make on-chain recruiting feel as normal as signing into LinkedIn.",
      },
      {
        type: "heading",
        content: "Start with the job, not the chain",
      },
      {
        type: "paragraph",
        content:
          "Users don't wake up wanting to sign transactions. They want to post a role, apply, or verify credentials. We mapped every blockchain touchpoint back to a clear user job and hid everything else behind progressive disclosure.",
      },
      {
        type: "list",
        items: [
          "Plain-language labels instead of protocol jargon",
          "Explicit network and fee context before confirmation",
          "Recovery paths for rejected or failed transactions",
        ],
      },
      {
        type: "heading",
        content: "Treat errors as product features",
      },
      {
        type: "paragraph",
        content:
          "A failed transaction isn't an edge case in Web3 — it's Tuesday. We invested in retry flows, support copy, and logging that helps both users and engineers understand what went wrong without opening Etherscan.",
      },
      {
        type: "paragraph",
        content:
          "The result: fewer drop-offs, faster support cycles, and a product that crypto-native and crypto-curious users can both use.",
      },
    ],
  },
  {
    slug: "full-stack-ownership-in-lean-teams",
    title: "Full-Stack Ownership in Lean Teams",
    excerpt:
      "Why wearing multiple hats works when you optimize for outcomes, not ticket throughput.",
    publishedAt: "2025-09-03",
    readTimeMinutes: 5,
    tags: ["Startups", "Engineering", "Remote"],
    content: [
      {
        type: "paragraph",
        content:
          "After 3+ years in remote startups, the pattern is consistent: the teams that ship fastest aren't the ones with the most specialists — they're the ones with clear ownership boundaries and low coordination tax.",
      },
      {
        type: "heading",
        content: "Own outcomes, not layers",
      },
      {
        type: "paragraph",
        content:
          "Full-stack doesn't mean doing everything at once. It means you can take a user problem from discovery to production without waiting on three handoffs. That changes how you estimate, how you communicate, and how you design APIs.",
      },
      {
        type: "list",
        items: [
          "Design APIs you'd want to consume six months later",
          "Ship vertical slices — UI, API, and data together",
          "Document decisions in PRs, not separate wiki pages nobody reads",
        ],
      },
      {
        type: "heading",
        content: "Async is a feature",
      },
      {
        type: "paragraph",
        content:
          "Remote-first teams win when work is written down: RFCs, Loom walkthroughs, and crisp acceptance criteria. I've worked across Bangladesh, Australia, and France time zones — clarity beats overlap every time.",
      },
    ],
  },
  {
    slug: "building-field-ready-mobile-flows",
    title: "Building Field-Ready Mobile Flows",
    excerpt:
      "Lessons from shipping a technician app for property compliance — photos, signatures, and flaky connectivity.",
    publishedAt: "2025-07-18",
    readTimeMinutes: 7,
    tags: ["React Native", "Mobile", "PropTech"],
    content: [
      {
        type: "paragraph",
        content:
          "Technician apps live in the real world: bright sunlight, one hand on a ladder, and 3G that disappears between properties. RentalEase's mobile app had to work when the CRM's perfect connectivity assumptions didn't.",
      },
      {
        type: "heading",
        content: "Optimize for the worst network",
      },
      {
        type: "paragraph",
        content:
          "We designed upload flows with visible progress, resumable states, and clear failure messages. Users shouldn't wonder if a photo uploaded — the UI should tell them explicitly.",
      },
      {
        type: "list",
        items: [
          "Chunked uploads with retry for inspection photos",
          "Offline-tolerant job lists with sync indicators",
          "Signature capture flows that minimize taps and mis-taps",
        ],
      },
      {
        type: "heading",
        content: "Match mental models from the CRM",
      },
      {
        type: "paragraph",
        content:
          "Field staff often switch between admin dashboards and mobile. Shared terminology, status colors, and job states reduced training time and support tickets.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
