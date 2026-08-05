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
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* 
        Standalone Easter Egg Grid Button:
        - Positioned absolutely in the background margin area outside page sections
        - Simple square grid tile button with prompt symbol '>_'
      */}
      <div 
        className="pointer-events-auto absolute top-24 right-4 md:right-8 lg:right-12 w-8 h-8 cursor-pointer transition-all duration-300 group"
        onClick={handleBoxClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title="[ Easter Egg: Arch ISO Terminal ]"
      >
        <button className="w-full h-full border border-amber-accent/40 bg-[#09090b]/80 hover:bg-amber-accent hover:text-[#09090b] text-amber-accent font-mono text-xs flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.15)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
          {'>_'}
        </button>

        {/* Floating tooltip badge on hover */}
        {hovered && (
          <div className="absolute top-10 right-0 whitespace-nowrap bg-[#09090b] text-amber-accent border border-amber-accent text-[10px] font-mono px-2 py-0.5 shadow-[0_0_12px_rgba(249,115,22,0.4)] z-50">
            [ ⚡ arch_tty1 ]
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundGrid;
