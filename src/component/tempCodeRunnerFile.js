import React from "react";

const AboutUs = () => {
  const pageStyle = {
    
    height: "50vh", // Full viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>this is About Page</h1>
        
      </div>
    </div>
  );
};

export default AboutUs;
