import React from 'react';
import TimelineSection from '../comp/time';

const TimelinePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-4">
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 my-6 sm:my-8">
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
        <h1 id="tit" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center font-mono break-words">
          Career & Learning Timeline
        </h1>
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-[#d97706] shadow-[0_0_8px_rgba(217,119,6,0.8)]"></span>
      </div>
      
      {/* This fetches ALL entries from the API */}
      <TimelineSection isFullTimeline={true} />
    </div>
  );
};

export default TimelinePage;
