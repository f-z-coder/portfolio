"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "UI Consultant",
    company: "UIXperts Labs",
    period: "July 2024 - Present",
    responsibilities: [
      "Leading development of a centralized platform for employee-related tasks, app access, and account administration, with multi-lingual support.",
      "Collaborating on project requirements and maintaining code quality through pull request reviews.",
      "Managing Jira tickets, assigning tasks, and ensuring timely delivery.",
    ],
    technologies:
      "React, React Router, TypeScript, Tailwind CSS, Shadcn-UI, Jotai, TanStack Table, i18next",
  },
  {
    title: "Web Developer Intern",
    company: "Vuclip",
    period: "Oct 2023 - Mar 2024",
    responsibilities: [
      "Led Web Performance Optimization, improving Google Lighthouse score from 55% to 75%.",
      "Developed Progressive Web Apps, enhancing user engagement and retention.",
      "Engaged in continuous learning of Next.js, TypeScript, Redux, and unit testing.",
    ],
    technologies: "Next.js, TypeScript, Redux",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container py-12 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Experience
      </h2>
      <div className="grid gap-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="mx-auto w-full max-w-5xl">
            <CardHeader>
              <CardTitle>
                {exp.title} at {exp.company}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <p className="mt-4">
                <strong>Technologies:</strong> {exp.technologies}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
