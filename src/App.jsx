import React, { useState } from 'react';
import LeadScraper from './components/LeadScraper';
import LeadTable from './components/LeadTable';

const App = () => {
  const [leads, setLeads] = useState([]);

  const handleLeads = (data) => {
    setLeads(data);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          🚀 Lead Scraper MVP
        </h1>
        <LeadScraper onScrape={handleLeads} />
        <LeadTable leads={leads} />
      </div>
    </div>
  );
};

export default App;
