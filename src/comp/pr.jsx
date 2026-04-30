import React, { useState } from 'react';

const projectsData = [
  {
    title: 'Keylogger Detector',
    paragraph: 'A utility, developed only for linux(for now) to detect keyloggers based on Heuristics',
    link: 'https://github.com/Hareekshith/keylogger-detection',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/keylogger-detection/main/poster_final.webp',
    category: 'Cyber Security',
  },
  {
    title: 'TEED-TS-WEB',
    paragraph: 'A full-stack project which detects and displays entry and exit logs with data visualizations',
    link: 'https://github.com/Hareekshith/TEED-TS-WEB',
    imgSrc: 'https://raw.githubusercontent.com/Hareekshith/TEED-TS-WEB/main/screenshot/teeds.png',
    category: 'Web Development',
  },
  {
    title: 'TimeTable-Generator',
    paragraph: 'A full-stack project that gets input from the user and generate a more equally weighed timetable!',
    link: 'https://github.com/hareekshith/TimeTable-Generator',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/TimeTable-Generator/main/poster_final.webp',
    category: 'Web Development',
  },
  {
    title: 'Home CS LAB',
    paragraph: 'A project which helps blue-team professionals to study and fix the unknown vulnerabilities',
    link: 'https://github.com/hareekshith/Home_CS_LAB',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/blue-team-docker/main/Home_CS_LAB.webp',
    category: ['Cyber Security', 'Networks'],
  },
  {
    title: 'Prufung-AI',
    paragraph: 'A project which focuses on AI-Based question generation and result analysis having 3 difficulties',
    link: 'https://github.com/hareekshith/Prufung',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/Prufung/main/poster_final.webp',
    category: 'Web Development',
  },
  {
    title: 'PacketSniffer',
    paragraph: 'A small task which was given to me which analyses the network packet and payloads, using scapy.',
    link: 'https://github.com/hareekshith/PacketSniffer',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/PacketSniffer/main/poster_final.webp',
    category: 'Networks',
  },
  {
    title: 'CodeReviewer',
    paragraph: 'A project which reviews a python-based backend codes, and suggests(some) the alternative save versions',
    link: 'https://github.com/hareekshith/CodeReviewer',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/CodeReviewer/main/poster_final.webp',
    category: 'Cyber Security',
  },
  {
    title: 'NetSentinel',
    paragraph: 'A tool made using Python which detects SYN_flood and Portscans on a host computer, using scapy.',
    link: 'https://github.com/Hareekshith/NetSentinel',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/NetSentinel/main/poster_final.webp',
    category: ['Networks', 'Cyber Security'],
  },
  {
    title: 'ApriNet',
    paragraph: 'A tool uses Apriori Association Rule to study the normal pattern of the capture network packets.',
    link: 'https://github.com/Hareekshith/ApriNet',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/ApriNet/main/poster_final.webp',
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
    <section className="container mx-auto px-6 py-20">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-4 flex-grow">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <div className="flex-grow h-[1px] bg-white/20"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`text-xs uppercase tracking-widest px-4 py-2 font-bold transition-all duration-200 border cursor-pointer ${
                activeFilter === category 
                  ? 'bg-amber-accent border-amber-accent text-[#09090b]' 
                  : 'border-white/20 text-gray-400 hover:text-white hover:border-white/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block border border-white/10 hover:border-amber-accent transition-colors duration-300 bg-mocha-dark"
              >
                {/* Image Area */}
                <div className="h-64 overflow-hidden border-b border-white/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </div>

                {/* Text Area */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-accent">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {project.paragraph}
                  </p>
                  
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-widest text-white border-b border-amber-accent pb-1">View Project</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="btn-primary bg-transparent border-2 border-amber-accent text-amber-accent hover:bg-amber-accent hover:text-white"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-12 italic border border-white/10">
          No projects found for this category.
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
