import { Check, X, Crown, Building2, Zap } from "lucide-react";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Pricing = () => {

    const {user} = useAuth()
    return (
        <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* --- Header --- */}
                <div className="text-center mb-20">
                    <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        Pricing Plans
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
                        Invest in Your <span className="text-primary">Financial Clarity</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
                        No hidden fees. No surprises. Just the tools you need to master your money.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* --- Basic Plan --- */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-8">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Starter</h3>
                            <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-black text-slate-900">$0</span>
                                <span className="text-slate-400 font-medium">/forever</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                <Check size={18} className="text-emerald-500" /> Expense tracking
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                <Check size={18} className="text-emerald-500" /> Basic charts
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm font-medium line-through">
                                <X size={18} className="text-slate-300" /> Advanced AI Insights
                            </li>
                        </ul>

                        {
                            user ? <>  <Link  className="btn btn-outline border-slate-200 hover:bg-slate-900 hover:border-slate-900 hover:text-white text-slate-700 w-full rounded-2xl h-14 normal-case font-bold">
                               Already paid
                            </Link></> : <>  <Link to="/register" className="btn btn-outline border-slate-200 hover:bg-slate-900 hover:border-slate-900 hover:text-white text-slate-700 w-full rounded-2xl h-14 normal-case font-bold">
                                Get Started
                            </Link></>
                       }
                    </div>

                    {/* --- Pro Plan (Featured) --- */}
                    <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative md:scale-110 border-4 border-primary/20">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                                <Crown size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Professional</h3>
                            <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-black text-white">$4.99</span>
                                <span className="text-slate-400 font-medium">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                <Check size={18} className="text-primary" /> All Starter features
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                <Check size={18} className="text-primary" /> Savings & Budget goals
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                <Check size={18} className="text-primary" /> Smart Bill reminders
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                <Check size={18} className="text-primary" /> Priority Email support
                            </li>
                        </ul>

                        <Link to="/payment" className="btn btn-primary w-full rounded-2xl h-14 normal-case font-extrabold text-white shadow-lg shadow-primary/30 border-none">
                            Go Pro Now
                        </Link>
                    </div>

                    {/* --- Enterprise Plan --- */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-8">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Business</h3>
                            <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-black text-slate-900">Custom</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                <Check size={18} className="text-emerald-500" /> Multi-user access
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                <Check size={18} className="text-emerald-500" /> Advanced API Access
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                <Check size={18} className="text-emerald-500" /> 24/7 Dedicated Manager
                            </li>
                        </ul>

                        <Link to={'/payment'} className="btn btn-outline border-slate-200 hover:bg-slate-900 hover:border-slate-900 hover:text-white text-slate-700 w-full rounded-2xl h-14 normal-case font-bold">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
