import React from "react";

const AboutUs = () => {
  const pageStyle = {
    height: "80vh", // Adjusted to 80% of the viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8f9fa", // Light background color
  };

  const contentStyle = {
    textAlign: "center",
    maxWidth: "600px", // Set maximum width for content
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#007bff", // Blue heading color
  };

  const descriptionStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "20px",
    
    color: "#333", // Dark text color
  };

  const additionalTextStyle = {
    fontSize: "1rem",
    lineHeight: "1.4",
    color: "#555", // Slightly lighter text color
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to Our About Page</h1>
        <p style={descriptionStyle}>
          We are a team of passionate individuals dedicated to creating
          meaningful and innovative solutions. Our goal is to make a positive
          impact on the world through technology and collaboration.
        </p>
        <p style={additionalTextStyle}>
          Explore our website to learn more about our projects and services.
          Feel free to contact us if you have any questions or inquiries.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
