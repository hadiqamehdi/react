import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={listStyle}>
          <li><Link to="/">login</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
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
  padding: 0,
  display: "flex",
  justifyContent: "space-around",
};

export default Header;
