import { CONTACT_EMAIL } from "@/constants/contact";

export const personal = {
  name: "Jubayer Juhan",
  title: "Full-Stack Product Engineer",
  tagline: "I build products end-to-end — across web, AI, and web3.",
  shortBio:
    "3+ years shipping at startups. Currently at Goodhive.io. I own the full stack — UI, backend, blockchain, AI. You hire one person, you get the whole product.",
  location: "Chattogram, Bangladesh",
  availability: "Open to remote roles",
  email: CONTACT_EMAIL,
  linkedin: "https://linkedin.com/in/jubayerjuhan",
  github: "https://github.com/jubayerjuhan",
  resume: "/resume.pdf",
  twitter: "",
  website: "https://jubayerjuhan.com",
};

export const hero = {
  headline: "Full-Stack Product Engineer",
  subheadline: "Ship faster. Break less. Own more.",
  description:
    "Most engineers write code. I build products. 3+ years of startup shipping — web, AI, web3. Ready to do it for your team.",
  proofPoints: [
    { label: "Years Remote", value: "3+" },
    { label: "Current Role", value: "Product Eng." },
    { label: "Stack", value: "Full-Stack" },
    { label: "NASA Award", value: "🏆 1st" },
  ],
  primaryCTA: { label: "Hire Me", href: "#contact" },
  secondaryCTA: { label: "See My Work", href: "#projects" },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a full-stack engineer who genuinely enjoys building things — not just writing code, but figuring out what should be built and why. That's the part I find interesting.",
    "Been working remotely for 3+ years, currently at Goodhive.io where we're doing web3 and AI stuff. I also run a small tech business on the side, which keeps things interesting. Outside of work, I'm usually tinkering with something new or deep in a rabbit hole I didn't plan to fall into.",
  ],
  highlights: [
    { icon: "Briefcase", label: "Product Engineer @ Goodhive.io", sublabel: "~2 years" },
    { icon: "Globe", label: "Remote-first from day one", sublabel: "3+ years" },
    { icon: "Cpu", label: "Web3, AI & full-stack", sublabel: "Current focus" },
    { icon: "Rocket", label: "Also running my own thing", sublabel: "Ongoing" },
  ],
};

export const experience = [
  {
    id: "goodhive",
    role: "Founding Builder & Senior Product Engineer",
    company: "Goodhive",
    companyUrl: "https://www.goodhive.io/about-us",
    companyLogo: "/company-logos/goodhive.ico",
    period: "Jun 2023 – Present",
    duration: "Paris, France",
    description:
      "Revolutionizing how companies and talent connect in the Web3 space. We're creating a decentralized, transparent, and efficient recruitment platform that empowers both employers and job seekers on the blockchain.",
    highlights: [
      "Building scalable Web3 products and user experiences",
      "Creating a decentralized recruitment platform",
      "Empowering employers and job seekers via blockchain",
    ],
    tags: ["Next.js", "React", "Solidity", "Web3", "AI", "Google Cloud", "Node.js", "AWS"],
  },
  {
    id: "roko-automations",
    role: "Full Stack Engineer (Contract)",
    company: "Roko Automations",
    companyUrl: "https://rokoautomations.com/",
    companyLogo: "/company-logos/roko-automations.png",
    period: "Sept 2023 – Nov 2025",
    duration: "Melbourne, Australia",
    description:
      "Worked as a full stack engineer on contract, delivering remote development and scalable automation solutions.",
    highlights: [
      "Contract full-stack engineering work",
      "Delivered robust automation solutions",
      "Remote collaboration with Melbourne-based team",
    ],
    tags: ["React", "Node.js", "TypeScript", "Google Cloud", "Next.js", "React Native", "AWS"],
  },
  {
    id: "my-instructor",
    role: "Full Stack Engineer",
    company: "My Instructor PTY LTD",
    companyUrl: "https://www.myinstructor.com.au",
    companyLogo: "/company-logos/my-instructor.png",
    period: "Jul 2022 – May 2023",
    duration: "Melbourne, Australia",
    description:
      "Built a driving instructor finding app from scratch. Owned the end-to-end development of the platform, from discovery to booking systems.",
    highlights: [
      "Built the entire application from scratch",
      "Instructor discovery & booking flow",
      "Full-stack ownership across web & API",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "React Native"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "SASS / SCSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Heroku", "Cloudinary", "Vercel"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "PostgreSQL", "Git", "GitHub", "Figma"],
  },
  {
    category: "Web3 & Blockchain",
    items: ["Solidity", "Smart Contracts", "Ethereum", "Web3.js", "ethers.js"],
  },
  {
    category: "AI & Integrations",
    items: ["Gemini API", "OpenAI API", "AI feature development", "Prompt engineering", "LLM integrations"],
  },
];

