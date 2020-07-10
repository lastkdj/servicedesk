import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import HeadMenu from "./HeadMenu";
import HeaderLogo from "./HeaderLogo";
import Toolbar from "@material-ui/core/Toolbar";
import MenuButton from "./Buttons/MenuButton";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#282C34",
    height: "65px",
    justifyContent: "space-between",
    boxShadow: "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
    paddingLeft: "20px",
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
  },

  logo: {
    alignItems: "center",
  },

  menu: { height: "60px" },

  toolbar: {
    "&.MuiToolbar-gutters": {
      padding: "0%",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Grid container className={classes.background}>
        <Grid item container xs={2} className={classes.logo}>
          <HeaderLogo />
          <MenuButton />
        </Grid>
        <Grid item></Grid>
        <Grid item xs={10} className={classes.menu}>
          <HeadMenu />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Header;
