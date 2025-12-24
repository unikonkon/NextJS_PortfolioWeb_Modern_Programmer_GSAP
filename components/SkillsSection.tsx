"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase / Supabase", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git Version Control", level: 95 },
      { name: "Docker", level: 75 },
      { name: "Jenkins / Vercel", level: 80 },
      { name: "AI Tools (Cursor, Claude)", level: 90 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      gsap.from(".skill-card", {
        // opacity: 0,
        // y: 40,
        // scale: 0.95,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate progress bars
      const progressBars = document.querySelectorAll(".skill-bar-fill");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width") || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${width}%`,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-[#0a0d12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-title">// Skills & Technologies</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card glass-card p-6">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-[#f0f6fc] font-semibold font-mono">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#8b949e] text-sm font-mono">
                        {skill.name}
                      </span>
                      <span className="text-[#00ff9f] text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#00ff9f] to-[#58a6ff]"
                        data-width={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h4 className="text-[#8b949e] text-sm font-mono mb-4">
            // Other Technologies
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML/CSS",
              "JavaScript",
              "Dart",
              "Flutter",
              "Electron",
              "Ant Design",
              "DaisyUI",
              "Prisma",
              "Jest",
              "Postman",
              "Figma",
              "Python",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-[#8b949e] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(0,255,159,0.3)] hover:text-[#00ff9f] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
