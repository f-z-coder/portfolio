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
    ],
  },
  {
    name: "Frontend",
    icon: "Layers",
    skills: [
      { name: "React", isPrimary: true },
      { name: "Next.js", isPrimary: true },
      { name: "Astro", isPrimary: true },
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
    ],
  },
];
