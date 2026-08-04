"use client";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <HeroSection>
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-16 pb-16">
        <div id="experience" className="flex flex-col gap-12 relative z-20 pt-16">
          <ExperienceSection />
          <div id="projects" className="pt-10">
            <ProjectSection />
          </div>
          <div id="skills" className="pt-10">
            <SkillSection />
          </div>
          <div id="education" className="pt-10">
            <EducationSection />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 pb-12 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
          <p>{new Date().getFullYear()} Noah Kang</p>
        </footer>
      </div>
    </HeroSection>
  );
}
