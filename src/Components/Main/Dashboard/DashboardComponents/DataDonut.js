import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Donut from "./Donut";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#282C34",
    padding: "10px",
    color: "white",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "20px",
    },
  },

  paperinfo: {
    fontSize: "1em",
    fontWeight: "500",
    color: "#e6e5e8",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.4em",
    },
  },

  donutgrid: {
    marginBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      marginBottom: "10px",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "15px",
    },
  },
}));

const DataDonut = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ order: 6 }}>
      <Paper elevation={3} className={classes.paper}>
        <Grid item xs={12} className={classes.donutgrid}>
          {" "}
          <Typography className={classes.paperinfo}>Data Segment</Typography>
        </Grid>
        <Grid item xs={12}>
          <Donut />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DataDonut;
