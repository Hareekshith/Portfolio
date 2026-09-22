import React from 'react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Hareekshith', icon: '/img/gh.svg' },
  { name: 'Reddit', url: 'https://www.reddit.com/user/Cold_Agency_2162/', icon: '/img/reddit.svg' },
  { name: 'Discord', url: 'https://discord.com/users/1081467224306495508', icon: '/img/discord.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/hari_the_novice/', icon: '/img/insta.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hareekshith-tzzs3118/', icon: '/img/linkedin.svg' },
  { name: 'Telegram', url: 'https://telegram.me/novice_hari', icon: '/img/telegram.svg' },
  { name: 'YouTube', url: 'https://www.youtube.com/@agoodboy9573', icon: '/img/yt.svg' },
  { name: 'X (Twitter)', url: 'https://x.com/anonymacod23784', icon: '/img/twitter.svg' },
  { name: 'Docker Hub', url: 'https://hub.docker.com/u/htarizzs', icon: '/img/docker.svg' },
];

const SocialsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      
      {/* Title */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 my-8 sm:my-12">
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center font-mono break-words">
          Interface Ports & Connectors
        </h1>
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
      </div>
      
      <p className="text-white/70 text-xs sm:text-sm md:text-base text-center font-mono mb-8 sm:mb-12 max-w-lg mx-auto">
        Available physical and encrypted virtual communication ports:
      </p>

      {/* Hardware Interface Ports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-screen h-20 px-4 sm:px-5 flex items-center justify-between group"
          >
            <div className="hud-bracket hud-bracket-tl"></div>
            <div className="hud-bracket hud-bracket-tr"></div>
            <div className="hud-bracket hud-bracket-bl"></div>
            <div className="hud-bracket hud-bracket-br"></div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-9 w-9 p-1.5 rounded-lg bg-black/50 border border-white/10 group-hover:border-[#d97706]/50 flex-shrink-0 transition-colors">
                <img 
                  src={link.icon} 
                  alt={link.name} 
                  className="h-full w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
                />
              </div>
              <div>
                <span className="font-mono text-sm uppercase tracking-wider text-white group-hover:text-[#d97706] font-medium transition-colors block">
                  {link.name}
                </span>
                <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">
                  PORT_{index + 1} // ACTIVE
                </span>
              </div>
            </div>

            <svg className="w-4 h-4 text-white/40 group-hover:text-[#d97706] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        ))}
      </div>

      {/* Hardware Transmission Console (Contact Form) */}
      <div className="border border-white/15 bg-[#0e1118]/95 p-4 sm:p-8 md:p-12 rounded-2xl relative shadow-2xl overflow-hidden">
        {/* Corner Brackets */}
        <div className="hud-bracket hud-bracket-tl"></div>
        <div className="hud-bracket hud-bracket-tr"></div>
        <div className="hud-bracket hud-bracket-bl"></div>
        <div className="hud-bracket hud-bracket-br"></div>

        {/* Console Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d97706] animate-pulse shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-mono tracking-tight">
              Direct Transmission Console
            </h2>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-[#d97706] px-2 py-0.5 rounded bg-[#d97706]/10 border border-[#d97706]/30">
            ENCRYPTION // 256-BIT
          </span>
        </div>
        
        {/* Form powered by formsubmit.co */}
        <form action="https://formsubmit.co/hareekshith@gmail.com" method="POST" className="flex flex-col gap-4 sm:gap-6">
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/soc" : "/soc"} /> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <label className="text-white font-mono text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Sender Identity</span>
                <span className="text-[#d97706]">[NAME]</span>
              </label>
              <input 
                type="text" 
                name="name" 
                required 
                className="bg-[#08090d] border border-white/10 rounded-lg p-3 sm:p-3.5 text-white font-mono text-xs sm:text-sm focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706]/40 focus:outline-none transition-all placeholder:text-white/40 shadow-inner" 
                placeholder="Identify your callsign / name" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-mono text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Return Transmission Port</span>
                <span className="text-[#d97706]">[EMAIL]</span>
              </label>
              <input 
                type="email" 
                name="email" 
                required 
                className="bg-[#08090d] border border-white/10 rounded-lg p-3 sm:p-3.5 text-white font-mono text-xs sm:text-sm focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706]/40 focus:outline-none transition-all placeholder:text-white/40 shadow-inner" 
                placeholder="name@destination.host" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-white font-mono text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Encrypted Message Payload</span>
              <span className="text-[#d97706]">[DATA]</span>
            </label>
            <textarea 
              name="message" 
              required 
              rows="4" 
              className="bg-[#08090d] border border-white/10 rounded-lg p-3 sm:p-3.5 text-white font-mono text-xs sm:text-sm focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706]/40 focus:outline-none transition-all resize-y placeholder:text-white/40 shadow-inner" 
              placeholder="Input your transmission content or security inquiry..."
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto self-start mt-2 gap-2">
            <span>Transmit Message</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </form>
      </div>

    </div>
  );
};

export default SocialsPage;
