import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActionLink } from "./action-link";
import { TechBadgeList } from "./tech-badge-list";
import { CardActions } from "./card-actions";
import type { Project } from "@/data/types";

const MAX_TECH_BADGES = 4;

interface ProjectCardProps {
  project: Project;
}

const stopPropagation = (e: React.MouseEvent) => e.preventDefault();

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
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
            <CardActions>
              {project.liveUrl && (
                <span onClick={stopPropagation}>
                  <ActionLink href={project.liveUrl} label="View Live" external />
                </span>
              )}
              {project.githubUrl && (
                <span onClick={stopPropagation}>
                  <ActionLink href={project.githubUrl} label="GitHub" external variant="outline" />
                </span>
              )}
            </CardActions>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
