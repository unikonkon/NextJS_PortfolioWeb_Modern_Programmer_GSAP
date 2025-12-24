"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/",
    icon: Github,
    label: "GitHub",
    username: "@yourname",
  },
  {
    href: "https://linkedin.com/in/",
    icon: Linkedin,
    label: "LinkedIn",
    username: "yourname",
  },
  {
    href: "mailto:bananammm0001@gmail.com",
    icon: Mail,
    label: "Email",
    username: "bananammm0001@gmail.com",
  },
  {
    href: "tel:0901834036",
    icon: Phone,
    label: "Phone",
    username: "090-183-4036",
  },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page header animation
      gsap.from(".page-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      });

      // Form animation
      gsap.from(".contact-form", {
        // opacity: 0,
        y: 40,
        // duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
      });

      // Social cards animation
      gsap.from(".social-card", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.4,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0d1117]">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="page-header mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="section-title">// Contact</span>
              <span className="font-mono text-[#8b949e] text-sm">
                $ ./send_message.sh
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f0f6fc] mb-4">
              Launch a Conversation
            </h1>
            <p className="text-[#8b949e] max-w-xl mx-auto">
              I am always excited to work on innovative projects and collaborate
              with like-minded individuals. Whether you have a specific project
              in mind or just want to discuss ideas, I love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="contact-form glass-card p-8 mb-12">
            <div className="font-mono text-sm text-[#8b949e] mb-6">
              <span className="text-[#bd93f9]">const</span>
              <span className="text-[#f0f6fc] mx-2">message</span>
              <span className="text-[#8b949e]">=</span>
              <span className="ml-2 text-[#8b949e]">{"{"}</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="pl-6">
                <label className="block font-mono text-sm mb-2">
                  <span className="text-[#f0f6fc]">name:</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="glass-input w-full"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="pl-6">
                <label className="block font-mono text-sm mb-2">
                  <span className="text-[#f0f6fc]">email:</span>
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="glass-input w-full"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div className="pl-6">
                <label className="block font-mono text-sm mb-2">
                  <span className="text-[#f0f6fc]">message:</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="glass-input w-full resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="font-mono text-sm text-[#8b949e]">
                <span>{"}"}</span>
                <span>;</span>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`glass-button w-full flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? "!bg-[rgba(39,202,64,0.2)] !border-[rgba(39,202,64,0.5)] !text-[#27ca40]"
                      : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#00ff9f] border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-mono text-[#8b949e] text-sm mb-6 text-center">
              // Other ways to reach me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card glass-card p-4 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8b949e] group-hover:text-[#00ff9f] group-hover:border-[rgba(0,255,159,0.3)] transition-all">
                    <link.icon size={22} />
                  </div>
                  <div>
                    <span className="block text-[#f0f6fc] font-medium text-sm">
                      {link.label}
                    </span>
                    <span className="block text-[#8b949e] text-xs font-mono truncate max-w-[140px]">
                      {link.username}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-[#8b949e] text-sm font-mono">
              <MapPin size={16} className="text-[#00ff9f]" />
              <span>Thailand</span>
              <span className="mx-2">•</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#27ca40] animate-pulse" />
                Available for work
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
