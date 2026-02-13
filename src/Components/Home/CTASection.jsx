import { Link } from "react-router";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            {/* The Container - Using a deep Slate instead of a bright gradient */}
            <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl">

                {/* Subtle Background Art */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative px-8 py-16 md:py-24 text-center">
                    <div className="max-w-3xl mx-auto">

                        {/* Small Badge */}
                        <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-primary-content px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                            <Sparkles size={14} className="text-primary" />
                            Take the first step
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            Ready to Transform <br />
                            <span className="text-primary">Your Finances?</span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                            Join over <span className="text-white">10,000+</span> users who are mastering their spending habits and growing their wealth with FinTrack.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/register"
                                className="btn btn-primary btn-lg h-16 px-10 rounded-2xl text-white font-extrabold normal-case shadow-xl shadow-primary/20 hover:scale-105 transition-all border-none"
                            >
                                Start Free Today <ArrowRight size={20} className="ml-2" />
                            </Link>

                            <Link
                                to="/login"
                                className="btn btn-ghost btn-lg h-16 px-10 rounded-2xl text-slate-300 font-bold normal-case hover:bg-slate-800 hover:text-white transition-all"
                            >
                                Sign in to account
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
                            <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                                <ShieldCheck size={18} className="text-primary" />
                                Bank-level Security
                            </div>
                            <div className="text-slate-300 text-sm font-semibold">
                                • Free forever plan available
                            </div>
                            <div className="text-slate-300 text-sm font-semibold">
                                • No credit card required
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;