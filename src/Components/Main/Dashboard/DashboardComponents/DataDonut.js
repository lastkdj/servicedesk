import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Donut from "./Donut";

const DataDonut = () => {
  return (
    <Grid item xs={3}>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#282C34",
          padding: "20px",
          color: "white",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            marginBottom: "15px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {" "}
          <Typography
            style={{
              fontSize: "1.2em",
              fontWeight: "500",
              color: "#e6e5e8",
            }}
          >
            Data Segment
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Donut />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DataDonut;
