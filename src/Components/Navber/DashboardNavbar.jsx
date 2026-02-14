import React, { useState } from 'react'; // Added useState
import { Link, useLocation } from 'react-router';
import {
    LayoutDashboard,
    Wallet,
    ArrowUpDown,
    Users,
    PieChart,
    Settings,
    UserCircle,
    LogOut,
    ChevronRight,
    X,
    BarChart3,
    Menu
} from 'lucide-react';
import useAuth from '../../Hooks/useAuth';

const DashboardNavbar = () => {
    // State is now managed locally inside the component
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const location = useLocation();
    const { logOut } = useAuth();
    const isActive = (path) => location.pathname === path;

    const menuGroups = [
        {
            title: "Main Menu",
            links: [
                { label: "Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
            ]
        },
        {
            title: "Finance Panel",
            links: [
                { label: "Manage Transactions", path: "/dashboard/transactions", icon: <ArrowUpDown size={20} /> },
                { label: "Budgets & Goals", path: "/dashboard/budgets", icon: <Wallet size={20} /> },
                { label: "Users Management", path: "/dashboard/users", icon: <Users size={20} /> },
                { label: "Expense Analytics", path: "/analytics", icon: <PieChart size={20} /> },
                { label: "System Settings", path: "/settings", icon: <Settings size={20} /> },
            ]
        }
    ];

    return (
        <>
            {/* --- MOBILE TOP HEADER --- */}
            <header className="lg:hidden flex items-center justify-between bg-[#111827] px-6 py-4 border-b border-slate-800 shadow-xl sticky top-0 z-[50]">
                <Link to={'/'} className="flex items-center gap-2">
                    <BarChart3 size={24} className="text-orange-600" />
                    <span className="text-xl font-black text-white uppercase tracking-tighter">
                        Fin<span className="text-orange-600">Track</span>
                    </span>
                </Link>

                <button
                    type="button"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="p-2.5 bg-slate-800 text-white rounded-xl hover:bg-orange-600 transition-all active:scale-95"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* --- MOBILE OVERLAY --- */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* --- SIDEBAR CONTAINER --- */}
            <aside className={`
                fixed inset-y-0 left-0 z-[70] w-72 bg-[#111827] text-slate-400 flex flex-col 
                transition-transform duration-300 ease-in-out border-r border-slate-800
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 lg:static lg:h-screen
            `}>
                {/* Note: Changed lg:sticky to lg:static. 
                   If this component is inside a flex row, lg:static ensures 
                   it pushes the content over instead of sitting on top of it.
                */}

                {/* Sidebar Logo (Desktop) */}
                <div className="p-8 hidden lg:flex items-center justify-between">
                    <Link to={'/'} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-orange-600/10 shadow-lg shadow-orange-600/20">
                            <BarChart3 size={28} className="text-orange-600" />
                        </div>
                        <span className="text-2xl font-black text-white tracking-tighter uppercase">
                            Fin<span className="text-orange-600">Track</span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Sidebar Navigation Title */}
                <div className="lg:hidden p-8 flex items-center justify-between">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Navigation</span>
                    <button onClick={() => setSidebarOpen(false)} className="text-slate-500 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-8 overflow-y-auto pt-4 lg:pt-0">
                    {menuGroups.map((group, idx) => (
                        <div key={idx}>
                            <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
                                {group.title}
                            </p>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive(link.path)
                                                ? 'bg-gradient-to-r from-orange-600/20 to-orange-600/5 text-orange-500 border-l-4 border-orange-600'
                                                : 'hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 font-bold text-sm">
                                                <span className={`${isActive(link.path) ? 'text-orange-600' : 'text-slate-500 group-hover:text-white'}`}>
                                                    {link.icon}
                                                </span>
                                                {link.label}
                                            </div>
                                            {isActive(link.path) && <ChevronRight size={16} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="p-4 mt-auto border-t border-slate-800/50 space-y-2">
                    <Link
                        to="/profile"
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all text-sm font-bold"
                    >
                        <UserCircle size={20} />
                        My Profile
                    </Link>
                    <button
                        onClick={logOut}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-orange-600 hover:bg-orange-600/10 transition-all text-sm font-black text-left"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default DashboardNavbar;