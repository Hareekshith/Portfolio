import React from 'react';
import { Link } from 'react-router-dom';
import TypedText from '../comp/tt';
import TimelineSection from '../comp/time';

const Home = () => {
  const avatarPath = 'https://raw.githubusercontent.com/Hareekshith/Portfolio/main/public/img/avatar.webp';
  const pfpPath = 'https://raw.githubusercontent.com/Hareekshith/Portfolio/main/public/img/pfp.webp';

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      
      {/* 1. Hero Section: Split Layout (Text Left / Image Right) */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-white/5 mb-20">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left space-y-6">
          <div className="inline-block px-3 py-1 border border-amber-accent text-amber-accent text-xs font-mono tracking-widest uppercase">
            [ STATUS: SECURE ]
          </div>
          
          <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight">
            Hareekshith<span className="text-amber-accent">.</span><br/>
          </h1>
          
          <div className="text-base sm:text-xl text-gray-400 font-light h-auto min-h-[3rem] flex flex-wrap items-baseline gap-2">
            <h2 className="text-amber-accent"><TypedText /></h2>
          </div>
          <Link to="/resume" className="btn-primary mt-8">
            [ ACCESS_CLEARANCE: RESUME ]
          </Link>
        </div>

        {/* Right: Large Hero Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[500px] aspect-square scanline-container">
            {/* Simple solid border frame effect */}
            <div className="absolute inset-0 border-2 border-white/10 translate-x-4 translate-y-4 z-0"></div>
            <img 
              src={avatarPath} 
              alt="Avatar" 
              className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-warm-brown"
            />
          </div>
        </div>
      </section>

      {/* 2. About Me: Side-by-Side Grid (No rounded corners) */}
      <section id="bio" className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 mb-32 items-start scroll-mt-24">
        <div className="relative max-w-[250px] mx-auto md:mx-0 w-full">
           <img 
            src={pfpPath} 
            alt="Profile" 
            className="w-full aspect-square object-cover grayscale border border-white/10"
          />
        </div>
        
        <div className="flex flex-col justify-center">
  <h3 className="text-3xl font-mono text-white mb-6 flex items-center gap-4">
    <span className="text-amber-accent">{'>'}</span>
    whoami
    <span className="blinking-cursor ml-1 text-amber-accent">█</span>
  </h3>
  <p className="text-gray-300 text-lg leading-relaxed text-justify">
    Hello, I am Hareekshith, a defensive security enthusiast. I actively learn and apply my skills by building practical projects and experimenting with real-world scenarios. I have set up a home cybersecurity lab to explore vulnerabilities and understand how to identify and mitigate them.<br /><br />
    
    I have participated in multiple Capture The Flag (CTF) competitions to gain exposure to different types of attacks, how they are executed, and their impact on systems. Using this knowledge, I focus on analyzing and mitigating common security vulnerabilities.
  </p>
</div>
      </section>
      {/* 3. Timeline Section */}
      <h3 className="text-3xl font-mono text-white mb-6 text-center flex justify-center items-center gap-4">
        <span className="text-amber-accent">{'>'}</span>
        head -n 3 timeline.log
        <span className="blinking-cursor ml-1 text-amber-accent">█</span>
      </h3>
      <TimelineSection isFullTimeline={false} />
    </div>
  );
};

export default Home;
