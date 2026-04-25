"use client";

import { motion } from "framer-motion";
import { DURATION, VIEWPORT } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) => (
  <div className={className}>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.header}
      transition={{ duration: DURATION.fast }}
      className={cn("text-2xl font-bold tracking-tight", titleClassName)}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT.header}
        transition={{ duration: DURATION.fast, delay: 0.05 }}
        className={cn("text-muted-foreground mt-1 text-sm", subtitleClassName)}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
