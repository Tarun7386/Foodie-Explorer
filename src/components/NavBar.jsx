import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import "./Navbar.css";
const NavBar = () => {
  const navItems = [
    { path: "/", link: "Home", icon: <FaHome /> },
    { path: "/explore", link: "Explore", icon: <FaCompass /> },
    { path: "/about", link: "AboutUs", icon: <FaInfoCircle /> },
    { path: "/sign_in", link: "SignIn", icon: <FaSignInAlt /> },
    { path: "/sign_up", link: "SignUp", icon: <FaUserPlus /> },
  ];

  return (
    <div>
      <header className="header">
        <div className="div-img">
          <img className="logo-img" src="logo-img.png" />
        </div>
        <div className="Topbar">
        <nav className="navbar">
          <ul className="">
            {navItems.map(({ path, link, icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-white hover:underline flex items-center gap-1 ${
                      isActive ? "underline" : ""
                    }`
                  }
                >
                  {icon}
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </header>
    <div >
    <img className="back-man" src="back_man.png" />
  </div>
  </div>
    
  );
};

export default NavBar;
