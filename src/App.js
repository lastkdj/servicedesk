import React, { useContext, useState } from "react";
import { useFirebaseApp, useUser } from "reactfire";
import { Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Background from "./Imagenes/background.jpg";
import { useTransition, animated } from "react-spring";
import Profile from "./Components/Profile/Profile";
import PasswordReset from "./Components/Login/PasswordReset";

const useStyles = makeStyles((theme) => ({
  wall: {
    backgroundImage: `url(${Background})`,
    // backgroundColor: "pink",
    backgroundSize: "cover",
    height: "100vh",
    alignItems: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5D2EAB",
    width: "200px",
  },

  logOut: {
    justifyContent: "flex-start",
  },

  tittle: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function App() {
  const user = useUser();
  const classes = useStyles();
  return (
    <Grid container className={classes.wall}>
      {/* <Grid contianer xs={12} className={classes.tittle}>
        {" "}
        <h1>SERVICE DESK</h1>
      </Grid> */}
      {user ? (
        <Profile />
      ) : (
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/passwordreset" component={PasswordReset} />
          </Switch>
        </Grid>
      )}
    </Grid>
  );
}

export default App;
