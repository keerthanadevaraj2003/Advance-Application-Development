import React from 'react';
import "../assets/css/Foodmenu.css";
import pic6 from "../assets/images/f1.jpg"
import pic7 from "../assets/images/f2.jpg"
import pic8 from "../assets/images/f3.jpg"
import pic10 from "../assets/images/f4.jpg"
import pic11 from "../assets/images/f5.jpg"
import pic12 from "../assets/images/f6.jpg"
import Foodmenu from './Foodmenu';
const Food = () => {
  const coursesData = [
    { title: 'Connoisseur’s Delight',  imageUrl:pic6, description: 'French Cuisine' },
    { title: 'Culinary Odyssey', imageUrl:pic7, description: 'Chinese Cuisine' },
    { title: 'Zen of Flavor', imageUrl: pic8, description: 'Japanese Cuisine' },
    { title: 'Feast of Heritage', imageUrl: pic10, description: 'Indian Cuisine' },
    { title: 'Rustic Elegance', imageUrl: pic11, description: 'Italian Cuisine' },
    { title: 'Greek Cuisine', imageUrl: pic12, description: 'Medley of Aegean Flavors' },
  ];
  return (
    <div className="--courses-container">
    <div className="sub-cont" style={{paddingTop:"5px",backgroundColor:"black"}}>
    <h1 style={{fontFamily:"Sego UI ,Tahoma,Geneva,Verdana,sans-serif",textAlign:"center"}}>Food Menu</h1>
    </div>
      {coursesData.map((course, index) => (
        <Foodmenu key={index} {...course} />
      ))}
    </div>
  );
};

export default Food;