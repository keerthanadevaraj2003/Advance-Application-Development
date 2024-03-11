import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/viewt.css";
import Nav2 from '../components/Nav2';

export default function Addons1() {
    const [themes, setThemes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadThemes();
    }, []);

    const loadThemes = async () => {
        const token = localStorage.getItem("token");
        try {
            const result = await axios.get("http://localhost:8081/get/addon", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            setThemes(result.data);
        } catch (error) {
            console.error("Error fetching themes:", error);
        }
    };

    const deleteTheme = async (id) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:8081/delete/addon/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            loadThemes();
        } catch (error) {
            console.error("Error deleting theme:", error);
        }
    };

    return (
        <>
        <Nav2/>
        <div className="theme-gallery-container">
        <h1>ADDON GALLERY</h1>
            <div className="theme-gallery">
                {themes.map((theme, index) => (
                    <div className="theme-gallery-item" key={index}>
                        <img src={theme.image_url} alt={theme.addon_name} style={{height:"200px"}} />
                        <div className="theme-info">
                        <h3>{theme.addon_name}</h3>
                            <p>{theme.cost}</p>
                            <p>{theme.description}</p>
                            <div className="theme-button-container">
                                <Link to={`/editaddon/${theme.id}`} className="edit-theme-button">Edit</Link>
                                <button onClick={() => deleteTheme(theme.id)} className="delete-theme-button">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                </div>
                </>
                );
}
