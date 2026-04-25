"use client";

import { motion } from "framer-motion";
import { ContactLinkContent } from "@/components/shared/contact-link-content";
import { ExternalLink } from "@/components/shared/external-link";
import { contactInfo } from "@/data/contact";
import { EASE, DURATION } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ContactLinksProps {
  animate?: boolean;
  itemClassName?: string;
}

export const ContactLinks = ({ animate = false, itemClassName }: ContactLinksProps) => {
  const linkClass = cn(
    "text-muted-foreground hover:text-foreground group flex w-full items-center gap-3 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
    itemClassName
  );

  return (
    <>
      {contactInfo.map(({ icon, label, value, href }, i) => {
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
              <ContactLinkContent icon={icon} value={value} />
            </motion.a>
          );
        }

        return (
          <ExternalLink key={label} href={href} className={linkClass}>
            <ContactLinkContent icon={icon} value={value} />
          </ExternalLink>
        );
      })}
    </>
  );
};
