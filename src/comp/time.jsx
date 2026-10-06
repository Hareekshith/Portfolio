import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TimelineSection = ({ isFullTimeline = false }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Connect to the serverless API endpoint
    const endpoint = isFullTimeline ? '/api/timeline/all' : '/api/timeline/recent';
    
    fetch(endpoint) 
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch timeline data');
        }
        return res.json();
      })
      .then(data => {
        setEntries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setError("Could not load timeline entries. Check API connection.");
        setLoading(false);
      });
  }, [isFullTimeline]);

  if (loading) {
    return (
      <div className="text-center text-[#d97706] my-12 font-mono text-sm flex items-center justify-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-[#d97706] animate-ping"></span>
        Synchronizing chronological event trace...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white my-12 font-mono text-sm border border-white/20 bg-white/5 py-4 px-6 rounded-xl max-w-md mx-auto">
        {error}
      </div>
    );
  }

  return (
    <div id="time" className="mt-4 sm:mt-6 mb-2 sm:mb-4 bg-[#0e1118]/95 border border-white/15 rounded-2xl mx-0 sm:mx-4 md:mx-10 p-4 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Corner Brackets */}
      <div className="hud-bracket hud-bracket-tl"></div>
      <div className="hud-bracket hud-bracket-tr"></div>
      <div className="hud-bracket hud-bracket-bl"></div>
      <div className="hud-bracket hud-bracket-br"></div>

      {/* Top Telemetry Line */}
      <div className="flex items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10 text-xs font-mono text-white/70">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse"></span>
          <span className="text-white font-semibold text-[11px] sm:text-xs">BUS_TRACE // EVENT_SEQUENCE</span>
        </div>
        <span className="text-[#d97706] font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#d97706]/10 border border-[#d97706]/30">
          LOG_VERIFIED
        </span>
      </div>
      
      {/* Sequential Circuit Bus Stream */}
      <div className="flex flex-col gap-6 sm:gap-8 relative pl-1 sm:pl-6">
        {entries.map((entry, index) => (
          <div 
            key={entry._id || index} 
            className="relative pl-6 sm:pl-8 border-l-2 border-[#d97706]/40 hover:border-[#d97706] transition-colors duration-300 group"
          >
            {/* Concentric Circuit Node Junction Point */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090d] border-2 border-[#d97706] flex items-center justify-center shadow-[0_0_10px_rgba(217,119,6,0.6)] group-hover:scale-125 transition-transform duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d97706] group-hover:bg-white"></div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#d97706] transition-colors font-mono break-words">
                {entry.title}
              </h2>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#d97706] px-2 py-0.5 rounded-md bg-[#d97706]/10 border border-[#d97706]/30">
                {entry.time}
              </span>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light text-left">
              {entry.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Read More Button (only on Home page) */}
      {!isFullTimeline && (
        <div className="flex justify-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
          <Link 
            id="rm" 
            to="/tl" 
            className="btn-primary gap-2 w-full sm:w-auto"
          >
            <span>Query Full Event Bus</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TimelineSection;
