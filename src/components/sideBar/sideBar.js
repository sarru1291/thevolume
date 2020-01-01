import React from "react";
import "./sideBar.scss";
import { NavLink } from "react-router-dom";

export default function sideBar() {
  return (
    <aside className="sidebar">
      <div>
        <NavLink to="/" exact activeClassName="navitem-a" className="navitem">
          HOME
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/talecity"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          TALE CITY
        </NavLink>
      </div>
      <div className="footer">copyright 2019</div>
    </aside>
  );
}
