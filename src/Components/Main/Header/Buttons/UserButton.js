import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FirebaseApp from "../../../../FireBase/FireBaseConfig";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { deepPurple } from "@material-ui/core/colors";
import { AuthContext } from "../../../Context/AuthContext";

const useStyles = makeStyles((theme) => ({
  avatargrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: "10px",
  },

  username: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },

    [theme.breakpoints.up("lg")]: {},
  },

  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: "0%",
    marginRight: "10px",
    justifySelf: "center",
    color: theme.palette.getContrastText(deepPurple[500]),
  },

  paper: {
    backgroundColor: "#282C34",
    color: "white",
  },

  initials: { fontSize: "0.6em", fontWeight: "600" },
}));

const UserButton = (props) => {
  const { data, hex } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClicky = () => {
    FirebaseApp.auth().signOut();
    props.history.push("/");
  };

  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <Button onClick={handleClick}>
        <Grid item className={classes.avatargrid}>
          <Avatar
            alt="avatar"
            src={data.photoUrl}
            className={classes.small}
            style={{ backgroundColor: `${data.defaultAvatar}` }}
          >
            <Typography className={classes.initials}>
              {data.firstName && data.lastName
                ? data.firstName.charAt(0) + data.lastName.charAt(0)
                : null}
            </Typography>
          </Avatar>
        </Grid>

        <Grid item className={classes.username}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              textTransform: "none",
            }}
          >
            {data.firstName === undefined || data.lastName === undefined
              ? " "
              : data.firstName + " " + data.lastName}
          </p>
        </Grid>
      </Button>
      <Grid>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          classes={{ paper: classes.paper }}
        >
          <Link
            to="/account"
            style={{ textDecoration: "none", color: "white" }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>

          <MenuItem>My account</MenuItem>

          <MenuItem onClick={onClicky}>Logout</MenuItem>
        </Menu>
      </Grid>
    </div>
  );
};

export default withRouter(UserButton);
