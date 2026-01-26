import React from 'react';
import TypedText from '../comp/tt';
import TimelineSection from '../comp/time';

const Home = () => {
  const avatarPath = '/img/avatar.webp';
  const pfpPath = '/img/pfp.webp';

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      
      {/* 1. Hero Section: Split Layout (Text Left / Image Right) */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-white/5 mb-20">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left space-y-6">
          <div className="inline-block px-3 py-1 border border-amber-accent text-amber-accent text-xs tracking-widest uppercase">
            Portfolio
          </div>
          
          <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight">
            Hareekshith<span className="text-amber-accent">.</span><br/>
          </h1>
          
          <div className="text-base sm:text-xl text-gray-400 font-light h-auto min-h-[3rem] flex flex-wrap items-baseline gap-2">
            <h2 className="text-amber-accent"><TypedText /></h2>
          </div>
          <a href="#bio" className="btn-primary mt-8">
            View My Work
          </a>
        </div>

        {/* Right: Large Hero Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[500px] aspect-square">
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
          <h3 className="text-3xl font-title text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-amber-accent"></span>
            About Me
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            Hello, I am a novice programmer! I'm a passionate and curious developer with a solid foundation in programming languages including <strong className="text-white">Java, C, C++, and Python</strong>. On the front-end side, I have a working knowledge of HTML and CSS. Currently, I'm pursuing a course in Cyber Security, where I'm diving deeper into the principles of digital protection, ethical hacking, and network security.
          </p>
        </div>
      </section>
      {/* 3. Timeline Section */}
      <h3 className="text-3xl font-title text-white mb-6 text-center flex items-center gap-4">
        <span className="w-12 h-[2px] bg-amber-accent"></span>
        TimeLine
        <span className="w-12 h-[2px] bg-amber-accent"></span>
      </h3>
      <TimelineSection isFullTimeline={false} />
    </div>
  );
};

export default Home;
