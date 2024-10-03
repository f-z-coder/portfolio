import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "Jamaat-Time",
    description: "Web app for accurate prayer timings in nearby mosques while traveling.",
    features: ["Up-to-date prayer timings", "Mosque locator within 10km radius", "User contributions"],
    technologies: "Google Maps API, Google Places API",
    github: "https://github.com/your-username/jamaat-time",
    demo: "https://jamaat-time.com",
  },
  {
    title: "Minimalistic TypeScript Express MongoDB Template",
    description: "Starter template for API servers with TypeScript, Express, and MongoDB.",
    features: ["ESM module support", "Import aliases", "ENV config", "CORS setup", "Custom error handling"],
    technologies: "TypeScript, Express, MongoDB",
    github: "https://github.com/your-username/ts-express-mongo-template",
  },
  {
    title: "Discord Clone",
    description: "Responsive and interactive Discord-inspired web page.",
    features: ["Mobile-first design", "Modern UI implementation"],
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/F-z-Coder/Discord_Clone",
    demo: "https://discord-clone-landing-page.netlify.app/",
  },
  {
    title: "Netflix Clone",
    description: "Fully responsive Netflix landing page.",
    features: ["Responsive design", "Faithful recreation of Netflix UI"],
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/F-z-Coder/Netflix_Clone",
    demo: "https://faiz-flix-landing-page.netlify.app/", 
  },

]

export const Projects=()=> {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {project.features && (
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              <p className="mt-2"><strong>Technologies:</strong> {project.technologies}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
              </Button>
              {project.demo && (
                <Button asChild variant="outline">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer"   >Live Demo</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}