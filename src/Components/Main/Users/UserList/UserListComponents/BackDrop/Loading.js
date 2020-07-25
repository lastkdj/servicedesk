import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

  colorPrimary: {
    backgroundColor: "#ffa600",
    position: "absolute",
    top: "0%",
    left: "0%",
    width: "100%",
    zIndex: "10000",
    position: "fixed",
  },
}));

export default function LinearIndeterminate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.loading ? (
        <LinearProgress classes={{ colorPrimary: classes.colorPrimary }} />
      ) : null}
    </div>
  );
}
