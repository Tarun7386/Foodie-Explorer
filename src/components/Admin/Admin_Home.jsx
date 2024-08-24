import React from "react";
import { SidebarNav } from "./SidebarNav";
import { useState, useEffect } from "react";
import "./sheetcss1/AdminHome.css";
const Admin_Home = () => {
  const [cusineData, setCusineData] = useState([]);
  const username = localStorage.getItem("username");
  useEffect(() => {
    const fetchCusineData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/addplaces/admin_Home_cusines"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cusine data");
        }
        const data = await response.json();
        setCusineData(data);
      } catch (error) {
        console.error("Error fetching cusine data:", error);
      }
    };

    fetchCusineData();
  }, []);
  return (
    <div className="div1_admin">
      <div className="sidebar_admin">
        <SidebarNav username={username} />
      </div>
      <div className="food-cards">
        <span>
          <h1>Cusine-Gallery </h1>
        </span>
        <img className="admin_logo" src="logo-img.png" />
        <div id="cusine_gallery">
          {" "}
          {cusineData.length > 0 ? (
            <div className="cusine-gallery-grid">
              {cusineData.map((cusine, index) => (
                <div className="cusine-card" key={index}>
                  <img
                    src={cusine.image}
                    alt={cusine.FoodItem}
                    className="cusine-img"
                  />
                  <div className="cusine-details">
                    <strong>Place:</strong> {cusine.Place} <br />
                    <strong>Food Item:</strong> {cusine.FoodItem} <br />
                    <strong>Rating:</strong> {cusine.Rating} <br />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No cusines found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin_Home;
