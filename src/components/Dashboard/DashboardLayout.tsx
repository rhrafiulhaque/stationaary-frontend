import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" relative text-gray-600">
      <div className="container mx-auto ">
        <div className="relative flex">
          <DashboardSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="w-full">
            <UserNavbar
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
