import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

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
  const { data } = useContext(AuthContext);

  const classes = useStyles();

  return (
    <Grid container className={classes.usersection}>
      <Link to="/account">
        <Grid item xs={12} className={classes.avatargrid}>
          <Avatar alt="avatar" src={data.photoUrl} className={classes.small} />
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
          {data.firstName === undefined || data.lastName === undefined
            ? " "
            : data.firstName + " " + data.lastName}
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
          {data.job}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UserSection;
