import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { withRouter } from "react-router-dom";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import useStyles from "./LoginStyles";
import CopyRight from "./CopyRight";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ProgressBar from "./ProgressBar";
import "./Button.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [usedMail, setUsedMail] = useState(false);
  const [badFormat, setBadFormat] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [createdAccount, setCreatedAccount] = useState(false);

  const firebase = useFirebaseApp();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const signUp = async (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        alert("NO SALE EL MARDITO SNACKBAR");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          setUsedMail(true);
        } else if (errorCode === "auth/invalid-email") {
          setBadFormat(true);
        } else if (errorCode === "auth/weak-password") {
          setWeakPassword(true);
        } else console.log(error);
      });
  };

  const logOut = async () => {
    await firebase.auth().signOut();
  };

  //Snackbar close
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setUsedMail(false);
    setWeakPassword(false);
    setBadFormat(false);
    setCreatedAccount(false);
  };

  const goLogin = () => {
    props.history.push("/");
  };

  const classes = useStyles();

  console.log("render");

  return (
    <Container component="main" maxWidth="xs" className={classes.maxWidth}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.textcolor}>
          Registrate
        </Typography>
        <form className={classes.formsignup} noValidate>
          <Grid container spacing={2} justify="center">
            {/* <Grid container item xs={12} className={classes.firstlast}> */}
            <Grid item xs={12} sm={5} className={classes.usernamesignup}>
              <InputBase
                placeholder="Nombre"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                autoComplete="nombre"
                autoFocus
                className={classes.placeholder}
                onChange={(ev) => setName(ev.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={5} className={classes.lastname}>
              <InputBase
                placeholder="Apellido"
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="apellido"
                autoFocus
                className={classes.placeholder}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </Grid>
            {/* </Grid> */}
            <Grid
              item
              xs={12}
              className={!usedMail ? classes.email : classes.emailerror}
            >
              <AccountCircleIcon className={classes.accounticon} />
              <InputBase
                placeholder="Email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
              />
            </Grid>
            <Grid item xs={12} className={classes.passwordsignup}>
              <LockIcon className={classes.accounticon} />
              <InputBase
                placeholder="Contraseña"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Grid>
            <ProgressBar password={password} />
            <Grid item xs={11}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    className={classes.textcolor}
                  />
                }
                label="Quiero recibir promociones y actualizaciones a traves de este email."
                className={classes.texto3}
              />
            </Grid>
            <Grid container item xs={11} justify="center">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={signUp}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Link
                  variant="body2"
                  className={classes.registrate}
                  onClick={goLogin}
                >
                  Ya tienes una cuenta?{" "}
                  <span className={classes.span}>Sign in</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
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
    </Container>
  );
};

export default withRouter(SignUp);
