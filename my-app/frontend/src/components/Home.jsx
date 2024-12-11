import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">MyWebsite</h1>
        <div className="nav-links">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="main-section">
        <div className="left-content">
          <h1>Welcome to MyWebsite</h1>
          <p>
            Join our platform and explore endless opportunities. Whether you're here to sign up or log in, 
            we're excited to have you on board!
          </p>
          <div className="button-group">
            <Link to="/signup">
              <button className="btn primary">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn secondary">Login</button>
            </Link>
          </div>
        </div>
        <div className="right-content">
          {/* Placeholder for an image or illustration */}
          <img
            src="https://via.placeholder.com/400x300"
            alt="Welcome Illustration"
            className="hero-image"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At MyWebsite, we believe in connecting people and creating seamless experiences. 
          Join our community today and discover what makes us unique. We focus on innovation, 
          simplicity, and user satisfaction.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
