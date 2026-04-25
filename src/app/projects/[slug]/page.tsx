import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { ProjectLinks } from "@/components/shared/project-links";
import { BulletList } from "@/components/shared/bullet-list";
import { DetailPageContent } from "@/components/shared/detail-page-content";
import { DetailSection } from "@/components/shared/detail-section";
import { TechBadgeList } from "@/components/shared/tech-badge-list";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => getAllProjects().map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} - ${siteConfig.name}`,
    description: project.description,
  };
};

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <ContentContainer>
      <BackButton href="/#projects" label="Back to Projects" />

      <DetailPageContent>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>

          <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} className="mt-6" />
        </div>

        {project.features.length > 0 && (
          <DetailSection title="Features">
            <BulletList items={project.features} />
          </DetailSection>
        )}

        <DetailSection title="Tech Stack">
          <TechBadgeList technologies={project.technologies} />
        </DetailSection>
      </DetailPageContent>
    </ContentContainer>
  );
};

export default ProjectDetailPage;
