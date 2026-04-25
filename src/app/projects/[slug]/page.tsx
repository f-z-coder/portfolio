import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { ActionLink } from "@/components/shared/action-link";
import { BulletList } from "@/components/shared/bullet-list";
import { DetailPageContent } from "@/components/shared/detail-page-content";
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

          <div className="mt-6 flex flex-wrap gap-2">
            {project.liveUrl && <ActionLink href={project.liveUrl} label="View Live" external />}
            {project.githubUrl && (
              <ActionLink href={project.githubUrl} label="GitHub" external variant="outline" />
            )}
          </div>
        </div>

        {project.features.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Features</h2>
            <BulletList items={project.features} />
          </div>
        )}

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <TechBadgeList technologies={project.technologies} className="gap-2" />
        </div>
      </DetailPageContent>
    </ContentContainer>
  );
};

export default ProjectDetailPage;
