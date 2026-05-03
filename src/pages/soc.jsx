import React from 'react';

const socialLinks = [
  { name: 'Github', url: 'https://github.com/Hareekshith', icon: '/img/gh.svg' },
  { name: 'Reddit', url: 'https://www.reddit.com/user/Cold_Agency_2162/', icon: '/img/reddit.svg' },
  { name: 'Discord', url: 'https://discord.com/users/1081467224306495508', icon: '/img/discord.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/hari_the_novice/', icon: '/img/insta.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hareekshith-tzzs3118/', icon: '/img/linkedin.svg' },
  { name: 'Telegram', url: 'https://telegram.me/novice_hari', icon: '/img/telegram.svg' },
  { name: 'Youtube', url: 'https://www.youtube.com/@agoodboy9573', icon: '/img/yt.svg' },
  { name: 'X/Twitter', url: 'https://x.com/anonymacod23784', icon: '/img/twitter.svg' },
  { name: 'Docker', url: 'https://hub.docker.com/u/htarizzs', icon: '/img/docker.svg' },
];

const SocialsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-mono text-center my-12 text-white flex justify-center items-center gap-3">
        <span className="text-amber-accent">{'>'}</span>
        ping -c 4 socials
        <span className="blinking-cursor text-amber-accent">█</span>
      </h1>
      
      <h5 className="text-gray-400 text-center font-mono mb-12 italic border-b border-white/10 pb-6 w-3/4 sm:w-1/2 mx-auto">
        // Establish connection via available ports:
      </h5>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-6 bg-warm-brown h-20 px-6 border border-white/10 cyber-glow-hover text-soft-white hover:text-white transition-all duration-300 group"
          >
            <div className="scanline-container h-10 w-10 flex-shrink-0">
              <img 
                src={link.icon} 
                alt={link.name} 
                className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <span className="font-mono text-lg uppercase tracking-widest group-hover:text-amber-accent transition-colors">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="border border-white/10 bg-warm-brown p-8 md:p-12 relative cyber-glow-hover">
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-accent/30"></div>
        <h2 className="text-2xl font-mono text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
          <span className="text-amber-accent">{'>'}</span>
          ./initiate_contact.sh
        </h2>
        
        {/* Form powered by formsubmit.co */}
        <form action="https://formsubmit.co/hareekshith@gmail.com" method="POST" className="flex flex-col gap-6">
          {/* Formsubmit hidden fields */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          {/* The next parameter redirects the user back to the socials page after success */}
          <input type="hidden" name="_next" value={window.location.origin + "/soc"} /> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-amber-accent font-mono text-sm mb-2">NAME=</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="bg-mocha-dark border border-white/10 p-3 text-white font-mono focus:border-amber-accent focus:outline-none transition-colors" 
                placeholder='"Guest"' 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-amber-accent font-mono text-sm mb-2">EMAIL=</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="bg-mocha-dark border border-white/10 p-3 text-white font-mono focus:border-amber-accent focus:outline-none transition-colors" 
                placeholder='"guest@local.host"' 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-amber-accent font-mono text-sm mb-2">PAYLOAD=</label>
            <textarea 
              name="message" 
              required 
              rows="5" 
              className="bg-mocha-dark border border-white/10 p-3 text-white font-mono focus:border-amber-accent focus:outline-none transition-colors resize-y" 
              placeholder='Enter message data...'
            ></textarea>
          </div>
          <button type="submit" className="btn-primary self-start mt-4 gap-2">
            [ TRANSMIT_PACKET ]
          </button>
        </form>
      </div>

    </div>
  );
};

export default SocialsPage;
