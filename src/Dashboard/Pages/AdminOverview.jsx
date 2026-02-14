import React from 'react';
import {
    Users,
    DollarSign,
    Zap,
    ArrowUpRight,
    BarChart3,
    TrendingUp,
    ShieldCheck,
    Globe
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, AreaChart, Area
} from 'recharts';

const AdminOverview = () => {
  
    const performanceData = [
        { name: 'Mon', revenue: 3000, users: 240 },
        { name: 'Tue', revenue: 2000, users: 139 },
        { name: 'Wed', revenue: 2000, users: 280 },
        { name: 'Thu', revenue: 2080, users: 390 },
        { name: 'Fri', revenue: 1090, users: 480 },
        { name: 'Sat', revenue: 2090, users: 380 },
        { name: 'Sun', revenue: 1090, users: 430 },
    ];

    return (
        <div className="p-6 md:p-10 space-y-10 bg-[#F8FAFC] min-h-screen">
       
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">Control Center</h1>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mt-1">
                        Real-time platform metrics & governance
                    </p>
                </div>
             
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Liquidity"
                    value="$1.2M"
                    change="+12.5%"
                    icon={<DollarSign size={20} />}
                    color="text-emerald-600"
                    bgColor="bg-emerald-50"
                />
                <StatCard
                    title="Active Users"
                    value="42.8K"
                    change="+18%"
                    icon={<Users size={20} />}
                    color="text-blue-600"
                    bgColor="bg-blue-50"
                />
                <StatCard
                    title="System Load"
                    value="24ms"
                    change="Stable"
                    icon={<Zap size={20} />}
                    color="text-orange-600"
                    bgColor="bg-orange-50"
                />
                <StatCard
                    title="Security Score"
                    value="99.9%"
                    change="Encrypted"
                    icon={<ShieldCheck size={20} />}
                    color="text-purple-600"
                    bgColor="bg-purple-50"
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Large Analytics Chart */}
                <div className="xl:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                            <BarChart3 size={18} className="text-slate-400" /> Revenue Flow Projection
                        </h3>
                        <select className="text-[10px] font-black uppercase bg-slate-50 border-none rounded-lg px-3 py-1 outline-none">
                            <option>Last 7 Days</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performanceData}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0f172a" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#0f172a" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Side Status Panel */}
                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                        <Globe className="absolute -right-4 -bottom-4 text-white/5" size={120} />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Global Status</h4>
                        <p className="text-2xl font-black mb-6 italic">Systems Operational</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold">Main Server</span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                            </div>
                            <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold">Payment Gateway</span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                            <TrendingUp size={14} /> Quick Insights
                        </h4>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed italic">
                            "User growth is up by 18% this week. Consider updating financial tips to boost engagement."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-component for Stats
const StatCard = ({ title, value, change, icon, color, bgColor }) => (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm group hover:scale-[1.02] transition-all duration-300">
        <div className={`w-12 h-12 ${bgColor} ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
            {icon}
        </div>
        <div className="flex justify-between items-end">
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter">{value}</h3>
            </div>
            <div className={`text-[9px] font-black px-2 py-1 rounded-lg ${change.includes('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-500'}`}>
                {change}
            </div>
        </div>
    </div>
);

export default AdminOverview;