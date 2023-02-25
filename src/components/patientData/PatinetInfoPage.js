import React from "react";
// import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../../styles/singleChart.css";
import { useState, useEffect } from "react";
import doSomething from "../../helpers/MRDData";
import LineChart from "../../components/LineChart";
import "react-vertical-timeline-component/style.min.css";
import { useLocation } from "react-router-dom";

function PatientInfoPage() {
  const location = useLocation();
  const pdata = location.state;
  console.log(pdata);
  const UserData = doSomething(pdata);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Calculated MRD Value",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });

  return (
    <div>
      <div className="chart-center-container">
        <div className="singleChart">
          <LineChart chartData={userData} />
        </div>

        <h3>MRD data of Patient id-{pdata[0]}</h3>
        <p></p>
      </div>
    </div>
  );
}

export default PatientInfoPage;
