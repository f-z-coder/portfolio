import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Jamaat-Time",
    description: "Web app for accurate prayer timings in nearby mosques while traveling.",
    features: [
      "Up-to-date prayer timings",
      "Mosque locator within 10km radius",
      "User contributions",
    ],
    technologies: "Google Maps API, Google Places API",
    github: "https://github.com/f-z-coder/Jammat-Time",
    demo: "https://jamaat-time.netlify.app",
  },
  {
    title: "Image Processing App",
    description:
      "A web application for editing images online with real-time processing and high-quality output.",
    features: [
      "Image upload (PNG/JPEG)",
      "Real-time processing with previews",
      "Format conversion",
      "Image adjustments (brightness, contrast, saturation)",
      "Rotation (0-360 degrees)",
      "Cropping functionality",
      "High-quality download",
    ],
    technologies: "React, TypeScript, Node.js, Express, Sharp",
    github: "https://github.com/f-z-coder/image-processing-app",
    demo: "https://image-processing-app-frontend.netlify.app",
  },
  {
    title: "Freelance Project - AC Service Website",
    description:
      "End-to-end development of a high-performance, SEO-optimized business website for a local AC service company, designed to enhance lead generation and local visibility.",
    features: [
      "Fully responsive design ensuring seamless experience across all devices",
      "100/100 Lighthouse scores (Performance, Accessibility, SEO, Best Practices)",
      "Dynamic blog powered by headless WordPress CMS, optimized for long-term SEO benefits",
    ],
    technologies:
      "Next.js 14, TypeScript, Tailwind CSS, Shadcn UI, WordPress (Headless CMS), Server Components,Incremental Static Regeneration (ISR), Vercel",
    demo: "https://www.telanganaacservice.com",
  },
  {
    title: "Minimalistic TypeScript Express MongoDB Template",
    description: "Starter template for API servers with TypeScript, Express, and MongoDB.",
    features: [
      "ESM module support",
      "Import aliases",
      "ENV config",
      "CORS setup",
      "Custom error handling",
    ],
    technologies: "TypeScript, Express, MongoDB",
    github: "https://github.com/f-z-coder/minimalistic-typescript-express-mongodb-template",
  },
  {
    title: "Discord Clone",
    description: "Responsive and interactive Discord-inspired web page.",
    features: ["Mobile-first design", "Modern UI implementation"],
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/f-z-coder/Discord_Clone",
    demo: "https://discord-clone-landing-page.netlify.app/",
  },
  {
    title: "Netflix Clone",
    description: "Fully responsive Netflix landing page.",
    features: ["Responsive design", "Faithful recreation of Netflix UI"],
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/f-z-coder/Netflix_Clone",
    demo: "https://faiz-flix.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-12 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {project.features && (
                <ul className="list-disc space-y-1 pl-5">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              <p className="mt-2">
                <strong>Technologies:</strong> {project.technologies}
              </p>
            </CardContent>
            <CardFooter className={project.demo ? "flex justify-between" : "flex justify-end"}>
              {project.demo && (
                <Button asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.github && (
                <Button asChild variant="outline">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
