import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  
  return (
    <aside
      className={`${isSidebarOpen ? "sidebar sidebar--active" : "sidebar"}`}
    >
      <button className="sidebar__close-btn" onClick={closeSidebar}></button>
        <Link to="/space" className="sidebar__link">
          <b>00</b> home
        </Link>
        <Link to="/destination" className="sidebar__link">
          <b>01</b> destination
        </Link>
        <Link to="/crew" className="sidebar__link">
          <b>02</b> crew
        </Link>
        <Link to="/technology" className="sidebar__link">
          <b>03</b> technology
        </Link>
    </aside>
  );
};

export default Sidebar;