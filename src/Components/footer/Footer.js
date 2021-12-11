import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="link">
          <a href="/">Forgot your password?</a>
        </div>
        <button className="auth-btn">
          <img
            src="https://image.flaticon.com/icons/png/512/300/300221.png"
            alt=""
          />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Footer;
