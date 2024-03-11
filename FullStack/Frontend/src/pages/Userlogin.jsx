import React, { useState } from "react";
import "../assets/css/userlogin.css"; 
import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function UserLogin() {
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
      
      if (email !== 'admin@gmail.com') {
        alert("login successfull")
        navigate('/userpage');
      }
      if (email === 'admin@gmail.com') {
      
        alert("Enter valid credentials");
      }
      
    } catch (error) {
      alert("Invalid Email or password")
      
    }
  };
 
  return (
    <div className="--user-login-container">
      <div className="--user-login-form">
        <h2>User Login</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
    
          <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
          />
          <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        

          <button type="submit"  >
          Login
          </button>

          <p class=".p">Don't have an account?<a href="/signup">Sign up here!</a></p>
          <p class=".p">Admin Login?<a href="/adminlogin">Login here!</a></p>
          </form>
      </div>
    </div>
  );
}

export default UserLogin;
