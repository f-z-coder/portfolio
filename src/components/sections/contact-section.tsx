"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";

export function ContactSection() {
  return (
    <section id="contact" className="pb-10">
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="bg-card rounded-2xl border p-8 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight">Let&apos;s work together</h2>
        <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm leading-relaxed">
          Have an interesting project or opportunity? I&apos;m always open to discussing new ideas
          and collaborations.
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6">
          <Button size="lg" className="gap-2 rounded-xl px-8 shadow-md" asChild>
            <Link href={contactInfo.find((c) => c.icon === "Mail")!.href}>
              <Mail className="h-4 w-4" />
              Send me an email
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
