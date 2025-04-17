import React from "react";

import logo from "@/images/logo.svg";
import banner from "@/images/banner.png"

const Header: React.FC = () => {
  return (
    <div className="container">
      <header
        className="header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="logo">
          <a href="/" className="logo-link">
            <img src={logo} alt="" />
            <h3>
              <p>Edison</p>
              <p>restaurant</p>
            </h3>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
