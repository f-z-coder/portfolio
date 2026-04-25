import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/shared/back-button";
import { BulletList } from "@/components/shared/bullet-list";
import { ContentContainer } from "@/components/shared/content-container";
import { DetailPageContent } from "@/components/shared/detail-page-content";
import { ExternalLink } from "@/components/shared/external-link";
import { TechBadgeList } from "@/components/shared/tech-badge-list";
import { getAllExperiences, getExperienceBySlug } from "@/data/experience";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => getAllExperiences().map((exp) => ({ slug: exp.slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};
  return {
    title: `${experience.title} at ${experience.company} - ${siteConfig.name}`,
    description: experience.summary,
  };
};

const ExperienceDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const others = getAllExperiences().filter((e) => e.slug !== slug);

  return (
    <ContentContainer>
      <BackButton href="/#experience" label="Back to Experience" />

      <DetailPageContent>
        <div className="mb-8">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {experience.isCurrent && <Badge variant="default">Current Role</Badge>}
            <Badge variant="outline">{experience.period}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{experience.title}</h1>
          <p className="text-muted-foreground mt-1 text-lg">
            <ExternalLink href={experience.companyUrl}>{experience.company}</ExternalLink>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">What I Did</h2>
          <BulletList items={experience.responsibilities} />
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <TechBadgeList technologies={experience.technologies} className="gap-2" />
        </div>

        {others.length > 0 && (
          <>
            <Separator className="my-8" />
            <div>
              <h2 className="mb-4 text-xl font-semibold">Other Experience</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {others.map((exp) => (
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
      </DetailPageContent>
    </ContentContainer>
  );
};

export default ExperienceDetailPage;
