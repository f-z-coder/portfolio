"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="group-hover:text-primary text-base transition-colors">
              {project.title}
            </CardTitle>
            <ArrowUpRight className="text-muted-foreground h-4 w-4 shrink-0 opacity-20 transition-opacity group-hover:opacity-100" />
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[11px]">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-[11px]">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="border-border/50 flex items-center gap-2 border-t pt-3">
              {project.liveUrl && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.liveUrl, "_blank");
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                >
                  View Live
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              )}
              {project.githubUrl && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.githubUrl, "_blank");
                  }}
                  className="border-border text-muted-foreground hover:text-foreground hover:bg-accent inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
