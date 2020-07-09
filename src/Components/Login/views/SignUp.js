import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import "firebase/auth";
import useStyles from "../LoginStyles";
import CopyRight from "../CopyRight";
import "../Button.css";
import SingUpForm from "../SignUpForm";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.maxWidth}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.textcolor}>
          Registrate
        </Typography>
        <SingUpForm />
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default withRouter(SignUp);
