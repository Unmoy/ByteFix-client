import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const MenuItems = (props) => {
  const { name, to } = props;

  return (
    <NavLink
      to={to}
      className={(navLink) =>
        navLink.isActive ? "navlink active_link" : "navlink"
      }
    >
      <li>{name}</li>
    </NavLink>
  );
};

export default MenuItems;
