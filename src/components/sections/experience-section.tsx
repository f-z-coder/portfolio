"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/shared/experience-card";
import { getAllExperiences } from "@/data/experience";

const experiences = getAllExperiences();

export function ExperienceSection() {
  return (
    <section id="experience" className="pb-16 sm:pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-2 text-2xl font-bold tracking-tight"
      >
        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-10 text-sm"
      >
        Where I&apos;ve worked and what I&apos;ve built
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="bg-border absolute top-5 bottom-0 left-0 hidden w-0.5 md:left-1/2 md:block md:-translate-x-px"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ originY: 0 }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="relative space-y-12"
        >
          {experiences.map((exp, index) => (
            <div key={exp.slug} className="relative flex items-start md:justify-center">
              {/* Timeline dot */}
              <motion.div
                className={`absolute top-5 left-0 z-10 hidden h-3 w-3 rounded-full md:left-1/2 md:block md:-translate-x-1.5 ${
                  exp.isCurrent ? "bg-primary" : "bg-muted-foreground/40"
                }`}
                variants={{
                  hidden: { scale: 0 },
                  visible: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  },
                }}
              />

              {/* Card wrapper with alternating sides */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                }`}
              >
                <ExperienceCard experience={exp} index={index} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
