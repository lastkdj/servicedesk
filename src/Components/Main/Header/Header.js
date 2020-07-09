import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import HeadMenu from "./HeadMenu";
import HeaderLogo from "./HeaderLogo";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#282C34",
    height: "60px",
    justifyContent: "space-between",
    boxShadow: " -1px 2px 2px 1px rgba(0,0,0,0.75)",
    paddingLeft: "20px",
  },

  logo: {
    alignItems: "center",
  },

  menu: { height: "60px" },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.background}>
      <Grid item container xs={2} className={classes.logo}>
        <HeaderLogo />
        {/* <MenuHamburger /> */}
      </Grid>
      <Grid item></Grid>
      <Grid item xs={10} className={classes.menu}>
        <HeadMenu />
      </Grid>
    </Grid>
  );
};

export default Header;
