import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function SidebarLayout() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default SidebarLayout;
