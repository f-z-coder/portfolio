"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadgeList } from "./tech-badge-list";
import { ActionLink } from "./action-link";
import { CardActions } from "./card-actions";
import { DURATION, EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/types";

const MAX_TECH_BADGES = 5;

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: DURATION.normal, ease: EASE },
      },
    }}
  >
    <Card
      className={cn(
        "transition-shadow hover:shadow-md",
        experience.isCurrent && "ring-primary/20 ring-1"
      )}
    >
      <CardHeader className="pb-3">
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
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-sm">{experience.summary}</p>
        <TechBadgeList
          technologies={experience.technologies}
          max={MAX_TECH_BADGES}
          overflowSuffix="more"
          className="mb-4"
        />
        <CardActions>
          <ActionLink href={`/experience/${experience.slug}`} label="View Details" />
        </CardActions>
      </CardContent>
    </Card>
  </motion.div>
);
