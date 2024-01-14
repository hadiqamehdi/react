// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const counterStyle = {
    fontSize: "24px",
    textAlign: "center",
    margin: "auto", // This will center the component horizontally
    marginTop: "100px", // Adjust the top margin as needed for vertical centering
  };

  const buttonStyle = {
    fontSize: "16px",
    margin: "8px",
    cursor: "pointer",
  };

  return (
    <div style={counterStyle}>
      <h2>Counter: {count}</h2>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
