import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  animation: {
    animation: "fadeIn ease .2s",
  },

  flex: {
    display: "flex",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#5D2EAB",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  formsignup: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    justifyContent: "center",
  },

  submit: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: "#5D2EAB",
    height: "40px",
    transition: "all .1s ease",
  },

  papercontainer: {
    paddinLeft: "20px",
    paddinRight: "20px",
  },

  icon: {
    fontSize: "20px",
  },

  textcolor: {
    color: "white",
    cursor: "pointer",
    justifySelf: "center",
    textAlign: "center",
  },

  texto2: {
    color: "white",
    textAlign: "center",
    marginTop: "0",
  },

  texto3: {
    color: "white",
    textAlign: "center",
    fontSize: "0.6em",
  },

  iniciasesioncontainer: {
    justifyContent: "center",
  },

  iniciasesion: {
    marginTop: "0px",
    marginBottom: "10px",
  },

  registrate: {
    alignSelf: "center",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
  },

  span: {
    color: "#FFD100",
  },

  password: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "white",
    margin: "20px 30px",
    borderRadius: "7px",
  },

  passwordsignup: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "white",
    margin: "10px 30px",
    borderRadius: "7px",
  },

  linear: {
    width: "100%",
  },

  accounticon: {
    fontSize: "2em",
    alignSelf: "center",
    color: "#8458CB",
    marginRight: "10px",
    marginLeft: "10px",
  },

  username: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "white",
    margin: "20px 30px",
    borderRadius: "7px",
    width: "auto",
  },

  between: {
    justifyContent: "space-between",
  },

  usernamesignup: {
    display: "flex",
    height: "50px",
    backgroundColor: "white",
    borderRadius: "7px",
    margin: "10px 30px",

    [theme.breakpoints.up("sm")]: {
      margin: "0px 10px 10px 0px",
    },

    [theme.breakpoints.up("lg")]: {},
  },

  lastname: {
    display: "flex",
    height: "50px",
    backgroundColor: "white",
    borderRadius: "7px",
    margin: "10px 30px",

    [theme.breakpoints.up("sm")]: {
      margin: "0px 0px 0px 10px",
    },

    [theme.breakpoints.up("lg")]: {},
  },

  usernameerror: {
    display: "flex",
    height: "50px",
    backgroundColor: "#FF9A94",
    borderRadius: "7px",
    marginLeft: "5px",
  },

  iconalign: {
    alignSelf: "center",
  },

  email: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "white",
    margin: "10px 30px",
    borderRadius: "7px",
  },

  emailerror: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "white",
    margin: "10px 30px",
    borderRadius: "7px",
  },

  maxWidth: {
    maxWidth: "500px",
    animation: "fadeIn ease 0.2s",
  },

  firstlast: {
    justifyContent: "space-around",
  },

  placeholder: {
    marginLeft: "30px",
  },

  emailpassword: {
    margin: "20px 30px",
    display: "flex",
    height: "50px",
    backgroundColor: "white",
    borderRadius: "7px",
  },
}));

export default useStyles;
