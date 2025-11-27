import React from 'react';
import TimelineSection from '../comp/time';

const TimelinePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 id="tit" className="text-coral-title text-4xl sm:text-6xl font-title text-center my-8 
                          underline decoration-golden-highlight decoration-4">
        Timeline
      </h1>
      
      {/* This fetches ALL entries from the API */}
      <TimelineSection isFullTimeline={true} />
    </div>
  );
};

export default TimelinePage;
