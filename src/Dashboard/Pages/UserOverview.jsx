import React from 'react';
import { Wallet, Target, TrendingDown, Plus } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const UserOverview = () => {
    // ইউজারের ক্যাটাগরি ভিত্তিক খরচ
    const expenseData = [
        { name: 'Food', value: 400 },
        { name: 'Bills', value: 300 },
        { name: 'Rent', value: 800 },
    ];
    const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-black text-slate-800 tracking-tight">My Finance Summary</h1>
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
                    <Plus size={18} /> New Entry
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Monthly Balance */}
                <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm">
                    <Wallet className="text-blue-600 mb-4" size={24} />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Balance</p>
                    <h3 className="text-2xl font-black text-slate-800">$12,450</h3>
                </div>
                {/* Savings Goal */}
                <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm">
                    <Target className="text-emerald-600 mb-4" size={24} />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Savings Goal</p>
                    <h3 className="text-2xl font-black text-slate-800">75% Achieved</h3>
                </div>
                {/* Recent Spending */}
                <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm">
                    <TrendingDown className="text-rose-600 mb-4" size={24} />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Expense</p>
                    <h3 className="text-2xl font-black text-slate-800">$1,500</h3>
                </div>
            </div>

            {/* Expense Distribution Chart */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Spending Analysis</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={expenseData} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                                {expenseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};


export default UserOverview