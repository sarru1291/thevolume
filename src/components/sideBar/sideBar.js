import React from "react";
import "./sideBar.scss";
import { NavLink } from "react-router-dom";

export default function sideBar() {
  return (
    <aside>
      <div>
        <NavLink
          to="/home"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-home"></i>
          </div>
          <div>Home</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/tale-city"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-building"></i>
          </div>
          <div>Tale City</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/indology"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-om"></i>
          </div>
          <div>Indology</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/indias-stand"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-crosshairs"></i>
          </div>
          <div>India's Stand</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/discover-technology"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-microchip"></i>
          </div>
          <div>Discover Technology</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/monetary-report"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-coins"></i>
          </div>
          <div>Monetary Report</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/nature-scan"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-leaf"></i>
          </div>
          <div>Nature Scan</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/world-window"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-globe"></i>
          </div>
          <div>World Window</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/book-review"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-book"></i>
          </div>
          <div>Book Review</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/report-study"
          exact
          activeClassName="navitem-a"
          className="navitem"
        >
          <div>
            <i class="fas fa-file"></i>
          </div>
          <div>Report Study</div>
        </NavLink>
      </div>
      {/* <div className="footer">copyright 2019</div> */}
    </aside>
  );
}
