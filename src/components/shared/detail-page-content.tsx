"use client";

import { motion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";

export const DetailPageContent = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: DURATION.fast, ease: EASE }}
  >
    {children}
  </motion.div>
);
