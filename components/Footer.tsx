"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:bananammm0001@gmail.com", icon: Mail, label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#0d1117]">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-1 font-mono text-lg mb-4">
              <span className="text-[#8b949e]">&lt;</span>
              <span className="text-[#f0f6fc] font-semibold">Dev</span>
              <span className="text-[#8b949e]">/&gt;</span>
            </Link>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Full Stack Developer crafting modern web experiences with React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[#8b949e] text-xs uppercase tracking-wider mb-4">
              // Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8b949e] hover:text-[#00ff9f] transition-colors text-sm font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-mono text-[#8b949e] text-xs uppercase tracking-wider mb-4">
              // Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8b949e] hover:text-[#00ff9f] hover:border-[rgba(0,255,159,0.3)] transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="border-t border-[rgba(255,255,255,0.05)] bg-[#161b22]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-[#8b949e]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#27ca40]" />
              main
            </span>
            <span>UTF-8</span>
            <span>TypeScript</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-[#8b949e]">
            <span>Built with</span>
            <Heart size={12} className="text-[#ff5f56] fill-[#ff5f56]" />
            <span>& Next.js</span>
            <span className="mx-2">|</span>
            <span>&copy; {new Date().getFullYear()} Suthep Jantawee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
