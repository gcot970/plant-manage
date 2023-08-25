import React from "react";
import "./signup";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-section">


          <p>Plant Pal</p>
          <div className="input-boxes">
            <label>Name</label>{" "}
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-boxes">
            <label>Email</label>{" "}
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-boxes">
            <label>Password</label>{" "}
            <input type="text" placeholder="Create a password" />
          </div>
          <button>Sign Up</button>


          <button>Plant Your Roots</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
