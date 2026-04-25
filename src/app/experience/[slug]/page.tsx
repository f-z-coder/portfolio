import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { TechBadge } from "@/components/shared/tech-badge";
import { ActionLink } from "@/components/shared/action-link";
import { getAllExperiences, getExperienceBySlug } from "@/data/experience";
import { ExperienceDetailContent } from "./content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllExperiences().map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};

  return {
    title: `${experience.title} at ${experience.company} - Faiz Shaikh`,
    description: experience.summary,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const allExperiences = getAllExperiences().filter((e) => e.slug !== slug);

  return (
    <ContentContainer>
      <BackButton href="/#experience" label="Back to Experience" />

      <ExperienceDetailContent>
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {experience.isCurrent && <Badge variant="default">Current Role</Badge>}
            <Badge variant="outline">{experience.period}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{experience.title}</h1>
          <p className="text-muted-foreground mt-1 text-lg">
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {experience.company}
            </a>
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">What I Did</h2>
          <ul className="space-y-3">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Other Experiences */}
        {allExperiences.length > 0 && (
          <>
            <Separator className="my-8" />
            <div>
              <h2 className="mb-4 text-xl font-semibold">Other Experience</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {allExperiences.map((exp) => (
                  <Link key={exp.slug} href={`/experience/${exp.slug}`}>
                    <Card className="hover:ring-primary/30 transition-all hover:ring-1">
                      <CardHeader className="p-4 pb-1">
                        <CardTitle className="flex items-center justify-between text-base">
                          {exp.company}
                          <ArrowRight className="h-4 w-4" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-1">
                        <p className="text-muted-foreground text-sm">{exp.title}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </ExperienceDetailContent>
    </ContentContainer>
  );
}
