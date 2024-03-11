import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
function Adminpanel()
{
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
    return(
        <div>
        <div className="side">
        <button onClick={toggleSidebar}>&#9776;</button>
        </div>
        {isSidebarOpen && <Sidebar />}
        </div>
    );
}
export default Adminpanel;

