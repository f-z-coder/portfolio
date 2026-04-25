export interface Experience {
  slug: string;
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export type ProjectCategory = "fullstack" | "frontend" | "backend";

export interface Project {
  slug: string;
  category: ProjectCategory;
  isFeatured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; isPrimary: boolean }[];
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  resumePath: string;
}
