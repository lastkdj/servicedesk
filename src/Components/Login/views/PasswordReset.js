import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputBase from "@material-ui/core/InputBase";
import "firebase/auth";
import { withRouter } from "react-router-dom";
import useStyles from "../LoginStyles";
import CopyRight from "../CopyRight";
import Link from "@material-ui/core/Link";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "../Button.css";
import FirebaseApp from "../../../FireBase/FireBaseConfig";

const PasswordReset = (props) => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  //Metodo Send Mail, Password Reset
  const sendMail = (e) => {
    e.preventDefault();
    FirebaseApp.auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        setOpen(true);
      })
      .catch(function (error) {
        console.log("No se Pudo enviar el mensaje");
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.animation}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon className={classes.icon} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.textcolor}>
          Ingresa tu Email
        </Typography>
        <form className={classes.form} noValidate>
          <Grid className={classes.username}>
            <AccountCircleIcon className={classes.accounticon} />

            <InputBase
              placeholder="Email"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
            />
          </Grid>
          <Grid container className={classes.iniciasesioncontainer}>
            <p className={classes.texto2}>
              Se enviara un correo para restablecer la contraseña
            </p>
            <Grid item xs={10} className={classes.iniciasesion}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={sendMail}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Link
                variant="body2"
                className={classes.textcolor}
                onClick={() => props.history.push("/")}
              >
                Volver
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="success">Correo de Enviado!</Alert>
      </Snackbar>
    </Container>
  );
};

export default withRouter(PasswordReset);
