import React from "react";
import "./sideBar.scss";
import { NavLink } from "react-router-dom";

export default function sideBar() {
  return (
    <aside>
      <div>
        <NavLink to="/" exact activeClassName="navitem-a" className="navitem">
          <div><i class="fas fa-home"></i></div> <div>Home</div>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/talecity"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div><i class="fas fa-city"></i></div> <div>Tale City</div>
        </NavLink>
      </div>
      {/* <div className="footer">copyright 2019</div> */}
    </aside>
  );
}
