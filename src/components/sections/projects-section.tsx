"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects();

export function ProjectsSection() {
  return (
    <section id="projects" className="pb-16 sm:pb-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold tracking-tight"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-muted-foreground mt-1 text-sm"
          >
            Featured work I&apos;m proud of
          </motion.p>
        </div>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {featured.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
              },
            }}
          >
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="group-hover:text-primary text-base transition-colors">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight className="text-muted-foreground h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-[11px]">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.liveUrl, "_blank");
                        }}
                        className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    )}
                    {project.githubUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, "_blank");
                        }}
                        className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center"
      >
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/projects">
            Explore all 12 projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
