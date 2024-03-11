import React, { useState } from "react";
import "../assets/css/adminlogin.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/login', loginData);
      console.log(response.data);
      localStorage.setItem('token', response.data.token); 
      
      if (email === 'admin@gmail.com' && password==="Admin@123") {
       alert("login successful");
        navigate('/adminpage');
      }
      if (email !== 'admin@gmail.com') {
      
        alert("Enter valid credentials");
      }
      
    } catch (error) {
      alert("Invalid Email or password")
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          

          <button type="submit">
          
          Login
         
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
