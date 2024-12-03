import React from "react";
import "../styles/Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useCallback } from "react";
const ProfessorHeader = ({ userName }) => {
  const activeLinkHandler = useCallback(
    ({ isActive }) =>
      isActive
        ? {
            fontSize: "32px",
            color: "rgba(34, 87, 191, 1)",
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
        <NavLink to="/instructor-courses" style={activeLinkHandler}>
          Courses
        </NavLink>
        <NavLink to="/instructor-profile" style={activeLinkHandler}>
          My Profile
        </NavLink>
        <NavLink to="/sing-in" style={activeLinkHandler}>
          Sing In
        </NavLink>
      </nav>
    </header>
  );
};

export default ProfessorHeader;
