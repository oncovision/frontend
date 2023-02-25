import React from "react";
import lungCancer from "../assets/lungCancer.jpg";
import { Link } from "react-router-dom";
import "../styles/lungCancer.css";

function Menu1() {
  return (
    <div
      className="cancer"
      style={{
        backgroundImage: `url(${lungCancer})`,
        height: '100vh'
      }}
    >
      <div className="overlay"></div>
      <div className="headerContainer">
        <h2> Welcome Doctor to Persistent OncoVision Portal </h2>
        <br />
        <p className="text-white"> Lung Cancer</p>
        <br />
        <Link to="/LungCancerPatientDataset" className="btn-1">
          Visualize
        </Link>
      </div>
    </div>
  );
}

export default Menu1;
