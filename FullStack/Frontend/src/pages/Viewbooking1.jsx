import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/viewb.css";
import Nav1 from '../components/Nav1';
export default function Viewbooking1() {
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const token = localStorage.getItem("token");
        try {
            const result = await axios.get("http://localhost:8081/get/event", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            setUsers(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    const deleteUser = async (id) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:8081/delete/event/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
           
            loadUsers();
        } catch (error) {
            
            console.error("Error deleting event:", error);
        }
    };
    
    return (
        <>
       <Nav1/>
        <div className="table-container">
        <h1>View Booking</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Event ID</th>
                        <th>Applicant Name</th>
                        <th>Event Name</th>
                        <th>Applicant Address</th>
                        <th>Mobile Number</th>
                        <th>Email ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Number of People</th>
                        <th>Food Type</th>
                        <th>Addons</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.applicant_name}</td>
                            <td>{user.event_name}</td>
                            <td>{user.applicant_address}</td>
                            <td>{user.applicant_mobile_no}</td>
                            <td>{user.applicant_email}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>{user.no_of_people}</td>
                            <td>{user.food_type}</td>
                            <td>{user.add_ons}</td>
                            <td>
                            <Link
                            to={`/edit/${user.id}`}
                            style={{color:"black",backgroundColor:"white"}}>
                            EDIT</Link> &nbsp;
                             <br/>
                                <button style={{color:"black",backgroundColor:"white"}}
                    onClick={() => deleteUser(user.id)}
                  >
                  DELETE
                  </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}
