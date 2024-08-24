// src/components/SignIn.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/SignIn.css";
import mapImage from "../assets/India_map.jpeg";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Send credentials in body
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        localStorage.setItem("username",username);
        // Handle successful sign-in (e.g., redirect or update UI)
        navigate("/user_login"); // Example redirection
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="container">
      <div className="map-container"><img className="map" src={mapImage} /></div>
      <div className="signInContainer">
        
        
        <div className="form-container">
        <form className="in_form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
          <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/sign_up">Sign Up</Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
