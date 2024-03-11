import { useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/nav1.css";
export default function Nav1() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div class="dv">
      <header id="header">
        <div className="header-head">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <h3>BirthDay Bumps</h3>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <div className="-navbar-center">
          <nav ref={navRef} class="n1">
            <Link to="/userpage">Home</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/book">Book</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/view1">view booking</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/utheme">theme</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/profile">Profile</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          
            <button
              className="-nav-btn nav-close-btn"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
        </div>
        <button className="-nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
