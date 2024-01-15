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

  const rightsReservedStyle = {
    marginBottom: "8px",
  };

  return (
    <footer style={footerStyle}>
      <div style={rightsReservedStyle}>
        <h3>Rights Reserved</h3>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
