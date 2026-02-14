import React from 'react';
import {
    Wallet,
    ArrowUpCircle,
    ArrowDownCircle,
    CreditCard,
    TrendingUp,
    Activity,
    ArrowUpRight,
    Calendar,
    Filter
} from 'lucide-react';

const StatCard = ({ icon, label, value, color, trend, percentage }) => (
    <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300">
        <div className="flex justify-between items-start mb-6 relative z-10">
            <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-current shadow-sm`}>
                {React.cloneElement(icon, { size: 24, className: color.replace('bg-', 'text-') })}
            </div>
            <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 ${percentage.includes('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {percentage}
            </div>
        </div>

        <div className="relative z-10">
            <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-[0.1em] mb-1">{label}</p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
        </div>

        {/* Subtle Background Progress Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-50">
            <div className={`h-full ${color} opacity-20 w-[60%]`}></div>
        </div>
    </div>
);

const Overview = () => {
    const stats = [
        { label: "Available Balance", value: "$24,500.00", icon: <Wallet />, color: "bg-blue-600", percentage: "+12.5%" },
        { label: "Monthly Income", value: "$8,200.50", icon: <ArrowUpCircle />, color: "bg-emerald-500", percentage: "+5.2%" },
        { label: "Total Spending", value: "$3,150.20", icon: <ArrowDownCircle />, color: "bg-orange-500", percentage: "-2.4%" },
        { label: "Credit Utilization", value: "22%", icon: <CreditCard />, color: "bg-indigo-600", percentage: "Optimal" },
    ];

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen">

            {/* Header Section: Professional & Clean */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                <div>
                    <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">
                        <Activity size={14} /> Global Portfolio
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                        Dashboard <span className="text-slate-400 font-light">Insight</span>
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                        <Calendar size={16} /> Jan 2026 - Feb 2026
                    </button>
                    <button className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Main Content: Chart vs Goals */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Analytics Section (8 Columns) */}
                <div className="lg:col-span-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-slate-900">Cashflow Dynamics</h3>
                            <p className="text-sm text-slate-400 font-medium">Tracking your liquidity over the last 30 days</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span> Income
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-orange-500"></span> Expenses
                            </span>
                        </div>
                    </div>

                    {/* Placeholder with a more professional grid look */}
                    <div className="h-[320px] bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', size: '20px 20px' }}></div>
                        <div className="text-center z-10">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-4">
                                <TrendingUp className="text-blue-600" size={24} />
                            </div>
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-tighter">Real-time Visualization Engine</p>
                            <p className="text-slate-400 text-xs mt-1">Ready for Recharts.js Integration</p>
                        </div>
                    </div>
                </div>

                {/* Side Actions (4 Columns) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Goal Card */}
                    <div className="bg-[#111827] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-black tracking-tight">Laptop Fund</h3>
                                    <span className="text-orange-500 font-bold text-sm">85%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-800 rounded-full mb-4">
                                    <div className="w-[85%] h-full bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.4)]"></div>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    You need <span className="text-white font-bold">$450.00</span> more to reach your target goal.
                                </p>
                            </div>
                            <button className="mt-8 w-full bg-white text-slate-900 font-bold py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all duration-300">
                                Boost Savings
                            </button>
                        </div>
                        {/* Glass Decoration */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Quick Action List */}
                    <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white">
                        <h4 className="font-bold text-lg mb-4">Quick Pay</h4>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                                    <span className="text-xs font-bold">U{i}</span>
                                </div>
                            ))}
                            <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center cursor-pointer">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Overview;