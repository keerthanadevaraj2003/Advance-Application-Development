import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Sidebar.css";
import Dashboard1 from "./Dashboard1";

const Sidebar1 = () => {
    const navigate = useNavigate();
    const SideBar1 = () => {
        return (
            <div className="dashboardSideBar">
                <div className="dashboardSidebarInnerContainer">
                    <Link to="/adminpage">
                        <button className="dashboardSidebarBtn">Home</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/admintheme">
                        <button className="dashboardSidebarBtn">Add theme</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/etheme">
                        <button className="dashboardSidebarBtn">view theme</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/addons">
                        <button className="dashboardSidebarBtn">Add Addons</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/addonview">
                        <button className="dashboardSidebarBtn">view Addons</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <Link to="/">
                        <button className="dashboardSidebarBtn">Logout</button>
                    </Link>
                    &nbsp;&nbsp;
                </div>
            </div>
        );
    }

    return (
        <div className="dashboardMainContainer">
            <SideBar1 />
            <Dashboard1/>
        </div>
    );
}

export default Sidebar1;

