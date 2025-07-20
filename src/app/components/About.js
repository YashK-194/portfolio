'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Creativity is my craft,{' '}
              <span className="text-blue-500">innovation</span> is my passion
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                A passionate software engineer with expertise in both{' '}
                <span className="font-semibold text-foreground">blockchain development</span> and{' '}
                <span className="font-semibold text-foreground">modern web technologies</span>. 
                I believe in the transformative power of decentralized technologies.
              </p>
              
              <p>
                Currently specializing in smart contract development, DeFi protocols, 
                and building user-friendly dApps that bridge the gap between complex 
                blockchain technology and everyday users.
              </p>
              
              <p>
                My projects focus on creating innovative solutions that combine 
                cutting-edge blockchain capabilities with exceptional user experience 
                and clean, maintainable code.
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                View My Projects
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-foreground/10">
              <div className="w-full h-full bg-foreground/5 rounded-xl flex items-center justify-center">
                {/* Code-like visualization */}
                <div className="text-left font-mono text-sm space-y-2 text-foreground/60">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">const</span>
                    <span>developer</span>
                    <span>=</span>
                    <span className="text-green-500">{`{`}</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="text-purple-500">name:</span>{' '}
                      <span className="text-yellow-500">'Yash Kumar'</span>,
                    </div>
                    <div>
                      <span className="text-purple-500">role:</span>{' '}
                      <span className="text-yellow-500">'Blockchain Dev'</span>,
                    </div>
                    <div>
                      <span className="text-purple-500">passion:</span>{' '}
                      <span className="text-yellow-500">'Web3 & DeFi'</span>,
                    </div>
                    <div>
                      <span className="text-purple-500">mission:</span>{' '}
                      <span className="text-yellow-500">'Building the future'</span>
                    </div>
                  </div>
                  <div className="text-green-500">{`}`}</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
