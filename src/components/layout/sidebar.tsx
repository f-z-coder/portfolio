"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { ContactLinks } from "@/components/shared/contact-links";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Sidebar() {
  return (
    <aside className="bg-sidebar border-sidebar-border flex flex-col lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:shadow-[4px_0_24px_rgba(0,0,0,0.35)] xl:w-96">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex h-full w-full max-w-4xl flex-col px-6 py-8 lg:mx-0 lg:max-w-none lg:px-10 lg:py-12"
      >
        {/* Photo with gradient blob */}
        <motion.div variants={fadeUp} className="relative mb-5 w-fit">
          <div className="from-primary/30 absolute -inset-3 rounded-3xl bg-linear-to-b to-transparent blur-2xl" />
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-md lg:h-36 lg:w-36">
            <Image
              src="/faiz-shaikh.jpg"
              alt="Faiz Shaikh"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name + Role */}
        <motion.div variants={fadeUp}>
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{siteConfig.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="bg-primary/10 text-primary -ml-2.5 rounded-full px-2.5 py-0.5 text-xs font-medium">
              Full-Stack Developer
            </span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p variants={fadeUp} className="text-muted-foreground mt-4 text-sm leading-relaxed">
          2+ years of experience in building fast and scalable web applications. I work across
          React, Go, TypeScript, and Python.
        </motion.p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom section */}
        <motion.div variants={fadeUp} className="mt-8 space-y-4">
          <div className="border-border/60 border-t" />

          <div className="space-y-0.5">
            <ContactLinks itemClassName="rounded-lg py-1.5" />
          </div>

          {/* Resume CTA */}
          <Button size="sm" className="-ml-3 w-fit gap-3" asChild>
            <a href={siteConfig.resumePath} download="Faiz_Shaikh_Resume.pdf">
              <Download className="h-3.5 w-3.5" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </aside>
  );
}
