import React, { useState } from "react";
import useStyles from "./LoginStyles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import ProgressBar from "./ProgressBar";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";
import FirebaseApp from "../../FireBase/FireBaseConfig";
import { useUsuario } from "../Context/UserContext";

function signupUser(userDetails) {
  const { name, lastname, email, password } = userDetails;
  return FirebaseApp.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      FirebaseApp.auth()
        .currentUser.updateProfile({ displayName: name + " " + lastname })
        .then(() => {
          FirebaseApp.firestore()
            .collection("users")
            .doc(FirebaseApp.auth().currentUser.uid)
            .set({
              firstName: name,
              lastName: lastname,
              email: email,
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    })
    .catch((error) => {
      console.log("Something went wrong with sign up: ", error);
    });
}

const SingUpForm = (props) => {
  const { setError, setOpen } = useUsuario();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const classes = useStyles();

  const userDetails = {
    name,
    lastname,
    email,
    password,
  };

  const signUp = (e) => {
    e.preventDefault();
    signupUser(userDetails);
  };

  //Metodo SignUp
  // const signUp = (e) => {
  //   setOpen(true);
  //   e.preventDefault();
  //   FirebaseApp.auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((cred) => {
  //       setOpen(false);
  //       console.log(name, lastname);
  //       console.log("Vamos bien Marditoooo");
  //       FirebaseApp.firestore()
  //         .collection("Users")
  //         .doc(cred.user.uid)
  //         .set({
  //           Name: name,
  //           LastName: lastname,
  //           Email: email,
  //           Password: password,
  //         })
  //         .then(function () {
  //           console.log("Se guardo mmgvo");
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       setError(errorCode);
  //     });
  // };

  const goLogin = () => {
    props.history.push("/");
  };

  return (
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
            onChange={(ev) => {
              setName(ev.target.value);
            }}
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
            onChange={(ev) => {
              setLastName(ev.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} className={classes.email}>
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
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            type="email"
          />
        </Grid>
        <Grid item xs={12} className={classes.passwordsignup}>
          <Tooltip placement="left-end" title="6 Caracteres minimo" arrow>
            <LockIcon className={classes.accounticon} />
          </Tooltip>
          <InputBase
            placeholder="Contraseña"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
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
  );
};

export default withRouter(SingUpForm);