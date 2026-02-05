import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, User, CheckCircle, Clock, LogOut, Trash2 } from 'lucide-react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';

// Reusable StatCard Component
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
  const location = useLocation();
  
  // 1. State for messages
  const [messages, setMessages] = useState([]);

  // 2. Load messages from LocalStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("contact_messages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Error parsing messages:", error);
        setMessages([]);
      }
    }
  }, []);

  // 3. Delete message functionality
  const deleteMessage = (id) => {
    const filtered = messages.filter(msg => msg.id !== id);
    setMessages(filtered);
    localStorage.setItem("contact_messages", JSON.stringify(filtered));
  };

  // 4. Logout Logic 
  // We temporarily save messages, clear auth keys, then restore messages.
const handleLogout = () => {
    // 1. Clear all auth-related keys
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userImage");

    // 2. Redirect to login
    // Using 'replace: true' prevents the back button from working
    navigate('/login', { replace: true });
};

  const isAnalytics = location.pathname.includes('analytics');

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-10">
          Portfolio Admin
        </h2>
        
        <nav className="space-y-4 flex-grow">
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-3 p-2 rounded-lg transition ${
              !isAnalytics ? 'text-blue-400 bg-blue-400/10' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail size={20} /> <span>Inbox</span>
          </Link>

          <Link 
            to="/dashboard/analytics" 
            className={`flex items-center gap-3 p-2 rounded-lg transition ${
              isAnalytics ? 'text-blue-400 bg-blue-400/10' : 'text-slate-400 hover:text-white'
            }`}
          >
            <User size={20} /> <span>Analytics</span>
          </Link>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 text-slate-400 hover:text-red-400 p-2 mt-auto border-t border-slate-800 pt-6 transition duration-300"
        >
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </aside>

   
      <main className="flex-1 overflow-y-auto p-8">
        {isAnalytics ? (
          <Outlet /> 
        ) : (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-bold">Message Dashboard</h1>
              <p className="text-slate-400">Manage your portfolio inquiries</p>
            </header>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard 
                icon={<MessageSquare className="text-blue-400" />} 
                label="Total Messages" 
                value={messages.length} 
              />
              <StatCard 
                icon={<Clock className="text-yellow-400" />} 
                label="Last Message" 
                value={messages.length > 0 ? "New" : "None"} 
              />
              <StatCard 
                icon={<CheckCircle className="text-green-400" />} 
                label="Storage Status" 
                value="Local" 
              />
            </div>

            {/* Messages Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-800/50 text-slate-400 text-sm uppercase">
                  <tr>
                    <th className="p-4">Sender</th>
                    <th className="p-4">Message Preview</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {messages.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-10 text-center text-slate-500">
                        No messages found in local storage.
                      </td>
                    </tr>
                  ) : (
                    messages.map((msg) => (
                      <tr key={msg.id} className="hover:bg-slate-800/30">
                        <td className="p-4">
                          <div className="font-medium">{msg.name}</div>
                          <div className="text-xs text-slate-500">{msg.email}</div>
                        </td>
                        <td className="p-4 text-slate-300 italic text-sm">
                          "{msg.message?.substring(0, 40)}..."
                        </td>
                        <td className="p-4 text-slate-400 text-xs">
                          {msg.date || "No date"}
                        </td>
                        <td className="p-4 flex justify-center gap-2">
                          <button 
                            onClick={() => alert(`Full Message from ${msg.name}:\n\n${msg.message}`)}
                            className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => deleteMessage(msg.id)}
                            className="text-xs bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white px-3 py-1 rounded transition"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
};