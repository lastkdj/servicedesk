import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FirebaseApp from "../../../FireBase/FireBaseConfig";
import IconButton from "@material-ui/core/IconButton";
import SearchButton from "./Buttons/SearchButton";
import UserButton from "./Buttons/UserButton";

const useStyles = makeStyles((theme) => ({
  rightmenu: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: "60px",
    paddingRight: "10px",
  },

  [theme.breakpoints.up("md")]: {},

  [theme.breakpoints.up("lg")]: {},

  icon: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1em",
    display: "flex",
  },

  root: {
    color: "white",
    fontSize: "0.5em",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const HeadMenu = () => {
  const [username, setUserName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (FirebaseApp.auth().currentUser) {
        setUserName(FirebaseApp.auth().currentUser.displayName);
      }
    }, 500);
  }, []);
  const classes = useStyles();

  return (
    <Grid container className={classes.rightmenu}>
      <SearchButton />
      <Grid item className={classes.icon}>
        <IconButton
          aria-label="upload picture"
          component="span"
          classes={{ root: classes.root }}
        >
          <SupervisorAccountOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.icon}>
        <IconButton
          aria-label="upload picture"
          component="span"
          classes={{ root: classes.root }}
        >
          <NotificationsOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.icon}>
        <IconButton
          aria-label="upload picture"
          component="span"
          classes={{ root: classes.root }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Grid>
      <UserButton username={username} />
    </Grid>
  );
};

export default HeadMenu;
