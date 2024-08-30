
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/AdminLogin.css"

const AdminLogin = () => {  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://foodie-explorer-deploy.vercel.app/admin/admin_details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }), // Send credentials in body
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        localStorage.setItem("username",username);
        navigate("/admin_home");
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
    <div className="asignInContainer">
      <h2>Sign In</h2>
      <form  className="f" onSubmit={handleSignIn}>
        <input className="i1"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input className="i2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button  type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default AdminLogin;
