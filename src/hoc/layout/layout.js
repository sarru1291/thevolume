import React from "react";
import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import "./layout.scss";

const Layout = props => {
  return (
    <>
      <Header />
      <section>
        <SideBar />
        <div className="main">{props.children}</div>
      </section>
    </>
  );
};
export default Layout;
