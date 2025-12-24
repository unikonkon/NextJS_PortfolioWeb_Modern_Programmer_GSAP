"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutData = {
  name: "Suthep Jantawee",
  role: "Full Stack Developer",
  location: "Thailand",
  experience: "3+ years",
  passion: ["Clean Code", "Modern Frameworks", "AI Tools"],
  available: true,
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".about-line", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-title">// About Me</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
        </div>

        {/* Code Block Card */}
        <div ref={cardRef} className="glass-card p-8">
          <div className="font-mono text-sm leading-loose">
            {/* Line 1 */}
            <div className="about-line flex">
              <span className="line-number">1</span>
              <span className="text-[#bd93f9]">const</span>
              <span className="mx-2 text-[#f0f6fc]">developer</span>
              <span className="text-[#8b949e]">=</span>
              <span className="ml-2 text-[#8b949e]">{"{"}</span>
            </div>

            {/* Line 2 - Name */}
            <div className="about-line flex">
              <span className="line-number">2</span>
              <span className="ml-6 text-[#f0f6fc]">name:</span>
              <span className="ml-2 text-[#98c379]">&quot;{aboutData.name}&quot;</span>
              <span className="text-[#8b949e]">,</span>
            </div>

            {/* Line 3 - Role */}
            <div className="about-line flex">
              <span className="line-number">3</span>
              <span className="ml-6 text-[#f0f6fc]">role:</span>
              <span className="ml-2 text-[#98c379]">&quot;{aboutData.role}&quot;</span>
              <span className="text-[#8b949e]">,</span>
            </div>

            {/* Line 4 - Location */}
            <div className="about-line flex">
              <span className="line-number">4</span>
              <span className="ml-6 text-[#f0f6fc]">location:</span>
              <span className="ml-2 text-[#98c379]">&quot;{aboutData.location}&quot;</span>
              <span className="text-[#8b949e]">,</span>
            </div>

            {/* Line 5 - Experience */}
            <div className="about-line flex">
              <span className="line-number">5</span>
              <span className="ml-6 text-[#f0f6fc]">experience:</span>
              <span className="ml-2 text-[#98c379]">&quot;{aboutData.experience}&quot;</span>
              <span className="text-[#8b949e]">,</span>
            </div>

            {/* Line 6 - Passion */}
            <div className="about-line flex flex-wrap">
              <span className="line-number">6</span>
              <span className="ml-6 text-[#f0f6fc]">passion:</span>
              <span className="ml-2 text-[#8b949e]">[</span>
              {aboutData.passion.map((item, i) => (
                <span key={item}>
                  <span className="text-[#98c379]">&quot;{item}&quot;</span>
                  {i < aboutData.passion.length - 1 && (
                    <span className="text-[#8b949e]">, </span>
                  )}
                </span>
              ))}
              <span className="text-[#8b949e]">]</span>
              <span className="text-[#8b949e]">,</span>
            </div>

            {/* Line 7 - Available */}
            <div className="about-line flex">
              <span className="line-number">7</span>
              <span className="ml-6 text-[#f0f6fc]">available:</span>
              <span className="ml-2 text-[#d19a66]">
                {aboutData.available ? "true" : "false"}
              </span>
            </div>

            {/* Line 8 - Close */}
            <div className="about-line flex">
              <span className="line-number">8</span>
              <span className="text-[#8b949e]">{"}"}</span>
              <span className="text-[#8b949e]">;</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 text-[#8b949e] max-w-2xl">
          <p className="leading-relaxed">
            I have 3+ years of experience in web development. I am passionate about building
            intuitive interfaces, exploring modern frameworks, and leveraging AI tools to enhance
            developer workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
