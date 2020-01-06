import React from "react";
import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import "./layout.scss";

const Layout = props => {
  return (
    <div className="root">
      <Header />
      <SideBar />
      <div className="main">{props.children}</div>
    </div>
  );
};
export default Layout;
