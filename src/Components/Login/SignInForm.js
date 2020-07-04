import React, { useEffect } from "react";
import useStyles from "./LoginStyles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/Lock";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useUsuario } from "../Context/UserContext";
import { withRouter } from "react-router-dom";

const SignForm = (props) => {
  const classes = useStyles();
  const {
    onChangeEmail,
    onChangePassword,
    signIn,
    setOpen,
    setEmail,
    setPassword,
  } = useUsuario();

  useEffect(() => {
    setEmail("");
    setPassword("");
    setOpen(false);
  }, []);

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
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
          onChange={onChangeEmail}
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
          onChange={onChangePassword}
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
  );
};

export default withRouter(SignForm);
