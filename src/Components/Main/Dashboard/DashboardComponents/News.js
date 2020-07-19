import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const News = () => {
  return (
    <Grid item xs={12}>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#8a85ff",

          padding: "20px",
          display: "flex",
          color: "white",
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
          Breaking News
        </Typography>
      </Paper>
    </Grid>
  );
};

export default News;
