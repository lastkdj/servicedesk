import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./Account.css";
import AppBarComponent from "./AccountComponents/AppBarComponent";
import Zoom from "react-reveal/Zoom";
import useStyles from "./AccountStyles";

const Account = () => {
  const classes = useStyles();

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
            <Typography className={classes.breadtext}>Edit Profile</Typography>
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
