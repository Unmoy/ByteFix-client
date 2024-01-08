import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuItems = (props) => {
  const { name, to, iconName } = props;
  return (
    <NavLink
      to={to}
      className={(navLink) =>
        navLink.isActive ? "navlink active_link" : "navlink"
      }
    >
      <li>
        <FontAwesomeIcon icon={iconName} className="fonticon" />
        {name}
      </li>
    </NavLink>
  );
};

export default MenuItems;
