import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

const News = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ order: 5 }}>
      <Paper
        elevation={3}
        className={classes.quadrapapers}
        style={{
          backgroundColor: "#8a85ff",
          color: "white",
        }}
      >
        {" "}
        <Typography className={classes.paperinfo}>Breaking News</Typography>
      </Paper>
    </Grid>
  );
};

export default News;
