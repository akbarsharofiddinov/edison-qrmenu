import React from "react";
import { Header, SectionHeader } from "../components";
import { Outlet } from "react-router-dom";
import Feedback from "../components/Modal/Feedback";

const Layout: React.FC = () => {
  return (
    <div className="layout container">
      <Feedback />
      <Header />
      <SectionHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
