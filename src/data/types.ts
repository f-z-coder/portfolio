import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

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

export interface Skill {
  name: string;
  isPrimary: boolean;
}

export interface SkillCategory {
  name: string;
  icon: IconComponent;
  skills: Skill[];
}

export type ContactType = "email" | "phone" | "github" | "linkedin" | "x";

export interface ContactItem {
  icon: IconComponent;
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

export interface CompanyRef {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  jobTitle: string;
  title: string;
  description: string;
  bio: string;
  url: string;
  ogImagePath: string;
  resumePath: string;
  currentCompany: CompanyRef;
}
