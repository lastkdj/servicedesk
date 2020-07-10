import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import Typography from "@material-ui/core/Typography";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";

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
  },

  buttonlist: {
    color: "#adb0bb",
    padding: "10px 0",
    width: "100%",
    borderRadius: "5px",
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
}));

const MenuSection = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.menusection}>
      <Grid item xs={12}>
        <Typography className={classes.menutittle}>Reports</Typography>
      </Grid>
      <Button classes={{ root: classes.buttonlist }}>
        <Grid item container xs={12} alignItems="center">
          <BarChartOutlinedIcon className={classes.menuicon} />
          <Typography className={classes.menutext}>Dashboard</Typography>
        </Grid>
      </Button>
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
        <Typography className={classes.menutittle}>Service Desk</Typography>
      </Grid>
      <Button classes={{ root: classes.buttonlist }}>
        <Grid item container xs={12} alignItems="center">
          <EmailOutlinedIcon className={classes.menuicon} />
          <Typography className={classes.menutext}>Tickets</Typography>
        </Grid>
      </Button>
      <Button
        classes={{
          root: classes.buttonlist,
        }}
      >
        <Grid item container xs={12} alignItems="center">
          <PeopleAltOutlinedIcon className={classes.menuicon} />
          <Typography className={classes.menutext}>Users</Typography>
        </Grid>
      </Button>
      <Divider />
      <Grid item xs={12}>
        <Typography className={classes.menutittle}>Inventory</Typography>
      </Grid>
      <Button classes={{ root: classes.buttonlist }}>
        <Grid item container xs={12} alignItems="center">
          <ComputerOutlinedIcon className={classes.menuicon} />
          <Typography className={classes.menutext}>Notebooks</Typography>
        </Grid>
      </Button>

      <Button
        classes={{
          root: classes.buttonlist,
        }}
      >
        <Grid item container xs={12} alignItems="center">
          <PhoneAndroidOutlinedIcon className={classes.menuicon} />
          <Typography className={classes.menutext}>Cellphones</Typography>
        </Grid>
      </Button>
    </Grid>
  );
};

export default MenuSection;
