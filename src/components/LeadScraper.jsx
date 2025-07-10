import React, { useState } from 'react';
import axios from 'axios';
import { Filter, Loader2 } from 'lucide-react';

const LeadScraper = ({ onScrape }) => {
  const [term, setTerm] = useState('software');
  const [location, setLocation] = useState('New York');
  const [minRating, setMinRating] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    setLoading(true);
    try {
      // Try Fetch API first
      const response = await fetch(`http://localhost:5000/api/leads?term=${term}&location=${location}&minRating=${minRating}`);
      if (!response.ok) throw new Error('Fetch failed');
      const data = await response.json();
      onScrape(data);
    } catch (fetchError) {
      console.warn('Fetch failed, falling back to axios:', fetchError);
      try {
        const res = await axios.get('http://localhost:5000/api/leads', {
          params: { term, location, minRating },
        });
        onScrape(res.data);
      } catch (axiosError) {
        console.error('Both fetch and axios failed:', axiosError);
      }
    }
    setLoading(false);
  };

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="p-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800 placeholder-slate-400"
          placeholder="🔍 Search Term"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800 placeholder-slate-400"
          placeholder="📍 Location"
        />
        <input
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="p-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800 placeholder-slate-400"
          placeholder="⭐ Min Rating"
        />
      </div>
      <button
        onClick={handleScrape}
        disabled={loading}
        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin w-5 h-5" />
            Scraping...
          </>
        ) : (
          <>
            <Filter className="w-5 h-5" />
            Scrape Leads
          </>
        )}
      </button>
    </div>
  );
};

export default LeadScraper;