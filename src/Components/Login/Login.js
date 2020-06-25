import React from "react";
import Grid from "@material-ui/core/Grid";
import LoginStyles from "./LoginStyles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { StylesProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import "./Login.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  notched: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderStyle: "hidden",
      },
    },
  },
});

const Login = () => {
  const classes = LoginStyles();

  return (
    <StylesProvider injectFirst>
      <Grid container className={classes.container}>
        <Grid item container xs={12} className={classes.containerTop}>
          Service Desk
        </Grid>
        <Grid item container xs={12} className={classes.containerMid}>
          <Grid item xs={2} className={classes.logincard}>
            <div className={classes.username}>
              <AccountCircle className={classes.accounticon} />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <div className={classes.password}>
              <LockIcon className={classes.accounticon} />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <Divider variant="middle" />
            <div class="grid">
              <button>
                <span>Log In</span>
              </button>{" "}
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.containerBottom}></Grid>
      </Grid>
    </StylesProvider>
  );
};

export default Login;
