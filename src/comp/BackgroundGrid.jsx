import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BackgroundGrid = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  // Don't render grid button on the terminal page itself
  if (location.pathname === '/terminal') {
    return null;
  }

  const handleBoxClick = () => {
    navigate('/terminal');
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* 
        Modern Cyber HUD Easter Egg Button:
        - Sleek floating terminal shortcut
        - Strictly #d97706 and white
      */}
      <div 
        className="pointer-events-auto absolute top-24 right-4 md:right-8 lg:right-12 cursor-pointer transition-all duration-300 group"
        onClick={handleBoxClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title="Interactive Terminal"
      >
        <button className="h-9 px-3 rounded-lg border border-[#d97706]/40 bg-[#08090d]/90 backdrop-blur-md hover:bg-[#d97706] hover:text-white text-[#d97706] font-mono text-xs flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.2)] hover:shadow-[0_0_25px_rgba(217,119,6,0.5)] hover:-translate-y-0.5">
          <span className="font-bold">{'>_'}</span>
          <span className="hidden sm:inline text-[11px] font-medium tracking-wide">tty1</span>
        </button>

        {/* Floating tooltip badge on hover */}
        {hovered && (
          <div className="absolute top-11 right-0 whitespace-nowrap bg-[#0e1118] text-white border border-[#d97706] text-[11px] font-mono px-2.5 py-1 rounded-md shadow-[0_8px_20px_rgba(0,0,0,0.8)] z-50 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse"></span>
            Launch Terminal
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundGrid;
