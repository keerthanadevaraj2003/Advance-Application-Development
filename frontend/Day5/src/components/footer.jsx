import '../assets/footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="para">&copy; 2024 Birthday Event Management</p>
        <div className="social-icons">
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
