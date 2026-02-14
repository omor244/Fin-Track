import React from 'react';
import {
    MoreVertical,
    ArrowUpCircle,
    ArrowDownCircle,
    Trash2,
    Plus,
    Download,
    ExternalLink,
    Landmark,
    CreditCard
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';
import Swal from 'sweetalert2';

const ManageTransactions = () => {
    const AxiosSecure = useAxiosSecure();

    // Fetch transactions from backend
    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const res = await AxiosSecure('/payment');
            return res.data;
        }
    });

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "This transaction will be permanently removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ea580c",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await AxiosSecure.delete(`/payment/${id}`);
                    refetch();
                    Swal.fire("Deleted!", "Transaction removed.", "success");
                } catch (error) {
                    console.error(error);
                }
            }
        });
    };

    const handleStatusChange = async (id, newStatus) => {
     

        
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!"
            }).then( async (result) => {
                
                if (result.isConfirmed) {
                    const res = await AxiosSecure.patch(`/payment/${id}`, { status: newStatus });
                  
                    if (res.data.modifiedCount) {
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                }
            });
            
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    if (isLoading) return <LoadingPage />;

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Financial Records</h1>
                    <p className="text-slate-500 text-sm font-medium">Manage and verify all incoming and outgoing transactions.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all text-sm">
                        <Download size={18} /> Export
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-2xl font-bold shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all text-sm">
                        <Plus size={18} /> New Entry
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">User & Product</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Method Info</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {payments.map((item) => (
                                <tr key={item._id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-2xl ${item.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                                {item.type === 'income' ? <ArrowUpCircle size={20} /> : <ArrowDownCircle size={20} />}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-slate-900">{item.name || 'Unknown User'}</p>
                                                <p className="text-[11px] text-slate-500 font-bold">{item.productName}</p>
                                                <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{item.date}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="p-6">
                                        <div className="flex items-center gap-2">
                                            {item.method === 'bank' ? (
                                                <>
                                                    <Landmark size={14} className="text-blue-500" />
                                                    <span className="text-[11px] font-bold text-slate-600">Bank Transfer</span>
                                                </>
                                            ) : (
                                                <>
                                                    <CreditCard size={14} className="text-purple-500" />
                                                    <span className="text-[11px] font-bold text-slate-600">Card: **** {item.cardNumber?.slice(-4)}</span>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-tighter">ID: {item._id.slice(-8)}</p>
                                    </td>

                                    <td className="p-6 text-center">
                                        <select
                                            value={item.status}
                                            onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                            className={`text-[10px] font-black uppercase border-none rounded-xl px-3 py-2 cursor-pointer outline-none transition-all
                                                ${item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                                    item.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'}`}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>

                                    <td className="p-6 text-right">
                                        <div className="flex items-center justify-end gap-1 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-xl transition-all" title="View Details">
                                                <ExternalLink size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="p-2 cursor-pointer text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-all">
                                                <MoreVertical size={18} />
                                            </button>
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

export default ManageTransactions;