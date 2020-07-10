import React from "react";
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import DrawerRight from "../DrawerRight/DrawerRight";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import Bounce from "react-reveal/Bounce";
// import Account from "../";

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
        <Bounce right>
          <DrawerLeft />
        </Bounce>
        {/* <Account /> */}
      </Grid>
    </div>
  );
};

export default Main;
