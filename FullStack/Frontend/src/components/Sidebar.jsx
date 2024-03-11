import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Sidebar.css";
import Dashboard from "./Dashboard";
const Sidebar = () => {
    const navigate = useNavigate();
    const SideBar1 = () => {
        return (
            <div className="dashboardSideBar">
                <div className="dashboardSidebarInnerContainer">
                    <Link to="/side">
                        <button className="dashboardSidebarBtn">Home</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/book">
                        <button className="dashboardSidebarBtn">Book</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/view1">
                        <button className="dashboardSidebarBtn">View Events</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/utheme">
                        <button className="dashboardSidebarBtn">Theme</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/contact">
                        <button className="dashboardSidebarBtn">contact</button>
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
            <Dashboard/>
        </div>
    );
}

export default Sidebar;
// import React from 'react';
// import '../assets/css/Sidebar.css';

// function Sidebar() {
//     return (
//         <div className="sidebar">
//             <h2>Sidebar</h2>
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Services</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </div>
//     );
// }

// export default Sidebar;
