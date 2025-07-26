"use client";

export default function Contact() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const contactLinks = [
    {
      name: "Email",
      value: "yashkm194@gmail.com",
      href: "mailto:yashkm194@gmail.com",
      icon: "📧",
      color: "from-cyan-500 to-blue-500",
      description: "Let's discuss your project",
    },
    {
      name: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yashk194",
      icon: "💼",
      color: "from-blue-500 to-purple-500",
      description: "Professional network",
    },
    {
      name: "GitHub",
      value: "View my repositories",
      href: "https://github.com/YashK-194",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
      description: "Code & open source",
    },
    {
      name: "LeetCode",
      value: "Coding challenges",
      href: "https://leetcode.com/u/YashKm_194/ ",
      icon: "⚡",
      color: "from-orange-500 to-red-500",
      description: "Problem solving skills",
    },
    {
      name: "Stack Overflow",
      value: "Community contributions",
      href: "https://stackoverflow.com/users/22384694/yash-kumar",
      icon: "🔥",
      color: "from-yellow-500 to-orange-500",
      description: "Tech Q&A community",
    },
    {
      name: "About Me",
      value: "That's me, the man himself",
      href: "#about",
      icon: "👨‍💻",
      color: "from-green-500 to-teal-500",
      description: "Get to know the developer",
      isPhoto: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-pink-500/10" />
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `subtleFloat ${
                3 + Math.random() * 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">
              &gt; initiate_connection()
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
            Let's Connect & Build Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your{" "}
            <span className="text-cyan-400 font-semibold">
              blockchain ideas
            </span>{" "}
            to life? Let's collaborate and create something{" "}
            <span className="text-pink-400 font-semibold">extraordinary</span>{" "}
            together.
          </p>
          <div className="text-lg text-cyan-400 font-mono tracking-wider opacity-80 mt-4">
            &gt; contact_established ✓
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-black/50 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon or Photo */}
                {contact.isPhoto ? (
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                  >
                    {/* Placeholder for photo - you can replace this with an actual image */}
                    <img
                      src="/me.png"
                      alt="YK"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* To use an actual photo, replace the div above with: */}
                    {/* <img 
                      src="/path-to-your-photo.jpg" 
                      alt="Yash Kumar" 
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                ) : (
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{contact.icon}</span>
                  </div>
                )}

                {/* Content */}
                <div className="text-center">
                  <h3
                    className={`text-xl font-bold mb-2 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`}
                  >
                    {contact.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2 group-hover:text-white transition-colors">
                    {contact.value}
                  </p>
                  <p className="text-gray-500 text-xs">{contact.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Status Info */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-cyan-400 font-mono text-sm">TIMEZONE</div>
              <div className="text-white font-semibold">
                {currentTime} IST (GMT+5:30)
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-pink-400 font-mono text-sm">
                RESPONSE_TIME
              </div>
              <div className="text-white font-semibold">
                Usually within 24 hours
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400 font-mono text-sm">STATUS</div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">
                  Available for projects
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-300 italic">
              "Building the future of web with blockchain technology and
              cyberpunk aesthetics"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2025 Yash Kumar • Built with Next.js & Tailwind CSS • Powered by
            Web3 ⚡
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleFloat {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
