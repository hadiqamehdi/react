import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate authentication logic (replace with actual authentication)
    if (username === "user" && password === "password") {
      setLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const loginContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
  };

  const loginStyle = {
    textAlign: "center",
    width: "200px", // Set your desired width
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  };

  return (
    <div style={loginContainerStyle}>
      <div style={loginStyle}>
        {loggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
