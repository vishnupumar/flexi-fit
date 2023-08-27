import React from "react";
import Logo from "../../assets/weightlifting.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={Logo} alt="logo" width={40} />
        <span className="red">
          <h3>Flexi-Fit</h3>
        </span>
      </div>
      <div>
        <h3>
          Made with <span className="red">❤</span> by Vishnu Pumar
        </h3>
      </div>
    </div>
  );
};
