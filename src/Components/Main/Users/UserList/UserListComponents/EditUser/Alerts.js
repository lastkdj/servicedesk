import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";

const Alerts = (props) => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setError("");
  };
  return (
    <Grid>
      {props.error === "auth/email-already-exists" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="error">Email already in Use</Alert>
        </Snackbar>
      ) : props.error === "auth/invalid-email" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="error">Invalid email format</Alert>
        </Snackbar>
      ) : props.error === "auth/invalid-password" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="error">
            The password must contain at least 6 characters
          </Alert>
        </Snackbar>
      ) : props.error === "auth/successfully-created" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="success">The user been created</Alert>
        </Snackbar>
      ) : null}
    </Grid>
  );
};

export default Alerts;
