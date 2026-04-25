"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { ProjectCard } from "@/components/shared/project-card";
import { categoryLabels, getAllProjects, getProjectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/data/types";

const allProjects = getAllProjects();
const categories = getProjectCategories();
type CategoryKey = (typeof categories)[number];

const ProjectsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = (searchParams.get("category") ?? "all") as CategoryKey;
  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === (filter as ProjectCategory));

  const selectCategory = (cat: CategoryKey) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.replace(`/projects?${params.toString()}`, { scroll: false });
  };

  return (
    <ContentContainer>
      <BackButton href="/" label="Back to Home" />

      <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
      <p className="text-muted-foreground mt-2 mb-8 text-sm">
        Everything I&apos;ve built — {allProjects.length} projects and counting.
      </p>

      <div className="bg-muted/50 mb-8 inline-flex gap-1 rounded-lg p-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => selectCategory(cat)}
            className={cn(
              "cursor-pointer rounded-md px-3 py-1.5 text-sm transition-all",
              filter === cat
                ? "bg-background text-foreground font-medium shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
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
};

const ProjectsPage = () => (
  <Suspense>
    <ProjectsContent />
  </Suspense>
);

export default ProjectsPage;
