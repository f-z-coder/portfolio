"use client";

import { motion, type Variants } from "framer-motion";
import { DURATION, EASE, STAGGER, VIEWPORT, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  margin?: keyof typeof VIEWPORT;
}

export const StaggerGrid = ({
  children,
  className,
  staggerDelay = STAGGER.base,
  margin = "item",
}: StaggerGridProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT[margin]}
    variants={staggerContainer(staggerDelay)}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}

export const StaggerItem = ({
  children,
  className,
  yOffset = 20,
  duration = DURATION.fast,
}: StaggerItemProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
  };
  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
};
