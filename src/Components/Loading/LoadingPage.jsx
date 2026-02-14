import React, { useEffect, useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';

const LoadingPage = () => {
    const [progress, setProgress] = useState(0);

    // Simulate a progress bar fill for better UX
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-[#FDFDFD] z-[9999] flex flex-col items-center justify-center">
            {/* Main Animated Logo/Icon Container */}
            <div className="relative flex items-center justify-center mb-8">
                {/* Outer Ripple Effect */}
                <div className="absolute w-24 h-24 bg-orange-100 rounded-[2.5rem] animate-ping opacity-20"></div>
                <div className="absolute w-32 h-32 bg-orange-50 rounded-[3rem] animate-pulse opacity-40"></div>

                {/* Main Orange Icon Box */}
                <div className="relative w-20 h-20 bg-orange-600 rounded-[2rem] shadow-2xl shadow-orange-600/40 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                    <Loader2 size={40} className="text-white animate-spin" />
                </div>
            </div>

            {/* Text and Branding */}
            <div className="text-center space-y-2 px-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Securing Connection
                </h2>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">
                    Please wait a moment
                </p>
            </div>

            {/* Progress Bar Container */}
            <div className="mt-12 w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-orange-600 transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Footer Tag */}
            <div className="absolute bottom-10 flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                <ShieldCheck size={14} className="text-emerald-500" />
                Enterprise Grade Security
            </div>
        </div>
    );
};

export default LoadingPage;