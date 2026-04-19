"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadge } from "./tech-badge";
import type { Project } from "@/data/types";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="ring-border relative flex h-full flex-col overflow-hidden shadow-sm ring-1">
        <div className="from-primary to-primary/60 h-1 w-full bg-gradient-to-r" />
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        </CardHeader>
        <CardContent className="grow">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.technologies.length > 6 && (
              <TechBadge name={`+${project.technologies.length - 6}`} variant="outline" />
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center gap-2 pt-0">
          <Button size="sm" asChild>
            <Link href={`/projects/${project.slug}`}>
              View Details
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
          {project.liveUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="ghost" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface CompactProjectCardProps {
  project: Project;
}

export function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
        },
      }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <Card className="bg-muted/30 hover:ring-primary/30 flex h-full flex-col transition-all hover:ring-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base">
              {project.title}
              <div className="flex gap-1.5">
                {project.liveUrl && (
                  <ExternalLink className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
                )}
                {project.githubUrl && (
                  <Github className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3 line-clamp-1 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <TechBadge key={tech} name={tech} className="text-[10px]" />
              ))}
              {project.technologies.length > 3 && (
                <TechBadge
                  name={`+${project.technologies.length - 3}`}
                  variant="outline"
                  className="text-[10px]"
                />
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
