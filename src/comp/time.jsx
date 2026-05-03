import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TimelineSection = ({ isFullTimeline = false }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Determine which API endpoint to hit based on the prop
    // This connects to the Flask Serverless function deployed on Vercel: /api/index.py
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

  if (loading) return <div className="text-center text-amber-accent my-8 font-mono blinking-cursor">Loading timeline.log...</div>;
  if (error) return <div className="text-center text-red-500 my-8 font-mono">[ ERROR: FAILED_TO_FETCH_LOGS ]</div>;

  return (
    <div id="time" className="my-20 bg-warm-brown border border-white/10 mx-4 sm:mx-10 p-6 lg:p-10 cyber-glow-hover relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-accent/30"></div>
      
      {/* Timeline List */}
      <div className="flex flex-col gap-6">
        {entries.map((entry, index) => (
          <div key={entry._id || index} className="relative pl-6 border-l border-dashed border-white/20 hover:border-amber-accent transition-colors duration-300">
            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-amber-accent"></div>
            <h2 className="font-mono text-xl text-white mb-1">
              <span className="text-amber-accent mr-2">{'>'}</span>{entry.title}
            </h2>
            <h4 className="font-mono text-xs text-amber-accent mb-2 uppercase tracking-widest">[{entry.time}]</h4>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">{entry.desc}</p>
          </div>
        ))}
      </div>

      {/* Read More button (only on Home page) */}
      {!isFullTimeline && (
        <div className="flex justify-center mt-10">
          <Link 
            id="rm" 
            to="/tl" 
            className="btn-primary bg-transparent border-2 border-amber-accent text-amber-accent hover:bg-amber-accent hover:text-white"
          >
            [ EXTRACT_FULL_LOG ]
          </Link>
        </div>
      )}
    </div>
  );
};

export default TimelineSection;
