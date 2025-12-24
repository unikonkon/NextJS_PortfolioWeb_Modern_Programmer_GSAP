"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      const tl = gsap.timeline();

      tl.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power3.out",
      }).from(
        linksRef.current?.querySelectorAll("li") || [],
        {
          // opacity: 0,
          // y: -20,
          // duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, navRef);

    // Scroll effect
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (navRef.current) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          gsap.to(navRef.current, {
            y: -100,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[rgba(13,17,23,0.95)]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center gap-1 font-mono text-lg group"
        >
          <span className="text-[#8b949e] group-hover:text-[#00ff9f] transition-colors">
            &lt;
          </span>
          <span className="text-[#f0f6fc] font-semibold">Dev</span>
          <span className="text-[#8b949e] group-hover:text-[#00ff9f] transition-colors">
            /&gt;
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link relative py-2 font-mono text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#00ff9f]"
                    : "text-[#8b949e] hover:text-[#f0f6fc]"
                }`}
              >
                {link.label}
                <span
                  className={`nav-underline ${
                    pathname === link.href ? "!transform-none !scale-x-100" : ""
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`hamburger ${mobileMenuOpen ? "rotate-45" : ""}`}
            style={{
              transform: mobileMenuOpen ? "rotate(45deg)" : "none",
            }}
          >
            <span
              className="absolute w-6 h-0.5 bg-[#f0f6fc] transition-all"
              style={{
                top: mobileMenuOpen ? "0" : "-8px",
                transform: mobileMenuOpen ? "rotate(0)" : "none",
              }}
            />
            <span
              className="absolute w-6 h-0.5 bg-[#f0f6fc] transition-all"
              style={{
                top: mobileMenuOpen ? "0" : "8px",
                transform: mobileMenuOpen ? "rotate(90deg)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 font-mono text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#00ff9f]"
                    : "text-[#8b949e] hover:text-[#f0f6fc]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
