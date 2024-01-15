// Home.js
import React from "react";

const Home = () => {
  const pageStyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8f9fa",
  };

  const contentStyle = {
    textAlign: "center",
    maxWidth: "600px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#007bff",
  };

  const infoStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#333",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to Our Website</h1>
        <p style={infoStyle}>
          Discover more about our company and the services we offer. Feel free
          to explore and learn more about what we do.
        </p>
      </div>
    </div>
  );
};

export default Home;
