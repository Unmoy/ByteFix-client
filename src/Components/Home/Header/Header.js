import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderContent from "../HeaderContent/HeaderContent";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderContent></HeaderContent>
    </div>
  );
};

export default Header;
