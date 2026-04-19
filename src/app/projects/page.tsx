"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackButton } from "@/components/shared/back-button";
import { ProjectCard } from "@/components/shared/project-card";
import { getAllProjects } from "@/data/projects";
import { ContentContainer } from "@/components/shared/content-container";
import type { Project } from "@/data/types";

const allProjects = getAllProjects();
const categories = ["all", "fullstack", "frontend", "backend", "tool"] as const;
const categoryLabels: Record<string, string> = {
  all: "All",
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  tool: "Tools",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <ContentContainer>
      <BackButton href="/" label="Back to Home" />

      <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
      <p className="text-muted-foreground mt-2 mb-8 text-sm">
        Everything I&apos;ve built — {allProjects.length} projects and counting.
      </p>

      {/* Filter tabs */}
      <div className="bg-muted/50 mb-8 inline-flex gap-1 rounded-lg p-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`cursor-pointer rounded-md px-3 py-1.5 text-sm transition-all ${
              filter === cat
                ? "bg-background text-foreground font-medium shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project: Project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ContentContainer>
  );
}
