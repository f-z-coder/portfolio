"use client";

import { motion, type Variants } from "framer-motion";
import { DURATION, EASE, OFFSET, VIEWPORT } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export const StaggerItem = ({
  children,
  className,
  yOffset = OFFSET.md,
  duration = DURATION.fast,
  delay = 0,
}: StaggerItemProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0, transition: { duration, ease: EASE, delay } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.item}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
