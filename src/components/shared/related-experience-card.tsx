import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/data/types";

interface RelatedExperienceCardProps {
  experience: Experience;
}

export const RelatedExperienceCard = ({ experience }: RelatedExperienceCardProps) => (
  <Link href={`/experience/${experience.slug}`}>
    <Card className="hover:ring-primary/30 transition-all hover:ring-1">
      <CardHeader className="p-4 pb-1">
        <CardTitle className="flex items-center justify-between text-base">
          {experience.company}
          <ArrowRight className="h-4 w-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-1">
        <p className="text-muted-foreground text-sm">{experience.title}</p>
      </CardContent>
    </Card>
  </Link>
);
