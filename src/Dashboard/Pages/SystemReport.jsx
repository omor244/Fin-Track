import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    FileText,
    Download,
    TrendingUp,
    TrendingDown,
    DollarSign,
    Calendar,
    Users,
    PieChart
} from 'lucide-react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';

const SystemReport = () => {
    const AxiosSecure = useAxiosSecure();

    // Fetching all transaction data
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['system-reports'],
        queryFn: async () => {
            const res = await AxiosSecure('/payment');
            return res.data;
        }
    });

    // Calculations
    const totalIncome = payments
        .filter(p => p.type === 'income')
        .reduce((sum, current) => sum + parseFloat(current.amount || 10000), 0);

    const totalExpense = payments
        .filter(p => p.type === 'expense')
        .reduce((sum, current) => sum + parseFloat(current.amount || 50), 0);

    const netProfit = totalIncome - totalExpense;

    if (isLoading) return <LoadingPage />;

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                        <FileText className="text-orange-600" size={28} /> Financial Reports
                    </h1>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
                        Comprehensive system-wide audit and analytics
                    </p>
                </div>
            
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                        <TrendingUp size={24} />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Revenue</p>
                    <h2 className="text-3xl font-black text-slate-800">${totalIncome.toLocaleString()}</h2>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm">
                    <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
                        <TrendingDown size={24} />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Outflow</p>
                    <h2 className="text-3xl font-black text-slate-800">${totalExpense.toLocaleString()}</h2>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                        <DollarSign size={24} />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Net Balance</p>
                    <h2 className={`text-3xl font-black ${netProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        ${netProfit.toLocaleString()}
                    </h2>
                </div>
            </div>

            {/* Recent Audit Table */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-50 shadow-sm">
                <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                    <Calendar size={20} className="text-orange-500" /> Recent Activity Log
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                                <th className="pb-4">Transaction Date</th>
                                <th className="pb-4">User Details</th>
                                <th className="pb-4">Method</th>
                                <th className="pb-4 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {payments.slice(0, 10).map((item) => (
                                <tr key={item._id} className="group hover:bg-slate-50/50 transition-all">
                                    <td className="py-4 font-bold text-slate-500 text-sm">{item.date}</td>
                                    <td className="py-4">
                                        <div className="flex flex-col">
                                            <span className="font-black text-slate-800 text-sm uppercase">{item.name}</span>
                                            <span className="text-[10px] text-slate-400 font-bold">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-[9px] font-black text-slate-500 uppercase">
                                            {item.method}
                                        </span>
                                    </td>
                                    <td className={`py-4 text-right font-black ${item.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                        {item.type === 'income' ? '+' : '-'}${item.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SystemReport;