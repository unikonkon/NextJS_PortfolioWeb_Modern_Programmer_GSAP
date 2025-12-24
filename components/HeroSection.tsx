"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Terminal animation
      tl.from(terminalRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".terminal-line",
          {
            opacity: 0,
            x: -20,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-cta",
          {
            // opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Typing effect for command
      if (typingRef.current) {
        const text = "./start_journey.sh";
        typingRef.current.textContent = "";

        text.split("").forEach((char, i) => {
          gsap.to(typingRef.current, {
            delay: 1.5 + i * 0.05,
            duration: 0,
            onComplete: () => {
              if (typingRef.current) {
                typingRef.current.textContent += char;
              }
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ============================================
  // DATA
  // ============================================

  const personalInfo = {
    name: "Suthep Jantawee",
    role: "Full Stack Developer",
    location: "Thailand",
    experience: "3+ years",
    email: "bananammm0001@gmail.com",
    phone: "0901834036",
    available: true,
    github: "https://github.com/bananafaraday",
    linkedin: "https://linkedin.com/in/suthep-jantawee",
  }

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 grid-bg"
    >
      <div className="max-w-3xl w-full">
        {/* Terminal Window */}
        <div ref={terminalRef} className="terminal-window">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-4 text-[#8b949e] text-sm font-mono">
              title: portfolio.dev - zsh
            </span>
          </div>

          {/* Terminal Body */}
          <div className="space-y-4 p-6">
            <div>
              <span className="text-code-green">$</span>
              <span className="ml-2 text-text-primary">cat about.json</span>
            </div>

            <div className="pl-4 border-l-2 border-editor-border">
              <pre className="text-lg">
                <span className="syntax-punctuation">{"{"}</span>{"\n"}
                <span className="syntax-property ml-4">&quot;name&quot;</span>
                <span className="syntax-punctuation">: </span>
                <span className="syntax-string">&quot;{personalInfo.name}&quot;</span>
                <span className="syntax-punctuation">,</span>{"\n"}
                <span className="syntax-property ml-4">&quot;role&quot;</span>
                <span className="syntax-punctuation">: </span>
                <span className="syntax-string">&quot;{personalInfo.role}&quot;</span>
                <span className="syntax-punctuation">,</span>{"\n"}
                <span className="syntax-property ml-4">&quot;experience&quot;</span>
                <span className="syntax-punctuation">: </span>
                <span className="syntax-string">&quot;{personalInfo.experience}&quot;</span>
                <span className="syntax-punctuation">,</span>{"\n"}
                {/* <span className="syntax-property ml-4">&quot;location&quot;</span>
                <span className="syntax-punctuation">: </span>
                <span className="syntax-string">&quot;{personalInfo.location}&quot;</span>
                <span className="syntax-punctuation">,</span>{"\n"} */}
                <span className="syntax-punctuation">{"}"}</span>
              </pre>
            </div>

          </div>

        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link href="/projects" className="hero-cta glass-button">
            View Projects
          </Link>
          <Link href="/contact" className="hero-cta glass-button-secondary">
            Contact Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-[#8b949e] animate-bounce">
            <span className="text-xs font-mono">Scroll</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-[#00ff9f]"
            >
              <path
                d="M10 4V16M10 16L4 10M10 16L16 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
