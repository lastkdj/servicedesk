import React, { useState } from "react";
import useStyles from "./LoginStyles";
import Button from "@material-ui/core/Button";
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
import moment from "moment";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function signupUser(userDetails, setError, setOpen, goLogin, hex) {
  const { name, lastname, email, password } = userDetails;

  setOpen(true);
  return FirebaseApp.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      FirebaseApp.auth()
        .currentUser.updateProfile({ displayName: name + " " + lastname })
        .then(() => {
          const utcDate = Date.now();
          const newDate = moment(utcDate).format(
            "dddd Do MMMM YYYY, h:mm:ss a"
          );
          const shortDate = moment(utcDate).format("MMMM Do YYYY");
          FirebaseApp.firestore()
            .collection("users")
            .doc(FirebaseApp.auth().currentUser.uid)
            .set({
              firstName: name.charAt(0).toUpperCase() + name.slice(1),
              lastName: lastname.charAt(0).toUpperCase() + lastname.slice(1),
              fullname: name + " " + lastname,
              email: email,
              password: password,
              joinDate: newDate,
              shortDate: shortDate,
              usercreation_timeStamp: utcDate,
              defaultAvatar: hex,
              disabled: "false",
              company: "",
              department: "",
              job: "",
              phonenumber: "",
              uid: FirebaseApp.auth().currentUser.uid,
              createdby: FirebaseApp.auth().currentUser.uid,
            });
          setOpen(false);
          goLogin();
        })
        .catch((error) => {});
    })
    .catch((error) => {
      var errorCode = error.code;
      setError(errorCode);
    });
}

const SingUpForm = (props) => {
  const { hex } = useContext(AuthContext);
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
    signupUser(userDetails, setError, setOpen, goLogin, hex);
  };

  const goLogin = () => {
    props.history.push("/");
  };

  return (
    <form className={classes.formsignup} noValidate>
      <Grid container spacing={2} justify="center">
        <Grid xs={12} sm={5} className={classes.usernamesignup}>
          <InputBase
            placeholder="Name"
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

        <Grid xs={12} sm={5} className={classes.lastname}>
          <InputBase
            placeholder="Lastname"
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

        <Grid xs={12} className={classes.email}>
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
        <Grid xs={12} className={classes.passwordsignup}>
          <Tooltip placement="left-end" title="6 Caracteres minimo" arrow>
            <LockIcon className={classes.accounticon} />
          </Tooltip>
          <InputBase
            placeholder="Password"
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
        {/* <Grid item xs={11}>
          <FormControlLabel
            control={
              <Checkbox
                value="allowExtraEmails"
                color="primary"
                className={classes.root}
              />
            }
            label="Would you like to rec"
            className={classes.texto3}
          />
        </Grid> */}
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
              Already have an account?{" "}
              <span className={classes.span}>Sign in</span>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default withRouter(SingUpForm);
