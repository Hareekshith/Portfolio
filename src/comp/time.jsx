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

  if (loading) return <div className="text-center text-amber-accent my-8 font-body">Loading Timeline...</div>;
  if (error) return <div className="text-center text-red-500 my-8 font-body">{error}</div>;

  return (
    <div id="time" className="my-20 bg-warm-brown rounded-[30px] mx-4 sm:mx-10 p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-6 lg:gap-10 items-center">
      {/* Timeline List */}
      <ul className="lg:col-span-2">
        {entries.map((entry, index) => (
          <li key={entry._id || index} className="relative mb-6 pl-8 last:mb-0" style={{ listStyle: 'circle', color: 'var(--acc)' }}>
            <h2 className="font-title text-2xl text-coral-title sm:text-xl">{entry.title}</h2>
            <h4 className="font-body text-amber-accent sm:text-sm">{entry.time}</h4>
            <p className="text-soft-white font-body sm:text-sm">{entry.desc}</p>
          </li>
        ))}
      </ul>

      {/* Read More button (only on Home page) */}
      {!isFullTimeline && (
        <Link 
          id="rm" 
          to="/tl" 
          className="flex w-32 h-10 mt-4 mx-auto bg-vivid-orange text-coral-title font-body text-base 
                     rounded-lg justify-center items-center no-underline transition duration-300 
                     hover:brightness-125"
        >
          Read More
        </Link>
      )}
    </div>
  );
};

export default TimelineSection;
