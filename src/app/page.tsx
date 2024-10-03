import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills-with-level";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
