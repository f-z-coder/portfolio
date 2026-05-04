"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadgeList } from "@/components/shared/tech-badge-list";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/types";

const MAX_TECH_BADGES = 5;

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <Card
    className={cn(
      "group hover:ring-primary/30 relative transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-1",
      experience.isCurrent && "ring-primary/20 ring-1"
    )}
  >
    <Link
      href={`/experience/${experience.slug}`}
      aria-label={`${experience.title} at ${experience.company}`}
      className="focus-visible:ring-ring/50 absolute inset-0 z-10 rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    />

    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-2">
        <CardTitle className="group-hover:text-primary text-base transition-colors">
          {experience.company}
        </CardTitle>
        <div className="flex shrink-0 items-center gap-2">
          {experience.isCurrent && (
            <Badge variant="default" className="text-xs">
              Current
            </Badge>
          )}
          <ArrowRight className="text-muted-foreground h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
      <p className="text-muted-foreground text-sm">{experience.title}</p>
      <p className="text-muted-foreground mt-1 text-sm">{experience.period}</p>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4 text-sm">{experience.summary}</p>
      <TechBadgeList technologies={experience.technologies} max={MAX_TECH_BADGES} />
    </CardContent>
  </Card>
);
