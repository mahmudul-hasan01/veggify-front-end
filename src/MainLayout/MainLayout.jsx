import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="xl:max-w-screen-xl max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;