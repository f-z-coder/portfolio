import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = {
  "Programming Languages": ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java"],
  "Frameworks/Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Material-UI",
    "Shadcn-UI",
    "React Router",
    "Redux",
    "Jotai",
    "TanStack Query",
    "TanStack Table",
    "I18next",
    "Jest",
  ],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Jira", "Docker", "AWS"],
  "Soft Skills": [
    "Problem Solving",
    "Leadership",
    "Teamwork",
    "Communication",
    "Time Management",
    "Adaptability",
  ],
};

export const Skills = () => {
  return (
    <section id="skills" className="container py-12 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <Card key={category} className="flex flex-col">
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
