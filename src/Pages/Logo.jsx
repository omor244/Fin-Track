import { BarChart3 } from "lucide-react";
import { Link } from "react-router";


const Logo = () => {
    return (
        <div>
            <div className="navbar-start">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-xl font-bold text-primary hover:text-secondary transition-colors"
                >
                    <BarChart3 size={28} className="text-primary" />
                    <span className="hidden sm:inline">FinTrack</span>
                </Link>
                
            </div>
        </div>
    );
};

export default Logo;