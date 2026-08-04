import React from 'react';
import { resumeData } from '@/data/resume';

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground/80 border-b border-[var(--border-color)] pb-2">
        Work Experience
      </h2>
      <div className="flex flex-col gap-4">
        {resumeData.experience.map((exp, index) => (
          <div 
            key={index} 
            className="group relative p-5 sm:p-6 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform"
          >
            {/* Grid Pattern Hover Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <div className="relative flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <span className="text-sm text-[var(--text-muted)] font-mono">{exp.period}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-sm text-[var(--text-muted)] mb-2">
                <span className="font-medium">{exp.company}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-[var(--text-muted)] text-sm">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gradient Border Hover Effect */}
            <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
