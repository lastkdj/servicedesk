import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#8a85ff",
    position: "absolute",
    top: "50%",
    left: "50%",
  },

  colorPrimary: {},
}));

const SimpleBackdrop = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.loading ? (
        <CircularProgress thickness={5} className={classes.backdrop} />
      ) : null}
    </div>
  );
};

export default SimpleBackdrop;
