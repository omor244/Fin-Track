import React, {  useState } from 'react';
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
    Menu,
    ListTree, 
    ActivityIcon,
    RotateCw
} from 'lucide-react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';

const DashboardNavbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { role, isLoading } = useRole(); 
    const location = useLocation();
    const { logOut } = useAuth();

    const isActive = (path) => location.pathname === path;

   
    const getNavLinks = () => {
        const commonLinks = [
            { label: "Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
        ];

        const adminLinks = [
            { label: "Users Management", path: "/dashboard/users", icon: <Users size={20} /> },
            { label: "Category Management", path: "/dashboard/categories", icon: <ListTree size={20} /> }, // 
            { label: "System Reports", path: "/dashboard/reports", icon: <ActivityIcon size={20} /> }, // Admin 
            { label: "Financial Tips Management", path: "/dashboard/Financial-Tips", icon: <RotateCw size={20} />  },  
        ];

        const userLinks = [
            { label: "My Transactions", path: "/dashboard/transactions", icon: <ArrowUpDown size={20} /> }, 
            { label: "Budgets & Goals", path: "/dashboard/budgets", icon: <Wallet size={20} /> }, 
            { label: "Expense Analytics", path: "/dashboard/analytics", icon: <PieChart size={20} /> },
        ];

        return {
            main: commonLinks,
            finance: role === 'admin' ? adminLinks : userLinks
        };
    };

    const nav = getNavLinks();

    const menuGroups = [
        {
            title: "Main Menu",
            links: nav.main
        },
        {
            title: role === 'Admin' ? "Admin Control" : "Finance Panel",
            links: nav.finance
        }
    ];

    return (
        <>
            {/* --- MOBILE TOP HEADER --- */}
            <header className="lg:hidden h-16 flex items-center justify-between bg-[#111827] px-6 border-b border-slate-800 shadow-xl">
                <Link to={'/'} className="flex items-center cursor-pointer gap-2">
                    <BarChart3 size={24} className="text-orange-600" />
                    <span className="text-xl font-black text-white uppercase tracking-tighter">
                        Fin<span className="text-orange-600">Track</span>
                    </span>
                </Link>

                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="p-2 bg-slate-800 text-white rounded-xl"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar Aside */}
            <aside className={`
                fixed inset-y-0 h-full left-0 z-[70] w-72 bg-[#111827] text-slate-400 flex flex-col 
                transition-transform duration-300 border-r border-slate-800
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static
            `}>
                {/* Logo Section */}
                <Link to={'/'} className="p-8 hidden lg:flex cursor-pointer items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-600/10 text-orange-600">
                        <BarChart3 size={28} />
                    </div>
                    <span className="text-2xl font-black text-white tracking-tighter uppercase">
                        Fin<span className="text-orange-600">Track</span>
                    </span>
                </Link>

                {/* Dynamic Menu Rendering */}
                <nav className="flex-1 px-4 space-y-8 overflow-y-auto pt-4">
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
                                            className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${isActive(link.path)
                                                    ? 'bg-orange-600/20 text-orange-500 border-l-4 border-orange-600'
                                                    : 'hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 font-bold text-sm">
                                                <span className={isActive(link.path) ? 'text-orange-600' : 'text-slate-500 group-hover:text-white'}>
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

                {/* Footer Section */}
                <div className="p-4 border-t border-slate-800/50 space-y-2">
                    <Link to="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-sm font-bold">
                        <UserCircle size={20} /> My Profile
                    </Link>
                    <button onClick={logOut} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-orange-600 hover:bg-orange-600/10 text-sm font-black text-left">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default DashboardNavbar;