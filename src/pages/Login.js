import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <p>Plant Pal</p>
        <div className="input-boxes">
          <label>Email</label>{" "}
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-boxes">
          <label>Password</label>{" "}
          <input type="text" placeholder="Enter your password" />
        </div>
        <button>Login</button>

        <button>Plant Your Roots</button>
      </div>
    </div>
  );
}

export default Login;
