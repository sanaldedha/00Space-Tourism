import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = ({openSidebar}) => {

  return (
    <>
      <button className="sidebar-btn" onClick={openSidebar}></button>
      <div className="navbar">
        <NavLink
          to="/space"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <b>00</b> home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <b>01</b> destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <b>02</b> crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <b>03</b> technology
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;