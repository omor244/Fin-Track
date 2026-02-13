import {
    TrendingUp,
    ShieldCheck,
    PieChart,
    Bell,
    Zap,
    Globe
} from "lucide-react";

const FeatureSection = () => {
    return (
        <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
                            The FinTrack Advantage
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                            Everything you need to <br />
                            <span className="text-primary">master your money.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg font-medium max-w-sm">
                        Powerful tools designed to give you total control over every dollar you earn and spend.
                    </p>
                </div>

                {/* --- Bento Grid Layout --- */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                    {/* Large Feature 1: Analytics */}
                    <div className="md:col-span-4 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:rotate-6 transition-transform">
                                <PieChart size={30} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-800 mb-4">Visual Analytics</h3>
                            <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                                Deep dive into your spending habits with interactive charts. See exactly where your money goes every month.
                            </p>
                        </div>
                        {/* Decorative "Chart" Element */}
                        <div className="absolute bottom-0 right-0 w-64 h-40 bg-white rounded-tl-3xl border-t border-l border-slate-200 shadow-2xl flex items-center justify-center p-6 translate-y-6 group-hover:translate-y-2 transition-transform duration-500">
                            <div className="w-full space-y-3">
                                <div className="h-4 bg-primary/20 rounded-full w-full"></div>
                                <div className="h-4 bg-primary/40 rounded-full w-[80%]"></div>
                                <div className="h-4 bg-primary rounded-full w-[60%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Small Feature 1: Security */}
                    <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white hover:shadow-2xl transition-all duration-500 group">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={30} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Bank-Grade Security</h3>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">
                            Your data is encrypted with AES-256. We prioritize your privacy above all else.
                        </p>
                    </div>

                    {/* Small Feature 2: Real-time */}
                    <div className="md:col-span-2 bg-blue-50 rounded-[2.5rem] p-10 border border-blue-100 hover:shadow-2xl transition-all duration-500 group">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:-translate-y-2 transition-transform">
                            <Zap size={30} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Real-time Sync</h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">
                            Instantly sync your data across mobile, tablet, and desktop devices.
                        </p>
                    </div>

                    {/* Large Feature 2: Smart Notifications */}
                    <div className="md:col-span-4 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-500 mb-6">
                                    <Bell size={30} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-800 mb-4">Smart Reminders</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Never miss a bill payment again. Get intelligent notifications for upcoming dues and budget limits.
                                </p>
                            </div>
                            {/* Notification UI Preview */}
                            <div className="w-full md:w-64 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 group-hover:scale-105 transition-transform">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                        <Bell size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-2 bg-slate-200 rounded-full w-20 mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;