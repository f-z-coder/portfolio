"use client";

import { motion } from "framer-motion";
import { DURATION, EASE, OFFSET, VIEWPORT } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <motion.h2
      initial={{ opacity: 0, y: OFFSET.xs }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.header}
      transition={{ duration: DURATION.fast, ease: EASE }}
      className="text-2xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: OFFSET.xs }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.header}
      transition={{ duration: DURATION.fast, delay: 0.05, ease: EASE }}
      className="text-muted-foreground text-sm"
    >
      {subtitle}
    </motion.p>
  </div>
);
