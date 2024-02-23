import '../assets/Landing.css';
import { Link } from 'react-router-dom';
const ImagePage = () => {
  return (
    <div className="land">
    <div className="image-page">
      <div className="image-container">
        <img src="https://c8.alamy.com/comp/FPB3C8/administrator-icon-internet-button-on-white-background-FPB3C8.jpg" alt="Admin" />
        <p>Admin</p>
      </div>
      <div className="image-container">
        <Link to="/login"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j14DRiJPsiMPSFJ7GqTtN5sF1r8GuW3GbQ&s" alt="User" /></Link>
        <p>User</p>
      </div>
    </div>
    </div>  
  );
};

export default ImagePage;
