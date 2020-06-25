import React from "react";
import Grid from "@material-ui/core/Grid";
import LoginStyles from "./LoginStyles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { StylesProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import "./Login.css";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
        <Grid item xs={12} className={classes.containerTop}></Grid>
        <Grid item container xs={12} className={classes.containerMid}>
          <Grid item xs={2} className={classes.logincard}>
            Hello World
            <div className={classes.username}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Username" />
                </Grid>
              </Grid>
            </div>
            <div className={classes.password}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.containerBottom}></Grid>
      </Grid>
    </StylesProvider>
  );
};

export default Login;
