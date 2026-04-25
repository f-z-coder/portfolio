"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { EASE, DURATION } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ContactLinksProps {
  animate?: boolean;
  itemClassName?: string;
}

export const ContactLinks = ({ animate = false, itemClassName }: ContactLinksProps) => {
  const linkClass = cn(
    "text-muted-foreground hover:text-foreground group flex w-full items-center gap-3 text-sm transition-colors",
    itemClassName
  );

  return (
    <>
      {contactInfo.map(({ icon: Icon, label, value, href }, i) => {
        const content = (
          <>
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span className="flex-1 truncate">{value}</span>
            <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
          </>
        );

        if (animate) {
          return (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.fast, delay: i * 0.07, ease: EASE }}
            >
              {content}
            </motion.a>
          );
        }

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {content}
          </a>
        );
      })}
    </>
  );
};
