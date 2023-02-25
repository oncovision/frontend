import React from "react";
import { Grid } from "@mui/material";
import "../../styles/LungPage1.css";
import CardMutation from "../../components/genomic/CardMutation";
import CardHistology from "../../components/genomic/CardHistology";
import CardDiseaseFeeStatus from "../../components/genomic/CardDiseaseFeeStatus";
import CardTreatment from "../../components/genomic/CardTreatment";

import CardSex from "../../components/genomic/DataScientistGenomic/DSCardSex";
import CardDiagnosis from "../../components/genomic/CardDiagnosis";
import CardTumorSite from "../../components/genomic/CardTumorSite";
import CardOncotree from "../../components/genomic/CardOncotree";

function DSGenomicAnalysis() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Genomic Data</h1>
      </Grid>
      <Grid item xs={6}>
        <CardMutation />
      </Grid>
      <Grid item xs={6}>
        <CardDiagnosis />
      </Grid>
      <Grid item xs={4}>
        <CardSex />
      </Grid>
      <Grid item xs={4}>
        <CardHistology />
      </Grid>
      <Grid item xs={4}>
        <CardTumorSite />
      </Grid>
      <Grid item xs={4}>
        <CardDiseaseFeeStatus />
      </Grid>
      <Grid item xs={4}>
        <CardOncotree />
      </Grid>
      <Grid item xs={4}>
        <CardTreatment />
      </Grid>
    </Grid>
  );
}

export default DSGenomicAnalysis;
