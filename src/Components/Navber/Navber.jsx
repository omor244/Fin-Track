import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, LogOut, User, Settings, BarChart3, ShieldCheck } from 'lucide-react';
import Logo from '../../Pages/Logo';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logOut } = useAuth();
    const {role} = useRole()
    // Fallbacks for local storage data
    const userRole = localStorage.getItem('userRole') || 'user';
    const userName = localStorage.getItem('userName') || user?.displayName || 'User';

    const handleLogout = () => {
        logOut();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/features', label: 'Features' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/security', label: 'Security' },
    ];

    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm border-b border-base-200 px-10 md:px-8 lg:px-48">
            {/* --- Navbar Start: Logo --- */}
            <div className="navbar-start">
                <Logo />
            </div>

            {/* --- Navbar Center: Desktop Links --- */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`rounded-xl px-4 py-2 transition-all font-medium ${isActive(link.path)
                                        ? 'bg-primary text-primary-content shadow-md'
                                        : 'text-base-content hover:bg-base-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- Navbar End: Profile/Auth --- */}
            <div className="navbar-end gap-2">
                {!user ? (
                    <>
                        {/* Desktop Guest Buttons */}
                        <div className="hidden sm:flex items-center gap-2">
                            <Link to="/login" className="btn btn-ghost btn-md normal-case font-bold">
                                Sign In
                            </Link>
                            <Link to="/register" className="btn btn-primary btn-md rounded-xl normal-case font-bold shadow-lg shadow-primary/20">
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Guest Menu */}
                        <div className="dropdown dropdown-end lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <Menu size={24} />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow-2xl bg-base-100 rounded-2xl w-64 mt-4 border border-base-200">
                                <li className="menu-title text-xs uppercase tracking-widest opacity-50">Navigation</li>
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className={isActive(link.path) ? 'active' : ''}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <div className="divider my-1"></div>
                                <li><Link to="/login" className="font-bold">Sign In</Link></li>
                                <li><Link to="/register" className="btn btn-primary btn-sm text-white mt-2">Get Started</Link></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-3">
                        {/* Desktop User Info */}
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-black text-base-content leading-none mb-1">{userName}</p>
                            <p className="text-[10px] uppercase tracking-tighter opacity-60 font-bold">{role}</p>
                        </div>

                        {/* User Dropdown (Works for both Desktop & Mobile) */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
                                <div className="w-10 rounded-full border-2 border-primary ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" />
                                    ) : (
                                        <div className="bg-primary text-primary-content h-full flex items-center justify-center font-bold">
                                            {userName.charAt(0)}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow-2xl bg-base-100 rounded-2xl w-64 mt-4 border border-base-200">
                                <li className="menu-title opacity-50 lg:hidden">Menu</li>
                                {navLinks.map((link) => (
                                    <li key={link.path} className="lg:hidden">
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                                <div className="divider my-1 lg:hidden"></div>

                                <li className="menu-title opacity-50">Account</li>
                                <li>
                                    <Link to={userRole === 'admin' ? '/admin/dashboard' : '/dashboard'} className="py-3">
                                        <BarChart3 size={18} className="text-primary" /> Dashboard
                                    </Link>
                                </li>
                              
                                <div className="divider my-1"></div>
                                <li>
                                    <button onClick={handleLogout} className="text-error font-bold py-3">
                                        <LogOut size={18} /> Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;