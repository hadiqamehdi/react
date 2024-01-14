// Footer.js
import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#444", // Grey color
    color: "#fff",
    padding: "8px", // Reduced padding
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    fontSize: "12px", // Reduced font size
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "40px", // Reduced width
    margin: "0 auto",
  };

  const linkStyle = {
    color: "#fff", // Set link color to white
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/services" style={linkStyle}>Services</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Follow</h3>
          <div style={socialIconsStyle}>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
