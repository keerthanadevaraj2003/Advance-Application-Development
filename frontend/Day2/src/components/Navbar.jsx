
import '../assets/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
         <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708529649/illustration-stickman-senior-citizens-260nw-127698062_nnqikw.jpg"/>
        </div>
        <div className="nav">
          <ul>
            <li><a href="#"> Home</a></li>
            <li><a href="#"> About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#"> Review</a></li>
            <li><a href="#"> Contact</a></li>
            <li><a href="#"> Blogs</a></li>
          </ul>
        </div>
        <div className="icon">
          <div className='abcd'><FontAwesomeIcon icon={faSearch} /></div>
          <div className='abcd'><FontAwesomeIcon icon={faUser} /></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;