import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/shared/back-button";
import { BulletList } from "@/components/shared/bullet-list";
import { ContentContainer } from "@/components/shared/content-container";
import { DetailPageContent } from "@/components/shared/detail-page-content";
import { DetailPageDescription } from "@/components/shared/detail-page-description";
import { DetailPageHeading } from "@/components/shared/detail-page-heading";
import { DetailSection } from "@/components/shared/detail-section";
import { ActionLink } from "@/components/shared/action-link";
import { RelatedExperienceCard } from "@/components/shared/related-experience-card";
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
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline">{experience.period}</Badge>
            {experience.isCurrent && <Badge variant="default">Current</Badge>}
          </div>
          <DetailPageHeading>{experience.title}</DetailPageHeading>
          <DetailPageDescription className="mt-3">
            <ActionLink
              href={experience.companyUrl}
              label={experience.company}
              external
              variant="text"
              className="text-base"
            />
          </DetailPageDescription>
        </div>

        <DetailSection title="What I Did">
          <BulletList items={experience.responsibilities} />
        </DetailSection>

        <DetailSection title="Tech Stack">
          <TechBadgeList technologies={experience.technologies} />
        </DetailSection>

        {others.length > 0 && (
          <>
            <Separator className="my-8" />
            <DetailSection title="Other Experience" className="mb-0">
              <div className="grid gap-3 sm:grid-cols-2">
                {others.map((exp) => (
                  <RelatedExperienceCard key={exp.slug} experience={exp} />
                ))}
              </div>
            </DetailSection>
          </>
        )}
      </DetailPageContent>
    </ContentContainer>
  );
};

export default ExperienceDetailPage;
