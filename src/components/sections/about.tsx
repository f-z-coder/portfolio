"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Building2, FolderOpen, Award } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { siteConfig } from "@/data/site";

const stats = [
  { icon: Building2, label: "Companies", value: "3" },
  { icon: FolderOpen, label: "Projects", value: "12+" },
  { icon: Award, label: "CGPA", value: "9.45" },
];

export function About() {
  return (
    <section id="about" className="container py-16 sm:py-24">
      <SectionHeader title="About Me" />
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[300px_1fr]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center"
        >
          <div className="ring-primary/30 relative h-64 w-64 overflow-hidden rounded-2xl ring-2">
            <Image
              src="/faiz-shaikh.jpg"
              alt="Faiz Shaikh"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Status */}
          <div className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-muted-foreground text-sm">Currently working at Last9</span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Full-Stack Developer with 2+ years of experience building performant, scalable web
            applications and APIs at early-stage startups. I work across the full stack &mdash; from{" "}
            <span className="text-foreground font-medium">React</span> and{" "}
            <span className="text-foreground font-medium">Astro</span> frontends to{" "}
            <span className="text-foreground font-medium">Go</span> backend APIs and{" "}
            <span className="text-foreground font-medium">Python</span> services. I leverage AI
            effectively to ship faster and deliver higher-quality code.
          </p>

          {/* Education */}
          <div className="mt-6 flex items-start gap-3">
            <GraduationCap className="text-primary mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="text-sm font-medium">{siteConfig.education.degree}</p>
              <p className="text-muted-foreground text-sm">
                {siteConfig.education.institution} &middot; {siteConfig.education.period} &middot;
                CGPA: {siteConfig.education.gpa}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-muted/50 flex flex-col items-center rounded-lg p-3"
              >
                <stat.icon className="text-primary mb-1 h-5 w-5" />
                <span className="text-xl font-bold">{stat.value}</span>
                <span className="text-muted-foreground text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
