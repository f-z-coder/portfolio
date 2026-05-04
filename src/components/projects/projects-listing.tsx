"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/shared/project-card";
import { categoryLabels, getAllProjects, getProjectCategories } from "@/data/projects";
import { DURATION } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/data/types";

const allProjects = getAllProjects();
const categories = getProjectCategories();
type CategoryKey = (typeof categories)[number];

export const ProjectsListing = () => {
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
    <>
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
    </>
  );
};
