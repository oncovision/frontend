import React from "react";
import image1 from "../../assets/pathologicalImages/slideCaptureShot.jpeg";
import image2 from "../../assets/pathologicalImages/slideCaptureShot2.jpeg";
import "../../styles/image.css";
import image3 from "../../assets/pathologicalImages/slideCaptureShot3.jpeg";

import image4 from "../../assets/pathologicalImages/slideCaptureShot4.jpeg";

import { useLocation } from "react-router-dom";
import { Grid } from '@mui/material';

function PatientInfo5() {
  const location = useLocation();
  const pdata = location.state;
  console.log(pdata);
  let image = null;
  if (pdata[0] === "AMC-001") {
    image = image1;
  } else if (pdata[0] === "AMC-002") {
    image = image2;
  } else if (pdata[0] === "AMC-003") {
    image = image3;
  } else if (pdata[0] === "AMC-004") {
    image = image4;
  } else if (pdata[0] === "AMC-005") {
    image = image4;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display="flex" justifyContent="center">
      <div className="card">
      <div className="image-center-container">
      <img src={image} style={{ width: 800, height: 400 }} alt="..." />
        <h3>Histopathological image of Patient id-{pdata[0]}</h3>
      </div>
      </div>
      
      </Grid>
    </Grid>
  );
}

export default PatientInfo5;
