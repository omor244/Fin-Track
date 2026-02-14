import React, { useState } from 'react';
import {
    Plus, Sparkles, Trash2, Edit3, Check, X,
    Lightbulb, Globe, Lock, Eye
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';
import Swal from 'sweetalert2';

const FinancialTipsManagement = () => {
    const AxiosSecure = useAxiosSecure();
    const [editingId, setEditingId] = useState(null);

    // 1. Fetch Tips
    const { data: tips = [], isLoading, refetch } = useQuery({
        queryKey: ['admin-tips'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/trips');
            return res.data;
        }
    });

    // 2. Add New Tip
    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
 
        console.log({ title, description, category })
        const tripsdata = {
            title: title,
            description: description,
            category: category,
            postedBy: "Admin",
            data: new Date().toLocaleDateString()
        }
        
        try {
            const res = await AxiosSecure.post('/trips', tripsdata);
            console.log(res.data)
            
            if (res.data.insertedId) {
                form.reset();
                refetch();
                Swal.fire({ title: 'Tip Published!', icon: 'success', timer: 1500, showConfirmButton: false });
            }
        } catch (error) {
            Swal.fire('Error', 'Failed to save tip', 'error');
        }
    };

    // 3. Delete Tip
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Remove Tip?',
            text: "Users will no longer see this advice.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'Yes, Remove'
        });

        if (result.isConfirmed) {
            await AxiosSecure.delete(`/financial-tips/${id}`);
            refetch();
        }
    };

    if (isLoading) return <LoadingPage />;

    return (
        <div className="p-6 md:p-10 space-y-10 bg-[#FDFDFD] min-h-screen font-sans">

            {/* --- ADD NEW TIP SECTION --- */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                    <Sparkles size={20} className="text-orange-500" /> Create Featured Tip
                </h2>
                <form onSubmit={handleAddSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Tip Title</label>
                            <input name="title" required className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 font-bold text-slate-700 outline-none transition-all" placeholder="e.g. Save 20% on Groceries" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Target Category</label>
                            <select name="category" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 font-bold text-slate-700 outline-none transition-all cursor-pointer appearance-none">
                                <option value="Saving">SAVING STRATEGY</option>
                                <option value="Investment">INVESTMENT</option>
                                <option value="Budgeting">BUDGETING</option>
                                <option value="Tax">TAX PLANNING</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Full Advice Description</label>
                        <textarea name="description" rows="3" required className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 font-bold text-slate-700 outline-none transition-all resize-none" placeholder="Explain the financial tip in detail..."></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-slate-900 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-xl shadow-slate-200 flex items-center gap-2">
                            <Plus size={18} /> Publish Tip
                        </button>
                    </div>
                </form>
            </div>

            {/* --- TIPS LIST --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tips.map((tip) => (
                    <div key={tip._id} className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                        {/* Status Badge */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-[9px] font-black uppercase tracking-tighter flex items-center gap-1">
                                <Lightbulb size={12} /> {tip.category}
                            </div>
                            <div className="flex gap-1">
                                <button onClick={() => handleDelete(tip._id)} className="p-2 text-slate-300 hover:text-rose-500 transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <h3 className="text-lg font-black text-slate-800 leading-tight mb-2 uppercase tracking-tight">
                            {tip.title}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-4">
                            {tip.description}
                        </p>

                        <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                                    AD
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">By Admin</span>
                            </div>
                            <button className="text-slate-300 group-hover:text-orange-500 transition-colors">
                                <Eye size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinancialTipsManagement;