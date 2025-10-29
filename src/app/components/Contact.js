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
			svg: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
					<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
				</svg>
			),
			color: "from-cyan-500 to-blue-500",
			description: "Let's discuss your project",
		},
		{
			name: "LinkedIn",
			value: "Connect with me",
			href: "https://linkedin.com/in/yashk194",
			svg: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
				</svg>
			),
			color: "from-blue-500 to-purple-500",
			description: "Professional network",
		},
		{
			name: "GitHub",
			value: "View my repositories",
			href: "https://github.com/YashK-194",
			svg: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			),
			color: "from-purple-500 to-pink-500",
			description: "Code & open source",
		},
		{
			name: "LeetCode",
			value: "Coding challenges",
			href: "https://leetcode.com/u/YashKm_194/ ",
			svg: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
				</svg>
			),
			color: "from-orange-500 to-red-500",
			description: "Problem solving skills",
		},
		{
			name: "Stack Overflow",
			value: "Community contributions",
			href: "https://stackoverflow.com/users/22384694/yash-kumar",
			svg: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.093-10.473-2.201zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
				</svg>
			),
			color: "from-yellow-500 to-orange-500",
			description: "Tech Q&A community",
		},
		{
			name: "Twitter (X)",
			value: "Follow my journey",
			href: "https://x.com/yashk194",
			svg: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
				</svg>
			),
			color: "from-gray-400 to-gray-600",
			description: "Tech updates & insights",
		},
	];

	return (
		<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
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
							animation: `subtleFloat ${3 + Math.random() * 2}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
						}}
					/>
				))}
			</div>

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-block mb-4">
						<span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">&gt; initiate_connection()</span>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
						Let's Connect & Build Together
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Ready to bring your <span className="text-cyan-400 font-semibold">blockchain ideas</span> to life? Let's collaborate and
						create something <span className="text-pink-400 font-semibold">extraordinary</span> together.
					</p>
					<div className="text-lg text-cyan-400 font-mono tracking-wider opacity-80 mt-4">&gt; contact_established ✓</div>
				</div>

				{/* Contact Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{contactLinks.map((contact, index) => (
						<a
							key={index}
							href={contact.href}
							target={contact.href.startsWith("http") ? "_blank" : undefined}
							rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
							className="group relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-black/50 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
						>
							{/* Glow effect on hover */}
							<div
								className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
							/>

							<div className="relative z-10">
								{/* Icon */}
								<div
									className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}
								>
									{contact.svg}
								</div>

								{/* Content */}
								<div className="text-center">
									<h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`}>
										{contact.name}
									</h3>
									<p className="text-gray-300 text-sm mb-2 group-hover:text-white transition-colors">{contact.value}</p>
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
							<div className="text-white font-semibold">{currentTime} IST (GMT+5:30)</div>
						</div>
						<div className="space-y-2">
							<div className="text-pink-400 font-mono text-sm">RESPONSE_TIME</div>
							<div className="text-white font-semibold">Usually within 24 hours</div>
						</div>
						<div className="space-y-2">
							<div className="text-purple-400 font-mono text-sm">STATUS</div>
							<div className="flex items-center justify-center gap-2">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
								<span className="text-green-400 font-semibold">Available for projects</span>
							</div>
						</div>
					</div>

					<div className="mt-8 pt-6 border-t border-white/10">
						<p className="text-gray-300 italic">"Building the future of web with blockchain technology and cyberpunk aesthetics"</p>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-16 pt-8 border-t border-white/10 text-center">
					<p className="text-gray-500 font-mono text-sm">© 2025 Yash Kumar • Built with Next.js & Tailwind CSS • Powered by Web3 ⚡</p>
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
