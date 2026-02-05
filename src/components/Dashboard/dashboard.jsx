import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, User, CheckCircle, Clock, LogOut, Trash2, Menu, X, Bell, Search, Reply, ExternalLink } from 'lucide-react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';

const StatCard = ({ icon, label, value, trend }) => (
  <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
      {trend && <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">{trend}</span>}
    </div>
    <div>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{value}</p>
    </div>
  </div>
);

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false); // Toggle for Bell

  useEffect(() => {
    const savedMessages = localStorage.getItem("contact_messages");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed);
        setUnreadCount(parsed.filter(msg => msg.read === false).length);
      } catch (error) {
        setMessages([]);
      }
    }
  }, []);

  // Central logic to handle opening a message (from table OR notification)
  const handleOpenMessage = (msg) => {
    setSelectedMessage(msg);
    setShowNotifications(false); // Close bell dropdown if open
    
    // If we are on Analytics page, move to Inbox to show the message
    if (location.pathname.includes('analytics')) {
      navigate('/dashboard');
    }

    if (!msg.read) {
      const updated = messages.map(m => m.id === msg.id ? { ...m, read: true } : m);
      setMessages(updated);
      setUnreadCount(updated.filter(m => !m.read).length);
      localStorage.setItem("contact_messages", JSON.stringify(updated));
    }
  };

  const markAllAsRead = () => {
    const updatedMessages = messages.map(msg => ({ ...msg, read: true }));
    setMessages(updatedMessages);
    setUnreadCount(0);
    localStorage.setItem("contact_messages", JSON.stringify(updatedMessages));
    setShowNotifications(false);
  };

  const deleteMessage = (id) => {
    const filtered = messages.filter(msg => msg.id !== id);
    setMessages(filtered);
    setUnreadCount(filtered.filter(msg => !msg.read).length);
    if (selectedMessage?.id === id) setSelectedMessage(null);
    localStorage.setItem("contact_messages", JSON.stringify(filtered));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate('/login', { replace: true });
  };

  const filteredMessages = messages.filter(msg => 
    msg.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    msg.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isAnalytics = location.pathname.includes('analytics');

  return (
    <div className="flex h-screen bg-[#0a0014] text-slate-100 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 p-6 flex flex-col transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">CORE ADMIN</h2>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
        </div>
        <nav className="space-y-2 flex-grow">
          <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${!isAnalytics ? 'bg-blue-600 shadow-lg shadow-blue-600/20 text-white' : 'text-slate-400 hover:bg-slate-800'}`}><Mail size={20} /> <span className="font-medium">Inbox</span></Link>
          <Link to="/dashboard/analytics" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isAnalytics ? 'bg-purple-600 shadow-lg shadow-purple-600/20 text-white' : 'text-slate-400 hover:bg-slate-800'}`}><User size={20} /> <span className="font-medium">Analytics</span></Link>
        </nav>
        <button onClick={handleLogout} className="mt-auto flex items-center justify-center gap-2 text-red-400 hover:bg-red-400/10 p-3 rounded-xl border border-red-400/20 transition-all">
          <LogOut size={18} /> <span className="font-bold text-sm">Sign Out</span>
        </button>
      </aside>

      <main className="flex-1 overflow-y-auto relative">
        {/* HEADER */}
        <header className="sticky top-0 z-40 flex items-center justify-between p-4 lg:p-8 bg-[#0a0014]/80 backdrop-blur-md border-b border-slate-800/50">
            <button className="lg:hidden p-2 bg-slate-800 rounded-lg" onClick={() => setSidebarOpen(true)}><Menu size={20}/></button>
            
            <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 px-4 py-2 rounded-full w-96 focus-within:border-blue-500 transition-all">
                <Search size={18} className="text-slate-500" />
                <input type="text" placeholder="Search inbox..." className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <div className="flex items-center gap-4 relative">
                {/* NOTIFICATION BELL & DROPDOWN */}
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all"
                >
                  <Bell size={22} className={unreadCount > 0 ? "text-blue-400 animate-pulse" : "text-slate-400"} />
                  {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#0a0014]">{unreadCount}</span>}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-full mt-4 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in duration-200">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                      <h3 className="text-[10px] font-black text-slate-500 uppercase">Recent Messages</h3>
                      <button onClick={markAllAsRead} className="text-[10px] text-blue-400 hover:underline">Mark all read</button>
                    </div>
                    <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                      {messages.filter(m => !m.read).length === 0 ? (
                        <p className="text-center text-slate-600 text-xs py-4 italic">No new messages</p>
                      ) : (
                        messages.filter(m => !m.read).map(msg => (
                          <div 
                            key={msg.id} 
                            onClick={() => handleOpenMessage(msg)}
                            className="p-3 bg-slate-800/40 rounded-xl cursor-pointer hover:bg-blue-600/10 border border-transparent hover:border-blue-500/30 transition-all group"
                          >
                            <div className="flex justify-between items-start">
                              <p className="text-xs font-bold text-white truncate">{msg.name}</p>
                              <ExternalLink size={12} className="text-slate-600 group-hover:text-blue-400" />
                            </div>
                            <p className="text-[10px] text-slate-400 line-clamp-1 italic">"{msg.message}"</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px]"><div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-bold text-xs">AD</div></div>
            </div>
        </header>

        <div className="p-4 lg:p-8">
          {!isAnalytics && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <h1 className="text-4xl font-black text-white mb-2">Inbox</h1>
                <p className="text-slate-400">Manage incoming requests from your <strong>RTX 4050</strong> dashboard.</p>
              </div>

              {/* MESSAGE PREVIEW (OPENED FROM TABLE OR NOTIFICATION) */}
              {selectedMessage && (
                <div className="mb-8 animate-in slide-in-from-top duration-500">
                   <div className="bg-slate-900 border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                      <div className="p-6 bg-slate-800/30 border-b border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-xl font-bold">{selectedMessage.name?.charAt(0)}</div>
                          <div>
                            <h2 className="text-lg font-bold text-white">{selectedMessage.name}</h2>
                            <p className="text-xs text-slate-400">{selectedMessage.email}</p>
                          </div>
                        </div>
                        <button onClick={() => setSelectedMessage(null)} className="p-2 hover:bg-slate-800 rounded-xl text-slate-400"><X size={20} /></button>
                      </div>
                      <div className="p-8">
                        <div className="text-slate-500 text-xs mb-4 flex items-center gap-2"><Clock size={14} /> Received on {selectedMessage.date || "Just now"}</div>
                        <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 text-slate-300 italic leading-relaxed">"{selectedMessage.message}"</div>
                        <div className="mt-6 flex gap-3">
                          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all"><Reply size={16} /> Reply Now</button>
                          <button onClick={() => deleteMessage(selectedMessage.id)} className="flex items-center gap-2 px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl font-bold text-sm transition-all"><Trash2 size={16} /> Delete</button>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                <StatCard icon={<MessageSquare className="text-blue-400" />} label="Total" value={messages.length} />
                <StatCard icon={<Clock className="text-yellow-400" />} label="Unread" value={unreadCount} />
                <StatCard icon={<CheckCircle className="text-green-400" />} label="Performance" value="Stable" />
              </div>

              {/* INBOX TABLE */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-800/30 text-slate-500 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-6 font-black">Sender</th>
                        <th className="p-6 font-black">Message Preview</th>
                        <th className="p-6 font-black text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {filteredMessages.map((msg) => (
                        <tr 
                          key={msg.id} 
                          onClick={() => handleOpenMessage(msg)}
                          className={`group cursor-pointer hover:bg-blue-500/[0.04] transition-colors ${!msg.read ? 'bg-blue-500/[0.03]' : ''} ${selectedMessage?.id === msg.id ? 'bg-blue-500/10 border-l-4 border-blue-500' : ''}`}
                        >
                          <td className="p-6">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${!msg.read ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-500'}`}>{msg.name?.charAt(0)}</div>
                              <div>
                                <div className="font-bold text-sm flex items-center gap-2">{msg.name} {!msg.read && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>}</div>
                                <div className="text-xs text-slate-500 font-mono">{msg.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-6 text-slate-400 text-sm italic truncate max-w-[300px]">"{msg.message}"</td>
                          <td className="p-6 text-center">
                            <button onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }} className="p-2 hover:bg-red-500/10 text-red-400 rounded-lg transition"><Trash2 size={18} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {isAnalytics && <Outlet />}
        </div>
      </main>
    </div>
  );
};