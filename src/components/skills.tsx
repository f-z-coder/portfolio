'use client'

import { Badge } from '@/components/ui/badge'

const skills = {
  "Programming": ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python"],
  "Frameworks/Libraries": ["Next.js", "React", "Tailwind CSS", "Material-UI", "Shadcn-UI", "React Router", "Redux", "Jotai", "TanStack Query", "TanStack Table", "I18next", "Node.js", "Express", "Jest"],
  "Databases": ["MongoDB", "MySQL"],
  "Tools": ["Git", "GitHub", "Jira"],
  "Soft Skills": ["Problem Solving", "Leadership", "Teamwork", "Communication"],
}

export const Skills=()=> {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}