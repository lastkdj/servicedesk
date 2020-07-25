import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#8a85ff",
    margin: "20px",
  },

  colorPrimary: {},
}));

const SimpleBackdrop = (props) => {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress thickness={5} className={classes.backdrop} />
    </div>
  );
};

export default SimpleBackdrop;
