import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "firebase/auth";
import { withRouter } from "react-router-dom";
import useStyles from "../LoginStyles";
import CopyRight from "../CopyRight";
import "../Button.css";
import SignInForm from "../SignInForm";

const SignIn = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.animation}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon className={classes.icon} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.textcolor}>
          Inicia Sesion
        </Typography>
        <SignInForm />
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default withRouter(SignIn);
