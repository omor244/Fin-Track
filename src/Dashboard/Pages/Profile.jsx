import React from 'react';
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import {
    User,
    Mail,
    ShieldCheck,
    Calendar,
    Edit3,
    Camera,
    MapPin,
    Verified
} from 'lucide-react';

const Profile = () => {
    const { user } = useAuth();
    const { role } = useRole();

    return (
        <div className="p-6 md:p-10 bg-[#F8FAFC] min-h-screen">
            {/* Header / Title */}
            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">My Account</h1>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mt-1">
                    Manage your identity and security settings
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Avatar & Role Card */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-4 ring-slate-50 shadow-inner">
                                <img
                                    src={user?.photoURL || "https://i.ibb.co/v3BkV9S/user-placeholder.png"}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2.5 rounded-xl shadow-lg hover:bg-blue-600 transition-all">
                                <Camera size={18} />
                            </button>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center justify-center gap-2">
                                {user?.displayName} <Verified size={18} className="text-blue-500" />
                            </h2>
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">
                                {user?.email}
                            </p>
                        </div>

                        <div className="mt-8 w-full border-t border-slate-50 pt-8">
                            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${role === 'admin' ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                <ShieldCheck size={14} />
                                {role} Role Locked
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Security Status</h4>
                            <p className="text-lg font-bold italic mb-4">Account Secure</p>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[95%] bg-emerald-500 shadow-[0_0_15px_#10b981]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Personal Details & Settings */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                <User size={18} className="text-slate-400" /> Personal Identity
                            </h3>
                            <button className="flex items-center gap-2 bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-100 transition-all">
                                <Edit3 size={14} /> Edit Profile
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InfoBox
                                label="Full Name"
                                value={user?.displayName || "N/A"}
                                icon={<User size={18} />}
                            />
                            <InfoBox
                                label="Email Address"
                                value={user?.email || "N/A"}
                                icon={<Mail size={18} />}
                            />
                            <InfoBox
                                label="Current Location"
                                value="Bangladesh"
                                icon={<MapPin size={18} />}
                            />
                            <InfoBox
                                label="Account Created"
                                value={user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "Feb 14, 2026"}
                                icon={<Calendar size={18} />}
                            />
                        </div>
                    </div>

                    {/* Quick Settings Section */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Account Preferences</h3>
                        <div className="space-y-4">
                            <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all">
                                <span className="text-xs font-black text-slate-600 uppercase">Two-Factor Authentication</span>
                                <input type="checkbox" defaultChecked className="w-5 h-5 accent-slate-900" />
                            </label>
                            <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all">
                                <span className="text-xs font-black text-slate-600 uppercase">Email Notifications</span>
                                <input type="checkbox" className="w-5 h-5 accent-slate-900" />
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Sub-component for clean data display
const InfoBox = ({ label, value, icon }) => (
    <div className="space-y-2">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</p>
        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
            <div className="text-slate-400">{icon}</div>
            <span className="text-sm font-bold text-slate-700">{value}</span>
        </div>
    </div>
);

export default Profile;