import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/Login/views/SignIn";
import SignUp from "./Components/Login/views/SignUp";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Background from "./Imagenes/background.jpg";
import PasswordReset from "./Components/Login/views/PasswordReset";
import { UserProvider } from "./Components/Context/UserContext";
import SnackBar from "./Components/Login/Snackbars";
import LinearIndeterminate from "./Components/Login/Loading";
import { AuthContext } from "./Components/Context/AuthContext";
import Main from "./Components/Main/MainView/Main";
import { DashProvider } from "./Components/Context/DashContext";

const useStyles = makeStyles((theme) => ({
  wall: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    height: "100vh",
    alignItems: "flex-start",
  },
}));

function App() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <DashProvider>
      <UserProvider>
        <Grid container className={classes.wall}>
          <Grid item xs={12}>
            <LinearIndeterminate />
          </Grid>
          {user ? (
            <Main />
          ) : (
            // <Profile />
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
    </DashProvider>
  );
}

export default App;
