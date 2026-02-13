import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, LogOut, User, Settings, BarChart3 } from 'lucide-react';
import Logo from '../../Pages/Logo';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logOut } = useAuth()
    
    console.log(user)


   
    const userRole = localStorage.getItem('userRole');
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        logOut()
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/features', label: 'Features' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 px-32 shadow-lg">
      
            <div className="navbar-start">
             <Logo></Logo>
            </div>

            {/* Middle Section - Desktop Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`rounded-lg transition-all ${isActive(link.path)
                                        ? 'bg-primary text-primary-content font-bold'
                                        : 'text-base-content hover:bg-base-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Section */}
            <div className="navbar-end flex items-center gap-2 lg:gap-4">
             

               
                {!user ? (
                    <>
                        {/* Desktop Buttons */}
                        <div className="hidden sm:flex gap-2">
                            <Link
                                to="/login"
                                className="btn btn-ghost btn-sm lg:btn-md hover:bg-primary hover:text-primary-content transition-all"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className="btn btn-primary btn-sm lg:btn-md hover:scale-105 transition-transform"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="dropdown dropdown-end lg:hidden">
                            <button className="btn btn-ghost btn-circle">
                                <Menu size={24} />
                            </button>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={isActive(link.path) ? 'active' : ''}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="divider my-2"></li>
                                <li>
                                    <Link to="/login" className="text-primary font-semibold">
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="bg-primary text-primary-content font-semibold">
                                        Get Started
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Desktop User Menu */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="text-sm">
                                <p className="font-semibold text-base-content">Hello, {userName}</p>
                                <p className="text-xs text-base-content/60 capitalize">{userRole}</p>
                            </div>

                            <div className="dropdown dropdown-end">
                                <button className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                                        <User size={20} />
                                    </div>
                                </button>
                                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="menu-title">
                                        <span>{userRole === 'admin' ? '👨‍💼 Admin' : '👤 User'}</span>
                                    </li>
                                    <li>
                                        <Link
                                            to={userRole === 'admin' ? '/admin/dashboard' : '/dashboard'}
                                            className="flex items-center gap-2"
                                        >
                                            <BarChart3 size={16} /> Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profile" className="flex items-center gap-2">
                                            <User size={16} /> Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/settings" className="flex items-center gap-2">
                                            <Settings size={16} /> Settings
                                        </Link>
                                    </li>
                                    <li className="divider my-2"></li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="text-error flex items-center gap-2"
                                        >
                                            <LogOut size={16} /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile User Menu */}
                        <div className="lg:hidden dropdown dropdown-end">
                            <button className="btn btn-ghost btn-circle">
                                <Menu size={24} />
                            </button>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="menu-title">
                                    <span>{userName}</span>
                                </li>
                                <li>
                                    <Link to={userRole === 'admin' ? '/admin/dashboard' : '/dashboard'}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/settings">Settings</Link>
                                </li>
                                <li className="divider my-2"></li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="text-error"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;