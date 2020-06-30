import React, { useState } from "react";
import useStyles from "./LoginStyles";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputBase from "@material-ui/core/InputBase";
import LockIcon from "@material-ui/icons/Lock";
import FormStates from "./FormStates";

const AuthMethod = () => {
  const email = FormStates("");
  const password = FormStates("");
  const classes = useStyles();

  return (
    <div>
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
          {...email}
          //   onChange={(ev) => setEmail(ev.target.value)}
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
          {...password}
          //   onChange={(ev) => setPassword(ev.target.value)}
        />
      </Grid>
    </div>
  );
};

export default AuthMethod;
