import React from "react";
import Button from "@material-ui/core/Button";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  papermenu: {
    backgroundColor: "#282C34",
    color: "white",
  },

  gridpadding: {
    padding: "10px 20px 0px 30px",
    justifyContent: "flex-end",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "10px 20px 0px 30px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "40px 20px 0px 30px",
    },
  },

  datefilterstyle: {
    fontSize: "0.6em",
    fontWeight: "500",
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.6em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1em",
    },
  },

  iconstyle: {
    fontSize: "1em",
    width: "1.1em",
    height: "1.1em",
    marginLeft: "10px",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "1.1em",
      height: "1.1em",
    },
    [theme.breakpoints.up("xl")]: {
      width: "1.5em",
      height: "1.5em",
    },
  },
}));

const ShowDate = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item container xs={2} className={classes.gridpadding}>
      <Button
        onClick={handleClick}
        style={{
          color: "#fff",
        }}
      >
        <Typography className={classes.datefilterstyle}>Last Month</Typography>
        <CalendarTodayIcon className={classes.iconstyle} />
      </Button>
      <Grid>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          classes={{ paper: classes.papermenu }}
        >
          <MenuItem>Yesterday</MenuItem>
          <MenuItem>Last Month</MenuItem>
          <MenuItem>Last year</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default ShowDate;
