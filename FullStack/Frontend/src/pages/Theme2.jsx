import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/viewt.css";
import Nav1 from '../components/Nav1';

export default function Theme2() {
    const [themes, setThemes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadThemes();
    }, []);

    const loadThemes = async () => {
        const token = localStorage.getItem("token");
        try {
            const result = await axios.get("http://localhost:8081/get/theme", {
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

    // const deleteTheme = async (id) => {
    //     const token = localStorage.getItem("token");
    //     try {
    //         await axios.delete(`http://localhost:8081/delete/theme/${id}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         loadThemes();
    //     } catch (error) {
    //         console.error("Error deleting theme:", error);
    //     }
    // };

    return (
        <>
        <Nav1/>
        <div className="theme-gallery-container">
        <h1>THEME GALLERY</h1>
        <div className="theme-gallery">
        {themes.map((theme, index) => (
            <div className="theme-gallery-item" key={index}>
            <img src={theme.image_url} alt={theme.theme_name} style={{height:"200px"}} />
            <div className="theme-info">
            <h3>{theme.theme_name}</h3>
            <p>{theme.cost}</p>
            <p>{theme.description}</p>
            </div>
            </div>
            ))}
            </div>
            </div>
            </>
    );
}
