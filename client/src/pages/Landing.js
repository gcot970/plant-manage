
import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Landing() {
  return (
    <div className="landing-page">
      <div className="login-box">
        <div className="login-section">

       
        <h1>PlantPal</h1>
        
        <Link to="/login" className="btn btn-success">Login</Link>


        <Link to="/signup" className="btn btn-success">Signup</Link>
      </div>
      </div>
    </div>
  );
}

export default Landing;


    

    
      

