import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsListing } from "@/components/projects/projects-listing";
import { ProjectsListingSkeleton } from "@/components/projects/projects-listing-skeleton";
import { BackButton } from "@/components/shared/back-button";
import { ContentContainer } from "@/components/shared/content-container";
import { DetailPageContent } from "@/components/shared/detail-page-content";
import { DetailPageDescription } from "@/components/shared/detail-page-description";
import { DetailPageHeading } from "@/components/shared/detail-page-heading";
import { contacts } from "@/data/contact";
import { getAllProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ogImage } from "@/lib/metadata";

const description =
  "Browse the full catalog of projects by Faiz Shaikh — full-stack, frontend, and backend work spanning React, Next.js, Go, TypeScript, and Node.js.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/projects`,
    title: `Projects | ${siteConfig.name}`,
    description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${siteConfig.name}`,
    description,
    creator: contacts.x.value,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },
};

const ProjectsPage = () => {
  const total = getAllProjects().length;
  return (
    <ContentContainer>
      <BackButton href="/#projects" label="Back to Featured Projects" />

      <DetailPageContent>
        <DetailPageHeading>All Projects</DetailPageHeading>
        <DetailPageDescription className="mt-2 mb-8 text-sm">
          Everything I&apos;ve built — {total} projects and counting.
        </DetailPageDescription>

        <Suspense fallback={<ProjectsListingSkeleton />}>
          <ProjectsListing />
        </Suspense>
      </DetailPageContent>
    </ContentContainer>
  );
};

export default ProjectsPage;
