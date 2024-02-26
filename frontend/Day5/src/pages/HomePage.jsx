import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import '../assets/Home.css';
import Footer from "../components/footer";
function HomePage() {
  return (
    <div>
    
      <div className="home-page-content">
        <h1><b><u>Sparkle & Shine:</u></b><br></br><br></br></h1> <h2><i>Your Ultimate Birthday Bash Experience!!</i></h2>
        <h3><i>Welcome to Birthday Event Management</i></h3>
      <p>Your one-stop destination for organizing unforgettable birthday celebrations!</p>
        <p>Welcome to Birthday Event Management, where we turn your birthday dreams into reality!</p>
        <div className="cta-buttons">
          <Link to="/services" className="cta-button">Discover Our Services</Link>
          <Link to="/themes" className="cta-button">Explore Magical Themes</Link>
          <Link to="/contact" className="cta-button">Contact Us to Get Started</Link>
        </div>
      </div>
      <Navbar/>
       <Footer /> 
    </div>
  );
}

export default HomePage;
