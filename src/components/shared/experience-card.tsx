"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "./tech-badge";
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
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle className="text-lg">{experience.company}</CardTitle>
              <p className="text-muted-foreground text-sm">{experience.title}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {experience.isCurrent && (
                <Badge variant="default" className="text-xs">
                  Current
                </Badge>
              )}
              <Badge variant="outline" className="text-xs whitespace-nowrap">
                {experience.period}
              </Badge>
            </div>
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
            <Link
              href={`/experience/${experience.slug}`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
            >
              View Details
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
