import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./Account.css";
import AppBarComponent from "./AccountComponents/AppBarComponent";
import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "24px 0px",
    justifyContent: "center",
  },

  temporalback: {
    width: "1280",
    height: "700px",
    backgroundColor: "#1c2025",
    margin: " 0px 192px",
  },

  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },

  breadtext: {
    color: "white",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },

  breadtextbefore: {
    color: "#adb0bb",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textDecoration: "none",
  },

  settings: {
    fontSize: "1.5em",
    fontWeight: "500",
    marginBottom: "25px",
  },

  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
  },
}));

const Account = () => {
  const classes = useStyles();

  console.log("render papa");
  return (
    <Zoom left>
      <Grid container className={classes.background}>
        <Grid item xs={12} className={classes.temporalback}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" style={{ color: "#adb0bb" }} />
            }
            aria-label="breadcrumb"
          >
            <Link
              href="/getting-started/installation/"
              className={classes.breadtextbefore}
            >
              Profile
            </Link>
            <Typography className={classes.breadtext}>
              Account Details
            </Typography>
          </Breadcrumbs>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.settings}>
              Settings
            </Typography>
          </Grid>
          <AppBarComponent />
        </Grid>
      </Grid>
    </Zoom>
  );
};

export default Account;
