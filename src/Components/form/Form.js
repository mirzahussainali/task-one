import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form-inner">
        <h2>Welcome back!</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className="checkbox-cont">
          <input type="checkbox" />
          <label htmlFor="">Remember me</label>
        </div>
        <button className="login-btn">Login</button>
        <p className="terms">
          This site is protected by{" "}
          <span>
            <a href="/">Privacy Policy</a>
          </span>{" "}
          and{" "}
          <span>
            <a href="/">Terms of Service apply,</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
