import React from "react";
import "../styles/Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useCallback } from "react";
const Header = ({ userName }) => {
  const activeLinkHandler = useCallback(
    ({ isActive }) =>
      isActive
        ? {
            fontSize: "32px",
            color: "green",
            fontFamily: " Verdana, Geneva, Tahoma, sans-serif",
          }
        : {
            fontSize: "32px",
            color: "black",
            fontFamily: " Verdana, Geneva, Tahoma, sans-serif",
          },
    []
  );
  return (
    <header className="header">
      <nav className="header__navbar">
        <NavLink to="/all-courses" style={activeLinkHandler}>
          All Courses
        </NavLink>
        <NavLink to="/my-courses" style={activeLinkHandler}>
          My Courses
        </NavLink>
        <NavLink to="/my-profile" style={activeLinkHandler}>
          My Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
