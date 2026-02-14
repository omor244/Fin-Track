import React, { useState } from 'react';
import {
    Trash2,
    Layers,
    Tag,
    CreditCard,
    Check,
    X,
    User,
    ArrowUpCircle,
    ArrowDownCircle
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';
import Swal from 'sweetalert2';

const CategoryManagement = () => {
    const AxiosSecure = useAxiosSecure();
    const [editingId, setEditingId] = useState(null);
    const [tempType, setTempType] = useState('');

    // Fetch transactions from backend
    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['category-payments'],
        queryFn: async () => {
            const res = await AxiosSecure('/payment');
            return res.data;
        }
    });

    // Update Type Handler
    const handleUpdateType = async (item) => {

        console.log(tempType)
     
        try {
            const res = await AxiosSecure.patch(`/type/payment/${item._id}`, { type: tempType });

            console.log(res.data)
            if (res.data.modifiedCount) {
                setEditingId(null);
                refetch();
                Swal.fire({
                    title: "Updated!",
                    text: "Transaction type has been changed.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            Swal.fire("Error", "Failed to update type", "error");
        }
    };

    // Delete Handler
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Delete Record?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await AxiosSecure.delete(`/payment/${id}`);
                refetch();
            }
        });
    };

    if (isLoading) return <LoadingPage />;

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                    <Layers className="text-blue-600" size={28} /> Category Management
                </h1>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
                    Manage transaction types and financial flow
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                            <th className="px-6 py-4 text-left">Payer Information</th>
                            <th className="px-6 py-4 text-center">Method</th>
                            <th className="px-6 py-4 text-center">Type Selection</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item) => (
                            <tr key={item._id} className="bg-white group">
                                {/* Payer Info */}
                                <td className="p-5 rounded-l-[1.5rem] border-y border-l border-slate-50 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <User size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-black text-slate-800 uppercase tracking-tight text-sm">{item.name}</span>
                                            <span className="text-[10px] text-slate-400 font-bold">{item.email}</span>
                                        </div>
                                    </div>
                                </td>

                                {/* Method */}
                                <td className="p-5 border-y border-slate-50 shadow-sm text-center">
                                    <div className="flex flex-col items-center">
                                        <span className="px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-black uppercase text-slate-500 flex items-center gap-1">
                                            <CreditCard size={12} /> {item.method}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 mt-1 italic">Product: {item.productName}</span>
                                    </div>
                                </td>

                                {/* Type Selector */}
                                <td className="p-5 border-y border-slate-50 shadow-sm text-center">
                                    {editingId === item._id ? (
                                        <select
                                            value={tempType}
                                            onChange={(e) => setTempType(e.target.value)}
                                            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase outline-none cursor-pointer"
                                        >
                                            <option value="income">Income (+)</option>
                                            <option value="expense">Expense (-)</option>
                                        </select>
                                    ) : (
                                        <div className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                            {item.type === 'income' ? <ArrowUpCircle size={12} /> : <ArrowDownCircle size={12} />}
                                            {item.type}
                                        </div>
                                    )}
                                </td>

                                {/* Actions */}
                                <td className="p-5 rounded-r-[1.5rem] border-y border-r border-slate-50 shadow-sm text-right">
                                    <div className="flex justify-end gap-2">
                                        {editingId === item._id ? (
                                            <>
                                                <button onClick={() => handleUpdateType(item)} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                                                    <Check size={18} />
                                                </button>
                                                <button onClick={() => setEditingId(null)} className="p-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                                                    <X size={18} />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => { setEditingId(item._id); setTempType(item.type); }}
                                                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                                >
                                                    <Tag size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryManagement;