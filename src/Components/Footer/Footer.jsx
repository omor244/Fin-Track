
import { Link } from 'react-router';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from '../../Pages/Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 text-base-content">
         

            {/* Main Footer Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        {/* Column 1: Brand */}
                        <div>
                            <div className="flex items-center  gap-2 mb-4">
                               <Logo></Logo>
                            </div>
                            <p className="text-base-content/70 mb-6">
                                Smart financial management platform helping you achieve your financial goals with data-driven insights.
                            </p>
                            <div className="flex gap-3">
                                <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Product */}
                        <div>
                            <h4 className="font-bold text-lg text-base-content mb-4 pb-2 border-b-2 border-primary">
                                Product
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link  className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                                        <span>→</span> Features
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                                        <span>→</span> Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link  className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                                        <span>→</span> Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                                        <span>→</span> Security
                                    </Link>
                                </li>
                                <li>
                                    <Link  className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                                        <span>→</span> Roadmap
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div>
                            <h4 className="font-bold text-lg text-base-content mb-4 pb-2 border-b-2 border-secondary">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/about" className="text-base-content/70 hover:text-secondary transition-colors flex items-center gap-2">
                                        <span>→</span> About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="text-base-content/70 hover:text-secondary transition-colors flex items-center gap-2">
                                        <span>→</span> Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers" className="text-base-content/70 hover:text-secondary transition-colors flex items-center gap-2">
                                        <span>→</span> Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/press" className="text-base-content/70 hover:text-secondary transition-colors flex items-center gap-2">
                                        <span>→</span> Press
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-base-content/70 hover:text-secondary transition-colors flex items-center gap-2">
                                        <span>→</span> Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Support */}
                        <div>
                            <h4 className="font-bold text-lg text-base-content mb-4 pb-2 border-b-2 border-accent">
                                Support
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/help" className="text-base-content/70 hover:text-accent transition-colors flex items-center gap-2">
                                        <span>→</span> Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq" className="text-base-content/70 hover:text-accent transition-colors flex items-center gap-2">
                                        <span>→</span> FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/documentation" className="text-base-content/70 hover:text-accent transition-colors flex items-center gap-2">
                                        <span>→</span> Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/community" className="text-base-content/70 hover:text-accent transition-colors flex items-center gap-2">
                                        <span>→</span> Community
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/status" className="text-base-content/70 hover:text-accent transition-colors flex items-center gap-2">
                                        <span>→</span> Status Page
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="divider my-8"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 rounded-lg p-3 flex items-center justify-center">
                                <Mail className="text-primary" size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-base-content mb-1">Email</h5>
                                <a href="mailto:support@fintrack.com" className="text-base-content/70 hover:text-primary transition-colors">
                                    support@fintrack.com
                                </a>
                                <p className="text-xs text-base-content/60 mt-1">We'll reply within 24 hours</p>
                            </div>
                        </div>

                    
                        <div className="flex items-start gap-4">
                            <div className="bg-secondary/10 rounded-lg p-3 flex items-center justify-center">
                                <Phone className="text-secondary" size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-base-content mb-1">Phone</h5>
                                <a href="tel:+8801700000000" className="text-base-content/70 hover:text-secondary transition-colors">
                                    +880 1700 000 000
                                </a>
                                <p className="text-xs text-base-content/60 mt-1">Monday - Friday, 9am - 6pm</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/10 rounded-lg p-3 flex items-center justify-center">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-base-content mb-1">Address</h5>
                                <p className="text-base-content/70">
                                    Dhaka, Bangladesh
                                </p>
                                <p className="text-xs text-base-content/60 mt-1">Office hours: 10am - 5pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="divider my-8"></div>

                  

                    {/* Back to Top Button */}
                    <div className="text-center mt-8">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="btn btn-ghost btn-sm gap-2 hover:bg-primary hover:text-primary-content transition-all"
                        >
                            <span>↑</span> Back to Top
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-base-300 py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-base-content/60">
                <div className="max-w-6xl mx-auto">
                    <p>Made with ❤️ by FinTrack | Empowering your financial journey</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;