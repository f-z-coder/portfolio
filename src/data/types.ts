export interface Experience {
  slug: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  category: "fullstack" | "frontend" | "backend" | "tool";
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

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  resumePath: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
    phone: string;
  };
  education: {
    institution: string;
    degree: string;
    period: string;
    gpa: string;
  };
}
