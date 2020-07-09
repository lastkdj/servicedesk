import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  logo: {
    fontFamily: "Poppins, sans-serif",
    color: "white",
    margin: "0",
  },
}));

const HeaderLogo = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.logo}> Logo</h1>
    </div>
  );
};

export default HeaderLogo;
