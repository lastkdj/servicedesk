import React from "react";
import { Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Background from "./Imagenes/background.jpg";
import Profile from "./Components/Profile/Profile";
import PasswordReset from "./Components/Login/PasswordReset";
import { UserProvider } from "./Components/Context/UserContext";
import { useUser } from "reactfire";
import SnackBar from "./Components/Login/Snackbars";
import LinearIndeterminate from "./Components/Login/Loading";

const useStyles = makeStyles((theme) => ({
  wall: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    height: "100vh",
    alignItems: "flex-start",
  },
}));

function App() {
  const user = useUser();
  const classes = useStyles();
  console.log("render de arriba marico");
  return (
    <UserProvider>
      <Grid container className={classes.wall}>
        <Grid item xs={12}>
          <LinearIndeterminate />
        </Grid>
        {user ? (
          <Profile />
        ) : (
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/passwordreset" component={PasswordReset} />
            </Switch>
            <SnackBar />
          </Grid>
        )}
      </Grid>
    </UserProvider>
  );
}

export default App;
