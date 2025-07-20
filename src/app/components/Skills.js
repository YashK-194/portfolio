"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: "🔗",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Solidity", icon: "⟐" },
        { name: "Smart Contracts", icon: "📜" },
        { name: "Hardhat", icon: "🔨" },
        { name: "Ethers.js", icon: "⚡" },
        { name: "IPFS", icon: "🌐" },
        { name: "DeFi", icon: "💰" },
        { name: "NFTs", icon: "🎨" },
        { name: "Chai & Mocha", icon: "☕" },
        { name: "Ganache", icon: "🍫" },
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "Next.js", icon: "▲" },
        { name: "React.js", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML", icon: "🏗️" },
        { name: "CSS", icon: "💄" },
        { name: "JavaScript", icon: "📜" },
      ],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "JavaScript", icon: "📜" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "Solidity", icon: "⟐" },
        { name: "C", icon: "⚙️" },
      ],
    },
    {
      title: "Backend & Tools",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Firebase", icon: "🔥" },
      ],
    },
    {
      title: "Data Analytics",
      icon: "📊",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Matplotlib", icon: "📈" },
        { name: "Jupyter", icon: "📓" },
      ],
    },
  ];

  const getAnimationClass = (animation) => {
    return "";
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/10 to-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">
              &gt; const skills = [
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300/80 max-w-3xl mx-auto mb-4">
            A comprehensive skill set spanning blockchain development, modern
            web technologies, programming languages, and data analytics to build
            innovative solutions.
          </p>
          <div className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">
            &gt; ]
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group relative h-full">
              {/* Main Card */}
              <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                {/* Category Icon */}
                <div className="text-center mb-6 relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative flex items-center gap-2 px-3 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-sm font-medium text-gray-300 h-12 min-w-0"
                    >
                      {/* Skill Icon */}
                      <span className="text-lg relative z-10 flex-shrink-0">
                        {skill.icon}
                      </span>

                      {/* Skill Name */}
                      <span className="text-xs truncate flex-1">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              15+
            </div>
            <div className="text-sm text-gray-300/70 font-medium">
              Smart Contracts Deployed
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
          </div>
          <div className="space-y-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-sm text-gray-300/70 font-medium">
              Full Stack Dapps Built
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto"></div>
          </div>
          <div className="space-y-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              25+
            </div>
            <div className="text-sm text-gray-300/70 font-medium">
              Web Applications
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              🏆 Certifications & Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-4 p-4 bg-white/5 rounded-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-cyan-400/30">
                  <span className="text-3xl">🎓</span>
                </div>
                <h4 className="font-semibold text-white">Ethereum Bootcamp</h4>
                <p className="text-sm text-gray-300/70">Alchemy University</p>
              </div>
              <div className="text-center space-y-4 p-4 bg-white/5 rounded-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto border border-purple-400/30">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="font-semibold text-white">
                  Smart Contract Security
                </h4>
                <p className="text-sm text-gray-300/70">
                  Learned from the god of blockchain development Patrick Collins
                  himself
                </p>
              </div>
              <div className="text-center space-y-4 p-4 bg-white/5 rounded-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto border border-pink-400/30">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-semibold text-white">
                  Full Stack DApp Development
                </h4>
                <p className="text-sm text-gray-300/70">freeCodeCamp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🏅 Key Achievements
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
                    <div className="text-2xl">🥉</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        4th Place - National Hackathon
                      </h4>
                      <p className="text-sm text-gray-300/80">
                        Secured 4th position among 80+ teams at COER University
                        National Hackathon
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Top 15 - National Hackathon
                      </h4>
                      <p className="text-sm text-gray-300/80">
                        Placed in top 15 at KIET University Hackathon by ETH
                        India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        International Event Management
                      </h4>
                      <p className="text-sm text-gray-300/80">
                        Successfully managed and coordinated international
                        events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl border border-green-400/20">
                    <div className="text-2xl">🎓</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Blockchain Club Leadership
                      </h4>
                      <p className="text-sm text-gray-300/80">
                        Founded and actively run the blockchain club in my
                        college
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              💼 Professional Experience
            </h3>

            {/* Experience Card */}
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-xl border border-orange-300/20 rounded-2xl p-6">
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white">
                      Data Analyst Intern
                    </h4>
                    <p className="text-orange-400 font-semibold">
                      Skillrisers Infotech Pvt Ltd
                    </p>
                    <p className="text-pink-400 text-sm">
                      January 2024 - March 2024 • Ghaziabad, India
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Gained hands-on experience in data processing, analysis, and
                    visualization. Worked with Python, Pandas, and Matplotlib to
                    extract insights from complex datasets and create
                    interactive dashboards for data-driven decision making.
                  </p>

                  {/* Key Skills */}
                  <div>
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">
                        Pandas
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-400/30">
                        NumPy
                      </span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs border border-pink-400/30">
                        Matplotlib
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-400/30">
                        Jupyter
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-400/30">
                        SQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              🎓 Educational Journey
            </h3>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line - Mobile: Left side, Desktop: Center */}
              <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-pink-400"></div>

              {/* Timeline Items */}
              <div className="space-y-8 md:space-y-12">
                {/* BTech - Present */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="ml-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg sm:text-2xl">🎓</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            BTech Information Technology
                          </h4>
                          <p className="text-sm text-purple-400 font-medium">
                            2022 - Present
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 ml-13 sm:ml-15">
                        <p className="text-gray-300 text-sm">
                          Bachelor of Technology
                        </p>
                        <p className="text-cyan-400 font-semibold text-sm">
                          Average SGPA: 8.0
                        </p>
                        <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-400/30">
                          Currently Pursuing
                        </div>
                      </div>
                    </div>
                    {/* Mobile Timeline Dot */}
                    <div className="absolute left-6 top-6 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-black"></div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex">
                    <div className="w-1/2 pr-8 text-right"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🎓</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">
                              BTech Information Technology
                            </h4>
                            <p className="text-sm text-purple-400 font-medium">
                              2022 - Present
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-300 text-sm">
                            Bachelor of Technology
                          </p>
                          <p className="text-cyan-400 font-semibold">
                            Average SGPA: 8.0
                          </p>
                          <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-400/30">
                            Currently Pursuing
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot - Only on desktop */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black"></div>
                </div>

                {/* Intermediate (12th) */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="ml-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg sm:text-2xl">📚</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            Intermediate (12th)
                          </h4>
                          <p className="text-sm text-cyan-400 font-medium">
                            2022
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 ml-13 sm:ml-15">
                        <p className="text-gray-300 text-sm">
                          Higher Secondary Education
                        </p>
                        <p className="text-cyan-400 font-semibold text-sm">
                          Score: 81%
                        </p>
                        <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-400/30">
                          Completed
                        </div>
                      </div>
                    </div>
                    {/* Mobile Timeline Dot */}
                    <div className="absolute left-6 top-6 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-black"></div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3 justify-end">
                          <div>
                            <h4 className="text-lg font-bold text-white">
                              Intermediate (12th)
                            </h4>
                            <p className="text-sm text-cyan-400 font-medium">
                              2022
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">📚</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-right">
                          <p className="text-gray-300 text-sm">
                            Higher Secondary Education
                          </p>
                          <p className="text-cyan-400 font-semibold">
                            Score: 81%
                          </p>
                          <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-400/30">
                            Completed
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  {/* Timeline Dot - Only on desktop */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-black"></div>
                </div>

                {/* High School (10th) */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="ml-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg sm:text-2xl">🏫</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            High School (10th)
                          </h4>
                          <p className="text-sm text-green-400 font-medium">
                            2020
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 ml-13 sm:ml-15">
                        <p className="text-gray-300 text-sm">
                          Secondary Education
                        </p>
                        <p className="text-cyan-400 font-semibold text-sm">
                          Score: 74.66%
                        </p>
                        <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">
                          Completed
                        </div>
                      </div>
                    </div>
                    {/* Mobile Timeline Dot */}
                    <div className="absolute left-6 top-6 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-black"></div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex">
                    <div className="w-1/2 pr-8 text-right"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🏫</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">
                              High School (10th)
                            </h4>
                            <p className="text-sm text-green-400 font-medium">
                              2020
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-300 text-sm">
                            Secondary Education
                          </p>
                          <p className="text-cyan-400 font-semibold">
                            Score: 74.66%
                          </p>
                          <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-400/30">
                            Completed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot - Only on desktop */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
