import React, { useState } from 'react';
import '../assets/css/adthemes.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav2 from '../components/Nav2';

function Admin_themes() {
    let navigate=useNavigate();
    const [user, setUser] = useState({
      theme_name: '',
      image_url: '',
      cost: '',
      description: ''
    });
    const { theme_name,image_url,cost,description} = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
 
    const onSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8081/add/theme", user,{
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      alert("YOUR FORM IS SUBMITTED")
      navigate('/adminpage');
    };
    
    return (
    <>
    <Nav2/>
    <div className="theme-container">
    <h2>Create a New Theme</h2>
            <form onSubmit={(e) =>onSubmit(e)}>
                <label htmlFor="themeName">Theme Name:</label>
                <input type="text" id="themeName" name="theme_name" value={theme_name} onChange={(e)=>onInputChange(e)}  />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="image_url" value={image_url} onChange={(e)=>onInputChange(e)}  />
                <label htmlFor="themeCost">Theme Cost:</label>
                <input type="text" id="themeCost" name="cost" value={cost} onChange={(e)=>onInputChange(e)}  />
                <label htmlFor="themeDescription">Theme Description:</label>
                <textarea id="themeDescription" name="description" value={description} onChange={(e)=>onInputChange(e)} ></textarea>
                 <center>
                 <input type="submit" value="Submit"/>
                 </center>
            </form>
        </div>
        </>
    );
}

export default Admin_themes;

