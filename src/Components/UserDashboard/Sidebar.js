import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

export const menuItems = [
  { name: "Monitor", to: "monitor" },
  { name: "My Services", to: "servicelist" },
  { name: "Add Review", to: "userReview" },
  { name: "Configure", to: "configure" },
  { name: "Settings", to: "settings" },
  { name: "Help", to: "help" },
];
const Sidebar = () => {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <div>
      <>
        <section className="section_wrapper">
          <div className="top">
            <div className="brand">
              <span>
                <Link to="/">MY TAXI</Link>
              </span>
            </div>
            <div className="toggle">
              {navbarState ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setNavbarState(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={(e) => {
                    e.stopPropagation();
                    setNavbarState(true);
                  }}
                />
              )}
            </div>
            <div className="links">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <MenuItems
                    key={index}
                    name={menuItem.name}
                    to={menuItem.to}
                  />
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="logout">
            <a href="#">
              <span className="logout">Logout</span>
            </a>
          </div> */}
        </section>
        <section id="navbar" className={navbarState ? "show" : ""}>
          <div className="">
            <span>
              <Link to="/">MY TAXI</Link>
            </span>
          </div>
          <div className="responsive__links">
            <ul>
              {menuItems.map((menuItem, index) => (
                <MenuItems key={index} name={menuItem.name} to={menuItem.to} />
              ))}
            </ul>
          </div>
        </section>
      </>
    </div>
  );
};

export default Sidebar;
