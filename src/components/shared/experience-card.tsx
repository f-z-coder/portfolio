"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "./tech-badge";
import { ActionLink } from "./action-link";
import type { Experience } from "@/data/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
        },
      }}
    >
      <Card
        className={
          experience.isCurrent
            ? "ring-primary/20 ring-1 transition-shadow hover:shadow-md"
            : "transition-shadow hover:shadow-md"
        }
      >
        <CardHeader className="pb-3">
          <div>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg">{experience.company}</CardTitle>
              {experience.isCurrent && (
                <Badge variant="default" className="mt-1 shrink-0 text-xs">
                  Current
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm">{experience.title}</p>
            <p className="text-muted-foreground mt-1 text-xs">{experience.period}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm">{experience.summary}</p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {experience.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {experience.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{experience.technologies.length - 5} more
              </Badge>
            )}
          </div>
          <div className="border-border/50 flex items-center gap-2 border-t pt-3">
            <ActionLink href={`/experience/${experience.slug}`} label="View Details" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
