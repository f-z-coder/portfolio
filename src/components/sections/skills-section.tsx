"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Database } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layers,
  Database,
};

export function SkillsSection() {
  return (
    <section id="skills" className="pb-16 sm:pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-2 text-2xl font-bold tracking-tight"
      >
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-10 text-sm"
      >
        Technologies I work with daily
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div
              key={category.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
                },
              }}
              className="bg-card rounded-xl border p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                {Icon && <Icon className="text-primary h-4 w-4" />}
                <h3 className="text-sm font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={
                      skill.isPrimary
                        ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground cursor-default rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                        : "bg-muted text-muted-foreground hover:text-foreground cursor-default rounded-md px-2.5 py-1 text-xs transition-colors"
                    }
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
