import React from "react";
import lungCancer from "../assets/lungCancer.jpg";
import { Link } from "react-router-dom";
import "../styles/lungCancer.css";

function Menu2() {
  return (
    <div
      className="cancer"
      style={{
        backgroundImage: `url(${lungCancer})`,
        height: "100vh",
      }}
    >
      <div className="overlay"></div>
      <div className="headerContainer text-white">
        <h2> Welcome Data Scientist to Persistent Bio Portal </h2>
        <br />
        <div className="d-inline-flex subtitle mb-2 fw-bold">
          <div className="pe-3">Oncology</div>
          <div className="vertical pe-3"></div>
          <div className="pe-3">Neurology</div>
          <div className="vertical pe-3"></div>
          <div>Cardiology</div>
        </div>
        <br />
        <Link to="/DataScientistLungCancer" className="btn-1">
          Visualize
        </Link>
      </div>
    </div>
  );
}

export default Menu2;
