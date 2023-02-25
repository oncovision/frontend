import React from "react";
import image1 from "../../assets/radiologicalImages/LungCT1.png";
import image2 from "../../assets/radiologicalImages/LungCT2.png";
import image3 from "../../assets/radiologicalImages/LungCT3.png";
import image4 from "../../assets/radiologicalImages/LungCT4.png";
import image5 from "../../assets/radiologicalImages/LungCT5.png";
import { Grid } from '@mui/material';

import { useLocation } from "react-router-dom";

function PatientInfo4() {
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
    image = image5;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display="flex" justifyContent="center">
      <div className="card">
      <div className="image-center-container">
        <img src={image} style={{ width: 600, height: 450 }} alt="..." />
        <h3>Radiological image of Patient id-{pdata[0]}</h3>
      </div>
      </div>
      
      </Grid>
    </Grid>
    
  );
}

export default PatientInfo4;
