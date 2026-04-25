"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { education } from "@/data/education";
import { EASE, VIEWPORT } from "@/lib/animations";

export const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionHeading title="Education" titleClassName="mb-2" />

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.item}
      transition={{ duration: 0.45, ease: EASE }}
      className="bg-card mt-8 rounded-xl border p-6"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
          <GraduationCap className="text-primary h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">{education.institution}</h3>
          <p className="text-muted-foreground mt-0.5 text-sm">{education.degree}</p>
          <div className="text-muted-foreground mt-3 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {education.period}
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5" />
              CGPA: {education.gpa}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </SectionWrapper>
);
