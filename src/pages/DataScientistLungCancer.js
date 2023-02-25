import React from "react";
import DataScientistTabs from "../components/DataScientistTabs";
import { Grid } from "@mui/material";

import "../styles/About.css";
import Page1 from "../components/DataScientistTab/Page1";
import Page2 from "../components/DataScientistTab/Page2";
import Page3 from "../components/DataScientistTab/Page3";
import DSGenomicAnalysis from "../components/DataScientistTab/DSGenomicAnalysis";
import Page5 from "../components/DataScientistTab/Page5";

function DataScientistLungCancer() {
  return (
    <div className="pt-7">
      <div className="container shadow-1">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DataScientistTabs
              tab1="Genomic Analysis"
              tab2="Pathological Analysis"
              tab3="Radiological Analysis"
              tab4="Multimodal Biomedical Integration"
              tab5="Survival Curve"
              content1={DSGenomicAnalysis}
              content2={Page2}
              content3={Page3}
              content4={Page5}
              content5={Page1}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DataScientistLungCancer;
