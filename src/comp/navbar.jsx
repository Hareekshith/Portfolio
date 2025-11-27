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
    <header className="sticky top-0 z-50 bg-mocha-dark border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={LogoPath} alt="Logo" className="h-10 w-auto" />
        </Link>
        
        {/* Desktop Nav - Clean Text Links */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'text-amber-accent' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-white"
        >
          <img src={MenuIconPath} alt="Menu" className="h-8 w-8" />
        </button>

        {/* Mobile Dropdown (Full width slide down) */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-warm-brown border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-3 text-lg font-title text-white hover:text-amber-accent border border-white/5 bg-mocha-dark"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
