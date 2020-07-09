import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { useDash } from "../../Context/DashContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseDrawer from "./CloseDrawer";
import "fontsource-roboto";

const drawerWidth = 450;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    background: "#282C34",
  },

  papergrid: {
    padding: "10px 30px",
  },

  gridspacing: {
    margin: "10px 0px",
  },

  gridOnespacing: {
    margin: "10px 0px",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttongrid: {
    justifyContent: "flex-end",
    margin: "10px 0px",
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },

  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#8A85FF",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },
    },
  },

  label: {
    color: "gray",
  },
}));

const DrawerRight = () => {
  const { open, setOpen } = useDash();
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className="classes.drawer"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      open={open}
      onClose={toggleDrawer}
    >
      <Grid container className={classes.papergrid}>
        <Grid item container xs={12} className={classes.gridOnespacing}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              fontWeight: 500,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.2em",
            }}
          >
            Search
          </Typography>
          <CloseDrawer />
        </Grid>
        <Grid item xs={12} className={classes.gridspacing}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className={classes.root}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
          />
        </Grid>
        <Grid container item xs={12} className={classes.buttongrid}>
          <Button variant="contained" classes={{ root: classes.button }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default DrawerRight;
