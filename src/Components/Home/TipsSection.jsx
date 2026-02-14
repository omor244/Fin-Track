import React from 'react';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const TipsSection = () => {
    const AxiosSecure = useAxiosSecure();

    const { data: tips = [] } = useQuery({
        queryKey: ['featured-tips'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/trips');
            return res.data;
        }
    });

    return (
        <section className="py-12 bg-[#FDFDFD]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-orange-100 rounded-lg">
                                <Sparkles size={16} className="text-orange-600" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-600">Expert Advice</span>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Featured Financial Tips</h2>
                    </div>
                   
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {tips.slice(0, 4).map((tip) => (
                        <div key={tip._id} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group cursor-pointer">
                            {/* Icon & Category */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200">
                                    <Lightbulb size={24} />
                                </div>
                                <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {tip.category}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-black text-slate-800 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                                {tip.title}
                            </h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-6 line-clamp-3">
                                {tip.description}
                            </p>

                            {/* Footer */}
                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-[11px] font-black text-slate-400 uppercase tracking-tighter">FinTrack Insights</span>
                                <div className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TipsSection;