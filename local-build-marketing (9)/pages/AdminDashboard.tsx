
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebaseMock';
import { Lead } from '../types';

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const data = await db.getLeads();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleMarkResponded = async (id: string) => {
    await db.markLeadResponded(id);
    fetchLeads();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      await db.deleteLead(id);
      fetchLeads();
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-slate-900">Admin Command Center</h1>
          <button 
            onClick={() => { localStorage.removeItem('isAdmin'); window.location.reload(); }}
            className="text-sm font-bold text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Total Leads</h3>
            <p className="text-3xl font-black text-slate-900">{leads.length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Pending Response</h3>
            <p className="text-3xl font-black text-orange-600">{leads.filter(l => !l.responded).length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Latest Inquiry</h3>
            <p className="text-sm font-medium text-slate-600 truncate">{leads[0]?.name || 'N/A'}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-slate-800">Recent Inquiries</h2>
            <button onClick={fetchLeads} className="text-blue-600 text-sm hover:underline">Refresh List</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Interested In</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr><td colSpan={5} className="text-center py-20 text-slate-400">Loading leads...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={5} className="text-center py-20 text-slate-400">No leads yet.</td></tr>
                ) : leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      {lead.responded ? (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[10px] font-bold">RESPONDED</span>
                      ) : (
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-[10px] font-bold">PENDING</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
                      <div className="text-xs text-slate-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-lg">{lead.serviceInterested}</span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button 
                        onClick={() => handleMarkResponded(lead.id)}
                        disabled={lead.responded}
                        className="text-xs font-bold text-blue-600 hover:underline disabled:opacity-20"
                      >
                        Resolve
                      </button>
                      <button 
                        onClick={() => handleDelete(lead.id)}
                        className="text-xs font-bold text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
