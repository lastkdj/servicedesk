import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import InputBase from "@material-ui/core/InputBase";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { withRouter } from "react-router-dom";
import useStyles from "./LoginStyles";
import CopyRight from "./CopyRight";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useTransition, animated } from "react-spring";
import "./Button.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [wrongCred, setWrongCred] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const firebase = useFirebaseApp();

  const signIn = async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          setWrongCred(true);
        } else if (errorCode === "auth/user-disabled") {
          setDisabled(true);
        } else if (errorCode === "auth/invalid-email") {
          setInvalidEmail(true);
        } else console.log(error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWrongCred(false);
    setDisabled(false);
    setInvalidEmail(false);
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
          Inicia Sesion
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
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </Grid>

          <Grid className={classes.password}>
            <LockIcon className={classes.accounticon} />
            <InputBase
              placeholder="Contraseña"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </Grid>
          <Grid container className={classes.iniciasesioncontainer}>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  className={classes.textcolor}
                />
              }
              label="Remember me"
              className={classes.textcolor}
            />

            <Grid item xs={10} className={classes.iniciasesion}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={signIn}
              >
                Inicia Sesion
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.registrate}>
              <Link
                variant="body2"
                className={classes.textcolor}
                onClick={() => props.history.push("/passwordreset")}
              >
                Olvidaste la Contraseña?
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.registrate}>
              <Link
                variant="body2"
                className={classes.registrate}
                onClick={() => props.history.push("/signup")}
              >
                No tienes una cuenta?{" "}
                <span className={classes.span}>Registrate</span>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
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
    </Container>
  );
};

export default withRouter(SignIn);
