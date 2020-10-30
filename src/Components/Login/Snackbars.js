import React from "react";
import { useUsuario } from "../Context/UserContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snackbars = () => {
  const { error, setError, setOpen } = useUsuario();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError("");
    setOpen(false);
  };

  console.log(error);
  return (
    <div>
      {error === "auth/email-already-in-use" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert style={{ backgroundColor: "#B20453" }} severity="error">
            The Email is already in use
          </Alert>
        </Snackbar>
      ) : error === "auth/invalid-email" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert style={{ backgroundColor: "#B20453" }} severity="error">
            The Email has an invalid format
          </Alert>
        </Snackbar>
      ) : error === "auth/weak-password" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert style={{ backgroundColor: "#B20453" }} severity="error">
            The password must have at least 6 characters
          </Alert>
        </Snackbar>
      ) : error === "auth/wrong-password" || error === "auth/user-not-found" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert style={{ backgroundColor: "#B20453" }} severity="error">
            Wrong email or password
          </Alert>
        </Snackbar>
      ) : error === "auth/user-disabled" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert style={{ backgroundColor: "#B20453" }} severity="error">
            Account disabled
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
};

export default Snackbars;
