"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "iApp Technology",
    role: "Full Stack Developer",
    period: "Feb 2023 - Present",
    projects: [
      {
        name: "NBTC - Drone Data Transmission",
        role: "Backend Developer",
        tasks: [
          "Developed an API for transmitting drone data to both mobile and web platforms",
          "Presented the API functionality to the client",
        ],
      },
      {
        name: "ACT Phase 1 & 2",
        role: "Full Stack Developer",
        tasks: [
          "Designed workflow for fetching project and company data from EGP, DBD, and GOV",
          "Updated API for data retrieval from Kibana database",
          "Set up Jenkins processes for automation",
        ],
      },
      {
        name: "iApp Speech Flow for Web",
        role: "Full Stack Developer",
        tasks: [
          "Converted mobile codebase into web application using Next.js",
          "Built the application as an Electron app for macOS and Windows",
        ],
      },
      {
        name: "digitaltouchpoint-wellness-chatbot",
        role: "Full Stack Developer",
        tasks: [
          "Built authentication flow with JWT for user protection",
          "Created dashboard bot view to display package and user information",
        ],
      },
    ],
  },
  {
    company: "Vertobase Co., Ltd.",
    role: "Front-end Developer",
    period: "Mar 2022 - Dec 2022",
    projects: [
      {
        name: "Zignway App",
        role: "Front-end Developer",
        tasks: [
          "Wrote front-end code from design using React and Next.js",
          "Developed Flutter code for PIN login and other mobile pages",
        ],
      },
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-card", {
        opacity: 0,
        x: -40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-title">// Experience</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.1)]" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="exp-card relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[#161b22] border-2 border-[#00ff9f]">
                  <div className="absolute inset-1 rounded-full bg-[#00ff9f] animate-pulse" />
                </div>

                {/* Card */}
                <div className="glass-card p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-[#f0f6fc] font-semibold text-lg flex items-center gap-2">
                        <Briefcase size={18} className="text-[#58a6ff]" />
                        {exp.company}
                      </h3>
                      <p className="text-[#00ff9f] font-mono text-sm mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#8b949e] text-sm font-mono">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4 mt-6">
                    {exp.projects.map((project) => (
                      <div
                        key={project.name}
                        className="border-l-2 border-[rgba(255,255,255,0.1)] pl-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#bd93f9] font-mono text-sm">
                            {project.name}
                          </span>
                          <span className="text-[#8b949e] text-xs">
                            • {project.role}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {project.tasks.map((task, i) => (
                            <li
                              key={i}
                              className="text-[#8b949e] text-sm flex items-start gap-2"
                            >
                              <span className="text-[#00ff9f] mt-1">›</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
