import type { Experience } from "./types";

const experiences: Experience[] = [
  {
    slug: "last9",
    title: "Web Developer",
    company: "Last9",
    companyUrl: "https://last9.io",
    period: "Dec 2024 - Present",
    isCurrent: true,
    summary:
      "Building end-to-end features across React frontend, Go backend, and Python services for an observability platform. Shipping full-stack features spanning billing, metrics exploration, AI-powered tooling, and site migrations.",
    responsibilities: [
      "Built end-to-end Stripe integration for a pay-as-you-go billing model \u2014 developed the React frontend for plan selection and payment flows, Go backend APIs for subscription management and invoice processing, and a Python cron job for automated usage metering and reporting. Owned the full lifecycle including testing, staging verification, and production deployment.",
      "Designed and developed a Metrics Explorer feature from scratch (similar to Grafana Explore) \u2014 conducted in-depth research into Grafana\u2019s open-source codebase to understand query building patterns, time-range selection, and visualization rendering. Implemented an optimal solution with query building, real-time metric visualization, and an intuitive UI for exploring observability data.",
      "Developed multiple AI-powered features including natural language to PromQL/LogQL translation \u2014 architected the full pipeline end-to-end: React frontend with a conversational interface \u2192 Go API layer for request handling and auth \u2192 AI service for query generation \u2192 MCP (Model Context Protocol) server for tool integration. Enabled users to query metrics and logs using plain English instead of complex query languages.",
      "Led a major initiative to redesign 50+ Control Plane APIs \u2014 performed comprehensive analysis of existing REST APIs, database schema, and data relationships; identified inconsistencies and inefficiencies; created a detailed migration plan with backwards compatibility strategy; and executed end-to-end implementation rewriting APIs in Go with updated React frontend integration for all affected dashboards and workflows.",
      "Migrated the marketing website from Gatsby to Astro \u2014 reduced build times from 8 minutes to 2 minutes (75% improvement), significantly improved Core Web Vitals scores (LCP, FID, CLS) across all pages, and simplified the content authoring workflow for the marketing team.",
      "Migrated the documentation site from Docusaurus to Astro Starlight \u2014 eliminated redundant double deployments that were causing versioning issues, reduced infrastructure costs, and improved the developer documentation experience with better search and navigation.",
    ],
    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Go",
      "Python",
      "Tailwind CSS",
      "Stripe API",
      "Starlight",
    ],
  },
  {
    slug: "uixperts-labs",
    title: "Frontend Web Developer",
    company: "Uixperts Labs",
    companyUrl: "https://www.uixpertslabs.com/",
    period: "Jul 2024 - Dec 2024",
    summary:
      "Led development of a centralized multilingual employee management platform handling employee-related tasks, app access, and account administration with full internationalization support.",
    responsibilities: [
      "Led the development of a centralized platform to manage employee-related tasks, app access, and account administration \u2014 built with full multi-lingual support enabling seamless switching between languages with complete RTL/LTR layout adaptation using i18next.",
      "Architected the frontend state management using Jotai for atomic state and TanStack Table for complex data grids with sorting, filtering, pagination, and column customization across the employee management workflows.",
      "Collaborated with team members to ensure clear project requirements and maintained code quality through thorough pull request reviews \u2014 established coding standards and review guidelines that improved team velocity and reduced bugs in production.",
      "Streamlined project workflow by creating and managing Jira tickets, assigning tasks to team members, tracking sprint progress, and ensuring timely delivery of features across multiple release cycles.",
      "Built reusable UI component library using Shadcn UI and Tailwind CSS, ensuring design consistency across the platform and accelerating development speed for new features.",
    ],
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Jotai",
      "TanStack Table",
      "TanStack Query",
      "i18next",
    ],
  },
  {
    slug: "vuclip",
    title: "Web Developer Intern",
    company: "Vuclip",
    companyUrl: "https://www.linkedin.com/company/viuott/",
    period: "Oct 2023 - Mar 2024",
    summary:
      "Led web performance optimization for an OTT video streaming platform, improving Lighthouse scores by 20 percentage points. Built Progressive Web Apps enhancing mobile user engagement.",
    responsibilities: [
      "Led Web Performance Optimization \u2014 conducted in-depth web performance and Web Vitals analysis on the OTT video streaming platform, implementing strategic optimizations that significantly enhanced website speed and user experience. Achieved a remarkable Google Lighthouse score increase from 55% to 75%, ensuring a seamless browsing experience for users.",
      "Explored and applied concepts of OTT video streaming, gaining insight into video delivery over the internet, adaptive bitrate streaming, and content delivery network optimization.",
      "Spearheaded the development of Progressive Web Apps (PWAs) \u2014 enhanced user engagement and retention rates across mobile platforms by leveraging service workers, offline caching, and app-like navigation experiences.",
      "Demonstrated a commitment to continuous learning and skill development by staying abreast of the latest technologies and trends, including Next.js, TypeScript, Redux, and unit testing. Applied these learnings to drive innovation within the team and maintain a competitive edge in web development.",
    ],
    technologies: ["Next.js", "TypeScript", "Redux", "Jest"],
  },
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}
