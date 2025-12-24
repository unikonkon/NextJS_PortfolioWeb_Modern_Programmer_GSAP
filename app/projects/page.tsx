"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Job Matching AI",
    description:
      "AI-powered job matching application that helps job seekers find ideal roles by analyzing resumes and matching them with relevant job opportunities using RAG and vector search technology.",
    tags: ["Next.js 16", "TypeScript", "Google Gemini Pro 1.5", "RAG", "IndexedDB", "Tailwind CSS"],
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 24, forks: 8 },
  },
  {
    title: "Crypto News Analysis",
    description:
      "AI-powered crypto news aggregator with sentiment analysis and trending score using Google Gemini API. Real-time updates with RSS feeds from major crypto news sources.",
    tags: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "RSS Parser"],
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 18, forks: 5 },
  },
  {
    title: "WebRecord Sound App",
    description:
      "Browser-based audio recording with IndexedDB storage, Firebase auth, and privacy-first approach.",
    tags: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Firebase"],
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 12, forks: 3 },
  },
  {
    title: "WEB Planning Generator",
    description:
      "AI-powered website planning tool that generates project discovery documents and website flowcharts using Google Gemini API. Features 4-step wizard, export to PDF/Word, and Mermaid diagram generation.",
    tags: ["Next.js 15", "TypeScript", "Google Gemini API", "Mermaid.js", "shadcn/ui"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 15, forks: 4 },
  },
  {
    title: "Crypto Sentiment Analysis",
    description:
      "Analyze the sentiment of cryptocurrencies using AI Gemini API to make better investment decisions. Updates with RSS feeds from major crypto news sources.",
    tags: ["Next.js", "NestJS", "Supabase", "Three.js", "Google Gemini API"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 22, forks: 7 },
  },
  {
    title: "CryptoTracker",
    description:
      "Modern cryptocurrency tracking with categorized views, search functionality, and 7-day price charts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 10, forks: 2 },
  },
  {
    title: "HTML Fetcher",
    description:
      "Web application for fetching and processing HTML content from URLs. Built with Next.js and TypeScript for efficient web scraping and content extraction.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 8, forks: 1 },
  },
  {
    title: "Netflix Clone",
    description:
      "Responsive Netflix clone with modern UI/UX, movie browsing, and server-side rendering.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 14, forks: 6 },
  },
  {
    title: "Text-to-Speech App",
    description:
      "Web application for text-to-speech conversion with voice selection and multi-language support.",
    tags: ["Next.js", "TypeScript", "Web Speech API"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 6, forks: 2 },
  },
  {
    title: "PyThaiTTS App",
    description:
      "Full-stack Thai text-to-speech with FastAPI backend and PyThaiTTS integration.",
    tags: ["Next.js", "FastAPI", "Python", "PyThaiTTS"],
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    stats: { stars: 9, forks: 3 },
  },
];

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page header animation
      gsap.from(".page-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      });

      // Project cards stagger animation
      gsap.from(".project-card", {
        // opacity: 0,
        // y: 60,
        // scale: 0.95,
        duration: 0.7,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0d1117]">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="page-header mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="section-title">// Projects</span>
              <span className="font-mono text-[#8b949e] text-sm">
                $ ls -la projects/
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f0f6fc] mb-4">
              My Projects
            </h1>
            <p className="text-[#8b949e] max-w-2xl">
              Explore my journey through personal experiments and professional
              achievements. Each project represents a learning experience and a
              step forward in my development journey.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="font-mono text-[#00ff9f] text-sm mb-6 flex items-center gap-2">
              <Star size={14} className="fill-current" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 projects-grid">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="font-mono text-[#8b949e] text-sm mb-6">
              // All Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 projects-grid">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    featured: boolean;
    demoUrl: string;
    githubUrl: string;
    stats: { stars: number; forks: number };
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card glass-card p-6 flex flex-col h-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-[#f0f6fc] font-semibold text-lg">{project.title}</h3>
        {project.featured && (
          <span className="px-2 py-1 text-xs font-mono bg-[rgba(0,255,159,0.1)] text-[#00ff9f] rounded border border-[rgba(0,255,159,0.3)]">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-[#8b949e] text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-mono text-[#58a6ff] bg-[rgba(88,166,255,0.1)] rounded"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2 py-1 text-xs font-mono text-[#8b949e]">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
        {/* Stats */}
        <div className="flex items-center gap-4 text-[#8b949e] text-sm font-mono">
          <span className="flex items-center gap-1">
            <Star size={14} />
            {project.stats.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={14} />
            {project.stats.forks}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#f0f6fc] transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#00ff9f] transition-colors"
            aria-label="View Demo"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
