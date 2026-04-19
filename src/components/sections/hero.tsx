"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const techStack = ["React", "Go", "TypeScript", "Python", "Astro"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const floatingBadges = [
  { label: "Next.js", x: "10%", y: "20%", delay: 0 },
  { label: "Tailwind", x: "70%", y: "15%", delay: 0.5 },
  { label: "Node.js", x: "80%", y: "55%", delay: 1.0 },
  { label: "MongoDB", x: "20%", y: "70%", delay: 1.5 },
  { label: "Stripe", x: "55%", y: "75%", delay: 0.8 },
  { label: "Docker", x: "40%", y: "30%", delay: 1.2 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative container flex min-h-dvh items-center overflow-hidden py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/5 absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="bg-primary/3 absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full blur-[100px]" />
      </div>

      <div className="relative grid w-full items-center gap-12 lg:grid-cols-2">
        {/* Left: Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Full-Stack Developer
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">Faiz</span>
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
              Shaikh
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mt-6 max-w-lg text-lg sm:text-xl"
          >
            Building performant web experiences at{" "}
            <a
              href="https://last9.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Last9
            </a>
            . Leveraging AI to ship faster and deliver higher-quality code.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Decorative visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative hidden h-[500px] lg:block"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dotgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" className="fill-muted-foreground" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotgrid)" />
            </svg>
          </div>

          {/* Center glow */}
          <div className="from-primary/20 bg-gradient-radial absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full to-transparent blur-2xl" />

          {/* Floating badges */}
          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.label}
              className="absolute"
              style={{ left: badge.x, top: badge.y }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + badge.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              }}
            >
              <Badge variant="secondary" className="bg-card/80 shadow-sm backdrop-blur-sm">
                {badge.label}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
