import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-section">
          <p className="title">Plant Pal</p>
          <div className="input-boxes">
            <label>Name</label>{" "}
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-boxes">
            <label>Email</label>{" "}
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-boxes password-input">
            <label>Password</label>{" "}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
            />
            <button
              className="reveal-button"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
