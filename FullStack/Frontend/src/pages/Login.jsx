import React from "react";
import "../assets/css/login.css"; 
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="login-container">
    <Navbar/>
      <div className="login">
        <button><Link to="/adminlogin">Admin Login</Link></button>
        <button><Link to="/userlogin">User Login</Link></button>
      </div>
    </div>
  );
}

export default Login;
