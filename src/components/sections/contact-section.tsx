"use client";

import { motion } from "framer-motion";
import { ContactLinks } from "@/components/shared/contact-links";

export function ContactSection() {
  return (
    <section id="contact" className="pb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="bg-card relative overflow-hidden rounded-2xl border p-8 sm:p-10"
      >
        {/* Rose glow */}
        <div className="bg-primary/10 pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-primary/5 pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full blur-2xl" />

        <div className="relative flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Left — heading */}
          <div className="flex-1">
            <p className="text-muted-foreground mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Get in touch
            </p>
            <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              Let&apos;s work
              <br />
              <span className="text-primary">together.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              Open to new opportunities, freelance projects, and interesting conversations.
            </p>
          </div>

          {/* Divider — horizontal on mobile, vertical on sm+ */}
          <div className="border-border/50 border-t sm:self-stretch sm:border-t-0 sm:border-l" />

          {/* Right — all contact links */}
          <div className="flex flex-col justify-center gap-4 sm:min-w-[160px]">
            <ContactLinks animate />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
