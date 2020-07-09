import React from "react";
import Header from "../Header/Header";
import Button from "@material-ui/core/Button";
import FirebaseApp from "../../../FireBase/FireBaseConfig";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import DrawerRight from "../Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#1c2025",
    position: "absolute",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid>
        <Header />
        <DrawerRight />
      </Grid>
    </div>
  );
};

export default Main;
