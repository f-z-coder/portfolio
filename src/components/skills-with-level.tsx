"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const skillCategories = {
  "Programming Languages": [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Java", level: 60 },
    { name: "Python", level: 60 },
  ],
  "Frameworks/Libraries": [
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Shadcn-UI", level: 80 },
    { name: "Material-UI", level: 75 },
    { name: "React Router", level: 85 },
    { name: "Redux", level: 70 },
    { name: "Jotai", level: 70 },
    { name: "TanStack Query", level: 75 },
    { name: "TanStack Table", level: 75 },
    { name: "I18next", level: 75 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 80 },
    { name: "Jest", level: 75 },
  ],
  Databases: [
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 75 },
  ],
  Tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Jira", level: 70 },
  ],

  "Soft Skills": [
    { name: "Teamwork", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Leadership", level: 85 },
    { name: "Time Management", level: 85 },
    { name: "Problem Solving", level: 80 },
  ],
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming Languages");

  return (
    <section id="skills" className="container py-12 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Skills
      </h2>
      <Card className="mx-auto w-full max-w-5xl">
        <CardHeader>
          <CardTitle>My Expertise</CardTitle>
          <CardDescription>Explore my skills across various domains</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedCategory} className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="flex h-max flex-wrap justify-evenly md:justify-between">
              {Object.keys(skillCategories).map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};
