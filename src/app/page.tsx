import { Sidebar } from "@/components/layout/sidebar";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="lg:flex">
      <Sidebar />

      <div className="min-h-screen min-w-0 flex-1">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-10 lg:py-16">
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
