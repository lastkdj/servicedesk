import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LightSpeed from "react-reveal/LightSpeed";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "none",

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {
      fontFamily: "Poppins, sans-serif",
      color: "white",
      margin: "0",
      display: "block",
      marginRight: "10px",
    },
    [theme.breakpoints.up("lg")]: {},
  },
}));

const HeaderLogo = () => {
  const classes = useStyles();
  return (
    <LightSpeed left>
      <h1 className={classes.logo}> Logo</h1>
    </LightSpeed>
  );
};

export default HeaderLogo;
