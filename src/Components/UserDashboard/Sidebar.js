import React, { useState, useEffect } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faDesktop,
  faList,
  faStar,
  faClipboard,
  faHandsHelping,
  faComments,
  faUserAstronaut,
  faFolderPlus,
  faPaintBrush,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { useAuth } from "../contexts/AuthContext";
export const userMenuItems = [
  { iconName: faDesktop, name: "Monitor", to: "monitor" },
  { iconName: faList, name: "Services", to: "servicelist" },
  { iconName: faComments, name: "Review", to: "userReview" },
  { iconName: faClipboard, name: "Configure", to: "configure" },
  { iconName: faStar, name: "Settings", to: "settings" },
  { iconName: faHandsHelping, name: "Help", to: "help" },
];
export const adminMenuItems = [
  { iconName: faDesktop, name: "Monitor", to: "monitor" },
  { iconName: faUserAstronaut, name: "Add Admin", to: "makeadmin" },
  { iconName: faFolderPlus, name: "Add Service", to: "addservice" },
  { iconName: faPaintBrush, name: "Manage", to: "manage" },
  { iconName: faLayerGroup, name: "All Orders", to: "allorders" },
];
const Sidebar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useAuth();
  useEffect(() => {
    fetch("https://byte-fix-server.vercel.app/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: currentUser.user_email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [currentUser.user_email]);
  return (
    <div>
      <>
        <section className="section_wrapper">
          <div className="top">
            <div className="brand">
              <span>
                <Link to="/" className="brand_link">
                  Red Fox
                </Link>
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
              {isAdmin === true ? (
                <ul>
                  {adminMenuItems.map((menuItem, index) => (
                    <MenuItems
                      key={index}
                      name={menuItem.name}
                      to={menuItem.to}
                      iconName={menuItem.iconName}
                    />
                  ))}
                </ul>
              ) : (
                <ul>
                  {userMenuItems.map((menuItem, index) => (
                    <MenuItems
                      key={index}
                      name={menuItem.name}
                      to={menuItem.to}
                      iconName={menuItem.iconName}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="logout">
            <a href="/">
              <span className="logout">Logout</span>
            </a>
          </div>
        </section>
        <section id="navbar" className={navbarState ? "show" : ""}>
          <div className="">
            <span>
              <Link to="/">Red Fox Servies</Link>
            </span>
          </div>
          <div className="responsive__links">
            {isAdmin === true ? (
              <ul>
                {adminMenuItems.map((menuItem, index) => (
                  <MenuItems
                    key={index}
                    name={menuItem.name}
                    to={menuItem.to}
                    iconName={menuItem.iconName}
                  />
                ))}
              </ul>
            ) : (
              <ul>
                {userMenuItems.map((menuItem, index) => (
                  <MenuItems
                    key={index}
                    name={menuItem.name}
                    to={menuItem.to}
                    iconName={menuItem.iconName}
                  />
                ))}
              </ul>
            )}
          </div>
        </section>
      </>
    </div>
  );
};

export default Sidebar;
