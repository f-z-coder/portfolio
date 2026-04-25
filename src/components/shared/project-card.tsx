import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActionLink } from "@/components/shared/action-link";
import { TechBadgeList } from "@/components/shared/tech-badge-list";
import { CardActions } from "@/components/shared/card-actions";
import type { Project } from "@/data/types";

const MAX_TECH_BADGES = 4;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <Card className="group relative flex h-full flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={project.title}
        className="absolute inset-0 z-10 rounded-xl"
      />

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="group-hover:text-primary text-base transition-colors">
            {project.title}
          </CardTitle>
          <ArrowRight className="text-muted-foreground h-4 w-4 shrink-0 opacity-20 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <TechBadgeList technologies={project.technologies} max={MAX_TECH_BADGES} />

        {hasLinks && (
          <CardActions className="relative z-20">
            {project.liveUrl && <ActionLink href={project.liveUrl} label="View Live" external />}
            {project.githubUrl && (
              <ActionLink href={project.githubUrl} label="GitHub" external variant="outline" />
            )}
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};
