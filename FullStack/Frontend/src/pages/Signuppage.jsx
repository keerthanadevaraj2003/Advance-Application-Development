import React, { useState } from "react";
import "..//assets/css/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      name: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', registrationData);

      if (response.status === 202) {
        console.log('Registration successful');
        alert("user registered successfully");
        navigate("/userlogin");

      } else {
        console.error('Registration failed:', response.data.message);
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('Network error. Please try again.');
    }
  };

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleSignup = () => {
  //   setError("");

  //   if (!username || !email || !password || !confirmPassword) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setError("Please enter a valid email address.");
  //     return;
  //   }

  //   if (password.length < 8) {
  //     setError("Password must be at least 8 characters.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match.");
  //     return;
  //   }

  //   console.log("Signing up with", username, email, password);
  // };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            id="confirmPassword"
            placeholder="confirmpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
