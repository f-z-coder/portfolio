import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { ProjectLinks } from "@/components/shared/project-links";
import { BulletList } from "@/components/shared/bullet-list";
import { DetailPageContent } from "@/components/shared/detail-page-content";
import { DetailPageDescription } from "@/components/shared/detail-page-description";
import { DetailPageHeading } from "@/components/shared/detail-page-heading";
import { DetailSection } from "@/components/shared/detail-section";
import { TechBadgeList } from "@/components/shared/tech-badge-list";
import { contacts } from "@/data/contact";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ogImage, seoKeywords } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/schema-markup";
import { truncate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => getAllProjects().map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `${siteConfig.url}/projects/${project.slug}`;
  const description = truncate(project.description);
  return {
    title: project.title,
    description,
    keywords: Array.from(new Set([...seoKeywords, ...project.technologies])),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      title: project.title,
      description,
      siteName: `${siteConfig.name} Portfolio`,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      creator: contacts.x.value,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
};

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Projects", url: `${siteConfig.url}/projects` },
    { name: project.title, url: `${siteConfig.url}/projects/${project.slug}` },
  ]);

  return (
    <ContentContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BackButton href="/projects" label="Back to Projects" />

      <DetailPageContent>
        <div className="mb-8">
          <DetailPageHeading>{project.title}</DetailPageHeading>
          <DetailPageDescription className="mt-3 text-lg leading-relaxed">
            {project.longDescription || project.description}
          </DetailPageDescription>
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
