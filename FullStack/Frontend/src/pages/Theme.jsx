import React from 'react';
import "../assets/css/Foodmenu.css";
import pic6 from "../assets/images/t1.webp"
import pic7 from "../assets/images/t2.webp"
import pic8 from "../assets/images/t3.webp"
import pic10 from "../assets/images/t4.webp"
import pic11 from "../assets/images/t5.jpeg"
import pic12 from "../assets/images/t6.webp"
import Thememenu from './Thememenu';
const Theme = () => {
  const coursesData1 = [
    { title: 'Toga party',  imageUrl:pic6, description: 'University Program' },
    { title: 'Summer Camp', imageUrl:pic7, description: 'University Program' },
    { title: 'Yatch Party', imageUrl: pic8, description: 'Master program' },
    { title: 'Speakeasy', imageUrl: pic10, description: 'University Program' },
    { title: 'Backward Biergarten', imageUrl: pic11, description: 'Master program' },
    { title: 'White Lotus', imageUrl: pic12, description: 'University Program' },
  ];
  return (
    
    <div className="--courses-container">
    <div className="sub-cont" style={{paddingTop:"5px",backgroundColor:"black"}}>
    <h1 style={{fontFamily:"Sego UI ,Tahoma,Geneva,Verdana,sans-serif",textAlign:"center"}}>Theme</h1>
    </div>
      {coursesData1.map((course, index) => (
        <Thememenu key={index} {...course} />
      ))}
    </div>
  );
};

export default Theme;