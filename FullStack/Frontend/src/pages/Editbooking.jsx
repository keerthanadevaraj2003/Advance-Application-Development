import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    applicant_name: "",
    event_name: "",
    applicant_address: "",
    applicant_mobile_no: "",
    applicant_email: "",
    date: "",
    time: "",
    no_of_people: "",
    food_type: "Vegetarian",
    add_ons: [],
  });
  const [addons, setAddons] = useState([]);
  const {
    applicant_name,
    event_name,
    applicant_address,
    applicant_mobile_no,
    applicant_email,
    date,
    time,
    no_of_people,
    food_type,
    add_ons,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onAddonsChange = (e) => {
    setUser({ ...user, add_ons: Array.from(e.target.selectedOptions, (option) => option.value) });
  };

  useEffect(() => {
    loadUser();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:8081/update/event/${id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      navigate("/view");
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const loadUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(`http://localhost:8081/get/event/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setUser(result.data);
    } catch (error) {
      console.error("Error loading event:", error);
      // Handle error
    }
  };
  useEffect(() => {
    const fetchAddons = async () => {
      try {
        const response = await axios.get("http://localhost:8081/get/addon");
        setAddons(response.data);
      } catch (error) {
        console.error("Error fetching addons:", error);
     
      }
    };

    fetchAddons();
  }, []);


  return (
    <>
      <div className="-container">
        <h2 className="text">Edit Event</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="element_id1">
            <label htmlFor="applicant_name">Applicant Name:</label>
            <input
              type="text"
              name="applicant_name"
              value={applicant_name}
              onChange={onInputChange}
            />
          </div>
          <div className="elemnet_id1">
          <label htmlFor="type" className="form-label">
            Event Name
          </label>
          <input
            type={"text"}
            name="event_name"
            value={event_name}
            onChange={onInputChange}
          />
        </div>
        <div className="elemnet_id1">
          <label htmlFor="type" className="form-label">
          applicant_address
          </label>
          <input
            type={"text"}
            name="applicant_address"
            value={applicant_address}
            onChange={onInputChange}
          />
        </div>
        <div className="elemnet_id1">
          <label htmlFor="type" className="form-label">
          applicant_mobile_no
          </label>
          <input
            type={"text"}
            name="applicant_mobile_no"
            value={applicant_mobile_no}
            onChange={onInputChange}
          />
        </div>
        <div className="elemnet_id1">
          <label htmlFor="type" className="form-label">
          applicant_email
          </label>
          <input
            type="text"
            name="applicant_email"
            value={applicant_email}
            onChange={onInputChange}
          />
        </div>
      
          <label htmlFor="date" >
          date
          </label>
          <input
            type="date"
             id="date"
            name="date"
            value={date}
            onChange={onInputChange}
          />
     
        <div className="elemnet_id1">
          <label htmlFor="time" >
          time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={onInputChange}
          />
          </div>
        <div className="elemnet_id1">
          <label htmlFor="type" className="form-label">
          no_of_people
          </label>
          <input
            type={"number"}
            className="form-control"
            
            name="no_of_people"
            value={no_of_people}
            onChange={onInputChange}
          />
        </div>
       
          <div className="element_id1">
            <label htmlFor="food_type">Food Type:</label>
            <select
              id="food_type"
              name="food_type"
              value={food_type}
              onChange={onInputChange}
            >
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="element_id1">
          <label htmlFor="add_ons">Addons:</label>
          <select multiple id="add_ons" name="add_ons" value={add_ons} onChange={onAddonsChange} required>
            {addons.map(addon => (
              <option key={addon.id} value={addon.addon_name}>
                {addon.addon_name}
              </option>
            ))}
          </select>
          </div>

          <center>
            <input type="submit" value="Submit" />
          </center>
        </form>
      </div>
    </>
  );
}
