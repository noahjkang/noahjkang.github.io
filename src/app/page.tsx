"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "education"];
      let currentSection = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on layout (e.g. 200px from top)
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        
        {/* Left Side: Fixed */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="mb-6">
              <Image 
                src="/profile.jpeg" 
                alt="Noah Kang" 
                width={128} 
                height={128} 
                className="w-40 h-40 rounded-full border-2 border-white/20 object-cover" 
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              <a href="/">Noah Kang</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-200 sm:text-xl">
              Math & CS @ UIUC
            </h2>
            
            <nav className="nav hidden lg:block mt-16">
              <ul className="mt-8 w-max">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`group flex items-center py-3 transition-all ${
                        activeSection === item.id ? "active" : ""
                      }`}
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === item.id
                            ? "w-16 bg-white"
                            : "w-8 bg-gray-500 group-hover:w-16 group-hover:bg-gray-300"
                        }`}
                      ></span>
                      <span
                        className={`transition-all ${
                          activeSection === item.id
                            ? "text-white text-sm font-bold uppercase tracking-widest"
                            : "text-gray-500 text-xs font-semibold uppercase tracking-widest group-hover:text-gray-300"
                        }`}
                      >
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="mt-8 flex items-center text-white/70" aria-label="Social media">
            <li className="mr-5 text-xs shrink-0">
              <a
                className="block hover:text-white transition-colors"
                href="https://github.com/noahjkang"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon className="w-6 h-6" />
              </a>
            </li>
            <li className="mr-5 text-xs shrink-0">
              <a
                className="block hover:text-white transition-colors"
                href="https://www.linkedin.com/in/noah-j-kang/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </header>

        {/* Right Side: Scrolling Content */}
        <main className="pt-24 lg:w-[60%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--background)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4 text-[var(--text-muted)] text-lg leading-relaxed">
                I am a sophomore at the University of Illinois Urbana-Champaign pursuing a bachelors in Mathematics and Computer Science. 
                I'm focused on pure math (analysis + algebra) and (operating) systems. I would like to pursue graduate school in algebraic 
                topology though I love the feeling of building that comes with coding.
              </p>
              <p className="mb-4 text-[var(--text-muted)] text-lg leading-relaxed">
                I love going to booksales, and if you walk into my room, I may be reading AC Grayling's Philosophy 1: A Guide Through the Subject. 
                I'd tell you that I find epistemology incredibly dry but essential and aesthetics interesting but mildly trivial. 
                Two years ago I would have been grinding Phantom Forces, and four years ago I'd have been building Tamiya's plastic 
                tank models.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work Experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--background)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <ExperienceSection />
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--background)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <ProjectSection />
          </section>

          <section
            id="education"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Education"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--background)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
                Education
              </h2>
            </div>
            <EducationSection />
          </section>

          <footer className="max-w-md pb-16 text-sm text-[var(--text-muted)] sm:pb-0">
            <p>
              &copy; {new Date().getFullYear()} Noah Kang.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
