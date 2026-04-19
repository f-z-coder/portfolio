import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/shared/back-button";
import { TechBadge } from "@/components/shared/tech-badge";
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
    <div className="container mx-auto max-w-3xl pt-24 pb-16">
      <BackButton href="/#projects" label="Back to Projects" />

      <ProjectDetailContent>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  View Source
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
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
    </div>
  );
}
