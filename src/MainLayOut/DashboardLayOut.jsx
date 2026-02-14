import { Outlet } from "react-router";
import DashboardNavbar from "../Components/Navber/DashboardNavbar";


const DashboardLayOut = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-16">
            <aside className="col-span-4 sticky top-0 z-[60]"><DashboardNavbar></DashboardNavbar></aside>
            <main className="col-span-12"><Outlet></Outlet></main>

        </div>
    );
};

export default DashboardLayOut;