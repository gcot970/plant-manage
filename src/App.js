import React from "react";
import SignupForm from "./signupForm"; // Update the path to match your file structure
import './css/signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-section">
          <p>Plant Pal</p>
          <div className="input-boxes">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-boxes">
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-boxes">
            <label>Password</label>
            <input type="text" placeholder="Create a password" />
          </div>
          <button>Sign Up</button>
          <button>Plant Your Roots</button>
          {/* Include the SignupForm component */}
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;
