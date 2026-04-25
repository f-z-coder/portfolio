import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/data/types";

interface RelatedExperienceCardProps {
  experience: Experience;
}

export const RelatedExperienceCard = ({ experience }: RelatedExperienceCardProps) => (
  <Link
    href={`/experience/${experience.slug}`}
    className="group focus-visible:ring-ring/50 block rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
  >
    <Card className="hover:ring-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-1">
      <CardHeader className="p-4 pb-1">
        <CardTitle className="flex items-center justify-between text-base">
          <span className="group-hover:text-primary transition-colors">{experience.company}</span>
          <ArrowRight className="text-muted-foreground h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-1">
        <p className="text-muted-foreground text-sm">{experience.title}</p>
      </CardContent>
    </Card>
  </Link>
);
