import { FaEnvelope, FaLock, FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { useState } from "react";
import Socialbutton from "../Components/Socialbutton/Socialbutton";
import Logo from "./Logo";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";




const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const {signIn} = useAuth()


    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const res = await signIn(email, password);
            if (res?.user) {
                Swal.fire({
                    title: "Welcome Back!",
                    text: "Login successful. Redirecting to your dashboard...",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                    background: '#ffffff',
                    iconColor: '#3b82f6',
                });
                navigate(location?.state ? location?.state : '/');
            } else {
                Swal.fire("Access Denied", "Invalid email or password. Please try again.", "error");
            }
        } catch (error) {
            console.error("Login Error:", error);
            Swal.fire("Connection Error", "Unable to connect to security server.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 font-sans">
            <div className="max-w-5xl w-full bg-white rounded-[1.5rem] shadow-2xl shadow-slate-300 overflow-hidden flex flex-col md:flex-row border border-slate-100">

                {/* Left Side: Brand Identity */}
                <div className="md:w-5/12 bg-slate-900 relative p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                    {/* Decorative Blobs for Fintech Feel */}
                    <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <Logo></Logo>

                        <h2 className="text-3xl md:text-4xl font-extrabold mt-16 leading-tight">
                            Smart <span className="text-primary">Finance</span> <br />
                            Starts Here.
                        </h2>
                        <p className="text-slate-400 mt-6 max-w-xs text-sm leading-relaxed">
                            Access your personalized expense analytics, manage budgets, and achieve your savings goals with bank-grade security.
                        </p>

                        <div className="mt-8 flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-xs text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Real-time expense tracking
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> AI-powered financial insights
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-slate-800 mt-8 md:mt-0">
                        <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                            Back to home page
                        </Link>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-8 lg:p-16 bg-white">
                    <div className="max-w-sm mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Login</h3>
                            <p className="text-slate-500 font-medium mt-2">Welcome back to your financial hub.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Email */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold text-slate-700">Work Email</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                                        <FaEnvelope size={14} />
                                    </span>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        className="input input-bordered w-full pl-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl h-12"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="label py-0">
                                        <span className="label-text font-semibold text-slate-700">Password</span>
                                    </label>
                                    <Link to="/forgot-password" size={14} className="text-xs font-bold text-primary hover:text-blue-700 transition-colors">Forgot Password?</Link>
                                </div>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                                        <FaLock size={14} />
                                    </span>
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full pl-12 pr-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl h-12"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-full text-white rounded-xl shadow-lg shadow-primary/30 h-12 text-md border-none  transition-all group mt-2">
                                Secure Login
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="w-full mt-8">
                            <div className="relative flex py-3 items-center">
                                <div className="flex-grow border-t border-slate-200"></div>
                                <span className="flex-shrink mx-4 text-slate-400 text-xs uppercase tracking-widest font-semibold">Or continue with</span>
                                <div className="flex-grow border-t border-slate-200"></div>
                            </div>
                            <div className="mt-6">
                                <Socialbutton />
                            </div>
                        </div>

                        <p className="text-center mt-10 text-slate-500 text-sm">
                            New to FinTrack? <Link to="/register" state={location?.state} className="text-primary font-bold hover:text-blue-700 transition-colors">Create a free account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;