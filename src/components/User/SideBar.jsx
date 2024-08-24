import React from "react";
import "./userStyles/SideBar.css";

const SideBar = () => {
  const username=localStorage.getItem("username");
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile">
          <img
            width={95}
            id="profile-pic"
            src={
              "https://th.bing.com/th/id/OIP.XR7rVifU389Hayg8SpKIYwHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
            alt="profile_pic"
          />
          <span id="user-name">
            <h1>{username} </h1>
          </span>

          <p>Food Explorer</p>
        </div>

        <ul className="ultag">
          <li>
            <a href="#" className="active">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="item">Home</span>
            </a>
          </li>
          <li>
            <a href="/user_register">
              <span className="icon">
                <i className="fas fa-user-friends"></i>
              </span>
              <span className="item">Become Explorer</span>
            </a>
          </li>
          <li>
            <a href="#SearchBar">
              <span className="icon">
                <i className="fas fa-search"></i>
              </span>
              <span className="item">Search Bar</span>
            </a>
          </li>
          <li>
            <a href="#contact_us">
              <span className="icon">
                <i className="far fa-comment" aria-hidden="true"></i>
              </span>
              <span className="item">Contact Support</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              <span className="item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

