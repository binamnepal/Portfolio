import React, { useState } from 'react';
import { Mail, MessageSquare, User, CheckCircle, Clock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

// --- Helper Component for Stats ---
const StatCard = ({ icon, label, value }) => (
  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
    <div className="p-3 bg-slate-800 rounded-lg">{icon}</div>
    <div>
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for the table
  const [messages] = useState([
    { id: 1, name: "Alice Smith", email: "alice@example.com", subject: "Job Opportunity", date: "2026-02-01", status: "unread" },
    { id: 2, name: "Bob Jones", email: "bob@techcorp.com", subject: "Project Inquiry", date: "2026-01-30", status: "replied" },
    { id: 3, name: "Charlie Day", email: "charlie@sunny.com", subject: "Collaboration", date: "2026-01-28", status: "replied" },
  ]);

  const handleLogout = () => {
    // 1. Clear all admin-related data from LocalStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userImage');

    console.log("Session cleared. Redirecting...");
    
    // 2. Send user back to login page
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-10">
          Portfolio Admin
        </h2>
        
        <nav className="space-y-4 flex-grow">
          <div className="flex items-center gap-3 text-blue-400 bg-blue-400/10 p-2 rounded-lg cursor-pointer">
            <Mail size={20} /> <span>Inbox</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 hover:text-white p-2 transition cursor-pointer">
            <User size={20} /> <span>Analytics</span>
          </div>
        </nav>

        {/* LOGOUT BUTTON */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 text-slate-400 hover:text-red-400 p-2 mt-auto border-t border-slate-800 pt-6 transition duration-300"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Message Dashboard</h1>
          <p className="text-slate-400">Manage your portfolio inquiries</p>
        </header>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard icon={<MessageSquare className="text-blue-400" />} label="Total Messages" value={messages.length} />
          <StatCard icon={<Clock className="text-yellow-400" />} label="Pending" value="1" />
          <StatCard icon={<CheckCircle className="text-green-400" />} label="Replied" value="2" />
        </div>

        {/* TABLE SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-sm uppercase">
              <tr>
                <th className="p-4">Sender</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-slate-800/30 transition">
                  <td className="p-4">
                    <div className="font-medium">{msg.name}</div>
                    <div className="text-xs text-slate-500">{msg.email}</div>
                  </td>
                  <td className="p-4 text-slate-300">{msg.subject}</td>
                  <td className="p-4 text-slate-400 text-sm">{msg.date}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      msg.status === 'unread' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'
                    }`}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};