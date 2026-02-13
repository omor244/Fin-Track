import { Check, ArrowRight, Zap, Shield, Crown } from "lucide-react";
import { Link } from "react-router";

const plans = [
    {
        name: "Starter",
        price: "0",
        description: "Perfect for individuals tracking daily personal expenses.",
        features: [
            "Up to 50 transactions/month",
            "Basic expense categories",
            "Single device sync",
            "Weekly email reports",
            "Standard support"
        ],
        buttonText: "Get Started",
        icon: <Zap className="text-blue-500" />,
        featured: false
    },
    {
        name: "Professional",
        price: "9.99",
        description: "Best for power users who want deep financial insights.",
        features: [
            "Unlimited transactions",
            "Advanced AI categorization",
            "Multi-device sync",
            "Custom budget goals",
            "Priority chat support",
            "Export to CSV/PDF"
        ],
        buttonText: "Try Pro Free",
        icon: <Crown className="text-amber-500" />,
        featured: true
    },
    {
        name: "Business",
        price: "29.99",
        description: "Ideal for small businesses or shared family finances.",
        features: [
            "Multi-user collaboration",
            "Tax preparation tools",
            "Vendor management",
            "API access",
            "Dedicated account manager",
            "Bank-grade audit logs"
        ],
        buttonText: "Contact Sales",
        icon: <Shield className="text-emerald-500" />,
        featured: false
    }
];

const PricingPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Section */}
            <section className="pt-24 pb-16 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                        Ready to invest in <br />
                        <span className="text-primary">your future?</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium">
                        Choose a plan that fits your financial goals. No hidden fees, cancel anytime.
                    </p>
                </div>
            </section>

            {/* Pricing Cards Grid */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-[2.5rem] p-8 transition-all duration-300 ${plan.featured
                                    ? 'ring-4 ring-primary shadow-2xl scale-105 z-10'
                                    : 'border border-slate-200 shadow-sm hover:shadow-xl'
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-800">{plan.name}</h3>
                                <p className="text-slate-500 mt-2 text-sm font-medium leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-slate-900">${plan.price}</span>
                                    <span className="text-slate-400 font-bold">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                                        <Check size={18} className="text-primary flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/register"
                                className={`btn btn-block h-14 rounded-2xl font-bold normal-case border-none transition-all ${plan.featured
                                        ? 'btn-primary text-white shadow-lg shadow-primary/30 hover:scale-105'
                                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                                    }`}
                            >
                                {plan.buttonText} <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

     
            <section className="pb-20 text-center">
                <p className="text-slate-400 font-medium text-sm mb-4">
                    All plans include 256-bit SSL encryption and 99.9% uptime guarantee.
                </p>
                <div className="flex justify-center gap-8 opacity-50 grayscale">
                
                    <span className="font-bold text-slate-800">VISA</span>
                    <span className="font-bold text-slate-800">Mastercard</span>
                    <span className="font-bold text-slate-800">Stripe</span>
                    <span className="font-bold text-slate-800">PayPal</span>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;