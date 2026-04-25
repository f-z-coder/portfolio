import type { Variants } from "framer-motion";

export const EASE = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
  xfast: 0.2,
  fast: 0.4,
  normal: 0.5,
  slow: 0.6,
  emphasis: 0.8,
} as const;

export const SPRING = {
  snappy: { type: "spring" as const, stiffness: 300, damping: 15 },
} as const;

export const VIEWPORT = {
  header: { once: true, margin: "-80px" },
  section: { once: true, margin: "-100px" },
  item: { once: true, margin: "-60px" },
} as const;

export const STAGGER = {
  tight: 0.06,
  small: 0.08,
  base: 0.1,
  medium: 0.12,
  loose: 0.2,
} as const;

export const OFFSET = {
  xs: 10,
  sm: 16,
  md: 20,
  lg: 30,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: OFFSET.xs },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.fast, ease: EASE } },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: OFFSET.md },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.fast, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.fast, ease: EASE } },
};

export const staggerContainer = (
  staggerChildren: number = STAGGER.base,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const slideInX = (distance: number): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
});
