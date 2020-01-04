import React from "react";
import "./sideBar.scss";
import { NavLink } from "react-router-dom";

export default function sideBar() {
  return (
    <aside>
      <div>
        <NavLink to="/" exact activeClassName="navitem-a" className="navitem">
          <i class="fas fa-home"></i> &nbsp;&nbsp;&nbsp;&nbsp;Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/talecity"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <i class="fas fa-city"></i> &nbsp;&nbsp;&nbsp;&nbsp;Tale City
        </NavLink>
      </div>
      {/* <div className="footer">copyright 2019</div> */}
    </aside>
  );
}
