import React from "react";
import image1 from "../../assets/radiologicalImages/LungCT1.png";
import image2 from "../../assets/radiologicalImages/LungCT2.png";
import image3 from "../../assets/radiologicalImages/LungCT3.png";
import image4 from "../../assets/radiologicalImages/LungCT4.png";
import image5 from "../../assets/radiologicalImages/LungCT5.png";
import image6 from "../../assets/radiologicalImages/CTMRLung.jpg";
import { Grid } from "@mui/material";

function Page3() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Radiological data</h1>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image1} className="card-img-top" alt="..." />
          <h3>Patient-1</h3>
          <p>LIDC-IDRI</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image2} className="card-img-top" alt="..." />
          <h3>Patient-2</h3>
          <p>LIDC-IDRI</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image3} className="card-img-top" alt="..." />
          <h3>Patient-3</h3>
          <p>LIDC-IDRI</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image4} className="card-img-top" alt="..." />
          <h3>Patient-4</h3>
          <p>LIDC-IDRI</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="card">
          <img src={image5} className="card-img-top" alt="..." />
          <h3>Patient-5</h3>
          <p>LIDC-IDRI</p>
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

export default Page3;
