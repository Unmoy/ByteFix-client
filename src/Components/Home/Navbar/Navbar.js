import React from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    setClicked(!clicked);
  };
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
    <nav className="NavbarItems">
      <p className="logo">Red Fox Services</p>
      <div className="menu_icon" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <ul className={clicked ? `nav_menu active` : `nav_menu`}>
        {MenuList.map((item, index) => {
          return (
            <li key={index}>
              <a className="nav_link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div>
        {currentUser.user_email ? (
          <button>{currentUser.user_name}</button>
        ) : (
          <button className="p-1">No User Found</button>
        )}
      </div>
      <div>
        {currentUser.user_name ? (
          <button className="p-1" onClick={handleLogout}>
            logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
