import { ShieldCheck, Lock, EyeOff, Server, Key, } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";

const securityFeatures = [
    {
        title: "Bank-Grade Encryption",
        description: "All your financial data is encrypted using AES-256 bit encryption, the same standard used by global banking institutions.",
        icon: <Lock className="text-primary" />,
    },
    {
        title: "Data Privacy First",
        description: "We never sell your personal or financial data to third parties. Your information belongs to you, and you alone.",
        icon: <EyeOff className="text-emerald-500" />,
    },
    {
        title: "Secure Cloud Storage",
        description: "Our servers are hosted in SOC2 Type II compliant data centers with 24/7 monitoring and physical security.",
        icon: <Server className="text-blue-500" />,
    },
    {
        title: "Two-Factor Auth",
        description: "Add an extra layer of protection to your account with 2FA, ensuring only you can access your financial records.",
        icon: <Key className="text-amber-500" />,
    }
];

const SecurityPage = () => {

    const {user} = useAuth()
    return (
        <div className="bg-white min-h-screen">
            {/* --- Hero Section --- */}
            <section className="pt-24 pb-16 px-4 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-6">
                        <ShieldCheck size={16} /> Your Security is our priority
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                        Safe. Secure. <br />
                        <span className="text-primary">Private.</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                        At FinTrack, we employ world-class security measures to ensure your
                        financial journey is protected from every angle.
                    </p>
                </div>
            </section>

            {/* --- Detailed Security Grid --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {securityFeatures.map((feature, index) => (
                            <div key={index} className="flex gap-6 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center">
                                    {React.cloneElement(feature.icon, { size: 32 })}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Compliance Banner --- */}
            <section className="py-16 bg-slate-900 text-white mx-4 md:mx-12 rounded-[3rem] mb-20">
                <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-3xl font-black mb-4">Committed to Compliance</h2>
                        <p className="text-slate-400 font-medium">
                            We stay updated with the latest financial regulations and security
                            protocols to keep your mind at ease.
                        </p>
                    </div>
                    <div className="flex gap-8 opacity-70 grayscale contrast-125">
                        <div className="text-center">
                            <div className="text-2xl font-black uppercase">GDPR</div>
                            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Compliant</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black uppercase">SOC2</div>
                            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Certified</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black uppercase">SSL</div>
                            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Secure</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Call to Action --- */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-black text-slate-800 mb-8">Ready to start securely?</h2>
                {user ? <> <Link  className="btn btn-primary btn-lg rounded-2xl px-12 text-white font-bold border-none shadow-xl shadow-primary/20">
                    Already have an Account
                </Link></> : <>  <Link to="/register" className="btn btn-primary btn-lg rounded-2xl px-12 text-white font-bold border-none shadow-xl shadow-primary/20">
                    Create Secure Account
                </Link></>}
               
            </section>
        </div>
    );
};

export default SecurityPage;