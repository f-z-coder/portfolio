"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { DetailPageContent } from "@/components/shared/detail-page-content";
import { ProjectCard } from "@/components/shared/project-card";
import { categoryLabels, getAllProjects, getProjectCategories } from "@/data/projects";
import { DURATION } from "@/lib/animations";
import { DetailPageDescription } from "@/components/shared/detail-page-description";
import { DetailPageHeading } from "@/components/shared/detail-page-heading";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/data/types";

const allProjects = getAllProjects();
const categories = getProjectCategories();
type CategoryKey = (typeof categories)[number];

const ProjectsLoading = () => (
  <ContentContainer>
    <div className="bg-muted/50 h-9 w-32 animate-pulse rounded-lg" />
    <div className="bg-muted/50 mt-8 h-9 w-56 animate-pulse rounded-lg" />
    <div className="bg-muted/50 mt-3 h-4 w-72 animate-pulse rounded-md" />
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-muted/50 h-44 animate-pulse rounded-xl" />
      ))}
    </div>
  </ContentContainer>
);

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

      <DetailPageContent>
        <DetailPageHeading>All Projects</DetailPageHeading>
        <DetailPageDescription className="mt-2 mb-8 text-sm">
          Everything I&apos;ve built — {allProjects.length} projects and counting.
        </DetailPageDescription>

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

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed py-12 text-center">
            <p className="text-muted-foreground text-sm">No projects in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: DURATION.xfast }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </DetailPageContent>
    </ContentContainer>
  );
};

const ProjectsPage = () => (
  <Suspense fallback={<ProjectsLoading />}>
    <ProjectsContent />
  </Suspense>
);

export default ProjectsPage;
