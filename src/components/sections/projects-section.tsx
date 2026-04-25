"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects();

export const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <div className="mb-10 flex items-end justify-between">
      <SectionHeading title="Projects" subtitle="Featured work I'm proud of" />
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
      >
        View all
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>

    <StaggerGrid className="grid gap-4 sm:grid-cols-2">
      {featured.map((project) => (
        <StaggerItem key={project.slug} duration={0.45}>
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </StaggerGrid>
  </SectionWrapper>
);
