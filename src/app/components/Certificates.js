"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Certificates() {
	const [selectedCertificate, setSelectedCertificate] = useState(null);

	const certificates = [
		{
			id: 1,
			title: "Ethereum Bootcamp",
			issuer: "Alchemy University",
			description: "Comprehensive bootcamp covering Ethereum blockchain fundamentals, smart contract development, and EVM architecture",
			image: "/certificates/EVM-Chain-Alchemy-University.png",
			color: "from-cyan-500 to-blue-500",
			date: "2024",
		},
		{
			id: 2,
			title: "Blockchain Basics",
			issuer: "Blockchain Training Alliance",
			description: "Foundational course on blockchain technology, distributed ledgers, consensus mechanisms, and cryptocurrency fundamentals",
			image: "/certificates/Blockchain-Basics-BTA.png",
			color: "from-purple-500 to-pink-500",
			date: "2024",
		},
		{
			id: 3,
			title: "Blockchain Developer Intern",
			issuer: "Dehix.org",
			description:
				"Internship certification for developing and testing Solidity smart contracts, DApp prototyping, and Web3 development experience",
			image: "/certificates/Blockchain-Intern-Dehix.png",
			color: "from-green-500 to-teal-500",
			date: "2025",
		},
		{
			id: 4,
			title: "Data Analyst Intern",
			issuer: "Skillrisers Infotech Pvt Ltd",
			description: "Internship certification for data processing, analysis, visualization using Python, Pandas, and analytics tools",
			image: "/certificates/Data-Analyst-Intern-Skillrisers.jpg",
			color: "from-orange-500 to-red-500",
			date: "2024",
		},
		{
			id: 5,
			title: "Master Node.js",
			issuer: "Scaler",
			description: "Advanced Node.js course covering backend development, RESTful APIs, Express.js, and server-side JavaScript",
			image: "/certificates/Master-NodeJs-Scaler.png",
			color: "from-green-500 to-emerald-500",
			date: "2024",
		},
		{
			id: 6,
			title: "Learn React.js",
			issuer: "Scaler",
			description: "Comprehensive React.js course covering components, hooks, state management, and modern frontend development practices",
			image: "/certificates/Learn-ReactJs-Scaler.png",
			color: "from-blue-500 to-cyan-500",
			date: "2024",
		},
	];

	const openFullscreen = (certificate) => {
		setSelectedCertificate(certificate);
		document.body.style.overflow = "hidden";
	};

	const closeFullscreen = () => {
		setSelectedCertificate(null);
		document.body.style.overflow = "unset";
	};

	// ESC key handler
	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") {
				closeFullscreen();
			}
		};

		if (selectedCertificate) {
			window.addEventListener("keydown", handleEsc);
		}

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [selectedCertificate]);

	return (
		<section
			id="certificates"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/10 to-transparent relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-block mb-4">
						<span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">&gt; certificates.validate()</span>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
						Certifications & Achievements
					</h2>
					<p className="text-lg text-gray-300/80 max-w-3xl mx-auto mb-4">
						Professional certifications and course completions showcasing continuous learning and expertise in blockchain, web
						development, and data analytics.
					</p>
					<div className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">&gt; credentials_verified ✓</div>
				</div>

				{/* Certificates Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{certificates.map((certificate) => (
						<div
							key={certificate.id}
							onClick={() => openFullscreen(certificate)}
							className="group relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-black/50 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
						>
							{/* Glow effect on hover */}
							<div
								className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
							/>

							<div className="relative z-10">
								{/* Certificate Image */}
								<div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden bg-white/5 border border-white/10">
									<Image
										src={certificate.image}
										alt={certificate.title}
										fill
										className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
									/>
								</div>

								{/* Certificate Icon */}
								<div className={`w-12 h-12 bg-gradient-to-r ${certificate.color} rounded-xl flex items-center justify-center mb-3`}>
									<span className="text-2xl">🏆</span>
								</div>

								{/* Content */}
								<div>
									<h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${certificate.color} bg-clip-text text-transparent`}>
										{certificate.title}
									</h3>
									<p className="text-cyan-400 text-sm font-medium mb-2">{certificate.issuer}</p>
									<p className="text-gray-400 text-xs mb-3 line-clamp-2">{certificate.description}</p>
									<div className="flex items-center justify-between">
										<span className="text-gray-500 text-xs">{certificate.date}</span>
										<span className="text-cyan-400 text-xs font-medium group-hover:text-pink-400 transition-colors">
											View Certificate →
										</span>
									</div>
								</div>

								{/* Hover indicator */}
								<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Info Box */}
				<div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
					<p className="text-gray-300 text-sm">
						<span className="text-cyan-400 font-semibold">💡 Pro Tip:</span> Click on any certificate to view it in fullscreen mode
					</p>
				</div>
			</div>

			{/* Fullscreen Modal */}
			{selectedCertificate && (
				<div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fadeIn" onClick={closeFullscreen}>
					{/* Close Button */}
					<button
						onClick={closeFullscreen}
						className="absolute top-4 right-4 z-[101] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
						aria-label="Close"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* Certificate Info */}
					<div className="absolute top-4 left-4 z-[101] bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-md">
						<h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${selectedCertificate.color} bg-clip-text text-transparent`}>
							{selectedCertificate.title}
						</h3>
						<p className="text-cyan-400 text-sm font-medium mb-2">{selectedCertificate.issuer}</p>
						<p className="text-gray-300 text-xs">{selectedCertificate.description}</p>
					</div>

					{/* Certificate Image - Fullscreen */}
					<div
						className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative w-full h-full">
							<Image
								src={selectedCertificate.image}
								alt={selectedCertificate.title}
								fill
								className="object-contain"
								quality={100}
								priority
							/>
						</div>
					</div>

					{/* Navigation Hint */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
						<p className="text-gray-300 text-sm">Press ESC or click outside to close</p>
					</div>
				</div>
			)}

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s ease-out;
				}
			`}</style>
		</section>
	);
}
