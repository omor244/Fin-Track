import { Link } from "react-router";
import { FaUserPlus, FaChartPie, FaRocket } from "react-icons/fa";

const steps = [
    {
        id: 1,
        title: "Create Account",
        description: "Sign up in seconds and securely connect your profile to start your financial journey.",
        icon: <FaUserPlus />,
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
    },
    {
        id: 2,
        title: "Log Transactions",
        description: "Add your daily expenses and income. Our smart AI categorizes them automatically.",
        icon: <FaChartPie />,
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-600",
    },
    {
        id: 3,
        title: "Grow Your Wealth",
        description: "Analyze your spending habits and hit your savings goals with data-driven insights.",
        icon: <FaRocket />,
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration - Soft Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* --- Section Title --- */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase bg-blue-50 px-4 py-2 rounded-lg">
                        Step-by-Step Guide
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900">
                        How <span className="text-primary">FinTrack</span> Works
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        We’ve simplified personal finance. Master your money in three <br className="hidden md:block" />
                        straightforward steps and reach your goals faster.
                    </p>
                </div>

                {/* --- Steps Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

                    {/* Decorative Dashed Line (Visible on Desktop) */}
                    <div className="hidden lg:block absolute top-[35%] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 -z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">

                            {/* Icon Circle with Animation */}
                            <div className={`w-32 h-32 ${step.bgColor} ${step.textColor} rounded-[2.5rem] flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500 border-4 border-white relative`}>
                                {step.icon}

                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 bg-slate-900 text-white w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black border-4 border-white shadow-xl group-hover:bg-primary transition-colors">
                                    0{step.id}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed px-4 font-medium text-sm md:text-base">
                                {step.description}
                            </p>

                            {/* Decorative Glow behind each card */}
                            <div className={`absolute -inset-4 ${step.bgColor} opacity-0 group-hover:opacity-30 blur-3xl rounded-full transition-opacity -z-10`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Link to="/register" className="btn btn-primary btn-lg rounded-2xl text-white px-12 shadow-xl shadow-primary/20 hover:scale-105 transition-all border-none font-bold">
                        Start Your Free Trial
                    </Link>
                    <p className="text-slate-400 text-xs mt-4 font-semibold">No credit card required • Secure AES-256 Encryption</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;