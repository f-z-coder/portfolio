"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/shared/experience-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { StaggerGrid } from "@/components/shared/stagger-grid";
import { getAllExperiences } from "@/data/experience";
import { DURATION, EASE, STAGGER, VIEWPORT } from "@/lib/animations";

const experiences = getAllExperiences();

export const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionHeading
      title="Experience"
      subtitle="Where I've worked and what I've built"
      className="mb-10"
      titleClassName="mb-2"
      subtitleClassName="text-sm"
    />

    <div className="relative">
      <motion.div
        className="bg-border absolute top-5 bottom-0 left-0 hidden w-0.5 md:left-1/2 md:block md:-translate-x-px"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={VIEWPORT.section}
        transition={{ duration: DURATION.emphasis, ease: EASE }}
        style={{ originY: 0 }}
      />

      <StaggerGrid staggerDelay={STAGGER.loose} margin="section" className="relative space-y-12">
        {experiences.map((exp, index) => (
          <div key={exp.slug} className="relative flex items-start md:justify-center">
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
            <div
              className={`w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
              }`}
            >
              <ExperienceCard experience={exp} index={index} />
            </div>
          </div>
        ))}
      </StaggerGrid>
    </div>
  </SectionWrapper>
);
