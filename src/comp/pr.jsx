import React from 'react';

const projectsData = [
  {
    title: 'Keylogger Detector',
    paragraph: 'A utility, developed only for linux(for now) to detect keyloggers based on Heuristics',
    link: 'https://github.com/Hareekshith/keylogger-detection',
    imgSrc: 'https://github.com/hareekshith/keylogger-detection/blob/main/poster_final.webp?raw=true',
  },
  {
    title: 'TEED-TS-WEB',
    paragraph: 'A full-stack project which detects and displays entry and exit logs with data visualizations',
    link: 'https://github.com/ERROR-SIDDH/TEED-TS-WEB',
    imgSrc: 'https://github.com/ERROR-SIDDH/TEED-TS-WEB/blob/main/screenshot/teeds.webp?raw=true',
  },
  {
    title: 'TimeTable-Generator',
    paragraph: 'A full-stack project that gets input from the user and generate a more equally weighed timetable!',
    link: 'https://github.com/hareekshith/TimeTable-Generator',
    imgSrc: 'https://github.com/hareekshith/TimeTable-Generator/blob/main/poster_final.webp?raw=true',
  },
  {
    title: 'Home CS LAB',
    paragraph: 'A project which helps blue-team professionals to study and fix the unknown vulnerabilities',
    link: 'https://github.com/hareekshith/Home_CS_LAB',
    imgSrc: 'https://github.com/hareekshith/blue-team-docker/blob/main/Home_CS_LAB.webp?raw=true',
  },
  {
    title: 'Prufung-AI',
    paragraph: 'A project which focuses on AI-Based question generation and result analysis having 3 difficulties',
    link: 'https://github.com/hareekshith/Prufung',
    imgSrc: 'https://github.com/hareekshith/Prufung/blob/main/poster_final.webp?raw=true'
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
