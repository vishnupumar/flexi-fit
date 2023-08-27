import React from "react";
import Logo from "../../assets/weightlifting.png";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          width={60}
          height={60}
          style={{ margin: 0, padding: 0 }}
        />
        <div className="logo-name">
          <h2 style={{ margin: 0, padding: 0 }}>Flexi-Fit</h2>
          <p style={{ margin: 0, padding: 0 }}>An Exercise App</p>
        </div>
      </Link>
      <div className="nav-links">
        <Link to={"/"} className="nav-home">
          Home
        </Link>
        <a
          href="#"
          onClick={() => {
            window.scrollTo({ top: 800, behavior: "smooth" });
          }}
        >
          Exercise
        </a>
      </div>
    </div>
  );
};
