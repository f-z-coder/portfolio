"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ArrowUpRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllProjects } from "@/data/projects";
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
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-16">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Home
      </Link>

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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="group-hover:text-primary text-base transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.isFeatured && (
                        <Star className="text-primary h-3.5 w-3.5 shrink-0 fill-current" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3 line-clamp-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((t) => (
                        <Badge key={t} variant="secondary" className="text-[10px]">
                          {t}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-[10px]">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <ExternalLink className="text-muted-foreground h-3.5 w-3.5" />
                      )}
                      {project.githubUrl && (
                        <Github className="text-muted-foreground h-3.5 w-3.5" />
                      )}
                      <ArrowUpRight className="text-muted-foreground ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
