import React from "react";
import image5 from "../../assets/keplercurve/Figure_1.png";
import image6 from "../../assets/keplercurve/Figure_2.png";
import { Grid } from "@mui/material";

import "../../styles/LungPath.css";

function Page1() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <h2>Kaplan Meir Curves </h2>
          <p>
            (Obtained from Integrated Analysis of Multi-Modal Data from a Cancer
            Patient)
          </p>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <img src={image5} className="card-img-top" alt="..." />
            <h3>Cohort 1</h3>
            <p>Kaplan Meir Curve</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <img src={image6} className="card-img-top" alt="..." />
            <h3>Cohort 1 vs 2</h3>
            <p>Kaplan Meir Curve</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page1;
