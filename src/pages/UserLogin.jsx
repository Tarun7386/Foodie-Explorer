import React, { useState } from "react";
import Contact from "../components/User/Contact";
import SideBar from "../components/User/SideBar";
import SearchBar from "../components/User/SearchBar";
import exploreImg from "../assets/pic3.jpeg"
import "./styles/UserLogin.css";
const UserLogin = () => {
  const username=localStorage.getItem("username");
  return (
    <div className="div1">      
        <div className="sidebarv">
          <SideBar username={username} />
        </div>
        <div className="Heading" >
          <h4 >Hello {username} Welcome</h4>
        </div>
        <div className="home-img">
          <img className="user-img" src={exploreImg} alt="img3" />
        </div>
        <div className="search_bar_div">
        <SearchBar />
        </div>
        <div className="contact_us_main">
        <Contact />
        </div>     
    </div>
  );
};

export default UserLogin;