export const projects = [
  {
    id: "goodhive-platform",
    featured: true,
    name: "Goodhive.io",
    tagline: "Web3 + AI product — live in production",
    summary:
      "Full product ownership at a web3/AI startup. Built smart contract integrations, AI features, and scalable frontend — shipped to real users.",
    problem:
      "Making blockchain products feel human — and actually work.",
    role: "Product Engineer",
    stack: ["Next.js", "React", "Solidity", "Web3", "Node.js", "AWS", "AI"],
    highlights: [
      "Smart contract development & integration",
      "AI-powered product features",
      "Full-stack product engineering",
    ],
    links: {
      live: "https://goodhive.io",
      github: "",
      caseStudy: "",
    },
    category: "Web3 / AI",
  },
  {
    id: "rentalease-platform",
    featured: true,
    name: "RentalEase",
    tagline: "Compliance CRM, Public Site, and Technician App",
    summary:
      "Built a multi-platform property compliance system for Australian rental agencies, spanning a role-based CRM, subscription website, and technician mobile app.",
    problem:
      "Property compliance workflows were fragmented across admin teams, field technicians, and billing systems.",
    role: "Full-Stack Engineer",
    stack: ["React", "TypeScript", "Vite", "Redux Toolkit", "Next.js", "Stripe", "Expo", "React Native"],
    highlights: [
      "Built role-based CRM workflows for admins, agencies, property managers, staff, and technicians",
      "Shipped technician mobile flows for jobs, inspections, calendar sync, photo uploads, and signatures",
      "Implemented public subscription onboarding and Stripe billing flows",
    ],
    links: {
      live: "https://rentalease.com.au",
      github: "",
      caseStudy: "",
    },
    extraLinks: [
      {
        label: "CRM",
        href: "https://crm.rentalease.com.au/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/rentalease-technician/id6757342771",
      },
    ],
    category: "PropTech / SaaS",
  },
  {
    id: "clever-class",
    featured: true,
    confidential: true,
    name: "Clever Class",
    tagline: "AI tutoring product with modern student workflows",
    summary:
      "Contributed to Clever Class, an AI-assisted learning product with polished student experiences, billing flows, and responsive product UI built for real usage.",
    problem:
      "Online tutoring products need to feel interactive, trustworthy, and frictionless across learning and billing journeys.",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Vite", "Redux Toolkit", "Firebase", "Paddle", "Gradio", "Framer Motion"],
    highlights: [
      "Built modern student-facing product flows for AI-assisted learning experiences",
      "Integrated state management, authentication, and app-level frontend architecture",
      "Worked across payments and UI polish for a production-minded learning platform",
    ],
    links: {
      live: "",
      github: "",
      caseStudy: "",
    },
    category: "EdTech / AI",
  },
  {
    id: "my-instructor-app",
    featured: true,
    name: "My Instructor",
    tagline: "Marketplace. Shipped.",
    summary:
      "Discovery, booking, and review platform connecting learner drivers with verified instructors. Built the core product frontend to backend.",
    problem:
      "Finding a good driving instructor was broken. This platform fixed it.",
    role: "Full-Stack Engineer",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Search, filter & booking flows",
      "Review & rating system",
      "REST API design & implementation",
    ],
    links: {
      live: "https://www.myinstructor.com.au",
      github: "",
      caseStudy: "",
    },
    category: "Marketplace",
  },
];

export const awards = [
  {
    id: "nasa-space-apps",
    title: "1st Runner Up",
    event: "NASA International Space Apps Challenge",
    team: "Team Celestial Six",
    location: "Chattogram, Bangladesh",
    date: "October 1–3, 2021",
    description:
      "World's largest global hackathon — organized by NASA. Built a real-world solution in 48 hours and placed 1st Runner Up at the regional level.",
    logo: "/nasa-logo.png",
    highlight: true,
  },
];

export const values = [
  {
    icon: "Layers",
    title: "Full-stack ownership",
    description:
      "UI to infrastructure. No hand-offs, no silos. One person, full product.",
  },
  {
    icon: "Zap",
    title: "Startup speed",
    description:
      "3 years of remote startups. Comfortable with ambiguity. I ship — then iterate.",
  },
  {
    icon: "Brain",
    title: "Product thinking",
    description:
      "I ask 'why are we building this?' before 'how?' — and that changes everything.",
  },
  {
    icon: "Globe",
    title: "Remote-first",
    description:
      "Async by default. Strong ownership. I've worked remote from day one — I know how to make it work.",
  },
  {
    icon: "Code2",
    title: "Emerging tech",
    description:
      "Web3, AI, modern stacks. I move fast into new technical territory when it matters.",
  },
  {
    icon: "Target",
    title: "Small team multiplier",
    description:
      "In lean teams, I wear multiple hats. I don't wait for perfect specs — I ship.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const seo = {
  title: "Jubayer Juhan — Full-Stack Product Engineer",
  description:
    "Full-stack product engineer. 3+ years remote startup experience. React, Next.js, Node.js, Web3, AI. Currently at Goodhive.io. Open to remote roles.",
  keywords: [
    "Jubayer Juhan",
    "Full-Stack Engineer",
    "Product Engineer",
    "Remote Engineer",
    "Next.js Developer",
    "React Developer",
    "Web3 Engineer",
    "AI Engineer",
    "Blockchain Developer",
    "Startup Engineer",
    "Bangladesh Developer",
  ],
  ogImage: "/og-image.png",
  twitterHandle: "",
};
