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
        backgroundColor: ["rgba(75,192,192,1)"],
      },
    ],
  });
  const mrdOption = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (in weeks)",
          colour: "black",
        },
      },
      y: {
        title: {
          display: true,
          text: "CTC count (cells/7.5ml)",
          colour: "black",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Diagnosis Age",
      },
    },
  };

  return (
    <div>
      <div className="chart-center-container" style={{ paddingTop: "0px" }}>
        <div className="singleChart" tyle={{ paddingTop: "0px" }}>
          <LineChart chartData={userData} options={mrdOption} />
        </div>

        <h3>MRD data of Patient id-{pdata[0]}</h3>
        <p>
          (Obtained from Integrated Analysis of Multi-Modal Data from a Cancer
          Patient)
        </p>
      </div>
    </div>
  );
}

export default PatientInfoPage;
