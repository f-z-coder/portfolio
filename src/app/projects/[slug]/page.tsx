import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { TechBadge } from "@/components/shared/tech-badge";
import { ActionLink } from "@/components/shared/action-link";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { ProjectDetailContent } from "./content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} - Faiz Shaikh`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <ContentContainer>
      <BackButton href="/#projects" label="Back to Projects" />

      <ProjectDetailContent>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.liveUrl && <ActionLink href={project.liveUrl} label="View Live" external />}
            {project.githubUrl && (
              <ActionLink href={project.githubUrl} label="GitHub" external variant="outline" />
            )}
          </div>
        </div>

        {/* Features */}
        {project.features.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </ProjectDetailContent>
    </ContentContainer>
  );
}
