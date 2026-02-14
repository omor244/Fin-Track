import React from 'react';
import {
    CreditCard,
    ArrowUpCircle,
    ArrowDownCircle,
    CheckCircle2,
    XCircle,
    Clock,
    Search,
    TrendingDown,
    PieChart,
    Target
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';

const BudgetsAndGoals = () => {
    const AxiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const res = await AxiosSecure('/payment');
            return res.data;
        }
    });

    // --- LOGIC FOR BUDGET PERCENTAGE ---
    const BUDGET_LIMIT = 50000; // Static limit for demonstration

    // Filter and Sum only "Completed" expenses
    const totalExpenses = payments.filter(p => p.type === 'expense' && p.status === 'Completed')
        .reduce((sum, current) => sum + (parseFloat(current.amount) || 0), 0);
    // Note: Ensure your API returns an "amount" field.

    const budgetPercentage = Math.min((totalExpenses / BUDGET_LIMIT) * 100, 100);

    if (isLoading) return <LoadingPage />;

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">

            {/* 1. Statistics & Budget Percentage Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Budget Tracker Card */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                            <PieChart size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Monthly Budget</span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                        <h2 className="text-3xl font-black text-slate-900">${totalExpenses}</h2>
                        <span className="text-slate-400 font-bold text-sm">/ ${BUDGET_LIMIT} Used</span>
                    </div>

                    {/* Percentage Progress Bar */}
                    <div className="space-y-3">
                        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full transition-all duration-1000 ${budgetPercentage > 80 ? 'bg-rose-500' : 'bg-indigo-600'}`}
                                style={{ width: `${budgetPercentage}%` }}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
                                {budgetPercentage.toFixed(1)}% Consumed
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${budgetPercentage > 80 ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                {budgetPercentage > 80 ? 'Warning: Low Budget' : 'Healthy Spending'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Transactions</p>
                        <p className="text-3xl font-black text-slate-900">{payments.length}</p>
                        <p className="text-xs font-medium text-slate-500">Updated just now</p>
                    </div>
                    <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-300">
                        <Target size={40} />
                    </div>
                </div>
            </div>

            {/* 2. Transaction Details Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white">
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">Transaction History</h2>
                        <p className="text-slate-500 text-xs font-medium mt-1">Details of all payments and income</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Transaction ID</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Product / Service</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Type</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Method</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {payments.map((payment) => (
                                <tr key={payment._id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-6">
                                        <span className="text-[11px] font-bold text-slate-400 font-mono group-hover:text-indigo-600">
                                            #{payment._id.slice(-8).toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <p className="text-sm font-black text-slate-900">{payment.productName}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{payment.date}</p>
                                    </td>
                                    <td className="p-6">
                                        <div className={`flex items-center gap-1.5 text-[11px] font-black uppercase ${payment.type === 'income' ? 'text-emerald-600' : 'text-rose-500'}`}>
                                            {payment.type === 'income' ? <ArrowUpCircle size={14} /> : <ArrowDownCircle size={14} />}
                                            {payment.type}
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${payment.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'
                                            }`}>
                                            {payment.status === 'Completed' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                                            {payment.status}
                                        </div>
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex flex-col items-end">
                                            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                                                <CreditCard size={14} className="text-slate-400" />
                                                <span>**** {payment.cardNumber}</span>
                                            </div>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase">{payment.method}</span>
                                        </div>
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

export default BudgetsAndGoals;