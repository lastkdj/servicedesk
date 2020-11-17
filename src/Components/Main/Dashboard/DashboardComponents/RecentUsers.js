import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import useStyles from "./styles";
import FirebaseApp from "../../../../FireBase/FireBaseConfig";
import moment from "moment";

const RecentUsers = () => {
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    FirebaseApp.firestore()
      .collection("users")
      .get()
      .then((snap) => {
        const size = snap.size;
        setNewUser(size);
      });
  }, []);

  const classes = useStyles();
  return (
    <Zoom in={true} timeout={500}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ order: 2 }}>
        <Paper elevation={3} className={classes.quadrapapers}>
          <Grid item container xs={8} style={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <Typography className={classes.papertitle}>
                RECENT USERS
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography className={classes.paperinfo}>
                {newUser} Users Registered
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.icongrid}>
            <IconButton
              className={classes.iconbutton}
              style={{
                color: "white",
                backgroundColor: "#8a85ff",
              }}
            >
              <PeopleAltRoundedIcon className={classes.iconstyle} />
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
    </Zoom>
  );
};

export default RecentUsers;
