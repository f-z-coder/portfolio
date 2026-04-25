"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SkillPill } from "@/components/shared/skill-pill";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { skillCategories } from "@/data/skills";
import { STAGGER } from "@/lib/animations";

export const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionHeading title="Skills" subtitle="Technologies I work with daily" className="mb-10" />

    <StaggerGrid staggerDelay={STAGGER.small} className="grid gap-4 sm:grid-cols-2">
      {skillCategories.map(({ name, icon: Icon, skills }) => (
        <StaggerItem key={name} yOffset={16} className="bg-card rounded-xl border p-5">
          <div className="mb-3 flex items-center gap-2">
            <Icon className="text-primary h-4 w-4" />
            <h3 className="text-sm font-semibold">{name}</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} isPrimary={skill.isPrimary} />
            ))}
          </div>
        </StaggerItem>
      ))}
    </StaggerGrid>
  </SectionWrapper>
);
