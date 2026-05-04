import type { MetadataRoute } from "next";
import { getAllExperiences } from "@/data/experience";
import { getAllProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = getAllExperiences().map((experience) => ({
    url: `${siteConfig.url}/experience/${experience.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes];
};

export default sitemap;
