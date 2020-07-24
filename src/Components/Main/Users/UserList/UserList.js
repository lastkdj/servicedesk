import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GeneralState from "./UserListComponents/GeneralReducer";

const useStyles = makeStyles((theme) => ({
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
    marginBottom: "15px",
  },
}));

const UserList = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item xs={12} style={{ padding: "24px" }} spacing={2}>
        <Grid item xs={10}>
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
              Desk Management
            </Link>
            <Typography className={classes.breadtext}>Users</Typography>
          </Breadcrumbs>
          <Typography variant="h3" className={classes.settings}>
            User List
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            startIcon={<AddCircleIcon />}
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
            className="submit"
          >
            Add New User
          </Button>
        </Grid>
        <GeneralState />
      </Grid>
    </Grid>
  );
};

export default UserList;
