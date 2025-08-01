"use client";

import { useState } from "react";
import Link from "next/link";

export default function AllProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
      type: "blockchain",
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
      type: "blockchain",
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
      type: "blockchain",
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
      type: "blockchain",
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
      type: "blockchain",
      network: "Ethereum Sepolia",
    },
    {
      title: "Venom Hello World",
      category: "Venom dApp",
      description:
        "A foundational Venom blockchain project demonstrating smart contract development using the Locklift framework. Features a simple Hello World contract written in Ever Solidity, comprehensive deployment scripts for multiple networks, and automated testing. The project showcases development workflow on the Venom blockchain with TypeScript integration, TVM Compatible support for local development, and deployment capabilities across local, testnet, and mainnet environments.",
      technologies: [
        "Ever Solidity",
        "Locklift",
        "TypeScript",
        "Venom Blockchain",
        "TVM Compatible",
      ],
      features: [
        "Smart Contract Deployment",
        "Multi-network Support",
        "Automated Testing",
        "TypeScript Integration",
      ],
      status: "Live on Testnet",
      image: "/projects/venomhelloworld.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/locklift-sample-project",
      type: "blockchain",
      network: "Venom Testnet",
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
      type: "blockchain",
      network: "Ethereum Local",
    },
    {
      title: "NFT Picture Store",
      category: "E-commerce dApp",
      description:
        "A responsive React application for browsing and purchasing pictures online with blockchain integration. Users can select images they want to purchase, add them to a shopping cart, and check out when ready. Once purchased, images are marked as sold and no longer available for others to buy. Features real-time price calculation, responsive design, and custom React hooks for cart functionality.",
      technologies: [
        "React",
        "CSS3",
        "React Hooks",
        "JavaScript",
        "Hardhat",
        "Metamask",
      ],
      features: [
        "Shopping Cart",
        "Purchasing Images With Eth via Metamask",
        "Real-time Price Calculation",
        "Purchase Tracking",
      ],
      status: "Live on Sepolia",
      image: "/projects/nftpicturestore.png",
      demoUrl: "https://picture-store-yashk.vercel.app",
      githubUrl: "https://github.com/YashK-194/picture-store",
      type: "blockchain",
      network: "Web Application",
    },
    {
      title: "Hardhat Fund Me",
      category: "DeFi dApp",
      description:
        "A basic Hardhat project demonstrating fundamental smart contract development and testing. Features a simple fund me contract that allows users to contribute funds, with comprehensive testing suite and automated deployment using Hardhat Ignition modules. The project showcases essential blockchain development workflows including contract compilation, testing, and local deployment on Ganache or Hardhat local node.",
      technologies: [
        "Solidity",
        "Hardhat",
        "JavaScript",
        "Hardhat Ignition",
        "Ganache",
      ],
      features: [
        "Fund Contribution",
        "Smart Contract Testing",
        "Local Deployment",
        "Hardhat Integration",
      ],
      status: "Live on Localhost",
      image: "/projects/hardhatfundme.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/hardhat-fund-me",
      type: "blockchain",
      network: "Hardhat Local",
    },
    {
      title: "ICP Token Wallet",
      category: "Internet Computer dApp",
      description:
        "A decentralized token wallet built on the Internet Computer Protocol (ICP) using Rust and Candid. This wallet provides secure token storage and management functionality leveraging ICP's unique canister architecture. Features include token balance tracking, secure transfers, and integration with Internet Computer's decentralized infrastructure. The project demonstrates ICP development best practices and showcases the power of building on a truly decentralized web platform.",
      technologies: ["Rust", "Candid", "Internet Computer", "IC CDK", "DFX"],
      features: [
        "Token Storage",
        "Secure Transfers",
        "Canister Architecture",
        "Decentralized Infrastructure",
      ],
      status: "Live on ICP",
      image: "/projects/icptokenwallet.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/icp-token-wallet",
      type: "blockchain",
      network: "Internet Computer",
    },
    {
      title: "Ethers Lottery",
      category: "DeFi Lottery",
      description:
        "A decentralized lottery application built with smart contracts that enables transparent and fair lottery games on the blockchain. Features automated winner selection, secure fund management, and provably fair random number generation. The platform ensures complete transparency in the lottery process with all transactions and results recorded on-chain, eliminating the possibility of manipulation or fraud.",
      technologies: [
        "Solidity",
        "Ethers.js",
        "Hardhat",
        "JavaScript",
        "React.js",
      ],
      features: [
        "Automated Winner Selection",
        "Secure Fund Management",
        "Provably Fair",
        "Transparent Results",
      ],
      status: "In Development",
      image: "/projects/etherslottery.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/ethers-lottery",
      type: "blockchain",
      network: "Ethereum Local",
    },
    {
      title: "Coffee DApp",
      category: "Donation Platform",
      description:
        "A simple and elegant decentralized donation platform inspired by 'Buy Me a Coffee' that allows supporters to send ETH donations directly to creators. Built with Solidity smart contracts and a clean React frontend, it enables seamless crypto donations with transparent transaction records. Features include donation tracking, supporter messages, and withdrawal functionality for creators, all powered by blockchain technology.",
      technologies: [
        "Solidity",
        "React.js",
        "Ethers.js",
        "Hardhat",
        "JavaScript",
      ],
      features: [
        "ETH Donations",
        "Supporter Messages",
        "Donation Tracking",
        "Creator Withdrawals",
      ],
      status: "Live on Localhost",
      image: "/projects/coffeedapp.svg",
      demoUrl: "#",
      githubUrl: "https://github.com/YashK-194/coffee-dapp",
      type: "blockchain",
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
      type: "web",
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
      type: "web",
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
      type: "web",
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
      type: "web",
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
      type: "web",
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
      type: "web",
      network: "Web Application",
    },
  ];

  const allProjects = [...blockchainProjects, ...webProjects];

  const filteredProjects = () => {
    let projects = allProjects;

    if (activeTab === "blockchain") {
      projects = blockchainProjects;
    } else if (activeTab === "web") {
      projects = webProjects;
    }

    if (searchTerm) {
      projects = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    return projects;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-lg text-cyan-400 font-mono tracking-wider opacity-80">
                &gt; const allProjects = [...blockchainProjects, ...webProjects];
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-lg text-gray-300/80 max-w-3xl mx-auto mb-8">
              Explore my complete portfolio of blockchain innovations and modern
              web applications
            </p>

            {/* GitHub All Projects Button */}
            <div className="mb-8">
              <button
                onClick={() =>
                  window.open("https://github.com/YashK-194", "_blank")
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-white rounded-full font-medium hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all transform hover:scale-105 backdrop-blur-md"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                🚀 View All Projects on GitHub
              </button>
            </div>

            {/* Fun Notice */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🤓</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                      Pro Tip: Don't let the numbers fool you! 📊
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      While I might have fewer standalone web projects compared
                      to blockchain ones, every single blockchain dApp you see
                      here required extensive{" "}
                      <strong className="text-white">
                        frontend development
                      </strong>
                      ,<strong className="text-white"> UI/UX design</strong>,
                      and{" "}
                      <strong className="text-white">web technologies</strong>.
                      Building those sleek interfaces, responsive designs, and
                      seamless user experiences? That's all web development
                      magic! ✨ Each blockchain project is essentially a
                      full-stack web app with smart contracts as the backend.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === "all"
                      ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-white border border-cyan-400/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  🚀 All Projects ({allProjects.length})
                </button>
                <button
                  onClick={() => setActiveTab("blockchain")}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === "blockchain"
                      ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-white border border-cyan-400/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  🔗 Blockchain ({blockchainProjects.length})
                </button>
                <button
                  onClick={() => setActiveTab("web")}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === "web"
                      ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-white border border-cyan-400/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  🌐 Web ({webProjects.length})
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects().map((project, index) => (
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
                            {project.type === "blockchain" ? (
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
                      <p className="text-gray-300 text-sm leading-relaxed">
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
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-400"
                          >
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-60"></div>
                            {feature}
                          </li>
                        ))}
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
                            onClick={() =>
                              window.open(project.demoUrl, "_blank")
                            }
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

          {/* No Results */}
          {filteredProjects().length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="text-center mt-20 py-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 text-white rounded-full font-medium text-lg hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:scale-105 backdrop-blur-md"
            >
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
