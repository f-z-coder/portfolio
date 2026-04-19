"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

export function EducationSection() {
  return (
    <section id="education" className="pb-16 sm:pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-2 text-2xl font-bold tracking-tight"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="bg-card mt-8 rounded-xl border p-6"
      >
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
            <GraduationCap className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">{siteConfig.education.institution}</h3>
            <p className="text-muted-foreground mt-0.5 text-sm">{siteConfig.education.degree}</p>
            <div className="text-muted-foreground mt-3 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {siteConfig.education.period}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" />
                CGPA: {siteConfig.education.gpa}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
