import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={listStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/login" style={linkStyle}>Login</Link></li>
          <li><Link to="/counter" style={linkStyle}>Counter</Link></li>
          <li><Link to="/registration" style={linkStyle}>Registration</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#4169E1",
  color: "#CCCCCC",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navStyle = {
  flex: 1,
};

const listStyle = {
  listStyle: "none",
  color: "#FFFFFF", // Change the font color to white
  padding: 0,
  display: "flex",
  justifyContent: "space-around",
};

const linkStyle = {
  textDecoration: 'none', // Remove underline from links
  color: '#FFFFFF', // Set link color to white
};

export default Header;
