import React from 'react';

const projectsData = [
  {
    title: 'Keylogger Detector',
    paragraph: 'A utility, developed only for linux(for now) to detect keyloggers based on Heuristics',
    link: 'https://raw.githubusercontent.com/Hareekshith/keylogger-detection',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/keylogger-detection/main/poster_final.webp',
  },
  {
    title: 'TEED-TS-WEB',
    paragraph: 'A full-stack project which detects and displays entry and exit logs with data visualizations',
    link: 'https://raw.githubusercontent.com/Hareekshith/TEED-TS-WEB',
    imgSrc: 'https://raw.githubusercontent.com/Hareekshith/TEED-TS-WEB/main/screenshot/teeds.png',
  },
  {
    title: 'TimeTable-Generator',
    paragraph: 'A full-stack project that gets input from the user and generate a more equally weighed timetable!',
    link: 'https://raw.githubusercontent.com/hareekshith/TimeTable-Generator',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/TimeTable-Generator/main/poster_final.webp',
  },
  {
    title: 'Home CS LAB',
    paragraph: 'A project which helps blue-team professionals to study and fix the unknown vulnerabilities',
    link: 'https://raw.githubusercontent.com/hareekshith/Home_CS_LAB',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/blue-team-docker/main/Home_CS_LAB.webp',
  },
  {
    title: 'Prufung-AI',
    paragraph: 'A project which focuses on AI-Based question generation and result analysis having 3 difficulties',
    link: 'https://raw.githubusercontent.com/hareekshith/Prufung',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/Prufung/main/poster_final.webp'
  },
  {
    title: 'PacketSniffer',
    paragraph: 'A small task which was given to me which analyses the network packet and payloads, using scapy.',
    link: 'https://raw.githubusercontent.com/hareekshith/PacketSniffer',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/PacketSniffer/main/poster_final.webp'
  },
  {
    title: 'CodeReviewer',
    paragraph: 'A project which reviews a python-based backend codes, and suggests(some) the alternative save versions',
    link: 'https://raw.githubusercontent.com/hareekshith/CodeReviewer',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/CodeReviewer/main/poster_final.webp'
  },
  {
    title: 'NetSentinel',
    paragraph: 'A tool made using Python which detects SYN_flood and Portscans on a host computer, using scapy.',
    link: 'https://raw.githubusercontent.com/Hareekshith/NetSentinel',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/NetSentinel/main/poster_final.webp'
  },
  {
    title: 'ApriNet',
    paragraph: 'A tool uses Apriori Association Rule to study the normal pattern of the capture network packets.',
    link: 'https://raw.githubusercontent.com/Hareekshith/ApriNet',
    imgSrc: 'https://raw.githubusercontent.com/hareekshith/ApriNet/main/poster_final.webp'
  }
];

const ProjectsSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
       <div className="flex items-center gap-4 mb-16">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <div className="flex-grow h-[1px] bg-white/20"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
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
    </section>
  );
};

export default ProjectsSection;
