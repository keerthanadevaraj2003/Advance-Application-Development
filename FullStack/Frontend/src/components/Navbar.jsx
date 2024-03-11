// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import '..//assets/css/navbar.css'; // Ensure to adjust the path based on your project structure
import logo from'..//assets/images/logo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
    <center>
  
    <h1>   &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  Birthday Bumps</h1>
    </center>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/userlogin">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
