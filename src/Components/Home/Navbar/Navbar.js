import React from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("login");
      localStorage.removeItem("token");
      alert("Succesfully logged out");
    } catch {
      alert("Not logged out");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg header_nav navbar-light sticky-top">
      <div className="container-fluid">
        <p className="logo">ByteFix</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav_menu_wrapper"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav_menu_container">
            {MenuList.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <a className="nav_link" href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="navbar-nav nav_menu_right">
            <li className="nav-item">
              <div className="nav_contact">
                <FontAwesomeIcon className="clinic_icon" icon={faPhoneAlt} />
              </div>
              <div className="navbar_contact_details">
                <p>Contact</p>
                <p className="contact_info">+1 315 369 5943</p>
              </div>
              <div>
                {currentUser.user_name ? (
                  <button className="navbar_login ml-2" onClick={handleLogout}>
                    logout
                  </button>
                ) : null}
              </div>
            </li>
            <li className="nav-item">
              {currentUser.user_email ? (
                <button className="navbar_login">
                  {currentUser.user_name}
                </button>
              ) : (
                <a href="/login" className="route_links">
                  <button className="navbar_login">login / signup</button>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
