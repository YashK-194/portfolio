"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [easterEggCount, setEasterEggCount] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    // Add click animation class
    e.target.classList.add("nav-button-click", "nav-glow-click");

    // Remove classes after animation
    setTimeout(() => {
      e.target.classList.remove("nav-button-click", "nav-glow-click");
    }, 800);

    scrollToSection(sectionId);
  };

  const handleEasterEgg = (e) => {
    const newCount = easterEggCount + 1;
    setEasterEggCount(newCount);

    // Create easter egg effects based on click count
    if (newCount === 1) {
      // First click - Matrix rain effect
      createMatrixRain();
    } else if (newCount === 2) {
      // Second click - Glitch effect
      createGlitchEffect();
    } else if (newCount === 3) {
      // Third click - Konami code style celebration
      createCelebrationEffect();
    } else if (newCount >= 4) {
      // Ultimate easter egg - Full screen hacker mode
      createHackerMode();
      setEasterEggCount(0); // Reset counter
    }

    // Still scroll to hero (preserve functionality)
    setTimeout(() => {
      scrollToSection("hero");
    }, 500);
  };

  const createMatrixRain = () => {
    const matrixContainer = document.createElement("div");
    matrixContainer.className =
      "fixed inset-0 pointer-events-none z-[60] overflow-hidden";
    matrixContainer.innerHTML = `
      <div class="matrix-rain" style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        font-family: monospace;
        font-size: 14px;
        color: #00ff41;
        animation: matrixFade 3s ease-out forwards;
      ">
        ${Array.from(
          { length: 50 },
          (_, i) => `
          <div style="
            position: absolute;
            left: ${Math.random() * 100}%;
            animation: matrixDrop 2s linear infinite;
            animation-delay: ${Math.random() * 2}s;
          ">01001001 01001001</div>
        `
        ).join("")}
      </div>
    `;
    document.body.appendChild(matrixContainer);
    setTimeout(() => document.body.removeChild(matrixContainer), 3000);
  };

  const createGlitchEffect = () => {
    document.body.style.animation = "glitchScreen 0.5s ease-in-out";
    const glitchText = document.createElement("div");
    glitchText.className =
      "fixed inset-0 flex items-center justify-center pointer-events-none z-[60]";
    glitchText.innerHTML = `
      <div style="
        font-size: 4rem;
        font-weight: bold;
        color: #ff1493;
        text-shadow: 0 0 20px #00ffff;
        animation: glitchText 1s ease-out forwards;
        font-family: monospace;
      ">SYSTEM_ACCESSED</div>
    `;
    document.body.appendChild(glitchText);
    setTimeout(() => {
      document.body.removeChild(glitchText);
      document.body.style.animation = "";
    }, 1000);
  };

  const createCelebrationEffect = () => {
    const celebration = document.createElement("div");
    celebration.className =
      "fixed inset-0 pointer-events-none z-[60] flex items-center justify-center";
    celebration.innerHTML = `
      <div style="
        font-size: 3rem;
        font-weight: bold;
        color: #ff1493;
        text-shadow: 0 0 20px #ff1493, 0 0 40px #00ffff;
        animation: celebrationPulse 2s ease-out forwards;
        text-align: center;
        font-family: monospace;
        background: rgba(0, 0, 0, 0.8);
        padding: 2rem;
        border-radius: 20px;
        border: 2px solid #00ffff;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
      ">
        🎉 KONAMI CODE ACTIVATED! 🎉<br>
        <span style="
          font-size: 1.5rem;
          color: #00ffff;
          text-shadow: 0 0 15px #00ffff;
        ">Welcome to the Matrix</span>
      </div>
    `;
    document.body.appendChild(celebration);

    // Add confetti-like particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: ${
          ["#ff1493", "#00ffff", "#50fa7b"][Math.floor(Math.random() * 3)]
        };
        border-radius: 50%;
        pointer-events: none;
        z-index: 60;
        animation: particleExplode 2s ease-out forwards;
        animation-delay: ${Math.random() * 0.5}s;
        transform: translate(-50%, -50%);
      `;
      document.body.appendChild(particle);
      setTimeout(() => document.body.removeChild(particle), 2000);
    }

    setTimeout(() => document.body.removeChild(celebration), 2000);
  };

  const createHackerMode = () => {
    const hackerOverlay = document.createElement("div");
    hackerOverlay.className =
      "fixed inset-0 bg-black/90 pointer-events-none z-[60] flex items-center justify-center";
    hackerOverlay.innerHTML = `
      <div style="
        color: #00ff41;
        font-family: 'Courier New', monospace;
        font-size: 1.2rem;
        text-align: center;
        animation: hackerTyping 3s steps(60) forwards;
        white-space: pre-line;
        line-height: 1.5;
      ">
        > Initializing hacker mode..._
        > Access granted to mainframe
        > Loading user profile: YASH_KUMAR
        > Blockchain protocols: ACTIVE
        > Web3 capabilities: MAXIMUM
        > Status: LEGENDARY_DEVELOPER
        > Welcome to the digital realm! 🚀
      </div>
    `;
    document.body.appendChild(hackerOverlay);
    setTimeout(() => document.body.removeChild(hackerOverlay), 4000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleEasterEgg}
              className="text-xl font-bold hover:opacity-80 transition-opacity interactive-element text-pink-400 hover:text-cyan-400 hover:scale-110 hover:rotate-3"
              style={{
                textShadow: "0 0 10px currentColor",
                fontFamily: "monospace",
              }}
            >
              YK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={(e) => handleNavClick(e, "about")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium interactive-element"
              >
                About
              </button>
              <Link
                href="https://github.com/YashK-194/"
                className="hover:text-foreground/80 transition-colors text-sm font-medium interactive-element"
              >
                Github
              </Link>
              <button
                onClick={(e) => handleNavClick(e, "projects")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium interactive-element"
              >
                Projects
              </button>
              <Link
                href="/projects"
                className="hover:text-foreground/80 transition-colors text-sm font-medium interactive-element"
              >
                All Projects
              </Link>
              <button
                onClick={(e) => handleNavClick(e, "skills")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium interactive-element"
              >
                Skills
              </button>
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className="hover:text-foreground/80 transition-colors text-sm font-medium interactive-element"
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
            onClick={(e) => handleNavClick(e, "about")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors interactive-element"
          >
            About
          </button>
          <button
            onClick={(e) => handleNavClick(e, "projects")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors interactive-element"
          >
            Projects
          </button>
          <Link
            href="/projects"
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors interactive-element"
            onClick={() => setIsMenuOpen(false)}
          >
            All Projects
          </Link>
          <button
            onClick={(e) => handleNavClick(e, "skills")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors interactive-element"
          >
            Skills
          </button>
          <button
            onClick={(e) => handleNavClick(e, "contact")}
            className="block px-3 py-2 text-base font-medium hover:bg-foreground/10 w-full text-left transition-colors interactive-element"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
