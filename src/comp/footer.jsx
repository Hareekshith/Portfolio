import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 px-4 sm:px-6 py-8 sm:py-10 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 
          className="text-center sm:text-left text-xl sm:text-2xl font-semibold tracking-tight text-[#d97706] hover:text-white transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          &lt;/Hareekshith&gt;
        </h2>
        <p 
          className="text-xs text-white/60 tracking-wider uppercase text-center sm:text-left"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Defensive Security Enthusiast & Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
