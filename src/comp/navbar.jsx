import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LogoPath = '/img/H.svg'; 
const MenuIconPath = '/img/tl.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/exp' },
    { name: 'Socials', path: '/soc' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08090d]/85 backdrop-blur-md border-b border-white/10 transition-all duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo with subtle hover glow */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-[#d97706]/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
            <img src={LogoPath} alt="Logo" className="relative h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </div>
        </Link>
        
        {/* Desktop Nav - Clean Technical Monospace Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path} 
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-mono transition-all duration-200 flex items-center gap-2 ${
                  isActive 
                    ? 'text-white bg-[#d97706]/15 border border-[#d97706]/40 shadow-[0_0_12px_rgba(217,119,6,0.2)] font-semibold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle Navigation"
        >
          <img src={MenuIconPath} alt="Menu" className="h-6 w-6 sm:h-7 sm:w-7 opacity-80 hover:opacity-100 transition-opacity" />
        </button>

        {/* Mobile Dropdown (Smooth modern glass drawer) */}
        {isMenuOpen && (
          <div className="absolute top-16 sm:top-20 left-0 w-full bg-[#0e1118]/98 backdrop-blur-xl border-b border-white/10 px-4 py-4 flex flex-col gap-2 shadow-2xl md:hidden z-50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-center py-2.5 text-sm font-mono rounded-lg transition-all flex items-center justify-center gap-2 ${
                    isActive 
                      ? 'text-white bg-[#d97706]/20 border border-[#d97706]/50 font-semibold' 
                      : 'text-white/70 hover:text-white bg-white/[0.02] border border-white/5 hover:bg-white/5'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />}
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
