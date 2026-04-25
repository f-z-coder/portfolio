"use client";

import { motion } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";
import { GmailIcon, LinkedInIcon, XIcon, GitHubIcon } from "@/components/icons/brand-icons";
import { contactInfo } from "@/data/contact";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail: GmailIcon,
  Phone,
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  X: XIcon,
};

interface ContactLinksProps {
  animate?: boolean;
  itemClassName?: string;
}

export function ContactLinks({ animate = false, itemClassName }: ContactLinksProps) {
  return (
    <>
      {contactInfo.map(({ icon, label, value, href }, i) => {
        const Icon = iconMap[icon];
        const className = cn(
          "text-muted-foreground hover:text-foreground group flex w-full items-center gap-3 text-sm transition-colors",
          itemClassName
        );
        const sharedProps = {
          href,
          className,
          target: "_blank" as const,
          rel: "noopener noreferrer",
        };
        const children = (
          <>
            {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
            <span className="flex-1 truncate">{value}</span>
            <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
          </>
        );

        if (animate) {
          return (
            <motion.a
              key={label}
              {...sharedProps}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              {children}
            </motion.a>
          );
        }

        return (
          <a key={label} {...sharedProps}>
            {children}
          </a>
        );
      })}
    </>
  );
}
