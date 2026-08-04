import React from 'react';
import { resumeData } from '@/data/resume';

export default function EducationSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground/80 border-b border-[var(--border-color)] pb-2">
        Education
      </h2>
      <div className="flex flex-col gap-4">
        {resumeData.education.map((edu, index) => (
          <div 
            key={index} 
            className="group relative p-5 sm:p-6 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform"
          >
            {/* Grid Pattern Hover Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <div className="relative flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-lg font-semibold text-foreground">{edu.institution}</h3>
                <span className="text-sm text-[var(--text-muted)] font-mono">{edu.period}</span>
              </div>
              <p className="text-[var(--text-muted)] font-medium">{edu.degree}</p>
              {edu.honors && <p className="text-sm italic text-[var(--text-muted)]">{edu.honors}</p>}
              <div className="pt-2">
                <p className="text-sm font-semibold mb-1">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-mono bg-black/5 dark:bg-white/10 rounded-md text-[var(--text-muted)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient Border Hover Effect */}
            <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
