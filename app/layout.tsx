import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Particles from "@/components/Particles";

// Primary display font - Clean geometric sans
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Code/Terminal font - Developer aesthetic
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suthep Jantawee | Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience building intuitive interfaces, exploring modern frameworks, and leveraging AI tools to enhance developer workflows.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Bangkok",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Suthep Jantawee" }],
  openGraph: {
    title: "Suthep Jantawee | Full Stack Developer",
    description:
      "Full Stack Developer crafting modern web experiences with React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0d1117]`}
      >
        <ScrollProgress />
        <Particles count={15} />
        {children}
      </body>
    </html>
  );
}
