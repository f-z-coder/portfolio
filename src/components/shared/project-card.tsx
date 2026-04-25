import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectLinks } from "@/components/shared/project-links";
import { TechBadgeList } from "@/components/shared/tech-badge-list";
import type { Project } from "@/data/types";

const MAX_TECH_BADGES = 4;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group hover:ring-primary/30 relative flex h-full flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-1">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={project.title}
        className="focus-visible:ring-ring/50 absolute inset-0 z-10 rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      />

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="group-hover:text-primary text-base transition-colors">
            {project.title}
          </CardTitle>
          <ArrowRight className="text-muted-foreground h-4 w-4 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <TechBadgeList technologies={project.technologies} max={MAX_TECH_BADGES} />

        <ProjectLinks
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          className="border-border/50 relative z-20 border-t pt-3"
        />
      </CardContent>
    </Card>
  );
};
