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
import AddUser from "./UserListComponents/AddUserComponent/AddUser";
import { useMediaQuery } from "react-responsive";

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

  button: {
    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.575rem",
    },

    [theme.breakpoints.up("xl")]: {
      fontSize: "0.875rem",
    },
  },
}));

const UserList = () => {
  const [newUser, setNewUser] = React.useState(false);
  const classes = useStyles();

  const isLaptop = useMediaQuery({ query: "(max-device-width: 1280px)" });
  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });

  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid
        container
        item
        xs={12}
        style={
          isPhone
            ? { paddingTop: "15px", justifyContent: "center" }
            : { padding: "24px", justifyContent: "center" }
        }
        spacing={2}
      >
        <Grid item xs={8} sm={9} md={10} lg={10} xl={10}>
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
        <Grid
          item
          xs={4}
          sm={3}
          md={2}
          lg={2}
          xl={2}
          className={classes.button}
        >
          <Button
            startIcon={<AddCircleIcon />}
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
            className="submit"
            onClick={() => setNewUser(true)}
            style={{ fontSize: isLaptop ? "0.575rem" : "0.875rem" }}
          >
            Add New User
          </Button>
        </Grid>
        <AddUser newUser={newUser} setNewUser={setNewUser} />
        <GeneralState />
      </Grid>
    </Grid>
  );
};

export default UserList;
