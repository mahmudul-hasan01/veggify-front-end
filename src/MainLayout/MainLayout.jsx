import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import './layOut.css'

const MainLayout = () => {
    return (
        <div className="xl:max-w-screen-xl max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;