import type { Project, ProjectCategory } from "./types";

const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    category: "fullstack",
    isFeatured: true,
    liveUrl: "https://ecommerce-azure-six-67.vercel.app",
    title: "Full-Stack E-Commerce Platform",
    description:
      "Production-ready e-commerce platform with multi-language support, dark/light mode, and a comprehensive admin dashboard.",
    longDescription:
      "Built a production-ready e-commerce platform from the ground up with full multi-language support (English and Arabic with complete RTL layout adaptation), dark/light mode theming, a shopping cart with real-time stock validation that prevents overselling, a multi-step checkout flow with form validation, and a comprehensive admin dashboard with revenue analytics, order management, and inventory tracking. The platform demonstrates end-to-end full-stack development including authentication, database design, state management, and responsive UI.",
    features: [
      "Multi-language support with English and Arabic, including complete RTL layout adaptation for Arabic users",
      "Dark/light mode theming with system preference detection and persistent user choice",
      "Shopping cart with real-time stock validation \u2014 prevents overselling by checking inventory at checkout",
      "Multi-step checkout flow with Zod-powered form validation at each step",
      "Comprehensive admin dashboard with revenue analytics charts, order management, and inventory tracking",
      "Supabase PostgreSQL with Row-Level Security (RLS) policies ensuring data isolation between users",
      "Database RPC functions for complex transactional operations like order placement",
      "Google OAuth authentication with seamless sign-in/sign-up flow",
      "Real-time cart synchronization across tabs using Jotai atomic state management",
      "Fully responsive design optimized for mobile, tablet, and desktop viewports",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
      "Jotai",
      "Zod",
      "i18next",
      "Google OAuth",
    ],
  },
  {
    slug: "jamaat-time",
    category: "fullstack",
    isFeatured: true,
    liveUrl: "https://jamaat-time.netlify.app",
    githubUrl: "https://github.com/f-z-coder/Jammat-Time",
    title: "Jamaat-Time",
    description:
      "Community-driven full-stack web app for locating nearby mosque prayer timings with Google Maps integration.",
    longDescription:
      "A community-driven full-stack web application that helps Muslims find accurate Jamaat (congregation) prayer timings in nearby mosques when visiting new places. The app solves a real problem \u2014 prayer timings vary between mosques and are often not available online. Users can search for mosques in any area, see nearby mosques within a 10km radius on an interactive map, and view their prayer schedules. The platform is community-driven: users can contribute by adding or editing prayer timings, ensuring the data stays accurate and up-to-date.",
    features: [
      "Location-based mosque search within a 10km radius using geolocation",
      "Interactive Google Maps integration showing mosque locations with markers and info windows",
      "Autocomplete place search powered by Google Places API for finding mosques in any area",
      "Up-to-date Jamaat prayer timings for all five daily prayers at each mosque",
      "Community-driven data \u2014 users can contribute by adding or editing prayer timings to keep information accurate",
      "Real-time data display with responsive design for mobile users on the go",
      "RESTful API backend with MongoDB for flexible data storage of mosque and timing information",
    ],
    technologies: [
      "React",
      "Material UI",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "Google Places API",
    ],
  },
  {
    slug: "ac-service-website",
    category: "fullstack",
    isFeatured: true,
    liveUrl: "https://www.telanganaacservice.com",
    title: "AC Service Website",
    description:
      "High-performance SEO-optimized freelance business website achieving perfect 100/100 Lighthouse scores.",
    longDescription:
      "A freelance project where I designed and developed a high-performance, SEO-optimized business website for a local AC service company in Telangana. The goal was to enhance lead generation and local visibility. Executed end-to-end development from scratch \u2014 including branding, UI/UX design, content strategy, and deployment. The site achieves perfect Lighthouse scores of 100 in Performance, Accessibility, SEO, and Best Practices through server-side rendering, optimized images, proper semantic HTML, and comprehensive metadata. The dynamic blog is powered by a headless WordPress CMS, allowing the client to publish content independently for long-term SEO benefits.",
    features: [
      "Perfect 100/100 Google Lighthouse scores across Performance, Accessibility, SEO, and Best Practices",
      "Fully responsive design ensuring seamless experience across all devices and screen sizes",
      "Dynamic blog powered by headless WordPress CMS \u2014 client can independently publish content for long-term SEO",
      "SEO-optimized for local visibility with proper schema markup, meta tags, and sitemap generation",
      "Server-side rendering with Next.js for instant page loads and optimal search engine crawlability",
      "Incremental Static Regeneration (ISR) for blog content that updates without full rebuilds",
      "End-to-end branding including logo concepts, color palette, typography, and content strategy",
      "Lead generation optimized with clear CTAs, service descriptions, and contact forms",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "WordPress (Headless CMS)",
      "Server Components",
      "ISR",
      "Vercel",
    ],
  },
  {
    slug: "awesome-prometheus-toolkit",
    category: "fullstack",
    isFeatured: true,
    liveUrl: "https://awesome-prometheus-toolkit-one.vercel.app",
    githubUrl: "https://github.com/f-z-coder/awesome-prometheus-toolkit",
    title: "Awesome Prometheus Toolkit",
    description:
      "Modern, searchable UI for 500+ Prometheus alert rules with real-time search and syntax-highlighted YAML.",
    longDescription:
      "A modern, searchable web interface for discovering and using 500+ Prometheus alert rules across dozens of services. Built to solve the pain point of finding the right alert rules for your infrastructure \u2014 instead of browsing raw YAML files in a GitHub repo, users get a polished UI with instant search, service-level organization, and one-click copy. The tool stays always in sync with the upstream GitHub repository, ensuring alert rules are never stale.",
    features: [
      "Real-time search across 500+ Prometheus alert rules with instant filtering as you type",
      "Service cards with auto-resolved brand icons using Simple Icons for visual recognition",
      "Modal view with syntax-highlighted YAML for easy reading and understanding of alert rules",
      "One-click copy functionality to quickly grab alert rules for your Prometheus configuration",
      "Always in sync with the upstream GitHub repository \u2014 automatically pulls latest alert definitions",
      "Responsive design that works seamlessly on desktop and mobile devices",
      "SEO-optimized with proper metadata for discoverability",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "LiquidJS",
      "Simple Icons",
    ],
  },
  {
    slug: "reactflow-overview",
    category: "frontend",

    liveUrl: "https://reactflow-overview.netlify.app",
    githubUrl: "https://github.com/f-z-coder/reactflow-overview",
    title: "Reactflow Overview",
    description:
      "Interactive app for creating dynamic, interactive diagrams with custom nodes, edges, and DAG validation.",
    longDescription:
      "A React Flow-based application for creating, managing, and validating dynamic, interactive node-based diagrams. Users can add different types of nodes, connect them with edges to build visual pipelines, and validate whether the resulting graph is a valid DAG (Directed Acyclic Graph). Features text nodes with auto-generated handles using a {{name}} pattern syntax, making it easy to create complex connection topologies.",
    features: [
      "Add and connect nodes dynamically with an intuitive drag-and-drop interface",
      "Multiple node types including default nodes and text nodes with custom handle generation",
      "Delete nodes and edges with selection-based removal",
      "Build visual pipelines representing data flows or workflows",
      "Auto-add handles for connections in text nodes using {{name}} pattern syntax",
      "Graph validation \u2014 verify if the diagram is a valid DAG (Directed Acyclic Graph) on submit",
      "Responsive canvas that adapts to screen size with zoom and pan controls",
    ],
    technologies: ["React", "React Flow", "JavaScript", "Tailwind CSS"],
  },
  {
    slug: "image-processing-app",
    category: "fullstack",

    liveUrl: "https://image-processing-app-frontend.netlify.app",
    githubUrl: "https://github.com/f-z-coder/image-processing-app",
    title: "Image Processing App",
    description:
      "Full-stack web application for editing images online with real-time processing, adjustments, and format conversion.",
    longDescription:
      "A full-stack web application for editing images online with real-time processing and high-quality downloads. Users can upload PNG or JPEG images and apply a range of adjustments including brightness, contrast, and saturation modifications, as well as rotation (0-360 degrees) and cropping. The app supports format conversion between PNG and JPEG. All processing happens on the backend using the Sharp library for high-quality output, with real-time preview on the frontend so users can see changes before downloading.",
    features: [
      "Image upload supporting PNG and JPEG formats with drag-and-drop interface",
      "Real-time processing with instant preview of all adjustments before downloading",
      "Brightness, contrast, and saturation adjustment sliders for fine-tuning images",
      "Rotation support from 0 to 360 degrees with smooth preview",
      "Cropping functionality with visual selection area",
      "Format conversion between PNG and JPEG",
      "High-quality image download powered by Sharp image processing library on the backend",
      "Clean, intuitive UI built with React and Shadcn UI components",
    ],
    technologies: ["React", "TypeScript", "Shadcn UI", "Node.js", "Express", "Sharp"],
  },
  {
    slug: "netflix-clone",
    category: "frontend",

    liveUrl: "https://faiz-flix.netlify.app",
    githubUrl: "https://github.com/f-z-coder/Netflix_Clone",
    title: "Netflix Clone",
    description:
      "Fully responsive Netflix landing page recreation with pixel-perfect UI implementation.",
    longDescription:
      "A pixel-perfect recreation of the Netflix landing page built to practice responsive web design and CSS best practices for large-scale projects. The clone faithfully reproduces Netflix's UI including the hero section, feature rows, FAQ accordion, and footer \u2014 all fully responsive across mobile, tablet, and desktop viewports.",
    features: [
      "Pixel-perfect recreation of the Netflix landing page UI",
      "Fully responsive design across mobile, tablet, and desktop breakpoints",
      "CSS best practices applied for maintainable, scalable styling in a large project",
      "Interactive FAQ accordion section",
      "Hero section with email signup CTA",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "discord-clone",
    category: "frontend",

    liveUrl: "https://discord-clone-landing-page.netlify.app",
    githubUrl: "https://github.com/f-z-coder/Discord_Clone",
    title: "Discord Clone",
    description:
      "Responsive and interactive Discord-inspired landing page built with mobile-first development approach.",
    longDescription:
      "A fully responsive and interactive Discord-inspired landing page built using mobile-first development methodology. The project was a deep dive into responsive web design principles, CSS layout techniques, and building interactive UI components that work seamlessly across all screen sizes \u2014 from small mobile devices to large desktop monitors.",
    features: [
      "Fully responsive design built with mobile-first development methodology",
      "Interactive web page elements with smooth transitions and hover effects",
      "Works seamlessly across all screen sizes from mobile to desktop",
      "Applied CSS best practices for building maintainable large-scale projects",
      "Modern UI implementation faithful to Discord's design language",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "ts-express-mongodb-template",
    category: "backend",

    githubUrl: "https://github.com/f-z-coder/minimalistic-typescript-express-mongodb-template",
    title: "TypeScript Express MongoDB Template",
    description:
      "Production-ready minimalistic starter template for building API servers with TypeScript, Express, and MongoDB.",
    longDescription:
      "A production-ready, minimalistic starter template for building backend API servers with TypeScript, Express, and MongoDB. Designed to provide a clean, well-organized foundation so developers can start building APIs immediately without spending time on boilerplate setup. Includes modern JavaScript module support (ESM), clean folder structure, and essential configurations out of the box.",
    features: [
      "ESM (ECMAScript Modules) support for modern JavaScript module syntax",
      "Import aliases for clean, readable imports across the project",
      "Environment variable configuration with .env support",
      "CORS setup for cross-origin API access",
      "Custom error handling middleware with consistent error response format",
      "Clean, organized folder structure following best practices",
      "TypeScript strict mode for maximum type safety",
      "MongoDB connection with Mongoose ODM",
    ],
    technologies: ["TypeScript", "Express", "MongoDB", "Mongoose"],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.isFeatured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
};

export function getProjectCategories(): string[] {
  return ["all", ...Array.from(new Set(projects.map((p) => p.category)))];
}
