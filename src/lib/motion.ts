import type { Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Transform-only reveals — text stays visible if mobile Safari skips the animation */
export const fadeInUp: Variants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: {},
  visible: {
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { x: -20 },
  visible: {
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.98 },
  visible: {
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.12,
} as const;
