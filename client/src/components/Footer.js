import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            <span>PX</span>
            Pravexa Technologies
          </div>
          <p>
            Premium software development, internships and consulting for startups,
            businesses and students.
          </p>
          <div className="socials" aria-label="Social media links">
            <a href="https://linkedin.com" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://github.com" aria-label="GitHub"><FiGithub /></a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="/#services">Services</a>
          <a href="/#portfolio">Portfolio</a>
          <Link to="/internship-application">Apply for Internship</Link>
          <Link to="/project-request">Request a Project</Link>
        </div>
        <div>
          <h3>Policies</h3>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p><FiMail /> hello@pravexatechnologies.com</p>
          <p><FiPhone /> +91 98765 43210</p>
          <p><FiMapPin /> India, serving global clients</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Pravexa Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
