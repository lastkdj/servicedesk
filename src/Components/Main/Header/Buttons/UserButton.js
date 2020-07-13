import React, { useState, useEffect } from "react";
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
import { useAccount } from "../../../Context/AccountContext";

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
  },

  paper: {
    backgroundColor: "#282C34",
    color: "white",
  },
}));

const UserButton = (props) => {
  const { state } = useAccount();
  const { picture } = state;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pic, setPic] = useState({});
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

  const docRef = FirebaseApp.firestore()
    .collection("users")
    .doc(FirebaseApp.auth().currentUser.uid);

  useEffect(() => {
    setPic(picture);
  }, [picture]);

  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <Button onClick={handleClick}>
        <Grid item className={classes.avatargrid}>
          <Avatar alt="avatar" src={pic.photoUrl} className={classes.small} />
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
            {props.username}
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>

          <MenuItem>
            {" "}
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "white" }}
            >
              My account
            </Link>
          </MenuItem>

          <MenuItem onClick={onClicky}>Logout</MenuItem>
        </Menu>
      </Grid>
    </div>
  );
};

export default withRouter(UserButton);
