import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useUsuario } from "../Context/UserContext";

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
  },
}));

export default function LinearIndeterminate() {
  const { open, error } = useUsuario();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {(open && error === "auth/wrong-password") ||
      (open && error === "auth/invalid-email") ||
      (open && error === "auth/user-disabled") ||
      (open && error === "auth/email-already-in-use") ||
      (open && error === "auth/weak-password") ||
      (open && error === "") ? (
        <LinearProgress classes={{ colorPrimary: classes.colorPrimary }} />
      ) : null}
    </div>
  );
}
