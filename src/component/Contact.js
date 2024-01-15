import React from "react";

const Contact = () => {
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

  const contactInfoStyle = {
    fontSize: "1rem",
    lineHeight: "1.4",
    color: "#555",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={infoStyle}>
          Thank you for your interest in our company. Feel free to reach out to
          us for any inquiries or information. We would love to hear from you!
        </p>
        <div style={contactInfoStyle}>
          <p>
            <strong>Company Name:</strong> Your Company Name
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, Cityville, Country
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@yourcompany.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
