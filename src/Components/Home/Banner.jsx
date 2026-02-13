import React from 'react';
import { FaSearch, FaChartLine, FaWallet, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <section className="relative bg-white overflow-hidden py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* --- Left Content: Text & Search --- */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-primary font-bold text-sm uppercase tracking-wider border border-blue-100">
                            🛡️ Bank-Grade Security & Analytics 2026
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                            Take Control of <br />
                            <span className="text-primary">Financial Future</span> <br />
                            with FinTrack.
                        </h1>

                        <p className="text-slate-500 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Track every penny, set intelligent budgets, and watch your savings grow with our AI-driven financial management ecosystem.
                        </p>

                        {/* Search Bar for Transactions/Insights */}
                        <form className="flex items-center max-w-md mx-auto lg:mx-0 bg-white shadow-2xl shadow-blue-100 rounded-2xl p-2 border border-slate-100">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search transactions or categories..."
                                className="input border-none focus:outline-none w-full bg-transparent px-6 text-slate-600"
                            />
                            <button type="submit" className="btn btn-primary rounded-xl text-white px-8 border-none hover:scale-105 transition-all shadow-lg shadow-primary/20">
                                <FaSearch />
                            </button>
                        </form>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
                            <Link to="/register" className="flex items-center gap-2 font-bold text-slate-700 hover:text-primary transition-colors group">
                                <FaWallet className="text-primary group-hover:scale-110 transition-transform" /> Get Started Free
                            </Link>
                            <span className="text-slate-300 hidden sm:block">|</span>
                            <Link to="/dashboard" className="flex items-center gap-2 font-bold text-slate-700 hover:text-primary transition-colors group">
                                <FaChartLine className="text-primary group-hover:scale-110 transition-transform" /> View Analytics
                            </Link>
                        </div>
                    </div>

                    {/* --- Right Content: Visual & Floating Card --- */}
                    <div className="flex-1 relative">
                        {/* Soft background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop"
                                alt="Financial Wealth Growth"
                                className="rounded-[2.5rem] shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700 object-cover aspect-[4/3] w-full border-8 border-white"
                            />

                            {/* Floating Analytics Card */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-5 border border-slate-50 animate-bounce duration-[4000ms]">
                                <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600">
                                    <FaChartLine size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Savings Growth</p>
                                    <p className="text-xl font-black text-slate-900">+24.8% <span className="text-emerald-500 text-xs font-bold">↑</span></p>
                                </div>
                            </div>

                            {/* Small Security Badge */}
                            <div className="absolute -top-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-700">
                                <FaShieldAlt className="text-blue-400" />
                                <span className="text-xs font-bold">AES-256 Encrypted</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;