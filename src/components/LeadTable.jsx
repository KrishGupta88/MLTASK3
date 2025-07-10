import React from 'react';

const LeadTable = ({ leads }) => {
  if (!leads.length) return null;

  return (
    <div className="mt-8 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📋 Scraped Leads</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-100 text-blue-900 text-left text-sm uppercase tracking-wide">
            <th className="p-4">Name</th>
            <th className="p-4">Address</th>
            <th className="p-4">Website</th>
            <th className="p-4">Email</th>
            <th className="p-4">Source</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, idx) => (
            <tr
              key={idx}
              className="hover:bg-blue-50 border-t text-sm text-slate-800 transition-colors"
            >
              <td className="p-4">{lead.name}</td>
              <td className="p-4">{lead.address}</td>
              <td className="p-4">
                <a
                  href={lead.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {lead.website}
                </a>
              </td>
              <td className="p-4">{lead.email || 'N/A'}</td>
              <td className="p-4">{lead.source || 'Scraped'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
