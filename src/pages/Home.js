import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.svg";
import logoCancer from "../assets/logoCancer.PNG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="home-content">
        <img src={logoCancer} alt="logo-cancer" className="logo-cancer" />
        <h1> OncoVision </h1>
        <h2>Analyze Biological Data At Ease</h2>

        <div className="flex-row pt-3rem">
          <div className="px-2">
            <Link to="/menu" className="btn-1">
              For Doctors
            </Link>
          </div>
          <div className="px-2">
            <Link to="/menu2" className="btn-1">
              For Data Scientists
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
