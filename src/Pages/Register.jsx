import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaImage, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Socialbutton from '../Components/Socialbutton/Socialbutton';
import Logo from './Logo';
import useAuth from '../Hooks/useAuth';
import { saveorupdateuser } from '../Hooks/Utility';
// import useAuth from '../../Hooks/useAuth';
// import { saveorupdateuser } from '../../Uitlity/Utility';


const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useAuth()

 

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({name,photo,email,password})

     
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'warning',
                title: 'Weak Password',
                text: 'Must include 1 uppercase, 1 lowercase, 1 special character and be at least 6 characters.',
                confirmButtonColor: '#3b82f6'
            });
            return;
        }

        const newUser = { name, email };

        try {
            // 1. Create User in Firebase
            const result = await createUser(email, password);

            // 2. Update Profile (Name & Photo)
            await updateUserProfile(name, photo);

            // 3. Save to MongoDB
            const res = await saveorupdateuser({ ...newUser, image: photo,  password: password });

            if (res.insertedId || res.modifiedCount > 0 || res.upsertedId) {
                Swal.fire({
                    title: "Account Created!",
                    text: "Welcome to the future of your finances.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate(location?.state ? location?.state : '/');
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 font-sans">
            <div className="max-w-6xl w-full bg-white rounded-[1.5rem] shadow-2xl shadow-slate-300 overflow-hidden flex flex-col md:flex-row-reverse border border-slate-100">

                {/* Left Side: Impact Section */}
                <div className="md:w-5/12 bg-slate-900 relative p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                       <Logo></Logo>

                        <h2 className="text-3xl md:text-4xl font-extrabold mt-16 leading-tight">
                            Take Control of <br />
                            <span className="text-primary">Your Wealth.</span>
                        </h2>
                        <p className="text-slate-400 mt-6 max-w-xs text-sm leading-relaxed">
                            Join thousands of smart investors managing their daily expenses and long-term savings in one secure place.
                        </p>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-slate-800 mt-8 md:mt-0">
                        <div className="flex -space-x-3 mb-4">
                            {[1, 2, 3, 4].map((i) => (
                                <img key={i} className="w-9 h-9 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="user" />
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 font-medium">Trusted by 10,000+ active users</p>
                    </div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="flex-1 p-8 lg:p-16 bg-white">
                    <div className="max-w-md mx-auto">
                        <div className="mb-8 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-primary tracking-tight">Create Account</h3>
                            <p className="text-primary font-medium mt-2">Set up your financial profile in minutes.</p>
                        </div>

                        <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="form-control md:col-span-2">
                                <label className="label py-1"><span className="label-text font-semibold text-slate-700">Full Name</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaUser size={14} /></span>
                                    <input name="name" type="text" placeholder="John Doe" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-xl border-slate-200 h-12" required />
                                </div>
                            </div>

                            {/* Photo URL */}
                            <div className="form-control md:col-span-2">
                                <label className="label py-1"><span className="label-text font-semibold text-slate-700">Profile Image URL</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaImage size={14} /></span>
                                    <input name="photo" type="text" placeholder="https://image-link.com" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-xl border-slate-200 h-12" required />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="form-control md:col-span-2">
                                <label className="label py-1"><span className="label-text font-semibold text-slate-700">Email Address</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaEnvelope size={14} /></span>
                                    <input name="email" type="email" placeholder="name@example.com" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-xl border-slate-200 h-12" required />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="form-control md:col-span-2">
                                <label className="label py-1"><span className="label-text font-semibold text-slate-700">Password</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaLock size={14} /></span>
                                    <input name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" className="input input-bordered w-full pl-12 pr-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-xl border-slate-200 h-12" required />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600">
                                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="md:col-span-2 flex items-center gap-2 py-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-md" required />
                                <span className="text-xs text-slate-500 font-medium">I agree to the <span className="text-primary font-bold cursor-pointer hover:underline">Financial Service Terms</span></span>
                            </div>

                            <button type="submit" className="md:col-span-2 btn btn-primary w-full text-white rounded-xl shadow-lg shadow-primary/20 h-12 text-md border-none  transition-all group">
                                Get Started
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="w-full mt-8">
                            <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-slate-200"></div>
                                <span className="flex-shrink mx-4 text-slate-400 text-[10px] uppercase tracking-widest font-bold">Or register with</span>
                                <div className="flex-grow border-t border-slate-200"></div>
                            </div>
                            <div className="mt-4">
                                <Socialbutton />
                            </div>
                        </div>

                        <p className="text-center mt-8 text-slate-500 text-sm font-medium">
                            Already tracking? <Link to="/login" state={location?.state} className="text-primary font-bold hover:text-blue-700 transition-colors">Login Here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;