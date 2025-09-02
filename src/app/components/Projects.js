"use client";

import { useState } from "react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("blockchain");

  const blockchainProjects = [
    {
      title: "DeFi Salary",
      category: "Decentralized Payroll",
      description:
        "A decentralized payroll management system that automates salary payments using smart contracts. Built with Solidity and Next.js, it enables organizations to efficiently manage employee details, track payments, and ensure timely salary disbursements using blockchain technology. Features ChainLink automation for scheduled payments and real-time ETH/USD price conversion for accurate salary calculations.",
      technologies: [
        "Solidity",
        "Next.js",
        "Hardhat",
        "Ethers.js",
        "ChainLink",
      ],
      features: [
        "Automated Payments",
        "Employee Management",
        "Real-time Price Feeds",
        "Admin Dashboard",
      ],
      status: "Live on Sepolia",
      image: "/projects/defisalary.png",
      demoUrl: "https://defisalary-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/defisalary",
      contractAddress: "0x205Ec9442384AC22eeAaA7C330937Af2fFfB8227",
      etherscanUrl:
        "https://sepolia.etherscan.io/address/0x205Ec9442384AC22eeAaA7C330937Af2fFfB8227",
    },
    {
      title: "NFT Warranty",
      category: "Blockchain dApp",
      description:
        "A blockchain-based warranty management system that utilizes NFTs to represent warranties. Built with Solidity smart contracts and Next.js frontend, it enables secure warranty issuance, verification, and management on the blockchain. Features comprehensive unit testing with Chai and automated deployment using Hardhat Ignition. The smart contract is verified on Etherscan for transparency and trust.",
      technologies: [
        "Solidity",
        "Next.js",
        "Hardhat",
        "Chai",
        "Hardhat Ignition",
      ],
      features: [
        "NFT Warranties",
        "Smart Contract Verification",
        "Warranty Management",
        "Blockchain Security",
      ],
      status: "Live on Sepolia",
      image: "/projects/nftwarranty.png",
      demoUrl: "https://nft-warranty-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/nft-warranty",
      contractAddress: "0xDdB2255528C6D3d8418968704C5B26590b75413B",
      etherscanUrl:
        "https://sepolia.etherscan.io/address/0xDdB2255528C6D3d8418968704C5B26590b75413B",
    },
    {
      title: "NFT Factory",
      category: "NFT Platform",
      description:
        "A decentralized application that allows users to create and manage NFTs seamlessly in seconds. Built with Solidity smart contracts and Next.js frontend, it features admin functionalities for supply management, automated minting processes, and IPFS integration for metadata storage. The platform automatically detects wallet and network changes, with NFT metadata stored on IPFS using Pinata for decentralized storage.",
      technologies: [
        "Solidity",
        "Next.js",
        "Hardhat",
        "Chai",
        "IPFS",
        "Pinata",
      ],
      features: [
        "Admin Controls",
        "IPFS Metadata Storage",
        "Automated Minting",
        "Network Detection",
      ],
      status: "Live on Sepolia",
      image: "/projects/nftfactory.png",
      demoUrl: "https://nft-factory-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/nft-factory",
      contractAddress: "0xa397d7e7C68C9b6aAC9A09F38F1F66c7CcE977b1",
      etherscanUrl:
        "https://sepolia.etherscan.io/address/0xa397d7e7C68C9b6aAC9A09F38F1F66c7CcE977b1",
    },
    {
      title: "Solana Token Manager",
      category: "Solana dApp",
      description:
        "A comprehensive Solana SPL token management application built with Next.js that allows users to create, mint, send, and manage SPL tokens directly from their browser. Features wallet integration using Solana Wallet Adapter, token creation with custom parameters, token minting capabilities, and a complete dashboard for viewing token balances. Built with React 19, Tailwind CSS, and Solana Web3.js for seamless blockchain interaction.",
      technologies: [
        "Next.js",
        "React",
        "Solana Web3.js",
        "SPL Token",
        "Tailwind CSS",
      ],
      features: [
        "Token Creation",
        "Token Minting",
        "Token Transfers",
        "Wallet Integration",
      ],
      status: "Live on Devnet",
      image: "/projects/solanatokenmanager.png",
      demoUrl: "https://sol-token-manager-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/solana-token-manager",
      network: "Solana Devnet",
    },
    {
      title: "Millow - Real Estate NFT DApp",
      category: "Real Estate Platform",
      description:
        "A secure and transparent blockchain-based real estate platform inspired by Zillow. Features decentralized property listings, seamless transactions, automated lending via smart contracts, and transparent approval processes. The platform includes specialized role-based access for buyers, listers, lenders, and approvers, ensuring efficient and secure real estate transactions on the blockchain with complete transparency and automation.",
      technologies: [
        "Solidity",
        "React.js",
        "Hardhat",
        "Ethers.js",
        "JavaScript",
      ],
      features: [
        "Decentralized Listings",
        "Automated Lending",
        "Role-based Access",
        "Transparent Approvals",
      ],
      status: "Live on Sepolia",
      image: "/projects/millow.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/Millow-The-Real-Estate-NFT-app",
      network: "Ethereum Sepolia",
    },
    {
      title: "TicketChain",
      category: "NFT Ticketing",
      description:
        "A blockchain-based decentralized ticketing application that sells tickets as NFTs to ensure authenticity and eliminate fraud. Built with Solidity smart contracts and React frontend, it features real-time seat selection, instant payments through MetaMask, and transparent blockchain transactions. Event organizers can create events while users purchase unique, non-duplicable tickets with all transactions recorded on-chain for complete transparency and security.",
      technologies: [
        "Solidity",
        "React.js",
        "Hardhat",
        "Ethers.js",
        "MetaMask",
      ],
      features: [
        "NFT Tickets",
        "Real-time Seat Selection",
        "Instant Payments",
        "Fraud Prevention",
      ],
      status: "Live on Localhost",
      image: "/projects/ticketchain.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/ticketchain",
      network: "Ethereum Local",
    },
  ];

  const webProjects = [
    {
      title: "Labro.in",
      category: "Service Marketplace",
      description:
        "A comprehensive platform that connects users with local service providers like electricians and plumbers, enabling easy service listing, discovery, and direct communication. Acquired over 100 users within the first two months of launch in February 2025. Features real-time distance calculation, location-based service discovery, and secure authentication with Firebase integration.",
      technologies: [
        "Next.js",
        "Firebase",
        "Google Maps API",
        "React.js",
        "JavaScript",
      ],
      features: [
        "Real-time Distance Calculation",
        "Location-based Service Discovery",
        "6+ Predefined Services",
        "Custom Service Listing",
      ],
      status: "Live",
      image: "/projects/labro.png",
      demoUrl: "https://labro.in",
      githubUrl: "https://github.com/YashK-194/labro",
      network: "Web Application",
    },
    {
      title: "FinFluence",
      category: "Social Investment Platform",
      description:
        "A revolutionary social media platform that enables users to discover, invest in, and collaborate on innovative projects, ideas, and startups. Built with Next.js and Firebase, FinFluence combines social networking with investment opportunities, featuring project showcases, real-time collaboration tools, investor matching, and community-driven funding. The platform provides a seamless experience for entrepreneurs to present their ideas and for investors to find promising ventures.",
      technologies: [
        "Next.js",
        "Firebase",
        "React.js",
        "Firestore",
        "Firebase Auth",
      ],
      features: [
        "Project Investment Platform",
        "Social Networking Features",
        "Real-time Collaboration",
        "Investor Matching System",
      ],
      status: "Live",
      image: "/projects/finfluence.png",
      demoUrl: "https://finfluence-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/finfluence",
      network: "Web Application",
    },
    {
      title: "DemoStore",
      category: "E-commerce Platform",
      description:
        "A modern, full-featured e-commerce platform built with Next.js, Firebase, and Tailwind CSS. Features complete shopping cart functionality, admin dashboard for product management, hero carousel, advanced search and filtering, user authentication, and responsive design. Includes comprehensive admin panel for managing products, categories, orders, and analytics with real-time Firebase integration.",
      technologies: [
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "React.js",
        "Firestore",
      ],
      features: [
        "Complete Shopping Cart",
        "Admin Dashboard",
        "Real-time Updates",
        "Advanced Search & Filtering",
      ],
      status: "Live",
      image: "/projects/demostore.png",
      demoUrl: "https://demostore-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/demo-store",
      network: "Web Application",
    },
    {
      title: "Jewelry Store",
      category: "E-commerce Platform",
      description:
        "An elegant and sophisticated jewelry e-commerce platform built with Next.js, featuring a modern shopping experience for luxury jewelry items. The platform includes comprehensive product catalogs, detailed product views with high-quality imagery, shopping cart functionality, and seamless checkout processes. Designed with a focus on visual appeal and user experience to showcase jewelry collections effectively.",
      technologies: [
        "Next.js",
        "React.js",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Product Details",
        "Responsive Design",
      ],
      status: "Live",
      image: "/projects/jewelrystore.png",
      demoUrl: "https://cra1x-jewellery.vercel.app",
      githubUrl: "https://github.com/YashK-194/cra1x-jewellery",
      network: "Web Application",
    },
    {
      title: "Movie List",
      category: "Movie Management App",
      description:
        "A simple yet efficient movie list application built with Next.js, Firebase, and the OMDB API. Features admin-only movie management using Firebase Authentication, automatic movie data caching for optimized performance, and duplicate prevention. The app fetches detailed movie information from OMDB API, stores movie names in Firebase with automatic title case formatting, and displays movies in order of addition with efficient search capabilities.",
      technologies: ["Next.js", "Firebase", "OMDB API", "React.js", "Vercel"],
      features: [
        "Admin-Only Movie Management",
        "Optimized Data Caching",
        "Automatic Title Formatting",
        "Efficient Movie Search",
      ],
      status: "Live",
      image: "/projects/movielist.png",
      demoUrl: "https://moviesbyyash.vercel.app",
      githubUrl: "https://github.com/YashK-194/movie-list",
      network: "Web Application",
    },
    {
      title: "URL Shortener",
      category: "URL Management Tool",
      description:
        "A fully functional URL shortener application built with Next.js and React featuring bulk URL shortening, custom shortcodes, and comprehensive analytics. Create up to 5 shortened URLs at once with custom expiry dates, track click counts, and monitor performance through a statistics dashboard. Features modern Material-UI design, client-side validation, local storage persistence, and seamless redirection with error handling for expired URLs.",
      technologies: [
        "Next.js",
        "React",
        "Material-UI",
        "Context API",
        "Custom Logging",
      ],
      features: [
        "Bulk URL Shortening",
        "Custom Shortcodes",
        "Click Tracking",
        "Statistics Dashboard",
      ],
      status: "Live",
      image: "/projects/urlshortener.png",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/Url-Shortner-With-Custom-Logger",
      network: "Web Application",
    },
  ];

  const currentProjects =
    activeTab === "blockchain" ? blockchainProjects : webProjects;

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">
              &gt; const projects = await fetchMyWork();
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300/80 max-w-2xl mx-auto mb-8">
            Explore my work in blockchain innovation and modern web development
          </p>

          {/* Fun Notice - Only show on web tab */}
          {activeTab === "web" && (
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-pink-400/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-pink-400 mb-2">
                      Plot Twist: Every blockchain project is web development!
                      🎭
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Don't be fooled by the "fewer web projects" count! Each of
                      my 12+ blockchain dApps required extensive{" "}
                      <strong className="text-white">
                        React/Next.js development
                      </strong>
                      ,
                      <strong className="text-white">
                        {" "}
                        responsive UI design
                      </strong>
                      , and
                      <strong className="text-white"> seamless UX</strong>.
                      Building those beautiful interfaces that connect to smart
                      contracts? That's pure web development wizardry! ⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 inline-flex">
              <button
                onClick={() => setActiveTab("blockchain")}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === "blockchain"
                    ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-white border border-cyan-400/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                🔗 Blockchain Projects
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === "web"
                    ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-white border border-cyan-400/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                🌐 Web Projects
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div key={index} className="group h-full">
              {/* Glassmorphism Card */}
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center relative"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Category Badge in Bottom Left */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                          {activeTab === "blockchain" ? (
                            <svg
                              className="w-4 h-4 text-cyan-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4 text-pink-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-white font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge in Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border ${
                          project.status === "Live on Mainnet" ||
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-300 border-green-400/30"
                            : project.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                            : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-400"
                          >
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-60"></div>
                            {feature}
                          </li>
                        ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.title === "Labro.in" ? (
                      // Special buttons for Labro.in
                      <button
                        onClick={() => window.open(project.demoUrl, "_blank")}
                        className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 transition-all text-sm font-medium backdrop-blur-sm"
                      >
                        Live Site
                      </button>
                    ) : (
                      // Standard buttons for all other projects
                      <>
                        <button
                          onClick={() => window.open(project.demoUrl, "_blank")}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 transition-all text-sm font-medium backdrop-blur-sm"
                        >
                          Demo
                        </button>
                        <button
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                          className="flex-1 px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all text-sm font-medium backdrop-blur-sm"
                        >
                          Code
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button
            onClick={(e) => {
              e.target.classList.add("cta-button-click");
              setTimeout(
                () => e.target.classList.remove("cta-button-click"),
                800
              );
              window.location.href = "/projects";
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 text-white rounded-full font-medium text-lg hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:scale-105 backdrop-blur-md interactive-element"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              View All Projects
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
