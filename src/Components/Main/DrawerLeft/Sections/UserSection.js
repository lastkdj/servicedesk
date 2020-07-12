import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import PicTest from "../../../../Imagenes/avatar.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FirebaseApp from "../../../../FireBase/FireBaseConfig";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatargrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  username: {
    justifyContent: "center",
    marginTop: "16px",
  },

  jobposition: {
    margin: "0%",
    justifyContent: "center",
  },

  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: "0%",
    justifySelf: "center",
    cursor: "pointer",
    transition: "0.4s",
  },

  paper: {
    backgroundColor: "#282C34",
    color: "white",
  },

  usersection: {
    justifyContent: "center",
    padding: "16px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12);",
  },
}));

const UserSection = () => {
  const [username, setUserName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (FirebaseApp.auth().currentUser) {
        setUserName(FirebaseApp.auth().currentUser.displayName);
      }
    }, 500);
  }, []);

  const classes = useStyles();

  return (
    <Grid container className={classes.usersection}>
      <Link to="/account">
        <Grid item xs={12} className={classes.avatargrid}>
          <Avatar alt="avatar" src={PicTest} className={classes.small} />
        </Grid>
      </Link>

      <Grid item xs={12} className={classes.username}>
        <Typography
          variant="h5"
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            textTransform: "none",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "1.334",
            cursor: "pointer",
          }}
        >
          {username}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.jobposition}>
        <Typography
          style={{
            color: "#adb0bb",
            textAlign: "center",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            textTransform: "none",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "1.334",
          }}
        >
          Gerente General
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UserSection;
