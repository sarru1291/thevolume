import React from "react";
import "./hbar.scss";
import { NavLink } from "react-router-dom";

export default function Hbar(props) {
  return (
    <div className="hbar">
      <div onClick={props.hideHbar} className="close">
        <i class="fas fa-times"></i>
      </div>
      <div>
        <NavLink
          to="/home"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-home"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/tale-city"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-building"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Tale City
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/indology"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-om"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Indology
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/indias-stand"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-crosshairs"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;India's Stand
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/programme-archive"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-file-archive"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Programme Archive
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/discover-technology"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-microchip"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Discover Technology
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/monetary-report"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-coins"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Monetary Report
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/nature-scan"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-leaf"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Nature Scan
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/world-window"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-globe"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;World Window
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/book-review"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-book"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Book Review
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/report-study"
          exact
          //   activeClassName="navitem-a"
          className="navitem"
          onClick={props.hideHbar}
        >
          <i class="fas fa-file"></i>
          &nbsp; &nbsp; &nbsp; &nbsp;Report Study
        </NavLink>
      </div>
    </div>
  );
}
