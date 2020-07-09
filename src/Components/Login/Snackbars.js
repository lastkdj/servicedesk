import React from "react";
import { useUsuario } from "../Context/UserContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snackbars = () => {
  const { error, setError } = useUsuario();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError("");
  };

  console.log(error);
  return (
    <div>
      {error === "auth/email-already-in-use" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="error">El Email ya esta siendo usado</Alert>
        </Snackbar>
      ) : error === "auth/invalid-email" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="error">El Email no tiene un formato valido</Alert>
        </Snackbar>
      ) : error === "auth/weak-password" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="error">
            La contraseña debe tener al menos 6 caracteres
          </Alert>
        </Snackbar>
      ) : error === "auth/wrong-password" || error === "auth/user-not-found" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="error">Email o Contraseña Incorrectos</Alert>
        </Snackbar>
      ) : error === "auth/user-disabled" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="error">El Email ha sido deshabilitado</Alert>
        </Snackbar>
      ) : null}
    </div>
  );
};

export default Snackbars;
