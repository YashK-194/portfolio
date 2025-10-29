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
						<span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">&gt; const skills = [</span>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
						Technical Expertise
					</h2>
					<p className="text-lg text-gray-300/80 max-w-3xl mx-auto mb-4">
						A comprehensive skill set spanning blockchain development, modern web technologies, programming languages, and data analytics
						to build innovative solutions.
					</p>
					<div className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">&gt; ]</div>
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
									<h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
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
											<span className="text-lg relative z-10 flex-shrink-0">{skill.icon}</span>

											{/* Skill Name */}
											<span className="text-xs truncate flex-1">{skill.name}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
