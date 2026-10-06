import React from 'react';

const skillsData = [
  {
    title: 'Code & Environments',
    paragraph: 'Programming workflow essentials and developer environments for efficient daily operations.',
    accent: 'Git, GitHub, Neovim',
    images: [
      { src: '/img/git.svg', alt: 'git' },
      { src: '/img/gh.svg', alt: 'gh' },
      { src: '/img/nvim.svg', alt: 'nvim', fullWidth: true },
    ],
  },
  {
    title: 'Core Programming',
    paragraph: 'Core systems and scripting languages used for vulnerability research and software engineering.',
    accent: 'C++, Java, Python',
    images: [
      { src: '/img/cpp.svg', alt: 'cpp' },
      { src: '/img/java.svg', alt: 'java' },
      { src: '/img/python.svg', alt: 'py', fullWidth: true },
    ],
  },
  {
    title: 'Linux Kernel & Distros',
    paragraph: 'Operating systems and security-focused distributions for testing, development, and forensics.',
    accent: 'Ubuntu, Arch, Kali',
    images: [
      { src: '/img/ubuntu.svg', alt: 'ubuntu' },
      { src: '/img/arch.svg', alt: 'arch' },
      { src: '/img/kali.svg', alt: 'kali', fullWidth: true },
    ],
  },
  {
    title: 'Network Defense & Packets',
    paragraph: 'Deep protocol analysis, traffic packet inspection, and active network defense infrastructure.',
    accent: 'Packet Tracer, Nmap, Wireshark',
    images: [
      { src: '/img/cpt.svg', alt: 'cpt' },
      { src: '/img/nmap.svg', alt: 'nmap'},
      { src: '/img/ws.svg', alt: 'ws', fullWidth: true },
    ],
  },
  {
    title: 'Backend Systems',
    paragraph: 'Scalable service architectures, microservices, and secure API endpoints.',
    accent: 'Django, Flask, FastAPI',
    images: [
      { src: '/img/dj.svg', alt: 'dj' },
      { src: '/img/fast.svg', alt: 'fapi' },
      { src: '/img/flask.svg', alt: 'flask', fullWidth: true },
    ],
  },
  {
    title: 'Frontend Interfaces',
    paragraph: 'Modern client interfaces, responsive web standards, and component architectures.',
    accent: 'HTML, CSS, JavaScript',
    images: [
      { src: '/img/html.svg', alt: 'html' },
      { src: '/img/css.svg', alt: 'css' },
      { src: '/img/node.svg', alt: 'js', fullWidth: true },
    ],
  },
  {
    title: 'Data Persistence',
    paragraph: 'Structured and document-based data management, schema design, and query optimization.',
    accent: 'MongoDB, MySQL, PostgreSQL',
    images: [
      { src: '/img/mongo.svg', alt: 'md' },
      { src: '/img/mysql.svg', alt: 'ms' },
      { src: '/img/postgresql.svg', alt: 'psql', fullWidth: true },
    ],
  },
  {
    title: 'Visual Assets & UI',
    paragraph: 'Vector design, system wireframing, and visual assets crafted for modern user interfaces.',
    accent: 'Canva, Inkscape, Figma',
    images: [
      { src: '/img/canva.svg', alt: 'canv' },
      { src: '/img/inkscape.svg', alt: 'inks' },
      { src: '/img/figma.svg', alt: 'fig', fullWidth: true },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-4 sm:pb-6">
      {/* Circuit Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <span className="w-2.5 h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-mono break-words">
          Hardware & Software Toolsets
        </h1>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-[#d97706]/40 via-white/10 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
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
                <span className="text-white font-semibold tracking-wider">MODULE // 0{index + 1}</span>
              </div>
              <span className="text-[#d97706] text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#d97706]/10 border border-[#d97706]/30">
                PORT_0x{((index + 1) * 16).toString(16).toUpperCase()}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-6">
              {/* Circuit Icons Row */}
              <div className="flex gap-2.5 sm:gap-3 mb-5 sm:mb-6 h-12 items-center">
                {skill.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="p-2 rounded-lg bg-black/40 border border-white/10 group-hover:border-[#d97706]/50 transition-all duration-300"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-6 sm:h-7 w-auto object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#d97706] transition-colors flex items-center gap-2">
                <span>{skill.title}</span>
              </h3>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light">
                {skill.paragraph}
              </p>
            </div>

            {/* Bottom Hardware Bus Tags */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-black/30 border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
              {skill.accent.split(',').map((tech, i) => (
                <span 
                  key={i} 
                  className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded bg-[#d97706]/10 border border-[#d97706]/30 text-[#d97706] group-hover:border-[#d97706] group-hover:text-white transition-colors"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
