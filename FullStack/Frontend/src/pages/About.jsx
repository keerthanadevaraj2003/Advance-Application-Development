import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ImageGallery from "react-image-gallery";
//  import "../assets/css/Images.css"
// import images from "./Images";
import Navbar from "../components/Navbar";

export default function App() {
  const images=[
    {
      url:"src/assets/images/a1.jpg"
    },
    {
      url:"src/assets/images/a2.jpg"
    },
   
    {
      url:"src/assets/images/a3.jpg"
    },
    {
      url:"src/assets/images/a4.jpg"
    },
    {
      url:"src/assets/images/a5.jpg"
    }
   
  ];
  
  return (
    <div className="App">
    <Navbar/>
    <br></br>
    <center>
    <SimpleImageSlider
    width={1000}
    height={600}
    images={images}
    showBullets={true}
    showNavs={true}
    autoPlay={true}
    slideDuration={0.5}
    />
    </center>
    </div>
  );
}
