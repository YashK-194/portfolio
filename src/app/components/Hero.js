"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Blockchain Developer",
    "Web Developer",
    "Student",
    "Freelancer",
    "Smart Contract Creator",
    "Web3 Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Cyberpunk Moving Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Grid Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        {/* Subtle Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `subtleFloat ${
                  4 + Math.random() * 2
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Greeting */}
        <div className="mb-8">
          <span className="inline-block text-lg sm:text-xl text-cyan-400 font-mono tracking-wider">
            &gt; Hello, World! �
          </span>
        </div>

        {/* Main heading with name and animated text */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6">
            <span className="block text-white mb-4 tracking-tight">
              I'm{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                }}
              >
                Yash Kumar
              </span>
            </span>
            <span
              className="block bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent min-h-[1.2em] transition-all duration-500 font-mono tracking-wider"
              style={{
                backgroundSize: "200% 200%",
                animation: "subtleGradient 4s ease infinite",
                textShadow: "0 0 15px rgba(255, 20, 147, 0.4)",
              }}
            >
              {texts[currentText]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting the{" "}
            <span className="font-semibold text-cyan-400 glow-text">
              future of web
            </span>{" "}
            with{" "}
            <span className="font-semibold text-pink-400 glow-text">
              blockchain technology
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-400 glow-text">
              cyberpunk aesthetics
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 w-full sm:w-auto border border-cyan-400 cyberpunk-button"
          >
            <span className="flex items-center justify-center gap-2">
              🚀 View My Work
            </span>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-full font-medium text-lg hover:bg-pink-500 hover:text-black hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105 w-full sm:w-auto cyberpunk-button-outline"
          >
            <span className="flex items-center justify-center gap-2">
              📡 Get In Touch
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm text-cyan-400 mb-2 font-mono tracking-wider">
            &gt; SCROLL_DOWN
          </span>
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ filter: "drop-shadow(0 0 5px rgba(0, 255, 255, 0.8))" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes subtleFloat {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.6;
          }
        }

        .glow-text {
          text-shadow: 0 0 8px currentColor;
        }

        .cyberpunk-button {
          position: relative;
          overflow: hidden;
        }

        .cyberpunk-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cyberpunk-button:hover::before {
          left: 100%;
        }

        .cyberpunk-button-outline {
          position: relative;
          overflow: hidden;
        }

        .cyberpunk-button-outline::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 20, 147, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .cyberpunk-button-outline:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
}
