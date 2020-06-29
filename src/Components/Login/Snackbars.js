import React from "react";

const Snackbars = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [wrongCred, setWrongCred] = useState(false);
  const [usedMail, setUsedMail] = useState(false);
  const [badFormat, setBadFormat] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [sent, setSent] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWrongCred(false);
    setDisabled(false);
    setInvalidEmail(false);
    setUsedMail(false);
    setWeakPassword(false);
    setBadFormat(false);
    setCreatedAccount(false);
    setSent(false);
  };

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
      <Snackbar open={usedMail} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="error">El Email ya esta siendo usado</Alert>
      </Snackbar>
      <Snackbar open={badFormat} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="error">El Email no tiene un formato valido</Alert>
      </Snackbar>
      <Snackbar
        open={weakPassword}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="error">
          La contraseña debe tener al menos 6 caracteres
        </Alert>
      </Snackbar>
      <Snackbar
        open={createdAccount}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="success">La Cuenta ha sido Creada</Alert>
      </Snackbar>
    </div>
  );
};

export default Snackbars;
