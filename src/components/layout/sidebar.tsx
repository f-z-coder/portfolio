"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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

const contactLinks = [
  {
    icon: Mail,
    label: siteConfig.social.email,
    href: `mailto:${siteConfig.social.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "+91 91126 77274",
    href: `tel:${siteConfig.social.phone}`,
    external: false,
  },
];

const socialLinks = [
  { Icon: Github, label: "GitHub", username: "f-z-coder", href: siteConfig.social.github },
  { Icon: Linkedin, label: "LinkedIn", username: "f-z-coder", href: siteConfig.social.linkedin },
  { Icon: XIcon, label: "X", username: "@fz_coder", href: siteConfig.social.twitter },
];

export function Sidebar() {
  return (
    <aside className="bg-sidebar border-sidebar-border relative flex flex-col px-6 py-8 lg:sticky lg:top-0 lg:h-screen lg:w-96 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:px-10 lg:py-12 lg:shadow-[4px_0_24px_rgba(0,0,0,0.35)]">
      <div className="from-sidebar pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-r to-transparent" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex h-full flex-col"
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
            <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
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
          {/* Divider */}
          <div className="border-border/60 border-t" />

          {/* Unified contact + social list */}
          <div className="space-y-0.5">
            {/* Email + Phone */}
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground group flex items-center gap-3 rounded-lg py-1.5 text-sm transition-colors"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            ))}

            {/* Thin inner separator */}
            <div className="border-border/40 my-1 border-t" />

            {/* GitHub, LinkedIn, X */}
            {socialLinks.map(({ Icon, label, username, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground group flex items-center gap-3 rounded-lg py-1.5 text-sm transition-colors"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="flex-1 text-xs">{username}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <Button size="sm" className="w-full gap-2" asChild>
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
