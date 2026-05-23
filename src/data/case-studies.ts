export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudy = {
  projectId: string;
  metaDescription: string;
  overview: string;
  sections: CaseStudySection[];
  outcomes: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "goodhive-platform": {
    projectId: "goodhive-platform",
    metaDescription:
      "Case study: building Web3 and AI product features at Goodhive — smart contracts, full-stack engineering, and production delivery.",
    overview:
      "At Goodhive, I work as a founding builder and senior product engineer on a decentralized recruitment platform. The product spans Web3 integrations, AI-assisted workflows, and a modern React/Next.js frontend — all shipped to real users in a fast-moving startup environment.",
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Traditional hiring platforms are opaque, slow, and trust-heavy. Goodhive set out to make talent matching more transparent on-chain while still feeling approachable to non-crypto users.",
          "The core challenge wasn't just blockchain — it was making complex systems feel simple, reliable, and fast enough for daily recruiting workflows.",
        ],
      },
      {
        title: "My role & contributions",
        paragraphs: [
          "I own significant slices of the product across frontend, backend integrations, and Web3 touchpoints — often end-to-end from idea to production.",
        ],
        bullets: [
          "Designed and implemented smart contract integration flows with clear UX for wallet connection and on-chain actions",
          "Built AI-powered product features that improve matching and recruiter workflows",
          "Shipped scalable Next.js/React interfaces with performance and accessibility in mind",
          "Collaborated async with a distributed team (Paris-based company, remote execution)",
        ],
      },
      {
        title: "Technical approach",
        paragraphs: [
          "We use a modern full-stack setup: Next.js and React on the frontend, Node.js services, AWS/GCP for infrastructure, and Solidity/ethers for on-chain logic.",
          "I prioritize incremental delivery — small, testable releases rather than big-bang launches — which fits startup velocity and reduces regression risk.",
        ],
        bullets: [
          "Component-driven UI with reusable patterns across recruiter and talent flows",
          "API boundaries between Web2 services and Web3 providers kept explicit and observable",
          "Feature flags and staged rollouts for higher-risk blockchain features",
        ],
      },
      {
        title: "Challenges overcome",
        paragraphs: [
          "Web3 UX is unforgiving — failed transactions, network switches, and wallet friction can kill adoption. We invested heavily in error states, retries, and plain-language copy.",
          "Balancing decentralization ideals with product pragmatism required constant tradeoffs: not everything belongs on-chain, and users care about speed first.",
        ],
      },
    ],
    outcomes: [
      "Production platform serving real recruiting use cases in Web3",
      "AI features integrated into live product workflows",
      "Sustainable full-stack ownership in a lean founding team",
    ],
  },
  "rentalease-platform": {
    projectId: "rentalease-platform",
    metaDescription:
      "Case study: RentalEase — multi-platform property compliance CRM, public subscription site, and technician mobile app for Australian rental agencies.",
    overview:
      "RentalEase is a property compliance platform for Australian rental agencies. I built across three surfaces: a role-based CRM, a public marketing and subscription website with Stripe billing, and a technician mobile app for field work — inspections, photos, signatures, and calendar sync.",
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Compliance workflows were fragmented: admins managed properties in one place, technicians used ad-hoc tools in the field, and billing lived elsewhere. Agencies needed one coherent system with strict role permissions.",
        ],
      },
      {
        title: "My role & contributions",
        paragraphs: [
          "I worked as a full-stack engineer delivering end-to-end features across web and mobile.",
        ],
        bullets: [
          "Built CRM workflows for admins, agencies, property managers, staff, and technicians",
          "Implemented Stripe subscription onboarding on the public site",
          "Shipped React Native / Expo flows for jobs, inspections, uploads, and e-signatures",
          "Integrated calendar sync and offline-friendly field workflows where possible",
        ],
      },
      {
        title: "Technical approach",
        paragraphs: [
          "The CRM uses React, TypeScript, Vite, and Redux Toolkit for predictable state across complex role-based views. The public site runs on Next.js with Stripe. The technician app uses Expo and React Native for cross-platform delivery.",
        ],
        bullets: [
          "Role-based access control modeled explicitly in UI and API contracts",
          "Shared design language between CRM and mobile for technician trust",
          "Incremental feature delivery aligned with agency onboarding milestones",
        ],
      },
      {
        title: "Challenges overcome",
        paragraphs: [
          "Field technicians need reliability on poor connectivity — we optimized upload flows, clear job states, and resilient error handling.",
          "Multi-role CRM complexity required careful information architecture so each persona sees only what they need.",
        ],
      },
    ],
    outcomes: [
      "Live CRM at crm.rentalease.com.au with agency workflows",
      "Public site and subscription flows at rentalease.com.au",
      "Technician app published on the App Store for field operations",
    ],
  },
  "my-instructor-app": {
    projectId: "my-instructor-app",
    metaDescription:
      "Case study: My Instructor — marketplace for learner drivers to discover, book, and review driving instructors in Australia.",
    overview:
      "My Instructor is a driving instructor marketplace built from scratch. I owned the full stack: discovery and search, booking flows, reviews, and the REST API backing the React frontend — delivered for a Melbourne-based product team.",
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Learner drivers struggled to find trustworthy instructors with transparent pricing and availability. The product needed search, filtering, booking, and social proof (reviews) in one cohesive experience.",
        ],
      },
      {
        title: "My role & contributions",
        paragraphs: [
          "As full-stack engineer, I built the platform from early architecture through launch-ready features.",
        ],
        bullets: [
          "Designed REST APIs for instructors, bookings, and reviews",
          "Implemented search, filter, and booking UX in React",
          "Built review and rating systems for trust and retention",
          "Owned MongoDB data modeling and Express.js backend structure",
        ],
      },
      {
        title: "Technical approach",
        paragraphs: [
          "React on the frontend, Node.js and Express on the API layer, MongoDB for flexible domain modeling during early product iteration.",
        ],
        bullets: [
          "API-first design so mobile or admin tools could extend later",
          "Validation and error handling tuned for booking-critical paths",
          "Iterative delivery with product feedback from Australian users",
        ],
      },
      {
        title: "Challenges overcome",
        paragraphs: [
          "Marketplace cold-start required clear instructor onboarding and discovery defaults.",
          "Booking edge cases (cancellations, availability conflicts) needed explicit state machines and user-visible status.",
        ],
      },
    ],
    outcomes: [
      "Production marketplace at myinstructor.com.au",
      "End-to-end ownership from API design to user-facing flows",
      "Foundation for scalable instructor and learner growth",
    ],
  },
};

export const caseStudyProjectIds = Object.keys(caseStudies);

export function getCaseStudy(projectId: string): CaseStudy | undefined {
  return caseStudies[projectId];
}
