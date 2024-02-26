import { Link } from "react-router-dom";
import '../assets/aHome.css';
const AHome = () => {
  return (
    <div className="sidebar1">
      <div className="logo1">
        <img src="https://files.123freevectors.com/wp-content/original/511105-silver-and-gold-happy-birthday-background.jpg"/>
      </div>
    <ul className="unl">
        
        <li><Link to="/sManage">Service Management</Link></li>
        <li></li>
        <li></li>
        <li><Link to="/sidebar-link-3">Booking</Link></li>
        <li></li>
        <li></li>
        <li><Link to="/sidebar-link-3">Payment</Link></li>
        <li></li>
        <li></li>
        <li><Link to="/">Logout</Link></li>
    </ul>
    </div>
  );
};

export default AHome;
