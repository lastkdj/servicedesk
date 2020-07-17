import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import Typography from "@material-ui/core/Typography";
import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";
import "./MuiAccordion.css";
import Hardware from "./MenuItems/Hardware";
import Software from "./MenuItems/Software";
import Users from "./MenuItems/Users";
import Tickets from "./MenuItems/Tickets";
import Organization from "./MenuItems/Organization";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menusection: {
    justifyContent: "center",
    padding: "16px",
    color: "#adb0bb",
  },

  menuicon: {
    margin: "0 10px",
  },

  menutittle: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "1.334",
    margin: "15px 0px",
  },

  menutext: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "1.334",
    display: "flex",
    alignItems: "center",
  },

  menutexthardware: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "1.334",
    display: "flex",
    alignItems: "center",
    marginRight: "80px",
  },

  buttonlist: {
    color: "#adb0bb",
    padding: "10px 0",
    width: "100%",
    borderRadius: "5px",
    margin: "0",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:focus": {
      color: "#8A85FF",
    },
    "&:active .MuiTypography-root": {
      color: "#8A85FF",
    },

    "&:active .MuiSvgIcon-root": {
      color: "#8A85FF",
    },
  },

  buttonhardware: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#adb0bb",
    padding: "10px 0",
    width: "100%",
    borderRadius: "5px",
    margin: "0",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:focus": {
      color: "#8A85FF",
    },
    "&:active .MuiTypography-root": {
      color: "#8A85FF",
    },

    "&:active .MuiSvgIcon-root": {
      color: "#8A85FF",
    },
  },

  acordionroot: {
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: "0",
    "&.MuiAccordion-root:before": {
      display: "none",
    },
    "&.MuiAccordion-root.Mui-expanded": {
      margin: "0",
    },
  },

  root: {
    margin: "0px",
    width: "100%",
    padding: theme.spacing(0),
    "&.MuiAccordionSummary-root": {
      minHeight: "0",
    },
  },
}));

const MenuSection = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.menusection}>
      <Grid item xs={12}>
        <Typography className={classes.menutittle}>Reports</Typography>
      </Grid>
      <Link
        to="/dashboard"
        style={{
          textDecoration: "none",
          color: "white",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Button classes={{ root: classes.buttonlist }}>
          <Grid item container xs={12} alignItems="center">
            <BarChartOutlinedIcon className={classes.menuicon} />
            <Typography className={classes.menutext}>Dashboard</Typography>
          </Grid>
        </Button>{" "}
      </Link>
      <Button
        classes={{
          root: classes.buttonlist,
        }}
      >
        <Grid item container xs={12} alignItems="center">
          <VerticalSplitOutlinedIcon className={classes.menuicon} />
          <Typography className={classes.menutext}>Feed</Typography>
        </Grid>
      </Button>
      <Divider />
      <Grid item xs={12}>
        <Typography className={classes.menutittle}>Desk Management</Typography>
      </Grid>
      <Tickets />
      <Users />
      <Organization />
      <Divider />
      <Grid item xs={12}>
        <Typography className={classes.menutittle}>Inventory</Typography>
      </Grid>
      <Software />
      <Hardware />
    </Grid>
  );
};

export default MenuSection;
