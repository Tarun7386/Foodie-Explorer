import React from "react";
import "./sheetcss1/SidebarNav.css"
export const SidebarNav = () => {
  const username=localStorage.getItem("username");
  return (
    <div className="wrapper_admin">
      <div className="sidebar_admin">
      <div className="profile_admin">
        <img
          width={100}
          src="https://th.bing.com/th/id/OIP.XR7rVifU389Hayg8SpKIYwHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="profile_picture"
        />
        <h3>
          <span id="username">{username} </span>
        </h3>
        <p>Foodie Explorer</p>
      </div>
      <ul className="ultag_admin">
        <li>
          <a href="#" className="active">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            <span className="item">Home</span>
          </a>
        </li>
        <li>
          <a href="collect_registrations">
            <span className="icon">
              <i className="fas fa-user-friends"></i>
            </span>
            <span className="item">Explorers</span>
          </a>
        </li>
        <li>
          <a href="users_list">
            <span className="icon">
              <i className="fas fa-users"></i>
            </span>
            <span className="item">Users</span>
          </a>
        </li>
        <li>
          <a href="add_places">
            <span className="icon">
              <i className="fas fa-plus-circle"></i>
            </span>
            <span className="item">AddPlaces</span>
          </a>
        </li>
        <li>
          <a href="deactivate_user">
            <span className="icon">
              <i className="fas fa-ban"></i>
            </span>
            <span className="item">Deactivate</span>
          </a>
        </li>
        <li>
          <a href="send_message">
            <span className="icon">
              <i className="far fa-comment" aria-hidden="true"></i>
            </span>
            <span className="item">Message</span>
          </a>
        </li>

        <li>
          <a href="/">
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            <span className="item">logout</span>
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};
