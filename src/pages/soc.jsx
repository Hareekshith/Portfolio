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
    <div className="max-w-4xl mx-auto px-4">
      <h1 id="tit" className="text-coral-title text-4xl sm:text-6xl font-title text-center my-8 
                          underline decoration-golden-highlight decoration-4">
        Socials
      </h1>
      <h5 className="text-soft-white text-center font-body mb-12">
        Connect with me from these platforms!
      </h5>

      <div id="con" className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <div 
            key={index} 
            className="link bg-warm-brown h-20 rounded-lg transition duration-300 grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] items-center text-soft-white 
                       hover:bg-vivid-orange hover:text-soft-white hover:text-xl 
                       mx-4 md:mx-10"
          >
            <img 
              src={link.icon} 
              alt={link.name} 
              className="h-10 w-10 flex-shrink-0 object-contain ml-4 md:ml-6 transition-all duration-300 sm:h-8" 
            />
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex justify-center items-center font-body h-full w-full text-soft-white text-lg md:text-xl no-underline"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialsPage;
