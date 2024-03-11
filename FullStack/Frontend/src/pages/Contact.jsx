import React, { useState } from 'react';
import '..//assets/css/Contact.css';
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav1 from '../components/Nav1';
function Contact()
{
  let navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name,email,message} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:8081/add/contact", user);
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:8081/add/contact", user,{
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",},
      }),
    alert("YOUR FORM IS SUBMITTED")
    navigate("/contact");
  };
        // const [name, setName] = useState('');
        // const [email, setEmail] = useState('');
        // const [message, setMessage] = useState('');
        // const [submitted, setSubmitted] = useState(false);
      
        // const handleSubmit = (event) => {
        //   event.preventDefault();
        //   console.log('Form submitted:', { name, email, message });
        //   setName('');
        //   setEmail('');
        //   setMessage('');
        //   setSubmitted(true);
        // };
    return (
        <div className="ContactFull">
        <Nav1/>
        <div className="contact-us-container">
      <h2>Contact Us</h2>
      
        <form onSubmit={(e) =>onSubmit(e)}>
        <center>
          <div className="-form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
             required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => onInputChange(e)}
              required
            ></textarea>
            </div>
            <br></br>
           
            <button type="submit" sytle={{Width:"10px"}}>Submit</button>
            </center>
        </form>
      
    </div>
        </div>
    );
}
export default Contact;


