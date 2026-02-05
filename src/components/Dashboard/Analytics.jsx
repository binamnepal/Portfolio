import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { TrendingUp, Users, Eye, MousePointerClick } from 'lucide-react';

const data = [
  { name: 'Jan', views: 400, inquiries: 12, clicks: 240 },
  { name: 'Feb', views: 300, inquiries: 8, clicks: 190 },
  { name: 'Mar', views: 600, inquiries: 25, clicks: 400 },
  { name: 'Apr', views: 800, inquiries: 32, clicks: 550 },
  { name: 'May', views: 1100, inquiries: 45, clicks: 900 },
  { name: 'Jun', views: 950, inquiries: 38, clicks: 720 },
];

const AnalyticsCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-400 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon size={20} />
      </div>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold text-white">Analytics Overview</h1>
        <p className="text-slate-400">Website performance metrics</p>
      </header>

    
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <AnalyticsCard title="Total Views" value="4.2k" icon={Eye} color="bg-blue-500/10 text-blue-500" />
        <AnalyticsCard title="Visitors" value="1.8k" icon={Users} color="bg-purple-500/10 text-purple-500" />
        <AnalyticsCard title="CTR" value="12.4%" icon={MousePointerClick} color="bg-emerald-500/10 text-emerald-500" />
        <AnalyticsCard title="Growth" value="+18%" icon={TrendingUp} color="bg-orange-500/10 text-orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl h-[350px]">
          <h3 className="text-lg font-semibold mb-6 text-slate-200">Traffic Trend</h3>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                itemStyle={{ color: '#f8fafc' }}
              />
              <Area type="monotone" dataKey="views" stroke="#3b82f6" fillOpacity={1} fill="url(#colorViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

    
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl h-[350px]">
          <h3 className="text-lg font-semibold mb-6 text-slate-200">Monthly Inquiries</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
              <Tooltip 
                 cursor={{fill: '#1e293b'}}
                 contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
              />
              <Bar dataKey="inquiries" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;