import React from "react";
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import DrawerRight from "../DrawerRight/DrawerRight";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import Bounce from "react-reveal/Bounce";
import Content from "../Content/Content";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "1650px",
    backgroundColor: "#1c2025",
    position: "absolute",

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "1200px",
      backgroundColor: "#1c2025",
      position: "absolute",
    },

    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "100%",
      backgroundColor: "#1c2025",
      position: "absolute",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "100%",
      backgroundColor: "#1c2025",
      position: "absolute",
    },
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <DrawerRight />
      <DrawerLeft />
      <Content />
    </div>
  );
};

export default Main;
