import { ShieldCheck, Users, Globe, Landmark, TrendingUp } from "lucide-react";

const stats = [
    { label: "Active Users", value: "10K+", icon: <Users size={24} /> },
    { label: "Transactions Tracked", value: "$2M+", icon: <TrendingUp size={24} /> },
    { label: "Countries Supported", value: "50+", icon: <Globe size={24} /> },
    { label: "Partner Banks", value: "100+", icon: <Landmark size={24} /> },
];

const MetricsSection = () => {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold uppercase tracking-widest">
                            <ShieldCheck size={18} /> Trusted by Thousands
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">
                            We take your <span className="text-primary">Financial Security</span> seriously.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">
                            FinTrack uses the same encryption standards as global banks. Your data is encrypted at rest and in transit. We never sell your data to third parties.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                                    <ShieldCheck size={20} />
                                </div>
                                <span className="font-bold">SOC2 Compliant</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center">
                                    <ShieldCheck size={20} />
                                </div>
                                <span className="font-bold">256-bit Encryption</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-black mb-1">{stat.value}</div>
                                <div className="text-slate-500 font-bold text-sm uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MetricsSection;