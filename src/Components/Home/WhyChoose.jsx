// 1. Change the import to use an alias (as LockIcon)
import { Bell, PieChart, Target, TrendingUp, Zap, Lock as LockIcon } from "lucide-react";

const WhyChoose = () => {
    return (
        <div>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">Why Choose FinTrack?</h2>
                        <p className="text-lg text-slate-500 font-medium">Comprehensive tools for financial success</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1: Expense Tracking */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-primary group">
                            <div className="card-body">
                                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <TrendingUp size={40} />
                                </div>
                                <h3 className="card-title text-xl text-slate-800 font-bold">Expense Tracking</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Record and categorize all income and expenses. Get real-time insights into your spending patterns.</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-primary badge-outline font-bold">Essential</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Smart Analytics */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-secondary group">
                            <div className="card-body">
                                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                                    <PieChart size={40} />
                                </div>
                                <h3 className="card-title text-xl text-slate-800 font-bold">Smart Analytics</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Visualize your financial data with interactive charts and comprehensive reports.</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-secondary badge-outline font-bold">Analytics</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Savings Goals */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-accent group">
                            <div className="card-body">
                                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                                    <Target size={40} />
                                </div>
                                <h3 className="card-title text-xl text-slate-800 font-bold">Savings Goals</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Set and track your savings targets. Monitor progress toward financial milestones.</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-accent badge-outline font-bold">Goals</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Smart Notifications */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-success group">
                            <div className="card-body">
                                <div className="text-success mb-4 group-hover:scale-110 transition-transform">
                                    <Bell size={40} />
                                </div>
                                <h3 className="card-title text-xl text-slate-800 font-bold">Smart Notifications</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Get reminders for bills, budget limits, and financial goals you've set.</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-success badge-outline font-bold">Premium</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: Security - FIXED HERE */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-error group">
                            <div className="card-body">
                                <div className="text-error mb-4 group-hover:scale-110 transition-transform">
                                    {/* 2. Use the alias here */}
                                    <LockIcon size={40} />
                                </div>
                                <h3 className="card-title text-xl text-slate-800 font-bold">Bank-Level Security</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Your financial data is encrypted and protected with industry-standard security measures.</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-error badge-outline font-bold">Secure</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 6: Financial Insights */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-warning group">
                            <div className="card-body">
                                <div className="text-warning mb-4 group-hover:scale-110 transition-transform">
                                    <Zap size={40} />
                                </div>
                                <h3 className="card-title text-xl text-slate-800 font-bold">AI Financial Insights</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Receive personalized recommendations based on your spending behavior and patterns.</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-warning badge-outline font-bold">Smart AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;