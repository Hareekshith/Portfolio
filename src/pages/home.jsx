import React from 'react';
import { Link } from 'react-router-dom';
import TypedText from '../comp/tt';
import TimelineSection from '../comp/time';

const Home = () => {
  const avatarPath = 'https://raw.githubusercontent.com/Hareekshith/Portfolio/main/public/img/avatar.webp';
  const pfpPath = 'https://raw.githubusercontent.com/Hareekshith/Portfolio/main/public/img/pfp.webp';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6">
      
      {/* 1. Hero Section: Split Layout with Cyber Console & Hardware Telemetry */}
      <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center border-b border-white/10 mb-16 sm:mb-24 py-6 sm:py-10 relative">
        
        {/* Left: Tactical Intelligence & Bio Intro (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-6 w-full">
          
          {/* Hardware Telemetry Badge */}
          <div className="cyber-badge text-[10px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse shadow-[0_0_8px_rgba(217,119,6,0.9)] flex-shrink-0"></span>
            <span className="tracking-wider sm:tracking-widest text-white">DEFENSIVE SECURITY // CORE_ONLINE</span>
          </div>
          
          {/* Main Title with Cyber Hardware Accent */}
          <div className="space-y-2 w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight text-white leading-tight font-mono break-words">
              Hareekshith<span className="text-[#d97706]">.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-white/60 uppercase tracking-wider sm:tracking-widest pt-1">
              <span className="text-[#d97706]">[CHIP_ID: 0xHTARIZZS]</span>
              <span className="hidden sm:inline">•</span>
              <span>BLUE-TEAM & SYSTEMS RESEARCH</span>
            </div>
          </div>
          
          <div className="text-lg sm:text-2xl text-white/90 font-light h-auto min-h-[2.5rem] sm:min-h-[3rem] flex flex-wrap items-baseline gap-2">
            <TypedText />
          </div>

          <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed font-light text-left">
            Defensive security practitioner specializing in packet inspection, keylogger detection algorithms, and real-world system hardening.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Link to="/resume" className="btn-primary gap-2.5 w-full sm:w-auto text-center">
              <span>View Dossier / Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Link>
            <Link to="/exp" className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/5 text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors">
              Inspect Modules &rarr;
            </Link>
          </div>
        </div>

        {/* Right: Tactical Display Terminal Screen (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full mt-4 lg:mt-0">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-square mx-auto group transition-all duration-300 ease-out hover:-translate-y-1.5">
            
            {/* Ambient Circuit Glow Backdrop */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#d97706]/20 via-[#d97706]/5 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Tactical Cyber Console Screen Frame */}
            <div className="relative w-full h-full rounded-2xl border border-white/15 bg-[#0e1118]/95 p-1.5 shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-[#d97706] flex flex-col justify-between">
              
              {/* Corner Telemetry Brackets */}
              <div className="hud-bracket hud-bracket-tl"></div>
              <div className="hud-bracket hud-bracket-tr"></div>
              <div className="hud-bracket hud-bracket-bl"></div>
              <div className="hud-bracket hud-bracket-br"></div>

              {/* Screen Top Header Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-black/70 border-b border-white/10 rounded-t-xl text-[10px] font-mono text-white/70 z-10 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse"></span>
                  <span className="text-white font-semibold tracking-wider">HUD_FEED // OPTICAL_01</span>
                </div>
                <span className="text-[#d97706] text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#d97706]/10 border border-[#d97706]/30">
                  ENCRYPTED_SRC
                </span>
              </div>

              {/* Main Avatar Visual */}
              <div className="relative flex-grow overflow-hidden rounded-lg mx-1 my-1 bg-[#08090d]">
                <img 
                  src={avatarPath} 
                  alt="Avatar" 
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* High-tech screen glass glare line */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none"></div>
              </div>

              {/* Screen Bottom Telemetry Footer */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-black/70 border-t border-white/10 rounded-b-xl text-[9px] font-mono text-white/70 z-10 select-none">
                <span className="text-white/60">STATUS: 200 OK</span>
                <span className="text-[#d97706]">SEC_LEVEL: ALPHA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Me: Tactical Hardware Deck */}
      <section id="bio" className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-16 items-start scroll-mt-24">
        
        {/* Profile Security Badge (4 cols) */}
        <div className="md:col-span-4 flex justify-center w-full">
          <div className="relative w-full max-w-[200px] sm:max-w-[260px] mx-auto group">
            {/* Ambient backlight */}
            <div className="absolute -inset-2 rounded-xl bg-[#d97706]/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Screen Bezel Box */}
            <div className="relative w-full aspect-square rounded-xl border border-white/15 bg-[#0e1118] p-2 shadow-xl transition-all duration-300 group-hover:border-[#d97706]">
              <div className="hud-bracket hud-bracket-tl"></div>
              <div className="hud-bracket hud-bracket-tr"></div>
              <div className="hud-bracket hud-bracket-bl"></div>
              <div className="hud-bracket hud-bracket-br"></div>
              
              <img 
                src={pfpPath} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg bg-[#08090d] transition-all duration-300"
              />
            </div>

            <div className="text-center mt-3">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#d97706] uppercase tracking-widest px-2.5 py-1 rounded bg-[#d97706]/10 border border-[#d97706]/30 inline-block">
                OPERATOR // HAREEEKSHITH
              </span>
            </div>
          </div>
        </div>
        
        {/* Tactical Narrative (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              System Operator Bio
            </h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-[#d97706]/40 via-white/10 to-transparent"></div>
          </div>

          <div className="p-4 sm:p-8 rounded-xl border border-white/10 bg-[#0e1118]/80 backdrop-blur-md shadow-xl relative">
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-left font-light">
              Hello, I am Hareekshith, a defensive security enthusiast. I actively learn and apply my skills by building practical projects and experimenting with real-world scenarios. I have participated in multiple Capture The Flag (CTF) competitions to gain exposure to different types of attacks, how they are executed, and their impact on systems. Using this knowledge, I focus on analyzing and mitigating common security vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Timeline Section with Circuit Bus Header */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 mt-8 sm:mt-12">
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white text-center font-mono">
          Chronological Event Bus
        </h2>
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
      </div>
      <TimelineSection isFullTimeline={false} />
    </div>
  );
};

export default Home;
