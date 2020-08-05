import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#8a85ff",
    margin: "20px",
    position: "absolute",
    top: "40%",
    left: "45%",
  },

  colorPrimary: {},
}));

const AddUserLoad = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.loading ? (
        <CircularProgress thickness={5} className={classes.backdrop} />
      ) : null}
    </div>
  );
};

export default AddUserLoad;
