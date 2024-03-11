import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function Addons2() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:8081/update/addon/${id}`, user,{
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",},
      }),
      navigate("/addonview");
    };
    
    const loadUser = async () => {
    const token = localStorage.getItem("token");
    const result = await axios.get(`http://localhost:8081/get/addon/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
           
    setUser(result.data);
  };
  return (
    <>
    <div className="-container">
      
          <h2 className="text">Edit addon</h2>

          <form onSubmit={(e) => onSubmit(e)} class="form">
            <div className="elemnet_id1" >
              <label htmlFor="type" >
                addon Name
              </label>
              <input
                type={"text"}
                name="addon_name"
                value={addon_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="elemnet_id1">
              <label htmlFor="type" className="form-label">
                Image URL
              </label>
              <input
                type={"text"}
                name="image_url"
                value={image_url}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <div className="elemnet_id1">
              <label htmlFor="type" className="form-label">
              Cost
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Event Type"
                name="cost"
                value={cost}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="elemnet_id1">
              <label htmlFor="type" className="form-label">
              Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Event Type"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
           <center>
           <input type="submit" value="submit"/>
           </center>
           
            </form>
            </div>
    
    
    </>
  );
}