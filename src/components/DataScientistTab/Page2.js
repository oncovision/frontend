import React from "react";
import image1 from "../../assets/pathologicalImages/slideCaptureShot.jpeg";
import image2 from "../../assets/pathologicalImages/slideCaptureShot2.jpeg";

import image3 from "../../assets/pathologicalImages/slideCaptureShot3.jpeg";

import image4 from "../../assets/pathologicalImages/slideCaptureShot4.jpeg";
import image5 from "../../assets/pathologicalImages/slideCaptureShot5.jpeg";

import image6 from "../../assets/pathologicalImages/slideCaptureShot6.jpeg";

import { Grid } from "@mui/material";

import "../../styles/LungPath.css";

function Page2() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Histopathological data</h1>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image1} className="card-img-top" alt="..." />
          <h3>Patient-1</h3>
          <p>Lung_Fused_CT_Pathology</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image2} className="card-img-top" alt="..." />
          <h3>Patient-2</h3>
          <p>Lung_Fused_CT_Pathology</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image3} className="card-img-top" alt="..." />
          <h3>Patient-3</h3>
          <p>NLST</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image4} className="card-img-top" alt="..." />
          <h3>Patient-4</h3>
          <p>NLST</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image5} className="card-img-top" alt="..." />
          <h3>Patient-5</h3>
          <p>NLST</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image6} className="card-img-top" alt="..." />
          <h3>Patient-6</h3>
          <p>NLST</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default Page2;
