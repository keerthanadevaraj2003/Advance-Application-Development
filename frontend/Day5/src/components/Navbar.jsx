import { Link } from 'react-router-dom';
import '../assets/Navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <img src="https://files.123freevectors.com/wp-content/original/511105-silver-and-gold-happy-birthday-background.jpg" alt="Logo" />
        </div>
        <div className="nav">
          <ul>
            <li><Link to="/HomePage"><a href="#"> Home</a></Link></li>
            <li><Link to="/AboutPage"><a href="#"> About</a></Link></li>
            <li><Link to="/ServicePage"><a href="#">Services</a></Link></li>
            <li><Link to="/ReviewPage"><a href="#"> Review</a></Link></li>
            <li><Link to="/ContactPage"><a href="#"> Contact</a></Link></li>
            <li><Link to="/BlogPage"><a href="#"> Blogs</a></Link></li>
          </ul>
        </div>
        <div className="sidebar">
<ul>
    <li><Link to="/ThemesPage">Themes</Link></li>
    <li></li>
    <li></li>
    <li><Link to="/MenuPage">Menu</Link></li>
    <li></li>
    <li></li>
    <li><Link to="/PricePage">Price</Link></li>
    <li></li>
    <li></li>
    <li><Link to="/sidebar-link-3">Booking</Link></li>
    <li></li>
    <li></li>
    <li><Link to="/sidebar-link-3">Payment</Link></li>

</ul>
</div>
        <div className="icon">
        <Link to="/"><div className='abcd'><FontAwesomeIcon icon={faPowerOff} /></div></Link>
          <div className='abcd'><FontAwesomeIcon icon={faSearch} /></div>
          
          <div className='abcd' onClick={toggleDropdown}><FontAwesomeIcon icon={faUser} /></div>
          {showDropdown && (
            <div className="dropdown">
              <ul>
                <li><Link to="/ProfilePage"><a href="#">User</a></Link></li>
                {/* <li><Link to="/"><a href="#">Admin</a></Link></li> */}
              </ul>
            </div>
            
          )}
        </div>
      </div>
            
    </div>
    
  );
};

export default Nav;
