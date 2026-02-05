import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { TrendingUp, Users, Eye, MousePointerClick, Globe, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const data = [
  { name: 'Jan', views: 400, inquiries: 12, clicks: 240, duration: 45 },
  { name: 'Feb', views: 300, inquiries: 8, clicks: 190, duration: 38 },
  { name: 'Mar', views: 600, inquiries: 25, clicks: 400, duration: 52 },
  { name: 'Apr', views: 800, inquiries: 32, clicks: 550, duration: 61 },
  { name: 'May', views: 1100, inquiries: 45, clicks: 900, duration: 75 },
  { name: 'Jun', views: 950, inquiries: 38, clicks: 720, duration: 68 },
];

const sourceData = [
  { name: 'LinkedIn', value: 45, color: '#3b82f6' },
  { name: 'GitHub', value: 30, color: '#9d00ff' },
  { name: 'Direct', value: 15, color: '#10b981' },
  { name: 'Other', value: 10, color: '#64748b' },
];

const AnalyticsCard = ({ title, value, icon: Icon, color, trend, isPositive }) => (
  <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
        {isPositive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
        {trend}
      </div>
    </div>
    <div className="mt-4">
      <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</p>
      <h3 className="text-3xl font-black mt-1 text-white">{value}</h3>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Analytics Overview</h1>
          <p className="text-slate-400 mt-1">Real-time performance tracking for your portfolio.</p>
        </div>
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-bold tracking-wide uppercase">Live: 14 Active Visitors</span>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsCard title="Total Impressions" value="12,840" icon={Eye} color="bg-blue-600/20 text-blue-400" trend="12.5%" isPositive={true} />
        <AnalyticsCard title="Unique Talents" value="3,210" icon={Users} color="bg-purple-600/20 text-purple-400" trend="8.2%" isPositive={true} />
        <AnalyticsCard title="Avg. Engagement" value="4m 32s" icon={Activity} color="bg-orange-600/20 text-orange-400" trend="2.1%" isPositive={false} />
        <AnalyticsCard title="Conversion" value="3.4%" icon={MousePointerClick} color="bg-emerald-600/20 text-emerald-400" trend="24.3%" isPositive={true} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
    
        <div className="xl:col-span-2 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Traffic Architecture</h3>
            <select className="bg-slate-800 border-none text-xs rounded-lg focus:ring-blue-500 text-slate-300">
              <option>Last 6 Months</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}
                />
                <Area type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
                <Area type="monotone" dataKey="clicks" stroke="#9d00ff" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col">
          <h3 className="text-xl font-bold text-white mb-8">Acquisition Channels</h3>
          <div className="h-[250px] w-full flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourceData} innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value">
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3">
            {sourceData.map((item) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Insights - New Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex items-center gap-6">
          <div className="bg-blue-500/20 p-4 rounded-2xl">
            <Globe className="text-blue-400" size={32} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Global Reach</h4>
            <p className="text-slate-400 text-sm">Most of your traffic is coming from **Nepal**, **USA**, and **India**.</p>
          </div>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex items-center gap-6">
          <div className="bg-purple-500/20 p-4 rounded-2xl">
            <TrendingUp className="text-purple-400" size={32} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Top Project</h4>
            <p className="text-slate-400 text-sm">Your **"E-Commerce Redesign"** project saw a 40% jump in clicks this month.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;