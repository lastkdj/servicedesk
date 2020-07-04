import React from "react";
import { useUsuario } from "../Context/UserContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snackbars = () => {
  const {
    invalidEmail,
    disabled,
    wrongCred,
    usedMail,
    badFormat,
    weakPassword,
    sent,
    handleClose,
  } = useUsuario();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Snackbar
        open={invalidEmail}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error">No es una direccion de Correo</Alert>
      </Snackbar>
      <Snackbar open={disabled} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">El Email ha sido deshabilitado</Alert>
      </Snackbar>
      <Snackbar open={wrongCred} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Email o Contraseña Incorrectos</Alert>
      </Snackbar>
      <Snackbar open={usedMail} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">El Email ya esta siendo usado</Alert>
      </Snackbar>
      <Snackbar open={badFormat} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">El Email no tiene un formato valido</Alert>
      </Snackbar>
      <Snackbar
        open={weakPassword}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error">
          La contraseña debe tener al menos 6 caracteres
        </Alert>
      </Snackbar>
      <Snackbar open={sent} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success">Correo de Enviado!</Alert>
      </Snackbar>
    </div>
  );
};

export default Snackbars;
