import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/SignUp.css";
import globeImage from "../assets/pic2.jpeg";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/sign_up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Sign up successful:", data.message);
        alert("Successfully signed up");
        navigate("/"); // Redirect to sign-in page on success
      } else {
        console.error("Sign up failed:", data.message);
        alert("Sign up failed: " + data.message);
      }
    } catch (error) {
      console.error("Sign up failed:", error);
      alert("Sign up failed: " + error.message);
    }
  };

  return (
    <div className="mainblock">
      
      <div className="signUpContainer">
        <form className="formcontainer" onSubmit={handleSignUp}>
          <h2 className="signuph2">Sign Up</h2>
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
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/sign_in">Sign In</Link>
          </p>
        </form>
      </div>
     
        <img className="earth" src={globeImage} />
      
    </div>
  );
};

export default SignUp;
