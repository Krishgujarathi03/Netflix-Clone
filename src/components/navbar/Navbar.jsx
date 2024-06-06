import React, { useEffect, useRef } from "react";
import "./navbar.css";
import logo from "../../assests/logo.png";
import search_icon from "../../assests/search_icon.svg";
import bell_icon from "../../assests/bell_icon.svg";
import profile_img from "../../assests/profile_img.png";
import caret_icon from "../../assests/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  // When scrolling turn the navbar into dark color
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        if (navRef.current) {
          navRef.current.classList.add("nav-dark");
        }
      } else {
        if (navRef.current) {
          navRef.current.classList.remove("nav-dark");
        }
      }
    });
  }, []);
  return (
    <div ref={navRef} className="navbar" id="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src={search_icon} alt="" />
        <p>Children</p>
        <img className="icons" src={bell_icon} alt="" />
        <div className="navbar-profile">
          <img className="profile" src={profile_img} alt="" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
