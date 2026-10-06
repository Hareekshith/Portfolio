import React, { useState } from 'react';

const projectsData = [
  {
    title: "EPCRAS",
    paragraph: "A Patch Compliance and a Risk management solution, following a simple architecture.",
    link: "https://github.com/Hareekshith/EPCRAS",
    category: 'Cyber Security'
  },
  {
    title: 'Keylogger Detector',
    paragraph: 'A utility developed for Linux to detect malicious keyloggers based on heuristic process and keystroke behaviors.',
    link: 'https://github.com/Hareekshith/keylogger-detection',
    category: 'Cyber Security',
  },
  {
    title: 'TEED-TS-WEB',
    paragraph: 'Full-stack platform that captures, processes, and displays system entry and exit logs with visual data metrics.',
    link: 'https://github.com/Hareekshith/TEED-TS-WEB',
    category: 'Web Development',
  },
  {
    title: 'TimeTable Generator',
    paragraph: 'Automated scheduling application that computes constraint weights to generate balanced operational schedules.',
    link: 'https://github.com/hareekshith/TimeTable-Generator',
    category: 'Web Development',
  },
  {
    title: 'Home CS LAB',
    paragraph: 'Isolated security lab built for blue-team operations to analyze, simulate attacks, and patch vulnerabilities.',
    link: 'https://github.com/hareekshith/Home_CS_LAB',
    category: ['Cyber Security', 'Networks'],
  },
  {
    title: 'Prufung-AI',
    paragraph: 'AI-assisted examination system providing dynamic question synthesis and multi-tiered difficulty result analysis.',
    link: 'https://github.com/hareekshith/Prufung',
    category: 'Web Development',
  },
  {
    title: 'PacketSniffer',
    paragraph: 'Network utility built using Scapy that inspects deep network packets, protocols, and payload anomalies.',
    link: 'https://github.com/hareekshith/PacketSniffer',
    category: 'Networks',
  },
  {
    title: 'CodeReviewer',
    paragraph: 'Static analysis tool that inspects Python-based backend source code and generates secure mitigation alternatives.',
    link: 'https://github.com/hareekshith/CodeReviewer',
    category: 'Cyber Security',
  },
  {
    title: 'NetSentinel',
    paragraph: 'Host-based security monitor written in Python detecting SYN Flood attacks and port scans in real time.',
    link: 'https://github.com/Hareekshith/NetSentinel',
    category: ['Networks', 'Cyber Security'],
  },
  {
    title: 'ApriNet',
    paragraph: 'Network analysis tool applying Apriori Association Rule mining to detect normal baseline vs abnormal packet patterns.',
    link: 'https://github.com/Hareekshith/ApriNet',
    category: 'Networks',
  }
];

const categories = ['All', 'Cyber Security', 'Networks', 'Web Development'];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(activeFilter);
        }
        return project.category === activeFilter;
      });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 sm:mb-12">
        <div className="flex items-center gap-3 sm:gap-4 flex-grow">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-mono break-words">
            Security & Software Projects
          </h1>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-[#d97706]/40 via-white/10 to-transparent"></div>
        </div>
        
        {/* Hardware Switch Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:justify-end">
          {categories.map(category => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`text-[11px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg font-mono transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'bg-[#d97706] text-white font-bold shadow-[0_0_20px_rgba(217,119,6,0.45)]' 
                    : 'bg-[#0e1118] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cyber-screen group flex flex-col justify-between"
              >
                {/* Corner Brackets */}
                <div className="hud-bracket hud-bracket-tl"></div>
                <div className="hud-bracket hud-bracket-tr"></div>
                <div className="hud-bracket hud-bracket-bl"></div>
                <div className="hud-bracket hud-bracket-br"></div>

                {/* Top Screen Telemetry Bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-black/60 border-b border-white/10 text-[10px] font-mono text-white/70 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] group-hover:animate-ping"></span>
                    <span className="text-white font-semibold tracking-wider uppercase text-[10px] sm:text-xs">
                      {Array.isArray(project.category) ? project.category.join(' / ') : project.category}
                    </span>
                  </div>
                  <span className="text-[#d97706] text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#d97706]/10 border border-[#d97706]/30">
                    SRC_REPO
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-[#d97706] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <svg className="w-4 h-4 text-white/50 group-hover:text-[#d97706] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </h2>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    {project.paragraph}
                  </p>
                </div>

                {/* Footer Hardware Bus Link */}
                <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-black/30 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono text-white/60 group-hover:text-white">
                    // GitHub Engine
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#d97706] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Execute Link &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-8 sm:mt-12">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="btn-primary w-full sm:w-auto"
              >
                {showAll ? 'Collapse Module List' : 'Expand All Modules'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-white/70 py-16 rounded-xl border border-white/10 bg-[#0e1118]">
          No active projects cataloged in this classification.
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
