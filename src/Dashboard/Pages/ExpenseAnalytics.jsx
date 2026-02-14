import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { PieChart as PieIcon, BarChart3, TrendingUp, Calendar } from 'lucide-react';

const ExpenseAnalytics = () => {
  
    const categoryData = [
        { name: 'Food', value: 4000 },
        { name: 'Rent', value: 15000 },
        { name: 'Shopping', value: 3200 },
        { name: 'Bills', value: 5000 },
        { name: 'Transport', value: 2000 },
    ];

   
    const monthlyData = [
        { month: 'Jan', expense: 25000 },
        { month: 'Feb', expense: 29700 }, 
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                    <PieIcon className="text-orange-600" size={28} /> Expense Analytics
                </h1>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
                    Visualizing your financial habits and spending patterns
                </p>
            </div>

            {/* Analytics Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {/* 1. Category Distribution (Pie Chart) */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm shadow-slate-100/50">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <BarChart3 size={18} className="text-blue-500" /> Spending by Category
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    innerRadius={80}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 2. Monthly Comparison (Bar Chart) */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm shadow-slate-100/50">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <TrendingUp size={18} className="text-emerald-500" /> Monthly Growth
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="expense" fill="#0f172a" radius={[10, 10, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            {/* Insights Footer Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-200">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                        <Calendar className="text-orange-400" size={28} />
                    </div>
                    <div>
                        <h4 className="font-black text-lg">Smart Insight</h4>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">You spent 12% more on Food this month compared to last month.</p>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default ExpenseAnalytics;