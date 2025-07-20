"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold hover:opacity-80 transition-opacity"
            >
              YK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium"
              >
                Projects
              </button>
              <Link
                href="/projects"
                className="hover:text-foreground/80 transition-colors text-sm font-medium"
              >
                All Projects
              </Link>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-foreground/10 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-6 h-6">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "-translate-y-0.5"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-0.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-foreground/10">
          <button
            onClick={() => scrollToSection("about")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors"
          >
            Projects
          </button>
          <Link
            href="/projects"
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            All Projects
          </Link>
          <button
            onClick={() => scrollToSection("skills")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
