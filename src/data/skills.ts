import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code2",
    skills: [
      { name: "TypeScript", isPrimary: true },
      { name: "JavaScript", isPrimary: true },
      { name: "Go", isPrimary: true },
      { name: "Python", isPrimary: false },
      { name: "HTML", isPrimary: false },
      { name: "CSS", isPrimary: false },
      { name: "Java", isPrimary: false },
    ],
  },
  {
    name: "Frontend",
    icon: "Layers",
    skills: [
      { name: "React", isPrimary: true },
      { name: "Next.js", isPrimary: true },
      { name: "Astro", isPrimary: true },
      { name: "Tailwind CSS", isPrimary: true },
      { name: "Shadcn UI", isPrimary: false },
      { name: "TanStack Libraries", isPrimary: false },
      { name: "i18next", isPrimary: false },
      { name: "Redux", isPrimary: false },
      { name: "Jotai", isPrimary: false },
      { name: "Framer Motion", isPrimary: false },
    ],
  },
  {
    name: "Backend",
    icon: "Database",
    skills: [
      { name: "Node.js", isPrimary: true },
      { name: "Express", isPrimary: true },
      { name: "MongoDB", isPrimary: false },
      { name: "MySQL", isPrimary: false },
      { name: "Supabase", isPrimary: false },
      { name: "WordPress (Headless CMS)", isPrimary: false },
    ],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", isPrimary: true },
      { name: "GitHub", isPrimary: true },
      { name: "Vercel", isPrimary: false },
      { name: "Jira", isPrimary: false },
      { name: "Stripe API", isPrimary: false },
    ],
  },
];
