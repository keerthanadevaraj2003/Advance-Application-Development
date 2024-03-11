import React, { useState } from 'react';
import '../assets/css/adthemes.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav2 from '../components/Nav2';
function Addons() {
    let navigate=useNavigate();
  const [user, setUser] = useState({
    addon_name: '',
    image_url: '',
    cost: '',
    description: ''
  });
  const { addon_name,image_url,cost,description} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:8081/add/addon", user,{
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",},
      }),
    alert("YOUR FORM IS SUBMITTED")
    navigate("/addons");
  };


    return (
      <>
      <Nav2/>
      <div className="theme-container">
      <h2>Create Add-ons</h2>
      <form onSubmit={(e) =>onSubmit(e)}>
                <label htmlFor="themeName"> Name:</label>
                <input type="text" id="themeName" name="addon_name" value={addon_name} onChange={(e)=>onInputChange(e)} />

                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="image_url" value={image_url} onChange={(e)=>onInputChange(e)} />

                <label htmlFor="themeCost"> Cost:</label>
                <input type="text" id="themeCost" name="cost" value={cost} onChange={(e)=>onInputChange(e)} />

                <label htmlFor="themeDescription"> Description:</label>
                <textarea id="themeDescription" name="description" value={description} onChange={(e)=>onInputChange(e)}></textarea>
                 <center>
                 <input type="submit" value="Submit" />
                 </center>
                 </form>
                 </div>
                 </>
        );
}

export default Addons;
